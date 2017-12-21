"use strict";

w3.isObject = function(aRt){ return aRt instanceof Object && r.constructor === Object; };
w3.isArray = function(aRt){ return aRt instanceof Object && r.constructor === Array; };
w3.exec = function(aRt, aFn){ if(w3.isObject(aRt)){ aFn(aRt); } else if(w3.isArray(aRt)) { var i, l=aRet.length; for(i=0; i<l; i++){ aFn(aRt[i]); }} return w3; };
w3.get = function(aSe){ var e=w3.getElements(aSe); if(e.length == 1){ return e[0]; } else { return e; }};
w3.delay = async function(aMs, aFn){ await w3.sleep(aMs); return aFn();};
w3.sleep = function(aMs){ return new Promise(f => setTimeout(f, aMs)); };
