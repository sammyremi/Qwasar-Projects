# Welcome to My Mastermind
Welcome to my Mastermind game where a user get to guess the 4 secret code generated randomly or passed in from command line

## Task
The problem of this task are handling flags passed in "-c -t",
Generating random number of four code for the player of the game
also handling the user attempt (how many times they want continue playing the game)
showing the user well placed and misplaced code.
telling the user congratulation when they get the answer right.
## Description
The problems where solved by handling user flags with argc and argv
Generating random number with the rand() function
reading user input from the standard input with read()
checking user code against the generated code or secret code passed in by traversing through both codes
also printing back the user placed and misplaced items.
also using atoi to handle the attempt times from argv.

## Installation
This project can be install with gcc and also executing the binary file and object file
## Usage
When using this program you can enter the -c to specify the code ypou want to enter
-t to specify the number of attempt you want.
if nothing was specify the program will generate random code for you.
```
./my_project -c (this handles the code) -t (this handles the attempt number).
```

### The Core Team


<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px'></span>
