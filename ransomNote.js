/* 
A ransom note can be formed by cutting words out of a magazine to form a new
sentence. How would you figure out if a ransom note (represented as a string) can be formed
from a given magazine (string)? 

Ransom Note: "I am the best"
Magazine: "The best way to learn is to practice and practice until you become the best at it. 
The more you practice, the better you become. So, if you want to be the best, keep practicing."


*/

let ransomNote = "I am the best"
let magazine = `The best way to learn is to practice and practice until you become the best at it. 
The more you practice, the better you become. So, if you want to be the best, keep practicing.`

function formRansomNote(){

    wordFreq = {}

    magazineSplit = magazine.split(" ")
    ransomNoteSplit = ransomNote.split(" ")

    for(let i = 0; i < magazineSplit.length; i++){

        if( !(magazineSplit[i] in wordFreq) ){
            
            wordFreq[magazineSplit[i]] = 1

        }else{
            wordFreq[magazineSplit[i]]++
        }

        for (let j = 0; j < ransomNoteSplit.length; j++) {

            if( ransomNoteSplit[i] in wordFreq || wordFreq[magazineSplit[i]] > 0){
    
                wordFreq[magazineSplit[i]]--
            } else{
                return false
            }
                
        }

    }

    return true;


}

console.log(formRansomNote())