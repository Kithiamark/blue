function logNumbersBetween(num1, num2) {
    // this function will hold the comand that logs the numbers between specified values
    if (num1 > num2) {
      // Swap values depending on the greater number 
      let temp = num1;
      num1 = num2;
      num2 = temp;
    }
  
    // we have to create a loop that runs untill the disired valure is obtained
    for (let i = num1 ; i <= num2; i++) {
      console.log(i);
  
    }
  }
  // allows for input of numbers that log out on the comsole
    logNumbersBetween(1,10);
