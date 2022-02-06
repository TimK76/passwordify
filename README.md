# Password Generator Starter Code

## Pseudocoding notes

Upon clicking on the provided "generate password" button I need a form to show up below it. Users will be able to click their password options using toggle switches for each of the listed prompts. They will also be told to enter a number between 8 and 128 for the length of their password. Upon setting their password criteria they will click on a second button that will generate their new ransomized passwor and display it in the original password text area that was provided in the code given to the class. 

I need an event listener for second button.
I need a toggle switch for each of the following prompts, except for #1 which will need a text input area.

Toggle Switch Resources:
https://www.w3schools.com/howto/howto_css_switch.asp
https://www.delftstack.com/howto/javascript/javascript-toggle-button/




Prompt 1=  choose a length of at least 8 characters and no more than 128 characters
    Validation1 = total password character length. 
	Failsafe 1 = if number is <8 => throw error.
	Failsafe 2 = if number is >128 => throw error.
	Probably written as a for/ or while loop?

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




