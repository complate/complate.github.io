import Container from "../container";
import Logo from "../logo";
import { createElement } from "complate-stream";

function Wrap ({ startPage }, ...children) {
	if (startPage) {
		return <div class="header-area">
			{children}
		</div>;
	}
	return children;
}

export default ({ startPage }, ...children) => <Wrap startPage={startPage}>
	<div class="title-block">
		<Container>
			<Logo src="complate.png" />
			<div class="title-area">
				{children}
			</div>
		</Container>
	</div>
</Wrap>;
