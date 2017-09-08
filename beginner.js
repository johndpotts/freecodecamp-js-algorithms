//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
var divided = arr.length/size;
 var newArr = [];
  var count = 0;
  var upCount = size;
  for(i=0;i<divided;i++){
    newArr.push(arr.slice(count,upCount));
    count = count + size;
    upCount = upCount + size;
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

//Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
 let arr = str.split(" ");
 arr.sort(function(a,b){return(a.length<b.length);});
 
  
  return arr[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");function findLongestWord(str) {
  var longest = 0;
  var arr = str.split(" ");
  for (i=0;i<arr.length;i++){
    if (arr[i].length>longest){
      longest = arr[i].length;
    }
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

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


/*Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.*/
//done
function truncateString(str, num) {
 if (str.length>num)
 { if (num<4)
    {return str.slice(0,num) + "...";}
  else{
  var tr = str.slice(0,num-3);
    return tr+"...";
}
}
else{return str;}
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);
