# Chai Assertion Library

- Chai is a BDD/TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
  - TDD(Test-driven development) is a software development process that relies on the repetition of a very shor development cycle
  - BDD(Behavior-driven development) combines the general techniques and principles of TDD. 




### Assert

- The assert style is exposed through **assert** interface. This provides the classic assert-dot notation, similar to that packaged with node.js.
- This assert module, however, provides several additional tests and is broswer compatible.

~~~javascript
var assert = require('chai').assert
  , foo = 'bar'
  , beverages = {tea: ['chai', 'matcha', 'oolong'] };

assert.typeOf(foo, 'string');
assert.typeOf(foo, 'string', 'foo is a string');
assert.equal(foo, 'bar', 'foo equal "bar"');
assert.lengthOf(foo, 3, 'foo\'s value has a length of 3');
assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
~~~



## BDD

> The BDD style comes in two flavors: **expect** and **should**. Both use the same chainable language to construct assertions, but they differ in ther way an assertion is initially constructed. 



### Expect

- Expect allows you to include arbitrary messages to prepend to any failed assertions that might occur.

~~~javascript
var expect = require('chai').expect
  , foo = 'bar'
  , beverages = {tea: ['chai', 'matcha', 'oolong'] };

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(beverages).to.have.property('tea').with.lengthOf(3);
~~~



### Should

- Should style extends each object with a should property to start your chain. 

~~~javascript
var should = require('chai').should()  // actually call the function
  , foo = 'bar'
  , beverages = {tea: ['chai', 'matcha', 'oolong'] };

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
beverages.should.have.property('tea').with.lengthOf(3);
~~~

