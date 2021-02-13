//toUpperCase();
//toLowerCase();
let someTxt="I'm a lit-tle tea pot";

function titleCase(str) {
    let allLettersLowerCase="";
    let regMachWord=/\w*['-]?\w*\S/ig; // don't know how to exclude some symbols, for intance if we're gonna have a comma.
    let arrSepWords=[];
    let transformedSentence="";
    allLettersLowerCase=str.toLowerCase();
    arrSepWords=allLettersLowerCase.match(regMachWord);
    let getLastItemInArr=arrSepWords[arrSepWords.length-1];
    let lastIndex=arrSepWords.indexOf(getLastItemInArr);
   for(let i=0;i<arrSepWords.length;i++){
        transformedSentence+=arrSepWords[i].slice(0,1).toUpperCase();
        transformedSentence+=arrSepWords[i].slice(1,arrSepWords[i].length);
            if(lastIndex!=i){
             transformedSentence+=" ";
            }
       }
    return console.log(transformedSentence);
  }
  
  titleCase(someTxt)