/* Geleend van Katherine Kato gevonden op https://codepen.io/kathykato/pen/MoZJom */

var items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
}
items.forEach(function (a) {
    return a.addEventListener("click", toggleAccordion);
});