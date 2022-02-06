// Assignment code here
// List of arrays for optional password characters; an auto-generator (like I saw on Traversy Media's youtube) for these may be more ellegent but this was quicker for me for my first JavaScript project.
let lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let specialChar=["\!", "\#", "\$", "\%", "\&", "\'", "\(", "\)", "\*", "\+", "\,", "\-", "\.", "\/","\:", "\;", "\<", "\=", "\>","\?", "\@","\[", "\\","\]", "\^", "\_", "\`","\{", "\|","\}", "\~"]
let numbers=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let passwordLength=""

//
function passwordLength {
 

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
