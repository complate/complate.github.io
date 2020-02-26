title: complate Frequently Asked Questions
h1: FAQ
subtitle: Frequently Asked Questions
safe: false


Is complate Right for Me? <span id="trade-offs"></span>
-------------------------

While complate has many advantages, it also introduces additional complexity:
The use of JavaScript typically requires both a compiler (for module resolution and to transform JSX) and
a JS runtime environment (typically provided via [the respective adaptor](getting-started.html)) --
see [How It Works](how-it-works.html) for a detailed explanation of that interplay.
It also means [authors will need a basic understanding of JavaScript], including for debugging.

In our experience, all that pays off when
native templating mechanisms do not provide sufficient means for abstraction and composition (i.e. components).
It's also very helpful, even essential, in polyglot environments where the same markup definitions (i.e. macros) should be reused across a variety of technology stacks,
e.g. due to a stand-alone pattern library and/or [self-contained systems].

Otherwise a simpler, more traditional approach might be warranted,
using a native templating engine within the respective environment.
In a Node.js environment, that might include [server-side rendering] with JavaScript frameworks like React, Svelte etc.
Sometimes, client-side rendering might be suitable. Maybe.


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


[authors will need a basic understanding of JavaScript]: https://medium.com/@Heydon/reluctant-gatekeeping-the-problem-with-full-stack-e9ad836570f6
[self-contained systems]: https://scs-architecture.org
[server-side rendering]: https://adactio.com/journal/16404
