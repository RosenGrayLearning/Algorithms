/**

function binarySearch(numArray,key){

}

 - Search for a given value(key) inside of a list (numArray)
 - Runs in O (log n) run time - very performant
 - Can be written as a recursive function 

*/


/**
 Recursion & Call Stack
 
 - function called it self
 
 function func(){
  if(base case ){
    return something;
  }else{
    //recursive case
    func();
  }
}
 
*/

//Example Factorial function
// Factorial (!)
//4! = 4*3*2*1 = 24;
//3! = 3*2*1 = 6;

// function factorial(num){
//   if(num === 1){
//     //base case
//     return num;
//   }else{
//     //recursive case
//     return num * factorial(num-1);
//   }
// }

// console.log(factorial(4));

var numArray = [5,7,12,16,36,39,42,56,71,83,87,90,94,95,96,97,98];


function binarySearch(numArray,key){
  
  var middleIndex = Math.floor(numArray.length / 2) ;
  var middleElem = numArray[middleIndex];
  console.log('middleIndex',middleIndex);
  console.log('middleElem',middleElem);
    console.log('numArray',numArray);
     console.log('numArrayLength',numArray.length);
  if(middleElem === key) return true;
  else if(middleElem < key && numArray.length > 1){
    return binarySearch(numArray.splice(middleIndex,numArray.length),key);
  }
    else if(middleElem > key && numArray.length > 1){
    return binarySearch(numArray.splice(0,middleIndex),key);
  }
  else{
    return false;
  }

}


var res = binarySearch(numArray,56);
console.log(res)











