//script to open and close de nav menu

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const contactbtn = document.querySelector("#contactbtn");
const galeriabtn = document.querySelector("#galeriabtn");
const cateringbtn = document.querySelector("#cateringbtn");
const nosotrosbtn = document.querySelector("#nosotrosbtn");
const clientesbtn = document.querySelector("#clientesbtn");
const logomenubtn = document.querySelector("#logomenubtn");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
contactbtn.addEventListener("click", toggleMenu);
galeriabtn.addEventListener("click", toggleMenu);
cateringbtn.addEventListener("click", toggleMenu);
nosotrosbtn.addEventListener("click", toggleMenu);
clientesbtn.addEventListener("click", toggleMenu);
logomenubtn.addEventListener("click", toggleMenu);
