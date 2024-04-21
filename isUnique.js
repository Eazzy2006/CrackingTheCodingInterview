
/* Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures? 
*/

let string = "algorithm"

 function isUnique (string) {
    
    let stringSplit = string.split("");

    for( let i = 0; i < stringSplit.length; i++ ){

        for(let j = i+1; j < stringSplit.length; j++){

            if( stringSplit[i] === stringSplit[j] ){
                return false
            } 

        }

    }
    return true
    
 }

let result = isUnique(string)
console.log(result)