/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array */

let anArr=["flooor", "foor"];

function mutation(arr) {
    // Solution #1;
        //Separate each letter and put into another array;
    let arrIndex0=[];
    let arrIndex1=[];
    let tempRes="";
    for(let i=0;i<arr[0].length;i++){
        arrIndex0.push(arr[0][i].toLowerCase()); 
    }
    for(let i=0;i<arr[1].length;i++){
        arrIndex1.push(arr[1][i].toLowerCase()); 
       
    }
    for (let i=0;arrIndex0.length>i;i++){
        for(let j=0;arrIndex1.length>j;j++){
            if(arrIndex0[i]==arrIndex1[j]){
                //Yes I have that letter
                tempRes+=arrIndex0[i];
            }
        }
        
    } if(tempRes.length==arrIndex1.length){
        return console.log(true);
    }
    console.log(arrIndex0,arrIndex1)
    console.log(`tem res - ${tempRes}`);
    return console.log(false);
  }
  
  mutation(anArr);