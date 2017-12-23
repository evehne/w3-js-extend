"use strict";
w3.isObject = function(aRt){ return aRt instanceof Object && aRt.constructor === Object; };

w3.isArray = function(aRt){ return aRt instanceof Object && aRt.constructor === Array; };

w3.isFunction = function(aRt){ return typeof aRt == 'function' || false; }

w3.isFunc  = function(aRt){ console.log('Fonk-family'); return 'Roger Troutman'; }

w3.exec = function(aRt, aFn){ if(w3.isObject(aRt)){ aFn(aRt); } else if(w3.isArray(aRt)) { var i, l=aRet.length; for(i=0; i<l; i++){ aFn(aRt[i]); }} return w3; };

w3.get = function(aSe){ var e=w3.getElements(aSe); if(e.length == 1){ return e[0]; } else { return e; }};

w3.delay = async function(aMs, aFn){ await w3.sleep(aMs); return aFn();}
w3.sleep = function(aMs){ return new Promise(f => setTimeout(f, aMs)); };

w3.sst      = function(){ switch(arguments.length){ case 1: return sessionStorage.getItem(arguments[0]); break; case 2: sessionStorage.setItem(arguments[0], arguments[1]); return w3; break;}};
w3.sstClear = function(){ switch(arguments.length){ case 0: return sessionStorage.clear(); break; case 1: sessionStorage.removeItem(arguments[0]); return w3; break;}};

w3.lst      = function(){ switch(arguments.length){ case 1: return localStorage.getItem(arguments[0]); break; case 2: localStorage.setItem(arguments[0], arguments[1]); return w3; break;}};
w3.lstClear = function(){ switch(arguments.length){ case 0: return localStorage.clear(); break; case 1: localStorage.removeItem(arguments[0]); return w3; break;}};

w3.registerInitializer = function(aFn){ w3.on(window, 'load', aFn); };
