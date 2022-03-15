// 1 premiere couleur
let couleur1;
do{
couleur1 = window.prompt("Saisir une première couleur parmi : bleu, jaune ou rouge");
}
while(couleur1!='bleu' && couleur1!='jaune' && couleur1!='rouge');

// 2 deuxième couleur
let couleur2;
do{
couleur2 = window.prompt("Saisir une deuxième couleur parmi : bleu, jaune ou rouge, différente de la première");
}
while((couleur2!='bleu' && couleur2!='jaune' && couleur2!='rouge') || couleur2 == couleur1 );


// 3 Mélange
let melange;
if( (couleur1=='jaune' && couleur2=='bleu') || (couleur1=='bleu' && couleur2=='jaune')  ){
    melange = 'vert';
}
else if((couleur1=='rouge' && couleur2=='jaune') || (couleur1=='jaune' && couleur2=='rouge')){
    melange = 'orange';
}
else{
    melange = 'violet';
}

// Affichage
document.write(`${couleur1} et ${couleur2} donnent du ${melange}`);