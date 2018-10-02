function quickSort (array){

  if(array.length < 2) return array;

  var pivot = array[Math.floor(array.length/2)];
  var middle = array.filter(data =>data === pivot);

  var lesser = quickSort(array.filter(data => data < pivot));
  var larger = quickSort(array.filter(data => data > pivot));
  
  return lesser.concat(middle).concat(larger);
}

// Function above is more efficient than below, cost lower time complexity.

// function quickSort (array) {
//   if (array.length < 2) return array;

//   let pivot = array[0];
//   let lesser = [];
//   let larger = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < pivot) {
//       lesser.push(array[i]);
//     } else {
//       larger.push(array[i]);
//     }
//   }

//   return quickSort(lesser).concat(pivot, quickSort(larger));
// }
