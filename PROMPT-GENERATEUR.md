# Prompt : générer une application d'apprentissage

Ce prompt sert à créer une application du même genre qu'**AWS Ready** pour un autre sujet : une autre certification (Azure, GCP, Kubernetes, Scrum…), un langage, une matière scolaire, le code de la route, etc.

**Utilisation :**

1. Crée un dossier vide et ouvre-le avec Claude Code.
2. Remplis la section « Paramètres » ci-dessous.
3. *(Optionnel mais recommandé)* Fournis ton **programme détaillé** d'une de ces deux façons :
   - colle-le dans la section « Programme détaillé » à la fin du prompt ;
   - ou dépose-le dans le dossier (ex. `programme.md`, `.txt`, ou le PDF du guide d'examen officiel) et indique son nom dans les paramètres.
4. Copie tout ce qui se trouve entre les deux lignes `=====` et colle-le dans Claude Code.

Le programme détaillé peut être le plan officiel de l'examen, le syllabus d'un cours, ou ta propre liste de notions. Tant qu'il est découpé en chapitres, puis en objectifs, avec les notions de chaque objectif, l'IA s'en sert comme référence unique. Le format conseillé est décrit à la fin du prompt, mais un copier-coller brut fonctionne aussi.

Sans programme, l'IA en rédige un et te le soumet avant de produire le contenu. Pour une certification officielle sans programme, indique au moins ses chapitres et leur pondération tels qu'ils figurent dans le guide d'examen. Si tu ne les connais pas, laisse le champ vide : l'IA les proposera et te demandera de les valider.

=====

Crée dans ce dossier une application web d'apprentissage selon le cahier des charges suivant.

## Paramètres

* **Sujet** : Mathématiques — DAEU B

* **Examen ou objectif visé** : Réussir l'épreuve de mathématiques du DAEU B et maîtriser l'ensemble du programme officiel de mathématiques du DAEU B.

* **Nom de l'application** : DAEU B — Mathématiques

* **Langue du contenu et de l'interface** : français

* **Public** : Étudiant préparant le DAEU B, débutant ou en reprise d'études, avec possibilité de reprendre les bases mathématiques depuis le niveau collège avant de progresser vers le niveau DAEU B.

* **Chapitres et pondération** :

  1. Calcul numérique et algébrique — 20 %
  2. Équations, systèmes et inéquations — 15 %
  3. Fonctions et analyse — 30 %
  4. Statistiques et probabilités — 20 %
  5. Suites numériques — 5 %
  6. Trigonométrie et nombres complexes — 10 % (notions facultatives)

* **Format de l'examen réel** : Épreuve écrite de mathématiques de 3 heures, organisée autour de 3 exercices indépendants. Les modalités exactes doivent être adaptées aux règles de l'établissement qui organise le DAEU.

* **Volume visé** : 23 jalons de cours + au minimum 300 exercices progressifs corrigés + 150 QCM + exercices de synthèse + 5 examens blancs complets de 3 heures.

* **Couleur principale** : bleu scientifique

* **Programme détaillé** : voir la section « Programme détaillé ».

* **Respect du programme** : strict. Le programme doit suivre le programme DAEU B de DAEU Sonate. Les notions facultatives doivent être clairement identifiées comme telles. Toute notion supplémentaire doit être signalée comme « complément » et ne doit jamais être présentée comme obligatoire pour l'examen.


## Avant de coder

1. **Si un programme détaillé est fourni**, lis-le en entier. S'il s'agit d'un fichier, lis toutes ses pages.
   - Il fait foi : les chapitres, pondérations, objectifs et notions viennent de lui, et remplacent les paramètres « Chapitres et pondération » s'ils se contredisent.
   - Garde les intitulés et la numérotation du programme. N'en reformule que l'orthographe ou la mise en forme.
   - S'il est ambigu, incomplet ou incohérent (pondérations dont la somme ne fait pas 100 %, objectif sans notion, chapitre vide), liste-moi les problèmes et propose une correction avant de continuer.
2. **Si aucun programme n'est fourni**, rédige-en un au même format, réaliste et fidèle à l'examen visé, et soumets-le-moi.
3. Si d'autres paramètres sont vides ou imprécis (format d'examen, volume), propose des valeurs réalistes.
4. Présente ensuite un **plan de couverture** et attends ma validation avant de produire le contenu. Le plan prend la forme d'un tableau avec une ligne par objectif : identifiant, intitulé, module(s) de cours qui le traitent, nombre de questions prévues.
   - Le nombre de questions par chapitre est proportionnel à la pondération.
   - Au sein d'un chapitre, il est réparti entre les objectifs selon le nombre et l'importance de leurs notions.

