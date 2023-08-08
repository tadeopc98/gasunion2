// add hovered class to selected list item
let list = document.querySelectorAll(".navigations li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggles");
let navigation = document.querySelector(".navigations");
let main = document.querySelector(".mains");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
