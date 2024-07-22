// header section
const menuBtn = document.querySelector(".menu");
const clearBtn = document.querySelector(".clear");
const icons = document.querySelector(".icons-js");

menuBtn.addEventListener("click", () => {
    icons.style.display = 'block';
   
});
clearBtn.addEventListener("click", () => {
    icons.style.display = 'none';
   
});

// Access the Images
let slideImages = document.querySelectorAll('.slide-container .slides img');
  let counter = 0;
  let deletInterval = null //Declare deletInterval and initialize it to null
// Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// Code for next button
function slideNext() {
  slideImages[counter].parentNode.style.animation = 'next1 0.3s ease-in forwards';
  counter = (counter + 1) % slideImages.length; //Use modulo to loop back
  slideImages[counter].parentNode.style.animation = 'next2 0.3s ease-in forwards';
}
// Code for prev button
function slidePrev() {
  slideImages[counter].parentNode.style.animation = 'prev1 0.3s ease-in forwards';
  counter = (counter - 1 + slideImages.length) % slideImages.length; //Ensure counter wraps around
  slideImages[counter].parentNode.style.animation = 'prev2 0.3s ease-in forwards';
  }
// Auto slideing
function autoSliding(){
  clearInterval(deletInterval);  //Clear any existing interval
  deletInterval = setInterval(slideNext, 3000); //Slide every 3 seconds
  let deletInterval = null;
  // Start auto sliding
  autoSliding();
}
// Stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){

  clearInterval(deletInterval); // Stop auto sliding when mouse is over
});
// Resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding); // Resume auto sliding when mouse is out
// Buttons
next.addEventListener('click', slideNext);
prev.addEventListener('click', slidePrev);