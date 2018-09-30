# What is Queue

In computer science, a **queue** is  an abstract data type with two principal operations

- **enqueue**: add a new element to the last of the collection
- **dequeue**: remove the first element of collection

This two operations make a queue a First-In-First-Out(FIFO) data structure. In a FIFO data structure the first element added to the queue will be the first one to be removed.



```javascript
var Queue = function() {
    this.storage = {}
    this.id = 0
}

// A method to add a value to the back of the queue
Queue.prototype.enqueue = function (value) {
    this.storage[this.id] = value
    this.id++
}

// A method to remove and return the value at the front of the queue
Queue.prototype.dequeue = function() {
    if (this.id > 0) {
        var minIdx = Math.min.apply(null, Object.keys(this.storage))
        var returnVal = this.storage[minIdx]
        delete this.storage[minIdx]
        return returnVal
    }
}
```

