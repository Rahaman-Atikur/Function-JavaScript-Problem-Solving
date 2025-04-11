/**
 * Find A string size is even or odd
 * -----------------------------------------------------------------------
 * 1. Declare a string
 * 2. send that string in a function
 * 3. check the string size
 * 4. check is it even or odd
 * 5. if even tell even or odd
 */
function stringSizeEvenOrOdd(str) {
    let stringSize = str.length;
    if (stringSize % 2 == 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}

let str = 'Bangladesh';
stringSizeEvenOrOdd(str);