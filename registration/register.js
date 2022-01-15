
var username = document.forms['form']['username'];
var password = document.forms['form']['password'];
var confirmpassword = document.forms['form']['passwordconf'];
var email = document.forms['form']['email'];
var gender = document.forms['form']['gender'];

var user_error = document.getElementById('user_error');
var pass_error = document.getElementById('pass_error');
var passconf_error = document.getElementById('passconf_error');
var email_error = document.getElementById('email_error');
var gender_error = document.getElementById('gender_error');
var passmatch_error = document.getElementById('passmatch_error');


username.addEventListener('textInput', username_Verify);
password.addEventListener('textInput', pass_Verify);
confirmpassword.addEventListener('textInput', confpass_Verify);
email.addEventListener('textInput', email_Verify);
// gender.addEventListener('textInput', gender_Verify);
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

    if (confirmpassword.value == "") {
        confirmpassword.style.border = "1px solid red";
        passconf_error.style.display = "block";
        confirmpassword.focus();
        return false;
    } else if (confirmpassword.value !== password.value) {
        confirmpassword.style.border = "1px solid red";
        passmatch_error.style.display = "block";
        confirmpassword.focus();
        return false
    }
    if (email.value == "") {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if ((gender[0].checked == false) && (gender[1].checked == false)) {

        gender_error.style.display = "block";

        return false;
    }

    /// make user object and its properties the registration form
    /// setcookie with email as value 
    let user = {
        name: username.value,
        password: password.value,
        email: email.value,
        gender: gender[0].checked ? gender[0].value : gender[1].value,
        score: 0
    }
    localStorage.setItem("loggedinUser", JSON.stringify(user));

}


function username_Verify() {
    if (username.value.length !== "") {
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
function confpass_Verify() {
    if (confirmpassword.value !== "") {
        confirmpassword.style.border = "1px solid silver";
        passconf_error.style.display = "none";
        return false;
    } else if (confirmpassword.value === password.value) {
        confirmpassword.style.border = "1px solid silver";
        passmatch_error.style.display = "none";
        return false
    }
}
function email_Verify() {
    if (email.value !== "") {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}
function gender_Verify() {
    if (email.value !== "") {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}
