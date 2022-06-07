let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showDropdown(parentId, id, text) {
  let parentElement = document.getElementById(parentId);
  let element = document.getElementById(id);
  if (element.classList.contains("hide")) {
    parentElement.innerHTML = "&#9650; " + text;
  } else {
    parentElement.innerHTML = "&#9660; " + text;
  }
  element.classList.toggle("hide");
}

function showSidebar(parentId, id) {
  let parentElement = document.getElementById(parentId);
  let element = document.getElementById(id);
  element.classList.toggle("mobile-show");
  parentElement.classList.toggle("change");
}
