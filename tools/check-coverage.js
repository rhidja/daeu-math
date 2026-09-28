// Vérifie la couverture du programme : node tools/check-coverage.js
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const ctx = {};
vm.createContext(ctx);
const src = ["domains", "programme", "courses", "questions", "exercises"]
  .map(f => fs.readFileSync(path.join(root, "data", f + ".js"), "utf8")).join("\n;\n");
vm.runInContext(src + "\n;globalThis.__x = { DOMAINS, OBJECTIVES, COURSES, QUESTIONS, EXERCISES, MOCK_EXAMS };", ctx);
const { DOMAINS, OBJECTIVES, COURSES, QUESTIONS, EXERCISES, MOCK_EXAMS } = ctx.__x;

// Identifiants attendus (jalons 1 à 23 + repère cartésien)
const EXPECTED = ["R"].concat(Array.from({ length: 23 }, (_, i) => "J" + (i + 1)));

const errors = [];
const err = m => errors.push(m);
const OBJ = new Map(OBJECTIVES.map(o => [o.id, o]));

EXPECTED.forEach(id => { if (!OBJ.has(id)) err(`Objectif ${id} absent de OBJECTIVES`); });
OBJECTIVES.forEach(o => {
  if (!DOMAINS.some(d => d.id === o.d)) err(`Objectif ${o.id} : chapitre ${o.d} inconnu`);
  if (!o.notions.length) err(`Objectif ${o.id} : aucune notion`);
});

COURSES.forEach(c => c.o.forEach(id => {
  if (!OBJ.has(id)) err(`Cours « ${c.title} » : objectif ${id} inconnu`);
  else if (OBJ.get(id).d !== c.d) err(`Cours « ${c.title} » : chapitre ${c.d} ≠ chapitre de ${id}`);
}));
QUESTIONS.forEach((q, i) => {
  if (!OBJ.has(q.o)) err(`Question ${i} : objectif ${q.o} inconnu`);
  else if (OBJ.get(q.o).d !== q.d) err(`Question ${i} (${q.o}) : chapitre ${q.d} ≠ chapitre de l’objectif`);
  else (q.k || []).forEach(n => { if (!OBJ.get(q.o).notions.includes(n)) err(`Question ${i} (${q.o}) : notion « ${n} » absente de l’objectif`); });
});
EXERCISES.forEach(x => x.o.forEach(id => { if (!OBJ.has(id)) err(`Exercice ${x.id} : objectif ${id} inconnu`); }));
MOCK_EXAMS.forEach(s => s.exercises.forEach(ex => ex.o.forEach(id => {
  if (!OBJ.has(id)) err(`${s.id} : objectif ${id} inconnu`);
  else if (OBJ.get(id).optional) err(`${s.id} : un sujet type ne doit pas porter sur une notion facultative (${id})`);
})));

// Texte brut d’un cours (sans balises ni mini-syntaxe) pour la recherche de notions
const flat = s => String(s).replace(/<\/?[a-z][^>]*>/gi, " ").toLowerCase();
const courseText = c => flat([c.title, c.summary].concat(c.sections.map(s =>
  [s.h, s.p || ""].concat(s.points || [], s.steps || [], s.solution || []).join(" "))).join(" "));

console.log("Objectif | Modules | Questions | Intitulé");
const missing = [];
OBJECTIVES.forEach(o => {
  const cs = COURSES.filter(c => c.o.includes(o.id));
  const qs = QUESTIONS.filter(q => q.o === o.id);
  console.log(`${o.id.padEnd(8)} | ${String(cs.length).padEnd(7)} | ${String(qs.length).padEnd(9)} | ${o.title}${o.optional ? " (facultatif)" : ""}`);
  if (!cs.length) err(`Objectif ${o.id} : aucun module de cours`);
  if (qs.length < 3) err(`Objectif ${o.id} : moins de 3 questions`);
  const cText = cs.map(courseText).join(" ");
  const qText = flat(qs.map(q => [q.q, q.a.join(" "), q.e].join(" ")).join(" "));
  o.notions.forEach(n => {
    const needle = n.toLowerCase();
    const inCourse = cText.includes(needle);
    const inQuestions = qText.includes(needle) || qs.some(q => (q.k || []).includes(n));
    if (!inCourse || !inQuestions) missing.push(`${o.id} « ${n} » — cours : ${inCourse ? "oui" : "non"}, questions : ${inQuestions ? "oui" : "non"}`);
  });
});

console.log(`\nNotions dont l’intitulé exact n’apparaît pas dans les textes (${missing.length}) — à vérifier une par une :`);
missing.forEach(m => console.log(" - " + m));

if (errors.length) {
  console.log(`\n${errors.length} erreur(s) :`);
  errors.forEach(e => console.log(" - " + e));
  process.exit(1);
}
console.log("\nCouverture structurelle : aucune erreur.");
