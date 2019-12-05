//Generate random Password

var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
var num = "0123456789";
var symbol = "! @ # $ % ^ & * + ?";

// prompt for options
function passwordLengthPrompt(){
    var length = prompt ("how long password");
    if(isNaNlength || !length)
    return;
    }
    return length;

//prompt for options
function generatePassword(){
    var passwordLength = passwordLengthPrompt();
    if (passwordLength <= 7 || passwordLength > 128){
        alert("Too Short!") 
    }
       
    
}

function getRandomUpper()
