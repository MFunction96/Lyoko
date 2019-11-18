/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
	entry: {
		app: "./src/App.tsx",
		index: "./src/index.tsx"
	},
	plugins: [
		// new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "Lyoko",
			mobile: true,
			lang: "zh-CN",
			inject: false,
			template: require("html-webpack-template"),
			appMountId: "root",
			googleAnalytics: {
				trackingId: "UA-93890730-1",
				pageViewOnLoad: true
			},
			favicon: "./public/favicon.ico"
		}),
		new ManifestPlugin({
			filename: "./public/manifest.json"
		})
	],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	optimization: {
		splitChunks: {
			chunks: "all",
		},
	},
	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	/*	externals: {
			"react": "React",
			"react-dom": "ReactDOM"
		},*/
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".tsx", ".ts", ".js", "jsx"],
		modules: [path.resolve("src"), "node_modules"],
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: "babel-loader",
			exclude: /node_modules/,
		}, {
			test: /\.(csv|tsv)$/,
			use: [
				"csv-loader",
			],
		}, {
			test: /\.less$/,
			use: [
				{
					loader: "style-loader",
				},
				{
					loader: "css-loader",
				},
				{
					loader: "less-loader",
					options: {
						/*strictMath: true,
						noIeCompat: true,*/
						javascriptEnabled: true
					},
				},
			],
		}, {
			test: /\.xml$/,
			use: [
				"xml-loader",
			],
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: [
				"file-loader",
			],
		}, {
			test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
			exclude: /node_modules/,
			use: ["file-loader?name=[name].[ext]"]
		}, {
			test: /\.css$/,
			use: [
				"style-loader",
				"css-loader",
			]
		}, {
			test: /\.ts(x?)$/,
			exclude: /node_modules/,
			use: [{
				loader: "ts-loader",
				options: {
					transpileOnly: true
				}
			}]
		}, {
			enforce: "pre",
			test: /\.js$/,
			loader: "source-map-loader"
		}]
	}
};
