// This runs so the first joke isn't "undefined"
window.onload = function() {
  getJoke();
};

// This allows for users to tab through the page without the use of a mouse
const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')
    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }
}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')
  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

////////////////////////////////////////////////////////////////


// This is the setup for the secret jokes 
var jokeData = {};
var jokeLoaded;
var delayInMilliseconds = 100; // Need this so that the True/False toggle doesn't skip the joke or punchline
var c = 0;

// This function is the toggle of setup and punchline 
function joke() {
  if(jokeLoaded == false || jokeLoaded == null) {
    console.log(jokeData.setup);
    document.getElementById("headLine").innerHTML = jokeData.setup;
    setTimeout(function() {
      jokeLoaded = true;
    }, delayInMilliseconds);
  } 
  if(jokeLoaded == true) {
    console.log(jokeData.punchline);
    document.getElementById("headLine").innerHTML = jokeData.punchline;
    document.getElementById("changeMe").innerHTML = getSubText();
    getJoke();
    setTimeout(function() {
      jokeLoaded = false;
    }, delayInMilliseconds);
  }
  c = Math.round((Math.random() * 5));
  console.log(c);
}

// API call to the joke host
function getJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
  .then(response => response.json())
  .then(data => jokeData = data);
}

// Just a little randomizer for the subtext on the punchlines
function getSubText() {
  if(c == 0) return "Hahaha, I'm so funny";
  if(c == 1) return "Glad you want more!";
  if(c == 2) return "LOL I bet that one made you laugh";
  if(c == 3) return "I'm on a roll!";
  if(c == 4) return "Wow you must really like my jokes!";
  if(c == 5) return "Hahaha, I'm so funny";
}

// Yippe you submitted my form
function submitForm() {
  alert('Your message has been sent! Thank you!');
}


// Setting up the janky slideshow portion of my JS 
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

////////////////////////////////////////////////////////////////