document.querySelector('#avatar').addEventListener('change', function (event) {

    console.log(event);
    let fichiers = event.target.files;
    console.log(fichiers);

    // On créer un lecteur de fichier
    let reader = new FileReader();

    // Lire le fichier comme des données d'URL
    reader.readAsDataURL(fichiers[0]);
    // reader.readAsText(fichiers[0]); si je souhaitais lire un fichier texte


    // Quand la lecture est finie
    reader.onload = function (e) {
        console.log(e);
        document.querySelector('#preview').setAttribute('src', e.target.result);
        /*
        .setAttribute(nom, valeur)
        .getAttribute(nom)
        */
    };

    /*
  Blob : Binary Large Objects   
  */

});


// fetch('https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/8/5/8/858743bb35_50169458_chien-min.jpg')
//     .then(function (reponse) {
//         console.log(reponse);
//         return reponse.blob();
//     })
//     .then(function (donnees) {
//         console.log(donnees);
//         let monIMG = URL.createObjectURL(donnees);
//         document.querySelector('#preview').setAttribute('src',monIMG);

//     })
//     .catch(function (error) {
//         console.log(error);
//     });
