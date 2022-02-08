# Password Generator Starter Code
Code for html and css were given. JavaScript must be written by students.
## User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

### Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
<!-- A series of window.prompts seems the easiest route though its ugly. I had thought about trying to go the route of toggle switches in a pop up form that would be displayed after pushing the generate button. But this seemed a little advanced for me at the moment and time constraints required I do otherwise. But I really don't like the way this is going to look.-->
WHEN prompted for password criteria
THEN I select which criteria to include in the password
<!-- -->
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
<!-- I think this will require an if else statement. -->

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
<!-- I have four arrays set up for these that are populated with all of the possible characters. To be safe, I commented out the special characters. Knowing that some would break the code but not being sure about all of them, I opted to do this for all of them. -->
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

<!-- I believe this will require a series of if/else statements as well.-->
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

### Pseudocoding notes

Upon clicking on the provided "generate password" button I need a form to show up below it. 
<!-- To start with, in the html file, I added a <main> section to wrap around the given <div class="wrapper"> and a new <form> element. -->
Users will be able to click their password options using toggle switches for each of the listed prompts. 

They will also be told to enter a number between 8 and 128 for the length of their password. 

Upon setting their password criteria they will click on a second button that will generate their new ransomized passwor and display it in the original password text area that was provided in the code given to the class. 

I need a toggle switch for each of the following prompts, except for #1 which will need a text input area.

Toggle Switch Resources:
https://www.w3schools.com/howto/howto_css_switch.asp
https://www.delftstack.com/howto/javascript/javascript-toggle-button/




Prompt 1=  choose a length of at least 8 characters and no more than 128 characters
    Validation1 = total password character length. 
	Failsafe 1 = if number is <8 => throw error.
	Failsafe 2 = if number is >128 => throw error.
	Probably written as a for/ or while loop?
<!-- This prompt will be var characterLength = function() { var characterLength = window.prompt ("Pick a password length between 8 and 128 characters."); if (characterLength <8 || characterLength >128) {window.alert("Password length must be between 8 and 128 characters long")} )}  -->

Prompt 2 = whether or not to include lowercase
    Validation 2 = return is true or false
	Failsafe = default value = false; clicking changes false to true.

Prompt 3 = whether or not to include uppercase
    Validation 3 = return is true or false
	Failsafe = default value = false; clicking changes false to true.

Prompt 4 = whether or not to include integers
    Validation 4 = return is true or false
    Failsafe = default value = false; clicking changes false to true.

Prompt 5 = whether or not to include special characters
    Validation 5 = return is true or false
    Failsafe = default value = false; clicking changes false to true.

Failsafe = At least one of the toggle switches must be turned to the on position or else the user will be redirected to do so when they click on the submit button. 

After selecting their required criteria the user pushes the select button which hides the form, generates the password, and displays it in the provided text area. 




