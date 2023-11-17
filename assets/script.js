// Assignment Code
var generateBtn = document.querySelector("#generate");


//declarations
let lower = 'qwertyuiopasdfghjklzxcvbnm';
let upper = 'QWERTYUIOPASDFGHJKLZXCVBNM';
let number = '1234567890';
let special = '!@#$%^&*()[]{}<>?/\|-_=+,.'

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//window prompts
// let passwordLength = window.prompt('how many characters (range of 8 to 128)');
// let charType = window.prompt ('choose character options')

//functions for random characters
function getRandomLower() {
    return lower[Math.floor(Math.random() * lower.length)]
}

function getRandomUpper() {
    return upper[Math.floor(Math.random() * upper.length)]
}

function getRandomNumber() {
    return number[Math.floor(Math.random() * number.length)]
}

function getRandomSpecial() {
    return special[Math.floor(Math.random() * special.length)]
}

console.log(getRandomLower())