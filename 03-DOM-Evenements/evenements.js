// Simuler le mode defer
// add event listener
// DOMContentLoaded est un évènement correspondant à la fin du  chargement du document

// let monCarre = document.querySelector('#div1');
// console.log(monCarre);

document.addEventListener('DOMContentLoaded', function () {
    console.log('Document chargé');

    let monCarreVert = document.querySelector('#div1');

    monCarreVert.onclick = function () {
        console.log("J'ai cliqué !");
        // this.classList.toggle('bleu');
        // this.classList.toggle('vert');
        this.classList.replace('vert', 'bleu');
    };

    // document.querySelector('#monlien').onclick = function(){
    //     return(window.confirm('Etes vous sûr(e) de vouloir aller sur youtube ?'));
    // }

    for (let i = 0; i < document.querySelectorAll('.confirm').length; i++) {
        document.querySelectorAll('.confirm')[i].onclick = function () {
            return (window.confirm(`Etes vous sûr(e) de vouloir aller sur ${this.href} ?`));
        }
    }

    let mesLiens = document.querySelectorAll('.confirm');

    for (let i = 0; i < mesLiens.length; i++) {
        mesLiens[i].onclick = function () {
            return (window.confirm(`Etes vous sûr(e) de vouloir aller sur ${this.href} ?`));
        }
    }

    let monCarreRouge = document.querySelector('#div2');


    monCarreRouge.addEventListener('dblclick', function () {

        console.log(this.classList);

        this.classList.replace('carre', 'rond');
        /*
        .add ajouter (une fois) la classe
        .toggle (alterne)
        .remove retire une classe
        .replace remplace une classe par une autre
        .contains teste la présence d'une classe
        */

    });

    //  let monCarreBleu = document.querySelector('#div3');
    let monCarreBleu = document.getElementById('div3');

    monCarreBleu.addEventListener('mouseover', changeCouleur);
    monCarreBleu.addEventListener('mouseout', changeCouleur2);

    function changeCouleur() {
        this.classList.replace('bleu', 'violet');
        // condition
        if (!this.classList.contains('violet')) {
            this.classList.add('violet');
        }
    }
    function changeCouleur2() {
        this.classList.replace('violet', 'bleu');
    }

    monCarreRouge.addEventListener('mouseover', changeCouleur);

    monCarreBleu.addEventListener('mousedown', toggleBordure);
    monCarreBleu.addEventListener('mouseup', toggleBordure);

    //    function ajoutBordure(){
    //        this.classList.add('border');
    //    }
    //    function retraitBordure(){
    //        this.classList.remove('border');
    //    }

    function toggleBordure() {
        // this désigne l'élément sur lequel porte l'appel à la fonction toggleBordure
        this.classList.toggle('border');
    }

    monCarreVert.addEventListener('mousedown', toggleBordure);
    monCarreVert.addEventListener('mouseup', toggleBordure);

    // evenement sur tout le document (ex : menu contextuel)
    document.addEventListener('contextmenu', function (event) {
        console.log(event);
        event.preventDefault(); // neutraliser le comportement naturel du clic droit
        // alert('bouton droit désactivé');
        document.querySelector('#monmenu').style.top = event.clientY + 'px';
        document.querySelector('#monmenu').style.left = event.clientX + 'px';
        document.querySelector('#monmenu').classList.remove('invisible');
    });

    document.addEventListener('click', function () {
        document.querySelector('#monmenu').classList.add('invisible');
    });

    // Un clic sur l'oeil change l'état de l'input avant lui
    document.querySelector('#eye').addEventListener('click', function () {

        // Créer une fonction toggle password/text
        if (document.querySelector('#mdp').getAttribute('type') == 'password') {
            document.querySelector('#mdp').setAttribute('type', 'text');
        }
        else {
            document.querySelector('#mdp').setAttribute('type', 'password');
        }

    });


    // evenements sur l'input #saisie
    let saisie = document.querySelector('#saisie');

    saisie.addEventListener('keypress', function (e) {
        // console.log(e);
    });

    // touche maintenue appuyée
    saisie.addEventListener('keydown', function (e) {
        // console.log('Touche maintenue appuyée');
    });

    // touche relachée
    saisie.addEventListener('keyup', function (e) {
        // console.log("Ca y est c'est fini");
    });

    // Saisie en cours
    saisie.addEventListener('input', function () {
        console.log("Vous avez tapé :" + this.value);
        document.querySelector('#nbchar').innerHTML = 10 - this.value.length + ' caractère(s) restant(s)';
    });

    let nom = document.getElementById('nom');

    nom.addEventListener('focus', function () {
        console.log("J'ai le focus");
    });
    nom.addEventListener('blur', function () {
        console.log("J'ai perdu le focus");
    });

    // changement de valeur après perte du focus
    nom.addEventListener('change', function () {
        console.log("Il y a eu un changement de valeur");
        if (this.value == '') {
            this.style.border = '2px solid red';
        }
        console.log(parseInt(this.value));
        // if(!isNaN(parseInt(this.value))){
        if (!isNaN(parseInt(this.value))) {
            this.style.border = '2px solid red';
        }
    });

    let langue = document.querySelector('#langue');

    langue.addEventListener('change', function () {

        let valeurSelectionne = this.options[this.selectedIndex].value;
        // let valeurSelectionne = this.options[this.selectedIndex].innerHTML;
        console.log(valeurSelectionne);
    });
    

    /* exemple de choix dynamique basée sur un fichier json */
    fetch('departements-region.json')
        .then(function (reponse) {
            console.log(reponse);
            return reponse.json(); // alimente donnees
        })
        .then(function (donnees) {

            console.log(donnees);

            /* Alimenter la liste des régions */
            let regions = [];
            for (let i = 0; i < donnees.length; i++) {
                if (!regions.includes(donnees[i].region_name)) {
                    regions.push(donnees[i].region_name);
                }
            }
            let optionsHTML = '<option selected disabled>Choisir une région</option>';
            for (let k in regions) {
                optionsHTML += '<option>' + regions[k] + '</option>';
            }
            document.querySelector('#region').innerHTML = optionsHTML;
            
            /* Alimente la liste des départements en fonction de la région choisie */

            document.querySelector('#region').addEventListener('change', function () {
                let regionChoisie = this.options[this.selectedIndex].innerHTML;
                let optionsHTML = '<option selected disabled>Choisir un département</option>';
                for (let i = 0; i < donnees.length; i++) {

                    if(donnees[i].region_name == regionChoisie)  {
                        optionsHTML += '<option>' + donnees[i].dep_name + '</option>';
                    }
                    document.querySelector('#departement').innerHTML = optionsHTML;
                }
            });

        })
        .catch(function(error){
            console.log(error);
        });


}); // fin du DOM chargé