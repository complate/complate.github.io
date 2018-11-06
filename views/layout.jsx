import { createElement } from "complate-stream";

let CSS = `
body {
	max-width: 40em;
	margin: 0 auto;
	font-family: sans-serif;
}

p {
	line-height: 1.4;
}

blockquote {
	margin-left: 1em;
	border-left: 3px solid #AAA;
	padding-left: 0.5em;
}

blockquote + p {
	margin-left: 1em;
	font-size: 0.9em;
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
