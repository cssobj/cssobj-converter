{
  '$mixins': {
    '.label-variant': {
      '$vars': {
        '@color': ''
      },
      backgroundColor: '@color',
      '&[href]': {
        '&:hover,     &:focus': {
          backgroundColor: 'darken(@color, 10%)'
        }
      }
    }
  }
}
