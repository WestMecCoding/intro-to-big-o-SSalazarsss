// create a function that will take a argument 
//that stands foe the maximum interger you
// want to count to

// initiate a starting value from the total sum 

//run a for loop that starts at the first number
//and counts up to the maximum
//sun the numbers in loop

//return the final total sum

//log the final output

function linearSum(n) {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;

    }
    return sum;
}

console.log(linearSum(100));