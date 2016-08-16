{
  '.btn-group, .btn-group-vertical': {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'middle',
    '> .btn': {
      position: 'relative',
      float: 'left',
      '&:hover,     &:focus,     &:active,     &.active': {
        zIndex: 2
      }
    }
  },
  '.btn-group': {
    '.btn + .btn,   .btn + .btn-group,   .btn-group + .btn,   .btn-group + .btn-group': {
      marginLeft: '-1px'
    }
  },
  '.btn-toolbar': {
    marginLeft: '-5px',
    '$extend': '.clearfix all',
    '.btn,   .btn-group,   .input-group': {
      float: 'left'
    },
    '> .btn,   > .btn-group,   > .input-group': {
      marginLeft: '5px'
    }
  },
  '.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle)': {
    borderRadius: 0
  },
  '.btn-group > .btn:first-child': {
    marginLeft: 0,
    '&:not(:last-child):not(.dropdown-toggle)': {
      '$mixin': {
        '.border-right-radius': [0]
      }
    }
  },
  '.btn-group > .btn:last-child:not(:first-child), .btn-group > .dropdown-toggle:not(:first-child)': {
    '$mixin': {
      '.border-left-radius': [0]
    }
  },
  '.btn-group > .btn-group': {
    float: 'left'
  },
  '.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn': {
    borderRadius: 0
  },
  '.btn-group > .btn-group:first-child:not(:last-child)': {
    '> .btn:last-child,   > .dropdown-toggle': {
      '$mixin': {
        '.border-right-radius': [0]
      }
    }
  },
  '.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child': {
    '$mixin': {
      '.border-left-radius': [0]
    }
  },
  '.btn-group .dropdown-toggle:active, .btn-group.open .dropdown-toggle': {
    outline: 0
  },
  '.btn-group-xs > .btn': {
    '$extend': '.btn-xs'
  },
  '.btn-group-sm > .btn': {
    '$extend': '.btn-sm'
  },
  '.btn-group-lg > .btn': {
    '$extend': '.btn-lg'
  },
  '.btn-group > .btn + .dropdown-toggle': {
    paddingLeft: '8px',
    paddingRight: '8px'
  },
  '.btn-group > .btn-lg + .dropdown-toggle': {
    paddingLeft: '12px',
    paddingRight: '12px'
  },
  '.btn-group.open .dropdown-toggle': {
    '$mixin': {
      '.box-shadow': ['inset 0 3px 5px rgba(0,0,0,.125)']
    },
    '&.btn-link': {
      '$mixin': {
        '.box-shadow': ['none']
      }
    }
  },
  '.btn .caret': {
    marginLeft: 0
  },
  '.btn-lg .caret': {
    borderWidth: '@caret-width-large @caret-width-large 0',
    borderBottomWidth: 0
  },
  '.dropup .btn-lg .caret': {
    borderWidth: '0 @caret-width-large @caret-width-large'
  },
  '.btn-group-vertical': {
    '> .btn,   > .btn-group,   > .btn-group > .btn': {
      display: 'block',
      float: 'none',
      width: '100%',
      maxWidth: '100%'
    },
    '> .btn-group': {
      '$extend': '.clearfix all',
      '> .btn': {
        float: 'none'
      }
    },
    '> .btn + .btn,   > .btn + .btn-group,   > .btn-group + .btn,   > .btn-group + .btn-group': {
      marginTop: '-1px',
      marginLeft: 0
    }
  },
  '.btn-group-vertical > .btn': {
    '&:not(:first-child):not(:last-child)': {
      borderRadius: 0
    },
    '&:first-child:not(:last-child)': {
      '$mixin': [{
        '.border-top-radius': ['@btn-border-radius-base']
      },
        {
          '.border-bottom-radius': [0]
        }]
    },
    '&:last-child:not(:first-child)': {
      '$mixin': [{
        '.border-top-radius': [0]
      },
        {
          '.border-bottom-radius': ['@btn-border-radius-base']
        }]
    }
  },
  '.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn': {
    borderRadius: 0
  },
  '.btn-group-vertical > .btn-group:first-child:not(:last-child)': {
    '> .btn:last-child,   > .dropdown-toggle': {
      '$mixin': {
        '.border-bottom-radius': [0]
      }
    }
  },
  '.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child': {
    '$mixin': {
      '.border-top-radius': [0]
    }
  },
  '.btn-group-justified': {
    display: 'table',
    width: '100%',
    tableLayout: 'fixed',
    borderCollapse: 'separate',
    '> .btn,   > .btn-group': {
      float: 'none',
      display: 'table-cell',
      width: '1%'
    },
    '> .btn-group .btn': {
      width: '100%'
    },
    '> .btn-group .dropdown-menu': {
      left: 'auto'
    }
  },
  '[data-toggle="buttons"]': {
    '> .btn,   > .btn-group > .btn': {
      'input[type="radio"],     input[type="checkbox"]': {
        position: 'absolute',
        clip: 'rect(0,0,0,0)',
        pointerEvents: 'none'
      }
    }
  }
}
