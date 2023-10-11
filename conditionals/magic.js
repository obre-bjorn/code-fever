// Step 1
const userName = '';

// Step 2
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Step 3
const userQuestion = 'What will my future hold?';

// Step 4
console.log(`${userName ? `${userName} asks: ` : ''}${userQuestion}`);

// Step 5
const randomNumber = Math.floor(Math.random() * 8);

// Step 6
let eightBall = '';

// Step 7
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
}

// Step 8
console.log(`Magic Eight Ball says: ${eightBall}`);

// Step 9
// Run the program multiple times to see random results in the console.
