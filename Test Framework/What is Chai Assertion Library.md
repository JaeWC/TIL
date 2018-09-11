# Chai Assertion Library

- Chai is a BDD/TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
  - TDD(Test-driven development) is a software development process that relies on the repetition of a very shor development cycle
  - BDD(Behavior-driven development) combines the general techniques and principles of TDD. 

- Chai has several interfaces that allow the developer to choose the most comfortable. The chain-capable BDD styles provide an expressive language & readable style, while the TDD assert style provides a more classical feel.
  - **Expect** and **Should** is *BDD style* assertion
  - **Assert** is *TDD style* assertion

~~~javascript
chai.should();

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
foo.should.have.property('flavors').with.lengthOf(3);
~~~

~~~javascript
var expect = chai.expect;

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(tea).to.have.property('flavors').with.lengthOf(3);
~~~

~~~javascript
var assert = chai.assert;

assert.typeOf(foo, 'string');
assert.equal(foo, 'bar');
assert.lengthOf(foo, 3);
assert.property(tea, 'flavors');
assert.lengthOf(tea.flavors, 3);
~~~

