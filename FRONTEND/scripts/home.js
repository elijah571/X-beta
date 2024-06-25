 document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('header .nav');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
});


JavaScript code.   
let images = document.querySelectorAll('#image-slider img');
let currentImage = 0;

setInterval(() => {
  images[currentImage].style.display = 'none';
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].style.display = 'block';
}, 10000); // 3000ms = 3 seconds