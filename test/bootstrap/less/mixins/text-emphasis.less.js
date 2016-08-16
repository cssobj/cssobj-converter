{
  '$mixins': {
    '.text-emphasis-variant': {
      '$vars': {
        '@color': ''
      },
      color: '@color',
      'a&:hover,   a&:focus': {
        color: 'darken(@color, 10%)'
      }
    }
  }
}
