# Document Object Model (DOM)

### What is DOM

> - The **Document Object Model (DOM)** connects web pages to scripts or programming languages.
> - The DOM model represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects.
> - DOM methods allow programmatic access to the tree; with them you can change the document's structure, style or content.
> - Nodes can have event handlers attached to them. Once an event is triggered, the event handlers get executed.

### Tree Structur of HTML

> -  DOCTYPE HTML
>
> - - html
>   - - head
>     - - title: Page title
>     - body
>     - - h1: Hello World
>       - div: contents
>       - - span: contents

### DOM manipulation Example

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title> J's page </title>
    </head>
    <body>
        <h1> Hello world </h1>
        <button id="click-btn"> Click </button>
        <script>
            var btn = document.getElementById('click-btn');
            btn.onclick = function(){
                alert("Welcome to the page");
            }
        </script>
    </body>
</html>
~~~

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title> J's page </title>
    </head>
    <body>
        <h1> Hello world </h1>
        <button button onclick="clickBtn()"> Click </button>
        <script>
            var clickBtn = function() {
                alert("Welcome to the page");
            }
        </script>
    </body>
</html>
~~~

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title> J's page </title>
    </head>
    <body>
  		<input id="queryString" type="text"/>
  		<button id="search">Search</button>
        <script>
            var elInput = document.getElementById('queryString');
            var elButton = document.getElementById('search');
            elButton.onclick = function() {
                alert(elInput.value);
            }
        </script>
    </body>
</html>
~~~

~~~javascript
function createButton() {
    var btn = document.createElement('BUTTON');
    var text = document.createTextNode('Click Me');
    
  	btn.appendChild(text);
    document.body.appendChild(btn);
}

createButton();
~~~



