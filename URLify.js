/* 
URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string.

EXAMPLE
Input: "Mr John Smith "
Output: "Mr%20John%20Smith%"
*/

function URLify (str) {

     let  str1 = str.replace(/\s/g, "20%");

       return str1

}

let string = "Mr John Smith ";

console.log(URLify(string))