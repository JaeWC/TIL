# What is Hash Table

In computing, a **hash table (hash map)** is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a **hash function** to compute an index into an array of buckets or slots from which the desired value can be found.

Ideally, the hash function will assign each key to a unique bucket, but most hast table designs emply an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key.



```javascript
var HashTable = function() {
    this._size = 0
    this._limit = 8
    this._storage = LimitedArray(this._limit)
}

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit)

  var bucket = this._storage.get(index) || []

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i]
    if (tuple[0] === k) {
      var oldValue = tuple[1]
      tuple[1] = v
      return oldValue
    }
  }

  bucket.push([k, v])
  this._storage.set(index, bucket)
  this._size++

  if (this._size > this._limit * 0.75) {
    this._resize(this._limit * 2)
  }

  return undefined
}

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit)

  var bucket = this._storage.get(index) || []

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i]
    if (tuple[0] === k) {
      return tuple[1]
    }
  }

  return undefined
}

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit)

  var bucket = this._storage.get(index) || []

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i]
    if (tuple[0] === k) {
      bucket.splice(i, 1)
      this._size--
      if (this._size < this._limit * 0.25) {
        this._resize(Math.floor(this._limit / 2))
      }
      return tuple[1]
    }
  }

  return undefined
}

HashTable.prototype._resize = function (newLimit) {
  var oldStorage = this._storage

  // min size of 8, return if nothing to do!
  newLimit = Math.max(newLimit, 8)
  if (newLimit === this._limit) { return }

  this._limit = newLimit
  this._storage = LimitedArray(this._limit)
  this._size = 0

  oldStorage.each(function (bucket) {
    if (!bucket) { return }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      this.insert(tuple[0], tuple[1])
    }
  }.bind(this))
}
```

