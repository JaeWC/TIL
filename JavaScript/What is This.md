# This

### Execution Context

> - **Execution context** is defined as the environment in which JavaScript code is executed.
> - When the JavaScript engine runs the code, **Global memory** for the variables and **Global execution context** is made.
> - When the function is called, **Local memory** that depends on lexical scope and **Local execution context** is made.
> - In Execution Context, all **variables**(Local and Global variables and arguments), **scope chain**, and **this** is included 

##### Call Stack

> - The call Stack is like a log of the current execution of the program(also one of the data structure).
> - When the function in JavaScript is run, the engine pushes that function into the Call Stack
> - When a function ends executing it gets popped form the Call Stack.



### This

> - The value of this is determined by how a function is called.
> - It can'be set by assignment during execution, and it may be different each time the function is called.
> - Remember 5 Patterns of Binding 'this'
>
> | Binding Pattern                | Binding Target                             | What's it for?   |
> | :----------------------------- | ------------------------------------------ | ---------------- |
> | Globar Reference               | *window* (Global Object)                   |                  |
> | Free Function Invocation       | *window* (Global Object)                   |                  |
> | Method Invocation              | *the Parent Object*                        |                  |
> | Construction Mode              | *a New Object created for that invocation* |                  |
> | *.call* or *.apply* Invocation | *the First Argument to .call or .apply*    | Manually Specify |



```javascript
var fn = function(one, two) {
    console.log(this, one, two);
};
var r = {r: 1}, g = {g: 1}, b = {b: 1}, y = {y: 1}
r.method = fn;

r.method(g, b);    			// {r: 1} , {g: 1} , {b: 1}
fn(g, b); 		   		// window , {g: 1} , {b: 1}
fn.call(r, g, b);  			// {r: 1} , {g: 1} , {b: 1}
r.method.call(y, g, b); 		// {y: 1} , {g: 1} , {b: 1}
setTimeout(fn, 1000);   		// window , undefined , undefined
setTimeout(r.method, 1000);  		   // window , undefined , undefined
setTimeout(function() {
    r.method(g, b);
}, 1000);				// {r: 1} , {g: 1} , {b: 1}
setTimeout(fn.bind(r), 1000);   	// {r: 1} , undefined , undefined
setTimeout(r.method.bind(r), 1000); 	// {r: 1} , undefined , undefined
console.log(this);			// window
new r.method(g, b);			// {} , {g: 1} , {b: 1}
```

