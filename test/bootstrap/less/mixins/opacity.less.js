{
  '$mixins': {
    '.opacity': {
      '$vars': {
        'opacity-ie': '(@opacity * 100)',
        '@opacity': ''
      },
      opacity: '@opacity',
      filter: '~"alpha(opacity=@{opacity-ie})"'
    }
  }
}