## Contraintes techniques

- Site 100 % statique : HTML, CSS et JavaScript natif. Aucun framework, aucun build, aucune dépendance npm. On l'ouvre en double-cliquant sur `index.html`, y compris en `file://`.
- Seule ressource externe autorisée : une police Google Fonts, avec des polices de repli.
- Code lisible et commenté avec parcimonie, pas de code minifié.
- La progression est sauvegardée dans `localStorage` sous une clé versionnée (ex. `nom-app-v1`). Chaque accès doit être entouré d'un `try/catch` : l'application doit fonctionner même si le stockage est indisponible.
- Tout texte venant des données et affiché dans une question doit être échappé avant insertion en HTML.

## Structure des fichiers

```
index.html
style.css
app.js              ← logique uniquement, aucun contenu pédagogique
data/domains.js     ← chapitres
data/programme.js   ← objectifs du programme détaillé
data/courses.js     ← cours
data/questions.js   ← banque de questions
README.md
```

Les fichiers de `data/` sont chargés par des balises `<script>` classiques, avant `app.js`, et déclarent des constantes globales. Utilise des chaînes entre guillemets doubles et l'apostrophe typographique ’ dans les textes, pour éviter les problèmes d'échappement.

### Formats de données

```js
// data/domains.js
// examCount : nombre de questions tirées dans ce chapitre pour un examen blanc.
const DOMAINS = [
  { id: 1, name: "Nom du chapitre", weight: 25, examCount: 11 }
];

// data/programme.js
// Un objectif par entrée, avec l'identifiant et l'intitulé du programme.
// notions : notions à maîtriser, reprises du programme.
const OBJECTIVES = [
  { id: "1.1", d: 1, title: "Intitulé de l’objectif", notions: ["Notion A", "Notion B"] }
];

// data/courses.js
// d = id du chapitre, o = objectifs traités par le module.
// Les textes de cours peuvent contenir du <b> pour les notions clés.
const COURSES = [
  {
    d: 1,
    o: ["1.1", "1.2"],
    title: "Titre du module",
    summary: "Une phrase de résumé.",
    sections: [
      { h: "Sous-titre", p: "Paragraphe explicatif." },
      { h: "Points clés", points: ["<b>Notion</b> : définition.", "…"] }
    ]
  }
];

// data/questions.js
// o = objectif évalué par la question.
// c = index de la bonne réponse, ou tableau d'index pour une question à réponses multiples.
const QUESTIONS = [
  { d: 1, o: "1.1", q: "Énoncé ?", a: ["A", "B", "C", "D"], c: 2, e: "Explication." },
  { d: 2, o: "2.3", q: "Énoncé ? (Choisissez 2 réponses)", a: ["A", "B", "C", "D", "E"], c: [0, 3], e: "Explication." }
];
```

Le chapitre d'un cours ou d'une question doit correspondre au chapitre de ses objectifs. En mode « compléments autorisés », une section de cours hors programme porte `extra: true` et s'affiche avec une étiquette « Hors programme ».

L'identifiant de chaque question est calculé dans `app.js` par un hachage de son énoncé. Ajouter ou réordonner des questions ne casse donc pas la progression enregistrée.

## Exigences sur le contenu

- Contenu exact et à jour. N'invente jamais de service, de commande, de chiffre ou de règle. En cas de doute sur une information, ne l'utilise pas plutôt que de risquer une erreur.
- **Cours** : chaque module a 2 à 5 sections. On y trouve des définitions claires, des exemples concrets, les pièges classiques et les distinctions souvent testées (ex. « A vs B »).
- **Questions** :
  - Respecte le style de l'examen réel : questions de connaissance directe, mais surtout des mises en situation (« Une entreprise veut… Quelle solution choisir ? »).
  - 4 réponses par question, 5 pour les questions à réponses multiples. Les mauvaises réponses doivent être plausibles et réelles, pas absurdes.
  - Environ 8 % de questions à réponses multiples, avec « (Choisissez N réponses) » dans l'énoncé.
  - L'explication dit pourquoi la bonne réponse est juste et, si utile, pourquoi un piège fréquent est faux.
  - Aucun doublon d'énoncé. Chaque chapitre contient au moins 2 fois `examCount` questions, pour que les examens blancs varient.
