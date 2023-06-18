const path = require('path')
console.log(path.resolve(__dirname, 'template/js/custom-js/html/TheProduct.html'))
module.exports = () => ({
  resolve: {
    alias: {
      './js/TheAccount.js': path.resolve(__dirname, 'template/js/custom-js/js/TheAccount.js'),
      './html/TheAccount.html': path.resolve(__dirname, 'template/js/custom-js/html/TheAccount.html')
    }
  }
})