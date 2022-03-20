"use strict"
function compareArrays(arr1, arr2) {
  let result;

 if (arr1.length !== arr2.length) {
   result = false;
 }
else {
  result = arr1.every((element, i) => element === arr2[i]);
}
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  let arrNumbers = arr.filter((number) => number > 0 && number % 3 === 0); 
  resultArr = arr.map((number) => number*10);

  return resultArr; // array
}
