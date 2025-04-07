// script.js

function toggleMenu() {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('show');
  }
  
  let currentReview = 0;
  
  function showReview(index) {
    const testimonials = document.getElementById('testimonial-track');
    const children = testimonials.children;
    for (let i = 0; i < children.length; i++) {
      children[i].style.transform = `translateX(-${index * 100}%)`;
    }
  }
  
  function nextReview() {
    const testimonials = document.getElementById('testimonial-track');
    const total = testimonials.children.length;
    currentReview = (currentReview + 1) % total;
    showReview(currentReview);
  }
  
  function prevReview() {
    const testimonials = document.getElementById('testimonial-track');
    const total = testimonials.children.length;
    currentReview = (currentReview - 1 + total) % total;
    showReview(currentReview);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("orderModal"); // Corrected id
    const closeModal = document.getElementById("closeModal");
    const orderButtons = document.querySelectorAll(".orderBtn");
    const quoteBtn = document.getElementById("quoteBtn");
    const form = document.getElementById("customOrderForm");
    const successMessage = document.getElementById("successMessage");

    // Show modal on click
    orderButtons.forEach(button => {
      button.addEventListener("click", () => {
        modal.style.display = "block";
      });
    });

    quoteBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Close modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission

        // Show success message
        successMessage.style.display = "block";

        // Clear form fields
        form.reset();

        // Hide success message and close modal after 3 seconds
        setTimeout(() => {
            successMessage.style.display = "none";
            modal.style.display = "none";
        }, 3000);
    });
});
document.getElementById("exploreBtn").addEventListener("click", function () {
  document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
});
  


  