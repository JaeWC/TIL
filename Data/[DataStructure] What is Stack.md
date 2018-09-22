# What is Stack

In Computer Science, a **stack** is an abstract data type with two principal operations

- **push**: add a new element to last of the collection
- **pop**: remove the most recently added element that was not yet removed

Considered as a linear data structure, the push and pop operations occur only at one end of the structure, referred to as the *top of the stack*.



```javascript
var Stack = function() {
    this.storage = {}
    this.count = 0
}

// A method to add a value to the top of the Stack
Stack.prototype.push = function (value) {
    this.count++
    this.storage[this.count] = value
}

// A method ro remove and return the value on the top of the Stack 
Stack.prototype.pop = function () {
    if (this.count > 0) {
        var returnVal = this.storage[this.count]
        this.count--
        return returnVal
    }
}
```

