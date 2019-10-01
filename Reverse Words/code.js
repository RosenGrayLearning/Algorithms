//Reverse Words

function reverseWords(string){
  //reverse every word in the string
  //return the new string
  
  //create array of all our words in the string
  var wordsArray = string.split(' ');
  var reversedWordsArray = [];

  
  wordsArray.forEach(word=>{
      var reversedWord = '';
    for(var i = word.length - 1; i >= 0; i--){
      var letter = word[i];
      reversedWord += letter;
    }
    
    reversedWordsArray.push(reversedWord);
    
  });
  
return reversedWordsArray.join(' ');
  
}


reverseWords('baby pik');