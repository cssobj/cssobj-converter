{
  '$mixins': {
    '.progress-bar-variant': {
      '$vars': {
        '@color': ''
      },
      backgroundColor: '@color',
      '.progress-striped &': {
        '#gradient > .striped()': {}
      }
    }
  }
}
