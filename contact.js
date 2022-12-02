//function to validate whether the user has input anything in the input area
function validateContact(){
    var name = document.getElementById("Name");
    var email = document.getElementById("Email");
    var message = document.getElementById("Message");

    if(name.value==""){
     alert("Please input your name");
     return false;
    }
    if(email.value==""){
        alert("Please input your email");
        return false;
       }
    if(message.value==""){
        alert("Please input your message");
        return false;
       }
    else{
        name.value = "";
        email.value = "";
        message.value = "";
        alert("Message has been sent");
    }
}



