// =====================
//  FACEBOOK CLONE - JS
// =====================

// --- LOGIN FORM ---
function handleLogin(event) {
    event.preventDefault();

    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";

    var isValid = true;

    if (email === "") {
        document.getElementById("email-error").textContent = "Please enter your email or phone number.";
        isValid = false;
    }

    if (password === "") {
        document.getElementById("password-error").textContent = "Please enter your password.";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("password-error").textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    if (isValid) {
        alert("Login Successful! Welcome back.");
    }
}


// --- SIGNUP FORM ---
function handleSignup(event) {
    event.preventDefault();

    var firstname = document.getElementById("firstname").value.trim();
    var lastname = document.getElementById("lastname").value.trim();
    var email = document.getElementById("signup-email").value.trim();
    var password = document.getElementById("signup-password").value.trim();
    var confirmPassword = document.getElementById("confirm-password").value.trim();
    var termsChecked = document.getElementById("terms-check").checked;

    document.getElementById("firstname-error").textContent = "";
    document.getElementById("lastname-error").textContent = "";
    document.getElementById("signup-email-error").textContent = "";
    document.getElementById("signup-password-error").textContent = "";
    document.getElementById("confirm-password-error").textContent = "";
    document.getElementById("terms-error").textContent = "";

    var isValid = true;

    if (firstname === "") {
        document.getElementById("firstname-error").textContent = "Please enter your first name.";
        isValid = false;
    }
    if (lastname === "") {
        document.getElementById("lastname-error").textContent = "Please enter your last name.";
        isValid = false;
    }
    if (email === "") {
        document.getElementById("signup-email-error").textContent = "Please enter your email or phone number.";
        isValid = false;
    }
    if (password === "") {
        document.getElementById("signup-password-error").textContent = "Please enter a password.";
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById("signup-password-error").textContent = "Password must be at least 8 characters.";
        isValid = false;
    }
    if (confirmPassword === "") {
        document.getElementById("confirm-password-error").textContent = "Please confirm your password.";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirm-password-error").textContent = "Passwords do not match.";
        isValid = false;
    }
    if (!termsChecked) {
        document.getElementById("terms-error").textContent = "You must agree to the Terms and Conditions.";
        isValid = false;
    }

    if (isValid) {
        alert("Account Created Successfully! Welcome to Facebook.");
        window.location.href = "login.html";
    }
}


// --- FORGOT PASSWORD FORM ---
function handleForgot(event) {
    event.preventDefault();

    var email = document.getElementById("forgot-email").value.trim();
    document.getElementById("forgot-error").textContent = "";

    if (email === "") {
        document.getElementById("forgot-error").textContent = "Please enter your email or phone number.";
        return;
    }

    alert("Reset link sent to: " + email);
    window.location.href = "login.html";
}
