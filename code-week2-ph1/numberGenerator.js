const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function logNumbersBetween(num1, num2) {
    // Check if num1 is greater than num2
    if (num1 > num2) {
        // Swap values if num1 is greater
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
  
    // Loop through the numbers between num1 and num2 (inclusive)
    for (let i = num1; i <= num2; i++) {
        console.log(i);
    }
}

// Ask the user for input using readline
rl.question('Enter the first number: ', (firstNum) => {
    rl.question('Enter the second number: ', (secondNum) => {
        // Convert input to numbers
        let num1 = parseInt(firstNum);
        let num2 = parseInt(secondNum);

        // Call the function with the provided numbers
        logNumbersBetween(num1, num2);

        // Close the readline interface
        rl.close();
    });
});
