const hamburger = document.querySelector(".hamburger");
const logo = document.querySelector(".logo");
const modal = document.querySelector(".modal");
const closeicon = document.querySelector(".close");

hamburger.addEventListener("click", () => {
  modal.style.display = "block";
  hamburger.style.display = "none";
  logo.style.display = "none";
});
closeicon.addEventListener("click", () => {
  modal.style.display = "none";
  hamburger.style.display = "block";
  logo.style.display = "block";
});
