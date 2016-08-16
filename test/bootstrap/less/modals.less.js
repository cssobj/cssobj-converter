{
  '.modal-open': {
    overflow: 'hidden'
  },
  '.modal': {
    display: 'none',
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: '@zindex-modal',
    WebkitOverflowScrolling: 'touch',
    outline: 0,
    '&.fade .modal-dialog': {
      '$mixin': [{
        '.translate': ['0, -25%']
      },
        {
          '.transition-transform': ['~"0.3s ease-out"']
        }]
    },
    '&.in .modal-dialog': {
      '$mixin': {
        '.translate': ['0, 0']
      }
    }
  },
  '.modal-open .modal': {
    overflowX: 'hidden',
    overflowY: 'auto'
  },
  '.modal-dialog': {
    position: 'relative',
    width: 'auto',
    margin: '10px'
  },
  '.modal-content': {
    position: 'relative',
    backgroundColor: '@modal-content-bg',
    border: ['1px solid @modal-content-fallback-border-color',
      '1px solid @modal-content-border-color'],
    borderRadius: '@border-radius-large',
    '$mixin': {
      '.box-shadow': ['0 3px 9px rgba(0,0,0,.5)']
    },
    backgroundClip: 'padding-box',
    outline: 0
  },
  '.modal-backdrop': {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: '@zindex-modal-background',
    backgroundColor: '@modal-backdrop-bg',
    '&.fade': {
      '$mixin': {
        '.opacity': [0]
      }
    },
    '&.in': {
      '$mixin': {
        '.opacity': ['@modal-backdrop-opacity']
      }
    }
  },
  '.modal-header': {
    padding: '@modal-title-padding',
    borderBottom: '1px solid @modal-header-border-color',
    '$extend': '.clearfix all'
  },
  '.modal-header .close': {
    marginTop: '-2px'
  },
  '.modal-title': {
    margin: 0,
    lineHeight: '@modal-title-line-height'
  },
  '.modal-body': {
    position: 'relative',
    padding: '@modal-inner-padding'
  },
  '.modal-footer': {
    padding: '@modal-inner-padding',
    textAlign: 'right',
    borderTop: '1px solid @modal-footer-border-color',
    '$extend': '.clearfix all',
    '.btn + .btn': {
      marginLeft: '5px',
      marginBottom: 0
    },
    '.btn-group .btn + .btn': {
      marginLeft: '-1px'
    },
    '.btn-block + .btn-block': {
      marginLeft: 0
    }
  },
  '.modal-scrollbar-measure': {
    position: 'absolute',
    top: '-9999px',
    width: '50px',
    height: '50px',
    overflow: 'scroll'
  },
  '@media (min-width: @screen-sm-min)': {
    '.modal-dialog': {
      width: '@modal-md',
      margin: '30px auto'
    },
    '.modal-content': {
      '$mixin': {
        '.box-shadow': ['0 5px 15px rgba(0,0,0,.5)']
      }
    },
    '.modal-sm': {
      width: '@modal-sm'
    }
  },
  '@media (min-width: @screen-md-min)': {
    '.modal-lg': {
      width: '@modal-lg'
    }
  }
}
