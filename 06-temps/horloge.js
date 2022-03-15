const uneSecondeDeg = 6; // 360 / 60
const uneMinuteDeg = 6; // 360/60
const uneHeureDeg = 30; // 360/12

const PA = document.querySelector(".petiteaiguille");
const GA = document.querySelector(".grandeaiguille");
const TT = document.querySelector(".trotteuse");

function afficheHeure(){
    let maintenant = new Date();
    let heures = maintenant.getHours();
    let minutes = maintenant.getMinutes();
    let secondes = maintenant.getSeconds();
   // console.log(heures);
    heures = heures % 12; // 1 on va mettre l'heure H24 en H12
    // heures = heures ? heures : 12; // le cas particulier minuit 0h
    if(heures==0) heures = 12; // le cas minuit
    console.log(heures);

    let angleHeures = heures * uneHeureDeg;
    let angleMinutes = minutes * uneMinuteDeg;
    let angleSecondes = secondes * uneSecondeDeg;

    TT.style.transform = `translate3d(-50%,-50%,0) rotateZ(${angleSecondes}deg)`;
    GA.style.transform = `translate3d(-50%,-50%,0) rotateZ(${angleMinutes}deg)`;
    PA.style.transform = `translate3d(-50%,-50%,0) rotateZ(${angleHeures}deg)`;   

}
afficheHeure();
setInterval(afficheHeure,1000);
