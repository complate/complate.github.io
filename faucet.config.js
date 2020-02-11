"use strict";

module.exports = {
	js: [{
		source: "./views/index.jsx",
		target: "./dist/views.js",
		fingerprint: false,
		format: "CommonJS",
		jsx: { pragma: "createElement" }
	}],
	sass: [{
		source: "./lib/styles/_fonts.scss",
		target: "./assets/fonts.css"
	}, {
		source: "./lib/styles/code.scss",
		target: "./assets/code.css"
	}],
	static: [{
		source: "./node_modules/@openfonts/fira-code_all/files/fira-code-all-400.woff2",
		target: "./assets/fonts/fira-code-all-400.woff2"
	},{
		source: "./node_modules/@openfonts/fira-code_all/files/fira-code-all-400.woff",
		target: "./assets/fonts/fira-code-all-400.woff"
	},{
		source: "./node_modules/@openfonts/sarabun_all/files/sarabun-all-400.woff2",
		target: "./assets/fonts/sarabun-all-400.woff2"
	},{
		source: "./node_modules/@openfonts/sarabun_all/files/sarabun-all-400.woff",
		target: "./assets/fonts/sarabun-all-400.woff"
	},{
		source: "./node_modules/@openfonts/sarabun_all/files/sarabun-all-400-italic.woff2",
		target: "./assets/fonts/sarabun-all-400-italic.woff2"
	},{
		source: "./node_modules/@openfonts/sarabun_all/files/sarabun-all-400-italic.woff",
		target: "./assets/fonts/sarabun-all-400-italic.woff"
	},{
		source: "./node_modules/@openfonts/sarabun_all/files/sarabun-all-700.woff2",
		target: "./assets/fonts/sarabun-all-700.woff2"
	},{
		source: "./node_modules/@openfonts/sarabun_all/files/sarabun-all-700.woff",
		target: "./assets/fonts/sarabun-all-700.woff"
	},{
		source: "./node_modules/@openfonts/sarabun_all/files/sarabun-all-700-italic.woff2",
		target: "./assets/fonts/sarabun-all-700-italic.woff2"
	},{
		source: "./node_modules/@openfonts/sarabun_all/files/sarabun-all-700-italic.woff",
		target: "./assets/fonts/sarabun-all-700-italic.woff"
	}],
	manifest: {
		target: "./assets/manifest.json",
		key: "short"
	}
};
