title: complate: declarative, component-based HTML templating
h1: complate
subtitle: component-based templating
description: declarative • composable • portable
safe: false

complate is a JSX-based HTML templating library.
Components serve as [declarative markup abstractions](#components) and are [reusable across multiple languages and frameworks](#portability).


<div class="code-example">
<div class="input" aria-label="Input: JSX">

```jsx
<Card title="Hello World">
    <p>lorem ipsum dolor sit amet</p>
</Card>
```

</div>
<div class="output" aria-label="Output: HTML">

```html
<article class="card">
    <h3 class="card-title">Hello World</h3>

    <div class="card-body">
        <p>lorem ipsum dolor sit amet</p>
    </div>
</article>
```

</div>
</div>

This `Card` component is [implemented as a JavaScript function](#components).


Stateless HTML Rendering
------------------------

complate focuses on efficiently [generating HTML](https://adactio.com/journal/16404), with support for [progressive rendering](#progressive-rendering).
As such, it is typically used for server-side rendering,
though [client-side templating](https://www.innoq.com/en/blog/self-contained-custom-elements/) (including [universal rendering](#universal-rendering)) is not uncommon.

This classical approach to templating means generating HTML is a one-time "fire-and-forget" operation;
there is no life cycle as far as complate is concerned.


Components <span id="components"></span>
----------

Componentization is at the heart of the [benefits of abstraction and composition](rationale.html).
complate's markup abstractions -- called [macros](#macro) -- encapsulate a component's internal HTML structures and highlight its dynamic constituents via explicit input parameters. This avoids error-prone copy-and-paste workflows and allows authors to focus on content by composing high-level structures, making view code more concise, declarative and expressive.

```jsx
function Card({ title }, ...children) {
    return <article class="card">
        <h3 class="card-title">{title}</h3>

        <div class="card-body">
            {children}
        </div>
    </article>;
}
```


JSX and JavaScript
------------------

[JSX](what-is-jsx.html) is a extension of JavaScript, pionieered by React. Thus we can rely on JavaScript's extensive ecosystem for modularization, tooling, sharing code etc.

<span id="portability"></span>
JavaScript also enables complate's portability: A JavaScript runtime can be embedded in almost any modern environment (e.g. V8, Nashorn, GraalVM), so macros can be reused across platforms, independent of technology choice.

Note that this also means authors need basic familiarity with JavaScript and a compilation step is required to turn JSX macros into executable JavaScript.
See [Getting Started](#getting-started) for integration with server-side frameworks.



Getting Started
---------------

We currently have support for complate for developing components in a styleguide and for porting components accross several different platforms.
[View this guide](getting-started.html) to see all of the different options that we have available.


Glossary
--------

<dl>
<dt id="macro">macro</dt>
<dd>
    complate components -- specifically their JavaScript implementation -- are called macros because they typically expand to result in more complex markup structures.
</dd>

<dt id="progressive-rendering">progressive rendering</dt>
<dd>
    HTTP and HTML allow [streaming pieces of content as soon as possible](https://medium.com/ben-and-dion/progressive-rendering-a-killer-and-under-appreciated-feature-of-the-web-97c789b608c1), rather than waiting for the entire page to finish rendering before serving it.
</dd>

<dt id="universal-rendering">universal rendering</dt>
<dd>
    Sometimes also known as "isomorphic JavaScript", this means using the same components (macros) on both the server and the client.
</dd>
</dl>
