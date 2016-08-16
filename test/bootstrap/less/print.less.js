{
  '@media print': {
    '*,     *:before,     *:after': {
      background: 'transparent',
      color: '#000',
      boxShadow: 'none',
      textShadow: 'none'
    },
    'a,     a:visited': {
      textDecoration: 'underline'
    },
    'a[href]:after': {
      content: '" (" attr(href) ")"'
    },
    'abbr[title]:after': {
      content: '" (" attr(title) ")"'
    },
    'a[href^="#"]:after,     a[href^="javascript:"]:after': {
      content: '""'
    },
    'pre,     blockquote': {
      border: '1px solid #999',
      pageBreakInside: 'avoid'
    },
    thead: {
      display: 'table-header-group'
    },
    'tr,     img': {
      pageBreakInside: 'avoid'
    },
    img: {
      maxWidth: '100%'
    },
    'p,     h2,     h3': {
      orphans: 3,
      widows: 3
    },
    'h2,     h3': {
      pageBreakAfter: 'avoid'
    },
    '.navbar': {
      display: 'none'
    },
    '.btn,     .dropup > .btn': {
      '> .caret': {
        borderTopColor: '#000'
      }
    },
    '.label': {
      border: '1px solid #000'
    },
    '.table': {
      borderCollapse: 'collapse',
      'td,         th': {
        backgroundColor: '#fff'
      }
    },
    '.table-bordered': {
      'th,         td': {
        border: '1px solid #ddd'
      }
    }
  }
}
