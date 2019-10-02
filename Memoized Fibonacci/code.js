/*
 * Memoized Fibonacci
 * function fibMemo(index,cache){
 index: index of number in fibanacci sequence
 cache : an array used as memory
 }
 */

 /**
  * 
  * @param {num} index - of number in fibanacci sequence
  * @param {array} cache - an array used as memory
  */
 
 function fibMemo(index,cache){
  cache = cache ||  [];
  //Base Case
  if(cache[index]) return cache[index];
  else{
    if(index<3)return 1;
    else{
      cache[index] = fibMemo(index -1, cache) + fibMemo(index -2, cache);
    }
  }
  console.log(cache)
  return cache[index];
}

let fm = fibMemo(3);

console.log(fm);




