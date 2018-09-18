# Iterator

The `for...of` **statement** creates a loop iterating over iterable objects, icluding: built-in String, Array, Array-like objects, TypedArray, Map, Set, and user-defined iterables.



#### Example 1; Iterating over an Array

```javascript
let iterable = [10, 20, 30];

for (let value of iterable) {
    console.log(value);
}

// 10
// 20
// 30
```

- You can use `const` instead of let too, if you don't reassign the variable inside the block.



#### Example 2; Iterating over the arguments object

```javascript
(function() {
    for (let argument of arguments) {
        console.log(argument);
    }
})(1, 2, 3);

// 1
// 2
// 3
```



### Difference between `for...of` and `for...in`

> - Both `for...in` and `for...of` statements iterate over something. The main difference between them is in what they iterate over.
> - The `for...of` statement iterates over data that iterable object defines to be iterated over.
> - The `for...in` statement iterates over the enumerable properties of an object, in an arbitrary order.
>
> ``` javascript
> Object.prototype.objCustom = function() {};
> Array.prototype.arrCustom = function() {};
> 
> let iterable = [3, 5, 7];
> iterable.foo = 'hello';
> 
> for (let i in iterable) {
>     console.log(i);    // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
> }
> 
> for (let i of iterable) {
>     console.log(i);    // logs 3, 5, 7
> }
> ```