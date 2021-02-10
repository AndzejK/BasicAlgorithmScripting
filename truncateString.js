let randomSentence = "A-tisket a-tasket A green and yellow basket";

function truncateString(str,num){
    let truncatedString="";
    if(str.length<=num){
       console.log(truncatedString=str);
    }else{
        for(let i=0; i<num;i++){
            truncatedString+=str[i];
        }   console.log(truncatedString+"...");
    }
    /*let truncatedString="";
    truncatedString=str.slice(0,num);
    if(str.length <=num){
        return console.log(truncatedString+"");
         
    } else {
        return console.log(truncatedString+"...");
    }*/
} 

truncateString(randomSentence,"A-tisket a-tasket A green and yellow basket".length-2);

