// script.js

// Function to display a welcome message when the page loads
function displayWelcomeMessage() {
  alert("Welcome to the Cozy Birthday Site!");
}

// Call the displayWelcomeMessage function when the page loads
window.onload = displayWelcomeMessage;


// JavaScript for Homepage Slideshow
let slideIndex = 0;

// Function to show slides
function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Function to move slides forward or backward
function moveSlide(n) {
  slideIndex += n;
  const slides = document.getElementsByClassName("slide");
  if (slideIndex > slides.length) {slideIndex = 1}    
  if (slideIndex < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

// Call the showSlides function when the page loads
window.onload = showSlides;

// JavaScript for About Section
const toggleInfoBtn = document.getElementById('toggle-info-btn');
const additionalInfo = document.getElementById('additional-info');

toggleInfoBtn.addEventListener('click', function() {
  if (additionalInfo.style.display === 'none') {
    additionalInfo.style.display = 'block';
    toggleInfoBtn.textContent = 'Show Less';
  } else {
    additionalInfo.style.display = 'none';
    toggleInfoBtn.textContent = 'Show More';
  }
});

// JavaScript for Gallery Section
function openLightbox(imageUrl) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  lightbox.style.display = 'block';
  lightboxImg.src = imageUrl;
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');

  lightbox.style.display = 'none';
}

