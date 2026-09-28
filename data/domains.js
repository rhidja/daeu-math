// Chapitres du programme (appelés « domaines » dans le code).
// weight : pondération en %.
// examCount : nombre de questions tirées dans ce chapitre pour le QCM chronométré.
// optional : chapitre composé de notions facultatives. Exclu par défaut des examens blancs ;
//            ses questions sont alors reportées sur le chapitre non facultatif le plus pondéré.
const DOMAINS = [
  { id: 1, name: "Calcul numérique et algébrique", weight: 20, examCount: 8 },
  { id: 2, name: "Équations, systèmes et inéquations", weight: 15, examCount: 6 },
  { id: 3, name: "Fonctions et analyse", weight: 30, examCount: 12 },
  { id: 4, name: "Statistiques et probabilités", weight: 20, examCount: 8 },
  { id: 5, name: "Suites numériques", weight: 5, examCount: 2 },
  { id: 6, name: "Trigonométrie et nombres complexes", weight: 10, examCount: 4, optional: true }
];

// Paramètres des deux formats d'examen blanc.
const EXAM_CONFIG = {
  scale: 20,          // note sur 20
  pass: 10,           // seuil indicatif de réussite
  qcmMinutes: 60,     // durée du QCM chronométré
  sujetMinutes: 180   // durée d'un sujet type DAEU (3 exercices indépendants)
};
