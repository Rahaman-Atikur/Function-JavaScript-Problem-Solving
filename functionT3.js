/**
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
------------------------------------------------------------------------------------------
1.declare an array
2.send it and its size to a function make_avg() 
3.loop through this element and make sum 
4. return  sum/size 
 */

let arr =[1,2,3,4];
let size = 4;
function make_avg(arr,size){
    let sum =0;
    for(let i=0;i<=size;i++){
        sum+=i;
    }
    return sum/size;
}
console.log(make_avg([1,2,3,4],4));