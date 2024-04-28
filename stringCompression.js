/*

String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z). 

*/

function compress(str){

    let count = {}
    compressedString = ''

    for( let i = 0; i < str.length; i++ ){

        let char = str[i]

        if( count[char]) {
            count[char]++
        }else{
            count[char] = 1
        }
    }

        for(let char in count){
            compressedString += char + count[char]
        }
        
    if (compressedString.length < str.length) {
        return compressedString;
    } else {
        return str;
    }

}

console.log(compress("aabcccccaaa"))