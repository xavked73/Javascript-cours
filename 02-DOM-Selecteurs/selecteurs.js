// Selection naturelle (id) /!\ à eviter car confusion possible avec une variable du même nom

let monElement = masection; // il cible l'element dont l'id est 'masection'
console.log(monElement);


// Selection par Id
monElement = document.getElementById('masection');
console.log(monElement);

monElement.style.border = '1px solid black';
// document.getElementById('masection').style.border = '1px solid black';
monElement.style.fontSize = '10px';
monElement.style['font-size'] = '15px';
monElement.style.padding = '10px';

//console.log(monElement.innerHTML); // contenu balises html comprises
//console.log(monElement.innerText); // contenu sans balises

monElement.innerHTML = 'Bonjour <strong> tout le monde </strong>' + monElement.innerHTML;

monElement.innerText = 'Bonjour <strong> tout le monde </strong>' + monElement.innerText;

//console.log(monElement.innerHTML);

// Selection par Balises
let mesParagraphes = document.getElementsByTagName('p');

console.log(mesParagraphes);

for (let i = 0; i < mesParagraphes.length; i++) {
    mesParagraphes[i].style.color = 'red';
}

mesParagraphes[2].style.color = 'green';

// Selection par classes
let mesClasses = document.getElementsByClassName('avion');
console.log(mesClasses);

for (let i = 0; i < mesClasses.length; i++) {
    // mesClasses[i].style.border= "1px dotted orange";
    // mesClasses[i].style.marginBottom = "5px";

    // Première méthode pour affecter plusieurs propriétés css à la fois à un élément
    Object.assign(mesClasses[i].style, {
        'border': '1px dotted orange',
        'margin-bottom': '5px'
    });

}

// Deuxième méthode : ajouter une méthode au prototype
Object.prototype.multipleCss = function (elements) {
    // for/in
    for (let k in elements) {
        // this désigne l'élement qui execute la méthode multipleCss
        this.style[k] = elements[k];
    }
}

mesParagraphes[0].multipleCss({
    'border': '1px solid green',
    'padding': '5px',
    'background': 'orange'
});

for (let m = 0; m < mesClasses.length; m++) {

    // mesClasses[m].multipleCss({
    //     'background': 'yellow',
    //     'font-style' : 'italic'
    // });

    Object.assign( mesClasses[m].style,{
        'background': 'yellow',
        'font-style' : 'italic'
    })
}

// Selecteurs universels : querySelector, querySelectorAll
// terminologie css ( balise, . pour une classe, # pour un id)

let voiture1 = document.querySelector('.voiture');
console.log(voiture1);


let voitures = document.querySelectorAll('.voiture');
console.log(voitures);
for(let i=0; i< voitures.length; i++){
     voitures[i].style.textDecoration = 'underline';
    // voitures[i].style['text-decoration'] = 'underline';
}

let plusieursElements = document.querySelectorAll('#masection,.avion, span');
console.log(plusieursElements);

for(let k=0; k < plusieursElements.length; k++){
    plusieursElements[k].style.fontWeight = 'bold';
    plusieursElements[k].style.position = 'relative';
    plusieursElements[k].style.left = '10px';
}

// Informations de l'élément window
console.log(`Résolution: ${window.innerWidth}x${window.innerHeight}`);

// if(window.innerWidth<=500){
//     alert('Vous etes sur mobile');
// }

// Informations de geolocalisation
navigator.geolocation.getCurrentPosition(function(infos){
    console.log(infos);
    console.log(infos.coords.latitude);
});


