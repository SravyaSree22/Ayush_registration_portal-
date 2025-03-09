document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");
    const paginationNumbers = document.querySelectorAll(".pagination .number");
    const bars = document.querySelectorAll(".pagination .bar");
  
    let currentStep = 0;
  
    function updateStep() {
      steps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
      });
  
      paginationNumbers.forEach((number, index) => {
        number.classList.toggle("active", index === currentStep);
        number.classList.toggle("completed", index < currentStep);
      });
  
      bars.forEach((bar, index) => {
        bar.classList.toggle("completed", index < currentStep);
      });
  
      // Enable/disable buttons based on current step
      prevButton.disabled = currentStep === 0;
      nextButton.textContent = currentStep === steps.length - 1 ? "Submit" : "Next";
    }
  
    nextButton.addEventListener("click", () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        updateStep();
      } else {
        alert("Form submitted successfully!");
        // Add form submission logic here if needed
      }
    });
  
    prevButton.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        updateStep();
      }
    });
  
    // Initialize the form
    updateStep();
  });