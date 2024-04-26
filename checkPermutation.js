

/*  Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other. 

*/

function test(){

    let str1 = "abcd";
    let str1compare = "dcba";

    let str2 = "dsadsa";
    let str2compare = "dsadsad";


if(isPermutation(str2, str2compare)){
    return true
}else{
    return false
}

}

function isPermutation(str1, str2){

    let str1perm = str1.split('').sort().join()
    let str2perm = str2.split('').sort().join()

    return str1perm === str2perm

}


console.log(test())