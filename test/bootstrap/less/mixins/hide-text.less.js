{
  '$mixins': {
    '.hide-text': {
      '$vars': {
        '': ''
      },
      font: '~"0/0" a',
      color: 'transparent',
      textShadow: 'none',
      backgroundColor: 'transparent',
      border: 0
    },
    '.text-hide': {
      '$vars': {
        '': ''
      },
      '$mixin': {
        '.hide-text': [0]
      }
    }
  }
}
