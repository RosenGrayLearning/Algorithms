/**
 * Two Sum  
 * function twoSum(numArray,sum);
 */

//Returns every pair of numbers from 'numArray'
//that adds up to the 'sum'
//result should be an array of arrays
//Any number in the 'numArray' can be used in multiple pairs

/*
example :

numArray = [1,6,4,5,3,3];
sum = 7;

result = [[6,1],[3,4],[3,4]]

*/

function twoSum(numArray,sum){
  var pairs = [];
  var hashTable = [];
  
  for(var i = 0 ; i < numArray.length; i++){
    var currNum = numArray[i];
    var counterPart = sum - currNum;
    if(hashTable.indexOf(counterPart)!== -1){
      pairs.push([currNum,counterPart]);
    }
    hashTable.push(currNum);

  }
     return pairs;
}

twoSum([1,6,4,5,3,3],7);