# Arrow Function

- An arrow function expression has a shorter syntax than a function expression.
  - Does not have its own this, arguments, super or new.target.
- These function expressions are best suited for non-method functions, and they cannot be used as constructors.



### No seperate this

> - An arrow function does not have its own this; the this value of the enclosing lexical context is used i.e. Arrow functions follow the normal variable lookup rules.
> - So while searching for `this`, which is not present in current scope they end up finding `this` from its enclosing scope.
>
> ```javascript
> function Person() {
>     this.age = 0;
>     
>     setInterval(() => {
>         this.age++;
>     }, 1000);
> }
> var p = new Person();    // p.age increase 1 in 1000 miliseconds.
> ```
>
> - Since arrow functions do not have their own `this`, the mehods `call()` or `apply()` can only pass in parameters.



### No bindings of arguments

> - Arrow functions do not have their own `argument object`. Thus `arguments` is simply a reference to the arguments of the enclosing scope.
>
> ```javascript
> var arguments = [1, 2, 3];
> var arr = () => arguments[0];
> 
> arr();    // 1
> 
> function foo(n) {
>     var f = () => arguments[0] + n;    // foo's implicit arguments binding. arguments[0] is n
>     return f();
> }
> 
> foo(3);    // 6
> ```
>
> - In most cases, using **rest parameters** is a good alternative to using an `arguments` object.
>
> ```javascript
> function foo(n) {
>     var f = (...args) => args[0] + n;
>     return f(10);
> }
> 
> foo(1);    // 11
> ```



### Arrow functions used as methods

> - Arrow function expressions are best suited for non-method functions.
>
> ```javascript
> var obj = {
>     i: 10,
>     b: () => console.log(this.i, this),
>     c: function() {
>         console.log(this.i, this);
>     }
> }
> 
> obj.b();    // undefined, Window {...}
> obj.c();    // 10, Object {...}
> ```
>
> - Arrow functions do not have their own `this`.



### Use of t he new operator

> - Arrow functions cannot be used as constructors and will throw an error when used with `new`.
>
> ```javascript
> var Foo = () => {};
> var foo = new Foo();    // TypeError: Foo is not a constructor
> ```
>
>