/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

let anArray = [1,2,3,4,5,6];

function chunkArrayInGroups(arr, size) {
    // 1# I want to find the number,which says how many groups I can literally, the array length divided into second argument (thr gropus of the length of size);
    let possbileGroups = Math.round(arr.length/size); //the number of 2-dimensional arrays
    let mainArr=[];
    let twoDimensArr=[];
    for(let i=0;i<possbileGroups;i++){
        for(let j=0;j<size;j++){
            twoDimensArr.push(arr[j])
        }
        mainArr.push(twoDimensArr);
    }

    return console.log(mainArr);
  }
  
  chunkArrayInGroups(anArray, 2);