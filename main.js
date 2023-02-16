/* typeSCRIPT */
var typed = new Typed(".input", {
    strings: ["Elizabeth Elmiz." , "Web Developer.", "UX Designer.", "Photographer."],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
}); 
/* HAMBURGER */
var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");

hamburger.addEventListener("click", function() {
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});