import { createElement } from "complate-stream";

export default (_params, ...children) => <div class="container">
	{children}
</div>;
