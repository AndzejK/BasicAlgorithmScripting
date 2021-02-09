function confirmEnding(str, target) {
    let lastValueInOriginalStr="";
    let result=false;
    for(i=str.length-target.length;i<str.length;i++){
        lastValueInOriginalStr+=str[i];
    }
    if(lastValueInOriginalStr==target){
        result=true;
    } console.log(result);
    return result;
  }
  
  confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
