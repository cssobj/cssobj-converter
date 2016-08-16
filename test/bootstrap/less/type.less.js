{
  'h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6': {
    fontFamily: '@headings-font-family',
    fontWeight: '@headings-font-weight',
    lineHeight: '@headings-line-height',
    color: '@headings-color',
    'small,   .small': {
      fontWeight: 'normal',
      lineHeight: 1,
      color: '@headings-small-color'
    }
  },
  'h1, .h1, h2, .h2, h3, .h3': {
    marginTop: '@line-height-computed',
    marginBottom: '(@line-height-computed / 2)',
    'small,   .small': {
      fontSize: '65%'
    }
  },
  'h4, .h4, h5, .h5, h6, .h6': {
    marginTop: '(@line-height-computed / 2)',
    marginBottom: '(@line-height-computed / 2)',
    'small,   .small': {
      fontSize: '75%'
    }
  },
  'h1, .h1': {
    fontSize: '@font-size-h1'
  },
  'h2, .h2': {
    fontSize: '@font-size-h2'
  },
  'h3, .h3': {
    fontSize: '@font-size-h3'
  },
  'h4, .h4': {
    fontSize: '@font-size-h4'
  },
  'h5, .h5': {
    fontSize: '@font-size-h5'
  },
  'h6, .h6': {
    fontSize: '@font-size-h6'
  },
  p: {
    margin: '0 0 (@line-height-computed / 2)'
  },
  '.lead': {
    marginBottom: '@line-height-computed',
    fontSize: 'floor((@font-size-base * 1.15))',
    fontWeight: 300,
    lineHeight: 1.4,
    '@media (min-width: @screen-sm-min)': {
      fontSize: '(@font-size-base * 1.5)'
    }
  },
  'small, .small': {
    fontSize: 'floor((100% * @font-size-small / @font-size-base))'
  },
  'mark, .mark': {
    backgroundColor: '@state-warning-bg',
    padding: '.2em'
  },
  '.text-left': {
    textAlign: 'left'
  },
  '.text-right': {
    textAlign: 'right'
  },
  '.text-center': {
    textAlign: 'center'
  },
  '.text-justify': {
    textAlign: 'justify'
  },
  '.text-nowrap': {
    whiteSpace: 'nowrap'
  },
  '.text-lowercase': {
    textTransform: 'lowercase'
  },
  '.text-uppercase': {
    textTransform: 'uppercase'
  },
  '.text-capitalize': {
    textTransform: 'capitalize'
  },
  '.text-muted': {
    color: '@text-muted'
  },
  '.text-primary': {
    '$mixin': {
      '.text-emphasis-variant': ['@brand-primary']
    }
  },
  '.text-success': {
    '$mixin': {
      '.text-emphasis-variant': ['@state-success-text']
    }
  },
  '.text-info': {
    '$mixin': {
      '.text-emphasis-variant': ['@state-info-text']
    }
  },
  '.text-warning': {
    '$mixin': {
      '.text-emphasis-variant': ['@state-warning-text']
    }
  },
  '.text-danger': {
    '$mixin': {
      '.text-emphasis-variant': ['@state-danger-text']
    }
  },
  '.bg-primary': {
    color: '#fff',
    '$mixin': {
      '.bg-variant': ['@brand-primary']
    }
  },
  '.bg-success': {
    '$mixin': {
      '.bg-variant': ['@state-success-bg']
    }
  },
  '.bg-info': {
    '$mixin': {
      '.bg-variant': ['@state-info-bg']
    }
  },
  '.bg-warning': {
    '$mixin': {
      '.bg-variant': ['@state-warning-bg']
    }
  },
  '.bg-danger': {
    '$mixin': {
      '.bg-variant': ['@state-danger-bg']
    }
  },
  '.page-header': {
    paddingBottom: '((@line-height-computed / 2) - 1)',
    margin: '(@line-height-computed * 2) 0 @line-height-computed',
    borderBottom: '1px solid @page-header-border-color'
  },
  'ul, ol': {
    marginTop: 0,
    marginBottom: '(@line-height-computed / 2)',
    'ul,   ol': {
      marginBottom: 0
    }
  },
  '.list-unstyled': {
    paddingLeft: 0,
    listStyle: 'none'
  },
  '.list-inline': {
    '$mixin': {
      '.list-unstyled': [0]
    },
    marginLeft: '-5px',
    '> li': {
      display: 'inline-block',
      paddingLeft: '5px',
      paddingRight: '5px'
    }
  },
  dl: {
    marginTop: 0,
    marginBottom: '@line-height-computed'
  },
  'dt, dd': {
    lineHeight: '@line-height-base'
  },
  dt: {
    fontWeight: 'bold'
  },
  dd: {
    marginLeft: 0
  },
  '.dl-horizontal': {
    dd: {
      '$extend': '.clearfix all'
    },
    '@media (min-width: @dl-horizontal-breakpoint)': {
      dt: {
        float: 'left',
        width: '(@dl-horizontal-offset - 20)',
        clear: 'left',
        textAlign: 'right',
        '$mixin': {
          '.text-overflow': [0]
        }
      },
      dd: {
        marginLeft: '@dl-horizontal-offset'
      }
    }
  },
  'abbr[title],  abbr[data-original-title]': {
    cursor: 'help',
    borderBottom: '1px dotted @abbr-border-color'
  },
  '.initialism': {
    fontSize: '90%',
    '$mixin': {
      '.text-uppercase': [0]
    }
  },
  blockquote: {
    padding: '(@line-height-computed / 2) @line-height-computed',
    margin: '0 0 @line-height-computed',
    fontSize: '@blockquote-font-size',
    borderLeft: '5px solid @blockquote-border-color',
    'p,   ul,   ol': {
      '&:last-child': {
        marginBottom: 0
      }
    },
    'footer,   small,   .small': {
      display: 'block',
      fontSize: '80%',
      lineHeight: '@line-height-base',
      color: '@blockquote-small-color',
      '&:before': {
        content: '\'\\2014 \\00A0\''
      }
    }
  },
  '.blockquote-reverse, blockquote.pull-right': {
    paddingRight: '15px',
    paddingLeft: 0,
    borderRight: '5px solid @blockquote-border-color',
    borderLeft: 0,
    textAlign: 'right',
    'footer,   small,   .small': {
      '&:before': {
        content: '\'\''
      },
      '&:after': {
        content: '\'\\00A0 \\2014\''
      }
    }
  },
  address: {
    marginBottom: '@line-height-computed',
    fontStyle: 'normal',
    lineHeight: '@line-height-base'
  }
}
