// Exercices rédigés avec correction détaillée et barème.
// EXERCISES : contrôles récapitulatifs de fin de chapitre (affichés dans l’onglet Cours).
// MOCK_EXAMS : sujets d’examen blanc type DAEU (3 exercices indépendants, 20 points, 3 heures).
// Chaque question : q (énoncé), pts (points), sol (étapes de la correction).
// Les textes sont échappés à l’affichage ; formules en LaTeX entre $…$ (antislashs doublés),
// tableaux avec @table{a | b // c | d}.

const EXERCISES = [
  // ---------- Chapitre 1 ----------
  {
    id: "C1-1", d: 1, o: ["J1", "J2", "J3"],
    title: "Calculs numériques sans calculatrice",
    intro: "Toutes les réponses doivent être justifiées par les étapes du calcul. La calculatrice n’est pas autorisée.",
    questions: [
      { q: "1. Calculer $A = 3 - 2 \\times (4 - 7)^{2} + 12 \\div (-4)$.", pts: 2, sol: [
        "Parenthèses : $4 - 7 = -3$ ; puissance : $(-3)^{2} = 9$.",
        "Produits et quotients : $2 \\times 9 = 18$ et $12 \\div (-4) = -3$.",
        "$A = 3 - 18 + (-3) = -18$."
      ] },
      { q: "2. Calculer $B = \\dfrac{2}{3} - \\dfrac{5}{6} \\times \\dfrac{4}{5}$ et donner le résultat sous forme irréductible.", pts: 2, sol: [
        "Priorité à la multiplication : $\\frac{5}{6} \\times \\frac{4}{5} = \\frac{20}{30} = \\frac{2}{3}$.",
        "$B = \\frac{2}{3} - \\frac{2}{3} = 0$."
      ] },
      { q: "3. Calculer $C = \\dfrac{\\frac{3}{4} + \\frac{1}{2}}{\\frac{5}{8}}$.", pts: 2, sol: [
        "Numérateur : $\\frac{3}{4} + \\frac{2}{4} = \\frac{5}{4}$.",
        "Diviser par $\\frac{5}{8}$, c’est multiplier par $\\frac{8}{5}$ : $C = \\frac{5}{4} \\times \\frac{8}{5} = \\frac{40}{20} = 2$."
      ] },
      { q: "4. Écrire $D = \\sqrt{48} - 2\\sqrt{27} + \\sqrt{75}$ sous la forme $a\\sqrt{3}$.", pts: 2, sol: [
        "$\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$ ; $\\sqrt{27} = 3\\sqrt{3}$ donc $2\\sqrt{27} = 6\\sqrt{3}$ ; $\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}$.",
        "$D = 4\\sqrt{3} - 6\\sqrt{3} + 5\\sqrt{3} = 3\\sqrt{3}$."
      ] },
      { q: "5. Donner l’écriture scientifique de $E = \\dfrac{3 \\times 10^{-2} \\times 8 \\times 10^{5}}{4 \\times 10^{2}}$.", pts: 2, sol: [
        "Nombres : $\\frac{3 \\times 8}{4} = 6$. Puissances de 10 : $\\frac{10^{-2} \\times 10^{5}}{10^{2}} = 10^{-2 + 5 - 2} = 10^{1}$.",
        "$E = 6 \\times 10^{1}$ (soit $60$)."
      ] }
    ]
  },
  {
    id: "C1-2", d: 1, o: ["J4"],
    title: "Développer, factoriser, calculer",
    intro: "On considère l’expression $E = (2x - 3)^{2} - (2x - 3)(x + 4)$.",
    questions: [
      { q: "1. Développer et réduire $E$.", pts: 2, sol: [
        "$(2x - 3)^{2} = 4x^{2} - 12x + 9$.",
        "$(2x - 3)(x + 4) = 2x^{2} + 8x - 3x - 12 = 2x^{2} + 5x - 12$.",
        "$E = 4x^{2} - 12x + 9 - 2x^{2} - 5x + 12 = 2x^{2} - 17x + 21$."
      ] },
      { q: "2. Factoriser $E$.", pts: 2, sol: [
        "Facteur commun $(2x - 3)$ : $E = (2x - 3)[(2x - 3) - (x + 4)]$.",
        "$E = (2x - 3)(x - 7)$. Vérification : $(2x - 3)(x - 7) = 2x^{2} - 14x - 3x + 21 = 2x^{2} - 17x + 21$."
      ] },
      { q: "3. Calculer $E$ pour $x = 0$, puis pour $x = \\dfrac{3}{2}$, en choisissant la forme la plus adaptée.", pts: 2, sol: [
        "Pour $x = 0$, la forme développée donne $E = 21$.",
        "Pour $x = \\frac{3}{2}$, la forme factorisée donne $E = (3 - 3)\\left(\\frac{3}{2} - 7\\right) = 0$."
      ] },
      { q: "4. Factoriser $F = 9x^{2} - 25$, puis $G = x^{2} - 10x + 25$.", pts: 2, sol: [
        "$F = (3x)^{2} - 5^{2} = (3x - 5)(3x + 5)$.",
        "$G = x^{2} - 2 \\times x \\times 5 + 5^{2} = (x - 5)^{2}$."
      ] },
      { q: "5. Démontrer que pour tout réel $x$, $(x + 1)^{2} - (x - 1)^{2} = 4x$.", pts: 2, sol: [
        "$(x + 1)^{2} = x^{2} + 2x + 1$ et $(x - 1)^{2} = x^{2} - 2x + 1$.",
        "Différence : $x^{2} + 2x + 1 - x^{2} + 2x - 1 = 4x$."
      ] }
    ]
  },

  // ---------- Chapitre 2 ----------
  {
    id: "C2-1", d: 2, o: ["J5", "J6"],
    title: "Équations et systèmes en situation",
    intro: "Une association organise une sortie. Le billet adulte coûte $a$ euros et le billet enfant $e$ euros. Le groupe A (4 adultes et 6 enfants) paie $92$ € ; le groupe B (3 adultes et 2 enfants) paie $49$ €.",
    questions: [
      { q: "1. Traduire l’énoncé par un système de deux équations.", pts: 1, sol: [
        "$\\begin{cases} 4a + 6e = 92 \\\\ 3a + 2e = 49 \\end{cases}$"
      ] },
      { q: "2. Résoudre ce système par combinaison.", pts: 3, sol: [
        "On multiplie la seconde équation par $3$ : $9a + 6e = 147$.",
        "On soustrait la première : $9a - 4a = 147 - 92$, soit $5a = 55$, donc $a = 11$.",
        "Puis $3 \\times 11 + 2e = 49$, donc $2e = 16$ et $e = 8$.",
        "Vérification : $4 \\times 11 + 6 \\times 8 = 44 + 48 = 92$. Billet adulte : $11$ € ; billet enfant : $8$ €."
      ] },
      { q: "3. Retrouver ce résultat avec les formules de Cramer.", pts: 2, sol: [
        "$D = 4 \\times 2 - 3 \\times 6 = -10$.",
        "$a = \\frac{92 \\times 2 - 49 \\times 6}{-10} = \\frac{-110}{-10} = 11$.",
        "$e = \\frac{4 \\times 49 - 3 \\times 92}{-10} = \\frac{-80}{-10} = 8$."
      ] },
      { q: "4. Résoudre les équations $(2x - 5)(x + 3) = 0$ et $5(x - 2) - 3(x + 1) = 7$.", pts: 2, sol: [
        "Produit nul : $2x - 5 = 0$ ou $x + 3 = 0$, donc $x = \\frac{5}{2}$ ou $x = -3$.",
        "$5x - 10 - 3x - 3 = 7$, soit $2x = 20$ et $x = 10$."
      ] },
      { q: "5. Un père a 28 ans de plus que son fils. Dans 4 ans, il aura le triple de l’âge de son fils. Quels sont leurs âges actuels ?", pts: 2, sol: [
        "Soit $f$ l’âge du fils : le père a $f + 28$ ans.",
        "Dans 4 ans : $f + 32 = 3(f + 4)$, soit $f + 32 = 3f + 12$, donc $2f = 20$ et $f = 10$.",
        "Le fils a 10 ans et le père 38 ans. Vérification : dans 4 ans, $42 = 3 \\times 14$."
      ] }
    ]
  },
  {
    id: "C2-2", d: 2, o: ["J7", "J8"],
    title: "Second degré et inéquations",
    intro: "On considère le polynôme $P(x) = 2x^{2} - 2x - 12$.",
    questions: [
      { q: "1. Calculer le discriminant de $P$ et en déduire ses racines.", pts: 2, sol: [
        "$\\Delta = (-2)^{2} - 4 \\times 2 \\times (-12) = 4 + 96 = 100$.",
        "$x_1 = \\frac{2 - 10}{4} = -2$ et $x_2 = \\frac{2 + 10}{4} = 3$."
      ] },
      { q: "2. Factoriser $P(x)$.", pts: 1, sol: [
        "$P(x) = a(x - x_1)(x - x_2) = 2(x + 2)(x - 3)$."
      ] },
      { q: "3. Résoudre l’inéquation $P(x) \\leq 0$.", pts: 2, sol: [
        "$a = 2 > 0$ : $P(x)$ est négatif ou nul entre ses racines.",
        "$S = [-2 ; 3]$."
      ] },
      { q: "4. Résoudre l’inéquation $-3x + 7 > 1 - x$.", pts: 2, sol: [
        "$-3x + x > 1 - 7$, soit $-2x > -6$.",
        "On divise par $-2$ (négatif) en changeant le sens : $x < 3$. $S = ]-\\infty ; 3[$."
      ] },
      { q: "5. Résoudre l’inéquation $\\dfrac{x + 1}{x - 4} \\geq 0$ à l’aide d’un tableau de signes.", pts: 3, sol: [
        "$x + 1$ s’annule en $-1$ ; $x - 4$ s’annule en $4$ (valeur interdite).",
        "@table{$x$ | $-\\infty$ | | $-1$ | | $4$ | | $+\\infty$ // $x + 1$ | | $-$ | $0$ | $+$ | | $+$ | // $x - 4$ | | $-$ | | $-$ | $0$ | $+$ | // quotient | | $+$ | $0$ | $-$ | ║ | $+$ | }",
        "$S = ]-\\infty ; -1] \\cup ]4 ; +\\infty[$ ($4$ est exclu)."
      ] }
    ]
  },

  // ---------- Chapitre 3 ----------
  {
    id: "C3-1", d: 3, o: ["J10", "J11", "J12", "J13"],
    title: "Étude d’une fonction rationnelle",
    intro: "On considère la fonction $f$ définie par $f(x) = \\dfrac{2x - 1}{x + 1}$.",
    questions: [
      { q: "1. Déterminer l’ensemble de définition de $f$.", pts: 1, sol: [
        "Le dénominateur s’annule pour $x = -1$ : $D_f = \\mathbb{R} \\setminus \\{-1\\}$."
      ] },
      { q: "2. Calculer les limites de $f$ en $-1$ (à gauche et à droite). Interpréter graphiquement.", pts: 2, sol: [
        "En $-1$, le numérateur tend vers $-3$.",
        "Pour $x > -1$, $x + 1 \\to 0^{+}$ donc $f(x) \\to -\\infty$ ; pour $x < -1$, $x + 1 \\to 0^{-}$ donc $f(x) \\to +\\infty$.",
        "La droite d’équation $x = -1$ est asymptote verticale à la courbe."
      ] },
      { q: "3. Calculer les limites de $f$ en $+\\infty$ et en $-\\infty$. Interpréter graphiquement.", pts: 2, sol: [
        "En $\\pm\\infty$, on garde les termes de plus haut degré : $\\frac{2x}{x} = 2$.",
        "La droite d’équation $y = 2$ est asymptote horizontale en $+\\infty$ et en $-\\infty$."
      ] },
      { q: "4. Calculer $f'(x)$ et en déduire le sens de variation de $f$.", pts: 2, sol: [
        "$f'(x) = \\frac{2(x + 1) - (2x - 1) \\times 1}{(x + 1)^{2}} = \\frac{3}{(x + 1)^{2}}$.",
        "$f'(x) > 0$ : $f$ est strictement croissante sur $]-\\infty ; -1[$ et sur $]-1 ; +\\infty[$."
      ] },
      { q: "5. Déterminer l’équation de la tangente à la courbe au point d’abscisse $0$.", pts: 2, sol: [
        "$f(0) = -1$ et $f'(0) = 3$.",
        "$y = 3(x - 0) + (-1)$, soit $y = 3x - 1$."
      ] },
      { q: "6. Étudier la position de la courbe par rapport à la droite $y = 2$.", pts: 1, sol: [
        "$f(x) - 2 = \\frac{2x - 1 - 2(x + 1)}{x + 1} = \\frac{-3}{x + 1}$.",
        "Pour $x < -1$, $f(x) - 2 > 0$ : courbe au-dessus. Pour $x > -1$, $f(x) - 2 < 0$ : courbe en dessous."
      ] }
    ]
  },
  {
    id: "C3-2", d: 3, o: ["J14", "J12"],
    title: "Théorème des valeurs intermédiaires",
    intro: "On considère la fonction $h$ définie sur $\\mathbb{R}$ par $h(x) = x^{3} - 3x - 1$.",
    questions: [
      { q: "1. Calculer $h'(x)$ et dresser le tableau de variations de $h$ (limites comprises).", pts: 2, sol: [
        "$h'(x) = 3x^{2} - 3 = 3(x - 1)(x + 1)$ : positif sur $]-\\infty ; -1[$ et $]1 ; +\\infty[$, négatif sur $]-1 ; 1[$.",
        "$\\lim\\limits_{x \\to -\\infty} h(x) = -\\infty$ et $\\lim\\limits_{x \\to +\\infty} h(x) = +\\infty$ (terme $x^{3}$).",
        "@table{$x$ | $-\\infty$ | | $-1$ | | $1$ | | $+\\infty$ // $h'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | // $h(x)$ | $-\\infty$ | ↗ | $1$ | ↘ | $-3$ | ↗ | $+\\infty$}"
      ] },
      { q: "2. Calculer $h(-1)$ et $h(1)$.", pts: 1, sol: [
        "$h(-1) = -1 + 3 - 1 = 1$ et $h(1) = 1 - 3 - 1 = -3$."
      ] },
      { q: "3. Démontrer que l’équation $h(x) = 0$ admet une unique solution $\\alpha$ dans $[1 ; 2]$.", pts: 3, sol: [
        "$h$ est continue (polynôme) et strictement croissante sur $[1 ; 2]$.",
        "$h(1) = -3 < 0$ et $h(2) = 8 - 6 - 1 = 1 > 0$.",
        "D’après le théorème des valeurs intermédiaires (cas strictement monotone), $h(x) = 0$ admet une unique solution $\\alpha$ dans $[1 ; 2]$."
      ] },
      { q: "4. Donner un encadrement de $\\alpha$ d’amplitude $0{,}1$.", pts: 2, sol: [
        "$h(1{,}8) = 5{,}832 - 5{,}4 - 1 = -0{,}568 < 0$ et $h(1{,}9) = 6{,}859 - 5{,}7 - 1 = 0{,}159 > 0$.",
        "Donc $1{,}8 < \\alpha < 1{,}9$."
      ] },
      { q: "5. Combien l’équation $h(x) = 0$ a-t-elle de solutions sur $\\mathbb{R}$ ? Justifier.", pts: 2, sol: [
        "Sur $]-\\infty ; -1]$, $h$ est continue et croît de $-\\infty$ à $1$ : une solution.",
        "Sur $[-1 ; 1]$, $h$ décroît de $1$ à $-3$ : une solution.",
        "Sur $[1 ; +\\infty[$, $h$ croît de $-3$ à $+\\infty$ : une solution ($\\alpha$).",
        "L’équation a donc 3 solutions sur $\\mathbb{R}$."
      ] }
    ]
  },
  {
    id: "C3-3", d: 3, o: ["J16", "J17", "J18"],
    title: "Exponentielle, logarithme et intégrale",
    intro: "On considère la fonction $f$ définie sur $[0 ; +\\infty[$ par $f(x) = (x + 1)e^{-x}$.",
    questions: [
      { q: "1. Montrer que $f'(x) = -xe^{-x}$ et en déduire le sens de variation de $f$ sur $[0 ; +\\infty[$.", pts: 2, sol: [
        "Dérivée d’un produit avec $(e^{-x})' = -e^{-x}$ : $f'(x) = 1 \\times e^{-x} + (x + 1)(-e^{-x}) = -xe^{-x}$.",
        "Pour $x \\geq 0$, $-x \\leq 0$ et $e^{-x} > 0$ : $f'(x) \\leq 0$. $f$ est décroissante sur $[0 ; +\\infty[$, de $f(0) = 1$."
      ] },
      { q: "2. Déterminer la limite de $f$ en $+\\infty$. Interpréter graphiquement.", pts: 2, sol: [
        "$f(x) = \\frac{x}{e^{x}} + e^{-x}$.",
        "Par croissances comparées, $\\frac{x}{e^{x}} \\to 0$ ; et $e^{-x} \\to 0$. Donc $f(x) \\to 0$.",
        "L’axe des abscisses ($y = 0$) est asymptote horizontale en $+\\infty$."
      ] },
      { q: "3. Vérifier que $F(x) = (-x - 2)e^{-x}$ est une primitive de $f$.", pts: 2, sol: [
        "$F'(x) = -e^{-x} + (-x - 2)(-e^{-x}) = (-1 + x + 2)e^{-x} = (x + 1)e^{-x} = f(x)$."
      ] },
      { q: "4. Calculer $I = \\displaystyle\\int_{0}^{1} f(x)\\,dx$. Donner la valeur exacte puis une valeur approchée à $10^{-2}$ près.", pts: 2, sol: [
        "$I = F(1) - F(0) = -3e^{-1} - (-2) = 2 - \\frac{3}{e}$.",
        "$I \\approx 0{,}90$. Comme $f \\geq 0$, c’est l’aire sous la courbe entre $0$ et $1$, en unités d’aire."
      ] },
      { q: "5. Résoudre l’équation $\\ln(2x + 1) = \\ln(x + 4)$.", pts: 2, sol: [
        "Conditions : $2x + 1 > 0$ et $x + 4 > 0$, soit $x > -\\frac{1}{2}$.",
        "$\\ln a = \\ln b \\iff a = b$ : $2x + 1 = x + 4$, donc $x = 3$, qui vérifie la condition. $S = \\{3\\}$."
      ] }
    ]
  },

  // ---------- Chapitre 4 ----------
  {
    id: "C4-1", d: 4, o: ["J9"],
    title: "Étude statistique de résultats",
    intro: "Voici les notes obtenues par 25 candidats à un examen : @table{Note | $6$ | $8$ | $10$ | $12$ | $14$ | $16$ // Effectif | $2$ | $4$ | $6$ | $7$ | $4$ | $2$}",
    questions: [
      { q: "1. Préciser la population et la nature du caractère étudié.", pts: 1, sol: [
        "Population : les 25 candidats. Caractère : la note, quantitatif discret."
      ] },
      { q: "2. Calculer la note moyenne.", pts: 2, sol: [
        "$\\sum n_ix_i = 12 + 32 + 60 + 84 + 56 + 32 = 276$.",
        "$\\bar{x} = \\frac{276}{25} = 11{,}04$."
      ] },
      { q: "3. Déterminer la médiane et les quartiles $Q_1$ et $Q_3$.", pts: 3, sol: [
        "Effectifs cumulés croissants : $2$ ; $6$ ; $12$ ; $19$ ; $23$ ; $25$.",
        "$N = 25$ est impair : la médiane est la 13e valeur, soit $Me = 12$.",
        "$Q_1$ : 25 % de 25 = $6{,}25$, rang 7, soit $Q_1 = 10$. $Q_3$ : 75 % de 25 = $18{,}75$, rang 19, soit $Q_3 = 12$."
      ] },
      { q: "4. Calculer l’écart-type (arrondi au centième).", pts: 2, sol: [
        "$\\sum n_ix_i^{2} = 72 + 256 + 600 + 1\\,008 + 784 + 512 = 3\\,232$.",
        "$V = \\frac{3\\,232}{25} - 11{,}04^{2} = 129{,}28 - 121{,}881\\,6 = 7{,}398\\,4$.",
        "$\\sigma = \\sqrt{7{,}398\\,4} \\approx 2{,}72$."
      ] },
      { q: "5. Quel pourcentage des candidats a obtenu au moins $10$ ?", pts: 2, sol: [
        "Effectif : $6 + 7 + 4 + 2 = 19$.",
        "$\\frac{19}{25} = 0{,}76$, soit 76 %."
      ] }
    ]
  },
  {
    id: "C4-2", d: 4, o: ["J19", "J20"],
    title: "Probabilités conditionnelles et loi binomiale",
    intro: "Dans un magasin, 60 % des clients paient par carte (événement $C$), les autres en espèces. Parmi les clients qui paient par carte, 20 % achètent un produit en promotion (événement $P$) ; parmi ceux qui paient en espèces, 35 %.",
    questions: [
      { q: "1. Représenter la situation par un arbre pondéré.", pts: 1, sol: [
        "Premier niveau : $C$ ($0{,}6$) et $\\bar{C}$ ($0{,}4$).",
        "Après $C$ : $P$ ($0{,}2$) et $\\bar{P}$ ($0{,}8$). Après $\\bar{C}$ : $P$ ($0{,}35$) et $\\bar{P}$ ($0{,}65$)."
      ] },
      { q: "2. Calculer $P(C \\cap P)$.", pts: 2, sol: [
        "$P(C \\cap P) = P(C) \\times P_C(P) = 0{,}6 \\times 0{,}2 = 0{,}12$."
      ] },
      { q: "3. Calculer $P(P)$.", pts: 2, sol: [
        "Probabilités totales : $P(P) = 0{,}6 \\times 0{,}2 + 0{,}4 \\times 0{,}35 = 0{,}12 + 0{,}14 = 0{,}26$."
      ] },
      { q: "4. Un client a acheté un produit en promotion. Quelle est la probabilité qu’il ait payé par carte ?", pts: 2, sol: [
        "$P_P(C) = \\frac{P(C \\cap P)}{P(P)} = \\frac{0{,}12}{0{,}26} \\approx 0{,}462$."
      ] },
      { q: "5. On choisit 5 clients au hasard, de façon indépendante. $X$ est le nombre de clients ayant acheté un produit en promotion. Donner la loi de $X$, calculer $P(X = 2)$ et $E(X)$.", pts: 3, sol: [
        "5 répétitions identiques et indépendantes d’une épreuve à deux issues (succès : $P$, de probabilité $0{,}26$) : $X$ suit $\\mathcal{B}(5 ; 0{,}26)$.",
        "$P(X = 2) = \\binom{5}{2} \\times 0{,}26^{2} \\times 0{,}74^{3} = 10 \\times 0{,}067\\,6 \\times 0{,}405\\,224 \\approx 0{,}274$.",
        "$E(X) = 5 \\times 0{,}26 = 1{,}3$."
      ] }
    ]
  },

  // ---------- Chapitre 5 ----------
  {
    id: "C5-1", d: 5, o: ["J15"],
    title: "Évolution d’une population",
    intro: "Une ville compte $20\\,000$ habitants en 2024. Chaque année, la population diminue de 3 %, mais $900$ nouveaux habitants s’installent. On note $u_n$ le nombre d’habitants en $2024 + n$ : $u_0 = 20\\,000$ et $u_{n+1} = 0{,}97u_n + 900$.",
    questions: [
      { q: "1. Calculer $u_1$.", pts: 1, sol: [
        "$u_1 = 0{,}97 \\times 20\\,000 + 900 = 19\\,400 + 900 = 20\\,300$."
      ] },
      { q: "2. On pose $v_n = u_n - 30\\,000$. Montrer que $(v_n)$ est géométrique de raison $0{,}97$.", pts: 2, sol: [
        "$v_{n+1} = u_{n+1} - 30\\,000 = 0{,}97u_n + 900 - 30\\,000 = 0{,}97u_n - 29\\,100$.",
        "Or $0{,}97 \\times 30\\,000 = 29\\,100$, donc $v_{n+1} = 0{,}97(u_n - 30\\,000) = 0{,}97v_n$."
      ] },
      { q: "3. Exprimer $v_n$, puis $u_n$, en fonction de $n$.", pts: 2, sol: [
        "$v_0 = 20\\,000 - 30\\,000 = -10\\,000$, donc $v_n = -10\\,000 \\times 0{,}97^{n}$.",
        "$u_n = 30\\,000 - 10\\,000 \\times 0{,}97^{n}$."
      ] },
      { q: "4. Étudier le sens de variation de $(u_n)$ et sa limite.", pts: 2, sol: [
        "$0{,}97^{n}$ décroît, donc $-10\\,000 \\times 0{,}97^{n}$ croît : $(u_n)$ est croissante.",
        "Comme $0 < 0{,}97 < 1$, $0{,}97^{n} \\to 0$ : $u_n$ tend vers $30\\,000$ habitants."
      ] },
      { q: "5. En quelle année la population dépassera-t-elle $25\\,000$ habitants ?", pts: 3, sol: [
        "$u_n > 25\\,000 \\iff 10\\,000 \\times 0{,}97^{n} < 5\\,000 \\iff 0{,}97^{n} < 0{,}5$.",
        "$n \\ln 0{,}97 < \\ln 0{,}5 \\iff n > \\frac{\\ln 0{,}5}{\\ln 0{,}97} \\approx 22{,}8$ (on change le sens car $\\ln 0{,}97 < 0$).",
        "$n = 23$ : la population dépassera $25\\,000$ habitants en 2047."
      ] }
    ]
  },

  // ---------- Chapitre 6 (facultatif) ----------
  {
    id: "C6-1", d: 6, o: ["J21", "J22"],
    title: "Trigonométrie et nombres complexes",
    intro: "Exercice portant sur des notions facultatives. On considère $z_1 = 1 + i$ et $z_2 = \\sqrt{3} - i$.",
    questions: [
      { q: "1. Donner les valeurs exactes de $\\cos \\dfrac{2\\pi}{3}$ et $\\sin \\dfrac{2\\pi}{3}$.", pts: 2, sol: [
        "$\\frac{2\\pi}{3} = \\pi - \\frac{\\pi}{3}$ : $\\cos \\frac{2\\pi}{3} = -\\cos \\frac{\\pi}{3} = -\\frac{1}{2}$ et $\\sin \\frac{2\\pi}{3} = \\sin \\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$."
      ] },
      { q: "2. Écrire $z_1z_2$ sous forme algébrique.", pts: 2, sol: [
        "$z_1z_2 = \\sqrt{3} - i + i\\sqrt{3} - i^{2} = (\\sqrt{3} + 1) + i(\\sqrt{3} - 1)$."
      ] },
      { q: "3. Déterminer le module et un argument de $z_1$ et de $z_2$.", pts: 2, sol: [
        "$|z_1| = \\sqrt{2}$ ; $\\cos \\theta_1 = \\sin \\theta_1 = \\frac{\\sqrt{2}}{2}$, donc $\\theta_1 = \\frac{\\pi}{4}$.",
        "$|z_2| = \\sqrt{3 + 1} = 2$ ; $\\cos \\theta_2 = \\frac{\\sqrt{3}}{2}$ et $\\sin \\theta_2 = -\\frac{1}{2}$, donc $\\theta_2 = -\\frac{\\pi}{6}$."
      ] },
      { q: "4. En déduire la forme exponentielle de $z_1z_2$.", pts: 2, sol: [
        "Modules multipliés : $2\\sqrt{2}$. Arguments additionnés : $\\frac{\\pi}{4} - \\frac{\\pi}{6} = \\frac{\\pi}{12}$.",
        "$z_1z_2 = 2\\sqrt{2}\\, e^{i\\pi/12}$."
      ] },
      { q: "5. En comparant les deux écritures, en déduire la valeur exacte de $\\cos \\dfrac{\\pi}{12}$.", pts: 2, sol: [
        "Partie réelle : $2\\sqrt{2} \\cos \\frac{\\pi}{12} = \\sqrt{3} + 1$.",
        "$\\cos \\frac{\\pi}{12} = \\frac{\\sqrt{3} + 1}{2\\sqrt{2}} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$."
      ] }
    ]
  },
  {
    id: "C6-2", d: 6, o: ["J23"],
    title: "Nombres complexes et transformations",
    intro: "Exercice portant sur des notions facultatives. Dans un repère orthonormé, $A$, $B$, $C$ ont pour affixes $z_A = 1$, $z_B = 3 + i$ et $z_C = 2i$.",
    questions: [
      { q: "1. Calculer les longueurs $AB$ et $AC$.", pts: 2, sol: [
        "$AB = |z_B - z_A| = |2 + i| = \\sqrt{5}$.",
        "$AC = |z_C - z_A| = |-1 + 2i| = \\sqrt{5}$."
      ] },
      { q: "2. Calculer $\\dfrac{z_C - z_A}{z_B - z_A}$. En déduire la nature du triangle $ABC$.", pts: 2, sol: [
        "$\\frac{-1 + 2i}{2 + i} = \\frac{(-1 + 2i)(2 - i)}{5} = \\frac{-2 + i + 4i + 2}{5} = i$.",
        "Module $1$ : $AC = AB$ ; argument $\\frac{\\pi}{2}$ : angle droit en $A$. $ABC$ est rectangle isocèle en $A$."
      ] },
      { q: "3. Déterminer l’affixe du point $D$ tel que $ABDC$ soit un parallélogramme. Quelle est la nature exacte de $ABDC$ ?", pts: 2, sol: [
        "$ABDC$ parallélogramme $\\iff \\overrightarrow{AB} = \\overrightarrow{CD} \\iff z_D = z_C + z_B - z_A = 2 + 3i$.",
        "Un parallélogramme ayant un angle droit et deux côtés consécutifs égaux est un carré."
      ] },
      { q: "4. Donner l’écriture complexe de la rotation $r$ de centre $A$ et d’angle $\\dfrac{\\pi}{2}$, puis l’image de $B$ par $r$.", pts: 2, sol: [
        "$z' - 1 = i(z - 1)$, soit $z' = iz + 1 - i$.",
        "Image de $B$ : $i(3 + i) + 1 - i = 3i - 1 + 1 - i = 2i$ : c’est le point $C$."
      ] },
      { q: "5. Quelle est la nature de la transformation $z' = 2z - 1$ ? Déterminer l’image de $B$.", pts: 2, sol: [
        "$a = 2$ réel : homothétie de rapport $2$, de centre $\\omega = \\frac{-1}{1 - 2} = 1$, c’est-à-dire le point $A$.",
        "Image de $B$ : $2(3 + i) - 1 = 5 + 2i$."
      ] }
    ]
  }
];

