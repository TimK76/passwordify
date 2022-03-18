// Assignment code here
// List of arrays for optional password characters.
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar = ["\!", "\#", "\$", "\%", "\&", "\'", "\(", "\)", "\*", "\+", "\,", "\-", "\.", "\/", "\:", "\;", "\<", "\=", "\>", "\?", "\@", "\[", "\\", "\]", "\^", "\_", "\`", "\{", "\|", "\}", "\~"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function generatePassword() {
  // Empty array to be populated with user's selected character options.
  var total = []
  // Prompt for a password length from the user that is between 8 and 128 characters long.
  var passwordLength = window.prompt("How long should your password be? Passwords can be any length between 8 and 128 characters.");
  // if statement to check that the password lenght input by user is the correct length according to direcionts, otherwise quit function.
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("please enter a password length between 8 and 128 characters.");
    return
  }
  // window.confirm that the user wants Lowercase characters and an if statment that checks only for yes and ignores no answers then concatinates the total array with the lowerCase array if confirmed.
  var isLowerCase = window.confirm("do you want your password to utilize lower case letters? Click OK for yes or Cancel for no.");
  if (isLowerCase === true) {
    total = total.concat(lowerCase);
  }
  // window.confirm that the user wants uppercase characters and an if statment that checks only for yes and ignores no answers then concatinates the total array with the uppercase array if confirmed.
  var isUpperCase = window.confirm("do you want your password to utilize upper case letters? Click OK for yes or Cancel for no.");
  if (isUpperCase === true) {
    total = total.concat(upperCase);
  }
  // window.confirm that the user wants special characters and an if statment that checks only for yes and ignores no answers then concatinates the total array with the spcial characters array if confirmed.
  var isSpecialChar = window.confirm("do you want your password to utilize special characters? Click OK for yes or Cancel for no.");
  if (isSpecialChar === true) {
    total = total.concat(specialChar);
  }
  // window.confirm that the user wants numbers characters and an if statment that checks only for yes and ignores no answers then concatinates the total array with the numbers array if confirmed.
  var isNumbers = window.confirm("do you want your password to utilize numbers? Click OK for yes or Cancel for no.");
  if (isNumbers === true) {
    total = total.concat(numbers);
  }
  // variable for the final password which returns a string, via the empty quotes, which is then populated on the page. The for loop here takes the password length applied by the user and iterates through it while taking the newly populated total array and findes random indices via the Math.floor(Math.random()) methods, the result of which is multiplied by the lenght of the total array in order to return the final password as a string rather than an array.
  var finalPassword = ""
  for (var i = 0; i < passwordLength; i++) {
    finalPassword += total[Math.floor(Math.random() * total.length)]
  }
  if(isLowerCase == false && isUpperCase == false && isSpecialChar == false && isNumbers == false){
    window.alert("Please choose at least one character type.")
    return
  }
  return finalPassword;

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);