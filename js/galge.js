console.log('Het bestand galgje.js is met succes geladen.');
var woordenlijst = [
  'truckersvakbondsafgevaardigde',
  'aansprakelijkheidswaardevaststellingsveranderingen',
  'potentiaalvereffeningswandcontactdoosafdekplaatje',
  'aansprakelijkheidswaardevaststellingsverandering',
  'arbeidsongeschiktheidsverzekeringsmaatschappij',
  'producentenaansprakelijkheidsverplichtingen',
  'commissarissenaansprakelijkheidsverzekering',
  'arbeidsongeschiktheidsverzekeringsuitkering',
  'arbeidsongeschiktheidsverzekeringsformulier',
  'concernfinancieringsvennootschapsdirecteur',
];

var woordenlijstTest = [
  'rood',
  'groen',
  'geel',
  'blauw',
  'purper',
  'grijs',
  'zwart',
  'wit',
  'paars',
  'oranje',
];

// Globale variabelen
var jokerChar = '?';
var aantalFout = 0;
var deStatus = document.getElementById('status');
deStatus.innerHTML = 'Het spel is bezig';
// Kies woordenlijst of woordenlijstTest
// var hetWoord = woordenlijst[Math.floor(Math.random() * 10) + 1];
var hetWoord = woordenlijstTest[Math.floor(Math.random() * 10)];
console.log('Het gekozen woord is: ' + hetWoord);
var hetWoordDiv = document.getElementById('teRadenWoord');
var hetWoordArray = Array.from(hetWoord);
var reedsGeraden = Array;

function initGalgje() {
  for (teller = 0; teller < hetWoord.length; teller++) {
    reedsGeraden[teller] = jokerChar;
  }
  toonReedsGeraden();
}

function youWon() {
  document.getElementById('onScreenKeyboard').classList.add('d-none'); //hide the keyboard
  hetWoordDiv.classList.add('animated');
  hetWoordDiv.classList.add('pulse');
  hetWoordDiv.classList.add('infinite');
  deStatus.innerHTML = 'Gewonnen!';
  deStatus.classList.remove('heartBeat');
  deStatus.classList.add('pulse');
}

function gameOver() {
  console.log('Game over geactiveerd.');
  document.getElementById('onScreenKeyboard').classList.add('d-none'); //hide the keyboard
  deStatus.innerHTML = 'Verloren, helaas.';
  deStatus.classList.remove('animated');
  setTimeout(function () {
    document.getElementById('teRadenWoord').innerHTML = hetWoord;
  }, 3000);
}

function toonAantalFout(aantalFout) {
  var huidigIcoon = document.getElementsByClassName('foutIcoon')[
    aantalFout - 1
  ];
  huidigIcoon.classList.remove('nietActief');
  huidigIcoon.classList.add('red-text');
  huidigIcoon.classList.add('animated');
  huidigIcoon.classList.add('heartBeat');
}

function schrijfWoord(letterGebruiker) {
  var juisteGok = false;
  for (teller = 0; teller < hetWoord.length; teller++) {
    // Correct
    if (letterGebruiker == hetWoord.charAt(teller)) {
      juisteGok = true;
      reedsGeraden[teller] = hetWoordArray[teller];
    }
  }
  if (!juisteGok) {
    aantalFout++;
    console.log('Aantalfout: ' + aantalFout);
    toonAantalFout(aantalFout);
    if (aantalFout > 5) {
      gameOver();
    }
  }
  toonReedsGeraden();
}

function toonReedsGeraden() {
  hetWoordDiv.innerHTML = '';
  gewonnen = true;
  for (teller = 0; teller < hetWoord.length; teller++) {
    hetWoordDiv.innerHTML += reedsGeraden[teller];
    if (reedsGeraden[teller] == jokerChar) {
      gewonnen = false;
    }
  }
  if (gewonnen) {
    console.log('Gewonnen.');
    youWon();
  }
}

function keuzeGemaakt(keuze) {
  console.log('Gekozen voor: ' + keuze);
  var toets = document.getElementById(keuze);
  toets.classList.remove('btn-default');
  toets.classList.add('btn-disabled');
  toets.removeAttribute('onclick');
  schrijfWoord(keuze);
}

function resetPage() {
  location.reload();
}

initGalgje();
