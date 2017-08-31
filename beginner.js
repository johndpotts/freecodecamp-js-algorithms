

//Return true if the given string is a palindrome. Otherwise, return false.

/*A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".*/


function palindrome(str){
  straightstring =str.toLowerCase().replace(/\W|_/g,"");
  return straightstring == straightstring.split("").reverse().join("");
}


palindrome("eye");

/*Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1). */


function getIndexToIns(arr,value){
  arr.push(value);
  arr.sort(function(a,b){return a-b;});
  return arr.indexOf(value);
           
}
  
getIndexToIns([40, 60], 50);
