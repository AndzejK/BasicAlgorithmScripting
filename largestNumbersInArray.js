let someArr=[[4, 5, 1, 3],[21212,232,1211212],[1,2]];
  
  function largestOfFour(arr) {
    let maxNumArr=[];
    let biggestNumber=0;
    
    for(let i=0;i<arr.length;i++){
        let initialIndex=0;
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][initialIndex]>arr[i][j]){
                biggestNumber=arr[i][initialIndex];
            } else /*if(arr[i][initialIndex]<arr[i][j])*/{
                biggestNumber=arr[i][j];
                initialIndex=j;
            }
        }
        
        maxNumArr.push(biggestNumber);
    }
    return console.log(maxNumArr);
  }
  
  largestOfFour(someArr);