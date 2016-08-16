{ table: 
   [ { backgroundColor: '@table-bg' },
     {},
     'td,   th': { '&[class*="col-"]': { position: 'static', float: 'none', display: 'table-cell' } } ],
  caption: 
   { paddingTop: '@table-cell-padding',
     paddingBottom: '@table-cell-padding',
     color: '@text-muted',
     textAlign: 'left' },
  th: { textAlign: 'left' },
  '.table': 
   { width: '100%',
     maxWidth: '100%',
     marginBottom: '@line-height-computed',
     '> thead,   > tbody,   > tfoot': 
      { '> tr': 
         { '> th,       > td': 
            { padding: '@table-cell-padding',
              lineHeight: '@line-height-base',
              verticalAlign: 'top',
              borderTop: '1px solid @table-border-color' } } },
     '> thead > tr > th': 
      { verticalAlign: 'bottom',
        borderBottom: '2px solid @table-border-color' },
     '> caption + thead,   > colgroup + thead,   > thead:first-child': { '> tr:first-child': { '> th,       > td': { borderTop: 0 } } },
     '> tbody + tbody': { borderTop: '2px solid @table-border-color' },
     '.table': { backgroundColor: '@body-bg' } },
  '.table-condensed': { '> thead,   > tbody,   > tfoot': { '> tr': { '> th,       > td': { padding: '@table-condensed-cell-padding' } } } },
  '.table-bordered': 
   { border: '1px solid @table-border-color',
     '> thead,   > tbody,   > tfoot': { '> tr': { '> th,       > td': { border: '1px solid @table-border-color' } } },
     '> thead > tr': { '> th,     > td': { borderBottomWidth: '2px' } } },
  '.table-striped': { '> tbody > tr:nth-of-type(odd)': { backgroundColor: '@table-bg-accent' } },
  '.table-hover': { '> tbody > tr:hover': { backgroundColor: '@table-bg-hover' } },
  'table col[class*="col-"]': { position: 'static', float: 'none', display: 'table-column' },
  '$mixin': 
   [ { '.table-row-variant': [ 'active', '@table-bg-active' ] },
     { '.table-row-variant': [ 'success', '@state-success-bg' ] },
     { '.table-row-variant': [ 'info', '@state-info-bg' ] },
     { '.table-row-variant': [ 'warning', '@state-warning-bg' ] },
     { '.table-row-variant': [ 'danger', '@state-danger-bg' ] } ],
  '.table-responsive': 
   { overflowX: 'auto',
     minHeight: '0.01%',
     '@media screen and (max-width: @screen-xs-max)': 
      { width: '100%',
        marginBottom: '(@line-height-computed * 0.75)',
        overflowY: 'hidden',
        MsOverflowStyle: '-ms-autohiding-scrollbar',
        border: '1px solid @table-border-color',
        '> .table': 
         { marginBottom: 0,
           '> thead,       > tbody,       > tfoot': { '> tr': { '> th,           > td': { whiteSpace: 'nowrap' } } } },
        '> .table-bordered': 
         { border: 0,
           '> thead,       > tbody,       > tfoot': 
            { '> tr': 
               { '> th:first-child,           > td:first-child': { borderLeft: 0 },
                 '> th:last-child,           > td:last-child': { borderRight: 0 } } },
           '> tbody,       > tfoot': { '> tr:last-child': { '> th,           > td': { borderBottom: 0 } } } } } } }
