// /**
// * function fibonacci(position){
//   }
// */

/**
 * Fibonacci Series
 * 1,1,2,3,5,8,13,21,34,55...
 */

 
function fibonacci(position){
  if(position < 3) return 1;
  
  else{ 
    return fibonacci(position -1 ) + fibonacci(position - 2);}
}

console.log(fibonacci(9))//34
console.log(fibonacci(10))//55
console.log(fibonacci(8))//21