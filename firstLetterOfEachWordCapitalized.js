//toUpperCase();
//toLowerCase();
let someTxt="I'm a little tea pot";

function titleCase(str) {
    let allLettersLowerCase="";
    let regMachWord=/\w*\S/ig;
    let arrSepWords=[];
    let transformedSentence="";
    allLettersLowerCase=str.toLowerCase();
    arrSepWords=allLettersLowerCase.match(regMachWord);
   for(let i=0;i<arrSepWords.length;i++){
        transformedSentence+=arrSepWords[i].slice(0,1).toUpperCase();
        transformedSentence+=arrSepWords[i].slice(1,arrSepWords[i].length);
        if(arrSepWords[arrSepWords.length]!=arrSepWords[i]){
            transformedSentence+=" ";
        }
        
       }
    return console.log(transformedSentence);
  }
  
  titleCase(someTxt)