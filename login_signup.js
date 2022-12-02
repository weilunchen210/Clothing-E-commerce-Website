
/*function to check whether the user has input anything the the input box*/
function validatelogin(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if(email.value==""){
        alert("Please input your email");
        return false;
       }
    if(password.value==""){
     alert("Please input your password");
     return false;
    }
    else{
        password.value = "";
        email.value = "";
        alert("Login successful");
    }
}
/*function to check whether the user has input anything in the input box*/
function validatesignup(){
    var email = document.getElementById("email");
    var name = document.getElementById("Name");
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");

    if(email.value==""){
     alert("Please input your email");
     return false;
    }
    if(name.value==""){
        alert("Please input your name");
        return false;
       }
    if(password.value==""){
        alert("Please input your password");
        return false;
       }
    if(confirm_password.value==""){
           alert("Please input your confirm password");
           return false;
          }
    else{
        password.value = "";
        email.value = "";
        alert("Sign up successful");
    }
}