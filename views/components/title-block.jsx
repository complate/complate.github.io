import { createElement } from "complate-stream";
import Container from "./container";
import Logo from "./logo";

export default (_params, ...children) => <div class="title-block">
	<Container>
		<Logo src="complate_device_static-512.png" />
		<div class="title-area">
			{children}
		</div>
	</Container>
</div>;
