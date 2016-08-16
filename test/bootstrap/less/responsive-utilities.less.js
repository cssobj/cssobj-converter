{
  '@-ms-viewport ': {
    width: 'device-width'
  },
  '.visible-xs, .visible-sm, .visible-md, .visible-lg': {
    '$mixin': {
      '.responsive-invisibility': [0]
    }
  },
  '.visible-xs-block, .visible-xs-inline, .visible-xs-inline-block, .visible-sm-block, .visible-sm-inline, .visible-sm-inline-block, .visible-md-block, .visible-md-inline, .visible-md-inline-block, .visible-lg-block, .visible-lg-inline, .visible-lg-inline-block': {
    display: 'none'
  },
  '.visible-xs': {
    '@media (max-width: @screen-xs-max)': {
      '$mixin': {
        '.responsive-visibility': [0]
      }
    }
  },
  '.visible-xs-block': {
    '@media (max-width: @screen-xs-max)': {
      display: 'block'
    }
  },
  '.visible-xs-inline': {
    '@media (max-width: @screen-xs-max)': {
      display: 'inline'
    }
  },
  '.visible-xs-inline-block': {
    '@media (max-width: @screen-xs-max)': {
      display: 'inline-block'
    }
  },
  '.visible-sm': {
    '@media (min-width: @screen-sm-min) and (max-width: @screen-sm-max)': {
      '$mixin': {
        '.responsive-visibility': [0]
      }
    }
  },
  '.visible-sm-block': {
    '@media (min-width: @screen-sm-min) and (max-width: @screen-sm-max)': {
      display: 'block'
    }
  },
  '.visible-sm-inline': {
    '@media (min-width: @screen-sm-min) and (max-width: @screen-sm-max)': {
      display: 'inline'
    }
  },
  '.visible-sm-inline-block': {
    '@media (min-width: @screen-sm-min) and (max-width: @screen-sm-max)': {
      display: 'inline-block'
    }
  },
  '.visible-md': {
    '@media (min-width: @screen-md-min) and (max-width: @screen-md-max)': {
      '$mixin': {
        '.responsive-visibility': [0]
      }
    }
  },
  '.visible-md-block': {
    '@media (min-width: @screen-md-min) and (max-width: @screen-md-max)': {
      display: 'block'
    }
  },
  '.visible-md-inline': {
    '@media (min-width: @screen-md-min) and (max-width: @screen-md-max)': {
      display: 'inline'
    }
  },
  '.visible-md-inline-block': {
    '@media (min-width: @screen-md-min) and (max-width: @screen-md-max)': {
      display: 'inline-block'
    }
  },
  '.visible-lg': {
    '@media (min-width: @screen-lg-min)': {
      '$mixin': {
        '.responsive-visibility': [0]
      }
    }
  },
  '.visible-lg-block': {
    '@media (min-width: @screen-lg-min)': {
      display: 'block'
    }
  },
  '.visible-lg-inline': {
    '@media (min-width: @screen-lg-min)': {
      display: 'inline'
    }
  },
  '.visible-lg-inline-block': {
    '@media (min-width: @screen-lg-min)': {
      display: 'inline-block'
    }
  },
  '.hidden-xs': {
    '@media (max-width: @screen-xs-max)': {
      '$mixin': {
        '.responsive-invisibility': [0]
      }
    }
  },
  '.hidden-sm': {
    '@media (min-width: @screen-sm-min) and (max-width: @screen-sm-max)': {
      '$mixin': {
        '.responsive-invisibility': [0]
      }
    }
  },
  '.hidden-md': {
    '@media (min-width: @screen-md-min) and (max-width: @screen-md-max)': {
      '$mixin': {
        '.responsive-invisibility': [0]
      }
    }
  },
  '.hidden-lg': {
    '@media (min-width: @screen-lg-min)': {
      '$mixin': {
        '.responsive-invisibility': [0]
      }
    }
  },
  '.visible-print': {
    '$mixin': {
      '.responsive-invisibility': [0]
    },
    '@media print': {
      '$mixin': {
        '.responsive-visibility': [0]
      }
    }
  },
  '.visible-print-block': {
    display: 'none',
    '@media print': {
      display: 'block'
    }
  },
  '.visible-print-inline': {
    display: 'none',
    '@media print': {
      display: 'inline'
    }
  },
  '.visible-print-inline-block': {
    display: 'none',
    '@media print': {
      display: 'inline-block'
    }
  },
  '.hidden-print': {
    '@media print': {
      '$mixin': {
        '.responsive-invisibility': [0]
      }
    }
  }
}
