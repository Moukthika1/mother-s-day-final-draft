// script.js

// Function to navigate to the specified page
function navigateTo(page) {
  window.location.href = page;
}

// Cipher tracking variables
let cipher = "";

// Function to check the cipher input
function checkCipher(letter) {
  cipher += letter;

  // If the cipher is complete and correct ("code"), redirect to the secret page
  if (cipher === "CODE") {
    window.location.href = "1234.html";
  }
}

// Extra functionality for clickable elements
document.addEventListener("DOMContentLoaded", () => {
  // Add any additional event listeners or functionality as needed
  console.log("Scrapbook site loaded successfully!");

  // Example: Allow hover animation to change color of clicked letters
  const crookedLetters = document.querySelectorAll(".crooked");
  crookedLetters.forEach(letter => {
    letter.addEventListener("click", () => {
      letter.style.color = "#e66"; // Change color when clicked
      letter.style.fontSize = "1.5rem"; // Slight zoom effect
    });
  });
});
