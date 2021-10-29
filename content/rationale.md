title: Why complate?
h1: Why complate?
subtitle: Benefits of designing front-end code using a component abstraction

One of the main goals for complate is to create a templating engine which
allows us to write our front end using components. Why would we want to do
that? Let's look at some of the major benefits of a component based templating
engine.

Abstraction
-----------

When we are developing our front-end components, we can use complate markup
abstractions ("macros") as an encapsulation layer for our component. Consider
the following macro:

```jsx
function Avatar({ src, alt }) {
    return <div class="avatar">
        <img src={src} alt={alt} />
    </div>
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

Composition in complate looks very similar to that
inherent in HTML: child components are passed into the parent component
by placing them within the parent's tags.

This allows us to focus on the definition of the component itself without
worrying about the surrounding boilerplate or any details of the children
components. If we need to change the children later, we can do this without
influencing the parent component.

Here we use a navigation-bar component as an example of how components can be
composed together:

```jsx
function NavbarItem ({ href, current }, ...children) {
    const className = current ? "current" : null
    return <a class={className} href={href}>
        {children}
    </a>
}

function Navbar (_params, ...children) {
    return <nav class="navbar">
        {children}
    </nav>
}

<Navbar>
    <a href="#profile">
        <Avatar src="profile.jpg" alt="User Avatar" />
    </a>
    <NavbarItem href="/">Home</NavbarItem>
    <NavbarItem href="/about" current>About</NavbarItem>
</Navbar>
```

Composition allows us to keep component definitions simple. If we need more
complicated UI elements, we can compose several components together to get
the desired effect.

Composition in complate is also powerful because we pass the children in
explicitly in the macro definition. If we want to render the component
differently when there are no children passed in, we can do this. If we
want to destructure the list of children and place them in different parts
of our component, we can do this. If we want to iterate over the list of
children and wrap each one in another component, we can do this.


Reusability
-----------

Another huge benefit of using complate is that we can reuse our components
not only within our project, but also accross multiple platforms. These platforms
include:

* [Express](https://github.com/complate/complate-express) (Node.js)
* [Ruby on Rails](https://github.com/complate/complate-ruby) (Ruby)
* [Spring MVC](https://github.com/complate/complate-spring-mvc) (Java)
* [Fractal](https://github.com/complate/complate-fractal)
* [C++](https://github.com/tmehnert/complate-cpp)
