const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  context: __dirname,
  entry: "./frontend/index.jsx",
  output: {
    path: path.join(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", "*"], 
    fallback: { "path": false,
  "stream": false,
  "buffer": false,
  "http": false,
"crypto": false,
"zlib": false,
"net": false,
"fs": false,

 },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
         
        },
      },
    ],
  },
  devtool: "eval-source-map",
 
  target: 'node',
  externals: [nodeExternals()],

};


