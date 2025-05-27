//Home Page Burger Menu
const burger = document.querySelector(".hamburger");
const burgerLinks = document.querySelector(".burger-links");
burger.addEventListener("click", () => {
    const visibility = burgerLinks.getAttribute('data-visible');
    burger.classList.toggle("active");
    burgerLinks.classList.toggle("active");
        if (visibility === "true") {
            burgerLinks.setAttribute('data-visible', "false");
        }
        else {
            burgerLinks.setAttribute('data-visible', "true");
        }

})
// Expandable Projects
var exp = document.getElementsByClassName("project-header");
for (let i = 0; i < exp.length; i++) {
    exp[i].addEventListener("click", function() {
        //toggle chevron active
        this.getElementsByClassName("chevron")[0].classList.toggle("active");        
        //Expandable Part
        var expandable = this.nextElementSibling;
        if (expandable.style.maxHeight) {
            expandable.style.maxHeight = null;
        } else {
            expandable.style.maxHeight = expandable.scrollHeight + "px";
        }
    });
}
