{
  '@-webkit-keyframes progress-bar-stripes': {
    from: {
      backgroundPosition: '40px 0'
    },
    to: {
      backgroundPosition: '0 0'
    }
  },
  '@keyframes progress-bar-stripes': {
    from: {
      backgroundPosition: '40px 0'
    },
    to: {
      backgroundPosition: '0 0'
    }
  },
  '.progress': {
    overflow: 'hidden',
    height: '@line-height-computed',
    marginBottom: '@line-height-computed',
    backgroundColor: '@progress-bg',
    borderRadius: '@progress-border-radius',
    '$mixin': {
      '.box-shadow': ['inset 0 1px 2px rgba(0,0,0,.1)']
    }
  },
  '.progress-bar': {
    float: 'left',
    width: '0%',
    height: '100%',
    fontSize: '@font-size-small',
    lineHeight: '@line-height-computed',
    color: '@progress-bar-color',
    textAlign: 'center',
    backgroundColor: '@progress-bar-bg',
    '$mixin': [{
      '.box-shadow': ['inset 0 -1px 0 rgba(0,0,0,.15)']
    },
      {
        '.transition': ['width .6s ease']
      }]
  },
  '.progress-striped .progress-bar, .progress-bar-striped': {
    '#gradient > .striped()': {},
    backgroundSize: '40px 40px'
  },
  '.progress.active .progress-bar, .progress-bar.active': {
    '$mixin': {
      '.animation': ['progress-bar-stripes 2s linear infinite']
    }
  },
  '.progress-bar-success': {
    '$mixin': {
      '.progress-bar-variant': ['@progress-bar-success-bg']
    }
  },
  '.progress-bar-info': {
    '$mixin': {
      '.progress-bar-variant': ['@progress-bar-info-bg']
    }
  },
  '.progress-bar-warning': {
    '$mixin': {
      '.progress-bar-variant': ['@progress-bar-warning-bg']
    }
  },
  '.progress-bar-danger': {
    '$mixin': {
      '.progress-bar-variant': ['@progress-bar-danger-bg']
    }
  }
}
