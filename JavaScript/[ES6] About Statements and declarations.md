# Block Scoping Rules

Variables declared with **var** do not have block scope. By contrast, identifiers declared with **let** and **const** do have block scope.



### let

> - The let statement declares a block scope local variable, optionally initializing it to a value.
> - **let** allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.



##### Scoping rules

>- Variables declared by **let** have their scope in the block for which they are defined, as well as in any contained sub-blocks.
>
>```javascript
>function letTest() {
>    let x = 1;
>    if (true) {
>        let x = 2;
>        console.log(x);    // 2
>    }
>    console.log(x);        // 1
>}
>```
>
>- At the top level of programs and functions, **let** does not create a property on the global object.



##### Redeclarations

> - Redeclaring the same variable within the same function of block scope raises a SyntaxError.
>
> ```javascript
> if (x) {
>     let foo;
>     let foo;   // SyntaxError thrown.
> }
> ```



##### Temporal Dead Zone

> - Unlike variables declared with **var**, which will start with the value undefined, **let** variables are not initialized until their definition is evaluated.
>
> ```javascript
> function do_something() {
>     console.log(bar);    // undefined
>     console.log(foo);    // ReferenceError
>     var bar = 1;
>     let foo = 2;
> }
> ```



### const

> - **Constants** are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through reassignment, and it can't be redeclared.
> - The **const** declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned.
> - A **constant** cannot share its name with a function or a variable in the same scope.



##### Temporal Dead Zone

> - All the considerations about the "temporal dead zone" apply to both let and const

