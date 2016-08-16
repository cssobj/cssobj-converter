{
  '.jumbotron': {
    paddingTop: '@jumbotron-padding',
    paddingBottom: '@jumbotron-padding',
    marginBottom: '@jumbotron-padding',
    color: '@jumbotron-color',
    backgroundColor: '@jumbotron-bg',
    'h1,   .h1': {
      color: '@jumbotron-heading-color'
    },
    p: {
      marginBottom: '(@jumbotron-padding / 2)',
      fontSize: '@jumbotron-font-size',
      fontWeight: 200
    },
    '> hr': {
      borderTopColor: 'darken(@jumbotron-bg, 10%)'
    },
    '.container &,   .container-fluid &': {
      borderRadius: '@border-radius-large',
      paddingLeft: '(@grid-gutter-width / 2)',
      paddingRight: '(@grid-gutter-width / 2)'
    },
    '.container': {
      maxWidth: '100%'
    },
    '@media screen and (min-width: @screen-sm-min)': {
      paddingTop: '(@jumbotron-padding * 1.6)',
      paddingBottom: '(@jumbotron-padding * 1.6)',
      '.container &,     .container-fluid &': {
        paddingLeft: '(@jumbotron-padding * 2)',
        paddingRight: '(@jumbotron-padding * 2)'
      },
      'h1,     .h1': {
        fontSize: '@jumbotron-heading-font-size'
      }
    }
  }
}
