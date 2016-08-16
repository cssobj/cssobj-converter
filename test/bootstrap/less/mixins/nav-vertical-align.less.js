{
  '$mixins': {
    '.navbar-vertical-align': {
      '$vars': {
        '@element-height': ''
      },
      marginTop: '((@navbar-height - @element-height) / 2)',
      marginBottom: '((@navbar-height - @element-height) / 2)'
    }
  }
}
