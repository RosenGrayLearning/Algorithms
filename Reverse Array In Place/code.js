//Reverse Array In Place
//takes in an Array
//manipulation existing array
//Return reversed array



function reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;

  }
  console.log(arr)
}


reverseArrayInPlace(['baby', 'tino', 'anna']);