let sentence="The police officer said that he had placed the man under arrest and that a scuffle had ensued";

function findLongestWordLength(str) {
    let regFindWord=/\w*\S/ig;
    let arrSeperateWords=[];
    let arrLengthEachWord=[];
    let theFirstIndex=0;
    let result=0;
        /* Find the seperated words */
    arrSeperateWords=str.match(regFindWord);
   // console.log(arrSeperateWords);
    
    for(let i=0; i<arrSeperateWords.length;i++){
        arrLengthEachWord.push(arrSeperateWords[i].length)
    }
    
        for(let j=arrLengthEachWord.length-1; j>-1; j--){
           if(arrLengthEachWord[theFirstIndex]>arrLengthEachWord[j]){
               result=`The longest word is ==> ${arrSeperateWords[theFirstIndex]} <== and its length is ==> ${arrLengthEachWord[theFirstIndex]} <== `;
            } 
             else /*if(arrLengthEachWord[j]>arrLengthEachWord[theFirstIndex])*/{
                theFirstIndex=j;
                result=`The longest word is ==> ${arrSeperateWords[theFirstIndex]} <== and its length is ==> ${arrLengthEachWord[j]} <==`;
            } 
         
    } return console.log(result);  
     
  
  }

  findLongestWordLength(sentence);

  