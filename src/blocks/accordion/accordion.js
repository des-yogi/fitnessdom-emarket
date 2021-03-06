// Utility function
function UtilAccordion () {};

/*
  class manipulation functions
*/
UtilAccordion.hasClass = function(el, className) {
  if (el.classList) return el.classList.contains(className);
  else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};

UtilAccordion.addClass = function(el, className) {
  var classList = className.split(' ');
  if (el.classList) el.classList.add(classList[0]);
  else if (!UtilAccordion.hasClass(el, classList[0])) el.className += " " + classList[0];
  if (classList.length > 1) UtilAccordion.addClass(el, classList.slice(1).join(' '));
};

UtilAccordion.removeClass = function(el, className) {
  var classList = className.split(' ');
  if (el.classList) el.classList.remove(classList[0]);
  else if(UtilAccordion.hasClass(el, classList[0])) {
    var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
    el.className=el.className.replace(reg, ' ');
  }
  if (classList.length > 1) UtilAccordion.removeClass(el, classList.slice(1).join(' '));
};

UtilAccordion.toggleClass = function(el, className, bool) {
  if(bool) UtilAccordion.addClass(el, className);
  else UtilAccordion.removeClass(el, className);
};

UtilAccordion.setAttributes = function(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};

/*
  DOM manipulation
*/
UtilAccordion.getChildrenByClassName = function(el, className) {
  var children = el.children,
    childrenByClass = [];
  for (var i = 0; i < el.children.length; i++) {
    if (UtilAccordion.hasClass(el.children[i], className)) childrenByClass.push(el.children[i]);
  }
  return childrenByClass;
};

UtilAccordion.is = function(elem, selector) {
  if(selector.nodeType){
    return elem === selector;
  }

  var qa = (typeof(selector) === 'string' ? document.querySelectorAll(selector) : selector),
    length = qa.length,
    returnArr = [];

  while(length--){
    if(qa[length] === elem){
      return true;
    }
  }

  return false;
};

/*
  Animate height of an element
*/
UtilAccordion.setHeight = function(start, to, element, duration, cb) {
  var change = to - start,
      currentTime = null;

  var animateHeight = function(timestamp){
    if (!currentTime) currentTime = timestamp;
    var progress = timestamp - currentTime;
    var val = parseInt((progress/duration)*change + start);
    element.style.height = val+"px";
    if(progress < duration) {
        window.requestAnimationFrame(animateHeight);
    } else {
      cb();
    }
  };

  //set the height of the element before starting animation -> fix bug on Safari
  element.style.height = start+"px";
  window.requestAnimationFrame(animateHeight);
};

/*
  Smooth Scroll
*/

UtilAccordion.scrollTo = function(final, duration, cb) {
  var start = window.scrollY || document.documentElement.scrollTop,
      currentTime = null;

  var animateScroll = function(timestamp){
    if (!currentTime) currentTime = timestamp;
    var progress = timestamp - currentTime;
    if(progress > duration) progress = duration;
    var val = Math.easeInOutQuad(progress, start, final-start, duration);
    window.scrollTo(0, val);
    if(progress < duration) {
        window.requestAnimationFrame(animateScroll);
    } else {
      cb && cb();
    }
  };

  window.requestAnimationFrame(animateScroll);
};

/*
  Focus utility classes
*/

//Move focus to an element
UtilAccordion.moveFocus = function (element) {
  if( !element ) element = document.getElementsByTagName("body")[0];
  element.focus();
  if (document.activeElement !== element) {
    element.setAttribute('tabindex','-1');
    element.focus();
  }
};

/*
  Misc
*/

UtilAccordion.getIndexInArray = function(array, el) {
  return Array.prototype.indexOf.call(array, el);
};

UtilAccordion.cssSupports = function(property, value) {
  if('CSS' in window) {
    return CSS.supports(property, value);
  } else {
    var jsProperty = property.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase();});
    return jsProperty in document.body.style;
  }
};

// merge a set of user options into plugin defaults
// https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
UtilAccordion.extend = function() {
  // Variables
  var extended = {};
  var deep = false;
  var i = 0;
  var length = arguments.length;

  // Check if a deep merge
  if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
    deep = arguments[0];
    i++;
  }

  // Merge the object into the extended object
  var merge = function (obj) {
    for ( var prop in obj ) {
      if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
        // If deep merge and property is an object, merge properties
        if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
          extended[prop] = extend( true, extended[prop], obj[prop] );
        } else {
          extended[prop] = obj[prop];
        }
      }
    }
  };

  // Loop through each object and conduct a merge
  for ( ; i < length; i++ ) {
    var obj = arguments[i];
    merge(obj);
  }

  return extended;
};

