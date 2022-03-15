// document est un objet qui symbolise la partie affichée (body)
/*
  document a une méthode write() permettant d'écrire sur le document
*/

document.write('Hello'); /* on termine les instructions par ; */
document.write('<h1>Entrainement Javascript</h1>'); // le HTML est interprêté

// la console est un objet destiné à debuguer et permet de suivre son script
console.log('Coucou');
console.info('message'); // comme log, sur firefox affiche un (i) d'information

// window.alert('bouh'); alerte
// window.prompt('Entrez une valeur'); question avec réponse
// window.confirm('Etes vous sûr ?'); attente de confirmation (OK/Annuler)
document.write('<h2>Variables / déclaration / affectation</h2>');

var maBoite; //  déclaration   //  camelcase, forme d'écriture
maBoite = 10; // Affectation
document.write(maBoite); // Affichage

let maBoite2 = 'texte'; // déclaration/affectation
document.write('<br>');
document.write(maBoite2);

let prenom = 'Frédéric', nom = 'Leclercq'; // déclarations multiples

// Concaténation
// document.write('Je m\'appelle');
document.write("<br>Je m'appelle " + prenom + ' ' + nom + '<br>');
// le + est le symbole de concaténation
// il se comporte tel quel si un des éléments est une chaine de caractère

// Alternative à la concaténation, utilisation des backquotes (backticks)
// ``
document.write(`<br>Je m'apelle ${prenom} ${nom}`); // les variables sont identifiés avec l'écriture ${}

// Concaténation à l'affectation
let fruit = 'pomme';
// fruit = 'fraise'  ici on remplace par une nouvelle valeur
fruit += 'fraise'; // concaténation à l'affectation

console.log(fruit);
// créer une variable ville, et afficher 'je reside dans la ville de ...'

let ville = 'Verdelot';
document.write('<br>Je réside dans la ville de ' + ville);
document.write(`<br>Je réside dans la ville de ${ville}`);

document.write('<h2>Types de données</h2>');

let chiffre = 5;
console.log(typeof (chiffre)); // number
let duTexte = 'du texte';
console.log(typeof (duTexte)); // string
let unBooleen = true;
console.log(typeof (unBooleen)); // booléen

let numero = 0;
document.write(Boolean(numero)); // la valeur booléenne de 0 est false
numero = 6;
document.write('<br>' + Boolean(numero)); // la valeur booléenne des autres chiffres  est true

console.log(5 > 2); // booléen qui indique le resultat de la comparaison
console.log(10 < 3);

document.write('<h2>Les constantes</h2>');

// const permet de déclarer une constante, et par convention elle est écrite en majuscules
const URL = 'https://monsite.com';

// URL = 'autre chose'; ERREUR car URL est constant et ne peut être modifié
document.write(`Mon url est ${URL}`);

document.write('<h2>Opérateurs arithmétiques</h2>');
document.write(10 + 5 + '<br>');
//        addition  concaténation
// + est l'opérateur d'addition si j'ai à faire à 2 nombres (number)

document.write(10 - 5 + '<br>');
document.write(10 * 5 + '<br>'); // multiplication
document.write(10 / 5 + '<br>'); // division
document.write(10 % 5 + '<br>'); // Modulo : reste de la division entière
document.write(10 ** 2 + '<br>'); // puissance 10² 
/*
ALT + 252  ³
ALT + 253  ²
ALT + 251  ¹
*/

// avec des variables
let chiffre1 = 8, chiffre2 = 5;
let resultat = chiffre1 + chiffre2;
document.write(`${chiffre1}+${chiffre2}=${resultat}<br>`);
document.write(`${chiffre1 + chiffre2}<br>`);
document.write(chiffre1 + chiffre2 + '<br>');

// parseFloat() et parseInt() sont des fonctions qui vont forcer en float ou en Int(eger) des chaines de caractères dont la première partie est numérique
console.log(parseInt('256€'));
console.log(parseInt('1200px'));
console.log(parseInt('32.68'));
console.log(parseFloat('32.68€'));


// let nombre1 = parseFloat(window.prompt('Entrez un premier nombre'));
// let nombre2 = parseFloat(window.prompt('Entrez un deuxieme nombre'));
// document.write(`Vous avez saisi ${nombre1} et ${nombre2}, voici la somme : ${nombre1+nombre2}`);

document.write('<h2>Structures conditionnelles</h2>');

let a = 10, b = 5, c = 2;

