// Objectifs du programme de mathématiques du DAEU B (un jalon = un objectif).
// Les identifiants reprennent la numérotation des jalons ; « R » désigne le repère cartésien,
// non numéroté dans le programme. optional : notion facultative à l’examen.
const OBJECTIVES = [
  // Chapitre 1 — Calcul numérique et algébrique
  { id: "J1", d: 1, title: "Nombres entiers", notions: ["Addition", "Soustraction", "Multiplication", "Priorités opératoires", "Règles des signes", "Calculs sans calculatrice"] },
  { id: "J2", d: 1, title: "Nombres rationnels", notions: ["Fractions", "Mise au même dénominateur", "Simplification", "Addition et soustraction de fractions", "Multiplication et division de fractions"] },
  { id: "J3", d: 1, title: "Nombres réels", notions: ["Puissances", "Puissances de 10", "Racines carrées", "Simplification d’expressions contenant des racines"] },
  { id: "J4", d: 1, title: "Calcul littéral", notions: ["Développer", "Simplifier", "Réduire", "Identités remarquables", "Factorisation par facteur commun", "Factorisation à l’aide des identités remarquables"] },

  // Chapitre 2 — Équations, systèmes et inéquations
  { id: "J5", d: 2, title: "Équations", notions: ["Équations du premier degré à une inconnue", "Équations produit nul", "Mise en équation d’un problème", "Résolution de problèmes"] },
  { id: "J6", d: 2, title: "Systèmes d’équations", notions: ["Systèmes à deux équations et deux inconnues", "Méthode par substitution", "Formules de Cramer", "Méthode de Gauss / combinaison", "Mise en équation de problèmes"] },
  { id: "J7", d: 2, title: "Polynômes du second degré", notions: ["Polynômes de degré 2", "Discriminant", "Résolution d’équations du second degré"] },
  { id: "J8", d: 2, title: "Intervalles réels et inéquations", notions: ["Intervalles", "Inégalités", "Inéquations", "Utilisation du discriminant", "Résolution d’inéquations du second degré"] },

  // Chapitre 3 — Fonctions et analyse
  { id: "R", d: 3, title: "Repère cartésien", notions: ["Introduction au repère cartésien", "Utilisation du repère pour résoudre des problèmes"] },
  { id: "J10", d: 3, title: "Introduction aux fonctions", notions: ["Vocabulaire des fonctions", "Domaine de définition", "Lecture et manipulation de courbes", "Fonctions usuelles", "Équation d’une droite", "Représentation graphique"] },
  { id: "J11", d: 3, title: "Limites", notions: ["Notion de limite", "Calcul infinitésimal", "Limites à l’infini", "Limites en un point", "Formes indéterminées", "Calcul de limites"] },
  { id: "J12", d: 3, title: "Dérivées", notions: ["Nombre dérivé", "Fonction dérivée", "Dérivées usuelles", "Sens de variation", "Lien entre dérivée et variations", "Tableau de variations"] },
  { id: "J13", d: 3, title: "Asymptotes", notions: ["Asymptotes verticales", "Asymptotes horizontales", "Étude du comportement d’une fonction à l’infini"] },
  { id: "J14", d: 3, title: "Théorème des valeurs intermédiaires", notions: ["Continuité", "Théorème des valeurs intermédiaires", "Application à la résolution d’équations", "Étude de fonctions"] },
  { id: "J16", d: 3, title: "Fonction logarithme", notions: ["Fonction logarithme", "Propriétés du logarithme", "Calculs logarithmiques", "Équations logarithmiques"] },
  { id: "J17", d: 3, title: "Fonction exponentielle", notions: ["Fonction exponentielle", "Calculs exponentiels", "Propriétés", "Croissances comparées", "Étude de fonctions utilisant exponentielle et logarithme"] },
  { id: "J18", d: 3, title: "Calcul intégral", notions: ["Primitives", "Calcul intégral", "Intégrales", "Applications du calcul intégral"] },

  // Chapitre 4 — Statistiques et probabilités
  { id: "J9", d: 4, title: "Statistiques descriptives", notions: ["Vocabulaire statistique", "Caractère qualitatif et quantitatif", "Modalités", "Classes", "Effectifs", "Moyenne", "Médiane", "Écart-type", "Quartiles", "Déciles", "Diagrammes", "Représentation des données"] },
  { id: "J19", d: 4, title: "Probabilités discrètes", notions: ["Univers", "Événements", "Probabilités", "Événements contraires", "Union et intersection", "Probabilité conditionnelle", "Dénombrement", "Factorielle", "Coefficients binomiaux", "Calcul de probabilités"] },
  { id: "J20", d: 4, title: "Variables aléatoires", notions: ["Variables aléatoires discrètes", "Loi de probabilité", "Espérance", "Variance", "Loi binomiale"] },

  // Chapitre 5 — Suites numériques
  { id: "J15", d: 5, title: "Suites", notions: ["Suites numériques", "Suites arithmétiques", "Suites géométriques", "Suites arithmético-géométriques", "Calcul de termes", "Évolution des suites"] },

  // Chapitre 6 — Trigonométrie et nombres complexes (notions facultatives)
  { id: "J21", d: 6, title: "Trigonométrie", optional: true, notions: ["Calculs trigonométriques", "Fonctions trigonométriques"] },
  { id: "J22", d: 6, title: "Nombres complexes", optional: true, notions: ["Ensemble des nombres complexes", "Écriture des nombres complexes", "Opérations sur les nombres complexes"] },
  { id: "J23", d: 6, title: "Nombres complexes et géométrie plane", optional: true, notions: ["Utilisation des nombres complexes en géométrie", "Transformations affines du plan", "Étude des transformations à l’aide des nombres complexes"] }
];
