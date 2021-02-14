/*
Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
    //let mainArr=[];
   // mainArr=arr2.slice(0);
    for(let i =arr1.length-1; i>-1;i--){
        arr2.splice(n,0,arr1[i]);
    }
    return console.log(arr2);
  }
  
  frankenSplice([1, 2, 3], [4, 5], 1);
  
  // 1# input: [1, 2, 3], [4, 5], 1
  // 1# output: [4, 1, 2, 3, 5]

  // 2# input:  ["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2
  // 2# output: ["head", "shoulders", "claw", "tentacle", "knees", "toes"]

