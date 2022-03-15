/*
ES6 (norme JavaScript) - ECMAScript 2015
----------------------------------------

nouveautés : let, class

*/

// function Animal(nom,espece){
//     this.nom = nom;
//     this.espece=espece;
//     this.changeNom = function(nouveaunom){
//         this.nom = nouveaunom;
//     }
// }

class Animal {
  
    constructor(nom, espece) {
        this.nom = nom;
        this.espece = espece;
        this.prop = 'noir';
    }
    changeNom(nouveauNom) {
        this.nom = nouveauNom;
    }
    ajoutAge(age){
        this.age = age;
    }
}

var lion = new Animal('Terence', 'Félin');
console.log(lion.nom);
console.log(lion.prop);
lion.changeNom('Joe');
console.log(lion.nom);

// Fonctions flêchées

// function addition(a,b){
//     return a + b;
// }

let addition = (a,b,c,d) => a+b+c+d; // return est implicite
console.log(addition(1,4,2,3));

let quelJour = (datesaisie) => {
    let uneDate = new Date(datesaisie);
    let jours = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
    return jours[uneDate.getDay()];
};
console.log(quelJour('2000-01-01'));

// les fonctions flêchées ne supportent pas le this

// Set
let liste = new Set();

// Ajouter un élément
liste.add(5);
liste.add(8);
liste.add(10);

console.log(liste);
console.log(liste.size);

// retirer un élément
liste.delete(8);
console.log(liste);

// teste la présence d'un élément dans le set
console.log(liste.has(5));
console.log(liste.has(13));

// Vider la liste
liste.clear();
console.log(liste);

// Boucle forEach()
// pour un tableau
let elements = ['un','deux','trois'];

elements.forEach((valeur,index)=>{
    console.log(`${valeur} qui a pour index ${index}`);
});

// pour un objet
let objet = {
    nom : 'Leclercq',
    prenom : 'Frédéric'
};

objet.adresse ='10 rue des acacias';

Object.keys(objet).forEach((index)=>{
    console.log(index + ' '+ objet[index]);
});

// Alternative avec Object.entries()
for( [index,valeur] of Object.entries(objet)){
    console.log(index + ' ' +valeur);
}


// Map (appliquer une fonction à chaque élément)
let tableau1 = [1,2,3,4,5];

let tableau2 = tableau1.map( (x) => x+5  );
console.log(tableau2);

let prixHT = [45.83,15.60,100];
let prixTTC = prixHT.map( (x) => parseFloat((x * 1.2).toFixed(2))); // toFixed(nb_decimales)
console.log(prixTTC);

let prixTaxe = prixTTC.map( (x) => x+2);
console.log(prixTaxe);


// js      document.querySelector('#id')
// jquery  $('#id')