/*
  Polyfills
*/
//Closest() method
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

//Custom Event() constructor
if ( typeof window.CustomEvent !== "function" ) {

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
}

/*
  Animation curves
*/
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

//----------------------

(function() {
  var Accordion = function(element) {
    this.element = element;
    this.items = UtilAccordion.getChildrenByClassName(this.element, 'js-accordion__item');
    this.showClass = 'accordion__item--is-open';
    this.animateHeight = (this.element.getAttribute('data-animation') == 'on');
    this.multiItems = !(this.element.getAttribute('data-multi-items') == 'off');
    this.initAccordion();
  };

  Accordion.prototype.initAccordion = function() {
    //set initial aria attributes
    for( var i = 0; i < this.items.length; i++) {
      var button = this.items[i].getElementsByTagName('button')[0],
        content = this.items[i].getElementsByClassName('js-accordion__panel')[0],
        isOpen = UtilAccordion.hasClass(this.items[i], this.showClass) ? 'true' : 'false';
      UtilAccordion.setAttributes(button, {'aria-expanded': isOpen, 'aria-controls': 'accordion-content-'+i, 'id': 'accordion-header-'+i});
      UtilAccordion.addClass(button, 'js-accordion__trigger');
      UtilAccordion.setAttributes(content, {'aria-labelledby': 'accordion-header-'+i, 'id': 'accordion-content-'+i});
    }

    //listen for Accordion events
    this.initAccordionEvents();
  };

  Accordion.prototype.initAccordionEvents = function() {
    var self = this;

    this.element.addEventListener('click', function(event) {
      var trigger = event.target.closest('.js-accordion__trigger');
      //check index to make sure the click didn't happen inside a children accordion
      if( trigger && UtilAccordion.getIndexInArray(self.items, trigger.parentElement) >= 0) self.triggerAccordion(trigger);
    });
  };

  Accordion.prototype.triggerAccordion = function(trigger) {
    var self = this;
    var bool = (trigger.getAttribute('aria-expanded') === 'true');

    this.animateAccordion(trigger, bool);
  };

  Accordion.prototype.animateAccordion = function(trigger, bool) {
    var self = this;
    var item = trigger.closest('.js-accordion__item'),
      content = item.getElementsByClassName('js-accordion__panel')[0],
      ariaValue = bool ? 'false' : 'true';

    if(!bool) UtilAccordion.addClass(item, this.showClass);
    trigger.setAttribute('aria-expanded', ariaValue);

    if(this.animateHeight) {
      //store initial and final height - animate accordion content height
      var initHeight = bool ? content.offsetHeight: 0,
        finalHeight = bool ? 0 : content.offsetHeight;
    }

    if(window.requestAnimationFrame && this.animateHeight) {
      UtilAccordion.setHeight(initHeight, finalHeight, content, 200, function(){
        self.resetContentVisibility(item, content, bool);
      });
    } else {
      self.resetContentVisibility(item, content, bool);
    }

    if( !this.multiItems && !bool) this.closeSiblings(item);

  };

  Accordion.prototype.resetContentVisibility = function(item, content, bool) {
    UtilAccordion.toggleClass(item, this.showClass, !bool);
    content.removeAttribute("style");
  };

  Accordion.prototype.closeSiblings = function(item) {
    //if only one accordion can be open -> search if there's another one open

    /*var index = UtilAccordion.getIndexInArray(this.items, item);
    for( var i = 0; i < this.items.length; i++) {
      if(UtilAccordion.hasClass(this.items[i], this.showClass) && i != index) {
        this.animateAccordion(this.items[i].getElementsByClassName('js-accordion__trigger')[0], true);
        return false;
      }
    }*/
    return false;
  };

  //initialize the Accordion objects
  var accordions = document.getElementsByClassName('js-accordion');
  if( accordions.length > 0 ) {
    for( var i = 0; i < accordions.length; i++) {
      (function(i){new Accordion(accordions[i]);})(i);
    }
  }
}());
