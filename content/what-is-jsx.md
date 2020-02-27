title: What is JSX?
h1: What is JSX?
subtitle: A versatile templating language
safe: false


JSX Fundamentals
----------------

[JSX](https://facebook.github.io/jsx/) is a syntax extension for JavaScript
which allows you to embed declarative HTML-like code within JavaScript.
It requires a
[transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler) to
turn JSX definitions into executable JavaScript.

Essentially, JSX is just [syntactic sugar](https://reactjs.org/docs/jsx-in-depth.html)
for the function signature `createElement(tag, params, ...children)`.

We easily recognize the following as being HTML:

```html
<p class="sample">Hello World</p>
```

As JSX, this tranlates to the following expression:

```javascript
createElement("p", { class: "sample" }, "Hello World");
```

And just as HTML is composable, so also is JSX:

<div class="code-example">
<div class="input" aria-label="JSX Definition">

```html
<article class="blog-post">
    <h2>Hello World</h2>
    <p>lorem ipsum</p>
</article>
```

</div>
<div class="output" aria-label="JavaScript Output">

```javascript
createElement("article", { class: "blog-post" },
    createElement("h2", null, "Hello World"),
    createElement("p", null, "lorem ipsum"));
```

</div>
</div>

And now we can leverage the power of JSX to not only generate standardized HTML
elements but to write our own element definitions.
The goal is to write a declarative component in an HTML-like syntax to get all of
the [benefits of components](rationale.html) and then translate it to an imperative
syntax which JavaScript understands.

Here is an example:

<div class="code-example">
<div class="input" aria-label="JSX Definition">

```jsx
<Component title="Hello World">
    <p>lorem ipsum</p>
</Component>
```

</div>
<div class="output" aria-label="JavaScript Output">

```javascript
createElement(Component, { title: "Hello World" },
    createElement("p", null, "lorem ipsum"));
```

</div>
</div>

Capitalized tags signify user-defined components. Here JSX will pass
`Component` as a variable reference into the `createElement` function instead
of a string.

This is the point in the documentation where the JSX specification and the
JSX implementation usually become hopelessly intertwined.
The following image illustrates the relationship between the generic JSX
specification and the corresponding `createElement` implementations (of which
there are more than one).

![A file with JSX blocks is transpiled into JavaScript with createElement calls. These createElement provided by the JSX implementation are then evaluated](jsx-transpilation-and-execution.svg)

The JSX specification defines how a JavaScript transpiler should translate JSX blocks
into a series of `createElement` calls. But the `createElement` function
itself is provided by a JSX _implementation_. This determines how the actual components
need to be defined. We will go into the specific details about the complate
implementation below, but first we want to look at a few more details about the
JSX implementation.

<!--
	here I want HTML so that I can define an anchor element to the section and
	link to it!
-->

### Interpolation with JavaScript Expressions

Everything which appears in a `{…}` block will be interpreted as a JavaScript
expression.

<div class="code-example">
<div class="input" aria-label="JSX definition">

```jsx
<Component title={title}>
    <p>{description}</p>
</Component>
```

</div>
<div class="output" aria-label="JavaScript Output">

```javascript
createElement(Component, { title: title },
    createElement("p", null, description));
```

</div>
</div>

Thus we use JavaScript expressions for conditionals:

```jsx
<Component title={title || "unknown"}>
    {description && (
        <p>{description}</p>
    )}
</Component>
```

Similarly, loops are expressions as well:

```jsx
<ul>
    {items.map(item => (
        <li>{item}</li>
    ))}
</ul>
```

### Special Cases for Boolean Attributes

JSX supports a shorthand for boolean parameters, thus the following two
statements are identical:

```jsx
<button disabled>
```

```jsx
<button disabled={true}>
```

### Trying It Out

You can try out how JSX translation works in the
[Babel online compiler](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwWQngwg9gtgDlAdgU0QFwARoJZoDbIC8ARABLJ55QYDqUATngCbEB8AUAJDBytX3IYGbHADOAVxjAA9L3Yzw0eElRpWQA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.7.3&externalPlugins=).
It translates it using the `createElement` function from the React library,
but we can also tell Babel to use a different `createElement` function from a
library like complate.


complate's `createElement` implementation
-----------------------------------------

Now we want to look at the specifics of complate's own JSX implementation.

This is our example from before:

<div class="code-example">
<div class="input" aria-label="JSX Definition">

```jsx
<Component title="Hello World">
    <p>lorem ipsum</p>
<Component>
```

</div>
<div class="output" aria-label="JavaScript Output">

```javascript
createElement(Component, { title: title },
    createElement("p", null, description));
```

</div>
</div>

In order for this to work, the complate `createElement` function needs
to be available in the JavaScript scope.

`createElement` in complate expects a user-defined component (called a macro)
to be a function with the signature `(params, ...children)` and to return a JSX
expression. An example definition for `Component` could be:

```jsx
function Component({ title }, ...children) {
    return <article>
        <h2>{title}</h2>
        {children}
    </article>;
}
```

This is a complate-specific implementation detail: In other JSX implementations
a user-defined component could be a class, but the JSX spec itself does not make
any statement about what a user-defined component is, other than that it should
be in the scope of the application.

### Dealing with Boolean Parameters

complate ensures that boolean parameters in macros are correctly translated to
HTML boolean attributes. This means that the JSX `<div hidden={expression}>`
will be correctly translated to `<div hidden>` or `<div>` based on the
result of the JavaScript `expression` that we evaluate. complate considers
"blank" values (`false`, `undefined`, `null`) to be falsey.

### Dealing with Blank Children

complate also ignores blank children so that we can more easily use
JavaScript expressions for conditionals.

Here a `<p>` tag will only be generated when the description value
is truthy:

```jsx
<article>
    {description && (
            <p>{description}</p>
        )}
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

One complate implementation is
[complate-stream](https://github.com/complate/complate-stream) which is
optimized for server-side rendering. complate-stream translates the
component macros to HTML and writes the resulting HTML to a stream.

The stream here is also an abstraction: Because the `complate-stream`
implementation is minimal, we can evaluate it in the JavaScript runtime of
a back-end language and provide a stream which makes sense for the
runtime environment, e.g. hooking into the HTTP request implementation of a
framework in order to write the HTML directly into the response body.

This is exactly what we have done for the following languages:

* [Java](https://github.com/complate/complate-java)
* [Ruby](https://github.com/complate/complate-ruby)
* [JavaScript](https://github.com/complate/complate-express)

#### complate-dom

We also provide the
[complate-dom](https://github.com/complate/complate-dom) implementation
whose tiny `createElement` implementation uses the browsers' API in order to create
DOM elements which are rendered on the client.
