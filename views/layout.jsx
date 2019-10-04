import { createElement } from "complate-stream";

let CSS = `
body {
	margin: 0;
	font-family: Trebuchet MS1, Trebuchet MS, sans-serif;
}

.container {
	max-width: 40rem;
	margin: 0 auto;
	padding: 3rem 1rem;
}

.title-block {
	background-color: #36454F;
	color: #fff;
}

.title-block .container {
	display: flex;
	flex-wrap: wrap;
}

.title-block .title-area {
	flex-basis: 5rem;
	flex-grow: 1;
}

.title-block h1 {
	font-size: 3rem;
	font-family: monospace;
}

.title-block p {
	font-size: 1.25rem;
	color: #00f1ea;
}

.logo {
	max-width: 200px;
	max-height: 200px;
	margin: auto;
}

.logo img {
	width: 100%;
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
`;

export default function DefaultLayout({ title }, ...children) {
	return <html>
		<head>
			<meta charset="utf-8" />
			<title>{title}</title>
			<style>{CSS}</style>
			<link rel="stylesheet" href="https://unpkg.com/prismjs@1.15.0/themes/prism.css" />
		</head>

		<body>
			{children}

			<script src="https://unpkg.com/prismjs@1.15.0/prism.js" />
			<script src="https://unpkg.com/prismjs@1.15.0/components/prism-jsx.min.js" />
		</body>
	</html>;
}
