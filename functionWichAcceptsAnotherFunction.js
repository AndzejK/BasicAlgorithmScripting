function findElement(arr, func) {
    let num = undefined;
    for(let i=0;i<arr.length;i++){
        if(func(arr[i])==true){
            num=arr[i];
            i=arr.length;
        }
    }
    return console.log(num);
  }
  
  findElement([1, 4, 3 ,2, 5], num => num % 2 === 0);
                          