/**
 * Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd.
----------------------------------------------------------------------------------------
1. declare a variable
2. pass it to function
3.check it even then print even or odd 
 */
let value = 10;
function odd_even(value) {
    if (value % 2 == 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}
odd_even(value);