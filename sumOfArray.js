/**
 * Find Sum of all array's element using function
 * ----------------------------------------------------------------------
 * 1.declare an array
 * 2.send that array in a function
 * 3.add an element with 0 and update with each traversing 
 * 4. sum = sum + arr[i] 
 * 5. return the sum of that array and console it.
 */
function sumOfArray(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
 let arr = [3,1,3,2,1];
 let result = sumOfArray(arr);
 console.log(result);
