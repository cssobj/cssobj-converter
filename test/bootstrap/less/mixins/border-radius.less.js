{
  '$mixins': {
    '.border-top-radius': {
      '$vars': {
        '@radius': ''
      },
      borderTopRightRadius: '@radius',
      borderTopLeftRadius: '@radius'
    },
    '.border-right-radius': {
      '$vars': {
        '@radius': ''
      },
      borderBottomRightRadius: '@radius',
      borderTopRightRadius: '@radius'
    },
    '.border-bottom-radius': {
      '$vars': {
        '@radius': ''
      },
      borderBottomRightRadius: '@radius',
      borderBottomLeftRadius: '@radius'
    },
    '.border-left-radius': {
      '$vars': {
        '@radius': ''
      },
      borderBottomLeftRadius: '@radius',
      borderTopLeftRadius: '@radius'
    }
  }
}
