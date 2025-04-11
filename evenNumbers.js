/**
 * Find even number from an array using function
 * 
 * 1. declare array
 * 2. send that array to a function
 * 3. loop through each element and check is it even?
 * 4. even then push in a new array and return that array and console
 * 
 */

function evenFromArray(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] % 2 === 0) {
            resultArray.push(myArray[i]);
        }
    }
    return resultArray;
}
let myArray = [10, 20, 30, 4, 7];
let resultArray = [];
console.log(evenFromArray(myArray));


