{
  '$mixins': {
    '.nav-divider': {
      '$vars': {
        '@color: #e5e5e5': ''
      },
      height: '1px',
      margin: '((@line-height-computed / 2) - 1) 0',
      overflow: 'hidden',
      backgroundColor: '@color'
    }
  }
}