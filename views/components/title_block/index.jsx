import Container from "../container";
import Logo from "../logo";
import { createElement } from "complate-stream";

export default (_params, ...children) => <div class="title-block">
	<Container>
		<Logo src="complate.png" />
		<div class="title-area">
			{children}
		</div>
	</Container>
</div>;
