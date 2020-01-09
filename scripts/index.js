/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

/* Geleend van Katherine Kato gevonden op https://codepen.io/kathykato/pen/MoZJom */

var items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
}
items.forEach(function (a) {
    return a.addEventListener("click", toggleAccordion);
});

