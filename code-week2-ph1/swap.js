const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
});

// Function to swap the case of each character in a string
function swapCase(inputString) {
    let swappedString = '';
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else if (char === char.toLowerCase()) {
            swappedString += char.toUpperCase();
        } else {
            swappedString += char;  
            // For non-alphabetic characters
        }
    }
    return swappedString;
}

// Ask the user for input using readline
rl.question('Enter a string to swap the case: ', (inputStr) => {
    // Call the swapCase function with user input
    let outputStr = swapCase(inputStr);

    // Output the original and swapped strings
    console.log("Original: ", inputStr);
    console.log("Swapped: ", outputStr);

    // Close the readline interface
    rl.close();
});
