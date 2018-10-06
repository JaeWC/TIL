# Components and Probs

> Components let you split the UI into independent, reusable pices, and think about each piece in isolation.

Components are like JavaScript functions. They **accept arbitrary inputs** (called "**props**") and **return React elements** describing what should appear on the screen.



### Function and Class Components

The simplest way to define a **component** is to write a JavaScript function.

```react
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}
```

This function is a valid React component because it accepts a single `props` object argument with data and returns a React element.

```react
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}
```

Also ES6 class can define a component, and the above two components are equivalent from React's point of view.



### Rendering a Component

>  Elements can also represent user-defined components.

When React sees an element representing a user-defined component,  it passess JSX attributes to this component as a single object. We call this object `props`.

```react
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
	element,
	document.getElementById('root')
);
```

This works

1. Call `ReactDOM.render()` with element `<Welcome name="Sara" />`
2. React calls `Welcome` component with `{name: 'Sara'}` as the `props`
3. `Welcome` components return `<h1>Hello, Sara</h1>` element as the result.
4. React DOM efficiently updates the DOM to match `<h1>Hello, Sara</h1>`



### Composing Components

Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail.

Typically, new react apps have a single App component at the very top. However, if you integrate React into an existing app, you might start bottom-up with a small component like Button and gradually work your way to the top of the view hierarchy.



### Extracting Components

```react
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

Comment Component accepts author, text, and date as props, and describes a comment on a social media website.

This nested Components can be extracted like this.

```react
function Avatar(props) {
    return (
        <img 
            className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
         />
    )
}

function UserInfo(props) {
    return (
    	<div className="UserInfo">
        	<Avatar user={props.user} />
            <div className="UserInfo-name">
            	{props.user.name}
            </div>
        </div>
    )
}

function Comment(props) {
    return (
    	<div className="Comment">
        	<UserInfo user={props.author} />
            <div className="Comment-text">
            	{props.text}
            </div>
        </div>
        <div className="Comment-date">
        	{formatDate(props.date)}
        </div>
    )
}
```



### Props are Read-Only

Whether you declare a component as a function or a class, it must never modify its own props.

> All React components must act like pure functions with respect to their props.

