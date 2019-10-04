import DefaultLayout from "./layout";
import Container from "./components/container";

import Renderer, { createElement, safe } from "complate-stream";
import TitleBlock from "./components/title-block";

let { registerView, renderView } = new Renderer();

registerView(render);

export default renderView;

function render({ slug, meta, html }) {
	if (meta.h1) {
		return <DefaultLayout title={meta.title}>
			<TitleBlock>
				<h1>{meta.h1}</h1>
				<p>{meta.subtitle}</p>
				<p>{meta.description}</p>
			</TitleBlock>
			<Container>
				{safe(html)}
			</Container>
		</DefaultLayout>;
	}

	return <DefaultLayout title={meta.title}>
		<Container>
			{safe(html)}
		</Container>
	</DefaultLayout>;
}
