// Initialiser la variable
let deploye = false;

document.getElementById('burger').addEventListener('click', function () {

    let monmenu = document.querySelector('nav ul');

    if (!deploye) {
        monmenu.style.top = '100%';
        monmenu.style.animation = 'descente .5s linear';
        monmenu.style.animationIterationCount = 1;
        deploye = true;
    }
    else {
        monmenu.style.top = '-600%';
        monmenu.style.animation = 'remontee .5s linear';
        monmenu.style.animationIterationCount = 1;
        deploye = false;
    }

});