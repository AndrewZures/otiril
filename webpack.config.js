module.exports = {
  entry: "./entry.jsx",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /(\.jsx$|\.js$)/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};
