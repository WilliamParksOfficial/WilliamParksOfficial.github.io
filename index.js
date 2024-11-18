let slideIndex = 0;

// Load images from JSON file
fetch('images/slideshow/listOfImages.json')
    .then(response => response.json())
    .then(images => createSlides(images))
    .catch(error => console.error("Error loading images:", error));

function createSlides(images) {
    const slideshowimg = document.getElementById("slideimg");
    const dotsContainer = document.getElementById("dots");

    // Create each slide and dot
    images.forEach((image, index) => {

        const imgElement = document.createElement("img");
        imgElement.classList.add("slide");
        imgElement.src = `/images/slideshow/${image}`;
        imgElement.alt = image.replace(/\.[^/.]+$/, ""); // Alt text from filename

        slideshowimg.appendChild(imgElement);

        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.onclick = () => currentSlide(index);
        dotsContainer.appendChild(dot);
    });

    showSlides(slideIndex);  // Show the first slide
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
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
