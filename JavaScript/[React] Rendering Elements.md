## Rendering Elements

> Elements are **the smallest building blocks** of React apps.

An element describes what you want to see on the screen. React elements are plain objects, and are cheap to create. 

```text
React DOM takes care of updating the DOM to match the React elements.
```



### Rendering an Element into the DOM

Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

To render a React element into a root DOM node, pass both to `ReactDOM.render()`:

```react
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```



### Updating the Rendered Element

>  **React elements are immutable.** 

Once you create an element, you can't change its children or attributes. The only way to update the UI is to create a new element, and pass it to `ReactDOM.render()`.

```react
tick = () => {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

It calls `ReactDOM.render() ` every second from a `setInterval()` callback. (most React apps only call `ReactDOM.render()` once.)



### React Only Updates What's Necessary

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to desired state.

Event though we create an element describing the whole UI tree on every tick, only the text node whose contents has changed gets updated by React DOM.