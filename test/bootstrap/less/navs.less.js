{
  '.nav': {
    marginBottom: 0,
    paddingLeft: 0,
    listStyle: 'none',
    '$extend': '.clearfix all',
    '> li': {
      position: 'relative',
      display: 'block',
      '> a': {
        position: 'relative',
        display: 'block',
        padding: '@nav-link-padding',
        '&:hover,       &:focus': {
          textDecoration: 'none',
          backgroundColor: '@nav-link-hover-bg'
        }
      },
      '&.disabled > a': {
        color: '@nav-disabled-link-color',
        '&:hover,       &:focus': {
          color: '@nav-disabled-link-hover-color',
          textDecoration: 'none',
          backgroundColor: 'transparent',
          cursor: '@cursor-disabled'
        }
      }
    },
    '.open > a': {
      '&,     &:hover,     &:focus': {
        backgroundColor: '@nav-link-hover-bg',
        borderColor: '@link-color'
      }
    },
    '.nav-divider': {
      '$mixin': {
        '.nav-divider': [0]
      }
    },
    '> li > a > img': {
      maxWidth: 'none'
    }
  },
  '.nav-tabs': {
    borderBottom: '1px solid @nav-tabs-border-color',
    '> li': {
      float: 'left',
      marginBottom: '-1px',
      '> a': {
        marginRight: '2px',
        lineHeight: '@line-height-base',
        border: '1px solid transparent',
        borderRadius: '@border-radius-base @border-radius-base 0 0',
        '&:hover': {
          borderColor: '@nav-tabs-link-hover-border-color @nav-tabs-link-hover-border-color @nav-tabs-border-color'
        }
      },
      '&.active > a': {
        '&,       &:hover,       &:focus': {
          color: '@nav-tabs-active-link-hover-color',
          backgroundColor: '@nav-tabs-active-link-hover-bg',
          border: '1px solid @nav-tabs-active-link-hover-border-color',
          borderBottomColor: 'transparent',
          cursor: 'default'
        }
      }
    },
    '&.nav-justified': {
      '$mixin': [{
        '.nav-justified': [0]
      },
        {
          '.nav-tabs-justified': [0]
        }]
    }
  },
  '.nav-pills': {
    '> li': {
      float: 'left',
      '> a': {
        borderRadius: '@nav-pills-border-radius'
      },
      '+ li': {
        marginLeft: '2px'
      },
      '&.active > a': {
        '&,       &:hover,       &:focus': {
          color: '@nav-pills-active-link-hover-color',
          backgroundColor: '@nav-pills-active-link-hover-bg'
        }
      }
    }
  },
  '.nav-stacked': {
    '> li': {
      float: 'none',
      '+ li': {
        marginTop: '2px',
        marginLeft: 0
      }
    }
  },
  '.nav-justified': {
    width: '100%',
    '> li': {
      float: 'none',
      '> a': {
        textAlign: 'center',
        marginBottom: '5px'
      }
    },
    '> .dropdown .dropdown-menu': {
      top: 'auto',
      left: 'auto'
    },
    '@media (min-width: @screen-sm-min)': {
      '> li': {
        display: 'table-cell',
        width: '1%',
        '> a': {
          marginBottom: 0
        }
      }
    }
  },
  '.nav-tabs-justified': {
    borderBottom: 0,
    '> li > a': {
      marginRight: 0,
      borderRadius: '@border-radius-base'
    },
    '> .active > a,   > .active > a:hover,   > .active > a:focus': {
      border: '1px solid @nav-tabs-justified-link-border-color'
    },
    '@media (min-width: @screen-sm-min)': {
      '> li > a': {
        borderBottom: '1px solid @nav-tabs-justified-link-border-color',
        borderRadius: '@border-radius-base @border-radius-base 0 0'
      },
      '> .active > a,     > .active > a:hover,     > .active > a:focus': {
        borderBottomColor: '@nav-tabs-justified-active-link-border-color'
      }
    }
  },
  '.tab-content': {
    '> .tab-pane': {
      display: 'none'
    },
    '> .active': {
      display: 'block'
    }
  },
  '.nav-tabs .dropdown-menu': {
    marginTop: '-1px',
    '$mixin': {
      '.border-top-radius': [0]
    }
  }
}
