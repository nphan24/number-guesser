var guess = document.getElementById('user-guess');
var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset-button');
var randomNum = 0;
var returnLineOne = document.getElementById('returnLineOne');
var returnLineTwo = document.getElementById('returnLineTwo');
var returnLineThree = document.getElementById('returnLineThree');

var minNumber = 0;
var maxNumber = 100;

var randomNumber = Math.floor(Math.random()*100 + 1);
console.log(randomNumber);

function returnStatement () {
guess = document.getElementById('user-guess').value;
  if (parseInt(guess) === randomNumber) {
    returnLineThree.innerText = 'BOOM!';
    updateMinMax();
    rangeMessage.innerText = "";
  } else if (parseInt(guess) > randomNumber) {
    returnLineThree.innerText = 'That Is Too High';
  } else if (parseInt(guess) < randomNumber) {
    returnLineThree.innerText = 'That Is Too Low';
  };
  userNumber();
};

guessButton.addEventListener('click',function(event) {
   event.preventDefault();
   compareRanges();
 });

function userNumber() {
  returnLineOne.innerText = 'Your Last Guess Was';
  guessNumberReturn();
};

function guessNumberReturn() {
  returnLineTwo.innerText = parseInt(guess);
};

function compareRanges() {
  guess = document.getElementById('user-guess').value;
    if (isNaN(parseInt(guess))) {
      returnLineOne.innerText = 'Please Enter A Number!';
      returnLineTwo.innerText = '';
      returnLineThree.innerText = '';
    } else if (parseInt(guess) > maxNumber) {
      returnLineOne.innerText = 'Please Guess A Number Between ' + minNumber + ' ' + 'and ' + maxNumber;
      returnLineTwo.innerText = '';
      returnLineThree.innerText = '';
    } else if (parseInt(guess) < minNumber) {
      returnLineOne.innerText = 'Please Guess A Number Between ' + minNumber + ' ' + 'and ' + maxNumber;
      returnLineTwo.innerText = '';
      returnLineThree.innerText = '';
    } else {
  returnStatement();
  }  
}  

guess.addEventListener('input',function(event) {
  if (guess.value === "") {
    clearButton.disabled = true;
    guessButton.disabled = true;
    resetButton.disabled = true;
  } else {
    clearButton.disabled = false;
    guessButton.disabled = false;
    resetButton.disabled = false;
  } 
});

clearButton.addEventListener('click', function(event) {
  event.preventDefault();
  guess = document.getElementById('user-guess').value = ('');
  clearButton.setAttribute("disabled", true);
})

resetButton.addEventListener('click', function() {
  var reset = document.getElementById('form');
  reset.reset();
})

// After the player wins//

function updateMinMax() {
 minNumber -= 10;
 maxNumber += 10;
 randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
 alert('YOU WON! Your Range Has Been Increased. Please Guess A New Number');
 console.log("min",minNumber,"max", maxNumber, "newRandom",randomNumber);
};

//User pick own range//

var grabMin = document.getElementById('mins');
var grabMax = document.getElementById('maxs');
var enterButton = document.getElementById('enter-button');
var rangeNumber = document.getElementById('rangeNan');
var rangeMessage = document.getElementById('rangeMessages');

grabMin.addEventListener('input', function(event) {
  if (grabMin.value === "") {
    enterButton.disabled = true;
    resetButton.disabled = true;
  } else {
    enterButton.disabled = false;
    resetButton.disabled = false;
  }
});

grabMax.addEventListener('input', function(event) {
  if (grabMax.value === "") {
    enterButton.disabled = true;
  } else {
    enterButton.disabled = false;
  }
});

enterButton.addEventListener('click', function(event) {
  event.preventDefault();
  withinMinRange();
});

function userUpdateRange() {
  minNumber = parseInt(grabMin.value);
  maxNumber = parseInt(grabMax.value);
  randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
  rangeNumber.innerText = "";
  console.log("min",minNumber,"max", maxNumber, "randomNumber", randomNumber);
  rangeMessage.innerText = 'Your new range is now between ' + minNumber + ' and ' + maxNumber;
};

function withinMinRange() {
  if ((isNaN(parseInt(grabMin.value))) || (isNaN(parseInt(grabMax.value)))) {
    rangeNumber.innerText = 'Error: Please Input A Number For The Ranges';
    rangeMessage.innerText = "";
  } else {
    userUpdateRange();
  };
}





