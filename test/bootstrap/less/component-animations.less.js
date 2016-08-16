{
  '.fade': {
    opacity: 0,
    '$mixin': {
      '.transition': ['opacity .15s linear']
    },
    '&.in': {
      opacity: 1
    }
  },
  '.collapse': {
    display: 'none',
    '&.in': {
      display: 'block'
    },
    'tr&.in': {
      display: 'table-row'
    },
    'tbody&.in': {
      display: 'table-row-group'
    }
  },
  '.collapsing': {
    position: 'relative',
    height: 0,
    overflow: 'hidden',
    '$mixin': [{
      '.transition-property': ['~"height, visibility"']
    },
      {
        '.transition-duration': ['.35s']
      },
      {
        '.transition-timing-function': ['ease']
      }]
  }
}
