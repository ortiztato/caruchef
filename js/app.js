const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const contactbtn = document.querySelector("#contactbtn");
const serviciosbtn = document.querySelector("#serviciosbtn");
const locationbtn = document.querySelector("#locationbtn");


function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
contactbtn.addEventListener("click", toggleMenu);
locationbtn.addEventListener("click", toggleMenu);
serviciosbtn.addEventListener("click", toggleMenu);

