// Resolve Webpack alias in Webstorm (https://gist.github.com/zmts/bd620cd473e6c96e8884f03d0cee7f15)
module.exports = {
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src') // TODO: To change for src_new
    }
  },
  rules: [{
    test: /\.(ttf|otf|eot|woff|woff2)$/,
    use: {
      loader: "file-loader",
      options: {
        name: "assets/fonts/[name].[ext]",
      },
    },
  }]
}
