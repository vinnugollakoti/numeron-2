let score = 0;
let ClearReferenceTime = undefined;
let time = document.getElementById('timer');
// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let number1Div = document.getElementById('number1');
let number2Div = document.getElementById('number2');

let num1Random = Math.floor(Math.random() * 100);
let num2Random = Math.floor(Math.random() * 100);
let num3Random = undefined;
// Iteration 3: Creating variables required to make the game functional

let plusBtn = document.getElementById('plus');
let MinusBtn = document.getElementById('minus');
let mulBtn = document.getElementById('mul');
let DivideBtn = document.getElementById('divide');
let modulusBtn = document.getElementById('modulus');

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

let number3Div = document.getElementById('number3');
let Operators;

// Iteration 5: Creating a randomise function to make the game functional
function randomise() {
  Operators = Math.floor(Math.random() * 5);

  num1Random = Math.floor(Math.random() * 100);
  num2Random = Math.floor(Math.random() * 100);

  if (num1Random < num2Random) {
    let tempVariable = num1Random;
    num1Random = num2Random;
    num2Random = tempVariable;
  }
  if (num1Random == 0 || num2Random == 0) {
    randomise();
  }
  if (Operators == 5) {
    //addition
    num3Random = num1Random + num2Random;
    console.log('Addition', num3Random);
  } else if (Operators == 4) {
    //minus
    num3Random = num1Random - num2Random;
    console.log('Minus', num3Random);
  } else if (Operators == 3) {
    //multiply
    num3Random = num1Random * num2Random;
    console.log('multiply', num3Random);
  } else if (Operators == 2) {
    //divide
    num3Random = Math.floor(num1Random / num2Random);
    console.log('divide', num3Random);
  } else if (Operators == 1) {
    //modulus
    num3Random = num1Random % num2Random;
    console.log('modulus', num3Random);
  } else {
    randomise();
    console.log('Recurrsion');
  }

  number1Div.innerText = num1Random;
  number2Div.innerText = num2Random;
  number3Div.innerText = num3Random;
}
randomise();
// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional
function Timer() {
  let timeStart = 20;
  time.innerText = timeStart;
  ClearReferenceTime = setInterval(function () {
    timeStart = timeStart - 1;
    time.innerText = timeStart;
    if (timeStart == 0) {
      localStorage.setItem('score', score);
      window.location.href = './gameover.html';
    }
  }, 1000);
}
Timer();
plusBtn.addEventListener('click', function () {
  if (num1Random + num2Random == num3Random) {
    score = score + 1;
    clearInterval(ClearReferenceTime);
    Timer();
    randomise();
  } else {
    //gameover page
    localStorage.setItem('score', score);
    window.location.href = './gameover.html';
  }
});
MinusBtn.addEventListener('click', function () {
  if (num1Random - num2Random == num3Random) {
    score = score + 1;
    clearInterval(ClearReferenceTime);
    Timer();
    randomise();
  } else {
    //gameover page
    localStorage.setItem('score', score);
    window.location.href = './gameover.html';
    console.log('Game OVer', score);
  }
});
mulBtn.addEventListener('click', function () {
  if (num1Random * num2Random == num3Random) {
    score = score + 1;
    clearInterval(ClearReferenceTime);
    Timer();
    randomise();
  } else {
    //gameover page
    localStorage.setItem('score', score);
    window.location.href = './gameover.html';
    console.log('Game OVer', score);
  }
});

DivideBtn.addEventListener('click', function () {
  if (Math.floor(num1Random / num2Random) == num3Random) {
    score = score + 1;
    clearInterval(ClearReferenceTime);
    Timer();
    randomise();
  } else {
    //gameover page
    localStorage.setItem('score', score);
    window.location.href = './gameover.html';
    console.log('Game OVer', score);
  }
});
modulusBtn.addEventListener('click', function () {
  if (num1Random % num2Random == num3Random) {
    score = score + 1;
    clearInterval(ClearReferenceTime);
    Timer();
    randomise();
  } else {
    //gameover page
    localStorage.setItem('score', score);
    window.location.href = './gameover.html';
    console.log('Game OVer', score);
  }
});