{
  '$mixins': {
    '.button-variant': {
      '$vars': {
        '@color': '',
        '@background': '',
        '@border': ''
      },
      color: '@color',
      backgroundColor: '@background',
      borderColor: '@border',
      '&:focus,   &.focus': {
        color: '@color',
        backgroundColor: 'darken(@background, 10%)',
        borderColor: 'darken(@border, 25%)'
      },
      '&:hover': {
        color: '@color',
        backgroundColor: 'darken(@background, 10%)',
        borderColor: 'darken(@border, 12%)'
      },
      '&:active,   &.active,   .open > .dropdown-toggle&': [{
        color: '@color',
        backgroundColor: 'darken(@background, 10%)',
        borderColor: 'darken(@border, 12%)',
        '&:hover,     &:focus,     &.focus': {
          color: '@color',
          backgroundColor: 'darken(@background, 17%)',
          borderColor: 'darken(@border, 25%)'
        }
      },
        {
          backgroundImage: 'none'
        }],
      '&.disabled,   &[disabled],   fieldset[disabled] &': {
        '&:hover,     &:focus,     &.focus': {
          backgroundColor: '@background',
          borderColor: '@border'
        }
      },
      '.badge': {
        color: '@background',
        backgroundColor: '@color'
      }
    },
    '.button-size': {
      '$vars': {
        '@padding-vertical': '',
        '@padding-horizontal': '',
        '@font-size': '',
        '@line-height': '',
        '@border-radius': ''
      },
      padding: '@padding-vertical @padding-horizontal',
      fontSize: '@font-size',
      lineHeight: '@line-height',
      borderRadius: '@border-radius'
    }
  }
}
