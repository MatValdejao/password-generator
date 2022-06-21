// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var theNumbers = "0123456789"

function passwordSpecifications() {
    //prompt user for number of characters and turn variable into type Number
    var length = prompt("How many characters will your password contain?");
    //checks whether length chosen is within 8-128 characters long
    if (parseInt(length) < 8 || length === "") {
        alert("Your password is too short! It must be at least 8 characters long!");
        passwordSpecifications();
    } else if (parseInt(length) > 128) {
        alert("Your password is too long! It cannot exceed 128 characters!");
        passwordSpecifications();
    }

    //check what type of characters to use and save into boolean type variables using confirm
    var chooseLowercase = confirm("Would you like to have lowercase characters?");
    var chooseUppercase = confirm("Would you like to use uppercase characters?");
    var chooseNumeric = confirm("Would you like to use numeric characters?");
    var chooseSpecial = confirm("Would you like to use special characters?");

    //checks whether at least one prompt boolean value is true
    if (!chooseLowercase && !chooseUppercase && !chooseNumeric && !chooseSpecial) {
        alert("You must choose at least one type of character!");
        passwordSpecifications();
    }

    //returns the chosen length, and users choices of character types as booleans
    return [length, chooseLowercase, chooseUppercase, chooseNumeric, chooseSpecial];
}



//Series of functions that randomly choose one of the characters in each of the corresponding string variables
function getUppercase() {
    return uppercaseAlphabet[Math.floor(Math.random()*uppercaseAlphabet.length)];
}

function getLowercase() {
    return lowercaseAlphabet[Math.floor(Math.random()*lowercaseAlphabet.length)];
}

function getNumeric() {
    return theNumbers[Math.floor(Math.random()*theNumbers.length)];
}

function getSpecial() {
    return specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordSpecifications);
