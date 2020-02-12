title: complate: declarative, component-oriented HTML templating
h1: complate
subtitle: component-based templating
description: expressive • declarative • composable • technology-agnostic
safe: false

complate is a JSX-based HTML templating library, providing component markup abstractions that are reusable accross multiple languages and frameworks.


<div class="code-example">
<div class="input" aria-label="You use your template like this...">

```jsx
<Card title="Hello World">
    <p>lorem ipsum dolor sit amet</p>
    <Button label="toggle" />
</Card>
```

</div>
<div class="output" aria-label="HTML will be generated like this...">

```html
<article class="card">
    <h3 class="card-title">Hello World</h3>

    <div class="card-body">
        <p>lorem ipsum dolor sit amet</p>
    </div>

    <div class="card-controls">
        <button type="button">toggle</button>
    <div>
</article>
```

</div>
</div>

Stateless HTML Rendering
------------------------

complate focuses on efficiently generating HTML in a fire-and-forget fashion.
We believe that [server-side rendering should be the default](https://www.innoq.com/de/articles/2020/01/javascript-in-ma%C3%9Fen/), and we created a templating library that is optimized for it.

Components
----------
Markup abstractions - which we call macros - encapsulate a component's internal structure.
With this we can get all of the [benefits of abstraction and composition](rationale.html).

JSX
---

[JSX](what-is-jsx.html) is a templating language pioneered by React which compiles to JavaScript.
complate users benefit from the tools available in this established ecosystem.

JavaScript
----------

complate templates use JavaScript as a scripting language.
The complate runtime can also be embedden in almost any modern environment (e.g. V8, Nashorn, Graal) which means that it is easy to port your components across platforms.

Getting Started
---------------

We currently have support for complate for developing components in a styleguide and for porting components accross several different platforms.
[View this guide](getting-started.html) to see all of the different options that we have available.


FAQ
---

Coming soon!
