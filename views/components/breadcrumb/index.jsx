import { createElement } from "complate-stream";

import Icon from "../icons/index"

export function BreadcrumbLink ({ href }, ...children) {
  return <a href={href}>
    {children}
    <Icon symbol="arrow-right" />
  </a>;
}

/* This is an example of a component where we could use DOM
modification to add the `aria-current` Attribute to the last
`a` child in the breadcrumb. */
export function CurrentPage ({ href }, ...children) {
  return <a href={href} aria-current="page">
    {children}
  </a>;
}

export default (_params, ...children) => <nav class="breadcrumb">
  <ol>
    {children.map(child => <li>{child}</li>)}
  </ol>
</nav>;
