const path = require('path');

module.exports = {
  entry: './src/Game.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),  // Carpeta base del servidor
    publicPath: '/',  // Ruta pública de los recursos generados
    port: 8080,  // Puerto del servidor
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimize: false, // Deshabilita la minificación
  },
};