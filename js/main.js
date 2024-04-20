const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  const inputs = document.querySelectorAll(".input-field"); // Get all input fields

  let isFormValid = true; // Assume form is valid initially

  inputs.forEach(function (input) {
    if (input.value.trim() === "") {
      // Check if any input field is empty
      isFormValid = false; // Mark form as invalid
    }
  });

  if (isFormValid) {
    showPopup(); // Show popup message if form is valid
  } else {
    alert("Please fill out all required fields."); // Show an alert if any field is empty
  }
});

// Function to show popup message and clear input fields
function showPopup() {
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("popup");
  overlay.style.display = "block";
  popup.style.display = "block";

  // clear input fields after a delay (e.g., 2 seconds)
  setTimeout(function () {
    const inputFields = document.querySelectorAll(".input-field");
    inputFields.forEach(function (input) {
      input.value = "";
    });
  }, 2000);
}

// Function to hide popup message
function hidePopup() {
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("popup");
  overlay.style.display = "none";
  popup.style.display = "none";
}
