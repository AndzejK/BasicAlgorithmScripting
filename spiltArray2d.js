/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

let anArray = [0, 1, 2, 3, 4, 5, 6];

function chunkArrayInGroups(arr, size) {
    // My solution //
    // 1# I want to find the number,which says how many groups I can literally, the array length divided into second argument (thr gropus of the length of size);
    /*
    let possbileGroups = Math.ceil(arr.length/size); //the number of 2-dimensional arrays
    let mainArr=[];
    for(let i=0;i<possbileGroups;i++){
        let twoDimensArr=[];
        for(let j=0;j<size;j++){
            if(arr[j]!=undefined){
                twoDimensArr.push(arr[j]) 
            }
        }
        mainArr.push(twoDimensArr);
        arr.splice(0,size);
    }

    return console.log(mainArr);
    */
        // Solution from freecodecamp.org
   let arrForStoringChunks=[]; 
   for(let i=0;i<arr.length;i+=size){
     
    arrForStoringChunks.push(arr.slice(i,i+size));
   }
   return console.log(arrForStoringChunks);
  }
  
  chunkArrayInGroups(anArray, 3);