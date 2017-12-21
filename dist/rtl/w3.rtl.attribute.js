"use strict";

w3.getAttr = function(aSe, aPn){ return w3.getAttrElements(w3.getElements(aSe), aPn); };
w3.setAttr = function(aSe, aPn, aVl){ return w3.setAttrElements(w3.getElements(aSe), aPn, aVl); };
w3.removeAttr = function(aSe, aPn){ return w3.removeAttrElements(w3.getElements(aSe), aPn);};

w3.getAttrElements = function(aEls, aPn)
{
  var i, l = aEls.length, r = new Array();
  for(i=0; i<l; i++)
  {
    r.push( w3.getAttrElement(aEls[i], aPn) );
  }
  if(r.length == 1)
  {
    r = r[0];
  }
  return r;
};
w3.getAttrElement = function(aEl, aPn)
{
  return aEl.getAttribute(aPn);
};
w3.setAttrElements = function(aEls, aPn, val)
{
  var i, l = aEls.length;
  for(i=0; i<l; i++)
  {
    w3.setAttrElement(aEls[i], aPn, val);
  }
  return w3;
};
w3.setAttrElement = function(aEl, aPn, val)
{
  aEl.setAttribute(aPn, val);
  return w3;
};
w3.removeAttrElements = function(aEls, aPn)
{
  var i, l = aEls.length;
  for(i=0; i<l; i++)
  {
    w3.removeAttrElement(aEls[i], aPn);
  }
  return w3;
};
w3.removeAttrElement = function(aEl, aPn)
{
  aEl.removeAttribute(aPn);
  return w3;
};
