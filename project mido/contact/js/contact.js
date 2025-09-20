function showbooking(){
    document.getElementById("booking").style.display = "block"
}    


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