// question no:1 Write a function called addNumbers that takes two numbers as parameters and returns their sum.

// function addNumbers( a, b){
//     sum = 0;
// return sum = a+b; 
// }
// console.log(addNumbers(5,7));

// question no:2  Write a function called sumUpToN that takes a number n and returns the sum of all numbers from 1 to n. Use a loop. 

// function sumUpToN(n){
//     sum = 0;
//     for( let i =0; i <= n; i++ ){
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log( sumUpToN(8) );

// questions no 3:Write a function called sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

// let array = [5,8,9]
// function sumArray(a){
//     sum  = 0;
//     for( let i = 0;i< a.length; i++ ){
//         sum = sum + array[i]
//     }
//     return sum
// }
// console.log( sumArray( array ) );

// question no:4  Write a function called countEvenNumbers that takes an array of numbers as a parameter and returns the count of even numbers in the array.

// let array = [1,2,3,4,5,6]
// sum = 0;

// function countEvenNumbers(a){
//     for( let i=0; i<a.length; i++ ){
//         if( a[i] % 2 ===0 ){
//             sum = sum+ a[i];
//         }
// }
//     return sum ;  
// }
// console.log( countEvenNumbers( array ) );

// question no:5 Write a function called stringLength that takes a string as a parameter and returns the length of the string.

let string = "bangladesh";

let lengthofstring = 0;

function stringLength(str){
    lengthofstring = str.length;
    return  lengthofstring 
}
console.log( stringLength( string ) );
