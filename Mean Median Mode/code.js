//Mean Median Mode
//takes in an array
//return {} with 3 properties
/*
{
mean:'the_mean_val',
median:'the_median_val',
mode:'the_mode_val(s)'
}
*/

//get mean

function getMean(arr) {
  var sum = 0;
  arr.forEach((num, key) => {
    sum += num;
  });
  var mean = sum / arr.length;
  return mean;
}
//get median

function getMedian(arr) {
  var sortedArr = arr.sort(),
    median;

  if (arr.length % 2 !== 0) {
    median = arr[Math.floor(arr.length / 2)];
  } else {
    var mid1 = arr[(arr.length / 2) - 1];
    var mid2 = arr[arr.length / 2];
  }

  median = (mid1 + mid2) / 2;

  return median;

}
//get meode

function getMode(arr) {
  var modeObj = {};
  arr.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  })

  var maxFrequency = 0,
    modes = [];

  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] === maxFrequency) {
      modes.push(num);
    }
  }

  if (modes.length === Object.keys(modeObj).length) modes = [];

  return modes;
}

//get meanMedianMode
function getMeanMedianMode(arr) {
  //call other 3 functions
  //return obj which has mean,median, mode on it
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  };
}

getMode([4, 2, 3, 1, 1, 2]);