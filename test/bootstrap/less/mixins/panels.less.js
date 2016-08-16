{
  '$mixins': {
    '.panel-variant': {
      '$vars': {
        '@border': '',
        '@heading-text-color': '',
        '@heading-bg-color': '',
        '@heading-border': ''
      },
      borderColor: '@border',
      '& > .panel-heading': {
        color: '@heading-text-color',
        backgroundColor: '@heading-bg-color',
        borderColor: '@heading-border',
        '+ .panel-collapse > .panel-body': {
          borderTopColor: '@border'
        },
        '.badge': {
          color: '@heading-bg-color',
          backgroundColor: '@heading-text-color'
        }
      },
      '& > .panel-footer': {
        '+ .panel-collapse > .panel-body': {
          borderBottomColor: '@border'
        }
      }
    }
  }
}
