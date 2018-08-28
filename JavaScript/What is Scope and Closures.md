# Scope and Closure

### Scope

> - A scope in JavaScript defines **what variables you have access to**.

##### Global Scope

> - Once you've declared a global variable, you can use that variable anywhere in your code. 
> - The reason for chance of naming collisions, declare variables in the global scope is not advised to do.
> - If the variable is declared first in the function-level, this variable is automatically added Global Scope.

##### Local Scope

> - A *Function* serves as a **Scope** in JavaScript, not a block-level.
> - But when you declare a variable with const or let within a curly brace( {} ), you can access this variable only within that curly brace.
> - Functions do not have access to each other's scopes when you define them separately, even though one function may be used in another.

```javascript
function first() {
    var firstVariable = 'This is first';
}

function second() {
    first()
    console.log(firstVariable)    // Error, firstVariable is not defined
}
```

##### Nested Scopes

> - When a function is defined in another function, the inner function has access to the outher function's variables. This behavior is calles **lexical scoping**.
> - However, the outer function does not have access to the inner function's variables.

 ```javascript
function outerFunction() {
    var outer = 'This is outer';
    
    function innerFunction() {
        var inner = 'This is inner';
        console.log(outer)    // This is outer
    }
    
    console.log(inner)        // Error, inner is not defined
}
 ```

##### Hoisting

> - Hoisting is JavaScript's default behavior of moving declarations to the top.
> - In JavaScript, a variable can be declared after it has been used. In other words, a variable can be used before it has been declared.
> - In case of function hoisting, when functions are declared with a **function declaration**, are always hoisted to the top of the current scope. But when declared with a **function expression**, functions are not hoisted to the top of the current scope.



### Closures

> - Whenever you create a function within another function, you have created a closure. **The inner function** is the closure.
> - This clousre is usually returned so you can use the outer function's variables at a later time.

```javascript
var globalVar = 'Hello';

function showName(firstName) {
    var nameIntro = "Your name is ";
    
    function makeFullName(lastName) {
        return nameIntro + firstName + " " + lastName;
    }
    
    return makeFullName;
}

var innerFunc = showName('Michael');
innerFunc('Jackson');               // "Your name is Michael Jackson"
```

##### Private variables with closures

> - Variables in a function cannot be accessed outside the function. Since they can't be accessed, they are also called private variables.
> - However, sometimes you need to access such a private variable. You can do so with the help of closures.

```javascript
var counter = (function() {
    var privateCounter = 0;
    
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    };
});

var counterClosure = counter();
counterColsure.value();        // 0
counterColsure.increment();
counterColsure.increment();
counterColsure.value();        // 2
counterColsure.decrement();
counterColsure.value();        // 1
```

> - *changeBy* is the only function (a closure) that exposes the *privateCounter* outside the original secret function. As such, it is also called a **privileged function**.