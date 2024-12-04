document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const welcomeMessageDiv = document.getElementById("welcomeMessage");

    alert(`Welcome, ${username}`);

    // Set the text content to show the welcome message
    welcomeMessageDiv.textContent = `Welcome, ${username}`;
});
