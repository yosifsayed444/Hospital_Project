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

  const container = document.querySelector(".container");
  container.style.opacity = "1";
  container.style.display = "block";

  const containerElements = container.querySelectorAll(".container *");
  containerElements.forEach((el) => {
    el.style.opacity = "1";
  });
}
function poplogino() {
  const allDivs = document.querySelectorAll("body div");
  allDivs.forEach((div) => {
    div.style.opacity = "1";
  });

  const container = document.querySelector(".container");
  container.style.display = "none";
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
const pass1=document.getElementById('re-password');
const btnpass1=document.getElementById('btn-eye1');
const icon1=document.querySelector('.icon1');
btnpass1.addEventListener('click',function(){
    if(pass1.type==='password'){
        pass1.type='text';
        icon1.classList.remove('fa-eye-slash');
        icon1.classList.add('fa-eye');
    }else{
        pass1.type='password';
        icon1.classList.add('fa-eye-slash');
        icon1.classList.remove('fa-eye');

    }
})
