//Get input from the user through the terminal
const prompt = require('prompt-sync')({ sigint: true });

//Clear the terninal screen
const clear = require('clear-screen');

//Create some global variables
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const row = 10;
const col = 10;

const verticalBound = row.col
const horizontalBound = col.row


let field = [[]];


function generateField() {

    for (let x = 0; x < row; x++) {
        field[x] = [];

        for (let y = 0; y < col; y++) {

            field[x][y] = fieldCharacter;
        }
        field[0][0] = pathCharacter; //Default Player Position when generating each field
    }
    print();
    
}

//map method is to loop through:
//(1) all the columns and join the elements with no space
//(2) all the row and join the elements with next line ('/n)

function print() {

    clear();

    const displayString = field.map(row => {
        return row.join('');
    }).join('\n');      /// \n is next line( line break)

    console.log(displayString);     //convert to string


}


//syntax error
function askInput() {

    const input = prompt('Enter a letter: ').toUpperCase();

    if (input = "u") {
        field[x][col - 1];
    }
    else if (input = "d") {
        field[x][col + 1];
    }
    else if (input = "r") {
        field[row + 1][y];
    }
    else if (inout = "l") {
        field[row - 1][y];
    }
    else {
        console.log("Invalid input. “Enter (u, d, l or r) to continue.")
    }
    field[row][col] = input;
    print();
}



// Not Finished
function startGame() {

    let isPlaying = true;

    while (isPlaying) {

        print();

        if (pathCharacter == hat) {

            console.log("Congrats, you found your hat!")
            isPlaying = false;
        }

        else if (!isinBounds()) {
            console.log("Out of bounds - Game End!")
        }
        else {
            askInput();
        }

    }
}


generateField();
askInput();






