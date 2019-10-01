//object as a hash table
//time complexity
//run time of the algorithm - based on the input size
//constant run time - o of 1 ; o(1)
//linear runtime - o of n ; o(n)
//exponential runtime - o(n^2)
//logrithmic runtime - binary search, o(log n)

function harmlessRansomNote(noteText,magazineText){
  var noteArr = noteText.split(' '),
      magazineArr = magazineText.split(' '),
      magazineObj = {}; //hash table
  
  
  magazineArr.forEach(function(word){
    if(!magazineObj[word])magazineObj[word] =0;
    magazineObj[word]++;    
  })
  
      var noteIsPossible = true;
   
  noteArr.forEach(word=>{
      if(magazineObj[word]){
        magazineObj[word]--;
        if( magazineObj[word] < 0 )  noteIsPossible  =false;
      }else{
        noteIsPossible = false;
      }
    });
  
 return noteIsPossible;
}


harmlessRansomNote('this this this is a note text bla bla','this is all the magazine text in the magazine');