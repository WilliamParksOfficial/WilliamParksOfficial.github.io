
const menuButton = document.getElementById("menu-button");
const dropdownMenu = document.getElementById("dropdown-menu");

// Toggle the dropdown menu when the button is clicked
menuButton.addEventListener("click", (event) => {
  dropdownMenu.classList.toggle("show");
  dropdownMenu.classList.toggle("hidden");
  event.stopPropagation(); // Prevent click event from propagating to the document
});

// Hide the dropdown menu when clicking outside
document.addEventListener("click", () => {
  dropdownMenu.classList.add("hidden");
  dropdownMenu.classList.remove("show");
});

dropdownMenu.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent click event from propagating to the document
});