// Structure if/else
//  BOOLEEN
if (a > b) {
    // si le booléen est VRAI
    document.write('a est supérieur à b<br>');
}
else {
    // sinon (le booléen est FAUX)
    document.write("a n'est pas supérieur à b<br>");
}

// Plusieurs conditions
// ET : &&
if (a > b && b > c) {
    document.write('OK pour les deux conditions<br>');
}
/*
FAUX && FAUX => FAUX
FAUX && VRAI => FAUX
VRAI && VRAI => VRAI
*/

// OU : ||
// ALT + 124 |
if (a == 9 || b > c) {
    document.write('OK pour au moins une des conditions<br>');
}

// OU exclusif  (simulé)
// ! => NOT
if (((a == 9) && !(b > c)) || (!(a == 9) && (b > c))) {
    document.write('Une des conditions seulement doit être vraie<br>');
}

/*
FAUX || FAUX => FAUX
FAUX || VRAI => VRAI
VRAI || VRAI => VRAI (ou inclusif)
VRAI (ou exclusif) VRAI => FAUX (ou exclusif)
*/
// Utilisation du != (NOT equal)
if (a != 8) {
    document.write('a est différent de 8<br>');
}

if (!(a == 8)) {
    document.write('a est différent de 8<br>');
}
/* on utilise cette écriture quand on veut exécuter du code quand une condition est fausse */

let test = a > 10; // comparaison
console.log(test);
// VRAI
if (!test) {
    document.write("c'est vrai que a n'est pas supérieur à 10<br>");
}

let age = 14;
if (!(age >= 18)) {
    document.write('Tu ne rentres pas<br>');
}
// if(age<18){
//     document.write('Tu ne rentres pas');
// }

age += 2; // age vaut 16 , age = age + 2
console.log(age);

age -= 3; // age vaut 13 , age = age - 3

age += 1; // 14
age++; // incrémentation de 1  15 
age--; // décrémentation de 1  14
console.log(age);

//   number  , string
let varA = 1, varB = '1';
if (varA == varB) {
    console.log("C'est la même chose");
}
// les variables sont égales en VALEUR

// Comparaison en VALEUR et en TYPE
if (varA === varB) {
    console.log("C'est la même chose en valeur et en type");
}

// Autre exemple : 0 et false sont identiques en valeur mais pas en type
if (0 === false) {
    // ne s'affiche pas car 0 est un number et false un booléen
    console.log("C'est la même chose en valeur et en type");
}

// Structure if/else if/else
// le else if permet d'intercaler des conditions
if (a == 8) {
    document.write('Cas 1 : a vaut 8<br>');
}
else if (a != 10) {
    document.write('Cas 2 : a est différent de 10<br>');
}
else {
    document.write('Cas 3 : tout le monde a faux<br>');
}

// Structure switch (fonctionne si la variable comparée est toujours la même et qu'on la compare à différentes valeurs)

let couleur = 'jaune'; // let couleur be 'jaune'
// let couleur = window.prompt('Saisir une couleur');

switch (couleur) {
    case 'bleu': console.log('vous aimez le bleu'); break;

    // traiter 2 cas de manière identique
    case 'carmin':
    case 'rouge': console.log('vous aimez le rouge'); break;

    case 'vert': console.log('vous aimez le vert'); break;

    default: console.log("Vous n'aimez aucune de nos couleurs disponibles (bleu,rouge,vert)");
}

// couleur = 'bleu';
// Exercice : retranscrire ceci avec if/else if/ else
if (couleur == 'bleu') {
    console.log('vous aimez le bleu');
}
else if (couleur == 'carmin' || couleur == 'rouge') {
    console.log('vous aimez le rouge');
}
else if (couleur == 'vert') {
    console.log('vous aimez le vert');
}
else {
    console.log("Vous n'aimez aucune de nos couleurs disponibles (bleu,rouge,vert)");
}

/*
https://www.youtube.com/watch?v= H9-ekUCFCr0
https://www.youtube.com/watch?v= -u6qKjBJH5E
*/

// isNaN() is Not a Number
// !isNaN() Not is Not a Number => is a Number

let nombre3 = 12; // number
if (!isNaN(nombre3)) {
    document.write("C'est bien un nombre !<br>");
}

console.log(typeof (nombre3));
if (typeof (nombre3) == 'number') {
    document.write("C'est bien un nombre !<br>");
}

// typeof(nomvariable) : type de, nature de , genre de
// booléen . M. Bool
console.log(nombre3);

// DRY : Don't Repeat Yourself

// Forme ternaire
let sexe = 'm';
let civilite = (sexe == 'm') ? 'Monsieur' : 'Madame';
//               condition    ?  si vrai   sinon

