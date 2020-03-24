title: complate: declarative, component-based HTML templating
h1: complate
subtitle: component-based templating
description: declarative • composable • portable
safe: false

<div class="container header-area">

complate is a JSX-based HTML templating library.
Components serve as [declarative markup abstractions](#components)
that are [reusable across multiple languages and frameworks](#portability).

<figure class="code-sample">
<div class="input" aria-label="complate Template">

```jsx
<Card title="Hello World">
    <p>lorem ipsum dolor sit amet</p>
</Card>
```

</div>
<div class="output" aria-label="HTML Output">

```html
<article class="card">
    <h3 class="card-title">Hello World</h3>

    <div class="card-body">
        <p>lorem ipsum dolor sit amet</p>
    </div>
</article>
```

</div>
<figcaption>
    This <code>Card</code> component is <a href="#components">implemented as a JavaScript function</a>.
</figcaption>
</figure>

</div>
<div class="container">

<div class="icon-heading">
    <div class="badge">
        <svg class="icon" role="presentation">
            <use href="#icon-server-heart"></use>
        </svg>
    </div>
    <h2 id="stateless-rendering">Stateless HTML Rendering</h2>
</div>

complate focuses on efficiently [generating HTML],
with support for [progressive rendering](faq.html#progressive-rendering).
This makes complate a templating language ideal for [server-side rendering],
though [client-side templating] (including [universal rendering](faq.html#universal-rendering)) is not uncommon.

This classical approach to templating means generating HTML is a one-time "fire-and-forget" operation;
there is no component life cycle as far as complate is concerned.


<div class="icon-heading">
    <div class="badge">
        <svg class="icon" role="presentation">
            <use href="#icon-component"></use>
        </svg>
    </div>
    <h2 id="components">Components</h2>
</div>

Componentization is at the heart of the [benefits of abstraction and composition](rationale.html).
complate's markup abstractions -- called [macros](faq.html#macro) -- encapsulate a component's internal HTML structures and highlight its dynamic constituents via explicit input parameters.
This avoids error-prone copy-and-paste workflows and allows authors to focus on content by composing high-level structures, making view code more concise, declarative, and expressive.

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


<div class="icon-heading">
    <div class="badge">
        <svg class="icon" role="presentation">
            <use href="#icon-jsx"></use>
        </svg>
    </div>
    <h2 id="jsx-and-javascript">JSX and JavaScript</h2>
</div>

[JSX](what-is-jsx.html) is an extension of JavaScript, pioneered by React.
Thus we can rely on JavaScript's extensive ecosystem for modularization, tooling, sharing code, etc.
complate users benefit from the tools available in this established ecosystem.

<span id="portability"></span>
JavaScript also enables complate's portability: A JavaScript runtime can be embedded in almost any modern environment (e.g. V8, Nashorn, GraalVM), so macros can be reused across platforms, independent of technology choice.

Note that this also means authors need basic familiarity with JavaScript and a compilation step is required to turn JSX macros into executable JavaScript.
See [Getting Started](#getting-started) for integration with server-side frameworks.


<div class="icon-heading">
    <div class="badge">
        <svg class="icon" role="presentation">
            <use href="#icon-getting-started"></use>
        </svg>
    </div>
    <h2 id="getting-started">Getting Started</h2>
</div>

We currently have support for complate for developing components in a styleguide and for porting components accross several different platforms.
[View this guide](getting-started.html) to see all of the different options that we have available.


<div class="icon-heading">
    <div class="badge">
        <svg class="icon" role="presentation">
            <use href="#icon-faq"></use>
        </svg>
    </div>
    <h2 id="faq">Frequently Asked Questions</h2>
</div>

Please view our [FAQ](faq.html) for more details and
a glossary of complate terminology.
There you'll also find guidance on whether complate is suitable for your purposes.

[![logo](complate_motion_md.gif)](complate_motion_lg.gif)

</div>


[generating HTML]: https://adactio.com/journal/16404
[server-side rendering]: https://www.innoq.com/en/articles/2020/01/javascript-in-ma%C3%9Fen/
[client-side templating]: https://www.innoq.com/en/blog/self-contained-custom-elements/
