document.getElementById("consultationForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Simple confirmation (replace with backend integration)
    document.getElementById("confirmation").textContent =
      "Thank you! Your consultation request has been submitted.";
  
    // Optionally clear the form
    this.reset();
  });