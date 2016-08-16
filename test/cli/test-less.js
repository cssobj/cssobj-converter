{
  '$vars': {
    'alert-padding': '12px'
  },
  '.alert': {
    padding: '@alert-padding',
    h4: {
      marginTop: 0,
      color: 'inherit',
      '$mixin': {
        '.mix': ['#fff', '10px']
      }
    }
  },
  h3: {
    '$extend': '.alert h4',
    fontSize: '12px'
  },
  '$mixins': {
    '.mix': {
      color: '@a',
      margin: '@b',
      '$vars': {
        '@a': '',
        '@b': ''
      }
    }
  }
}
