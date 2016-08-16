{
  '.carousel': {
    position: 'relative'
  },
  '.carousel-inner': {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    '> .item': {
      display: 'none',
      position: 'relative',
      '$mixin': {
        '.transition': ['.6s ease-in-out left']
      },
      '> img,     > a > img': {
        '$extend': '.img-responsive',
        lineHeight: 1
      },
      '@media all and (transform-3d), (-webkit-transform-3d)': {
        '$mixin': [{
          '.transition-transform': ['~\'0.6s ease-in-out\'']
        },
          {
            '.backface-visibility': ['~\'hidden\'']
          },
          {
            '.perspective': ['1000px']
          }],
        '&.next,       &.active.right': {
          '$mixin': {
            '.translate3d': ['100%, 0, 0']
          },
          left: 0
        },
        '&.prev,       &.active.left': {
          '$mixin': {
            '.translate3d': ['-100%, 0, 0']
          },
          left: 0
        },
        '&.next.left,       &.prev.right,       &.active': {
          '$mixin': {
            '.translate3d': ['0, 0, 0']
          },
          left: 0
        }
      }
    },
    '> .active,   > .next,   > .prev': {
      display: 'block'
    },
    '> .active': {
      left: 0
    },
    '> .next,   > .prev': {
      position: 'absolute',
      top: 0,
      width: '100%'
    },
    '> .next': {
      left: '100%'
    },
    '> .prev': {
      left: '-100%'
    },
    '> .next.left,   > .prev.right': {
      left: 0
    },
    '> .active.left': {
      left: '-100%'
    },
    '> .active.right': {
      left: '100%'
    }
  },
  '.carousel-control': {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '@carousel-control-width',
    '$mixin': {
      '.opacity': ['@carousel-control-opacity']
    },
    fontSize: '@carousel-control-font-size',
    color: '@carousel-control-color',
    textAlign: 'center',
    textShadow: '@carousel-text-shadow',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    '&.left': {
      '#gradient > .horizontal(@start-color: rgba(0,0,0,.5); @end-color: rgba(0,0,0,.0001))': {}
    },
    '&.right': {
      left: 'auto',
      right: 0,
      '#gradient > .horizontal(@start-color: rgba(0,0,0,.0001); @end-color: rgba(0,0,0,.5))': {}
    },
    '&:hover,   &:focus': {
      outline: 0,
      color: '@carousel-control-color',
      textDecoration: 'none',
      '$mixin': {
        '.opacity': [0.9]
      }
    },
    '.icon-prev,   .icon-next,   .glyphicon-chevron-left,   .glyphicon-chevron-right': {
      position: 'absolute',
      top: '50%',
      marginTop: '-10px',
      zIndex: 5,
      display: 'inline-block'
    },
    '.icon-prev,   .glyphicon-chevron-left': {
      left: '50%',
      marginLeft: '-10px'
    },
    '.icon-next,   .glyphicon-chevron-right': {
      right: '50%',
      marginRight: '-10px'
    },
    '.icon-prev,   .icon-next': {
      width: '20px',
      height: '20px',
      lineHeight: 1,
      fontFamily: 'serif'
    },
    '.icon-prev': {
      '&:before': {
        content: '\'\\2039\''
      }
    },
    '.icon-next': {
      '&:before': {
        content: '\'\\203a\''
      }
    }
  },
  '.carousel-indicators': {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    zIndex: 15,
    width: '60%',
    marginLeft: '-30%',
    paddingLeft: 0,
    listStyle: 'none',
    textAlign: 'center',
    li: {
      display: 'inline-block',
      width: '10px',
      height: '10px',
      margin: '1px',
      textIndent: '-999px',
      border: '1px solid @carousel-indicator-border-color',
      borderRadius: '10px',
      cursor: 'pointer',
      backgroundColor: ['#000 \\9', 'rgba(0,0,0,0)']
    },
    '.active': {
      margin: 0,
      width: '12px',
      height: '12px',
      backgroundColor: '@carousel-indicator-active-bg'
    }
  },
  '.carousel-caption': {
    position: 'absolute',
    left: '15%',
    right: '15%',
    bottom: '20px',
    zIndex: 10,
    paddingTop: '20px',
    paddingBottom: '20px',
    color: '@carousel-caption-color',
    textAlign: 'center',
    textShadow: '@carousel-text-shadow',
    '& .btn': {
      textShadow: 'none'
    }
  },
  '@media screen and (min-width: @screen-sm-min)': {
    '.carousel-control': {
      '.glyphicon-chevron-left,     .glyphicon-chevron-right,     .icon-prev,     .icon-next': {
        width: '(@carousel-control-font-size * 1.5)',
        height: '(@carousel-control-font-size * 1.5)',
        marginTop: '(@carousel-control-font-size / -2)',
        fontSize: '(@carousel-control-font-size * 1.5)'
      },
      '.glyphicon-chevron-left,     .icon-prev': {
        marginLeft: '(@carousel-control-font-size / -2)'
      },
      '.glyphicon-chevron-right,     .icon-next': {
        marginRight: '(@carousel-control-font-size / -2)'
      }
    },
    '.carousel-caption': {
      left: '20%',
      right: '20%',
      paddingBottom: '30px'
    },
    '.carousel-indicators': {
      bottom: '20px'
    }
  }
}
