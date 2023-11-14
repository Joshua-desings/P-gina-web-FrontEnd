const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // o 'production' según tu entorno
  entry: './src/index.html',
  output: {
    filename: 'index.html', // Nombre del archivo de salida, no se usará, pero webpack requiere una salida
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Ruta al archivo HTML de tu aplicación
      filename: 'index.html', // Nombre del archivo HTML de salida
    }),
  ],
};
