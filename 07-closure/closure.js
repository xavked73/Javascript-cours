// closure qui me sert à générer des fonctions
function genereCouleur(couleur){

    return function(){
        document.body.style.background = couleur;
    }

}

let changeRouge = genereCouleur('red');
let changeVert = genereCouleur('green');
let changeBleu = genereCouleur('blue');

document.getElementById('bouton1').onclick = changeRouge;
document.getElementById('bouton2').onclick = changeVert;
document.getElementById('bouton3').onclick = changeBleu;



// Autre closure
function parente(){
    let chiffre = 15; // variable locale à parente()

    function afficheChiffre(){ // fonction interne de parente (locale)
        console.log(chiffre);
    }

    return afficheChiffre;
}


let maFonctionPerso  = parente();
maFonctionPerso();
