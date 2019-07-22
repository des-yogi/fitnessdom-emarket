document.addEventListener(
  "DOMContentLoaded", () => {
    new Mmenu( '#mobile-nav', {
        // options
        'extensions': [
            'pagedim-black'
         ],
         'navbars': [
            {
              'position': 'top'
            }
         ]
    }, {
        // configuration
        classNames: {
            selected: "active"
        },
        offCanvas: {
          page: {
            selector: '#page'
          }
        }
    });
  }
);

