{ '.panel': 
   [ { marginBottom: '@line-height-computed',
       backgroundColor: '@panel-bg',
       border: '1px solid transparent',
       borderRadius: '@panel-border-radius',
       '$mixin': { '.box-shadow': [ '0 1px 1px rgba(0,0,0,.05)' ] } },
     {},
     {},
     '> .table,   > .table-responsive > .table,   > .panel-collapse > .table': { marginBottom: 0,
       caption: 
        { paddingLeft: '@panel-body-padding',
          paddingRight: '@panel-body-padding' } },
     '> .table:first-child,   > .table-responsive:first-child > .table:first-child': { '$mixin': { '.border-top-radius': [ '(@panel-border-radius - 1)' ] },
       '> thead:first-child,     > tbody:first-child': 
        { '> tr:first-child': 
           { borderTopLeftRadius: '(@panel-border-radius - 1)',
             borderTopRightRadius: '(@panel-border-radius - 1)',
             'td:first-child,         th:first-child': { borderTopLeftRadius: '(@panel-border-radius - 1)' },
             'td:last-child,         th:last-child': { borderTopRightRadius: '(@panel-border-radius - 1)' } } } },
     '> .table:last-child,   > .table-responsive:last-child > .table:last-child': { '$mixin': { '.border-bottom-radius': [ '(@panel-border-radius - 1)' ] },
       '> tbody:last-child,     > tfoot:last-child': 
        { '> tr:last-child': 
           { borderBottomLeftRadius: '(@panel-border-radius - 1)',
             borderBottomRightRadius: '(@panel-border-radius - 1)',
             'td:first-child,         th:first-child': { borderBottomLeftRadius: '(@panel-border-radius - 1)' },
             'td:last-child,         th:last-child': { borderBottomRightRadius: '(@panel-border-radius - 1)' } } } },
     '> .panel-body + .table,   > .panel-body + .table-responsive,   > .table + .panel-body,   > .table-responsive + .panel-body': { borderTop: '1px solid @table-border-color' },
     '> .table > tbody:first-child > tr:first-child th,   > .table > tbody:first-child > tr:first-child td': { borderTop: 0 },
     '> .table-bordered,   > .table-responsive > .table-bordered': { border: 0,
       '> thead,     > tbody,     > tfoot': 
        { '> tr': 
           { '> th:first-child,         > td:first-child': { borderLeft: 0 },
             '> th:last-child,         > td:last-child': { borderRight: 0 } } },
       '> thead,     > tbody': { '> tr:first-child': { '> td,         > th': { borderBottom: 0 } } },
       '> tbody,     > tfoot': { '> tr:last-child': { '> td,         > th': { borderBottom: 0 } } } },
     '> .table-responsive': { border: 0, marginBottom: 0 } ],
  '.panel-body': { padding: '@panel-body-padding', '$extend': '.clearfix all' },
  '.panel-heading': 
   { padding: '@panel-heading-padding',
     borderBottom: '1px solid transparent',
     '$mixin': { '.border-top-radius': [ '(@panel-border-radius - 1)' ] },
     '> .dropdown .dropdown-toggle': { color: 'inherit' } },
  '.panel-title': 
   { marginTop: 0,
     marginBottom: 0,
     fontSize: 'ceil((@font-size-base * 1.125))',
     color: 'inherit',
     '> a,   > small,   > .small,   > small > a,   > .small > a': { color: 'inherit' } },
  '.panel-footer': 
   { padding: '@panel-footer-padding',
     backgroundColor: '@panel-footer-bg',
     borderTop: '1px solid @panel-inner-border',
     '$mixin': { '.border-bottom-radius': [ '(@panel-border-radius - 1)' ] } },
  '.panel-heading + .list-group': { '.list-group-item:first-child': { borderTopWidth: 0 } },
  '.list-group + .panel-footer': { borderTopWidth: 0 },
  '.panel-group': 
   { marginBottom: '@line-height-computed',
     '.panel': 
      { marginBottom: 0,
        borderRadius: '@panel-border-radius',
        '+ .panel': { marginTop: '5px' } },
     '.panel-heading': 
      { borderBottom: 0,
        '+ .panel-collapse > .panel-body,     + .panel-collapse > .list-group': { borderTop: '1px solid @panel-inner-border' } },
     '.panel-footer': 
      { borderTop: 0,
        '+ .panel-collapse .panel-body': { borderBottom: '1px solid @panel-inner-border' } } },
  '.panel-default': 
   { '$mixin': 
      { '.panel-variant': 
         [ '@panel-default-border',
           '@panel-default-text',
           '@panel-default-heading-bg',
           '@panel-default-border' ] } },
  '.panel-primary': 
   { '$mixin': 
      { '.panel-variant': 
         [ '@panel-primary-border',
           '@panel-primary-text',
           '@panel-primary-heading-bg',
           '@panel-primary-border' ] } },
  '.panel-success': 
   { '$mixin': 
      { '.panel-variant': 
         [ '@panel-success-border',
           '@panel-success-text',
           '@panel-success-heading-bg',
           '@panel-success-border' ] } },
  '.panel-info': 
   { '$mixin': 
      { '.panel-variant': 
         [ '@panel-info-border',
           '@panel-info-text',
           '@panel-info-heading-bg',
           '@panel-info-border' ] } },
  '.panel-warning': 
   { '$mixin': 
      { '.panel-variant': 
         [ '@panel-warning-border',
           '@panel-warning-text',
           '@panel-warning-heading-bg',
           '@panel-warning-border' ] } },
  '.panel-danger': 
   { '$mixin': 
      { '.panel-variant': 
         [ '@panel-danger-border',
           '@panel-danger-text',
           '@panel-danger-heading-bg',
           '@panel-danger-border' ] } } }
