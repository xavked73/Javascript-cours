let couleur1, couleur2, melange;

// 1. Saisie de la première couleur (et ce tant que la couleur n'est ni bleu ni jaune ni rouge)
do {
    couleur1 = window.prompt('Saisir une 1ère couleur parmi : bleu, jaune ou rouge');
}
while (couleur1 != 'bleu' && couleur1 != 'jaune' && couleur1 != 'rouge');


// 2. Saisie de la deuxième couleur qui ne doit pas être la même que la première
do {
    couleur2 = window.prompt('Saisir une 2ème couleur différente de la première parmi : bleu, jaune ou rouge');
}
while ((couleur2 != 'bleu' && couleur2 != 'jaune' && couleur2 != 'rouge') || couleur2 == couleur1);


// 3. traitement du mélange...
if ((couleur1 == 'jaune' && couleur2 == 'bleu') || (couleur1 == 'bleu' && couleur2 == 'jaune')) {
    melange = 'vert';
}
else if ((couleur1 == 'jaune' && couleur2 == 'rouge') || (couleur1 == 'rouge' && couleur2 == 'jaune')) {
    melange = 'orange';
}
else {
    melange = 'violet';
}
//... et Affichage du résultat
document.write(`${couleur1} et ${couleur2} donnent du ${melange}`);