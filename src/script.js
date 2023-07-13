// navbar-fix
window.onscroll = function () {
   const header = document.querySelector("header");
   const fixNav = header.offsetTop;

   if (window.pageYOffset > fixNav) {
      header.classList.add("navbar-fix");
   } else {
      header.classList.remove("navbar-fix");
   }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.getElementById("nav-menu");


hamburger.addEventListener("click", function () {
   hamburger.classList.toggle("hamburger-active");
   navMenu.classList.toggle("hidden")
});