/*
let civilite;
if( sexe == 'm' ){
    civilite = 'Monsieur';
}
else{
    civilite = 'Madame';
}
*/
console.log(civilite);

document.write('<h2>Structures itératives : boucles </h2>');

/*
1 - situation de départ
2 - condition qui fait tourner la boucle
3 - incrémentation
*/

// Boucle while (tant que)
let i = 1; // Point 1 (situation de départ)
//   (boolean)
while (i <= 10) { // Point 2 (condition qui fait tourner la boucle)
    document.write(i + ' ');
    i++; // Point 3 (incrémentation)
}

document.write('<hr>');

// Boucle for (pour)
//    1        2    3
for (let i = 1; i <= 10; i++) {
    document.write(i + ' ');
}

document.write('<br>');
// Exercice: Avec la boucle de votre choix, afficher un comptage de 10 à 100 de 10 en 10
// Résultat attendu: 10 20 30 40 50 60 70 80 90 100
i = 10;
while (i <= 100) {
    document.write(i + ' ');
    i += 10; // i = i + 10
}
document.write('<br>');

for (let i = 10; i <= 100; i += 10) {
    document.write(i + ' ');
}

// Portée des variables - Espace Global et local
i = 100;
if (i == 100) {
    let a = 57; // a local qui n'existe qu'à l'intérieur du if
    console.log('a local :' + a);
}
console.log(a); // a global (déclaré en ligne 111)

// Boucle do/while
document.write('<hr>');
i = 6;
do {
    document.write(i); // cette instruction sera exécutée au moins une fois
    i++;
}
while (i <= 5);

document.write('<hr>');
// exemple
// let reponse;
// let loisirs = '';
// do{
//    reponse = window.prompt('Saisir un loisir ou ecrivez stop quand vous avez terminé');

//    if(reponse!='stop'){
//     loisirs += reponse + ' ';
//    }
// }
// while(reponse != 'stop');

// document.write('Vos loisirs sont ' + loisirs);

document.write('<select id="annee" name="annee">');
// 2004 => 1904  de 1 en 1
for (let annee = 2004; annee >= 1904; annee--) {
    document.write(`<option>${annee}</option>`);
}
document.write('</select>');


// Boucles imbriquées
let lignes = 8;
let colonnes = 8;

document.write('<table>');
for (let lig = 1; lig <= lignes; lig++) {
    // On trace les lignes
    document.write('<tr>');
    // on trace les colonnes
    for (let col = 1; col <= colonnes; col++) {
        document.write('<td></td>');
    }
    document.write('</tr>');
}
document.write('</table>');

document.write('<h2>Fonctions prédéfinies</h2>');

// Chaines de caractères

let phrase = "Je m'appelle Steven";
document.write(`Ma phrase contient ${phrase.length} caractères`);
// length est une propriété de phrase qui renvoie sa longueur (nbre de caractères)

document.write(`<br>En majuscules :  ${phrase.toUpperCase()}<br>`); // force en majuscules
document.write(phrase.toLowerCase());  // force en minuscules

document.write('<br>Steven se trouve à la position ' + phrase.indexOf('Steven'));
// phrase.indexOf(chaine) renvoie la position de départ de chaine à l'intérieur de phrase (si non trouvé, renvoie la valeur -1)

document.write('<br>Alex se trouve à la position ' + phrase.indexOf('Alex') + '<br>');

// substring  sous-chaine
document.write(phrase.substring(13, 19));
// substring(position_depart,position_arrivee)

document.write('<hr>');

let email = 'jean-pierre.truc@microsoft.com';
// extraire la partie nominative d'une adresse mail
document.write(email.substring(0, email.indexOf('@')));

document.write('<hr>');
// extraire le provider de messagerie
document.write(email.substring(email.indexOf('@') + 1));

// Fonctions aux nombres
let monNombre = 125;
console.log(Number.isInteger(monNombre));

let prix = "45.92€"; // String
console.log(parseInt(prix)); // renvoie la partie entière du nombre dans la chaine
console.log(parseFloat(prix)); // renvoie le nombre partie décimale incluse dans la chaine

let valeurPrix = parseFloat(prix);
console.log(Math.round(valeurPrix)); // arrondi à l'entier le plus proche
console.log(Math.floor(valeurPrix)); // arrondi à l'entier inférieur
console.log(Math.ceil(valeurPrix)); // arrondi à l'entier supérieur

// Nombre aléatoire
console.log(Math.random()); // renvoie un chiffre aléatoire compris entre 0 inclus et 1 non inclus

