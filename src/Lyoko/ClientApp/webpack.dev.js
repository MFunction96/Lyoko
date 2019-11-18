/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const fs = require("fs");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
		port: 33365,
		compress: true,
		/*https: {
			key: fs.readFileSync(path.resolve(__dirname, "../Certificates/localhost.key")),
			cert: fs.readFileSync(path.resolve(__dirname, "../Certificates/localhost.crt")),
			ca: fs.readFileSync(path.resolve(__dirname, "../Certificates/localhost.pem"))
		},
		http2: true*/
	}
});
