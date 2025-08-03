/**
 * This function initializes the application by interacting with the DOM.
 * It is designed to be called after the HTML document is fully loaded.
 */
function initializeApp() {
  // Select the body element of the document
  const body = document.querySelector('body');

  // Create a new div element to hold a message
  const messageDiv = document.createElement('div');

  // Set the text content of the div
  messageDiv.textContent = 'The DOM has been fully loaded and the initialization function has run!';

  // Apply some basic styling for visibility
  messageDiv.style.cssText = 'padding: 20px; background-color: #d4edda; color: #155724; text-align: center; font-family: sans-serif; border-radius: 8px; margin: 20px;';

  // Append the new div to the body of the document
  body.prepend(messageDiv);

  console.log('initializeApp() has been executed.');
}

// Add an event listener that waits for the DOM to be fully loaded and parsed.
// Once that event occurs, it calls our initializeApp function.
document.addEventListener('DOMContentLoaded', initializeApp);// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Select the form and feedback div
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add a submit event listener to the form
    form.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Retrieve and trim the values from the input fields
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation variables
        let isValid = true;
        const messages = [];

        // --- Validation Logic ---

        // Username Validation: check if length is less than 3
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation: check for '@' and '.' characters
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password Validation: check if length is at least 8
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // --- Displaying Feedback ---

        // Make the feedback div visible
        feedbackDiv.style.display = 'block';

        if (isValid) {
            // If all validations pass, display a success message
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Success text color
            feedbackDiv.style.backgroundColor = "#d4edda"; // Success background color
        } else {
            // If any validation fails, display the error messages
            // Using innerHTML to allow for the <br> tag
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545"; // Error text color
            feedbackDiv.style.backgroundColor = "#ffbaba"; // Error background color
        }
    });
});
