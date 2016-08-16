{
  '$mixins': {
    '.alert-variant': {
      '$vars': {
        '@background': '',
        '@border': '',
        '@text-color': ''
      },
      backgroundColor: '@background',
      borderColor: '@border',
      color: '@text-color',
      hr: {
        borderTopColor: 'darken(@border, 5%)'
      },
      '.alert-link': {
        color: 'darken(@text-color, 10%)'
      }
    }
  }
}
