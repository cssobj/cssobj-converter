{
  '$mixins': {
    '.clearfix': {
      '$vars': {
        '': ''
      },
      '&:before,   &:after': {
        content: '" "',
        display: 'table'
      },
      '&:after': {
        clear: 'both'
      }
    }
  }
}
