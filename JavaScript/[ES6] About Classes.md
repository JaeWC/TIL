# Classes

JavaScript classes, introduced in ECMAScript 2015, are primarily synatactical sugar over JavaScript's existing prototype-based inheritance. The calss syntax does not introduce a new object-oriented inheritance model to JavaScript.



### Defining classes

Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.



#### Class declarations

> To declare a class, you use the `class` keyword with the name of the class

```javascript
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
```

> An Important difference between **function declarations** and **class declarations** is that function declarations are hoisted and class declarations are not.



#### Class expressions

> Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body.

```javascript
// unnamed
let Rectangle = class {
    constructor(height, width) {
        this.height = height
        this.width = width
    }
}

// named
let Rectangle = class Rectangle {
    constructor(height, width) {
        this.height = height
        this.width = width
    }
}
```



### Class body and method definitions

The body of a class is the part that is in curly brackets. This is where you define class members, such as methods or constructor.

#### Constructor

> The `constructor` method is a special method for creating and initializing an object created with a `class`. There can only be one special method with the nmae "constructor" in a class.
>
> A constructor can use the `super` keyword to call the constructor of the super class.



#### Prototype Methods

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  calcArea() {
    return this.height * this.width;
  }
}
```



### Sub classing with extends

The `extends` keyword is used in class declarations or class expressions to create a class as a child of another class.

If there is a constructor present in the subclass, it needs to first call super() before using "this".

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.')
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    speak() {
        console.log(this.name + ' barks.')
    }
}
```



Note that classes cannot extend regular (non-constructible) objects. If you want to inherit from a regular object, you can instead use `Object.setPrototypeOf()`:

```javascript
const Animal = {
    speak() {
        console.log(this.name + ' makes a noise.');
    }
};
class Dog {
    constructor(name) {
        this.name = name;
    }
}
// If you do not do this you will get a TypeError when you invoke speak
Object.setPrototypeOf(Dog.prototype, Animal);
```



### Super class calls with super

The `super` keyword is used to call corresponding methods of super class. This is one advantage over prototype-based inheritance.

```javascript
class Cat { 
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}
```

