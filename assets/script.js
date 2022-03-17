// List of arrays for optional password characters.
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar = ["\!", "\#", "\$", "\%", "\&", "\'", "\(", "\)", "\*", "\+", "\,", "\-", "\.", "\/", "\:", "\;", "\<", "\=", "\>", "\?", "\@", "\[", "\\", "\]", "\^", "\_", "\`", "\{", "\|", "\}", "\~"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var useChar = [];

// List of variables to prompt the user for input to their desired password characters and length.
var prompt1 = window.prompt("Do you wish to include Lower Case Letters? Type Y or N");
var prompt2 = window.prompt("Do you wish to include Upper Case Letters? Type Y or N");
var prompt3 = window.prompt("Do you wish to include Numbers? Type Y or N");
var prompt4 = window.prompt("Do you wish to include Special Characters? Type Y or N");
var prompt5 = window.prompt("How many characters should your password be? Please enter a number between 8 and 128.")
var passwordLength;

if(prompt1.toLowerCase() == "y") {
  useChar = useChar.concat(lowerCase);
  console.log(useChar);
}

if(prompt2.toLowerCase() == "y") {
  useChar = useChar.concat(upperCase);
  console.log(useChar);
}

if(prompt3.toLowerCase() == "y") {
  useChar = useChar.concat(numbers);
  console.log(useChar);
}

if(prompt4.toLowerCase() == "y") {
  useChar = useChar.concat(specialChar);
  console.log(useChar);
}

// Create a function that captures the user input from prompt5 and sets the password length according to that number of charchters between 8 and 128.


//Create a function to select the characters from the userChar array
function generatePassword() {

// iterate through userinput array
for (i = 0; i < useChar.length; i++) {

}

// Create a function to listen for a button click on the Generate Password button, then collect the user input as the questions are answered.

  // Add event listener to generate button
  

  // create a statement that will generate a random string using the variables created above your generatePassword function. Hint I think you can use Math.random() here. Start by generating passwords with all variables and then slowly omit variables one at a time. 

  //adjust statement to request a length from the user that is between 8 and 128 characters long.

  //adjust the statement to omit numbers from the generated string.

  //adjust the statement to omit Special Characters from the string.

  //adjust the statement to omit Upper Case letters from the string.

  //adjust the statement to omit Lower Case Letters from the string.


  /*var passwordLength = window.prompt("How long should your password be? Passwords can be any length between 8 and 128 characters.");
  if(passwordLength.length <8 || passwordLength.length >128) {
    window.alert("please enter a password length between 8 and 128 characters.");
    console.log(passwordLength.length);
  }*/

  var isLowerCase = window.confirm("do you want your password to utilize lower case letters? Click OK for yes or Cancel for no.");
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
  ////var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  //function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //  passwordText.value = password;
  // console.log(password.length);

}

// var generateBtn = document.getElementById('generate')
// generateBtn.addEventListener("click", function(userInput) {
//   console.log(userInput);
// });

