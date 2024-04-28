/*
String Rotation: Assume you have a method isSubstring which checks if one word is a substring
of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one
call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat"). 
*/

function isSubstring(s1, s2){

    let string1 = s1.split('').sort().join()
    let string2 = s2.split('').sort().join()

    if(string1 === string2){
        return true
    }

    return false

}

let s1 = "waterbottle"
let s2 = "erbottlewat"

console.log(isSubstring(s1, s2))



