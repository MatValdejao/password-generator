// Assignment Code
var generateBtn = document.querySelector("#generate");

function passwordSpecifications() {
    //prompt user for number of characters and turn variable into type Number
    var length = prompt("How many characters will your password contain?");
    length = Number(length);

    //checks whether length chosen is within 8-128 characters long
    if (length < 8){
        alert("Your password is too short! It must be at least 8 characters long!");
        passwordSpecifications();
    } else if (length > 128) {
        alert("Your password is too long! It cannot exceed 128 characters!");
        passwordSpecifications();
    }

    //check what type of characters to use and save into boolean type variables using confirm
    var chooseLowercase = confirm("Would you like to have lowercase characters?");
    var chooseUppercase = confirm("Would you like to use uppercase characters?");
    var chooseNumeric = confirm("Would you like to use numeric charcaters?");
    var chooseSpecial = confirm("Would you like to use special characters?");

    //checks whether at least one prompt boolean value is true
    if (!chooseLowercase && !chooseUppercase && !chooseNumeric && !chooseSpecial) {
        alert("You must choose at least one type of character!");
        passwordSpecifications();
    }

    var passwordIdentifiers = {
        length: length,
        uppercase: chooseUppercase,
        lowercase: chooseLowercase,
        numeric: chooseNumeric,
        special: chooseSpecial
    };
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
