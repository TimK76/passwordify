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
<!-- Used window.confirm messages for this -->
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
<!-- I used a window.prompt for this and then an if statement to make sure an appropriate length was input. -->

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
<!-- I have four arrays set up for these that are populated with all of the possible characters. To be safe, I commented out the special characters. Knowing that some would break the code but not being sure about all of them, I opted to do this for all of them. -->
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
<!-- For this I wrote an if statement that checked if all of the character types == false and, if so, prompted the user to select at least one character type..-->
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page 




