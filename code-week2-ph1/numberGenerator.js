function logNumbersBetweenPrompt() {
      // Prompt the user to enter the first number
      let num1 = parseInt(prompt("Enter the first number:"));
    
      // Check if num1 is a valid number
      if (isNaN(num1)) {
        console.log("Please enter a valid number for num1.");
        return;
      }
    
      // Prompt the user to enter the second number
      let num2 = parseInt(prompt("Enter the second number:"));
    
      // Check if num2 is a valid number
      if (isNaN(num2)) {
        console.log("Please enter a valid number for num2.");
        return;
      }
      if (num1 > num2) {
        // Swap values depending on the greater number 
        let temp = num1;
        num1 = num2;
        num2 = temp;
      }
    
      // The loop will work regardless of which number is greater
      for (let i = num1; i <= num2; i++) {
        console.log(i);
      }
    }
    
    // Call the function to log numbers between user-provided values
    logNumbersBetweenPrompt();
    