{
  '.label': {
    display: 'inline',
    padding: '.2em .6em .3em',
    fontSize: '75%',
    fontWeight: 'bold',
    lineHeight: 1,
    color: '@label-color',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    borderRadius: '.25em',
    'a&': {
      '&:hover,     &:focus': {
        color: '@label-link-hover-color',
        textDecoration: 'none',
        cursor: 'pointer'
      }
    },
    '&:empty': {
      display: 'none'
    },
    '.btn &': {
      position: 'relative',
      top: '-1px'
    }
  },
  '.label-default': {
    '$mixin': {
      '.label-variant': ['@label-default-bg']
    }
  },
  '.label-primary': {
    '$mixin': {
      '.label-variant': ['@label-primary-bg']
    }
  },
  '.label-success': {
    '$mixin': {
      '.label-variant': ['@label-success-bg']
    }
  },
  '.label-info': {
    '$mixin': {
      '.label-variant': ['@label-info-bg']
    }
  },
  '.label-warning': {
    '$mixin': {
      '.label-variant': ['@label-warning-bg']
    }
  },
  '.label-danger': {
    '$mixin': {
      '.label-variant': ['@label-danger-bg']
    }
  }
}
