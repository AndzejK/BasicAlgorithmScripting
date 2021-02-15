/*
Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

All elements from the first array should be added to the second array in their original order.
*/

function frankenSplice(arr1, arr2, n) {
    //1st solution;
    let mainArr=[...arr2]; //good reminder that I can use spread operator("..."), to copy all value in from array, however, it copies the the obly first lvl of arrat, that means if we have to 2 dementional array it won't copy nested array values
    mainArr.splice(n,0,...arr1);
    return mainArr;
    
    /* 
        //2nd solution 
    let mainArr=[];
   mainArr=arr2.slice(0);
    for(let i =arr1.length-1; i>-1;i--){
        mainArr.splice(n,0,arr1[i]);
    }
    return console.log(mainArr);
     */
  }
 
  frankenSplice([1, 2, 3], [4, 5,6], 2);

  // 1# input: [1, 2, 3], [4, 5], 1
  // 1# output: [4, 1, 2, 3, 5]

  // 2# input:  ["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2
  // 2# output: ["head", "shoulders", "claw", "tentacle", "knees", "toes"]

