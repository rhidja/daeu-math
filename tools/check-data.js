// Vérifie la cohérence des fichiers de data/ : node tools/check-data.js
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const ctx = {};
vm.createContext(ctx);
for (const f of ["domains", "programme", "courses", "questions", "exercises"]) {
  vm.runInContext(fs.readFileSync(path.join(root, "data", f + ".js"), "utf8") +
    "\n;globalThis.__x = { DOMAINS: typeof DOMAINS !== 'undefined' ? DOMAINS : undefined, OBJECTIVES: typeof OBJECTIVES !== 'undefined' ? OBJECTIVES : undefined, COURSES: typeof COURSES !== 'undefined' ? COURSES : undefined, QUESTIONS: typeof QUESTIONS !== 'undefined' ? QUESTIONS : undefined, EXERCISES: typeof EXERCISES !== 'undefined' ? EXERCISES : undefined, MOCK_EXAMS: typeof MOCK_EXAMS !== 'undefined' ? MOCK_EXAMS : undefined };", ctx);
}
const { DOMAINS, OBJECTIVES, COURSES, QUESTIONS, EXERCISES, MOCK_EXAMS } = ctx.__x;

const errors = [];
const err = m => errors.push(m);

// Chapitres
const weightSum = DOMAINS.reduce((s, d) => s + d.weight, 0);
if (weightSum !== 100) err(`Somme des pondérations = ${weightSum} (attendu 100)`);

// Questions
const seen = new Map();
let multi = 0;
QUESTIONS.forEach((q, i) => {
  const where = `Question ${i} (${q.o}) « ${q.q.slice(0, 50)}… »`;
  if (seen.has(q.q)) err(`${where} : énoncé en double (déjà à l’index ${seen.get(q.q)})`);
  seen.set(q.q, i);
  const cs = Array.isArray(q.c) ? q.c : [q.c];
  if (Array.isArray(q.c)) {
    multi++;
    if (q.a.length !== 5) err(`${where} : ${q.a.length} réponses (5 attendues pour une question multiple)`);
    const m = /\(Choisissez (\d) réponses\)/.exec(q.q);
    if (!m || Number(m[1]) !== cs.length) err(`${where} : mention « (Choisissez N réponses) » absente ou incohérente`);
  } else if (q.a.length !== 4) err(`${where} : ${q.a.length} réponses (4 attendues)`);
  cs.forEach(c => { if (!Number.isInteger(c) || c < 0 || c >= q.a.length) err(`${where} : index de réponse invalide ${c}`); });
  if (new Set(cs).size !== cs.length) err(`${where} : index de réponse en double`);
  if (new Set(q.a).size !== q.a.length) err(`${where} : deux propositions identiques`);
  if (!q.e || q.e.length < 10) err(`${where} : explication manquante`);
  if (![1, 2, 3].includes(q.n)) err(`${where} : niveau n invalide`);
  if (!DOMAINS.some(d => d.id === q.d)) err(`${where} : chapitre ${q.d} inconnu`);
});

// Exercices et sujets
const checkExo = (ex, where) => {
  if (!ex.questions || !ex.questions.length) err(`${where} : aucune question`);
  ex.questions.forEach((q, k) => {
    if (!(q.pts > 0)) err(`${where} q${k + 1} : barème invalide`);
    if (!q.sol || !q.sol.length) err(`${where} q${k + 1} : correction manquante`);
  });
};
EXERCISES.forEach(x => checkExo(x, `Exercice ${x.id}`));
MOCK_EXAMS.forEach(s => {
  if (s.exercises.length !== 3) err(`${s.id} : ${s.exercises.length} exercices (3 attendus)`);
  const total = s.exercises.reduce((a, ex) => a + ex.questions.reduce((b, q) => b + q.pts, 0), 0);
  if (Math.abs(total - 20) > 1e-9) err(`${s.id} : total ${total} points (20 attendus)`);
  s.exercises.forEach((ex, k) => checkExo(ex, `${s.id} exercice ${k + 1}`));
});

// Formules LaTeX : délimiteurs appariés, pas de caractère de contrôle (antislash non doublé
// dans une chaîne JavaScript, par exemple "\times" devenu tabulation + "imes"), compilation KaTeX.
const katex = require(path.join(root, "lib", "katex", "katex.min.js"));
let formulas = 0;
const checkText = (s, where) => {
  if (typeof s !== "string") return;
  if (/[\x00-\x09\x0b-\x1f]/.test(s)) err(`${where} : caractère de contrôle (antislash non doublé ?) dans « ${s.slice(0, 60)}… »`);
  const parts = s.split("$");
  if (parts.length % 2 === 0) { err(`${where} : nombre impair de « $ » dans « ${s.slice(0, 60)}… »`); return; }
  for (let k = 1; k < parts.length; k += 2) {
    formulas++;
    try { katex.renderToString(parts[k], { throwOnError: true, strict: "error" }); }
    catch (e) { err(`${where} : LaTeX invalide « ${parts[k]} » (${e.message.split("\n")[0]})`); }
  }
};
COURSES.forEach(c => {
  const w = `Cours « ${c.title} »`;
  [c.title, c.summary].forEach(s => checkText(s, w));
  c.sections.forEach(s => [s.h, s.p].concat(s.points || [], s.steps || [], s.solution || []).forEach(t => checkText(t, w)));
});
QUESTIONS.forEach((q, i) => [q.q, q.e].concat(q.a).forEach(t => checkText(t, `Question ${i} (${q.o})`)));
const exoTexts = (ex, w) => [ex.title, ex.intro].concat(...ex.questions.map(q => [q.q].concat(q.sol))).forEach(t => checkText(t, w));
EXERCISES.forEach(x => exoTexts(x, `Exercice ${x.id}`));
MOCK_EXAMS.forEach(s => s.exercises.forEach((ex, k) => exoTexts(ex, `${s.id} exercice ${k + 1}`)));

// Rapport
console.log(`${formulas} formules LaTeX compilées.\n`);
console.log("Chapitre | Cours | Questions | examCount | min requis (2 × examCount)");
DOMAINS.forEach(d => {
  const nc = COURSES.filter(c => c.d === d.id).length;
  const nq = QUESTIONS.filter(q => q.d === d.id).length;
  console.log(`${String(d.id).padEnd(8)} | ${String(nc).padEnd(5)} | ${String(nq).padEnd(9)} | ${String(d.examCount).padEnd(9)} | ${2 * d.examCount}`);
  if (nq < 2 * d.examCount) err(`Chapitre ${d.id} : ${nq} questions, moins de 2 × examCount`);
});
const nonOpt = DOMAINS.filter(d => !d.optional).sort((a, b) => b.weight - a.weight)[0];
const report = DOMAINS.filter(d => d.optional).reduce((s, d) => s + d.examCount, 0);
const target = QUESTIONS.filter(q => q.d === nonOpt.id).length;
if (target < nonOpt.examCount + report) err(`Chapitre ${nonOpt.id} : pas assez de questions pour absorber le report des chapitres facultatifs`);

console.log(`\nTotal : ${COURSES.length} cours, ${QUESTIONS.length} questions (${multi} à réponses multiples, ${(multi / QUESTIONS.length * 100).toFixed(1)} %), ${EXERCISES.length} contrôles récapitulatifs, ${MOCK_EXAMS.length} sujets.`);
if (errors.length) {
  console.log(`\n${errors.length} erreur(s) :`);
  errors.forEach(e => console.log(" - " + e));
  process.exit(1);
}
console.log("\nAucune erreur.");
