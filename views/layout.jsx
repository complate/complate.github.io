import { createElement, safe } from "complate-stream";

export default function DefaultLayout({ title }, ...children) {
	return <html>
		<head>
			<meta charset="utf-8" />
			<meta content="width=device-width, initial-scale=1.0" name="viewport" />
			<title>{title}</title>
			<link href="/assets/fonts.css" rel="stylesheet" />
			<link href="/assets/index.css" rel="stylesheet" />
		</head>

		<body>
			{children}

			<script src="https://unpkg.com/prismjs@1.15.0/prism.js" />
			<script src="https://unpkg.com/prismjs@1.15.0/components/prism-jsx.min.js" />
		</body>
	</html>;
}
