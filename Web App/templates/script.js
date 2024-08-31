// script.js

function validateSignupForm() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (!username || !password) {
        alert('All fields are required.');
        return false;
    }

    if (!validateInput(username) || !validateInput(password)) {
        alert('Invalid input detected.');
        return false;
    }

    return true;
}

function validateLoginForm() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (!username || !password) {
        alert('All fields are required.');
        return false;
    }

    if (!validateInput(username) || !validateInput(password)) {
        alert('Invalid input detected.');
        return false;
    }

    return true;
}

function validateInput(input) {
    const pattern = /^[a-zA-Z0-9_]+$/;
    return pattern.test(input);
}
