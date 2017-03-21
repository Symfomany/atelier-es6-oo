module: {  
  loaders: [
    {
      test: /tests/\.spec.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }
  ]
}