# DAEU B — Mathématiques

Application web d’apprentissage pour préparer l’épreuve de mathématiques du DAEU B : cours, exercices progressifs corrigés, QCM, contrôles récapitulatifs et examens blancs.

## Utilisation

1. Ouvrir `index.html` par un double-clic. L’application fonctionne hors ligne, y compris en `file://`.
2. Parcourir les cinq onglets :
   - **Programme** : les 24 objectifs, leurs notions, leur état (« À découvrir », « En cours », « Maîtrisé »), un bouton « S’entraîner » et une case « Je maîtrise » par objectif.
   - **Cours** : un module par objectif. Chaque module comprend l’essentiel, les définitions et formules, un exemple corrigé, un exemple guidé, les pièges fréquents et une fiche de révision. Chaque chapitre se termine par des contrôles récapitulatifs, avec correction détaillée et auto-évaluation.
   - **Entraînement** : 450 questions. On peut les filtrer par état (toutes, jamais répondues, erreurs à revoir), par chapitre, par niveau (bases, intermédiaire, niveau examen) et par objectif. Raccourcis clavier : A à E pour répondre, Entrée pour valider ou passer à la suite.
   - **Examen blanc** : deux formats.
     - **Sujet type DAEU** : 3 h, 3 exercices rédigés sur papier. À la fin, la correction s’affiche avec le barème et l’on note soi-même chaque question.
     - **QCM chronométré** : 40 questions en 60 minutes.
   - **Progression** : compteurs, précision par chapitre, priorités de révision et historique des examens.
3. La progression est enregistrée dans le navigateur (`localStorage`, clé `daeu-b-maths-v1`). Le bouton « Réinitialiser » l’efface.

Les notes des examens blancs sont des estimations. Le seuil de 10/20 est indicatif : les modalités exactes (compensation entre épreuves, calculatrice) dépendent de l’université.

## Chapitres

| N° | Chapitre | Poids | Objectifs | Questions | Questions au QCM chronométré |
|---|---|---|---|---|---|
| 1 | Calcul numérique et algébrique | 20 % | J1, J2, J3, J4 | 90 | 8 |
| 2 | Équations, systèmes et inéquations | 15 % | J5, J6, J7, J8 | 68 | 6 |
| 3 | Fonctions et analyse | 30 % | R, J10, J11, J12, J13, J14, J16, J17, J18 | 135 | 12 (16 sans les notions facultatives) |
| 4 | Statistiques et probabilités | 20 % | J9, J19, J20 | 90 | 8 |
| 5 | Suites numériques | 5 % | J15 | 22 | 2 |
| 6 | Trigonométrie et nombres complexes *(facultatif)* | 10 % | J21, J22, J23 | 45 | 4 (0 par défaut) |

Les notions facultatives (chapitre 6) sont signalées par une étiquette « Facultatif ». Elles sont exclues par défaut des examens blancs ; une case permet de les inclure au QCM chronométré. Les sujets type DAEU ne portent que sur des notions obligatoires.

## Couverture du programme

Les jalons gardent leur numérotation. Le repère cartésien, qui n’est pas numéroté dans le programme, porte l’identifiant **R**.

| Objectif | Intitulé | Module | Questions |
|---|---|---|---|
| J1 | Nombres entiers | 01 | 18 |
| J2 | Nombres rationnels | 02 | 22 |
| J3 | Nombres réels | 03 | 22 |
| J4 | Calcul littéral | 04 | 28 |
| J5 | Équations | 05 | 16 |
| J6 | Systèmes d’équations | 06 | 16 |
| J7 | Polynômes du second degré | 07 | 16 |
| J8 | Intervalles réels et inéquations | 08 | 20 |
| R | Repère cartésien | 09 | 6 |
| J10 | Introduction aux fonctions | 10 | 14 |
| J11 | Limites | 11 | 18 |
| J12 | Dérivées | 12 | 22 |
| J13 | Asymptotes | 13 | 12 |
| J14 | Théorème des valeurs intermédiaires | 14 | 12 |
| J16 | Fonction logarithme | 15 | 16 |
| J17 | Fonction exponentielle | 16 | 20 |
| J18 | Calcul intégral | 17 | 15 |
| J9 | Statistiques descriptives | 18 | 34 |
| J19 | Probabilités discrètes | 19 | 32 |
| J20 | Variables aléatoires | 20 | 24 |
| J15 | Suites | 21 | 22 |
| J21 | Trigonométrie *(facultatif)* | 22 | 15 |
| J22 | Nombres complexes *(facultatif)* | 23 | 16 |
| J23 | Nombres complexes et géométrie plane *(facultatif)* | 24 | 14 |
| | **Total** | **24 modules** | **450** (dont 38 à réponses multiples) |

