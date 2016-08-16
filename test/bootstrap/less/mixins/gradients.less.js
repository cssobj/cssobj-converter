{
  '#gradient': {
    '.horizontal(@start-color: #555; @end-color: #333; @start-percent: 0%; @end-percent: 100%)': {
      '$vars': {},
      backgroundImage: ['-webkit-linear-gradient(left, @start-color @start-percent, @end-color @end-percent)',
        '-o-linear-gradient(left, @start-color @start-percent, @end-color @end-percent)',
        'linear-gradient(to right, @start-color @start-percent, @end-color @end-percent)'],
      backgroundRepeat: 'repeat-x',
      filter: 'e(%("progid:DXImageTransform.Microsoft.gradient(startColorstr=\'%d\', endColorstr=\'%d\', GradientType=1)",argb(@start-color),argb(@end-color)))'
    },
    '.vertical(@start-color: #555; @end-color: #333; @start-percent: 0%; @end-percent: 100%)': {
      '$vars': {},
      backgroundImage: ['-webkit-linear-gradient(top, @start-color @start-percent, @end-color @end-percent)',
        '-o-linear-gradient(top, @start-color @start-percent, @end-color @end-percent)',
        'linear-gradient(to bottom, @start-color @start-percent, @end-color @end-percent)'],
      backgroundRepeat: 'repeat-x',
      filter: 'e(%("progid:DXImageTransform.Microsoft.gradient(startColorstr=\'%d\', endColorstr=\'%d\', GradientType=0)",argb(@start-color),argb(@end-color)))'
    },
    '.directional(@start-color: #555; @end-color: #333; @deg: 45deg)': {
      '$vars': {},
      backgroundRepeat: 'repeat-x',
      backgroundImage: ['-webkit-linear-gradient(@deg, @start-color, @end-color)',
        '-o-linear-gradient(@deg, @start-color, @end-color)',
        'linear-gradient(@deg, @start-color, @end-color)']
    },
    '.horizontal-three-colors(@start-color: #00b3ee; @mid-color: #7a43b6; @color-stop: 50%; @end-color: #c3325f)': {
      '$vars': {},
      backgroundImage: ['-webkit-linear-gradient(left, @start-color, @mid-color @color-stop, @end-color)',
        '-o-linear-gradient(left, @start-color, @mid-color @color-stop, @end-color)',
        'linear-gradient(to right, @start-color, @mid-color @color-stop, @end-color)'],
      backgroundRepeat: 'no-repeat',
      filter: 'e(%("progid:DXImageTransform.Microsoft.gradient(startColorstr=\'%d\', endColorstr=\'%d\', GradientType=1)",argb(@start-color),argb(@end-color)))'
    },
    '.vertical-three-colors(@start-color: #00b3ee; @mid-color: #7a43b6; @color-stop: 50%; @end-color: #c3325f)': {
      '$vars': {},
      backgroundImage: ['-webkit-linear-gradient(@start-color, @mid-color @color-stop, @end-color)',
        '-o-linear-gradient(@start-color, @mid-color @color-stop, @end-color)',
        'linear-gradient(@start-color, @mid-color @color-stop, @end-color)'],
      backgroundRepeat: 'no-repeat',
      filter: 'e(%("progid:DXImageTransform.Microsoft.gradient(startColorstr=\'%d\', endColorstr=\'%d\', GradientType=0)",argb(@start-color),argb(@end-color)))'
    },
    '.radial(@inner-color: #555; @outer-color: #333)': {
      '$vars': {},
      backgroundImage: ['-webkit-radial-gradient(circle, @inner-color, @outer-color)',
        'radial-gradient(circle, @inner-color, @outer-color)'],
      backgroundRepeat: 'no-repeat'
    },
    '.striped(@color: rgba(255,255,255,.15); @angle: 45deg)': {
      '$vars': {},
      backgroundImage: ['-webkit-linear-gradient(@angle, @color 25%, transparent 25%, transparent 50%, @color 50%, @color 75%, transparent 75%, transparent)',
        '-o-linear-gradient(@angle, @color 25%, transparent 25%, transparent 50%, @color 50%, @color 75%, transparent 75%, transparent)',
        'linear-gradient(@angle, @color 25%, transparent 25%, transparent 50%, @color 50%, @color 75%, transparent 75%, transparent)']
    }
  }
}
