// Registration
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log("Registered User:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Registration Successful!");
});

// Login
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    console.log("Login Attempt:");
    console.log("Email:", email);

    alert("Login Successful!");
});

// OTP Verification
document.getElementById("otpForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let otp = document.getElementById("otp").value;

    if (otp === "1234") {
        alert("OTP Verified Successfully!");
    } else {
        alert("Invalid OTP!");
    }
});