S’y ajoutent :
- 12 contrôles récapitulatifs (2 par chapitre, 3 pour le chapitre 3, 1 pour le chapitre 5) ;
- 5 sujets d’examen blanc de 3 exercices, notés sur 20 points.

Chaque notion du programme est expliquée dans un cours et testée par au moins une question.

## Structure des fichiers

```
index.html
style.css
app.js                 logique uniquement, aucun contenu pédagogique
data/domains.js        chapitres (DOMAINS) et paramètres des examens (EXAM_CONFIG)
data/programme.js      objectifs du programme (OBJECTIVES)
data/courses.js        cours (COURSES)
data/questions.js      banque de questions (QUESTIONS)
data/exercises.js      contrôles récapitulatifs (EXERCISES) et sujets d’examen (MOCK_EXAMS)
lib/katex/             KaTeX 0.18.9 (licence MIT) pour le rendu des formules LaTeX
tools/check-data.js    vérification des données et des formules
tools/check-coverage.js  vérification de la couverture du programme
```

## Ajouter du contenu

### Formules

Écrivez les formules en LaTeX entre `$…$`, et `$$…$$` pour une formule centrée. Dans les chaînes JavaScript, doublez les antislashs : `"$\\dfrac{1}{2}$"`. Un antislash simple (`"\frac"`) serait interprété par JavaScript, par exemple `\f` comme saut de page ou `\t` comme tabulation ; `tools/check-data.js` détecte cette erreur.

Conventions utilisées :
- virgule décimale : `0{,}5` ;
- séparateur de milliers : `1\\,000` ;
- `\\dfrac` dans les énoncés et les réponses, `\\frac` dans les explications ;
- dans les cours, écrire `\\lt` et `\\gt` plutôt que `<` et `>`, car le HTML des cours n’est pas échappé.

Pour un tableau, utilisez la syntaxe propre à l’application : `@table{a | b | c // d | e | f}`. Les lignes sont séparées par `//`, les cellules par `|`, et la première colonne sert d’en-tête. Une cellule ne doit pas contenir de `|`.

### Formats

```js
// data/domains.js
{ id: 1, name: "Nom du chapitre", weight: 20, examCount: 8 }        // optional: true pour un chapitre facultatif

// data/programme.js
{ id: "J1", d: 1, title: "Intitulé", notions: ["Notion A", "Notion B"] }   // optional: true si facultatif

// data/courses.js
{
  d: 1, o: ["J1"], title: "Titre", summary: "Résumé.",
  sections: [
    { h: "Sous-titre", p: "Paragraphe avec <b>notion</b> et $x^{2}$." },
    { h: "Points clés", kind: "def", points: ["…"] },
    { h: "Exemple corrigé", kind: "example", p: "Énoncé.", steps: ["Étape 1", "Étape 2"] },
    { h: "Exemple guidé", kind: "guided", p: "Énoncé.", solution: ["Étape masquée"] },
    { h: "Complément", p: "…", extra: true }                          // étiquette « Hors programme »
  ]
}
// kind : def, example, guided, trap (pièges), sheet (fiche de révision)

// data/questions.js
{ d: 1, o: "J1", n: 1, q: "Énoncé ?", a: ["A", "B", "C", "D"], c: 0, e: "Explication." }
{ d: 2, o: "J5", n: 2, q: "Énoncé ? (Choisissez 2 réponses)", a: ["A", "B", "C", "D", "E"], c: [0, 3], e: "…" }
// n : niveau (1 bases, 2 intermédiaire, 3 niveau examen)
// k : ["Notion"] facultatif, notion du programme explicitement testée

// data/exercises.js
{ id: "C1-1", d: 1, o: ["J1"], title: "Titre", intro: "Contexte.",
  questions: [{ q: "1. …", pts: 2, sol: ["Étape 1", "Étape 2"] }] }
// Un sujet (MOCK_EXAMS) contient 3 exercices ; le total de ses points doit faire 20.
```

L’identifiant d’une question est un hachage de son énoncé : ajouter ou réordonner des questions ne casse pas la progression enregistrée. Modifier un énoncé revient en revanche à créer une nouvelle question.

### Vérifier

```
node tools/check-data.js        # volumes, index de réponses, doublons, explications, barèmes, compilation LaTeX
node tools/check-coverage.js    # objectifs, modules, questions et notions couvertes
node --check app.js
```
