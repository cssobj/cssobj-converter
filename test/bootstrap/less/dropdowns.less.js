{
  '.caret': {
    display: 'inline-block',
    width: 0,
    height: 0,
    marginLeft: '2px',
    verticalAlign: 'middle',
    borderTop: ['@caret-width-base dashed', '@caret-width-base solid ~"\\9"'],
    borderRight: '@caret-width-base solid transparent',
    borderLeft: '@caret-width-base solid transparent'
  },
  '.dropup, .dropdown': {
    position: 'relative'
  },
  '.dropdown-toggle:focus': {
    outline: 0
  },
  '.dropdown-menu': {
    position: 'absolute',
    top: '100%',
    left: 0,
    zIndex: '@zindex-dropdown',
    display: 'none',
    float: 'left',
    minWidth: '160px',
    padding: '5px 0',
    margin: '2px 0 0',
    listStyle: 'none',
    fontSize: '@font-size-base',
    textAlign: 'left',
    backgroundColor: '@dropdown-bg',
    border: ['1px solid @dropdown-fallback-border',
      '1px solid @dropdown-border'],
    borderRadius: '@border-radius-base',
    '$mixin': {
      '.box-shadow': ['0 6px 12px rgba(0,0,0,.175)']
    },
    backgroundClip: 'padding-box',
    '&.pull-right': {
      right: 0,
      left: 'auto'
    },
    '.divider': {
      '$mixin': {
        '.nav-divider': ['@dropdown-divider-bg']
      }
    },
    '> li > a': {
      display: 'block',
      padding: '3px 20px',
      clear: 'both',
      fontWeight: 'normal',
      lineHeight: '@line-height-base',
      color: '@dropdown-link-color',
      whiteSpace: 'nowrap'
    }
  },
  '.dropdown-menu > li > a': {
    '&:hover,   &:focus': {
      textDecoration: 'none',
      color: '@dropdown-link-hover-color',
      backgroundColor: '@dropdown-link-hover-bg'
    }
  },
  '.dropdown-menu > .active > a': {
    '&,   &:hover,   &:focus': {
      color: '@dropdown-link-active-color',
      textDecoration: 'none',
      outline: 0,
      backgroundColor: '@dropdown-link-active-bg'
    }
  },
  '.dropdown-menu > .disabled > a': {
    '&,   &:hover,   &:focus': {
      color: '@dropdown-link-disabled-color'
    },
    '&:hover,   &:focus': {
      textDecoration: 'none',
      backgroundColor: 'transparent',
      backgroundImage: 'none',
      '$mixin': {
        '.reset-filter': [0]
      },
      cursor: '@cursor-disabled'
    }
  },
  '.open': {
    '> .dropdown-menu': {
      display: 'block'
    },
    '> a': {
      outline: 0
    }
  },
  '.dropdown-menu-right': {
    left: 'auto',
    right: 0
  },
  '.dropdown-menu-left': {
    left: 0,
    right: 'auto'
  },
  '.dropdown-header': {
    display: 'block',
    padding: '3px 20px',
    fontSize: '@font-size-small',
    lineHeight: '@line-height-base',
    color: '@dropdown-header-color',
    whiteSpace: 'nowrap'
  },
  '.dropdown-backdrop': {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    zIndex: '(@zindex-dropdown - 10)'
  },
  '.pull-right > .dropdown-menu': {
    right: 0,
    left: 'auto'
  },
  '.dropup, .navbar-fixed-bottom .dropdown': {
    '.caret': {
      borderTop: 0,
      borderBottom: ['@caret-width-base dashed', '@caret-width-base solid ~"\\9"'],
      content: '""'
    },
    '.dropdown-menu': {
      top: 'auto',
      bottom: '100%',
      marginBottom: '2px'
    }
  },
  '@media (min-width: @grid-float-breakpoint)': {
    '.navbar-right': {
      '.dropdown-menu': {
        '$mixin': {
          '.dropdown-menu-right': [0]
        }
      },
      '.dropdown-menu-left': {
        '$mixin': {
          '.dropdown-menu-left': [0]
        }
      }
    }
  }
}
