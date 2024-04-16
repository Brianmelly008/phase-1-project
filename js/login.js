// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example of simple client-side validation
    if (username === 'admin' && password === 'password') {
        // Successful login
        document.getElementById('login-message').textContent = 'Login successful!';
        // Redirect to another page or perform other actions as needed
    } else {
        // Failed login
        document.getElementById('login-message').textContent = 'Incorrect username or password. Please try again.';
    }
}

// Event listener for form submission
document.getElementById('login-form').addEventListener('submit', handleFormSubmit);
