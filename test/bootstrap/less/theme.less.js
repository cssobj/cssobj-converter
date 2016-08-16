{
  '@import': ['"variables.less"', '"mixins.less"'],
  '.btn-default, .btn-primary, .btn-success, .btn-info, .btn-warning, .btn-danger': {
    textShadow: '0 -1px 0 rgba(0,0,0,.2)',
    '$vars': {
      shadow: 'inset 0 1px 0 rgba(255,255,255,.15), 0 1px 1px rgba(0,0,0,.075)'
    },
    '$mixin': {
      '.box-shadow': ['@shadow']
    },
    '&:active,   &.active': {
      '$mixin': {
        '.box-shadow': ['inset 0 3px 5px rgba(0,0,0,.125)']
      }
    },
    '&.disabled,   &[disabled],   fieldset[disabled] &': {
      '$mixin': {
        '.box-shadow': ['none']
      }
    },
    '.badge': {
      textShadow: 'none'
    }
  },
  '.btn': {
    '&:active,   &.active': {
      backgroundImage: 'none'
    }
  },
  '.btn-default': {
    '$mixin': {
      '.btn-styles': ['@btn-default-bg']
    },
    textShadow: '0 1px 0 #fff',
    borderColor: '#ccc'
  },
  '.btn-primary': {
    '$mixin': {
      '.btn-styles': ['@btn-primary-bg']
    }
  },
  '.btn-success': {
    '$mixin': {
      '.btn-styles': ['@btn-success-bg']
    }
  },
  '.btn-info': {
    '$mixin': {
      '.btn-styles': ['@btn-info-bg']
    }
  },
  '.btn-warning': {
    '$mixin': {
      '.btn-styles': ['@btn-warning-bg']
    }
  },
  '.btn-danger': {
    '$mixin': {
      '.btn-styles': ['@btn-danger-bg']
    }
  },
  '.thumbnail, .img-thumbnail': {
    '$mixin': {
      '.box-shadow': ['0 1px 2px rgba(0,0,0,.075)']
    }
  },
  '.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus': {
    '#gradient > .vertical(@start-color: @dropdown-link-hover-bg; @end-color: darken(@dropdown-link-hover-bg, 5%))': {},
    backgroundColor: 'darken(@dropdown-link-hover-bg, 5%)'
  },
  '.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus': {
    '#gradient > .vertical(@start-color: @dropdown-link-active-bg; @end-color: darken(@dropdown-link-active-bg, 5%))': {},
    backgroundColor: 'darken(@dropdown-link-active-bg, 5%)'
  },
  '.navbar-default': {
    '#gradient > .vertical(@start-color: lighten(@navbar-default-bg, 10%); @end-color: @navbar-default-bg)': {},
    '$mixin': [{
      '.reset-filter': [0]
    }, {
      '.box-shadow': ['@shadow']
    }],
    borderRadius: '@navbar-border-radius',
    '$vars': {
      shadow: 'inset 0 1px 0 rgba(255,255,255,.15), 0 1px 5px rgba(0,0,0,.075)'
    },
    '.navbar-nav > .open > a,   .navbar-nav > .active > a': {
      '#gradient > .vertical(@start-color: darken(@navbar-default-link-active-bg, 5%); @end-color: darken(@navbar-default-link-active-bg, 2%))': {},
      '$mixin': {
        '.box-shadow': ['inset 0 3px 9px rgba(0,0,0,.075)']
      }
    }
  },
  '.navbar-brand, .navbar-nav > li > a': {
    textShadow: '0 1px 0 rgba(255,255,255,.25)'
  },
  '.navbar-inverse': {
    '#gradient > .vertical(@start-color: lighten(@navbar-inverse-bg, 10%); @end-color: @navbar-inverse-bg)': {},
    '$mixin': {
      '.reset-filter': [0]
    },
    borderRadius: '@navbar-border-radius',
    '.navbar-nav > .open > a,   .navbar-nav > .active > a': {
      '#gradient > .vertical(@start-color: @navbar-inverse-link-active-bg; @end-color: lighten(@navbar-inverse-link-active-bg, 2.5%))': {},
      '$mixin': {
        '.box-shadow': ['inset 0 3px 9px rgba(0,0,0,.25)']
      }
    },
    '.navbar-brand,   .navbar-nav > li > a': {
      textShadow: '0 -1px 0 rgba(0,0,0,.25)'
    }
  },
  '.navbar-static-top, .navbar-fixed-top, .navbar-fixed-bottom': {
    borderRadius: 0
  },
  '@media (max-width: @grid-float-breakpoint-max)': {
    '.navbar .navbar-nav .open .dropdown-menu > .active > a': {
      '&,     &:hover,     &:focus': {
        color: '#fff',
        '#gradient > .vertical(@start-color: @dropdown-link-active-bg; @end-color: darken(@dropdown-link-active-bg, 5%))': {}
      }
    }
  },
  '.alert': {
    textShadow: '0 1px 0 rgba(255,255,255,.2)',
    '$vars': {
      shadow: 'inset 0 1px 0 rgba(255,255,255,.25), 0 1px 2px rgba(0,0,0,.05)'
    },
    '$mixin': {
      '.box-shadow': ['@shadow']
    }
  },
  '.alert-success': {
    '$mixin': {
      '.alert-styles': ['@alert-success-bg']
    }
  },
  '.alert-info': {
    '$mixin': {
      '.alert-styles': ['@alert-info-bg']
    }
  },
  '.alert-warning': {
    '$mixin': {
      '.alert-styles': ['@alert-warning-bg']
    }
  },
  '.alert-danger': {
    '$mixin': {
      '.alert-styles': ['@alert-danger-bg']
    }
  },
  '.progress': {
    '#gradient > .vertical(@start-color: darken(@progress-bg, 4%); @end-color: @progress-bg)': {}
  },
  '.progress-bar': {
    '$mixin': {
      '.progress-bar-styles': ['@progress-bar-bg']
    }
  },
  '.progress-bar-success': {
    '$mixin': {
      '.progress-bar-styles': ['@progress-bar-success-bg']
    }
  },
  '.progress-bar-info': {
    '$mixin': {
      '.progress-bar-styles': ['@progress-bar-info-bg']
    }
  },
  '.progress-bar-warning': {
    '$mixin': {
      '.progress-bar-styles': ['@progress-bar-warning-bg']
    }
  },
  '.progress-bar-danger': {
    '$mixin': {
      '.progress-bar-styles': ['@progress-bar-danger-bg']
    }
  },
  '.progress-bar-striped': {
    '#gradient > .striped()': {}
  },
  '.list-group': {
    borderRadius: '@border-radius-base',
    '$mixin': {
      '.box-shadow': ['0 1px 2px rgba(0,0,0,.075)']
    }
  },
  '.list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus': {
    textShadow: '0 -1px 0 darken(@list-group-active-bg, 10%)',
    '#gradient > .vertical(@start-color: @list-group-active-bg; @end-color: darken(@list-group-active-bg, 7.5%))': {},
    borderColor: 'darken(@list-group-active-border, 7.5%)',
    '.badge': {
      textShadow: 'none'
    }
  },
  '.panel': {
    '$mixin': {
      '.box-shadow': ['0 1px 2px rgba(0,0,0,.05)']
    }
  },
  '.panel-default > .panel-heading': {
    '$mixin': {
      '.panel-heading-styles': ['@panel-default-heading-bg']
    }
  },
  '.panel-primary > .panel-heading': {
    '$mixin': {
      '.panel-heading-styles': ['@panel-primary-heading-bg']
    }
  },
  '.panel-success > .panel-heading': {
    '$mixin': {
      '.panel-heading-styles': ['@panel-success-heading-bg']
    }
  },
  '.panel-info > .panel-heading': {
    '$mixin': {
      '.panel-heading-styles': ['@panel-info-heading-bg']
    }
  },
  '.panel-warning > .panel-heading': {
    '$mixin': {
      '.panel-heading-styles': ['@panel-warning-heading-bg']
    }
  },
  '.panel-danger > .panel-heading': {
    '$mixin': {
      '.panel-heading-styles': ['@panel-danger-heading-bg']
    }
  },
  '.well': {
    '#gradient > .vertical(@start-color: darken(@well-bg, 5%); @end-color: @well-bg)': {},
    borderColor: 'darken(@well-bg, 10%)',
    '$vars': {
      shadow: 'inset 0 1px 3px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1)'
    },
    '$mixin': {
      '.box-shadow': ['@shadow']
    }
  },
  '$mixins': {
    '.btn-styles': {
      '$vars': {
        '@btn-color: #555': ''
      },
      '#gradient > .vertical(@start-color: @btn-color; @end-color: darken(@btn-color, 12%))': {},
      '$mixin': {
        '.reset-filter': [0]
      },
      backgroundRepeat: 'repeat-x',
      borderColor: 'darken(@btn-color, 14%)',
      '&:hover,   &:focus': {
        backgroundColor: 'darken(@btn-color, 12%)',
        backgroundPosition: '0 -15px'
      },
      '&:active,   &.active': {
        backgroundColor: 'darken(@btn-color, 12%)',
        borderColor: 'darken(@btn-color, 14%)'
      },
      '&.disabled,   &[disabled],   fieldset[disabled] &': {
        '&,     &:hover,     &:focus,     &.focus,     &:active,     &.active': {
          backgroundColor: 'darken(@btn-color, 12%)',
          backgroundImage: 'none'
        }
      }
    },
    '.alert-styles': {
      '$vars': {
        '@color': ''
      },
      '#gradient > .vertical(@start-color: @color; @end-color: darken(@color, 7.5%))': {},
      borderColor: 'darken(@color, 15%)'
    },
    '.progress-bar-styles': {
      '$vars': {
        '@color': ''
      },
      '#gradient > .vertical(@start-color: @color; @end-color: darken(@color, 10%))': {}
    },
    '.panel-heading-styles': {
      '$vars': {
        '@color': ''
      },
      '#gradient > .vertical(@start-color: @color; @end-color: darken(@color, 5%))': {}
    }
  }
}
