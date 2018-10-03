var binarySearch = function (array, element, start, end) {
  var start = start || 0
  var end = end || array.length - 1
  var midpoint = Math.floor((end + start) / 2)

  if (array[midpoint] === element) return midpoint

  if (array[midpoint] > element) {
    return binarySearch(array, element, start, midpoint - 1)
  } else {
    return binarySearch(array, element, midpoint + 1, end)
  }
}