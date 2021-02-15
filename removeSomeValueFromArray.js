/*
    Task: Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

let someArr=[7, "ate", "", false, 9];
function bouncer (arr){
    /*
        The plan to execute:
        1. create a new arr and add coverted  Boolean values to it;
        2. Go through the new arr and if it's false delete it;
        3. Save result in a new arr;
    */
   let arrWithBooleanValues=[];
   let modifiedArr=[];
   
   for(let i=0;i<arr.length;i++){
      arrWithBooleanValues.push(Boolean(arr[i]));
   } 
   for(let i=0; i<arr.length;i++){
       if(arrWithBooleanValues[i]==true){
           
       } else{
        arr.splice(i,1);
       }
   }
   
   console.log(arr);
    return console.log(arrWithBooleanValues)
}

bouncer(someArr)