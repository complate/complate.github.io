import DefaultLayout from "./layout";
import Container from "./components/container";
import TitleBlock from "./components/title_block";
import Renderer, { createElement, safe } from "complate-stream";
import Breadcrumb, { BreadcrumbLink, CurrentPage } from "./components/breadcrumb";

let { registerView, renderView } = new Renderer();

registerView(render);

export default renderView;

function linkify (slug) {
	return `/${slug}.html`;
}

function renderBreadcrumbs (slug, pageTitle) {
	if (slug === "index") {
		return null;
	}
	return <Breadcrumb>
		<BreadcrumbLink href={linkify("index")}>Home</BreadcrumbLink>
		<CurrentPage href={linkify(slug)}>{pageTitle}</CurrentPage>
	</Breadcrumb>;
}

function render({ slug, meta, html }) {
	if (meta.h1) {
		return <DefaultLayout title={meta.title}>
			<TitleBlock>
				<h1>{meta.h1}</h1>
				<p>{meta.subtitle}</p>
				<p>{meta.description}</p>
			</TitleBlock>
			{renderBreadcrumbs(slug, meta.h1)}
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
