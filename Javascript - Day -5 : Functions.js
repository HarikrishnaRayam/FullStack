// do the below programs in anonymous function & IIFE
// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array
// Return median of two sorted arrays of same size
// Remove duplicates from an array
// Rotate an array by k times
/*https://medium.com/@reach2arunprakash/guvi-zen-class-javascript-warm-up-programming-problems-15973c74b87f*/
// Do the below programs in arrow functions
// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array



// Print odd numbers in an array in anonymous function
var arr = [1,2,3,4,5,6,7,8,9]

var oddNumbers = []
const findOdd = function(){
  for(i = 0; i < arr.length; i++){
    if(arr[i]%2 !== 0){
       oddNumbers.push(arr[i]);
    }
  }
  return;
}

findOdd(arr);
console.log(oddNumbers);

// Print odd numbers in an array in IIFE

var arr = [1,2,3,4,5,6,7,8]

var oddNumbers = []
const findOdd = (function(){
  for(i = 0; i < arr.length; i++){
    if(arr[i]%2 !== 0){
       oddNumbers.push(arr[i]);
    }
  }
  return;
})();

// findOdd(arr);
console.log(oddNumbers);




  
  
