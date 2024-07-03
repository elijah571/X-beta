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