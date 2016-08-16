{
  '$mixins': {
    '.size': {
      '$vars': {
        '@width': '',
        '@height': ''
      },
      width: '@width',
      height: '@height'
    },
    '.square': {
      '$vars': {
        '@size': ''
      },
      '$mixin': {
        '.size': ['@size', '@size']
      }
    }
  }
}
