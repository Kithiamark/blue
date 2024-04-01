// we need to provide a function to let the arguement in the function to be passed whenever the function is called
function swapCase(input) {
// we use let to asin an empty array that will be filled by the users input
    let charachters = [];
    // the for loop is needed to ensure that the program runs untill the condition is met
    for (let k = 0;k< input.length;k++) {
        let sentence = input[k];
        // by letting k as the input will call the loop
        // therefore we'll need an if else statement
        if (sentence === sentence.toLowerCase()){
        // using .push lets the array to be altered without adding to it
        charachters.push(sentence.toUpperCase())}
        else if (sentence === sentence.toUpperCase()){
            charachters.push(sentence.toLowerCase())
        }
        else {charachters.push(sentence)}
    }
// we have to return a combination of the charachters code by invoking the charachter
//combining all the functions is only possible by the join method
    return charachters.join()
}
