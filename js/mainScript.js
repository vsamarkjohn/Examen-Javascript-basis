console.log('connected to mainscript')
var hetWoorden = ["aardappel",
"ikhouvanjou",
"belgium",
"leuven",
"vriendelijk",
"behulpzaam",
"bananen",
"verjardag",
"maandag",
"dinsdag",
]

var woorden = hetWoorden[Math.floor(Math.random() * 6) + 1];


console.log(woorden)
var maxError = 6;
var progressWord = [];

//Toon de asterisk
function showDash(){
for (var i = 0; i < woorden.length; i++) {
    progressWord.push("*");
  }
}
showDash();
//Toon de asterisk

function clickOp(inputValue){
var inputValue = document.getElementById('inputData').value;
document.getElementById('inputData').value = '';
if (woorden.indexOf(inputValue) != -1){
    for (var i = 0; i < woorden.length; i++){
       if (woorden[i] == inputValue)
         progressWord[i] = woorden[i];
    }
  } else if (woorden[i] != inputValue){
        faultChecker();
  }
  document.getElementById('toonResult').innerHTML = progressWord.join("");
}
clickOp();

//Fault Checker
function faultChecker(){
     var lives = maxError -= 1;
     console.log(lives);
      if( lives == 5){
        console.log('head');
        // document.getElementById('hangmanCol').innerHTML = "head";
        document.getElementById('circle').style.background = "transparent";
      } if (lives == 4){
        console.log('body');
        // document.getElementById('hangmanCol').innerHTML = "body";
        document.getElementById('body-hangman').style.background = "transparent";
      } if (lives == 3) {
        console.log('right hand');
        // document.getElementById('hangmanCol').innerHTML = "right hand";
        document.getElementById('right-hand').style.background = "transparent";
      } if (lives == 2) {
        console.log('left hand');
        // document.getElementById('hangmanCol').innerHTML = "left hand";
        document.getElementById('left-hand').style.background = "transparent";
      } if (lives == 1) {
        console.log('left feet');
        // document.getElementById('hangmanCol').innerHTML = "left feet";
        document.getElementById('left-feet').style.background = "transparent";
      } if (lives == 0) {
        console.log('right feet');
        // document.getElementById('hangmanCol').innerHTML = "right feet";
        document.getElementById('right-feet').style.background = "transparent";
        gameOver();
        showGameOverWord();
      }
}
//Fault Checker

//gameOverFunctie
var elems = document.getElementsByClassName('btnclick');
function gameOver(){
  for(var i = 0; i < elems.length; i++) {
      elems[i].disabled = true;
  }

}
//gameOverFunctie
var wordGameOver =  document.getElementById("gameOverWoord").style.visibility = "hidden";
function showGameOverWord(){
  document.getElementById("gameOverWoord").style.visibility = "visible";
}

// Reset Button
function reset() {
  window.location.reload();
}
// Reset Button

//keyboard Work
function writeValue(inputValue2) {
  console.log(inputValue2);
  if (woorden.indexOf(inputValue2) != -1){ //Krijg 
    for (var i = 0; i < woorden.length; i++){
       if (woorden[i] == inputValue2)
         progressWord[i] = woorden[i];
         document.getElementById('toonResult').innerHTML = progressWord.join("");     
        }
    }  
  else if (woorden[i] != inputValue2){
        faultChecker();
    }
}
//keyboard Work

//Disable button
function button(letterChoose) {
  console.log('Choosed Letter: ' + letterChoose);
  document.getElementById(letterChoose).disabled = true;
  writeValue(letterChoose);
}
//Disable button