//Generate random Password

var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
var num = "0123456789";
var symbol = "! @ # $ % ^ & * + ?";

// prompt for length
function passwordLengthPrompt(){
    var length = prompt ("how long password");
    if(isNaNlength || !length)
    return;
    }
    return length;

function generatePassword(){
    var passwordLength = passwordLengthPrompt();
    if (passwordLength <= 7 || passwordLength > 128){
        alert("Too Short!") 
    }
       
    var includeUpperCase = confirm ("Do you want Uppercase Letters?");
    var includeLowerCase = confirm ("Do you want Lowercase Letters?");
    var includeNumber = confirm ("Do you want a number?");
    var includwSymbol = confirm ("Do you want a symbol?");
    if(!includeUpperCase && !includeLowerCase && !includeNumber && !includwSymbol) {
        alert("You need one of each!")
    }
}

function getRandomUpper()
