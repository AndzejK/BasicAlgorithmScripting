function repeatStringNumTimes (str,num){
    let count="";
    let i=0;
    if(num>-1){
  while(num>i){
      count+=str;
      i++;}
}//console.log(count);
return count;
}
let oringalString="*";
repeatStringNumTimes(oringalString,-1);