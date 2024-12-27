// you need to rerun << npx webpack serve >> for changes to take effect
//  if changes are made to this file while dev server is running.
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // entry point file:
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    // clean output directory before adding new files:
    clean: true,
  },
  // Without following option, source code in inspect option will not be untouched
  //  source code. So will be harder to debug. Plus If we don’t do this, any error
  //  messages we get won’t necessarily match up to the correct files and line numbers
  //  from our development code
  devtool: "eval-source-map",
  // As html is not js, so dev server will not restart on changes made to it. So,
  // adding it to watch list of dev server:
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    })
  ],
  module: {
    rules: [
      // Below object in following order for importing & using css files in js. 
      // Also requires style-loader & css-loader packages:
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // Below object for font files:
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      // Below object for Image files we reference in our HTML file, e.g. as the src of an <img>
      // Also requires html-loader package:
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // Below object for Images we use in our JavaScript, where we will need to import like:
      // import someName from "./image.png";
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      }
    ],
  },
};
