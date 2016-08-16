{
  '$mixins': {
    '.form-control-validation': {
      '$vars': {
        '@text-color: #555': '',
        '@border-color: #ccc': '',
        '@background-color: #f5f5f5': ''
      },
      '.help-block,   .control-label,   .radio,   .checkbox,   .radio-inline,   .checkbox-inline,   &.radio label,   &.checkbox label,   &.radio-inline label,   &.checkbox-inline label': {
        color: '@text-color'
      },
      '.form-control': {
        borderColor: '@border-color',
        '$mixin': {
          '.box-shadow': ['inset 0 1px 1px rgba(0,0,0,.075)']
        },
        '&:focus': {
          borderColor: 'darken(@border-color, 10%)',
          '$vars': {
            shadow: 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 6px lighten(@border-color, 20%)'
          },
          '$mixin': {
            '.box-shadow': ['@shadow']
          }
        }
      },
      '.input-group-addon': {
        color: '@text-color',
        borderColor: '@border-color',
        backgroundColor: '@background-color'
      },
      '.form-control-feedback': {
        color: '@text-color'
      }
    },
    '.form-control-focus': {
      '$vars': {
        'color-rgba': 'rgba(red(@color), green(@color), blue(@color), .6)',
        '@color: @input-border-focus': ''
      },
      '&:focus': {
        borderColor: '@color',
        outline: 0,
        '$mixin': {
          '.box-shadow': ['~"inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px @{color-rgba}"']
        }
      }
    },
    '.input-size': {
      '$vars': {
        '@input-height': '',
        '@padding-vertical': '',
        '@padding-horizontal': '',
        '@font-size': '',
        '@line-height': '',
        '@border-radius': ''
      },
      height: '@input-height',
      padding: '@padding-vertical @padding-horizontal',
      fontSize: '@font-size',
      lineHeight: '@line-height',
      borderRadius: '@border-radius',
      'select&': {
        height: '@input-height',
        lineHeight: '@input-height'
      },
      'textarea&,   select[multiple]&': {
        height: 'auto'
      }
    }
  }
}
