/**
 * @file    w3.rtl.events.js
 * @version 1.7.1221
 * @author  Deefaze
 *
 */
"use strict";

w3.on = function(aSe, aEv, aFn){ return w3.onElements(w3.getElements(aSe), aEv, aFn); };
w3.removeEvent = function(aSe, aEv, aFn){ return w3.removeEventElements(w3.getElements(aSe), aFn); };

// NB : https://developer.mozilla.org/fr/docs/Web/Events
// NB : https://developer.mozilla.org/en-US/docs/Web/Events
const On = {
  css : {
    animation : {
      end   : 'animationend',
      iteration: 'animationiteration',
      start : 'animationstart'
    },
    transition : {
      end : 'transitionend'
    }
  },
  key : {
    down : 'keydown',
    press: 'keypress',
    up   : 'keyup'
  },
  mouse : {
    click    : 'click',
    dblclick : 'dblclick',
    down     : 'mousedown',
    enter    : 'mouseenter',
    leave    : 'mouseleave',
    move     : 'mousemove',
    out      : 'mouseout',
    over     : 'mouseover',
    scroll   : 'scroll',
    up       : 'mouseup'
  },
  touch : {
    end   : 'touchend',
    enter : 'touchenter',
    leave : 'touchleave',
    move  : 'touchmove',
    start : 'touchstart'
  }
};
/* ------------------------------------------------------------ */
Object.freeze(On);

w3.onElements = function(aEls, aEv, aFn)
{
  var i, l = aEls.length;
  for(i=0; i<l; i++)
  {
    w3.onElement(aEls[i], aEv, aFn);
  }
  return w3;
};
w3.onElement = function(aEl, aEv, aFn)
{
  aEl.addEventListener(aEv, aFn, true);
};
w3.removeEventElements = function(aEls, aEv, aFn)
{
  var i, l = aEls.length;
  for(i=0; i<l; i++)
  {
    w3.removeEventElement(aEls[i], aEv, aFn);
  }
  return w3;
};
w3.removeEventElement = function(aEl, aEv, aFn)
{
  aEl.removeEventListener(aEv, aFn);
  return w3;
};
