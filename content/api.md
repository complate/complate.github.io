title: API
safe:

API
===

While complate was designed with [JSX](https://facebook.github.io/jsx/) in mind,
you don't actually have to use JSX syntax: That's just a convenient shorthand
for JavaScript function invocations¹, which you might also write directly.
Nevertheless, this documentation uses JSX for readability.

Generating HTML is fairly straightforward:

```jsx
<article class="card">
    <p>lorem ipsum</p>
    <hr />
    <textarea readonly>dolor sit amet</textarea>
</article>
```

<!-- XXX: this by itself doesn't actually do anything; something needs to kick off rendering -->

Here JSX works like HTML, except it's stricter (XML-style), meaning
(self-)closing tags and quotes around attribute values are not optional.


Interpolation
-------------

Dynamic values can be inserted by wrapping them in braces (`{…}`):

```jsx
<article class={className}>
    <p>{description}</p>
    <hr />
    <textarea readonly={readOnly}>{sample}</textarea>
</article>
```

Anything in between braces is evaluated as a JavaScript expression, so here we
insert the respective variables' values (which need to be available within the
current scope). <!-- TODO: link to scope explanation; i.e. rendering? -->

complate has some awareness of HTML semantics to perform basic validation and
optimizations:

* blank values (`null`, `undefined` or `false`) are ignored for children:<br>
  `<p>{null}</p>` → `<p></p>`
* non-element children are converted to strings and encoded:<br>
  `<p>{17}{" > "}{new Date(0)}</p>` → `<p>17 &gt; Thu Jan 01 1970 00:00:00 GMT+0000 (UTC)</p>`
* raw HTML can be injected by wrapping it in complate's `safe` (beware of
  cross-site scripting vulnerabilities):<br>
  `<p>{safe("lorem <em>ipsum</em>")}</p>` → `<p>lorem <em>ipsum</em></p>`
* attribute values are generally expected to be strings and encoded
  automatically – for convenience, numeric attributes are stringified:<br>
  `<th colspan={2}>phone</th>` → `<th colspan="2">phone</th>`
* blank values result in the respective attribute being omitted:<br>
  `<hr class={null} />` → `<hr>`
* boolean attributes are supported:<br>
  `<textarea readonly={true} />` → `<textarea readonly></textarea>`<br>
  `<textarea readonly={false} />` → `<textarea></textarea>`<br>
  (note that `<textarea readonly />` is JSX shorthand for
  `<textarea readonly={true} />`)
* [void elements](https://www.w3.org/TR/html5/syntax.html#void-elements) are
  recognized and rendered without end tag:<br>
  `<meta charset="utf-8" />` → `<meta charset="utf-8">`<br>
  (children are not allowed here)


Conditionals
------------

JavaScript expressions can be used, often in combination with blank values:

```
<input disabled={readOnly ? true : false} />
```
```
<li class={selected && "is-selected"}>…</li>
```


Macros
------

markup expansion

* `Fragment`


Views
------

<!-- TODO -->


----

<!-- TODO: proper footnotes -->

¹ e.g.
```jsx
<ul class="list-group">
    <li>hello</li>
    <li>world</li>
</ul>
```
is translated ("transpiled") to
```javascript
createElement("ul", { class: "list-group" },
        createElement("li", null, "hello"),
        createElement("li", null, "world"));
```
Uppercase tags result in a reference instead of a string:
```jsx
<MyComponent>…</MyComponent>
```
```javascript
createElement(MyComponent, null, …);
```
