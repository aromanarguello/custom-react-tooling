const path = require('path'); // from node

module.exports = {
  mode: 'production',
  entry: './src/index.js', // webpack will put this by default
  output: {
    path: path.join(__dirname, 'dist'), // __dirname will give us the root of our project
    filename: 'app.bundle.js' // filnemae for output
  },
  module: {
    rules: [
      {
        test: /\.js$/, // decide which modules this rules applies to
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
};
