{
  '.input-group': {
    position: 'relative',
    display: 'table',
    borderCollapse: 'separate',
    '&[class*="col-"]': {
      float: 'none',
      paddingLeft: 0,
      paddingRight: 0
    },
    '.form-control': {
      position: 'relative',
      zIndex: 2,
      float: 'left',
      width: '100%',
      marginBottom: 0,
      '&:focus': {
        zIndex: 3
      }
    }
  },
  '.input-group-lg > .form-control, .input-group-lg > .input-group-addon, .input-group-lg > .input-group-btn > .btn': {
    '$mixin': {
      '.input-lg': [0]
    }
  },
  '.input-group-sm > .form-control, .input-group-sm > .input-group-addon, .input-group-sm > .input-group-btn > .btn': {
    '$mixin': {
      '.input-sm': [0]
    }
  },
  '.input-group-addon, .input-group-btn, .input-group .form-control': {
    display: 'table-cell',
    '&:not(:first-child):not(:last-child)': {
      borderRadius: 0
    }
  },
  '.input-group-addon, .input-group-btn': {
    width: '1%',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle'
  },
  '.input-group-addon': {
    padding: '@padding-base-vertical @padding-base-horizontal',
    fontSize: '@font-size-base',
    fontWeight: 'normal',
    lineHeight: 1,
    color: '@input-color',
    textAlign: 'center',
    backgroundColor: '@input-group-addon-bg',
    border: '1px solid @input-group-addon-border-color',
    borderRadius: '@input-border-radius',
    '&.input-sm': {
      padding: '@padding-small-vertical @padding-small-horizontal',
      fontSize: '@font-size-small',
      borderRadius: '@input-border-radius-small'
    },
    '&.input-lg': {
      padding: '@padding-large-vertical @padding-large-horizontal',
      fontSize: '@font-size-large',
      borderRadius: '@input-border-radius-large'
    },
    'input[type="radio"],   input[type="checkbox"]': {
      marginTop: 0
    }
  },
  '.input-group .form-control:first-child, .input-group-addon:first-child, .input-group-btn:first-child > .btn, .input-group-btn:first-child > .btn-group > .btn, .input-group-btn:first-child > .dropdown-toggle, .input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle), .input-group-btn:last-child > .btn-group:not(:last-child) > .btn': {
    '$mixin': {
      '.border-right-radius': [0]
    }
  },
  '.input-group-addon:first-child': {
    borderRight: 0
  },
  '.input-group .form-control:last-child, .input-group-addon:last-child, .input-group-btn:last-child > .btn, .input-group-btn:last-child > .btn-group > .btn, .input-group-btn:last-child > .dropdown-toggle, .input-group-btn:first-child > .btn:not(:first-child), .input-group-btn:first-child > .btn-group:not(:first-child) > .btn': {
    '$mixin': {
      '.border-left-radius': [0]
    }
  },
  '.input-group-addon:last-child': {
    borderLeft: 0
  },
  '.input-group-btn': {
    position: 'relative',
    fontSize: 0,
    whiteSpace: 'nowrap',
    '> .btn': {
      position: 'relative',
      '+ .btn': {
        marginLeft: '-1px'
      },
      '&:hover,     &:focus,     &:active': {
        zIndex: 2
      }
    },
    '&:first-child': {
      '> .btn,     > .btn-group': {
        marginRight: '-1px'
      }
    },
    '&:last-child': {
      '> .btn,     > .btn-group': {
        zIndex: 2,
        marginLeft: '-1px'
      }
    }
  }
}