// Simuler un jet de dé6
console.log(Math.floor(Math.random() * 6) + 1); // 1-6
console.log(Math.floor(1 + Math.random() * 6)); // 1-6
console.log(Math.ceil(Math.random() * 5) + 1); // 1-6

document.write('<h3>Jeu de dés</h3>');
// Simuler un jet de dé pour vous
//                      pour l'ordinateur
// Afficher "Vous avez obtenu 5 et l'ordinateur a obtenu 3";
// Si votre score est supérieur à celui de l'ordinateur, afficher "vous avez gagné"
// Si votre score est inférieur à celui de l'ordinateur, afficher "vous avez perdu"
// Si votre score est identique à celui de l'ordinateur, afficher "match nul"

let monJet = Math.floor(Math.random() * 6) + 1;
let jetOrdi = Math.floor(Math.random() * 6) + 1;

document.write(`Vous avez obtenu ${monJet} et l'ordinateur a obtenu ${jetOrdi}<br>`);

if (monJet > jetOrdi) {
    document.write('Vous avez gagné !<br>');
}
else if (monJet < jetOrdi) {
    document.write('Vous avez perdu !<br>');
}
else {
    document.write('Match nul');
}

/*
Fonctions utilisateur
Tableaux
Objets
*/

document.write('<h2>Fonctions utilisateur</h2>');

// Déclaration de la fonction
function direBonjour() {
    document.write('Bonjour!<br>');
}

direBonjour(); // je peux appeler ma fonction ici
// 150 lignes de code...
direBonjour(); // ou là

function direBonjour2(prenom) {
    document.write('Bonjour ' + prenom + '<br>');
}

direBonjour2('Saadi');
direBonjour2('Ayad');

function direBonjour3(prenom) {
    return 'Bonjour ' + prenom + '<br>';
    // return renvoie une réponse et sort de la fonction
}

let bienvenue = direBonjour3('Fred');
document.write(direBonjour3('Jenne'));
document.write(bienvenue);
bienvenue = direBonjour3('Thierry');
document.write(bienvenue);

// Autre exemple avec 2 paramètres
function addition(a, b) {
    return a + b; // en sortie je renvoie l'addition des deux paramètres
}

document.write(addition(52, 78) + ' - ' + addition(185, 69) + '<br>');

// Exemple de fonction de calcul de la tva à partir d'un prix HT et d'un taux
// En attribuant une valeur à un paramètre (ex: taux=20), il devient optionnel au moment de l'appel de la fonction et aura une valeur par défaut
// Déclaration de type FUNCTION STATEMENT
function calculTVA(prixHT, taux = 20) {
    // let prixTTC = prixHT * ( 1 + taux/100);
    let prixTTC = prixHT + (prixHT * taux / 100);
    return prixTTC;
}

// exemples d'utilisation
document.write(calculTVA(100, 20) + '<br>');
document.write(calculTVA(100, 5.5) + '<br>');
document.write(calculTVA(450, 20) + '<br>');
document.write(calculTVA(200) + '<br>');
document.write(calculTVA(200, 5.5) + '<br>');

// Déclaration de type FUNCTION OPERATOR
let maFonction = function (prenom, nom) {
    console.log('Hello ' + prenom + ' ' + nom);
    console.log(calculTVA(100));
};

maFonction('Nada', 'Khatiri');

// Espaces local et global
let animal = 'Loup';
function jungle() {
    // espace local
    let animal = 'Tigre';
    return animal;
}
document.write(animal); // Loup
document.write(jungle()); // Tigre
document.write(animal); // Loup

document.write('<h2>Tableaux de données : Array</h2>');

let fruits = ['Banane', 'Raisin', 'Pomme', 'Mangue'];
console.log(fruits);
let legumes = new Array('carotte', 'aubergine', 'poireau');
console.log(legumes);

document.write(fruits[2] + '<br>');
document.write(`Mon tableau fruits contient ${fruits.length} éléments<br>`);

fruits.push('pêche'); // push() permet d'ajouter un ou des éléments
console.log(fruits);

document.write(fruits.join(', ')); // liste les éléments avec un séparateur entre chaque

console.log(fruits.indexOf('Raisin')); // renvoie l'index de l'élément, -1 si non trouvé

console.log(fruits.includes('Raisin')); // renvoie un booléen qui indique si l'élement est inclus dans le tableau ou pas
console.log(fruits.includes('Citron'));

fruits.pop(); // retire le dernier élément
console.log(fruits);
fruits.push('Pêche');
console.log(fruits);

