{
  '$mixins': {
    '.bg-variant': {
      '$vars': {
        '@color': ''
      },
      backgroundColor: '@color',
      'a&:hover,   a&:focus': {
        backgroundColor: 'darken(@color, 10%)'
      }
    }
  }
}
