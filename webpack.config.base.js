const path = require('path'); // from node
const HtmlWebpackPluging = require('html-webpack-plugin');

module.exports = {
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
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        // loaders is depracted, to pass multiple loaders use the `use` key
        // css loader will let babel understand the css syntax
        // style-loader will take css and inject it into our html run-time
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPluging({
      template: './src/index.html'
    })
  ]
};
