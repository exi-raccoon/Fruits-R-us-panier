var nbrbanane = 15;
var nbrpomme = 1;
var nbrorange = 1;
var nbrraisin = 1;

const prixbanane = 4;
const prixpomme = 2.50;
const prixorange = 5.60;
const prixraisin = 45;

function boing () {
    document.getElementById("header").classList.add('fa-bounce');
    setTimeout (() => {document.getElementById("header").classList.remove('fa-bounce');}, 900);
    document.getElementById("icone").classList.add('fa-bounce');
    setTimeout (() => {document.getElementById("icone").classList.remove('fa-bounce');}, 5000);
}

function cinqfruits(){
    var nbrtotal = nbrbanane + nbrorange + nbrpomme + nbrraisin;
    
if (nbrtotal < 5) {
    var alert = document.getElementById("nope");
    alert.id = "alert";
    setTimeout (() => {alert.classList.remove('fa-bounce');}, 2000);
}
else {
    var alert = document.getElementById("alert");
    alert.id = "nope";
}
}

function ajouter_Banane() {
    nbrbanane = nbrbanane + 1
    document.getElementById("quantitébanane").textContent = nbrbanane;
    document.getElementById("plus_banane").classList.add('fa-flip');
    setTimeout (() => {document.getElementById("plus_banane").classList.remove('fa-flip');}, 500);
    cinqfruits()
}

function supprimer_Banane() {
    nbrbanane = 0
    document.getElementById("nopebanane").classList.replace('wrapper', 'nope');
    document.getElementById("banane").classList.replace('wrapper2', 'nope');
    cinqfruits()
}

function enlever_Banane() {
    nbrbanane = nbrbanane - 1
    document.getElementById("minus_banane").classList.add('fa-flip');
    setTimeout (() => {document.getElementById("minus_banane").classList.remove('fa-flip');}, 500);
    if (nbrbanane == 0) {
        document.getElementById("nopebanane").classList.replace('wrapper', 'nope');
        document.getElementById("banane").classList.replace('wrapper2', 'nope');
    }
    else {
        document.getElementById("quantitébanane").textContent = nbrbanane;
    }
    cinqfruits()
}


function ajouter_Pomme() {
    nbrpomme = nbrpomme + 1
    document.getElementById("quantitépomme").textContent = nbrpomme;
    document.getElementById("plus_pomme").classList.add('fa-flip');
    setTimeout (() => {document.getElementById("plus_pomme").classList.remove('fa-flip');}, 500);
    cinqfruits()
}

function supprimer_Pomme() {
    nbrpomme = 0
    document.getElementById("nopepomme").classList.replace('wrapper', 'nope');
    document.getElementById("pomme").classList.replace('wrapper2', 'nope');
    cinqfruits()
}

function enlever_Pomme() {
    nbrpomme = nbrpomme - 1
    document.getElementById("minus_pomme").classList.add('fa-flip');
    setTimeout (() => {document.getElementById("minus_pomme").classList.remove('fa-flip');}, 500);
    if (nbrpomme == 0) {
        document.getElementById("nopepomme").classList.replace('wrapper', 'nope');
        document.getElementById("pomme").classList.replace('wrapper2', 'nope');
    }
    else {
        document.getElementById("quantitépomme").textContent = nbrpomme;
    }
    cinqfruits()
}


function ajouter_Orange() {
    nbrorange = nbrorange + 1
    document.getElementById("quantitéorange").textContent = nbrorange;
    document.getElementById("plus_orange").classList.add('fa-flip');
    setTimeout (() => {document.getElementById("plus_orange").classList.remove('fa-flip');}, 500);
    cinqfruits()
}

function supprimer_Orange() {
    nbrorange = 0
    document.getElementById("nopeorange").classList.replace('wrapper', 'nope');
    document.getElementById("orange").classList.replace('wrapper2', 'nope');
    cinqfruits()
}

function enlever_Orange() {
    nbrorange = nbrorange - 1
    document.getElementById("minus_orange").classList.add('fa-flip');
    setTimeout (() => {document.getElementById("minus_orange").classList.remove('fa-flip');}, 500);
    if (nbrorange == 0) {
        document.getElementById("nopeorange").classList.replace('wrapper', 'nope');
        document.getElementById("orange").classList.replace('wrapper2', 'nope');
    }
    else {
        document.getElementById("quantitéorange").textContent = nbrorange;
    }
    cinqfruits()
}

function ajouter_Raisin() {
    nbrraisin = nbrraisin + 1
    document.getElementById("quantitéraisin").textContent = nbrraisin;
    document.getElementById("plus_raisin").classList.add('fa-flip');
    setTimeout (() => {document.getElementById("plus_raisin").classList.remove('fa-flip');}, 500);
    cinqfruits()
}

function supprimer_Raisin() {
    nbrraisin = 0
    document.getElementById("noperaisin").classList.replace('wrapper', 'nope');
    document.getElementById("raisin").classList.replace('wrapper2', 'nope');
    cinqfruits()
}

function enlever_Raisin() {
    nbrraisin = nbrraisin - 1
    document.getElementById("minus_raisin").classList.add('fa-flip');
    setTimeout (() => {document.getElementById("minus_raisin").classList.remove('fa-flip');}, 500);
    if (nbrraisin == 0) {
        document.getElementById("noperaisin").classList.replace('wrapper', 'nope');
        document.getElementById("raisin").classList.replace('wrapper2', 'nope');
    }
    else {
        document.getElementById("quantitéraisin").textContent = nbrraisin;
    }
    cinqfruits()
}


function calculer() {
    var prix = (prixbanane * nbrbanane) + (prixorange * nbrorange) + (prixpomme * nbrpomme) + (prixraisin * nbrraisin)
    document.getElementById("total").textContent = "Total : " + prix.toFixed(2) + "€";
    document.getElementById("total").classList.add('fa-bounce');
    setTimeout (() => {document.getElementById("total").classList.remove('fa-bounce');}, 900);
    document.getElementById("total").classList.replace('total', 'totalclick');
}

