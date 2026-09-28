// Cours : un module par objectif du programme.
// d = id du chapitre, o = objectifs traités par le module.
// Sections : h (titre), p (paragraphe), points (liste), steps (étapes numérotées),
// solution (étapes masquées derrière « Voir la solution »), kind (def, example, guided, trap, sheet),
// extra: true pour un complément hors programme.
// Les textes peuvent contenir du <b>. Les formules sont en LaTeX entre $…$ (antislashs doublés dans les
// chaînes JavaScript) ; les tableaux utilisent @table{a | b // c | d}.
const COURSES = [
  // ===================== Chapitre 1 — Calcul numérique et algébrique =====================
  {
    d: 1,
    o: ["J1"],
    title: "Nombres entiers et priorités opératoires",
    summary: "Additionner, soustraire et multiplier des entiers relatifs, appliquer les règles des signes et les priorités opératoires, calculer sans calculatrice.",
    sections: [
      { h: "L’essentiel", p: "Les <b>entiers naturels</b> ($\\mathbb{N} = \\{0 ; 1 ; 2 ; 3 ; \\dots\\}$) servent à compter. Les <b>entiers relatifs</b> ($\\mathbb{Z} = \\{\\dots ; -2 ; -1 ; 0 ; 1 ; 2 ; \\dots\\}$) ajoutent les nombres négatifs : températures, dettes, altitudes sous le niveau de la mer.\nUn calcul enchaîne des opérations : <b>addition</b> (le résultat s’appelle une somme), <b>soustraction</b> (une différence), <b>multiplication</b> (un produit) et division (un quotient). Pour qu’un calcul ait un seul résultat possible, on suit des <b>priorités opératoires</b>." },
      { h: "Définitions et règles à connaître", kind: "def", points: [
        "<b>Priorités opératoires</b> : 1) les calculs entre parenthèses (les plus intérieures d’abord) ; 2) les puissances ; 3) les multiplications et divisions, de gauche à droite ; 4) les additions et soustractions, de gauche à droite.",
        "<b>Addition</b> de deux relatifs de même signe : on additionne les distances à zéro et on garde le signe. Exemple : $(-7) + (-5) = -12$.",
        "Addition de deux relatifs de signes contraires : on soustrait la plus petite distance à zéro de la plus grande et on prend le signe du nombre le plus éloigné de zéro. Exemple : $(-9) + 4 = -5$.",
        "<b>Soustraction</b> : soustraire un nombre revient à ajouter son opposé. Exemple : $3 - (-8) = 3 + 8 = 11$.",
        "<b>Règles des signes</b> pour la <b>multiplication</b> et la division : $(+) \\times (+) = (+)$ ; $(-) \\times (-) = (+)$ ; $(+) \\times (-) = (-)$. Un produit de plusieurs facteurs est négatif si le nombre de facteurs négatifs est impair.",
        "On ne divise jamais par $0$."
      ] },
      { h: "Exemple entièrement corrigé", kind: "example", p: "Calculer $A = 7 - 3 \\times (2 - 5)^{2} \\div 9$.", steps: [
        "Parenthèses : $2 - 5 = -3$, donc $A = 7 - 3 \\times (-3)^{2} \\div 9$.",
        "Puissance : $(-3)^{2} = (-3) \\times (-3) = 9$, donc $A = 7 - 3 \\times 9 \\div 9$.",
        "Multiplication et division de gauche à droite : $3 \\times 9 = 27$, puis $27 \\div 9 = 3$.",
        "Soustraction : $A = 7 - 3 = $ <b>$4$</b>."
      ] },
      { h: "Exemple guidé", kind: "guided", p: "Calculer $B = -4 \\times (-5) + 18 \\div (-3) - (-2)$. Commencez par les produits et quotients, en appliquant la règle des signes.", solution: [
        "$-4 \\times (-5) = 20$ (deux facteurs négatifs : produit positif).",
        "$18 \\div (-3) = -6$ (signes contraires : quotient négatif).",
        "$B = 20 + (-6) - (-2) = 20 - 6 + 2 = $ <b>$16$</b>."
      ] },
      { h: "Calculs sans calculatrice", points: [
        "Regrouper les termes qui « tombent juste » : $37 + 48 + 63 = (37 + 63) + 48 = 100 + 48 = 148$.",
        "Utiliser la distributivité : $99 \\times 7 = (100 - 1) \\times 7 = 700 - 7 = 693$ ; $12 \\times 15 = 12 \\times 10 + 12 \\times 5 = 120 + 60 = 180$.",
        "Connaître les produits utiles : $25 \\times 4 = 100$, $125 \\times 8 = 1\\,000$, $50 \\times 2 = 100$.",
        "Vérifier l’ordre de grandeur : $48 \\times 21$ est proche de $50 \\times 20 = 1\\,000$ ; le résultat exact est $1\\,008$."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "<b>$-3^{2} \\neq (-3)^{2}$</b> : $-3^{2} = -(3 \\times 3) = -9$, alors que $(-3)^{2} = 9$. La puissance ne porte que sur ce qui la précède immédiatement.",
        "$2 + 3 \\times 4 = 2 + 12 = 14$, et non $5 \\times 4 = 20$ : la multiplication passe avant l’addition.",
        "$10 - 4 - 3$ se calcule de gauche à droite : $6 - 3 = 3$ (et non $10 - 1 = 9$).",
        "$48 \\div 4 \\times 2 = 12 \\times 2 = 24$ (et non $48 \\div 8 = 6$) : division et multiplication ont la même priorité."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "Ordre : parenthèses → puissances → $\\times$ et $\\div$ → $+$ et $-$, de gauche à droite à priorité égale.",
        "Soustraire, c’est ajouter l’opposé.",
        "Nombre pair de signes « $-$ » dans un produit : résultat positif ; nombre impair : résultat négatif.",
        "Toujours estimer l’ordre de grandeur pour détecter une erreur."
      ] }
    ]
  },
  {
    d: 1,
    o: ["J2"],
    title: "Fractions et nombres rationnels",
    summary: "Simplifier une fraction, mettre au même dénominateur, additionner, soustraire, multiplier et diviser des fractions.",
    sections: [
      { h: "L’essentiel", p: "Une <b>fraction</b> $\\frac{a}{b}$ (avec $b \\neq 0$) est le quotient de $a$ par $b$. Les nombres qui peuvent s’écrire ainsi avec $a$ et $b$ entiers sont les <b>nombres rationnels</b> (ensemble $\\mathbb{Q}$). Exemples : $\\frac{3}{4} = 0{,}75$ ; $-\\frac{2}{5} = -0{,}4$ ; $\\frac{1}{3} = 0{,}333\\dots$ (écriture décimale illimitée périodique).\nUne même quantité s’écrit de nombreuses façons : $\\frac{1}{2} = \\frac{2}{4} = \\frac{50}{100}$. Savoir passer d’une écriture à l’autre est la clé de tous les calculs." },
      { h: "Règles de calcul", kind: "def", points: [
        "<b>Simplification</b> : on divise le numérateur et le dénominateur par un même nombre non nul. $\\frac{18}{24} = \\frac{18 \\div 6}{24 \\div 6} = \\frac{3}{4}$. Une fraction est <b>irréductible</b> quand on ne peut plus la simplifier (on divise par le PGCD).",
        "<b>Mise au même dénominateur</b> : on multiplie numérateur et dénominateur par un même nombre pour obtenir un dénominateur commun, de préférence le plus petit multiple commun.",
        "<b>Addition et soustraction de fractions</b> : on les met au même dénominateur, puis $\\frac{a}{d} + \\frac{b}{d} = \\frac{a + b}{d}$.",
        "<b>Multiplication et division de fractions</b> : $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$ (on simplifie de préférence avant de multiplier). Diviser par une fraction revient à multiplier par son inverse : $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$.",
        "Signe : $-\\frac{a}{b} = \\frac{-a}{b} = \\frac{a}{-b}$."
      ] },
      { h: "Exemples entièrement corrigés", kind: "example", p: "Calculer $A = \\frac{2}{3} + \\frac{5}{4}$ et $B = \\frac{3}{4} \\div \\frac{9}{8}$.", steps: [
        "Pour $A$, le plus petit multiple commun de $3$ et $4$ est $12$ : $\\frac{2}{3} = \\frac{8}{12}$ et $\\frac{5}{4} = \\frac{15}{12}$.",
        "$A = \\frac{8 + 15}{12} = $ <b>$\\frac{23}{12}$</b> (irréductible car $23$ est premier).",
        "Pour $B$, on multiplie par l’inverse : $B = \\frac{3}{4} \\times \\frac{8}{9} = \\frac{24}{36}$.",
        "On simplifie par $12$ : $B = $ <b>$\\frac{2}{3}$</b>."
      ] },
      { h: "Exemple guidé", kind: "guided", p: "Calculer $C = 1 - \\frac{2}{5} \\times \\frac{15}{4}$. Attention à la priorité : la multiplication d’abord.", solution: [
        "$\\frac{2}{5} \\times \\frac{15}{4} = \\frac{30}{20} = \\frac{3}{2}$.",
        "$C = 1 - \\frac{3}{2} = \\frac{2}{2} - \\frac{3}{2} = $ <b>$-\\frac{1}{2}$</b>."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "<b>$\\frac{a}{b} + \\frac{c}{d} \\neq \\frac{a + c}{b + d}$</b> : $\\frac{1}{2} + \\frac{1}{2} = 1$, et non $\\frac{2}{4}$.",
        "On ne simplifie pas une somme : $\\frac{2 + 3}{2} = \\frac{5}{2}$, et non $3$. On simplifie seulement des facteurs.",
        "Pour diviser, c’est la <b>deuxième</b> fraction qu’on inverse.",
        "Un nombre entier est une fraction de dénominateur $1$ : $3 = \\frac{3}{1}$, utile pour $3 - \\frac{1}{4} = \\frac{12}{4} - \\frac{1}{4} = \\frac{11}{4}$."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "Additionner ou soustraire : même dénominateur d’abord.",
        "Multiplier : numérateurs entre eux, dénominateurs entre eux.",
        "Diviser : multiplier par l’inverse.",
        "Toujours donner le résultat sous forme irréductible."
      ] }
    ]
  },
  {
    d: 1,
    o: ["J3"],
    title: "Nombres réels : puissances et racines carrées",
    summary: "Appliquer les règles de calcul sur les puissances, utiliser les puissances de 10 et l’écriture scientifique, simplifier des racines carrées.",
    sections: [
      { h: "L’essentiel", p: "Les <b>nombres réels</b> (ensemble $\\mathbb{R}$) sont tous les nombres de la droite graduée : entiers, fractions, mais aussi des nombres <b>irrationnels</b> comme $\\sqrt{2}$ ou $\\pi$, qui ne s’écrivent pas sous forme de fraction.\nDeux outils reviennent sans cesse : les <b>puissances</b>, pour écrire des produits répétés et des nombres très grands ou très petits, et les <b>racines carrées</b>." },
      { h: "Puissances et puissances de 10", kind: "def", points: [
        "Pour $n$ entier $\\geq 1$ : $a^{n} = a \\times a \\times \\dots \\times a$ ($n$ facteurs). Par convention $a^{0} = 1$ et $a^{-n} = \\frac{1}{a^{n}}$ ($a \\neq 0$).",
        "Règles : $a^{m} \\times a^{n} = a^{m+n}$ ; $\\frac{a^{m}}{a^{n}} = a^{m-n}$ ; $(a^{m})^{n} = a^{m \\times n}$ ; $(ab)^{n} = a^{n}b^{n}$.",
        "<b>Puissances de 10</b> : $10^{3} = 1\\,000$ ; $10^{-2} = 0{,}01$. Multiplier par $10^{n}$ décale la virgule de $n$ rangs vers la droite.",
        "<b>Écriture scientifique</b> : $a \\times 10^{n}$ avec $1 \\leq a \\lt 10$. Exemple : $0{,}000\\,52 = 5{,}2 \\times 10^{-4}$."
      ] },
      { h: "Racines carrées", kind: "def", points: [
        "Pour $a \\geq 0$, $\\sqrt{a}$ est le nombre positif dont le carré vaut $a$ : $\\sqrt{49} = 7$. La racine carrée d’un nombre négatif n’existe pas dans $\\mathbb{R}$.",
        "$(\\sqrt{a})^{2} = a$ pour $a \\geq 0$ ; $\\sqrt{a^{2}} = a$ seulement si $a \\geq 0$ (par exemple $\\sqrt{(-3)^{2}} = 3$).",
        "$\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b}$ et $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$ ($a \\geq 0$, $b \\gt 0$).",
        "<b>Simplification d’expressions contenant des racines</b> : on fait apparaître un carré parfait. $\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$.",
        "Pour supprimer une racine au dénominateur : $\\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$."
      ] },
      { h: "Exemples entièrement corrigés", kind: "example", p: "Simplifier $A = \\sqrt{72} - 3\\sqrt{8} + \\sqrt{18}$, puis calculer $B = \\dfrac{3 \\times 10^{5} \\times 4 \\times 10^{-2}}{6 \\times 10^{-3}}$.", steps: [
        "$\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$ ; $\\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}$ ; $\\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}$.",
        "$A = 6\\sqrt{2} - 6\\sqrt{2} + 3\\sqrt{2} = $ <b>$3\\sqrt{2}$</b>.",
        "Pour $B$, on regroupe les nombres et les puissances de 10 : $\\frac{3 \\times 4}{6} = 2$ et $\\frac{10^{5} \\times 10^{-2}}{10^{-3}} = \\frac{10^{3}}{10^{-3}} = 10^{6}$.",
        "$B = $ <b>$2 \\times 10^{6}$</b>."
      ] },
      { h: "Exemple guidé", kind: "guided", p: "Écrire $C = (2^{3})^{2} \\times 2^{-4}$ sous forme d’un entier, puis écrire $D = \\frac{2}{\\sqrt{3}}$ sans racine au dénominateur.", solution: [
        "$(2^{3})^{2} = 2^{6}$, puis $2^{6} \\times 2^{-4} = 2^{2} = $ <b>$4$</b>.",
        "On multiplie en haut et en bas par $\\sqrt{3}$ : $D = \\frac{2\\sqrt{3}}{3}$."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "<b>$\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$</b> : $\\sqrt{9 + 16} = \\sqrt{25} = 5$, alors que $\\sqrt{9} + \\sqrt{16} = 7$.",
        "$2^{3} \\times 2^{4} = 2^{7}$ (on additionne les exposants), et non $2^{12}$ ni $4^{7}$.",
        "$2^{3} + 2^{4}$ ne se simplifie pas en $2^{7}$ : $8 + 16 = 24$.",
        "$10^{-3}$ est positif : $10^{-3} = 0{,}001$. Un exposant négatif ne rend pas le nombre négatif."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "$a^{m}a^{n} = a^{m+n}$ ; $\\frac{a^{m}}{a^{n}} = a^{m-n}$ ; $(a^{m})^{n} = a^{mn}$ ; $a^{0} = 1$ ; $a^{-n} = \\frac{1}{a^{n}}$.",
        "Écriture scientifique : $a \\times 10^{n}$, $1 \\leq a \\lt 10$.",
        "$\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ ; on fait sortir les carrés parfaits ($4, 9, 16, 25, 36, 49, 64, 81, 100\\dots$).",
        "Jamais de racine d’un nombre négatif dans $\\mathbb{R}$."
      ] }
    ]
  },
  {
    d: 1,
    o: ["J4"],
    title: "Calcul littéral et identités remarquables",
    summary: "Développer, réduire et simplifier une expression, utiliser les identités remarquables et factoriser.",
    sections: [
      { h: "L’essentiel", p: "Le <b>calcul littéral</b> consiste à calculer avec des lettres qui représentent des nombres. Deux transformations inverses l’une de l’autre sont au cœur du programme :\n<b>développer</b> : transformer un produit en somme, par exemple $3(x + 2) = 3x + 6$ ;\n<b>factoriser</b> : transformer une somme en produit, par exemple $3x + 6 = 3(x + 2)$.\nOn choisit la forme la plus utile : la forme factorisée pour résoudre une équation produit nul, la forme développée pour dériver ou comparer." },
      { h: "Règles et formules", kind: "def", points: [
        "<b>Développer</b> avec la distributivité simple : $k(a + b) = ka + kb$ ; et double : $(a + b)(c + d) = ac + ad + bc + bd$.",
        "<b>Réduire</b> : regrouper les termes semblables. $3x^{2} + 2x - x^{2} + 5x = 2x^{2} + 7x$.",
        "<b>Simplifier</b> : écrire l’expression sous la forme la plus courte possible (développer, réduire, supprimer les parenthèses).",
        "<b>Identités remarquables</b> : $(a + b)^{2} = a^{2} + 2ab + b^{2}$ ; $(a - b)^{2} = a^{2} - 2ab + b^{2}$ ; $(a + b)(a - b) = a^{2} - b^{2}$.",
        "<b>Factorisation par facteur commun</b> : $ka + kb = k(a + b)$. Le facteur commun peut être une expression entière, comme $(x + 2)$.",
        "<b>Factorisation à l’aide des identités remarquables</b> : $a^{2} - b^{2} = (a - b)(a + b)$ ; $a^{2} + 2ab + b^{2} = (a + b)^{2}$."
      ] },
      { h: "Exemples entièrement corrigés", kind: "example", p: "1) Développer et réduire $A = (2x - 3)^{2} - (x + 1)(x - 1)$.\n2) Factoriser $B = (x + 2)(3x - 1) - (x + 2)(x + 4)$, puis $C = 9x^{2} - 25$.", steps: [
        "$(2x - 3)^{2} = 4x^{2} - 12x + 9$ et $(x + 1)(x - 1) = x^{2} - 1$.",
        "$A = 4x^{2} - 12x + 9 - (x^{2} - 1) = 4x^{2} - 12x + 9 - x^{2} + 1 = $ <b>$3x^{2} - 12x + 10$</b>.",
        "Dans $B$, le facteur commun est $(x + 2)$ : $B = (x + 2)[(3x - 1) - (x + 4)] = $ <b>$(x + 2)(2x - 5)$</b>.",
        "$C = (3x)^{2} - 5^{2} = $ <b>$(3x - 5)(3x + 5)$</b>."
      ] },
      { h: "Exemple guidé", kind: "guided", p: "Factoriser $D = 4x^{2} - (x + 1)^{2}$. Repérez la forme $a^{2} - b^{2}$ avec $a = 2x$ et $b = x + 1$.", solution: [
        "$D = (2x - (x + 1))(2x + (x + 1))$.",
        "$D = $ <b>$(x - 1)(3x + 1)$</b>. Vérification en développant : $3x^{2} + x - 3x - 1 = 3x^{2} - 2x - 1$, et $4x^{2} - (x^{2} + 2x + 1) = 3x^{2} - 2x - 1$."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "<b>$(a + b)^{2} \\neq a^{2} + b^{2}$</b> : il manque le double produit $2ab$.",
        "Un signe « $-$ » devant une parenthèse change le signe de <b>tous</b> les termes : $-(x^{2} - 1) = -x^{2} + 1$.",
        "$x + x = 2x$ mais $x \\times x = x^{2}$ ; $2x \\times 3x = 6x^{2}$.",
        "Vérifier une factorisation en la redéveloppant : on doit retrouver l’expression de départ."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "$(a + b)^{2} = a^{2} + 2ab + b^{2}$ ; $(a - b)^{2} = a^{2} - 2ab + b^{2}$ ; $(a + b)(a - b) = a^{2} - b^{2}$.",
        "Factoriser : chercher d’abord un facteur commun, puis une identité remarquable.",
        "Développer : distribuer chaque terme, puis réduire.",
        "Contrôle : remplacer $x$ par une valeur simple ($x = 1$) dans les deux formes."
      ] }
    ]
  },

  // ===================== Chapitre 2 — Équations, systèmes et inéquations =====================
  {
    d: 2,
    o: ["J5"],
    title: "Équations et mise en équation",
    summary: "Résoudre une équation du premier degré, une équation produit nul, et mettre un problème en équation.",
    sections: [
      { h: "L’essentiel", p: "Une <b>équation</b> est une égalité contenant une inconnue. La <b>résoudre</b>, c’est trouver toutes les valeurs de l’inconnue qui rendent l’égalité vraie : ce sont les solutions.\nOn transforme l’équation en une équation équivalente plus simple en faisant <b>la même opération des deux côtés</b> : ajouter ou soustraire un même nombre, multiplier ou diviser par un même nombre non nul." },
      { h: "Méthodes à connaître", kind: "def", points: [
        "<b>Équations du premier degré à une inconnue</b> : $ax + b = 0$ avec $a \\neq 0$ a une unique solution $x = -\\frac{b}{a}$.",
        "Méthode : développer, regrouper les termes en $x$ d’un côté et les nombres de l’autre, puis diviser par le coefficient de $x$.",
        "<b>Équations produit nul</b> : $A \\times B = 0$ équivaut à $A = 0$ ou $B = 0$. Il faut d’abord que l’un des membres soit nul et que l’autre soit factorisé.",
        "<b>Mise en équation d’un problème</b> : 1) choisir l’inconnue et préciser ce qu’elle représente ; 2) traduire l’énoncé par une équation ; 3) résoudre ; 4) vérifier ; 5) conclure par une phrase."
      ] },
      { h: "Exemples entièrement corrigés", kind: "example", p: "1) Résoudre $3(x - 2) = 5x + 4$.\n2) Résoudre $(2x - 1)(x + 3) = 0$.", steps: [
        "On développe : $3x - 6 = 5x + 4$.",
        "On regroupe : $3x - 5x = 4 + 6$, soit $-2x = 10$, donc $x = $ <b>$-5$</b>.",
        "Vérification : $3(-5 - 2) = -21$ et $5 \\times (-5) + 4 = -21$. ✓",
        "Produit nul : $2x - 1 = 0$ ou $x + 3 = 0$, donc $x = \\frac{1}{2}$ ou $x = -3$. $S = \\left\\{-3 ; \\frac{1}{2}\\right\\}$."
      ] },
      { h: "Exemple guidé : résolution de problèmes", kind: "guided", p: "Le périmètre d’un rectangle mesure 36 cm et sa longueur dépasse sa largeur de 4 cm. Quelles sont ses dimensions ? Appelez $x$ la largeur en cm.", solution: [
        "La longueur mesure $x + 4$. Le périmètre vaut $2(x + x + 4) = 4x + 8$.",
        "Équation : $4x + 8 = 36$, donc $4x = 28$ et $x = 7$.",
        "Vérification : largeur 7 cm, longueur 11 cm, périmètre $2 \\times 18 = 36$ cm. ✓",
        "Conclusion : le rectangle mesure <b>7 cm sur 11 cm</b>."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "Pour $x^{2} = 5x$, ne pas diviser par $x$ : on perdrait la solution $0$. On factorise : $x(x - 5) = 0$, donc $x = 0$ ou $x = 5$.",
        "Un produit nul se lit seulement quand le second membre vaut $0$ : $(x - 1)(x + 2) = 4$ n’est pas une équation produit nul.",
        "En déplaçant un terme, on change son signe : $x + 7 = 3$ donne $x = 3 - 7 = -4$.",
        "Dans un problème, vérifier que la solution a du sens (une longueur ne peut pas être négative)."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "$ax + b = 0$ ($a \\neq 0$) $\\iff x = -\\frac{b}{a}$.",
        "$A \\times B = 0 \\iff A = 0$ ou $B = 0$.",
        "Problème : inconnue → équation → résolution → vérification → phrase de conclusion.",
        "Une remise de $t\\,\\%$ multiplie le prix par $1 - \\frac{t}{100}$ ; une hausse de $t\\,\\%$ le multiplie par $1 + \\frac{t}{100}$."
      ] }
    ]
  },
  {
    d: 2,
    o: ["J6"],
    title: "Systèmes de deux équations à deux inconnues",
    summary: "Résoudre un système par substitution, par combinaison (méthode de Gauss) ou avec les formules de Cramer, et mettre un problème en équations.",
    sections: [
      { h: "L’essentiel", p: "Les <b>systèmes à deux équations et deux inconnues</b> s’écrivent $\\begin{cases} ax + by = c \\\\ a'x + b'y = c' \\end{cases}$. Une solution est un <b>couple</b> $(x ; y)$ qui vérifie les deux équations à la fois.\nGraphiquement, chaque équation représente une droite ; la solution correspond au point d’intersection. Deux droites sécantes donnent une solution unique ; parallèles, aucune ; confondues, une infinité." },
      { h: "Trois méthodes de résolution", kind: "def", points: [
        "<b>Méthode par substitution</b> : on exprime une inconnue en fonction de l’autre dans une équation (souvent celle où un coefficient vaut $1$ ou $-1$), puis on remplace dans l’autre équation.",
        "<b>Méthode de Gauss / combinaison</b> : on multiplie les équations par des nombres bien choisis pour qu’en les additionnant ou soustrayant, une inconnue disparaisse.",
        "<b>Formules de Cramer</b> : on calcule le déterminant $D = ab' - a'b$. Si $D \\neq 0$, la solution est unique : $x = \\frac{cb' - c'b}{D}$ et $y = \\frac{ac' - a'c}{D}$.",
        "Si $D = 0$, le système a soit aucune solution, soit une infinité de solutions (droites parallèles ou confondues).",
        "Toujours <b>vérifier</b> le couple trouvé dans les deux équations."
      ] },
      { h: "Exemples entièrement corrigés", kind: "example", p: "Résoudre $S_1 : \\begin{cases} x + 2y = 7 \\\\ 3x - y = 7 \\end{cases}$ par substitution, puis $S_2 : \\begin{cases} 3x + 2y = 8 \\\\ x - y = 1 \\end{cases}$ par les formules de Cramer.", steps: [
        "$S_1$ : de la première équation, $x = 7 - 2y$. On remplace : $3(7 - 2y) - y = 7$, soit $21 - 7y = 7$, donc $y = 2$ et $x = 7 - 4 = 3$. Solution <b>$(3 ; 2)$</b>.",
        "Vérification : $3 + 4 = 7$ et $9 - 2 = 7$. ✓",
        "$S_2$ : $D = 3 \\times (-1) - 1 \\times 2 = -5 \\neq 0$.",
        "$x = \\frac{8 \\times (-1) - 1 \\times 2}{-5} = \\frac{-10}{-5} = 2$ et $y = \\frac{3 \\times 1 - 1 \\times 8}{-5} = \\frac{-5}{-5} = 1$. Solution <b>$(2 ; 1)$</b>."
      ] },
      { h: "Exemple guidé : mise en équation de problèmes", kind: "guided", p: "Au cinéma, 3 places adultes et 2 places enfants coûtent 46 € ; 2 places adultes et 4 places enfants coûtent 44 €. Trouvez le prix $a$ d’une place adulte et le prix $e$ d’une place enfant, par combinaison.", solution: [
        "Système : $\\begin{cases} 3a + 2e = 46 \\\\ 2a + 4e = 44 \\end{cases}$.",
        "On multiplie la première équation par $2$ : $6a + 4e = 92$. On soustrait la seconde : $4a = 48$, donc $a = 12$.",
        "Puis $2e = 46 - 36 = 10$, donc $e = 5$.",
        "Vérification : $2 \\times 12 + 4 \\times 5 = 44$. ✓ Une place adulte coûte <b>12 €</b>, une place enfant <b>5 €</b>."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "Lors d’une soustraction d’équations, soustraire <b>chaque</b> terme, y compris le second membre.",
        "Dans Cramer, respecter l’ordre : $D = ab' - a'b$ (produit en croix de la « diagonale » moins l’autre).",
        "La solution est un couple : donner $x$ <b>et</b> $y$, dans l’ordre $(x ; y)$.",
        "Si $D = 0$, les formules de Cramer ne s’appliquent pas : il faut examiner le système autrement."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "Substitution : isoler une inconnue, remplacer, résoudre, remonter.",
        "Combinaison : éliminer une inconnue en ajoutant ou soustrayant des multiples des équations.",
        "Cramer : $D = ab' - a'b$ ; $x = \\frac{cb' - c'b}{D}$ ; $y = \\frac{ac' - a'c}{D}$.",
        "Interprétation : intersection de deux droites."
      ] }
    ]
  },
  {
    d: 2,
    o: ["J7"],
    title: "Polynômes du second degré et discriminant",
    summary: "Reconnaître un polynôme de degré 2, calculer son discriminant et résoudre une équation du second degré.",
    sections: [
      { h: "L’essentiel", p: "Les <b>polynômes de degré 2</b> (ou trinômes) s’écrivent $P(x) = ax^{2} + bx + c$ avec $a$, $b$, $c$ réels et <b>$a \\neq 0$</b>. Exemples : $2x^{2} - 3x - 2$ ; $-x^{2} + 4$ ; $x^{2} + 5x$.\nRésoudre l’équation $ax^{2} + bx + c = 0$, c’est trouver les <b>racines</b> du polynôme. Un seul nombre décide de leur nombre : le <b>discriminant</b>." },
      { h: "Discriminant et formules", kind: "def", points: [
        "<b>Discriminant</b> : $\\Delta = b^{2} - 4ac$.",
        "Si $\\Delta \\gt 0$ : deux racines $x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}$ et $x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}$, et $P(x) = a(x - x_1)(x - x_2)$.",
        "Si $\\Delta = 0$ : une racine double $x_0 = -\\frac{b}{2a}$, et $P(x) = a(x - x_0)^{2}$.",
        "Si $\\Delta \\lt 0$ : aucune racine réelle ; $P(x)$ ne se factorise pas et garde le signe de $a$.",
        "Forme canonique : $P(x) = a(x - \\alpha)^{2} + \\beta$ avec $\\alpha = -\\frac{b}{2a}$ et $\\beta = P(\\alpha)$. La parabole représentant $P$ a pour sommet le point $(\\alpha ; \\beta)$."
      ] },
      { h: "Exemples entièrement corrigés : résolution d’équations du second degré", kind: "example", p: "Résoudre $2x^{2} - 3x - 2 = 0$, puis $x^{2} - 6x + 9 = 0$ et $x^{2} + x + 1 = 0$.", steps: [
        "$2x^{2} - 3x - 2$ : $a = 2$, $b = -3$, $c = -2$ ; $\\Delta = (-3)^{2} - 4 \\times 2 \\times (-2) = 9 + 16 = 25 \\gt 0$.",
        "$x_1 = \\frac{3 - 5}{4} = -\\frac{1}{2}$ et $x_2 = \\frac{3 + 5}{4} = 2$. $S = $ <b>$\\left\\{-\\frac{1}{2} ; 2\\right\\}$</b>.",
        "$x^{2} - 6x + 9$ : $\\Delta = 36 - 36 = 0$, racine double $x_0 = \\frac{6}{2} = $ <b>$3$</b> (en effet $x^{2} - 6x + 9 = (x - 3)^{2}$).",
        "$x^{2} + x + 1$ : $\\Delta = 1 - 4 = -3 \\lt 0$, <b>aucune solution réelle</b>."
      ] },
      { h: "Exemple guidé", kind: "guided", p: "Résoudre $-x^{2} + 4x - 3 = 0$, puis factoriser $-x^{2} + 4x - 3$.", solution: [
        "$a = -1$, $b = 4$, $c = -3$ ; $\\Delta = 16 - 4 \\times (-1) \\times (-3) = 16 - 12 = 4$.",
        "$x_1 = \\frac{-4 - 2}{-2} = 3$ et $x_2 = \\frac{-4 + 2}{-2} = 1$. $S = \\{1 ; 3\\}$.",
        "Factorisation : $-x^{2} + 4x - 3 = $ <b>$-(x - 1)(x - 3)$</b>."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "Attention au signe de $b$ : si $b = -3$, alors $b^{2} = 9$ (et non $-9$) et $-b = 3$.",
        "Dans $-4ac$, les signes se combinent : avec $a = 2$ et $c = -2$, $-4ac = +16$.",
        "Équations incomplètes : pour $x^{2} - 4x = 0$, factoriser directement $x(x - 4) = 0$ ; pour $x^{2} = 9$, $x = 3$ ou $x = -3$ (ne pas oublier la solution négative).",
        "Ne pas oublier le coefficient $a$ dans la factorisation : $2x^{2} - 3x - 2 = 2(x - 2)\\left(x + \\frac{1}{2}\\right)$."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "$\\Delta = b^{2} - 4ac$.",
        "$\\Delta \\gt 0$ : $x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$ ; $\\Delta = 0$ : $x = -\\frac{b}{2a}$ ; $\\Delta \\lt 0$ : pas de racine réelle.",
        "Factorisation : $a(x - x_1)(x - x_2)$.",
        "Sommet de la parabole : $\\alpha = -\\frac{b}{2a}$, $\\beta = P(\\alpha)$."
      ] }
    ]
  },
  {
    d: 2,
    o: ["J8"],
    title: "Intervalles, inégalités et inéquations",
    summary: "Écrire un ensemble sous forme d’intervalle, manipuler des inégalités et résoudre des inéquations du premier et du second degré.",
    sections: [
      { h: "L’essentiel", p: "Une <b>inéquation</b> est une inégalité ($\\lt$, $\\leq$, $\\gt$, $\\geq$) qui contient une inconnue. Ses solutions forment en général un ou plusieurs <b>intervalles</b>, qu’il faut savoir écrire et représenter sur une droite graduée.\nLes règles sont presque celles des équations, avec une différence essentielle : <b>multiplier ou diviser par un nombre négatif change le sens de l’inégalité</b>." },
      { h: "Intervalles et inégalités", kind: "def", points: [
        "<b>Intervalles</b> : $[a ; b]$ est l’ensemble des $x$ tels que $a \\leq x \\leq b$ ; $]a ; b[$ : $a \\lt x \\lt b$ ; $[a ; +\\infty[$ : $x \\geq a$ ; $]-\\infty ; b[$ : $x \\lt b$. Le crochet est toujours ouvert du côté de l’infini.",
        "Réunion $\\cup$ (« ou ») et intersection $\\cap$ (« et ») : $[0 ; 5] \\cap [3 ; 8] = [3 ; 5]$.",
        "<b>Inégalités</b> : ajouter ou soustraire un même nombre conserve le sens ; multiplier ou diviser par un nombre <b>positif</b> conserve le sens ; par un nombre <b>négatif</b> l’inverse.",
        "Signe de $ax + b$ ($a \\neq 0$) : il s’annule en $-\\frac{b}{a}$ et il est du signe de $a$ à droite de $-\\frac{b}{a}$, du signe contraire à gauche.",
        "Tableau de signes : pour un produit ou un quotient, on étudie le signe de chaque facteur puis on applique la règle des signes (une valeur interdite est exclue)."
      ] },
      { h: "Utilisation du discriminant", kind: "def", points: [
        "Signe de $P(x) = ax^{2} + bx + c$ : si $\\Delta \\gt 0$, $P(x)$ est <b>du signe de $a$ à l’extérieur des racines</b> et du signe contraire entre les racines.",
        "Si $\\Delta = 0$ : $P(x)$ est du signe de $a$ et s’annule en $x_0$.",
        "Si $\\Delta \\lt 0$ : $P(x)$ est toujours du signe de $a$.",
        "<b>Résolution d’inéquations du second degré</b> : tout ramener à $P(x) \\gt 0$ (ou $\\lt$, $\\leq$, $\\geq$), calculer $\\Delta$ et les racines, puis lire le signe."
      ] },
      { h: "Exemples entièrement corrigés", kind: "example", p: "Résoudre $-3x + 5 \\gt 11$, puis $x^{2} - x - 6 \\leq 0$.", steps: [
        "$-3x \\gt 6$. On divise par $-3$ (négatif) : on change le sens, $x \\lt -2$. $S = $ <b>$]-\\infty ; -2[$</b>.",
        "$x^{2} - x - 6$ : $\\Delta = 1 + 24 = 25$, racines $\\frac{1 - 5}{2} = -2$ et $\\frac{1 + 5}{2} = 3$.",
        "$a = 1 \\gt 0$ : le trinôme est négatif entre les racines.",
        "$S = $ <b>$[-2 ; 3]$</b> (crochets fermés car l’inégalité est large)."
      ] },
      { h: "Exemple guidé", kind: "guided", p: "Résoudre $-2x^{2} + 8 \\lt 0$.", solution: [
        "$-2x^{2} + 8 = 0 \\iff x^{2} = 4 \\iff x = -2$ ou $x = 2$.",
        "$a = -2 \\lt 0$ : le trinôme est négatif à l’extérieur des racines.",
        "$S = $ <b>$]-\\infty ; -2[ \\cup ]2 ; +\\infty[$</b>."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "Oublier de changer le sens de l’inégalité en divisant par un nombre négatif.",
        "Écrire $[2 ; +\\infty]$ : on ne ferme jamais un crochet sur l’infini.",
        "Confondre « entre les racines » et « à l’extérieur » : penser à la forme de la parabole ($a \\gt 0$ : ouverte vers le haut, négative entre les racines).",
        "Pour un quotient, la valeur qui annule le dénominateur est toujours exclue, même avec $\\leq$ ou $\\geq$."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "$\\times$ ou $\\div$ par un négatif : on inverse le sens.",
        "$ax + b$ : signe de $a$ après la racine.",
        "$ax^{2} + bx + c$ avec $\\Delta \\gt 0$ : signe de $a$ à l’extérieur des racines.",
        "Crochets ouverts sur $\\pm\\infty$ et sur les valeurs interdites."
      ] }
    ]
  },
  // ===================== Chapitre 3 — Fonctions et analyse =====================
  {
    d: 3,
    o: ["R"],
    title: "Repère cartésien",
    summary: "Se repérer dans le plan, calculer les coordonnées d’un milieu et une distance, et utiliser le repère pour résoudre des problèmes de géométrie.",
    sections: [
      { h: "Introduction au repère cartésien", p: "Un <b>repère cartésien</b> du plan est formé d’un point $O$ (l’origine) et de deux axes gradués sécants en $O$ : l’axe des <b>abscisses</b> (horizontal) et l’axe des <b>ordonnées</b> (vertical). Chaque point $M$ est repéré par un couple de <b>coordonnées</b> $M(x ; y)$ : $x$ est l’abscisse, $y$ l’ordonnée.\nLe repère est <b>orthonormé</b> quand les axes sont perpendiculaires et ont la même unité de longueur. C’est dans ce cas seulement qu’on peut calculer des distances avec la formule ci-dessous." },
      { h: "Formules à connaître", kind: "def", points: [
        "Milieu $I$ du segment $[AB]$ : $x_I = \\frac{x_A + x_B}{2}$ et $y_I = \\frac{y_A + y_B}{2}$.",
        "Distance (repère orthonormé) : $AB = \\sqrt{(x_B - x_A)^{2} + (y_B - y_A)^{2}}$.",
        "Un point appartient à l’axe des abscisses si son ordonnée est nulle, à l’axe des ordonnées si son abscisse est nulle.",
        "Un quadrilatère $ABCD$ est un parallélogramme si et seulement si ses diagonales $[AC]$ et $[BD]$ ont le même milieu.",
        "Réciproque de Pythagore : si $AB^{2} + AC^{2} = BC^{2}$, le triangle $ABC$ est rectangle en $A$."
      ] },
      { h: "Exemple entièrement corrigé", kind: "example", p: "Dans un repère orthonormé, $A(1 ; 2)$ et $B(5 ; -1)$. Calculer les coordonnées du milieu $I$ de $[AB]$ et la longueur $AB$.", steps: [
        "$x_I = \\frac{1 + 5}{2} = 3$ et $y_I = \\frac{2 + (-1)}{2} = 0{,}5$. Donc <b>$I(3 ; 0{,}5)$</b>.",
        "$AB = \\sqrt{(5 - 1)^{2} + (-1 - 2)^{2}} = \\sqrt{16 + 9} = \\sqrt{25} = $ <b>$5$</b>."
      ] },
      { h: "Exemple guidé : utilisation du repère pour résoudre des problèmes", kind: "guided", p: "$A(0 ; 0)$, $B(4 ; 0)$, $C(5 ; 3)$ et $D(1 ; 3)$. Montrer que $ABCD$ est un parallélogramme.", solution: [
        "Milieu de $[AC]$ : $\\left(\\frac{0 + 5}{2} ; \\frac{0 + 3}{2}\\right) = (2{,}5 ; 1{,}5)$.",
        "Milieu de $[BD]$ : $\\left(\\frac{4 + 1}{2} ; \\frac{0 + 3}{2}\\right) = (2{,}5 ; 1{,}5)$.",
        "Les diagonales ont le même milieu : <b>$ABCD$ est un parallélogramme</b>."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "Toujours écrire l’abscisse en premier : $(x ; y)$.",
        "Dans la formule de distance, les carrés rendent le résultat positif : $(-3)^{2} = 9$.",
        "$\\sqrt{16 + 9} \\neq 4 + 3$ : on additionne sous la racine avant d’extraire.",
        "La formule de distance n’est valable que dans un repère orthonormé."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "Milieu : moyenne des abscisses, moyenne des ordonnées.",
        "Distance : $\\sqrt{(\\Delta x)^{2} + (\\Delta y)^{2}}$.",
        "Parallélogramme : diagonales de même milieu.",
        "Triangle rectangle : réciproque de Pythagore avec les distances au carré."
      ] }
    ]
  },
  {
    d: 3,
    o: ["J10"],
    title: "Introduction aux fonctions",
    summary: "Vocabulaire des fonctions, domaine de définition, fonctions usuelles, équation d’une droite, lecture de courbes et représentation graphique.",
    sections: [
      { h: "L’essentiel : vocabulaire des fonctions", p: "Une <b>fonction</b> $f$ associe à chaque nombre $x$ de son ensemble de définition <b>un unique</b> nombre noté $f(x)$.\n$f(x)$ est l’<b>image</b> de $x$ ; $x$ est <b>un antécédent</b> de $f(x)$. Un nombre a une seule image, mais peut avoir zéro, un ou plusieurs antécédents. Exemple : avec $f(x) = x^{2}$, l’image de $3$ est $9$, et $9$ a deux antécédents, $-3$ et $3$.\nLa <b>courbe représentative</b> $\\mathcal{C}_f$ est l’ensemble des points de coordonnées $(x ; f(x))$." },
      { h: "Domaine de définition et fonctions usuelles", kind: "def", points: [
        "Le <b>domaine de définition</b> $D_f$ est l’ensemble des $x$ pour lesquels $f(x)$ peut être calculé. On exclut les valeurs qui annulent un dénominateur, et on impose une quantité $\\geq 0$ sous une racine carrée (et $\\gt 0$ dans un logarithme).",
        "Exemples : $f(x) = \\frac{1}{x - 2}$ est définie sur $\\mathbb{R} \\setminus \\{2\\}$ ; $g(x) = \\sqrt{3 - x}$ est définie sur $]-\\infty ; 3]$.",
        "<b>Fonctions usuelles</b> : affine $x \\mapsto ax + b$ (droite) ; carré $x \\mapsto x^{2}$ (parabole, décroissante sur $]-\\infty ; 0]$, croissante sur $[0 ; +\\infty[$) ; inverse $x \\mapsto \\frac{1}{x}$ (hyperbole, définie sur $\\mathbb{R} \\setminus \\{0\\}$, décroissante sur chaque intervalle) ; racine carrée $x \\mapsto \\sqrt{x}$ (définie et croissante sur $[0 ; +\\infty[$) ; cube $x \\mapsto x^{3}$ (croissante sur $\\mathbb{R}$).",
        "<b>Équation d’une droite</b> non verticale : $y = mx + p$, où $m$ est le <b>coefficient directeur</b> et $p$ l’<b>ordonnée à l’origine</b>. Une droite verticale a une équation $x = k$.",
        "Coefficient directeur de la droite $(AB)$ : $m = \\frac{y_B - y_A}{x_B - x_A}$. Deux droites parallèles ont le même coefficient directeur."
      ] },
      { h: "Lecture et manipulation de courbes", points: [
        "Lire l’<b>image</b> de $a$ : on part de $a$ sur l’axe des abscisses, on monte (ou descend) jusqu’à la courbe, puis on lit l’ordonnée.",
        "Lire les <b>antécédents</b> de $k$ : on trace la droite horizontale $y = k$ et on lit les abscisses des points d’intersection avec la courbe.",
        "Résoudre graphiquement $f(x) = g(x)$ : abscisses des points d’intersection des deux courbes ; $f(x) \\gt g(x)$ : abscisses des points où $\\mathcal{C}_f$ est au-dessus de $\\mathcal{C}_g$.",
        "<b>Représentation graphique</b> : on dresse un tableau de valeurs, on place les points puis on les relie en respectant l’allure de la fonction."
      ] },
      { h: "Exemple entièrement corrigé", kind: "example", p: "Déterminer l’équation de la droite passant par $A(1 ; 3)$ et $B(3 ; 7)$.", steps: [
        "$m = \\frac{7 - 3}{3 - 1} = \\frac{4}{2} = 2$.",
        "La droite a pour équation $y = 2x + p$. Comme $A$ est sur la droite : $3 = 2 \\times 1 + p$, donc $p = 1$.",
        "Équation : <b>$y = 2x + 1$</b>. Vérification avec $B$ : $2 \\times 3 + 1 = 7$. ✓"
      ] },
      { h: "Exemple guidé", kind: "guided", p: "Soit $f(x) = x^{2} - 3$. Calculer l’image de $-2$, puis les antécédents de $6$.", solution: [
        "$f(-2) = (-2)^{2} - 3 = 4 - 3 = $ <b>$1$</b>.",
        "$f(x) = 6 \\iff x^{2} = 9 \\iff x = -3$ ou $x = 3$. Les antécédents de $6$ sont <b>$-3$ et $3$</b>."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "Confondre image (lecture verticale, un seul résultat) et antécédent (lecture horizontale, parfois plusieurs résultats).",
        "Calculer le coefficient directeur à l’envers : c’est $\\frac{\\Delta y}{\\Delta x}$, et non $\\frac{\\Delta x}{\\Delta y}$.",
        "Pour $f(x) = x^{2} - 3$, $f(-2)$ se calcule avec des parenthèses : $(-2)^{2} = 4$.",
        "Une courbe qui coupe une verticale en deux points n’est pas la courbe d’une fonction."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "Image : unique. Antécédents : 0, 1 ou plusieurs.",
        "Domaine : dénominateur $\\neq 0$, radicande $\\geq 0$.",
        "Droite : $y = mx + p$, $m = \\frac{y_B - y_A}{x_B - x_A}$.",
        "Allures : $x^{2}$ parabole, $\\frac{1}{x}$ hyperbole, $\\sqrt{x}$ demi-branche, $x^{3}$ croissante sur $\\mathbb{R}$."
      ] }
    ]
  },
  {
    d: 3,
    o: ["J11"],
    title: "Limites",
    summary: "Comprendre la notion de limite, calculer des limites à l’infini et en un point, reconnaître et lever les formes indéterminées.",
    sections: [
      { h: "Notion de limite et calcul infinitésimal", p: "Étudier la <b>limite</b> d’une fonction, c’est décrire ce que devient $f(x)$ quand $x$ se rapproche d’une valeur $a$, ou quand $x$ devient très grand ($+\\infty$) ou très petit ($-\\infty$).\nC’est l’idée du <b>calcul infinitésimal</b> : raisonner sur des quantités qui deviennent aussi petites que l’on veut. Par exemple, quand $x$ devient très grand, $\\frac{1}{x}$ devient infiniment petit : $\\frac{1}{1\\,000} = 0{,}001$, $\\frac{1}{1\\,000\\,000} = 0{,}000\\,001$… On écrit $\\lim\\limits_{x \\to +\\infty} \\frac{1}{x} = 0$." },
      { h: "Limites de référence et opérations", kind: "def", points: [
        "<b>Limites à l’infini</b> : $\\lim\\limits_{x \\to +\\infty} x^{2} = +\\infty$ ; $\\lim\\limits_{x \\to -\\infty} x^{2} = +\\infty$ ; $\\lim\\limits_{x \\to -\\infty} x^{3} = -\\infty$ ; $\\lim\\limits_{x \\to +\\infty} \\sqrt{x} = +\\infty$ ; $\\lim\\limits_{x \\to \\pm\\infty} \\frac{1}{x} = 0$ ; $\\lim\\limits_{x \\to \\pm\\infty} \\frac{1}{x^{2}} = 0$.",
        "<b>Limites en un point</b> : $\\lim\\limits_{x \\to 0^{+}} \\frac{1}{x} = +\\infty$ et $\\lim\\limits_{x \\to 0^{-}} \\frac{1}{x} = -\\infty$ ; pour une fonction usuelle définie en $a$, la limite en $a$ est $f(a)$.",
        "Somme, produit et quotient de limites finies se calculent directement. Règles avec l’infini : $(+\\infty) + (+\\infty) = +\\infty$ ; $k \\times (+\\infty) = +\\infty$ si $k \\gt 0$ et $-\\infty$ si $k \\lt 0$ ; $\\frac{k}{\\pm\\infty} = 0$ ; $\\frac{k}{0^{+}} = +\\infty$ si $k \\gt 0$.",
        "<b>Formes indéterminées</b> : « $\\infty - \\infty$ », « $0 \\times \\infty$ », « $\\frac{\\infty}{\\infty}$ », « $\\frac{0}{0}$ ». Elles ne permettent pas de conclure directement : il faut transformer l’écriture."
      ] },
      { h: "Calcul de limites : lever une indétermination", points: [
        "Polynôme en $\\pm\\infty$ : il a la même limite que son terme de plus haut degré. $\\lim\\limits_{x \\to +\\infty} (3x^{2} - 5x + 1) = \\lim\\limits_{x \\to +\\infty} 3x^{2} = +\\infty$.",
        "Quotient de polynômes en $\\pm\\infty$ : même limite que le quotient des termes de plus haut degré. $\\lim\\limits_{x \\to +\\infty} \\frac{2x + 1}{x - 3} = \\lim\\limits_{x \\to +\\infty} \\frac{2x}{x} = 2$.",
        "Forme $\\frac{0}{0}$ en $a$ : factoriser par $(x - a)$ et simplifier. $\\frac{x^{2} - 4}{x - 2} = \\frac{(x - 2)(x + 2)}{x - 2} = x + 2$ pour $x \\neq 2$, donc la limite en $2$ vaut $4$.",
        "Limite « $\\frac{k}{0}$ » : étudier le signe du dénominateur de chaque côté (limite à gauche et à droite)."
      ] },
      { h: "Exemple entièrement corrigé", kind: "example", p: "Calculer $\\lim\\limits_{x \\to 1^{+}} \\frac{2x + 1}{x - 1}$ et $\\lim\\limits_{x \\to -\\infty} (x^{3} - 2x^{2} + 7)$.", steps: [
        "Quand $x \\to 1$ avec $x \\gt 1$, le numérateur tend vers $3$ et le dénominateur $x - 1$ tend vers $0$ en restant positif ($0^{+}$).",
        "$\\frac{3}{0^{+}}$ : la limite vaut <b>$+\\infty$</b>.",
        "En $-\\infty$, le polynôme se comporte comme son terme de plus haut degré $x^{3}$, et $\\lim\\limits_{x \\to -\\infty} x^{3} = -\\infty$.",
        "Donc $\\lim\\limits_{x \\to -\\infty} (x^{3} - 2x^{2} + 7) = $ <b>$-\\infty$</b>."
      ] },
      { h: "Exemple guidé", kind: "guided", p: "Calculer $\\lim\\limits_{x \\to +\\infty} \\frac{1 - 4x^{2}}{2x^{2} + x}$.", solution: [
        "Forme « $\\frac{-\\infty}{+\\infty}$ » indéterminée : on garde les termes de plus haut degré.",
        "$\\frac{-4x^{2}}{2x^{2}} = -2$, donc la limite vaut <b>$-2$</b>."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "« $\\infty - \\infty$ » ne vaut pas $0$ : c’est une forme indéterminée.",
        "« $\\frac{0}{0}$ » ne vaut ni $0$ ni $1$ : il faut factoriser.",
        "$\\frac{1}{0}$ n’a pas de sens seul : la limite dépend du signe du dénominateur ($0^{+}$ ou $0^{-}$).",
        "Garder le terme de plus haut degré ne s’applique qu’en $\\pm\\infty$, pas en un point."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "Formes indéterminées : $\\infty - \\infty$ ; $0 \\times \\infty$ ; $\\frac{\\infty}{\\infty}$ ; $\\frac{0}{0}$.",
        "Polynôme ou fraction rationnelle en $\\pm\\infty$ : termes de plus haut degré.",
        "$\\frac{0}{0}$ en $a$ : factoriser par $(x - a)$.",
        "$\\frac{k}{0}$ : étudier le signe de $0^{+}$ ou $0^{-}$."
      ] }
    ]
  },
  {
    d: 3,
    o: ["J12"],
    title: "Dérivées et sens de variation",
    summary: "Nombre dérivé et tangente, fonction dérivée, dérivées usuelles, lien entre signe de la dérivée et variations, tableau de variations.",
    sections: [
      { h: "L’essentiel : nombre dérivé", p: "Le <b>nombre dérivé</b> de $f$ en $a$, noté $f'(a)$, est la limite du taux d’accroissement : $f'(a) = \\lim\\limits_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$ (quand cette limite existe et est finie).\nGéométriquement, $f'(a)$ est le <b>coefficient directeur de la tangente</b> à la courbe au point d’abscisse $a$. Équation de la tangente : <b>$y = f'(a)(x - a) + f(a)$</b>.\nLa <b>fonction dérivée</b> $f'$ associe à chaque $x$ le nombre dérivé $f'(x)$." },
      { h: "Dérivées usuelles et opérations", kind: "def", points: [
        "<b>Dérivées usuelles</b> : $(k)' = 0$ ; $(x)' = 1$ ; $(x^{n})' = nx^{n-1}$ ; $\\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^{2}}$ ; $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$ ($x \\gt 0$) ; $(\\ln x)' = \\frac{1}{x}$ ; $(e^{x})' = e^{x}$.",
        "Opérations : $(u + v)' = u' + v'$ ; $(ku)' = ku'$ ; $(uv)' = u'v + uv'$ ; $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^{2}}$ ; $\\left(\\frac{1}{v}\\right)' = -\\frac{v'}{v^{2}}$.",
        "Fonctions composées usuelles : $(e^{u})' = u'e^{u}$ ; $(\\ln u)' = \\frac{u'}{u}$ ($u \\gt 0$) ; $(u^{n})' = nu'u^{n-1}$.",
        "Exemple : $(x^{3} - 3x + 1)' = 3x^{2} - 3$ ; $(e^{2x})' = 2e^{2x}$."
      ] },
      { h: "Lien entre dérivée et variations", kind: "def", points: [
        "<b>Sens de variation</b> sur un intervalle $I$ : si $f'(x) \\geq 0$ sur $I$, $f$ est croissante sur $I$ ; si $f'(x) \\leq 0$, $f$ est décroissante ; si $f'(x) = 0$, $f$ est constante.",
        "Si $f'$ s’annule en $a$ <b>en changeant de signe</b>, $f$ admet un extremum local en $a$ (maximum si $f'$ passe de $+$ à $-$, minimum si $f'$ passe de $-$ à $+$).",
        "<b>Tableau de variations</b> : 1) calculer $f'(x)$ ; 2) étudier son signe (factoriser, tableau de signes) ; 3) en déduire les flèches ; 4) calculer les valeurs aux extremums et les limites aux bornes."
      ] },
      { h: "Exemple entièrement corrigé", kind: "example", p: "Étudier les variations de $f(x) = x^{3} - 3x + 1$ sur $\\mathbb{R}$.", steps: [
        "$f'(x) = 3x^{2} - 3 = 3(x - 1)(x + 1)$.",
        "$f'(x) \\gt 0$ pour $x \\lt -1$ et $x \\gt 1$ ; $f'(x) \\lt 0$ pour $-1 \\lt x \\lt 1$ (trinôme de coefficient $a = 3 \\gt 0$, négatif entre ses racines).",
        "$f(-1) = -1 + 3 + 1 = 3$ (maximum local) et $f(1) = 1 - 3 + 1 = -1$ (minimum local).",
        "Tableau de variations : @table{$x$ | $-\\infty$ | | $-1$ | | $1$ | | $+\\infty$ // $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | // $f(x)$ | | ↗ | $3$ | ↘ | $-1$ | ↗ | }"
      ] },
      { h: "Exemple guidé", kind: "guided", p: "1) Donner l’équation de la tangente à la courbe de $f(x) = x^{2}$ au point d’abscisse $3$.\n2) Étudier le sens de variation de $g(x) = \\frac{2x + 1}{x - 1}$ sur $]1 ; +\\infty[$.", solution: [
        "$f(3) = 9$ et $f'(x) = 2x$ donc $f'(3) = 6$ ; tangente : $y = 6(x - 3) + 9$, soit <b>$y = 6x - 9$</b>.",
        "$g'(x) = \\frac{2(x - 1) - (2x + 1) \\times 1}{(x - 1)^{2}} = \\frac{-3}{(x - 1)^{2}}$.",
        "$g'(x) \\lt 0$ sur $]1 ; +\\infty[$ : <b>$g$ est décroissante</b> sur cet intervalle."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "$(uv)' \\neq u'v'$ : la dérivée d’un produit est $u'v + uv'$.",
        "$(e^{2x})' = 2e^{2x}$ et non $e^{2x}$ : ne pas oublier $u'$.",
        "Le signe de $f'$ donne les variations de $f$, pas le signe de $f$.",
        "$f'(a) = 0$ sans changement de signe (comme pour $x^{3}$ en $0$) ne donne pas d’extremum."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "Tangente en $a$ : $y = f'(a)(x - a) + f(a)$.",
        "$(x^{n})' = nx^{n-1}$ ; $\\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^{2}}$ ; $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$ ; $(e^{u})' = u'e^{u}$ ; $(\\ln u)' = \\frac{u'}{u}$.",
        "$(uv)' = u'v + uv'$ ; $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^{2}}$.",
        "$f' \\gt 0$ : $f$ croissante ; $f' \\lt 0$ : $f$ décroissante ; changement de signe : extremum."
      ] }
    ]
  },
  {
    d: 3,
    o: ["J13"],
    title: "Asymptotes",
    summary: "Reconnaître une asymptote verticale ou horizontale à partir d’une limite et étudier le comportement d’une fonction à l’infini.",
    sections: [
      { h: "L’essentiel", p: "Une <b>asymptote</b> est une droite dont la courbe se rapproche indéfiniment. Elle se déduit directement d’une limite : c’est la traduction graphique d’un calcul de limite.\nOn distingue les asymptotes <b>verticales</b> (liées à une limite infinie en un point) et les asymptotes <b>horizontales</b> (liées à une limite finie en l’infini)." },
      { h: "Définitions", kind: "def", points: [
        "<b>Asymptotes verticales</b> : si $\\lim\\limits_{x \\to a} f(x) = +\\infty$ ou $-\\infty$ (à gauche ou à droite), la droite d’équation <b>$x = a$</b> est asymptote verticale à $\\mathcal{C}_f$. On la cherche aux valeurs interdites.",
        "<b>Asymptotes horizontales</b> : si $\\lim\\limits_{x \\to +\\infty} f(x) = b$ (ou en $-\\infty$), la droite d’équation <b>$y = b$</b> est asymptote horizontale à $\\mathcal{C}_f$ en $+\\infty$ (ou en $-\\infty$).",
        "<b>Étude du comportement d’une fonction à l’infini</b> : on calcule les limites en $+\\infty$ et en $-\\infty$ ; une limite finie donne une asymptote horizontale, une limite infinie indique que la courbe « part » vers le haut ou le bas.",
        "Position relative de $\\mathcal{C}_f$ et de l’asymptote $y = b$ : on étudie le signe de $f(x) - b$ (positif : courbe au-dessus)."
      ] },
      { h: "Exemple entièrement corrigé", kind: "example", p: "Soit $f(x) = \\frac{2x + 1}{x - 3}$ définie sur $\\mathbb{R} \\setminus \\{3\\}$. Déterminer ses asymptotes.", steps: [
        "En $3$ : le numérateur tend vers $7$. Pour $x \\gt 3$, $x - 3 \\to 0^{+}$ donc $f(x) \\to +\\infty$ ; pour $x \\lt 3$, $x - 3 \\to 0^{-}$ donc $f(x) \\to -\\infty$. La droite <b>$x = 3$</b> est asymptote verticale.",
        "En $\\pm\\infty$ : $\\lim f(x) = \\lim \\frac{2x}{x} = 2$. La droite <b>$y = 2$</b> est asymptote horizontale en $+\\infty$ et en $-\\infty$.",
        "Position : $f(x) - 2 = \\frac{2x + 1 - 2(x - 3)}{x - 3} = \\frac{7}{x - 3}$, positif pour $x \\gt 3$ (courbe au-dessus) et négatif pour $x \\lt 3$ (courbe en dessous)."
      ] },
      { h: "Exemple guidé", kind: "guided", p: "Soit $g(x) = 3 + \\frac{1}{x^{2}}$ sur $\\mathbb{R} \\setminus \\{0\\}$. Déterminer ses asymptotes et la position de la courbe.", solution: [
        "En $0$, $\\frac{1}{x^{2}} \\to +\\infty$ (des deux côtés) : $x = 0$ est asymptote verticale.",
        "En $\\pm\\infty$, $\\frac{1}{x^{2}} \\to 0$ donc $g(x) \\to 3$ : $y = 3$ est asymptote horizontale.",
        "$g(x) - 3 = \\frac{1}{x^{2}} \\gt 0$ : la courbe est toujours <b>au-dessus</b> de la droite $y = 3$."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "Asymptote verticale : $x = a$ (équation en $x$) ; horizontale : $y = b$ (équation en $y$). Ne pas les inverser.",
        "Une valeur interdite ne donne pas toujours une asymptote : $\\frac{x^{2} - 1}{x - 1} = x + 1$ pour $x \\neq 1$ tend vers $2$ en $1$, il n’y a pas d’asymptote verticale.",
        "Une asymptote horizontale peut n’exister que d’un côté : $e^{x}$ a l’asymptote $y = 0$ en $-\\infty$ seulement.",
        "Une limite infinie en $\\pm\\infty$ ne donne pas d’asymptote horizontale."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "$\\lim\\limits_{x \\to a} f(x) = \\pm\\infty \\Rightarrow$ asymptote verticale $x = a$.",
        "$\\lim\\limits_{x \\to \\pm\\infty} f(x) = b \\Rightarrow$ asymptote horizontale $y = b$.",
        "Position : signe de $f(x) - b$.",
        "Chercher les asymptotes verticales aux valeurs interdites."
      ] }
    ]
  },
  {
    d: 3,
    o: ["J14"],
    title: "Continuité et théorème des valeurs intermédiaires",
    summary: "Comprendre la continuité, appliquer le théorème des valeurs intermédiaires et l’utiliser pour résoudre des équations et étudier des fonctions.",
    sections: [
      { h: "L’essentiel : continuité", p: "Une fonction est <b>continue</b> sur un intervalle si sa courbe peut être tracée « sans lever le crayon », sans saut ni trou. Plus précisément, $f$ est continue en $a$ si $\\lim\\limits_{x \\to a} f(x) = f(a)$.\nLes fonctions usuelles (polynômes, fractions rationnelles, racine carrée, exponentielle, logarithme) sont continues sur chaque intervalle de leur domaine de définition. Toute fonction <b>dérivable</b> sur un intervalle y est continue." },
      { h: "Théorème des valeurs intermédiaires", kind: "def", points: [
        "<b>Théorème des valeurs intermédiaires</b> : si $f$ est continue sur $[a ; b]$, alors pour tout réel $k$ compris entre $f(a)$ et $f(b)$, l’équation $f(x) = k$ admet <b>au moins une</b> solution dans $[a ; b]$.",
        "Cas d’une fonction strictement monotone : si $f$ est continue et <b>strictement monotone</b> sur $[a ; b]$ et si $k$ est compris entre $f(a)$ et $f(b)$, la solution est <b>unique</b>.",
        "Cas fréquent $k = 0$ : si $f(a)$ et $f(b)$ sont de signes contraires, $f$ s’annule au moins une fois entre $a$ et $b$.",
        "Le théorème donne l’existence d’une solution, pas sa valeur : on l’<b>encadre</b> ensuite par balayage (tableau de valeurs à la calculatrice) ou par dichotomie."
      ] },
      { h: "Exemple entièrement corrigé : application à la résolution d’équations", kind: "example", p: "Montrer que l’équation $x^{3} + x - 1 = 0$ admet une unique solution $\\alpha$ dans $[0 ; 1]$, puis donner un encadrement de $\\alpha$ d’amplitude $0{,}01$.", steps: [
        "$f(x) = x^{3} + x - 1$ est un polynôme, donc continue. $f'(x) = 3x^{2} + 1 \\gt 0$ : $f$ est strictement croissante.",
        "$f(0) = -1 \\lt 0$ et $f(1) = 1 \\gt 0$ : $0$ est compris entre $f(0)$ et $f(1)$. Il existe donc une unique solution $\\alpha$ dans $[0 ; 1]$.",
        "Balayage : $f(0{,}6) = -0{,}184$ et $f(0{,}7) = 0{,}043$, donc $0{,}6 \\lt \\alpha \\lt 0{,}7$.",
        "Puis $f(0{,}68) \\approx -0{,}006$ et $f(0{,}69) \\approx 0{,}019$, donc <b>$0{,}68 \\lt \\alpha \\lt 0{,}69$</b>."
      ] },
      { h: "Exemple guidé : étude de fonctions", kind: "guided", p: "Montrer que l’équation $e^{x} = 3 - x$ admet une unique solution dans $[0 ; 1]$. Posez $g(x) = e^{x} + x - 3$.", solution: [
        "$g$ est continue et dérivable sur $[0 ; 1]$ ; $g'(x) = e^{x} + 1 \\gt 0$, donc $g$ est strictement croissante.",
        "$g(0) = 1 + 0 - 3 = -2 \\lt 0$ et $g(1) = e - 2 \\approx 0{,}72 \\gt 0$.",
        "D’après le théorème des valeurs intermédiaires (cas strictement monotone), $g(x) = 0$ admet une <b>unique</b> solution dans $[0 ; 1]$, qui est la solution de $e^{x} = 3 - x$."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "Oublier de citer la continuité : sans elle, le théorème ne s’applique pas (une fonction avec un saut peut « sauter » par-dessus $0$).",
        "Conclure à l’unicité sans avoir justifié la stricte monotonie.",
        "Vérifier que $k$ est bien compris entre $f(a)$ et $f(b)$ avant d’appliquer le théorème.",
        "Un encadrement d’amplitude $0{,}01$ signifie deux bornes distantes de $0{,}01$ (par exemple $0{,}68$ et $0{,}69$)."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "Continue sur $[a ; b]$ + $k$ entre $f(a)$ et $f(b)$ $\\Rightarrow$ au moins une solution à $f(x) = k$.",
        "+ strictement monotone $\\Rightarrow$ solution unique.",
        "Rédaction : continuité, monotonie (via $f'$), valeurs $f(a)$ et $f(b)$, conclusion.",
        "Encadrer la solution par balayage."
      ] }
    ]
  },
  {
    d: 3,
    o: ["J16"],
    title: "Fonction logarithme népérien",
    summary: "Définition et propriétés du logarithme, calculs logarithmiques, équations et inéquations avec ln.",
    sections: [
      { h: "L’essentiel : la fonction logarithme", p: "La <b>fonction logarithme népérien</b>, notée $\\ln$, est définie sur <b>$]0 ; +\\infty[$</b>. Elle est la fonction réciproque de l’exponentielle : pour $x \\gt 0$, <b>$y = \\ln x \\iff x = e^{y}$</b>.\nValeurs à connaître : $\\ln 1 = 0$ et $\\ln e = 1$. La fonction $\\ln$ est dérivable, de dérivée $(\\ln x)' = \\frac{1}{x} \\gt 0$ : elle est strictement croissante. $\\lim\\limits_{x \\to 0^{+}} \\ln x = -\\infty$ (asymptote verticale $x = 0$) et $\\lim\\limits_{x \\to +\\infty} \\ln x = +\\infty$.\nSigne : $\\ln x \\lt 0$ sur $]0 ; 1[$ et $\\ln x \\gt 0$ sur $]1 ; +\\infty[$." },
      { h: "Propriétés du logarithme", kind: "def", points: [
        "Pour $a \\gt 0$ et $b \\gt 0$ : <b>$\\ln(ab) = \\ln a + \\ln b$</b>.",
        "$\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b$ et $\\ln\\left(\\frac{1}{b}\\right) = -\\ln b$.",
        "$\\ln(a^{n}) = n \\ln a$ ($n$ entier) et $\\ln(\\sqrt{a}) = \\frac{1}{2} \\ln a$.",
        "$\\ln(e^{x}) = x$ pour tout réel $x$, et $e^{\\ln x} = x$ pour $x \\gt 0$.",
        "Comparaison : pour $a \\gt 0$ et $b \\gt 0$, $\\ln a = \\ln b \\iff a = b$ et $\\ln a \\lt \\ln b \\iff a \\lt b$."
      ] },
      { h: "Exemples entièrement corrigés : calculs et équations logarithmiques", kind: "example", p: "1) Simplifier $A = \\ln 12 - \\ln 3 + 2 \\ln\\left(\\frac{1}{2}\\right)$.\n2) Résoudre $\\ln(x) + \\ln(x - 2) = \\ln 3$.", steps: [
        "$\\ln 12 - \\ln 3 = \\ln 4$ et $2 \\ln\\left(\\frac{1}{2}\\right) = \\ln\\left(\\frac{1}{4}\\right)$. $A = \\ln 4 + \\ln\\left(\\frac{1}{4}\\right) = \\ln 1 = $ <b>$0$</b>.",
        "Conditions d’existence : $x \\gt 0$ et $x - 2 \\gt 0$, donc on cherche $x$ dans $]2 ; +\\infty[$.",
        "$\\ln(x(x - 2)) = \\ln 3 \\iff x^{2} - 2x = 3 \\iff x^{2} - 2x - 3 = 0$ ; $\\Delta = 16$, racines $3$ et $-1$.",
        "Seul $3$ appartient à $]2 ; +\\infty[$ : $S = $ <b>$\\{3\\}$</b>."
      ] },
      { h: "Exemple guidé", kind: "guided", p: "1) Résoudre $\\ln(2x - 1) = 2$.\n2) Déterminer le plus petit entier $n$ tel que $2^{n} \\gt 1\\,000$.", solution: [
        "Condition : $2x - 1 \\gt 0$, soit $x \\gt \\frac{1}{2}$. Alors $2x - 1 = e^{2}$, donc $x = \\frac{e^{2} + 1}{2} \\approx 4{,}19$ (qui vérifie bien $x \\gt \\frac{1}{2}$).",
        "$2^{n} \\gt 1\\,000 \\iff n \\ln 2 \\gt \\ln 1\\,000$ ($\\ln$ est croissante) $\\iff n \\gt \\frac{\\ln 1\\,000}{\\ln 2} \\approx 9{,}97$.",
        "Le plus petit entier est <b>$n = 10$</b> (en effet $2^{10} = 1\\,024$)."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "<b>$\\ln(a + b) \\neq \\ln a + \\ln b$</b> : c’est $\\ln(ab)$ qui vaut $\\ln a + \\ln b$.",
        "Oublier les conditions d’existence (quantités strictement positives) et garder une solution interdite.",
        "$\\ln 0$ et le logarithme d’un nombre négatif n’existent pas.",
        "En divisant par $\\ln a$, attention à son signe : $\\ln 0{,}5 \\lt 0$, donc l’inégalité change de sens."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "$\\ln$ défini sur $]0 ; +\\infty[$ ; $\\ln 1 = 0$ ; $\\ln e = 1$ ; $(\\ln x)' = \\frac{1}{x}$.",
        "$\\ln(ab) = \\ln a + \\ln b$ ; $\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b$ ; $\\ln(a^{n}) = n \\ln a$.",
        "$\\ln x = k \\iff x = e^{k}$.",
        "Équation : conditions d’existence → transformation → vérification."
      ] }
    ]
  },
  {
    d: 3,
    o: ["J17"],
    title: "Fonction exponentielle",
    summary: "Définition et propriétés de l’exponentielle, calculs exponentiels, croissances comparées et études de fonctions avec exponentielle et logarithme.",
    sections: [
      { h: "L’essentiel : la fonction exponentielle", p: "La <b>fonction exponentielle</b> est l’unique fonction dérivable sur $\\mathbb{R}$ égale à sa dérivée et qui vaut $1$ en $0$ : $\\exp' = \\exp$ et $\\exp(0) = 1$. On note $\\exp(x) = e^{x}$, avec $e \\approx 2{,}718$.\nElle est définie sur $\\mathbb{R}$ et <b>strictement positive</b> : $e^{x} \\gt 0$ pour tout $x$. Elle est strictement croissante, avec $\\lim\\limits_{x \\to -\\infty} e^{x} = 0$ (asymptote horizontale $y = 0$ en $-\\infty$) et $\\lim\\limits_{x \\to +\\infty} e^{x} = +\\infty$." },
      { h: "Propriétés et calculs exponentiels", kind: "def", points: [
        "<b>Propriétés</b> : $e^{a + b} = e^{a} \\times e^{b}$ ; $e^{a - b} = \\frac{e^{a}}{e^{b}}$ ; $e^{-a} = \\frac{1}{e^{a}}$ ; $(e^{a})^{n} = e^{na}$ ; $e^{0} = 1$.",
        "Lien avec $\\ln$ : $e^{\\ln x} = x$ ($x \\gt 0$) et $\\ln(e^{x}) = x$ ; $e^{x} = k \\iff x = \\ln k$ ($k \\gt 0$). Si $k \\leq 0$, l’équation $e^{x} = k$ n’a pas de solution.",
        "$e^{a} = e^{b} \\iff a = b$ ; $e^{a} \\lt e^{b} \\iff a \\lt b$.",
        "Dérivées : $(e^{x})' = e^{x}$ ; $(e^{ax + b})' = ae^{ax + b}$ ; $(e^{u})' = u'e^{u}$."
      ] },
      { h: "Croissances comparées", kind: "def", points: [
        "En $+\\infty$, l’exponentielle l’emporte sur toute puissance de $x$ : $\\lim\\limits_{x \\to +\\infty} \\frac{e^{x}}{x} = +\\infty$ (et plus généralement $\\frac{e^{x}}{x^{n}} \\to +\\infty$).",
        "$\\lim\\limits_{x \\to -\\infty} x e^{x} = 0$.",
        "Toute puissance de $x$ l’emporte sur le logarithme : $\\lim\\limits_{x \\to +\\infty} \\frac{\\ln x}{x} = 0$ et $\\lim\\limits_{x \\to 0^{+}} x \\ln x = 0$.",
        "Ces résultats servent à lever les formes indéterminées « $\\frac{\\infty}{\\infty}$ » ou « $0 \\times \\infty$ » avec $\\exp$ et $\\ln$."
      ] },
      { h: "Exemple entièrement corrigé : étude de fonctions utilisant exponentielle et logarithme", kind: "example", p: "Étudier $f(x) = (x - 1)e^{x}$ sur $\\mathbb{R}$.", steps: [
        "Dérivée d’un produit : $f'(x) = 1 \\times e^{x} + (x - 1)e^{x} = x e^{x}$.",
        "Comme $e^{x} \\gt 0$, $f'(x)$ a le signe de $x$ : $f$ est décroissante sur $]-\\infty ; 0]$ et croissante sur $[0 ; +\\infty[$. Minimum $f(0) = -1$.",
        "En $+\\infty$ : $(x - 1) \\to +\\infty$ et $e^{x} \\to +\\infty$, donc $f(x) \\to +\\infty$.",
        "En $-\\infty$ : $f(x) = x e^{x} - e^{x}$ ; par croissances comparées $x e^{x} \\to 0$ et $e^{x} \\to 0$, donc $f(x) \\to 0$ : asymptote horizontale $y = 0$ en $-\\infty$."
      ] },
      { h: "Exemple guidé", kind: "guided", p: "1) Résoudre $e^{2x} - 3e^{x} + 2 = 0$ (posez $X = e^{x}$).\n2) Montrer que $x - \\ln x \\geq 1$ pour tout $x \\gt 0$.", solution: [
        "$X^{2} - 3X + 2 = 0$ : $\\Delta = 1$, $X = 1$ ou $X = 2$. Donc $e^{x} = 1$ ($x = 0$) ou $e^{x} = 2$ ($x = \\ln 2$). $S = \\{0 ; \\ln 2\\}$.",
        "$g(x) = x - \\ln x$ : $g'(x) = 1 - \\frac{1}{x} = \\frac{x - 1}{x}$, négatif sur $]0 ; 1]$, positif sur $[1 ; +\\infty[$.",
        "Minimum en $1$ : $g(1) = 1 - 0 = 1$. Donc <b>$g(x) \\geq 1$</b> pour tout $x \\gt 0$."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "$e^{a} \\times e^{b} = e^{a + b}$ et non $e^{ab}$ ; $e^{a} + e^{b}$ ne se simplifie pas.",
        "$e^{x}$ n’est jamais nul ni négatif : $e^{x} = 0$ et $e^{x} = -2$ n’ont pas de solution.",
        "$(e^{3x})' = 3e^{3x}$ : ne pas oublier le facteur $3$.",
        "$(e^{x})^{2} = e^{2x}$, et non $e^{x^{2}}$."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "$e^{0} = 1$ ; $e^{x} \\gt 0$ ; $(e^{u})' = u'e^{u}$.",
        "$e^{a+b} = e^{a}e^{b}$ ; $e^{-a} = \\frac{1}{e^{a}}$.",
        "$e^{x} = k$ ($k \\gt 0$) $\\iff x = \\ln k$.",
        "Croissances comparées : $\\frac{e^{x}}{x} \\to +\\infty$ ; $x e^{x} \\to 0$ en $-\\infty$ ; $\\frac{\\ln x}{x} \\to 0$ ; $x \\ln x \\to 0$ en $0^{+}$."
      ] }
    ]
  },
  {
    d: 3,
    o: ["J18"],
    title: "Primitives et calcul intégral",
    summary: "Trouver une primitive, calculer une intégrale et l’utiliser pour des aires et des valeurs moyennes.",
    sections: [
      { h: "L’essentiel : primitives", p: "Une <b>primitive</b> d’une fonction $f$ sur un intervalle $I$ est une fonction $F$ dérivable sur $I$ telle que <b>$F' = f$</b>. Exemple : $F(x) = x^{2}$ est une primitive de $f(x) = 2x$.\nSi $F$ est une primitive de $f$, toutes les primitives de $f$ sont les fonctions $F(x) + C$, où $C$ est une constante réelle. Chercher une primitive, c’est « dériver à l’envers »." },
      { h: "Primitives usuelles", kind: "def", points: [
        "$k \\mapsto kx$ ; $x^{n} \\mapsto \\frac{x^{n+1}}{n + 1}$ ($n \\neq -1$) ; $\\frac{1}{x^{2}} \\mapsto -\\frac{1}{x}$ ; $\\frac{1}{x} \\mapsto \\ln x$ ($x \\gt 0$) ; $e^{x} \\mapsto e^{x}$ ; $\\frac{1}{2\\sqrt{x}} \\mapsto \\sqrt{x}$.",
        "$e^{ax + b} \\mapsto \\frac{1}{a}e^{ax + b}$ ($a \\neq 0$).",
        "Formes composées : $u'e^{u} \\mapsto e^{u}$ ; $\\frac{u'}{u} \\mapsto \\ln u$ ($u \\gt 0$) ; $u'u^{n} \\mapsto \\frac{u^{n+1}}{n + 1}$.",
        "Une primitive d’une somme est la somme des primitives ; une primitive de $kf$ est $kF$."
      ] },
      { h: "Intégrales et calcul intégral", kind: "def", points: [
        "<b>Intégrale</b> de $a$ à $b$ : $\\int_{a}^{b} f(x)\\,dx = \\big[F(x)\\big]_{a}^{b} = F(b) - F(a)$, où $F$ est une primitive de $f$.",
        "Si $f \\geq 0$ sur $[a ; b]$, l’intégrale est l’<b>aire</b> (en unités d’aire) du domaine compris entre la courbe, l’axe des abscisses et les droites $x = a$ et $x = b$.",
        "Propriétés : linéarité $\\int (f + g) = \\int f + \\int g$ et $\\int kf = k\\int f$ ; relation de Chasles $\\int_{a}^{b} + \\int_{b}^{c} = \\int_{a}^{c}$ ; si $f \\geq 0$ sur $[a ; b]$ ($a \\leq b$), $\\int_{a}^{b} f \\geq 0$.",
        "<b>Applications du calcul intégral</b> : aire entre deux courbes $\\int_{a}^{b} (f(x) - g(x))\\,dx$ si $f \\geq g$ ; valeur moyenne de $f$ sur $[a ; b]$ : $\\mu = \\frac{1}{b - a} \\int_{a}^{b} f(x)\\,dx$."
      ] },
      { h: "Exemples entièrement corrigés", kind: "example", p: "Calculer $I = \\int_{0}^{2} (3x^{2} - 2x + 1)\\,dx$, $J = \\int_{1}^{e} \\frac{1}{x}\\,dx$, puis l’aire entre les courbes de $y = x$ et $y = x^{2}$ sur $[0 ; 1]$.", steps: [
        "Une primitive de $3x^{2} - 2x + 1$ est $x^{3} - x^{2} + x$. $I = (8 - 4 + 2) - 0 = $ <b>$6$</b>.",
        "$J = \\big[\\ln x\\big]_{1}^{e} = \\ln e - \\ln 1 = $ <b>$1$</b>.",
        "Sur $[0 ; 1]$, $x \\geq x^{2}$. Aire $= \\int_{0}^{1} (x - x^{2})\\,dx = \\left[\\frac{x^{2}}{2} - \\frac{x^{3}}{3}\\right]_{0}^{1} = \\frac{1}{2} - \\frac{1}{3} = $ <b>$\\frac{1}{6}$</b> unité d’aire."
      ] },
      { h: "Exemple guidé", kind: "guided", p: "Calculer la valeur moyenne de $f(x) = e^{x}$ sur $[0 ; \\ln 3]$.", solution: [
        "$\\int_{0}^{\\ln 3} e^{x}\\,dx = e^{\\ln 3} - e^{0} = 3 - 1 = 2$.",
        "$\\mu = \\frac{1}{\\ln 3 - 0} \\times 2 = \\frac{2}{\\ln 3} \\approx $ <b>$1{,}82$</b>."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "Primitive de $x^{n}$ : on augmente l’exposant de $1$ <b>et</b> on divise par le nouvel exposant ($x^{3} \\mapsto \\frac{x^{4}}{4}$).",
        "Si $f$ est négative, l’intégrale est négative : l’aire vaut alors $-\\int f$.",
        "L’intégrale d’un produit n’est pas le produit des intégrales.",
        "Primitive de $e^{2x}$ : $\\frac{1}{2}e^{2x}$ (et non $2e^{2x}$, qui est la dérivée)."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "$F' = f$ ; primitives : $F + C$.",
        "$\\int_{a}^{b} f = F(b) - F(a)$.",
        "Aire ($f \\geq 0$) $= \\int_{a}^{b} f$ ; entre deux courbes : $\\int$ (haut $-$ bas).",
        "Valeur moyenne : $\\frac{1}{b - a} \\int_{a}^{b} f$."
      ] }
    ]
  },
  // ===================== Chapitre 4 — Statistiques et probabilités =====================
  {
    d: 4,
    o: ["J9"],
    title: "Statistiques descriptives",
    summary: "Vocabulaire statistique, effectifs et classes, moyenne, médiane, quartiles, déciles, écart-type et représentation des données.",
    sections: [
      { h: "Vocabulaire statistique", p: "Une étude statistique porte sur une <b>population</b>, formée d’<b>individus</b>, sur lesquels on observe un <b>caractère</b> (ou variable).\n<b>Caractère qualitatif et quantitatif</b> : un caractère qualitatif ne se mesure pas par un nombre (couleur, profession, moyen de transport) ; un caractère quantitatif est un nombre. Il est <b>discret</b> s’il prend des valeurs isolées (nombre d’enfants), <b>continu</b> s’il peut prendre toutes les valeurs d’un intervalle (taille, salaire).\nLes valeurs possibles du caractère sont ses <b>modalités</b>. Quand un caractère continu a beaucoup de valeurs, on les regroupe en <b>classes</b> $[a ; b[$, représentées par leur centre $\\frac{a + b}{2}$." },
      { h: "Effectifs et indicateurs", kind: "def", points: [
        "<b>Effectifs</b> : $n_i$ est le nombre d’individus ayant la modalité $x_i$ ; $N$ est l’effectif total. Fréquence : $f_i = \\frac{n_i}{N}$. Effectifs cumulés croissants : nombre d’individus ayant une valeur $\\leq x_i$.",
        "<b>Moyenne</b> : $\\bar{x} = \\frac{n_1x_1 + n_2x_2 + \\dots + n_px_p}{N}$. Avec des classes, on utilise les centres de classes.",
        "<b>Médiane</b> : valeur qui partage la série ordonnée en deux groupes de même effectif. Si $N$ est impair, c’est la valeur de rang $\\frac{N + 1}{2}$ ; si $N$ est pair, la moyenne des valeurs de rangs $\\frac{N}{2}$ et $\\frac{N}{2} + 1$.",
        "<b>Quartiles</b> : $Q_1$ est la plus petite valeur telle qu’au moins 25 % des données lui soient inférieures ou égales ; $Q_3$ de même avec 75 %. Écart interquartile : $Q_3 - Q_1$.",
        "<b>Déciles</b> : $D_1$ (au moins 10 % des données $\\leq D_1$) et $D_9$ (au moins 90 %). Écart interdécile : $D_9 - D_1$.",
        "<b>Écart-type</b> : $\\sigma = \\sqrt{V}$ où $V = \\frac{n_1(x_1 - \\bar{x})^{2} + \\dots + n_p(x_p - \\bar{x})^{2}}{N} = \\frac{n_1x_1^{2} + \\dots + n_px_p^{2}}{N} - \\bar{x}^{2}$. Il mesure la dispersion autour de la moyenne. Étendue : max $-$ min."
      ] },
      { h: "Diagrammes et représentation des données", points: [
        "<b>Diagramme en bâtons</b> : caractère quantitatif discret, une barre par valeur, hauteur proportionnelle à l’effectif.",
        "<b>Diagramme circulaire</b> : surtout pour un caractère qualitatif ; l’angle de chaque secteur vaut $f_i \\times 360°$.",
        "<b>Histogramme</b> : caractère continu regroupé en classes ; l’<b>aire</b> de chaque rectangle est proportionnelle à l’effectif (les classes peuvent avoir des largeurs différentes).",
        "<b>Boîte à moustaches</b> : résume min, $Q_1$, médiane, $Q_3$ et max ; pratique pour comparer deux séries.",
        "Polygone des effectifs cumulés croissants : permet d’estimer graphiquement la médiane et les quartiles."
      ] },
      { h: "Exemple entièrement corrigé", kind: "example", p: "Nombre d’enfants de 20 familles : @table{Nombre d’enfants $x_i$ | $0$ | $1$ | $2$ | $3$ | $4$ // Effectif $n_i$ | $5$ | $8$ | $4$ | $2$ | $1$ // Effectifs cumulés | $5$ | $13$ | $17$ | $19$ | $20$}", steps: [
        "Moyenne : $\\bar{x} = \\frac{0 \\times 5 + 1 \\times 8 + 2 \\times 4 + 3 \\times 2 + 4 \\times 1}{20} = \\frac{26}{20} = $ <b>$1{,}3$</b>.",
        "Médiane : $N = 20$ est pair, on prend les valeurs de rangs 10 et 11 ; d’après les effectifs cumulés, ce sont deux 1, donc <b>$Me = 1$</b>.",
        "$Q_1$ : 25 % de 20 = 5, valeur de rang 5 : <b>$Q_1 = 0$</b>. $Q_3$ : 75 % de 20 = 15, valeur de rang 15 : <b>$Q_3 = 2$</b>.",
        "Variance : $\\frac{0 + 8 + 16 + 18 + 16}{20} - 1{,}3^{2} = 2{,}9 - 1{,}69 = 1{,}21$, donc <b>$\\sigma = 1{,}1$</b>."
      ] },
      { h: "Exemple guidé", kind: "guided", p: "Temps de trajet (en minutes) de 20 salariés : @table{Classe | $[0 ; 10[$ | $[10 ; 20[$ | $[20 ; 30[$ // Effectif | $4$ | $10$ | $6$}\nEstimer le temps moyen de trajet.", solution: [
        "Centres des classes : $5$, $15$ et $25$.",
        "$\\bar{x} = \\frac{4 \\times 5 + 10 \\times 15 + 6 \\times 25}{20} = \\frac{20 + 150 + 150}{20} = $ <b>$16$ minutes</b>.",
        "C’est une estimation : on suppose les valeurs concentrées au centre de chaque classe."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "Calculer la médiane sans avoir rangé les valeurs dans l’ordre croissant.",
        "La moyenne est sensible aux valeurs extrêmes, la médiane ne l’est pas : un très gros salaire augmente la moyenne mais peu ou pas la médiane.",
        "$Q_1$ n’est pas la médiane de la moitié inférieure : on applique la définition « au moins 25 % des données ».",
        "Dans un histogramme à classes inégales, c’est l’aire et non la hauteur qui représente l’effectif."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "$\\bar{x} = \\frac{\\sum n_ix_i}{N}$ ; $V = \\frac{\\sum n_ix_i^{2}}{N} - \\bar{x}^{2}$ ; $\\sigma = \\sqrt{V}$.",
        "Médiane : rang $\\frac{N + 1}{2}$ si $N$ impair, moyenne des rangs $\\frac{N}{2}$ et $\\frac{N}{2} + 1$ si $N$ pair.",
        "$Q_1$ : rang $\\geq \\frac{N}{4}$ ; $Q_3$ : rang $\\geq \\frac{3N}{4}$ ; $D_1$ : rang $\\geq \\frac{N}{10}$ ; $D_9$ : rang $\\geq \\frac{9N}{10}$ (arrondis à l’entier supérieur).",
        "Qualitatif → diagramme circulaire ou en barres ; discret → bâtons ; continu → histogramme."
      ] }
    ]
  },
  {
    d: 4,
    o: ["J19"],
    title: "Probabilités et dénombrement",
    summary: "Univers, événements, probabilités, événements contraires, union et intersection, probabilité conditionnelle, factorielle et coefficients binomiaux.",
    sections: [
      { h: "L’essentiel : univers et événements", p: "Une expérience est <b>aléatoire</b> si on connaît ses résultats possibles, les <b>issues</b>, sans pouvoir prévoir lequel se produira. L’ensemble des issues est l’<b>univers</b>, noté $\\Omega$. Pour un dé : $\\Omega = \\{1 ; 2 ; 3 ; 4 ; 5 ; 6\\}$.\nUn <b>événement</b> est une partie de l’univers (« obtenir un nombre pair » $= \\{2 ; 4 ; 6\\}$). L’événement impossible est $\\varnothing$, l’événement certain est $\\Omega$." },
      { h: "Probabilités : règles de calcul", kind: "def", points: [
        "Une <b>probabilité</b> est un nombre entre $0$ et $1$ ; la somme des probabilités de toutes les issues vaut $1$.",
        "<b>Équiprobabilité</b> (toutes les issues ont la même probabilité) : $P(A) = \\frac{\\text{nombre d’issues favorables à } A}{\\text{nombre total d’issues}}$.",
        "<b>Événements contraires</b> : $\\bar{A}$ (« non $A$ ») est réalisé quand $A$ ne l’est pas ; $P(\\bar{A}) = 1 - P(A)$.",
        "<b>Union et intersection</b> : $A \\cap B$ (« $A$ et $B$ »), $A \\cup B$ (« $A$ ou $B$ », au moins l’un des deux). $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Si $A$ et $B$ sont incompatibles ($A \\cap B = \\varnothing$), $P(A \\cup B) = P(A) + P(B)$.",
        "<b>Probabilité conditionnelle</b> de $A$ sachant $B$ ($P(B) \\neq 0$) : $P_B(A) = \\frac{P(A \\cap B)}{P(B)}$, donc $P(A \\cap B) = P(B) \\times P_B(A)$.",
        "Arbre pondéré : on multiplie les probabilités le long d’un chemin ; <b>formule des probabilités totales</b> : $P(A) = P(B \\cap A) + P(\\bar{B} \\cap A)$. $A$ et $B$ sont indépendants si $P(A \\cap B) = P(A) \\times P(B)$."
      ] },
      { h: "Dénombrement, factorielle et coefficients binomiaux", kind: "def", points: [
        "<b>Dénombrement</b> : principe multiplicatif — si un choix se fait en $k$ étapes offrant $n_1, n_2, \\dots, n_k$ possibilités, il y a $n_1 \\times n_2 \\times \\dots \\times n_k$ résultats. Un code de 4 chiffres : $10^{4} = 10\\,000$ possibilités.",
        "<b>Factorielle</b> : $n! = 1 \\times 2 \\times \\dots \\times n$, avec $0! = 1$. C’est le nombre de façons de ranger $n$ objets distincts. $5! = 120$.",
        "Nombre de listes ordonnées de $p$ éléments distincts pris parmi $n$ : $n \\times (n - 1) \\times \\dots \\times (n - p + 1) = \\frac{n!}{(n - p)!}$.",
        "<b>Coefficients binomiaux</b> : $\\binom{n}{k} = \\frac{n!}{k!(n - k)!}$ (lire « $k$ parmi $n$ ») est le nombre de façons de choisir $k$ éléments parmi $n$ <b>sans tenir compte de l’ordre</b>.",
        "Propriétés : $\\binom{n}{0} = \\binom{n}{n} = 1$ ; $\\binom{n}{1} = n$ ; $\\binom{n}{k} = \\binom{n}{n - k}$ ; $\\binom{n}{k} + \\binom{n}{k + 1} = \\binom{n + 1}{k + 1}$ (triangle de Pascal)."
      ] },
      { h: "Exemple entièrement corrigé : calcul de probabilités", kind: "example", p: "Un test de dépistage : 5 % de la population est malade ($M$). Le test est positif ($T$) pour 98 % des malades et pour 3 % des personnes saines. Calculer $P(T)$, puis la probabilité d’être malade sachant que le test est positif.", steps: [
        "Arbre : $P(M) = 0{,}05$, $P_M(T) = 0{,}98$ ; $P(\\bar{M}) = 0{,}95$, $P_{\\bar{M}}(T) = 0{,}03$.",
        "$P(M \\cap T) = 0{,}05 \\times 0{,}98 = 0{,}049$ et $P(\\bar{M} \\cap T) = 0{,}95 \\times 0{,}03 = 0{,}028\\,5$.",
        "Probabilités totales : $P(T) = 0{,}049 + 0{,}028\\,5 = $ <b>$0{,}077\\,5$</b>.",
        "$P_T(M) = \\frac{0{,}049}{0{,}077\\,5} \\approx $ <b>$0{,}632$</b> : seulement 63 % des tests positifs correspondent à un malade."
      ] },
      { h: "Exemple guidé", kind: "guided", p: "Une urne contient 5 boules rouges et 3 vertes. On tire simultanément 2 boules. Quelle est la probabilité d’obtenir 2 boules rouges ?", solution: [
        "Nombre de tirages possibles : $\\binom{8}{2} = \\frac{8 \\times 7}{2} = 28$ (l’ordre ne compte pas).",
        "Tirages favorables : $\\binom{5}{2} = \\frac{5 \\times 4}{2} = 10$.",
        "$P = \\frac{10}{28} = $ <b>$\\frac{5}{14}$</b> $\\approx 0{,}357$."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "Confondre $P_B(A)$ et $P_A(B)$ : dans l’exemple, $P_M(T) = 0{,}98$ mais $P_T(M) \\approx 0{,}63$.",
        "Additionner $P(A)$ et $P(B)$ pour $P(A \\cup B)$ sans retirer $P(A \\cap B)$.",
        "Confondre incompatibles ($A \\cap B = \\varnothing$) et indépendants ($P(A \\cap B) = P(A)P(B)$).",
        "Tirage simultané ou sans ordre : coefficients binomiaux ; ordre important : $\\frac{n!}{(n - p)!}$."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "$P(\\bar{A}) = 1 - P(A)$ ; $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",
        "$P_B(A) = \\frac{P(A \\cap B)}{P(B)}$ ; arbre : on multiplie sur un chemin, on additionne les chemins.",
        "$n!$ ; $\\binom{n}{k} = \\frac{n!}{k!(n - k)!}$ ; $\\binom{n}{2} = \\frac{n(n - 1)}{2}$.",
        "« Au moins un » : passer par l’événement contraire."
      ] }
    ]
  },
  {
    d: 4,
    o: ["J20"],
    title: "Variables aléatoires et loi binomiale",
    summary: "Variables aléatoires discrètes, loi de probabilité, espérance, variance, écart-type et loi binomiale.",
    sections: [
      { h: "L’essentiel : variables aléatoires discrètes", p: "Les <b>variables aléatoires discrètes</b> associent un nombre réel à chaque issue d’une expérience aléatoire : un gain, un nombre de succès, un nombre de pièces défectueuses… On les note $X$, $Y$…\nLa <b>loi de probabilité</b> de $X$ donne, pour chaque valeur $x_i$ prise par $X$, la probabilité $p_i = P(X = x_i)$. On la présente dans un tableau ; la somme des $p_i$ vaut $1$." },
      { h: "Espérance, variance, écart-type", kind: "def", points: [
        "<b>Espérance</b> : $E(X) = p_1x_1 + p_2x_2 + \\dots + p_nx_n$. C’est la valeur moyenne de $X$ si l’on répète l’expérience un grand nombre de fois. Un jeu est <b>équitable</b> si l’espérance du gain vaut $0$.",
        "<b>Variance</b> : $V(X) = p_1(x_1 - E(X))^{2} + \\dots + p_n(x_n - E(X))^{2} = E(X^{2}) - (E(X))^{2}$.",
        "Écart-type : $\\sigma(X) = \\sqrt{V(X)}$.",
        "Pour des réels $a$ et $b$ : $E(aX + b) = aE(X) + b$ et $V(aX + b) = a^{2}V(X)$."
      ] },
      { h: "Loi binomiale", kind: "def", points: [
        "Une <b>épreuve de Bernoulli</b> a deux issues : succès (probabilité $p$) et échec (probabilité $1 - p$).",
        "Un <b>schéma de Bernoulli</b> répète $n$ fois, de façon <b>identique et indépendante</b>, cette épreuve.",
        "Le nombre $X$ de succès suit la <b>loi binomiale</b> $\\mathcal{B}(n ; p)$ : $P(X = k) = \\binom{n}{k} p^{k} (1 - p)^{n - k}$ pour $k = 0, 1, \\dots, n$.",
        "$E(X) = np$ et $V(X) = np(1 - p)$.",
        "$P(X \\geq 1) = 1 - P(X = 0) = 1 - (1 - p)^{n}$."
      ] },
      { h: "Exemple entièrement corrigé", kind: "example", p: "Un jeu coûte 2 €. On lance un dé équilibré : un 6 rapporte 10 €, un 5 rapporte 2 €, sinon on ne gagne rien. $X$ est le gain net (gain $-$ mise).", steps: [
        "Valeurs de $X$ : $10 - 2 = 8$ (probabilité $\\frac{1}{6}$) ; $2 - 2 = 0$ ($\\frac{1}{6}$) ; $-2$ ($\\frac{4}{6}$).",
        "$E(X) = 8 \\times \\frac{1}{6} + 0 \\times \\frac{1}{6} - 2 \\times \\frac{4}{6} = \\frac{8 - 8}{6} = $ <b>$0$</b> : le jeu est équitable.",
        "$E(X^{2}) = 64 \\times \\frac{1}{6} + 0 + 4 \\times \\frac{4}{6} = \\frac{80}{6} = \\frac{40}{3}$, donc $V(X) = \\frac{40}{3} - 0 = \\frac{40}{3}$ et $\\sigma(X) \\approx $ <b>$3{,}65$ €</b>."
      ] },
      { h: "Exemple guidé", kind: "guided", p: "Un joueur de basket réussit un tir avec une probabilité $0{,}3$. Il tire 10 fois, de façon indépendante. $X$ est le nombre de tirs réussis. Calculer $P(X = 2)$, $E(X)$, puis la probabilité de réussir au moins un tir sur 5 tirs d’un autre joueur dont la probabilité de réussite est $0{,}2$.", solution: [
        "$X$ suit $\\mathcal{B}(10 ; 0{,}3)$ : $P(X = 2) = \\binom{10}{2} \\times 0{,}3^{2} \\times 0{,}7^{8} = 45 \\times 0{,}09 \\times 0{,}7^{8} \\approx $ <b>$0{,}233$</b>.",
        "$E(X) = 10 \\times 0{,}3 = $ <b>$3$</b> tirs réussis en moyenne.",
        "Pour $Y$ qui suit $\\mathcal{B}(5 ; 0{,}2)$ : $P(Y \\geq 1) = 1 - 0{,}8^{5} = 1 - 0{,}327\\,68 \\approx $ <b>$0{,}672$</b>."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "Oublier de soustraire la mise pour obtenir le gain net.",
        "Vérifier que la somme des probabilités du tableau vaut $1$.",
        "La loi binomiale exige des répétitions indépendantes et identiques : un tirage <b>sans remise</b> dans une petite urne ne suit pas une loi binomiale.",
        "$V(aX + b) = a^{2}V(X)$ : la constante $b$ n’influence pas la variance."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "$E(X) = \\sum p_ix_i$ ; $V(X) = E(X^{2}) - E(X)^{2}$ ; $\\sigma = \\sqrt{V}$.",
        "$\\mathcal{B}(n ; p)$ : $P(X = k) = \\binom{n}{k}p^{k}(1 - p)^{n-k}$.",
        "$E = np$ ; $V = np(1 - p)$.",
        "Au moins un succès : $1 - (1 - p)^{n}$."
      ] }
    ]
  },

  // ===================== Chapitre 5 — Suites numériques =====================
  {
    d: 5,
    o: ["J15"],
    title: "Suites numériques",
    summary: "Suites arithmétiques, géométriques et arithmético-géométriques : calcul de termes, sommes et évolution.",
    sections: [
      { h: "L’essentiel : suites numériques", p: "Une <b>suite numérique</b> $(u_n)$ associe un nombre réel $u_n$ à chaque entier naturel $n$. Elle modélise des phénomènes qui évoluent par étapes : un capital d’année en année, une population, un stock.\nUne suite peut être définie de façon <b>explicite</b> ($u_n = 3n + 1$ : on calcule directement n’importe quel terme) ou <b>par récurrence</b> ($u_0 = 2$ et $u_{n+1} = 2u_n - 1$ : chaque terme se calcule à partir du précédent)." },
      { h: "Suites arithmétiques et géométriques", kind: "def", points: [
        "<b>Suites arithmétiques</b> : $u_{n+1} = u_n + r$ (on ajoute toujours la même raison $r$). Terme général : $u_n = u_0 + nr = u_p + (n - p)r$.",
        "Somme de termes consécutifs d’une suite arithmétique : $S = (\\text{nombre de termes}) \\times \\frac{\\text{premier terme} + \\text{dernier terme}}{2}$. En particulier $1 + 2 + \\dots + n = \\frac{n(n + 1)}{2}$.",
        "<b>Suites géométriques</b> : $u_{n+1} = q \\times u_n$ (on multiplie toujours par la même raison $q$). Terme général : $u_n = u_0 \\times q^{n}$.",
        "Somme : $1 + q + q^{2} + \\dots + q^{n} = \\frac{1 - q^{n+1}}{1 - q}$ ($q \\neq 1$). Somme de termes consécutifs : premier terme $\\times \\frac{1 - q^{\\text{nombre de termes}}}{1 - q}$.",
        "Augmentation de $t\\,\\%$ : multiplication par $q = 1 + \\frac{t}{100}$ ; diminution de $t\\,\\%$ : $q = 1 - \\frac{t}{100}$."
      ] },
      { h: "Suites arithmético-géométriques et évolution des suites", kind: "def", points: [
        "<b>Suites arithmético-géométriques</b> : $u_{n+1} = a u_n + b$ ($a \\neq 1$, $b \\neq 0$). On cherche le nombre $\\ell$ tel que $\\ell = a\\ell + b$, soit $\\ell = \\frac{b}{1 - a}$. La suite $v_n = u_n - \\ell$ est géométrique de raison $a$, donc $u_n = \\ell + (u_0 - \\ell)a^{n}$.",
        "<b>Évolution des suites</b> : $(u_n)$ est croissante si $u_{n+1} - u_n \\geq 0$ pour tout $n$, décroissante si $u_{n+1} - u_n \\leq 0$.",
        "Suite arithmétique : croissante si $r \\gt 0$, décroissante si $r \\lt 0$. Suite géométrique de premier terme positif : croissante si $q \\gt 1$, décroissante si $0 \\lt q \\lt 1$.",
        "Limite de $q^{n}$ : si $-1 \\lt q \\lt 1$, $q^{n} \\to 0$ ; si $q \\gt 1$, $q^{n} \\to +\\infty$."
      ] },
      { h: "Exemples entièrement corrigés : calcul de termes", kind: "example", p: "1) On place 1 000 € à 3 % d’intérêts composés par an. Capital après 10 ans ? Au bout de combien d’années le capital aura-t-il doublé ?\n2) Un lac contient 100 tonnes de poissons. Chaque année, 20 % disparaissent et on en réintroduit 40 tonnes : $u_0 = 100$ et $u_{n+1} = 0{,}8u_n + 40$.", steps: [
        "1) $u_{n+1} = 1{,}03\\, u_n$ : suite géométrique, $u_n = 1\\,000 \\times 1{,}03^{n}$ ; $u_{10} = 1\\,000 \\times 1{,}03^{10} \\approx $ <b>$1\\,343{,}92$ €</b>.",
        "$1{,}03^{n} \\geq 2 \\iff n \\geq \\frac{\\ln 2}{\\ln 1{,}03} \\approx 23{,}4$ : le capital double au bout de <b>24 ans</b>.",
        "2) $\\ell = \\frac{40}{1 - 0{,}8} = 200$. $v_n = u_n - 200$ est géométrique de raison $0{,}8$ et $v_0 = -100$.",
        "$u_n = 200 - 100 \\times 0{,}8^{n}$. Comme $0{,}8^{n} \\to 0$, la masse de poissons tend vers <b>200 tonnes</b>, en augmentant."
      ] },
      { h: "Exemple guidé", kind: "guided", p: "$(u_n)$ est arithmétique de premier terme $u_0 = 5$ et de raison $3$. Calculer $u_{20}$ et la somme $S = u_0 + u_1 + \\dots + u_{20}$.", solution: [
        "$u_{20} = 5 + 20 \\times 3 = $ <b>$65$</b>.",
        "De $u_0$ à $u_{20}$, il y a 21 termes : $S = 21 \\times \\frac{5 + 65}{2} = 21 \\times 35 = $ <b>$735$</b>."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "De $u_0$ à $u_n$, il y a <b>$n + 1$</b> termes (et non $n$).",
        "Arithmétique : on <b>ajoute</b> $r$ ; géométrique : on <b>multiplie</b> par $q$. Une hausse de 5 % par an est géométrique ($q = 1{,}05$), pas arithmétique.",
        "$u_n = u_0 \\times q^{n}$ si la suite commence à $u_0$ ; si elle commence à $u_1$, $u_n = u_1 \\times q^{n-1}$.",
        "Une suite arithmético-géométrique n’est ni arithmétique ni géométrique : passer par la suite auxiliaire $v_n$."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "Arithmétique : $u_n = u_0 + nr$ ; somme = nb termes $\\times \\frac{\\text{premier} + \\text{dernier}}{2}$.",
        "Géométrique : $u_n = u_0q^{n}$ ; somme = premier $\\times \\frac{1 - q^{\\text{nb termes}}}{1 - q}$.",
        "Arithmético-géométrique : $\\ell = \\frac{b}{1 - a}$, $v_n = u_n - \\ell$ géométrique de raison $a$.",
        "$q^{n} \\to 0$ si $-1 \\lt q \\lt 1$ ; $q^{n} \\to +\\infty$ si $q \\gt 1$."
      ] }
    ]
  },

  // ===================== Chapitre 6 — Trigonométrie et nombres complexes (facultatif) =====================
  {
    d: 6,
    o: ["J21"],
    title: "Trigonométrie",
    summary: "Radians, cercle trigonométrique, valeurs remarquables, calculs trigonométriques et fonctions cosinus et sinus.",
    sections: [
      { h: "L’essentiel", p: "Ce module fait partie des <b>notions facultatives</b> du programme.\nOn mesure les angles en <b>radians</b> : $\\pi$ rad $= 180°$, donc $1° = \\frac{\\pi}{180}$ rad. Sur le <b>cercle trigonométrique</b> (centre $O$, rayon $1$, parcouru dans le sens inverse des aiguilles d’une montre), à chaque réel $x$ correspond un point $M$ ; ses coordonnées sont <b>$(\\cos x ; \\sin x)$</b>." },
      { h: "Calculs trigonométriques", kind: "def", points: [
        "Pour tout $x$ : $-1 \\leq \\cos x \\leq 1$, $-1 \\leq \\sin x \\leq 1$ et <b>$\\cos^{2} x + \\sin^{2} x = 1$</b>.",
        "Valeurs remarquables : @table{$x$ | $0$ | $\\frac{\\pi}{6}$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{3}$ | $\\frac{\\pi}{2}$ | $\\pi$ // $\\cos x$ | $1$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{1}{2}$ | $0$ | $-1$ // $\\sin x$ | $0$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $1$ | $0$}",
        "Relations : $\\cos(-x) = \\cos x$ ; $\\sin(-x) = -\\sin x$ ; $\\cos(\\pi - x) = -\\cos x$ ; $\\sin(\\pi - x) = \\sin x$ ; $\\cos(x + 2\\pi) = \\cos x$ ; $\\sin(x + 2\\pi) = \\sin x$.",
        "Dans un triangle rectangle : $\\cos = \\frac{\\text{côté adjacent}}{\\text{hypoténuse}}$ ; $\\sin = \\frac{\\text{côté opposé}}{\\text{hypoténuse}}$ ; $\\tan = \\frac{\\text{côté opposé}}{\\text{côté adjacent}}$.",
        "$\\cos x = \\cos a \\iff x = a + 2k\\pi$ ou $x = -a + 2k\\pi$ ($k$ entier) ; $\\sin x = \\sin a \\iff x = a + 2k\\pi$ ou $x = \\pi - a + 2k\\pi$."
      ] },
      { h: "Fonctions trigonométriques", kind: "def", points: [
        "Les fonctions cosinus et sinus sont définies sur $\\mathbb{R}$ et <b>périodiques de période $2\\pi$</b> : leur courbe se répète tous les $2\\pi$.",
        "$\\cos$ est <b>paire</b> (courbe symétrique par rapport à l’axe des ordonnées), $\\sin$ est <b>impaire</b> (courbe symétrique par rapport à l’origine).",
        "Dérivées : $(\\cos x)' = -\\sin x$ et $(\\sin x)' = \\cos x$.",
        "Sur $[0 ; \\pi]$, $\\cos$ est décroissante de $1$ à $-1$ ; sur $\\left[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right]$, $\\sin$ est croissante de $-1$ à $1$."
      ] },
      { h: "Exemple entièrement corrigé", kind: "example", p: "1) Convertir $150°$ en radians.\n2) Sachant que $\\sin x = \\frac{3}{5}$ et $x \\in \\left[0 ; \\frac{\\pi}{2}\\right]$, calculer $\\cos x$.", steps: [
        "$150° = 150 \\times \\frac{\\pi}{180} = $ <b>$\\frac{5\\pi}{6}$</b> rad.",
        "$\\cos^{2} x = 1 - \\sin^{2} x = 1 - \\frac{9}{25} = \\frac{16}{25}$.",
        "Comme $x \\in \\left[0 ; \\frac{\\pi}{2}\\right]$, $\\cos x \\geq 0$, donc <b>$\\cos x = \\frac{4}{5}$</b>."
      ] },
      { h: "Exemple guidé", kind: "guided", p: "Résoudre $\\cos x = \\frac{1}{2}$ sur $[0 ; 2\\pi[$.", solution: [
        "$\\cos x = \\cos \\frac{\\pi}{3} \\iff x = \\frac{\\pi}{3} + 2k\\pi$ ou $x = -\\frac{\\pi}{3} + 2k\\pi$.",
        "Dans $[0 ; 2\\pi[$ : $x = \\frac{\\pi}{3}$ et $x = -\\frac{\\pi}{3} + 2\\pi = \\frac{5\\pi}{3}$. $S = $ <b>$\\left\\{\\frac{\\pi}{3} ; \\frac{5\\pi}{3}\\right\\}$</b>."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "Mettre la calculatrice en mode radian (ou degré) selon l’unité demandée.",
        "$\\cos^{2} x + \\sin^{2} x = 1$ donne $\\cos x$ au signe près : le signe dépend de l’intervalle.",
        "$\\cos(a + b) \\neq \\cos a + \\cos b$.",
        "Une équation $\\cos x = k$ n’a pas de solution si $k \\gt 1$ ou $k \\lt -1$."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "$\\pi$ rad $= 180°$ ; $M(\\cos x ; \\sin x)$ sur le cercle trigonométrique.",
        "$\\cos^{2} + \\sin^{2} = 1$ ; période $2\\pi$ ; $\\cos$ paire, $\\sin$ impaire.",
        "Valeurs remarquables en $0$, $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{3}$, $\\frac{\\pi}{2}$.",
        "$(\\cos x)' = -\\sin x$ ; $(\\sin x)' = \\cos x$."
      ] }
    ]
  },
  {
    d: 6,
    o: ["J22"],
    title: "Nombres complexes",
    summary: "L’ensemble ℂ, forme algébrique, conjugué, module, argument, formes trigonométrique et exponentielle, opérations.",
    sections: [
      { h: "Ensemble des nombres complexes", p: "Ce module fait partie des <b>notions facultatives</b> du programme.\nL’ensemble des <b>nombres complexes</b> $\\mathbb{C}$ contient $\\mathbb{R}$ et un nombre $i$ tel que <b>$i^{2} = -1$</b>. On y calcule avec les mêmes règles que dans $\\mathbb{R}$ (développement, identités remarquables), en remplaçant $i^{2}$ par $-1$.\nIl permet notamment de résoudre les équations du second degré de discriminant négatif." },
      { h: "Écriture des nombres complexes", kind: "def", points: [
        "<b>Forme algébrique</b> : $z = a + ib$ avec $a$, $b$ réels ; $a = \\operatorname{Re}(z)$ est la partie réelle, $b = \\operatorname{Im}(z)$ la partie imaginaire. $z$ est réel si $b = 0$, imaginaire pur si $a = 0$.",
        "<b>Conjugué</b> : $\\overline{z} = a - ib$ ; $z \\times \\overline{z} = a^{2} + b^{2}$.",
        "<b>Module</b> : $|z| = \\sqrt{a^{2} + b^{2}}$ ; <b>argument</b> $\\theta$ (défini à $2\\pi$ près pour $z \\neq 0$) : $\\cos \\theta = \\frac{a}{|z|}$ et $\\sin \\theta = \\frac{b}{|z|}$.",
        "<b>Forme trigonométrique</b> : $z = r(\\cos \\theta + i \\sin \\theta)$ avec $r = |z|$ ; <b>forme exponentielle</b> : $z = re^{i\\theta}$.",
        "Deux complexes sont égaux si et seulement s’ils ont même partie réelle et même partie imaginaire."
      ] },
      { h: "Opérations sur les nombres complexes", kind: "def", points: [
        "Somme : $(a + ib) + (c + id) = (a + c) + i(b + d)$.",
        "Produit : on développe et on remplace $i^{2}$ par $-1$.",
        "Quotient : on multiplie numérateur et dénominateur par le <b>conjugué du dénominateur</b>.",
        "En forme exponentielle : $re^{i\\theta} \\times r'e^{i\\theta'} = rr'e^{i(\\theta + \\theta')}$ ; modules multipliés, arguments additionnés.",
        "Équation $az^{2} + bz + c = 0$ ($a$, $b$, $c$ réels) avec $\\Delta \\lt 0$ : deux solutions conjuguées $z = \\frac{-b \\pm i\\sqrt{-\\Delta}}{2a}$."
      ] },
      { h: "Exemples entièrement corrigés", kind: "example", p: "Calculer $(2 + 3i)(1 - i)$ et $\\frac{1 + 2i}{3 - i}$, puis écrire $z = 1 + i$ sous forme exponentielle.", steps: [
        "$(2 + 3i)(1 - i) = 2 - 2i + 3i - 3i^{2} = 2 + i + 3 = $ <b>$5 + i$</b>.",
        "$\\frac{(1 + 2i)(3 + i)}{(3 - i)(3 + i)} = \\frac{3 + i + 6i + 2i^{2}}{9 + 1} = \\frac{1 + 7i}{10} = $ <b>$0{,}1 + 0{,}7i$</b>.",
        "$|1 + i| = \\sqrt{2}$ ; $\\cos \\theta = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$ et $\\sin \\theta = \\frac{\\sqrt{2}}{2}$, donc $\\theta = \\frac{\\pi}{4}$.",
        "$z = $ <b>$\\sqrt{2}\\, e^{i\\pi/4}$</b>."
      ] },
      { h: "Exemple guidé", kind: "guided", p: "Résoudre dans $\\mathbb{C}$ l’équation $z^{2} - 2z + 5 = 0$.", solution: [
        "$\\Delta = (-2)^{2} - 4 \\times 1 \\times 5 = 4 - 20 = -16 \\lt 0$.",
        "$z = \\frac{2 \\pm i\\sqrt{16}}{2} = \\frac{2 \\pm 4i}{2}$.",
        "$S = $ <b>$\\{1 - 2i ; 1 + 2i\\}$</b>."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "$i^{2} = -1$, et non $1$ : $(3i)^{2} = 9i^{2} = -9$.",
        "La partie imaginaire de $3 - 4i$ est $-4$ (un réel), et non $-4i$.",
        "$|a + ib| = \\sqrt{a^{2} + b^{2}}$ et non $a + b$.",
        "Pour un quotient, multiplier par le conjugué du <b>dénominateur</b>, en haut et en bas."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "$z = a + ib$ ; $\\overline{z} = a - ib$ ; $z\\overline{z} = a^{2} + b^{2}$.",
        "$|z| = \\sqrt{a^{2} + b^{2}}$ ; $z = re^{i\\theta}$.",
        "Quotient : multiplier par le conjugué du dénominateur.",
        "$\\Delta \\lt 0$ : $z = \\frac{-b \\pm i\\sqrt{-\\Delta}}{2a}$."
      ] }
    ]
  },
  {
    d: 6,
    o: ["J23"],
    title: "Nombres complexes et géométrie plane",
    summary: "Affixes de points et de vecteurs, distances et angles, translations, homothéties et rotations écrites avec les nombres complexes.",
    sections: [
      { h: "L’essentiel", p: "Ce module fait partie des <b>notions facultatives</b> du programme.\nDans un repère orthonormé, au point $M(x ; y)$ on associe le nombre complexe $z = x + iy$, appelé <b>affixe</b> de $M$. Les calculs sur les complexes deviennent alors des outils de géométrie : distances, milieux, angles et transformations." },
      { h: "Utilisation des nombres complexes en géométrie", kind: "def", points: [
        "Affixe du vecteur $\\overrightarrow{AB}$ : $z_B - z_A$.",
        "Distance : $AB = |z_B - z_A|$.",
        "Milieu $I$ de $[AB]$ : $z_I = \\frac{z_A + z_B}{2}$.",
        "Angle orienté : $\\left(\\overrightarrow{AB}, \\overrightarrow{AC}\\right) = \\arg\\left(\\frac{z_C - z_A}{z_B - z_A}\\right)$ (à $2\\pi$ près).",
        "Si $\\frac{z_C - z_A}{z_B - z_A} = i$, alors $AC = AB$ et l’angle vaut $\\frac{\\pi}{2}$ : le triangle $ABC$ est <b>rectangle isocèle en $A$</b>."
      ] },
      { h: "Transformations affines du plan et nombres complexes", kind: "def", points: [
        "Une transformation qui associe au point d’affixe $z$ le point d’affixe $z' = az + b$ ($a \\neq 0$) conserve les alignements et les milieux : c’est une <b>transformation affine</b> du plan.",
        "<b>Translation</b> de vecteur d’affixe $b$ : $z' = z + b$ (cas $a = 1$).",
        "<b>Homothétie</b> de centre $\\Omega$ (affixe $\\omega$) et de rapport $k$ réel non nul : $z' - \\omega = k(z - \\omega)$.",
        "<b>Rotation</b> de centre $\\Omega$ et d’angle $\\theta$ : $z' - \\omega = e^{i\\theta}(z - \\omega)$.",
        "<b>Étude des transformations à l’aide des nombres complexes</b> : pour $z' = az + b$ avec $a \\neq 1$, le point fixe a pour affixe $\\omega = \\frac{b}{1 - a}$. Si $a$ est réel, c’est une homothétie de rapport $a$ ; si $|a| = 1$, une rotation d’angle $\\arg(a)$ ; sinon, la composée d’une rotation d’angle $\\arg(a)$ et d’une homothétie de rapport $|a|$ de même centre."
      ] },
      { h: "Exemples entièrement corrigés", kind: "example", p: "1) $A$, $B$, $C$ ont pour affixes $1$, $3 + 2i$ et $-1 + 2i$. Nature du triangle $ABC$ ?\n2) Nature de la transformation $z' = iz + 2$.", steps: [
        "$\\frac{z_C - z_A}{z_B - z_A} = \\frac{-2 + 2i}{2 + 2i} = \\frac{(-2 + 2i)(2 - 2i)}{8} = \\frac{-4 + 8i + 4}{8} = i$.",
        "Donc $AC = AB$ et $\\left(\\overrightarrow{AB}, \\overrightarrow{AC}\\right) = \\frac{\\pi}{2}$ : <b>$ABC$ est rectangle isocèle en $A$</b>.",
        "Pour $z' = iz + 2$ : $a = i$, $|a| = 1$ et $\\arg(a) = \\frac{\\pi}{2}$. Point fixe : $\\omega = \\frac{2}{1 - i} = \\frac{2(1 + i)}{2} = 1 + i$.",
        "C’est la <b>rotation de centre $\\Omega(1 + i)$ et d’angle $\\frac{\\pi}{2}$</b>."
      ] },
      { h: "Exemple guidé", kind: "guided", p: "Déterminer l’image de l’origine $O$ par l’homothétie de centre $\\Omega$ d’affixe $1 + i$ et de rapport $2$.", solution: [
        "$z' - (1 + i) = 2(0 - (1 + i)) = -2 - 2i$.",
        "$z' = -2 - 2i + 1 + i = $ <b>$-1 - i$</b>."
      ] },
      { h: "Erreurs et pièges fréquents", kind: "trap", points: [
        "Affixe de $\\overrightarrow{AB}$ : $z_B - z_A$ (arrivée moins départ), et non $z_A - z_B$.",
        "Pour une rotation ou une homothétie de centre $\\Omega$, ne pas oublier de retrancher $\\omega$ des deux côtés.",
        "Une homothétie de rapport $-1$ est une symétrie centrale.",
        "Le point fixe n’existe que si $a \\neq 1$ : $z' = z + b$ (translation, $b \\neq 0$) n’a aucun point fixe."
      ] },
      { h: "Fiche de révision", kind: "sheet", points: [
        "$AB = |z_B - z_A|$ ; milieu $\\frac{z_A + z_B}{2}$.",
        "Translation $z' = z + b$ ; homothétie $z' - \\omega = k(z - \\omega)$ ; rotation $z' - \\omega = e^{i\\theta}(z - \\omega)$.",
        "$z' = az + b$ : point fixe $\\omega = \\frac{b}{1 - a}$.",
        "$\\frac{z_C - z_A}{z_B - z_A} = i$ : triangle rectangle isocèle en $A$."
      ] }
    ]
  }
];