- **Couverture du programme** :
  - chaque objectif est traité par au moins un module de cours ;
  - chaque objectif est évalué par au moins 3 questions, davantage pour les objectifs riches ;
  - chaque notion listée dans le programme est expliquée dans un cours et testée par au moins une question ;
  - en mode « strict », aucune question ne porte sur une notion absente du programme.

## Fonctionnalités

Navigation par onglets : **Programme**, **Cours**, **Entraînement**, **Examen blanc**, **Progression**. Un bouton « Réinitialiser » dans l'en-tête efface toute la progression, après confirmation.

### 1. Programme
- Le programme complet, par chapitre (numéro, nom, pondération), puis par objectif (identifiant, intitulé, liste des notions).
- Pour chaque objectif :
  - les modules de cours qui le traitent, sous forme de liens qui ouvrent le module ;
  - une pastille d'état : « À découvrir » (rien fait), « En cours » (cours lu ou questions commencées), « Maîtrisé » (au moins 80 % de bonnes réponses sur au moins 3 questions de l'objectif) ;
  - la précision obtenue et le nombre de questions vues sur le total ;
  - un bouton « S’entraîner » qui ouvre l'entraînement filtré sur cet objectif.
- En haut, une barre de progression globale : nombre d'objectifs maîtrisés sur le total.
- Pour une révision en autonomie, une case à cocher « Je maîtrise » par objectif, enregistrée, qui s'ajoute à l'état calculé.

