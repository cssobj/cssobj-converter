{
  '$mixins': {
    '.container-fixed': {
      '$vars': {
        '@gutter: @grid-gutter-width': ''
      },
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingLeft: 'floor((@gutter / 2))',
      paddingRight: 'ceil((@gutter / 2))',
      '$extend': '.clearfix all'
    },
    '.make-row': {
      '$vars': {
        '@gutter: @grid-gutter-width': ''
      },
      marginLeft: 'ceil((@gutter / -2))',
      marginRight: 'floor((@gutter / -2))',
      '$extend': '.clearfix all'
    },
    '.make-xs-column': {
      '$vars': {
        '@columns': '',
        '@gutter: @grid-gutter-width': ''
      },
      position: 'relative',
      float: 'left',
      width: 'percentage((@columns / @grid-columns))',
      minHeight: '1px',
      paddingLeft: '(@gutter / 2)',
      paddingRight: '(@gutter / 2)'
    },
    '.make-xs-column-offset': {
      '$vars': {
        '@columns': ''
      },
      marginLeft: 'percentage((@columns / @grid-columns))'
    },
    '.make-xs-column-push': {
      '$vars': {
        '@columns': ''
      },
      left: 'percentage((@columns / @grid-columns))'
    },
    '.make-xs-column-pull': {
      '$vars': {
        '@columns': ''
      },
      right: 'percentage((@columns / @grid-columns))'
    },
    '.make-sm-column': {
      '$vars': {
        '@columns': '',
        '@gutter: @grid-gutter-width': ''
      },
      position: 'relative',
      minHeight: '1px',
      paddingLeft: '(@gutter / 2)',
      paddingRight: '(@gutter / 2)',
      '@media (min-width: @screen-sm-min)': {
        float: 'left',
        width: 'percentage((@columns / @grid-columns))'
      }
    },
    '.make-sm-column-offset': {
      '$vars': {
        '@columns': ''
      },
      '@media (min-width: @screen-sm-min)': {
        marginLeft: 'percentage((@columns / @grid-columns))'
      }
    },
    '.make-sm-column-push': {
      '$vars': {
        '@columns': ''
      },
      '@media (min-width: @screen-sm-min)': {
        left: 'percentage((@columns / @grid-columns))'
      }
    },
    '.make-sm-column-pull': {
      '$vars': {
        '@columns': ''
      },
      '@media (min-width: @screen-sm-min)': {
        right: 'percentage((@columns / @grid-columns))'
      }
    },
    '.make-md-column': {
      '$vars': {
        '@columns': '',
        '@gutter: @grid-gutter-width': ''
      },
      position: 'relative',
      minHeight: '1px',
      paddingLeft: '(@gutter / 2)',
      paddingRight: '(@gutter / 2)',
      '@media (min-width: @screen-md-min)': {
        float: 'left',
        width: 'percentage((@columns / @grid-columns))'
      }
    },
    '.make-md-column-offset': {
      '$vars': {
        '@columns': ''
      },
      '@media (min-width: @screen-md-min)': {
        marginLeft: 'percentage((@columns / @grid-columns))'
      }
    },
    '.make-md-column-push': {
      '$vars': {
        '@columns': ''
      },
      '@media (min-width: @screen-md-min)': {
        left: 'percentage((@columns / @grid-columns))'
      }
    },
    '.make-md-column-pull': {
      '$vars': {
        '@columns': ''
      },
      '@media (min-width: @screen-md-min)': {
        right: 'percentage((@columns / @grid-columns))'
      }
    },
    '.make-lg-column': {
      '$vars': {
        '@columns': '',
        '@gutter: @grid-gutter-width': ''
      },
      position: 'relative',
      minHeight: '1px',
      paddingLeft: '(@gutter / 2)',
      paddingRight: '(@gutter / 2)',
      '@media (min-width: @screen-lg-min)': {
        float: 'left',
        width: 'percentage((@columns / @grid-columns))'
      }
    },
    '.make-lg-column-offset': {
      '$vars': {
        '@columns': ''
      },
      '@media (min-width: @screen-lg-min)': {
        marginLeft: 'percentage((@columns / @grid-columns))'
      }
    },
    '.make-lg-column-push': {
      '$vars': {
        '@columns': ''
      },
      '@media (min-width: @screen-lg-min)': {
        left: 'percentage((@columns / @grid-columns))'
      }
    },
    '.make-lg-column-pull': {
      '$vars': {
        '@columns': ''
      },
      '@media (min-width: @screen-lg-min)': {
        right: 'percentage((@columns / @grid-columns))'
      }
    }
  }
}
