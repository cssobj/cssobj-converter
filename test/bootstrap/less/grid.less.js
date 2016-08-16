{
  '.container': {
    '$mixin': {
      '.container-fixed': [0]
    },
    '@media (min-width: @screen-sm-min)': {
      width: '@container-sm'
    },
    '@media (min-width: @screen-md-min)': {
      width: '@container-md'
    },
    '@media (min-width: @screen-lg-min)': {
      width: '@container-lg'
    }
  },
  '.container-fluid': {
    '$mixin': {
      '.container-fixed': [0]
    }
  },
  '.row': {
    '$mixin': {
      '.make-row': [0]
    }
  },
  '$mixin': [{
    '.make-grid-columns': [0]
  }, {
    '.make-grid': ['xs']
  }],
  '@media (min-width: @screen-sm-min)': {
    '$mixin': {
      '.make-grid': ['sm']
    }
  },
  '@media (min-width: @screen-md-min)': {
    '$mixin': {
      '.make-grid': ['md']
    }
  },
  '@media (min-width: @screen-lg-min)': {
    '$mixin': {
      '.make-grid': ['lg']
    }
  }
}
