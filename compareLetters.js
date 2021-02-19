/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array */

let anArr=["tes1111tT", "Te1st"];

function mutation(arr) {
  /* What I've done.
    // Solution #1;
        //Separate each letter and put into another array;
    let arrIndex0=[];
    let arrIndex1=[];
    let shrinkedArrIndex1=[];
    let matchedLetter=[];
    let finalMatch=[];
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
                matchedLetter.push(arrIndex0[i]);
            }
        }
    }   
    for(let i=0; matchedLetter.length>i;i++){
        if(matchedLetter[i]!=matchedLetter[i+1]) {
            finalMatch.push(matchedLetter[i]);
        }
    }
    for (let i=0;arrIndex1.length>i; i++){
        if(arrIndex1[i]!=arrIndex1[i+1]){
            shrinkedArrIndex1.push(arrIndex1[i]);
        }
    }
    if(finalMatch.length==shrinkedArrIndex1.length){
      return console.log(true);
        }
    //console.log(arrIndex0,arrIndex1)
   // console.log(`Matched letters => ${matchedLetter}`);
    //console.log(`Final matched letters => ${finalMatch}`);
    return console.log(false);
    */

    // What's like proper solution :(
            // Solution #2;
    // #1: Extrat a word from the array into separate variable as a string and make it lowercase;
        let mainString=arr[0].toLowerCase();
        let checkString=arr[1].toLowerCase();
        for(let i=0; i<checkString.length;i++){
    // #2: As soon as one character does not MATCH returns FALSE
            if(mainString.indexOf(checkString[i])<0) return console.log(false);
        }
        return console.log(true);
  }
  
  mutation(anArr);