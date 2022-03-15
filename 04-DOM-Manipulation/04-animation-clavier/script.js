let perso = document.querySelector('#personnage');
let droite, gauche, haut, bas;


document.addEventListener('keydown', anime);
document.addEventListener('keyup', stop);

function stop() {
    perso.style['animation'] = 'none';
}


function anime(event) {

    console.log(event);
    /*
    haut 38/90
    bas 40/83
    droite 39/68
    gauche 37/81
    */

    perso.style['animation'] = 'marche 0.5s steps(3) infinite';

    switch (event.keyCode) {

        case 38:
        case 90:
            perso.style['background-position-y'] = '-100px';
            // 17px => 17
            haut = parseInt(perso.style.top) || 0;
            if(haut > 5){
                haut-=5;
            }
            perso.style.top = haut + 'px';
            break;
        case 40:
        case 83:
            perso.style['background-position-y'] = '-150px';
            bas = parseInt(perso.style.top) || 0;
            if (bas < window.innerHeight-55) {
                bas += 5;
            }
            perso.style.top = bas + 'px';
            break;
        case 39:
        case 68:
            perso.style['background-position-y'] = '0';
            droite = parseInt(perso.style.left) || 0;
            if(droite < window.innerWidth-55){
                droite +=5;
            }
            perso.style.left = droite + 'px';
            break;
        case 37:
        case 81:
            perso.style['background-position-y'] = '-50px';
            gauche = parseInt(perso.style.left) || 0;
            if(gauche > 5){
                gauche -=5;
            }
            perso.style.left = gauche + 'px';
            break;
    }
}
