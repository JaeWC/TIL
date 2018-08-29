# Inheritance and the Prototype Chain

> - When it comes to inheritance, JavaScript only has one construct: **objects**.
> - Each object has a private property which holds a link to another object called its **prototype**.
> - That property object has a property of its own, and so on until an object is reached with *null* as its prototype. By definition, *null* has no property, and acts as the final link in this **prototype chain**. 
> - Nearly all objects in JavaScript are instances of **Object** which sits on the top of a prototype chain.

### Inheritance with the prototype chain

##### Inheriting properties

> - When trying to access a prototype of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.
>
>   ~~~ text
>   JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object.
>   ~~~



##### Inheriting "methods"

> - In JavaScript, any function can be added to an object in the form of a property.(Actually JavaScript does not have "methods" in the form that class-based languages define them.)
> - An inherited function acts just as any other property.
> - When an inherited function is executed, the value of **this** points to the inheriting object, not to the prototype object where the function is an own property.



### Ways to create objects

##### Objects created with syntax constructs

> ~~~javascript
> var o = {a: 1};
> 
> // Object o has Object.prototype as its [[Prototype]].
> // So, o inherits hasOwnProperty from Object.prototype.
> // Becauseof this, o can use property named 'hasOwnProperty' from Object.prototype
> // Object.prototype has null as its prototype. So 'o   -> Object.prototype   -> null'
> ~~~

> ~~~javascript
> var b = ['yo', 'whadup', '?'];
> 
> // Arrays inherit from Array.prototype(which has methods indesOf, forEach, etc..)
> // The prototype chain looks like: b  ->  Array.prototype  ->  Object.prototype   -> null
> ~~~

> ~~~javascript
> function foo() {
>     return 2;
> }
> 
> // Functions inherit from Function.prototype (which has mehods call, apply, bind).
> // The prototype chain: foo  ->  Function.prototype  ->  Object.prototype   -> null
> ~~~



##### With a constructor

> - A 'constructor' in JavaScript is "just" a function that happens to be called with the **new operator**.
>
> ~~~javascript
> function Graph() {
>     this.verices = [];
>     this.edges = [];
> }
> 
> Graph.prototype = {
>     addVertex: function(v) {
>         this.vertices.push(v);
>     }
> };
> 
> var g = new Graph();
> ~~~
>
> - *g* is an object with own properties 'vertices' and 'edges'.
> - *g.[[prototype]]* is the value of Graph.prototype when new Graph() is executed.