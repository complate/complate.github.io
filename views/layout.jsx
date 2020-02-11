import { createElement, safe } from "complate-stream";

let CSS = `
body {
	margin: 0;
	font-family: 'Sarabun', Trebuchet MS, Helvetica, sans-serif;
	font-size: 1.125rem;
}
*, *::before, *::after {
	box-sizing: border-box;
}

* + h2 {
	margin-top: 5rem;
}

h2 {
	font-size: 1.5rem;
	font-weight: 300;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: hsl(205.7, 6.3%, 56.1%);
}

.container {
	padding: 3rem 1rem;
}
.container > * {
	margin-left: auto;
	margin-right: auto;
	max-width: 40rem;
}

.title-block {
	background-color: #36454F;
	color: #fff;
}

.title-block .container {
	display: flex;
	flex-wrap: wrap;
	margin: 0 auto;
	max-width: 40rem;
}

.title-block .title-area {
	flex-basis: 5rem;
	flex-grow: 1;
}

.title-block h1 {
	font-size: 3rem;
	font-family: 'Fira Code', monospace;
}

.title-block p {
	font-size: 1.25rem;
	color: #00f1ea;
}

.logo {
	max-width: 200px;
	max-height: 200px;
	width: 100%;
	margin: auto;
}

p {
	line-height: 1.4;
}

blockquote {
	margin-left: 1rem;
	border-left: 3px solid #AAA;
	padding-left: 0.5rem;
}

blockquote + p {
	margin-left: 1rem;
	font-size: 0.9rem;
}

img {
	max-width: 100%;
}
`;

export default function DefaultLayout({ title }, ...children) {
	return <html>
		<head>
			<meta charset="utf-8" />
			<title>{title}</title>
			<link href="/assets/fonts.css" rel="stylesheet" />
			<style>{safe(CSS)}</style>
			<link href="/assets/code.css" rel="stylesheet" />
		</head>

		<body>
			{children}

			<script src="https://unpkg.com/prismjs@1.15.0/prism.js" />
			<script src="https://unpkg.com/prismjs@1.15.0/components/prism-jsx.min.js" />
		</body>
	</html>;
}