### 2. Cours
- Modules regroupés par chapitre, avec un en-tête indiquant le numéro, le nom et la pondération du chapitre.
- Chaque carte a un numéro, un résumé, les identifiants des objectifs traités (ex. « 1.1 · 1.2 »), et le badge « LU » si le module a été ouvert.
- Vue détaillée d'un module :
  - en haut, un rappel des objectifs du programme couverts par le module ;
  - en bas, trois boutons : « ← Tous les cours », « S’entraîner sur ces objectifs » (qui ouvre l'entraînement filtré) et « Module suivant ».

### 3. Entraînement
- Trois compteurs : questions différentes répondues, précision, série de bonnes réponses en cours.
- Filtres avec leur nombre de questions : Toutes, Jamais répondues, Erreurs à revoir, puis un filtre par chapitre. Un filtre par objectif est accessible depuis les onglets Programme et Cours, et s'affiche comme filtre actif avec un bouton pour le retirer.
- Chaque question affiche l'identifiant et l'intitulé de l'objectif évalué.
- Ordre des questions et des réponses mélangé. Les lettres A, B, C… suivent l'ordre affiché.
- **Question à une réponse** : le clic valide immédiatement.
- **Question à réponses multiples** : on sélectionne le nombre de réponses demandé, puis on clique sur « Valider ».
- Après la réponse :
  - bonnes réponses en vert, mauvaise réponse choisie en orange ;
  - encadré « Bonne réponse » ou « À revoir » avec la ou les lettres attendues et l'explication.
- Le résultat de chaque question (juste ou faux, dernière tentative) est enregistré.
- En fin de série, la liste est recalculée et mélangée à nouveau.
- Si « Erreurs à revoir » est vide, un message de félicitations s'affiche.
- Raccourcis clavier : touches A à E pour répondre, Entrée pour valider ou passer à la suite.

### 4. Examen blanc
*(Si aucun examen n'est visé, remplace-le par un « Défi » de 20 questions chronométré, sur le même principe.)*

- **Écran d'accueil** : règles de l'examen (nombre de questions, durée, répartition par chapitre, seuil de réussite), bouton « Commencer », historique des examens passés.
- **Pendant l'examen** :
  - questions tirées selon `examCount` de chaque chapitre, puis mélangées ;
  - chronomètre décroissant, qui devient orange sous 5 minutes ; l'examen se termine automatiquement à zéro ;
  - boutons Précédente et Suivante, et bouton « Marquer pour révision » ;
  - grille de numéros cliquables : répondue, marquée, question en cours ;
  - aucune correction affichée avant la fin ;
  - avant de terminer, une confirmation signale les questions sans réponse et les questions marquées ;
  - avertissement si on ferme l'onglet pendant l'examen.
- **Résultat** :
  - score sur l'échelle de l'examen réel (formule linéaire, présentée comme une estimation) ;
  - mention réussi ou non réussi ;
  - barres de résultat par chapitre ;
  - liste des objectifs ratés (au moins une erreur), avec un lien vers le module de cours correspondant ;
  - liste repliable des erreurs, avec l'objectif évalué, les réponses choisies, la correction et l'explication.
- Les réponses données pendant l'examen alimentent aussi la progression et la liste « Erreurs à revoir ».
- Les 20 derniers examens sont enregistrés.

### 5. Progression
- Compteurs : objectifs maîtrisés, cours lus, questions vues, meilleur score d'examen blanc.
- Barres de précision par chapitre : vertes à partir de 70 %, orange en dessous.
- Encadré « Priorité de révision » avec les 3 objectifs les plus faibles parmi ceux déjà travaillés, puis les objectifs jamais abordés. Chacun a un bouton pour s'entraîner dessus.
- Historique des examens (date, score, bonnes réponses, résultat).

## Design

- Style éditorial sobre :
  - fond clair légèrement texturé (grille de points), cartes blanches à bordure fine ;
  - une couleur principale, une couleur d'accent pour les erreurs et les alertes, une couleur vive pour la série en cours ;
  - titres dans une police géométrique (ex. Space Grotesk), texte dans une police lisible (ex. DM Sans).
- En-tête de page : petit sur-titre en capitales espacées, grand titre en trois temps (ex. « Apprendre. Répondre. Progresser. »), une phrase de présentation, et une ligne résumant le format de l'examen.
- Couleurs définies en variables CSS dans `:root`.
- Responsive jusqu'à 390 px de large :
  - aucun défilement horizontal de la page ;
  - onglets et filtres défilants sur une ligne ;
  - pendant l'examen, sur mobile, grille des questions sur une seule ligne défilante et chronomètre compact au-dessus de la question.
- Accessibilité : vrais `<button>` pour tout ce qui est cliquable, contrastes suffisants, attribut `lang` correct sur `<html>`.

## Vérifications avant de terminer

1. Charge les fichiers de `data/` avec Node et vérifie :
   - le nombre de cours et de questions par chapitre ;
   - chaque chapitre contient au moins `examCount` questions ;
   - chaque index de `c` est valide ;
   - aucun énoncé en double ;
   - chaque question a une explication.
2. Vérifie la couverture du programme avec un script Node et affiche un tableau (objectif, nombre de modules, nombre de questions) :
   - chaque `o` des cours et des questions existe dans `OBJECTIVES` ;
   - le chapitre d'un cours ou d'une question correspond à celui de ses objectifs ;
   - chaque objectif a au moins un module et au moins 3 questions ;
   - aucun objectif du programme fourni ne manque dans `OBJECTIVES` ;
   - pour chaque notion, cherche sa présence (sans tenir compte de la casse) dans les textes des cours et des questions de son objectif ; liste les notions introuvables et vérifie-les une par une.
3. Lance `node --check app.js`.
4. Si Playwright ou Chromium est disponible, teste l'application dans un navigateur sans interface :
   - parcours chaque onglet ;
   - depuis l'onglet Programme, lance l'entraînement sur un objectif et vérifie que seules ses questions apparaissent ;
   - réponds à des questions simples et multiples ;
   - passe un examen jusqu'au résultat ;
   - vérifie qu'aucune erreur n'apparaît dans la console ;
   - fais des captures d'écran en 1280 px et en 390 px, et vérifie que `document.documentElement.scrollWidth` ne dépasse pas la largeur de l'écran.
5. Corrige ce qui ne va pas.
6. Rédige le `README.md` : utilisation, tableau des chapitres, tableau de couverture du programme, format des données pour ajouter du contenu.
7. Termine par :
   - un résumé de ce qui a été créé (volumes par chapitre et par objectif) ;
   - les écarts éventuels avec le programme fourni ;
   - les points de contenu que je devrais vérifier moi-même.

## Programme détaillé

*(Colle ton programme ci-dessous, ou écris « voir fichier » si tu l'as déposé dans le dossier. Laisse vide si tu n'en as pas. Format conseillé, mais un copier-coller brut du programme officiel fonctionne aussi :)*

```
## Partie 1 — Introduction au calcul algébrique

### Jalon 1 — Nombres entiers

* Addition
* Soustraction
* Multiplication
* Priorités opératoires
* Règles des signes
* Calculs sans calculatrice

### Jalon 2 — Nombres rationnels

* Fractions
* Mise au même dénominateur
* Simplification
* Addition et soustraction de fractions
* Multiplication et division de fractions

### Jalon 3 — Nombres réels

* Puissances
* Puissances de 10
* Racines carrées
* Simplification d'expressions contenant des racines

## Partie 2 — Introduction au calcul littéral

### Jalon 4 — Calcul littéral

* Développer
* Simplifier
* Réduire
* Identités remarquables
* Factorisation par facteur commun
* Factorisation à l'aide des identités remarquables

### Jalon 5 — Équations

* Équations du premier degré à une inconnue
* Équations produit nul
* Mise en équation d'un problème
* Résolution de problèmes

### Jalon 6 — Systèmes d'équations

* Systèmes à deux équations et deux inconnues
* Méthode par substitution
* Formules de Cramer
* Méthode de Gauss / combinaison
* Mise en équation de problèmes

### Jalon 7 — Polynômes du second degré

* Polynômes de degré 2
* Discriminant
* Résolution d'équations du second degré

### Jalon 8 — Intervalles réels et inéquations

* Intervalles
* Inégalités
* Inéquations
* Utilisation du discriminant
* Résolution d'inéquations du second degré

## Partie 3 — Analyse

### Jalon 9 — Statistiques descriptives

* Vocabulaire statistique
* Caractère qualitatif et quantitatif
* Modalités
* Classes
* Effectifs
* Moyenne
* Médiane
* Écart-type
* Quartiles
* Déciles
* Diagrammes
* Représentation des données

### Jalon 10 — Introduction aux fonctions

* Vocabulaire des fonctions
* Domaine de définition
* Lecture et manipulation de courbes
* Fonctions usuelles
* Équation d'une droite
* Représentation graphique

### Jalon 11 — Limites

* Notion de limite
* Calcul infinitésimal
* Limites à l'infini
* Limites en un point
* Formes indéterminées
* Calcul de limites

### Jalon 12 — Dérivées

* Nombre dérivé
* Fonction dérivée
* Dérivées usuelles
* Sens de variation
* Lien entre dérivée et variations
* Tableau de variations

### Jalon 13 — Asymptotes

* Asymptotes verticales
* Asymptotes horizontales
* Étude du comportement d'une fonction à l'infini

### Jalon 14 — Théorème des valeurs intermédiaires

* Continuité
* Théorème des valeurs intermédiaires
* Application à la résolution d'équations
* Étude de fonctions

### Jalon 15 — Suites

* Suites numériques
* Suites arithmétiques
* Suites géométriques
* Suites arithmético-géométriques
* Calcul de termes
* Évolution des suites

### Jalon 16 — Fonction logarithme

* Fonction logarithme
* Propriétés du logarithme
* Calculs logarithmiques
* Équations logarithmiques

### Jalon 17 — Fonction exponentielle

* Fonction exponentielle
* Calculs exponentiels
* Propriétés
* Croissances comparées
* Étude de fonctions utilisant exponentielle et logarithme

### Jalon 18 — Calcul intégral

* Primitives
* Calcul intégral
* Intégrales
* Applications du calcul intégral

## Partie 4 — Probabilités

### Jalon 19 — Probabilités discrètes

* Univers
* Événements
* Probabilités
* Événements contraires
* Union et intersection
* Probabilité conditionnelle
* Dénombrement
* Factorielle
* Coefficients binomiaux
* Calcul de probabilités

### Jalon 20 — Variables aléatoires

* Variables aléatoires discrètes
* Loi de probabilité
* Espérance
* Variance
* Loi binomiale

## Partie 5 — Notions facultatives

### Jalon 21 — Trigonométrie

* Calculs trigonométriques
* Fonctions trigonométriques

### Jalon 22 — Nombres complexes

* Ensemble des nombres complexes
* Écriture des nombres complexes
* Opérations sur les nombres complexes

### Jalon 23 — Nombres complexes et géométrie plane

* Utilisation des nombres complexes en géométrie
* Transformations affines du plan
* Étude des transformations à l'aide des nombres complexes

### Repère cartésien

* Introduction au repère cartésien
* Utilisation du repère pour résoudre des problèmes

## Méthode pédagogique

Pour chaque jalon :

1. Explication simple du cours
2. Définitions et formules à connaître
3. Exemple entièrement corrigé
4. Exemple guidé
5. Exercices progressifs
6. Exercices de niveau examen
7. QCM
8. Correction détaillée
9. Erreurs et pièges fréquents
10. Fiche de révision
11. Test de validation du chapitre

À la fin de chaque grande partie :

* contrôle récapitulatif ;
* correction détaillée ;
* reprise des notions non maîtrisées.

À la fin du programme :

* examens blancs de 3 heures ;
* 3 exercices indépendants par examen blanc ;
* correction détaillée ;
* analyse des erreurs ;
* révision ciblée.

```

=====
