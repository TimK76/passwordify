// Assignment code here
// List of arrays for optional password characters.
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar = ["\!", "\#", "\$", "\%", "\&", "\'", "\(", "\)", "\*", "\+", "\,", "\-", "\.", "\/","\:", "\;", "\<", "\=", "\>","\?", "\@","\[", "\\","\]", "\^", "\_", "\`","\{", "\|","\}", "\~"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]


function generatePassword(/*isLowerCase, isUpperCase, isNumbers, isSpecialChar*/) {
  // create a statement that will generate a random string using the variables created above your generatePassword function. Hint I think you can use Math.random() here. Start by generating passwords with all variables and then slowly omit variables one at a time. 
var total = lowerCase + "," + upperCase + "," + numbers + "," + specialChar;
  console.log(total);
  //adjust statement to request a length from the user that is between 8 and 128 characters long.

  //adjust the statement to omit numbers from the generated string.

  //adjust the statement to omit Special Characters from the string. And so forth with Upper Case and Lower Case letters.
  
  /*var passwordLength = window.prompt("How long should your password be? Passwords can be any length between 8 and 128 characters.");
  if(passwordLength.length <8 || passwordLength.length >128) {
    window.alert("please enter a password length between 8 and 128 characters.");
    console.log(passwordLength.length);
  }*/
  
  var isLowerCase=window.confirm("do you want your password to utilize lower case letters? Click OK for yes or Cancel for no.");
  if (isLowerCase === false) {
    var total = upperCase + "," + numbers + "," + specialChar;
  console.log(total);
  }

  // var isUpperCase=window.confirm("do you want your password to utilize upper case letters? Click OK for yes or Cancel for no.");
  // if (isUpperCase === false) {
  //   var total = lowerCase + "," + numbers + "," + specialChar;
  // console.log(total);
  // } else if (isLowerCase === false && isUpperCase === false) {
  //   var total = numbers + "," + specialChar;
  // }

  // var isSpecialChar=window.confirm("do you want your password to utilize special characters? Click OK for yes or Cancel for no.");
  // if (isSpecialChar === false) {
  //   var total = lowerCase + "," + uppperCase + "," + numbers;
  // console.log(total);
  // } else if (isLowerCase === false && isUpperCase === false && specialChar === false) {
  //   var total = numbers;
  // }
  // var isNumbers=window.confirm("do you want your password to utilize numbers? Click OK for yes or Cancel for no.");
  // if (isNumbers === false) {
  //   var total = lowerCase + "," + uppperCase + "," + specialChar;
  // console.log(total);
  // } else if (isLowerCase === false && isUpperCase === false && specialChar === false && numbers === false) {
  //   windows.prompt("you must select at least one character type")
  // }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // console.log(password.length);
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}