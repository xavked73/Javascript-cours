const URLAPI = 'https://apicarto.ign.fr/api/codes-postaux/communes/';

let code_postal = document.getElementById('code_postal');
// let code_postal = document.querySelector('#code_postal');

code_postal.addEventListener('input', function () {

    let codesaisi = this.value;
    let pattern = /^[0-9]{5}$/;

    if (codesaisi.match(pattern)) {

        // console.log('ok');

        fetch(URLAPI + codesaisi)
            .then(function (reponse) {
                // console.log(reponse);
                if (reponse.status == 200) {
                    return reponse.json(); // formatage de la réponse pour obtenir les données au format
                }
            })
            .then(function (donnees) {
                // console.log(donnees);

                //     let options = '';
                //     for(let i in donnees){
                //         options += `<option value="${donnees[i].codePostal} ${donnees[i].nomCommune}">\n`;
                //     }  
                //     // console.log(options);
                //    document.getElementById('villes').innerHTML = options;

                // on réinitialise le contenu de la datalist
                document.getElementById('villes').innerHTML = '';

                for (let i in donnees) {
                    // createElement permet de créer un element html
                    let enfant = document.createElement('option');
                    // j'ajoute un attribut à mon élément
                    enfant.setAttribute('value',`${donnees[i].codePostal} ${donnees[i].nomCommune}`);
                    // appendChild() permet d'ajouter l'enfant à l'élément parent
                    document.getElementById('villes').appendChild(enfant);
                }

            })
            .catch(function (error) {
                console.log(error);
            });

    }


});


