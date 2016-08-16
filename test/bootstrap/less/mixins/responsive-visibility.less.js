{
  '$mixins': {
    '.responsive-visibility': {
      '$vars': {
        '': ''
      },
      display: 'block',
      'table&': {
        display: 'table'
      },
      'tr&': {
        display: 'table-row'
      },
      'th&,   td&': {
        display: 'table-cell'
      }
    },
    '.responsive-invisibility': {
      '$vars': {
        '': ''
      },
      display: 'none'
    }
  }
}
