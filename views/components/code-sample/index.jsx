import { createElement } from "complate-stream";

export function Input ({ label }, ...children) {
  return <div class="input" aria-label={label}>
    {children}
  </div>
}

export function Output ({ label }, ...children) {
  return <div class="output" aria-label={label}>
    {children}
  </div>
}

export default (_params, ...children) => <div class="code-example">
	{children}
</div>;
