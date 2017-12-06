var guess = document.getElementById('user-guess');
var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset-button');
var randomNum = 0;
var returnLineOne = document.getElementById('returnLineOne');
var returnLineTwo = document.getElementById('returnLineTwo');
var returnLineThree = document.getElementById('returnLineThree');

var randomNumber = Math.floor(Math.random()*100 + 1);
console.log(randomNumber);

function returnStatement () {
guess = document.getElementById('user-guess').value;
  if (parseInt(guess) === randomNumber){
    returnLineThree.innerText='BOOM!';
    updateMinMax();
  } else if (parseInt(guess) > randomNumber){
    returnLineThree.innerText='That Is Too High';
  } else if (parseInt(guess) < randomNumber){
    returnLineThree.innerText='That Is Too Low';
  };
  userNumber();
};

guessButton.addEventListener('click', function(event){
   event.preventDefault();
   compareRanges();
 });

function userNumber () {
  returnLineOne.innerText = 'Your Last Guess Was';
  guessNumberReturn();
};

function guessNumberReturn (){
  returnLineTwo.innerText = parseInt(guess);
};

function compareRanges(){
  guess = document.getElementById('user-guess').value;
    if (isNaN(parseInt(guess))) {
      returnLineOne.innerText = 'Please Enter A Number';
      returnLineTwo.innerText = '';
      returnLineThree.innerText = '';
    } else if(parseInt(guess) > 100){
      returnLineOne.innerText = 'Please Guess A Number Between 0 and 100';
      returnLineTwo.innerText = '';
      returnLineThree.innerText = '';
    } else if(parseInt(guess) < 0){
      returnLineOne.innerText = 'Please Guess A Number Between 0 and 100';
      returnLineTwo.innerText = '';
      returnLineThree.innerText = '';
    } else{
  returnStatement();
  }  
}  

// var disableButtonWithClear = document.getElementByClass('reset-button');


clearButton.addEventListener('click', function(event){
  event.preventDefault();
  guess = document.getElementById('user-guess').value = ('');
  clearButton.setAttribute("disabled", true);
})


resetButton.addEventListener('click', function(){
  var reset = document.getElementById('#form');
  reset.reset();
})

guess.addEventListener('keypress',function(event) {
  if(guess.value === ""){
    clearButton.disabled = true;
    guessButton.disabled = true;
    resetButton.disabled = true;
  } else {
    clearButton.disabled = false;
    guessButton.disabled = false;
    resetButton.disabled = false;
  } 
});

var min = document.getElementById('#min');
// var minInput = document.getElementById('#min').value;
var max = document.getElementById('#max');
// var maxInput = document.getElementById('#max').value;

function updateMinMax (){
  minNumber = 0;
  maxNumber = 100;
  minNumber = minNumber - 10;
  maxNumber = maxNumber + 10;
  console.log(maxNumber);
};

// function userUpdateRange (min,max){
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
//   console.log(min);
// };







