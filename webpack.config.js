const path = require('path');
import { supportedLocales } from './config.js'

module.exports = {
    mode: 'development',    
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
      plugins: [
        new webpack.ContextReplacementPlugin(
          /^date-fns[/\\]locale$/,
          new RegExp(`\\.[/\\\\](${supportedLocales.join('|')})[/\\\\]index\\.js$`)
        )
      ]
};