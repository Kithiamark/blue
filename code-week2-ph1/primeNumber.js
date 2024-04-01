function logNumbersBetween(num1, num2) {
  let i = [];
    if (num1 > num2) {
      // Swap values depending on the greater number 
      let temp = num1;
      num1 = num2;
      num2 = temp;
    }
  
    // Loop from num1 (inclusive) to num2 (exclusive)
    for (let i = num1 + 1; i <= num2; i++) {
      console.log[i];
      // in this function we have to use symbols like remainder(%) and division(/).
    //in as for a to equal k it has to have a remainder of 0 only when divided by 1 or i
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
  
    }
  }
  // allows for input of numbers that log out on the comsole
    logNumbersBetween(1,10);
  // now we need to log primenumbers depending on their defination
  //a prime number is a number that is only divisible by one and itself
