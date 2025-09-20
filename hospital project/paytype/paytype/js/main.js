window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8;
      if (sectionTop < triggerPoint) {
        section.classList.add("active");
      }
    });
  }
  checkScroll();
  window.addEventListener("scroll", checkScroll);
});

function poplogin() {
  const allDivs = document.querySelectorAll("body div");
  allDivs.forEach((div) => {
    div.style.opacity = "0.5";
  });

  const container50 = document.querySelector(".container50");
  if (container50) {
    container50.style.opacity = "1";
  }
  const container51 = document.querySelector(".main-image");
  if (container51) {
    container51.style.opacity = "0.5";
  }

  const container = document.querySelector(".container");
  container.style.opacity = "1";
  container.style.display = "block";

  const containerElements = container.querySelectorAll(".container *");
  containerElements.forEach((el) => {
    el.style.opacity = "1";
  });
  const resistor2 = document.querySelector(".resistor");
  resistor2.style.opacity = "1";
  const container6 = document.querySelector(".Sign-in");
  container6.style.color = "#1877f2";
  const resistor2Elements = document.querySelectorAll(".resistor *");
  resistor2Elements.forEach((one) => {
    one.style.opacity = "1";
  });
}
function poplogino() {
  const allDivs = document.querySelectorAll("body div");
  allDivs.forEach((div) => {
    div.style.opacity = "1";
  });
  const container55 = document.querySelector(".main-image");
  if (container55) {
    container55.style.opacity = "1";
  }

  const resistor = document.querySelector(".resistor");
  const container = document.querySelector(".container");
  container.style.display = "none";
  resistor.style.display = "none";
}
const container4 = document.querySelector(".Sign-in");
const container8 = document.querySelector(".Register1");
function Register() {
  const resistor2 = document.querySelector(".resistor");
  const container2 = document.querySelector(".container");
  container8.style.color = "#1877f2";
  container4.style.color = "black";
  container2.style.display = "none";
  resistor2.style.display = "block";
}

function signin() {
  const resistor3 = document.querySelector(".resistor");
  const container3 = document.querySelector(".container");

  container8.style.color = "black";
  container4.style.color = "#1877f2";
  container3.style.display = "block";
  resistor3.style.display = "none";
}

const pass = document.getElementById("password");
const btn = document.getElementById("btn-eye");

const icon = document.querySelector(".icon");
btn.addEventListener("click", function () {
  if (pass.type === "password") {
    pass.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    pass.type = "password";
    icon.classList.add("fa-eye-slash");
    icon.classList.remove("fa-eye");
  }
});
const pass2 = document.getElementById("password2");
const btn2 = document.getElementById("btn-eye2");
const icon3 = document.querySelector(".icon3");
btn2.addEventListener("click", function () {
  if (pass2.type === "password") {
    pass2.type = "text";
    icon3.classList.remove("fa-eye-slash");
    icon3.classList.add("fa-eye");
  } else {
    pass2.type = "password";
    icon3.classList.add("fa-eye-slash");
    icon3.classList.remove("fa-eye");
  }
});

const pass1 = document.getElementById("re-password");
const btnpass1 = document.getElementById("btn-eye1");
const icon1 = document.querySelector(".icon1");
btnpass1.addEventListener("click", function () {
  if (pass1.type === "password") {
    pass1.type = "text";
    icon1.classList.remove("fa-eye-slash");
    icon1.classList.add("fa-eye");
  } else {
    pass1.type = "password";
    icon1.classList.add("fa-eye-slash");
    icon1.classList.remove("fa-eye");
  }
});

function checkdata() {
  const usernameNew = document.getElementById("userNew").value;
  const passwordNew = document.getElementById("password2").value;
  const passwordcheck = document.getElementById("re-password").value;

  if (usernameNew && passwordNew) {
    if (passwordcheck == passwordNew) {
      localStorage.setItem(usernameNew, passwordNew);
      window.alert("User registered successfully!");
    } else {
      window.alert("passwords not the same");
    }
  } else {
    window.alert("Please fill both fields.");
  }
}

function savedata() {
  const username = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  const PassStore = localStorage.getItem(username);

  if (PassStore === password) {
    window.alert("Login successful!");
  } else {
    window.alert("Wrong username or password.");
  }
}

let total = 0;
for (let i = 1; i <= 8; i++) {
  const price = localStorage.getItem("number" + i);
  if (price) {
    const butt = document.querySelector(`.grid div:nth-child(${i}) button`);
    butt.style.backgroundColor = "#2f73f2";
    butt.style.color = "white";
    butt.innerHTML = "Boocked";
  }
}

function book(n) {
  const butt = document.querySelector(`.grid div:nth-child(${n}) button`);
  const style = window.getComputedStyle(butt);
  const contain = document.querySelector(
    `.grid div:nth-child(${n}) div:nth-child(2) div`
  );
  const price = contain.innerHTML;
  if (style.backgroundColor === "rgb(255, 255, 255)") {
    butt.style.backgroundColor = "#2f73f2";
    localStorage.setItem("number" + n, price);
    butt.style.color = "white";
    butt.innerHTML = "Boocked";
  } else {
    butt.style.backgroundColor = "white";
    localStorage.removeItem("number" + n, price);
    butt.style.color = "#2f73f2";
    butt.innerHTML = "Book a Meet";
  }
  const totalP =
    Number(localStorage.getItem("number" + 1)) +
    Number(localStorage.getItem("number" + 2)) +
    Number(localStorage.getItem("number" + 3)) +
    Number(localStorage.getItem("number" + 4)) +
    Number(localStorage.getItem("number" + 5)) +
    Number(localStorage.getItem("number" + 6)) +
    Number(localStorage.getItem("number" + 7)) +
    Number(localStorage.getItem("number" + 8));

  localStorage.setItem("totalPrice", totalP);
}


let scrollNow = window.scrollY;
let navbar = document.querySelector("header");

window.onscroll = function () {
  if (window.scrollY > scrollNow) {
    navbar.style.top = "-150px"; 
  } else {
    navbar.style.top = "0"; 
  }
  scrollNow = window.scrollY;
};
