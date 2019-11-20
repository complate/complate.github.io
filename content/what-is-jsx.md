title: What is JSX?

What is JSX?
============

[JSX](https://facebook.github.io/jsx/) is a syntax extension for JavaScript
which allows you to write declarative HTML like code in your JavaScript files.
It is not a part of the ECMAScript spec and instead requires a
[transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler) to
translate JSX definitions into pure JavaScript.

JSX is an HTML like [syntactical sugar](https://reactjs.org/docs/jsx-in-depth.html)
for the function signature `createElement(component, params, ...children)`.

We easily recognize the following as being HTML:

```html
<p class="sample">Hello World</p>
```

JSX understands this and tranlates it to the following function call:

```javascript
createElement("p", { class: "sample" }, "Hello World");
```

And just as HTML is composable, so also is JSX:

```html
<article class="blog-post">
	<h2>Hello World</h2>
	<p>lorem ipsum</p>
</article>
```

becomes

```javascript
createElement("article", { class: "blog-post" },
	createElement("h2", null, "Hello World"),
	createElement("p", null, "lorem ipsum"));
```

And now we can leverage the power of JSX to not only create existing HTML
elements but to write our own element definitions.

For instance:

```jsx
<MyComponent title="Hello World">
	<p>lorem ipsum</p>
</MyComponent>
```

will be translated to

```javascript
createElement(MyComponent, { title: "Hello World" },
	createElement("p", null, "lorem ipsum"))
```