const MOCK_EXAMS = [
  {
    id: "E1", title: "Examen blanc n° 1",
    exercises: [
      {
        title: "Étude d’une fonction polynôme", o: ["J12", "J14", "J18"],
        intro: "On considère la fonction $f$ définie sur $[0 ; 5]$ par $f(x) = x^{3} - 6x^{2} + 9x + 1$.",
        questions: [
          { q: "1. Calculer $f'(x)$ et vérifier que $f'(x) = 3(x - 1)(x - 3)$.", pts: 1.5, sol: [
            "$f'(x) = 3x^{2} - 12x + 9$.",
            "$3(x - 1)(x - 3) = 3(x^{2} - 4x + 3) = 3x^{2} - 12x + 9$."
          ] },
          { q: "2. Étudier le signe de $f'(x)$ et dresser le tableau de variations de $f$ sur $[0 ; 5]$.", pts: 2, sol: [
            "$f'$ est un trinôme de coefficient $3 > 0$, de racines $1$ et $3$ : positif sur $[0 ; 1[$ et $]3 ; 5]$, négatif sur $]1 ; 3[$.",
            "$f(0) = 1$ ; $f(1) = 1 - 6 + 9 + 1 = 5$ ; $f(3) = 27 - 54 + 27 + 1 = 1$ ; $f(5) = 125 - 150 + 45 + 1 = 21$.",
            "@table{$x$ | $0$ | | $1$ | | $3$ | | $5$ // $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | // $f(x)$ | $1$ | ↗ | $5$ | ↘ | $1$ | ↗ | $21$}"
          ] },
          { q: "3. Déterminer l’équation de la tangente à la courbe de $f$ au point d’abscisse $2$.", pts: 1.5, sol: [
            "$f(2) = 8 - 24 + 18 + 1 = 3$ et $f'(2) = 12 - 24 + 9 = -3$.",
            "$y = -3(x - 2) + 3$, soit $y = -3x + 9$."
          ] },
          { q: "4. Déterminer le nombre de solutions de l’équation $f(x) = 4$ sur $[0 ; 5]$. Justifier.", pts: 1.5, sol: [
            "Sur $[0 ; 1]$, $f$ est continue et strictement croissante de $1$ à $5$ : $4$ est atteint une fois.",
            "Sur $[1 ; 3]$, $f$ est strictement décroissante de $5$ à $1$ : une solution.",
            "Sur $[3 ; 5]$, $f$ est strictement croissante de $1$ à $21$ : une solution.",
            "L’équation a 3 solutions sur $[0 ; 5]$ (théorème des valeurs intermédiaires)."
          ] },
          { q: "5. Calculer $\\displaystyle\\int_{0}^{2} f(x)\\,dx$.", pts: 1.5, sol: [
            "Une primitive de $f$ est $F(x) = \\frac{x^{4}}{4} - 2x^{3} + \\frac{9x^{2}}{2} + x$.",
            "$F(2) = 4 - 16 + 18 + 2 = 8$ et $F(0) = 0$. L’intégrale vaut $8$."
          ] }
        ]
      },
      {
        title: "Tirages dans une urne", o: ["J19", "J20"],
        intro: "Une urne contient 3 boules rouges et 7 boules blanches, indiscernables au toucher. On tire une boule, on note sa couleur et on la remet dans l’urne. On effectue 4 tirages. $X$ est le nombre de boules rouges obtenues.",
        questions: [
          { q: "1. Quelle est la probabilité de tirer une boule rouge lors d’un tirage ?", pts: 1, sol: [
            "Situation d’équiprobabilité : $\\frac{3}{10} = 0{,}3$."
          ] },
          { q: "2. Justifier que $X$ suit une loi binomiale dont on précisera les paramètres.", pts: 1, sol: [
            "On répète 4 fois, de façon identique et indépendante (tirages avec remise), une épreuve à deux issues : rouge (succès, $p = 0{,}3$) ou blanche.",
            "$X$ compte les succès : $X$ suit $\\mathcal{B}(4 ; 0{,}3)$."
          ] },
          { q: "3. Calculer $P(X = 2)$.", pts: 1.5, sol: [
            "$P(X = 2) = \\binom{4}{2} \\times 0{,}3^{2} \\times 0{,}7^{2} = 6 \\times 0{,}09 \\times 0{,}49 = 0{,}264\\,6$."
          ] },
          { q: "4. Calculer la probabilité d’obtenir au moins une boule rouge.", pts: 1.5, sol: [
            "$P(X \\geq 1) = 1 - P(X = 0) = 1 - 0{,}7^{4} = 1 - 0{,}240\\,1 = 0{,}759\\,9$."
          ] },
          { q: "5. Calculer l’espérance de $X$ et l’interpréter.", pts: 1, sol: [
            "$E(X) = np = 4 \\times 0{,}3 = 1{,}2$.",
            "Sur un grand nombre de séries de 4 tirages, on obtient en moyenne $1{,}2$ boule rouge par série."
          ] }
        ]
      },
      {
        title: "Placement avec versements", o: ["J15", "J16"],
        intro: "Au 1er janvier 2025, une personne place $5\\,000$ € à 3 % d’intérêts composés par an. Chaque année, après le versement des intérêts, elle ajoute $300$ €. On note $u_n$ le capital au 1er janvier de l’année $2025 + n$ : $u_0 = 5\\,000$ et $u_{n+1} = 1{,}03u_n + 300$.",
        questions: [
          { q: "1. Calculer $u_1$ et $u_2$.", pts: 1, sol: [
            "$u_1 = 1{,}03 \\times 5\\,000 + 300 = 5\\,450$.",
            "$u_2 = 1{,}03 \\times 5\\,450 + 300 = 5\\,613{,}5 + 300 = 5\\,913{,}5$."
          ] },
          { q: "2. On pose $v_n = u_n + 10\\,000$. Montrer que $(v_n)$ est une suite géométrique de raison $1{,}03$.", pts: 1.5, sol: [
            "$v_{n+1} = u_{n+1} + 10\\,000 = 1{,}03u_n + 10\\,300$.",
            "Or $1{,}03 \\times 10\\,000 = 10\\,300$, donc $v_{n+1} = 1{,}03(u_n + 10\\,000) = 1{,}03v_n$."
          ] },
          { q: "3. Exprimer $v_n$, puis $u_n$, en fonction de $n$.", pts: 1.5, sol: [
            "$v_0 = 15\\,000$, donc $v_n = 15\\,000 \\times 1{,}03^{n}$.",
            "$u_n = 15\\,000 \\times 1{,}03^{n} - 10\\,000$. Vérification : $u_1 = 15\\,450 - 10\\,000 = 5\\,450$."
          ] },
          { q: "4. Le capital est-il croissant ? Justifier.", pts: 1, sol: [
            "$1{,}03 > 1$ donc $1{,}03^{n}$ est croissante, et $15\\,000 > 0$ : $(u_n)$ est croissante."
          ] },
          { q: "5. À partir de quelle année le capital dépassera-t-il $10\\,000$ € ?", pts: 1, sol: [
            "$u_n \\geq 10\\,000 \\iff 1{,}03^{n} \\geq \\frac{4}{3} \\iff n \\geq \\frac{\\ln(4/3)}{\\ln 1{,}03} \\approx 9{,}7$.",
            "$n = 10$ : le capital dépassera $10\\,000$ € en 2035."
          ] }
        ]
      }
    ]
  },
  {
    id: "E2", title: "Examen blanc n° 2",
    exercises: [
      {
        title: "Fonction exponentielle", o: ["J17", "J12", "J13", "J18"],
        intro: "On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = (2 - x)e^{x}$.",
        questions: [
          { q: "1. Déterminer les limites de $f$ en $-\\infty$ et en $+\\infty$. Interpréter graphiquement l’une d’elles.", pts: 1.5, sol: [
            "En $+\\infty$ : $2 - x \\to -\\infty$ et $e^{x} \\to +\\infty$, donc $f(x) \\to -\\infty$.",
            "En $-\\infty$ : $f(x) = 2e^{x} - xe^{x}$. $e^{x} \\to 0$ et, par croissances comparées, $xe^{x} \\to 0$. Donc $f(x) \\to 0$.",
            "L’axe des abscisses ($y = 0$) est asymptote horizontale en $-\\infty$."
          ] },
          { q: "2. Montrer que $f'(x) = (1 - x)e^{x}$.", pts: 1.5, sol: [
            "$f'(x) = -1 \\times e^{x} + (2 - x)e^{x} = (1 - x)e^{x}$."
          ] },
          { q: "3. Dresser le tableau de variations de $f$.", pts: 1.5, sol: [
            "$e^{x} > 0$ : $f'(x)$ a le signe de $1 - x$, positif pour $x < 1$, négatif pour $x > 1$.",
            "$f$ est croissante sur $]-\\infty ; 1]$ et décroissante sur $[1 ; +\\infty[$, avec un maximum $f(1) = e$."
          ] },
          { q: "4. Résoudre $f(x) = 0$ et donner le signe de $f(x)$.", pts: 1, sol: [
            "$e^{x} \\neq 0$, donc $f(x) = 0 \\iff 2 - x = 0 \\iff x = 2$.",
            "$f(x) > 0$ pour $x < 2$ et $f(x) < 0$ pour $x > 2$."
          ] },
          { q: "5. Vérifier que $F(x) = (3 - x)e^{x}$ est une primitive de $f$, puis calculer l’aire, en unités d’aire, du domaine limité par la courbe, l’axe des abscisses et les droites $x = 0$ et $x = 2$.", pts: 1.5, sol: [
            "$F'(x) = -e^{x} + (3 - x)e^{x} = (2 - x)e^{x} = f(x)$.",
            "$f \\geq 0$ sur $[0 ; 2]$, donc l’aire vaut $F(2) - F(0) = e^{2} - 3 \\approx 4{,}39$ u.a."
          ] }
        ]
      },
      {
        title: "Temps d’attente à un guichet", o: ["J9", "J19"],
        intro: "On a relevé le temps d’attente, en minutes, de 50 clients à un guichet : @table{Temps (min) | $[0 ; 5[$ | $[5 ; 10[$ | $[10 ; 15[$ | $[15 ; 20[$ // Effectif | $12$ | $20$ | $10$ | $8$}",
        questions: [
          { q: "1. Quelle est la nature du caractère étudié ?", pts: 1, sol: [
            "Le temps d’attente est un caractère quantitatif continu, regroupé en classes."
          ] },
          { q: "2. Estimer le temps d’attente moyen.", pts: 2, sol: [
            "Centres des classes : $2{,}5$ ; $7{,}5$ ; $12{,}5$ ; $17{,}5$.",
            "$\\bar{x} = \\frac{12 \\times 2{,}5 + 20 \\times 7{,}5 + 10 \\times 12{,}5 + 8 \\times 17{,}5}{50} = \\frac{445}{50} = 8{,}9$ minutes."
          ] },
          { q: "3. Dans quelle classe se trouve la médiane ? Justifier.", pts: 1.5, sol: [
            "Effectifs cumulés : $12$ ; $32$ ; $42$ ; $50$.",
            "Les 25e et 26e valeurs sont dans la classe $[5 ; 10[$, qui contient donc la médiane."
          ] },
          { q: "4. Quel pourcentage des clients a attendu au moins 10 minutes ?", pts: 1.5, sol: [
            "$10 + 8 = 18$ clients, soit $\\frac{18}{50} = 36$ %."
          ] },
          { q: "5. On choisit un client au hasard. Quelle est la probabilité qu’il ait attendu moins de 5 minutes ?", pts: 1, sol: [
            "Équiprobabilité : $\\frac{12}{50} = 0{,}24$."
          ] }
        ]
      },
      {
        title: "Bénéfice d’un artisan", o: ["J7", "J8", "J6"],
        intro: "Un artisan fabrique et vend $x$ objets par semaine ($0 \\leq x \\leq 40$). Son bénéfice hebdomadaire, en euros, est $B(x) = -x^{2} + 40x - 300$.",
        questions: [
          { q: "1. Résoudre l’équation $B(x) = 0$.", pts: 1.5, sol: [
            "$-x^{2} + 40x - 300 = 0 \\iff x^{2} - 40x + 300 = 0$ ; $\\Delta = 1\\,600 - 1\\,200 = 400$.",
            "$x = \\frac{40 - 20}{2} = 10$ ou $x = \\frac{40 + 20}{2} = 30$."
          ] },
          { q: "2. Pour quelles quantités l’artisan réalise-t-il un bénéfice strictement positif ?", pts: 1.5, sol: [
            "$a = -1 < 0$ : $B(x)$ est positif entre les racines.",
            "$B(x) > 0$ pour $10 < x < 30$."
          ] },
          { q: "3. Quel est le bénéfice maximal, et pour quelle quantité ?", pts: 1, sol: [
            "Sommet de la parabole : $\\alpha = -\\frac{40}{2 \\times (-1)} = 20$.",
            "$B(20) = -400 + 800 - 300 = 100$ € pour 20 objets."
          ] },
          { q: "4. L’artisan vend deux modèles A et B. 3 objets A et 2 objets B rapportent $190$ € ; 2 objets A et 5 objets B rapportent $255$ €. Déterminer le prix de chaque modèle.", pts: 2, sol: [
            "$\\begin{cases} 3A + 2B = 190 \\\\ 2A + 5B = 255 \\end{cases}$",
            "On multiplie la première par $2$ et la seconde par $3$ : $6A + 4B = 380$ et $6A + 15B = 765$. Par soustraction : $11B = 385$, donc $B = 35$.",
            "$3A = 190 - 70 = 120$, donc $A = 40$. Vérification : $80 + 175 = 255$."
          ] }
        ]
      }
    ]
  },
  {
    id: "E3", title: "Examen blanc n° 3",
    exercises: [
      {
        title: "Fonction logarithme", o: ["J16", "J11", "J13", "J12", "J18"],
        intro: "On considère la fonction $f$ définie sur $]0 ; +\\infty[$ par $f(x) = \\dfrac{\\ln x}{x}$.",
        questions: [
          { q: "1. Déterminer les limites de $f$ en $0$ et en $+\\infty$. En déduire les asymptotes de la courbe.", pts: 1.5, sol: [
            "En $0^{+}$ : $\\ln x \\to -\\infty$ et $x \\to 0^{+}$, donc $f(x) \\to -\\infty$. La droite $x = 0$ est asymptote verticale.",
            "En $+\\infty$ : par croissances comparées, $\\frac{\\ln x}{x} \\to 0$. La droite $y = 0$ est asymptote horizontale."
          ] },
          { q: "2. Montrer que $f'(x) = \\dfrac{1 - \\ln x}{x^{2}}$.", pts: 2, sol: [
            "$f'(x) = \\frac{\\frac{1}{x} \\times x - \\ln x \\times 1}{x^{2}} = \\frac{1 - \\ln x}{x^{2}}$."
          ] },
          { q: "3. Dresser le tableau de variations de $f$.", pts: 1.5, sol: [
            "$x^{2} > 0$, donc $f'(x)$ a le signe de $1 - \\ln x$ : positif pour $x < e$, négatif pour $x > e$.",
            "$f$ est croissante sur $]0 ; e]$ et décroissante sur $[e ; +\\infty[$, avec un maximum $f(e) = \\frac{1}{e}$."
          ] },
          { q: "4. Étudier le signe de $f(x)$.", pts: 1, sol: [
            "$x > 0$, donc $f(x)$ a le signe de $\\ln x$ : négatif sur $]0 ; 1[$, nul en $1$, positif sur $]1 ; +\\infty[$."
          ] },
          { q: "5. Vérifier que $F(x) = \\dfrac{1}{2}(\\ln x)^{2}$ est une primitive de $f$, puis calculer $\\displaystyle\\int_{1}^{e} f(x)\\,dx$.", pts: 2, sol: [
            "$F'(x) = \\frac{1}{2} \\times 2 \\times \\frac{1}{x} \\times \\ln x = \\frac{\\ln x}{x} = f(x)$.",
            "$\\int_{1}^{e} f(x)\\,dx = F(e) - F(1) = \\frac{1}{2} - 0 = \\frac{1}{2}$."
          ] }
        ]
      },
      {
        title: "Composants défectueux", o: ["J19", "J20"],
        intro: "Une entreprise fabrique des composants sur deux machines : la machine $M_1$ produit 70 % des composants, la machine $M_2$ le reste. 2 % des composants issus de $M_1$ et 5 % de ceux issus de $M_2$ sont défectueux (événement $D$).",
        questions: [
          { q: "1. Construire un arbre pondéré.", pts: 1, sol: [
            "$M_1$ ($0{,}7$) puis $D$ ($0{,}02$) et $\\bar{D}$ ($0{,}98$) ; $M_2$ ($0{,}3$) puis $D$ ($0{,}05$) et $\\bar{D}$ ($0{,}95$)."
          ] },
          { q: "2. Calculer la probabilité qu’un composant soit défectueux.", pts: 1.5, sol: [
            "$P(D) = 0{,}7 \\times 0{,}02 + 0{,}3 \\times 0{,}05 = 0{,}014 + 0{,}015 = 0{,}029$."
          ] },
          { q: "3. Un composant est défectueux. Quelle est la probabilité qu’il provienne de $M_2$ ?", pts: 1.5, sol: [
            "$P_D(M_2) = \\frac{0{,}015}{0{,}029} \\approx 0{,}517$."
          ] },
          { q: "4. On contrôle 20 composants, en assimilant les tirages à des tirages avec remise. $Y$ est le nombre de composants défectueux. Donner la loi de $Y$ et calculer la probabilité qu’au moins un composant soit défectueux.", pts: 2, sol: [
            "$Y$ suit $\\mathcal{B}(20 ; 0{,}029)$.",
            "$P(Y \\geq 1) = 1 - P(Y = 0) = 1 - 0{,}971^{20} \\approx 1 - 0{,}555 = 0{,}445$."
          ] }
        ]
      },
      {
        title: "Calcul algébrique et équations", o: ["J4", "J5", "J2", "J3"],
        intro: "Les questions sont indépendantes.",
        questions: [
          { q: "1. Factoriser $A = (3x - 1)^{2} - (x + 2)(3x - 1)$.", pts: 1.5, sol: [
            "Facteur commun $(3x - 1)$ : $A = (3x - 1)[(3x - 1) - (x + 2)]$.",
            "$A = (3x - 1)(2x - 3)$."
          ] },
          { q: "2. Résoudre l’équation $A = 0$.", pts: 1, sol: [
            "Produit nul : $3x - 1 = 0$ ou $2x - 3 = 0$, donc $x = \\frac{1}{3}$ ou $x = \\frac{3}{2}$."
          ] },
          { q: "3. Pour $x \\neq 1$ et $x \\neq -1$, écrire $B = \\dfrac{3}{x - 1} - \\dfrac{2}{x + 1}$ sous forme d’une seule fraction, puis résoudre $B = 0$.", pts: 1.5, sol: [
            "Dénominateur commun $(x - 1)(x + 1)$ : $B = \\frac{3(x + 1) - 2(x - 1)}{(x - 1)(x + 1)} = \\frac{x + 5}{(x - 1)(x + 1)}$.",
            "$B = 0 \\iff x + 5 = 0 \\iff x = -5$ (valeur autorisée)."
          ] },
          { q: "4. Écrire $C = \\sqrt{12} \\times \\sqrt{6} - \\dfrac{10}{\\sqrt{2}}$ sous la forme $a\\sqrt{2}$.", pts: 2, sol: [
            "$\\sqrt{12} \\times \\sqrt{6} = \\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$.",
            "$\\frac{10}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$.",
            "$C = 6\\sqrt{2} - 5\\sqrt{2} = \\sqrt{2}$."
          ] }
        ]
      }
    ]
  },
  {
    id: "E4", title: "Examen blanc n° 4",
    exercises: [
      {
        title: "Polynôme et valeurs intermédiaires", o: ["J12", "J11", "J14"],
        intro: "On considère la fonction $g$ définie sur $\\mathbb{R}$ par $g(x) = 2x^{3} - 3x^{2} - 1$.",
        questions: [
          { q: "1. Déterminer les limites de $g$ en $-\\infty$ et en $+\\infty$.", pts: 1, sol: [
            "Un polynôme a la limite de son terme de plus haut degré, $2x^{3}$ : $\\lim\\limits_{x \\to -\\infty} g(x) = -\\infty$ et $\\lim\\limits_{x \\to +\\infty} g(x) = +\\infty$."
          ] },
          { q: "2. Calculer $g'(x)$ et dresser le tableau de variations de $g$.", pts: 2, sol: [
            "$g'(x) = 6x^{2} - 6x = 6x(x - 1)$ : positif sur $]-\\infty ; 0[$ et $]1 ; +\\infty[$, négatif sur $]0 ; 1[$.",
            "$g(0) = -1$ et $g(1) = 2 - 3 - 1 = -2$.",
            "@table{$x$ | $-\\infty$ | | $0$ | | $1$ | | $+\\infty$ // $g'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | // $g(x)$ | $-\\infty$ | ↗ | $-1$ | ↘ | $-2$ | ↗ | $+\\infty$}"
          ] },
          { q: "3. Démontrer que l’équation $g(x) = 0$ admet une unique solution $\\alpha$ sur $\\mathbb{R}$.", pts: 2, sol: [
            "Sur $]-\\infty ; 1]$, le maximum de $g$ est $g(0) = -1 < 0$ : $g$ ne s’annule pas.",
            "Sur $[1 ; +\\infty[$, $g$ est continue et strictement croissante, de $g(1) = -2$ à $+\\infty$ : $0$ est atteint une seule fois.",
            "L’équation a donc une unique solution $\\alpha$ sur $\\mathbb{R}$, et $\\alpha > 1$."
          ] },
          { q: "4. Donner un encadrement de $\\alpha$ d’amplitude $0{,}1$.", pts: 1, sol: [
            "$g(1{,}6) = 8{,}192 - 7{,}68 - 1 = -0{,}488 < 0$ et $g(1{,}7) = 9{,}826 - 8{,}67 - 1 = 0{,}156 > 0$.",
            "Donc $1{,}6 < \\alpha < 1{,}7$."
          ] },
          { q: "5. En déduire le signe de $g(x)$ sur $\\mathbb{R}$.", pts: 1, sol: [
            "$g(x) < 0$ pour $x < \\alpha$, $g(\\alpha) = 0$ et $g(x) > 0$ pour $x > \\alpha$."
          ] }
        ]
      },
      {
        title: "Un jeu est-il favorable ?", o: ["J19", "J20"],
        intro: "Une urne contient 3 boules rouges et 2 boules noires. Un joueur mise $2$ € puis tire simultanément 2 boules. S’il obtient 2 boules rouges, il reçoit $4$ € ; s’il obtient 2 boules noires, il reçoit $10$ € ; sinon, il ne reçoit rien. $X$ désigne le gain algébrique du joueur (somme reçue moins la mise).",
        questions: [
          { q: "1. Combien y a-t-il de tirages possibles ? Calculer la probabilité de chaque résultat (2 rouges, 2 noires, une de chaque couleur).", pts: 1.5, sol: [
            "Nombre de tirages : $\\binom{5}{2} = 10$.",
            "2 rouges : $\\frac{\\binom{3}{2}}{10} = 0{,}3$ ; 2 noires : $\\frac{\\binom{2}{2}}{10} = 0{,}1$ ; une de chaque : $\\frac{3 \\times 2}{10} = 0{,}6$."
          ] },
          { q: "2. Donner la loi de probabilité de $X$.", pts: 1.5, sol: [
            "2 rouges : $X = 4 - 2 = 2$ ; 2 noires : $X = 10 - 2 = 8$ ; sinon $X = -2$.",
            "@table{$x_i$ | $-2$ | $2$ | $8$ // $P(X = x_i)$ | $0{,}6$ | $0{,}3$ | $0{,}1$}"
          ] },
          { q: "3. Calculer $E(X)$. Le jeu est-il favorable au joueur ?", pts: 1.5, sol: [
            "$E(X) = -2 \\times 0{,}6 + 2 \\times 0{,}3 + 8 \\times 0{,}1 = -1{,}2 + 0{,}6 + 0{,}8 = 0{,}2$.",
            "$E(X) > 0$ : le jeu est favorable au joueur (gain moyen de $0{,}20$ € par partie)."
          ] },
          { q: "4. Calculer $V(X)$ et l’écart-type de $X$.", pts: 1.5, sol: [
            "$E(X^{2}) = 4 \\times 0{,}6 + 4 \\times 0{,}3 + 64 \\times 0{,}1 = 2{,}4 + 1{,}2 + 6{,}4 = 10$.",
            "$V(X) = 10 - 0{,}2^{2} = 9{,}96$ et $\\sigma(X) \\approx 3{,}16$."
          ] },
          { q: "5. Quelle somme l’organisateur doit-il verser pour 2 boules noires pour que le jeu devienne équitable (les autres règles étant inchangées) ?", pts: 1, sol: [
            "Soit $g$ le gain algébrique pour 2 noires : $-1{,}2 + 0{,}6 + 0{,}1g = 0$, donc $g = 6$.",
            "Il faut verser $6 + 2 = 8$ € au lieu de $10$ €."
          ] }
        ]
      },
      {
        title: "Comparer deux offres de salaire", o: ["J15"],
        intro: "Une entreprise propose deux contrats. Contrat A : $1\\,800$ € par mois la première année, puis une augmentation de $50$ € par mois chaque année. Contrat B : $1\\,750$ € par mois la première année, puis une augmentation de 4 % chaque année. On note $a_n$ et $b_n$ les salaires mensuels de l’année $n + 1$ ($a_0 = 1\\,800$ et $b_0 = 1\\,750$).",
        questions: [
          { q: "1. Calculer $a_1$ et $b_1$.", pts: 1, sol: [
            "$a_1 = 1\\,800 + 50 = 1\\,850$ € ; $b_1 = 1\\,750 \\times 1{,}04 = 1\\,820$ €."
          ] },
          { q: "2. Préciser la nature de chaque suite et exprimer $a_n$ et $b_n$ en fonction de $n$.", pts: 1.5, sol: [
            "$(a_n)$ est arithmétique de raison $50$ : $a_n = 1\\,800 + 50n$.",
            "$(b_n)$ est géométrique de raison $1{,}04$ : $b_n = 1\\,750 \\times 1{,}04^{n}$."
          ] },
          { q: "3. Calculer les salaires mensuels de la 11e année ($n = 10$) avec chaque contrat.", pts: 1.5, sol: [
            "$a_{10} = 1\\,800 + 500 = 2\\,300$ €.",
            "$b_{10} = 1\\,750 \\times 1{,}04^{10} \\approx 2\\,590{,}43$ €."
          ] },
          { q: "4. À partir de quelle année le contrat B offre-t-il un salaire mensuel supérieur au contrat A ?", pts: 2, sol: [
            "$n = 2$ : $a_2 = 1\\,900$ et $b_2 = 1\\,750 \\times 1{,}04^{2} \\approx 1\\,892{,}80$ : A reste supérieur.",
            "$n = 3$ : $a_3 = 1\\,950$ et $b_3 \\approx 1\\,968{,}51$ : B devient supérieur.",
            "Le contrat B est plus avantageux à partir de la 4e année ($n = 3$)."
          ] }
        ]
      }
    ]
  },
  {
    id: "E5", title: "Examen blanc n° 5",
    exercises: [
      {
        title: "Exponentielle et tangente", o: ["J17", "J12", "J18"],
        intro: "On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = x + 1 - e^{x}$.",
        questions: [
          { q: "1. Déterminer les limites de $f$ en $-\\infty$ et en $+\\infty$.", pts: 1.5, sol: [
            "En $-\\infty$ : $x + 1 \\to -\\infty$ et $e^{x} \\to 0$, donc $f(x) \\to -\\infty$.",
            "En $+\\infty$ : forme « $\\infty - \\infty$ ». On écrit $f(x) = e^{x}\\left(\\frac{x}{e^{x}} + \\frac{1}{e^{x}} - 1\\right)$ ; par croissances comparées la parenthèse tend vers $-1$, donc $f(x) \\to -\\infty$."
          ] },
          { q: "2. Calculer $f'(x)$ et dresser le tableau de variations de $f$.", pts: 1.5, sol: [
            "$f'(x) = 1 - e^{x}$ : positif pour $x < 0$ ($e^{x} < 1$), négatif pour $x > 0$.",
            "$f$ est croissante sur $]-\\infty ; 0]$ et décroissante sur $[0 ; +\\infty[$, avec un maximum $f(0) = 0 + 1 - 1 = 0$."
          ] },
          { q: "3. En déduire que pour tout réel $x$, $e^{x} \\geq x + 1$.", pts: 1.5, sol: [
            "Le maximum de $f$ est $0$, donc $f(x) \\leq 0$ pour tout $x$, soit $x + 1 - e^{x} \\leq 0$ et $e^{x} \\geq x + 1$."
          ] },
          { q: "4. Déterminer l’équation de la tangente $T$ à la courbe de la fonction exponentielle au point d’abscisse $0$. Interpréter le résultat de la question 3.", pts: 1.5, sol: [
            "$e^{0} = 1$ et $(e^{x})' = e^{x}$ vaut $1$ en $0$ : $T : y = 1 \\times (x - 0) + 1 = x + 1$.",
            "La courbe de l’exponentielle est toujours au-dessus de sa tangente en $0$."
          ] },
          { q: "5. Calculer l’aire, en unités d’aire, du domaine compris entre la courbe de l’exponentielle, la droite $T$ et les droites $x = 0$ et $x = 1$.", pts: 2, sol: [
            "Sur $[0 ; 1]$, $e^{x} \\geq x + 1$ : aire $= \\int_{0}^{1} (e^{x} - x - 1)\\,dx$.",
            "$= \\left[e^{x} - \\frac{x^{2}}{2} - x\\right]_{0}^{1} = \\left(e - \\frac{1}{2} - 1\\right) - 1 = e - \\frac{5}{2} \\approx 0{,}22$ u.a."
          ] }
        ]
      },
      {
        title: "Temps de course", o: ["J9"],
        intro: "Voici les temps, en minutes, de 11 coureurs sur un parcours : $42$ ; $45$ ; $38$ ; $50$ ; $47$ ; $41$ ; $39$ ; $55$ ; $44$ ; $46$ ; $43$.",
        questions: [
          { q: "1. Ranger la série par ordre croissant et donner son étendue.", pts: 1, sol: [
            "$38$ ; $39$ ; $41$ ; $42$ ; $43$ ; $44$ ; $45$ ; $46$ ; $47$ ; $50$ ; $55$.",
            "Étendue : $55 - 38 = 17$ minutes."
          ] },
          { q: "2. Calculer le temps moyen (arrondi au centième).", pts: 1.5, sol: [
            "Somme : $490$. $\\bar{x} = \\frac{490}{11} \\approx 44{,}55$ minutes."
          ] },
          { q: "3. Déterminer la médiane.", pts: 1.5, sol: [
            "$N = 11$ est impair : la médiane est la 6e valeur, $Me = 44$ minutes."
          ] },
          { q: "4. Déterminer les quartiles $Q_1$ et $Q_3$ et l’écart interquartile.", pts: 2, sol: [
            "$Q_1$ : 25 % de 11 = $2{,}75$, rang 3 : $Q_1 = 41$. $Q_3$ : 75 % de 11 = $8{,}25$, rang 9 : $Q_3 = 47$.",
            "Écart interquartile : $47 - 41 = 6$ minutes."
          ] }
        ]
      },
      {
        title: "Géométrie repérée et second degré", o: ["R", "J10", "J7", "J8"],
        intro: "Dans un repère orthonormé, on considère les points $A(-1 ; 2)$, $B(3 ; 4)$ et $C(5 ; 0)$.",
        questions: [
          { q: "1. Calculer $AB$, $BC$ et $AC$. Quelle est la nature du triangle $ABC$ ?", pts: 1.5, sol: [
            "$AB = \\sqrt{16 + 4} = \\sqrt{20}$ ; $BC = \\sqrt{4 + 16} = \\sqrt{20}$ ; $AC = \\sqrt{36 + 4} = \\sqrt{40}$.",
            "$AB = BC$ et $AB^{2} + BC^{2} = 40 = AC^{2}$ : le triangle est rectangle isocèle en $B$."
          ] },
          { q: "2. Déterminer l’équation de la droite $(AC)$.", pts: 1.5, sol: [
            "$m = \\frac{0 - 2}{5 - (-1)} = -\\frac{1}{3}$.",
            "$y = -\\frac{1}{3}x + p$ avec $2 = \\frac{1}{3} + p$, donc $p = \\frac{5}{3}$ : $y = -\\frac{1}{3}x + \\frac{5}{3}$."
          ] },
          { q: "3. On considère la parabole $\\mathcal{P}$ d’équation $y = x^{2} - 2x - 3$. Déterminer ses points d’intersection avec l’axe des abscisses.", pts: 1.5, sol: [
            "$x^{2} - 2x - 3 = 0$ : $\\Delta = 4 + 12 = 16$, $x = \\frac{2 - 4}{2} = -1$ ou $x = \\frac{2 + 4}{2} = 3$.",
            "Points d’intersection : $(-1 ; 0)$ et $(3 ; 0)$."
          ] },
          { q: "4. Résoudre l’inéquation $x^{2} - 2x - 3 < 0$ et interpréter graphiquement.", pts: 1.5, sol: [
            "$a = 1 > 0$ : le trinôme est négatif entre ses racines, $S = ]-1 ; 3[$.",
            "Sur cet intervalle, la parabole est située sous l’axe des abscisses."
          ] }
        ]
      }
    ]
  }
];
