title: What is JSX?

What is JSX?
============

JSX Fundamentals
----------------

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
    createElement("p", null, "lorem ipsum"));
```

Here JSX recognizes an element which is capitalized as being a user defined
component and will pass `MyComponent` as a variable reference into the
`createElement` function.

This is the point in the documentation where the JSX specification and the
JSX implementation usually become hopelessly intertwined.
In the following image we can see where the distinction occurs.

![A file with JSX blocks is transpiled into JavaScript with createElement calls. These createElement calls are then interpreted by the JSX implementation](jsx-transpilation-and-interpretation.svg)

The JSX specification defines how a JavaScript transpiler should translate JSX blocks
into a series of `createElement` calls. But the `createElement` function
comes from a JSX _implementation_ and will determine how the actual components
need to be defined. We will go into the specific details about how the complate
implementation below, but first we want to look at a few more details about the
JSX implementation.

<!--
	here I want HTML so that I can define an anchor element to the section and
	link to it!
-->

### Interpolation with JavaScript Expressions

Everything which appears in a `{ }` block will be interpreted as a JavaScript
expression.

```jsx
<MyComponent title={title}>
    <p>{description}</p>
</MyComponent>
```

will become

```javascript
createElement(MyComponent, { title: title },
    createElement("p", null, description));
```

This means that we can use JavaScript expressions to express conditionals

```jsx
<MyComponent title={title || "unknown"}>
    {description && (
        <p>{description}</p>
    )}
</MyComponent>
```

or for a loop

```jsx
<List>
    {items.map(item => (
        <span>{item}</span>
    ))}
</List>
```

### Special Cases for Boolean Attributes

Attributes without an explicit value in a JSX expression are interpreted as
having the boolean value `true`. This means that the following two JSX blocks
are identical:

```jsx
<button disabled>
```

```jsx
<button disabled={true}>
```

### Fragment provided by JSX Implementation

JSX always expects exactly one root element in an expression, but in some cases
we want to return several at once. To do this, a JSX implementation will
provide a `Fragment` component with provides an artificial hierarchy level.

```jsx
<dl>
    {items.map(({ term, description }) => (
        <Fragment>
            <dt>{term}</dt>
            <dd>{description}</dd>
        </Fragment>
    ))}
</dl>
```

### Trying it out

You can try out how JSX translation works in the
[Babel online compiler](https://babeljs.io/repl#?presets=react&code_lz=DwWQngwg9gtgDlAdgU0QFwARoJZoDbIC8ARABLJ55QYDqUATngCbEB8AUAJDBytX3IYGbHADOAVxjAA9L3Yzw0eElRpWQA).
It translates it using the `createElement` function from the React library,
but we can also tell Babel to use a different `createElement` function from a
library like complate.


The complate JSX implementation
-------------------------------

Now we want to look at the specifics of the complate JSX implementation.

We saw before that

```jsx
<MyComponent title="Hello World">
    <p>lorem ipsum</p>
<MyComponent>
```

becomes

```javascript
createElement(MyComponent, { title: title },
    createElement("p", null, description));
```

In order for this to work, the complate `createElement` function needs
to be available in the JavaScript scope.

`createElement` in complate expects a user defined component (called a macro)
to be a function with the signature `(params, ...children)` and to return a JSX
expression. An example definition for `MyComponent` could be:

```jsx
function MyComponent({ title }, ...children) {
    return <article>
        <h2>{title}</h2>
        {children}
    </article>;
}
```

### Dealing with boolean attributes

We saw above that JSX interprets an attribute without a value as being
the same as the boolean value true. complate also ignores the blank
values (`false`, `undefined`, `null`) so `<button disabled={undefined}>`
and `<button disabled={null}>` generate the same `<button>` HTML Tag
without the `disabled` property.

complate will also ensure that boolean properties are correctly set on
HTML elements. This means that `<button disabled={true}>` will be
correctly translated to the HTML Tag `<button disabled>`.

complate also ignores blank children so that we can more easily use
JavaScript expressions for conditionals.

Here a `<p>` tag will only be generated when the description value
is truthy.

```jsx
<article>
    {description && <p>{description}</p>}
<article>
```

### Multiple JSX Implementations

Up until now we have skirted around the question of what the `createElement`
function in complate actually does. This is because we decided to define the
contract for component definitions separately from the actual implementation
of the `createElement` functionality. Because we have optimized for simplicity
and portability, this has allowed us to create multiple `createElement`
implemenations which we can choose based on our use case.

#### complate-stream

The first complate implementation is
[complate-stream](https://github.com/complate/complate-stream) which is
optimized for server-side rendering. complate-stream translates the
component macros to HTML and writes the resulting HTML to a stream.

The stream here is also an abstraction: because the `complate-stream`
implementation is minimal, we can evaluate it in the JavaScript runtime of
a backend language and provide a stream which makes sense for the
runtime environment, e.g. hooking into the HTTP request implementation of a
framework in order to write the HTML directly into the response body.
This is exactly what we have done for
[Java](https://github.com/complate/complate-java)
and [Ruby](https://github.com/complate/complate-ruby).

#### complate-dom

We also provide the
[complate-dom](https://github.com/complate/complate-dom) implementation
whose `createElement` implementation uses the Browser API in order to create
DOM Elements which are rendered on the client.
