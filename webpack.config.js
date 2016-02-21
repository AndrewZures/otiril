module.exports = {
  entry: "./entry.jsx",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /(\.jsx$|\.js$)/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      { test: /\.css$/,
        loader: "style!css"
      }
    ]
  }
};
