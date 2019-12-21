title: complate: declarative, component-oriented HTML templating
h1: complate
subtitle: component-based templating
description: expressive • declarative • composable • technology-agnostic

Modern JavaScript frameworks come with batteries included and everything
but the kitchen sink.

We do **_a lot less_** and we think that is a good thing.

complate provides a lightweight [JSX](https://facebook.github.io/jsx/)
implementation to allow us to write declarative component based templates
(macros).

Our goal is to provide a templating language that is optimized for
server-side rendering and still allows us to get the benefits of
[abstraction and composition](rationale.html) that come from using a
component based approach. complate works across many platforms, allowing
us to get true reuse out of our components.

complate differs from
[web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
in that the macros are designed primarily for use in server-side rendering.
However, complate and web components actually make a great team, allowing us to
develop both our server-side code and our client-side code using components.

```jsx
<Card title="Hello World">
    <p>lorem ipsum dolor sit amet</p>
    <Button label="toggle" />
</Card>
```

turns into

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

The complate approach is similar to server-side rendering in component
based frameworks like [React](https://reactjs.org/) and
[Vue](https://vuejs.org/), but because their implementations have to deal with
client-side rendering as well, they are larger and more difficult to port to
other platforms outside of the JavaScript ecosystem.

This is where complate shines: because of the
[lean underlying implementation](https://www.innoq.com/en/blog/self-contained-custom-elements/), it is possible to write a component
which can easily be reused across multiple projects on different platforms.

Cross-Platform Support
----------------------

With complate, components can be used across multiple platforms.
[On the server](https://github.com/complate/complate-stream), we can integrate
complate macros in different tech stacks like:

* [Express](https://github.com/complate/complate-express) (Node.js)
* [Ruby on Rails](https://github.com/complate/complate-ruby) (Ruby)
* [Spring MVC](https://github.com/complate/complate-spring-mvc) (Java)

This is particularly useful in heterogenous software systems, where we may be
running multiple services using different back-end technologies, but we want to
reuse front-end components between services. If this is the case, we can
develop a [pattern library](https://github.com/complate/complate-fractal) using
complate and then publish our macros for reuse in other services.

We can also use complate
[on the client](https://github.com/complate/complate-dom) and as a
[static-site generator](https://github.com/complate/complate-ssg).