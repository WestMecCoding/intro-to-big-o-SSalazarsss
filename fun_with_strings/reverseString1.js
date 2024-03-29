//inizialize a variable called someStr to some string of your choice.
//create a named function that takes an argument 'str'
//in the function reverse 'str'
//return 'str'
//outside of the function log the function and someStr

//what we learned: 
// let someString = "hello world";

let someStr = "hello world";

function reverseString(str) {
   str = str.split("").reverse().join("");
    // reverse str here then return
    return str;
}

console.log(reverseString(someStr));