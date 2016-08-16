{
  '$mixins': {
    '.table-row-variant': {
      '$vars': {
        '@state': '',
        '@background': ''
      },
      '.table > thead > tr,   .table > tbody > tr,   .table > tfoot > tr': {
        '> td.@{state},     > th.@{state},     &.@{state} > td,     &.@{state} > th': {
          backgroundColor: '@background'
        }
      },
      '.table-hover > tbody > tr': {
        '> td.@{state}:hover,     > th.@{state}:hover,     &.@{state}:hover > td,     &:hover > .@{state},     &.@{state}:hover > th': {
          backgroundColor: 'darken(@background, 5%)'
        }
      }
    }
  }
}
