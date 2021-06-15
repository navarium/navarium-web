module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'focus-within-pseudo-class': false
      }
    }),
    require('tailwindcss')(),
    require('autoprefixer')()
  ]
}
