title: complate: declarative, component-oriented HTML templating

complate
========

rendering HTML with expressive, declarative and composable abstractions (i.e.
components) -- indepenent of any particular technology choice

> say what you mean

— [Web Components: The Long Game](https://infrequently.org/2017/10/web-components-the-long-game/)

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

complate leverages [JSX](https://facebook.github.io/jsx/) to convert such
markup abstractions ("macros"), optionally interspersed with JavaScript
expressions, into HTML -- either
[on the server](https://github.com/complate/complate-stream) or
[on the client](https://github.com/complate/complate-dom) side.

Because the underlying library consists only of
[a few JavaScript functions](https://www.innoq.com/en/blog/self-contained-custom-elements/),
complate macros can be used across a variety of tech stacks:

* [Express](https://github.com/complate/complate-express) (Node.js)
* [Ruby on Rails](https://github.com/complate/complate-ruby) (Ruby)
* [Spring MVC](https://github.com/complate/complate-spring-mvc) (Java)
* etc.

It's also often used for
[pattern libraries](https://github.com/complate/complate-fractal) or as a
[static-site generator](https://github.com/complate/complate-ssg).