// fruits.splice(2,1);
fruits.splice(fruits.indexOf('Pomme'), 1); // splice(position_depart,nb_elements)
console.log(fruits);

fruits.shift(); // retire le premier élément
// équivalent fruits.splice(0,1);
console.log(fruits);

// fruits.pop();
// équivalent fruits.splice(fruits.length-1,1);

// retirer les 4 derniers
// fruits.splice(fruits.length-4,4);

fruits.push('Banane', 'Orange');

// ouverture de la balise ul
document.write('<ul>');
for (let i = 0; i < fruits.length; i ++) {     // i++ => i = i+1
    document.write(`<li>${fruits[i]}</li>`);
}
// fermeture de la balise ul
document.write('</ul>');


// Tableaux multidimensionnels
let maraicher=[
    fruits, // 0
    legumes // 1
];
console.log(maraicher);

document.write(maraicher[1][1] + '<br>'); // aubergine
document.write(maraicher[0][3] + '<br>');

document.write(maraicher[1][1] + ' et ' + maraicher[0][3] +'<br>');
document.write(`${maraicher[1][1]} et ${maraicher[0][3]}<br>`);

document.write(maraicher + '<br>');


// parcourir le tableau maraicher et liste tous ses éléments
document.write('<ul>');
for(let i=0; i < maraicher.length; i++) // tourne 2 fois
{


    for(let k=0; k < maraicher[i].length; k++){ // parcoure fruits au premier tour, parcoure au légumes au deuxième tour
        document.write(`<li>${maraicher[i][k]}</li>`);
    }
}
document.write('</ul>');

// Boucle for/in
for(let i in fruits){
    document.write(i + ' => ' + fruits[i] + '<br>');
}

// Version avec for/in
document.write('<ul>');
for(let i in maraicher){
    for(let k in maraicher[i]){
        document.write(`<li>${maraicher[i][k]}</li>`);  
    }
}
document.write('</ul>');

// DOM Document Object Model 
// Ajax: Asynchronous JavaScript And XML (json)
// JSON : JavaScript Object Notation

document.write('<h2>Les objets (format JSON)</h2>');

let voiture = {
    // propriétés
    "marque" : "Renault",
    "modele" : "Clio",
    "couleur" : "rouge",
    // méthodes
    "demarrer" : function(){
        return "Je démarre";
    }
};

console.log(voiture);
document.write(voiture.modele); // Affiche Clio
document.write('<br>');
document.write(voiture.demarrer());

// Plan de fabrication (class)
class Maison{

    constructor(nbPieces, superficie, couleurDesMurs = 'blanc'){
        // this désigne l'objet 'en cours'
        this.nbPieces = nbPieces;
        this.superficie = superficie;
        this.couleurDesMurs = couleurDesMurs;
        this.nbPortes = 10;
    }

    repeindre(nouvelleCouleur){
        this.couleurDesMurs = nouvelleCouleur;
    }   

}
// Appartement hérite de Maison
class Appartement extends Maison{
    constructor(){
       super(); // Super Constructor
       this.etage=2;
    }
}

// Fabrication d'objets à partir du plan de fabrication : Maison
let maison1 = new Maison(5,120); // new permet d'instancier la classe et fabrique un objet
console.log(maison1.superficie + 'm²');
console.log(maison1.nbPieces);
console.log(maison1.couleurDesMurs);
maison1.repeindre('bleu'); // appelle la méthode repeindre
console.log(maison1.couleurDesMurs);

let maison2 = new Maison(2,45,'beige');
console.log(maison2.couleurDesMurs);

let appart1 = new Appartement(4,80);
console.log(appart1);

document.write('<hr>');
let maDate = new Date();
console.log(maDate.getDay()); // 0 dimanche - 6-samedi
// 5 = vendredi
console.log(maDate.getDate());
// numéro du jour 1-31
console.log(maDate.getMonth());

// Tableaux de correspondance
let jours = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
let mois = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

document.write(`Aujourd'hui nous sommes ${jours[maDate.getDay()]} ${maDate.getDate()} ${mois[maDate.getMonth()]} ${maDate.getFullYear()}<br>`);

let autreDate= new Date('1914-04-14'); // format aaaa-mm-jj
document.write(`Le Titanic a coulé le  ${jours[autreDate.getDay()]} ${autreDate.getDate()} ${mois[autreDate.getMonth()]} ${autreDate.getFullYear()}<br>`);

document.write(maDate.toLocaleDateString()); // Format FR 04/03/2022
