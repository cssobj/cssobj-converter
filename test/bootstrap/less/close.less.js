{
  '.close': {
    float: 'right',
    fontSize: '(@font-size-base * 1.5)',
    fontWeight: '@close-font-weight',
    lineHeight: 1,
    color: '@close-color',
    textShadow: '@close-text-shadow',
    '$mixin': {
      '.opacity': [0.2]
    },
    '&:hover,   &:focus': {
      color: '@close-color',
      textDecoration: 'none',
      cursor: 'pointer',
      '$mixin': {
        '.opacity': [0.5]
      }
    },
    'button&': {
      padding: 0,
      cursor: 'pointer',
      background: 'transparent',
      border: 0,
      WebkitAppearance: 'none'
    }
  }
}
