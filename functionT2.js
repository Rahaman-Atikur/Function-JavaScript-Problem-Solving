/**
 * Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
---------------------------------------------------------------------------------------------------------
1. declare a variable
2.send it to a function
3.check the number , odd then return number * 2 
4. if even return number / 2
 */

let number;
function mulOrDev(number){
    if(number%2==1){
        return number*2;
    }
    else{
        return number/2;
    }
}
console.log(mulOrDev(2));