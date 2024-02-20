document.addEventListener("DOMContentLoaded", function () {
  // Contact Form Validation
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      // You can add code here to handle the form data (e.g., send it to a server)
      alert("Form submitted successfully!");
      contactForm.reset(); // Reset the form after submission
    } else {
      alert("Please fill in all fields.");
    }
  });

  // Image Slideshow
  const slideshowImages = ["project1.jpg", "project2.jpg", "project3.png"];
  let currentImageIndex = 0;

  function showNextImage() {
    const slideshowContainer = document.getElementById("slideshowContainer");
    slideshowContainer.src = slideshowImages[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
  }

  // Set an interval to change the image every 3 seconds
  setInterval(showNextImage, 3000);
});
