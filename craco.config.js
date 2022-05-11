// craco.config.js
module.exports = {
    style: {
      postOptiopns: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }