import { createElement, safe } from "complate-stream";
import { IconDefinitions } from "./components/icons"

export default function DefaultLayout({ title }, ...children) {
	return <html>
		<head>
			<meta charset="utf-8" />
			<title>{title}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link href="/assets/fonts.css" rel="stylesheet" />
			<link href="/assets/index.css" rel="stylesheet" />
		</head>

		<body>
			{children}

			<IconDefinitions />
			<script src="https://unpkg.com/prismjs@1.15.0/prism.js" />
			<script src="https://unpkg.com/prismjs@1.15.0/components/prism-jsx.min.js" />
		</body>
	</html>;
}
