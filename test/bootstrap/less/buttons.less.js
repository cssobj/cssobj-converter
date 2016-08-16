{
  '.btn': {
    display: 'inline-block',
    marginBottom: 0,
    fontWeight: '@btn-font-weight',
    textAlign: 'center',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    backgroundImage: 'none',
    border: '1px solid transparent',
    whiteSpace: 'nowrap',
    '$mixin': [{
      '.button-size': ['@padding-base-vertical',
        '@padding-base-horizontal',
        '@font-size-base',
        '@line-height-base',
        '@btn-border-radius-base']
    },
      {
        '.user-select': ['none']
      }],
    '&,   &:active,   &.active': {
      '&:focus,     &.focus': {
        '$mixin': {
          '.tab-focus': [0]
        }
      }
    },
    '&:hover,   &:focus,   &.focus': {
      color: '@btn-default-color',
      textDecoration: 'none'
    },
    '&:active,   &.active': {
      outline: 0,
      backgroundImage: 'none',
      '$mixin': {
        '.box-shadow': ['inset 0 3px 5px rgba(0,0,0,.125)']
      }
    },
    '&.disabled,   &[disabled],   fieldset[disabled] &': {
      cursor: '@cursor-disabled',
      '$mixin': [{
        '.opacity': [0.65]
      }, {
        '.box-shadow': ['none']
      }]
    },
    'a&': {
      '&.disabled,     fieldset[disabled] &': {
        pointerEvents: 'none'
      }
    }
  },
  '.btn-default': {
    '$mixin': {
      '.button-variant': ['@btn-default-color',
        '@btn-default-bg',
        '@btn-default-border']
    }
  },
  '.btn-primary': {
    '$mixin': {
      '.button-variant': ['@btn-primary-color',
        '@btn-primary-bg',
        '@btn-primary-border']
    }
  },
  '.btn-success': {
    '$mixin': {
      '.button-variant': ['@btn-success-color',
        '@btn-success-bg',
        '@btn-success-border']
    }
  },
  '.btn-info': {
    '$mixin': {
      '.button-variant': ['@btn-info-color', '@btn-info-bg', '@btn-info-border']
    }
  },
  '.btn-warning': {
    '$mixin': {
      '.button-variant': ['@btn-warning-color',
        '@btn-warning-bg',
        '@btn-warning-border']
    }
  },
  '.btn-danger': {
    '$mixin': {
      '.button-variant': ['@btn-danger-color', '@btn-danger-bg', '@btn-danger-border']
    }
  },
  '.btn-link': {
    color: '@link-color',
    fontWeight: 'normal',
    borderRadius: 0,
    '&,   &:active,   &.active,   &[disabled],   fieldset[disabled] &': {
      backgroundColor: 'transparent',
      '$mixin': {
        '.box-shadow': ['none']
      }
    },
    '&,   &:hover,   &:focus,   &:active': {
      borderColor: 'transparent'
    },
    '&:hover,   &:focus': {
      color: '@link-hover-color',
      textDecoration: '@link-hover-decoration',
      backgroundColor: 'transparent'
    },
    '&[disabled],   fieldset[disabled] &': {
      '&:hover,     &:focus': {
        color: '@btn-link-disabled-color',
        textDecoration: 'none'
      }
    }
  },
  '.btn-lg': {
    '$mixin': {
      '.button-size': ['@padding-large-vertical',
        '@padding-large-horizontal',
        '@font-size-large',
        '@line-height-large',
        '@btn-border-radius-large']
    }
  },
  '.btn-sm': {
    '$mixin': {
      '.button-size': ['@padding-small-vertical',
        '@padding-small-horizontal',
        '@font-size-small',
        '@line-height-small',
        '@btn-border-radius-small']
    }
  },
  '.btn-xs': {
    '$mixin': {
      '.button-size': ['@padding-xs-vertical',
        '@padding-xs-horizontal',
        '@font-size-small',
        '@line-height-small',
        '@btn-border-radius-small']
    }
  },
  '.btn-block': {
    display: 'block',
    width: '100%'
  },
  '.btn-block + .btn-block': {
    marginTop: '5px'
  },
  'input[type="submit"], input[type="reset"], input[type="button"]': {
    '&.btn-block': {
      width: '100%'
    }
  }
}
