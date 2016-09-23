import nodeResolve from "rollup-plugin-node-resolve";

export default {
	entry: "index.js",
	dest: "main.js",
	format: "iife",
	sourceMap: true,
	plugins: [nodeResolve()]
};
