/* DAEU B — Mathématiques : logique de l’application.
   Aucun contenu pédagogique ici : tout vient des fichiers de data/. */
"use strict";

const STORE_KEY = "daeu-b-maths-v1";
const LETTERS = ["A", "B", "C", "D", "E"];
const LEVELS = { 1: "Bases", 2: "Intermédiaire", 3: "Niveau examen" };
const MASTERY_MIN = 3;
const MASTERY_RATE = 0.8;
const HISTORY_MAX = 20;

/* ================= Stockage ================= */

function emptyState() {
  return { answers: {}, read: {}, mastered: {}, exos: {}, exams: [], streak: 0, includeOptional: false };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return Object.assign(emptyState(), JSON.parse(raw));
  } catch (e) { /* stockage indisponible ou illisible : on repart de zéro */ }
  return emptyState();
}

function saveState() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { /* stockage indisponible */ }
}

let S = loadState();

/* ================= Utilitaires ================= */

function hash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = (Math.imul(h, 33) + str.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" };
function esc(s) { return String(s).replace(/[&<>"']/g, c => ESC[c]); }

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pct(x) { return x == null ? "—" : Math.round(x * 100) + " %"; }
function num(x) { return String(Math.round(x * 10) / 10).replace(".", ","); }
function sameSet(a, b) { return a.length === b.length && a.every(x => b.includes(x)); }
function fmtDate(t) {
  const d = new Date(t);
  return d.toLocaleDateString("fr-FR") + " " + d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}
function clock(ms) {
  const s = Math.ceil(ms / 1000), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
  const mm = String(m).padStart(2, "0"), ss = String(r).padStart(2, "0");
  return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}
function bar(ratio, cls) {
  const w = Math.max(0, Math.min(1, ratio || 0)) * 100;
  return `<div class="bar ${cls || ""}"><span style="width:${w.toFixed(1)}%"></span></div>`;
}

/* Les formules sont écrites en LaTeX entre $…$ et rendues par KaTeX (lib/katex) après chaque affichage.
   Seule syntaxe propre à l’application, pour les tableaux :
   @table{a | b | c // d | e | f}  (lignes séparées par //, cellules par |, première colonne en en-tête) */
function tables(s) {
  let out = "", i = 0, start;
  while ((start = s.indexOf("@table{", i)) >= 0) {
    let depth = 0, j = start + 6;
    for (; j < s.length; j++) {
      if (s[j] === "{") depth++;
      else if (s[j] === "}" && --depth === 0) break;
    }
    const rows = s.slice(start + 7, j).split("//").map(r => r.split("|").map(c => c.trim()));
    out += s.slice(i, start) + "<span class=\"mtable-wrap\"><table class=\"mtable\">" +
      rows.map(r => "<tr>" + r.map((c, k) => k === 0 ? `<th>${c}</th>` : `<td>${c}</td>`).join("") + "</tr>").join("") +
      "</table></span>";
    i = j + 1;
  }
  return out + s.slice(i);
}

// Texte venant des questions et exercices : toujours échappé.
function txt(s) { return tables(esc(s)).replace(/\n/g, "<br>"); }
// Texte des cours : HTML de confiance (balises <b>), sans échappement.
function rich(s) { return tables(String(s)).replace(/\n/g, "<br>"); }

// Rendu LaTeX d’une zone de la page ; sans KaTeX, les formules restent lisibles en source.
function renderMath(el) {
  if (typeof renderMathInElement !== "function") return;
  try {
    renderMathInElement(el, {
      delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }],
      throwOnError: false,
      strict: "ignore"
    });
  } catch (e) { /* une formule invalide ne doit pas bloquer l’application */ }
}

/* ================= Données indexées ================= */

const OBJ = {};
OBJECTIVES.forEach(o => { OBJ[o.id] = o; });
const DOM = {};
DOMAINS.forEach(d => { DOM[d.id] = d; });

const Q = QUESTIONS.map((q, i) => Object.assign({}, q, {
  i,
  id: "q" + hash(q.q),
  cs: Array.isArray(q.c) ? q.c : [q.c],
  multi: Array.isArray(q.c),
  n: q.n || 2
}));
const QBYO = {};
Q.forEach(q => { (QBYO[q.o] = QBYO[q.o] || []).push(q); });

COURSES.forEach((c, i) => { c.id = "c" + hash(c.title); c.num = i + 1; });
const SYNTH = typeof EXERCISES !== "undefined" ? EXERCISES : [];
const SUJETS = typeof MOCK_EXAMS !== "undefined" ? MOCK_EXAMS : [];

function coursesFor(oid) { return COURSES.filter(c => c.o.includes(oid)); }
function courseById(id) { return COURSES.find(c => c.id === id); }
function modNum(n) { return "Module " + String(n).padStart(2, "0"); }
function optTag() { return "<span class=\"tag opt\">Facultatif</span>"; }

function objStats(oid) {
  const qs = QBYO[oid] || [];
  let seen = 0, ok = 0;
  qs.forEach(q => {
    const a = S.answers[q.id];
    if (a) { seen++; if (a.ok) ok++; }
  });
  const read = coursesFor(oid).some(c => S.read[c.id]);
  const computed = seen >= MASTERY_MIN && ok / seen >= MASTERY_RATE;
  const mastered = computed || !!S.mastered[oid];
  const status = mastered ? "done" : (seen || read) ? "doing" : "todo";
  return { total: qs.length, seen, ok, acc: seen ? ok / seen : null, read, mastered, status };
}

const STATUS_LABEL = { todo: "À découvrir", doing: "En cours", done: "Maîtrisé" };
function statusPill(st) { return `<span class="pill st-${st}">${STATUS_LABEL[st]}</span>`; }

function answeredStats(filterFn) {
  let seen = 0, ok = 0;
  Q.forEach(q => {
    if (filterFn && !filterFn(q)) return;
    const a = S.answers[q.id];
    if (a) { seen++; if (a.ok) ok++; }
  });
  return { seen, ok, acc: seen ? ok / seen : null };
}

function recordAnswer(q, ok) {
  S.answers[q.id] = { ok, t: Date.now() };
}

/* ================= Navigation ================= */

const view = { tab: "programme", course: null, exo: null, exoOpen: {}, exoGrades: {} };

function go(tab, opts) {
  view.tab = tab;
  if (opts && "course" in opts) view.course = opts.course;
  if (opts && "exo" in opts) view.exo = opts.exo;
  render();
  const nav = document.querySelector(".tabs-wrap");
  const top = nav ? nav.offsetTop : 0;
  if (window.scrollY > top) window.scrollTo(0, top);
}

function render() {
  document.querySelectorAll(".tab").forEach(b => {
    b.setAttribute("aria-selected", b.dataset.tab === view.tab ? "true" : "false");
  });
  const views = { programme: viewProgramme, cours: viewCours, entrainement: viewPractice, examen: viewExam, progression: viewProgress };
  const app = document.getElementById("app");
  app.innerHTML = views[view.tab]();
  renderMath(app);
}

/* ================= Onglet Programme ================= */

function viewProgramme() {
  const stats = {};
  OBJECTIVES.forEach(o => { stats[o.id] = objStats(o.id); });
  const done = OBJECTIVES.filter(o => stats[o.id].mastered).length;

  let h = `<div class="panel">
    <div class="row-between"><h2>Programme de mathématiques du DAEU B</h2>
    <span><b>${done}</b> / ${OBJECTIVES.length} objectifs maîtrisés</span></div>
    <div style="margin-top:12px">${bar(done / OBJECTIVES.length, "good")}</div>
    <p class="muted small" style="margin:10px 0 0">Un objectif est « Maîtrisé » avec au moins ${Math.round(MASTERY_RATE * 100)} % de bonnes réponses sur au moins ${MASTERY_MIN} questions, ou si vous cochez « Je maîtrise ».</p>
  </div>`;

  DOMAINS.forEach(d => {
    h += `<section class="dom"><div class="dom-head">
      <span class="dom-num">Chapitre ${d.id}</span><h2>${esc(d.name)}</h2>
      <span class="weight">${d.weight} %</span>${d.optional ? optTag() : ""}</div>`;
    OBJECTIVES.filter(o => o.d === d.id).forEach(o => {
      const st = stats[o.id];
      const links = coursesFor(o.id).map(c =>
        `<button type="button" class="link" data-act="open-course" data-id="${c.id}">${modNum(c.num)} · ${esc(c.title)}</button>`).join(", ");
      h += `<article class="card obj">
        <div class="obj-head"><span class="obj-id">${esc(o.id)}</span><h3>${esc(o.title)} ${o.optional ? optTag() : ""}</h3>${statusPill(st.status)}</div>
        <ul class="notions">${o.notions.map(n => `<li>${esc(n)}</li>`).join("")}</ul>
        <div class="obj-foot">
          <div class="grow">Cours : ${links || "<span class=\"muted\">—</span>"}<br>
            <span class="muted">Précision : ${pct(st.acc)} · ${st.seen} / ${st.total} questions vues</span></div>
          <label class="check"><input type="checkbox" data-act="master" data-o="${o.id}" ${S.mastered[o.id] ? "checked" : ""}> Je maîtrise</label>
          <button type="button" class="btn small" data-act="train" data-o="${o.id}">S’entraîner</button>
        </div>
      </article>`;
    });
    h += "</section>";
  });
  return h;
}

/* ================= Onglet Cours ================= */

function viewCours() {
  if (view.exo) return viewSynth();
  if (view.course) return viewCourse(courseById(view.course));

  let h = "";
  DOMAINS.forEach(d => {
    const list = COURSES.filter(c => c.d === d.id);
    const synth = SYNTH.filter(x => x.d === d.id);
    h += `<section class="dom"><div class="dom-head">
      <span class="dom-num">Chapitre ${d.id}</span><h2>${esc(d.name)}</h2>
      <span class="weight">${d.weight} %</span>${d.optional ? optTag() : ""}</div><div class="course-grid">`;
    list.forEach(c => {
      h += `<button type="button" class="ccard" data-act="open-course" data-id="${c.id}">
        <span class="cnum"><span>${modNum(c.num)}</span>${S.read[c.id] ? "<span class=\"tag read\">LU</span>" : ""}</span>
        <span class="ctitle">${esc(c.title)}</span>
        <span class="csum">${rich(c.summary)}</span>
        <span class="cobj">${c.o.map(esc).join(" · ")}</span>
      </button>`;
    });
    synth.forEach(x => {
      const res = S.exos[x.id];
      h += `<button type="button" class="ccard synth" data-act="open-exo" data-id="${esc(x.id)}">
        <span class="cnum"><span>Contrôle récapitulatif</span>${res ? `<span class="tag read">${num(res.score)} / ${res.max}</span>` : ""}</span>
        <span class="ctitle">${esc(x.title)}</span>
        <span class="csum">Exercice rédigé avec correction détaillée et barème.</span>
        <span class="cobj">${x.o.map(esc).join(" · ")}</span>
      </button>`;
    });
    h += "</div></section>";
  });
  return h;
}

function sectionHtml(s) {
  let h = `<section class="csec ${s.kind ? "k-" + s.kind : ""}"><h3>${rich(s.h)}${s.extra ? " <span class=\"tag extra\">Hors programme</span>" : ""}</h3>`;
  if (s.p) h += `<div class="para">${rich(s.p)}</div>`;
  if (s.points) h += "<ul>" + s.points.map(p => `<li>${rich(p)}</li>`).join("") + "</ul>";
  if (s.steps) h += "<ol class=\"steps\">" + s.steps.map(p => `<li>${rich(p)}</li>`).join("") + "</ol>";
  if (s.solution) h += "<details class=\"sol\"><summary>Voir la solution</summary><ol class=\"steps\">" +
    s.solution.map(p => `<li>${rich(p)}</li>`).join("") + "</ol></details>";
  return h + "</section>";
}

function viewCourse(c) {
  if (!c) { view.course = null; return viewCours(); }
  if (!S.read[c.id]) { S.read[c.id] = true; saveState(); }
  const d = DOM[c.d];
  const next = COURSES[c.num]; // num commence à 1 : c’est donc le module suivant
  let h = `<div class="btn-row" style="margin:0 0 16px"><button type="button" class="btn ghost small" data-act="courses">← Tous les cours</button></div>
    <div class="course-head">
      <span class="dom-num">${modNum(c.num)} · Chapitre ${d.id} — ${esc(d.name)}</span> ${d.optional ? optTag() : ""}
      <h2>${esc(c.title)}</h2><p class="muted" style="margin:0">${rich(c.summary)}</p>
    </div>
    <div class="recap"><h3>Objectifs du programme couverts</h3><ul>` +
    c.o.map(id => { const o = OBJ[id]; return `<li><b>${esc(o.id)} — ${esc(o.title)}</b> : ${o.notions.map(esc).join(", ")}</li>`; }).join("") +
    "</ul></div>";
  h += c.sections.map(sectionHtml).join("");
  h += `<div class="btn-row">
    <button type="button" class="btn ghost" data-act="courses">← Tous les cours</button>
    <button type="button" class="btn" data-act="train" data-o="${c.o.join(",")}">S’entraîner sur ces objectifs</button>
    ${next ? `<button type="button" class="btn ghost" data-act="open-course" data-id="${next.id}">Module suivant →</button>` : ""}
  </div>`;
  return h;
}

/* Exercices rédigés : partagé entre contrôles récapitulatifs et sujets d’examen. */
function exoQuestionsHtml(ex, prefix, mode) {
  // mode : "statement" (énoncé seul), "self" (correction à la demande), "grade" (correction visible)
  let h = ex.intro ? `<div class="exo-intro">${txt(ex.intro)}</div>` : "";
  ex.questions.forEach((q, k) => {
    const key = prefix + "-" + k;
    const g = view.exoGrades[key];
    const open = mode === "grade" || view.exoOpen[key];
    h += `<div class="exo-q"><div>${txt(q.q)} <span class="pts">(${num(q.pts)} pt${q.pts > 1 ? "s" : ""})</span></div>`;
    if (mode === "self") {
      h += `<div class="btn-row" style="margin-top:8px"><button type="button" class="btn ghost small" data-act="exo-sol" data-k="${key}">${open ? "Masquer" : "Afficher"} la correction</button></div>`;
    }
    if (open) {
      h += "<div class=\"solbox\"><b>Correction</b><ol>" + q.sol.map(s => `<li>${txt(s)}</li>`).join("") + "</ol></div>";
      h += `<div class="grade" role="group" aria-label="Auto-évaluation">
        <button type="button" class="chip g-full" aria-pressed="${g === 1}" data-act="grade" data-k="${key}" data-v="1">Juste (${num(q.pts)})</button>
        <button type="button" class="chip g-half" aria-pressed="${g === 0.5}" data-act="grade" data-k="${key}" data-v="0.5">Partiel (${num(q.pts / 2)})</button>
        <button type="button" class="chip g-zero" aria-pressed="${g === 0}" data-act="grade" data-k="${key}" data-v="0">Faux (0)</button>
      </div>`;
    }
    h += "</div>";
  });
  return h;
}

function exoScore(ex, prefix) {
  let score = 0, max = 0, graded = 0;
  ex.questions.forEach((q, k) => {
    max += q.pts;
    const g = view.exoGrades[prefix + "-" + k];
    if (g != null) { graded++; score += g * q.pts; }
  });
  return { score, max, graded, count: ex.questions.length };
}

function viewSynth() {
  const x = SYNTH.find(e => e.id === view.exo);
  if (!x) { view.exo = null; return viewCours(); }
  const d = DOM[x.d];
  const sc = exoScore(x, x.id);
  const prev = S.exos[x.id];
  let h = `<div class="btn-row" style="margin:0 0 16px"><button type="button" class="btn ghost small" data-act="courses">← Tous les cours</button></div>
    <div class="course-head"><span class="dom-num">Contrôle récapitulatif · Chapitre ${d.id} — ${esc(d.name)}</span>
    <h2>${esc(x.title)}</h2>
    <p class="muted" style="margin:0">Objectifs : ${x.o.map(id => esc(id + " " + OBJ[id].title)).join(" · ")}. Cherchez l’exercice sur papier, puis affichez la correction de chaque question et évaluez-vous.</p></div>
    ${prev ? `<div class="notice">Dernier résultat enregistré : <b>${num(prev.score)} / ${prev.max}</b> (${fmtDate(prev.t)}).</div>` : ""}
    <div class="panel">${exoQuestionsHtml(x, x.id, "self")}</div>
    <div class="score-total"><span>Auto-évaluation : <b>${num(sc.score)} / ${num(sc.max)}</b> · ${sc.graded} / ${sc.count} questions notées</span>
      <button type="button" class="btn" data-act="exo-save" ${sc.graded ? "" : "disabled"}>Enregistrer ma note</button></div>`;
  return h;
}

/* ================= Onglet Entraînement ================= */

const P = { filter: "all", obj: null, level: 0, list: [], idx: 0, perm: [], picked: [], done: false, built: false, notice: "" };

function practicePool(filter, obj, level) {
  return Q.filter(q => {
    if (obj && !obj.includes(q.o)) return false;
    if (level && q.n !== level) return false;
    const a = S.answers[q.id];
    if (filter === "new") return !a;
    if (filter === "errors") return !!a && !a.ok;
    if (filter[0] === "d") return q.d === Number(filter.slice(1));
    return true;
  });
}

function buildPractice() {
  P.list = shuffle(practicePool(P.filter, P.obj, P.level).map(q => q.i));
  P.idx = 0;
  P.built = true;
  setupQuestion();
}

function currentQ() { return P.idx < P.list.length ? Q[P.list[P.idx]] : null; }

function setupQuestion() {
  const q = currentQ();
  P.picked = [];
  P.done = false;
  P.perm = q ? shuffle(q.a.map((_, k) => k)) : [];
}

function trainOn(oids) {
  P.obj = oids;
  P.filter = "all";
  P.level = 0;
  P.notice = "";
  buildPractice();
  go("entrainement", { course: null, exo: null });
}

function pickOption(k) {
  const q = currentQ();
  if (!q || P.done || k >= P.perm.length) return;
  const orig = P.perm[k];
  if (!q.multi) { P.picked = [orig]; validatePractice(); return; }
  if (P.picked.includes(orig)) P.picked = P.picked.filter(x => x !== orig);
  else {
    P.picked.push(orig);
    if (P.picked.length > q.cs.length) P.picked.shift();
  }
  render();
}

function validatePractice() {
  const q = currentQ();
  if (!q || P.done || P.picked.length !== q.cs.length) return;
  const ok = sameSet(P.picked, q.cs);
  recordAnswer(q, ok);
  S.streak = ok ? (S.streak || 0) + 1 : 0;
  saveState();
  P.done = true;
  render();
}

function nextPractice() {
  P.notice = "";
  P.idx++;
  if (P.idx >= P.list.length) {
    buildPractice();
    if (P.list.length) P.notice = "Série terminée : les questions ont été recalculées et mélangées à nouveau.";
    return render();
  }
  setupQuestion();
  render();
}

function viewPractice() {
  if (!P.built) buildPractice();
  const all = answeredStats();
  let h = `<div class="counters">
    <div class="counter"><b>${all.seen}</b><span>questions différentes répondues</span></div>
    <div class="counter"><b>${pct(all.acc)}</b><span>précision</span></div>
    <div class="counter streak"><b>${S.streak || 0}</b><span>série de bonnes réponses</span></div>
  </div>`;

  if (P.obj) {
    h += `<div class="active-filter"><span>Objectif${P.obj.length > 1 ? "s" : ""} : <b>${P.obj.map(id => esc(id + " · " + OBJ[id].title)).join(" — ")}</b></span>
      <button type="button" class="btn ghost small" data-act="clear-obj">✕ Retirer ce filtre</button></div>`;
  }

  const filters = [["all", "Toutes"], ["new", "Jamais répondues"], ["errors", "Erreurs à revoir"]]
    .concat(DOMAINS.map(d => ["d" + d.id, "Ch. " + d.id + " · " + d.name]));
  h += "<div class=\"chips\" role=\"group\" aria-label=\"Filtres\">" + filters.map(([f, label]) =>
    `<button type="button" class="chip" data-act="filter" data-f="${f}" aria-pressed="${P.filter === f}">${esc(label)}<span class="n">${practicePool(f, P.obj, P.level).length}</span></button>`).join("") + "</div>";
  h += "<div class=\"chips\" role=\"group\" aria-label=\"Niveau\">" + [[0, "Tous niveaux"], [1, LEVELS[1]], [2, LEVELS[2]], [3, LEVELS[3]]].map(([n, label]) =>
    `<button type="button" class="chip" data-act="level" data-n="${n}" aria-pressed="${P.level === n}">${label}</button>`).join("") + "</div>";

  if (P.notice) h += `<div class="notice">${esc(P.notice)}</div>`;

  const q = currentQ();
  if (!q) {
    if (P.filter === "errors") return h + "<div class=\"notice ok\"><b>Bravo !</b> Aucune erreur à revoir avec ces filtres. Continuez sur de nouvelles questions.</div>";
    if (P.filter === "new") return h + "<div class=\"notice ok\"><b>Bravo !</b> Vous avez répondu à toutes les questions de cette sélection.</div>";
    return h + "<div class=\"notice\">Aucune question ne correspond à ces filtres.</div>";
  }

  const o = OBJ[q.o];
  h += `<article class="card qcard">
    <div class="qmeta"><span class="tag">${esc(o.id)} · ${esc(o.title)}</span>${o.optional ? optTag() : ""}
      <span class="tag lvl${q.n}">${LEVELS[q.n]}</span><span>Question ${P.idx + 1} / ${P.list.length}</span></div>
    <div class="qtext">${txt(q.q)}</div><div class="opts">`;
  P.perm.forEach((orig, k) => {
    let cls = "";
    if (P.done) {
      if (q.cs.includes(orig)) cls = "good";
      else if (P.picked.includes(orig)) cls = "bad";
    } else if (P.picked.includes(orig)) cls = "sel";
    h += `<button type="button" class="opt ${cls}" data-act="answer" data-k="${k}" ${P.done ? "disabled" : ""}>
      <span class="letter">${LETTERS[k]}</span><span class="otext">${txt(q.a[orig])}</span></button>`;
  });
  h += "</div>";

  if (P.done) {
    const ok = sameSet(P.picked, q.cs);
    const expected = P.perm.map((orig, k) => q.cs.includes(orig) ? LETTERS[k] : null).filter(Boolean).join(", ");
    h += `<div class="feedback ${ok ? "ok" : "ko"}"><h4>${ok ? "Bonne réponse" : "À revoir"}</h4>
      <div>Réponse${q.cs.length > 1 ? "s" : ""} attendue${q.cs.length > 1 ? "s" : ""} : <b>${expected}</b></div>
      <div style="margin-top:6px">${txt(q.e)}</div></div>
      <div class="btn-row"><button type="button" class="btn" data-act="next">Question suivante →</button></div>`;
  } else if (q.multi) {
    h += `<div class="btn-row"><button type="button" class="btn" data-act="validate" ${P.picked.length === q.cs.length ? "" : "disabled"}>Valider (${P.picked.length} / ${q.cs.length})</button></div>`;
  }
  h += "<p class=\"kbd-hint\">Clavier : touches A à E pour répondre, Entrée pour valider ou passer à la suite.</p></article>";
  return h;
}

/* ================= Onglet Examen blanc ================= */

let EX = null;       // examen en cours ou terminé
let timerId = null;

function qcmPlan() {
  const plan = DOMAINS.map(d => ({ d: d.id, n: d.examCount }));
  if (!S.includeOptional) {
    const target = DOMAINS.filter(d => !d.optional).sort((a, b) => b.weight - a.weight)[0];
    plan.forEach(p => {
      if (DOM[p.d].optional) { plan.find(x => x.d === target.id).n += p.n; p.n = 0; }
    });
  }
  return plan.filter(p => p.n > 0);
}

function startQcm() {
  const picked = [];
  qcmPlan().forEach(p => {
    const pool = shuffle(Q.filter(q => q.d === p.d && (S.includeOptional || !OBJ[q.o].optional)));
    picked.push(...pool.slice(0, p.n));
  });
  EX = {
    type: "qcm", phase: "run", cur: 0, marked: {}, confirming: false,
    items: shuffle(picked).map(q => ({ i: q.i, perm: shuffle(q.a.map((_, k) => k)), picked: [] })),
    end: Date.now() + EXAM_CONFIG.qcmMinutes * 60000
  };
  startTimer();
  render();
}

function startSujet(id) {
  const sujet = SUJETS.find(s => s.id === id);
  if (!sujet) return;
  view.exoGrades = {};
  EX = { type: "sujet", sujet, phase: "run", cur: 0, marked: {}, confirming: false, end: Date.now() + EXAM_CONFIG.sujetMinutes * 60000 };
  startTimer();
  render();
}

function startTimer() {
  clearInterval(timerId);
  timerId = setInterval(tick, 1000);
}

function tick() {
  if (!EX || EX.phase !== "run") return;
  const left = Math.max(0, EX.end - Date.now());
  const el = document.getElementById("timer");
  if (el) {
    el.textContent = clock(left);
    el.classList.toggle("warn", left < 5 * 60000);
  }
  if (left <= 0) finishExam(true);
}

function finishExam(timeout) {
  clearInterval(timerId);
  if (!EX) return;
  EX.timeout = !!timeout;
  EX.confirming = false;
  if (EX.type === "sujet") {
    EX.phase = "grade";
  } else {
    let correct = 0;
    EX.items.forEach(it => {
      const q = Q[it.i];
      it.ok = sameSet(it.picked, q.cs);
      if (it.ok) correct++;
      if (it.picked.length) recordAnswer(q, it.ok);
    });
    const score = Math.round(correct / EX.items.length * EXAM_CONFIG.scale * 10) / 10;
    EX.result = { correct, total: EX.items.length, score, passed: score >= EXAM_CONFIG.pass };
    pushHistory({ type: "qcm", title: "QCM chronométré", score, correct, total: EX.items.length, passed: EX.result.passed });
    EX.phase = "result";
  }
  saveState();
  if (view.tab === "examen") render();
}

function pushHistory(entry) {
  entry.date = Date.now();
  S.exams.unshift(entry);
  S.exams = S.exams.slice(0, HISTORY_MAX);
  saveState();
}

function historyTable(list) {
  if (!list.length) return "<p class=\"muted\">Aucun examen blanc passé pour l’instant.</p>";
  return `<div class="table-scroll"><table class="hist"><thead><tr><th>Date</th><th>Épreuve</th><th>Note</th><th>Bonnes réponses</th><th>Résultat</th></tr></thead><tbody>` +
    list.map(e => `<tr><td>${fmtDate(e.date)}</td><td>${esc(e.title)}</td><td><b>${num(e.score)} / ${EXAM_CONFIG.scale}</b></td>
      <td>${e.total ? e.correct + " / " + e.total : "—"}</td>
      <td><span class="verdict ${e.passed ? "pass" : "fail"}" style="margin:0">${e.passed ? "Réussi" : "Non réussi"}</span></td></tr>`).join("") +
    "</tbody></table></div>";
}

function viewExam() {
  if (EX && EX.type === "qcm") return EX.phase === "run" ? viewQcmRun() : viewQcmResult();
  if (EX && EX.type === "sujet") return EX.phase === "run" ? viewSujetRun() : viewSujetGrade();
  return viewExamHome();
}

function viewExamHome() {
  const plan = qcmPlan();
  const total = plan.reduce((s, p) => s + p.n, 0);
  let h = `<div class="notice"><b>Deux formats d’entraînement.</b> Le sujet type DAEU reproduit l’épreuve réelle (3 h, 3 exercices rédigés, correction avec barème). Le QCM chronométré vérifie rapidement l’ensemble du programme. Seuil indicatif de réussite : ${EXAM_CONFIG.pass} / ${EXAM_CONFIG.scale} ; les modalités exactes (compensation entre épreuves, calculatrice autorisée ou non) dépendent de l’université.</div>
  <div class="exam-modes">
    <div class="panel"><h3>Sujet type DAEU</h3>
      <ul class="rules">
        <li>Durée : <b>3 heures</b>, chronomètre décroissant</li>
        <li><b>3 exercices indépendants</b>, à rédiger sur papier</li>
        <li>Correction détaillée et barème à la fin : vous notez chaque question (juste, partiel, faux)</li>
        <li>Note sur ${EXAM_CONFIG.scale}, réussite à partir de ${EXAM_CONFIG.pass} / ${EXAM_CONFIG.scale}</li>
        <li>Uniquement des notions obligatoires</li>
      </ul>
      <div class="sujets">` +
    SUJETS.map(s => {
      const last = S.exams.find(e => e.type === "sujet" && e.sujet === s.id);
      return `<div class="sujet-row"><div><b>${esc(s.title)}</b><br><span class="muted">${s.exercises.map(e => esc(e.title)).join(" · ")}${last ? ` — dernière note : ${num(last.score)} / ${EXAM_CONFIG.scale}` : ""}</span></div>
        <button type="button" class="btn small" data-act="start-sujet" data-id="${esc(s.id)}">Commencer</button></div>`;
    }).join("") + `</div></div>
    <div class="panel"><h3>QCM chronométré</h3>
      <ul class="rules">
        <li><b>${total} questions</b> en <b>${EXAM_CONFIG.qcmMinutes} minutes</b></li>
        <li>Aucune correction avant la fin ; questions à marquer pour révision</li>
        <li>Note estimée sur ${EXAM_CONFIG.scale} (proportionnelle aux bonnes réponses), réussite à partir de ${EXAM_CONFIG.pass}</li>
      </ul>
      <table class="dist"><tbody>` +
    plan.map(p => `<tr><td>Ch. ${p.d} · ${esc(DOM[p.d].name)}</td><td>${p.n} q.</td></tr>`).join("") +
    `</tbody></table>
      <label class="check small"><input type="checkbox" data-act="opt-toggle" ${S.includeOptional ? "checked" : ""}> Inclure les notions facultatives (trigonométrie, nombres complexes)</label>
      <div class="btn-row" style="margin-top:auto;padding-top:14px"><button type="button" class="btn" data-act="start-qcm">Commencer le QCM</button></div>
    </div>
  </div>
  <div class="panel" style="margin-top:20px"><h3 style="margin-bottom:10px">Historique des examens blancs</h3>${historyTable(S.exams)}</div>`;
  return h;
}

function examTop(label) {
  const left = Math.max(0, EX.end - Date.now());
  return `<div class="exam-top"><span id="timer" class="${left < 5 * 60000 ? "warn" : ""}" aria-live="off">${clock(left)}</span>
    <span class="small">${label}</span>
    <button type="button" class="btn small warn" data-act="exam-finish">Terminer</button></div>`;
}

function confirmBox(unanswered, marked, noun) {
  const list = arr => arr.map(n => n + 1).join(", ");
  return `<div class="notice alert confirm-box"><b>Terminer l’examen ?</b><br>
    ${unanswered ? (unanswered.length ? `${unanswered.length} question${unanswered.length > 1 ? "s" : ""} sans réponse : n° ${list(unanswered)}.<br>` : "Toutes les questions ont une réponse.<br>") : ""}
    ${marked.length ? `${marked.length} ${noun}${marked.length > 1 ? "s" : ""} marqué${noun === "question" ? "e" : ""}${marked.length > 1 ? "s" : ""} pour révision : n° ${list(marked)}.` : `Aucun${noun === "question" ? "e" : ""} ${noun} marqué${noun === "question" ? "e" : ""}.`}
    <div class="btn-row"><button type="button" class="btn ghost" data-act="exam-cancel">Revenir à l’examen</button>
    <button type="button" class="btn warn" data-act="exam-confirm">Terminer maintenant</button></div></div>`;
}

function viewQcmRun() {
  const it = EX.items[EX.cur];
  const q = Q[it.i];
  const o = OBJ[q.o];
  let h = examTop(`Question ${EX.cur + 1} / ${EX.items.length}`);
  h += "<div class=\"exam-grid\" aria-label=\"Questions\">" + EX.items.map((x, k) =>
    `<button type="button" class="gbtn ${x.picked.length ? "answered" : ""} ${EX.marked[k] ? "marked" : ""} ${k === EX.cur ? "current" : ""}" data-act="exam-goto" data-i="${k}" aria-label="Question ${k + 1}">${k + 1}</button>`).join("") + "</div>";
  h += "<div class=\"legend\"><span><i class=\"a\"></i>Répondue</span><span><i class=\"m\"></i>Marquée</span><span><i></i>Sans réponse</span></div>";
  h += `<article class="card qcard"><div class="qmeta"><span class="tag">${esc(o.id)} · ${esc(o.title)}</span>
    ${q.multi ? `<span class="tag lvl2">${q.cs.length} réponses attendues</span>` : ""}</div>
    <div class="qtext">${txt(q.q)}</div><div class="opts">` +
    it.perm.map((orig, k) => `<button type="button" class="opt ${it.picked.includes(orig) ? "sel" : ""}" data-act="exam-pick" data-k="${k}">
      <span class="letter">${LETTERS[k]}</span><span class="otext">${txt(q.a[orig])}</span></button>`).join("") + "</div></article>";
  if (EX.confirming) {
    const un = EX.items.map((x, k) => x.picked.length ? -1 : k).filter(k => k >= 0);
    const mk = Object.keys(EX.marked).filter(k => EX.marked[k]).map(Number).sort((a, b) => a - b);
    h += confirmBox(un, mk, "question");
  } else {
    h += `<div class="exam-nav"><button type="button" class="btn ghost" data-act="exam-prev" ${EX.cur ? "" : "disabled"}>← Précédente</button>
      <button type="button" class="btn ghost" data-act="exam-mark">${EX.marked[EX.cur] ? "Retirer la marque" : "Marquer pour révision"}</button>
      <button type="button" class="btn" data-act="exam-next" ${EX.cur < EX.items.length - 1 ? "" : "disabled"}>Suivante →</button></div>`;
  }
  return h;
}

function examPick(k) {
  const it = EX.items[EX.cur];
  const q = Q[it.i];
  if (k >= it.perm.length) return;
  const orig = it.perm[k];
  if (!q.multi) it.picked = it.picked[0] === orig ? [] : [orig];
  else if (it.picked.includes(orig)) it.picked = it.picked.filter(x => x !== orig);
  else {
    it.picked.push(orig);
    if (it.picked.length > q.cs.length) it.picked.shift();
  }
  render();
}

function domainBars(rows) {
  return "<div class=\"dbars\">" + rows.map(r =>
    `<div class="dbar-row"><span>${r.label}</span><b>${r.right}</b>${bar(r.ratio, r.ratio >= 0.7 ? "good" : "low")}</div>`).join("") + "</div>";
}

function viewQcmResult() {
  const r = EX.result;
  let h = `<div class="panel">${EX.timeout ? "<div class=\"notice alert\">Temps écoulé : l’examen a été terminé automatiquement.</div>" : ""}
    <p class="muted" style="margin:0 0 6px">Note estimée (proportionnelle aux bonnes réponses)</p>
    <div><span class="score-big">${num(r.score)}<small> / ${EXAM_CONFIG.scale}</small></span>
    <span class="verdict ${r.passed ? "pass" : "fail"}">${r.passed ? "Réussi" : "Non réussi"}</span></div>
    <p>${r.correct} bonnes réponses sur ${r.total}.</p></div>`;

  const rows = [];
  DOMAINS.forEach(d => {
    const its = EX.items.filter(it => Q[it.i].d === d.id);
    if (!its.length) return;
    const ok = its.filter(it => it.ok).length;
    rows.push({ label: `Ch. ${d.id} · ${esc(d.name)}`, right: `${ok} / ${its.length}`, ratio: ok / its.length });
  });
  h += `<div class="panel"><h3 style="margin-bottom:12px">Résultat par chapitre</h3>${domainBars(rows)}</div>`;

  const missed = {};
  EX.items.forEach(it => { if (!it.ok) { const o = Q[it.i].o; missed[o] = (missed[o] || 0) + 1; } });
  const missedIds = OBJECTIVES.map(o => o.id).filter(id => missed[id]);
  h += "<div class=\"panel\"><h3 style=\"margin-bottom:8px\">Objectifs à revoir</h3>";
  if (!missedIds.length) h += "<p class=\"muted\">Aucune erreur : excellent !</p>";
  else h += "<ul class=\"prio\">" + missedIds.map(id => `<li><span><b>${esc(id)}</b> · ${esc(OBJ[id].title)} <span class="muted">(${missed[id]} erreur${missed[id] > 1 ? "s" : ""})</span></span>
      <span>${coursesFor(id).map(c => `<button type="button" class="btn ghost small" data-act="open-course" data-id="${c.id}">Revoir le cours</button>`).join(" ")}</span></li>`).join("") + "</ul>";
  h += "</div>";

  const errs = EX.items.map((it, k) => ({ it, k })).filter(x => !x.it.ok);
  if (errs.length) {
    h += `<div class="panel"><details class="errors"><summary>Voir les ${errs.length} erreur${errs.length > 1 ? "s" : ""} corrigée${errs.length > 1 ? "s" : ""}</summary>`;
    errs.forEach(({ it, k }) => {
      const q = Q[it.i];
      const mine = it.perm.map((orig, j) => it.picked.includes(orig) ? LETTERS[j] : null).filter(Boolean).join(", ") || "sans réponse";
      const good = it.perm.map((orig, j) => q.cs.includes(orig) ? LETTERS[j] : null).filter(Boolean).join(", ");
      h += `<div class="err-item"><div class="qmeta"><span>Question ${k + 1}</span><span class="tag">${esc(q.o)} · ${esc(OBJ[q.o].title)}</span></div>
        <div class="qtext" style="font-size:16px">${txt(q.q)}</div><div class="opts">` +
        it.perm.map((orig, j) => {
          const cls = q.cs.includes(orig) ? "good" : it.picked.includes(orig) ? "bad" : "";
          return `<div class="opt ${cls}"><span class="letter">${LETTERS[j]}</span><span class="otext">${txt(q.a[orig])}</span></div>`;
        }).join("") +
        `</div><p style="margin:10px 0 4px">Votre réponse : <b>${mine}</b> · Correction : <b>${good}</b></p><div class="muted">${txt(q.e)}</div></div>`;
    });
    h += "</details></div>";
  }
  h += "<div class=\"btn-row\"><button type=\"button\" class=\"btn\" data-act=\"exam-home\">Retour à l’accueil des examens</button></div>";
  return h;
}

function viewSujetRun() {
  const s = EX.sujet;
  const ex = s.exercises[EX.cur];
  const pts = ex.questions.reduce((a, q) => a + q.pts, 0);
  let h = examTop(`${esc(s.title)} · Exercice ${EX.cur + 1} / ${s.exercises.length}`);
  h += "<div class=\"exam-grid\">" + s.exercises.map((e, k) =>
    `<button type="button" class="gbtn wide ${EX.marked[k] ? "marked" : ""} ${k === EX.cur ? "current" : ""}" data-act="exam-goto" data-i="${k}">Exercice ${k + 1}</button>`).join("") + "</div>";
  h += `<div class="notice small">Rédigez vos réponses sur papier. La correction et le barème s’affichent à la fin de l’épreuve.</div>
    <article class="panel"><div class="row-between" style="margin-bottom:10px"><h3>Exercice ${EX.cur + 1} — ${esc(ex.title)}</h3><span class="tag">${num(pts)} points</span></div>
    ${exoQuestionsHtml(ex, "E" + EX.cur, "statement")}</article>`;
  if (EX.confirming) {
    const mk = Object.keys(EX.marked).filter(k => EX.marked[k]).map(Number).sort((a, b) => a - b);
    h += confirmBox(null, mk, "exercice");
  } else {
    h += `<div class="exam-nav"><button type="button" class="btn ghost" data-act="exam-prev" ${EX.cur ? "" : "disabled"}>← Précédent</button>
      <button type="button" class="btn ghost" data-act="exam-mark">${EX.marked[EX.cur] ? "Retirer la marque" : "Marquer pour révision"}</button>
      <button type="button" class="btn" data-act="exam-next" ${EX.cur < s.exercises.length - 1 ? "" : "disabled"}>Suivant →</button></div>`;
  }
  return h;
}

function viewSujetGrade() {
  const s = EX.sujet;
  let total = 0, max = 0, graded = 0, count = 0;
  const per = s.exercises.map((ex, k) => {
    const sc = exoScore(ex, "E" + k);
    total += sc.score; max += sc.max; graded += sc.graded; count += sc.count;
    return sc;
  });
  const note = max ? Math.round(total / max * EXAM_CONFIG.scale * 10) / 10 : 0;

  if (EX.phase === "result") {
    const passed = note >= EXAM_CONFIG.pass;
    let h = `<div class="panel"><p class="muted" style="margin:0 0 6px">${esc(s.title)} · note d’après votre auto-évaluation</p>
      <div><span class="score-big">${num(note)}<small> / ${EXAM_CONFIG.scale}</small></span>
      <span class="verdict ${passed ? "pass" : "fail"}">${passed ? "Réussi" : "Non réussi"}</span></div></div>`;
    h += `<div class="panel"><h3 style="margin-bottom:12px">Résultat par exercice</h3>` +
      domainBars(s.exercises.map((ex, k) => ({ label: `Exercice ${k + 1} · ${esc(ex.title)}`, right: `${num(per[k].score)} / ${num(per[k].max)}`, ratio: per[k].score / per[k].max }))) + "</div>";
    const weak = [];
    s.exercises.forEach((ex, k) => { if (per[k].score / per[k].max < 0.5) ex.o.forEach(id => { if (!weak.includes(id)) weak.push(id); }); });
    h += "<div class=\"panel\"><h3 style=\"margin-bottom:8px\">Objectifs à revoir</h3>";
    h += weak.length ? "<ul class=\"prio\">" + weak.map(id => `<li><span><b>${esc(id)}</b> · ${esc(OBJ[id].title)}</span>
      <span>${coursesFor(id).map(c => `<button type="button" class="btn ghost small" data-act="open-course" data-id="${c.id}">Revoir le cours</button>`).join(" ")}
      <button type="button" class="btn small" data-act="train" data-o="${id}">S’entraîner</button></span></li>`).join("") + "</ul>"
      : "<p class=\"muted\">Tous les exercices sont réussis à au moins 50 %.</p>";
    h += "</div><div class=\"btn-row\"><button type=\"button\" class=\"btn\" data-act=\"exam-home\">Retour à l’accueil des examens</button></div>";
    return h;
  }

  let h = `${EX.timeout ? "<div class=\"notice alert\">Temps écoulé : l’épreuve est terminée.</div>" : ""}
    <div class="notice"><b>Correction de ${esc(s.title)}.</b> Comparez votre copie avec la correction et notez chaque question : juste (tous les points), partiel (la moitié) ou faux (0).</div>`;
  s.exercises.forEach((ex, k) => {
    h += `<article class="panel"><div class="row-between" style="margin-bottom:10px"><h3>Exercice ${k + 1} — ${esc(ex.title)}</h3>
      <span class="tag">${num(per[k].score)} / ${num(per[k].max)}</span></div>${exoQuestionsHtml(ex, "E" + k, "grade")}</article>`;
  });
  h += `<div class="score-total"><span>Note provisoire : <b>${num(note)} / ${EXAM_CONFIG.scale}</b> · ${graded} / ${count} questions notées</span>
    <button type="button" class="btn" data-act="sujet-save" ${graded === count ? "" : "disabled"}>Valider ma note</button></div>`;
  return h;
}

function saveSujet() {
  const s = EX.sujet;
  let total = 0, max = 0;
  s.exercises.forEach((ex, k) => { const sc = exoScore(ex, "E" + k); total += sc.score; max += sc.max; });
  const score = Math.round(total / max * EXAM_CONFIG.scale * 10) / 10;
  pushHistory({ type: "sujet", sujet: s.id, title: s.title, score, correct: null, total: null, passed: score >= EXAM_CONFIG.pass });
  EX.phase = "result";
  render();
}

/* ================= Onglet Progression ================= */

function viewProgress() {
  const stats = OBJECTIVES.map(o => Object.assign({ o }, objStats(o.id)));
  const mastered = stats.filter(s => s.mastered).length;
  const read = COURSES.filter(c => S.read[c.id]).length;
  const all = answeredStats();
  const best = S.exams.reduce((m, e) => Math.max(m, e.score), -1);

  let h = `<div class="counters four">
    <div class="counter"><b>${mastered} / ${OBJECTIVES.length}</b><span>objectifs maîtrisés</span></div>
    <div class="counter"><b>${read} / ${COURSES.length}</b><span>cours lus</span></div>
    <div class="counter"><b>${all.seen} / ${Q.length}</b><span>questions vues</span></div>
    <div class="counter"><b>${best >= 0 ? num(best) + " / " + EXAM_CONFIG.scale : "—"}</b><span>meilleur examen blanc</span></div>
  </div>`;

  h += `<div class="panel"><h3 style="margin-bottom:12px">Précision par chapitre</h3>` + domainBars(DOMAINS.map(d => {
    const st = answeredStats(q => q.d === d.id);
    return { label: `Ch. ${d.id} · ${esc(d.name)} <span class="muted small">(${st.seen} répondues)</span>`, right: pct(st.acc), ratio: st.acc || 0 };
  })) + "</div>";

  const worked = stats.filter(s => s.seen > 0 && !s.mastered).sort((a, b) => a.acc - b.acc).slice(0, 3);
  const fresh = stats.filter(s => s.status === "todo" && !s.o.optional).slice(0, 5);
  const prio = worked.concat(fresh);
  h += "<div class=\"panel\"><h3 style=\"margin-bottom:8px\">Priorité de révision</h3>";
  h += prio.length ? "<ul class=\"prio\">" + prio.map(s => `<li><span><b>${esc(s.o.id)}</b> · ${esc(s.o.title)}
      <span class="muted small">${s.seen ? `— précision ${pct(s.acc)} sur ${s.seen} question${s.seen > 1 ? "s" : ""}` : "— jamais abordé"}</span></span>
      <button type="button" class="btn small" data-act="train" data-o="${s.o.id}">S’entraîner</button></li>`).join("") + "</ul>"
    : "<p class=\"muted\">Tous les objectifs travaillés sont maîtrisés. Continuez avec les examens blancs.</p>";
  h += "</div>";

  h += `<div class="panel"><h3 style="margin-bottom:10px">Historique des examens blancs</h3>${historyTable(S.exams)}</div>`;
  return h;
}

/* ================= Événements ================= */

document.addEventListener("click", e => {
  const el = e.target.closest("[data-act]");
  if (!el || el.tagName === "INPUT") return;
  const act = el.dataset.act;
  switch (act) {
    case "tab":
      if (el.dataset.tab === "cours") { view.course = null; view.exo = null; }
      go(el.dataset.tab);
      break;
    case "open-course": go("cours", { course: el.dataset.id, exo: null }); break;
    case "courses": go("cours", { course: null, exo: null }); break;
    case "open-exo": view.exoOpen = {}; view.exoGrades = {}; go("cours", { course: null, exo: el.dataset.id }); break;
    case "train": trainOn(el.dataset.o.split(",")); break;
    case "filter": P.filter = el.dataset.f; P.notice = ""; buildPractice(); render(); break;
    case "level": P.level = Number(el.dataset.n); P.notice = ""; buildPractice(); render(); break;
    case "clear-obj": P.obj = null; P.notice = ""; buildPractice(); render(); break;
    case "answer": pickOption(Number(el.dataset.k)); break;
    case "validate": validatePractice(); break;
    case "next": nextPractice(); break;
    case "exo-sol": view.exoOpen[el.dataset.k] = !view.exoOpen[el.dataset.k]; render(); break;
    case "grade": view.exoGrades[el.dataset.k] = Number(el.dataset.v); render(); break;
    case "exo-save": {
      const x = SYNTH.find(s => s.id === view.exo);
      const sc = exoScore(x, x.id);
      S.exos[x.id] = { score: sc.score, max: sc.max, t: Date.now() };
      saveState();
      render();
      break;
    }
    case "start-qcm": startQcm(); break;
    case "start-sujet": startSujet(el.dataset.id); break;
    case "exam-goto": EX.cur = Number(el.dataset.i); EX.confirming = false; render(); break;
    case "exam-prev": if (EX.cur > 0) EX.cur--; render(); break;
    case "exam-next": EX.cur++; render(); break;
    case "exam-mark": EX.marked[EX.cur] = !EX.marked[EX.cur]; render(); break;
    case "exam-pick": examPick(Number(el.dataset.k)); break;
    case "exam-finish": EX.confirming = true; render(); break;
    case "exam-cancel": EX.confirming = false; render(); break;
    case "exam-confirm": finishExam(false); break;
    case "sujet-save": saveSujet(); break;
    case "exam-home": EX = null; view.exoGrades = {}; render(); break;
  }
});

document.addEventListener("change", e => {
  const el = e.target;
  if (el.dataset.act === "master") {
    if (el.checked) S.mastered[el.dataset.o] = true;
    else delete S.mastered[el.dataset.o];
    saveState();
    render();
  } else if (el.dataset.act === "opt-toggle") {
    S.includeOptional = el.checked;
    saveState();
    render();
  }
});

document.addEventListener("keydown", e => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const tag = (e.target.tagName || "").toLowerCase();
  if (tag === "input" || tag === "textarea" || tag === "select") return;
  const k = LETTERS.indexOf(e.key.toUpperCase());

  if (view.tab === "entrainement") {
    if (k >= 0 && e.key.length === 1) { pickOption(k); e.preventDefault(); }
    else if (e.key === "Enter") {
      if (tag === "button" && !e.target.closest(".opts")) return; // laisser le bouton focalisé agir
      e.preventDefault();
      if (P.done) nextPractice(); else validatePractice();
    }
  } else if (view.tab === "examen" && EX && EX.type === "qcm" && EX.phase === "run" && !EX.confirming) {
    if (k >= 0 && e.key.length === 1) { examPick(k); e.preventDefault(); }
    else if (e.key === "Enter" && tag !== "button" && EX.cur < EX.items.length - 1) { EX.cur++; render(); }
  }
});

window.addEventListener("beforeunload", e => {
  if (EX && EX.phase === "run") { e.preventDefault(); e.returnValue = ""; }
});

document.getElementById("reset").addEventListener("click", () => {
  if (!window.confirm("Effacer toute votre progression (réponses, cours lus, examens) ? Cette action est définitive.")) return;
  clearInterval(timerId);
  S = emptyState();
  saveState();
  EX = null;
  P.obj = null; P.filter = "all"; P.level = 0; P.notice = "";
  buildPractice();
  view.course = null; view.exo = null; view.exoOpen = {}; view.exoGrades = {};
  render();
});

render();
