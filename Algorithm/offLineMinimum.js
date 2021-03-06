/*
Have the function `offLineMinimum(strArr)` take the strArr parameter being passed which will be an array of integers ranging from 1...n and the letter "E" and return the correct subset based on the following rules.
The input will be in the following format: `["I","I","E","I",...,"E",...,"I"]` where the I's stand for integers and the E means take out the smallest integer currently in the whole set.
When finished, your program should return that new set with integers separated by commas.

For example:
if strArr is `["5","4","6","E","1","7","E","E","3","2"]`
then your program should return `4,1,5`.

- input: an array containing strings with integer in string form and 'E' string
- output: a string with integers separated by commas.
*/

function offLineMinimum(strArr) {
  var minimumArr = [];
  
  strArr.reduce(function(tempArr, element, index) {
    if (element === 'E') {
      var minNum = Math.min.apply(null, tempArr);
      minimumArr.push(minNum);
      tempArr.splice(tempArr.indexOf(minNum), 1);
    } else {
      tempArr.push(Number(element));
    }
    return tempArr;
    }, []);
    
    return minimumArr.join();
}

offLineMinimum(["1","2","E","E","3"]); // => '1,2'
offLineMinimum(["4","E","1","E","2","E","3","E"]); // => '4,1,2,3'

/*
The reason for the code at 25th line.
'push' method in JavaScript(Array type) returns the new length of the array.
But, what this code need is the initially provided array.
So it is important to return the array, before reduce function checks next element.

However 'concat' methid returns the new array combining the elements of the provided array and concatenated elements.
So it works without the return value of the array.
(Check the mdn reduce method page: 'Flatten an array of arrays')
*/
