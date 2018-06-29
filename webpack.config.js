const config = {
  entry: `${ __dirname }/app/src/app.js`,
  output: {
    filename: 'bundle.js',
    path: `${ __dirname }/app/public`
  },
  mode: 'development'
}

module.exports = config