# What is Linked List

In computer science, a **linked list** is a linear collection of data elements, whose order is not given by their physical placement in memory. Instead, each element points to the next. 

**Linked List Structure** consists of a collection of **nodes** which together represent a sequence. In basic, each node contains

- **data**
- **reference**: a link to the next node in the sequence

The field of each node that contains the address of the next node is called the 'next link' or 'next pointer'. The remaining fields are known as the 'data'. The '**head**' of a list is its first node, and the '**tail**' of a list may refer either to the rest of the list after the head, or to the last node in the list.



### Singly Linked List

> Singly liked lists contain nodes which have a data field as well as 'next' field, which points to the next node in line of nodes.

```javascript
var LinkedList = function() {
    var list = {}
    list.head = null
    list.tail = null
}

// A method to take a value and adds it to the end of the list
list.addToTail = function (value) {
    var newTail = new Node(value)
    
    if (!list.head) {
        list.head = newTail
    }
    
    if (list.tail) {
        list.tail.next = newTail
    }
    
    list.tail = newTail
}

// A method to remove the first node from the list and return its value
list.removeHead = function () {
    if (list.head === null) {
        return null
    }
    
    var currentHead = list.head
    list.head = list.head.next
    
    return currentHead.value
}
    
var Node = funtion (value) {
    this.value = value
    this.next = null
}
```



### Doubly Linked List

Each node contains, besides the next-node link, a second link field pointing to the 'previous' node in the sequence.