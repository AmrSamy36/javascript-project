var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var user_error = document.getElementById('user_error');
var pass_error = document.getElementById('pass_error');
var wrong = document.getElementById("wrongCredentials");


username.addEventListener('textInput', username_Verify);
password.addEventListener('textInput', pass_Verify);
let user;
function validated() {
    if (username.value == "") {
        username.style.border = "1px solid red";
        user_error.style.display = "block";
        username.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }

    user = JSON.parse(localStorage.getItem("loggedinUser"));
    console.log(user);
    if (user.password !== password.value) {
        wrong.style.display = "block";
        return false;
    }
}
function username_Verify() {
    if (username.value !== "") {
        username.style.border = "1px solid silver";
        user_error.style.display = "none";
        return true;
    }
}

function pass_Verify() {
    if (password.value.length >= 5) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}
