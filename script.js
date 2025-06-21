document.addEventListener("DOMContentLoaded", function() {

// function to signup from navbar
const container = document.querySelector(".container");
const loginForm = document.querySelector('.login');
const signupForm = document.querySelector('.signup');
const signupContainer = document.querySelector('.signup-container');

document.querySelector('#signup-nav').addEventListener('click', () => {
    signupContainer.classList.add('active');
    container.style.display = "none";

    // signupContainer.style.transform = "scale(1)";
});

document.querySelector('#login-nav').addEventListener('click', () => {
    signupContainer.classList.remove('active');
    container.style.display = "flex";
});

document.querySelector('#switch-signup').addEventListener('click', () => {
    signupContainer.classList.add('active');
    container.style.display = "none";
});

document.querySelector('#switch-login').addEventListener('click', () => {
    signupContainer.classList.remove('active');
    container.style.display = "flex";
    
});

//store email and pwd in localstorage

document.getElementById("register").addEventListener("click", function() {
    console.log("clicked")

const signupEmail = document.querySelector("#new-email").value.trim();
const signupUsername = document.querySelector("#new-username").value.trim();
const signupPassword = document.querySelector("#new-password").value.trim();

let users = localStorage.getItem("users")    //get existing user from local storage
users = users ? JSON.parse(users) : [];       //parse user data from string to arr, If no users yet start with empty array

if(signupEmail.length === 0 || signupUsername.length === 0 || signupPassword.length === 0){
    alert("Please enter your details");
    return;
}
const userExists = users.some(user => user.email === signupEmail);  //.some() is used to check if any user already exist with same email

if(userExists){
    alert("Email address already exists");
}
else
{
    //adds new user in local storage
    users.push({
        email: signupEmail,
        username: signupUsername,
        password: signupPassword,
    });

  //save email in local storage
   localStorage.setItem("users", JSON.stringify(users));
   alert("You've signed up successfully");
  
   // Optionally, redirect to login page
   window.location.href = "login.html";
}
});

// functionality for password strength of login container
const password = document.getElementById("password");
const passwordMsg = document.getElementById("message-pwd")
const passwordStrength = document.getElementById("strength-pwd")

password.addEventListener('input', () => {
    if(password.value.length > 0){
        passwordMsg.style.display = "block"
    }
    else{
        passwordMsg.style.display = "none"
    }

    if(password.value.length < 5){
        passwordStrength.innerHTML = " Weak"
        passwordMsg.style.color = "red"
    }
    else if(password.value.length >= 5 && password.value.length > 8){
        passwordStrength.innerHTML = " Strong"
        passwordMsg.style.color = "green"
    }
    else{
        passwordStrength.innerHTML = " Medium"
        passwordMsg.style.color = "yellow"
    }

})

//password strength of signup container
const newPassword = document.getElementById("new-password");
const newpasswordMsg = document.getElementById("new-message-pwd")
const newpasswordStrength = document.getElementById("new-strength-pwd")

newPassword.addEventListener('input', () => {
    if(newPassword.value.length > 0){
        newpasswordMsg.style.display = "block"
    }
    else{
        newpasswordMsg.style.display = "none"
    }

    if(newPassword .value.length < 5){
        newpasswordStrength.innerHTML = " Weak"
        newpasswordMsg.style.color = "red"
    }
    else if(newPassword.value.length >= 5 && newPassword.value.length > 8){
        newpasswordStrength.innerHTML = " Strong"
        newpasswordMsg.style.color = "green"
    }
    else{
        newpasswordStrength.innerHTML = " Medium"
        newpasswordMsg.style.color = "yellow"
    }

});
});