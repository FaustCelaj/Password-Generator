var number = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var generateBtn = document.querySelector("#generate");

var passLength = 0;
var userOptions = [];
var password = [];

function promptUser() {
    passLength = prompt(
        "How may characters long do you want your password to be? (Between 8 and 128)"
    );
    if (!passLength) {
        alert("Character length is required, please try again ");
    } else if (passLength < 8 || passLength > 128) {
        alert("Please enter in a vale between 8 and 128");
        promptUser();
    } else {

        lowerCase = confirm("Include lowercase letters?");
        upperCase = confirm("Include any uppercase letters?");
        numbers = confirm("Include numbers?");
        specChar = confirm("Include special characters?");


        if (!lowerCase && !upperCase && !numbers && !specChar) {
            alert("Please select at least one option.");
            promptUser();
        } else {
            validateData();
        }
    }
};

function validateData() {

    userOptions = [];

    if (lowerCase) {
        userOptions = userOptions.concat(char);
    }
    if (upperCase) {
        userOptions = userOptions.concat(charUpper);
    }
    if (numbers) {
        userOptions = userOptions.concat(number);
    }
    if (specChar) {
        userOptions = userOptions.concat(specialChar);
    }
    generatePassword();
};

function generatePassword() {
    var passArray = [];
    for (var i = 0; i < passLength; i++) {
        genPass = userOptions[Math.floor(Math.random() * userOptions.length)];
        passArray.push(genPass);
    }
    password = passArray.join('');
    writePassword();
};

function writePassword() {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
};

generateBtn.addEventListener("click", promptUser);