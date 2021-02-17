/* TASK:
        Return the lowest index at which a value should be inserted 
        into an array once it has been sorted. 
        The returned value should be a number.
*/
let numArr=[2, 5, 10];

function getIndexToIns(arr,num) {
    let sortedArr=[];
    let copiedArr=arr.slice();
    let lowestNum=0;
    let lowestIndex=0;
    // ##START## This part sorts the array out in ascending order;
    for(let j=0;j<copiedArr.length;j++){
        lowestNum=arr[j];
         for(let i=0; i<arr.length;i++){
            if(lowestNum<arr[i]){
                lowestNum=lowestNum;
            }else{
                lowestNum=arr[i];
            } 
        }   
        sortedArr.push(lowestNum); //in order to get descending order just replace push() method into unshift method;
        arr.splice(arr.indexOf(lowestNum),1);
    }
    // ##END## This part sorts the array out in ascending order;
        for (let i=0;i<sortedArr.length;i++){
            if(num<sortedArr[i]){
                lowestIndex=sortedArr.indexOf(sortedArr[i])
                break;
            }else if(num==sortedArr[i]){
                lowestIndex=sortedArr.indexOf(sortedArr[i])
                break;
            } else {
                lowestIndex=sortedArr.indexOf(sortedArr[sortedArr.length-1])+1;
            }
        }
          console.log(sortedArr);
    return console.log(lowestIndex);
  }
  
  getIndexToIns(numArr,15);