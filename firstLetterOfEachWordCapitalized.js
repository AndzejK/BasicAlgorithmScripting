//toUpperCase();
//toLowerCase();
let someTxt="sHoRt AnD sToUt tesT";

function titleCase(str) {
    let allLettersLowerCase="";
    let regMachWord=/\w*\S/ig;
    let arrSepWords=[];
    let transformedSentence="";
    let transformedSentenceArr=[];
    allLettersLowerCase=str.toLowerCase();
    arrSepWords=allLettersLowerCase.match(regMachWord);
   for(let i=0;i<arrSepWords.length;i++){
       for(let j=0;j<arrSepWords[i].length;j++){
           if(arrSepWords[i][0]==arrSepWords[i][j]){
            transformedSentence+=arrSepWords[i][j].toUpperCase();
           }else if(arrSepWords[i][j]==arrSepWords[i][arrSepWords[i].length]){
            transformedSentence+=" ";
           }
           else {
            transformedSentence+=arrSepWords[i][j];
           }
       }
    }
    console.log(transformedSentence);  
    console.log(arrSepWords);
    return console.log(allLettersLowerCase);
  }
  
  titleCase(someTxt)