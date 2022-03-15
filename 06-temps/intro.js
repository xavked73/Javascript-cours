// setTimeout va lancer la fonction message au bout de 2000ms
setTimeout(message,2000); // temps exprimé en ms

function message(){
    // alert('Vous êtes là depuis 2 secondes');
    document.getElementById('jour').innerHTML = 'Tada !';
}


// setInterval (déclarer un timer)
let timer1 = setInterval(rebours,1000); // premier démarrage se fera au bout d'une seconde
let compteur=11;
rebours(); // premier lancement manuel si je ne souhaite pas attendre 1 sec

function rebours(){
    compteur--;
    document.getElementById('jour').innerHTML = compteur;
      if(compteur==0){
        clearInterval(timer1); // Stoper le timer
        // alert("c'est fini");
    }
}

