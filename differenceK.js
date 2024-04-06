/*
Given an array of distinct integer values, count the number of pairs of integers that
have difference k. For example, given the array { 1, 7, 5, 9, 2, 12, 3} and the difference
k = 2,there are four pairs with difference2: (1, 3), (3, 5), (5, 7), (7, 9).
*/

let array = [1, 7, 5, 9, 2, 12, 3]

function countPairs(arr,k){
  
  let count = 0;

  for( let i =0; i < arr.length; i++ ){
    for(let j = i+1; j < arr.length; j++){
      if( arr[i] - arr[j] === k || arr[j] - arr[i] === k ){
        count++
      }
    }
  }
  console.log(count)
  
}

countPairs(array, 2)