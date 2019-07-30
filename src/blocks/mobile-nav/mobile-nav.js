document.addEventListener(
  "DOMContentLoaded", () => {
    const mmenu = new Mmenu( '#mobile-nav', {
        // options
        'extensions': [
            'theme-white',
            'pagedim-black',
            'border-none'
         ],
         'navbar': {
            title: 'fitness<span>DOM</span> <span id="mobile-nav-close"></span>' //<a href="#" id="close-btn">X</a>
         },
         'navbars': [
            /*{

              'content': [
                  'breadcrumbs',
                  'close'
               ]
            },*/
            {
               'position': 'bottom',
               'content': [
                  "<a class='mobile-nav__social mobile-nav__social--fb' href='#' title='Facebook'><span></span></a>",
                  "<a class='mobile-nav__social mobile-nav__social--insta' href='#' title='Instagram'><span></span></a>",
                  "<a class='mobile-nav__social mobile-nav__social--youtube' href='#' title='Youtube'><span></span></a>"
               ]
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

    const api = mmenu.API;

    document.querySelector( "#mobile-nav-close" )
        .addEventListener(
            "click", ( evnt ) => {
                evnt.preventDefault();
                api.close();
        }
    );
  }
);
