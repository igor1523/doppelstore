const path = require('path')
console.log(path.resolve(__dirname, 'template/js/custom-js/html/TheProduct.html'))
module.exports = () => ({
  resolve: {
    alias: {
      './js/TheAccount.js': path.resolve(__dirname, 'template/js/custom-js/js/TheAccount.js'),
      './html/TheAccount.html': path.resolve(__dirname, 'template/js/custom-js/html/TheAccount.html'),
      './js/ProductCard.js': path.resolve(__dirname, 'template/js/custom-js/js/ProductCard.js'),
      './html/ProductCard.html': path.resolve(__dirname, 'template/js/custom-js/html/ProductCard.html'),
      './html/TheProduct.html': path.resolve(__dirname, 'template/js/custom-js/components/TheProduct.html'),
      './html/TheProduct.js': path.resolve(__dirname, 'template/js/custom-js/components/TheProduct.js')
    }
  }
})
