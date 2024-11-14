// Set your desired password here
const correctPassword = "rockPassword";

function checkPassword() {
    const enteredPassword = prompt("Please enter the password to access this site:");
    if (enteredPassword === correctPassword) {
        // Password is correct, store in session storage
        sessionStorage.setItem("passwordEntered", "true");
        return true;
    } else {
        alert("Incorrect password. Access denied.");
        return false;
    }
}

function isPasswordEntered() {
    return sessionStorage.getItem("passwordEntered") === "true";
}

// Check password when the page loads
window.onload = function() {
    if (!isPasswordEntered()) {
        if (!checkPassword()) {
            // If password is incorrect, redirect to a blank page or show an error
            document.body.innerHTML = "<h1>Access Denied</h1>";
        }
    }
};