import path from "path";

export default {
  mode: "development",
  devtool: "eval-source-map", // https://webpack.js.org/configuration/devtool/
  entry: "./src/index.js", // this is default, can omit if need be
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js", // bundle.js is stored in memory and it will not be created physically
  },
  plugins: [],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};
