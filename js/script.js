/* Changing the displayed tab in the Features Section*/
function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("card");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "flex";
  arr = Array.from(tablinks);
  arr.forEach((item) => {
    if (window.innerWidth < 870) {
      item.style.borderBottom = `none`;
      item.style.color = "grey";
    }
    if (window.innerWidth > 870) {
      item.parentNode.style.borderBottom = `none`;
    }
  });
  if (window.innerWidth < 870) {
    elmnt.style.borderBottom = `2px solid ${color}`;
    elmnt.style.color = "black";
  } else {
    elmnt.parentNode.style.borderBottom = `1px solid ${color}`;
  }
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

const answer = document.querySelector(".answer");
const faq = document.querySelectorAll(".faq-list-item");
const hamburger = document.querySelector(".hamburger");
const logo = document.querySelector(".logo");
const form = document.querySelector(".for");
const modal = document.querySelector(".modal");
const closeicon = document.querySelector(".close");
const email = document.querySelector("#email");
const send = document.querySelector(".send");
const successMsg = document.querySelector(".success");
const errorMsg = document.querySelector(".error");
const errorIcon = document.querySelector(".error-icon");

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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateEmail(email.value)) {
    successMsg.textContent = "";
    errorMsg.style.display = "block";
    errorIcon.style.display = "inline";
  } else {
    successMsg.textContent = "Thanks for subscribing";
    successMsg.style.display = "block";
    email.value = "";
  }
  setTimeout(() => {
    successMsg.textContent = "";
    errorMsg.style.display = "none";
    errorIcon.style.display = "none";
    successMsg.style.display = "none";
    email.value = "";
  }, 3000);
});
email.addEventListener("click", () => {
  errorMsg.style.display = "none";
  errorIcon.style.display = "none";
  successMsg.textContent = "";
});

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

Array.from(faq).forEach((item) =>
  item.addEventListener("click", (e) => {
    console.log(e.target.parentNode.children);
  })
);
