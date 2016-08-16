{
  '$mixins': {
    '.img-responsive': {
      '$vars': {
        '@display: block': ''
      },
      display: '@display',
      maxWidth: '100%',
      height: 'auto'
    },
    '.img-retina': {
      '$vars': {
        '@file-1x': '',
        '@file-2x': '',
        '@width-1x': '',
        '@height-1x': ''
      },
      backgroundImage: 'url("@{file-1x}")',
      '@media only screen and (-webkit-min-device-pixel-ratio: 2),   only screen and (   min--moz-device-pixel-ratio: 2),   only screen and (     -o-min-device-pixel-ratio: 2/1),   only screen and (        min-device-pixel-ratio: 2),   only screen and (                min-resolution: 192dpi),   only screen and (                min-resolution: 2dppx)': {
        backgroundImage: 'url("@{file-2x}")',
        backgroundSize: '@width-1x @height-1x'
      }
    }
  }
}
