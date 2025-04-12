/**
 * Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
--------------------------------------------------------------------------------------
1. declare a string
2. send it to  count_zero()
3. declare variable that will count
4.loop through string length
5. str[i]==0 then  count++

 */

function count_zero(str) {
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            cnt++;
        }
    }
    return cnt;
}
let str = '00010';
console.log(count_zero(str));