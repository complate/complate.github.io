title: Why complate?

Why complate?
=============


Abstraction
-----------

When we are developing our front-end components, we can use complate markup
abstractions ("macros") as an encapsulation layer for our component. Consider
the following macro:

```jsx
function Avatar({ src, alt }) {
  return <div class="avatar"><img src={src} alt={alt} /></div>
}
```

We can then use our macro in our application and it will be replaced with the
markup we have defined.

```jsx
<Avatar src="profile.jpg" alt="Portrait of Me" />
```

This is _extremely powerful_ and solves a major pain point when writing
maintainable front-end code. Requirements change constantly. When a new
requirement comes up, or I want to modify and improve existing markup, I can
change the markup of my component and all instances are updated automatically.
Here I need to be careful about pieces of my application which depend on the
structure of my markup (e.g. CSS, JavaScript, tests), but with care many
unnecessary breaking changes can be avoided.

Another major benefit is that it reduces the cognitive overhead necessary for
_using_ the component. In a team environment this can be especially useful
because it is easy to use components even without the technical expertise to
write them. However, when using a component it is always a good idea to be
aware of the underlying markup.


Composition
-----------

complate allows us to write components and then explicitly compose them
together. 

The composition in complate looks very similar to the composition that is
inherent in HTML: child components are passed into the parent component
by defining them within the parent component tag.

This allows us to focus on the definition of the component itself without
worrying about the surrounding boilerplate or any details of the children
components. If we need to change the children later, we can do this without
influencing the parent component.

Here we have use a Navbar component as an example of how components can be
composed together:

```jsx
function NavbarItem ({ href, current }, ...children) {
	const className = current ? 'current' : null
	return <a class={className} href={href}>{children}</a>
}

function Navbar (_params, ...children) {
	return <nav class="navbar">
		{children}
	</nav>
}

<Navbar>
	<a href="#profile">
		<Avatar src="profile.jpg" alt="User Profile Picture" />
	</a>
	<NavbarItem href="/">Home</NavbarItem>
	<NavbarItem href="/about" current>About</NavbarItem>
</Navbar>
```

Composition allows us to keep component definitions simple. If we need more
complicated UI Elements, we can compose several components together to get
the desired effect.

Composition in complate is also powerful because we pass the children in
explicitly in the macro definition. If we want to render the component
differently when there are no children passed in, we can do this. If we
want to destructure the list of children and place them in different parts
of our component, we can do this. If we want to iterate over the list of
children and wrap each one in another component, we can do this.


Cross-Platform Support
----------------------

With complate, components can be used across multiple platforms.
[On the server](https://github.com/complate/complate-stream), we can integrate
complate macros in different tech stacks like:

* [Express](https://github.com/complate/complate-express) (Node.js)
* [Ruby on Rails](https://github.com/complate/complate-ruby) (Ruby)
* [Spring MVC](https://github.com/complate/complate-spring-mvc) (Java)

This is particularly useful in heterogenous software systems, where we may be
running multiple services using different backend technologies, but we want to
reuse front-end components between services. If this is the case, we can
develop a [pattern library](https://github.com/complate/complate-fractal) using
complate and then publish our macros for reuse in other services.

We can also use complate
[on the client](https://github.com/complate/complate-dom) and as a
[static-site generator](https://github.com/complate/complate-ssg).