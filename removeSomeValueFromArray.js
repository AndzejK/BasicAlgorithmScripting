/*
    Task: Remove all falsy values from an array.
    Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

let someArr=[false, "I'm a big guy", null, 0, NaN, undefined, ""];
function bouncer (arr){
    /*
        The plan to execute:
        1. create a new arr and add coverted  Boolean values to it;
        2. Go through the new arr and if it's false delete it;
        3. Save result in a new arr;
    */
   let arrWithBooleanValues=[];
   let modifiedArr=[];
   //Using Boolean method to convert all items into boolean values;
   for(let i=0;i<arr.length;i++){
      //arrWithBooleanValues.push(Boolean(arr[i]));
      if(arr[i]){ //
        modifiedArr.push(arr[i]);
       } /*else{
        modifiedArr[i]='delete me please!!';
   } */
   }
   
   //console.log(arr);
    //console.log(modifiedArr);
    return console.log(modifiedArr)
}

bouncer(someArr)