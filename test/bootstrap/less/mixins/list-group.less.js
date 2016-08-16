{
  '$mixins': {
    '.list-group-item-variant': {
      '$vars': {
        '@state': '',
        '@background': '',
        '@color': ''
      },
      '.list-group-item-@{state}': {
        color: '@color',
        backgroundColor: '@background',
        'a&,     button&': {
          color: '@color',
          '.list-group-item-heading': {
            color: 'inherit'
          },
          '&:hover,       &:focus': {
            color: '@color',
            backgroundColor: 'darken(@background, 5%)'
          },
          '&.active,       &.active:hover,       &.active:focus': {
            color: '#fff',
            backgroundColor: '@color',
            borderColor: '@color'
          }
        }
      }
    }
  }
}
