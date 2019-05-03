title: Why complate?

Why complate?
=============

## Abstraction

When we are developing our frontend components, we can use complate markup
abstractions ("macros") as an abstraction layer for our component. Consider
the following macro:

```jsx
function Navbar (_props, ...children) {
  return <nav>
    {children}
  </nav>
}
```

We can then use our macro in our application and it will be replaced with the
markup we have defined.

```jsx
<Navbar />
```

This is _extremely powerful_ and solves a major pain point when writing
maintainable frontend code. Requirements change constantly. When a new request
comes, or the corporate design has changed yet again, I can change the markup
of my component _without breaking any part of my application that uses the
component_.

Another major benefit is that it is possible to write complex frontend
components and others can _use_ the components easily, without having to
understand how the component works under the hood.

## Composition

complate allows us to write components and then explicitly compose them
together. For instance, when I write a navbar component, I can reuse the
component in multiple projects and change the content of the navbar without
affecting it.

The composition in complate looks very similar to the composition that is
inherent in HTML: child components are passed into the parent component
by defining them within the parent component tag.

```jsx
function NavbarItem ({ href, current }, ...children) {
	const className = current ? 'currentPage' : ''
	return <a class={className} href={href}>{children}</a>
}

<Navbar>
	<NavbarItem href="/">Home</NavbarItem>
	<NavbarItem href="/about" current>About</NavbarItem>
</Navbar>
```

Composition in complate is also powerful because we pass the children in
explicitly in the macro definition. If we want to render the component
differently when there are no children passed in, we can do this. If we
want to destructure the list of children and place them in different parts
of our component, we can do this. If we want to iterate over the list of
children and wrap each one in another component, we can do this.

## Cross-Platform Support

With complate, components can be used across multiple platforms.
[On the server](https://github.com/complate/complate-stream), we can integrate
complate macros in different tech stacks like:

* [Express](https://github.com/complate/complate-express) (Node.js)
* [Ruby on Rails](https://github.com/complate/complate-ruby) (Ruby)
* [Spring MVC](https://github.com/complate/complate-spring-mvc) (Java)

This is particularly useful in heterogenous software systems, where we may be
running multiple services using different backend technologies, but we want to
reuse frontend components between services. If this is the case, we can develop
a [pattern library](https://github.com/complate/complate-fractal) using
complate and then publish our macros for reuse in other services.

We can also use complate
[on the client](https://github.com/complate/complate-dom) and as a
[static-site generator](https://github.com/complate/complate-ssg).