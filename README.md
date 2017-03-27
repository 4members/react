## D3 Tutorial

#### D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation.

#### You need to install D3 to use it by :
 ```js
 npm install d3 --save
 
  ```

D3 allows you to bind arbitrary data to a Document Object Model (DOM), and then apply data-driven transformations to the document.

To start with this Tutorial, you should add scripts folder to your project then add file Example: home.js to manipulate your home.html page.

# HINTS:
-This js file should be a function to make effect seen on your html page
-If you want the effect to be shown, the time you load your page then use onload="function()" in body tag.
-Add link that load your js code inside html page src="[link]"

# Methods inside d3 :

## SELECTION :
select nodes by tag name ("p" and "body", respectively) using select("type tag name here"). Elements may be selected using a variety of predicates, including containment, attribute values, class and ID.
- To select Elements by id use select ("type hashtag then the id like [#id]")
-To select Elements by id while id is a number use this formula  => '[id="3"]' as params


# Enter and Exit

## Using D3’s enter and exit selections, you can create new nodes for incoming data and remove outgoing nodes that are no longer needed.  

A common pattern is to break the initial selection into three parts: the updating nodes to modify, the entering nodes to add, and the exiting nodes to remove.

// Update…
```js
var p = d3.select("body")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
    .text(function(d) { return d; });

// Enter…
p.enter().append("p")
    .text(function(d) { return d; });

// Exit…
p.exit().remove();
```
