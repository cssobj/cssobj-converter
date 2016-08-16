{
  '.thumbnail': {
    display: 'block',
    padding: '@thumbnail-padding',
    marginBottom: '@line-height-computed',
    lineHeight: '@line-height-base',
    backgroundColor: '@thumbnail-bg',
    border: '1px solid @thumbnail-border',
    borderRadius: '@thumbnail-border-radius',
    '$mixin': {
      '.transition': ['border .2s ease-in-out']
    },
    '> img,   a > img': {
      '$extend': '.img-responsive',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    'a&:hover,   a&:focus,   a&.active': {
      borderColor: '@link-color'
    },
    '.caption': {
      padding: '@thumbnail-caption-padding',
      color: '@thumbnail-caption-color'
    }
  }
}
