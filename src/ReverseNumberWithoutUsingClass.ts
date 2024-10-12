import * as readline from 'readline'; // 1. Import the readline module

// 2. Define a function to reverse a number
function reverseNumber(num: number): number {
    let rev: number = 0; // Initialize rev to 0
    while (num !== 0) { // Start loop while num is not 0
        rev = rev * 10 + num % 10; // Append last digit of num to rev
        num = Math.floor(num / 10); // Remove last digit from num
    }
    return rev; // Return the reversed number
}

// 3. Define the main function to handle user input and output
function main(): void {
    const rl = readline.createInterface({ // Create readline interface
        input: process.stdin, // Set input to standard input
        output: process.stdout // Set output to standard output
    });

    rl.question("Enter a number: ", (input) => { // Prompt user for input
        const num: number = parseInt(input); // Parse the input to an integer
        const reversedNum: number = reverseNumber(num); // Call reverseNumber to reverse the number
        console.log(`Reverse number is: ${reversedNum}`); // Print the reversed number
        rl.close(); // Close the readline interface
    });
}

// 4. Call the main function to start execution
main();
