/*! jQuery v3.4.0 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.0",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},A=k.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&A.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!A.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(N(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.attachShadow&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ae(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ne(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ne(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n=void 0,r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n}else r&&(Q.set(this,i,k.event.trigger(k.extend(r.shift(),k.Event.prototype),r,this)),e.stopImmediatePropagation())}})):k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&N(t,"input")&&void 0===Q.get(t,"click")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&N(t,"input")&&void 0===Q.get(t,"click")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&N(t,"input")&&Q.get(t,"click")||N(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ae),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ne(this,e,t,n,r)},one:function(e,t,n,r){return Ne(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var At=/\[\]$/,Nt=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||At.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(Nt,"\r\n")}}):{name:t.name,value:n.replace(Nt,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=N,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

/*!
  * Bootstrap v5.3.0-alpha1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t="transitionend",e=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,((t,e)=>`#${CSS.escape(e)}`))),t),i=e=>{e.dispatchEvent(new Event(t))},n=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),s=t=>n(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(e(t)):null,o=t=>{if(!n(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},r=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),a=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?a(t.parentNode):null},l=()=>{},c=t=>{t.offsetHeight},h=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,d=[],u=()=>"rtl"===document.documentElement.dir,f=t=>{var e;e=()=>{const e=h();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(d.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of d)t()})),d.push(e)):e()},p=(t,e=[],i=t)=>"function"==typeof t?t(...e):i,m=(e,n,s=!0)=>{if(!s)return void p(e);const o=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(n)+5;let r=!1;const a=({target:i})=>{i===n&&(r=!0,n.removeEventListener(t,a),p(e))};n.addEventListener(t,a),setTimeout((()=>{r||i(n)}),o)},g=(t,e,i,n)=>{const s=t.length;let o=t.indexOf(e);return-1===o?!i&&n?t[s-1]:t[0]:(o+=i?1:-1,n&&(o=(o+s)%s),t[Math.max(0,Math.min(o,s-1))])},_=/[^.]*(?=\..*)\.|.*/,b=/\..*/,v=/::\d+$/,y={};let w=1;const A={mouseenter:"mouseover",mouseleave:"mouseout"},E=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function T(t,e){return e&&`${e}::${w++}`||t.uidEvent||w++}function C(t){const e=T(t);return t.uidEvent=e,y[e]=y[e]||{},y[e]}function O(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function x(t,e,i){const n="string"==typeof e,s=n?i:e||i;let o=D(t);return E.has(o)||(o=t),[n,s,o]}function k(t,e,i,n,s){if("string"!=typeof e||!t)return;let[o,r,a]=x(e,i,n);if(e in A){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=C(t),c=l[a]||(l[a]={}),h=O(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=T(r,e.replace(_,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return N(s,{delegateTarget:r}),n.oneOff&&I.off(t,s.type,e,i),i.apply(r,[s])}}(t,i,r):function(t,e){return function i(n){return N(n,{delegateTarget:t}),i.oneOff&&I.off(t,n.type,e),e.apply(t,[n])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function L(t,e,i,n,s){const o=O(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function S(t,e,i,n){const s=e[i]||{};for(const[o,r]of Object.entries(s))o.includes(n)&&L(t,e,i,r.callable,r.delegationSelector)}function D(t){return t=t.replace(b,""),A[t]||t}const I={on(t,e,i,n){k(t,e,i,n,!1)},one(t,e,i,n){k(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=x(e,i,n),a=r!==e,l=C(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))S(t,l,i,e.slice(1));for(const[i,n]of Object.entries(c)){const s=i.replace(v,"");a&&!e.includes(s)||L(t,l,r,n.callable,n.delegationSelector)}}else{if(!Object.keys(c).length)return;L(t,l,r,o,s?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=h();let s=null,o=!0,r=!0,a=!1;e!==D(e)&&n&&(s=n.Event(e,i),n(t).trigger(s),o=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());let l=new Event(e,{bubbles:o,cancelable:!0});return l=N(l,i),a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&s&&s.preventDefault(),l}};function N(t,e={}){for(const[i,n]of Object.entries(e))try{t[i]=n}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>n})}return t}const P=new Map,j={set(t,e,i){P.has(t)||P.set(t,new Map);const n=P.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>P.has(t)&&P.get(t).get(e)||null,remove(t,e){if(!P.has(t))return;const i=P.get(t);i.delete(e),0===i.size&&P.delete(t)}};function M(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function F(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const H={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${F(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${F(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const n of i){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=M(t.dataset[n])}return e},getDataAttribute:(t,e)=>M(t.getAttribute(`data-bs-${F(e)}`))};class ${static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=n(e)?H.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...n(e)?H.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[s,o]of Object.entries(e)){const e=t[s],r=n(e)?"element":null==(i=e)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${o}".`)}var i}}class W extends ${constructor(t,e){super(),(t=s(t))&&(this._element=t,this._config=this._getConfig(e),j.set(this._element,this.constructor.DATA_KEY,this))}dispose(){j.remove(this._element,this.constructor.DATA_KEY),I.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){m(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return j.get(s(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.0-alpha1"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const B=t=>{let i=t.getAttribute("data-bs-target");if(!i||"#"===i){let e=t.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),i=e&&"#"!==e?e.trim():null}return e(i)},z={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let n=t.parentNode.closest(e);for(;n;)i.push(n),n=n.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!r(t)&&o(t)))},getSelectorFromElement(t){const e=B(t);return e&&z.findOne(e)?e:null},getElementFromSelector(t){const e=B(t);return e?z.findOne(e):null},getMultipleElementsFromSelector(t){const e=B(t);return e?z.find(e):[]}},R=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,n=t.NAME;I.on(document,i,`[data-bs-dismiss="${n}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),r(this))return;const s=z.getElementFromSelector(this)||this.closest(`.${n}`);t.getOrCreateInstance(s)[e]()}))};class q extends W{static get NAME(){return"alert"}close(){if(I.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),I.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=q.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}R(q,"close"),f(q);const V='[data-bs-toggle="button"]';class K extends W{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=K.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}I.on(document,"click.bs.button.data-api",V,(t=>{t.preventDefault();const e=t.target.closest(V);K.getOrCreateInstance(e).toggle()})),f(K);const Q={endCallback:null,leftCallback:null,rightCallback:null},X={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Y extends ${constructor(t,e){super(),this._element=t,t&&Y.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return Q}static get DefaultType(){return X}static get NAME(){return"swipe"}dispose(){I.off(this._element,".bs.swipe")}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),p(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&p(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(I.on(this._element,"pointerdown.bs.swipe",(t=>this._start(t))),I.on(this._element,"pointerup.bs.swipe",(t=>this._end(t))),this._element.classList.add("pointer-event")):(I.on(this._element,"touchstart.bs.swipe",(t=>this._start(t))),I.on(this._element,"touchmove.bs.swipe",(t=>this._move(t))),I.on(this._element,"touchend.bs.swipe",(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const U="next",G="prev",J="left",Z="right",tt="slid.bs.carousel",et="carousel",it="active",nt={ArrowLeft:Z,ArrowRight:J},st={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},ot={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class rt extends W{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=z.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===et&&this.cycle()}static get Default(){return st}static get DefaultType(){return ot}static get NAME(){return"carousel"}next(){this._slide(U)}nextWhenVisible(){!document.hidden&&o(this._element)&&this.next()}prev(){this._slide(G)}pause(){this._isSliding&&i(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?I.one(this._element,tt,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void I.one(this._element,tt,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const n=t>i?U:G;this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&I.on(this._element,"keydown.bs.carousel",(t=>this._keydown(t))),"hover"===this._config.pause&&(I.on(this._element,"mouseenter.bs.carousel",(()=>this.pause())),I.on(this._element,"mouseleave.bs.carousel",(()=>this._maybeEnableCycle()))),this._config.touch&&Y.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of z.find(".carousel-item img",this._element))I.on(t,"dragstart.bs.carousel",(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(J)),rightCallback:()=>this._slide(this._directionToOrder(Z)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new Y(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=nt[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=z.findOne(".active",this._indicatorsElement);e.classList.remove(it),e.removeAttribute("aria-current");const i=z.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(it),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),n=t===U,s=e||g(this._getItems(),i,n,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),r=e=>I.trigger(this._element,e,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r("slide.bs.carousel").defaultPrevented)return;if(!i||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const l=n?"carousel-item-start":"carousel-item-end",h=n?"carousel-item-next":"carousel-item-prev";s.classList.add(h),c(s),i.classList.add(l),s.classList.add(l),this._queueCallback((()=>{s.classList.remove(l,h),s.classList.add(it),i.classList.remove(it,h,l),this._isSliding=!1,r(tt)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return z.findOne(".active.carousel-item",this._element)}_getItems(){return z.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return u()?t===J?G:U:t===J?U:G}_orderToDirection(t){return u()?t===G?J:Z:t===G?Z:J}static jQueryInterface(t){return this.each((function(){const e=rt.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}I.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",(function(t){const e=z.getElementFromSelector(this);if(!e||!e.classList.contains(et))return;t.preventDefault();const i=rt.getOrCreateInstance(e),n=this.getAttribute("data-bs-slide-to");return n?(i.to(n),void i._maybeEnableCycle()):"next"===H.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),I.on(window,"load.bs.carousel.data-api",(()=>{const t=z.find('[data-bs-ride="carousel"]');for(const e of t)rt.getOrCreateInstance(e)})),f(rt);const at="show",lt="collapse",ct="collapsing",ht='[data-bs-toggle="collapse"]',dt={parent:null,toggle:!0},ut={parent:"(null|element)",toggle:"boolean"};class ft extends W{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=z.find(ht);for(const t of i){const e=z.getSelectorFromElement(t),i=z.find(e).filter((t=>t===this._element));null!==e&&i.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return dt}static get DefaultType(){return ut}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>ft.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(I.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(lt),this._element.classList.add(ct),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ct),this._element.classList.add(lt,at),this._element.style[e]="",I.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(I.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,c(this._element),this._element.classList.add(ct),this._element.classList.remove(lt,at);for(const t of this._triggerArray){const e=z.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ct),this._element.classList.add(lt),I.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(at)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=s(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(ht);for(const e of t){const t=z.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=z.find(":scope .collapse .collapse",this._config.parent);return z.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=ft.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}I.on(document,"click.bs.collapse.data-api",ht,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of z.getMultipleElementsFromSelector(this))ft.getOrCreateInstance(t,{toggle:!1}).toggle()})),f(ft);var pt="top",mt="bottom",gt="right",_t="left",bt="auto",vt=[pt,mt,gt,_t],yt="start",wt="end",At="clippingParents",Et="viewport",Tt="popper",Ct="reference",Ot=vt.reduce((function(t,e){return t.concat([e+"-"+yt,e+"-"+wt])}),[]),xt=[].concat(vt,[bt]).reduce((function(t,e){return t.concat([e,e+"-"+yt,e+"-"+wt])}),[]),kt="beforeRead",Lt="read",St="afterRead",Dt="beforeMain",It="main",Nt="afterMain",Pt="beforeWrite",jt="write",Mt="afterWrite",Ft=[kt,Lt,St,Dt,It,Nt,Pt,jt,Mt];function Ht(t){return t?(t.nodeName||"").toLowerCase():null}function $t(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Wt(t){return t instanceof $t(t).Element||t instanceof Element}function Bt(t){return t instanceof $t(t).HTMLElement||t instanceof HTMLElement}function zt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof $t(t).ShadowRoot||t instanceof ShadowRoot)}const Rt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];Bt(s)&&Ht(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});Bt(n)&&Ht(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function qt(t){return t.split("-")[0]}var Vt=Math.max,Kt=Math.min,Qt=Math.round;function Xt(){var t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function Yt(){return!/^((?!chrome|android).)*safari/i.test(Xt())}function Ut(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1);var n=t.getBoundingClientRect(),s=1,o=1;e&&Bt(t)&&(s=t.offsetWidth>0&&Qt(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&Qt(n.height)/t.offsetHeight||1);var r=(Wt(t)?$t(t):window).visualViewport,a=!Yt()&&i,l=(n.left+(a&&r?r.offsetLeft:0))/s,c=(n.top+(a&&r?r.offsetTop:0))/o,h=n.width/s,d=n.height/o;return{width:h,height:d,top:c,right:l+h,bottom:c+d,left:l,x:l,y:c}}function Gt(t){var e=Ut(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function Jt(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&zt(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Zt(t){return $t(t).getComputedStyle(t)}function te(t){return["table","td","th"].indexOf(Ht(t))>=0}function ee(t){return((Wt(t)?t.ownerDocument:t.document)||window.document).documentElement}function ie(t){return"html"===Ht(t)?t:t.assignedSlot||t.parentNode||(zt(t)?t.host:null)||ee(t)}function ne(t){return Bt(t)&&"fixed"!==Zt(t).position?t.offsetParent:null}function se(t){for(var e=$t(t),i=ne(t);i&&te(i)&&"static"===Zt(i).position;)i=ne(i);return i&&("html"===Ht(i)||"body"===Ht(i)&&"static"===Zt(i).position)?e:i||function(t){var e=/firefox/i.test(Xt());if(/Trident/i.test(Xt())&&Bt(t)&&"fixed"===Zt(t).position)return null;var i=ie(t);for(zt(i)&&(i=i.host);Bt(i)&&["html","body"].indexOf(Ht(i))<0;){var n=Zt(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function oe(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function re(t,e,i){return Vt(t,Kt(e,i))}function ae(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function le(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}const ce={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=qt(i.placement),l=oe(a),c=[_t,gt].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return ae("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:le(t,vt))}(s.padding,i),d=Gt(o),u="y"===l?pt:_t,f="y"===l?mt:gt,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],m=r[l]-i.rects.reference[l],g=se(o),_=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=p/2-m/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,A=re(v,w,y),E=l;i.modifiersData[n]=((e={})[E]=A,e.centerOffset=A-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&Jt(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function he(t){return t.split("-")[1]}var de={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ue(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=t.isFixed,u=r.x,f=void 0===u?0:u,p=r.y,m=void 0===p?0:p,g="function"==typeof h?h({x:f,y:m}):{x:f,y:m};f=g.x,m=g.y;var _=r.hasOwnProperty("x"),b=r.hasOwnProperty("y"),v=_t,y=pt,w=window;if(c){var A=se(i),E="clientHeight",T="clientWidth";A===$t(i)&&"static"!==Zt(A=ee(i)).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth"),(s===pt||(s===_t||s===gt)&&o===wt)&&(y=mt,m-=(d&&A===w&&w.visualViewport?w.visualViewport.height:A[E])-n.height,m*=l?1:-1),s!==_t&&(s!==pt&&s!==mt||o!==wt)||(v=gt,f-=(d&&A===w&&w.visualViewport?w.visualViewport.width:A[T])-n.width,f*=l?1:-1)}var C,O=Object.assign({position:a},c&&de),x=!0===h?function(t){var e=t.x,i=t.y,n=window.devicePixelRatio||1;return{x:Qt(e*n)/n||0,y:Qt(i*n)/n||0}}({x:f,y:m}):{x:f,y:m};return f=x.x,m=x.y,l?Object.assign({},O,((C={})[y]=b?"0":"",C[v]=_?"0":"",C.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",C)):Object.assign({},O,((e={})[y]=b?m+"px":"",e[v]=_?f+"px":"",e.transform="",e))}const fe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:qt(e.placement),variation:he(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,ue(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,ue(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var pe={passive:!0};const me={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=$t(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,pe)})),a&&l.addEventListener("resize",i.update,pe),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,pe)})),a&&l.removeEventListener("resize",i.update,pe)}},data:{}};var ge={left:"right",right:"left",bottom:"top",top:"bottom"};function _e(t){return t.replace(/left|right|bottom|top/g,(function(t){return ge[t]}))}var be={start:"end",end:"start"};function ve(t){return t.replace(/start|end/g,(function(t){return be[t]}))}function ye(t){var e=$t(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function we(t){return Ut(ee(t)).left+ye(t).scrollLeft}function Ae(t){var e=Zt(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Ee(t){return["html","body","#document"].indexOf(Ht(t))>=0?t.ownerDocument.body:Bt(t)&&Ae(t)?t:Ee(ie(t))}function Te(t,e){var i;void 0===e&&(e=[]);var n=Ee(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=$t(n),r=s?[o].concat(o.visualViewport||[],Ae(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Te(ie(r)))}function Ce(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Oe(t,e,i){return e===Et?Ce(function(t,e){var i=$t(t),n=ee(t),s=i.visualViewport,o=n.clientWidth,r=n.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;var c=Yt();(c||!c&&"fixed"===e)&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a+we(t),y:l}}(t,i)):Wt(e)?function(t,e){var i=Ut(t,!1,"fixed"===e);return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}(e,i):Ce(function(t){var e,i=ee(t),n=ye(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=Vt(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=Vt(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+we(t),l=-n.scrollTop;return"rtl"===Zt(s||i).direction&&(a+=Vt(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(ee(t)))}function xe(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?qt(s):null,r=s?he(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case pt:e={x:a,y:i.y-n.height};break;case mt:e={x:a,y:i.y+i.height};break;case gt:e={x:i.x+i.width,y:l};break;case _t:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?oe(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case yt:e[c]=e[c]-(i[h]/2-n[h]/2);break;case wt:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function ke(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.strategy,r=void 0===o?t.strategy:o,a=i.boundary,l=void 0===a?At:a,c=i.rootBoundary,h=void 0===c?Et:c,d=i.elementContext,u=void 0===d?Tt:d,f=i.altBoundary,p=void 0!==f&&f,m=i.padding,g=void 0===m?0:m,_=ae("number"!=typeof g?g:le(g,vt)),b=u===Tt?Ct:Tt,v=t.rects.popper,y=t.elements[p?b:u],w=function(t,e,i,n){var s="clippingParents"===e?function(t){var e=Te(ie(t)),i=["absolute","fixed"].indexOf(Zt(t).position)>=0&&Bt(t)?se(t):t;return Wt(i)?e.filter((function(t){return Wt(t)&&Jt(t,i)&&"body"!==Ht(t)})):[]}(t):[].concat(e),o=[].concat(s,[i]),r=o[0],a=o.reduce((function(e,i){var s=Oe(t,i,n);return e.top=Vt(s.top,e.top),e.right=Kt(s.right,e.right),e.bottom=Kt(s.bottom,e.bottom),e.left=Vt(s.left,e.left),e}),Oe(t,r,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(Wt(y)?y:y.contextElement||ee(t.elements.popper),l,h,r),A=Ut(t.elements.reference),E=xe({reference:A,element:v,strategy:"absolute",placement:s}),T=Ce(Object.assign({},v,E)),C=u===Tt?T:A,O={top:w.top-C.top+_.top,bottom:C.bottom-w.bottom+_.bottom,left:w.left-C.left+_.left,right:C.right-w.right+_.right},x=t.modifiersData.offset;if(u===Tt&&x){var k=x[s];Object.keys(O).forEach((function(t){var e=[gt,mt].indexOf(t)>=0?1:-1,i=[pt,mt].indexOf(t)>=0?"y":"x";O[t]+=k[i]*e}))}return O}function Le(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?xt:l,h=he(n),d=h?a?Ot:Ot.filter((function(t){return he(t)===h})):vt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=ke(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[qt(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}const Se={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,m=i.allowedAutoPlacements,g=e.options.placement,_=qt(g),b=l||(_!==g&&p?function(t){if(qt(t)===bt)return[];var e=_e(t);return[ve(t),e,ve(e)]}(g):[_e(g)]),v=[g].concat(b).reduce((function(t,i){return t.concat(qt(i)===bt?Le(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:m}):i)}),[]),y=e.rects.reference,w=e.rects.popper,A=new Map,E=!0,T=v[0],C=0;C<v.length;C++){var O=v[C],x=qt(O),k=he(O)===yt,L=[pt,mt].indexOf(x)>=0,S=L?"width":"height",D=ke(e,{placement:O,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),I=L?k?gt:_t:k?mt:pt;y[S]>w[S]&&(I=_e(I));var N=_e(I),P=[];if(o&&P.push(D[x]<=0),a&&P.push(D[I]<=0,D[N]<=0),P.every((function(t){return t}))){T=O,E=!1;break}A.set(O,P)}if(E)for(var j=function(t){var e=v.find((function(e){var i=A.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},M=p?3:1;M>0&&"break"!==j(M);M--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function De(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function Ie(t){return[pt,gt,mt,_t].some((function(e){return t[e]>=0}))}const Ne={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=ke(e,{elementContext:"reference"}),a=ke(e,{altBoundary:!0}),l=De(r,n),c=De(a,s,o),h=Ie(l),d=Ie(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},Pe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=xt.reduce((function(t,i){return t[i]=function(t,e,i){var n=qt(t),s=[_t,pt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[_t,gt].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},je={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=xe({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},Me={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,m=void 0===p?0:p,g=ke(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=qt(e.placement),b=he(e.placement),v=!b,y=oe(_),w="x"===y?"y":"x",A=e.modifiersData.popperOffsets,E=e.rects.reference,T=e.rects.popper,C="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,O="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),x=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(A){if(o){var L,S="y"===y?pt:_t,D="y"===y?mt:gt,I="y"===y?"height":"width",N=A[y],P=N+g[S],j=N-g[D],M=f?-T[I]/2:0,F=b===yt?E[I]:T[I],H=b===yt?-T[I]:-E[I],$=e.elements.arrow,W=f&&$?Gt($):{width:0,height:0},B=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=B[S],R=B[D],q=re(0,E[I],W[I]),V=v?E[I]/2-M-q-z-O.mainAxis:F-q-z-O.mainAxis,K=v?-E[I]/2+M+q+R+O.mainAxis:H+q+R+O.mainAxis,Q=e.elements.arrow&&se(e.elements.arrow),X=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,Y=null!=(L=null==x?void 0:x[y])?L:0,U=N+K-Y,G=re(f?Kt(P,N+V-Y-X):P,N,f?Vt(j,U):j);A[y]=G,k[y]=G-N}if(a){var J,Z="x"===y?pt:_t,tt="x"===y?mt:gt,et=A[w],it="y"===w?"height":"width",nt=et+g[Z],st=et-g[tt],ot=-1!==[pt,_t].indexOf(_),rt=null!=(J=null==x?void 0:x[w])?J:0,at=ot?nt:et-E[it]-T[it]-rt+O.altAxis,lt=ot?et+E[it]+T[it]-rt-O.altAxis:st,ct=f&&ot?function(t,e,i){var n=re(t,e,i);return n>i?i:n}(at,et,lt):re(f?at:nt,et,f?lt:st);A[w]=ct,k[w]=ct-et}e.modifiersData[n]=k}},requiresIfExists:["offset"]};function Fe(t,e,i){void 0===i&&(i=!1);var n,s,o=Bt(e),r=Bt(e)&&function(t){var e=t.getBoundingClientRect(),i=Qt(e.width)/t.offsetWidth||1,n=Qt(e.height)/t.offsetHeight||1;return 1!==i||1!==n}(e),a=ee(e),l=Ut(t,r,i),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(o||!o&&!i)&&(("body"!==Ht(e)||Ae(a))&&(c=(n=e)!==$t(n)&&Bt(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:ye(n)),Bt(e)?((h=Ut(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=we(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}function He(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||s(t)})),n}var $e={placement:"bottom",modifiers:[],strategy:"absolute"};function We(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function Be(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?$e:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},$e,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:Wt(t)?Te(t):t.contextElement?Te(t.contextElement):[],popper:Te(e)};var r,c,u=function(t){var e=He(t);return Ft.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(We(e,i)){a.rects={reference:Fe(e,se(i),"fixed"===a.options.strategy),popper:Gt(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!We(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var ze=Be(),Re=Be({defaultModifiers:[me,je,fe,Rt]}),qe=Be({defaultModifiers:[me,je,fe,Rt,Pe,Se,Me,ce,Ne]});const Ve=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:Be,detectOverflow:ke,createPopperBase:ze,createPopper:qe,createPopperLite:Re,top:pt,bottom:mt,right:gt,left:_t,auto:bt,basePlacements:vt,start:yt,end:wt,clippingParents:At,viewport:Et,popper:Tt,reference:Ct,variationPlacements:Ot,placements:xt,beforeRead:kt,read:Lt,afterRead:St,beforeMain:Dt,main:It,afterMain:Nt,beforeWrite:Pt,write:jt,afterWrite:Mt,modifierPhases:Ft,applyStyles:Rt,arrow:ce,computeStyles:fe,eventListeners:me,flip:Se,hide:Ne,offset:Pe,popperOffsets:je,preventOverflow:Me},Symbol.toStringTag,{value:"Module"})),Ke="dropdown",Qe="ArrowUp",Xe="ArrowDown",Ye="click.bs.dropdown.data-api",Ue="keydown.bs.dropdown.data-api",Ge="show",Je='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ze=`${Je}.show`,ti=".dropdown-menu",ei=u()?"top-end":"top-start",ii=u()?"top-start":"top-end",ni=u()?"bottom-end":"bottom-start",si=u()?"bottom-start":"bottom-end",oi=u()?"left-start":"right-start",ri=u()?"right-start":"left-start",ai={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},li={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ci extends W{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=z.next(this._element,ti)[0]||z.prev(this._element,ti)[0]||z.findOne(ti,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return ai}static get DefaultType(){return li}static get NAME(){return Ke}toggle(){return this._isShown()?this.hide():this.show()}show(){if(r(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!I.trigger(this._element,"show.bs.dropdown",t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))I.on(t,"mouseover",l);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ge),this._element.classList.add(Ge),I.trigger(this._element,"shown.bs.dropdown",t)}}hide(){if(r(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!I.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))I.off(t,"mouseover",l);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ge),this._element.classList.remove(Ge),this._element.setAttribute("aria-expanded","false"),H.removeDataAttribute(this._menu,"popper"),I.trigger(this._element,"hidden.bs.dropdown",t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!n(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${Ke.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===Ve)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:n(this._config.reference)?t=s(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=qe(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Ge)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return oi;if(t.classList.contains("dropstart"))return ri;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ii:ei:e?si:ni}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(H.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...p(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const i=z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>o(t)));i.length&&g(i,e,t===Xe,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=ci.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=z.find(Ze);for(const i of e){const e=ci.getInstance(i);if(!e||!1===e._config.autoClose)continue;const n=t.composedPath(),s=n.includes(e._menu);if(n.includes(e._element)||"inside"===e._config.autoClose&&!s||"outside"===e._config.autoClose&&s)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,n=[Qe,Xe].includes(t.key);if(!n&&!i)return;if(e&&!i)return;t.preventDefault();const s=this.matches(Je)?this:z.prev(this,Je)[0]||z.next(this,Je)[0]||z.findOne(Je,t.delegateTarget.parentNode),o=ci.getOrCreateInstance(s);if(n)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}I.on(document,Ue,Je,ci.dataApiKeydownHandler),I.on(document,Ue,ti,ci.dataApiKeydownHandler),I.on(document,Ye,ci.clearMenus),I.on(document,"keyup.bs.dropdown.data-api",ci.clearMenus),I.on(document,Ye,Je,(function(t){t.preventDefault(),ci.getOrCreateInstance(this).toggle()})),f(ci);const hi=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",di=".sticky-top",ui="padding-right",fi="margin-right";class pi{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ui,(e=>e+t)),this._setElementAttributes(hi,ui,(e=>e+t)),this._setElementAttributes(di,fi,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ui),this._resetElementAttributes(hi,ui),this._resetElementAttributes(di,fi)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&H.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=H.getDataAttribute(t,e);null!==i?(H.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(n(t))e(t);else for(const i of z.find(t,this._element))e(i)}}const mi="show",gi="mousedown.bs.backdrop",_i={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},bi={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class vi extends ${constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return _i}static get DefaultType(){return bi}static get NAME(){return"backdrop"}show(t){if(!this._config.isVisible)return void p(t);this._append();const e=this._getElement();this._config.isAnimated&&c(e),e.classList.add(mi),this._emulateAnimation((()=>{p(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(mi),this._emulateAnimation((()=>{this.dispose(),p(t)}))):p(t)}dispose(){this._isAppended&&(I.off(this._element,gi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=s(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),I.on(t,gi,(()=>{p(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){m(t,this._getElement(),this._config.isAnimated)}}const yi=".bs.focustrap",wi="backward",Ai={autofocus:!0,trapElement:null},Ei={autofocus:"boolean",trapElement:"element"};class Ti extends ${constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Ai}static get DefaultType(){return Ei}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),I.off(document,yi),I.on(document,"focusin.bs.focustrap",(t=>this._handleFocusin(t))),I.on(document,"keydown.tab.bs.focustrap",(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,I.off(document,yi))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=z.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===wi?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?wi:"forward")}}const Ci="hidden.bs.modal",Oi="show.bs.modal",xi="modal-open",ki="show",Li="modal-static",Si={backdrop:!0,focus:!0,keyboard:!0},Di={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ii extends W{constructor(t,e){super(t,e),this._dialog=z.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new pi,this._addEventListeners()}static get Default(){return Si}static get DefaultType(){return Di}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||I.trigger(this._element,Oi,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(xi),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(I.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ki),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){for(const t of[window,this._dialog])I.off(t,".bs.modal");this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new vi({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ti({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=z.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),c(this._element),this._element.classList.add(ki),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,I.trigger(this._element,"shown.bs.modal",{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){I.on(this._element,"keydown.dismiss.bs.modal",(t=>{if("Escape"===t.key)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),I.on(window,"resize.bs.modal",(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),I.on(this._element,"mousedown.dismiss.bs.modal",(t=>{I.one(this._element,"click.dismiss.bs.modal",(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(xi),this._resetAdjustments(),this._scrollBar.reset(),I.trigger(this._element,Ci)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(I.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(Li)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(Li),this._queueCallback((()=>{this._element.classList.remove(Li),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=u()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=u()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=Ii.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}I.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=z.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),I.one(e,Oi,(t=>{t.defaultPrevented||I.one(e,Ci,(()=>{o(this)&&this.focus()}))}));const i=z.findOne(".modal.show");i&&Ii.getInstance(i).hide(),Ii.getOrCreateInstance(e).toggle(this)})),R(Ii),f(Ii);const Ni="show",Pi="showing",ji="hiding",Mi=".offcanvas.show",Fi="hidePrevented.bs.offcanvas",Hi="hidden.bs.offcanvas",$i={backdrop:!0,keyboard:!0,scroll:!1},Wi={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Bi extends W{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return $i}static get DefaultType(){return Wi}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||I.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new pi).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Pi),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ni),this._element.classList.remove(Pi),I.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(I.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ji),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(Ni,ji),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new pi).reset(),I.trigger(this._element,Hi)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new vi({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():I.trigger(this._element,Fi)}:null})}_initializeFocusTrap(){return new Ti({trapElement:this._element})}_addEventListeners(){I.on(this._element,"keydown.dismiss.bs.offcanvas",(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():I.trigger(this._element,Fi))}))}static jQueryInterface(t){return this.each((function(){const e=Bi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}I.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=z.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),r(this))return;I.one(e,Hi,(()=>{o(this)&&this.focus()}));const i=z.findOne(Mi);i&&i!==e&&Bi.getInstance(i).hide(),Bi.getOrCreateInstance(e).toggle(this)})),I.on(window,"load.bs.offcanvas.data-api",(()=>{for(const t of z.find(Mi))Bi.getOrCreateInstance(t).show()})),I.on(window,"resize.bs.offcanvas",(()=>{for(const t of z.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&Bi.getOrCreateInstance(t).hide()})),R(Bi),f(Bi);const zi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ri=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,qi=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Vi=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!zi.has(i)||Boolean(Ri.test(t.nodeValue)||qi.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},Ki={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Qi={allowList:Ki,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Xi={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Yi={entry:"(string|element|function|null)",selector:"(string|element)"};class Ui extends ${constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Qi}static get DefaultType(){return Xi}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Yi)}_setContent(t,e,i){const o=z.findOne(i,t);o&&((e=this._resolvePossibleFunction(e))?n(e)?this._putElementInTemplate(s(e),o):this._config.html?o.innerHTML=this._maybeSanitize(e):o.textContent=e:o.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...n.body.querySelectorAll("*"));for(const t of s){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const n=[].concat(...t.attributes),s=[].concat(e["*"]||[],e[i]||[]);for(const e of n)Vi(e,s)||t.removeAttribute(e.nodeName)}return n.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return p(t,[this])}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Gi=new Set(["sanitize","allowList","sanitizeFn"]),Ji="fade",Zi="show",tn=".modal",en="hide.bs.modal",nn="hover",sn="focus",on={AUTO:"auto",TOP:"top",RIGHT:u()?"left":"right",BOTTOM:"bottom",LEFT:u()?"right":"left"},rn={allowList:Ki,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},an={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ln extends W{constructor(t,e){if(void 0===Ve)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return rn}static get DefaultType(){return an}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),I.off(this._element.closest(tn),en,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=I.trigger(this._element,this.constructor.eventName("show")),e=(a(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:n}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),I.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(Zi),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))I.on(t,"mouseover",l);this._queueCallback((()=>{I.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!I.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Zi),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))I.off(t,"mouseover",l);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),I.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Ji,Zi),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Ji),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Ui({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Ji)}_isShown(){return this.tip&&this.tip.classList.contains(Zi)}_createPopper(t){const e=p(this._config.placement,[this,t,this._element]),i=on[e.toUpperCase()];return qe(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return p(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,...p(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)I.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{this._initializeOnDelegatedTarget(t).toggle()}));else if("manual"!==e){const t=e===nn?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===nn?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");I.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?sn:nn]=!0,e._enter()})),I.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?sn:nn]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},I.on(this._element.closest(tn),en,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=H.getDataAttributes(this._element);for(const t of Object.keys(e))Gi.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:s(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=ln.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}f(ln);const cn={...ln.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},hn={...ln.DefaultType,content:"(null|string|element|function)"};class dn extends ln{static get Default(){return cn}static get DefaultType(){return hn}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=dn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}f(dn);const un="click.bs.scrollspy",fn="active",pn="[href]",mn={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},gn={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class _n extends W{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return mn}static get DefaultType(){return gn}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=s(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(I.off(this._config.target,un),I.on(this._config.target,un,pn,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,n=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:n,behavior:"smooth"});i.scrollTop=n}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},n=(this._rootElement||document.documentElement).scrollTop,s=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&t){if(i(o),!n)return}else s||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=z.find(pn,this._config.target);for(const e of t){if(!e.hash||r(e))continue;const t=z.findOne(e.hash,this._element);o(t)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(fn),this._activateParents(t),I.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))z.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(fn);else for(const e of z.parents(t,".nav, .list-group"))for(const t of z.prev(e,".nav-link, .nav-item > .nav-link, .list-group-item"))t.classList.add(fn)}_clearActiveClass(t){t.classList.remove(fn);const e=z.find("[href].active",t);for(const t of e)t.classList.remove(fn)}static jQueryInterface(t){return this.each((function(){const e=_n.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}I.on(window,"load.bs.scrollspy.data-api",(()=>{for(const t of z.find('[data-bs-spy="scroll"]'))_n.getOrCreateInstance(t)})),f(_n);const bn="ArrowLeft",vn="ArrowRight",yn="ArrowUp",wn="ArrowDown",An="active",En="fade",Tn="show",Cn='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',On=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Cn}`;class xn extends W{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),I.on(this._element,"keydown.bs.tab",(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?I.trigger(e,"hide.bs.tab",{relatedTarget:t}):null;I.trigger(t,"show.bs.tab",{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(An),this._activate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),I.trigger(t,"shown.bs.tab",{relatedTarget:e})):t.classList.add(Tn)}),t,t.classList.contains(En)))}_deactivate(t,e){t&&(t.classList.remove(An),t.blur(),this._deactivate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),I.trigger(t,"hidden.bs.tab",{relatedTarget:e})):t.classList.remove(Tn)}),t,t.classList.contains(En)))}_keydown(t){if(![bn,vn,yn,wn].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[vn,wn].includes(t.key),i=g(this._getChildren().filter((t=>!r(t))),t.target,e,!0);i&&(i.focus({preventScroll:!0}),xn.getOrCreateInstance(i).show())}_getChildren(){return z.find(On,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=z.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const n=(t,n)=>{const s=z.findOne(t,i);s&&s.classList.toggle(n,e)};n(".dropdown-toggle",An),n(".dropdown-menu",Tn),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(An)}_getInnerElement(t){return t.matches(On)?t:z.findOne(On,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=xn.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}I.on(document,"click.bs.tab",Cn,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),r(this)||xn.getOrCreateInstance(this).show()})),I.on(window,"load.bs.tab",(()=>{for(const t of z.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))xn.getOrCreateInstance(t)})),f(xn);const kn="hide",Ln="show",Sn="showing",Dn={animation:"boolean",autohide:"boolean",delay:"number"},In={animation:!0,autohide:!0,delay:5e3};class Nn extends W{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return In}static get DefaultType(){return Dn}static get NAME(){return"toast"}show(){I.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(kn),c(this._element),this._element.classList.add(Ln,Sn),this._queueCallback((()=>{this._element.classList.remove(Sn),I.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(I.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(Sn),this._queueCallback((()=>{this._element.classList.add(kn),this._element.classList.remove(Sn,Ln),I.trigger(this._element,"hidden.bs.toast")}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ln),super.dispose()}isShown(){return this._element.classList.contains(Ln)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){I.on(this._element,"mouseover.bs.toast",(t=>this._onInteraction(t,!0))),I.on(this._element,"mouseout.bs.toast",(t=>this._onInteraction(t,!1))),I.on(this._element,"focusin.bs.toast",(t=>this._onInteraction(t,!0))),I.on(this._element,"focusout.bs.toast",(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=Nn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return R(Nn),f(Nn),{Alert:q,Button:K,Carousel:rt,Collapse:ft,Dropdown:ci,Modal:Ii,Offcanvas:Bi,Popover:dn,ScrollSpy:_n,Tab:xn,Toast:Nn,Tooltip:ln}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map
/*
Template Name: Admin Template
Author: Wrappixel

File: js
*/
// ==============================================================
// Auto select left navbar
// ==============================================================
$(function () {
    "use strict";
    var url = window.location + "";
    var path = url.replace(
      window.location.protocol + "//" + window.location.host + "/",
      ""
    );
    var element = $("ul#sidebarnav a").filter(function () {
      return this.href === url || this.href === path; // || url.href.indexOf(this.href) === 0;
    });
    element.parentsUntil(".sidebar-nav").each(function (index) {
      if ($(this).is("li") && $(this).children("a").length !== 0) {
        $(this).children("a").addClass("active");
        $(this).parent("ul#sidebarnav").length === 0
          ? $(this).addClass("active")
          : $(this).addClass("selected");
      } else if (!$(this).is("ul") && $(this).children("a").length === 0) {
        $(this).addClass("selected");
      } else if ($(this).is("ul")) {
        $(this).addClass("in");
      }
    });
  
    element.addClass("active");
    $("#sidebarnav a").on("click", function (e) {
      if (!$(this).hasClass("active")) {
        // hide any open menus and remove all other classes
        $("ul", $(this).parents("ul:first")).removeClass("in");
        $("a", $(this).parents("ul:first")).removeClass("active");
  
        // open our new menu and add the open class
        $(this).next("ul").addClass("in");
        $(this).addClass("active");
      } else if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).parents("ul:first").removeClass("active");
        $(this).next("ul").removeClass("in");
      }
    });
    $("#sidebarnav >li >a.has-arrow").on("click", function (e) {
      e.preventDefault();
    });
  });

$(function () {
  // Admin Panel settings

  //****************************
  /* This is for the mini-sidebar if width is less then 1170*/
  //****************************
  var setsidebartype = function () {
    var width =
      window.innerWidth > 0 ? window.innerWidth : this.screen.width;
    if (width < 1199) {
      $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
      $("#main-wrapper").addClass("mini-sidebar");
    } else {
      $("#main-wrapper").attr("data-sidebartype", "full");
      $("#main-wrapper").removeClass("mini-sidebar");
    }
  };
  $(window).ready(setsidebartype);
  $(window).on("resize", setsidebartype);
  //****************************
  /* This is for sidebartoggler*/
  //****************************
  $(".sidebartoggler").on("click", function () {
    $("#main-wrapper").toggleClass("mini-sidebar");
    if ($("#main-wrapper").hasClass("mini-sidebar")) {
      $(".sidebartoggler").prop("checked", !0);
      $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
    } else {
      $(".sidebartoggler").prop("checked", !1);
      $("#main-wrapper").attr("data-sidebartype", "full");
    }
  });
  $(".sidebartoggler").on("click", function () {
    $("#main-wrapper").toggleClass("show-sidebar");
  });
})
/*!
 * ApexCharts v3.36.2
 * (c) 2018-2022 ApexCharts
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).ApexCharts=e()}(this,(function(){"use strict";function t(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function e(e){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?t(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function c(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=l(t);if(e){var s=l(this).constructor;i=Reflect.construct(a,arguments,s)}else i=a.apply(this,arguments);return c(this,i)}}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==i)return;var a,s,r=[],o=!0,n=!1;try{for(i=i.call(t);!(o=(a=i.next()).done)&&(r.push(a.value),!e||r.length!==e);o=!0);}catch(t){n=!0,s=t}finally{try{o||null==i.return||i.return()}finally{if(n)throw s}}return r}(t,e)||f(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||f(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){if(t){if("string"==typeof t)return p(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?p(t,e):void 0}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}var x=function(){function t(){a(this,t)}return r(t,[{key:"shadeRGBColor",value:function(t,e){var i=e.split(","),a=t<0?0:255,s=t<0?-1*t:t,r=parseInt(i[0].slice(4),10),o=parseInt(i[1],10),n=parseInt(i[2],10);return"rgb("+(Math.round((a-r)*s)+r)+","+(Math.round((a-o)*s)+o)+","+(Math.round((a-n)*s)+n)+")"}},{key:"shadeHexColor",value:function(t,e){var i=parseInt(e.slice(1),16),a=t<0?0:255,s=t<0?-1*t:t,r=i>>16,o=i>>8&255,n=255&i;return"#"+(16777216+65536*(Math.round((a-r)*s)+r)+256*(Math.round((a-o)*s)+o)+(Math.round((a-n)*s)+n)).toString(16).slice(1)}},{key:"shadeColor",value:function(e,i){return t.isColorHex(i)?this.shadeHexColor(e,i):this.shadeRGBColor(e,i)}}],[{key:"bind",value:function(t,e){return function(){return t.apply(e,arguments)}}},{key:"isObject",value:function(t){return t&&"object"===i(t)&&!Array.isArray(t)&&null!=t}},{key:"is",value:function(t,e){return Object.prototype.toString.call(e)==="[object "+t+"]"}},{key:"listToArray",value:function(t){var e,i=[];for(e=0;e<t.length;e++)i[e]=t[e];return i}},{key:"extend",value:function(t,e){var i=this;"function"!=typeof Object.assign&&(Object.assign=function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var a=arguments[i];if(null!=a)for(var s in a)a.hasOwnProperty(s)&&(e[s]=a[s])}return e});var a=Object.assign({},t);return this.isObject(t)&&this.isObject(e)&&Object.keys(e).forEach((function(s){i.isObject(e[s])&&s in t?a[s]=i.extend(t[s],e[s]):Object.assign(a,o({},s,e[s]))})),a}},{key:"extendArray",value:function(e,i){var a=[];return e.map((function(e){a.push(t.extend(i,e))})),e=a}},{key:"monthMod",value:function(t){return t%12}},{key:"clone",value:function(e){if(t.is("Array",e)){for(var a=[],s=0;s<e.length;s++)a[s]=this.clone(e[s]);return a}if(t.is("Null",e))return null;if(t.is("Date",e))return e;if("object"===i(e)){var r={};for(var o in e)e.hasOwnProperty(o)&&(r[o]=this.clone(e[o]));return r}return e}},{key:"log10",value:function(t){return Math.log(t)/Math.LN10}},{key:"roundToBase10",value:function(t){return Math.pow(10,Math.floor(Math.log10(t)))}},{key:"roundToBase",value:function(t,e){return Math.pow(e,Math.floor(Math.log(t)/Math.log(e)))}},{key:"parseNumber",value:function(t){return null===t?t:parseFloat(t)}},{key:"randomId",value:function(){return(Math.random()+1).toString(36).substring(4)}},{key:"noExponents",value:function(t){var e=String(t).split(/[eE]/);if(1===e.length)return e[0];var i="",a=t<0?"-":"",s=e[0].replace(".",""),r=Number(e[1])+1;if(r<0){for(i=a+"0.";r++;)i+="0";return i+s.replace(/^-/,"")}for(r-=s.length;r--;)i+="0";return s+i}},{key:"getDimensions",value:function(t){var e=getComputedStyle(t,null),i=t.clientHeight,a=t.clientWidth;return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom),[a-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight),i]}},{key:"getBoundingClientRect",value:function(t){var e=t.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:t.clientWidth,height:t.clientHeight,x:e.left,y:e.top}}},{key:"getLargestStringFromArr",value:function(t){return t.reduce((function(t,e){return Array.isArray(e)&&(e=e.reduce((function(t,e){return t.length>e.length?t:e}))),t.length>e.length?t:e}),0)}},{key:"hexToRgba",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#999999",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.6;"#"!==t.substring(0,1)&&(t="#999999");var i=t.replace("#","");i=i.match(new RegExp("(.{"+i.length/3+"})","g"));for(var a=0;a<i.length;a++)i[a]=parseInt(1===i[a].length?i[a]+i[a]:i[a],16);return void 0!==e&&i.push(e),"rgba("+i.join(",")+")"}},{key:"getOpacityFromRGBA",value:function(t){return parseFloat(t.replace(/^.*,(.+)\)/,"$1"))}},{key:"rgb2hex",value:function(t){return(t=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&4===t.length?"#"+("0"+parseInt(t[1],10).toString(16)).slice(-2)+("0"+parseInt(t[2],10).toString(16)).slice(-2)+("0"+parseInt(t[3],10).toString(16)).slice(-2):""}},{key:"isColorHex",value:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t)}},{key:"getPolygonPos",value:function(t,e){for(var i=[],a=2*Math.PI/e,s=0;s<e;s++){var r={};r.x=t*Math.sin(s*a),r.y=-t*Math.cos(s*a),i.push(r)}return i}},{key:"polarToCartesian",value:function(t,e,i,a){var s=(a-90)*Math.PI/180;return{x:t+i*Math.cos(s),y:e+i*Math.sin(s)}}},{key:"escapeString",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x",i=t.toString().slice();return i=i.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi,e)}},{key:"negToZero",value:function(t){return t<0?0:t}},{key:"moveIndexInArray",value:function(t,e,i){if(i>=t.length)for(var a=i-t.length+1;a--;)t.push(void 0);return t.splice(i,0,t.splice(e,1)[0]),t}},{key:"extractNumber",value:function(t){return parseFloat(t.replace(/[^\d.]*/g,""))}},{key:"findAncestor",value:function(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););return t}},{key:"setELstyles",value:function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t.style.key=e[i])}},{key:"isNumber",value:function(t){return!isNaN(t)&&parseFloat(Number(t))===t&&!isNaN(parseInt(t,10))}},{key:"isFloat",value:function(t){return Number(t)===t&&t%1!=0}},{key:"isSafari",value:function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}},{key:"isFirefox",value:function(){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1}},{key:"isIE11",value:function(){if(-1!==window.navigator.userAgent.indexOf("MSIE")||window.navigator.appVersion.indexOf("Trident/")>-1)return!0}},{key:"isIE",value:function(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);if(t.indexOf("Trident/")>0){var i=t.indexOf("rv:");return parseInt(t.substring(i+3,t.indexOf(".",i)),10)}var a=t.indexOf("Edge/");return a>0&&parseInt(t.substring(a+5,t.indexOf(".",a)),10)}}]),t}(),b=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.setEasingFunctions()}return r(t,[{key:"setEasingFunctions",value:function(){var t;if(!this.w.globals.easing){switch(this.w.config.chart.animations.easing){case"linear":t="-";break;case"easein":t="<";break;case"easeout":t=">";break;case"easeinout":default:t="<>";break;case"swing":t=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1};break;case"bounce":t=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375};break;case"elastic":t=function(t){return t===!!t?t:Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1}}this.w.globals.easing=t}}},{key:"animateLine",value:function(t,e,i,a){t.attr(e).animate(a).attr(i)}},{key:"animateMarker",value:function(t,e,i,a,s,r){e||(e=0),t.attr({r:e,width:e,height:e}).animate(a,s).attr({r:i,width:i.width,height:i.height}).afterAll((function(){r()}))}},{key:"animateCircle",value:function(t,e,i,a,s){t.attr({r:e.r,cx:e.cx,cy:e.cy}).animate(a,s).attr({r:i.r,cx:i.cx,cy:i.cy})}},{key:"animateRect",value:function(t,e,i,a,s){t.attr(e).animate(a).attr(i).afterAll((function(){return s()}))}},{key:"animatePathsGradually",value:function(t){var e=t.el,i=t.realIndex,a=t.j,s=t.fill,r=t.pathFrom,o=t.pathTo,n=t.speed,l=t.delay,h=this.w,c=0;h.config.chart.animations.animateGradually.enabled&&(c=h.config.chart.animations.animateGradually.delay),h.config.chart.animations.dynamicAnimation.enabled&&h.globals.dataChanged&&"bar"!==h.config.chart.type&&(c=0),this.morphSVG(e,i,a,"line"!==h.config.chart.type||h.globals.comboCharts?s:"stroke",r,o,n,l*c)}},{key:"showDelayedElements",value:function(){this.w.globals.delayedElements.forEach((function(t){t.el.classList.remove("apexcharts-element-hidden")}))}},{key:"animationCompleted",value:function(t){var e=this.w;e.globals.animationEnded||(e.globals.animationEnded=!0,this.showDelayedElements(),"function"==typeof e.config.chart.events.animationEnd&&e.config.chart.events.animationEnd(this.ctx,{el:t,w:e}))}},{key:"morphSVG",value:function(t,e,i,a,s,r,o,n){var l=this,h=this.w;s||(s=t.attr("pathFrom")),r||(r=t.attr("pathTo"));var c=function(t){return"radar"===h.config.chart.type&&(o=1),"M 0 ".concat(h.globals.gridHeight)};(!s||s.indexOf("undefined")>-1||s.indexOf("NaN")>-1)&&(s=c()),(!r||r.indexOf("undefined")>-1||r.indexOf("NaN")>-1)&&(r=c()),h.globals.shouldAnimate||(o=1),t.plot(s).animate(1,h.globals.easing,n).plot(s).animate(o,h.globals.easing,n).plot(r).afterAll((function(){x.isNumber(i)?i===h.globals.series[h.globals.maxValsInArrayIndex].length-2&&h.globals.shouldAnimate&&l.animationCompleted(t):"none"!==a&&h.globals.shouldAnimate&&(!h.globals.comboCharts&&e===h.globals.series.length-1||h.globals.comboCharts)&&l.animationCompleted(t),l.showDelayedElements()}))}}]),t}(),v=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"getDefaultFilter",value:function(t,e){var i=this.w;t.unfilter(!0),(new window.SVG.Filter).size("120%","180%","-5%","-40%"),"none"!==i.config.states.normal.filter?this.applyFilter(t,e,i.config.states.normal.filter.type,i.config.states.normal.filter.value):i.config.chart.dropShadow.enabled&&this.dropShadow(t,i.config.chart.dropShadow,e)}},{key:"addNormalFilter",value:function(t,e){var i=this.w;i.config.chart.dropShadow.enabled&&!t.node.classList.contains("apexcharts-marker")&&this.dropShadow(t,i.config.chart.dropShadow,e)}},{key:"addLightenFilter",value:function(t,e,i){var a=this,s=this.w,r=i.intensity;t.unfilter(!0);new window.SVG.Filter;t.filter((function(t){var i=s.config.chart.dropShadow;(i.enabled?a.addShadow(t,e,i):t).componentTransfer({rgb:{type:"linear",slope:1.5,intercept:r}})})),t.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(t.filterer.node)}},{key:"addDarkenFilter",value:function(t,e,i){var a=this,s=this.w,r=i.intensity;t.unfilter(!0);new window.SVG.Filter;t.filter((function(t){var i=s.config.chart.dropShadow;(i.enabled?a.addShadow(t,e,i):t).componentTransfer({rgb:{type:"linear",slope:r}})})),t.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(t.filterer.node)}},{key:"applyFilter",value:function(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;switch(i){case"none":this.addNormalFilter(t,e);break;case"lighten":this.addLightenFilter(t,e,{intensity:a});break;case"darken":this.addDarkenFilter(t,e,{intensity:a})}}},{key:"addShadow",value:function(t,e,i){var a=i.blur,s=i.top,r=i.left,o=i.color,n=i.opacity,l=t.flood(Array.isArray(o)?o[e]:o,n).composite(t.sourceAlpha,"in").offset(r,s).gaussianBlur(a).merge(t.source);return t.blend(t.source,l)}},{key:"dropShadow",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=e.top,s=e.left,r=e.blur,o=e.color,n=e.opacity,l=e.noUserSpaceOnUse,h=this.w;return t.unfilter(!0),x.isIE()&&"radialBar"===h.config.chart.type||(o=Array.isArray(o)?o[i]:o,t.filter((function(t){var e=null;e=x.isSafari()||x.isFirefox()||x.isIE()?t.flood(o,n).composite(t.sourceAlpha,"in").offset(s,a).gaussianBlur(r):t.flood(o,n).composite(t.sourceAlpha,"in").offset(s,a).gaussianBlur(r).merge(t.source),t.blend(t.source,e)})),l||t.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(t.filterer.node)),t}},{key:"setSelectionFilter",value:function(t,e,i){var a=this.w;if(void 0!==a.globals.selectedDataPoints[e]&&a.globals.selectedDataPoints[e].indexOf(i)>-1){t.node.setAttribute("selected",!0);var s=a.config.states.active.filter;"none"!==s&&this.applyFilter(t,e,s.type,s.value)}}},{key:"_scaleFilterSize",value:function(t){!function(e){for(var i in e)e.hasOwnProperty(i)&&t.setAttribute(i,e[i])}({width:"200%",height:"200%",x:"-50%",y:"-50%"})}}]),t}(),m=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"roundPathCorners",value:function(t,e){function i(t,e,i){var s=e.x-t.x,r=e.y-t.y,o=Math.sqrt(s*s+r*r);return a(t,e,Math.min(1,i/o))}function a(t,e,i){return{x:t.x+(e.x-t.x)*i,y:t.y+(e.y-t.y)*i}}function s(t,e){t.length>2&&(t[t.length-2]=e.x,t[t.length-1]=e.y)}function r(t){return{x:parseFloat(t[t.length-2]),y:parseFloat(t[t.length-1])}}var o=t.split(/[,\s]/).reduce((function(t,e){var i=e.match("([a-zA-Z])(.+)");return i?(t.push(i[1]),t.push(i[2])):t.push(e),t}),[]).reduce((function(t,e){return parseFloat(e)==e&&t.length?t[t.length-1].push(e):t.push([e]),t}),[]),n=[];if(o.length>1){var l=r(o[0]),h=null;"Z"==o[o.length-1][0]&&o[0].length>2&&(h=["L",l.x,l.y],o[o.length-1]=h),n.push(o[0]);for(var c=1;c<o.length;c++){var d=n[n.length-1],g=o[c],u=g==h?o[1]:o[c+1];if(u&&d&&d.length>2&&"L"==g[0]&&u.length>2&&"L"==u[0]){var f,p,x=r(d),b=r(g),v=r(u);f=i(b,x,e),p=i(b,v,e),s(g,f),g.origPoint=b,n.push(g);var m=a(f,b,.5),y=a(b,p,.5),w=["C",m.x,m.y,y.x,y.y,p.x,p.y];w.origPoint=b,n.push(w)}else n.push(g)}if(h){var k=r(n[n.length-1]);n.push(["Z"]),s(n[0],k)}}else n=o;return n.reduce((function(t,e){return t+e.join(" ")+" "}),"")}},{key:"drawLine",value:function(t,e,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"#a8a8a8",r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,n=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"butt",l=this.w,h=l.globals.dom.Paper.line().attr({x1:t,y1:e,x2:i,y2:a,stroke:s,"stroke-dasharray":r,"stroke-width":o,"stroke-linecap":n});return h}},{key:"drawRect",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"#fefefe",o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,n=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,h=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,c=this.w,d=c.globals.dom.Paper.rect();return d.attr({x:t,y:e,width:i>0?i:0,height:a>0?a:0,rx:s,ry:s,opacity:o,"stroke-width":null!==n?n:0,stroke:null!==l?l:"none","stroke-dasharray":h}),d.node.setAttribute("fill",r),d}},{key:"drawPolygon",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e1e1e1",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none",s=this.w,r=s.globals.dom.Paper.polygon(t).attr({fill:a,stroke:e,"stroke-width":i});return r}},{key:"drawCircle",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.w;t<0&&(t=0);var a=i.globals.dom.Paper.circle(2*t);return null!==e&&a.attr(e),a}},{key:"drawPath",value:function(t){var e=t.d,i=void 0===e?"":e,a=t.stroke,s=void 0===a?"#a8a8a8":a,r=t.strokeWidth,o=void 0===r?1:r,n=t.fill,l=t.fillOpacity,h=void 0===l?1:l,c=t.strokeOpacity,d=void 0===c?1:c,g=t.classes,u=t.strokeLinecap,f=void 0===u?null:u,p=t.strokeDashArray,x=void 0===p?0:p,b=this.w;return null===f&&(f=b.config.stroke.lineCap),(i.indexOf("undefined")>-1||i.indexOf("NaN")>-1)&&(i="M 0 ".concat(b.globals.gridHeight)),b.globals.dom.Paper.path(i).attr({fill:n,"fill-opacity":h,stroke:s,"stroke-opacity":d,"stroke-linecap":f,"stroke-width":o,"stroke-dasharray":x,class:g})}},{key:"group",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.w,i=e.globals.dom.Paper.group();return null!==t&&i.attr(t),i}},{key:"move",value:function(t,e){var i=["M",t,e].join(" ");return i}},{key:"line",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=null;return null===i?a=[" L",t,e].join(" "):"H"===i?a=[" H",t].join(" "):"V"===i&&(a=[" V",e].join(" ")),a}},{key:"curve",value:function(t,e,i,a,s,r){var o=["C",t,e,i,a,s,r].join(" ");return o}},{key:"quadraticCurve",value:function(t,e,i,a){return["Q",t,e,i,a].join(" ")}},{key:"arc",value:function(t,e,i,a,s,r,o){var n=arguments.length>7&&void 0!==arguments[7]&&arguments[7],l="A";n&&(l="a");var h=[l,t,e,i,a,s,r,o].join(" ");return h}},{key:"renderPaths",value:function(t){var i,a=t.j,s=t.realIndex,r=t.pathFrom,o=t.pathTo,n=t.stroke,l=t.strokeWidth,h=t.strokeLinecap,c=t.fill,d=t.animationDelay,g=t.initialSpeed,u=t.dataChangeSpeed,f=t.className,p=t.shouldClipToGrid,x=void 0===p||p,m=t.bindEventsOnPaths,y=void 0===m||m,w=t.drawShadow,k=void 0===w||w,A=this.w,S=new v(this.ctx),C=new b(this.ctx),L=this.w.config.chart.animations.enabled,P=L&&this.w.config.chart.animations.dynamicAnimation.enabled,T=!!(L&&!A.globals.resized||P&&A.globals.dataChanged&&A.globals.shouldAnimate);T?i=r:(i=o,A.globals.animationEnded=!0);var M=A.config.stroke.dashArray,I=0;I=Array.isArray(M)?M[s]:A.config.stroke.dashArray;var z=this.drawPath({d:i,stroke:n,strokeWidth:l,fill:c,fillOpacity:1,classes:f,strokeLinecap:h,strokeDashArray:I});if(z.attr("index",s),x&&z.attr({"clip-path":"url(#gridRectMask".concat(A.globals.cuid,")")}),"none"!==A.config.states.normal.filter.type)S.getDefaultFilter(z,s);else if(A.config.chart.dropShadow.enabled&&k&&(!A.config.chart.dropShadow.enabledOnSeries||A.config.chart.dropShadow.enabledOnSeries&&-1!==A.config.chart.dropShadow.enabledOnSeries.indexOf(s))){var X=A.config.chart.dropShadow;S.dropShadow(z,X,s)}y&&(z.node.addEventListener("mouseenter",this.pathMouseEnter.bind(this,z)),z.node.addEventListener("mouseleave",this.pathMouseLeave.bind(this,z)),z.node.addEventListener("mousedown",this.pathMouseDown.bind(this,z))),z.attr({pathTo:o,pathFrom:r});var E={el:z,j:a,realIndex:s,pathFrom:r,pathTo:o,fill:c,strokeWidth:l,delay:d};return!L||A.globals.resized||A.globals.dataChanged?!A.globals.resized&&A.globals.dataChanged||C.showDelayedElements():C.animatePathsGradually(e(e({},E),{},{speed:g})),A.globals.dataChanged&&P&&T&&C.animatePathsGradually(e(e({},E),{},{speed:u})),z}},{key:"drawPattern",value:function(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#a8a8a8",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=this.w,o=r.globals.dom.Paper.pattern(e,i,(function(r){"horizontalLines"===t?r.line(0,0,i,0).stroke({color:a,width:s+1}):"verticalLines"===t?r.line(0,0,0,e).stroke({color:a,width:s+1}):"slantedLines"===t?r.line(0,0,e,i).stroke({color:a,width:s}):"squares"===t?r.rect(e,i).fill("none").stroke({color:a,width:s}):"circles"===t&&r.circle(e).fill("none").stroke({color:a,width:s})}));return o}},{key:"drawGradient",value:function(t,e,i,a,s){var r,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,n=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,h=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,c=this.w;e.length<9&&0===e.indexOf("#")&&(e=x.hexToRgba(e,a)),i.length<9&&0===i.indexOf("#")&&(i=x.hexToRgba(i,s));var d=0,g=1,u=1,f=null;null!==n&&(d=void 0!==n[0]?n[0]/100:0,g=void 0!==n[1]?n[1]/100:1,u=void 0!==n[2]?n[2]/100:1,f=void 0!==n[3]?n[3]/100:null);var p=!("donut"!==c.config.chart.type&&"pie"!==c.config.chart.type&&"polarArea"!==c.config.chart.type&&"bubble"!==c.config.chart.type);if(r=null===l||0===l.length?c.globals.dom.Paper.gradient(p?"radial":"linear",(function(t){t.at(d,e,a),t.at(g,i,s),t.at(u,i,s),null!==f&&t.at(f,e,a)})):c.globals.dom.Paper.gradient(p?"radial":"linear",(function(t){(Array.isArray(l[h])?l[h]:l).forEach((function(e){t.at(e.offset/100,e.color,e.opacity)}))})),p){var b=c.globals.gridWidth/2,v=c.globals.gridHeight/2;"bubble"!==c.config.chart.type?r.attr({gradientUnits:"userSpaceOnUse",cx:b,cy:v,r:o}):r.attr({cx:.5,cy:.5,r:.8,fx:.2,fy:.2})}else"vertical"===t?r.from(0,0).to(0,1):"diagonal"===t?r.from(0,0).to(1,1):"horizontal"===t?r.from(0,1).to(1,1):"diagonal2"===t&&r.from(1,0).to(0,1);return r}},{key:"getTextBasedOnMaxWidth",value:function(t){var e=t.text,i=t.maxWidth,a=t.fontSize,s=t.fontFamily,r=this.getTextRects(e,a,s),o=r.width/e.length,n=Math.floor(i/o);return i<r.width?e.slice(0,n-3)+"...":e}},{key:"drawText",value:function(t){var i=this,a=t.x,s=t.y,r=t.text,o=t.textAnchor,n=t.fontSize,l=t.fontFamily,h=t.fontWeight,c=t.foreColor,d=t.opacity,g=t.maxWidth,u=t.cssClass,f=void 0===u?"":u,p=t.isPlainText,x=void 0===p||p,b=this.w;void 0===r&&(r="");var v=r;o||(o="start"),c&&c.length||(c=b.config.chart.foreColor),l=l||b.config.chart.fontFamily,h=h||"regular";var m,y={maxWidth:g,fontSize:n=n||"11px",fontFamily:l};return Array.isArray(r)?m=b.globals.dom.Paper.text((function(t){for(var a=0;a<r.length;a++)v=r[a],g&&(v=i.getTextBasedOnMaxWidth(e({text:r[a]},y))),0===a?t.tspan(v):t.tspan(v).newLine()})):(g&&(v=this.getTextBasedOnMaxWidth(e({text:r},y))),m=x?b.globals.dom.Paper.plain(r):b.globals.dom.Paper.text((function(t){return t.tspan(v)}))),m.attr({x:a,y:s,"text-anchor":o,"dominant-baseline":"auto","font-size":n,"font-family":l,"font-weight":h,fill:c,class:"apexcharts-text "+f}),m.node.style.fontFamily=l,m.node.style.opacity=d,m}},{key:"drawMarker",value:function(t,e,i){t=t||0;var a=i.pSize||0,s=null;if("square"===i.shape||"rect"===i.shape){var r=void 0===i.pRadius?a/2:i.pRadius;null!==e&&a||(a=0,r=0);var o=1.2*a+r,n=this.drawRect(o,o,o,o,r);n.attr({x:t-o/2,y:e-o/2,cx:t,cy:e,class:i.class?i.class:"",fill:i.pointFillColor,"fill-opacity":i.pointFillOpacity?i.pointFillOpacity:1,stroke:i.pointStrokeColor,"stroke-width":i.pointStrokeWidth?i.pointStrokeWidth:0,"stroke-opacity":i.pointStrokeOpacity?i.pointStrokeOpacity:1}),s=n}else"circle"!==i.shape&&i.shape||(x.isNumber(e)||(a=0,e=0),s=this.drawCircle(a,{cx:t,cy:e,class:i.class?i.class:"",stroke:i.pointStrokeColor,fill:i.pointFillColor,"fill-opacity":i.pointFillOpacity?i.pointFillOpacity:1,"stroke-width":i.pointStrokeWidth?i.pointStrokeWidth:0,"stroke-opacity":i.pointStrokeOpacity?i.pointStrokeOpacity:1}));return s}},{key:"pathMouseEnter",value:function(t,e){var i=this.w,a=new v(this.ctx),s=parseInt(t.node.getAttribute("index"),10),r=parseInt(t.node.getAttribute("j"),10);if("function"==typeof i.config.chart.events.dataPointMouseEnter&&i.config.chart.events.dataPointMouseEnter(e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}),this.ctx.events.fireEvent("dataPointMouseEnter",[e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}]),("none"===i.config.states.active.filter.type||"true"!==t.node.getAttribute("selected"))&&"none"!==i.config.states.hover.filter.type&&!i.globals.isTouchDevice){var o=i.config.states.hover.filter;a.applyFilter(t,s,o.type,o.value)}}},{key:"pathMouseLeave",value:function(t,e){var i=this.w,a=new v(this.ctx),s=parseInt(t.node.getAttribute("index"),10),r=parseInt(t.node.getAttribute("j"),10);"function"==typeof i.config.chart.events.dataPointMouseLeave&&i.config.chart.events.dataPointMouseLeave(e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}),this.ctx.events.fireEvent("dataPointMouseLeave",[e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}]),"none"!==i.config.states.active.filter.type&&"true"===t.node.getAttribute("selected")||"none"!==i.config.states.hover.filter.type&&a.getDefaultFilter(t,s)}},{key:"pathMouseDown",value:function(t,e){var i=this.w,a=new v(this.ctx),s=parseInt(t.node.getAttribute("index"),10),r=parseInt(t.node.getAttribute("j"),10),o="false";if("true"===t.node.getAttribute("selected")){if(t.node.setAttribute("selected","false"),i.globals.selectedDataPoints[s].indexOf(r)>-1){var n=i.globals.selectedDataPoints[s].indexOf(r);i.globals.selectedDataPoints[s].splice(n,1)}}else{if(!i.config.states.active.allowMultipleDataPointsSelection&&i.globals.selectedDataPoints.length>0){i.globals.selectedDataPoints=[];var l=i.globals.dom.Paper.select(".apexcharts-series path").members,h=i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members,c=function(t){Array.prototype.forEach.call(t,(function(t){t.node.setAttribute("selected","false"),a.getDefaultFilter(t,s)}))};c(l),c(h)}t.node.setAttribute("selected","true"),o="true",void 0===i.globals.selectedDataPoints[s]&&(i.globals.selectedDataPoints[s]=[]),i.globals.selectedDataPoints[s].push(r)}if("true"===o){var d=i.config.states.active.filter;if("none"!==d)a.applyFilter(t,s,d.type,d.value);else if("none"!==i.config.states.hover.filter&&!i.globals.isTouchDevice){var g=i.config.states.hover.filter;a.applyFilter(t,s,g.type,g.value)}}else if("none"!==i.config.states.active.filter.type)if("none"===i.config.states.hover.filter.type||i.globals.isTouchDevice)a.getDefaultFilter(t,s);else{g=i.config.states.hover.filter;a.applyFilter(t,s,g.type,g.value)}"function"==typeof i.config.chart.events.dataPointSelection&&i.config.chart.events.dataPointSelection(e,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:s,dataPointIndex:r,w:i}),e&&this.ctx.events.fireEvent("dataPointSelection",[e,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:s,dataPointIndex:r,w:i}])}},{key:"rotateAroundCenter",value:function(t){var e={};return t&&"function"==typeof t.getBBox&&(e=t.getBBox()),{x:e.x+e.width/2,y:e.y+e.height/2}}},{key:"getTextRects",value:function(t,e,i,a){var s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=this.w,o=this.drawText({x:-200,y:-200,text:t,textAnchor:"start",fontSize:e,fontFamily:i,foreColor:"#fff",opacity:0});a&&o.attr("transform",a),r.globals.dom.Paper.add(o);var n=o.bbox();return s||(n=o.node.getBoundingClientRect()),o.remove(),{width:n.width,height:n.height}}},{key:"placeTextWithEllipsis",value:function(t,e,i){if("function"==typeof t.getComputedTextLength&&(t.textContent=e,e.length>0&&t.getComputedTextLength()>=i/1.1)){for(var a=e.length-3;a>0;a-=3)if(t.getSubStringLength(0,a)<=i/1.1)return void(t.textContent=e.substring(0,a)+"...");t.textContent="."}}}],[{key:"setAttrs",value:function(t,e){for(var i in e)e.hasOwnProperty(i)&&t.setAttribute(i,e[i])}}]),t}(),y=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"getStackedSeriesTotals",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.w,i=[];if(0===e.globals.series.length)return i;for(var a=0;a<e.globals.series[e.globals.maxValsInArrayIndex].length;a++){for(var s=0,r=0;r<e.globals.series.length;r++)void 0!==e.globals.series[r][a]&&-1===t.indexOf(r)&&(s+=e.globals.series[r][a]);i.push(s)}return i}},{key:"getSeriesTotalByIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?this.w.config.series.reduce((function(t,e){return t+e}),0):this.w.globals.series[t].reduce((function(t,e){return t+e}),0)}},{key:"isSeriesNull",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return 0===(null===t?this.w.config.series.filter((function(t){return null!==t})):this.w.config.series[t].data.filter((function(t){return null!==t}))).length}},{key:"seriesHaveSameValues",value:function(t){return this.w.globals.series[t].every((function(t,e,i){return t===i[0]}))}},{key:"getCategoryLabels",value:function(t){var e=this.w,i=t.slice();return e.config.xaxis.convertedCatToNumeric&&(i=t.map((function(t,i){return e.config.xaxis.labels.formatter(t-e.globals.minX+1)}))),i}},{key:"getLargestSeries",value:function(){var t=this.w;t.globals.maxValsInArrayIndex=t.globals.series.map((function(t){return t.length})).indexOf(Math.max.apply(Math,t.globals.series.map((function(t){return t.length}))))}},{key:"getLargestMarkerSize",value:function(){var t=this.w,e=0;return t.globals.markers.size.forEach((function(t){e=Math.max(e,t)})),t.config.markers.discrete&&t.config.markers.discrete.length&&t.config.markers.discrete.forEach((function(t){e=Math.max(e,t.size)})),e>0&&(e+=t.config.markers.hover.sizeOffset+1),t.globals.markers.largestSize=e,e}},{key:"getSeriesTotals",value:function(){var t=this.w;t.globals.seriesTotals=t.globals.series.map((function(t,e){var i=0;if(Array.isArray(t))for(var a=0;a<t.length;a++)i+=t[a];else i+=t;return i}))}},{key:"getSeriesTotalsXRange",value:function(t,e){var i=this.w;return i.globals.series.map((function(a,s){for(var r=0,o=0;o<a.length;o++)i.globals.seriesX[s][o]>t&&i.globals.seriesX[s][o]<e&&(r+=a[o]);return r}))}},{key:"getPercentSeries",value:function(){var t=this.w;t.globals.seriesPercent=t.globals.series.map((function(e,i){var a=[];if(Array.isArray(e))for(var s=0;s<e.length;s++){var r=t.globals.stackedSeriesTotals[s],o=0;r&&(o=100*e[s]/r),a.push(o)}else{var n=100*e/t.globals.seriesTotals.reduce((function(t,e){return t+e}),0);a.push(n)}return a}))}},{key:"getCalculatedRatios",value:function(){var t,e,i,a,s=this.w.globals,r=[],o=0,n=[],l=.1,h=0;if(s.yRange=[],s.isMultipleYAxis)for(var c=0;c<s.minYArr.length;c++)s.yRange.push(Math.abs(s.minYArr[c]-s.maxYArr[c])),n.push(0);else s.yRange.push(Math.abs(s.minY-s.maxY));s.xRange=Math.abs(s.maxX-s.minX),s.zRange=Math.abs(s.maxZ-s.minZ);for(var d=0;d<s.yRange.length;d++)r.push(s.yRange[d]/s.gridHeight);if(e=s.xRange/s.gridWidth,i=Math.abs(s.initialMaxX-s.initialMinX)/s.gridWidth,t=s.yRange/s.gridWidth,a=s.xRange/s.gridHeight,(o=s.zRange/s.gridHeight*16)||(o=1),s.minY!==Number.MIN_VALUE&&0!==Math.abs(s.minY)&&(s.hasNegs=!0),s.isMultipleYAxis){n=[];for(var g=0;g<r.length;g++)n.push(-s.minYArr[g]/r[g])}else n.push(-s.minY/r[0]),s.minY!==Number.MIN_VALUE&&0!==Math.abs(s.minY)&&(l=-s.minY/t,h=s.minX/e);return{yRatio:r,invertedYRatio:t,zRatio:o,xRatio:e,initialXRatio:i,invertedXRatio:a,baseLineInvertedY:l,baseLineY:n,baseLineX:h}}},{key:"getLogSeries",value:function(t){var e=this,i=this.w;return i.globals.seriesLog=t.map((function(t,a){return i.config.yaxis[a]&&i.config.yaxis[a].logarithmic?t.map((function(t){return null===t?null:e.getLogVal(i.config.yaxis[a].logBase,t,a)})):t})),i.globals.invalidLogScale?t:i.globals.seriesLog}},{key:"getBaseLog",value:function(t,e){return Math.log(e)/Math.log(t)}},{key:"getLogVal",value:function(t,e,i){if(0===e)return 0;var a=this.w,s=0===a.globals.minYArr[i]?-1:this.getBaseLog(t,a.globals.minYArr[i]),r=(0===a.globals.maxYArr[i]?0:this.getBaseLog(t,a.globals.maxYArr[i]))-s;return e<1?e/r:(this.getBaseLog(t,e)-s)/r}},{key:"getLogYRatios",value:function(t){var e=this,i=this.w,a=this.w.globals;return a.yLogRatio=t.slice(),a.logYRange=a.yRange.map((function(t,s){if(i.config.yaxis[s]&&e.w.config.yaxis[s].logarithmic){var r,o=-Number.MAX_VALUE,n=Number.MIN_VALUE;return a.seriesLog.forEach((function(t,e){t.forEach((function(t){i.config.yaxis[e]&&i.config.yaxis[e].logarithmic&&(o=Math.max(t,o),n=Math.min(t,n))}))})),r=Math.pow(a.yRange[s],Math.abs(n-o)/a.yRange[s]),a.yLogRatio[s]=r/a.gridHeight,r}})),a.invalidLogScale?t.slice():a.yLogRatio}}],[{key:"checkComboSeries",value:function(t){var e=!1,i=0,a=0;return t.length&&void 0!==t[0].type&&t.forEach((function(t){"bar"!==t.type&&"column"!==t.type&&"candlestick"!==t.type&&"boxPlot"!==t.type||i++,void 0!==t.type&&a++})),a>0&&(e=!0),{comboBarCount:i,comboCharts:e}}},{key:"extendArrayProps",value:function(t,e,i){return e.yaxis&&(e=t.extendYAxis(e,i)),e.annotations&&(e.annotations.yaxis&&(e=t.extendYAxisAnnotations(e)),e.annotations.xaxis&&(e=t.extendXAxisAnnotations(e)),e.annotations.points&&(e=t.extendPointAnnotations(e))),e}}]),t}(),w=function(){function t(e){a(this,t),this.w=e.w,this.annoCtx=e}return r(t,[{key:"setOrientations",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.w;if("vertical"===t.label.orientation){var a=null!==e?e:0,s=i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a,"']"));if(null!==s){var r=s.getBoundingClientRect();s.setAttribute("x",parseFloat(s.getAttribute("x"))-r.height+4),"top"===t.label.position?s.setAttribute("y",parseFloat(s.getAttribute("y"))+r.width):s.setAttribute("y",parseFloat(s.getAttribute("y"))-r.width);var o=this.annoCtx.graphics.rotateAroundCenter(s),n=o.x,l=o.y;s.setAttribute("transform","rotate(-90 ".concat(n," ").concat(l,")"))}}}},{key:"addBackgroundToAnno",value:function(t,e){var i=this.w;if(!t||void 0===e.label.text||void 0!==e.label.text&&!String(e.label.text).trim())return null;var a=i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),s=t.getBoundingClientRect(),r=e.label.style.padding.left,o=e.label.style.padding.right,n=e.label.style.padding.top,l=e.label.style.padding.bottom;"vertical"===e.label.orientation&&(n=e.label.style.padding.left,l=e.label.style.padding.right,r=e.label.style.padding.top,o=e.label.style.padding.bottom);var h=s.left-a.left-r,c=s.top-a.top-n,d=this.annoCtx.graphics.drawRect(h-i.globals.barPadForNumericAxis,c,s.width+r+o,s.height+n+l,e.label.borderRadius,e.label.style.background,1,e.label.borderWidth,e.label.borderColor,0);return e.id&&d.node.classList.add(e.id),d}},{key:"annotationsBackground",value:function(){var t=this,e=this.w,i=function(i,a,s){var r=e.globals.dom.baseEl.querySelector(".apexcharts-".concat(s,"-annotations .apexcharts-").concat(s,"-annotation-label[rel='").concat(a,"']"));if(r){var o=r.parentNode,n=t.addBackgroundToAnno(r,i);n&&(o.insertBefore(n.node,r),i.label.mouseEnter&&n.node.addEventListener("mouseenter",i.label.mouseEnter.bind(t,i)),i.label.mouseLeave&&n.node.addEventListener("mouseleave",i.label.mouseLeave.bind(t,i)),i.label.click&&n.node.addEventListener("click",i.label.click.bind(t,i)))}};e.config.annotations.xaxis.map((function(t,e){i(t,e,"xaxis")})),e.config.annotations.yaxis.map((function(t,e){i(t,e,"yaxis")})),e.config.annotations.points.map((function(t,e){i(t,e,"point")}))}},{key:"getY1Y2",value:function(t,e){var i,a="y1"===t?e.y:e.y2,s=this.w;if(this.annoCtx.invertAxis){var r=s.globals.labels.indexOf(a);s.config.xaxis.convertedCatToNumeric&&(r=s.globals.categoryLabels.indexOf(a));var o=s.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child("+(r+1)+")");o&&(i=parseFloat(o.getAttribute("y")))}else{var n;if(s.config.yaxis[e.yAxisIndex].logarithmic)n=(a=new y(this.annoCtx.ctx).getLogVal(a,e.yAxisIndex))/s.globals.yLogRatio[e.yAxisIndex];else n=(a-s.globals.minYArr[e.yAxisIndex])/(s.globals.yRange[e.yAxisIndex]/s.globals.gridHeight);i=s.globals.gridHeight-n,!e.marker||void 0!==e.y&&null!==e.y||(i=0),s.config.yaxis[e.yAxisIndex]&&s.config.yaxis[e.yAxisIndex].reversed&&(i=n)}return"string"==typeof a&&a.indexOf("px")>-1&&(i=parseFloat(a)),i}},{key:"getX1X2",value:function(t,e){var i=this.w,a=this.annoCtx.invertAxis?i.globals.minY:i.globals.minX,s=this.annoCtx.invertAxis?i.globals.maxY:i.globals.maxX,r=this.annoCtx.invertAxis?i.globals.yRange[0]:i.globals.xRange,o=(e.x-a)/(r/i.globals.gridWidth);this.annoCtx.inversedReversedAxis&&(o=(s-e.x)/(r/i.globals.gridWidth)),"category"!==i.config.xaxis.type&&!i.config.xaxis.convertedCatToNumeric||this.annoCtx.invertAxis||i.globals.dataFormatXNumeric||(o=this.getStringX(e.x));var n=(e.x2-a)/(r/i.globals.gridWidth);return this.annoCtx.inversedReversedAxis&&(n=(s-e.x2)/(r/i.globals.gridWidth)),"category"!==i.config.xaxis.type&&!i.config.xaxis.convertedCatToNumeric||this.annoCtx.invertAxis||i.globals.dataFormatXNumeric||(n=this.getStringX(e.x2)),void 0!==e.x&&null!==e.x||!e.marker||(o=i.globals.gridWidth),"x1"===t&&"string"==typeof e.x&&e.x.indexOf("px")>-1&&(o=parseFloat(e.x)),"x2"===t&&"string"==typeof e.x2&&e.x2.indexOf("px")>-1&&(n=parseFloat(e.x2)),"x1"===t?o:n}},{key:"getStringX",value:function(t){var e=this.w,i=t;e.config.xaxis.convertedCatToNumeric&&e.globals.categoryLabels.length&&(t=e.globals.categoryLabels.indexOf(t)+1);var a=e.globals.labels.indexOf(t),s=e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child("+(a+1)+")");return s&&(i=parseFloat(s.getAttribute("x"))),i}}]),t}(),k=function(){function t(e){a(this,t),this.w=e.w,this.annoCtx=e,this.invertAxis=this.annoCtx.invertAxis,this.helpers=new w(this.annoCtx)}return r(t,[{key:"addXaxisAnnotation",value:function(t,e,i){var a,s=this.w,r=this.helpers.getX1X2("x1",t),o=t.label.text,n=t.strokeDashArray;if(x.isNumber(r)){if(null===t.x2||void 0===t.x2){var l=this.annoCtx.graphics.drawLine(r+t.offsetX,0+t.offsetY,r+t.offsetX,s.globals.gridHeight+t.offsetY,t.borderColor,n,t.borderWidth);e.appendChild(l.node),t.id&&l.node.classList.add(t.id)}else{if((a=this.helpers.getX1X2("x2",t))<r){var h=r;r=a,a=h}var c=this.annoCtx.graphics.drawRect(r+t.offsetX,0+t.offsetY,a-r,s.globals.gridHeight+t.offsetY,0,t.fillColor,t.opacity,1,t.borderColor,n);c.node.classList.add("apexcharts-annotation-rect"),c.attr("clip-path","url(#gridRectMask".concat(s.globals.cuid,")")),e.appendChild(c.node),t.id&&c.node.classList.add(t.id)}var d=this.annoCtx.graphics.getTextRects(o,parseFloat(t.label.style.fontSize)),g="top"===t.label.position?4:"center"===t.label.position?s.globals.gridHeight/2+("vertical"===t.label.orientation?d.width/2:0):s.globals.gridHeight,u=this.annoCtx.graphics.drawText({x:r+t.label.offsetX,y:g+t.label.offsetY-("vertical"===t.label.orientation?"top"===t.label.position?d.width/2-12:-d.width/2:0),text:o,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,fontWeight:t.label.style.fontWeight,foreColor:t.label.style.color,cssClass:"apexcharts-xaxis-annotation-label ".concat(t.label.style.cssClass," ").concat(t.id?t.id:"")});u.attr({rel:i}),e.appendChild(u.node),this.annoCtx.helpers.setOrientations(t,i)}}},{key:"drawXAxisAnnotations",value:function(){var t=this,e=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-xaxis-annotations"});return e.config.annotations.xaxis.map((function(e,a){t.addXaxisAnnotation(e,i.node,a)})),i}}]),t}(),A=function(){function t(e){a(this,t),this.w=e.w,this.annoCtx=e,this.helpers=new w(this.annoCtx)}return r(t,[{key:"addYaxisAnnotation",value:function(t,e,i){var a,s=this.w,r=t.strokeDashArray,o=this.helpers.getY1Y2("y1",t),n=t.label.text;if(null===t.y2||void 0===t.y2){var l=this.annoCtx.graphics.drawLine(0+t.offsetX,o+t.offsetY,this._getYAxisAnnotationWidth(t),o+t.offsetY,t.borderColor,r,t.borderWidth);e.appendChild(l.node),t.id&&l.node.classList.add(t.id)}else{if((a=this.helpers.getY1Y2("y2",t))>o){var h=o;o=a,a=h}var c=this.annoCtx.graphics.drawRect(0+t.offsetX,a+t.offsetY,this._getYAxisAnnotationWidth(t),o-a,0,t.fillColor,t.opacity,1,t.borderColor,r);c.node.classList.add("apexcharts-annotation-rect"),c.attr("clip-path","url(#gridRectMask".concat(s.globals.cuid,")")),e.appendChild(c.node),t.id&&c.node.classList.add(t.id)}var d="right"===t.label.position?s.globals.gridWidth:"center"===t.label.position?s.globals.gridWidth/2:0,g=this.annoCtx.graphics.drawText({x:d+t.label.offsetX,y:(null!=a?a:o)+t.label.offsetY-3,text:n,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,fontWeight:t.label.style.fontWeight,foreColor:t.label.style.color,cssClass:"apexcharts-yaxis-annotation-label ".concat(t.label.style.cssClass," ").concat(t.id?t.id:"")});g.attr({rel:i}),e.appendChild(g.node)}},{key:"_getYAxisAnnotationWidth",value:function(t){var e=this.w;e.globals.gridWidth;return(t.width.indexOf("%")>-1?e.globals.gridWidth*parseInt(t.width,10)/100:parseInt(t.width,10))+t.offsetX}},{key:"drawYAxisAnnotations",value:function(){var t=this,e=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-yaxis-annotations"});return e.config.annotations.yaxis.map((function(e,a){t.addYaxisAnnotation(e,i.node,a)})),i}}]),t}(),S=function(){function t(e){a(this,t),this.w=e.w,this.annoCtx=e,this.helpers=new w(this.annoCtx)}return r(t,[{key:"addPointAnnotation",value:function(t,e,i){this.w;var a=this.helpers.getX1X2("x1",t),s=this.helpers.getY1Y2("y1",t);if(x.isNumber(a)){var r={pSize:t.marker.size,pointStrokeWidth:t.marker.strokeWidth,pointFillColor:t.marker.fillColor,pointStrokeColor:t.marker.strokeColor,shape:t.marker.shape,pRadius:t.marker.radius,class:"apexcharts-point-annotation-marker ".concat(t.marker.cssClass," ").concat(t.id?t.id:"")},o=this.annoCtx.graphics.drawMarker(a+t.marker.offsetX,s+t.marker.offsetY,r);e.appendChild(o.node);var n=t.label.text?t.label.text:"",l=this.annoCtx.graphics.drawText({x:a+t.label.offsetX,y:s+t.label.offsetY-t.marker.size-parseFloat(t.label.style.fontSize)/1.6,text:n,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,fontWeight:t.label.style.fontWeight,foreColor:t.label.style.color,cssClass:"apexcharts-point-annotation-label ".concat(t.label.style.cssClass," ").concat(t.id?t.id:"")});if(l.attr({rel:i}),e.appendChild(l.node),t.customSVG.SVG){var h=this.annoCtx.graphics.group({class:"apexcharts-point-annotations-custom-svg "+t.customSVG.cssClass});h.attr({transform:"translate(".concat(a+t.customSVG.offsetX,", ").concat(s+t.customSVG.offsetY,")")}),h.node.innerHTML=t.customSVG.SVG,e.appendChild(h.node)}if(t.image.path){var c=t.image.width?t.image.width:20,d=t.image.height?t.image.height:20;o=this.annoCtx.addImage({x:a+t.image.offsetX-c/2,y:s+t.image.offsetY-d/2,width:c,height:d,path:t.image.path,appendTo:".apexcharts-point-annotations"})}t.mouseEnter&&o.node.addEventListener("mouseenter",t.mouseEnter.bind(this,t)),t.mouseLeave&&o.node.addEventListener("mouseleave",t.mouseLeave.bind(this,t)),t.click&&o.node.addEventListener("click",t.click.bind(this,t))}}},{key:"drawPointAnnotations",value:function(){var t=this,e=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-point-annotations"});return e.config.annotations.points.map((function(e,a){t.addPointAnnotation(e,i.node,a)})),i}}]),t}();var C={name:"en",options:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],toolbar:{exportToSVG:"Download SVG",exportToPNG:"Download PNG",exportToCSV:"Download CSV",menu:"Menu",selection:"Selection",selectionZoom:"Selection Zoom",zoomIn:"Zoom In",zoomOut:"Zoom Out",pan:"Panning",reset:"Reset Zoom"}}},L=function(){function t(){a(this,t),this.yAxis={show:!0,showAlways:!1,showForNullSeries:!0,seriesName:void 0,opposite:!1,reversed:!1,logarithmic:!1,logBase:10,tickAmount:void 0,forceNiceScale:!1,max:void 0,min:void 0,floating:!1,decimalsInFloat:void 0,labels:{show:!0,minWidth:0,maxWidth:160,offsetX:0,offsetY:0,align:void 0,rotate:0,padding:20,style:{colors:[],fontSize:"11px",fontWeight:400,fontFamily:void 0,cssClass:""},formatter:void 0},axisBorder:{show:!1,color:"#e0e0e0",width:1,offsetX:0,offsetY:0},axisTicks:{show:!1,color:"#e0e0e0",width:6,offsetX:0,offsetY:0},title:{text:void 0,rotate:-90,offsetY:0,offsetX:0,style:{color:void 0,fontSize:"11px",fontWeight:900,fontFamily:void 0,cssClass:""}},tooltip:{enabled:!1,offsetX:0},crosshairs:{show:!0,position:"front",stroke:{color:"#b6b6b6",width:1,dashArray:0}}},this.pointAnnotation={id:void 0,x:0,y:null,yAxisIndex:0,seriesIndex:0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,marker:{size:4,fillColor:"#fff",strokeWidth:2,strokeColor:"#333",shape:"circle",offsetX:0,offsetY:0,radius:2,cssClass:""},label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"middle",offsetX:0,offsetY:0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}},customSVG:{SVG:void 0,cssClass:void 0,offsetX:0,offsetY:0},image:{path:void 0,width:20,height:20,offsetX:0,offsetY:0}},this.yAxisAnnotation={id:void 0,y:0,y2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",borderWidth:1,opacity:.3,offsetX:0,offsetY:0,width:"100%",yAxisIndex:0,label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"end",position:"right",offsetX:0,offsetY:-3,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.xAxisAnnotation={id:void 0,x:0,x2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",borderWidth:1,opacity:.3,offsetX:0,offsetY:0,label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"middle",orientation:"vertical",position:"top",offsetX:0,offsetY:0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.text={x:0,y:0,text:"",textAnchor:"start",foreColor:void 0,fontSize:"13px",fontFamily:void 0,fontWeight:400,appendTo:".apexcharts-annotations",backgroundColor:"transparent",borderColor:"#c2c2c2",borderRadius:0,borderWidth:0,paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2}}return r(t,[{key:"init",value:function(){return{annotations:{position:"front",yaxis:[this.yAxisAnnotation],xaxis:[this.xAxisAnnotation],points:[this.pointAnnotation],texts:[],images:[],shapes:[]},chart:{animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{delay:150,enabled:!0},dynamicAnimation:{enabled:!0,speed:350}},background:"transparent",locales:[C],defaultLocale:"en",dropShadow:{enabled:!1,enabledOnSeries:void 0,top:2,left:2,blur:4,color:"#000",opacity:.35},events:{animationEnd:void 0,beforeMount:void 0,mounted:void 0,updated:void 0,click:void 0,mouseMove:void 0,mouseLeave:void 0,xAxisLabelClick:void 0,legendClick:void 0,markerClick:void 0,selection:void 0,dataPointSelection:void 0,dataPointMouseEnter:void 0,dataPointMouseLeave:void 0,beforeZoom:void 0,beforeResetZoom:void 0,zoomed:void 0,scrolled:void 0,brushScrolled:void 0},foreColor:"#373d3f",fontFamily:"Helvetica, Arial, sans-serif",height:"auto",parentHeightOffset:15,redrawOnParentResize:!0,redrawOnWindowResize:!0,id:void 0,group:void 0,offsetX:0,offsetY:0,selection:{enabled:!1,type:"x",fill:{color:"#24292e",opacity:.1},stroke:{width:1,color:"#24292e",opacity:.4,dashArray:3},xaxis:{min:void 0,max:void 0},yaxis:{min:void 0,max:void 0}},sparkline:{enabled:!1},brush:{enabled:!1,autoScaleYaxis:!0,target:void 0},stacked:!1,stackType:"normal",toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},export:{csv:{filename:void 0,columnDelimiter:",",headerCategory:"category",headerValue:"value",dateFormatter:function(t){return new Date(t).toDateString()}},png:{filename:void 0},svg:{filename:void 0}},autoSelected:"zoom"},type:"line",width:"100%",zoom:{enabled:!0,type:"x",autoScaleYaxis:!1,zoomedArea:{fill:{color:"#90CAF9",opacity:.4},stroke:{color:"#0D47A1",opacity:.4,width:1}}}},plotOptions:{area:{fillTo:"origin"},bar:{horizontal:!1,columnWidth:"70%",barHeight:"70%",distributed:!1,borderRadius:0,borderRadiusApplication:"around",borderRadiusWhenStacked:"last",rangeBarOverlap:!0,rangeBarGroupRows:!1,colors:{ranges:[],backgroundBarColors:[],backgroundBarOpacity:1,backgroundBarRadius:0},dataLabels:{position:"top",maxItems:100,hideOverflowingLabels:!0,orientation:"horizontal",total:{enabled:!1,formatter:void 0,offsetX:0,offsetY:0,style:{color:"#373d3f",fontSize:"12px",fontFamily:void 0,fontWeight:600}}}},bubble:{zScaling:!0,minBubbleRadius:void 0,maxBubbleRadius:void 0},candlestick:{colors:{upward:"#00B746",downward:"#EF403C"},wick:{useFillColor:!0}},boxPlot:{colors:{upper:"#00E396",lower:"#008FFB"}},heatmap:{radius:2,enableShades:!0,shadeIntensity:.5,reverseNegativeShade:!1,distributed:!1,useFillColorAsStroke:!1,colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},treemap:{enableShades:!0,shadeIntensity:.5,distributed:!1,reverseNegativeShade:!1,useFillColorAsStroke:!1,colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},radialBar:{inverseOrder:!1,startAngle:0,endAngle:360,offsetX:0,offsetY:0,hollow:{margin:5,size:"50%",background:"transparent",image:void 0,imageWidth:150,imageHeight:150,imageOffsetX:0,imageOffsetY:0,imageClipped:!0,position:"front",dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},track:{show:!0,startAngle:void 0,endAngle:void 0,background:"#f2f2f2",strokeWidth:"97%",opacity:1,margin:5,dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},dataLabels:{show:!0,name:{show:!0,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:0,formatter:function(t){return t}},value:{show:!0,fontSize:"14px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:16,formatter:function(t){return t+"%"}},total:{show:!1,label:"Total",fontSize:"16px",fontWeight:600,fontFamily:void 0,color:void 0,formatter:function(t){return t.globals.seriesTotals.reduce((function(t,e){return t+e}),0)/t.globals.series.length+"%"}}}},pie:{customScale:1,offsetX:0,offsetY:0,startAngle:0,endAngle:360,expandOnClick:!0,dataLabels:{offset:0,minAngleToShowLabel:10},donut:{size:"65%",background:"transparent",labels:{show:!1,name:{show:!0,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:-10,formatter:function(t){return t}},value:{show:!0,fontSize:"20px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:10,formatter:function(t){return t}},total:{show:!1,showAlways:!1,label:"Total",fontSize:"16px",fontWeight:400,fontFamily:void 0,color:void 0,formatter:function(t){return t.globals.seriesTotals.reduce((function(t,e){return t+e}),0)}}}}},polarArea:{rings:{strokeWidth:1,strokeColor:"#e8e8e8"},spokes:{strokeWidth:1,connectorColors:"#e8e8e8"}},radar:{size:void 0,offsetX:0,offsetY:0,polygons:{strokeWidth:1,strokeColors:"#e8e8e8",connectorColors:"#e8e8e8",fill:{colors:void 0}}}},colors:void 0,dataLabels:{enabled:!0,enabledOnSeries:void 0,formatter:function(t){return null!==t?t:""},textAnchor:"middle",distributed:!1,offsetX:0,offsetY:0,style:{fontSize:"12px",fontFamily:void 0,fontWeight:600,colors:void 0},background:{enabled:!0,foreColor:"#fff",borderRadius:2,padding:4,opacity:.9,borderWidth:1,borderColor:"#fff",dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}},dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}},fill:{type:"solid",colors:void 0,opacity:.85,gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]},image:{src:[],width:void 0,height:void 0},pattern:{style:"squares",width:6,height:6,strokeWidth:2}},forecastDataPoints:{count:0,fillOpacity:.5,strokeWidth:void 0,dashArray:4},grid:{show:!0,borderColor:"#e0e0e0",strokeDashArray:0,position:"back",xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},row:{colors:void 0,opacity:.5},column:{colors:void 0,opacity:.5},padding:{top:0,right:10,bottom:0,left:12}},labels:[],legend:{show:!0,showForSingleSeries:!1,showForNullSeries:!0,showForZeroSeries:!0,floating:!1,position:"bottom",horizontalAlign:"center",inverseOrder:!1,fontSize:"12px",fontFamily:void 0,fontWeight:400,width:void 0,height:void 0,formatter:void 0,tooltipHoverFormatter:void 0,offsetX:-20,offsetY:4,customLegendItems:[],labels:{colors:void 0,useSeriesColors:!1},markers:{width:12,height:12,strokeWidth:0,fillColors:void 0,strokeColor:"#fff",radius:12,customHTML:void 0,offsetX:0,offsetY:0,onClick:void 0},itemMargin:{horizontal:5,vertical:2},onItemClick:{toggleDataSeries:!0},onItemHover:{highlightDataSeries:!0}},markers:{discrete:[],size:0,colors:void 0,strokeColors:"#fff",strokeWidth:2,strokeOpacity:.9,strokeDashArray:0,fillOpacity:1,shape:"circle",width:8,height:8,radius:2,offsetX:0,offsetY:0,onClick:void 0,onDblClick:void 0,showNullDataPoints:!0,hover:{size:void 0,sizeOffset:3}},noData:{text:void 0,align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:void 0,fontSize:"14px",fontFamily:void 0}},responsive:[],series:void 0,states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"lighten",value:.1}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"darken",value:.5}}},title:{text:void 0,align:"left",margin:5,offsetX:0,offsetY:0,floating:!1,style:{fontSize:"14px",fontWeight:900,fontFamily:void 0,color:void 0}},subtitle:{text:void 0,align:"left",margin:5,offsetX:0,offsetY:30,floating:!1,style:{fontSize:"12px",fontWeight:400,fontFamily:void 0,color:void 0}},stroke:{show:!0,curve:"smooth",lineCap:"butt",width:2,colors:void 0,dashArray:0,fill:{type:"solid",colors:void 0,opacity:.85,gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]}}},tooltip:{enabled:!0,enabledOnSeries:void 0,shared:!0,followCursor:!1,intersect:!1,inverseOrder:!1,custom:void 0,fillSeriesColor:!1,theme:"light",cssClass:"",style:{fontSize:"12px",fontFamily:void 0},onDatasetHover:{highlightDataSeries:!1},x:{show:!0,format:"dd MMM",formatter:void 0},y:{formatter:void 0,title:{formatter:function(t){return t?t+": ":""}}},z:{formatter:void 0,title:"Size: "},marker:{show:!0,fillColors:void 0},items:{display:"flex"},fixed:{enabled:!1,position:"topRight",offsetX:0,offsetY:0}},xaxis:{type:"category",categories:[],convertedCatToNumeric:!1,offsetX:0,offsetY:0,overwriteCategories:void 0,labels:{show:!0,rotate:-45,rotateAlways:!1,hideOverlappingLabels:!0,trim:!1,minHeight:void 0,maxHeight:120,showDuplicates:!0,style:{colors:[],fontSize:"12px",fontWeight:400,fontFamily:void 0,cssClass:""},offsetX:0,offsetY:0,format:void 0,formatter:void 0,datetimeUTC:!0,datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"HH:mm",minute:"HH:mm:ss",second:"HH:mm:ss"}},group:{groups:[],style:{colors:[],fontSize:"12px",fontWeight:400,fontFamily:void 0,cssClass:""}},axisBorder:{show:!0,color:"#e0e0e0",width:"100%",height:1,offsetX:0,offsetY:0},axisTicks:{show:!0,color:"#e0e0e0",height:6,offsetX:0,offsetY:0},tickAmount:void 0,tickPlacement:"on",min:void 0,max:void 0,range:void 0,floating:!1,decimalsInFloat:void 0,position:"bottom",title:{text:void 0,offsetX:0,offsetY:0,style:{color:void 0,fontSize:"12px",fontWeight:900,fontFamily:void 0,cssClass:""}},crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:1,dashArray:3},fill:{type:"solid",color:"#B1B9C4",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}},dropShadow:{enabled:!1,left:0,top:0,blur:1,opacity:.4}},tooltip:{enabled:!0,offsetY:0,formatter:void 0,style:{fontSize:"12px",fontFamily:void 0}}},yaxis:this.yAxis,theme:{mode:"light",palette:"palette1",monochrome:{enabled:!1,color:"#008FFB",shadeTo:"light",shadeIntensity:.65}}}}}]),t}(),P=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.graphics=new m(this.ctx),this.w.globals.isBarHorizontal&&(this.invertAxis=!0),this.helpers=new w(this),this.xAxisAnnotations=new k(this),this.yAxisAnnotations=new A(this),this.pointsAnnotations=new S(this),this.w.globals.isBarHorizontal&&this.w.config.yaxis[0].reversed&&(this.inversedReversedAxis=!0),this.xDivision=this.w.globals.gridWidth/this.w.globals.dataPoints}return r(t,[{key:"drawAxesAnnotations",value:function(){var t=this.w;if(t.globals.axisCharts){for(var e=this.yAxisAnnotations.drawYAxisAnnotations(),i=this.xAxisAnnotations.drawXAxisAnnotations(),a=this.pointsAnnotations.drawPointAnnotations(),s=t.config.chart.animations.enabled,r=[e,i,a],o=[i.node,e.node,a.node],n=0;n<3;n++)t.globals.dom.elGraphical.add(r[n]),!s||t.globals.resized||t.globals.dataChanged||"scatter"!==t.config.chart.type&&"bubble"!==t.config.chart.type&&t.globals.dataPoints>1&&o[n].classList.add("apexcharts-element-hidden"),t.globals.delayedElements.push({el:o[n],index:0});this.helpers.annotationsBackground()}}},{key:"drawImageAnnos",value:function(){var t=this;this.w.config.annotations.images.map((function(e,i){t.addImage(e,i)}))}},{key:"drawTextAnnos",value:function(){var t=this;this.w.config.annotations.texts.map((function(e,i){t.addText(e,i)}))}},{key:"addXaxisAnnotation",value:function(t,e,i){this.xAxisAnnotations.addXaxisAnnotation(t,e,i)}},{key:"addYaxisAnnotation",value:function(t,e,i){this.yAxisAnnotations.addYaxisAnnotation(t,e,i)}},{key:"addPointAnnotation",value:function(t,e,i){this.pointsAnnotations.addPointAnnotation(t,e,i)}},{key:"addText",value:function(t,e){var i=t.x,a=t.y,s=t.text,r=t.textAnchor,o=t.foreColor,n=t.fontSize,l=t.fontFamily,h=t.fontWeight,c=t.cssClass,d=t.backgroundColor,g=t.borderWidth,u=t.strokeDashArray,f=t.borderRadius,p=t.borderColor,x=t.appendTo,b=void 0===x?".apexcharts-annotations":x,v=t.paddingLeft,m=void 0===v?4:v,y=t.paddingRight,w=void 0===y?4:y,k=t.paddingBottom,A=void 0===k?2:k,S=t.paddingTop,C=void 0===S?2:S,L=this.w,P=this.graphics.drawText({x:i,y:a,text:s,textAnchor:r||"start",fontSize:n||"12px",fontWeight:h||"regular",fontFamily:l||L.config.chart.fontFamily,foreColor:o||L.config.chart.foreColor,cssClass:c}),T=L.globals.dom.baseEl.querySelector(b);T&&T.appendChild(P.node);var M=P.bbox();if(s){var I=this.graphics.drawRect(M.x-m,M.y-C,M.width+m+w,M.height+A+C,f,d||"transparent",1,g,p,u);T.insertBefore(I.node,P.node)}}},{key:"addImage",value:function(t,e){var i=this.w,a=t.path,s=t.x,r=void 0===s?0:s,o=t.y,n=void 0===o?0:o,l=t.width,h=void 0===l?20:l,c=t.height,d=void 0===c?20:c,g=t.appendTo,u=void 0===g?".apexcharts-annotations":g,f=i.globals.dom.Paper.image(a);f.size(h,d).move(r,n);var p=i.globals.dom.baseEl.querySelector(u);return p&&p.appendChild(f.node),f}},{key:"addXaxisAnnotationExternal",value:function(t,e,i){return this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"xaxis",contextMethod:i.addXaxisAnnotation}),i}},{key:"addYaxisAnnotationExternal",value:function(t,e,i){return this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"yaxis",contextMethod:i.addYaxisAnnotation}),i}},{key:"addPointAnnotationExternal",value:function(t,e,i){return void 0===this.invertAxis&&(this.invertAxis=i.w.globals.isBarHorizontal),this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"point",contextMethod:i.addPointAnnotation}),i}},{key:"addAnnotationExternal",value:function(t){var e=t.params,i=t.pushToMemory,a=t.context,s=t.type,r=t.contextMethod,o=a,n=o.w,l=n.globals.dom.baseEl.querySelector(".apexcharts-".concat(s,"-annotations")),h=l.childNodes.length+1,c=new L,d=Object.assign({},"xaxis"===s?c.xAxisAnnotation:"yaxis"===s?c.yAxisAnnotation:c.pointAnnotation),g=x.extend(d,e);switch(s){case"xaxis":this.addXaxisAnnotation(g,l,h);break;case"yaxis":this.addYaxisAnnotation(g,l,h);break;case"point":this.addPointAnnotation(g,l,h)}var u=n.globals.dom.baseEl.querySelector(".apexcharts-".concat(s,"-annotations .apexcharts-").concat(s,"-annotation-label[rel='").concat(h,"']")),f=this.helpers.addBackgroundToAnno(u,g);return f&&l.insertBefore(f.node,u),i&&n.globals.memory.methodsToExec.push({context:o,id:g.id?g.id:x.randomId(),method:r,label:"addAnnotation",params:e}),a}},{key:"clearAnnotations",value:function(t){var e=t.w,i=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");e.globals.memory.methodsToExec.map((function(t,i){"addText"!==t.label&&"addAnnotation"!==t.label||e.globals.memory.methodsToExec.splice(i,1)})),i=x.listToArray(i),Array.prototype.forEach.call(i,(function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}))}},{key:"removeAnnotation",value:function(t,e){var i=t.w,a=i.globals.dom.baseEl.querySelectorAll(".".concat(e));a&&(i.globals.memory.methodsToExec.map((function(t,a){t.id===e&&i.globals.memory.methodsToExec.splice(a,1)})),Array.prototype.forEach.call(a,(function(t){t.parentElement.removeChild(t)})))}}]),t}(),T=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.months31=[1,3,5,7,8,10,12],this.months30=[2,4,6,9,11],this.daysCntOfYear=[0,31,59,90,120,151,181,212,243,273,304,334]}return r(t,[{key:"isValidDate",value:function(t){return!isNaN(this.parseDate(t))}},{key:"getTimeStamp",value:function(t){return Date.parse(t)?this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(t).toISOString().substr(0,25)).getTime():new Date(t).getTime():t}},{key:"getDate",value:function(t){return this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(t).toUTCString()):new Date(t)}},{key:"parseDate",value:function(t){var e=Date.parse(t);if(!isNaN(e))return this.getTimeStamp(t);var i=Date.parse(t.replace(/-/g,"/").replace(/[a-z]+/gi," "));return i=this.getTimeStamp(i)}},{key:"parseDateWithTimezone",value:function(t){return Date.parse(t.replace(/-/g,"/").replace(/[a-z]+/gi," "))}},{key:"formatDate",value:function(t,e){var i=this.w.globals.locale,a=this.w.config.xaxis.labels.datetimeUTC,s=["\0"].concat(u(i.months)),r=["\x01"].concat(u(i.shortMonths)),o=["\x02"].concat(u(i.days)),n=["\x03"].concat(u(i.shortDays));function l(t,e){var i=t+"";for(e=e||2;i.length<e;)i="0"+i;return i}var h=a?t.getUTCFullYear():t.getFullYear();e=(e=(e=e.replace(/(^|[^\\])yyyy+/g,"$1"+h)).replace(/(^|[^\\])yy/g,"$1"+h.toString().substr(2,2))).replace(/(^|[^\\])y/g,"$1"+h);var c=(a?t.getUTCMonth():t.getMonth())+1;e=(e=(e=(e=e.replace(/(^|[^\\])MMMM+/g,"$1"+s[0])).replace(/(^|[^\\])MMM/g,"$1"+r[0])).replace(/(^|[^\\])MM/g,"$1"+l(c))).replace(/(^|[^\\])M/g,"$1"+c);var d=a?t.getUTCDate():t.getDate();e=(e=(e=(e=e.replace(/(^|[^\\])dddd+/g,"$1"+o[0])).replace(/(^|[^\\])ddd/g,"$1"+n[0])).replace(/(^|[^\\])dd/g,"$1"+l(d))).replace(/(^|[^\\])d/g,"$1"+d);var g=a?t.getUTCHours():t.getHours(),f=g>12?g-12:0===g?12:g;e=(e=(e=(e=e.replace(/(^|[^\\])HH+/g,"$1"+l(g))).replace(/(^|[^\\])H/g,"$1"+g)).replace(/(^|[^\\])hh+/g,"$1"+l(f))).replace(/(^|[^\\])h/g,"$1"+f);var p=a?t.getUTCMinutes():t.getMinutes();e=(e=e.replace(/(^|[^\\])mm+/g,"$1"+l(p))).replace(/(^|[^\\])m/g,"$1"+p);var x=a?t.getUTCSeconds():t.getSeconds();e=(e=e.replace(/(^|[^\\])ss+/g,"$1"+l(x))).replace(/(^|[^\\])s/g,"$1"+x);var b=a?t.getUTCMilliseconds():t.getMilliseconds();e=e.replace(/(^|[^\\])fff+/g,"$1"+l(b,3)),b=Math.round(b/10),e=e.replace(/(^|[^\\])ff/g,"$1"+l(b)),b=Math.round(b/10);var v=g<12?"AM":"PM";e=(e=(e=e.replace(/(^|[^\\])f/g,"$1"+b)).replace(/(^|[^\\])TT+/g,"$1"+v)).replace(/(^|[^\\])T/g,"$1"+v.charAt(0));var m=v.toLowerCase();e=(e=e.replace(/(^|[^\\])tt+/g,"$1"+m)).replace(/(^|[^\\])t/g,"$1"+m.charAt(0));var y=-t.getTimezoneOffset(),w=a||!y?"Z":y>0?"+":"-";if(!a){var k=(y=Math.abs(y))%60;w+=l(Math.floor(y/60))+":"+l(k)}e=e.replace(/(^|[^\\])K/g,"$1"+w);var A=(a?t.getUTCDay():t.getDay())+1;return e=(e=(e=(e=(e=e.replace(new RegExp(o[0],"g"),o[A])).replace(new RegExp(n[0],"g"),n[A])).replace(new RegExp(s[0],"g"),s[c])).replace(new RegExp(r[0],"g"),r[c])).replace(/\\(.)/g,"$1")}},{key:"getTimeUnitsfromTimestamp",value:function(t,e,i){var a=this.w;void 0!==a.config.xaxis.min&&(t=a.config.xaxis.min),void 0!==a.config.xaxis.max&&(e=a.config.xaxis.max);var s=this.getDate(t),r=this.getDate(e),o=this.formatDate(s,"yyyy MM dd HH mm ss fff").split(" "),n=this.formatDate(r,"yyyy MM dd HH mm ss fff").split(" ");return{minMillisecond:parseInt(o[6],10),maxMillisecond:parseInt(n[6],10),minSecond:parseInt(o[5],10),maxSecond:parseInt(n[5],10),minMinute:parseInt(o[4],10),maxMinute:parseInt(n[4],10),minHour:parseInt(o[3],10),maxHour:parseInt(n[3],10),minDate:parseInt(o[2],10),maxDate:parseInt(n[2],10),minMonth:parseInt(o[1],10)-1,maxMonth:parseInt(n[1],10)-1,minYear:parseInt(o[0],10),maxYear:parseInt(n[0],10)}}},{key:"isLeapYear",value:function(t){return t%4==0&&t%100!=0||t%400==0}},{key:"calculcateLastDaysOfMonth",value:function(t,e,i){return this.determineDaysOfMonths(t,e)-i}},{key:"determineDaysOfYear",value:function(t){var e=365;return this.isLeapYear(t)&&(e=366),e}},{key:"determineRemainingDaysOfYear",value:function(t,e,i){var a=this.daysCntOfYear[e]+i;return e>1&&this.isLeapYear()&&a++,a}},{key:"determineDaysOfMonths",value:function(t,e){var i=30;switch(t=x.monthMod(t),!0){case this.months30.indexOf(t)>-1:2===t&&(i=this.isLeapYear(e)?29:28);break;case this.months31.indexOf(t)>-1:default:i=31}return i}}]),t}(),M=function(t){var e,i=t.ctx,a=t.seriesIndex,s=t.dataPointIndex,r=t.y1,o=t.y2,n=t.w,l=n.globals.seriesRangeStart[a][s],h=n.globals.seriesRangeEnd[a][s],c=n.globals.labels[s],d=n.config.series[a].name?n.config.series[a].name:"",g=n.config.tooltip.y.formatter,u=n.config.tooltip.y.title.formatter,f={w:n,seriesIndex:a,dataPointIndex:s,start:l,end:h};"function"==typeof u&&(d=u(d,f)),null!==(e=n.config.series[a].data[s])&&void 0!==e&&e.x&&(c=n.config.series[a].data[s].x+":"),"function"==typeof g&&(c=g(c,f)),Number.isFinite(r)&&Number.isFinite(o)&&(l=r,h=o);var p="",x="",b=n.globals.colors[a];if(void 0===n.config.tooltip.x.formatter)if("datetime"===n.config.xaxis.type){var v=new T(i);p=v.formatDate(v.getDate(l),n.config.tooltip.x.format),x=v.formatDate(v.getDate(h),n.config.tooltip.x.format)}else p=l,x=h;else p=n.config.tooltip.x.formatter(l),x=n.config.tooltip.x.formatter(h);return{start:l,end:h,startVal:p,endVal:x,ylabel:c,color:b,seriesName:d}},I=function(t){var e=t.color,i=t.seriesName,a=t.ylabel,s=t.start,r=t.end,o=t.seriesIndex,n=t.dataPointIndex,l=t.ctx.tooltip.tooltipLabels.getFormatters(o);s=l.yLbFormatter(s),r=l.yLbFormatter(r);var h=l.yLbFormatter(t.w.globals.series[o][n]),c='<span class="value start-value">\n  '.concat(s,'\n  </span> <span class="separator">-</span> <span class="value end-value">\n  ').concat(r,"\n  </span>");return'<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: '+e+'">'+(i||"")+'</span></div><div> <span class="category">'+a+" </span> "+(t.w.globals.comboCharts?"rangeArea"===t.w.config.series[o].type||"rangeBar"===t.w.config.series[o].type?c:"<span>".concat(h,"</span>"):c)+" </div></div>"},z=function(){function t(e){a(this,t),this.opts=e}return r(t,[{key:"line",value:function(){return{chart:{animations:{easing:"swing"}},dataLabels:{enabled:!1},stroke:{width:5,curve:"straight"},markers:{size:0,hover:{sizeOffset:6}},xaxis:{crosshairs:{width:1}}}}},{key:"sparkline",value:function(t){this.opts.yaxis[0].show=!1,this.opts.yaxis[0].title.text="",this.opts.yaxis[0].axisBorder.show=!1,this.opts.yaxis[0].axisTicks.show=!1,this.opts.yaxis[0].floating=!0;return x.extend(t,{grid:{show:!1,padding:{left:0,right:0,top:0,bottom:0}},legend:{show:!1},xaxis:{labels:{show:!1},tooltip:{enabled:!1},axisBorder:{show:!1},axisTicks:{show:!1}},chart:{toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1}})}},{key:"bar",value:function(){return{chart:{stacked:!1,animations:{easing:"swing"}},plotOptions:{bar:{dataLabels:{position:"center"}}},dataLabels:{style:{colors:["#fff"]},background:{enabled:!1}},stroke:{width:0,lineCap:"round"},fill:{opacity:.85},legend:{markers:{shape:"square",radius:2,size:8}},tooltip:{shared:!1,intersect:!0},xaxis:{tooltip:{enabled:!1},tickPlacement:"between",crosshairs:{width:"barWidth",position:"back",fill:{type:"gradient"},dropShadow:{enabled:!1},stroke:{width:0}}}}}},{key:"candlestick",value:function(){var t=this;return{stroke:{width:1,colors:["#333"]},fill:{opacity:1},dataLabels:{enabled:!1},tooltip:{shared:!0,custom:function(e){var i=e.seriesIndex,a=e.dataPointIndex,s=e.w;return t._getBoxTooltip(s,i,a,["Open","High","","Low","Close"],"candlestick")}},states:{active:{filter:{type:"none"}}},xaxis:{crosshairs:{width:1}}}}},{key:"boxPlot",value:function(){var t=this;return{chart:{animations:{dynamicAnimation:{enabled:!1}}},stroke:{width:1,colors:["#24292e"]},dataLabels:{enabled:!1},tooltip:{shared:!0,custom:function(e){var i=e.seriesIndex,a=e.dataPointIndex,s=e.w;return t._getBoxTooltip(s,i,a,["Minimum","Q1","Median","Q3","Maximum"],"boxPlot")}},markers:{size:5,strokeWidth:1,strokeColors:"#111"},xaxis:{crosshairs:{width:1}}}}},{key:"rangeBar",value:function(){return{stroke:{width:0,lineCap:"square"},plotOptions:{bar:{borderRadius:0,dataLabels:{position:"center"}}},dataLabels:{enabled:!1,formatter:function(t,e){e.ctx;var i=e.seriesIndex,a=e.dataPointIndex,s=e.w,r=function(){var t=s.globals.seriesRangeStart[i][a];return s.globals.seriesRangeEnd[i][a]-t};return s.globals.comboCharts?"rangeBar"===s.config.series[i].type||"rangeArea"===s.config.series[i].type?r():t:r()},background:{enabled:!1},style:{colors:["#fff"]}},tooltip:{shared:!1,followCursor:!0,custom:function(t){return t.w.config.plotOptions&&t.w.config.plotOptions.bar&&t.w.config.plotOptions.bar.horizontal?function(t){var i=M(t),a=i.color,s=i.seriesName,r=i.ylabel,o=i.startVal,n=i.endVal;return I(e(e({},t),{},{color:a,seriesName:s,ylabel:r,start:o,end:n}))}(t):function(t){var i=M(t),a=i.color,s=i.seriesName,r=i.ylabel,o=i.start,n=i.end;return I(e(e({},t),{},{color:a,seriesName:s,ylabel:r,start:o,end:n}))}(t)}},xaxis:{tickPlacement:"between",tooltip:{enabled:!1},crosshairs:{stroke:{width:0}}}}}},{key:"area",value:function(){return{stroke:{width:4,fill:{type:"solid",gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.65,opacityTo:.5,stops:[0,100,100]}}},fill:{type:"gradient",gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.65,opacityTo:.5,stops:[0,100,100]}},markers:{size:0,hover:{sizeOffset:6}},tooltip:{followCursor:!1}}}},{key:"rangeArea",value:function(){return{stroke:{curve:"straight",width:0},fill:{type:"solid",opacity:.6},markers:{size:0},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{intersect:!1,shared:!0,followCursor:!0,custom:function(t){return function(t){var i=M(t),a=i.color,s=i.seriesName,r=i.ylabel,o=i.start,n=i.end;return I(e(e({},t),{},{color:a,seriesName:s,ylabel:r,start:o,end:n}))}(t)}}}}},{key:"brush",value:function(t){return x.extend(t,{chart:{toolbar:{autoSelected:"selection",show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{width:1},tooltip:{enabled:!1},xaxis:{tooltip:{enabled:!1}}})}},{key:"stacked100",value:function(t){t.dataLabels=t.dataLabels||{},t.dataLabels.formatter=t.dataLabels.formatter||void 0;var e=t.dataLabels.formatter;return t.yaxis.forEach((function(e,i){t.yaxis[i].min=0,t.yaxis[i].max=100})),"bar"===t.chart.type&&(t.dataLabels.formatter=e||function(t){return"number"==typeof t&&t?t.toFixed(0)+"%":t}),t}},{key:"convertCatToNumeric",value:function(t){return t.xaxis.convertedCatToNumeric=!0,t}},{key:"convertCatToNumericXaxis",value:function(t,e,i){t.xaxis.type="numeric",t.xaxis.labels=t.xaxis.labels||{},t.xaxis.labels.formatter=t.xaxis.labels.formatter||function(t){return x.isNumber(t)?Math.floor(t):t};var a=t.xaxis.labels.formatter,s=t.xaxis.categories&&t.xaxis.categories.length?t.xaxis.categories:t.labels;return i&&i.length&&(s=i.map((function(t){return Array.isArray(t)?t:String(t)}))),s&&s.length&&(t.xaxis.labels.formatter=function(t){return x.isNumber(t)?a(s[Math.floor(t)-1]):a(t)}),t.xaxis.categories=[],t.labels=[],t.xaxis.tickAmount=t.xaxis.tickAmount||"dataPoints",t}},{key:"bubble",value:function(){return{dataLabels:{style:{colors:["#fff"]}},tooltip:{shared:!1,intersect:!0},xaxis:{crosshairs:{width:0}},fill:{type:"solid",gradient:{shade:"light",inverse:!0,shadeIntensity:.55,opacityFrom:.4,opacityTo:.8}}}}},{key:"scatter",value:function(){return{dataLabels:{enabled:!1},tooltip:{shared:!1,intersect:!0},markers:{size:6,strokeWidth:1,hover:{sizeOffset:2}}}}},{key:"heatmap",value:function(){return{chart:{stacked:!1},fill:{opacity:1},dataLabels:{style:{colors:["#fff"]}},stroke:{colors:["#fff"]},tooltip:{followCursor:!0,marker:{show:!1},x:{show:!1}},legend:{position:"top",markers:{shape:"square",size:10,offsetY:2}},grid:{padding:{right:20}}}}},{key:"treemap",value:function(){return{chart:{zoom:{enabled:!1}},dataLabels:{style:{fontSize:14,fontWeight:600,colors:["#fff"]}},stroke:{show:!0,width:2,colors:["#fff"]},legend:{show:!1},fill:{gradient:{stops:[0,100]}},tooltip:{followCursor:!0,x:{show:!1}},grid:{padding:{left:0,right:0}},xaxis:{crosshairs:{show:!1},tooltip:{enabled:!1}}}}},{key:"pie",value:function(){return{chart:{toolbar:{show:!1}},plotOptions:{pie:{donut:{labels:{show:!1}}}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},style:{colors:["#fff"]},background:{enabled:!1},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"light",stops:[0,100]}},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"donut",value:function(){return{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},style:{colors:["#fff"]},background:{enabled:!1},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"light",shadeIntensity:.35,stops:[80,100],opacityFrom:1,opacityTo:1}},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"polarArea",value:function(){return this.opts.yaxis[0].tickAmount=this.opts.yaxis[0].tickAmount?this.opts.yaxis[0].tickAmount:6,{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},enabled:!1},stroke:{show:!0,width:2},fill:{opacity:.7},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"radar",value:function(){return this.opts.yaxis[0].labels.offsetY=this.opts.yaxis[0].labels.offsetY?this.opts.yaxis[0].labels.offsetY:6,{dataLabels:{enabled:!1,style:{fontSize:"11px"}},stroke:{width:2},markers:{size:3,strokeWidth:1,strokeOpacity:1},fill:{opacity:.2},tooltip:{shared:!1,intersect:!0,followCursor:!0},grid:{show:!1},xaxis:{labels:{formatter:function(t){return t},style:{colors:["#a8a8a8"],fontSize:"11px"}},tooltip:{enabled:!1},crosshairs:{show:!1}}}}},{key:"radialBar",value:function(){return{chart:{animations:{dynamicAnimation:{enabled:!0,speed:800}},toolbar:{show:!1}},fill:{gradient:{shade:"dark",shadeIntensity:.4,inverseColors:!1,type:"diagonal2",opacityFrom:1,opacityTo:1,stops:[70,98,100]}},legend:{show:!1,position:"right"},tooltip:{enabled:!1,fillSeriesColor:!0}}}},{key:"_getBoxTooltip",value:function(t,e,i,a,s){var r=t.globals.seriesCandleO[e][i],o=t.globals.seriesCandleH[e][i],n=t.globals.seriesCandleM[e][i],l=t.globals.seriesCandleL[e][i],h=t.globals.seriesCandleC[e][i];return t.config.series[e].type&&t.config.series[e].type!==s?'<div class="apexcharts-custom-tooltip">\n          '.concat(t.config.series[e].name?t.config.series[e].name:"series-"+(e+1),": <strong>").concat(t.globals.series[e][i],"</strong>\n        </div>"):'<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(t.config.chart.type,'">')+"<div>".concat(a[0],': <span class="value">')+r+"</span></div>"+"<div>".concat(a[1],': <span class="value">')+o+"</span></div>"+(n?"<div>".concat(a[2],': <span class="value">')+n+"</span></div>":"")+"<div>".concat(a[3],': <span class="value">')+l+"</span></div>"+"<div>".concat(a[4],': <span class="value">')+h+"</span></div></div>"}}]),t}(),X=function(){function t(e){a(this,t),this.opts=e}return r(t,[{key:"init",value:function(t){var e=t.responsiveOverride,a=this.opts,s=new L,r=new z(a);this.chartType=a.chart.type,"histogram"===this.chartType&&(a.chart.type="bar",a=x.extend({plotOptions:{bar:{columnWidth:"99.99%"}}},a)),a=this.extendYAxis(a),a=this.extendAnnotations(a);var o=s.init(),n={};if(a&&"object"===i(a)){var l={};l=-1!==["line","area","bar","candlestick","boxPlot","rangeBar","rangeArea","histogram","bubble","scatter","heatmap","treemap","pie","polarArea","donut","radar","radialBar"].indexOf(a.chart.type)?r[a.chart.type]():r.line(),a.chart.brush&&a.chart.brush.enabled&&(l=r.brush(l)),a.chart.stacked&&"100%"===a.chart.stackType&&(a=r.stacked100(a)),this.checkForDarkTheme(window.Apex),this.checkForDarkTheme(a),a.xaxis=a.xaxis||window.Apex.xaxis||{},e||(a.xaxis.convertedCatToNumeric=!1),((a=this.checkForCatToNumericXAxis(this.chartType,l,a)).chart.sparkline&&a.chart.sparkline.enabled||window.Apex.chart&&window.Apex.chart.sparkline&&window.Apex.chart.sparkline.enabled)&&(l=r.sparkline(l)),n=x.extend(o,l)}var h=x.extend(n,window.Apex);return o=x.extend(h,a),o=this.handleUserInputErrors(o)}},{key:"checkForCatToNumericXAxis",value:function(t,e,i){var a=new z(i),s=("bar"===t||"boxPlot"===t)&&i.plotOptions&&i.plotOptions.bar&&i.plotOptions.bar.horizontal,r="pie"===t||"polarArea"===t||"donut"===t||"radar"===t||"radialBar"===t||"heatmap"===t,o="datetime"!==i.xaxis.type&&"numeric"!==i.xaxis.type,n=i.xaxis.tickPlacement?i.xaxis.tickPlacement:e.xaxis&&e.xaxis.tickPlacement;return s||r||!o||"between"===n||(i=a.convertCatToNumeric(i)),i}},{key:"extendYAxis",value:function(t,e){var i=new L;(void 0===t.yaxis||!t.yaxis||Array.isArray(t.yaxis)&&0===t.yaxis.length)&&(t.yaxis={}),t.yaxis.constructor!==Array&&window.Apex.yaxis&&window.Apex.yaxis.constructor!==Array&&(t.yaxis=x.extend(t.yaxis,window.Apex.yaxis)),t.yaxis.constructor!==Array?t.yaxis=[x.extend(i.yAxis,t.yaxis)]:t.yaxis=x.extendArray(t.yaxis,i.yAxis);var a=!1;t.yaxis.forEach((function(t){t.logarithmic&&(a=!0)}));var s=t.series;return e&&!s&&(s=e.config.series),a&&s.length!==t.yaxis.length&&s.length&&(t.yaxis=s.map((function(e,a){if(e.name||(s[a].name="series-".concat(a+1)),t.yaxis[a])return t.yaxis[a].seriesName=s[a].name,t.yaxis[a];var r=x.extend(i.yAxis,t.yaxis[0]);return r.show=!1,r}))),a&&s.length>1&&s.length!==t.yaxis.length&&console.warn("A multi-series logarithmic chart should have equal number of series and y-axes. Please make sure to equalize both."),t}},{key:"extendAnnotations",value:function(t){return void 0===t.annotations&&(t.annotations={},t.annotations.yaxis=[],t.annotations.xaxis=[],t.annotations.points=[]),t=this.extendYAxisAnnotations(t),t=this.extendXAxisAnnotations(t),t=this.extendPointAnnotations(t)}},{key:"extendYAxisAnnotations",value:function(t){var e=new L;return t.annotations.yaxis=x.extendArray(void 0!==t.annotations.yaxis?t.annotations.yaxis:[],e.yAxisAnnotation),t}},{key:"extendXAxisAnnotations",value:function(t){var e=new L;return t.annotations.xaxis=x.extendArray(void 0!==t.annotations.xaxis?t.annotations.xaxis:[],e.xAxisAnnotation),t}},{key:"extendPointAnnotations",value:function(t){var e=new L;return t.annotations.points=x.extendArray(void 0!==t.annotations.points?t.annotations.points:[],e.pointAnnotation),t}},{key:"checkForDarkTheme",value:function(t){t.theme&&"dark"===t.theme.mode&&(t.tooltip||(t.tooltip={}),"light"!==t.tooltip.theme&&(t.tooltip.theme="dark"),t.chart.foreColor||(t.chart.foreColor="#f6f7f8"),t.chart.background||(t.chart.background="#424242"),t.theme.palette||(t.theme.palette="palette4"))}},{key:"handleUserInputErrors",value:function(t){var e=t;if(e.tooltip.shared&&e.tooltip.intersect)throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");if("bar"===e.chart.type&&e.plotOptions.bar.horizontal){if(e.yaxis.length>1)throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");e.yaxis[0].reversed&&(e.yaxis[0].opposite=!0),e.xaxis.tooltip.enabled=!1,e.yaxis[0].tooltip.enabled=!1,e.chart.zoom.enabled=!1}return"bar"!==e.chart.type&&"rangeBar"!==e.chart.type||e.tooltip.shared&&"barWidth"===e.xaxis.crosshairs.width&&e.series.length>1&&(e.xaxis.crosshairs.width="tickWidth"),"candlestick"!==e.chart.type&&"boxPlot"!==e.chart.type||e.yaxis[0].reversed&&(console.warn("Reversed y-axis in ".concat(e.chart.type," chart is not supported.")),e.yaxis[0].reversed=!1),e}}]),t}(),E=function(){function t(){a(this,t)}return r(t,[{key:"initGlobalVars",value:function(t){t.series=[],t.seriesCandleO=[],t.seriesCandleH=[],t.seriesCandleM=[],t.seriesCandleL=[],t.seriesCandleC=[],t.seriesRangeStart=[],t.seriesRangeEnd=[],t.seriesRange=[],t.seriesPercent=[],t.seriesGoals=[],t.seriesX=[],t.seriesZ=[],t.seriesNames=[],t.seriesTotals=[],t.seriesLog=[],t.seriesColors=[],t.stackedSeriesTotals=[],t.seriesXvalues=[],t.seriesYvalues=[],t.labels=[],t.hasGroups=!1,t.groups=[],t.categoryLabels=[],t.timescaleLabels=[],t.noLabelsProvided=!1,t.resizeTimer=null,t.selectionResizeTimer=null,t.delayedElements=[],t.pointsArray=[],t.dataLabelsRects=[],t.isXNumeric=!1,t.xaxisLabelsCount=0,t.skipLastTimelinelabel=!1,t.skipFirstTimelinelabel=!1,t.isDataXYZ=!1,t.isMultiLineX=!1,t.isMultipleYAxis=!1,t.maxY=-Number.MAX_VALUE,t.minY=Number.MIN_VALUE,t.minYArr=[],t.maxYArr=[],t.maxX=-Number.MAX_VALUE,t.minX=Number.MAX_VALUE,t.initialMaxX=-Number.MAX_VALUE,t.initialMinX=Number.MAX_VALUE,t.maxDate=0,t.minDate=Number.MAX_VALUE,t.minZ=Number.MAX_VALUE,t.maxZ=-Number.MAX_VALUE,t.minXDiff=Number.MAX_VALUE,t.yAxisScale=[],t.xAxisScale=null,t.xAxisTicksPositions=[],t.yLabelsCoords=[],t.yTitleCoords=[],t.barPadForNumericAxis=0,t.padHorizontal=0,t.xRange=0,t.yRange=[],t.zRange=0,t.dataPoints=0,t.xTickAmount=0}},{key:"globalVars",value:function(t){return{chartID:null,cuid:null,events:{beforeMount:[],mounted:[],updated:[],clicked:[],selection:[],dataPointSelection:[],zoomed:[],scrolled:[]},colors:[],clientX:null,clientY:null,fill:{colors:[]},stroke:{colors:[]},dataLabels:{style:{colors:[]}},radarPolygons:{fill:{colors:[]}},markers:{colors:[],size:t.markers.size,largestSize:0},animationEnded:!1,isTouchDevice:"ontouchstart"in window||navigator.msMaxTouchPoints,isDirty:!1,isExecCalled:!1,initialConfig:null,initialSeries:[],lastXAxis:[],lastYAxis:[],columnSeries:null,labels:[],timescaleLabels:[],noLabelsProvided:!1,allSeriesCollapsed:!1,collapsedSeries:[],collapsedSeriesIndices:[],ancillaryCollapsedSeries:[],ancillaryCollapsedSeriesIndices:[],risingSeries:[],dataFormatXNumeric:!1,capturedSeriesIndex:-1,capturedDataPointIndex:-1,selectedDataPoints:[],goldenPadding:35,invalidLogScale:!1,ignoreYAxisIndexes:[],yAxisSameScaleIndices:[],maxValsInArrayIndex:0,radialSize:0,selection:void 0,zoomEnabled:"zoom"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.zoom&&t.chart.zoom.enabled,panEnabled:"pan"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.pan,selectionEnabled:"selection"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.selection,yaxis:null,mousedown:!1,lastClientPosition:{},visibleXRange:void 0,yValueDecimal:0,total:0,SVGNS:"http://www.w3.org/2000/svg",svgWidth:0,svgHeight:0,noData:!1,locale:{},dom:{},memory:{methodsToExec:[]},shouldAnimate:!0,skipLastTimelinelabel:!1,skipFirstTimelinelabel:!1,delayedElements:[],axisCharts:!0,isDataXYZ:!1,resized:!1,resizeTimer:null,comboCharts:!1,dataChanged:!1,previousPaths:[],allSeriesHasEqualX:!0,pointsArray:[],dataLabelsRects:[],lastDrawnDataLabelsIndexes:[],hasNullValues:!1,easing:null,zoomed:!1,gridWidth:0,gridHeight:0,rotateXLabels:!1,defaultLabels:!1,xLabelFormatter:void 0,yLabelFormatters:[],xaxisTooltipFormatter:void 0,ttKeyFormatter:void 0,ttVal:void 0,ttZFormatter:void 0,LINE_HEIGHT_RATIO:1.618,xAxisLabelsHeight:0,xAxisGroupLabelsHeight:0,xAxisLabelsWidth:0,yAxisLabelsWidth:0,scaleX:1,scaleY:1,translateX:0,translateY:0,translateYAxisX:[],yAxisWidths:[],translateXAxisY:0,translateXAxisX:0,tooltip:null}}},{key:"init",value:function(t){var e=this.globalVars(t);return this.initGlobalVars(e),e.initialConfig=x.extend({},t),e.initialSeries=x.clone(t.series),e.lastXAxis=x.clone(e.initialConfig.xaxis),e.lastYAxis=x.clone(e.initialConfig.yaxis),e}}]),t}(),Y=function(){function t(e){a(this,t),this.opts=e}return r(t,[{key:"init",value:function(){var t=new X(this.opts).init({responsiveOverride:!1});return{config:t,globals:(new E).init(t)}}}]),t}(),F=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.opts=null,this.seriesIndex=0}return r(t,[{key:"clippedImgArea",value:function(t){var e=this.w,i=e.config,a=parseInt(e.globals.gridWidth,10),s=parseInt(e.globals.gridHeight,10),r=a>s?a:s,o=t.image,n=0,l=0;void 0===t.width&&void 0===t.height?void 0!==i.fill.image.width&&void 0!==i.fill.image.height?(n=i.fill.image.width+1,l=i.fill.image.height):(n=r+1,l=r):(n=t.width,l=t.height);var h=document.createElementNS(e.globals.SVGNS,"pattern");m.setAttrs(h,{id:t.patternID,patternUnits:t.patternUnits?t.patternUnits:"userSpaceOnUse",width:n+"px",height:l+"px"});var c=document.createElementNS(e.globals.SVGNS,"image");h.appendChild(c),c.setAttributeNS(window.SVG.xlink,"href",o),m.setAttrs(c,{x:0,y:0,preserveAspectRatio:"none",width:n+"px",height:l+"px"}),c.style.opacity=t.opacity,e.globals.dom.elDefs.node.appendChild(h)}},{key:"getSeriesIndex",value:function(t){var e=this.w;return("bar"===e.config.chart.type||"rangeBar"===e.config.chart.type)&&e.config.plotOptions.bar.distributed||"heatmap"===e.config.chart.type||"treemap"===e.config.chart.type?this.seriesIndex=t.seriesNumber:this.seriesIndex=t.seriesNumber%e.globals.series.length,this.seriesIndex}},{key:"fillPath",value:function(t){var e=this.w;this.opts=t;var i,a,s,r=this.w.config;this.seriesIndex=this.getSeriesIndex(t);var o=this.getFillColors()[this.seriesIndex];void 0!==e.globals.seriesColors[this.seriesIndex]&&(o=e.globals.seriesColors[this.seriesIndex]),"function"==typeof o&&(o=o({seriesIndex:this.seriesIndex,dataPointIndex:t.dataPointIndex,value:t.value,w:e}));var n=t.fillType?t.fillType:this.getFillType(this.seriesIndex),l=Array.isArray(r.fill.opacity)?r.fill.opacity[this.seriesIndex]:r.fill.opacity;t.color&&(o=t.color);var h=o;if(-1===o.indexOf("rgb")?o.length<9&&(h=x.hexToRgba(o,l)):o.indexOf("rgba")>-1&&(l=x.getOpacityFromRGBA(o)),t.opacity&&(l=t.opacity),"pattern"===n&&(a=this.handlePatternFill({fillConfig:t.fillConfig,patternFill:a,fillColor:o,fillOpacity:l,defaultColor:h})),"gradient"===n&&(s=this.handleGradientFill({fillConfig:t.fillConfig,fillColor:o,fillOpacity:l,i:this.seriesIndex})),"image"===n){var c=r.fill.image.src,d=t.patternID?t.patternID:"";this.clippedImgArea({opacity:l,image:Array.isArray(c)?t.seriesNumber<c.length?c[t.seriesNumber]:c[0]:c,width:t.width?t.width:void 0,height:t.height?t.height:void 0,patternUnits:t.patternUnits,patternID:"pattern".concat(e.globals.cuid).concat(t.seriesNumber+1).concat(d)}),i="url(#pattern".concat(e.globals.cuid).concat(t.seriesNumber+1).concat(d,")")}else i="gradient"===n?s:"pattern"===n?a:h;return t.solid&&(i=h),i}},{key:"getFillType",value:function(t){var e=this.w;return Array.isArray(e.config.fill.type)?e.config.fill.type[t]:e.config.fill.type}},{key:"getFillColors",value:function(){var t=this.w,e=t.config,i=this.opts,a=[];return t.globals.comboCharts?"line"===t.config.series[this.seriesIndex].type?Array.isArray(t.globals.stroke.colors)?a=t.globals.stroke.colors:a.push(t.globals.stroke.colors):Array.isArray(t.globals.fill.colors)?a=t.globals.fill.colors:a.push(t.globals.fill.colors):"line"===e.chart.type?Array.isArray(t.globals.stroke.colors)?a=t.globals.stroke.colors:a.push(t.globals.stroke.colors):Array.isArray(t.globals.fill.colors)?a=t.globals.fill.colors:a.push(t.globals.fill.colors),void 0!==i.fillColors&&(a=[],Array.isArray(i.fillColors)?a=i.fillColors.slice():a.push(i.fillColors)),a}},{key:"handlePatternFill",value:function(t){var e=t.fillConfig,i=t.patternFill,a=t.fillColor,s=t.fillOpacity,r=t.defaultColor,o=this.w.config.fill;e&&(o=e);var n=this.opts,l=new m(this.ctx),h=Array.isArray(o.pattern.strokeWidth)?o.pattern.strokeWidth[this.seriesIndex]:o.pattern.strokeWidth,c=a;Array.isArray(o.pattern.style)?i=void 0!==o.pattern.style[n.seriesNumber]?l.drawPattern(o.pattern.style[n.seriesNumber],o.pattern.width,o.pattern.height,c,h,s):r:i=l.drawPattern(o.pattern.style,o.pattern.width,o.pattern.height,c,h,s);return i}},{key:"handleGradientFill",value:function(t){var i=t.fillColor,a=t.fillOpacity,s=t.fillConfig,r=t.i,o=this.w.config.fill;s&&(o=e(e({},o),s));var n,l=this.opts,h=new m(this.ctx),c=new x,d=o.gradient.type,g=i,u=void 0===o.gradient.opacityFrom?a:Array.isArray(o.gradient.opacityFrom)?o.gradient.opacityFrom[r]:o.gradient.opacityFrom;g.indexOf("rgba")>-1&&(u=x.getOpacityFromRGBA(g));var f=void 0===o.gradient.opacityTo?a:Array.isArray(o.gradient.opacityTo)?o.gradient.opacityTo[r]:o.gradient.opacityTo;if(void 0===o.gradient.gradientToColors||0===o.gradient.gradientToColors.length)n="dark"===o.gradient.shade?c.shadeColor(-1*parseFloat(o.gradient.shadeIntensity),i.indexOf("rgb")>-1?x.rgb2hex(i):i):c.shadeColor(parseFloat(o.gradient.shadeIntensity),i.indexOf("rgb")>-1?x.rgb2hex(i):i);else if(o.gradient.gradientToColors[l.seriesNumber]){var p=o.gradient.gradientToColors[l.seriesNumber];n=p,p.indexOf("rgba")>-1&&(f=x.getOpacityFromRGBA(p))}else n=i;if(o.gradient.gradientFrom&&(g=o.gradient.gradientFrom),o.gradient.gradientTo&&(n=o.gradient.gradientTo),o.gradient.inverseColors){var b=g;g=n,n=b}return g.indexOf("rgb")>-1&&(g=x.rgb2hex(g)),n.indexOf("rgb")>-1&&(n=x.rgb2hex(n)),h.drawGradient(d,g,n,u,f,l.size,o.gradient.stops,o.gradient.colorStops,r)}}]),t}(),R=function(){function t(e,i){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"setGlobalMarkerSize",value:function(){var t=this.w;if(t.globals.markers.size=Array.isArray(t.config.markers.size)?t.config.markers.size:[t.config.markers.size],t.globals.markers.size.length>0){if(t.globals.markers.size.length<t.globals.series.length+1)for(var e=0;e<=t.globals.series.length;e++)void 0===t.globals.markers.size[e]&&t.globals.markers.size.push(t.globals.markers.size[0])}else t.globals.markers.size=t.config.series.map((function(e){return t.config.markers.size}))}},{key:"plotChartMarkers",value:function(t,e,i,a){var s,r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=this.w,n=e,l=t,h=null,c=new m(this.ctx),d=o.config.markers.discrete&&o.config.markers.discrete.length;if((o.globals.markers.size[e]>0||r||d)&&(h=c.group({class:r||d?"":"apexcharts-series-markers"})).attr("clip-path","url(#gridRectMarkerMask".concat(o.globals.cuid,")")),Array.isArray(l.x))for(var g=0;g<l.x.length;g++){var u=i;1===i&&0===g&&(u=0),1===i&&1===g&&(u=1);var f="apexcharts-marker";"line"!==o.config.chart.type&&"area"!==o.config.chart.type||o.globals.comboCharts||o.config.tooltip.intersect||(f+=" no-pointer-events");var p=Array.isArray(o.config.markers.size)?o.globals.markers.size[e]>0:o.config.markers.size>0;if(p||r||d){x.isNumber(l.y[g])?f+=" w".concat(x.randomId()):f="apexcharts-nullpoint";var b=this.getMarkerConfig({cssClass:f,seriesIndex:e,dataPointIndex:u});o.config.series[n].data[u]&&(o.config.series[n].data[u].fillColor&&(b.pointFillColor=o.config.series[n].data[u].fillColor),o.config.series[n].data[u].strokeColor&&(b.pointStrokeColor=o.config.series[n].data[u].strokeColor)),a&&(b.pSize=a),(s=c.drawMarker(l.x[g],l.y[g],b)).attr("rel",u),s.attr("j",u),s.attr("index",e),s.node.setAttribute("default-marker-size",b.pSize);var y=new v(this.ctx);y.setSelectionFilter(s,e,u),this.addEvents(s),h&&h.add(s)}else void 0===o.globals.pointsArray[e]&&(o.globals.pointsArray[e]=[]),o.globals.pointsArray[e].push([l.x[g],l.y[g]])}return h}},{key:"getMarkerConfig",value:function(t){var e=t.cssClass,i=t.seriesIndex,a=t.dataPointIndex,s=void 0===a?null:a,r=t.finishRadius,o=void 0===r?null:r,n=this.w,l=this.getMarkerStyle(i),h=n.globals.markers.size[i],c=n.config.markers;return null!==s&&c.discrete.length&&c.discrete.map((function(t){t.seriesIndex===i&&t.dataPointIndex===s&&(l.pointStrokeColor=t.strokeColor,l.pointFillColor=t.fillColor,h=t.size,l.pointShape=t.shape)})),{pSize:null===o?h:o,pRadius:c.radius,width:Array.isArray(c.width)?c.width[i]:c.width,height:Array.isArray(c.height)?c.height[i]:c.height,pointStrokeWidth:Array.isArray(c.strokeWidth)?c.strokeWidth[i]:c.strokeWidth,pointStrokeColor:l.pointStrokeColor,pointFillColor:l.pointFillColor,shape:l.pointShape||(Array.isArray(c.shape)?c.shape[i]:c.shape),class:e,pointStrokeOpacity:Array.isArray(c.strokeOpacity)?c.strokeOpacity[i]:c.strokeOpacity,pointStrokeDashArray:Array.isArray(c.strokeDashArray)?c.strokeDashArray[i]:c.strokeDashArray,pointFillOpacity:Array.isArray(c.fillOpacity)?c.fillOpacity[i]:c.fillOpacity,seriesIndex:i}}},{key:"addEvents",value:function(t){var e=this.w,i=new m(this.ctx);t.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this.ctx,t)),t.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this.ctx,t)),t.node.addEventListener("mousedown",i.pathMouseDown.bind(this.ctx,t)),t.node.addEventListener("click",e.config.markers.onClick),t.node.addEventListener("dblclick",e.config.markers.onDblClick),t.node.addEventListener("touchstart",i.pathMouseDown.bind(this.ctx,t),{passive:!0})}},{key:"getMarkerStyle",value:function(t){var e=this.w,i=e.globals.markers.colors,a=e.config.markers.strokeColor||e.config.markers.strokeColors;return{pointStrokeColor:Array.isArray(a)?a[t]:a,pointFillColor:Array.isArray(i)?i[t]:i}}}]),t}(),D=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled}return r(t,[{key:"draw",value:function(t,e,i){var a=this.w,s=new m(this.ctx),r=i.realIndex,o=i.pointsPos,n=i.zRatio,l=i.elParent,h=s.group({class:"apexcharts-series-markers apexcharts-series-".concat(a.config.chart.type)});if(h.attr("clip-path","url(#gridRectMarkerMask".concat(a.globals.cuid,")")),Array.isArray(o.x))for(var c=0;c<o.x.length;c++){var d=e+1,g=!0;0===e&&0===c&&(d=0),0===e&&1===c&&(d=1);var u=0,f=a.globals.markers.size[r];if(n!==1/0){var p=a.config.plotOptions.bubble;f=a.globals.seriesZ[r][d],p.zScaling&&(f/=n),p.minBubbleRadius&&f<p.minBubbleRadius&&(f=p.minBubbleRadius),p.maxBubbleRadius&&f>p.maxBubbleRadius&&(f=p.maxBubbleRadius)}a.config.chart.animations.enabled||(u=f);var x=o.x[c],b=o.y[c];if(u=u||0,null!==b&&void 0!==a.globals.series[r][d]||(g=!1),g){var v=this.drawPoint(x,b,u,f,r,d,e);h.add(v)}l.add(h)}}},{key:"drawPoint",value:function(t,e,i,a,s,r,o){var n=this.w,l=s,h=new b(this.ctx),c=new v(this.ctx),d=new F(this.ctx),g=new R(this.ctx),u=new m(this.ctx),f=g.getMarkerConfig({cssClass:"apexcharts-marker",seriesIndex:l,dataPointIndex:r,finishRadius:"bubble"===n.config.chart.type||n.globals.comboCharts&&n.config.series[s]&&"bubble"===n.config.series[s].type?a:null});a=f.pSize;var p,x=d.fillPath({seriesNumber:s,dataPointIndex:r,color:f.pointFillColor,patternUnits:"objectBoundingBox",value:n.globals.series[s][o]});if("circle"===f.shape?p=u.drawCircle(i):"square"!==f.shape&&"rect"!==f.shape||(p=u.drawRect(0,0,f.width-f.pointStrokeWidth/2,f.height-f.pointStrokeWidth/2,f.pRadius)),n.config.series[l].data[r]&&n.config.series[l].data[r].fillColor&&(x=n.config.series[l].data[r].fillColor),p.attr({x:t-f.width/2-f.pointStrokeWidth/2,y:e-f.height/2-f.pointStrokeWidth/2,cx:t,cy:e,fill:x,"fill-opacity":f.pointFillOpacity,stroke:f.pointStrokeColor,r:a,"stroke-width":f.pointStrokeWidth,"stroke-dasharray":f.pointStrokeDashArray,"stroke-opacity":f.pointStrokeOpacity}),n.config.chart.dropShadow.enabled){var y=n.config.chart.dropShadow;c.dropShadow(p,y,s)}if(!this.initialAnim||n.globals.dataChanged||n.globals.resized)n.globals.animationEnded=!0;else{var w=n.config.chart.animations.speed;h.animateMarker(p,0,"circle"===f.shape?a:{width:f.width,height:f.height},w,n.globals.easing,(function(){window.setTimeout((function(){h.animationCompleted(p)}),100)}))}if(n.globals.dataChanged&&"circle"===f.shape)if(this.dynamicAnim){var k,A,S,C,L=n.config.chart.animations.dynamicAnimation.speed;null!=(C=n.globals.previousPaths[s]&&n.globals.previousPaths[s][o])&&(k=C.x,A=C.y,S=void 0!==C.r?C.r:a);for(var P=0;P<n.globals.collapsedSeries.length;P++)n.globals.collapsedSeries[P].index===s&&(L=1,a=0);0===t&&0===e&&(a=0),h.animateCircle(p,{cx:k,cy:A,r:S},{cx:t,cy:e,r:a},L,n.globals.easing)}else p.attr({r:a});return p.attr({rel:r,j:r,index:s,"default-marker-size":a}),c.setSelectionFilter(p,s,r),g.addEvents(p),p.node.classList.add("apexcharts-marker"),p}},{key:"centerTextInBubble",value:function(t){var e=this.w;return{y:t+=parseInt(e.config.dataLabels.style.fontSize,10)/4}}}]),t}(),H=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"dataLabelsCorrection",value:function(t,e,i,a,s,r,o){var n=this.w,l=!1,h=new m(this.ctx).getTextRects(i,o),c=h.width,d=h.height;e<0&&(e=0),e>n.globals.gridHeight+d&&(e=n.globals.gridHeight+d/2),void 0===n.globals.dataLabelsRects[a]&&(n.globals.dataLabelsRects[a]=[]),n.globals.dataLabelsRects[a].push({x:t,y:e,width:c,height:d});var g=n.globals.dataLabelsRects[a].length-2,u=void 0!==n.globals.lastDrawnDataLabelsIndexes[a]?n.globals.lastDrawnDataLabelsIndexes[a][n.globals.lastDrawnDataLabelsIndexes[a].length-1]:0;if(void 0!==n.globals.dataLabelsRects[a][g]){var f=n.globals.dataLabelsRects[a][u];(t>f.x+f.width+2||e>f.y+f.height+2||t+c<f.x)&&(l=!0)}return(0===s||r)&&(l=!0),{x:t,y:e,textRects:h,drawnextLabel:l}}},{key:"drawDataLabel",value:function(t){var e=this,i=t.type,a=t.pos,s=t.i,r=t.j,o=t.isRangeStart,n=t.strokeWidth,l=void 0===n?2:n,h=this.w,c=new m(this.ctx),d=h.config.dataLabels,g=0,u=0,f=r,p=null;if(!d.enabled||!Array.isArray(a.x))return p;p=c.group({class:"apexcharts-data-labels"});for(var x=0;x<a.x.length;x++)if(g=a.x[x]+d.offsetX,u=a.y[x]+d.offsetY+l,!isNaN(g)){1===r&&0===x&&(f=0),1===r&&1===x&&(f=1);var b=h.globals.series[s][f];"rangeArea"===i&&(b=o?h.globals.seriesRangeStart[s][f]:h.globals.seriesRangeEnd[s][f]);var v="",y=function(t){return h.config.dataLabels.formatter(t,{ctx:e.ctx,seriesIndex:s,dataPointIndex:f,w:h})};if("bubble"===h.config.chart.type)v=y(b=h.globals.seriesZ[s][f]),u=a.y[x],u=new D(this.ctx).centerTextInBubble(u,s,f).y;else void 0!==b&&(v=y(b));this.plotDataLabelsText({x:g,y:u,text:v,i:s,j:f,parent:p,offsetCorrection:!0,dataLabelsConfig:h.config.dataLabels})}return p}},{key:"plotDataLabelsText",value:function(t){var e=this.w,i=new m(this.ctx),a=t.x,s=t.y,r=t.i,o=t.j,n=t.text,l=t.textAnchor,h=t.fontSize,c=t.parent,d=t.dataLabelsConfig,g=t.color,u=t.alwaysDrawDataLabel,f=t.offsetCorrection;if(!(Array.isArray(e.config.dataLabels.enabledOnSeries)&&e.config.dataLabels.enabledOnSeries.indexOf(r)<0)){var p={x:a,y:s,drawnextLabel:!0,textRects:null};f&&(p=this.dataLabelsCorrection(a,s,n,r,o,u,parseInt(d.style.fontSize,10))),e.globals.zoomed||(a=p.x,s=p.y),p.textRects&&(a<-10-p.textRects.width||a>e.globals.gridWidth+p.textRects.width+10)&&(n="");var x=e.globals.dataLabels.style.colors[r];(("bar"===e.config.chart.type||"rangeBar"===e.config.chart.type)&&e.config.plotOptions.bar.distributed||e.config.dataLabels.distributed)&&(x=e.globals.dataLabels.style.colors[o]),"function"==typeof x&&(x=x({series:e.globals.series,seriesIndex:r,dataPointIndex:o,w:e})),g&&(x=g);var b=d.offsetX,y=d.offsetY;if("bar"!==e.config.chart.type&&"rangeBar"!==e.config.chart.type||(b=0,y=0),p.drawnextLabel){var w=i.drawText({width:100,height:parseInt(d.style.fontSize,10),x:a+b,y:s+y,foreColor:x,textAnchor:l||d.textAnchor,text:n,fontSize:h||d.style.fontSize,fontFamily:d.style.fontFamily,fontWeight:d.style.fontWeight||"normal"});if(w.attr({class:"apexcharts-datalabel",cx:a,cy:s}),d.dropShadow.enabled){var k=d.dropShadow;new v(this.ctx).dropShadow(w,k)}c.add(w),void 0===e.globals.lastDrawnDataLabelsIndexes[r]&&(e.globals.lastDrawnDataLabelsIndexes[r]=[]),e.globals.lastDrawnDataLabelsIndexes[r].push(o)}}}},{key:"addBackgroundToDataLabel",value:function(t,e){var i=this.w,a=i.config.dataLabels.background,s=a.padding,r=a.padding/2,o=e.width,n=e.height,l=new m(this.ctx).drawRect(e.x-s,e.y-r/2,o+2*s,n+r,a.borderRadius,"transparent"===i.config.chart.background?"#fff":i.config.chart.background,a.opacity,a.borderWidth,a.borderColor);a.dropShadow.enabled&&new v(this.ctx).dropShadow(l,a.dropShadow);return l}},{key:"dataLabelsBackground",value:function(){var t=this.w;if("bubble"!==t.config.chart.type)for(var e=t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"),i=0;i<e.length;i++){var a=e[i],s=a.getBBox(),r=null;if(s.width&&s.height&&(r=this.addBackgroundToDataLabel(a,s)),r){a.parentNode.insertBefore(r.node,a);var o=a.getAttribute("fill");t.config.chart.animations.enabled&&!t.globals.resized&&!t.globals.dataChanged?r.animate().attr({fill:o}):r.attr({fill:o}),a.setAttribute("fill",t.config.dataLabels.background.foreColor)}}}},{key:"bringForward",value:function(){for(var t=this.w,e=t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"),i=t.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"),a=0;a<e.length;a++)i&&i.insertBefore(e[a],i.nextSibling)}}]),t}(),O=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.legendInactiveClass="legend-mouseover-inactive"}return r(t,[{key:"getAllSeriesEls",value:function(){return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series")}},{key:"getSeriesByName",value:function(t){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(x.escapeString(t),"']"))}},{key:"isSeriesHidden",value:function(t){var e=this.getSeriesByName(t),i=parseInt(e.getAttribute("data:realIndex"),10);return{isHidden:e.classList.contains("apexcharts-series-collapsed"),realIndex:i}}},{key:"addCollapsedClassToSeries",value:function(t,e){var i=this.w;function a(i){for(var a=0;a<i.length;a++)i[a].index===e&&t.node.classList.add("apexcharts-series-collapsed")}a(i.globals.collapsedSeries),a(i.globals.ancillaryCollapsedSeries)}},{key:"toggleSeries",value:function(t){var e=this.isSeriesHidden(t);return this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex,e.isHidden),e.isHidden}},{key:"showSeries",value:function(t){var e=this.isSeriesHidden(t);e.isHidden&&this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex,!0)}},{key:"hideSeries",value:function(t){var e=this.isSeriesHidden(t);e.isHidden||this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex,!1)}},{key:"resetSeries",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=this.w,s=x.clone(a.globals.initialSeries);a.globals.previousPaths=[],i?(a.globals.collapsedSeries=[],a.globals.ancillaryCollapsedSeries=[],a.globals.collapsedSeriesIndices=[],a.globals.ancillaryCollapsedSeriesIndices=[]):s=this.emptyCollapsedSeries(s),a.config.series=s,t&&(e&&(a.globals.zoomed=!1,this.ctx.updateHelpers.revertDefaultAxisMinMax()),this.ctx.updateHelpers._updateSeries(s,a.config.chart.animations.dynamicAnimation.enabled))}},{key:"emptyCollapsedSeries",value:function(t){for(var e=this.w,i=0;i<t.length;i++)e.globals.collapsedSeriesIndices.indexOf(i)>-1&&(t[i].data=[]);return t}},{key:"toggleSeriesOnHover",value:function(t,e){var i=this.w;e||(e=t.target);var a=i.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels");if("mousemove"===t.type){var s=parseInt(e.getAttribute("rel"),10)-1,r=null,o=null;i.globals.axisCharts||"radialBar"===i.config.chart.type?i.globals.axisCharts?(r=i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(s,"']")),o=i.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(s,"']"))):r=i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s+1,"']")):r=i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s+1,"'] path"));for(var n=0;n<a.length;n++)a[n].classList.add(this.legendInactiveClass);null!==r&&(i.globals.axisCharts||r.parentNode.classList.remove(this.legendInactiveClass),r.classList.remove(this.legendInactiveClass),null!==o&&o.classList.remove(this.legendInactiveClass))}else if("mouseout"===t.type)for(var l=0;l<a.length;l++)a[l].classList.remove(this.legendInactiveClass)}},{key:"highlightRangeInSeries",value:function(t,e){var i=this,a=this.w,s=a.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"),r=function(t){for(var e=0;e<s.length;e++)s[e].classList[t](i.legendInactiveClass)};if("mousemove"===t.type){var o=parseInt(e.getAttribute("rel"),10)-1;r("add"),function(t){for(var e=0;e<s.length;e++){var a=parseInt(s[e].getAttribute("val"),10);a>=t.from&&a<=t.to&&s[e].classList.remove(i.legendInactiveClass)}}(a.config.plotOptions.heatmap.colorScale.ranges[o])}else"mouseout"===t.type&&r("remove")}},{key:"getActiveConfigSeriesIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"asc",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=this.w,a=0;if(i.config.series.length>1)for(var s=i.config.series.map((function(t,a){return t.data&&t.data.length>0&&-1===i.globals.collapsedSeriesIndices.indexOf(a)&&(!i.globals.comboCharts||0===e.length||e.length&&e.indexOf(i.config.series[a].type)>-1)?a:-1})),r="asc"===t?0:s.length-1;"asc"===t?r<s.length:r>=0;"asc"===t?r++:r--)if(-1!==s[r]){a=s[r];break}return a}},{key:"getBarSeriesIndices",value:function(){return this.w.globals.comboCharts?this.w.config.series.map((function(t,e){return"bar"===t.type||"column"===t.type?e:-1})).filter((function(t){return-1!==t})):this.w.config.series.map((function(t,e){return e}))}},{key:"getPreviousPaths",value:function(){var t=this.w;function e(e,i,a){for(var s=e[i].childNodes,r={type:a,paths:[],realIndex:e[i].getAttribute("data:realIndex")},o=0;o<s.length;o++)if(s[o].hasAttribute("pathTo")){var n=s[o].getAttribute("pathTo");r.paths.push({d:n})}t.globals.previousPaths.push(r)}t.globals.previousPaths=[];["line","area","bar","rangebar","rangeArea","candlestick","radar"].forEach((function(i){for(var a,s=(a=i,t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(a,"-series .apexcharts-series"))),r=0;r<s.length;r++)e(s,r,i)})),this.handlePrevBubbleScatterPaths("bubble"),this.handlePrevBubbleScatterPaths("scatter");var i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type," .apexcharts-series"));if(i.length>0)for(var a=function(e){for(var i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type," .apexcharts-series[data\\:realIndex='").concat(e,"'] rect")),a=[],s=function(t){var e=function(e){return i[t].getAttribute(e)},s={x:parseFloat(e("x")),y:parseFloat(e("y")),width:parseFloat(e("width")),height:parseFloat(e("height"))};a.push({rect:s,color:i[t].getAttribute("color")})},r=0;r<i.length;r++)s(r);t.globals.previousPaths.push(a)},s=0;s<i.length;s++)a(s);t.globals.axisCharts||(t.globals.previousPaths=t.globals.series)}},{key:"handlePrevBubbleScatterPaths",value:function(t){var e=this.w,i=e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t,"-series .apexcharts-series"));if(i.length>0)for(var a=0;a<i.length;a++){for(var s=e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t,"-series .apexcharts-series[data\\:realIndex='").concat(a,"'] circle")),r=[],o=0;o<s.length;o++)r.push({x:s[o].getAttribute("cx"),y:s[o].getAttribute("cy"),r:s[o].getAttribute("r")});e.globals.previousPaths.push(r)}}},{key:"clearPreviousPaths",value:function(){var t=this.w;t.globals.previousPaths=[],t.globals.allSeriesCollapsed=!1}},{key:"handleNoData",value:function(){var t=this.w,e=t.config.noData,i=new m(this.ctx),a=t.globals.svgWidth/2,s=t.globals.svgHeight/2,r="middle";if(t.globals.noData=!0,t.globals.animationEnded=!0,"left"===e.align?(a=10,r="start"):"right"===e.align&&(a=t.globals.svgWidth-10,r="end"),"top"===e.verticalAlign?s=50:"bottom"===e.verticalAlign&&(s=t.globals.svgHeight-50),a+=e.offsetX,s=s+parseInt(e.style.fontSize,10)+2+e.offsetY,void 0!==e.text&&""!==e.text){var o=i.drawText({x:a,y:s,text:e.text,textAnchor:r,fontSize:e.style.fontSize,fontFamily:e.style.fontFamily,foreColor:e.style.color,opacity:1,class:"apexcharts-text-nodata"});t.globals.dom.Paper.add(o)}}},{key:"setNullSeriesToZeroValues",value:function(t){for(var e=this.w,i=0;i<t.length;i++)if(0===t[i].length)for(var a=0;a<t[e.globals.maxValsInArrayIndex].length;a++)t[i].push(0);return t}},{key:"hasAllSeriesEqualX",value:function(){for(var t=!0,e=this.w,i=this.filteredSeriesX(),a=0;a<i.length-1;a++)if(i[a][0]!==i[a+1][0]){t=!1;break}return e.globals.allSeriesHasEqualX=t,t}},{key:"filteredSeriesX",value:function(){var t=this.w.globals.seriesX.map((function(t){return t.length>0?t:[]}));return t}}]),t}(),N=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.twoDSeries=[],this.threeDSeries=[],this.twoDSeriesX=[],this.seriesGoals=[],this.coreUtils=new y(this.ctx)}return r(t,[{key:"isMultiFormat",value:function(){return this.isFormatXY()||this.isFormat2DArray()}},{key:"isFormatXY",value:function(){var t=this.w.config.series.slice(),e=new O(this.ctx);if(this.activeSeriesIndex=e.getActiveConfigSeriesIndex(),void 0!==t[this.activeSeriesIndex].data&&t[this.activeSeriesIndex].data.length>0&&null!==t[this.activeSeriesIndex].data[0]&&void 0!==t[this.activeSeriesIndex].data[0].x&&null!==t[this.activeSeriesIndex].data[0])return!0}},{key:"isFormat2DArray",value:function(){var t=this.w.config.series.slice(),e=new O(this.ctx);if(this.activeSeriesIndex=e.getActiveConfigSeriesIndex(),void 0!==t[this.activeSeriesIndex].data&&t[this.activeSeriesIndex].data.length>0&&void 0!==t[this.activeSeriesIndex].data[0]&&null!==t[this.activeSeriesIndex].data[0]&&t[this.activeSeriesIndex].data[0].constructor===Array)return!0}},{key:"handleFormat2DArray",value:function(t,e){for(var i=this.w.config,a=this.w.globals,s="boxPlot"===i.chart.type||"boxPlot"===i.series[e].type,r=0;r<t[e].data.length;r++)if(void 0!==t[e].data[r][1]&&(Array.isArray(t[e].data[r][1])&&4===t[e].data[r][1].length&&!s?this.twoDSeries.push(x.parseNumber(t[e].data[r][1][3])):t[e].data[r].length>=5?this.twoDSeries.push(x.parseNumber(t[e].data[r][4])):this.twoDSeries.push(x.parseNumber(t[e].data[r][1])),a.dataFormatXNumeric=!0),"datetime"===i.xaxis.type){var o=new Date(t[e].data[r][0]);o=new Date(o).getTime(),this.twoDSeriesX.push(o)}else this.twoDSeriesX.push(t[e].data[r][0]);for(var n=0;n<t[e].data.length;n++)void 0!==t[e].data[n][2]&&(this.threeDSeries.push(t[e].data[n][2]),a.isDataXYZ=!0)}},{key:"handleFormatXY",value:function(t,e){var i=this.w.config,a=this.w.globals,s=new T(this.ctx),r=e;a.collapsedSeriesIndices.indexOf(e)>-1&&(r=this.activeSeriesIndex);for(var o=0;o<t[e].data.length;o++)void 0!==t[e].data[o].y&&(Array.isArray(t[e].data[o].y)?this.twoDSeries.push(x.parseNumber(t[e].data[o].y[t[e].data[o].y.length-1])):this.twoDSeries.push(x.parseNumber(t[e].data[o].y))),void 0!==t[e].data[o].goals&&Array.isArray(t[e].data[o].goals)?(void 0===this.seriesGoals[e]&&(this.seriesGoals[e]=[]),this.seriesGoals[e].push(t[e].data[o].goals)):(void 0===this.seriesGoals[e]&&(this.seriesGoals[e]=[]),this.seriesGoals[e].push(null));for(var n=0;n<t[r].data.length;n++){var l="string"==typeof t[r].data[n].x,h=Array.isArray(t[r].data[n].x),c=!h&&!!s.isValidDate(t[r].data[n].x.toString());if(l||c)if(l||i.xaxis.convertedCatToNumeric){var d=a.isBarHorizontal&&a.isRangeData;"datetime"!==i.xaxis.type||d?(this.fallbackToCategory=!0,this.twoDSeriesX.push(t[r].data[n].x)):this.twoDSeriesX.push(s.parseDate(t[r].data[n].x))}else"datetime"===i.xaxis.type?this.twoDSeriesX.push(s.parseDate(t[r].data[n].x.toString())):(a.dataFormatXNumeric=!0,a.isXNumeric=!0,this.twoDSeriesX.push(parseFloat(t[r].data[n].x)));else h?(this.fallbackToCategory=!0,this.twoDSeriesX.push(t[r].data[n].x)):(a.isXNumeric=!0,a.dataFormatXNumeric=!0,this.twoDSeriesX.push(t[r].data[n].x))}if(t[e].data[0]&&void 0!==t[e].data[0].z){for(var g=0;g<t[e].data.length;g++)this.threeDSeries.push(t[e].data[g].z);a.isDataXYZ=!0}}},{key:"handleRangeData",value:function(t,e){var i=this.w.globals,a={};return this.isFormat2DArray()?a=this.handleRangeDataFormat("array",t,e):this.isFormatXY()&&(a=this.handleRangeDataFormat("xy",t,e)),i.seriesRangeStart.push(a.start),i.seriesRangeEnd.push(a.end),i.seriesRange.push(a.rangeUniques),i.seriesRange.forEach((function(t,e){t&&t.forEach((function(t,e){t.y.forEach((function(e,i){for(var a=0;a<t.y.length;a++)if(i!==a){var s=e.y1,r=e.y2,o=t.y[a].y1;s<=t.y[a].y2&&o<=r&&(t.overlaps.indexOf(e.rangeName)<0&&t.overlaps.push(e.rangeName),t.overlaps.indexOf(t.y[a].rangeName)<0&&t.overlaps.push(t.y[a].rangeName))}}))}))})),a}},{key:"handleCandleStickBoxData",value:function(t,e){var i=this.w.globals,a={};return this.isFormat2DArray()?a=this.handleCandleStickBoxDataFormat("array",t,e):this.isFormatXY()&&(a=this.handleCandleStickBoxDataFormat("xy",t,e)),i.seriesCandleO[e]=a.o,i.seriesCandleH[e]=a.h,i.seriesCandleM[e]=a.m,i.seriesCandleL[e]=a.l,i.seriesCandleC[e]=a.c,a}},{key:"handleRangeDataFormat",value:function(t,e,i){var a=[],s=[],r=e[i].data.filter((function(t,e,i){return e===i.findIndex((function(e){return e.x===t.x}))})).map((function(t,e){return{x:t.x,overlaps:[],y:[]}}));if("array"===t)for(var o=0;o<e[i].data.length;o++)Array.isArray(e[i].data[o])?(a.push(e[i].data[o][1][0]),s.push(e[i].data[o][1][1])):(a.push(e[i].data[o]),s.push(e[i].data[o]));else if("xy"===t)for(var n=function(t){var o=Array.isArray(e[i].data[t].y),n=x.randomId(),l=e[i].data[t].x,h={y1:o?e[i].data[t].y[0]:e[i].data[t].y,y2:o?e[i].data[t].y[1]:e[i].data[t].y,rangeName:n};e[i].data[t].rangeName=n;var c=r.findIndex((function(t){return t.x===l}));r[c].y.push(h),a.push(h.y1),s.push(h.y2)},l=0;l<e[i].data.length;l++)n(l);return{start:a,end:s,rangeUniques:r}}},{key:"handleCandleStickBoxDataFormat",value:function(t,e,i){var a=this.w,s="boxPlot"===a.config.chart.type||"boxPlot"===a.config.series[i].type,r=[],o=[],n=[],l=[],h=[];if("array"===t)if(s&&6===e[i].data[0].length||!s&&5===e[i].data[0].length)for(var c=0;c<e[i].data.length;c++)r.push(e[i].data[c][1]),o.push(e[i].data[c][2]),s?(n.push(e[i].data[c][3]),l.push(e[i].data[c][4]),h.push(e[i].data[c][5])):(l.push(e[i].data[c][3]),h.push(e[i].data[c][4]));else for(var d=0;d<e[i].data.length;d++)Array.isArray(e[i].data[d][1])&&(r.push(e[i].data[d][1][0]),o.push(e[i].data[d][1][1]),s?(n.push(e[i].data[d][1][2]),l.push(e[i].data[d][1][3]),h.push(e[i].data[d][1][4])):(l.push(e[i].data[d][1][2]),h.push(e[i].data[d][1][3])));else if("xy"===t)for(var g=0;g<e[i].data.length;g++)Array.isArray(e[i].data[g].y)&&(r.push(e[i].data[g].y[0]),o.push(e[i].data[g].y[1]),s?(n.push(e[i].data[g].y[2]),l.push(e[i].data[g].y[3]),h.push(e[i].data[g].y[4])):(l.push(e[i].data[g].y[2]),h.push(e[i].data[g].y[3])));return{o:r,h:o,m:n,l:l,c:h}}},{key:"parseDataAxisCharts",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ctx,a=this.w.config,s=this.w.globals,r=new T(i),o=a.labels.length>0?a.labels.slice():a.xaxis.categories.slice();s.isRangeBar="rangeBar"===a.chart.type&&s.isBarHorizontal,s.hasGroups="category"===a.xaxis.type&&a.xaxis.group.groups.length>0,s.hasGroups&&(s.groups=a.xaxis.group.groups);for(var n=function(){for(var t=0;t<o.length;t++)if("string"==typeof o[t]){if(!r.isValidDate(o[t]))throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");e.twoDSeriesX.push(r.parseDate(o[t]))}else e.twoDSeriesX.push(o[t])},l=0;l<t.length;l++){if(this.twoDSeries=[],this.twoDSeriesX=[],this.threeDSeries=[],void 0===t[l].data)return void console.error("It is a possibility that you may have not included 'data' property in series.");if("rangeBar"!==a.chart.type&&"rangeArea"!==a.chart.type&&"rangeBar"!==t[l].type&&"rangeArea"!==t[l].type||(s.isRangeData=!0,s.isComboCharts?"rangeBar"!==t[l].type&&"rangeArea"!==t[l].type||this.handleRangeData(t,l):"rangeBar"!==a.chart.type&&"rangeArea"!==a.chart.type||this.handleRangeData(t,l)),this.isMultiFormat())this.isFormat2DArray()?this.handleFormat2DArray(t,l):this.isFormatXY()&&this.handleFormatXY(t,l),"candlestick"!==a.chart.type&&"candlestick"!==t[l].type&&"boxPlot"!==a.chart.type&&"boxPlot"!==t[l].type||this.handleCandleStickBoxData(t,l),s.series.push(this.twoDSeries),s.labels.push(this.twoDSeriesX),s.seriesX.push(this.twoDSeriesX),s.seriesGoals=this.seriesGoals,l!==this.activeSeriesIndex||this.fallbackToCategory||(s.isXNumeric=!0);else{"datetime"===a.xaxis.type?(s.isXNumeric=!0,n(),s.seriesX.push(this.twoDSeriesX)):"numeric"===a.xaxis.type&&(s.isXNumeric=!0,o.length>0&&(this.twoDSeriesX=o,s.seriesX.push(this.twoDSeriesX))),s.labels.push(this.twoDSeriesX);var h=t[l].data.map((function(t){return x.parseNumber(t)}));s.series.push(h)}s.seriesZ.push(this.threeDSeries),void 0!==t[l].name?s.seriesNames.push(t[l].name):s.seriesNames.push("series-"+parseInt(l+1,10)),void 0!==t[l].color?s.seriesColors.push(t[l].color):s.seriesColors.push(void 0)}return this.w}},{key:"parseDataNonAxisCharts",value:function(t){var e=this.w.globals,i=this.w.config;e.series=t.slice(),e.seriesNames=i.labels.slice();for(var a=0;a<e.series.length;a++)void 0===e.seriesNames[a]&&e.seriesNames.push("series-"+(a+1));return this.w}},{key:"handleExternalLabelsData",value:function(t){var e=this.w.config,i=this.w.globals;if(e.xaxis.categories.length>0)i.labels=e.xaxis.categories;else if(e.labels.length>0)i.labels=e.labels.slice();else if(this.fallbackToCategory){if(i.labels=i.labels[0],i.seriesRange.length&&(i.seriesRange.map((function(t){t.forEach((function(t){i.labels.indexOf(t.x)<0&&t.x&&i.labels.push(t.x)}))})),i.labels=i.labels.filter((function(t,e,i){return i.indexOf(t)===e}))),e.xaxis.convertedCatToNumeric)new z(e).convertCatToNumericXaxis(e,this.ctx,i.seriesX[0]),this._generateExternalLabels(t)}else this._generateExternalLabels(t)}},{key:"_generateExternalLabels",value:function(t){var e=this.w.globals,i=this.w.config,a=[];if(e.axisCharts){if(e.series.length>0)if(this.isFormatXY())for(var s=i.series.map((function(t,e){return t.data.filter((function(t,e,i){return i.findIndex((function(e){return e.x===t.x}))===e}))})),r=s.reduce((function(t,e,i,a){return a[t].length>e.length?t:i}),0),o=0;o<s[r].length;o++)a.push(o+1);else for(var n=0;n<e.series[e.maxValsInArrayIndex].length;n++)a.push(n+1);e.seriesX=[];for(var l=0;l<t.length;l++)e.seriesX.push(a);e.isXNumeric=!0}if(0===a.length){a=e.axisCharts?[]:e.series.map((function(t,e){return e+1}));for(var h=0;h<t.length;h++)e.seriesX.push(a)}e.labels=a,i.xaxis.convertedCatToNumeric&&(e.categoryLabels=a.map((function(t){return i.xaxis.labels.formatter(t)}))),e.noLabelsProvided=!0}},{key:"parseData",value:function(t){var e=this.w,i=e.config,a=e.globals;if(this.excludeCollapsedSeriesInYAxis(),this.fallbackToCategory=!1,this.ctx.core.resetGlobals(),this.ctx.core.isMultipleY(),a.axisCharts?(this.parseDataAxisCharts(t),this.coreUtils.getLargestSeries()):this.parseDataNonAxisCharts(t),"bar"===i.chart.type&&i.chart.stacked){var s=new O(this.ctx);a.series=s.setNullSeriesToZeroValues(a.series)}this.coreUtils.getSeriesTotals(),a.axisCharts&&(a.stackedSeriesTotals=this.coreUtils.getStackedSeriesTotals()),this.coreUtils.getPercentSeries(),a.dataFormatXNumeric||a.isXNumeric&&("numeric"!==i.xaxis.type||0!==i.labels.length||0!==i.xaxis.categories.length)||this.handleExternalLabelsData(t);for(var r=this.coreUtils.getCategoryLabels(a.labels),o=0;o<r.length;o++)if(Array.isArray(r[o])){a.isMultiLineX=!0;break}}},{key:"excludeCollapsedSeriesInYAxis",value:function(){var t=this,e=this.w;e.globals.ignoreYAxisIndexes=e.globals.collapsedSeries.map((function(i,a){if(t.w.globals.isMultipleYAxis&&!e.config.chart.stacked)return i.index}))}}]),t}(),W=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.tooltipKeyFormat="dd MMM"}return r(t,[{key:"xLabelFormat",value:function(t,e,i,a){var s=this.w;if("datetime"===s.config.xaxis.type&&void 0===s.config.xaxis.labels.formatter&&void 0===s.config.tooltip.x.formatter){var r=new T(this.ctx);return r.formatDate(r.getDate(e),s.config.tooltip.x.format)}return t(e,i,a)}},{key:"defaultGeneralFormatter",value:function(t){return Array.isArray(t)?t.map((function(t){return t})):t}},{key:"defaultYFormatter",value:function(t,e,i){var a=this.w;return x.isNumber(t)&&(t=0!==a.globals.yValueDecimal?t.toFixed(void 0!==e.decimalsInFloat?e.decimalsInFloat:a.globals.yValueDecimal):a.globals.maxYArr[i]-a.globals.minYArr[i]<5?t.toFixed(1):t.toFixed(0)),t}},{key:"setLabelFormatters",value:function(){var t=this,e=this.w;return e.globals.xaxisTooltipFormatter=function(e){return t.defaultGeneralFormatter(e)},e.globals.ttKeyFormatter=function(e){return t.defaultGeneralFormatter(e)},e.globals.ttZFormatter=function(t){return t},e.globals.legendFormatter=function(e){return t.defaultGeneralFormatter(e)},void 0!==e.config.xaxis.labels.formatter?e.globals.xLabelFormatter=e.config.xaxis.labels.formatter:e.globals.xLabelFormatter=function(t){if(x.isNumber(t)){if(!e.config.xaxis.convertedCatToNumeric&&"numeric"===e.config.xaxis.type){if(x.isNumber(e.config.xaxis.decimalsInFloat))return t.toFixed(e.config.xaxis.decimalsInFloat);var i=e.globals.maxX-e.globals.minX;return i>0&&i<100?t.toFixed(1):t.toFixed(0)}if(e.globals.isBarHorizontal)if(e.globals.maxY-e.globals.minYArr<4)return t.toFixed(1);return t.toFixed(0)}return t},"function"==typeof e.config.tooltip.x.formatter?e.globals.ttKeyFormatter=e.config.tooltip.x.formatter:e.globals.ttKeyFormatter=e.globals.xLabelFormatter,"function"==typeof e.config.xaxis.tooltip.formatter&&(e.globals.xaxisTooltipFormatter=e.config.xaxis.tooltip.formatter),(Array.isArray(e.config.tooltip.y)||void 0!==e.config.tooltip.y.formatter)&&(e.globals.ttVal=e.config.tooltip.y),void 0!==e.config.tooltip.z.formatter&&(e.globals.ttZFormatter=e.config.tooltip.z.formatter),void 0!==e.config.legend.formatter&&(e.globals.legendFormatter=e.config.legend.formatter),e.config.yaxis.forEach((function(i,a){void 0!==i.labels.formatter?e.globals.yLabelFormatters[a]=i.labels.formatter:e.globals.yLabelFormatters[a]=function(s){return e.globals.xyCharts?Array.isArray(s)?s.map((function(e){return t.defaultYFormatter(e,i,a)})):t.defaultYFormatter(s,i,a):s}})),e.globals}},{key:"heatmapLabelFormatters",value:function(){var t=this.w;if("heatmap"===t.config.chart.type){t.globals.yAxisScale[0].result=t.globals.seriesNames.slice();var e=t.globals.seriesNames.reduce((function(t,e){return t.length>e.length?t:e}),0);t.globals.yAxisScale[0].niceMax=e,t.globals.yAxisScale[0].niceMin=e}}}]),t}(),B=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"getLabel",value:function(t,e,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"12px",o=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],n=this.w,l=void 0===t[a]?"":t[a],h=l,c=n.globals.xLabelFormatter,d=n.config.xaxis.labels.formatter,g=!1,u=new W(this.ctx),f=l;o&&(h=u.xLabelFormat(c,l,f,{i:a,dateFormatter:new T(this.ctx).formatDate,w:n}),void 0!==d&&(h=d(l,t[a],{i:a,dateFormatter:new T(this.ctx).formatDate,w:n})));var p=function(t){var i=null;return e.forEach((function(t){"month"===t.unit?i="year":"day"===t.unit?i="month":"hour"===t.unit?i="day":"minute"===t.unit&&(i="hour")})),i===t};e.length>0?(g=p(e[a].unit),i=e[a].position,h=e[a].value):"datetime"===n.config.xaxis.type&&void 0===d&&(h=""),void 0===h&&(h=""),h=Array.isArray(h)?h:h.toString();var x=new m(this.ctx),b={};b=n.globals.rotateXLabels&&o?x.getTextRects(h,parseInt(r,10),null,"rotate(".concat(n.config.xaxis.labels.rotate," 0 0)"),!1):x.getTextRects(h,parseInt(r,10));var v=!n.config.xaxis.labels.showDuplicates&&this.ctx.timeScale;return!Array.isArray(h)&&(0===h.indexOf("NaN")||0===h.toLowerCase().indexOf("invalid")||h.toLowerCase().indexOf("infinity")>=0||s.indexOf(h)>=0&&v)&&(h=""),{x:i,text:h,textRect:b,isBold:g}}},{key:"checkLabelBasedOnTickamount",value:function(t,e,i){var a=this.w,s=a.config.xaxis.tickAmount;return"dataPoints"===s&&(s=Math.round(a.globals.gridWidth/120)),s>i||t%Math.round(i/(s+1))==0||(e.text=""),e}},{key:"checkForOverflowingLabels",value:function(t,e,i,a,s){var r=this.w;if(0===t&&r.globals.skipFirstTimelinelabel&&(e.text=""),t===i-1&&r.globals.skipLastTimelinelabel&&(e.text=""),r.config.xaxis.labels.hideOverlappingLabels&&a.length>0){var o=s[s.length-1];e.x<o.textRect.width/(r.globals.rotateXLabels?Math.abs(r.config.xaxis.labels.rotate)/12:1.01)+o.x&&(e.text="")}return e}},{key:"checkForReversedLabels",value:function(t,e){var i=this.w;return i.config.yaxis[t]&&i.config.yaxis[t].reversed&&e.reverse(),e}},{key:"isYAxisHidden",value:function(t){var e=this.w,i=new y(this.ctx);return!e.config.yaxis[t].show||!e.config.yaxis[t].showForNullSeries&&i.isSeriesNull(t)&&-1===e.globals.collapsedSeriesIndices.indexOf(t)}},{key:"getYAxisForeColor",value:function(t,e){var i=this.w;return Array.isArray(t)&&i.globals.yAxisScale[e]&&this.ctx.theme.pushExtraColors(t,i.globals.yAxisScale[e].result.length,!1),t}},{key:"drawYAxisTicks",value:function(t,e,i,a,s,r,o){var n=this.w,l=new m(this.ctx),h=n.globals.translateY;if(a.show&&e>0){!0===n.config.yaxis[s].opposite&&(t+=a.width);for(var c=e;c>=0;c--){var d=h+e/10+n.config.yaxis[s].labels.offsetY-1;n.globals.isBarHorizontal&&(d=r*c),"heatmap"===n.config.chart.type&&(d+=r/2);var g=l.drawLine(t+i.offsetX-a.width+a.offsetX,d+a.offsetY,t+i.offsetX+a.offsetX,d+a.offsetY,a.color);o.add(g),h+=r}}}}]),t}(),G=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"scaleSvgNode",value:function(t,e){var i=parseFloat(t.getAttributeNS(null,"width")),a=parseFloat(t.getAttributeNS(null,"height"));t.setAttributeNS(null,"width",i*e),t.setAttributeNS(null,"height",a*e),t.setAttributeNS(null,"viewBox","0 0 "+i+" "+a)}},{key:"fixSvgStringForIe11",value:function(t){if(!x.isIE11())return t.replace(/&nbsp;/g,"&#160;");var e=0,i=t.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g,(function(t){return 2===++e?'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev"':t}));return i=(i=i.replace(/xmlns:NS\d+=""/g,"")).replace(/NS\d+:(\w+:\w+=")/g,"$1")}},{key:"getSvgString",value:function(t){null==t&&(t=1);var e=this.w.globals.dom.Paper.svg();if(1!==t){var i=this.w.globals.dom.Paper.node.cloneNode(!0);this.scaleSvgNode(i,t),e=(new XMLSerializer).serializeToString(i)}return this.fixSvgStringForIe11(e)}},{key:"cleanup",value:function(){var t=this.w,e=t.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"),i=t.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");Array.prototype.forEach.call(a,(function(t){t.setAttribute("width",0)})),e&&e[0]&&(e[0].setAttribute("x",-500),e[0].setAttribute("x1",-500),e[0].setAttribute("x2",-500)),i&&i[0]&&(i[0].setAttribute("y",-100),i[0].setAttribute("y1",-100),i[0].setAttribute("y2",-100))}},{key:"svgUrl",value:function(){this.cleanup();var t=this.getSvgString(),e=new Blob([t],{type:"image/svg+xml;charset=utf-8"});return URL.createObjectURL(e)}},{key:"dataURI",value:function(t){var e=this;return new Promise((function(i){var a=e.w,s=t?t.scale||t.width/a.globals.svgWidth:1;e.cleanup();var r=document.createElement("canvas");r.width=a.globals.svgWidth*s,r.height=parseInt(a.globals.dom.elWrap.style.height,10)*s;var o="transparent"===a.config.chart.background?"#fff":a.config.chart.background,n=r.getContext("2d");n.fillStyle=o,n.fillRect(0,0,r.width*s,r.height*s);var l=e.getSvgString(s);if(window.canvg&&x.isIE11()){var h=window.canvg.Canvg.fromString(n,l,{ignoreClear:!0,ignoreDimensions:!0});h.start();var c=r.msToBlob();h.stop(),i({blob:c})}else{var d="data:image/svg+xml,"+encodeURIComponent(l),g=new Image;g.crossOrigin="anonymous",g.onload=function(){if(n.drawImage(g,0,0),r.msToBlob){var t=r.msToBlob();i({blob:t})}else{var e=r.toDataURL("image/png");i({imgURI:e})}},g.src=d}}))}},{key:"exportToSVG",value:function(){this.triggerDownload(this.svgUrl(),this.w.config.chart.toolbar.export.svg.filename,".svg")}},{key:"exportToPng",value:function(){var t=this;this.dataURI().then((function(e){var i=e.imgURI,a=e.blob;a?navigator.msSaveOrOpenBlob(a,t.w.globals.chartID+".png"):t.triggerDownload(i,t.w.config.chart.toolbar.export.png.filename,".png")}))}},{key:"exportToCSV",value:function(t){var e=this,i=t.series,a=t.fileName,s=t.columnDelimiter,r=void 0===s?",":s,o=t.lineDelimiter,n=void 0===o?"\n":o,l=this.w;i||(i=l.config.series);var h=[],c=[],d="",g=l.globals.series.map((function(t,e){return-1===l.globals.collapsedSeriesIndices.indexOf(e)?t:[]})),f=Math.max.apply(Math,u(i.map((function(t){return t.data?t.data.length:0})))),p=new N(this.ctx),b=new B(this.ctx),v=function(t){var i="";if(l.globals.axisCharts){if("category"===l.config.xaxis.type||l.config.xaxis.convertedCatToNumeric)if(l.globals.isBarHorizontal){var a=l.globals.yLabelFormatters[0],s=new O(e.ctx).getActiveConfigSeriesIndex();i=a(l.globals.labels[t],{seriesIndex:s,dataPointIndex:t,w:l})}else i=b.getLabel(l.globals.labels,l.globals.timescaleLabels,0,t).text;"datetime"===l.config.xaxis.type&&(l.config.xaxis.categories.length?i=l.config.xaxis.categories[t]:l.config.labels.length&&(i=l.config.labels[t]))}else i=l.config.labels[t];return Array.isArray(i)&&(i=i.join(" ")),x.isNumber(i)?i:i.split(r).join("")},m=function(t,e){if(h.length&&0===e&&c.push(h.join(r)),t.data){t.data=t.data.length&&t.data||u(Array(f)).map((function(){return""}));for(var a=0;a<t.data.length;a++){h=[];var s=v(a);if(s||(p.isFormatXY()?s=i[e].data[a].x:p.isFormat2DArray()&&(s=i[e].data[a]?i[e].data[a][0]:"")),0===e){h.push((n=s,"datetime"===l.config.xaxis.type&&String(n).length>=10?l.config.chart.toolbar.export.csv.dateFormatter(s):x.isNumber(s)?s:s.split(r).join("")));for(var o=0;o<l.globals.series.length;o++)p.isFormatXY()?h.push(i[o].data[a].y):h.push(g[o][a])}("candlestick"===l.config.chart.type||t.type&&"candlestick"===t.type)&&(h.pop(),h.push(l.globals.seriesCandleO[e][a]),h.push(l.globals.seriesCandleH[e][a]),h.push(l.globals.seriesCandleL[e][a]),h.push(l.globals.seriesCandleC[e][a])),("boxPlot"===l.config.chart.type||t.type&&"boxPlot"===t.type)&&(h.pop(),h.push(l.globals.seriesCandleO[e][a]),h.push(l.globals.seriesCandleH[e][a]),h.push(l.globals.seriesCandleM[e][a]),h.push(l.globals.seriesCandleL[e][a]),h.push(l.globals.seriesCandleC[e][a])),"rangeBar"===l.config.chart.type&&(h.pop(),h.push(l.globals.seriesRangeStart[e][a]),h.push(l.globals.seriesRangeEnd[e][a])),h.length&&c.push(h.join(r))}}var n};h.push(l.config.chart.toolbar.export.csv.headerCategory),"boxPlot"===l.config.chart.type?(h.push("minimum"),h.push("q1"),h.push("median"),h.push("q3"),h.push("maximum")):"candlestick"===l.config.chart.type?(h.push("open"),h.push("high"),h.push("low"),h.push("close")):"rangeBar"===l.config.chart.type?(h.push("minimum"),h.push("maximum")):i.map((function(t,e){var i=t.name?t.name:"series-".concat(e);l.globals.axisCharts&&h.push(i.split(r).join("")?i.split(r).join(""):"series-".concat(e))})),l.globals.axisCharts||(h.push(l.config.chart.toolbar.export.csv.headerValue),c.push(h.join(r))),i.map((function(t,e){l.globals.axisCharts?m(t,e):((h=[]).push(l.globals.labels[e].split(r).join("")),h.push(g[e]),c.push(h.join(r)))})),d+=c.join(n),this.triggerDownload("data:text/csv; charset=utf-8,"+encodeURIComponent("\ufeff"+d),a||l.config.chart.toolbar.export.csv.filename,".csv")}},{key:"triggerDownload",value:function(t,e,i){var a=document.createElement("a");a.href=t,a.download=(e||this.w.globals.chartID)+i,document.body.appendChild(a),a.click(),document.body.removeChild(a)}}]),t}(),V=function(){function t(e,i){a(this,t),this.ctx=e,this.elgrid=i,this.w=e.w;var s=this.w;this.axesUtils=new B(e),this.xaxisLabels=s.globals.labels.slice(),s.globals.timescaleLabels.length>0&&!s.globals.isBarHorizontal&&(this.xaxisLabels=s.globals.timescaleLabels.slice()),s.config.xaxis.overwriteCategories&&(this.xaxisLabels=s.config.xaxis.overwriteCategories),this.drawnLabels=[],this.drawnLabelsRects=[],"top"===s.config.xaxis.position?this.offY=0:this.offY=s.globals.gridHeight+1,this.offY=this.offY+s.config.xaxis.axisBorder.offsetY,this.isCategoryBarHorizontal="bar"===s.config.chart.type&&s.config.plotOptions.bar.horizontal,this.xaxisFontSize=s.config.xaxis.labels.style.fontSize,this.xaxisFontFamily=s.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=s.config.xaxis.labels.style.colors,this.xaxisBorderWidth=s.config.xaxis.axisBorder.width,this.isCategoryBarHorizontal&&(this.xaxisBorderWidth=s.config.yaxis[0].axisBorder.width.toString()),this.xaxisBorderWidth.indexOf("%")>-1?this.xaxisBorderWidth=s.globals.gridWidth*parseInt(this.xaxisBorderWidth,10)/100:this.xaxisBorderWidth=parseInt(this.xaxisBorderWidth,10),this.xaxisBorderHeight=s.config.xaxis.axisBorder.height,this.yaxis=s.config.yaxis[0]}return r(t,[{key:"drawXaxis",value:function(){var t=this.w,e=new m(this.ctx),i=e.group({class:"apexcharts-xaxis",transform:"translate(".concat(t.config.xaxis.offsetX,", ").concat(t.config.xaxis.offsetY,")")}),a=e.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(t.globals.translateXAxisX,", ").concat(t.globals.translateXAxisY,")")});i.add(a);for(var s=[],r=0;r<this.xaxisLabels.length;r++)s.push(this.xaxisLabels[r]);if(this.drawXAxisLabelAndGroup(!0,e,a,s,t.globals.isXNumeric,(function(t,e){return e})),t.globals.hasGroups){var o=t.globals.groups;s=[];for(var n=0;n<o.length;n++)s.push(o[n].title);var l={};t.config.xaxis.group.style&&(l.xaxisFontSize=t.config.xaxis.group.style.fontSize,l.xaxisFontFamily=t.config.xaxis.group.style.fontFamily,l.xaxisForeColors=t.config.xaxis.group.style.colors,l.fontWeight=t.config.xaxis.group.style.fontWeight,l.cssClass=t.config.xaxis.group.style.cssClass),this.drawXAxisLabelAndGroup(!1,e,a,s,!1,(function(t,e){return o[t].cols*e}),l)}if(void 0!==t.config.xaxis.title.text){var h=e.group({class:"apexcharts-xaxis-title"}),c=e.drawText({x:t.globals.gridWidth/2+t.config.xaxis.title.offsetX,y:this.offY+parseFloat(this.xaxisFontSize)+("bottom"===t.config.xaxis.title.position?t.globals.xAxisLabelsHeight:-t.globals.xAxisLabelsHeight-10)+t.config.xaxis.title.offsetY,text:t.config.xaxis.title.text,textAnchor:"middle",fontSize:t.config.xaxis.title.style.fontSize,fontFamily:t.config.xaxis.title.style.fontFamily,fontWeight:t.config.xaxis.title.style.fontWeight,foreColor:t.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text "+t.config.xaxis.title.style.cssClass});h.add(c),i.add(h)}if(t.config.xaxis.axisBorder.show){var d=t.globals.barPadForNumericAxis,g=e.drawLine(t.globals.padHorizontal+t.config.xaxis.axisBorder.offsetX-d,this.offY,this.xaxisBorderWidth+d,this.offY,t.config.xaxis.axisBorder.color,0,this.xaxisBorderHeight);this.elgrid&&this.elgrid.elGridBorders?this.elgrid.elGridBorders.add(g):i.add(g)}return i}},{key:"drawXAxisLabelAndGroup",value:function(t,e,i,a,s,r){var o,n=this,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{},h=[],c=[],d=this.w,g=l.xaxisFontSize||this.xaxisFontSize,u=l.xaxisFontFamily||this.xaxisFontFamily,f=l.xaxisForeColors||this.xaxisForeColors,p=l.fontWeight||d.config.xaxis.labels.style.fontWeight,x=l.cssClass||d.config.xaxis.labels.style.cssClass,b=d.globals.padHorizontal,v=a.length,m="category"===d.config.xaxis.type?d.globals.dataPoints:v;if(0===m&&v>m&&(m=v),s){var y=m>1?m-1:m;o=d.globals.gridWidth/y,b=b+r(0,o)/2+d.config.xaxis.labels.offsetX}else o=d.globals.gridWidth/m,b=b+r(0,o)+d.config.xaxis.labels.offsetX;for(var w=function(s){var l=b-r(s,o)/2+d.config.xaxis.labels.offsetX;0===s&&1===v&&o/2===b&&1===m&&(l=d.globals.gridWidth/2);var y=n.axesUtils.getLabel(a,d.globals.timescaleLabels,l,s,h,g,t),w=28;d.globals.rotateXLabels&&t&&(w=22),d.config.xaxis.title.text&&"top"===d.config.xaxis.position&&(w+=parseFloat(d.config.xaxis.title.style.fontSize)+2),t||(w=w+parseFloat(g)+(d.globals.xAxisLabelsHeight-d.globals.xAxisGroupLabelsHeight)+(d.globals.rotateXLabels?10:0)),y=void 0!==d.config.xaxis.tickAmount&&"dataPoints"!==d.config.xaxis.tickAmount&&"datetime"!==d.config.xaxis.type?n.axesUtils.checkLabelBasedOnTickamount(s,y,v):n.axesUtils.checkForOverflowingLabels(s,y,v,h,c);if(t&&y.text&&d.globals.xaxisLabelsCount++,d.config.xaxis.labels.show){var k=e.drawText({x:y.x,y:n.offY+d.config.xaxis.labels.offsetY+w-("top"===d.config.xaxis.position?d.globals.xAxisHeight+d.config.xaxis.axisTicks.height-2:0),text:y.text,textAnchor:"middle",fontWeight:y.isBold?600:p,fontSize:g,fontFamily:u,foreColor:Array.isArray(f)?t&&d.config.xaxis.convertedCatToNumeric?f[d.globals.minX+s-1]:f[s]:f,isPlainText:!1,cssClass:(t?"apexcharts-xaxis-label ":"apexcharts-xaxis-group-label ")+x});if(i.add(k),k.on("click",(function(t){if("function"==typeof d.config.chart.events.xAxisLabelClick){var e=Object.assign({},d,{labelIndex:s});d.config.chart.events.xAxisLabelClick(t,n.ctx,e)}})),t){var A=document.createElementNS(d.globals.SVGNS,"title");A.textContent=Array.isArray(y.text)?y.text.join(" "):y.text,k.node.appendChild(A),""!==y.text&&(h.push(y.text),c.push(y))}}s<v-1&&(b+=r(s+1,o))},k=0;k<=v-1;k++)w(k)}},{key:"drawXaxisInversed",value:function(t){var e,i,a=this,s=this.w,r=new m(this.ctx),o=s.config.yaxis[0].opposite?s.globals.translateYAxisX[t]:0,n=r.group({class:"apexcharts-yaxis apexcharts-xaxis-inversed",rel:t}),l=r.group({class:"apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",transform:"translate("+o+", 0)"});n.add(l);var h=[];if(s.config.yaxis[t].show)for(var c=0;c<this.xaxisLabels.length;c++)h.push(this.xaxisLabels[c]);e=s.globals.gridHeight/h.length,i=-e/2.2;var d=s.globals.yLabelFormatters[0],g=s.config.yaxis[0].labels;if(g.show)for(var u=function(o){var n=void 0===h[o]?"":h[o];n=d(n,{seriesIndex:t,dataPointIndex:o,w:s});var c=a.axesUtils.getYAxisForeColor(g.style.colors,t),u=0;Array.isArray(n)&&(u=n.length/2*parseInt(g.style.fontSize,10));var f=r.drawText({x:g.offsetX-15,y:i+e+g.offsetY-u,text:n,textAnchor:a.yaxis.opposite?"start":"end",foreColor:Array.isArray(c)?c[o]:c,fontSize:g.style.fontSize,fontFamily:g.style.fontFamily,fontWeight:g.style.fontWeight,isPlainText:!1,cssClass:"apexcharts-yaxis-label "+g.style.cssClass,maxWidth:g.maxWidth});l.add(f),f.on("click",(function(t){if("function"==typeof s.config.chart.events.xAxisLabelClick){var e=Object.assign({},s,{labelIndex:o});s.config.chart.events.xAxisLabelClick(t,a.ctx,e)}}));var p=document.createElementNS(s.globals.SVGNS,"title");if(p.textContent=Array.isArray(n)?n.join(" "):n,f.node.appendChild(p),0!==s.config.yaxis[t].labels.rotate){var x=r.rotateAroundCenter(f.node);f.node.setAttribute("transform","rotate(".concat(s.config.yaxis[t].labels.rotate," 0 ").concat(x.y,")"))}i+=e},f=0;f<=h.length-1;f++)u(f);if(void 0!==s.config.yaxis[0].title.text){var p=r.group({class:"apexcharts-yaxis-title apexcharts-xaxis-title-inversed",transform:"translate("+o+", 0)"}),x=r.drawText({x:s.config.yaxis[0].title.offsetX,y:s.globals.gridHeight/2+s.config.yaxis[0].title.offsetY,text:s.config.yaxis[0].title.text,textAnchor:"middle",foreColor:s.config.yaxis[0].title.style.color,fontSize:s.config.yaxis[0].title.style.fontSize,fontWeight:s.config.yaxis[0].title.style.fontWeight,fontFamily:s.config.yaxis[0].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+s.config.yaxis[0].title.style.cssClass});p.add(x),n.add(p)}var b=0;this.isCategoryBarHorizontal&&s.config.yaxis[0].opposite&&(b=s.globals.gridWidth);var v=s.config.xaxis.axisBorder;if(v.show){var y=r.drawLine(s.globals.padHorizontal+v.offsetX+b,1+v.offsetY,s.globals.padHorizontal+v.offsetX+b,s.globals.gridHeight+v.offsetY,v.color,0);this.elgrid&&this.elgrid.elGridBorders?this.elgrid.elGridBorders.add(y):n.add(y)}return s.config.yaxis[0].axisTicks.show&&this.axesUtils.drawYAxisTicks(b,h.length,s.config.yaxis[0].axisBorder,s.config.yaxis[0].axisTicks,0,e,n),n}},{key:"drawXaxisTicks",value:function(t,e,i){var a=this.w,s=t;if(!(t<0||t-2>a.globals.gridWidth)){var r=this.offY+a.config.xaxis.axisTicks.offsetY;if(e=e+r+a.config.xaxis.axisTicks.height,"top"===a.config.xaxis.position&&(e=r-a.config.xaxis.axisTicks.height),a.config.xaxis.axisTicks.show){var o=new m(this.ctx).drawLine(t+a.config.xaxis.axisTicks.offsetX,r+a.config.xaxis.offsetY,s+a.config.xaxis.axisTicks.offsetX,e+a.config.xaxis.offsetY,a.config.xaxis.axisTicks.color);i.add(o),o.node.classList.add("apexcharts-xaxis-tick")}}}},{key:"getXAxisTicksPositions",value:function(){var t=this.w,e=[],i=this.xaxisLabels.length,a=t.globals.padHorizontal;if(t.globals.timescaleLabels.length>0)for(var s=0;s<i;s++)a=this.xaxisLabels[s].position,e.push(a);else for(var r=i,o=0;o<r;o++){var n=r;t.globals.isXNumeric&&"bar"!==t.config.chart.type&&(n-=1),a+=t.globals.gridWidth/n,e.push(a)}return e}},{key:"xAxisLabelCorrections",value:function(){var t=this.w,e=new m(this.ctx),i=t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"),s=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");if(t.globals.rotateXLabels||t.config.xaxis.labels.rotateAlways)for(var o=0;o<a.length;o++){var n=e.rotateAroundCenter(a[o]);n.y=n.y-1,n.x=n.x+1,a[o].setAttribute("transform","rotate(".concat(t.config.xaxis.labels.rotate," ").concat(n.x," ").concat(n.y,")")),a[o].setAttribute("text-anchor","end");i.setAttribute("transform","translate(0, ".concat(-10,")"));var l=a[o].childNodes;t.config.xaxis.labels.trim&&Array.prototype.forEach.call(l,(function(i){e.placeTextWithEllipsis(i,i.textContent,t.globals.xAxisLabelsHeight-("bottom"===t.config.legend.position?20:10))}))}else!function(){for(var i=t.globals.gridWidth/(t.globals.labels.length+1),s=0;s<a.length;s++){var r=a[s].childNodes;t.config.xaxis.labels.trim&&"datetime"!==t.config.xaxis.type&&Array.prototype.forEach.call(r,(function(t){e.placeTextWithEllipsis(t,t.textContent,i)}))}}();if(s.length>0){var h=s[s.length-1].getBBox(),c=s[0].getBBox();h.x<-20&&s[s.length-1].parentNode.removeChild(s[s.length-1]),c.x+c.width>t.globals.gridWidth&&!t.globals.isBarHorizontal&&s[0].parentNode.removeChild(s[0]);for(var d=0;d<r.length;d++)e.placeTextWithEllipsis(r[d],r[d].textContent,t.config.yaxis[0].labels.maxWidth-(t.config.yaxis[0].title.text?2*parseFloat(t.config.yaxis[0].title.style.fontSize):0)-15)}}}]),t}(),j=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.xaxisLabels=i.globals.labels.slice(),this.axesUtils=new B(e),this.isRangeBar=i.globals.seriesRange.length,i.globals.timescaleLabels.length>0&&(this.xaxisLabels=i.globals.timescaleLabels.slice())}return r(t,[{key:"drawGridArea",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.w,i=new m(this.ctx);null===t&&(t=i.group({class:"apexcharts-grid"}));var a=i.drawLine(e.globals.padHorizontal,1,e.globals.padHorizontal,e.globals.gridHeight,"transparent"),s=i.drawLine(e.globals.padHorizontal,e.globals.gridHeight,e.globals.gridWidth,e.globals.gridHeight,"transparent");return t.add(s),t.add(a),t}},{key:"drawGrid",value:function(){var t=null;return this.w.globals.axisCharts&&(t=this.renderGrid(),this.drawGridArea(t.el)),t}},{key:"createGridMask",value:function(){var t=this.w,e=t.globals,i=new m(this.ctx),a=Array.isArray(t.config.stroke.width)?0:t.config.stroke.width;if(Array.isArray(t.config.stroke.width)){var s=0;t.config.stroke.width.forEach((function(t){s=Math.max(s,t)})),a=s}e.dom.elGridRectMask=document.createElementNS(e.SVGNS,"clipPath"),e.dom.elGridRectMask.setAttribute("id","gridRectMask".concat(e.cuid)),e.dom.elGridRectMarkerMask=document.createElementNS(e.SVGNS,"clipPath"),e.dom.elGridRectMarkerMask.setAttribute("id","gridRectMarkerMask".concat(e.cuid)),e.dom.elForecastMask=document.createElementNS(e.SVGNS,"clipPath"),e.dom.elForecastMask.setAttribute("id","forecastMask".concat(e.cuid)),e.dom.elNonForecastMask=document.createElementNS(e.SVGNS,"clipPath"),e.dom.elNonForecastMask.setAttribute("id","nonForecastMask".concat(e.cuid));var r=t.config.chart.type,o=0,n=0;("bar"===r||"rangeBar"===r||"candlestick"===r||"boxPlot"===r||t.globals.comboBarCount>0)&&t.globals.isXNumeric&&!t.globals.isBarHorizontal&&(o=t.config.grid.padding.left,n=t.config.grid.padding.right,e.barPadForNumericAxis>o&&(o=e.barPadForNumericAxis,n=e.barPadForNumericAxis)),e.dom.elGridRect=i.drawRect(-a/2-o-2,-a/2,e.gridWidth+a+n+o+4,e.gridHeight+a,0,"#fff");var l=t.globals.markers.largestSize+1;e.dom.elGridRectMarker=i.drawRect(2*-l,2*-l,e.gridWidth+4*l,e.gridHeight+4*l,0,"#fff"),e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node),e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node);var h=e.dom.baseEl.querySelector("defs");h.appendChild(e.dom.elGridRectMask),h.appendChild(e.dom.elForecastMask),h.appendChild(e.dom.elNonForecastMask),h.appendChild(e.dom.elGridRectMarkerMask)}},{key:"_drawGridLines",value:function(t){var e=t.i,i=t.x1,a=t.y1,s=t.x2,r=t.y2,o=t.xCount,n=t.parent,l=this.w;if(!(0===e&&l.globals.skipFirstTimelinelabel||e===o-1&&l.globals.skipLastTimelinelabel&&!l.config.xaxis.labels.formatter||"radar"===l.config.chart.type)){l.config.grid.xaxis.lines.show&&this._drawGridLine({i:e,x1:i,y1:a,x2:s,y2:r,xCount:o,parent:n});var h=0;if(l.globals.hasGroups&&"between"===l.config.xaxis.tickPlacement){var c=l.globals.groups;if(c){for(var d=0,g=0;d<e&&g<c.length;g++)d+=c[g].cols;d===e&&(h=.6*l.globals.xAxisLabelsHeight)}}new V(this.ctx).drawXaxisTicks(i,h,l.globals.dom.elGraphical)}}},{key:"_drawGridLine",value:function(t){var e=t.i,i=t.x1,a=t.y1,s=t.x2,r=t.y2,o=t.xCount,n=t.parent,l=this.w,h=!1,c=n.node.classList.contains("apexcharts-gridlines-horizontal"),d=l.config.grid.strokeDashArray,g=l.globals.barPadForNumericAxis;(0===a&&0===r||0===i&&0===s)&&(h=!0),a===l.globals.gridHeight&&r===l.globals.gridHeight&&(h=!0),!l.globals.isBarHorizontal||0!==e&&e!==o-1||(h=!0);var u=new m(this).drawLine(i-(c?g:0),a,s+(c?g:0),r,l.config.grid.borderColor,d);u.node.classList.add("apexcharts-gridline"),h?this.elGridBorders.add(u):n.add(u)}},{key:"_drawGridBandRect",value:function(t){var e=t.c,i=t.x1,a=t.y1,s=t.x2,r=t.y2,o=t.type,n=this.w,l=new m(this.ctx),h=n.globals.barPadForNumericAxis;if("column"!==o||"datetime"!==n.config.xaxis.type){var c=n.config.grid[o].colors[e],d=l.drawRect(i-("row"===o?h:0),a,s+("row"===o?2*h:0),r,0,c,n.config.grid[o].opacity);this.elg.add(d),d.attr("clip-path","url(#gridRectMask".concat(n.globals.cuid,")")),d.node.classList.add("apexcharts-grid-".concat(o))}}},{key:"_drawXYLines",value:function(t){var e=this,i=t.xCount,a=t.tickAmount,s=this.w;if(s.config.grid.xaxis.lines.show||s.config.xaxis.axisTicks.show){var r,o=s.globals.padHorizontal,n=s.globals.gridHeight;s.globals.timescaleLabels.length?function(t){for(var a=t.xC,s=t.x1,r=t.y1,o=t.x2,n=t.y2,l=0;l<a;l++)s=e.xaxisLabels[l].position,o=e.xaxisLabels[l].position,e._drawGridLines({i:l,x1:s,y1:r,x2:o,y2:n,xCount:i,parent:e.elgridLinesV})}({xC:i,x1:o,y1:0,x2:r,y2:n}):(s.globals.isXNumeric&&(i=s.globals.xAxisScale.result.length),s.config.xaxis.convertedCatToNumeric&&(i=s.globals.xaxisLabelsCount),function(t){var a=t.xC,r=t.x1,o=t.y1,n=t.x2,l=t.y2;if(void 0!==s.config.xaxis.tickAmount&&"dataPoints"!==s.config.xaxis.tickAmount&&"on"===s.config.xaxis.tickPlacement)s.globals.dom.baseEl.querySelectorAll(".apexcharts-text.apexcharts-xaxis-label tspan:not(:empty)").forEach((function(t,a){var s=t.getBBox();e._drawGridLines({i:a,x1:s.x+s.width/2,y1:o,x2:s.x+s.width/2,y2:l,xCount:i,parent:e.elgridLinesV})}));else for(var h=0;h<a+(s.globals.isXNumeric?0:1);h++)0===h&&1===a&&1===s.globals.dataPoints&&(n=r=s.globals.gridWidth/2),e._drawGridLines({i:h,x1:r,y1:o,x2:n,y2:l,xCount:i,parent:e.elgridLinesV}),n=r+=s.globals.gridWidth/(s.globals.isXNumeric?a-1:a)}({xC:i,x1:o,y1:0,x2:r,y2:n}))}if(s.config.grid.yaxis.lines.show){var l=0,h=0,c=s.globals.gridWidth,d=a+1;this.isRangeBar&&(d=s.globals.labels.length);for(var g=0;g<d+(this.isRangeBar?1:0);g++)this._drawGridLine({i:g,xCount:d+(this.isRangeBar?1:0),x1:0,y1:l,x2:c,y2:h,parent:this.elgridLinesH}),h=l+=s.globals.gridHeight/(this.isRangeBar?d:a)}}},{key:"_drawInvertedXYLines",value:function(t){var e=t.xCount,i=this.w;if(i.config.grid.xaxis.lines.show||i.config.xaxis.axisTicks.show)for(var a,s=i.globals.padHorizontal,r=i.globals.gridHeight,o=0;o<e+1;o++){i.config.grid.xaxis.lines.show&&this._drawGridLine({i:o,xCount:e+1,x1:s,y1:0,x2:a,y2:r,parent:this.elgridLinesV}),new V(this.ctx).drawXaxisTicks(s,0,i.globals.dom.elGraphical),a=s=s+i.globals.gridWidth/e+.3}if(i.config.grid.yaxis.lines.show)for(var n=0,l=0,h=i.globals.gridWidth,c=0;c<i.globals.dataPoints+1;c++)this._drawGridLine({i:c,xCount:i.globals.dataPoints+1,x1:0,y1:n,x2:h,y2:l,parent:this.elgridLinesH}),l=n+=i.globals.gridHeight/i.globals.dataPoints}},{key:"renderGrid",value:function(){var t=this.w,e=new m(this.ctx);this.elg=e.group({class:"apexcharts-grid"}),this.elgridLinesH=e.group({class:"apexcharts-gridlines-horizontal"}),this.elgridLinesV=e.group({class:"apexcharts-gridlines-vertical"}),this.elGridBorders=e.group({class:"apexcharts-grid-borders"}),this.elg.add(this.elgridLinesH),this.elg.add(this.elgridLinesV),t.config.grid.show||(this.elgridLinesV.hide(),this.elgridLinesH.hide(),this.elGridBorders.hide());for(var i,a=t.globals.yAxisScale.length?t.globals.yAxisScale[0].result.length-1:5,s=0;s<t.globals.series.length&&(void 0!==t.globals.yAxisScale[s]&&(a=t.globals.yAxisScale[s].result.length-1),!(a>2));s++);return!t.globals.isBarHorizontal||this.isRangeBar?(i=this.xaxisLabels.length,this.isRangeBar&&(a=t.globals.labels.length,t.config.xaxis.tickAmount&&t.config.xaxis.labels.formatter&&(i=t.config.xaxis.tickAmount)),this._drawXYLines({xCount:i,tickAmount:a})):(i=a,a=t.globals.xTickAmount,this._drawInvertedXYLines({xCount:i,tickAmount:a})),this.drawGridBands(i,a),{el:this.elg,elGridBorders:this.elGridBorders,xAxisTickWidth:t.globals.gridWidth/i}}},{key:"drawGridBands",value:function(t,e){var i=this.w;if(void 0!==i.config.grid.row.colors&&i.config.grid.row.colors.length>0)for(var a=0,s=i.globals.gridHeight/e,r=i.globals.gridWidth,o=0,n=0;o<e;o++,n++)n>=i.config.grid.row.colors.length&&(n=0),this._drawGridBandRect({c:n,x1:0,y1:a,x2:r,y2:s,type:"row"}),a+=i.globals.gridHeight/e;if(void 0!==i.config.grid.column.colors&&i.config.grid.column.colors.length>0)for(var l=i.globals.isBarHorizontal||"category"!==i.config.xaxis.type&&!i.config.xaxis.convertedCatToNumeric?t:t-1,h=i.globals.padHorizontal,c=i.globals.padHorizontal+i.globals.gridWidth/l,d=i.globals.gridHeight,g=0,u=0;g<t;g++,u++)u>=i.config.grid.column.colors.length&&(u=0),this._drawGridBandRect({c:u,x1:h,y1:0,x2:c,y2:d,type:"column"}),h+=i.globals.gridWidth/l}}]),t}(),_=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"niceScale",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4?arguments[4]:void 0,r=this.w,o=Math.abs(e-t);if("dataPoints"===(i=this._adjustTicksForSmallRange(i,a,o))&&(i=r.globals.dataPoints-1),t===Number.MIN_VALUE&&0===e||!x.isNumber(t)&&!x.isNumber(e)||t===Number.MIN_VALUE&&e===-Number.MAX_VALUE){t=0,e=i;var n=this.linearScale(t,e,i);return n}t>e?(console.warn("axis.min cannot be greater than axis.max"),e=t+.1):t===e&&(t=0===t?0:t-.5,e=0===e?2:e+.5);var l=[];o<1&&s&&("candlestick"===r.config.chart.type||"candlestick"===r.config.series[a].type||"boxPlot"===r.config.chart.type||"boxPlot"===r.config.series[a].type||r.globals.isRangeData)&&(e*=1.01);var h=i+1;h<2?h=2:h>2&&(h-=2);var c=o/h,d=Math.floor(x.log10(c)),g=Math.pow(10,d),u=Math.round(c/g);u<1&&(u=1);var f=u*g,p=f*Math.floor(t/f),b=f*Math.ceil(e/f),v=p;if(s&&o>2){for(;l.push(v),!((v+=f)>b););return{result:l,niceMin:l[0],niceMax:l[l.length-1]}}var m=t;(l=[]).push(m);for(var y=Math.abs(e-t)/i,w=0;w<=i;w++)m+=y,l.push(m);return l[l.length-2]>=e&&l.pop(),{result:l,niceMin:l[0],niceMax:l[l.length-1]}}},{key:"linearScale",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,a=arguments.length>3?arguments[3]:void 0,s=Math.abs(e-t);"dataPoints"===(i=this._adjustTicksForSmallRange(i,a,s))&&(i=this.w.globals.dataPoints-1);var r=s/i;i===Number.MAX_VALUE&&(i=10,r=1);for(var o=[],n=t;i>=0;)o.push(n),n+=r,i-=1;return{result:o,niceMin:o[0],niceMax:o[o.length-1]}}},{key:"logarithmicScaleNice",value:function(t,e,i){e<=0&&(e=Math.max(t,i)),t<=0&&(t=Math.min(e,i));for(var a=[],s=Math.ceil(Math.log(e)/Math.log(i)+1),r=Math.floor(Math.log(t)/Math.log(i));r<s;r++)a.push(Math.pow(i,r));return{result:a,niceMin:a[0],niceMax:a[a.length-1]}}},{key:"logarithmicScale",value:function(t,e,i){e<=0&&(e=Math.max(t,i)),t<=0&&(t=Math.min(e,i));for(var a=[],s=Math.log(e)/Math.log(i),r=Math.log(t)/Math.log(i),o=s-r,n=Math.round(o),l=o/n,h=0,c=r;h<n;h++,c+=l)a.push(Math.pow(i,c));return a.push(Math.pow(i,s)),{result:a,niceMin:t,niceMax:e}}},{key:"_adjustTicksForSmallRange",value:function(t,e,i){var a=t;if(void 0!==e&&this.w.config.yaxis[e].labels.formatter&&void 0===this.w.config.yaxis[e].tickAmount){var s=this.w.config.yaxis[e].labels.formatter(1);x.isNumber(Number(s))&&!x.isFloat(s)&&(a=Math.ceil(i))}return a<t?a:t}},{key:"setYScaleForIndex",value:function(t,e,i){var a=this.w.globals,s=this.w.config,r=a.isBarHorizontal?s.xaxis:s.yaxis[t];void 0===a.yAxisScale[t]&&(a.yAxisScale[t]=[]);var o=Math.abs(i-e);if(r.logarithmic&&o<=5&&(a.invalidLogScale=!0),r.logarithmic&&o>5)a.allSeriesCollapsed=!1,a.yAxisScale[t]=this.logarithmicScale(e,i,r.logBase),a.yAxisScale[t]=r.forceNiceScale?this.logarithmicScaleNice(e,i,r.logBase):this.logarithmicScale(e,i,r.logBase);else if(i!==-Number.MAX_VALUE&&x.isNumber(i))if(a.allSeriesCollapsed=!1,void 0===r.min&&void 0===r.max||r.forceNiceScale){var n=void 0===s.yaxis[t].max&&void 0===s.yaxis[t].min||s.yaxis[t].forceNiceScale;a.yAxisScale[t]=this.niceScale(e,i,r.tickAmount?r.tickAmount:o<5&&o>1?o+1:5,t,n)}else a.yAxisScale[t]=this.linearScale(e,i,r.tickAmount,t);else a.yAxisScale[t]=this.linearScale(0,5,5)}},{key:"setXScale",value:function(t,e){var i=this.w,a=i.globals,s=i.config.xaxis,r=Math.abs(e-t);return e!==-Number.MAX_VALUE&&x.isNumber(e)?a.xAxisScale=this.linearScale(t,e,s.tickAmount?s.tickAmount:r<5&&r>1?r+1:5,0):a.xAxisScale=this.linearScale(0,5,5),a.xAxisScale}},{key:"setMultipleYScales",value:function(){var t=this,e=this.w.globals,i=this.w.config,a=e.minYArr.concat([]),s=e.maxYArr.concat([]),r=[];i.yaxis.forEach((function(e,o){var n=o;i.series.forEach((function(t,i){t.name===e.seriesName&&(n=i,o!==i?r.push({index:i,similarIndex:o,alreadyExists:!0}):r.push({index:i}))}));var l=a[n],h=s[n];t.setYScaleForIndex(o,l,h)})),this.sameScaleInMultipleAxes(a,s,r)}},{key:"sameScaleInMultipleAxes",value:function(t,e,i){var a=this,s=this.w.config,r=this.w.globals,o=[];i.forEach((function(t){t.alreadyExists&&(void 0===o[t.index]&&(o[t.index]=[]),o[t.index].push(t.index),o[t.index].push(t.similarIndex))})),r.yAxisSameScaleIndices=o,o.forEach((function(t,e){o.forEach((function(i,a){var s,r;e!==a&&(s=t,r=i,s.filter((function(t){return-1!==r.indexOf(t)}))).length>0&&(o[e]=o[e].concat(o[a]))}))}));var n=o.map((function(t){return t.filter((function(e,i){return t.indexOf(e)===i}))})).map((function(t){return t.sort()}));o=o.filter((function(t){return!!t}));var l=n.slice(),h=l.map((function(t){return JSON.stringify(t)}));l=l.filter((function(t,e){return h.indexOf(JSON.stringify(t))===e}));var c=[],d=[];t.forEach((function(t,i){l.forEach((function(a,s){a.indexOf(i)>-1&&(void 0===c[s]&&(c[s]=[],d[s]=[]),c[s].push({key:i,value:t}),d[s].push({key:i,value:e[i]}))}))}));var g=Array.apply(null,Array(l.length)).map(Number.prototype.valueOf,Number.MIN_VALUE),u=Array.apply(null,Array(l.length)).map(Number.prototype.valueOf,-Number.MAX_VALUE);c.forEach((function(t,e){t.forEach((function(t,i){g[e]=Math.min(t.value,g[e])}))})),d.forEach((function(t,e){t.forEach((function(t,i){u[e]=Math.max(t.value,u[e])}))})),t.forEach((function(t,e){d.forEach((function(t,i){var o=g[i],n=u[i];s.chart.stacked&&(n=0,t.forEach((function(t,e){t.value!==-Number.MAX_VALUE&&(n+=t.value),o!==Number.MIN_VALUE&&(o+=c[i][e].value)}))),t.forEach((function(i,l){t[l].key===e&&(void 0!==s.yaxis[e].min&&(o="function"==typeof s.yaxis[e].min?s.yaxis[e].min(r.minY):s.yaxis[e].min),void 0!==s.yaxis[e].max&&(n="function"==typeof s.yaxis[e].max?s.yaxis[e].max(r.maxY):s.yaxis[e].max),a.setYScaleForIndex(e,o,n))}))}))}))}},{key:"autoScaleY",value:function(t,e,i){t||(t=this);var a=t.w;if(a.globals.isMultipleYAxis||a.globals.collapsedSeries.length)return console.warn("autoScaleYaxis is not supported in a multi-yaxis chart."),e;var s=a.globals.seriesX[0],r=a.config.chart.stacked;return e.forEach((function(t,o){for(var n=0,l=0;l<s.length;l++)if(s[l]>=i.xaxis.min){n=l;break}var h,c,d=a.globals.minYArr[o],g=a.globals.maxYArr[o],u=a.globals.stackedSeriesTotals;a.globals.series.forEach((function(o,l){var f=o[n];r?(f=u[n],h=c=f,u.forEach((function(t,e){s[e]<=i.xaxis.max&&s[e]>=i.xaxis.min&&(t>c&&null!==t&&(c=t),o[e]<h&&null!==o[e]&&(h=o[e]))}))):(h=c=f,o.forEach((function(t,e){if(s[e]<=i.xaxis.max&&s[e]>=i.xaxis.min){var r=t,o=t;a.globals.series.forEach((function(i,a){null!==t&&(r=Math.min(i[e],r),o=Math.max(i[e],o))})),o>c&&null!==o&&(c=o),r<h&&null!==r&&(h=r)}}))),void 0===h&&void 0===c&&(h=d,c=g),c*=c<0?.9:1.1,0===(h*=h<0?1.1:.9)&&0===c&&(h=-1,c=1),c<0&&c<g&&(c=g),h<0&&h>d&&(h=d),e.length>1?(e[l].min=void 0===t.min?h:t.min,e[l].max=void 0===t.max?c:t.max):(e[0].min=void 0===t.min?h:t.min,e[0].max=void 0===t.max?c:t.max)}))})),e}}]),t}(),U=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.scales=new _(e)}return r(t,[{key:"init",value:function(){this.setYRange(),this.setXRange(),this.setZRange()}},{key:"getMinYMaxY",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-Number.MAX_VALUE,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=this.w.config,r=this.w.globals,o=-Number.MAX_VALUE,n=Number.MIN_VALUE;null===a&&(a=t+1);var l=r.series,h=l,c=l;"candlestick"===s.chart.type?(h=r.seriesCandleL,c=r.seriesCandleH):"boxPlot"===s.chart.type?(h=r.seriesCandleO,c=r.seriesCandleC):r.isRangeData&&(h=r.seriesRangeStart,c=r.seriesRangeEnd);for(var d=t;d<a;d++){r.dataPoints=Math.max(r.dataPoints,l[d].length),r.categoryLabels.length&&(r.dataPoints=r.categoryLabels.filter((function(t){return void 0!==t})).length);for(var g=0;g<r.series[d].length;g++){var u=l[d][g];null!==u&&x.isNumber(u)?(void 0!==c[d][g]&&(o=Math.max(o,c[d][g]),e=Math.min(e,c[d][g])),void 0!==h[d][g]&&(e=Math.min(e,h[d][g]),i=Math.max(i,h[d][g])),"candlestick"!==this.w.config.chart.type&&"boxPlot"!==this.w.config.chart.type&&"rangeArea"===this.w.config.chart.type&&"rangeBar"===this.w.config.chart.type||("candlestick"!==this.w.config.chart.type&&"boxPlot"!==this.w.config.chart.type||void 0!==r.seriesCandleC[d][g]&&(o=Math.max(o,r.seriesCandleO[d][g]),o=Math.max(o,r.seriesCandleH[d][g]),o=Math.max(o,r.seriesCandleL[d][g]),o=Math.max(o,r.seriesCandleC[d][g]),"boxPlot"===this.w.config.chart.type&&(o=Math.max(o,r.seriesCandleM[d][g]))),!s.series[d].type||"candlestick"===s.series[d].type&&"boxPlot"===s.series[d].type&&"rangeArea"===s.series[d].type&&"rangeBar"===s.series[d].type||(o=Math.max(o,r.series[d][g]),e=Math.min(e,r.series[d][g])),i=o),r.seriesGoals[d]&&r.seriesGoals[d][g]&&Array.isArray(r.seriesGoals[d][g])&&r.seriesGoals[d][g].forEach((function(t){n!==Number.MIN_VALUE&&(n=Math.min(n,t.value),e=n),o=Math.max(o,t.value),i=o})),x.isFloat(u)&&(u=x.noExponents(u),r.yValueDecimal=Math.max(r.yValueDecimal,u.toString().split(".")[1].length)),n>h[d][g]&&h[d][g]<0&&(n=h[d][g])):r.hasNullValues=!0}}return"rangeBar"===s.chart.type&&r.seriesRangeStart.length&&r.isBarHorizontal&&(n=e),"bar"===s.chart.type&&(n<0&&o<0&&(o=0),n===Number.MIN_VALUE&&(n=0)),{minY:n,maxY:o,lowestY:e,highestY:i}}},{key:"setYRange",value:function(){var t=this.w.globals,e=this.w.config;t.maxY=-Number.MAX_VALUE,t.minY=Number.MIN_VALUE;var i=Number.MAX_VALUE;if(t.isMultipleYAxis)for(var a=0;a<t.series.length;a++){var s=this.getMinYMaxY(a,i,null,a+1);t.minYArr.push(s.minY),t.maxYArr.push(s.maxY),i=s.lowestY}var r=this.getMinYMaxY(0,i,null,t.series.length);if(t.minY=r.minY,t.maxY=r.maxY,i=r.lowestY,e.chart.stacked&&this._setStackedMinMax(),("line"===e.chart.type||"area"===e.chart.type||"candlestick"===e.chart.type||"boxPlot"===e.chart.type||"rangeBar"===e.chart.type&&!t.isBarHorizontal)&&t.minY===Number.MIN_VALUE&&i!==-Number.MAX_VALUE&&i!==t.maxY){var o=t.maxY-i;(i>=0&&i<=10||void 0!==e.yaxis[0].min||void 0!==e.yaxis[0].max)&&(o=0),t.minY=i-5*o/100,i>0&&t.minY<0&&(t.minY=0),t.maxY=t.maxY+5*o/100}if(e.yaxis.forEach((function(e,i){void 0!==e.max&&("number"==typeof e.max?t.maxYArr[i]=e.max:"function"==typeof e.max&&(t.maxYArr[i]=e.max(t.isMultipleYAxis?t.maxYArr[i]:t.maxY)),t.maxY=t.maxYArr[i]),void 0!==e.min&&("number"==typeof e.min?t.minYArr[i]=e.min:"function"==typeof e.min&&(t.minYArr[i]=e.min(t.isMultipleYAxis?t.minYArr[i]===Number.MIN_VALUE?0:t.minYArr[i]:t.minY)),t.minY=t.minYArr[i])})),t.isBarHorizontal){["min","max"].forEach((function(i){void 0!==e.xaxis[i]&&"number"==typeof e.xaxis[i]&&("min"===i?t.minY=e.xaxis[i]:t.maxY=e.xaxis[i])}))}return t.isMultipleYAxis?(this.scales.setMultipleYScales(),t.minY=i,t.yAxisScale.forEach((function(e,i){t.minYArr[i]=e.niceMin,t.maxYArr[i]=e.niceMax}))):(this.scales.setYScaleForIndex(0,t.minY,t.maxY),t.minY=t.yAxisScale[0].niceMin,t.maxY=t.yAxisScale[0].niceMax,t.minYArr[0]=t.yAxisScale[0].niceMin,t.maxYArr[0]=t.yAxisScale[0].niceMax),{minY:t.minY,maxY:t.maxY,minYArr:t.minYArr,maxYArr:t.maxYArr,yAxisScale:t.yAxisScale}}},{key:"setXRange",value:function(){var t=this.w.globals,e=this.w.config,i="numeric"===e.xaxis.type||"datetime"===e.xaxis.type||"category"===e.xaxis.type&&!t.noLabelsProvided||t.noLabelsProvided||t.isXNumeric;if(t.isXNumeric&&function(){for(var e=0;e<t.series.length;e++)if(t.labels[e])for(var i=0;i<t.labels[e].length;i++)null!==t.labels[e][i]&&x.isNumber(t.labels[e][i])&&(t.maxX=Math.max(t.maxX,t.labels[e][i]),t.initialMaxX=Math.max(t.maxX,t.labels[e][i]),t.minX=Math.min(t.minX,t.labels[e][i]),t.initialMinX=Math.min(t.minX,t.labels[e][i]))}(),t.noLabelsProvided&&0===e.xaxis.categories.length&&(t.maxX=t.labels[t.labels.length-1],t.initialMaxX=t.labels[t.labels.length-1],t.minX=1,t.initialMinX=1),t.isXNumeric||t.noLabelsProvided||t.dataFormatXNumeric){var a;if(void 0===e.xaxis.tickAmount?(a=Math.round(t.svgWidth/150),"numeric"===e.xaxis.type&&t.dataPoints<30&&(a=t.dataPoints-1),a>t.dataPoints&&0!==t.dataPoints&&(a=t.dataPoints-1)):"dataPoints"===e.xaxis.tickAmount?(t.series.length>1&&(a=t.series[t.maxValsInArrayIndex].length-1),t.isXNumeric&&(a=t.maxX-t.minX-1)):a=e.xaxis.tickAmount,t.xTickAmount=a,void 0!==e.xaxis.max&&"number"==typeof e.xaxis.max&&(t.maxX=e.xaxis.max),void 0!==e.xaxis.min&&"number"==typeof e.xaxis.min&&(t.minX=e.xaxis.min),void 0!==e.xaxis.range&&(t.minX=t.maxX-e.xaxis.range),t.minX!==Number.MAX_VALUE&&t.maxX!==-Number.MAX_VALUE)if(e.xaxis.convertedCatToNumeric&&!t.dataFormatXNumeric){for(var s=[],r=t.minX-1;r<t.maxX;r++)s.push(r+1);t.xAxisScale={result:s,niceMin:s[0],niceMax:s[s.length-1]}}else t.xAxisScale=this.scales.setXScale(t.minX,t.maxX);else t.xAxisScale=this.scales.linearScale(1,a,a),t.noLabelsProvided&&t.labels.length>0&&(t.xAxisScale=this.scales.linearScale(1,t.labels.length,a-1),t.seriesX=t.labels.slice());i&&(t.labels=t.xAxisScale.result.slice())}return t.isBarHorizontal&&t.labels.length&&(t.xTickAmount=t.labels.length),this._handleSingleDataPoint(),this._getMinXDiff(),{minX:t.minX,maxX:t.maxX}}},{key:"setZRange",value:function(){var t=this.w.globals;if(t.isDataXYZ)for(var e=0;e<t.series.length;e++)if(void 0!==t.seriesZ[e])for(var i=0;i<t.seriesZ[e].length;i++)null!==t.seriesZ[e][i]&&x.isNumber(t.seriesZ[e][i])&&(t.maxZ=Math.max(t.maxZ,t.seriesZ[e][i]),t.minZ=Math.min(t.minZ,t.seriesZ[e][i]))}},{key:"_handleSingleDataPoint",value:function(){var t=this.w.globals,e=this.w.config;if(t.minX===t.maxX){var i=new T(this.ctx);if("datetime"===e.xaxis.type){var a=i.getDate(t.minX);e.xaxis.labels.datetimeUTC?a.setUTCDate(a.getUTCDate()-2):a.setDate(a.getDate()-2),t.minX=new Date(a).getTime();var s=i.getDate(t.maxX);e.xaxis.labels.datetimeUTC?s.setUTCDate(s.getUTCDate()+2):s.setDate(s.getDate()+2),t.maxX=new Date(s).getTime()}else("numeric"===e.xaxis.type||"category"===e.xaxis.type&&!t.noLabelsProvided)&&(t.minX=t.minX-2,t.initialMinX=t.minX,t.maxX=t.maxX+2,t.initialMaxX=t.maxX)}}},{key:"_getMinXDiff",value:function(){var t=this.w.globals;t.isXNumeric&&t.seriesX.forEach((function(e,i){1===e.length&&e.push(t.seriesX[t.maxValsInArrayIndex][t.seriesX[t.maxValsInArrayIndex].length-1]);var a=e.slice();a.sort((function(t,e){return t-e})),a.forEach((function(e,i){if(i>0){var s=e-a[i-1];s>0&&(t.minXDiff=Math.min(s,t.minXDiff))}})),1!==t.dataPoints&&t.minXDiff!==Number.MAX_VALUE||(t.minXDiff=.5)}))}},{key:"_setStackedMinMax",value:function(){var t=this.w.globals,e=[],i=[];if(t.series.length)for(var a=0;a<t.series[t.maxValsInArrayIndex].length;a++)for(var s=0,r=0,o=0;o<t.series.length;o++)null!==t.series[o][a]&&x.isNumber(t.series[o][a])&&(t.series[o][a]>0?s=s+parseFloat(t.series[o][a])+1e-4:r+=parseFloat(t.series[o][a])),o===t.series.length-1&&(e.push(s),i.push(r));for(var n=0;n<e.length;n++)t.maxY=Math.max(t.maxY,e[n]),t.minY=Math.min(t.minY,i[n])}}]),t}(),q=function(){function t(e,i){a(this,t),this.ctx=e,this.elgrid=i,this.w=e.w;var s=this.w;this.xaxisFontSize=s.config.xaxis.labels.style.fontSize,this.axisFontFamily=s.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=s.config.xaxis.labels.style.colors,this.isCategoryBarHorizontal="bar"===s.config.chart.type&&s.config.plotOptions.bar.horizontal,this.xAxisoffX=0,"bottom"===s.config.xaxis.position&&(this.xAxisoffX=s.globals.gridHeight),this.drawnLabels=[],this.axesUtils=new B(e)}return r(t,[{key:"drawYaxis",value:function(t){var e=this,i=this.w,a=new m(this.ctx),s=i.config.yaxis[t].labels.style,r=s.fontSize,o=s.fontFamily,n=s.fontWeight,l=a.group({class:"apexcharts-yaxis",rel:t,transform:"translate("+i.globals.translateYAxisX[t]+", 0)"});if(this.axesUtils.isYAxisHidden(t))return l;var h=a.group({class:"apexcharts-yaxis-texts-g"});l.add(h);var c=i.globals.yAxisScale[t].result.length-1,d=i.globals.gridHeight/c,g=i.globals.translateY,u=i.globals.yLabelFormatters[t],f=i.globals.yAxisScale[t].result.slice();f=this.axesUtils.checkForReversedLabels(t,f);var p="";if(i.config.yaxis[t].labels.show)for(var x=function(l){var x=f[l];x=u(x,l,i);var b=i.config.yaxis[t].labels.padding;i.config.yaxis[t].opposite&&0!==i.config.yaxis.length&&(b*=-1);var v=e.axesUtils.getYAxisForeColor(s.colors,t),m=a.drawText({x:b,y:g+c/10+i.config.yaxis[t].labels.offsetY+1,text:x,textAnchor:i.config.yaxis[t].opposite?"start":"end",fontSize:r,fontFamily:o,fontWeight:n,maxWidth:i.config.yaxis[t].labels.maxWidth,foreColor:Array.isArray(v)?v[l]:v,isPlainText:!1,cssClass:"apexcharts-yaxis-label "+s.cssClass});l===c&&(p=m),h.add(m);var y=document.createElementNS(i.globals.SVGNS,"title");if(y.textContent=Array.isArray(x)?x.join(" "):x,m.node.appendChild(y),0!==i.config.yaxis[t].labels.rotate){var w=a.rotateAroundCenter(p.node),k=a.rotateAroundCenter(m.node);m.node.setAttribute("transform","rotate(".concat(i.config.yaxis[t].labels.rotate," ").concat(w.x," ").concat(k.y,")"))}g+=d},b=c;b>=0;b--)x(b);if(void 0!==i.config.yaxis[t].title.text){var v=a.group({class:"apexcharts-yaxis-title"}),y=0;i.config.yaxis[t].opposite&&(y=i.globals.translateYAxisX[t]);var w=a.drawText({x:y,y:i.globals.gridHeight/2+i.globals.translateY+i.config.yaxis[t].title.offsetY,text:i.config.yaxis[t].title.text,textAnchor:"end",foreColor:i.config.yaxis[t].title.style.color,fontSize:i.config.yaxis[t].title.style.fontSize,fontWeight:i.config.yaxis[t].title.style.fontWeight,fontFamily:i.config.yaxis[t].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+i.config.yaxis[t].title.style.cssClass});v.add(w),l.add(v)}var k=i.config.yaxis[t].axisBorder,A=31+k.offsetX;if(i.config.yaxis[t].opposite&&(A=-31-k.offsetX),k.show){var S=a.drawLine(A,i.globals.translateY+k.offsetY-2,A,i.globals.gridHeight+i.globals.translateY+k.offsetY+2,k.color,0,k.width);l.add(S)}return i.config.yaxis[t].axisTicks.show&&this.axesUtils.drawYAxisTicks(A,c,k,i.config.yaxis[t].axisTicks,t,d,l),l}},{key:"drawYaxisInversed",value:function(t){var e=this.w,i=new m(this.ctx),a=i.group({class:"apexcharts-xaxis apexcharts-yaxis-inversed"}),s=i.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(e.globals.translateXAxisX,", ").concat(e.globals.translateXAxisY,")")});a.add(s);var r=e.globals.yAxisScale[t].result.length-1,o=e.globals.gridWidth/r+.1,n=o+e.config.xaxis.labels.offsetX,l=e.globals.xLabelFormatter,h=e.globals.yAxisScale[t].result.slice(),c=e.globals.timescaleLabels;c.length>0&&(this.xaxisLabels=c.slice(),r=(h=c.slice()).length),h=this.axesUtils.checkForReversedLabels(t,h);var d=c.length;if(e.config.xaxis.labels.show)for(var g=d?0:r;d?g<d:g>=0;d?g++:g--){var u=h[g];u=l(u,g,e);var f=e.globals.gridWidth+e.globals.padHorizontal-(n-o+e.config.xaxis.labels.offsetX);if(c.length){var p=this.axesUtils.getLabel(h,c,f,g,this.drawnLabels,this.xaxisFontSize);f=p.x,u=p.text,this.drawnLabels.push(p.text),0===g&&e.globals.skipFirstTimelinelabel&&(u=""),g===h.length-1&&e.globals.skipLastTimelinelabel&&(u="")}var x=i.drawText({x:f,y:this.xAxisoffX+e.config.xaxis.labels.offsetY+30-("top"===e.config.xaxis.position?e.globals.xAxisHeight+e.config.xaxis.axisTicks.height-2:0),text:u,textAnchor:"middle",foreColor:Array.isArray(this.xaxisForeColors)?this.xaxisForeColors[t]:this.xaxisForeColors,fontSize:this.xaxisFontSize,fontFamily:this.xaxisFontFamily,fontWeight:e.config.xaxis.labels.style.fontWeight,isPlainText:!1,cssClass:"apexcharts-xaxis-label "+e.config.xaxis.labels.style.cssClass});s.add(x),x.tspan(u);var b=document.createElementNS(e.globals.SVGNS,"title");b.textContent=u,x.node.appendChild(b),n+=o}return this.inversedYAxisTitleText(a),this.inversedYAxisBorder(a),a}},{key:"inversedYAxisBorder",value:function(t){var e=this.w,i=new m(this.ctx),a=e.config.xaxis.axisBorder;if(a.show){var s=0;"bar"===e.config.chart.type&&e.globals.isXNumeric&&(s-=15);var r=i.drawLine(e.globals.padHorizontal+s+a.offsetX,this.xAxisoffX,e.globals.gridWidth,this.xAxisoffX,a.color,0,a.height);this.elgrid&&this.elgrid.elGridBorders?this.elgrid.elGridBorders.add(r):t.add(r)}}},{key:"inversedYAxisTitleText",value:function(t){var e=this.w,i=new m(this.ctx);if(void 0!==e.config.xaxis.title.text){var a=i.group({class:"apexcharts-xaxis-title apexcharts-yaxis-title-inversed"}),s=i.drawText({x:e.globals.gridWidth/2+e.config.xaxis.title.offsetX,y:this.xAxisoffX+parseFloat(this.xaxisFontSize)+parseFloat(e.config.xaxis.title.style.fontSize)+e.config.xaxis.title.offsetY+20,text:e.config.xaxis.title.text,textAnchor:"middle",fontSize:e.config.xaxis.title.style.fontSize,fontFamily:e.config.xaxis.title.style.fontFamily,fontWeight:e.config.xaxis.title.style.fontWeight,foreColor:e.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text "+e.config.xaxis.title.style.cssClass});a.add(s),t.add(a)}}},{key:"yAxisTitleRotate",value:function(t,e){var i=this.w,a=new m(this.ctx),s={width:0,height:0},r={width:0,height:0},o=i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t,"'] .apexcharts-yaxis-texts-g"));null!==o&&(s=o.getBoundingClientRect());var n=i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t,"'] .apexcharts-yaxis-title text"));if(null!==n&&(r=n.getBoundingClientRect()),null!==n){var l=this.xPaddingForYAxisTitle(t,s,r,e);n.setAttribute("x",l.xPos-(e?10:0))}if(null!==n){var h=a.rotateAroundCenter(n);n.setAttribute("transform","rotate(".concat(e?-1*i.config.yaxis[t].title.rotate:i.config.yaxis[t].title.rotate," ").concat(h.x," ").concat(h.y,")"))}}},{key:"xPaddingForYAxisTitle",value:function(t,e,i,a){var s=this.w,r=0,o=0,n=10;return void 0===s.config.yaxis[t].title.text||t<0?{xPos:o,padd:0}:(a?(o=e.width+s.config.yaxis[t].title.offsetX+i.width/2+n/2,0===(r+=1)&&(o-=n/2)):(o=-1*e.width+s.config.yaxis[t].title.offsetX+n/2+i.width/2,s.globals.isBarHorizontal&&(n=25,o=-1*e.width-s.config.yaxis[t].title.offsetX-n)),{xPos:o,padd:n})}},{key:"setYAxisXPosition",value:function(t,e){var i=this.w,a=0,s=0,r=18,o=1;i.config.yaxis.length>1&&(this.multipleYs=!0),i.config.yaxis.map((function(n,l){var h=i.globals.ignoreYAxisIndexes.indexOf(l)>-1||!n.show||n.floating||0===t[l].width,c=t[l].width+e[l].width;n.opposite?i.globals.isBarHorizontal?(s=i.globals.gridWidth+i.globals.translateX-1,i.globals.translateYAxisX[l]=s-n.labels.offsetX):(s=i.globals.gridWidth+i.globals.translateX+o,h||(o=o+c+20),i.globals.translateYAxisX[l]=s-n.labels.offsetX+20):(a=i.globals.translateX-r,h||(r=r+c+20),i.globals.translateYAxisX[l]=a+n.labels.offsetX)}))}},{key:"setYAxisTextAlignments",value:function(){var t=this.w,e=t.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis");(e=x.listToArray(e)).forEach((function(e,i){var a=t.config.yaxis[i];if(a&&void 0!==a.labels.align){var s=t.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i,"'] .apexcharts-yaxis-texts-g")),r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i,"'] .apexcharts-yaxis-label"));r=x.listToArray(r);var o=s.getBoundingClientRect();"left"===a.labels.align?(r.forEach((function(t,e){t.setAttribute("text-anchor","start")})),a.opposite||s.setAttribute("transform","translate(-".concat(o.width,", 0)"))):"center"===a.labels.align?(r.forEach((function(t,e){t.setAttribute("text-anchor","middle")})),s.setAttribute("transform","translate(".concat(o.width/2*(a.opposite?1:-1),", 0)"))):"right"===a.labels.align&&(r.forEach((function(t,e){t.setAttribute("text-anchor","end")})),a.opposite&&s.setAttribute("transform","translate(".concat(o.width,", 0)")))}}))}}]),t}(),Z=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.documentEvent=x.bind(this.documentEvent,this)}return r(t,[{key:"addEventListener",value:function(t,e){var i=this.w;i.globals.events.hasOwnProperty(t)?i.globals.events[t].push(e):i.globals.events[t]=[e]}},{key:"removeEventListener",value:function(t,e){var i=this.w;if(i.globals.events.hasOwnProperty(t)){var a=i.globals.events[t].indexOf(e);-1!==a&&i.globals.events[t].splice(a,1)}}},{key:"fireEvent",value:function(t,e){var i=this.w;if(i.globals.events.hasOwnProperty(t)){e&&e.length||(e=[]);for(var a=i.globals.events[t],s=a.length,r=0;r<s;r++)a[r].apply(null,e)}}},{key:"setupEventHandlers",value:function(){var t=this,e=this.w,i=this.ctx,a=e.globals.dom.baseEl.querySelector(e.globals.chartClass);this.ctx.eventList.forEach((function(t){a.addEventListener(t,(function(t){var a=Object.assign({},e,{seriesIndex:e.globals.capturedSeriesIndex,dataPointIndex:e.globals.capturedDataPointIndex});"mousemove"===t.type||"touchmove"===t.type?"function"==typeof e.config.chart.events.mouseMove&&e.config.chart.events.mouseMove(t,i,a):"mouseleave"===t.type||"touchleave"===t.type?"function"==typeof e.config.chart.events.mouseLeave&&e.config.chart.events.mouseLeave(t,i,a):("mouseup"===t.type&&1===t.which||"touchend"===t.type)&&("function"==typeof e.config.chart.events.click&&e.config.chart.events.click(t,i,a),i.ctx.events.fireEvent("click",[t,i,a]))}),{capture:!1,passive:!0})})),this.ctx.eventList.forEach((function(i){e.globals.dom.baseEl.addEventListener(i,t.documentEvent,{passive:!0})})),this.ctx.core.setupBrushHandler()}},{key:"documentEvent",value:function(t){var e=this.w,i=t.target.className;if("click"===t.type){var a=e.globals.dom.baseEl.querySelector(".apexcharts-menu");a&&a.classList.contains("apexcharts-menu-open")&&"apexcharts-menu-icon"!==i&&a.classList.remove("apexcharts-menu-open")}e.globals.clientX="touchmove"===t.type?t.touches[0].clientX:t.clientX,e.globals.clientY="touchmove"===t.type?t.touches[0].clientY:t.clientY}}]),t}(),$=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"setCurrentLocaleValues",value:function(t){var e=this.w.config.chart.locales;window.Apex.chart&&window.Apex.chart.locales&&window.Apex.chart.locales.length>0&&(e=this.w.config.chart.locales.concat(window.Apex.chart.locales));var i=e.filter((function(e){return e.name===t}))[0];if(!i)throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");var a=x.extend(C,i);this.w.globals.locale=a.options}}]),t}(),J=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"drawAxis",value:function(t,e){var i,a,s=this.w.globals,r=this.w.config,o=new V(this.ctx,e),n=new q(this.ctx,e);s.axisCharts&&"radar"!==t&&(s.isBarHorizontal?(a=n.drawYaxisInversed(0),i=o.drawXaxisInversed(0),s.dom.elGraphical.add(i),s.dom.elGraphical.add(a)):(i=o.drawXaxis(),s.dom.elGraphical.add(i),r.yaxis.map((function(t,e){-1===s.ignoreYAxisIndexes.indexOf(e)&&(a=n.drawYaxis(e),s.dom.Paper.add(a))}))))}}]),t}(),Q=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"drawXCrosshairs",value:function(){var t=this.w,e=new m(this.ctx),i=new v(this.ctx),a=t.config.xaxis.crosshairs.fill.gradient,s=t.config.xaxis.crosshairs.dropShadow,r=t.config.xaxis.crosshairs.fill.type,o=a.colorFrom,n=a.colorTo,l=a.opacityFrom,h=a.opacityTo,c=a.stops,d=s.enabled,g=s.left,u=s.top,f=s.blur,p=s.color,b=s.opacity,y=t.config.xaxis.crosshairs.fill.color;if(t.config.xaxis.crosshairs.show){"gradient"===r&&(y=e.drawGradient("vertical",o,n,l,h,null,c,null));var w=e.drawRect();1===t.config.xaxis.crosshairs.width&&(w=e.drawLine());var k=t.globals.gridHeight;(!x.isNumber(k)||k<0)&&(k=0);var A=t.config.xaxis.crosshairs.width;(!x.isNumber(A)||A<0)&&(A=0),w.attr({class:"apexcharts-xcrosshairs",x:0,y:0,y2:k,width:A,height:k,fill:y,filter:"none","fill-opacity":t.config.xaxis.crosshairs.opacity,stroke:t.config.xaxis.crosshairs.stroke.color,"stroke-width":t.config.xaxis.crosshairs.stroke.width,"stroke-dasharray":t.config.xaxis.crosshairs.stroke.dashArray}),d&&(w=i.dropShadow(w,{left:g,top:u,blur:f,color:p,opacity:b})),t.globals.dom.elGraphical.add(w)}}},{key:"drawYCrosshairs",value:function(){var t=this.w,e=new m(this.ctx),i=t.config.yaxis[0].crosshairs,a=t.globals.barPadForNumericAxis;if(t.config.yaxis[0].crosshairs.show){var s=e.drawLine(-a,0,t.globals.gridWidth+a,0,i.stroke.color,i.stroke.dashArray,i.stroke.width);s.attr({class:"apexcharts-ycrosshairs"}),t.globals.dom.elGraphical.add(s)}var r=e.drawLine(-a,0,t.globals.gridWidth+a,0,i.stroke.color,0,0);r.attr({class:"apexcharts-ycrosshairs-hidden"}),t.globals.dom.elGraphical.add(r)}}]),t}(),K=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"checkResponsiveConfig",value:function(t){var e=this,i=this.w,a=i.config;if(0!==a.responsive.length){var s=a.responsive.slice();s.sort((function(t,e){return t.breakpoint>e.breakpoint?1:e.breakpoint>t.breakpoint?-1:0})).reverse();var r=new X({}),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=s[0].breakpoint,o=window.innerWidth>0?window.innerWidth:screen.width;if(o>a){var n=y.extendArrayProps(r,i.globals.initialConfig,i);t=x.extend(n,t),t=x.extend(i.config,t),e.overrideResponsiveOptions(t)}else for(var l=0;l<s.length;l++)o<s[l].breakpoint&&(t=y.extendArrayProps(r,s[l].options,i),t=x.extend(i.config,t),e.overrideResponsiveOptions(t))};if(t){var n=y.extendArrayProps(r,t,i);n=x.extend(i.config,n),o(n=x.extend(n,t))}else o({})}}},{key:"overrideResponsiveOptions",value:function(t){var e=new X(t).init({responsiveOverride:!0});this.w.config=e}}]),t}(),tt=function(){function t(e){a(this,t),this.ctx=e,this.colors=[],this.w=e.w;var i=this.w;this.isColorFn=!1,this.isHeatmapDistributed="treemap"===i.config.chart.type&&i.config.plotOptions.treemap.distributed||"heatmap"===i.config.chart.type&&i.config.plotOptions.heatmap.distributed,this.isBarDistributed=i.config.plotOptions.bar.distributed&&("bar"===i.config.chart.type||"rangeBar"===i.config.chart.type)}return r(t,[{key:"init",value:function(){this.setDefaultColors()}},{key:"setDefaultColors",value:function(){var t=this,e=this.w,i=new x;if(e.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(e.config.theme.mode)),void 0===e.config.colors?e.globals.colors=this.predefined():(e.globals.colors=e.config.colors,Array.isArray(e.config.colors)&&e.config.colors.length>0&&"function"==typeof e.config.colors[0]&&(e.globals.colors=e.config.series.map((function(i,a){var s=e.config.colors[a];return s||(s=e.config.colors[0]),"function"==typeof s?(t.isColorFn=!0,s({value:e.globals.axisCharts?e.globals.series[a][0]?e.globals.series[a][0]:0:e.globals.series[a],seriesIndex:a,dataPointIndex:a,w:e})):s})))),e.globals.seriesColors.map((function(t,i){t&&(e.globals.colors[i]=t)})),e.config.theme.monochrome.enabled){var a=[],s=e.globals.series.length;(this.isBarDistributed||this.isHeatmapDistributed)&&(s=e.globals.series[0].length*e.globals.series.length);for(var r=e.config.theme.monochrome.color,o=1/(s/e.config.theme.monochrome.shadeIntensity),n=e.config.theme.monochrome.shadeTo,l=0,h=0;h<s;h++){var c=void 0;"dark"===n?(c=i.shadeColor(-1*l,r),l+=o):(c=i.shadeColor(l,r),l+=o),a.push(c)}e.globals.colors=a.slice()}var d=e.globals.colors.slice();this.pushExtraColors(e.globals.colors);["fill","stroke"].forEach((function(i){void 0===e.config[i].colors?e.globals[i].colors=t.isColorFn?e.config.colors:d:e.globals[i].colors=e.config[i].colors.slice(),t.pushExtraColors(e.globals[i].colors)})),void 0===e.config.dataLabels.style.colors?e.globals.dataLabels.style.colors=d:e.globals.dataLabels.style.colors=e.config.dataLabels.style.colors.slice(),this.pushExtraColors(e.globals.dataLabels.style.colors,50),void 0===e.config.plotOptions.radar.polygons.fill.colors?e.globals.radarPolygons.fill.colors=["dark"===e.config.theme.mode?"#424242":"none"]:e.globals.radarPolygons.fill.colors=e.config.plotOptions.radar.polygons.fill.colors.slice(),this.pushExtraColors(e.globals.radarPolygons.fill.colors,20),void 0===e.config.markers.colors?e.globals.markers.colors=d:e.globals.markers.colors=e.config.markers.colors.slice(),this.pushExtraColors(e.globals.markers.colors)}},{key:"pushExtraColors",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.w,s=e||a.globals.series.length;if(null===i&&(i=this.isBarDistributed||this.isHeatmapDistributed||"heatmap"===a.config.chart.type&&a.config.plotOptions.heatmap.colorScale.inverse),i&&a.globals.series.length&&(s=a.globals.series[a.globals.maxValsInArrayIndex].length*a.globals.series.length),t.length<s)for(var r=s-t.length,o=0;o<r;o++)t.push(t[o])}},{key:"updateThemeOptions",value:function(t){t.chart=t.chart||{},t.tooltip=t.tooltip||{};var e=t.theme.mode||"light",i=t.theme.palette?t.theme.palette:"dark"===e?"palette4":"palette1",a=t.chart.foreColor?t.chart.foreColor:"dark"===e?"#f6f7f8":"#373d3f";return t.tooltip.theme=e,t.chart.foreColor=a,t.theme.palette=i,t}},{key:"predefined",value:function(){switch(this.w.config.theme.palette){case"palette1":default:this.colors=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"];break;case"palette2":this.colors=["#3f51b5","#03a9f4","#4caf50","#f9ce1d","#FF9800"];break;case"palette3":this.colors=["#33b2df","#546E7A","#d4526e","#13d8aa","#A5978B"];break;case"palette4":this.colors=["#4ecdc4","#c7f464","#81D4FA","#fd6a6a","#546E7A"];break;case"palette5":this.colors=["#2b908f","#f9a3a4","#90ee7e","#fa4443","#69d2e7"];break;case"palette6":this.colors=["#449DD1","#F86624","#EA3546","#662E9B","#C5D86D"];break;case"palette7":this.colors=["#D7263D","#1B998B","#2E294E","#F46036","#E2C044"];break;case"palette8":this.colors=["#662E9B","#F86624","#F9C80E","#EA3546","#43BCCD"];break;case"palette9":this.colors=["#5C4742","#A5978B","#8D5B4C","#5A2A27","#C4BBAF"];break;case"palette10":this.colors=["#A300D6","#7D02EB","#5653FE","#2983FF","#00B1F2"]}return this.colors}}]),t}(),et=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"draw",value:function(){this.drawTitleSubtitle("title"),this.drawTitleSubtitle("subtitle")}},{key:"drawTitleSubtitle",value:function(t){var e=this.w,i="title"===t?e.config.title:e.config.subtitle,a=e.globals.svgWidth/2,s=i.offsetY,r="middle";if("left"===i.align?(a=10,r="start"):"right"===i.align&&(a=e.globals.svgWidth-10,r="end"),a+=i.offsetX,s=s+parseInt(i.style.fontSize,10)+i.margin/2,void 0!==i.text){var o=new m(this.ctx).drawText({x:a,y:s,text:i.text,textAnchor:r,fontSize:i.style.fontSize,fontFamily:i.style.fontFamily,fontWeight:i.style.fontWeight,foreColor:i.style.color,opacity:1});o.node.setAttribute("class","apexcharts-".concat(t,"-text")),e.globals.dom.Paper.add(o)}}}]),t}(),it=function(){function t(e){a(this,t),this.w=e.w,this.dCtx=e}return r(t,[{key:"getTitleSubtitleCoords",value:function(t){var e=this.w,i=0,a=0,s="title"===t?e.config.title.floating:e.config.subtitle.floating,r=e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t,"-text"));if(null!==r&&!s){var o=r.getBoundingClientRect();i=o.width,a=e.globals.axisCharts?o.height+5:o.height}return{width:i,height:a}}},{key:"getLegendsRect",value:function(){var t=this.w,e=t.globals.dom.baseEl.querySelector(".apexcharts-legend");t.config.legend.height||"top"!==t.config.legend.position&&"bottom"!==t.config.legend.position||(e.style.maxHeight=t.globals.svgHeight/2+"px");var i=Object.assign({},x.getBoundingClientRect(e));return null!==e&&!t.config.legend.floating&&t.config.legend.show?this.dCtx.lgRect={x:i.x,y:i.y,height:i.height,width:0===i.height?0:i.width}:this.dCtx.lgRect={x:0,y:0,height:0,width:0},"left"!==t.config.legend.position&&"right"!==t.config.legend.position||1.5*this.dCtx.lgRect.width>t.globals.svgWidth&&(this.dCtx.lgRect.width=t.globals.svgWidth/1.5),this.dCtx.lgRect}},{key:"getLargestStringFromMultiArr",value:function(t,e){var i=t;if(this.w.globals.isMultiLineX){var a=e.map((function(t,e){return Array.isArray(t)?t.length:1})),s=Math.max.apply(Math,u(a));i=e[a.indexOf(s)]}return i}}]),t}(),at=function(){function t(e){a(this,t),this.w=e.w,this.dCtx=e}return r(t,[{key:"getxAxisLabelsCoords",value:function(){var t,e=this.w,i=e.globals.labels.slice();if(e.config.xaxis.convertedCatToNumeric&&0===i.length&&(i=e.globals.categoryLabels),e.globals.timescaleLabels.length>0){var a=this.getxAxisTimeScaleLabelsCoords();t={width:a.width,height:a.height},e.globals.rotateXLabels=!1}else{this.dCtx.lgWidthForSideLegends="left"!==e.config.legend.position&&"right"!==e.config.legend.position||e.config.legend.floating?0:this.dCtx.lgRect.width;var s=e.globals.xLabelFormatter,r=x.getLargestStringFromArr(i),o=this.dCtx.dimHelpers.getLargestStringFromMultiArr(r,i);e.globals.isBarHorizontal&&(o=r=e.globals.yAxisScale[0].result.reduce((function(t,e){return t.length>e.length?t:e}),0));var n=new W(this.dCtx.ctx),l=r;r=n.xLabelFormat(s,r,l,{i:void 0,dateFormatter:new T(this.dCtx.ctx).formatDate,w:e}),o=n.xLabelFormat(s,o,l,{i:void 0,dateFormatter:new T(this.dCtx.ctx).formatDate,w:e}),(e.config.xaxis.convertedCatToNumeric&&void 0===r||""===String(r).trim())&&(o=r="1");var h=new m(this.dCtx.ctx),c=h.getTextRects(r,e.config.xaxis.labels.style.fontSize),d=c;if(r!==o&&(d=h.getTextRects(o,e.config.xaxis.labels.style.fontSize)),(t={width:c.width>=d.width?c.width:d.width,height:c.height>=d.height?c.height:d.height}).width*i.length>e.globals.svgWidth-this.dCtx.lgWidthForSideLegends-this.dCtx.yAxisWidth-this.dCtx.gridPad.left-this.dCtx.gridPad.right&&0!==e.config.xaxis.labels.rotate||e.config.xaxis.labels.rotateAlways){if(!e.globals.isBarHorizontal){e.globals.rotateXLabels=!0;var g=function(t){return h.getTextRects(t,e.config.xaxis.labels.style.fontSize,e.config.xaxis.labels.style.fontFamily,"rotate(".concat(e.config.xaxis.labels.rotate," 0 0)"),!1)};c=g(r),r!==o&&(d=g(o)),t.height=(c.height>d.height?c.height:d.height)/1.5,t.width=c.width>d.width?c.width:d.width}}else e.globals.rotateXLabels=!1}return e.config.xaxis.labels.show||(t={width:0,height:0}),{width:t.width,height:t.height}}},{key:"getxAxisGroupLabelsCoords",value:function(){var t,e=this.w;if(!e.globals.hasGroups)return{width:0,height:0};var i,a=(null===(t=e.config.xaxis.group.style)||void 0===t?void 0:t.fontSize)||e.config.xaxis.labels.style.fontSize,s=e.globals.groups.map((function(t){return t.title})),r=x.getLargestStringFromArr(s),o=this.dCtx.dimHelpers.getLargestStringFromMultiArr(r,s),n=new m(this.dCtx.ctx),l=n.getTextRects(r,a),h=l;return r!==o&&(h=n.getTextRects(o,a)),i={width:l.width>=h.width?l.width:h.width,height:l.height>=h.height?l.height:h.height},e.config.xaxis.labels.show||(i={width:0,height:0}),{width:i.width,height:i.height}}},{key:"getxAxisTitleCoords",value:function(){var t=this.w,e=0,i=0;if(void 0!==t.config.xaxis.title.text){var a=new m(this.dCtx.ctx).getTextRects(t.config.xaxis.title.text,t.config.xaxis.title.style.fontSize);e=a.width,i=a.height}return{width:e,height:i}}},{key:"getxAxisTimeScaleLabelsCoords",value:function(){var t,e=this.w;this.dCtx.timescaleLabels=e.globals.timescaleLabels.slice();var i=this.dCtx.timescaleLabels.map((function(t){return t.value})),a=i.reduce((function(t,e){return void 0===t?(console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"),0):t.length>e.length?t:e}),0);return 1.05*(t=new m(this.dCtx.ctx).getTextRects(a,e.config.xaxis.labels.style.fontSize)).width*i.length>e.globals.gridWidth&&0!==e.config.xaxis.labels.rotate&&(e.globals.overlappingXLabels=!0),t}},{key:"additionalPaddingXLabels",value:function(t){var e=this,i=this.w,a=i.globals,s=i.config,r=s.xaxis.type,o=t.width;a.skipLastTimelinelabel=!1,a.skipFirstTimelinelabel=!1;var n=i.config.yaxis[0].opposite&&i.globals.isBarHorizontal,l=function(t,n){(function(t){return-1!==a.collapsedSeriesIndices.indexOf(t)})(n)||function(t){if(e.dCtx.timescaleLabels&&e.dCtx.timescaleLabels.length){var n=e.dCtx.timescaleLabels[0],l=e.dCtx.timescaleLabels[e.dCtx.timescaleLabels.length-1].position+o/1.75-e.dCtx.yAxisWidthRight,h=n.position-o/1.75+e.dCtx.yAxisWidthLeft,c="right"===i.config.legend.position&&e.dCtx.lgRect.width>0?e.dCtx.lgRect.width:0;l>a.svgWidth-a.translateX-c&&(a.skipLastTimelinelabel=!0),h<-(t.show&&!t.floating||"bar"!==s.chart.type&&"candlestick"!==s.chart.type&&"rangeBar"!==s.chart.type&&"boxPlot"!==s.chart.type?10:o/1.75)&&(a.skipFirstTimelinelabel=!0)}else"datetime"===r?e.dCtx.gridPad.right<o&&!a.rotateXLabels&&(a.skipLastTimelinelabel=!0):"datetime"!==r&&e.dCtx.gridPad.right<o/2-e.dCtx.yAxisWidthRight&&!a.rotateXLabels&&!i.config.xaxis.labels.trim&&("between"!==i.config.xaxis.tickPlacement||i.globals.isBarHorizontal)&&(e.dCtx.xPadRight=o/2+1)}(t)};s.yaxis.forEach((function(t,i){n?(e.dCtx.gridPad.left<o&&(e.dCtx.xPadLeft=o/2+1),e.dCtx.xPadRight=o/2+1):l(t,i)}))}}]),t}(),st=function(){function t(e){a(this,t),this.w=e.w,this.dCtx=e}return r(t,[{key:"getyAxisLabelsCoords",value:function(){var t=this,e=this.w,i=[],a=10,s=new B(this.dCtx.ctx);return e.config.yaxis.map((function(r,o){var n=e.globals.yAxisScale[o],l=0;if(!s.isYAxisHidden(o)&&r.labels.show&&void 0!==r.labels.minWidth&&(l=r.labels.minWidth),!s.isYAxisHidden(o)&&r.labels.show&&n.result.length){var h=e.globals.yLabelFormatters[o],c=n.niceMin===Number.MIN_VALUE?0:n.niceMin,d=String(c).length>String(n.niceMax).length?c:n.niceMax,g=h(d,{seriesIndex:o,dataPointIndex:-1,w:e}),u=g;if(void 0!==g&&0!==g.length||(g=d),e.globals.isBarHorizontal){a=0;var f=e.globals.labels.slice();g=h(g=x.getLargestStringFromArr(f),{seriesIndex:o,dataPointIndex:-1,w:e}),u=t.dCtx.dimHelpers.getLargestStringFromMultiArr(g,f)}var p=new m(t.dCtx.ctx),b="rotate(".concat(r.labels.rotate," 0 0)"),v=p.getTextRects(g,r.labels.style.fontSize,r.labels.style.fontFamily,b,!1),y=v;g!==u&&(y=p.getTextRects(u,r.labels.style.fontSize,r.labels.style.fontFamily,b,!1)),i.push({width:(l>y.width||l>v.width?l:y.width>v.width?y.width:v.width)+a,height:y.height>v.height?y.height:v.height})}else i.push({width:0,height:0})})),i}},{key:"getyAxisTitleCoords",value:function(){var t=this,e=this.w,i=[];return e.config.yaxis.map((function(e,a){if(e.show&&void 0!==e.title.text){var s=new m(t.dCtx.ctx),r="rotate(".concat(e.title.rotate," 0 0)"),o=s.getTextRects(e.title.text,e.title.style.fontSize,e.title.style.fontFamily,r,!1);i.push({width:o.width,height:o.height})}else i.push({width:0,height:0})})),i}},{key:"getTotalYAxisWidth",value:function(){var t=this.w,e=0,i=0,a=0,s=t.globals.yAxisScale.length>1?10:0,r=new B(this.dCtx.ctx),o=function(o,n){var l=t.config.yaxis[n].floating,h=0;o.width>0&&!l?(h=o.width+s,function(e){return t.globals.ignoreYAxisIndexes.indexOf(e)>-1}(n)&&(h=h-o.width-s)):h=l||r.isYAxisHidden(n)?0:5,t.config.yaxis[n].opposite?a+=h:i+=h,e+=h};return t.globals.yLabelsCoords.map((function(t,e){o(t,e)})),t.globals.yTitleCoords.map((function(t,e){o(t,e)})),t.globals.isBarHorizontal&&!t.config.yaxis[0].floating&&(e=t.globals.yLabelsCoords[0].width+t.globals.yTitleCoords[0].width+15),this.dCtx.yAxisWidthLeft=i,this.dCtx.yAxisWidthRight=a,e}}]),t}(),rt=function(){function t(e){a(this,t),this.w=e.w,this.dCtx=e}return r(t,[{key:"gridPadForColumnsInNumericAxis",value:function(t){var e=this.w;if(e.globals.noData||e.globals.allSeriesCollapsed)return 0;var i=function(t){return"bar"===t||"rangeBar"===t||"candlestick"===t||"boxPlot"===t},a=e.config.chart.type,s=0,r=i(a)?e.config.series.length:1;if(e.globals.comboBarCount>0&&(r=e.globals.comboBarCount),e.globals.collapsedSeries.forEach((function(t){i(t.type)&&(r-=1)})),e.config.chart.stacked&&(r=1),(i(a)||e.globals.comboBarCount>0)&&e.globals.isXNumeric&&!e.globals.isBarHorizontal&&r>0){var o,n,l=Math.abs(e.globals.initialMaxX-e.globals.initialMinX);l<=3&&(l=e.globals.dataPoints),o=l/t,e.globals.minXDiff&&e.globals.minXDiff/o>0&&(n=e.globals.minXDiff/o),n>t/2&&(n/=2),(s=n/r*parseInt(e.config.plotOptions.bar.columnWidth,10)/100)<1&&(s=1),s=s/(r>1?1:1.5)+5,e.globals.barPadForNumericAxis=s}return s}},{key:"gridPadFortitleSubtitle",value:function(){var t=this,e=this.w,i=e.globals,a=this.dCtx.isSparkline||!e.globals.axisCharts?0:10;["title","subtitle"].forEach((function(i){void 0!==e.config[i].text?a+=e.config[i].margin:a+=t.dCtx.isSparkline||!e.globals.axisCharts?0:5})),!e.config.legend.show||"bottom"!==e.config.legend.position||e.config.legend.floating||e.globals.axisCharts||(a+=10);var s=this.dCtx.dimHelpers.getTitleSubtitleCoords("title"),r=this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");i.gridHeight=i.gridHeight-s.height-r.height-a,i.translateY=i.translateY+s.height+r.height+a}},{key:"setGridXPosForDualYAxis",value:function(t,e){var i=this.w,a=new B(this.dCtx.ctx);i.config.yaxis.map((function(s,r){-1!==i.globals.ignoreYAxisIndexes.indexOf(r)||s.floating||a.isYAxisHidden(r)||(s.opposite&&(i.globals.translateX=i.globals.translateX-(e[r].width+t[r].width)-parseInt(i.config.yaxis[r].labels.style.fontSize,10)/1.2-12),i.globals.translateX<2&&(i.globals.translateX=2))}))}}]),t}(),ot=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.lgRect={},this.yAxisWidth=0,this.yAxisWidthLeft=0,this.yAxisWidthRight=0,this.xAxisHeight=0,this.isSparkline=this.w.config.chart.sparkline.enabled,this.dimHelpers=new it(this),this.dimYAxis=new st(this),this.dimXAxis=new at(this),this.dimGrid=new rt(this),this.lgWidthForSideLegends=0,this.gridPad=this.w.config.grid.padding,this.xPadRight=0,this.xPadLeft=0}return r(t,[{key:"plotCoords",value:function(){var t=this,e=this.w,i=e.globals;this.lgRect=this.dimHelpers.getLegendsRect(),this.isSparkline&&(e.config.markers.discrete.length>0||e.config.markers.size>0)&&Object.entries(this.gridPad).forEach((function(e){var i=g(e,2),a=i[0],s=i[1];t.gridPad[a]=Math.max(s,t.w.globals.markers.largestSize/1.5)})),i.axisCharts?this.setDimensionsForAxisCharts():this.setDimensionsForNonAxisCharts(),this.dimGrid.gridPadFortitleSubtitle(),i.gridHeight=i.gridHeight-this.gridPad.top-this.gridPad.bottom,i.gridWidth=i.gridWidth-this.gridPad.left-this.gridPad.right-this.xPadRight-this.xPadLeft;var a=this.dimGrid.gridPadForColumnsInNumericAxis(i.gridWidth);i.gridWidth=i.gridWidth-2*a,i.translateX=i.translateX+this.gridPad.left+this.xPadLeft+(a>0?a+4:0),i.translateY=i.translateY+this.gridPad.top}},{key:"setDimensionsForAxisCharts",value:function(){var t=this,e=this.w,i=e.globals,a=this.dimYAxis.getyAxisLabelsCoords(),s=this.dimYAxis.getyAxisTitleCoords();e.globals.yLabelsCoords=[],e.globals.yTitleCoords=[],e.config.yaxis.map((function(t,i){e.globals.yLabelsCoords.push({width:a[i].width,index:i}),e.globals.yTitleCoords.push({width:s[i].width,index:i})})),this.yAxisWidth=this.dimYAxis.getTotalYAxisWidth();var r=this.dimXAxis.getxAxisLabelsCoords(),o=this.dimXAxis.getxAxisGroupLabelsCoords(),n=this.dimXAxis.getxAxisTitleCoords();this.conditionalChecksForAxisCoords(r,n,o),i.translateXAxisY=e.globals.rotateXLabels?this.xAxisHeight/8:-4,i.translateXAxisX=e.globals.rotateXLabels&&e.globals.isXNumeric&&e.config.xaxis.labels.rotate<=-45?-this.xAxisWidth/4:0,e.globals.isBarHorizontal&&(i.rotateXLabels=!1,i.translateXAxisY=parseInt(e.config.xaxis.labels.style.fontSize,10)/1.5*-1),i.translateXAxisY=i.translateXAxisY+e.config.xaxis.labels.offsetY,i.translateXAxisX=i.translateXAxisX+e.config.xaxis.labels.offsetX;var l=this.yAxisWidth,h=this.xAxisHeight;i.xAxisLabelsHeight=this.xAxisHeight-n.height,i.xAxisGroupLabelsHeight=i.xAxisLabelsHeight-r.height,i.xAxisLabelsWidth=this.xAxisWidth,i.xAxisHeight=this.xAxisHeight;var c=10;("radar"===e.config.chart.type||this.isSparkline)&&(l=0,h=i.goldenPadding),this.isSparkline&&(this.lgRect={height:0,width:0}),(this.isSparkline||"treemap"===e.config.chart.type)&&(l=0,h=0,c=0),this.isSparkline||this.dimXAxis.additionalPaddingXLabels(r);var d=function(){i.translateX=l,i.gridHeight=i.svgHeight-t.lgRect.height-h-(t.isSparkline||"treemap"===e.config.chart.type?0:e.globals.rotateXLabels?10:15),i.gridWidth=i.svgWidth-l};switch("top"===e.config.xaxis.position&&(c=i.xAxisHeight-e.config.xaxis.axisTicks.height-5),e.config.legend.position){case"bottom":i.translateY=c,d();break;case"top":i.translateY=this.lgRect.height+c,d();break;case"left":i.translateY=c,i.translateX=this.lgRect.width+l,i.gridHeight=i.svgHeight-h-12,i.gridWidth=i.svgWidth-this.lgRect.width-l;break;case"right":i.translateY=c,i.translateX=l,i.gridHeight=i.svgHeight-h-12,i.gridWidth=i.svgWidth-this.lgRect.width-l-5;break;default:throw new Error("Legend position not supported")}this.dimGrid.setGridXPosForDualYAxis(s,a),new q(this.ctx).setYAxisXPosition(a,s)}},{key:"setDimensionsForNonAxisCharts",value:function(){var t=this.w,e=t.globals,i=t.config,a=0;t.config.legend.show&&!t.config.legend.floating&&(a=20);var s="pie"===i.chart.type||"polarArea"===i.chart.type||"donut"===i.chart.type?"pie":"radialBar",r=i.plotOptions[s].offsetY,o=i.plotOptions[s].offsetX;if(!i.legend.show||i.legend.floating)return e.gridHeight=e.svgHeight-i.grid.padding.left+i.grid.padding.right,e.gridWidth=e.gridHeight,e.translateY=r,void(e.translateX=o+(e.svgWidth-e.gridWidth)/2);switch(i.legend.position){case"bottom":e.gridHeight=e.svgHeight-this.lgRect.height-e.goldenPadding,e.gridWidth=e.svgWidth,e.translateY=r-10,e.translateX=o+(e.svgWidth-e.gridWidth)/2;break;case"top":e.gridHeight=e.svgHeight-this.lgRect.height-e.goldenPadding,e.gridWidth=e.svgWidth,e.translateY=this.lgRect.height+r+10,e.translateX=o+(e.svgWidth-e.gridWidth)/2;break;case"left":e.gridWidth=e.svgWidth-this.lgRect.width-a,e.gridHeight="auto"!==i.chart.height?e.svgHeight:e.gridWidth,e.translateY=r,e.translateX=o+this.lgRect.width+a;break;case"right":e.gridWidth=e.svgWidth-this.lgRect.width-a-5,e.gridHeight="auto"!==i.chart.height?e.svgHeight:e.gridWidth,e.translateY=r,e.translateX=o+10;break;default:throw new Error("Legend position not supported")}}},{key:"conditionalChecksForAxisCoords",value:function(t,e,i){var a=this.w,s=a.globals.hasGroups?2:1,r=i.height+t.height+e.height,o=a.globals.isMultiLineX?1.2:a.globals.LINE_HEIGHT_RATIO,n=a.globals.rotateXLabels?22:10,l=a.globals.rotateXLabels&&"bottom"===a.config.legend.position?10:0;this.xAxisHeight=r*o+s*n+l,this.xAxisWidth=t.width,this.xAxisHeight-e.height>a.config.xaxis.labels.maxHeight&&(this.xAxisHeight=a.config.xaxis.labels.maxHeight),a.config.xaxis.labels.minHeight&&this.xAxisHeight<a.config.xaxis.labels.minHeight&&(this.xAxisHeight=a.config.xaxis.labels.minHeight),a.config.xaxis.floating&&(this.xAxisHeight=0);var h=0,c=0;a.config.yaxis.forEach((function(t){h+=t.labels.minWidth,c+=t.labels.maxWidth})),this.yAxisWidth<h&&(this.yAxisWidth=h),this.yAxisWidth>c&&(this.yAxisWidth=c)}}]),t}(),nt=function(){function t(e){a(this,t),this.w=e.w,this.lgCtx=e}return r(t,[{key:"getLegendStyles",value:function(){var t=document.createElement("style");t.setAttribute("type","text/css");var e=document.createTextNode("\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }");return t.appendChild(e),t}},{key:"getLegendBBox",value:function(){var t=this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(),e=t.width;return{clwh:t.height,clww:e}}},{key:"appendToForeignObject",value:function(){var t=this.w.globals;t.dom.elLegendForeign=document.createElementNS(t.SVGNS,"foreignObject");var e=t.dom.elLegendForeign;e.setAttribute("x",0),e.setAttribute("y",0),e.setAttribute("width",t.svgWidth),e.setAttribute("height",t.svgHeight),t.dom.elLegendWrap.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),e.appendChild(t.dom.elLegendWrap),e.appendChild(this.getLegendStyles()),t.dom.Paper.node.insertBefore(e,t.dom.elGraphical.node)}},{key:"toggleDataSeries",value:function(t,e){var i=this,a=this.w;if(a.globals.axisCharts||"radialBar"===a.config.chart.type){a.globals.resized=!0;var s=null,r=null;if(a.globals.risingSeries=[],a.globals.axisCharts?(s=a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t,"']")),r=parseInt(s.getAttribute("data:realIndex"),10)):(s=a.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t+1,"']")),r=parseInt(s.getAttribute("rel"),10)-1),e)[{cs:a.globals.collapsedSeries,csi:a.globals.collapsedSeriesIndices},{cs:a.globals.ancillaryCollapsedSeries,csi:a.globals.ancillaryCollapsedSeriesIndices}].forEach((function(t){i.riseCollapsedSeries(t.cs,t.csi,r)}));else this.hideSeries({seriesEl:s,realIndex:r})}else{var o=a.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t+1,"'] path")),n=a.config.chart.type;if("pie"===n||"polarArea"===n||"donut"===n){var l=a.config.plotOptions.pie.donut.labels;new m(this.lgCtx.ctx).pathMouseDown(o.members[0],null),this.lgCtx.ctx.pie.printDataLabelsInner(o.members[0].node,l)}o.fire("click")}}},{key:"hideSeries",value:function(t){var e=t.seriesEl,i=t.realIndex,a=this.w,s=x.clone(a.config.series);if(a.globals.axisCharts){var r=!1;if(a.config.yaxis[i]&&a.config.yaxis[i].show&&a.config.yaxis[i].showAlways&&(r=!0,a.globals.ancillaryCollapsedSeriesIndices.indexOf(i)<0&&(a.globals.ancillaryCollapsedSeries.push({index:i,data:s[i].data.slice(),type:e.parentNode.className.baseVal.split("-")[1]}),a.globals.ancillaryCollapsedSeriesIndices.push(i))),!r){a.globals.collapsedSeries.push({index:i,data:s[i].data.slice(),type:e.parentNode.className.baseVal.split("-")[1]}),a.globals.collapsedSeriesIndices.push(i);var o=a.globals.risingSeries.indexOf(i);a.globals.risingSeries.splice(o,1)}}else a.globals.collapsedSeries.push({index:i,data:s[i]}),a.globals.collapsedSeriesIndices.push(i);for(var n=e.childNodes,l=0;l<n.length;l++)n[l].classList.contains("apexcharts-series-markers-wrap")&&(n[l].classList.contains("apexcharts-hide")?n[l].classList.remove("apexcharts-hide"):n[l].classList.add("apexcharts-hide"));a.globals.allSeriesCollapsed=a.globals.collapsedSeries.length===a.config.series.length,s=this._getSeriesBasedOnCollapsedState(s),this.lgCtx.ctx.updateHelpers._updateSeries(s,a.config.chart.animations.dynamicAnimation.enabled)}},{key:"riseCollapsedSeries",value:function(t,e,i){var a=this.w,s=x.clone(a.config.series);if(t.length>0){for(var r=0;r<t.length;r++)t[r].index===i&&(a.globals.axisCharts?(s[i].data=t[r].data.slice(),t.splice(r,1),e.splice(r,1),a.globals.risingSeries.push(i)):(s[i]=t[r].data,t.splice(r,1),e.splice(r,1),a.globals.risingSeries.push(i)));s=this._getSeriesBasedOnCollapsedState(s),this.lgCtx.ctx.updateHelpers._updateSeries(s,a.config.chart.animations.dynamicAnimation.enabled)}}},{key:"_getSeriesBasedOnCollapsedState",value:function(t){var e=this.w;return e.globals.axisCharts?t.forEach((function(i,a){e.globals.collapsedSeriesIndices.indexOf(a)>-1&&(t[a].data=[])})):t.forEach((function(i,a){e.globals.collapsedSeriesIndices.indexOf(a)>-1&&(t[a]=0)})),t}}]),t}(),lt=function(){function t(e,i){a(this,t),this.ctx=e,this.w=e.w,this.onLegendClick=this.onLegendClick.bind(this),this.onLegendHovered=this.onLegendHovered.bind(this),this.isBarsDistributed="bar"===this.w.config.chart.type&&this.w.config.plotOptions.bar.distributed&&1===this.w.config.series.length,this.legendHelpers=new nt(this)}return r(t,[{key:"init",value:function(){var t=this.w,e=t.globals,i=t.config;if((i.legend.showForSingleSeries&&1===e.series.length||this.isBarsDistributed||e.series.length>1||!e.axisCharts)&&i.legend.show){for(;e.dom.elLegendWrap.firstChild;)e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);this.drawLegends(),x.isIE11()?document.getElementsByTagName("head")[0].appendChild(this.legendHelpers.getLegendStyles()):this.legendHelpers.appendToForeignObject(),"bottom"===i.legend.position||"top"===i.legend.position?this.legendAlignHorizontal():"right"!==i.legend.position&&"left"!==i.legend.position||this.legendAlignVertical()}}},{key:"drawLegends",value:function(){var t=this,e=this.w,i=e.config.legend.fontFamily,a=e.globals.seriesNames,s=e.globals.colors.slice();if("heatmap"===e.config.chart.type){var r=e.config.plotOptions.heatmap.colorScale.ranges;a=r.map((function(t){return t.name?t.name:t.from+" - "+t.to})),s=r.map((function(t){return t.color}))}else this.isBarsDistributed&&(a=e.globals.labels.slice());e.config.legend.customLegendItems.length&&(a=e.config.legend.customLegendItems);for(var o=e.globals.legendFormatter,n=e.config.legend.inverseOrder,l=n?a.length-1:0;n?l>=0:l<=a.length-1;n?l--:l++){var h=o(a[l],{seriesIndex:l,w:e}),c=!1,d=!1;if(e.globals.collapsedSeries.length>0)for(var g=0;g<e.globals.collapsedSeries.length;g++)e.globals.collapsedSeries[g].index===l&&(c=!0);if(e.globals.ancillaryCollapsedSeriesIndices.length>0)for(var u=0;u<e.globals.ancillaryCollapsedSeriesIndices.length;u++)e.globals.ancillaryCollapsedSeriesIndices[u]===l&&(d=!0);var f=document.createElement("span");f.classList.add("apexcharts-legend-marker");var p=e.config.legend.markers.offsetX,b=e.config.legend.markers.offsetY,v=e.config.legend.markers.height,w=e.config.legend.markers.width,k=e.config.legend.markers.strokeWidth,A=e.config.legend.markers.strokeColor,S=e.config.legend.markers.radius,C=f.style;C.background=s[l],C.color=s[l],C.setProperty("background",s[l],"important"),e.config.legend.markers.fillColors&&e.config.legend.markers.fillColors[l]&&(C.background=e.config.legend.markers.fillColors[l]),void 0!==e.globals.seriesColors[l]&&(C.background=e.globals.seriesColors[l],C.color=e.globals.seriesColors[l]),C.height=Array.isArray(v)?parseFloat(v[l])+"px":parseFloat(v)+"px",C.width=Array.isArray(w)?parseFloat(w[l])+"px":parseFloat(w)+"px",C.left=(Array.isArray(p)?parseFloat(p[l]):parseFloat(p))+"px",C.top=(Array.isArray(b)?parseFloat(b[l]):parseFloat(b))+"px",C.borderWidth=Array.isArray(k)?k[l]:k,C.borderColor=Array.isArray(A)?A[l]:A,C.borderRadius=Array.isArray(S)?parseFloat(S[l])+"px":parseFloat(S)+"px",e.config.legend.markers.customHTML&&(Array.isArray(e.config.legend.markers.customHTML)?e.config.legend.markers.customHTML[l]&&(f.innerHTML=e.config.legend.markers.customHTML[l]()):f.innerHTML=e.config.legend.markers.customHTML()),m.setAttrs(f,{rel:l+1,"data:collapsed":c||d}),(c||d)&&f.classList.add("apexcharts-inactive-legend");var L=document.createElement("div"),P=document.createElement("span");P.classList.add("apexcharts-legend-text"),P.innerHTML=Array.isArray(h)?h.join(" "):h;var T=e.config.legend.labels.useSeriesColors?e.globals.colors[l]:e.config.legend.labels.colors;T||(T=e.config.chart.foreColor),P.style.color=T,P.style.fontSize=parseFloat(e.config.legend.fontSize)+"px",P.style.fontWeight=e.config.legend.fontWeight,P.style.fontFamily=i||e.config.chart.fontFamily,m.setAttrs(P,{rel:l+1,i:l,"data:default-text":encodeURIComponent(h),"data:collapsed":c||d}),L.appendChild(f),L.appendChild(P);var M=new y(this.ctx);if(!e.config.legend.showForZeroSeries)0===M.getSeriesTotalByIndex(l)&&M.seriesHaveSameValues(l)&&!M.isSeriesNull(l)&&-1===e.globals.collapsedSeriesIndices.indexOf(l)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(l)&&L.classList.add("apexcharts-hidden-zero-series");e.config.legend.showForNullSeries||M.isSeriesNull(l)&&-1===e.globals.collapsedSeriesIndices.indexOf(l)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(l)&&L.classList.add("apexcharts-hidden-null-series"),e.globals.dom.elLegendWrap.appendChild(L),e.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(e.config.legend.horizontalAlign)),e.globals.dom.elLegendWrap.classList.add("apx-legend-position-"+e.config.legend.position),L.classList.add("apexcharts-legend-series"),L.style.margin="".concat(e.config.legend.itemMargin.vertical,"px ").concat(e.config.legend.itemMargin.horizontal,"px"),e.globals.dom.elLegendWrap.style.width=e.config.legend.width?e.config.legend.width+"px":"",e.globals.dom.elLegendWrap.style.height=e.config.legend.height?e.config.legend.height+"px":"",m.setAttrs(L,{rel:l+1,seriesName:x.escapeString(a[l]),"data:collapsed":c||d}),(c||d)&&L.classList.add("apexcharts-inactive-legend"),e.config.legend.onItemClick.toggleDataSeries||L.classList.add("apexcharts-no-click")}e.globals.dom.elWrap.addEventListener("click",t.onLegendClick,!0),e.config.legend.onItemHover.highlightDataSeries&&0===e.config.legend.customLegendItems.length&&(e.globals.dom.elWrap.addEventListener("mousemove",t.onLegendHovered,!0),e.globals.dom.elWrap.addEventListener("mouseout",t.onLegendHovered,!0))}},{key:"setLegendWrapXY",value:function(t,e){var i=this.w,a=i.globals.dom.baseEl.querySelector(".apexcharts-legend"),s=a.getBoundingClientRect(),r=0,o=0;if("bottom"===i.config.legend.position)o+=i.globals.svgHeight-s.height/2;else if("top"===i.config.legend.position){var n=new ot(this.ctx),l=n.dimHelpers.getTitleSubtitleCoords("title").height,h=n.dimHelpers.getTitleSubtitleCoords("subtitle").height;o=o+(l>0?l-10:0)+(h>0?h-10:0)}a.style.position="absolute",r=r+t+i.config.legend.offsetX,o=o+e+i.config.legend.offsetY,a.style.left=r+"px",a.style.top=o+"px","bottom"===i.config.legend.position?(a.style.top="auto",a.style.bottom=5-i.config.legend.offsetY+"px"):"right"===i.config.legend.position&&(a.style.left="auto",a.style.right=25+i.config.legend.offsetX+"px");["width","height"].forEach((function(t){a.style[t]&&(a.style[t]=parseInt(i.config.legend[t],10)+"px")}))}},{key:"legendAlignHorizontal",value:function(){var t=this.w;t.globals.dom.baseEl.querySelector(".apexcharts-legend").style.right=0;var e=this.legendHelpers.getLegendBBox(),i=new ot(this.ctx),a=i.dimHelpers.getTitleSubtitleCoords("title"),s=i.dimHelpers.getTitleSubtitleCoords("subtitle"),r=0;"bottom"===t.config.legend.position?r=-e.clwh/1.8:"top"===t.config.legend.position&&(r=a.height+s.height+t.config.title.margin+t.config.subtitle.margin-10),this.setLegendWrapXY(20,r)}},{key:"legendAlignVertical",value:function(){var t=this.w,e=this.legendHelpers.getLegendBBox(),i=0;"left"===t.config.legend.position&&(i=20),"right"===t.config.legend.position&&(i=t.globals.svgWidth-e.clww-10),this.setLegendWrapXY(i,20)}},{key:"onLegendHovered",value:function(t){var e=this.w,i=t.target.classList.contains("apexcharts-legend-text")||t.target.classList.contains("apexcharts-legend-marker");if("heatmap"===e.config.chart.type||this.isBarsDistributed){if(i){var a=parseInt(t.target.getAttribute("rel"),10)-1;this.ctx.events.fireEvent("legendHover",[this.ctx,a,this.w]),new O(this.ctx).highlightRangeInSeries(t,t.target)}}else!t.target.classList.contains("apexcharts-inactive-legend")&&i&&new O(this.ctx).toggleSeriesOnHover(t,t.target)}},{key:"onLegendClick",value:function(t){var e=this.w;if(!e.config.legend.customLegendItems.length&&(t.target.classList.contains("apexcharts-legend-text")||t.target.classList.contains("apexcharts-legend-marker"))){var i=parseInt(t.target.getAttribute("rel"),10)-1,a="true"===t.target.getAttribute("data:collapsed"),s=this.w.config.chart.events.legendClick;"function"==typeof s&&s(this.ctx,i,this.w),this.ctx.events.fireEvent("legendClick",[this.ctx,i,this.w]);var r=this.w.config.legend.markers.onClick;"function"==typeof r&&t.target.classList.contains("apexcharts-legend-marker")&&(r(this.ctx,i,this.w),this.ctx.events.fireEvent("legendMarkerClick",[this.ctx,i,this.w])),"treemap"!==e.config.chart.type&&"heatmap"!==e.config.chart.type&&!this.isBarsDistributed&&e.config.legend.onItemClick.toggleDataSeries&&this.legendHelpers.toggleDataSeries(i,a)}}}]),t}(),ht=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.ev=this.w.config.chart.events,this.selectedClass="apexcharts-selected",this.localeValues=this.w.globals.locale.toolbar,this.minX=i.globals.minX,this.maxX=i.globals.maxX}return r(t,[{key:"createToolbar",value:function(){var t=this,e=this.w,i=function(){return document.createElement("div")},a=i();if(a.setAttribute("class","apexcharts-toolbar"),a.style.top=e.config.chart.toolbar.offsetY+"px",a.style.right=3-e.config.chart.toolbar.offsetX+"px",e.globals.dom.elWrap.appendChild(a),this.elZoom=i(),this.elZoomIn=i(),this.elZoomOut=i(),this.elPan=i(),this.elSelection=i(),this.elZoomReset=i(),this.elMenuIcon=i(),this.elMenu=i(),this.elCustomIcons=[],this.t=e.config.chart.toolbar.tools,Array.isArray(this.t.customIcons))for(var s=0;s<this.t.customIcons.length;s++)this.elCustomIcons.push(i());var r=[],o=function(i,a,s){var o=i.toLowerCase();t.t[o]&&e.config.chart.zoom.enabled&&r.push({el:a,icon:"string"==typeof t.t[o]?t.t[o]:s,title:t.localeValues[i],class:"apexcharts-".concat(o,"-icon")})};o("zoomIn",this.elZoomIn,'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'),o("zoomOut",this.elZoomOut,'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n');var n=function(i){t.t[i]&&e.config.chart[i].enabled&&r.push({el:"zoom"===i?t.elZoom:t.elSelection,icon:"string"==typeof t.t[i]?t.t[i]:"zoom"===i?'<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>':'<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>',title:t.localeValues["zoom"===i?"selectionZoom":"selection"],class:e.globals.isTouchDevice?"apexcharts-element-hidden":"apexcharts-".concat(i,"-icon")})};n("zoom"),n("selection"),this.t.pan&&e.config.chart.zoom.enabled&&r.push({el:this.elPan,icon:"string"==typeof this.t.pan?this.t.pan:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>',title:this.localeValues.pan,class:e.globals.isTouchDevice?"apexcharts-element-hidden":"apexcharts-pan-icon"}),o("reset",this.elZoomReset,'<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'),this.t.download&&r.push({el:this.elMenuIcon,icon:"string"==typeof this.t.download?this.t.download:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',title:this.localeValues.menu,class:"apexcharts-menu-icon"});for(var l=0;l<this.elCustomIcons.length;l++)r.push({el:this.elCustomIcons[l],icon:this.t.customIcons[l].icon,title:this.t.customIcons[l].title,index:this.t.customIcons[l].index,class:"apexcharts-toolbar-custom-icon "+this.t.customIcons[l].class});r.forEach((function(t,e){t.index&&x.moveIndexInArray(r,e,t.index)}));for(var h=0;h<r.length;h++)m.setAttrs(r[h].el,{class:r[h].class,title:r[h].title}),r[h].el.innerHTML=r[h].icon,a.appendChild(r[h].el);this._createHamburgerMenu(a),e.globals.zoomEnabled?this.elZoom.classList.add(this.selectedClass):e.globals.panEnabled?this.elPan.classList.add(this.selectedClass):e.globals.selectionEnabled&&this.elSelection.classList.add(this.selectedClass),this.addToolbarEventListeners()}},{key:"_createHamburgerMenu",value:function(t){this.elMenuItems=[],t.appendChild(this.elMenu),m.setAttrs(this.elMenu,{class:"apexcharts-menu"});var e=[{name:"exportSVG",title:this.localeValues.exportToSVG},{name:"exportPNG",title:this.localeValues.exportToPNG},{name:"exportCSV",title:this.localeValues.exportToCSV}];this.w.globals.allSeriesHasEqualX||e.splice(2,1);for(var i=0;i<e.length;i++)this.elMenuItems.push(document.createElement("div")),this.elMenuItems[i].innerHTML=e[i].title,m.setAttrs(this.elMenuItems[i],{class:"apexcharts-menu-item ".concat(e[i].name),title:e[i].title}),this.elMenu.appendChild(this.elMenuItems[i])}},{key:"addToolbarEventListeners",value:function(){var t=this;this.elZoomReset.addEventListener("click",this.handleZoomReset.bind(this)),this.elSelection.addEventListener("click",this.toggleZoomSelection.bind(this,"selection")),this.elZoom.addEventListener("click",this.toggleZoomSelection.bind(this,"zoom")),this.elZoomIn.addEventListener("click",this.handleZoomIn.bind(this)),this.elZoomOut.addEventListener("click",this.handleZoomOut.bind(this)),this.elPan.addEventListener("click",this.togglePanning.bind(this)),this.elMenuIcon.addEventListener("click",this.toggleMenu.bind(this)),this.elMenuItems.forEach((function(e){e.classList.contains("exportSVG")?e.addEventListener("click",t.handleDownload.bind(t,"svg")):e.classList.contains("exportPNG")?e.addEventListener("click",t.handleDownload.bind(t,"png")):e.classList.contains("exportCSV")&&e.addEventListener("click",t.handleDownload.bind(t,"csv"))}));for(var e=0;e<this.t.customIcons.length;e++)this.elCustomIcons[e].addEventListener("click",this.t.customIcons[e].click.bind(this,this.ctx,this.ctx.w))}},{key:"toggleZoomSelection",value:function(t){this.ctx.getSyncedCharts().forEach((function(e){e.ctx.toolbar.toggleOtherControls();var i="selection"===t?e.ctx.toolbar.elSelection:e.ctx.toolbar.elZoom,a="selection"===t?"selectionEnabled":"zoomEnabled";e.w.globals[a]=!e.w.globals[a],i.classList.contains(e.ctx.toolbar.selectedClass)?i.classList.remove(e.ctx.toolbar.selectedClass):i.classList.add(e.ctx.toolbar.selectedClass)}))}},{key:"getToolbarIconsReference",value:function(){var t=this.w;this.elZoom||(this.elZoom=t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")),this.elPan||(this.elPan=t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")),this.elSelection||(this.elSelection=t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"))}},{key:"enableZoomPanFromToolbar",value:function(t){this.toggleOtherControls(),"pan"===t?this.w.globals.panEnabled=!0:this.w.globals.zoomEnabled=!0;var e="pan"===t?this.elPan:this.elZoom,i="pan"===t?this.elZoom:this.elPan;e&&e.classList.add(this.selectedClass),i&&i.classList.remove(this.selectedClass)}},{key:"togglePanning",value:function(){this.ctx.getSyncedCharts().forEach((function(t){t.ctx.toolbar.toggleOtherControls(),t.w.globals.panEnabled=!t.w.globals.panEnabled,t.ctx.toolbar.elPan.classList.contains(t.ctx.toolbar.selectedClass)?t.ctx.toolbar.elPan.classList.remove(t.ctx.toolbar.selectedClass):t.ctx.toolbar.elPan.classList.add(t.ctx.toolbar.selectedClass)}))}},{key:"toggleOtherControls",value:function(){var t=this,e=this.w;e.globals.panEnabled=!1,e.globals.zoomEnabled=!1,e.globals.selectionEnabled=!1,this.getToolbarIconsReference(),[this.elPan,this.elSelection,this.elZoom].forEach((function(e){e&&e.classList.remove(t.selectedClass)}))}},{key:"handleZoomIn",value:function(){var t=this.w;t.globals.isRangeBar&&(this.minX=t.globals.minY,this.maxX=t.globals.maxY);var e=(this.minX+this.maxX)/2,i=(this.minX+e)/2,a=(this.maxX+e)/2,s=this._getNewMinXMaxX(i,a);t.globals.disableZoomIn||this.zoomUpdateOptions(s.minX,s.maxX)}},{key:"handleZoomOut",value:function(){var t=this.w;if(t.globals.isRangeBar&&(this.minX=t.globals.minY,this.maxX=t.globals.maxY),!("datetime"===t.config.xaxis.type&&new Date(this.minX).getUTCFullYear()<1e3)){var e=(this.minX+this.maxX)/2,i=this.minX-(e-this.minX),a=this.maxX-(e-this.maxX),s=this._getNewMinXMaxX(i,a);t.globals.disableZoomOut||this.zoomUpdateOptions(s.minX,s.maxX)}}},{key:"_getNewMinXMaxX",value:function(t,e){var i=this.w.config.xaxis.convertedCatToNumeric;return{minX:i?Math.floor(t):t,maxX:i?Math.floor(e):e}}},{key:"zoomUpdateOptions",value:function(t,e){var i=this.w;if(void 0!==t||void 0!==e){if(!(i.config.xaxis.convertedCatToNumeric&&(t<1&&(t=1,e=i.globals.dataPoints),e-t<2))){var a={min:t,max:e},s=this.getBeforeZoomRange(a);s&&(a=s.xaxis);var r={xaxis:a},o=x.clone(i.globals.initialConfig.yaxis);if(i.config.chart.zoom.autoScaleYaxis)o=new _(this.ctx).autoScaleY(this.ctx,o,{xaxis:a});i.config.chart.group||(r.yaxis=o),this.w.globals.zoomed=!0,this.ctx.updateHelpers._updateOptions(r,!1,this.w.config.chart.animations.dynamicAnimation.enabled),this.zoomCallback(a,o)}}else this.handleZoomReset()}},{key:"zoomCallback",value:function(t,e){"function"==typeof this.ev.zoomed&&this.ev.zoomed(this.ctx,{xaxis:t,yaxis:e})}},{key:"getBeforeZoomRange",value:function(t,e){var i=null;return"function"==typeof this.ev.beforeZoom&&(i=this.ev.beforeZoom(this,{xaxis:t,yaxis:e})),i}},{key:"toggleMenu",value:function(){var t=this;window.setTimeout((function(){t.elMenu.classList.contains("apexcharts-menu-open")?t.elMenu.classList.remove("apexcharts-menu-open"):t.elMenu.classList.add("apexcharts-menu-open")}),0)}},{key:"handleDownload",value:function(t){var e=this.w,i=new G(this.ctx);switch(t){case"svg":i.exportToSVG(this.ctx);break;case"png":i.exportToPng(this.ctx);break;case"csv":i.exportToCSV({series:e.config.series,columnDelimiter:e.config.chart.toolbar.export.csv.columnDelimiter})}}},{key:"handleZoomReset",value:function(t){this.ctx.getSyncedCharts().forEach((function(t){var e=t.w;if(e.globals.lastXAxis.min=void 0,e.globals.lastXAxis.max=void 0,t.updateHelpers.revertDefaultAxisMinMax(),"function"==typeof e.config.chart.events.beforeResetZoom){var i=e.config.chart.events.beforeResetZoom(t,e);i&&t.updateHelpers.revertDefaultAxisMinMax(i)}"function"==typeof e.config.chart.events.zoomed&&t.ctx.toolbar.zoomCallback({min:e.config.xaxis.min,max:e.config.xaxis.max}),e.globals.zoomed=!1;var a=t.ctx.series.emptyCollapsedSeries(x.clone(e.globals.initialSeries));t.updateHelpers._updateSeries(a,e.config.chart.animations.dynamicAnimation.enabled)}))}},{key:"destroy",value:function(){this.elZoom=null,this.elZoomIn=null,this.elZoomOut=null,this.elPan=null,this.elSelection=null,this.elZoomReset=null,this.elMenuIcon=null}}]),t}(),ct=function(t){n(i,t);var e=d(i);function i(t){var s;return a(this,i),(s=e.call(this,t)).ctx=t,s.w=t.w,s.dragged=!1,s.graphics=new m(s.ctx),s.eventList=["mousedown","mouseleave","mousemove","touchstart","touchmove","mouseup","touchend"],s.clientX=0,s.clientY=0,s.startX=0,s.endX=0,s.dragX=0,s.startY=0,s.endY=0,s.dragY=0,s.moveDirection="none",s}return r(i,[{key:"init",value:function(t){var e=this,i=t.xyRatios,a=this.w,s=this;this.xyRatios=i,this.zoomRect=this.graphics.drawRect(0,0,0,0),this.selectionRect=this.graphics.drawRect(0,0,0,0),this.gridRect=a.globals.dom.baseEl.querySelector(".apexcharts-grid"),this.zoomRect.node.classList.add("apexcharts-zoom-rect"),this.selectionRect.node.classList.add("apexcharts-selection-rect"),a.globals.dom.elGraphical.add(this.zoomRect),a.globals.dom.elGraphical.add(this.selectionRect),"x"===a.config.chart.selection.type?this.slDraggableRect=this.selectionRect.draggable({minX:0,minY:0,maxX:a.globals.gridWidth,maxY:a.globals.gridHeight}).on("dragmove",this.selectionDragging.bind(this,"dragging")):"y"===a.config.chart.selection.type?this.slDraggableRect=this.selectionRect.draggable({minX:0,maxX:a.globals.gridWidth}).on("dragmove",this.selectionDragging.bind(this,"dragging")):this.slDraggableRect=this.selectionRect.draggable().on("dragmove",this.selectionDragging.bind(this,"dragging")),this.preselectedSelection(),this.hoverArea=a.globals.dom.baseEl.querySelector("".concat(a.globals.chartClass," .apexcharts-svg")),this.hoverArea.classList.add("apexcharts-zoomable"),this.eventList.forEach((function(t){e.hoverArea.addEventListener(t,s.svgMouseEvents.bind(s,i),{capture:!1,passive:!0})}))}},{key:"destroy",value:function(){this.slDraggableRect&&(this.slDraggableRect.draggable(!1),this.slDraggableRect.off(),this.selectionRect.off()),this.selectionRect=null,this.zoomRect=null,this.gridRect=null}},{key:"svgMouseEvents",value:function(t,e){var i=this.w,a=this,s=this.ctx.toolbar,r=i.globals.zoomEnabled?i.config.chart.zoom.type:i.config.chart.selection.type,o=i.config.chart.toolbar.autoSelected;if(e.shiftKey?(this.shiftWasPressed=!0,s.enableZoomPanFromToolbar("pan"===o?"zoom":"pan")):this.shiftWasPressed&&(s.enableZoomPanFromToolbar(o),this.shiftWasPressed=!1),e.target){var n,l=e.target.classList;if(e.target.parentNode&&null!==e.target.parentNode&&(n=e.target.parentNode.classList),!(l.contains("apexcharts-selection-rect")||l.contains("apexcharts-legend-marker")||l.contains("apexcharts-legend-text")||n&&n.contains("apexcharts-toolbar"))){if(a.clientX="touchmove"===e.type||"touchstart"===e.type?e.touches[0].clientX:"touchend"===e.type?e.changedTouches[0].clientX:e.clientX,a.clientY="touchmove"===e.type||"touchstart"===e.type?e.touches[0].clientY:"touchend"===e.type?e.changedTouches[0].clientY:e.clientY,"mousedown"===e.type&&1===e.which){var h=a.gridRect.getBoundingClientRect();a.startX=a.clientX-h.left,a.startY=a.clientY-h.top,a.dragged=!1,a.w.globals.mousedown=!0}if(("mousemove"===e.type&&1===e.which||"touchmove"===e.type)&&(a.dragged=!0,i.globals.panEnabled?(i.globals.selection=null,a.w.globals.mousedown&&a.panDragging({context:a,zoomtype:r,xyRatios:t})):(a.w.globals.mousedown&&i.globals.zoomEnabled||a.w.globals.mousedown&&i.globals.selectionEnabled)&&(a.selection=a.selectionDrawing({context:a,zoomtype:r}))),"mouseup"===e.type||"touchend"===e.type||"mouseleave"===e.type){var c=a.gridRect.getBoundingClientRect();a.w.globals.mousedown&&(a.endX=a.clientX-c.left,a.endY=a.clientY-c.top,a.dragX=Math.abs(a.endX-a.startX),a.dragY=Math.abs(a.endY-a.startY),(i.globals.zoomEnabled||i.globals.selectionEnabled)&&a.selectionDrawn({context:a,zoomtype:r}),i.globals.panEnabled&&i.config.xaxis.convertedCatToNumeric&&a.delayedPanScrolled()),i.globals.zoomEnabled&&a.hideSelectionRect(this.selectionRect),a.dragged=!1,a.w.globals.mousedown=!1}this.makeSelectionRectDraggable()}}}},{key:"makeSelectionRectDraggable",value:function(){var t=this.w;if(this.selectionRect){var e=this.selectionRect.node.getBoundingClientRect();e.width>0&&e.height>0&&this.slDraggableRect.selectize({points:"l, r",pointSize:8,pointType:"rect"}).resize({constraint:{minX:0,minY:0,maxX:t.globals.gridWidth,maxY:t.globals.gridHeight}}).on("resizing",this.selectionDragging.bind(this,"resizing"))}}},{key:"preselectedSelection",value:function(){var t=this.w,e=this.xyRatios;if(!t.globals.zoomEnabled)if(void 0!==t.globals.selection&&null!==t.globals.selection)this.drawSelectionRect(t.globals.selection);else if(void 0!==t.config.chart.selection.xaxis.min&&void 0!==t.config.chart.selection.xaxis.max){var i=(t.config.chart.selection.xaxis.min-t.globals.minX)/e.xRatio,a={x:i,y:0,width:t.globals.gridWidth-(t.globals.maxX-t.config.chart.selection.xaxis.max)/e.xRatio-i,height:t.globals.gridHeight,translateX:0,translateY:0,selectionEnabled:!0};this.drawSelectionRect(a),this.makeSelectionRectDraggable(),"function"==typeof t.config.chart.events.selection&&t.config.chart.events.selection(this.ctx,{xaxis:{min:t.config.chart.selection.xaxis.min,max:t.config.chart.selection.xaxis.max},yaxis:{}})}}},{key:"drawSelectionRect",value:function(t){var e=t.x,i=t.y,a=t.width,s=t.height,r=t.translateX,o=void 0===r?0:r,n=t.translateY,l=void 0===n?0:n,h=this.w,c=this.zoomRect,d=this.selectionRect;if(this.dragged||null!==h.globals.selection){var g={transform:"translate("+o+", "+l+")"};h.globals.zoomEnabled&&this.dragged&&(a<0&&(a=1),c.attr({x:e,y:i,width:a,height:s,fill:h.config.chart.zoom.zoomedArea.fill.color,"fill-opacity":h.config.chart.zoom.zoomedArea.fill.opacity,stroke:h.config.chart.zoom.zoomedArea.stroke.color,"stroke-width":h.config.chart.zoom.zoomedArea.stroke.width,"stroke-opacity":h.config.chart.zoom.zoomedArea.stroke.opacity}),m.setAttrs(c.node,g)),h.globals.selectionEnabled&&(d.attr({x:e,y:i,width:a>0?a:0,height:s>0?s:0,fill:h.config.chart.selection.fill.color,"fill-opacity":h.config.chart.selection.fill.opacity,stroke:h.config.chart.selection.stroke.color,"stroke-width":h.config.chart.selection.stroke.width,"stroke-dasharray":h.config.chart.selection.stroke.dashArray,"stroke-opacity":h.config.chart.selection.stroke.opacity}),m.setAttrs(d.node,g))}}},{key:"hideSelectionRect",value:function(t){t&&t.attr({x:0,y:0,width:0,height:0})}},{key:"selectionDrawing",value:function(t){var e=t.context,i=t.zoomtype,a=this.w,s=e,r=this.gridRect.getBoundingClientRect(),o=s.startX-1,n=s.startY,l=!1,h=!1,c=s.clientX-r.left-o,d=s.clientY-r.top-n,g={};return Math.abs(c+o)>a.globals.gridWidth?c=a.globals.gridWidth-o:s.clientX-r.left<0&&(c=o),o>s.clientX-r.left&&(l=!0,c=Math.abs(c)),n>s.clientY-r.top&&(h=!0,d=Math.abs(d)),g="x"===i?{x:l?o-c:o,y:0,width:c,height:a.globals.gridHeight}:"y"===i?{x:0,y:h?n-d:n,width:a.globals.gridWidth,height:d}:{x:l?o-c:o,y:h?n-d:n,width:c,height:d},s.drawSelectionRect(g),s.selectionDragging("resizing"),g}},{key:"selectionDragging",value:function(t,e){var i=this,a=this.w,s=this.xyRatios,r=this.selectionRect,o=0;"resizing"===t&&(o=30);var n=function(t){return parseFloat(r.node.getAttribute(t))},l={x:n("x"),y:n("y"),width:n("width"),height:n("height")};a.globals.selection=l,"function"==typeof a.config.chart.events.selection&&a.globals.selectionEnabled&&(clearTimeout(this.w.globals.selectionResizeTimer),this.w.globals.selectionResizeTimer=window.setTimeout((function(){var t=i.gridRect.getBoundingClientRect(),e=r.node.getBoundingClientRect(),o={xaxis:{min:a.globals.xAxisScale.niceMin+(e.left-t.left)*s.xRatio,max:a.globals.xAxisScale.niceMin+(e.right-t.left)*s.xRatio},yaxis:{min:a.globals.yAxisScale[0].niceMin+(t.bottom-e.bottom)*s.yRatio[0],max:a.globals.yAxisScale[0].niceMax-(e.top-t.top)*s.yRatio[0]}};a.config.chart.events.selection(i.ctx,o),a.config.chart.brush.enabled&&void 0!==a.config.chart.events.brushScrolled&&a.config.chart.events.brushScrolled(i.ctx,o)}),o))}},{key:"selectionDrawn",value:function(t){var e=t.context,i=t.zoomtype,a=this.w,s=e,r=this.xyRatios,o=this.ctx.toolbar;if(s.startX>s.endX){var n=s.startX;s.startX=s.endX,s.endX=n}if(s.startY>s.endY){var l=s.startY;s.startY=s.endY,s.endY=l}var h=void 0,c=void 0;a.globals.isRangeBar?(h=a.globals.yAxisScale[0].niceMin+s.startX*r.invertedYRatio,c=a.globals.yAxisScale[0].niceMin+s.endX*r.invertedYRatio):(h=a.globals.xAxisScale.niceMin+s.startX*r.xRatio,c=a.globals.xAxisScale.niceMin+s.endX*r.xRatio);var d=[],g=[];if(a.config.yaxis.forEach((function(t,e){d.push(a.globals.yAxisScale[e].niceMax-r.yRatio[e]*s.startY),g.push(a.globals.yAxisScale[e].niceMax-r.yRatio[e]*s.endY)})),s.dragged&&(s.dragX>10||s.dragY>10)&&h!==c)if(a.globals.zoomEnabled){var u=x.clone(a.globals.initialConfig.yaxis),f=x.clone(a.globals.initialConfig.xaxis);if(a.globals.zoomed=!0,a.config.xaxis.convertedCatToNumeric&&(h=Math.floor(h),c=Math.floor(c),h<1&&(h=1,c=a.globals.dataPoints),c-h<2&&(c=h+1)),"xy"!==i&&"x"!==i||(f={min:h,max:c}),"xy"!==i&&"y"!==i||u.forEach((function(t,e){u[e].min=g[e],u[e].max=d[e]})),a.config.chart.zoom.autoScaleYaxis){var p=new _(s.ctx);u=p.autoScaleY(s.ctx,u,{xaxis:f})}if(o){var b=o.getBeforeZoomRange(f,u);b&&(f=b.xaxis?b.xaxis:f,u=b.yaxis?b.yaxis:u)}var v={xaxis:f};a.config.chart.group||(v.yaxis=u),s.ctx.updateHelpers._updateOptions(v,!1,s.w.config.chart.animations.dynamicAnimation.enabled),"function"==typeof a.config.chart.events.zoomed&&o.zoomCallback(f,u)}else if(a.globals.selectionEnabled){var m,y=null;m={min:h,max:c},"xy"!==i&&"y"!==i||(y=x.clone(a.config.yaxis)).forEach((function(t,e){y[e].min=g[e],y[e].max=d[e]})),a.globals.selection=s.selection,"function"==typeof a.config.chart.events.selection&&a.config.chart.events.selection(s.ctx,{xaxis:m,yaxis:y})}}},{key:"panDragging",value:function(t){var e=t.context,i=this.w,a=e;if(void 0!==i.globals.lastClientPosition.x){var s=i.globals.lastClientPosition.x-a.clientX,r=i.globals.lastClientPosition.y-a.clientY;Math.abs(s)>Math.abs(r)&&s>0?this.moveDirection="left":Math.abs(s)>Math.abs(r)&&s<0?this.moveDirection="right":Math.abs(r)>Math.abs(s)&&r>0?this.moveDirection="up":Math.abs(r)>Math.abs(s)&&r<0&&(this.moveDirection="down")}i.globals.lastClientPosition={x:a.clientX,y:a.clientY};var o=i.globals.isRangeBar?i.globals.minY:i.globals.minX,n=i.globals.isRangeBar?i.globals.maxY:i.globals.maxX;i.config.xaxis.convertedCatToNumeric||a.panScrolled(o,n)}},{key:"delayedPanScrolled",value:function(){var t=this.w,e=t.globals.minX,i=t.globals.maxX,a=(t.globals.maxX-t.globals.minX)/2;"left"===this.moveDirection?(e=t.globals.minX+a,i=t.globals.maxX+a):"right"===this.moveDirection&&(e=t.globals.minX-a,i=t.globals.maxX-a),e=Math.floor(e),i=Math.floor(i),this.updateScrolledChart({xaxis:{min:e,max:i}},e,i)}},{key:"panScrolled",value:function(t,e){var i=this.w,a=this.xyRatios,s=x.clone(i.globals.initialConfig.yaxis),r=a.xRatio,o=i.globals.minX,n=i.globals.maxX;i.globals.isRangeBar&&(r=a.invertedYRatio,o=i.globals.minY,n=i.globals.maxY),"left"===this.moveDirection?(t=o+i.globals.gridWidth/15*r,e=n+i.globals.gridWidth/15*r):"right"===this.moveDirection&&(t=o-i.globals.gridWidth/15*r,e=n-i.globals.gridWidth/15*r),i.globals.isRangeBar||(t<i.globals.initialMinX||e>i.globals.initialMaxX)&&(t=o,e=n);var l={min:t,max:e};i.config.chart.zoom.autoScaleYaxis&&(s=new _(this.ctx).autoScaleY(this.ctx,s,{xaxis:l}));var h={xaxis:{min:t,max:e}};i.config.chart.group||(h.yaxis=s),this.updateScrolledChart(h,t,e)}},{key:"updateScrolledChart",value:function(t,e,i){var a=this.w;this.ctx.updateHelpers._updateOptions(t,!1,!1),"function"==typeof a.config.chart.events.scrolled&&a.config.chart.events.scrolled(this.ctx,{xaxis:{min:e,max:i}})}}]),i}(ht),dt=function(){function t(e){a(this,t),this.w=e.w,this.ttCtx=e,this.ctx=e.ctx}return r(t,[{key:"getNearestValues",value:function(t){var e=t.hoverArea,i=t.elGrid,a=t.clientX,s=t.clientY,r=this.w,o=i.getBoundingClientRect(),n=o.width,l=o.height,h=n/(r.globals.dataPoints-1),c=l/r.globals.dataPoints,d=this.hasBars();!r.globals.comboCharts&&!d||r.config.xaxis.convertedCatToNumeric||(h=n/r.globals.dataPoints);var g=a-o.left-r.globals.barPadForNumericAxis,u=s-o.top;g<0||u<0||g>n||u>l?(e.classList.remove("hovering-zoom"),e.classList.remove("hovering-pan")):r.globals.zoomEnabled?(e.classList.remove("hovering-pan"),e.classList.add("hovering-zoom")):r.globals.panEnabled&&(e.classList.remove("hovering-zoom"),e.classList.add("hovering-pan"));var f=Math.round(g/h),p=Math.floor(u/c);d&&!r.config.xaxis.convertedCatToNumeric&&(f=Math.ceil(g/h),f-=1);var b=null,v=null,m=[],y=[];if(r.globals.seriesXvalues.forEach((function(t){m.push([t[0]+1e-6].concat(t))})),r.globals.seriesYvalues.forEach((function(t){y.push([t[0]+1e-6].concat(t))})),m=m.map((function(t){return t.filter((function(t){return x.isNumber(t)}))})),y=y.map((function(t){return t.filter((function(t){return x.isNumber(t)}))})),r.globals.isXNumeric){var w=this.ttCtx.getElGrid().getBoundingClientRect(),k=g*(w.width/n),A=u*(w.height/l);b=(v=this.closestInMultiArray(k,A,m,y)).index,f=v.j,null!==b&&(m=r.globals.seriesXvalues[b],f=(v=this.closestInArray(k,m)).index)}return r.globals.capturedSeriesIndex=null===b?-1:b,(!f||f<1)&&(f=0),r.globals.isBarHorizontal?r.globals.capturedDataPointIndex=p:r.globals.capturedDataPointIndex=f,{capturedSeries:b,j:r.globals.isBarHorizontal?p:f,hoverX:g,hoverY:u}}},{key:"closestInMultiArray",value:function(t,e,i,a){var s=this.w,r=0,o=null,n=-1;s.globals.series.length>1?r=this.getFirstActiveXArray(i):o=0;var l=i[r][0],h=Math.abs(t-l);if(i.forEach((function(e){e.forEach((function(e,i){var a=Math.abs(t-e);a<h&&(h=a,n=i)}))})),-1!==n){var c=a[r][n],d=Math.abs(e-c);o=r,a.forEach((function(t,i){var a=Math.abs(e-t[n]);a<d&&(d=a,o=i)}))}return{index:o,j:n}}},{key:"getFirstActiveXArray",value:function(t){for(var e=this.w,i=0,a=t.map((function(t,e){return t.length>0?e:-1})),s=0;s<a.length;s++)if(-1!==a[s]&&-1===e.globals.collapsedSeriesIndices.indexOf(s)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(s)){i=a[s];break}return i}},{key:"closestInArray",value:function(t,e){for(var i=e[0],a=null,s=Math.abs(t-i),r=0;r<e.length;r++){var o=Math.abs(t-e[r]);o<s&&(s=o,a=r)}return{index:a}}},{key:"isXoverlap",value:function(t){var e=[],i=this.w.globals.seriesX.filter((function(t){return void 0!==t[0]}));if(i.length>0)for(var a=0;a<i.length-1;a++)void 0!==i[a][t]&&void 0!==i[a+1][t]&&i[a][t]!==i[a+1][t]&&e.push("unEqual");return 0===e.length}},{key:"isInitialSeriesSameLen",value:function(){for(var t=!0,e=this.w.globals.initialSeries,i=0;i<e.length-1;i++)if(e[i].data.length!==e[i+1].data.length){t=!1;break}return t}},{key:"getBarsHeight",value:function(t){return u(t).reduce((function(t,e){return t+e.getBBox().height}),0)}},{key:"getElMarkers",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers")}},{key:"getAllMarkers",value:function(){var t=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");(t=u(t)).sort((function(t,e){var i=Number(t.getAttribute("data:realIndex")),a=Number(e.getAttribute("data:realIndex"));return a<i?1:a>i?-1:0}));var e=[];return t.forEach((function(t){e.push(t.querySelector(".apexcharts-marker"))})),e}},{key:"hasMarkers",value:function(){return this.getElMarkers().length>0}},{key:"getElBars",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series")}},{key:"hasBars",value:function(){return this.getElBars().length>0}},{key:"getHoverMarkerSize",value:function(t){var e=this.w,i=e.config.markers.hover.size;return void 0===i&&(i=e.globals.markers.size[t]+e.config.markers.hover.sizeOffset),i}},{key:"toggleAllTooltipSeriesGroups",value:function(t){var e=this.w,i=this.ttCtx;0===i.allTooltipSeriesGroups.length&&(i.allTooltipSeriesGroups=e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));for(var a=i.allTooltipSeriesGroups,s=0;s<a.length;s++)"enable"===t?(a[s].classList.add("apexcharts-active"),a[s].style.display=e.config.tooltip.items.display):(a[s].classList.remove("apexcharts-active"),a[s].style.display="none")}}]),t}(),gt=function(){function t(e){a(this,t),this.w=e.w,this.ctx=e.ctx,this.ttCtx=e,this.tooltipUtil=new dt(e)}return r(t,[{key:"drawSeriesTexts",value:function(t){var e=t.shared,i=void 0===e||e,a=t.ttItems,s=t.i,r=void 0===s?0:s,o=t.j,n=void 0===o?null:o,l=t.y1,h=t.y2,c=t.e,d=this.w;void 0!==d.config.tooltip.custom?this.handleCustomTooltip({i:r,j:n,y1:l,y2:h,w:d}):this.toggleActiveInactiveSeries(i);var g=this.getValuesToPrint({i:r,j:n});this.printLabels({i:r,j:n,values:g,ttItems:a,shared:i,e:c});var u=this.ttCtx.getElTooltip();this.ttCtx.tooltipRect.ttWidth=u.getBoundingClientRect().width,this.ttCtx.tooltipRect.ttHeight=u.getBoundingClientRect().height}},{key:"printLabels",value:function(t){var i,a=this,s=t.i,r=t.j,o=t.values,n=t.ttItems,l=t.shared,h=t.e,c=this.w,d=[],g=function(t){return c.globals.seriesGoals[t]&&c.globals.seriesGoals[t][r]&&Array.isArray(c.globals.seriesGoals[t][r])},u=o.xVal,f=o.zVal,p=o.xAxisTTVal,x="",b=c.globals.colors[s];null!==r&&c.config.plotOptions.bar.distributed&&(b=c.globals.colors[r]);for(var v=function(t,o){var v=a.getFormatters(s);x=a.getSeriesName({fn:v.yLbTitleFormatter,index:s,seriesIndex:s,j:r}),"treemap"===c.config.chart.type&&(x=v.yLbTitleFormatter(String(c.config.series[s].data[r].x),{series:c.globals.series,seriesIndex:s,dataPointIndex:r,w:c}));var m=c.config.tooltip.inverseOrder?o:t;if(c.globals.axisCharts){var y=function(t){return v.yLbFormatter(c.globals.series[t][r],{series:c.globals.series,seriesIndex:t,dataPointIndex:r,w:c})};if(l)v=a.getFormatters(m),x=a.getSeriesName({fn:v.yLbTitleFormatter,index:m,seriesIndex:s,j:r}),b=c.globals.colors[m],i=y(m),g(m)&&(d=c.globals.seriesGoals[m][r].map((function(t){return{attrs:t,val:v.yLbFormatter(t.value,{seriesIndex:m,dataPointIndex:r,w:c})}})));else{var w,k=null==h||null===(w=h.target)||void 0===w?void 0:w.getAttribute("fill");k&&(b=-1!==k.indexOf("url")?document.querySelector(k.substr(4).slice(0,-1)).childNodes[0].getAttribute("stroke"):k),i=y(s),g(s)&&Array.isArray(c.globals.seriesGoals[s][r])&&(d=c.globals.seriesGoals[s][r].map((function(t){return{attrs:t,val:v.yLbFormatter(t.value,{seriesIndex:s,dataPointIndex:r,w:c})}})))}}null===r&&(i=v.yLbFormatter(c.globals.series[s],e(e({},c),{},{seriesIndex:s,dataPointIndex:s}))),a.DOMHandling({i:s,t:m,j:r,ttItems:n,values:{val:i,goalVals:d,xVal:u,xAxisTTVal:p,zVal:f},seriesName:x,shared:l,pColor:b})},m=0,y=c.globals.series.length-1;m<c.globals.series.length;m++,y--)v(m,y)}},{key:"getFormatters",value:function(t){var e,i=this.w,a=i.globals.yLabelFormatters[t];return void 0!==i.globals.ttVal?Array.isArray(i.globals.ttVal)?(a=i.globals.ttVal[t]&&i.globals.ttVal[t].formatter,e=i.globals.ttVal[t]&&i.globals.ttVal[t].title&&i.globals.ttVal[t].title.formatter):(a=i.globals.ttVal.formatter,"function"==typeof i.globals.ttVal.title.formatter&&(e=i.globals.ttVal.title.formatter)):e=i.config.tooltip.y.title.formatter,"function"!=typeof a&&(a=i.globals.yLabelFormatters[0]?i.globals.yLabelFormatters[0]:function(t){return t}),"function"!=typeof e&&(e=function(t){return t}),{yLbFormatter:a,yLbTitleFormatter:e}}},{key:"getSeriesName",value:function(t){var e=t.fn,i=t.index,a=t.seriesIndex,s=t.j,r=this.w;return e(String(r.globals.seriesNames[i]),{series:r.globals.series,seriesIndex:a,dataPointIndex:s,w:r})}},{key:"DOMHandling",value:function(t){t.i;var e=t.t,i=t.j,a=t.ttItems,s=t.values,r=t.seriesName,o=t.shared,n=t.pColor,l=this.w,h=this.ttCtx,c=s.val,d=s.goalVals,g=s.xVal,u=s.xAxisTTVal,f=s.zVal,p=null;p=a[e].children,l.config.tooltip.fillSeriesColor&&(a[e].style.backgroundColor=n,p[0].style.display="none"),h.showTooltipTitle&&(null===h.tooltipTitle&&(h.tooltipTitle=l.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")),h.tooltipTitle.innerHTML=g),h.isXAxisTooltipEnabled&&(h.xaxisTooltipText.innerHTML=""!==u?u:g);var x=a[e].querySelector(".apexcharts-tooltip-text-y-label");x&&(x.innerHTML=r||"");var b=a[e].querySelector(".apexcharts-tooltip-text-y-value");b&&(b.innerHTML=void 0!==c?c:""),p[0]&&p[0].classList.contains("apexcharts-tooltip-marker")&&(l.config.tooltip.marker.fillColors&&Array.isArray(l.config.tooltip.marker.fillColors)&&(n=l.config.tooltip.marker.fillColors[e]),p[0].style.backgroundColor=n),l.config.tooltip.marker.show||(p[0].style.display="none");var v=a[e].querySelector(".apexcharts-tooltip-text-goals-label"),m=a[e].querySelector(".apexcharts-tooltip-text-goals-value");if(d.length&&l.globals.seriesGoals[e]){var y=function(){var t="<div >",e="<div>";d.forEach((function(i,a){t+=' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(i.attrs.strokeColor,'; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(i.attrs.name,"</div>"),e+="<div>".concat(i.val,"</div>")})),v.innerHTML=t+"</div>",m.innerHTML=e+"</div>"};o?l.globals.seriesGoals[e][i]&&Array.isArray(l.globals.seriesGoals[e][i])?y():(v.innerHTML="",m.innerHTML=""):y()}else v.innerHTML="",m.innerHTML="";null!==f&&(a[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML=l.config.tooltip.z.title,a[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML=void 0!==f?f:"");o&&p[0]&&(null==c||l.globals.ancillaryCollapsedSeriesIndices.indexOf(e)>-1||l.globals.collapsedSeriesIndices.indexOf(e)>-1?p[0].parentNode.style.display="none":p[0].parentNode.style.display=l.config.tooltip.items.display)}},{key:"toggleActiveInactiveSeries",value:function(t){var e=this.w;if(t)this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");else{this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");var i=e.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");i&&(i.classList.add("apexcharts-active"),i.style.display=e.config.tooltip.items.display)}}},{key:"getValuesToPrint",value:function(t){var e=t.i,i=t.j,a=this.w,s=this.ctx.series.filteredSeriesX(),r="",o="",n=null,l=null,h={series:a.globals.series,seriesIndex:e,dataPointIndex:i,w:a},c=a.globals.ttZFormatter;null===i?l=a.globals.series[e]:a.globals.isXNumeric&&"treemap"!==a.config.chart.type?(r=s[e][i],0===s[e].length&&(r=s[this.tooltipUtil.getFirstActiveXArray(s)][i])):r=void 0!==a.globals.labels[i]?a.globals.labels[i]:"";var d=r;a.globals.isXNumeric&&"datetime"===a.config.xaxis.type?r=new W(this.ctx).xLabelFormat(a.globals.ttKeyFormatter,d,d,{i:void 0,dateFormatter:new T(this.ctx).formatDate,w:this.w}):r=a.globals.isBarHorizontal?a.globals.yLabelFormatters[0](d,h):a.globals.xLabelFormatter(d,h);return void 0!==a.config.tooltip.x.formatter&&(r=a.globals.ttKeyFormatter(d,h)),a.globals.seriesZ.length>0&&a.globals.seriesZ[e].length>0&&(n=c(a.globals.seriesZ[e][i],a)),o="function"==typeof a.config.xaxis.tooltip.formatter?a.globals.xaxisTooltipFormatter(d,h):r,{val:Array.isArray(l)?l.join(" "):l,xVal:Array.isArray(r)?r.join(" "):r,xAxisTTVal:Array.isArray(o)?o.join(" "):o,zVal:n}}},{key:"handleCustomTooltip",value:function(t){var e=t.i,i=t.j,a=t.y1,s=t.y2,r=t.w,o=this.ttCtx.getElTooltip(),n=r.config.tooltip.custom;Array.isArray(n)&&n[e]&&(n=n[e]),o.innerHTML=n({ctx:this.ctx,series:r.globals.series,seriesIndex:e,dataPointIndex:i,y1:a,y2:s,w:r})}}]),t}(),ut=function(){function t(e){a(this,t),this.ttCtx=e,this.ctx=e.ctx,this.w=e.w}return r(t,[{key:"moveXCrosshairs",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.ttCtx,a=this.w,s=i.getElXCrosshairs(),r=t-i.xcrosshairsWidth/2,o=a.globals.labels.slice().length;if(null!==e&&(r=a.globals.gridWidth/o*e),null===s||a.globals.isBarHorizontal||(s.setAttribute("x",r),s.setAttribute("x1",r),s.setAttribute("x2",r),s.setAttribute("y2",a.globals.gridHeight),s.classList.add("apexcharts-active")),r<0&&(r=0),r>a.globals.gridWidth&&(r=a.globals.gridWidth),i.isXAxisTooltipEnabled){var n=r;"tickWidth"!==a.config.xaxis.crosshairs.width&&"barWidth"!==a.config.xaxis.crosshairs.width||(n=r+i.xcrosshairsWidth/2),this.moveXAxisTooltip(n)}}},{key:"moveYCrosshairs",value:function(t){var e=this.ttCtx;null!==e.ycrosshairs&&m.setAttrs(e.ycrosshairs,{y1:t,y2:t}),null!==e.ycrosshairsHidden&&m.setAttrs(e.ycrosshairsHidden,{y1:t,y2:t})}},{key:"moveXAxisTooltip",value:function(t){var e=this.w,i=this.ttCtx;if(null!==i.xaxisTooltip&&0!==i.xcrosshairsWidth){i.xaxisTooltip.classList.add("apexcharts-active");var a=i.xaxisOffY+e.config.xaxis.tooltip.offsetY+e.globals.translateY+1+e.config.xaxis.offsetY;if(t-=i.xaxisTooltip.getBoundingClientRect().width/2,!isNaN(t)){t+=e.globals.translateX;var s;s=new m(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML),i.xaxisTooltipText.style.minWidth=s.width+"px",i.xaxisTooltip.style.left=t+"px",i.xaxisTooltip.style.top=a+"px"}}}},{key:"moveYAxisTooltip",value:function(t){var e=this.w,i=this.ttCtx;null===i.yaxisTTEls&&(i.yaxisTTEls=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));var a=parseInt(i.ycrosshairsHidden.getAttribute("y1"),10),s=e.globals.translateY+a,r=i.yaxisTTEls[t].getBoundingClientRect().height,o=e.globals.translateYAxisX[t]-2;e.config.yaxis[t].opposite&&(o-=26),s-=r/2,-1===e.globals.ignoreYAxisIndexes.indexOf(t)?(i.yaxisTTEls[t].classList.add("apexcharts-active"),i.yaxisTTEls[t].style.top=s+"px",i.yaxisTTEls[t].style.left=o+e.config.yaxis[t].tooltip.offsetX+"px"):i.yaxisTTEls[t].classList.remove("apexcharts-active")}},{key:"moveTooltip",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.w,s=this.ttCtx,r=s.getElTooltip(),o=s.tooltipRect,n=null!==i?parseFloat(i):1,l=parseFloat(t)+n+5,h=parseFloat(e)+n/2;if(l>a.globals.gridWidth/2&&(l=l-o.ttWidth-n-10),l>a.globals.gridWidth-o.ttWidth-10&&(l=a.globals.gridWidth-o.ttWidth),l<-20&&(l=-20),a.config.tooltip.followCursor){var c=s.getElGrid(),d=c.getBoundingClientRect();h=s.e.clientY+a.globals.translateY-d.top-o.ttHeight/2}else a.globals.isBarHorizontal||(o.ttHeight/2+h>a.globals.gridHeight&&(h=a.globals.gridHeight-o.ttHeight+a.globals.translateY),h<0&&(h=0));isNaN(l)||(l+=a.globals.translateX,r.style.left=l+"px",r.style.top=h+"px")}},{key:"moveMarkers",value:function(t,e){var i=this.w,a=this.ttCtx;if(i.globals.markers.size[t]>0)for(var s=i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t,"'] .apexcharts-marker")),r=0;r<s.length;r++)parseInt(s[r].getAttribute("rel"),10)===e&&(a.marker.resetPointsSize(),a.marker.enlargeCurrentPoint(e,s[r]));else a.marker.resetPointsSize(),this.moveDynamicPointOnHover(e,t)}},{key:"moveDynamicPointOnHover",value:function(t,e){var i,a,s=this.w,r=this.ttCtx,o=s.globals.pointsArray,n=r.tooltipUtil.getHoverMarkerSize(e),l=s.config.series[e].type;if(!l||"column"!==l&&"candlestick"!==l&&"boxPlot"!==l){i=o[e][t][0],a=o[e][t][1]?o[e][t][1]:0;var h=s.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e,"'] .apexcharts-series-markers circle"));h&&a<s.globals.gridHeight&&a>0&&(h.setAttribute("r",n),h.setAttribute("cx",i),h.setAttribute("cy",a)),this.moveXCrosshairs(i),r.fixedTooltip||this.moveTooltip(i,a,n)}}},{key:"moveDynamicPointsOnHover",value:function(t){var e,i=this.ttCtx,a=i.w,s=0,r=0,o=a.globals.pointsArray;e=new O(this.ctx).getActiveConfigSeriesIndex("asc",["line","area","scatter","bubble"]);var n=i.tooltipUtil.getHoverMarkerSize(e);o[e]&&(s=o[e][t][0],r=o[e][t][1]);var l=i.tooltipUtil.getAllMarkers();if(null!==l)for(var h=0;h<a.globals.series.length;h++){var c=o[h];if(a.globals.comboCharts&&void 0===c&&l.splice(h,0,null),c&&c.length){var d=o[h][t][1],g=void 0;if(l[h].setAttribute("cx",s),"rangeArea"===a.config.chart.type&&!a.globals.comboCharts){var u=t+a.globals.series[h].length;g=o[h][u][1],d-=Math.abs(d-g)/2}null!==d&&!isNaN(d)&&d<a.globals.gridHeight+n&&d+n>0?(l[h]&&l[h].setAttribute("r",n),l[h]&&l[h].setAttribute("cy",d)):l[h]&&l[h].setAttribute("r",0)}}if(this.moveXCrosshairs(s),!i.fixedTooltip){var f=r||a.globals.gridHeight;this.moveTooltip(s,f,n)}}},{key:"moveStickyTooltipOverBars",value:function(t){var e=this.w,i=this.ttCtx,a=e.globals.columnSeries?e.globals.columnSeries.length:e.globals.series.length,s=a>=2&&a%2==0?Math.floor(a/2):Math.floor(a/2)+1;e.globals.isBarHorizontal&&(s=new O(this.ctx).getActiveConfigSeriesIndex("desc")+1);var r=e.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(s,"'] path[j='").concat(t,"'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(s,"'] path[j='").concat(t,"'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(s,"'] path[j='").concat(t,"'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(s,"'] path[j='").concat(t,"']")),o=r?parseFloat(r.getAttribute("cx")):0,n=r?parseFloat(r.getAttribute("cy")):0,l=r?parseFloat(r.getAttribute("barWidth")):0,h=r?parseFloat(r.getAttribute("barHeight")):0,c=i.getElGrid().getBoundingClientRect(),d=r.classList.contains("apexcharts-candlestick-area")||r.classList.contains("apexcharts-boxPlot-area");if(e.globals.isXNumeric?(r&&!d&&(o-=a%2!=0?l/2:0),r&&d&&e.globals.comboCharts&&(o-=l/2)):e.globals.isBarHorizontal||(o=i.xAxisTicksPositions[t-1]+i.dataPointsDividedWidth/2,isNaN(o)&&(o=i.xAxisTicksPositions[t]-i.dataPointsDividedWidth/2)),e.globals.isBarHorizontal?(n>e.globals.gridHeight/2&&(n-=i.tooltipRect.ttHeight),(n=n+e.config.grid.padding.top+h/3)+h>e.globals.gridHeight&&(n=e.globals.gridHeight-h)):e.config.tooltip.followCursor?n=i.e.clientY-c.top-i.tooltipRect.ttHeight/2:n+i.tooltipRect.ttHeight+15>e.globals.gridHeight&&(n=e.globals.gridHeight),n<-10&&(n=-10),e.globals.isBarHorizontal||this.moveXCrosshairs(o),!i.fixedTooltip){var g=n||e.globals.gridHeight;this.moveTooltip(o,g)}}}]),t}(),ft=function(){function t(e){a(this,t),this.w=e.w,this.ttCtx=e,this.ctx=e.ctx,this.tooltipPosition=new ut(e)}return r(t,[{key:"drawDynamicPoints",value:function(){var t=this.w,e=new m(this.ctx),i=new R(this.ctx),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");a=u(a),t.config.chart.stacked&&a.sort((function(t,e){return parseFloat(t.getAttribute("data:realIndex"))-parseFloat(e.getAttribute("data:realIndex"))}));for(var s=0;s<a.length;s++){var r=a[s].querySelector(".apexcharts-series-markers-wrap");if(null!==r){var o=void 0,n="apexcharts-marker w".concat((Math.random()+1).toString(36).substring(4));"line"!==t.config.chart.type&&"area"!==t.config.chart.type||t.globals.comboCharts||t.config.tooltip.intersect||(n+=" no-pointer-events");var l=i.getMarkerConfig({cssClass:n,seriesIndex:Number(r.getAttribute("data:realIndex"))});(o=e.drawMarker(0,0,l)).node.setAttribute("default-marker-size",0);var h=document.createElementNS(t.globals.SVGNS,"g");h.classList.add("apexcharts-series-markers"),h.appendChild(o.node),r.appendChild(h)}}}},{key:"enlargeCurrentPoint",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=this.w;"bubble"!==s.config.chart.type&&this.newPointSize(t,e);var r=e.getAttribute("cx"),o=e.getAttribute("cy");if(null!==i&&null!==a&&(r=i,o=a),this.tooltipPosition.moveXCrosshairs(r),!this.fixedTooltip){if("radar"===s.config.chart.type){var n=this.ttCtx.getElGrid(),l=n.getBoundingClientRect();r=this.ttCtx.e.clientX-l.left}this.tooltipPosition.moveTooltip(r,o,s.config.markers.hover.size)}}},{key:"enlargePoints",value:function(t){for(var e=this.w,i=this,a=this.ttCtx,s=t,r=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),o=e.config.markers.hover.size,n=0;n<r.length;n++){var l=r[n].getAttribute("rel"),h=r[n].getAttribute("index");if(void 0===o&&(o=e.globals.markers.size[h]+e.config.markers.hover.sizeOffset),s===parseInt(l,10)){i.newPointSize(s,r[n]);var c=r[n].getAttribute("cx"),d=r[n].getAttribute("cy");i.tooltipPosition.moveXCrosshairs(c),a.fixedTooltip||i.tooltipPosition.moveTooltip(c,d,o)}else i.oldPointSize(r[n])}}},{key:"newPointSize",value:function(t,e){var i=this.w,a=i.config.markers.hover.size,s=0===t?e.parentNode.firstChild:e.parentNode.lastChild;if("0"!==s.getAttribute("default-marker-size")){var r=parseInt(s.getAttribute("index"),10);void 0===a&&(a=i.globals.markers.size[r]+i.config.markers.hover.sizeOffset),a<0&&(a=0),s.setAttribute("r",a)}}},{key:"oldPointSize",value:function(t){var e=parseFloat(t.getAttribute("default-marker-size"));t.setAttribute("r",e)}},{key:"resetPointsSize",value:function(){for(var t=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),e=0;e<t.length;e++){var i=parseFloat(t[e].getAttribute("default-marker-size"));x.isNumber(i)&&i>=0?t[e].setAttribute("r",i):t[e].setAttribute("r",0)}}}]),t}(),pt=function(){function t(e){a(this,t),this.w=e.w,this.ttCtx=e}return r(t,[{key:"getAttr",value:function(t,e){return parseFloat(t.target.getAttribute(e))}},{key:"handleHeatTreeTooltip",value:function(t){var e=t.e,i=t.opt,a=t.x,s=t.y,r=t.type,o=this.ttCtx,n=this.w;if(e.target.classList.contains("apexcharts-".concat(r,"-rect"))){var l=this.getAttr(e,"i"),h=this.getAttr(e,"j"),c=this.getAttr(e,"cx"),d=this.getAttr(e,"cy"),g=this.getAttr(e,"width"),u=this.getAttr(e,"height");if(o.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:l,j:h,shared:!1,e:e}),n.globals.capturedSeriesIndex=l,n.globals.capturedDataPointIndex=h,a=c+o.tooltipRect.ttWidth/2+g,s=d+o.tooltipRect.ttHeight/2-u/2,o.tooltipPosition.moveXCrosshairs(c+g/2),a>n.globals.gridWidth/2&&(a=c-o.tooltipRect.ttWidth/2+g),o.w.config.tooltip.followCursor){var f=n.globals.dom.elWrap.getBoundingClientRect();a=n.globals.clientX-f.left-(a>n.globals.gridWidth/2?o.tooltipRect.ttWidth:0),s=n.globals.clientY-f.top-(s>n.globals.gridHeight/2?o.tooltipRect.ttHeight:0)}}return{x:a,y:s}}},{key:"handleMarkerTooltip",value:function(t){var e,i,a=t.e,s=t.opt,r=t.x,o=t.y,n=this.w,l=this.ttCtx;if(a.target.classList.contains("apexcharts-marker")){var h=parseInt(s.paths.getAttribute("cx"),10),c=parseInt(s.paths.getAttribute("cy"),10),d=parseFloat(s.paths.getAttribute("val"));if(i=parseInt(s.paths.getAttribute("rel"),10),e=parseInt(s.paths.parentNode.parentNode.parentNode.getAttribute("rel"),10)-1,l.intersect){var g=x.findAncestor(s.paths,"apexcharts-series");g&&(e=parseInt(g.getAttribute("data:realIndex"),10))}if(l.tooltipLabels.drawSeriesTexts({ttItems:s.ttItems,i:e,j:i,shared:!l.showOnIntersect&&n.config.tooltip.shared,e:a}),"mouseup"===a.type&&l.markerClick(a,e,i),n.globals.capturedSeriesIndex=e,n.globals.capturedDataPointIndex=i,r=h,o=c+n.globals.translateY-1.4*l.tooltipRect.ttHeight,l.w.config.tooltip.followCursor){var u=l.getElGrid().getBoundingClientRect();o=l.e.clientY+n.globals.translateY-u.top}d<0&&(o=c),l.marker.enlargeCurrentPoint(i,s.paths,r,o)}return{x:r,y:o}}},{key:"handleBarTooltip",value:function(t){var e,i,a=t.e,s=t.opt,r=this.w,o=this.ttCtx,n=o.getElTooltip(),l=0,h=0,c=0,d=this.getBarTooltipXY({e:a,opt:s});e=d.i;var g=d.barHeight,u=d.j;r.globals.capturedSeriesIndex=e,r.globals.capturedDataPointIndex=u,r.globals.isBarHorizontal&&o.tooltipUtil.hasBars()||!r.config.tooltip.shared?(h=d.x,c=d.y,i=Array.isArray(r.config.stroke.width)?r.config.stroke.width[e]:r.config.stroke.width,l=h):r.globals.comboCharts||r.config.tooltip.shared||(l/=2),isNaN(c)?c=r.globals.svgHeight-o.tooltipRect.ttHeight:c<0&&(c=0);var f=parseInt(s.paths.parentNode.getAttribute("data:realIndex"),10),p=r.globals.isMultipleYAxis?r.config.yaxis[f]&&r.config.yaxis[f].reversed:r.config.yaxis[0].reversed;if(h+o.tooltipRect.ttWidth>r.globals.gridWidth&&!p?h-=o.tooltipRect.ttWidth:h<0&&(h=0),o.w.config.tooltip.followCursor){var x=o.getElGrid().getBoundingClientRect();c=o.e.clientY-x.top}null===o.tooltip&&(o.tooltip=r.globals.dom.baseEl.querySelector(".apexcharts-tooltip")),r.config.tooltip.shared||(r.globals.comboBarCount>0?o.tooltipPosition.moveXCrosshairs(l+i/2):o.tooltipPosition.moveXCrosshairs(l)),!o.fixedTooltip&&(!r.config.tooltip.shared||r.globals.isBarHorizontal&&o.tooltipUtil.hasBars())&&(p&&(h-=o.tooltipRect.ttWidth)<0&&(h=0),!p||r.globals.isBarHorizontal&&o.tooltipUtil.hasBars()||(c=c+g-2*(r.globals.series[e][u]<0?g:0)),o.tooltipRect.ttHeight+c>r.globals.gridHeight?c=r.globals.gridHeight-o.tooltipRect.ttHeight+r.globals.translateY:(c=c+r.globals.translateY-o.tooltipRect.ttHeight/2)<0&&(c=0),n.style.left=h+r.globals.translateX+"px",n.style.top=c+"px")}},{key:"getBarTooltipXY",value:function(t){var e=t.e,i=t.opt,a=this.w,s=null,r=this.ttCtx,o=0,n=0,l=0,h=0,c=0,d=e.target.classList;if(d.contains("apexcharts-bar-area")||d.contains("apexcharts-candlestick-area")||d.contains("apexcharts-boxPlot-area")||d.contains("apexcharts-rangebar-area")){var g=e.target,u=g.getBoundingClientRect(),f=i.elGrid.getBoundingClientRect(),p=u.height;c=u.height;var x=u.width,b=parseInt(g.getAttribute("cx"),10),v=parseInt(g.getAttribute("cy"),10);h=parseFloat(g.getAttribute("barWidth"));var m="touchmove"===e.type?e.touches[0].clientX:e.clientX;s=parseInt(g.getAttribute("j"),10),o=parseInt(g.parentNode.getAttribute("rel"),10)-1;var y=g.getAttribute("data-range-y1"),w=g.getAttribute("data-range-y2");a.globals.comboCharts&&(o=parseInt(g.parentNode.getAttribute("data:realIndex"),10)),r.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:o,j:s,y1:y?parseInt(y,10):null,y2:w?parseInt(w,10):null,shared:!r.showOnIntersect&&a.config.tooltip.shared,e:e}),a.config.tooltip.followCursor?a.globals.isBarHorizontal?(n=m-f.left+15,l=v-r.dataPointsDividedHeight+p/2-r.tooltipRect.ttHeight/2):(n=a.globals.isXNumeric?b-x/2:b-r.dataPointsDividedWidth+x/2,l=e.clientY-f.top-r.tooltipRect.ttHeight/2-15):a.globals.isBarHorizontal?((n=b)<r.xyRatios.baseLineInvertedY&&(n=b-r.tooltipRect.ttWidth),l=v-r.dataPointsDividedHeight+p/2-r.tooltipRect.ttHeight/2):(n=a.globals.isXNumeric?b-x/2:b-r.dataPointsDividedWidth+x/2,l=v)}return{x:n,y:l,barHeight:c,barWidth:h,i:o,j:s}}}]),t}(),xt=function(){function t(e){a(this,t),this.w=e.w,this.ttCtx=e}return r(t,[{key:"drawXaxisTooltip",value:function(){var t=this.w,e=this.ttCtx,i="bottom"===t.config.xaxis.position;e.xaxisOffY=i?t.globals.gridHeight+1:-t.globals.xAxisHeight-t.config.xaxis.axisTicks.height+3;var a=i?"apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom":"apexcharts-xaxistooltip apexcharts-xaxistooltip-top",s=t.globals.dom.elWrap;e.isXAxisTooltipEnabled&&(null===t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip")&&(e.xaxisTooltip=document.createElement("div"),e.xaxisTooltip.setAttribute("class",a+" apexcharts-theme-"+t.config.tooltip.theme),s.appendChild(e.xaxisTooltip),e.xaxisTooltipText=document.createElement("div"),e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"),e.xaxisTooltipText.style.fontFamily=t.config.xaxis.tooltip.style.fontFamily||t.config.chart.fontFamily,e.xaxisTooltipText.style.fontSize=t.config.xaxis.tooltip.style.fontSize,e.xaxisTooltip.appendChild(e.xaxisTooltipText)))}},{key:"drawYaxisTooltip",value:function(){for(var t=this.w,e=this.ttCtx,i=function(i){var a=t.config.yaxis[i].opposite||t.config.yaxis[i].crosshairs.opposite;e.yaxisOffX=a?t.globals.gridWidth+1:1;var s="apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i,a?" apexcharts-yaxistooltip-right":" apexcharts-yaxistooltip-left");t.globals.yAxisSameScaleIndices.map((function(e,a){e.map((function(e,a){a===i&&(s+=t.config.yaxis[a].show?" ":" apexcharts-yaxistooltip-hidden")}))}));var r=t.globals.dom.elWrap;null===t.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i))&&(e.yaxisTooltip=document.createElement("div"),e.yaxisTooltip.setAttribute("class",s+" apexcharts-theme-"+t.config.tooltip.theme),r.appendChild(e.yaxisTooltip),0===i&&(e.yaxisTooltipText=[]),e.yaxisTooltipText[i]=document.createElement("div"),e.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"),e.yaxisTooltip.appendChild(e.yaxisTooltipText[i]))},a=0;a<t.config.yaxis.length;a++)i(a)}},{key:"setXCrosshairWidth",value:function(){var t=this.w,e=this.ttCtx,i=e.getElXCrosshairs();if(e.xcrosshairsWidth=parseInt(t.config.xaxis.crosshairs.width,10),t.globals.comboCharts){var a=t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(null!==a&&"barWidth"===t.config.xaxis.crosshairs.width){var s=parseFloat(a.getAttribute("barWidth"));e.xcrosshairsWidth=s}else if("tickWidth"===t.config.xaxis.crosshairs.width){var r=t.globals.labels.length;e.xcrosshairsWidth=t.globals.gridWidth/r}}else if("tickWidth"===t.config.xaxis.crosshairs.width){var o=t.globals.labels.length;e.xcrosshairsWidth=t.globals.gridWidth/o}else if("barWidth"===t.config.xaxis.crosshairs.width){var n=t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(null!==n){var l=parseFloat(n.getAttribute("barWidth"));e.xcrosshairsWidth=l}else e.xcrosshairsWidth=1}t.globals.isBarHorizontal&&(e.xcrosshairsWidth=0),null!==i&&e.xcrosshairsWidth>0&&i.setAttribute("width",e.xcrosshairsWidth)}},{key:"handleYCrosshair",value:function(){var t=this.w,e=this.ttCtx;e.ycrosshairs=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"),e.ycrosshairsHidden=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden")}},{key:"drawYaxisTooltipText",value:function(t,e,i){var a=this.ttCtx,s=this.w,r=s.globals.yLabelFormatters[t];if(a.yaxisTooltips[t]){var o=a.getElGrid().getBoundingClientRect(),n=(e-o.top)*i.yRatio[t],l=s.globals.maxYArr[t]-s.globals.minYArr[t],h=s.globals.minYArr[t]+(l-n);a.tooltipPosition.moveYCrosshairs(e-o.top),a.yaxisTooltipText[t].innerHTML=r(h),a.tooltipPosition.moveYAxisTooltip(t)}}}]),t}(),bt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.tConfig=i.config.tooltip,this.tooltipUtil=new dt(this),this.tooltipLabels=new gt(this),this.tooltipPosition=new ut(this),this.marker=new ft(this),this.intersect=new pt(this),this.axesTooltip=new xt(this),this.showOnIntersect=this.tConfig.intersect,this.showTooltipTitle=this.tConfig.x.show,this.fixedTooltip=this.tConfig.fixed.enabled,this.xaxisTooltip=null,this.yaxisTTEls=null,this.isBarShared=!i.globals.isBarHorizontal&&this.tConfig.shared,this.lastHoverTime=Date.now()}return r(t,[{key:"getElTooltip",value:function(t){return t||(t=this),t.w.globals.dom.baseEl?t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip"):null}},{key:"getElXCrosshairs",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs")}},{key:"getElGrid",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid")}},{key:"drawTooltip",value:function(t){var e=this.w;this.xyRatios=t,this.isXAxisTooltipEnabled=e.config.xaxis.tooltip.enabled&&e.globals.axisCharts,this.yaxisTooltips=e.config.yaxis.map((function(t,i){return!!(t.show&&t.tooltip.enabled&&e.globals.axisCharts)})),this.allTooltipSeriesGroups=[],e.globals.axisCharts||(this.showTooltipTitle=!1);var i=document.createElement("div");if(i.classList.add("apexcharts-tooltip"),e.config.tooltip.cssClass&&i.classList.add(e.config.tooltip.cssClass),i.classList.add("apexcharts-theme-".concat(this.tConfig.theme)),e.globals.dom.elWrap.appendChild(i),e.globals.axisCharts){this.axesTooltip.drawXaxisTooltip(),this.axesTooltip.drawYaxisTooltip(),this.axesTooltip.setXCrosshairWidth(),this.axesTooltip.handleYCrosshair();var a=new V(this.ctx);this.xAxisTicksPositions=a.getXAxisTicksPositions()}if(!e.globals.comboCharts&&!this.tConfig.intersect&&"rangeBar"!==e.config.chart.type||this.tConfig.shared||(this.showOnIntersect=!0),0!==e.config.markers.size&&0!==e.globals.markers.largestSize||this.marker.drawDynamicPoints(this),e.globals.collapsedSeries.length!==e.globals.series.length){this.dataPointsDividedHeight=e.globals.gridHeight/e.globals.dataPoints,this.dataPointsDividedWidth=e.globals.gridWidth/e.globals.dataPoints,this.showTooltipTitle&&(this.tooltipTitle=document.createElement("div"),this.tooltipTitle.classList.add("apexcharts-tooltip-title"),this.tooltipTitle.style.fontFamily=this.tConfig.style.fontFamily||e.config.chart.fontFamily,this.tooltipTitle.style.fontSize=this.tConfig.style.fontSize,i.appendChild(this.tooltipTitle));var s=e.globals.series.length;(e.globals.xyCharts||e.globals.comboCharts)&&this.tConfig.shared&&(s=this.showOnIntersect?1:e.globals.series.length),this.legendLabels=e.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"),this.ttItems=this.createTTElements(s),this.addSVGEvents()}}},{key:"createTTElements",value:function(t){for(var e=this,i=this.w,a=[],s=this.getElTooltip(),r=function(r){var o=document.createElement("div");o.classList.add("apexcharts-tooltip-series-group"),o.style.order=i.config.tooltip.inverseOrder?t-r:r+1,e.tConfig.shared&&e.tConfig.enabledOnSeries&&Array.isArray(e.tConfig.enabledOnSeries)&&e.tConfig.enabledOnSeries.indexOf(r)<0&&o.classList.add("apexcharts-tooltip-series-group-hidden");var n=document.createElement("span");n.classList.add("apexcharts-tooltip-marker"),n.style.backgroundColor=i.globals.colors[r],o.appendChild(n);var l=document.createElement("div");l.classList.add("apexcharts-tooltip-text"),l.style.fontFamily=e.tConfig.style.fontFamily||i.config.chart.fontFamily,l.style.fontSize=e.tConfig.style.fontSize,["y","goals","z"].forEach((function(t){var e=document.createElement("div");e.classList.add("apexcharts-tooltip-".concat(t,"-group"));var i=document.createElement("span");i.classList.add("apexcharts-tooltip-text-".concat(t,"-label")),e.appendChild(i);var a=document.createElement("span");a.classList.add("apexcharts-tooltip-text-".concat(t,"-value")),e.appendChild(a),l.appendChild(e)})),o.appendChild(l),s.appendChild(o),a.push(o)},o=0;o<t;o++)r(o);return a}},{key:"addSVGEvents",value:function(){var t=this.w,e=t.config.chart.type,i=this.getElTooltip(),a=!("bar"!==e&&"candlestick"!==e&&"boxPlot"!==e&&"rangeBar"!==e),s="area"===e||"line"===e||"scatter"===e||"bubble"===e||"radar"===e,r=t.globals.dom.Paper.node,o=this.getElGrid();o&&(this.seriesBound=o.getBoundingClientRect());var n,l=[],h=[],c={hoverArea:r,elGrid:o,tooltipEl:i,tooltipY:l,tooltipX:h,ttItems:this.ttItems};if(t.globals.axisCharts&&(s?n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker"):a?n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area"):"heatmap"!==e&&"treemap"!==e||(n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")),n&&n.length))for(var d=0;d<n.length;d++)l.push(n[d].getAttribute("cy")),h.push(n[d].getAttribute("cx"));if(t.globals.xyCharts&&!this.showOnIntersect||t.globals.comboCharts&&!this.showOnIntersect||a&&this.tooltipUtil.hasBars()&&this.tConfig.shared)this.addPathsEventListeners([r],c);else if(a&&!t.globals.comboCharts||s&&this.showOnIntersect)this.addDatapointEventsListeners(c);else if(!t.globals.axisCharts||"heatmap"===e||"treemap"===e){var g=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");this.addPathsEventListeners(g,c)}if(this.showOnIntersect){var u=t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");u.length>0&&this.addPathsEventListeners(u,c),this.tooltipUtil.hasBars()&&!this.tConfig.shared&&this.addDatapointEventsListeners(c)}}},{key:"drawFixedTooltipRect",value:function(){var t=this.w,e=this.getElTooltip(),i=e.getBoundingClientRect(),a=i.width+10,s=i.height+10,r=this.tConfig.fixed.offsetX,o=this.tConfig.fixed.offsetY,n=this.tConfig.fixed.position.toLowerCase();return n.indexOf("right")>-1&&(r=r+t.globals.svgWidth-a+10),n.indexOf("bottom")>-1&&(o=o+t.globals.svgHeight-s-10),e.style.left=r+"px",e.style.top=o+"px",{x:r,y:o,ttWidth:a,ttHeight:s}}},{key:"addDatapointEventsListeners",value:function(t){var e=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");this.addPathsEventListeners(e,t)}},{key:"addPathsEventListeners",value:function(t,e){for(var i=this,a=function(a){var s={paths:t[a],tooltipEl:e.tooltipEl,tooltipY:e.tooltipY,tooltipX:e.tooltipX,elGrid:e.elGrid,hoverArea:e.hoverArea,ttItems:e.ttItems};["mousemove","mouseup","touchmove","mouseout","touchend"].map((function(e){return t[a].addEventListener(e,i.onSeriesHover.bind(i,s),{capture:!1,passive:!0})}))},s=0;s<t.length;s++)a(s)}},{key:"onSeriesHover",value:function(t,e){var i=this,a=Date.now()-this.lastHoverTime;a>=100?this.seriesHover(t,e):(clearTimeout(this.seriesHoverTimeout),this.seriesHoverTimeout=setTimeout((function(){i.seriesHover(t,e)}),100-a))}},{key:"seriesHover",value:function(t,e){var i=this;this.lastHoverTime=Date.now();var a=[],s=this.w;s.config.chart.group&&(a=this.ctx.getGroupedCharts()),s.globals.axisCharts&&(s.globals.minX===-1/0&&s.globals.maxX===1/0||0===s.globals.dataPoints)||(a.length?a.forEach((function(a){var s=i.getElTooltip(a),r={paths:t.paths,tooltipEl:s,tooltipY:t.tooltipY,tooltipX:t.tooltipX,elGrid:t.elGrid,hoverArea:t.hoverArea,ttItems:a.w.globals.tooltip.ttItems};a.w.globals.minX===i.w.globals.minX&&a.w.globals.maxX===i.w.globals.maxX&&a.w.globals.tooltip.seriesHoverByContext({chartCtx:a,ttCtx:a.w.globals.tooltip,opt:r,e:e})})):this.seriesHoverByContext({chartCtx:this.ctx,ttCtx:this.w.globals.tooltip,opt:t,e:e}))}},{key:"seriesHoverByContext",value:function(t){var e=t.chartCtx,i=t.ttCtx,a=t.opt,s=t.e,r=e.w,o=this.getElTooltip();if(o){if(i.tooltipRect={x:0,y:0,ttWidth:o.getBoundingClientRect().width,ttHeight:o.getBoundingClientRect().height},i.e=s,i.tooltipUtil.hasBars()&&!r.globals.comboCharts&&!i.isBarShared)if(this.tConfig.onDatasetHover.highlightDataSeries)new O(e).toggleSeriesOnHover(s,s.target.parentNode);i.fixedTooltip&&i.drawFixedTooltipRect(),r.globals.axisCharts?i.axisChartsTooltips({e:s,opt:a,tooltipRect:i.tooltipRect}):i.nonAxisChartsTooltips({e:s,opt:a,tooltipRect:i.tooltipRect})}}},{key:"axisChartsTooltips",value:function(t){var e,i,a=t.e,s=t.opt,r=this.w,o=s.elGrid.getBoundingClientRect(),n="touchmove"===a.type?a.touches[0].clientX:a.clientX,l="touchmove"===a.type?a.touches[0].clientY:a.clientY;if(this.clientY=l,this.clientX=n,r.globals.capturedSeriesIndex=-1,r.globals.capturedDataPointIndex=-1,l<o.top||l>o.top+o.height)this.handleMouseOut(s);else{if(Array.isArray(this.tConfig.enabledOnSeries)&&!r.config.tooltip.shared){var h=parseInt(s.paths.getAttribute("index"),10);if(this.tConfig.enabledOnSeries.indexOf(h)<0)return void this.handleMouseOut(s)}var c=this.getElTooltip(),d=this.getElXCrosshairs(),g=r.globals.xyCharts||"bar"===r.config.chart.type&&!r.globals.isBarHorizontal&&this.tooltipUtil.hasBars()&&this.tConfig.shared||r.globals.comboCharts&&this.tooltipUtil.hasBars();if("mousemove"===a.type||"touchmove"===a.type||"mouseup"===a.type){if(r.globals.collapsedSeries.length+r.globals.ancillaryCollapsedSeries.length===r.globals.series.length)return;null!==d&&d.classList.add("apexcharts-active");var u=this.yaxisTooltips.filter((function(t){return!0===t}));if(null!==this.ycrosshairs&&u.length&&this.ycrosshairs.classList.add("apexcharts-active"),g&&!this.showOnIntersect)this.handleStickyTooltip(a,n,l,s);else if("heatmap"===r.config.chart.type||"treemap"===r.config.chart.type){var f=this.intersect.handleHeatTreeTooltip({e:a,opt:s,x:e,y:i,type:r.config.chart.type});e=f.x,i=f.y,c.style.left=e+"px",c.style.top=i+"px"}else this.tooltipUtil.hasBars()&&this.intersect.handleBarTooltip({e:a,opt:s}),this.tooltipUtil.hasMarkers()&&this.intersect.handleMarkerTooltip({e:a,opt:s,x:e,y:i});if(this.yaxisTooltips.length)for(var p=0;p<r.config.yaxis.length;p++)this.axesTooltip.drawYaxisTooltipText(p,l,this.xyRatios);s.tooltipEl.classList.add("apexcharts-active")}else"mouseout"!==a.type&&"touchend"!==a.type||this.handleMouseOut(s)}}},{key:"nonAxisChartsTooltips",value:function(t){var e=t.e,i=t.opt,a=t.tooltipRect,s=this.w,r=i.paths.getAttribute("rel"),o=this.getElTooltip(),n=s.globals.dom.elWrap.getBoundingClientRect();if("mousemove"===e.type||"touchmove"===e.type){o.classList.add("apexcharts-active"),this.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:parseInt(r,10)-1,shared:!1});var l=s.globals.clientX-n.left-a.ttWidth/2,h=s.globals.clientY-n.top-a.ttHeight-10;if(o.style.left=l+"px",o.style.top=h+"px",s.config.legend.tooltipHoverFormatter){var c=r-1,d=(0,s.config.legend.tooltipHoverFormatter)(this.legendLabels[c].getAttribute("data:default-text"),{seriesIndex:c,dataPointIndex:c,w:s});this.legendLabels[c].innerHTML=d}}else"mouseout"!==e.type&&"touchend"!==e.type||(o.classList.remove("apexcharts-active"),s.config.legend.tooltipHoverFormatter&&this.legendLabels.forEach((function(t){var e=t.getAttribute("data:default-text");t.innerHTML=decodeURIComponent(e)})))}},{key:"handleStickyTooltip",value:function(t,e,i,a){var s=this.w,r=this.tooltipUtil.getNearestValues({context:this,hoverArea:a.hoverArea,elGrid:a.elGrid,clientX:e,clientY:i}),o=r.j,n=r.capturedSeries,l=a.elGrid.getBoundingClientRect();r.hoverX<0||r.hoverX>l.width?this.handleMouseOut(a):null!==n?this.handleStickyCapturedSeries(t,n,a,o):(this.tooltipUtil.isXoverlap(o)||s.globals.isBarHorizontal)&&this.create(t,this,0,o,a.ttItems)}},{key:"handleStickyCapturedSeries",value:function(t,e,i,a){var s=this.w;if(!this.tConfig.shared&&null===s.globals.series[e][a])return void this.handleMouseOut(i);void 0!==s.globals.series[e][a]?this.tConfig.shared&&this.tooltipUtil.isXoverlap(a)&&this.tooltipUtil.isInitialSeriesSameLen()?this.create(t,this,e,a,i.ttItems):this.create(t,this,e,a,i.ttItems,!1):this.tooltipUtil.isXoverlap(a)&&this.create(t,this,0,a,i.ttItems)}},{key:"deactivateHoverFilter",value:function(){for(var t=this.w,e=new m(this.ctx),i=t.globals.dom.Paper.select(".apexcharts-bar-area"),a=0;a<i.length;a++)e.pathMouseLeave(i[a])}},{key:"handleMouseOut",value:function(t){var e=this.w,i=this.getElXCrosshairs();if(t.tooltipEl.classList.remove("apexcharts-active"),this.deactivateHoverFilter(),"bubble"!==e.config.chart.type&&this.marker.resetPointsSize(),null!==i&&i.classList.remove("apexcharts-active"),null!==this.ycrosshairs&&this.ycrosshairs.classList.remove("apexcharts-active"),this.isXAxisTooltipEnabled&&this.xaxisTooltip.classList.remove("apexcharts-active"),this.yaxisTooltips.length){null===this.yaxisTTEls&&(this.yaxisTTEls=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));for(var a=0;a<this.yaxisTTEls.length;a++)this.yaxisTTEls[a].classList.remove("apexcharts-active")}e.config.legend.tooltipHoverFormatter&&this.legendLabels.forEach((function(t){var e=t.getAttribute("data:default-text");t.innerHTML=decodeURIComponent(e)}))}},{key:"markerClick",value:function(t,e,i){var a=this.w;"function"==typeof a.config.chart.events.markerClick&&a.config.chart.events.markerClick(t,this.ctx,{seriesIndex:e,dataPointIndex:i,w:a}),this.ctx.events.fireEvent("markerClick",[t,this.ctx,{seriesIndex:e,dataPointIndex:i,w:a}])}},{key:"create",value:function(t,e,i,a,s){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=this.w,n=e;"mouseup"===t.type&&this.markerClick(t,i,a),null===r&&(r=this.tConfig.shared);var l=this.tooltipUtil.hasMarkers(),h=this.tooltipUtil.getElBars();if(o.config.legend.tooltipHoverFormatter){var c=o.config.legend.tooltipHoverFormatter,d=Array.from(this.legendLabels);d.forEach((function(t){var e=t.getAttribute("data:default-text");t.innerHTML=decodeURIComponent(e)}));for(var g=0;g<d.length;g++){var u=d[g],f=parseInt(u.getAttribute("i"),10),p=decodeURIComponent(u.getAttribute("data:default-text")),x=c(p,{seriesIndex:r?f:i,dataPointIndex:a,w:o});if(r)u.innerHTML=o.globals.collapsedSeriesIndices.indexOf(f)<0?x:p;else if(u.innerHTML=f===i?x:p,i===f)break}}if(r){if(n.tooltipLabels.drawSeriesTexts({ttItems:s,i:i,j:a,shared:!this.showOnIntersect&&this.tConfig.shared}),l&&(o.globals.markers.largestSize>0?n.marker.enlargePoints(a):n.tooltipPosition.moveDynamicPointsOnHover(a)),this.tooltipUtil.hasBars()&&(this.barSeriesHeight=this.tooltipUtil.getBarsHeight(h),this.barSeriesHeight>0)){var b=new m(this.ctx),v=o.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(a,"']"));this.deactivateHoverFilter(),this.tooltipPosition.moveStickyTooltipOverBars(a);for(var y=0;y<v.length;y++)b.pathMouseEnter(v[y])}}else n.tooltipLabels.drawSeriesTexts({shared:!1,ttItems:s,i:i,j:a}),this.tooltipUtil.hasBars()&&n.tooltipPosition.moveStickyTooltipOverBars(a),l&&n.tooltipPosition.moveMarkers(i,a)}}]),t}(),vt=function(){function t(e){a(this,t),this.w=e.w,this.barCtx=e,this.totalFormatter=this.w.config.plotOptions.bar.dataLabels.total.formatter,this.totalFormatter||(this.totalFormatter=this.w.config.dataLabels.formatter)}return r(t,[{key:"handleBarDataLabels",value:function(t){var e=t.x,i=t.y,a=t.y1,s=t.y2,r=t.i,o=t.j,n=t.realIndex,l=t.series,h=t.barHeight,c=t.barWidth,d=t.barYPosition,g=t.visibleSeries,u=t.renderedPath,f=this.w,p=new m(this.barCtx.ctx),x=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[n]:this.barCtx.strokeWidth,b=e+parseFloat(c*g),v=i+parseFloat(h*g);f.globals.isXNumeric&&!f.globals.isBarHorizontal&&(b=e+parseFloat(c*(g+1)),v=i+parseFloat(h*(g+1))-x);var y,w=null,k=e,A=i,S={},C=f.config.dataLabels,L=this.barCtx.barOptions.dataLabels,P=this.barCtx.barOptions.dataLabels.total;void 0!==d&&this.barCtx.isRangeBar&&(v=d,A=d);var T=C.offsetX,M=C.offsetY,I={width:0,height:0};if(f.config.dataLabels.enabled){var z=this.barCtx.series[r][o];I=p.getTextRects(f.globals.yLabelFormatters[0](z),parseFloat(C.style.fontSize))}var X={x:e,y:i,i:r,j:o,realIndex:n,renderedPath:u,bcx:b,bcy:v,barHeight:h,barWidth:c,textRects:I,strokeWidth:x,dataLabelsX:k,dataLabelsY:A,dataLabelsConfig:C,barDataLabelsConfig:L,barTotalDataLabelsConfig:P,offX:T,offY:M};return S=this.barCtx.isHorizontal?this.calculateBarsDataLabelsPosition(X):this.calculateColumnsDataLabelsPosition(X),u.attr({cy:S.bcy,cx:S.bcx,j:o,val:l[r][o],barHeight:h,barWidth:c}),y=this.drawCalculatedDataLabels({x:S.dataLabelsX,y:S.dataLabelsY,val:this.barCtx.isRangeBar?[a,s]:l[r][o],i:n,j:o,barWidth:c,barHeight:h,textRects:I,dataLabelsConfig:C}),f.config.chart.stacked&&P.enabled&&(w=this.drawTotalDataLabels({x:S.totalDataLabelsX,y:S.totalDataLabelsY,realIndex:n,textAnchor:S.totalDataLabelsAnchor,val:this.getStackedTotalDataLabel({realIndex:n,j:o}),dataLabelsConfig:C,barTotalDataLabelsConfig:P})),{dataLabels:y,totalDataLabels:w}}},{key:"getStackedTotalDataLabel",value:function(t){var i=t.realIndex,a=t.j,s=this.w,r=this.barCtx.stackedSeriesTotals[a];return this.totalFormatter&&(r=this.totalFormatter(r,e(e({},s),{},{seriesIndex:i,dataPointIndex:a,w:s}))),r}},{key:"calculateColumnsDataLabelsPosition",value:function(t){var e,i,a,s=this.w,r=t.i,o=t.j,n=t.realIndex,l=t.y,h=t.bcx,c=t.barWidth,d=t.barHeight,g=t.textRects,u=t.dataLabelsY,f=t.dataLabelsConfig,p=t.barDataLabelsConfig,x=t.barTotalDataLabelsConfig,b=t.strokeWidth,v=t.offX,y=t.offY;d=Math.abs(d);var w="vertical"===s.config.plotOptions.bar.dataLabels.orientation;h-=b/2;var k=s.globals.gridWidth/s.globals.dataPoints;if(e=s.globals.isXNumeric?h-c/2+v:h-k+c/2+v,w){e=e+g.height/2-b/2-2}var A=this.barCtx.series[r][o]<0,S=l;switch(this.barCtx.isReversed&&(S=l-d+(A?2*d:0),l-=d),p.position){case"center":u=w?A?S+d/2+y:S+d/2-y:A?S-d/2+g.height/2+y:S+d/2+g.height/2-y;break;case"bottom":u=w?A?S+d+y:S+d-y:A?S-d+g.height+b+y:S+d-g.height/2+b-y;break;case"top":u=w?A?S+y:S-y:A?S-g.height/2-y:S+g.height+y}if(this.barCtx.lastActiveBarSerieIndex===n&&x.enabled){var C=new m(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({realIndex:n,j:o}),f.fontSize);i=A?S-C.height/2-y-x.offsetY+18:S+C.height+y+x.offsetY-18,a=e+x.offsetX}return s.config.chart.stacked||(u<0?u=0+b:u+g.height/3>s.globals.gridHeight&&(u=s.globals.gridHeight-b)),{bcx:h,bcy:l,dataLabelsX:e,dataLabelsY:u,totalDataLabelsX:a,totalDataLabelsY:i,totalDataLabelsAnchor:"middle"}}},{key:"calculateBarsDataLabelsPosition",value:function(t){var e=this.w,i=t.x,a=t.i,s=t.j,r=t.realIndex,o=t.bcy,n=t.barHeight,l=t.barWidth,h=t.textRects,c=t.dataLabelsX,d=t.strokeWidth,g=t.dataLabelsConfig,u=t.barDataLabelsConfig,f=t.barTotalDataLabelsConfig,p=t.offX,x=t.offY,b=e.globals.gridHeight/e.globals.dataPoints;l=Math.abs(l);var v,y,w=o-(this.barCtx.isRangeBar?0:b)+n/2+h.height/2+x-3,k="start",A=this.barCtx.series[a][s]<0,S=i;switch(this.barCtx.isReversed&&(S=i+l-(A?2*l:0),i=e.globals.gridWidth-l),u.position){case"center":c=A?S+l/2-p:Math.max(h.width/2,S-l/2)+p;break;case"bottom":c=A?S+l-d-Math.round(h.width/2)-p:S-l+d+Math.round(h.width/2)+p;break;case"top":c=A?S-d+Math.round(h.width/2)-p:S-d-Math.round(h.width/2)+p}if(this.barCtx.lastActiveBarSerieIndex===r&&f.enabled){var C=new m(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({realIndex:r,j:s}),g.fontSize);A?(v=S-d+Math.round(C.width/2)-p-f.offsetX-15,k="end"):v=S-d-Math.round(C.width/2)+p+f.offsetX+15,y=w+f.offsetY}return e.config.chart.stacked||(c<0?c=c+h.width+d:c+h.width/2>e.globals.gridWidth&&(c=e.globals.gridWidth-h.width-d)),{bcx:i,bcy:o,dataLabelsX:c,dataLabelsY:w,totalDataLabelsX:v,totalDataLabelsY:y,totalDataLabelsAnchor:k}}},{key:"drawCalculatedDataLabels",value:function(t){var i=t.x,a=t.y,s=t.val,r=t.i,o=t.j,n=t.textRects,l=t.barHeight,h=t.barWidth,c=t.dataLabelsConfig,d=this.w,g="rotate(0)";"vertical"===d.config.plotOptions.bar.dataLabels.orientation&&(g="rotate(-90, ".concat(i,", ").concat(a,")"));var u=new H(this.barCtx.ctx),f=new m(this.barCtx.ctx),p=c.formatter,x=null,b=d.globals.collapsedSeriesIndices.indexOf(r)>-1;if(c.enabled&&!b){x=f.group({class:"apexcharts-data-labels",transform:g});var v="";void 0!==s&&(v=p(s,e(e({},d),{},{seriesIndex:r,dataPointIndex:o,w:d})));var y=d.globals.series[r][o]<0,w=d.config.plotOptions.bar.dataLabels.position;if("vertical"===d.config.plotOptions.bar.dataLabels.orientation&&("top"===w&&(c.textAnchor=y?"end":"start"),"center"===w&&(c.textAnchor="middle"),"bottom"===w&&(c.textAnchor=y?"end":"start")),this.barCtx.isRangeBar&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels)h<f.getTextRects(v,parseFloat(c.style.fontSize)).width&&(v="");d.config.chart.stacked&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels&&(this.barCtx.isHorizontal?n.width/1.6>Math.abs(h)&&(v=""):n.height/1.6>Math.abs(l)&&(v=""));var k=e({},c);this.barCtx.isHorizontal&&s<0&&("start"===c.textAnchor?k.textAnchor="end":"end"===c.textAnchor&&(k.textAnchor="start")),u.plotDataLabelsText({x:i,y:a,text:v,i:r,j:o,parent:x,dataLabelsConfig:k,alwaysDrawDataLabel:!0,offsetCorrection:!0})}return x}},{key:"drawTotalDataLabels",value:function(t){var e,i=t.x,a=t.y,s=t.val,r=t.realIndex,o=t.textAnchor,n=t.barTotalDataLabelsConfig,l=new m(this.barCtx.ctx);return n.enabled&&void 0!==i&&void 0!==a&&this.barCtx.lastActiveBarSerieIndex===r&&(e=l.drawText({x:i,y:a,foreColor:n.style.color,text:s,textAnchor:o,fontFamily:n.style.fontFamily,fontSize:n.style.fontSize,fontWeight:n.style.fontWeight})),e}}]),t}(),mt=function(){function t(e){a(this,t),this.w=e.w,this.barCtx=e}return r(t,[{key:"initVariables",value:function(t){var e=this.w;this.barCtx.series=t,this.barCtx.totalItems=0,this.barCtx.seriesLen=0,this.barCtx.visibleI=-1,this.barCtx.visibleItems=1;for(var i=0;i<t.length;i++)if(t[i].length>0&&(this.barCtx.seriesLen=this.barCtx.seriesLen+1,this.barCtx.totalItems+=t[i].length),e.globals.isXNumeric)for(var a=0;a<t[i].length;a++)e.globals.seriesX[i][a]>e.globals.minX&&e.globals.seriesX[i][a]<e.globals.maxX&&this.barCtx.visibleItems++;else this.barCtx.visibleItems=e.globals.dataPoints;0===this.barCtx.seriesLen&&(this.barCtx.seriesLen=1),this.barCtx.zeroSerieses=[],this.barCtx.radiusOnSeriesNumber=t.length-1,e.globals.comboCharts||this.checkZeroSeries({series:t})}},{key:"initialPositions",value:function(){var t,e,i,a,s,r,o,n,l=this.w,h=l.globals.dataPoints;this.barCtx.isRangeBar&&(h=l.globals.labels.length);var c=this.barCtx.seriesLen;if(l.config.plotOptions.bar.rangeBarGroupRows&&(c=1),this.barCtx.isHorizontal)s=(i=l.globals.gridHeight/h)/c,l.globals.isXNumeric&&(s=(i=l.globals.gridHeight/this.barCtx.totalItems)/this.barCtx.seriesLen),s=s*parseInt(this.barCtx.barOptions.barHeight,10)/100,n=this.barCtx.baseLineInvertedY+l.globals.padHorizontal+(this.barCtx.isReversed?l.globals.gridWidth:0)-(this.barCtx.isReversed?2*this.barCtx.baseLineInvertedY:0),e=(i-s*this.barCtx.seriesLen)/2;else{if(a=l.globals.gridWidth/this.barCtx.visibleItems,l.config.xaxis.convertedCatToNumeric&&(a=l.globals.gridWidth/l.globals.dataPoints),r=a/this.barCtx.seriesLen*parseInt(this.barCtx.barOptions.columnWidth,10)/100,l.globals.isXNumeric){var d=this.barCtx.xRatio;l.config.xaxis.convertedCatToNumeric&&(d=this.barCtx.initialXRatio),l.globals.minXDiff&&.5!==l.globals.minXDiff&&l.globals.minXDiff/d>0&&(a=l.globals.minXDiff/d),(r=a/this.barCtx.seriesLen*parseInt(this.barCtx.barOptions.columnWidth,10)/100)<1&&(r=1)}o=l.globals.gridHeight-this.barCtx.baseLineY[this.barCtx.yaxisIndex]-(this.barCtx.isReversed?l.globals.gridHeight:0)+(this.barCtx.isReversed?2*this.barCtx.baseLineY[this.barCtx.yaxisIndex]:0),t=l.globals.padHorizontal+(a-r*this.barCtx.seriesLen)/2}return{x:t,y:e,yDivision:i,xDivision:a,barHeight:s,barWidth:r,zeroH:o,zeroW:n}}},{key:"getPathFillColor",value:function(t,e,i,a){var s,r,o,n,l=this.w,h=new F(this.barCtx.ctx),c=null,d=this.barCtx.barOptions.distributed?i:e;this.barCtx.barOptions.colors.ranges.length>0&&this.barCtx.barOptions.colors.ranges.map((function(a){t[e][i]>=a.from&&t[e][i]<=a.to&&(c=a.color)}));return l.config.series[e].data[i]&&l.config.series[e].data[i].fillColor&&(c=l.config.series[e].data[i].fillColor),h.fillPath({seriesNumber:this.barCtx.barOptions.distributed?d:a,dataPointIndex:i,color:c,value:t[e][i],fillConfig:null===(s=l.config.series[e].data[i])||void 0===s?void 0:s.fill,fillType:null!==(r=l.config.series[e].data[i])&&void 0!==r&&null!==(o=r.fill)&&void 0!==o&&o.type?null===(n=l.config.series[e].data[i])||void 0===n?void 0:n.fill.type:l.config.fill.type})}},{key:"getStrokeWidth",value:function(t,e,i){var a=0,s=this.w;return void 0===this.barCtx.series[t][e]||null===this.barCtx.series[t][e]?this.barCtx.isNullValue=!0:this.barCtx.isNullValue=!1,s.config.stroke.show&&(this.barCtx.isNullValue||(a=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[i]:this.barCtx.strokeWidth)),a}},{key:"shouldApplyRadius",value:function(t){var e=this.w,i=!1;return e.config.plotOptions.bar.borderRadius>0&&(e.config.chart.stacked&&"last"===e.config.plotOptions.bar.borderRadiusWhenStacked?this.barCtx.lastActiveBarSerieIndex===t&&(i=!0):i=!0),i}},{key:"barBackground",value:function(t){var e=t.j,i=t.i,a=t.x1,s=t.x2,r=t.y1,o=t.y2,n=t.elSeries,l=this.w,h=new m(this.barCtx.ctx),c=new O(this.barCtx.ctx).getActiveConfigSeriesIndex();if(this.barCtx.barOptions.colors.backgroundBarColors.length>0&&c===i){e>=this.barCtx.barOptions.colors.backgroundBarColors.length&&(e%=this.barCtx.barOptions.colors.backgroundBarColors.length);var d=this.barCtx.barOptions.colors.backgroundBarColors[e],g=h.drawRect(void 0!==a?a:0,void 0!==r?r:0,void 0!==s?s:l.globals.gridWidth,void 0!==o?o:l.globals.gridHeight,this.barCtx.barOptions.colors.backgroundBarRadius,d,this.barCtx.barOptions.colors.backgroundBarOpacity);n.add(g),g.node.classList.add("apexcharts-backgroundBar")}}},{key:"getColumnPaths",value:function(t){var e,i=t.barWidth,a=t.barXPosition,s=t.y1,r=t.y2,o=t.strokeWidth,n=t.realIndex,l=t.i,h=t.j,c=t.w,d=new m(this.barCtx.ctx);(o=Array.isArray(o)?o[n]:o)||(o=0);var g=i,u=a;null!==(e=c.config.series[n].data[h])&&void 0!==e&&e.columnWidthOffset&&(u=a-c.config.series[n].data[h].columnWidthOffset/2,g=i+c.config.series[n].data[h].columnWidthOffset);var f=u,p=u+g;s+=.001,r+=.001;var x=d.move(f,s),b=d.move(f,s),v=d.line(p-o,s);return c.globals.previousPaths.length>0&&(b=this.barCtx.getPreviousPath(n,h,!1)),x=x+d.line(f,r)+d.line(p-o,r)+d.line(p-o,s)+("around"===c.config.plotOptions.bar.borderRadiusApplication?" Z":" z"),b=b+d.line(f,s)+v+v+v+v+v+d.line(f,s)+("around"===c.config.plotOptions.bar.borderRadiusApplication?" Z":" z"),this.shouldApplyRadius(n)&&(x=d.roundPathCorners(x,c.config.plotOptions.bar.borderRadius)),c.config.chart.stacked&&(this.barCtx.yArrj.push(r),this.barCtx.yArrjF.push(Math.abs(s-r)),this.barCtx.yArrjVal.push(this.barCtx.series[l][h])),{pathTo:x,pathFrom:b}}},{key:"getBarpaths",value:function(t){var e,i=t.barYPosition,a=t.barHeight,s=t.x1,r=t.x2,o=t.strokeWidth,n=t.realIndex,l=t.i,h=t.j,c=t.w,d=new m(this.barCtx.ctx);(o=Array.isArray(o)?o[n]:o)||(o=0);var g=i,u=a;null!==(e=c.config.series[n].data[h])&&void 0!==e&&e.barHeightOffset&&(g=i-c.config.series[n].data[h].barHeightOffset/2,u=a+c.config.series[n].data[h].barHeightOffset);var f=g,p=g+u;s+=.001,r+=.001;var x=d.move(s,f),b=d.move(s,f);c.globals.previousPaths.length>0&&(b=this.barCtx.getPreviousPath(n,h,!1));var v=d.line(s,p-o);return x=x+d.line(r,f)+d.line(r,p-o)+v+("around"===c.config.plotOptions.bar.borderRadiusApplication?" Z":" z"),b=b+d.line(s,f)+v+v+v+v+v+d.line(s,f)+("around"===c.config.plotOptions.bar.borderRadiusApplication?" Z":" z"),this.shouldApplyRadius(n)&&(x=d.roundPathCorners(x,c.config.plotOptions.bar.borderRadius)),c.config.chart.stacked&&(this.barCtx.xArrj.push(r),this.barCtx.xArrjF.push(Math.abs(s-r)),this.barCtx.xArrjVal.push(this.barCtx.series[l][h])),{pathTo:x,pathFrom:b}}},{key:"checkZeroSeries",value:function(t){for(var e=t.series,i=this.w,a=0;a<e.length;a++){for(var s=0,r=0;r<e[i.globals.maxValsInArrayIndex].length;r++)s+=e[a][r];0===s&&this.barCtx.zeroSerieses.push(a)}for(var o=e.length-1;o>=0;o--)this.barCtx.zeroSerieses.indexOf(o)>-1&&o===this.radiusOnSeriesNumber&&(this.barCtx.radiusOnSeriesNumber-=1);for(var n=e.length-1;n>=0;n--)i.globals.collapsedSeriesIndices.indexOf(this.barCtx.radiusOnSeriesNumber)>-1&&(this.barCtx.radiusOnSeriesNumber-=1)}},{key:"getXForValue",value:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=i?e:null;return null!=t&&(a=e+t/this.barCtx.invertedYRatio-2*(this.barCtx.isReversed?t/this.barCtx.invertedYRatio:0)),a}},{key:"getYForValue",value:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=i?e:null;return null!=t&&(a=e-t/this.barCtx.yRatio[this.barCtx.yaxisIndex]+2*(this.barCtx.isReversed?t/this.barCtx.yRatio[this.barCtx.yaxisIndex]:0)),a}},{key:"getGoalValues",value:function(t,e,i,a,s){var r=this,n=this.w,l=[];return n.globals.seriesGoals[a]&&n.globals.seriesGoals[a][s]&&Array.isArray(n.globals.seriesGoals[a][s])&&n.globals.seriesGoals[a][s].forEach((function(a){var s;l.push((o(s={},t,"x"===t?r.getXForValue(a.value,e,!1):r.getYForValue(a.value,i,!1)),o(s,"attrs",a),s))})),l}},{key:"drawGoalLine",value:function(t){var e=t.barXPosition,i=t.barYPosition,a=t.goalX,s=t.goalY,r=t.barWidth,o=t.barHeight,n=new m(this.barCtx.ctx),l=n.group({className:"apexcharts-bar-goals-groups"}),h=null;return this.barCtx.isHorizontal?Array.isArray(a)&&a.forEach((function(t){var e=void 0!==t.attrs.strokeHeight?t.attrs.strokeHeight:o/2,a=i+e+o/2;h=n.drawLine(t.x,a-2*e,t.x,a,t.attrs.strokeColor?t.attrs.strokeColor:void 0,t.attrs.strokeDashArray,t.attrs.strokeWidth?t.attrs.strokeWidth:2,t.attrs.strokeLineCap),l.add(h)})):Array.isArray(s)&&s.forEach((function(t){var i=void 0!==t.attrs.strokeWidth?t.attrs.strokeWidth:r/2,a=e+i+r/2;h=n.drawLine(a-2*i,t.y,a,t.y,t.attrs.strokeColor?t.attrs.strokeColor:void 0,t.attrs.strokeDashArray,t.attrs.strokeHeight?t.attrs.strokeHeight:2,t.attrs.strokeLineCap),l.add(h)})),l}}]),t}(),yt=function(){function t(e,i){a(this,t),this.ctx=e,this.w=e.w;var s=this.w;this.barOptions=s.config.plotOptions.bar,this.isHorizontal=this.barOptions.horizontal,this.strokeWidth=s.config.stroke.width,this.isNullValue=!1,this.isRangeBar=s.globals.seriesRange.length&&this.isHorizontal,this.xyRatios=i,null!==this.xyRatios&&(this.xRatio=i.xRatio,this.initialXRatio=i.initialXRatio,this.yRatio=i.yRatio,this.invertedXRatio=i.invertedXRatio,this.invertedYRatio=i.invertedYRatio,this.baseLineY=i.baseLineY,this.baseLineInvertedY=i.baseLineInvertedY),this.yaxisIndex=0,this.seriesLen=0;var r=new O(this.ctx);this.lastActiveBarSerieIndex=r.getActiveConfigSeriesIndex("desc",["bar","column"]);var o=r.getBarSeriesIndices(),n=new y(this.ctx);this.stackedSeriesTotals=n.getStackedSeriesTotals(this.w.config.series.map((function(t,e){return-1===o.indexOf(e)?e:-1})).filter((function(t){return-1!==t}))),this.barHelpers=new mt(this)}return r(t,[{key:"draw",value:function(t,i){var a=this.w,s=new m(this.ctx),r=new y(this.ctx,a);t=r.getLogSeries(t),this.series=t,this.yRatio=r.getLogYRatios(this.yRatio),this.barHelpers.initVariables(t);var o=s.group({class:"apexcharts-bar-series apexcharts-plot-series"});a.config.dataLabels.enabled&&this.totalItems>this.barOptions.dataLabels.maxItems&&console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering.");for(var n=0,l=0;n<t.length;n++,l++){var h,c,d,g,u=void 0,f=void 0,p=[],b=[],v=a.globals.comboCharts?i[n]:n,w=s.group({class:"apexcharts-series",rel:n+1,seriesName:x.escapeString(a.globals.seriesNames[v]),"data:realIndex":v});this.ctx.series.addCollapsedClassToSeries(w,v),t[n].length>0&&(this.visibleI=this.visibleI+1);var k=0,A=0;this.yRatio.length>1&&(this.yaxisIndex=v),this.isReversed=a.config.yaxis[this.yaxisIndex]&&a.config.yaxis[this.yaxisIndex].reversed;var S=this.barHelpers.initialPositions();f=S.y,k=S.barHeight,c=S.yDivision,g=S.zeroW,u=S.x,A=S.barWidth,h=S.xDivision,d=S.zeroH,this.horizontal||b.push(u+A/2);for(var C=s.group({class:"apexcharts-datalabels","data:realIndex":v}),L=s.group({class:"apexcharts-bar-goals-markers",style:"pointer-events: none"}),P=0;P<a.globals.dataPoints;P++){var T=this.barHelpers.getStrokeWidth(n,P,v),M=null,I={indexes:{i:n,j:P,realIndex:v,bc:l},x:u,y:f,strokeWidth:T,elSeries:w};this.isHorizontal?(M=this.drawBarPaths(e(e({},I),{},{barHeight:k,zeroW:g,yDivision:c})),A=this.series[n][P]/this.invertedYRatio):(M=this.drawColumnPaths(e(e({},I),{},{xDivision:h,barWidth:A,zeroH:d})),k=this.series[n][P]/this.yRatio[this.yaxisIndex]);var z=this.barHelpers.drawGoalLine({barXPosition:M.barXPosition,barYPosition:M.barYPosition,goalX:M.goalX,goalY:M.goalY,barHeight:k,barWidth:A});z&&L.add(z),f=M.y,u=M.x,P>0&&b.push(u+A/2),p.push(f);var X=this.barHelpers.getPathFillColor(t,n,P,v);this.renderSeries({realIndex:v,pathFill:X,j:P,i:n,pathFrom:M.pathFrom,pathTo:M.pathTo,strokeWidth:T,elSeries:w,x:u,y:f,series:t,barHeight:k,barWidth:A,elDataLabelsWrap:C,elGoalsMarkers:L,visibleSeries:this.visibleI,type:"bar"})}a.globals.seriesXvalues[v]=b,a.globals.seriesYvalues[v]=p,o.add(w)}return o}},{key:"renderSeries",value:function(t){var e=t.realIndex,i=t.pathFill,a=t.lineFill,s=t.j,r=t.i,o=t.pathFrom,n=t.pathTo,l=t.strokeWidth,h=t.elSeries,c=t.x,d=t.y,g=t.y1,u=t.y2,f=t.series,p=t.barHeight,x=t.barWidth,b=t.barYPosition,y=t.elDataLabelsWrap,w=t.elGoalsMarkers,k=t.visibleSeries,A=t.type,S=this.w,C=new m(this.ctx);a||(a=this.barOptions.distributed?S.globals.stroke.colors[s]:S.globals.stroke.colors[e]),S.config.series[r].data[s]&&S.config.series[r].data[s].strokeColor&&(a=S.config.series[r].data[s].strokeColor),this.isNullValue&&(i="none");var L=s/S.config.chart.animations.animateGradually.delay*(S.config.chart.animations.speed/S.globals.dataPoints)/2.4,P=C.renderPaths({i:r,j:s,realIndex:e,pathFrom:o,pathTo:n,stroke:a,strokeWidth:l,strokeLineCap:S.config.stroke.lineCap,fill:i,animationDelay:L,initialSpeed:S.config.chart.animations.speed,dataChangeSpeed:S.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(A,"-area")});P.attr("clip-path","url(#gridRectMask".concat(S.globals.cuid,")"));var T=S.config.forecastDataPoints;T.count>0&&s>=S.globals.dataPoints-T.count&&(P.node.setAttribute("stroke-dasharray",T.dashArray),P.node.setAttribute("stroke-width",T.strokeWidth),P.node.setAttribute("fill-opacity",T.fillOpacity)),void 0!==g&&void 0!==u&&(P.attr("data-range-y1",g),P.attr("data-range-y2",u)),new v(this.ctx).setSelectionFilter(P,e,s),h.add(P);var M=new vt(this).handleBarDataLabels({x:c,y:d,y1:g,y2:u,i:r,j:s,series:f,realIndex:e,barHeight:p,barWidth:x,barYPosition:b,renderedPath:P,visibleSeries:k});return null!==M.dataLabels&&y.add(M.dataLabels),M.totalDataLabels&&y.add(M.totalDataLabels),h.add(y),w&&h.add(w),h}},{key:"drawBarPaths",value:function(t){var e=t.indexes,i=t.barHeight,a=t.strokeWidth,s=t.zeroW,r=t.x,o=t.y,n=t.yDivision,l=t.elSeries,h=this.w,c=e.i,d=e.j;h.globals.isXNumeric&&(o=(h.globals.seriesX[c][d]-h.globals.minX)/this.invertedXRatio-i);var g=o+i*this.visibleI;r=this.barHelpers.getXForValue(this.series[c][d],s);var u=this.barHelpers.getBarpaths({barYPosition:g,barHeight:i,x1:s,x2:r,strokeWidth:a,series:this.series,realIndex:e.realIndex,i:c,j:d,w:h});return h.globals.isXNumeric||(o+=n),this.barHelpers.barBackground({j:d,i:c,y1:g-i*this.visibleI,y2:i*this.seriesLen,elSeries:l}),{pathTo:u.pathTo,pathFrom:u.pathFrom,x:r,y:o,goalX:this.barHelpers.getGoalValues("x",s,null,c,d),barYPosition:g}}},{key:"drawColumnPaths",value:function(t){var e=t.indexes,i=t.x,a=t.y,s=t.xDivision,r=t.barWidth,o=t.zeroH,n=t.strokeWidth,l=t.elSeries,h=this.w,c=e.realIndex,d=e.i,g=e.j,u=e.bc;if(h.globals.isXNumeric){var f=c;h.globals.seriesX[c].length||(f=h.globals.maxValsInArrayIndex),i=(h.globals.seriesX[f][g]-h.globals.minX)/this.xRatio-r*this.seriesLen/2}var p=i+r*this.visibleI;a=this.barHelpers.getYForValue(this.series[d][g],o);var x=this.barHelpers.getColumnPaths({barXPosition:p,barWidth:r,y1:o,y2:a,strokeWidth:n,series:this.series,realIndex:e.realIndex,i:d,j:g,w:h});return h.globals.isXNumeric||(i+=s),this.barHelpers.barBackground({bc:u,j:g,i:d,x1:p-n/2-r*this.visibleI,x2:r*this.seriesLen+n/2,elSeries:l}),{pathTo:x.pathTo,pathFrom:x.pathFrom,x:i,y:a,goalY:this.barHelpers.getGoalValues("y",null,o,d,g),barXPosition:p}}},{key:"getPreviousPath",value:function(t,e){for(var i,a=this.w,s=0;s<a.globals.previousPaths.length;s++){var r=a.globals.previousPaths[s];r.paths&&r.paths.length>0&&parseInt(r.realIndex,10)===parseInt(t,10)&&void 0!==a.globals.previousPaths[s].paths[e]&&(i=a.globals.previousPaths[s].paths[e].d)}return i}}]),t}(),wt=function(t){n(s,t);var i=d(s);function s(){return a(this,s),i.apply(this,arguments)}return r(s,[{key:"draw",value:function(t,i){var a=this,s=this.w;this.graphics=new m(this.ctx),this.bar=new yt(this.ctx,this.xyRatios);var r=new y(this.ctx,s);t=r.getLogSeries(t),this.yRatio=r.getLogYRatios(this.yRatio),this.barHelpers.initVariables(t),"100%"===s.config.chart.stackType&&(t=s.globals.seriesPercent.slice()),this.series=t,this.totalItems=0,this.prevY=[],this.prevX=[],this.prevYF=[],this.prevXF=[],this.prevYVal=[],this.prevXVal=[],this.xArrj=[],this.xArrjF=[],this.xArrjVal=[],this.yArrj=[],this.yArrjF=[],this.yArrjVal=[];for(var o=0;o<t.length;o++)t[o].length>0&&(this.totalItems+=t[o].length);for(var n=this.graphics.group({class:"apexcharts-bar-series apexcharts-plot-series"}),l=0,h=0,c=function(r,o){var c=void 0,d=void 0,g=void 0,u=void 0,f=[],p=[],b=s.globals.comboCharts?i[r]:r;a.yRatio.length>1&&(a.yaxisIndex=b),a.isReversed=s.config.yaxis[a.yaxisIndex]&&s.config.yaxis[a.yaxisIndex].reversed;var v=a.graphics.group({class:"apexcharts-series",seriesName:x.escapeString(s.globals.seriesNames[b]),rel:r+1,"data:realIndex":b});a.ctx.series.addCollapsedClassToSeries(v,b);var m=a.graphics.group({class:"apexcharts-datalabels","data:realIndex":b}),y=a.graphics.group({class:"apexcharts-bar-goals-markers",style:"pointer-events: none"}),w=0,k=0,A=a.initialPositions(l,h,c,d,g,u);h=A.y,w=A.barHeight,d=A.yDivision,u=A.zeroW,l=A.x,k=A.barWidth,c=A.xDivision,g=A.zeroH,a.yArrj=[],a.yArrjF=[],a.yArrjVal=[],a.xArrj=[],a.xArrjF=[],a.xArrjVal=[],1===a.prevY.length&&a.prevY[0].every((function(t){return isNaN(t)}))&&(a.prevY[0]=a.prevY[0].map((function(t){return g})),a.prevYF[0]=a.prevYF[0].map((function(t){return 0})));for(var S=0;S<s.globals.dataPoints;S++){var C=a.barHelpers.getStrokeWidth(r,S,b),L={indexes:{i:r,j:S,realIndex:b,bc:o},strokeWidth:C,x:l,y:h,elSeries:v},P=null;a.isHorizontal?(P=a.drawStackedBarPaths(e(e({},L),{},{zeroW:u,barHeight:w,yDivision:d})),k=a.series[r][S]/a.invertedYRatio):(P=a.drawStackedColumnPaths(e(e({},L),{},{xDivision:c,barWidth:k,zeroH:g})),w=a.series[r][S]/a.yRatio[a.yaxisIndex]);var T=a.barHelpers.drawGoalLine({barXPosition:P.barXPosition,barYPosition:P.barYPosition,goalX:P.goalX,goalY:P.goalY,barHeight:w,barWidth:k});T&&y.add(T),h=P.y,l=P.x,f.push(l),p.push(h);var M=a.barHelpers.getPathFillColor(t,r,S,b);v=a.renderSeries({realIndex:b,pathFill:M,j:S,i:r,pathFrom:P.pathFrom,pathTo:P.pathTo,strokeWidth:C,elSeries:v,x:l,y:h,series:t,barHeight:w,barWidth:k,elDataLabelsWrap:m,elGoalsMarkers:y,type:"bar",visibleSeries:0})}s.globals.seriesXvalues[b]=f,s.globals.seriesYvalues[b]=p,a.prevY.push(a.yArrj),a.prevYF.push(a.yArrjF),a.prevYVal.push(a.yArrjVal),a.prevX.push(a.xArrj),a.prevXF.push(a.xArrjF),a.prevXVal.push(a.xArrjVal),n.add(v)},d=0,g=0;d<t.length;d++,g++)c(d,g);return n}},{key:"initialPositions",value:function(t,e,i,a,s,r){var o,n,l=this.w;return this.isHorizontal?(o=(o=a=l.globals.gridHeight/l.globals.dataPoints)*parseInt(l.config.plotOptions.bar.barHeight,10)/100,r=this.baseLineInvertedY+l.globals.padHorizontal+(this.isReversed?l.globals.gridWidth:0)-(this.isReversed?2*this.baseLineInvertedY:0),e=(a-o)/2):(n=i=l.globals.gridWidth/l.globals.dataPoints,n=l.globals.isXNumeric&&l.globals.dataPoints>1?(i=l.globals.minXDiff/this.xRatio)*parseInt(this.barOptions.columnWidth,10)/100:n*parseInt(l.config.plotOptions.bar.columnWidth,10)/100,s=l.globals.gridHeight-this.baseLineY[this.yaxisIndex]-(this.isReversed?l.globals.gridHeight:0)+(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0),t=l.globals.padHorizontal+(i-n)/2),{x:t,y:e,yDivision:a,xDivision:i,barHeight:o,barWidth:n,zeroH:s,zeroW:r}}},{key:"drawStackedBarPaths",value:function(t){for(var e,i=t.indexes,a=t.barHeight,s=t.strokeWidth,r=t.zeroW,o=t.x,n=t.y,l=t.yDivision,h=t.elSeries,c=this.w,d=n,g=i.i,u=i.j,f=0,p=0;p<this.prevXF.length;p++)f+=this.prevXF[p][u];if(g>0){var x=r;this.prevXVal[g-1][u]<0?x=this.series[g][u]>=0?this.prevX[g-1][u]+f-2*(this.isReversed?f:0):this.prevX[g-1][u]:this.prevXVal[g-1][u]>=0&&(x=this.series[g][u]>=0?this.prevX[g-1][u]:this.prevX[g-1][u]-f+2*(this.isReversed?f:0)),e=x}else e=r;o=null===this.series[g][u]?e:e+this.series[g][u]/this.invertedYRatio-2*(this.isReversed?this.series[g][u]/this.invertedYRatio:0);var b=this.barHelpers.getBarpaths({barYPosition:d,barHeight:a,x1:e,x2:o,strokeWidth:s,series:this.series,realIndex:i.realIndex,i:g,j:u,w:c});return this.barHelpers.barBackground({j:u,i:g,y1:d,y2:a,elSeries:h}),n+=l,{pathTo:b.pathTo,pathFrom:b.pathFrom,goalX:this.barHelpers.getGoalValues("x",r,null,g,u),barYPosition:d,x:o,y:n}}},{key:"drawStackedColumnPaths",value:function(t){var e=t.indexes,i=t.x,a=t.y,s=t.xDivision,r=t.barWidth,o=t.zeroH;t.strokeWidth;var n=t.elSeries,l=this.w,h=e.i,c=e.j,d=e.bc;if(l.globals.isXNumeric){var g=l.globals.seriesX[h][c];g||(g=0),i=(g-l.globals.minX)/this.xRatio-r/2}for(var u,f=i,p=0,x=0;x<this.prevYF.length;x++)p+=isNaN(this.prevYF[x][c])?0:this.prevYF[x][c];if(h>0&&!l.globals.isXNumeric||h>0&&l.globals.isXNumeric&&l.globals.seriesX[h-1][c]===l.globals.seriesX[h][c]){var b,v,m=Math.min(this.yRatio.length+1,h+1);if(void 0!==this.prevY[h-1])for(var y=1;y<m;y++)if(!isNaN(this.prevY[h-y][c])){v=this.prevY[h-y][c];break}for(var w=1;w<m;w++){if(this.prevYVal[h-w][c]<0){b=this.series[h][c]>=0?v-p+2*(this.isReversed?p:0):v;break}if(this.prevYVal[h-w][c]>=0){b=this.series[h][c]>=0?v:v+p-2*(this.isReversed?p:0);break}}void 0===b&&(b=l.globals.gridHeight),u=this.prevYF[0].every((function(t){return 0===t}))&&this.prevYF.slice(1,h).every((function(t){return t.every((function(t){return isNaN(t)}))}))?o:b}else u=o;a=u-this.series[h][c]/this.yRatio[this.yaxisIndex]+2*(this.isReversed?this.series[h][c]/this.yRatio[this.yaxisIndex]:0);var k=this.barHelpers.getColumnPaths({barXPosition:f,barWidth:r,y1:u,y2:a,yRatio:this.yRatio[this.yaxisIndex],strokeWidth:this.strokeWidth,series:this.series,realIndex:e.realIndex,i:h,j:c,w:l});return this.barHelpers.barBackground({bc:d,j:c,i:h,x1:f,x2:r,elSeries:n}),i+=s,{pathTo:k.pathTo,pathFrom:k.pathFrom,goalY:this.barHelpers.getGoalValues("y",null,o,h,c),barXPosition:f,x:l.globals.isXNumeric?i-s:i,y:a}}}]),s}(yt),kt=function(t){n(s,t);var i=d(s);function s(){return a(this,s),i.apply(this,arguments)}return r(s,[{key:"draw",value:function(t,i){var a=this,s=this.w,r=new m(this.ctx),o=new F(this.ctx);this.candlestickOptions=this.w.config.plotOptions.candlestick,this.boxOptions=this.w.config.plotOptions.boxPlot,this.isHorizontal=s.config.plotOptions.bar.horizontal;var n=new y(this.ctx,s);t=n.getLogSeries(t),this.series=t,this.yRatio=n.getLogYRatios(this.yRatio),this.barHelpers.initVariables(t);for(var l=r.group({class:"apexcharts-".concat(s.config.chart.type,"-series apexcharts-plot-series")}),h=function(n){a.isBoxPlot="boxPlot"===s.config.chart.type||"boxPlot"===s.config.series[n].type;var h,c,d,g,u=void 0,f=void 0,p=[],b=[],v=s.globals.comboCharts?i[n]:n,m=r.group({class:"apexcharts-series",seriesName:x.escapeString(s.globals.seriesNames[v]),rel:n+1,"data:realIndex":v});a.ctx.series.addCollapsedClassToSeries(m,v),t[n].length>0&&(a.visibleI=a.visibleI+1);var y,w;a.yRatio.length>1&&(a.yaxisIndex=v);var k=a.barHelpers.initialPositions();f=k.y,y=k.barHeight,c=k.yDivision,g=k.zeroW,u=k.x,w=k.barWidth,h=k.xDivision,d=k.zeroH,b.push(u+w/2);for(var A=r.group({class:"apexcharts-datalabels","data:realIndex":v}),S=function(i){var r=a.barHelpers.getStrokeWidth(n,i,v),l=null,x={indexes:{i:n,j:i,realIndex:v},x:u,y:f,strokeWidth:r,elSeries:m};l=a.isHorizontal?a.drawHorizontalBoxPaths(e(e({},x),{},{yDivision:c,barHeight:y,zeroW:g})):a.drawVerticalBoxPaths(e(e({},x),{},{xDivision:h,barWidth:w,zeroH:d})),f=l.y,u=l.x,i>0&&b.push(u+w/2),p.push(f),l.pathTo.forEach((function(e,h){var c=!a.isBoxPlot&&a.candlestickOptions.wick.useFillColor?l.color[h]:s.globals.stroke.colors[n],d=o.fillPath({seriesNumber:v,dataPointIndex:i,color:l.color[h],value:t[n][i]});a.renderSeries({realIndex:v,pathFill:d,lineFill:c,j:i,i:n,pathFrom:l.pathFrom,pathTo:e,strokeWidth:r,elSeries:m,x:u,y:f,series:t,barHeight:y,barWidth:w,elDataLabelsWrap:A,visibleSeries:a.visibleI,type:s.config.chart.type})}))},C=0;C<s.globals.dataPoints;C++)S(C);s.globals.seriesXvalues[v]=b,s.globals.seriesYvalues[v]=p,l.add(m)},c=0;c<t.length;c++)h(c);return l}},{key:"drawVerticalBoxPaths",value:function(t){var e=t.indexes,i=t.x;t.y;var a=t.xDivision,s=t.barWidth,r=t.zeroH,o=t.strokeWidth,n=this.w,l=new m(this.ctx),h=e.i,c=e.j,d=!0,g=n.config.plotOptions.candlestick.colors.upward,u=n.config.plotOptions.candlestick.colors.downward,f="";this.isBoxPlot&&(f=[this.boxOptions.colors.lower,this.boxOptions.colors.upper]);var p=this.yRatio[this.yaxisIndex],x=e.realIndex,b=this.getOHLCValue(x,c),v=r,y=r;b.o>b.c&&(d=!1);var w=Math.min(b.o,b.c),k=Math.max(b.o,b.c),A=b.m;n.globals.isXNumeric&&(i=(n.globals.seriesX[x][c]-n.globals.minX)/this.xRatio-s/2);var S=i+s*this.visibleI;void 0===this.series[h][c]||null===this.series[h][c]?(w=r,k=r):(w=r-w/p,k=r-k/p,v=r-b.h/p,y=r-b.l/p,A=r-b.m/p);var C=l.move(S,r),L=l.move(S+s/2,w);return n.globals.previousPaths.length>0&&(L=this.getPreviousPath(x,c,!0)),C=this.isBoxPlot?[l.move(S,w)+l.line(S+s/2,w)+l.line(S+s/2,v)+l.line(S+s/4,v)+l.line(S+s-s/4,v)+l.line(S+s/2,v)+l.line(S+s/2,w)+l.line(S+s,w)+l.line(S+s,A)+l.line(S,A)+l.line(S,w+o/2),l.move(S,A)+l.line(S+s,A)+l.line(S+s,k)+l.line(S+s/2,k)+l.line(S+s/2,y)+l.line(S+s-s/4,y)+l.line(S+s/4,y)+l.line(S+s/2,y)+l.line(S+s/2,k)+l.line(S,k)+l.line(S,A)+"z"]:[l.move(S,k)+l.line(S+s/2,k)+l.line(S+s/2,v)+l.line(S+s/2,k)+l.line(S+s,k)+l.line(S+s,w)+l.line(S+s/2,w)+l.line(S+s/2,y)+l.line(S+s/2,w)+l.line(S,w)+l.line(S,k-o/2)],L+=l.move(S,w),n.globals.isXNumeric||(i+=a),{pathTo:C,pathFrom:L,x:i,y:k,barXPosition:S,color:this.isBoxPlot?f:d?[g]:[u]}}},{key:"drawHorizontalBoxPaths",value:function(t){var e=t.indexes;t.x;var i=t.y,a=t.yDivision,s=t.barHeight,r=t.zeroW,o=t.strokeWidth,n=this.w,l=new m(this.ctx),h=e.i,c=e.j,d=this.boxOptions.colors.lower;this.isBoxPlot&&(d=[this.boxOptions.colors.lower,this.boxOptions.colors.upper]);var g=this.invertedYRatio,u=e.realIndex,f=this.getOHLCValue(u,c),p=r,x=r,b=Math.min(f.o,f.c),v=Math.max(f.o,f.c),y=f.m;n.globals.isXNumeric&&(i=(n.globals.seriesX[u][c]-n.globals.minX)/this.invertedXRatio-s/2);var w=i+s*this.visibleI;void 0===this.series[h][c]||null===this.series[h][c]?(b=r,v=r):(b=r+b/g,v=r+v/g,p=r+f.h/g,x=r+f.l/g,y=r+f.m/g);var k=l.move(r,w),A=l.move(b,w+s/2);return n.globals.previousPaths.length>0&&(A=this.getPreviousPath(u,c,!0)),k=[l.move(b,w)+l.line(b,w+s/2)+l.line(p,w+s/2)+l.line(p,w+s/2-s/4)+l.line(p,w+s/2+s/4)+l.line(p,w+s/2)+l.line(b,w+s/2)+l.line(b,w+s)+l.line(y,w+s)+l.line(y,w)+l.line(b+o/2,w),l.move(y,w)+l.line(y,w+s)+l.line(v,w+s)+l.line(v,w+s/2)+l.line(x,w+s/2)+l.line(x,w+s-s/4)+l.line(x,w+s/4)+l.line(x,w+s/2)+l.line(v,w+s/2)+l.line(v,w)+l.line(y,w)+"z"],A+=l.move(b,w),n.globals.isXNumeric||(i+=a),{pathTo:k,pathFrom:A,x:v,y:i,barYPosition:w,color:d}}},{key:"getOHLCValue",value:function(t,e){var i=this.w;return{o:this.isBoxPlot?i.globals.seriesCandleH[t][e]:i.globals.seriesCandleO[t][e],h:this.isBoxPlot?i.globals.seriesCandleO[t][e]:i.globals.seriesCandleH[t][e],m:i.globals.seriesCandleM[t][e],l:this.isBoxPlot?i.globals.seriesCandleC[t][e]:i.globals.seriesCandleL[t][e],c:this.isBoxPlot?i.globals.seriesCandleL[t][e]:i.globals.seriesCandleC[t][e]}}}]),s}(yt),At=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"checkColorRange",value:function(){var t=this.w,e=!1,i=t.config.plotOptions[t.config.chart.type];return i.colorScale.ranges.length>0&&i.colorScale.ranges.map((function(t,i){t.from<=0&&(e=!0)})),e}},{key:"getShadeColor",value:function(t,e,i,a){var s=this.w,r=1,o=s.config.plotOptions[t].shadeIntensity,n=this.determineColor(t,e,i);s.globals.hasNegs||a?r=s.config.plotOptions[t].reverseNegativeShade?n.percent<0?n.percent/100*(1.25*o):(1-n.percent/100)*(1.25*o):n.percent<=0?1-(1+n.percent/100)*o:(1-n.percent/100)*o:(r=1-n.percent/100,"treemap"===t&&(r=(1-n.percent/100)*(1.25*o)));var l=n.color,h=new x;return s.config.plotOptions[t].enableShades&&(l="dark"===this.w.config.theme.mode?x.hexToRgba(h.shadeColor(-1*r,n.color),s.config.fill.opacity):x.hexToRgba(h.shadeColor(r,n.color),s.config.fill.opacity)),{color:l,colorProps:n}}},{key:"determineColor",value:function(t,e,i){var a=this.w,s=a.globals.series[e][i],r=a.config.plotOptions[t],o=r.colorScale.inverse?i:e;r.distributed&&"treemap"===a.config.chart.type&&(o=i);var n=a.globals.colors[o],l=null,h=Math.min.apply(Math,u(a.globals.series[e])),c=Math.max.apply(Math,u(a.globals.series[e]));r.distributed||"heatmap"!==t||(h=a.globals.minY,c=a.globals.maxY),void 0!==r.colorScale.min&&(h=r.colorScale.min<a.globals.minY?r.colorScale.min:a.globals.minY,c=r.colorScale.max>a.globals.maxY?r.colorScale.max:a.globals.maxY);var d=Math.abs(c)+Math.abs(h),g=100*s/(0===d?d-1e-6:d);r.colorScale.ranges.length>0&&r.colorScale.ranges.map((function(t,e){if(s>=t.from&&s<=t.to){n=t.color,l=t.foreColor?t.foreColor:null,h=t.from,c=t.to;var i=Math.abs(c)+Math.abs(h);g=100*s/(0===i?i-1e-6:i)}}));return{color:n,foreColor:l,percent:g}}},{key:"calculateDataLabels",value:function(t){var e=t.text,i=t.x,a=t.y,s=t.i,r=t.j,o=t.colorProps,n=t.fontSize,l=this.w.config.dataLabels,h=new m(this.ctx),c=new H(this.ctx),d=null;if(l.enabled){d=h.group({class:"apexcharts-data-labels"});var g=l.offsetX,u=l.offsetY,f=i+g,p=a+parseFloat(l.style.fontSize)/3+u;c.plotDataLabelsText({x:f,y:p,text:e,i:s,j:r,color:o.foreColor,parent:d,fontSize:n,dataLabelsConfig:l})}return d}},{key:"addListeners",value:function(t){var e=new m(this.ctx);t.node.addEventListener("mouseenter",e.pathMouseEnter.bind(this,t)),t.node.addEventListener("mouseleave",e.pathMouseLeave.bind(this,t)),t.node.addEventListener("mousedown",e.pathMouseDown.bind(this,t))}}]),t}(),St=function(){function t(e,i){a(this,t),this.ctx=e,this.w=e.w,this.xRatio=i.xRatio,this.yRatio=i.yRatio,this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.helpers=new At(e),this.rectRadius=this.w.config.plotOptions.heatmap.radius,this.strokeWidth=this.w.config.stroke.show?this.w.config.stroke.width:0}return r(t,[{key:"draw",value:function(t){var e=this.w,i=new m(this.ctx),a=i.group({class:"apexcharts-heatmap"});a.attr("clip-path","url(#gridRectMask".concat(e.globals.cuid,")"));var s=e.globals.gridWidth/e.globals.dataPoints,r=e.globals.gridHeight/e.globals.series.length,o=0,n=!1;this.negRange=this.helpers.checkColorRange();var l=t.slice();e.config.yaxis[0].reversed&&(n=!0,l.reverse());for(var h=n?0:l.length-1;n?h<l.length:h>=0;n?h++:h--){var c=i.group({class:"apexcharts-series apexcharts-heatmap-series",seriesName:x.escapeString(e.globals.seriesNames[h]),rel:h+1,"data:realIndex":h});if(this.ctx.series.addCollapsedClassToSeries(c,h),e.config.chart.dropShadow.enabled){var d=e.config.chart.dropShadow;new v(this.ctx).dropShadow(c,d,h)}for(var g=0,u=e.config.plotOptions.heatmap.shadeIntensity,f=0;f<l[h].length;f++){var p=this.helpers.getShadeColor(e.config.chart.type,h,f,this.negRange),b=p.color,y=p.colorProps;if("image"===e.config.fill.type)b=new F(this.ctx).fillPath({seriesNumber:h,dataPointIndex:f,opacity:e.globals.hasNegs?y.percent<0?1-(1+y.percent/100):u+y.percent/100:y.percent/100,patternID:x.randomId(),width:e.config.fill.image.width?e.config.fill.image.width:s,height:e.config.fill.image.height?e.config.fill.image.height:r});var w=this.rectRadius,k=i.drawRect(g,o,s,r,w);if(k.attr({cx:g,cy:o}),k.node.classList.add("apexcharts-heatmap-rect"),c.add(k),k.attr({fill:b,i:h,index:h,j:f,val:l[h][f],"stroke-width":this.strokeWidth,stroke:e.config.plotOptions.heatmap.useFillColorAsStroke?b:e.globals.stroke.colors[0],color:b}),this.helpers.addListeners(k),e.config.chart.animations.enabled&&!e.globals.dataChanged){var A=1;e.globals.resized||(A=e.config.chart.animations.speed),this.animateHeatMap(k,g,o,s,r,A)}if(e.globals.dataChanged){var S=1;if(this.dynamicAnim.enabled&&e.globals.shouldAnimate){S=this.dynamicAnim.speed;var C=e.globals.previousPaths[h]&&e.globals.previousPaths[h][f]&&e.globals.previousPaths[h][f].color;C||(C="rgba(255, 255, 255, 0)"),this.animateHeatColor(k,x.isColorHex(C)?C:x.rgb2hex(C),x.isColorHex(b)?b:x.rgb2hex(b),S)}}var L=(0,e.config.dataLabels.formatter)(e.globals.series[h][f],{value:e.globals.series[h][f],seriesIndex:h,dataPointIndex:f,w:e}),P=this.helpers.calculateDataLabels({text:L,x:g+s/2,y:o+r/2,i:h,j:f,colorProps:y,series:l});null!==P&&c.add(P),g+=s}o+=r,a.add(c)}var T=e.globals.yAxisScale[0].result.slice();e.config.yaxis[0].reversed?T.unshift(""):T.push(""),e.globals.yAxisScale[0].result=T;var M=e.globals.gridHeight/e.globals.series.length;return e.config.yaxis[0].labels.offsetY=-M/2,a}},{key:"animateHeatMap",value:function(t,e,i,a,s,r){var o=new b(this.ctx);o.animateRect(t,{x:e+a/2,y:i+s/2,width:0,height:0},{x:e,y:i,width:a,height:s},r,(function(){o.animationCompleted(t)}))}},{key:"animateHeatColor",value:function(t,e,i,a){t.attr({fill:e}).animate(a).attr({fill:i})}}]),t}(),Ct=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"drawYAxisTexts",value:function(t,e,i,a){var s=this.w,r=s.config.yaxis[0],o=s.globals.yLabelFormatters[0];return new m(this.ctx).drawText({x:t+r.labels.offsetX,y:e+r.labels.offsetY,text:o(a,i),textAnchor:"middle",fontSize:r.labels.style.fontSize,fontFamily:r.labels.style.fontFamily,foreColor:Array.isArray(r.labels.style.colors)?r.labels.style.colors[i]:r.labels.style.colors})}}]),t}(),Lt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animBeginArr=[0],this.animDur=0,this.donutDataLabels=this.w.config.plotOptions.pie.donut.labels,this.lineColorArr=void 0!==i.globals.stroke.colors?i.globals.stroke.colors:i.globals.colors,this.defaultSize=Math.min(i.globals.gridWidth,i.globals.gridHeight),this.centerY=this.defaultSize/2,this.centerX=i.globals.gridWidth/2,"radialBar"===i.config.chart.type?this.fullAngle=360:this.fullAngle=Math.abs(i.config.plotOptions.pie.endAngle-i.config.plotOptions.pie.startAngle),this.initialAngle=i.config.plotOptions.pie.startAngle%this.fullAngle,i.globals.radialSize=this.defaultSize/2.05-i.config.stroke.width-(i.config.chart.sparkline.enabled?0:i.config.chart.dropShadow.blur),this.donutSize=i.globals.radialSize*parseInt(i.config.plotOptions.pie.donut.size,10)/100,this.maxY=0,this.sliceLabels=[],this.sliceSizes=[],this.prevSectorAngleArr=[]}return r(t,[{key:"draw",value:function(t){var e=this,i=this.w,a=new m(this.ctx);if(this.ret=a.group({class:"apexcharts-pie"}),i.globals.noData)return this.ret;for(var s=0,r=0;r<t.length;r++)s+=x.negToZero(t[r]);var o=[],n=a.group();0===s&&(s=1e-5),t.forEach((function(t){e.maxY=Math.max(e.maxY,t)})),i.config.yaxis[0].max&&(this.maxY=i.config.yaxis[0].max),"back"===i.config.grid.position&&"polarArea"===this.chartType&&this.drawPolarElements(this.ret);for(var l=0;l<t.length;l++){var h=this.fullAngle*x.negToZero(t[l])/s;o.push(h),"polarArea"===this.chartType?(o[l]=this.fullAngle/t.length,this.sliceSizes.push(i.globals.radialSize*t[l]/this.maxY)):this.sliceSizes.push(i.globals.radialSize)}if(i.globals.dataChanged){for(var c,d=0,g=0;g<i.globals.previousPaths.length;g++)d+=x.negToZero(i.globals.previousPaths[g]);for(var u=0;u<i.globals.previousPaths.length;u++)c=this.fullAngle*x.negToZero(i.globals.previousPaths[u])/d,this.prevSectorAngleArr.push(c)}this.donutSize<0&&(this.donutSize=0);var f=i.config.plotOptions.pie.customScale,p=i.globals.gridWidth/2,b=i.globals.gridHeight/2,v=p-i.globals.gridWidth/2*f,y=b-i.globals.gridHeight/2*f;if("donut"===this.chartType){var w=a.drawCircle(this.donutSize);w.attr({cx:this.centerX,cy:this.centerY,fill:i.config.plotOptions.pie.donut.background?i.config.plotOptions.pie.donut.background:"transparent"}),n.add(w)}var k=this.drawArcs(o,t);if(this.sliceLabels.forEach((function(t){k.add(t)})),n.attr({transform:"translate(".concat(v,", ").concat(y,") scale(").concat(f,")")}),n.add(k),this.ret.add(n),this.donutDataLabels.show){var A=this.renderInnerDataLabels(this.donutDataLabels,{hollowSize:this.donutSize,centerX:this.centerX,centerY:this.centerY,opacity:this.donutDataLabels.show,translateX:v,translateY:y});this.ret.add(A)}return"front"===i.config.grid.position&&"polarArea"===this.chartType&&this.drawPolarElements(this.ret),this.ret}},{key:"drawArcs",value:function(t,e){var i=this.w,a=new v(this.ctx),s=new m(this.ctx),r=new F(this.ctx),o=s.group({class:"apexcharts-slices"}),n=this.initialAngle,l=this.initialAngle,h=this.initialAngle,c=this.initialAngle;this.strokeWidth=i.config.stroke.show?i.config.stroke.width:0;for(var d=0;d<t.length;d++){var g=s.group({class:"apexcharts-series apexcharts-pie-series",seriesName:x.escapeString(i.globals.seriesNames[d]),rel:d+1,"data:realIndex":d});o.add(g),l=c,h=(n=h)+t[d],c=l+this.prevSectorAngleArr[d];var u=h<n?this.fullAngle+h-n:h-n,f=r.fillPath({seriesNumber:d,size:this.sliceSizes[d],value:e[d]}),p=this.getChangedPath(l,c),b=s.drawPath({d:p,stroke:Array.isArray(this.lineColorArr)?this.lineColorArr[d]:this.lineColorArr,strokeWidth:0,fill:f,fillOpacity:i.config.fill.opacity,classes:"apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(),"-slice-").concat(d)});if(b.attr({index:0,j:d}),a.setSelectionFilter(b,0,d),i.config.chart.dropShadow.enabled){var y=i.config.chart.dropShadow;a.dropShadow(b,y,d)}this.addListeners(b,this.donutDataLabels),m.setAttrs(b.node,{"data:angle":u,"data:startAngle":n,"data:strokeWidth":this.strokeWidth,"data:value":e[d]});var w={x:0,y:0};"pie"===this.chartType||"polarArea"===this.chartType?w=x.polarToCartesian(this.centerX,this.centerY,i.globals.radialSize/1.25+i.config.plotOptions.pie.dataLabels.offset,(n+u/2)%this.fullAngle):"donut"===this.chartType&&(w=x.polarToCartesian(this.centerX,this.centerY,(i.globals.radialSize+this.donutSize)/2+i.config.plotOptions.pie.dataLabels.offset,(n+u/2)%this.fullAngle)),g.add(b);var k=0;if(!this.initialAnim||i.globals.resized||i.globals.dataChanged?this.animBeginArr.push(0):(0===(k=u/this.fullAngle*i.config.chart.animations.speed)&&(k=1),this.animDur=k+this.animDur,this.animBeginArr.push(this.animDur)),this.dynamicAnim&&i.globals.dataChanged?this.animatePaths(b,{size:this.sliceSizes[d],endAngle:h,startAngle:n,prevStartAngle:l,prevEndAngle:c,animateStartingPos:!0,i:d,animBeginArr:this.animBeginArr,shouldSetPrevPaths:!0,dur:i.config.chart.animations.dynamicAnimation.speed}):this.animatePaths(b,{size:this.sliceSizes[d],endAngle:h,startAngle:n,i:d,totalItems:t.length-1,animBeginArr:this.animBeginArr,dur:k}),i.config.plotOptions.pie.expandOnClick&&"polarArea"!==this.chartType&&b.click(this.pieClicked.bind(this,d)),void 0!==i.globals.selectedDataPoints[0]&&i.globals.selectedDataPoints[0].indexOf(d)>-1&&this.pieClicked(d),i.config.dataLabels.enabled){var A=w.x,S=w.y,C=100*u/this.fullAngle+"%";if(0!==u&&i.config.plotOptions.pie.dataLabels.minAngleToShowLabel<t[d]){var L=i.config.dataLabels.formatter;void 0!==L&&(C=L(i.globals.seriesPercent[d][0],{seriesIndex:d,w:i}));var P=i.globals.dataLabels.style.colors[d],T=s.group({class:"apexcharts-datalabels"}),M=s.drawText({x:A,y:S,text:C,textAnchor:"middle",fontSize:i.config.dataLabels.style.fontSize,fontFamily:i.config.dataLabels.style.fontFamily,fontWeight:i.config.dataLabels.style.fontWeight,foreColor:P});if(T.add(M),i.config.dataLabels.dropShadow.enabled){var I=i.config.dataLabels.dropShadow;a.dropShadow(M,I)}M.node.classList.add("apexcharts-pie-label"),i.config.chart.animations.animate&&!1===i.globals.resized&&(M.node.classList.add("apexcharts-pie-label-delay"),M.node.style.animationDelay=i.config.chart.animations.speed/940+"s"),this.sliceLabels.push(T)}}}return o}},{key:"addListeners",value:function(t,e){var i=new m(this.ctx);t.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this,t)),t.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this,t)),t.node.addEventListener("mouseleave",this.revertDataLabelsInner.bind(this,t.node,e)),t.node.addEventListener("mousedown",i.pathMouseDown.bind(this,t)),this.donutDataLabels.total.showAlways||(t.node.addEventListener("mouseenter",this.printDataLabelsInner.bind(this,t.node,e)),t.node.addEventListener("mousedown",this.printDataLabelsInner.bind(this,t.node,e)))}},{key:"animatePaths",value:function(t,e){var i=this.w,a=e.endAngle<e.startAngle?this.fullAngle+e.endAngle-e.startAngle:e.endAngle-e.startAngle,s=a,r=e.startAngle,o=e.startAngle;void 0!==e.prevStartAngle&&void 0!==e.prevEndAngle&&(r=e.prevEndAngle,s=e.prevEndAngle<e.prevStartAngle?this.fullAngle+e.prevEndAngle-e.prevStartAngle:e.prevEndAngle-e.prevStartAngle),e.i===i.config.series.length-1&&(a+o>this.fullAngle?e.endAngle=e.endAngle-(a+o):a+o<this.fullAngle&&(e.endAngle=e.endAngle+(this.fullAngle-(a+o)))),a===this.fullAngle&&(a=this.fullAngle-.01),this.animateArc(t,r,o,a,s,e)}},{key:"animateArc",value:function(t,e,i,a,s,r){var o,n=this,l=this.w,h=new b(this.ctx),c=r.size;(isNaN(e)||isNaN(s))&&(e=i,s=a,r.dur=0);var d=a,g=i,u=e<i?this.fullAngle+e-i:e-i;l.globals.dataChanged&&r.shouldSetPrevPaths&&r.prevEndAngle&&(o=n.getPiePath({me:n,startAngle:r.prevStartAngle,angle:r.prevEndAngle<r.prevStartAngle?this.fullAngle+r.prevEndAngle-r.prevStartAngle:r.prevEndAngle-r.prevStartAngle,size:c}),t.attr({d:o})),0!==r.dur?t.animate(r.dur,l.globals.easing,r.animBeginArr[r.i]).afterAll((function(){"pie"!==n.chartType&&"donut"!==n.chartType&&"polarArea"!==n.chartType||this.animate(l.config.chart.animations.dynamicAnimation.speed).attr({"stroke-width":n.strokeWidth}),r.i===l.config.series.length-1&&h.animationCompleted(t)})).during((function(l){d=u+(a-u)*l,r.animateStartingPos&&(d=s+(a-s)*l,g=e-s+(i-(e-s))*l),o=n.getPiePath({me:n,startAngle:g,angle:d,size:c}),t.node.setAttribute("data:pathOrig",o),t.attr({d:o})})):(o=n.getPiePath({me:n,startAngle:g,angle:a,size:c}),r.isTrack||(l.globals.animationEnded=!0),t.node.setAttribute("data:pathOrig",o),t.attr({d:o,"stroke-width":n.strokeWidth}))}},{key:"pieClicked",value:function(t){var e,i=this.w,a=this,s=a.sliceSizes[t]+(i.config.plotOptions.pie.expandOnClick?4:0),r=i.globals.dom.Paper.select(".apexcharts-".concat(a.chartType.toLowerCase(),"-slice-").concat(t)).members[0];if("true"!==r.attr("data:pieClicked")){var o=i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");Array.prototype.forEach.call(o,(function(t){t.setAttribute("data:pieClicked","false");var e=t.getAttribute("data:pathOrig");t.setAttribute("d",e)})),r.attr("data:pieClicked","true");var n=parseInt(r.attr("data:startAngle"),10),l=parseInt(r.attr("data:angle"),10);e=a.getPiePath({me:a,startAngle:n,angle:l,size:s}),360!==l&&r.plot(e)}else{r.attr({"data:pieClicked":"false"}),this.revertDataLabelsInner(r.node,this.donutDataLabels);var h=r.attr("data:pathOrig");r.attr({d:h})}}},{key:"getChangedPath",value:function(t,e){var i="";return this.dynamicAnim&&this.w.globals.dataChanged&&(i=this.getPiePath({me:this,startAngle:t,angle:e-t,size:this.size})),i}},{key:"getPiePath",value:function(t){var e=t.me,i=t.startAngle,a=t.angle,s=t.size,r=i,o=Math.PI*(r-90)/180,n=a+i;Math.ceil(n)>=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle&&(n=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle-.01),Math.ceil(n)>this.fullAngle&&(n-=this.fullAngle);var l=Math.PI*(n-90)/180,h=e.centerX+s*Math.cos(o),c=e.centerY+s*Math.sin(o),d=e.centerX+s*Math.cos(l),g=e.centerY+s*Math.sin(l),u=x.polarToCartesian(e.centerX,e.centerY,e.donutSize,n),f=x.polarToCartesian(e.centerX,e.centerY,e.donutSize,r),p=a>180?1:0,b=["M",h,c,"A",s,s,0,p,1,d,g];return"donut"===e.chartType?[].concat(b,["L",u.x,u.y,"A",e.donutSize,e.donutSize,0,p,0,f.x,f.y,"L",h,c,"z"]).join(" "):"pie"===e.chartType||"polarArea"===e.chartType?[].concat(b,["L",e.centerX,e.centerY,"L",h,c]).join(" "):[].concat(b).join(" ")}},{key:"drawPolarElements",value:function(t){var e=this.w,i=new _(this.ctx),a=new m(this.ctx),s=new Ct(this.ctx),r=a.group(),o=a.group(),n=i.niceScale(0,Math.ceil(this.maxY),e.config.yaxis[0].tickAmount,0,!0),l=n.result.reverse(),h=n.result.length;this.maxY=n.niceMax;for(var c=e.globals.radialSize,d=c/(h-1),g=0;g<h-1;g++){var u=a.drawCircle(c);if(u.attr({cx:this.centerX,cy:this.centerY,fill:"none","stroke-width":e.config.plotOptions.polarArea.rings.strokeWidth,stroke:e.config.plotOptions.polarArea.rings.strokeColor}),e.config.yaxis[0].show){var f=s.drawYAxisTexts(this.centerX,this.centerY-c+parseInt(e.config.yaxis[0].labels.style.fontSize,10)/2,g,l[g]);o.add(f)}r.add(u),c-=d}this.drawSpokes(t),t.add(r),t.add(o)}},{key:"renderInnerDataLabels",value:function(t,e){var i=this.w,a=new m(this.ctx),s=a.group({class:"apexcharts-datalabels-group",transform:"translate(".concat(e.translateX?e.translateX:0,", ").concat(e.translateY?e.translateY:0,") scale(").concat(i.config.plotOptions.pie.customScale,")")}),r=t.total.show;s.node.style.opacity=e.opacity;var o,n,l=e.centerX,h=e.centerY;o=void 0===t.name.color?i.globals.colors[0]:t.name.color;var c=t.name.fontSize,d=t.name.fontFamily,g=t.name.fontWeight;n=void 0===t.value.color?i.config.chart.foreColor:t.value.color;var u=t.value.formatter,f="",p="";if(r?(o=t.total.color,c=t.total.fontSize,d=t.total.fontFamily,g=t.total.fontWeight,p=t.total.label,f=t.total.formatter(i)):1===i.globals.series.length&&(f=u(i.globals.series[0],i),p=i.globals.seriesNames[0]),p&&(p=t.name.formatter(p,t.total.show,i)),t.name.show){var x=a.drawText({x:l,y:h+parseFloat(t.name.offsetY),text:p,textAnchor:"middle",foreColor:o,fontSize:c,fontWeight:g,fontFamily:d});x.node.classList.add("apexcharts-datalabel-label"),s.add(x)}if(t.value.show){var b=t.name.show?parseFloat(t.value.offsetY)+16:t.value.offsetY,v=a.drawText({x:l,y:h+b,text:f,textAnchor:"middle",foreColor:n,fontWeight:t.value.fontWeight,fontSize:t.value.fontSize,fontFamily:t.value.fontFamily});v.node.classList.add("apexcharts-datalabel-value"),s.add(v)}return s}},{key:"printInnerLabels",value:function(t,e,i,a){var s,r=this.w;a?s=void 0===t.name.color?r.globals.colors[parseInt(a.parentNode.getAttribute("rel"),10)-1]:t.name.color:r.globals.series.length>1&&t.total.show&&(s=t.total.color);var o=r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),n=r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");i=(0,t.value.formatter)(i,r),a||"function"!=typeof t.total.formatter||(i=t.total.formatter(r));var l=e===t.total.label;e=t.name.formatter(e,l,r),null!==o&&(o.textContent=e),null!==n&&(n.textContent=i),null!==o&&(o.style.fill=s)}},{key:"printDataLabelsInner",value:function(t,e){var i=this.w,a=t.getAttribute("data:value"),s=i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel"),10)-1];i.globals.series.length>1&&this.printInnerLabels(e,s,a,t);var r=i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");null!==r&&(r.style.opacity=1)}},{key:"drawSpokes",value:function(t){var e=this,i=this.w,a=new m(this.ctx),s=i.config.plotOptions.polarArea.spokes;if(0!==s.strokeWidth){for(var r=[],o=360/i.globals.series.length,n=0;n<i.globals.series.length;n++)r.push(x.polarToCartesian(this.centerX,this.centerY,i.globals.radialSize,i.config.plotOptions.pie.startAngle+o*n));r.forEach((function(i,r){var o=a.drawLine(i.x,i.y,e.centerX,e.centerY,Array.isArray(s.connectorColors)?s.connectorColors[r]:s.connectorColors);t.add(o)}))}}},{key:"revertDataLabelsInner",value:function(t,e,i){var a=this,s=this.w,r=s.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"),o=!1,n=s.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"),l=function(t){var i=t.makeSliceOut,s=t.printLabel;Array.prototype.forEach.call(n,(function(t){"true"===t.getAttribute("data:pieClicked")&&(i&&(o=!0),s&&a.printDataLabelsInner(t,e))}))};if(l({makeSliceOut:!0,printLabel:!1}),e.total.show&&s.globals.series.length>1)o&&!e.total.showAlways?l({makeSliceOut:!1,printLabel:!0}):this.printInnerLabels(e,e.total.label,e.total.formatter(s));else if(l({makeSliceOut:!1,printLabel:!0}),!o)if(s.globals.selectedDataPoints.length&&s.globals.series.length>1)if(s.globals.selectedDataPoints[0].length>0){var h=s.globals.selectedDataPoints[0],c=s.globals.dom.baseEl.querySelector(".apexcharts-".concat(this.chartType.toLowerCase(),"-slice-").concat(h));this.printDataLabelsInner(c,e)}else r&&s.globals.selectedDataPoints.length&&0===s.globals.selectedDataPoints[0].length&&(r.style.opacity=0);else r&&s.globals.series.length>1&&(r.style.opacity=0)}}]),t}(),Pt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animDur=0;var i=this.w;this.graphics=new m(this.ctx),this.lineColorArr=void 0!==i.globals.stroke.colors?i.globals.stroke.colors:i.globals.colors,this.defaultSize=i.globals.svgHeight<i.globals.svgWidth?i.globals.gridHeight+1.5*i.globals.goldenPadding:i.globals.gridWidth,this.isLog=i.config.yaxis[0].logarithmic,this.coreUtils=new y(this.ctx),this.maxValue=this.isLog?this.coreUtils.getLogVal(i.globals.maxY,0):i.globals.maxY,this.minValue=this.isLog?this.coreUtils.getLogVal(this.w.globals.minY,0):i.globals.minY,this.polygons=i.config.plotOptions.radar.polygons,this.strokeWidth=i.config.stroke.show?i.config.stroke.width:0,this.size=this.defaultSize/2.1-this.strokeWidth-i.config.chart.dropShadow.blur,i.config.xaxis.labels.show&&(this.size=this.size-i.globals.xAxisLabelsWidth/1.75),void 0!==i.config.plotOptions.radar.size&&(this.size=i.config.plotOptions.radar.size),this.dataRadiusOfPercent=[],this.dataRadius=[],this.angleArr=[],this.yaxisLabelsTextsPos=[]}return r(t,[{key:"draw",value:function(t){var i=this,a=this.w,s=new F(this.ctx),r=[],o=new H(this.ctx);t.length&&(this.dataPointsLen=t[a.globals.maxValsInArrayIndex].length),this.disAngle=2*Math.PI/this.dataPointsLen;var n=a.globals.gridWidth/2,l=a.globals.gridHeight/2,h=n+a.config.plotOptions.radar.offsetX,c=l+a.config.plotOptions.radar.offsetY,d=this.graphics.group({class:"apexcharts-radar-series apexcharts-plot-series",transform:"translate(".concat(h||0,", ").concat(c||0,")")}),g=[],u=null,f=null;if(this.yaxisLabels=this.graphics.group({class:"apexcharts-yaxis"}),t.forEach((function(t,n){var l=t.length===a.globals.dataPoints,h=i.graphics.group().attr({class:"apexcharts-series","data:longestSeries":l,seriesName:x.escapeString(a.globals.seriesNames[n]),rel:n+1,"data:realIndex":n});i.dataRadiusOfPercent[n]=[],i.dataRadius[n]=[],i.angleArr[n]=[],t.forEach((function(t,e){var a=Math.abs(i.maxValue-i.minValue);t+=Math.abs(i.minValue),i.isLog&&(t=i.coreUtils.getLogVal(t,0)),i.dataRadiusOfPercent[n][e]=t/a,i.dataRadius[n][e]=i.dataRadiusOfPercent[n][e]*i.size,i.angleArr[n][e]=e*i.disAngle})),g=i.getDataPointsPos(i.dataRadius[n],i.angleArr[n]);var c=i.createPaths(g,{x:0,y:0});u=i.graphics.group({class:"apexcharts-series-markers-wrap apexcharts-element-hidden"}),f=i.graphics.group({class:"apexcharts-datalabels","data:realIndex":n}),a.globals.delayedElements.push({el:u.node,index:n});var d={i:n,realIndex:n,animationDelay:n,initialSpeed:a.config.chart.animations.speed,dataChangeSpeed:a.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-radar",shouldClipToGrid:!1,bindEventsOnPaths:!1,stroke:a.globals.stroke.colors[n],strokeLineCap:a.config.stroke.lineCap},p=null;a.globals.previousPaths.length>0&&(p=i.getPreviousPath(n));for(var b=0;b<c.linePathsTo.length;b++){var m=i.graphics.renderPaths(e(e({},d),{},{pathFrom:null===p?c.linePathsFrom[b]:p,pathTo:c.linePathsTo[b],strokeWidth:Array.isArray(i.strokeWidth)?i.strokeWidth[n]:i.strokeWidth,fill:"none",drawShadow:!1}));h.add(m);var y=s.fillPath({seriesNumber:n}),w=i.graphics.renderPaths(e(e({},d),{},{pathFrom:null===p?c.areaPathsFrom[b]:p,pathTo:c.areaPathsTo[b],strokeWidth:0,fill:y,drawShadow:!1}));if(a.config.chart.dropShadow.enabled){var k=new v(i.ctx),A=a.config.chart.dropShadow;k.dropShadow(w,Object.assign({},A,{noUserSpaceOnUse:!0}),n)}h.add(w)}t.forEach((function(t,s){var r=new R(i.ctx).getMarkerConfig({cssClass:"apexcharts-marker",seriesIndex:n,dataPointIndex:s}),l=i.graphics.drawMarker(g[s].x,g[s].y,r);l.attr("rel",s),l.attr("j",s),l.attr("index",n),l.node.setAttribute("default-marker-size",r.pSize);var c=i.graphics.group({class:"apexcharts-series-markers"});c&&c.add(l),u.add(c),h.add(u);var d=a.config.dataLabels;if(d.enabled){var p=d.formatter(a.globals.series[n][s],{seriesIndex:n,dataPointIndex:s,w:a});o.plotDataLabelsText({x:g[s].x,y:g[s].y,text:p,textAnchor:"middle",i:n,j:n,parent:f,offsetCorrection:!1,dataLabelsConfig:e({},d)})}h.add(f)})),r.push(h)})),this.drawPolygons({parent:d}),a.config.xaxis.labels.show){var p=this.drawXAxisTexts();d.add(p)}return r.forEach((function(t){d.add(t)})),d.add(this.yaxisLabels),d}},{key:"drawPolygons",value:function(t){for(var e=this,i=this.w,a=t.parent,s=new Ct(this.ctx),r=i.globals.yAxisScale[0].result.reverse(),o=r.length,n=[],l=this.size/(o-1),h=0;h<o;h++)n[h]=l*h;n.reverse();var c=[],d=[];n.forEach((function(t,i){var a=x.getPolygonPos(t,e.dataPointsLen),s="";a.forEach((function(t,a){if(0===i){var r=e.graphics.drawLine(t.x,t.y,0,0,Array.isArray(e.polygons.connectorColors)?e.polygons.connectorColors[a]:e.polygons.connectorColors);d.push(r)}0===a&&e.yaxisLabelsTextsPos.push({x:t.x,y:t.y}),s+=t.x+","+t.y+" "})),c.push(s)})),c.forEach((function(t,s){var r=e.polygons.strokeColors,o=e.polygons.strokeWidth,n=e.graphics.drawPolygon(t,Array.isArray(r)?r[s]:r,Array.isArray(o)?o[s]:o,i.globals.radarPolygons.fill.colors[s]);a.add(n)})),d.forEach((function(t){a.add(t)})),i.config.yaxis[0].show&&this.yaxisLabelsTextsPos.forEach((function(t,i){var a=s.drawYAxisTexts(t.x,t.y,i,r[i]);e.yaxisLabels.add(a)}))}},{key:"drawXAxisTexts",value:function(){var t=this,i=this.w,a=i.config.xaxis.labels,s=this.graphics.group({class:"apexcharts-xaxis"}),r=x.getPolygonPos(this.size,this.dataPointsLen);return i.globals.labels.forEach((function(o,n){var l=i.config.xaxis.labels.formatter,h=new H(t.ctx);if(r[n]){var c=t.getTextPos(r[n],t.size),d=l(o,{seriesIndex:-1,dataPointIndex:n,w:i});h.plotDataLabelsText({x:c.newX,y:c.newY,text:d,textAnchor:c.textAnchor,i:n,j:n,parent:s,color:Array.isArray(a.style.colors)&&a.style.colors[n]?a.style.colors[n]:"#a8a8a8",dataLabelsConfig:e({textAnchor:c.textAnchor,dropShadow:{enabled:!1}},a),offsetCorrection:!1})}})),s}},{key:"createPaths",value:function(t,e){var i=this,a=[],s=[],r=[],o=[];if(t.length){s=[this.graphics.move(e.x,e.y)],o=[this.graphics.move(e.x,e.y)];var n=this.graphics.move(t[0].x,t[0].y),l=this.graphics.move(t[0].x,t[0].y);t.forEach((function(e,a){n+=i.graphics.line(e.x,e.y),l+=i.graphics.line(e.x,e.y),a===t.length-1&&(n+="Z",l+="Z")})),a.push(n),r.push(l)}return{linePathsFrom:s,linePathsTo:a,areaPathsFrom:o,areaPathsTo:r}}},{key:"getTextPos",value:function(t,e){var i="middle",a=t.x,s=t.y;return Math.abs(t.x)>=10?t.x>0?(i="start",a+=10):t.x<0&&(i="end",a-=10):i="middle",Math.abs(t.y)>=e-10&&(t.y<0?s-=10:t.y>0&&(s+=10)),{textAnchor:i,newX:a,newY:s}}},{key:"getPreviousPath",value:function(t){for(var e=this.w,i=null,a=0;a<e.globals.previousPaths.length;a++){var s=e.globals.previousPaths[a];s.paths.length>0&&parseInt(s.realIndex,10)===parseInt(t,10)&&void 0!==e.globals.previousPaths[a].paths[0]&&(i=e.globals.previousPaths[a].paths[0].d)}return i}},{key:"getDataPointsPos",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.dataPointsLen;t=t||[],e=e||[];for(var a=[],s=0;s<i;s++){var r={};r.x=t[s]*Math.sin(e[s]),r.y=-t[s]*Math.cos(e[s]),a.push(r)}return a}}]),t}(),Tt=function(t){n(i,t);var e=d(i);function i(t){var s;a(this,i),(s=e.call(this,t)).ctx=t,s.w=t.w,s.animBeginArr=[0],s.animDur=0;var r=s.w;return s.startAngle=r.config.plotOptions.radialBar.startAngle,s.endAngle=r.config.plotOptions.radialBar.endAngle,s.totalAngle=Math.abs(r.config.plotOptions.radialBar.endAngle-r.config.plotOptions.radialBar.startAngle),s.trackStartAngle=r.config.plotOptions.radialBar.track.startAngle,s.trackEndAngle=r.config.plotOptions.radialBar.track.endAngle,s.donutDataLabels=s.w.config.plotOptions.radialBar.dataLabels,s.radialDataLabels=s.donutDataLabels,s.trackStartAngle||(s.trackStartAngle=s.startAngle),s.trackEndAngle||(s.trackEndAngle=s.endAngle),360===s.endAngle&&(s.endAngle=359.99),s.margin=parseInt(r.config.plotOptions.radialBar.track.margin,10),s}return r(i,[{key:"draw",value:function(t){var e=this.w,i=new m(this.ctx),a=i.group({class:"apexcharts-radialbar"});if(e.globals.noData)return a;var s=i.group(),r=this.defaultSize/2,o=e.globals.gridWidth/2,n=this.defaultSize/2.05;e.config.chart.sparkline.enabled||(n=n-e.config.stroke.width-e.config.chart.dropShadow.blur);var l=e.globals.fill.colors;if(e.config.plotOptions.radialBar.track.show){var h=this.drawTracks({size:n,centerX:o,centerY:r,colorArr:l,series:t});s.add(h)}var c=this.drawArcs({size:n,centerX:o,centerY:r,colorArr:l,series:t}),d=360;e.config.plotOptions.radialBar.startAngle<0&&(d=this.totalAngle);var g=(360-d)/360;if(e.globals.radialSize=n-n*g,this.radialDataLabels.value.show){var u=Math.max(this.radialDataLabels.value.offsetY,this.radialDataLabels.name.offsetY);e.globals.radialSize+=u*g}return s.add(c.g),"front"===e.config.plotOptions.radialBar.hollow.position&&(c.g.add(c.elHollow),c.dataLabels&&c.g.add(c.dataLabels)),a.add(s),a}},{key:"drawTracks",value:function(t){var e=this.w,i=new m(this.ctx),a=i.group({class:"apexcharts-tracks"}),s=new v(this.ctx),r=new F(this.ctx),o=this.getStrokeWidth(t);t.size=t.size-o/2;for(var n=0;n<t.series.length;n++){var l=i.group({class:"apexcharts-radialbar-track apexcharts-track"});a.add(l),l.attr({rel:n+1}),t.size=t.size-o-this.margin;var h=e.config.plotOptions.radialBar.track,c=r.fillPath({seriesNumber:0,size:t.size,fillColors:Array.isArray(h.background)?h.background[n]:h.background,solid:!0}),d=this.trackStartAngle,g=this.trackEndAngle;Math.abs(g)+Math.abs(d)>=360&&(g=360-Math.abs(this.startAngle)-.1);var u=i.drawPath({d:"",stroke:c,strokeWidth:o*parseInt(h.strokeWidth,10)/100,fill:"none",strokeOpacity:h.opacity,classes:"apexcharts-radialbar-area"});if(h.dropShadow.enabled){var f=h.dropShadow;s.dropShadow(u,f)}l.add(u),u.attr("id","apexcharts-radialbarTrack-"+n),this.animatePaths(u,{centerX:t.centerX,centerY:t.centerY,endAngle:g,startAngle:d,size:t.size,i:n,totalItems:2,animBeginArr:0,dur:0,isTrack:!0,easing:e.globals.easing})}return a}},{key:"drawArcs",value:function(t){var e=this.w,i=new m(this.ctx),a=new F(this.ctx),s=new v(this.ctx),r=i.group(),o=this.getStrokeWidth(t);t.size=t.size-o/2;var n=e.config.plotOptions.radialBar.hollow.background,l=t.size-o*t.series.length-this.margin*t.series.length-o*parseInt(e.config.plotOptions.radialBar.track.strokeWidth,10)/100/2,h=l-e.config.plotOptions.radialBar.hollow.margin;void 0!==e.config.plotOptions.radialBar.hollow.image&&(n=this.drawHollowImage(t,r,l,n));var c=this.drawHollow({size:h,centerX:t.centerX,centerY:t.centerY,fill:n||"transparent"});if(e.config.plotOptions.radialBar.hollow.dropShadow.enabled){var d=e.config.plotOptions.radialBar.hollow.dropShadow;s.dropShadow(c,d)}var g=1;!this.radialDataLabels.total.show&&e.globals.series.length>1&&(g=0);var u=null;this.radialDataLabels.show&&(u=this.renderInnerDataLabels(this.radialDataLabels,{hollowSize:l,centerX:t.centerX,centerY:t.centerY,opacity:g})),"back"===e.config.plotOptions.radialBar.hollow.position&&(r.add(c),u&&r.add(u));var f=!1;e.config.plotOptions.radialBar.inverseOrder&&(f=!0);for(var p=f?t.series.length-1:0;f?p>=0:p<t.series.length;f?p--:p++){var b=i.group({class:"apexcharts-series apexcharts-radial-series",seriesName:x.escapeString(e.globals.seriesNames[p])});r.add(b),b.attr({rel:p+1,"data:realIndex":p}),this.ctx.series.addCollapsedClassToSeries(b,p),t.size=t.size-o-this.margin;var y=a.fillPath({seriesNumber:p,size:t.size,value:t.series[p]}),w=this.startAngle,k=void 0,A=x.negToZero(t.series[p]>100?100:t.series[p])/100,S=Math.round(this.totalAngle*A)+this.startAngle,C=void 0;e.globals.dataChanged&&(k=this.startAngle,C=Math.round(this.totalAngle*x.negToZero(e.globals.previousPaths[p])/100)+k),Math.abs(S)+Math.abs(w)>=360&&(S-=.01),Math.abs(C)+Math.abs(k)>=360&&(C-=.01);var L=S-w,P=Array.isArray(e.config.stroke.dashArray)?e.config.stroke.dashArray[p]:e.config.stroke.dashArray,T=i.drawPath({d:"",stroke:y,strokeWidth:o,fill:"none",fillOpacity:e.config.fill.opacity,classes:"apexcharts-radialbar-area apexcharts-radialbar-slice-"+p,strokeDashArray:P});if(m.setAttrs(T.node,{"data:angle":L,"data:value":t.series[p]}),e.config.chart.dropShadow.enabled){var M=e.config.chart.dropShadow;s.dropShadow(T,M,p)}s.setSelectionFilter(T,0,p),this.addListeners(T,this.radialDataLabels),b.add(T),T.attr({index:0,j:p});var I=0;!this.initialAnim||e.globals.resized||e.globals.dataChanged||(I=e.config.chart.animations.speed),e.globals.dataChanged&&(I=e.config.chart.animations.dynamicAnimation.speed),this.animDur=I/(1.2*t.series.length)+this.animDur,this.animBeginArr.push(this.animDur),this.animatePaths(T,{centerX:t.centerX,centerY:t.centerY,endAngle:S,startAngle:w,prevEndAngle:C,prevStartAngle:k,size:t.size,i:p,totalItems:2,animBeginArr:this.animBeginArr,dur:I,shouldSetPrevPaths:!0,easing:e.globals.easing})}return{g:r,elHollow:c,dataLabels:u}}},{key:"drawHollow",value:function(t){var e=new m(this.ctx).drawCircle(2*t.size);return e.attr({class:"apexcharts-radialbar-hollow",cx:t.centerX,cy:t.centerY,r:t.size,fill:t.fill}),e}},{key:"drawHollowImage",value:function(t,e,i,a){var s=this.w,r=new F(this.ctx),o=x.randomId(),n=s.config.plotOptions.radialBar.hollow.image;if(s.config.plotOptions.radialBar.hollow.imageClipped)r.clippedImgArea({width:i,height:i,image:n,patternID:"pattern".concat(s.globals.cuid).concat(o)}),a="url(#pattern".concat(s.globals.cuid).concat(o,")");else{var l=s.config.plotOptions.radialBar.hollow.imageWidth,h=s.config.plotOptions.radialBar.hollow.imageHeight;if(void 0===l&&void 0===h){var c=s.globals.dom.Paper.image(n).loaded((function(e){this.move(t.centerX-e.width/2+s.config.plotOptions.radialBar.hollow.imageOffsetX,t.centerY-e.height/2+s.config.plotOptions.radialBar.hollow.imageOffsetY)}));e.add(c)}else{var d=s.globals.dom.Paper.image(n).loaded((function(e){this.move(t.centerX-l/2+s.config.plotOptions.radialBar.hollow.imageOffsetX,t.centerY-h/2+s.config.plotOptions.radialBar.hollow.imageOffsetY),this.size(l,h)}));e.add(d)}}return a}},{key:"getStrokeWidth",value:function(t){var e=this.w;return t.size*(100-parseInt(e.config.plotOptions.radialBar.hollow.size,10))/100/(t.series.length+1)-this.margin}}]),i}(Lt),Mt=function(t){n(s,t);var i=d(s);function s(){return a(this,s),i.apply(this,arguments)}return r(s,[{key:"draw",value:function(t,i){var a=this.w,s=new m(this.ctx);this.rangeBarOptions=this.w.config.plotOptions.rangeBar,this.series=t,this.seriesRangeStart=a.globals.seriesRangeStart,this.seriesRangeEnd=a.globals.seriesRangeEnd,this.barHelpers.initVariables(t);for(var r=s.group({class:"apexcharts-rangebar-series apexcharts-plot-series"}),o=0;o<t.length;o++){var n,l,h,c=void 0,d=void 0,g=void 0,u=a.globals.comboCharts?i[o]:o,f=s.group({class:"apexcharts-series",seriesName:x.escapeString(a.globals.seriesNames[u]),rel:o+1,"data:realIndex":u});this.ctx.series.addCollapsedClassToSeries(f,u),t[o].length>0&&(this.visibleI=this.visibleI+1);var p=0,b=0;this.yRatio.length>1&&(this.yaxisIndex=u);var v=this.barHelpers.initialPositions();d=v.y,h=v.zeroW,c=v.x,b=v.barWidth,n=v.xDivision,l=v.zeroH;for(var y=s.group({class:"apexcharts-datalabels","data:realIndex":u}),w=s.group({class:"apexcharts-rangebar-goals-markers",style:"pointer-events: none"}),k=0;k<a.globals.dataPoints;k++){var A=this.barHelpers.getStrokeWidth(o,k,u),S=this.seriesRangeStart[o][k],C=this.seriesRangeEnd[o][k],L=null,P=null,T={x:c,y:d,strokeWidth:A,elSeries:f};if(g=v.yDivision,p=v.barHeight,this.isHorizontal){P=d+p*this.visibleI;var M=this.seriesLen;a.config.plotOptions.bar.rangeBarGroupRows&&(M=1);var I=(g-p*M)/2;if(void 0===a.config.series[o].data[k])break;if(a.config.series[o].data[k].x){var z=this.detectOverlappingBars({i:o,j:k,barYPosition:P,srty:I,barHeight:p,yDivision:g,initPositions:v});p=z.barHeight,P=z.barYPosition}b=(L=this.drawRangeBarPaths(e({indexes:{i:o,j:k,realIndex:u},barHeight:p,barYPosition:P,zeroW:h,yDivision:g,y1:S,y2:C},T))).barWidth}else p=(L=this.drawRangeColumnPaths(e({indexes:{i:o,j:k,realIndex:u},zeroH:l,barWidth:b,xDivision:n},T))).barHeight;var X=this.barHelpers.drawGoalLine({barXPosition:L.barXPosition,barYPosition:P,goalX:L.goalX,goalY:L.goalY,barHeight:p,barWidth:b});X&&w.add(X),d=L.y,c=L.x;var E=this.barHelpers.getPathFillColor(t,o,k,u),Y=a.globals.stroke.colors[u];this.renderSeries({realIndex:u,pathFill:E,lineFill:Y,j:k,i:o,x:c,y:d,y1:S,y2:C,pathFrom:L.pathFrom,pathTo:L.pathTo,strokeWidth:A,elSeries:f,series:t,barHeight:p,barYPosition:P,barWidth:b,elDataLabelsWrap:y,elGoalsMarkers:w,visibleSeries:this.visibleI,type:"rangebar"})}r.add(f)}return r}},{key:"detectOverlappingBars",value:function(t){var e=t.i,i=t.j,a=t.barYPosition,s=t.srty,r=t.barHeight,o=t.yDivision,n=t.initPositions,l=this.w,h=[],c=l.config.series[e].data[i].rangeName,d=l.config.series[e].data[i].x,g=l.globals.labels.indexOf(d),u=l.globals.seriesRange[e].findIndex((function(t){return t.x===d&&t.overlaps.length>0}));return a=l.config.plotOptions.bar.rangeBarGroupRows?s+o*g:s+r*this.visibleI+o*g,u>-1&&!l.config.plotOptions.bar.rangeBarOverlap&&(h=l.globals.seriesRange[e][u].overlaps).indexOf(c)>-1&&(a=(r=n.barHeight/h.length)*this.visibleI+o*(100-parseInt(this.barOptions.barHeight,10))/100/2+r*(this.visibleI+h.indexOf(c))+o*g),{barYPosition:a,barHeight:r}}},{key:"drawRangeColumnPaths",value:function(t){var e=t.indexes,i=t.x;t.strokeWidth;var a=t.xDivision,s=t.barWidth,r=t.zeroH,o=this.w,n=e.i,l=e.j,h=this.yRatio[this.yaxisIndex],c=e.realIndex,d=this.getRangeValue(c,l),g=Math.min(d.start,d.end),u=Math.max(d.start,d.end);o.globals.isXNumeric&&(i=(o.globals.seriesX[n][l]-o.globals.minX)/this.xRatio-s/2);var f=i+s*this.visibleI;void 0===this.series[n][l]||null===this.series[n][l]?g=r:(g=r-g/h,u=r-u/h);var p=Math.abs(u-g),x=this.barHelpers.getColumnPaths({barXPosition:f,barWidth:s,y1:g,y2:u,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,realIndex:e.realIndex,i:c,j:l,w:o});return o.globals.isXNumeric||(i+=a),{pathTo:x.pathTo,pathFrom:x.pathFrom,barHeight:p,x:i,y:u,goalY:this.barHelpers.getGoalValues("y",null,r,n,l),barXPosition:f}}},{key:"drawRangeBarPaths",value:function(t){var e=t.indexes,i=t.y,a=t.y1,s=t.y2,r=t.yDivision,o=t.barHeight,n=t.barYPosition,l=t.zeroW,h=this.w,c=l+a/this.invertedYRatio,d=l+s/this.invertedYRatio,g=Math.abs(d-c),u=this.barHelpers.getBarpaths({barYPosition:n,barHeight:o,x1:c,x2:d,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,i:e.realIndex,realIndex:e.realIndex,j:e.j,w:h});return h.globals.isXNumeric||(i+=r),{pathTo:u.pathTo,pathFrom:u.pathFrom,barWidth:g,x:d,goalX:this.barHelpers.getGoalValues("x",l,null,e.realIndex,e.j),y:i}}},{key:"getRangeValue",value:function(t,e){var i=this.w;return{start:i.globals.seriesRangeStart[t][e],end:i.globals.seriesRangeEnd[t][e]}}}]),s}(yt),It=function(){function t(e){a(this,t),this.w=e.w,this.lineCtx=e}return r(t,[{key:"sameValueSeriesFix",value:function(t,e){var i=this.w;if(("gradient"===i.config.fill.type||"gradient"===i.config.fill.type[t])&&new y(this.lineCtx.ctx,i).seriesHaveSameValues(t)){var a=e[t].slice();a[a.length-1]=a[a.length-1]+1e-6,e[t]=a}return e}},{key:"calculatePoints",value:function(t){var e=t.series,i=t.realIndex,a=t.x,s=t.y,r=t.i,o=t.j,n=t.prevY,l=this.w,h=[],c=[];if(0===o){var d=this.lineCtx.categoryAxisCorrection+l.config.markers.offsetX;l.globals.isXNumeric&&(d=(l.globals.seriesX[i][0]-l.globals.minX)/this.lineCtx.xRatio+l.config.markers.offsetX),h.push(d),c.push(x.isNumber(e[r][0])?n+l.config.markers.offsetY:null),h.push(a+l.config.markers.offsetX),c.push(x.isNumber(e[r][o+1])?s+l.config.markers.offsetY:null)}else h.push(a+l.config.markers.offsetX),c.push(x.isNumber(e[r][o+1])?s+l.config.markers.offsetY:null);return{x:h,y:c}}},{key:"checkPreviousPaths",value:function(t){for(var e=t.pathFromLine,i=t.pathFromArea,a=t.realIndex,s=this.w,r=0;r<s.globals.previousPaths.length;r++){var o=s.globals.previousPaths[r];("line"===o.type||"area"===o.type)&&o.paths.length>0&&parseInt(o.realIndex,10)===parseInt(a,10)&&("line"===o.type?(this.lineCtx.appendPathFrom=!1,e=s.globals.previousPaths[r].paths[0].d):"area"===o.type&&(this.lineCtx.appendPathFrom=!1,i=s.globals.previousPaths[r].paths[0].d,s.config.stroke.show&&s.globals.previousPaths[r].paths[1]&&(e=s.globals.previousPaths[r].paths[1].d)))}return{pathFromLine:e,pathFromArea:i}}},{key:"determineFirstPrevY",value:function(t){var e,i=t.i,a=t.series,s=t.prevY,r=t.lineYPosition,o=this.w;if(void 0!==(null===(e=a[i])||void 0===e?void 0:e[0]))s=(r=o.config.chart.stacked&&i>0?this.lineCtx.prevSeriesY[i-1][0]:this.lineCtx.zeroY)-a[i][0]/this.lineCtx.yRatio[this.lineCtx.yaxisIndex]+2*(this.lineCtx.isReversed?a[i][0]/this.lineCtx.yRatio[this.lineCtx.yaxisIndex]:0);else if(o.config.chart.stacked&&i>0&&void 0===a[i][0])for(var n=i-1;n>=0;n--)if(null!==a[n][0]&&void 0!==a[n][0]){s=r=this.lineCtx.prevSeriesY[n][0];break}return{prevY:s,lineYPosition:r}}}]),t}(),zt=function(){function t(e,i,s){a(this,t),this.ctx=e,this.w=e.w,this.xyRatios=i,this.pointsChart=!("bubble"!==this.w.config.chart.type&&"scatter"!==this.w.config.chart.type)||s,this.scatter=new D(this.ctx),this.noNegatives=this.w.globals.minX===Number.MAX_VALUE,this.lineHelpers=new It(this),this.markers=new R(this.ctx),this.prevSeriesY=[],this.categoryAxisCorrection=0,this.yaxisIndex=0}return r(t,[{key:"draw",value:function(t,i,a,s){var r=this.w,o=new m(this.ctx),n=r.globals.comboCharts?i:r.config.chart.type,l=o.group({class:"apexcharts-".concat(n,"-series apexcharts-plot-series")}),h=new y(this.ctx,r);this.yRatio=this.xyRatios.yRatio,this.zRatio=this.xyRatios.zRatio,this.xRatio=this.xyRatios.xRatio,this.baseLineY=this.xyRatios.baseLineY,t=h.getLogSeries(t),this.yRatio=h.getLogYRatios(this.yRatio);for(var c=[],d=0;d<t.length;d++){t=this.lineHelpers.sameValueSeriesFix(d,t);var g=r.globals.comboCharts?a[d]:d;this._initSerieVariables(t,d,g);var u=[],f=[],p=r.globals.padHorizontal+this.categoryAxisCorrection;this.ctx.series.addCollapsedClassToSeries(this.elSeries,g),r.globals.isXNumeric&&r.globals.seriesX.length>0&&(p=(r.globals.seriesX[g][0]-r.globals.minX)/this.xRatio),f.push(p);var x,b=p,v=void 0,w=b,k=this.zeroY,A=this.zeroY;k=this.lineHelpers.determineFirstPrevY({i:d,series:t,prevY:k,lineYPosition:0}).prevY,u.push(k),x=k;"rangeArea"===n&&(v=A=this.lineHelpers.determineFirstPrevY({i:d,series:s,prevY:A,lineYPosition:0}).prevY);var S={type:n,series:t,realIndex:g,i:d,x:p,y:1,pX:b,pY:x,pathsFrom:this._calculatePathsFrom({type:n,series:t,i:d,realIndex:g,prevX:w,prevY:k,prevY2:A}),linePaths:[],areaPaths:[],seriesIndex:a,lineYPosition:0,xArrj:f,yArrj:u,seriesRangeEnd:s},C=this._iterateOverDataPoints(e(e({},S),{},{iterations:"rangeArea"===n?t[d].length-1:void 0,isRangeStart:!0}));if("rangeArea"===n){var L=this._calculatePathsFrom({series:s,i:d,realIndex:g,prevX:w,prevY:A}),P=this._iterateOverDataPoints(e(e({},S),{},{series:s,pY:v,pathsFrom:L,iterations:s[d].length-1,isRangeStart:!1}));C.linePaths[0]=P.linePath+C.linePath,C.pathFromLine=P.pathFromLine+C.pathFromLine}this._handlePaths({type:n,realIndex:g,i:d,paths:C}),this.elSeries.add(this.elPointsMain),this.elSeries.add(this.elDataLabelsWrap),c.push(this.elSeries)}if(r.config.chart.stacked)for(var T=c.length;T>0;T--)l.add(c[T-1]);else for(var M=0;M<c.length;M++)l.add(c[M]);return l}},{key:"_initSerieVariables",value:function(t,e,i){var a=this.w,s=new m(this.ctx);this.xDivision=a.globals.gridWidth/(a.globals.dataPoints-("on"===a.config.xaxis.tickPlacement?1:0)),this.strokeWidth=Array.isArray(a.config.stroke.width)?a.config.stroke.width[i]:a.config.stroke.width,this.yRatio.length>1&&(this.yaxisIndex=i),this.isReversed=a.config.yaxis[this.yaxisIndex]&&a.config.yaxis[this.yaxisIndex].reversed,this.zeroY=a.globals.gridHeight-this.baseLineY[this.yaxisIndex]-(this.isReversed?a.globals.gridHeight:0)+(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0),this.areaBottomY=this.zeroY,(this.zeroY>a.globals.gridHeight||"end"===a.config.plotOptions.area.fillTo)&&(this.areaBottomY=a.globals.gridHeight),this.categoryAxisCorrection=this.xDivision/2,this.elSeries=s.group({class:"apexcharts-series",seriesName:x.escapeString(a.globals.seriesNames[i])}),this.elPointsMain=s.group({class:"apexcharts-series-markers-wrap","data:realIndex":i}),this.elDataLabelsWrap=s.group({class:"apexcharts-datalabels","data:realIndex":i});var r=t[e].length===a.globals.dataPoints;this.elSeries.attr({"data:longestSeries":r,rel:e+1,"data:realIndex":i}),this.appendPathFrom=!0}},{key:"_calculatePathsFrom",value:function(t){var e,i,a,s,r=t.type,o=t.series,n=t.i,l=t.realIndex,h=t.prevX,c=t.prevY,d=t.prevY2,g=this.w,u=new m(this.ctx);if(null===o[n][0]){for(var f=0;f<o[n].length;f++)if(null!==o[n][f]){h=this.xDivision*f,c=this.zeroY-o[n][f]/this.yRatio[this.yaxisIndex],e=u.move(h,c),i=u.move(h,this.areaBottomY);break}}else e=u.move(h,c),"rangeArea"===r&&(e=u.move(h,d)+u.line(h,c)),i=u.move(h,this.areaBottomY)+u.line(h,c);if(a=u.move(-1,this.zeroY)+u.line(-1,this.zeroY),s=u.move(-1,this.zeroY)+u.line(-1,this.zeroY),g.globals.previousPaths.length>0){var p=this.lineHelpers.checkPreviousPaths({pathFromLine:a,pathFromArea:s,realIndex:l});a=p.pathFromLine,s=p.pathFromArea}return{prevX:h,prevY:c,linePath:e,areaPath:i,pathFromLine:a,pathFromArea:s}}},{key:"_handlePaths",value:function(t){var i=t.type,a=t.realIndex,s=t.i,r=t.paths,o=this.w,n=new m(this.ctx),l=new F(this.ctx);this.prevSeriesY.push(r.yArrj),o.globals.seriesXvalues[a]=r.xArrj,o.globals.seriesYvalues[a]=r.yArrj;var h=o.config.forecastDataPoints;if(h.count>0&&"rangeArea"!==i){var c=o.globals.seriesXvalues[a][o.globals.seriesXvalues[a].length-h.count-1],d=n.drawRect(c,0,o.globals.gridWidth,o.globals.gridHeight,0);o.globals.dom.elForecastMask.appendChild(d.node);var g=n.drawRect(0,0,c,o.globals.gridHeight,0);o.globals.dom.elNonForecastMask.appendChild(g.node)}this.pointsChart||o.globals.delayedElements.push({el:this.elPointsMain.node,index:a});var u={i:s,realIndex:a,animationDelay:s,initialSpeed:o.config.chart.animations.speed,dataChangeSpeed:o.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(i)};if("area"===i)for(var f=l.fillPath({seriesNumber:a}),p=0;p<r.areaPaths.length;p++){var x=n.renderPaths(e(e({},u),{},{pathFrom:r.pathFromArea,pathTo:r.areaPaths[p],stroke:"none",strokeWidth:0,strokeLineCap:null,fill:f}));this.elSeries.add(x)}if(o.config.stroke.show&&!this.pointsChart){var b=null;if("line"===i)b=l.fillPath({seriesNumber:a,i:s});else if("solid"===o.config.stroke.fill.type)b=o.globals.stroke.colors[a];else{var v=o.config.fill;o.config.fill=o.config.stroke.fill,b=l.fillPath({seriesNumber:a,i:s}),o.config.fill=v}for(var y=0;y<r.linePaths.length;y++){var w=b;"rangeArea"===i&&(w=l.fillPath({seriesNumber:a}));var k=e(e({},u),{},{pathFrom:r.pathFromLine,pathTo:r.linePaths[y],stroke:b,strokeWidth:this.strokeWidth,strokeLineCap:o.config.stroke.lineCap,fill:"rangeArea"===i?w:"none"}),A=n.renderPaths(k);if(this.elSeries.add(A),A.attr("fill-rule","evenodd"),h.count>0&&"rangeArea"!==i){var S=n.renderPaths(k);S.node.setAttribute("stroke-dasharray",h.dashArray),h.strokeWidth&&S.node.setAttribute("stroke-width",h.strokeWidth),this.elSeries.add(S),S.attr("clip-path","url(#forecastMask".concat(o.globals.cuid,")")),A.attr("clip-path","url(#nonForecastMask".concat(o.globals.cuid,")"))}}}}},{key:"_iterateOverDataPoints",value:function(t){var e=t.type,i=t.series,a=t.iterations,s=t.realIndex,r=t.i,o=t.x,n=t.y,l=t.pX,h=t.pY,c=t.pathsFrom,d=t.linePaths,g=t.areaPaths,u=t.seriesIndex,f=t.lineYPosition,p=t.xArrj,b=t.yArrj,v=t.isRangeStart,y=t.seriesRangeEnd,w=this.w,k=new m(this.ctx),A=this.yRatio,S=c.prevY,C=c.linePath,L=c.areaPath,P=c.pathFromLine,T=c.pathFromArea,M=x.isNumber(w.globals.minYArr[s])?w.globals.minYArr[s]:w.globals.minY;a||(a=w.globals.dataPoints>1?w.globals.dataPoints-1:w.globals.dataPoints);for(var I=n,z=0;z<a;z++){var X=void 0===i[r][z+1]||null===i[r][z+1];if(w.globals.isXNumeric){var E=w.globals.seriesX[s][z+1];void 0===w.globals.seriesX[s][z+1]&&(E=w.globals.seriesX[s][a-1]),o=(E-w.globals.minX)/this.xRatio}else o+=this.xDivision;if(w.config.chart.stacked)if(r>0&&w.globals.collapsedSeries.length<w.config.series.length-1){f=this.prevSeriesY[function(t){for(var e=t,i=0;i<w.globals.series.length;i++)if(w.globals.collapsedSeriesIndices.indexOf(t)>-1){e--;break}return e>=0?e:0}(r-1)][z+1]}else f=this.zeroY;else f=this.zeroY;X?n=f-M/A[this.yaxisIndex]+2*(this.isReversed?M/A[this.yaxisIndex]:0):(n=f-i[r][z+1]/A[this.yaxisIndex]+2*(this.isReversed?i[r][z+1]/A[this.yaxisIndex]:0),"rangeArea"===e&&(I=f-y[r][z+1]/A[this.yaxisIndex]+2*(this.isReversed?y[r][z+1]/A[this.yaxisIndex]:0))),p.push(o),b.push(n);var Y=this.lineHelpers.calculatePoints({series:i,x:o,y:n,realIndex:s,i:r,j:z,prevY:S}),F=this._createPaths({type:e,series:i,i:r,realIndex:s,j:z,x:o,y:n,y2:I,pX:l,pY:h,linePath:C,areaPath:L,linePaths:d,areaPaths:g,seriesIndex:u,isRangeStart:v});g=F.areaPaths,d=F.linePaths,l=F.pX,h=F.pY,L=F.areaPath,C=F.linePath,this.appendPathFrom&&(P+=k.line(o,this.zeroY),T+=k.line(o,this.zeroY)),this.handleNullDataPoints(i,Y,r,z,s),this._handleMarkersAndLabels({type:e,pointsPos:Y,i:r,j:z,realIndex:s,isRangeStart:v})}return{yArrj:b,xArrj:p,pathFromArea:T,areaPaths:g,pathFromLine:P,linePaths:d,linePath:C,areaPath:L}}},{key:"_handleMarkersAndLabels",value:function(t){var e=t.type,i=t.pointsPos,a=t.isRangeStart,s=t.i,r=t.j,o=t.realIndex,n=this.w,l=new H(this.ctx);if(this.pointsChart)this.scatter.draw(this.elSeries,r,{realIndex:o,pointsPos:i,zRatio:this.zRatio,elParent:this.elPointsMain});else{n.globals.series[s].length>1&&this.elPointsMain.node.classList.add("apexcharts-element-hidden");var h=this.markers.plotChartMarkers(i,o,r+1);null!==h&&this.elPointsMain.add(h)}var c=l.drawDataLabel({type:e,isRangeStart:a,pos:i,i:o,j:r+1});null!==c&&this.elDataLabelsWrap.add(c)}},{key:"_createPaths",value:function(t){var e=t.type,i=t.series,a=t.i,s=t.realIndex,r=t.j,o=t.x,n=t.y,l=t.y2,h=t.pX,c=t.pY,d=t.linePath,g=t.areaPath,u=t.linePaths,f=t.areaPaths,p=t.seriesIndex,x=t.isRangeStart,b=this.w,v=new m(this.ctx),y=b.config.stroke.curve,w=this.areaBottomY;if(Array.isArray(b.config.stroke.curve)&&(y=Array.isArray(p)?b.config.stroke.curve[p[a]]:b.config.stroke.curve[a]),"smooth"===y){var k=.35*(o-h);b.globals.hasNullValues?(null!==i[a][r]&&(null!==i[a][r+1]?(d=v.move(h,c)+v.curve(h+k,c,o-k,n,o+1,n),g=v.move(h+1,c)+v.curve(h+k,c,o-k,n,o+1,n)+v.line(o,w)+v.line(h,w)+"z"):(d=v.move(h,c),g=v.move(h,c)+"z")),u.push(d),f.push(g)):(d+=v.curve(h+k,c,o-k,n,o,n),g+=v.curve(h+k,c,o-k,n,o,n)),h=o,c=n,r===i[a].length-2&&(g=g+v.curve(h,c,o,n,o,w)+v.move(o,n)+"z","rangeArea"===e&&x?d=d+v.curve(h,c,o,n,o,l)+v.move(o,l)+"z":b.globals.hasNullValues||(u.push(d),f.push(g)))}else{if(null===i[a][r+1]){d+=v.move(o,n);var A=b.globals.isXNumeric?(b.globals.seriesX[s][r]-b.globals.minX)/this.xRatio:o-this.xDivision;g=g+v.line(A,w)+v.move(o,n)+"z"}null===i[a][r]&&(d+=v.move(o,n),g+=v.move(o,w)),"stepline"===y?(d=d+v.line(o,null,"H")+v.line(null,n,"V"),g=g+v.line(o,null,"H")+v.line(null,n,"V")):"straight"===y&&(d+=v.line(o,n),g+=v.line(o,n)),r===i[a].length-2&&(g=g+v.line(o,w)+v.move(o,n)+"z","rangeArea"===e&&x?d=d+v.line(o,l)+v.move(o,l)+"z":(u.push(d),f.push(g)))}return{linePaths:u,areaPaths:f,pX:h,pY:c,linePath:d,areaPath:g}}},{key:"handleNullDataPoints",value:function(t,e,i,a,s){var r=this.w;if(null===t[i][a]&&r.config.markers.showNullDataPoints||1===t[i].length){var o=this.markers.plotChartMarkers(e,s,a+1,this.strokeWidth-r.config.markers.strokeWidth/2,!0);null!==o&&this.elPointsMain.add(o)}}}]),t}();window.TreemapSquared={},window.TreemapSquared.generate=function(){function t(e,i,a,s){this.xoffset=e,this.yoffset=i,this.height=s,this.width=a,this.shortestEdge=function(){return Math.min(this.height,this.width)},this.getCoordinates=function(t){var e,i=[],a=this.xoffset,s=this.yoffset,o=r(t)/this.height,n=r(t)/this.width;if(this.width>=this.height)for(e=0;e<t.length;e++)i.push([a,s,a+o,s+t[e]/o]),s+=t[e]/o;else for(e=0;e<t.length;e++)i.push([a,s,a+t[e]/n,s+n]),a+=t[e]/n;return i},this.cutArea=function(e){var i;if(this.width>=this.height){var a=e/this.height,s=this.width-a;i=new t(this.xoffset+a,this.yoffset,s,this.height)}else{var r=e/this.width,o=this.height-r;i=new t(this.xoffset,this.yoffset+r,this.width,o)}return i}}function e(e,a,s,o,n){o=void 0===o?0:o,n=void 0===n?0:n;var l=i(function(t,e){var i,a=[],s=e/r(t);for(i=0;i<t.length;i++)a[i]=t[i]*s;return a}(e,a*s),[],new t(o,n,a,s),[]);return function(t){var e,i,a=[];for(e=0;e<t.length;e++)for(i=0;i<t[e].length;i++)a.push(t[e][i]);return a}(l)}function i(t,e,s,o){var n,l,h;if(0!==t.length)return n=s.shortestEdge(),function(t,e,i){var s;if(0===t.length)return!0;(s=t.slice()).push(e);var r=a(t,i),o=a(s,i);return r>=o}(e,l=t[0],n)?(e.push(l),i(t.slice(1),e,s,o)):(h=s.cutArea(r(e),o),o.push(s.getCoordinates(e)),i(t,[],h,o)),o;o.push(s.getCoordinates(e))}function a(t,e){var i=Math.min.apply(Math,t),a=Math.max.apply(Math,t),s=r(t);return Math.max(Math.pow(e,2)*a/Math.pow(s,2),Math.pow(s,2)/(Math.pow(e,2)*i))}function s(t){return t&&t.constructor===Array}function r(t){var e,i=0;for(e=0;e<t.length;e++)i+=t[e];return i}function o(t){var e,i=0;if(s(t[0]))for(e=0;e<t.length;e++)i+=o(t[e]);else i=r(t);return i}return function t(i,a,r,n,l){n=void 0===n?0:n,l=void 0===l?0:l;var h,c,d=[],g=[];if(s(i[0])){for(c=0;c<i.length;c++)d[c]=o(i[c]);for(h=e(d,a,r,n,l),c=0;c<i.length;c++)g.push(t(i[c],h[c][2]-h[c][0],h[c][3]-h[c][1],h[c][0],h[c][1]))}else g=e(i,a,r,n,l);return g}}();var Xt,Et,Yt=function(){function t(e,i){a(this,t),this.ctx=e,this.w=e.w,this.strokeWidth=this.w.config.stroke.width,this.helpers=new At(e),this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.labels=[]}return r(t,[{key:"draw",value:function(t){var e=this,i=this.w,a=new m(this.ctx),s=new F(this.ctx),r=a.group({class:"apexcharts-treemap"});if(i.globals.noData)return r;var o=[];return t.forEach((function(t){var e=t.map((function(t){return Math.abs(t)}));o.push(e)})),this.negRange=this.helpers.checkColorRange(),i.config.series.forEach((function(t,i){t.data.forEach((function(t){Array.isArray(e.labels[i])||(e.labels[i]=[]),e.labels[i].push(t.x)}))})),window.TreemapSquared.generate(o,i.globals.gridWidth,i.globals.gridHeight).forEach((function(o,n){var l=a.group({class:"apexcharts-series apexcharts-treemap-series",seriesName:x.escapeString(i.globals.seriesNames[n]),rel:n+1,"data:realIndex":n});if(i.config.chart.dropShadow.enabled){var h=i.config.chart.dropShadow;new v(e.ctx).dropShadow(r,h,n)}var c=a.group({class:"apexcharts-data-labels"});o.forEach((function(r,o){var h=r[0],c=r[1],d=r[2],g=r[3],u=a.drawRect(h,c,d-h,g-c,0,"#fff",1,e.strokeWidth,i.config.plotOptions.treemap.useFillColorAsStroke?p:i.globals.stroke.colors[n]);u.attr({cx:h,cy:c,index:n,i:n,j:o,width:d-h,height:g-c});var f=e.helpers.getShadeColor(i.config.chart.type,n,o,e.negRange),p=f.color;void 0!==i.config.series[n].data[o]&&i.config.series[n].data[o].fillColor&&(p=i.config.series[n].data[o].fillColor);var x=s.fillPath({color:p,seriesNumber:n,dataPointIndex:o});u.node.classList.add("apexcharts-treemap-rect"),u.attr({fill:x}),e.helpers.addListeners(u);var b={x:h+(d-h)/2,y:c+(g-c)/2,width:0,height:0},v={x:h,y:c,width:d-h,height:g-c};if(i.config.chart.animations.enabled&&!i.globals.dataChanged){var m=1;i.globals.resized||(m=i.config.chart.animations.speed),e.animateTreemap(u,b,v,m)}if(i.globals.dataChanged){var y=1;e.dynamicAnim.enabled&&i.globals.shouldAnimate&&(y=e.dynamicAnim.speed,i.globals.previousPaths[n]&&i.globals.previousPaths[n][o]&&i.globals.previousPaths[n][o].rect&&(b=i.globals.previousPaths[n][o].rect),e.animateTreemap(u,b,v,y))}var w=e.getFontSize(r),k=i.config.dataLabels.formatter(e.labels[n][o],{value:i.globals.series[n][o],seriesIndex:n,dataPointIndex:o,w:i}),A=e.helpers.calculateDataLabels({text:k,x:(h+d)/2,y:(c+g)/2+e.strokeWidth/2+w/3,i:n,j:o,colorProps:f,fontSize:w,series:t});i.config.dataLabels.enabled&&A&&e.rotateToFitLabel(A,w,k,h,c,d,g),l.add(u),null!==A&&l.add(A)})),l.add(c),r.add(l)})),r}},{key:"getFontSize",value:function(t){var e=this.w;var i,a,s,r,o=function t(e){var i,a=0;if(Array.isArray(e[0]))for(i=0;i<e.length;i++)a+=t(e[i]);else for(i=0;i<e.length;i++)a+=e[i].length;return a}(this.labels)/function t(e){var i,a=0;if(Array.isArray(e[0]))for(i=0;i<e.length;i++)a+=t(e[i]);else for(i=0;i<e.length;i++)a+=1;return a}(this.labels);return i=t[2]-t[0],a=t[3]-t[1],s=i*a,r=Math.pow(s,.5),Math.min(r/o,parseInt(e.config.dataLabels.style.fontSize,10))}},{key:"rotateToFitLabel",value:function(t,e,i,a,s,r,o){var n=new m(this.ctx),l=n.getTextRects(i,e);if(l.width+this.w.config.stroke.width+5>r-a&&l.width<=o-s){var h=n.rotateAroundCenter(t.node);t.node.setAttribute("transform","rotate(-90 ".concat(h.x," ").concat(h.y,")"))}}},{key:"animateTreemap",value:function(t,e,i,a){var s=new b(this.ctx);s.animateRect(t,{x:e.x,y:e.y,width:e.width,height:e.height},{x:i.x,y:i.y,width:i.width,height:i.height},a,(function(){s.animationCompleted(t)}))}}]),t}(),Ft=86400,Rt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.timeScaleArray=[],this.utc=this.w.config.xaxis.labels.datetimeUTC}return r(t,[{key:"calculateTimeScaleTicks",value:function(t,i){var a=this,s=this.w;if(s.globals.allSeriesCollapsed)return s.globals.labels=[],s.globals.timescaleLabels=[],[];var r=new T(this.ctx),o=(i-t)/864e5;this.determineInterval(o),s.globals.disableZoomIn=!1,s.globals.disableZoomOut=!1,o<.00011574074074074075?s.globals.disableZoomIn=!0:o>5e4&&(s.globals.disableZoomOut=!0);var n=r.getTimeUnitsfromTimestamp(t,i,this.utc),l=s.globals.gridWidth/o,h=l/24,c=h/60,d=c/60,g=Math.floor(24*o),u=Math.floor(1440*o),f=Math.floor(o*Ft),p=Math.floor(o),x=Math.floor(o/30),b=Math.floor(o/365),v={minMillisecond:n.minMillisecond,minSecond:n.minSecond,minMinute:n.minMinute,minHour:n.minHour,minDate:n.minDate,minMonth:n.minMonth,minYear:n.minYear},m={firstVal:v,currentMillisecond:v.minMillisecond,currentSecond:v.minSecond,currentMinute:v.minMinute,currentHour:v.minHour,currentMonthDate:v.minDate,currentDate:v.minDate,currentMonth:v.minMonth,currentYear:v.minYear,daysWidthOnXAxis:l,hoursWidthOnXAxis:h,minutesWidthOnXAxis:c,secondsWidthOnXAxis:d,numberOfSeconds:f,numberOfMinutes:u,numberOfHours:g,numberOfDays:p,numberOfMonths:x,numberOfYears:b};switch(this.tickInterval){case"years":this.generateYearScale(m);break;case"months":case"half_year":this.generateMonthScale(m);break;case"months_days":case"months_fortnight":case"days":case"week_days":this.generateDayScale(m);break;case"hours":this.generateHourScale(m);break;case"minutes_fives":case"minutes":this.generateMinuteScale(m);break;case"seconds_tens":case"seconds_fives":case"seconds":this.generateSecondScale(m)}var y=this.timeScaleArray.map((function(t){var i={position:t.position,unit:t.unit,year:t.year,day:t.day?t.day:1,hour:t.hour?t.hour:0,month:t.month+1};return"month"===t.unit?e(e({},i),{},{day:1,value:t.value+1}):"day"===t.unit||"hour"===t.unit?e(e({},i),{},{value:t.value}):"minute"===t.unit?e(e({},i),{},{value:t.value,minute:t.value}):"second"===t.unit?e(e({},i),{},{value:t.value,minute:t.minute,second:t.second}):t}));return y.filter((function(t){var e=1,i=Math.ceil(s.globals.gridWidth/120),r=t.value;void 0!==s.config.xaxis.tickAmount&&(i=s.config.xaxis.tickAmount),y.length>i&&(e=Math.floor(y.length/i));var o=!1,n=!1;switch(a.tickInterval){case"years":"year"===t.unit&&(o=!0);break;case"half_year":e=7,"year"===t.unit&&(o=!0);break;case"months":e=1,"year"===t.unit&&(o=!0);break;case"months_fortnight":e=15,"year"!==t.unit&&"month"!==t.unit||(o=!0),30===r&&(n=!0);break;case"months_days":e=10,"month"===t.unit&&(o=!0),30===r&&(n=!0);break;case"week_days":e=8,"month"===t.unit&&(o=!0);break;case"days":e=1,"month"===t.unit&&(o=!0);break;case"hours":"day"===t.unit&&(o=!0);break;case"minutes_fives":case"seconds_fives":r%5!=0&&(n=!0);break;case"seconds_tens":r%10!=0&&(n=!0)}if("hours"===a.tickInterval||"minutes_fives"===a.tickInterval||"seconds_tens"===a.tickInterval||"seconds_fives"===a.tickInterval){if(!n)return!0}else if((r%e==0||o)&&!n)return!0}))}},{key:"recalcDimensionsBasedOnFormat",value:function(t,e){var i=this.w,a=this.formatDates(t),s=this.removeOverlappingTS(a);i.globals.timescaleLabels=s.slice(),new ot(this.ctx).plotCoords()}},{key:"determineInterval",value:function(t){var e=24*t,i=60*e;switch(!0){case t/365>5:this.tickInterval="years";break;case t>800:this.tickInterval="half_year";break;case t>180:this.tickInterval="months";break;case t>90:this.tickInterval="months_fortnight";break;case t>60:this.tickInterval="months_days";break;case t>30:this.tickInterval="week_days";break;case t>2:this.tickInterval="days";break;case e>2.4:this.tickInterval="hours";break;case i>15:this.tickInterval="minutes_fives";break;case i>5:this.tickInterval="minutes";break;case i>1:this.tickInterval="seconds_tens";break;case 60*i>20:this.tickInterval="seconds_fives";break;default:this.tickInterval="seconds"}}},{key:"generateYearScale",value:function(t){var e=t.firstVal,i=t.currentMonth,a=t.currentYear,s=t.daysWidthOnXAxis,r=t.numberOfYears,o=e.minYear,n=0,l=new T(this.ctx),h="year";if(e.minDate>1||e.minMonth>0){var c=l.determineRemainingDaysOfYear(e.minYear,e.minMonth,e.minDate);n=(l.determineDaysOfYear(e.minYear)-c+1)*s,o=e.minYear+1,this.timeScaleArray.push({position:n,value:o,unit:h,year:o,month:x.monthMod(i+1)})}else 1===e.minDate&&0===e.minMonth&&this.timeScaleArray.push({position:n,value:o,unit:h,year:a,month:x.monthMod(i+1)});for(var d=o,g=n,u=0;u<r;u++)d++,g=l.determineDaysOfYear(d-1)*s+g,this.timeScaleArray.push({position:g,value:d,unit:h,year:d,month:1})}},{key:"generateMonthScale",value:function(t){var e=t.firstVal,i=t.currentMonthDate,a=t.currentMonth,s=t.currentYear,r=t.daysWidthOnXAxis,o=t.numberOfMonths,n=a,l=0,h=new T(this.ctx),c="month",d=0;if(e.minDate>1){l=(h.determineDaysOfMonths(a+1,e.minYear)-i+1)*r,n=x.monthMod(a+1);var g=s+d,u=x.monthMod(n),f=n;0===n&&(c="year",f=g,u=1,g+=d+=1),this.timeScaleArray.push({position:l,value:f,unit:c,year:g,month:u})}else this.timeScaleArray.push({position:l,value:n,unit:c,year:s,month:x.monthMod(a)});for(var p=n+1,b=l,v=0,m=1;v<o;v++,m++){0===(p=x.monthMod(p))?(c="year",d+=1):c="month";var y=this._getYear(s,p,d);b=h.determineDaysOfMonths(p,y)*r+b;var w=0===p?y:p;this.timeScaleArray.push({position:b,value:w,unit:c,year:y,month:0===p?1:p}),p++}}},{key:"generateDayScale",value:function(t){var e=t.firstVal,i=t.currentMonth,a=t.currentYear,s=t.hoursWidthOnXAxis,r=t.numberOfDays,o=new T(this.ctx),n="day",l=e.minDate+1,h=l,c=function(t,e,i){return t>o.determineDaysOfMonths(e+1,i)?(h=1,n="month",g=e+=1,e):e},d=(24-e.minHour)*s,g=l,u=c(h,i,a);0===e.minHour&&1===e.minDate?(d=0,g=x.monthMod(e.minMonth),n="month",h=e.minDate,r++):1!==e.minDate&&0===e.minHour&&0===e.minMinute&&(d=0,l=e.minDate,g=l,u=c(h=l,i,a)),this.timeScaleArray.push({position:d,value:g,unit:n,year:this._getYear(a,u,0),month:x.monthMod(u),day:h});for(var f=d,p=0;p<r;p++){n="day",u=c(h+=1,u,this._getYear(a,u,0));var b=this._getYear(a,u,0);f=24*s+f;var v=1===h?x.monthMod(u):h;this.timeScaleArray.push({position:f,value:v,unit:n,year:b,month:x.monthMod(u),day:v})}}},{key:"generateHourScale",value:function(t){var e=t.firstVal,i=t.currentDate,a=t.currentMonth,s=t.currentYear,r=t.minutesWidthOnXAxis,o=t.numberOfHours,n=new T(this.ctx),l="hour",h=function(t,e){return t>n.determineDaysOfMonths(e+1,s)&&(p=1,e+=1),{month:e,date:p}},c=function(t,e){return t>n.determineDaysOfMonths(e+1,s)?e+=1:e},d=60-(e.minMinute+e.minSecond/60),g=d*r,u=e.minHour+1,f=u+1;60===d&&(g=0,f=(u=e.minHour)+1);var p=i,b=c(p,a);this.timeScaleArray.push({position:g,value:u,unit:l,day:p,hour:f,year:s,month:x.monthMod(b)});for(var v=g,m=0;m<o;m++){if(l="hour",f>=24)f=0,l="day",b=h(p+=1,b).month,b=c(p,b);var y=this._getYear(s,b,0);v=0===f&&0===m?d*r:60*r+v;var w=0===f?p:f;this.timeScaleArray.push({position:v,value:w,unit:l,hour:f,day:p,year:y,month:x.monthMod(b)}),f++}}},{key:"generateMinuteScale",value:function(t){for(var e=t.currentMillisecond,i=t.currentSecond,a=t.currentMinute,s=t.currentHour,r=t.currentDate,o=t.currentMonth,n=t.currentYear,l=t.minutesWidthOnXAxis,h=t.secondsWidthOnXAxis,c=t.numberOfMinutes,d=a+1,g=r,u=o,f=n,p=s,b=(60-i-e/1e3)*h,v=0;v<c;v++)d>=60&&(d=0,24===(p+=1)&&(p=0)),this.timeScaleArray.push({position:b,value:d,unit:"minute",hour:p,minute:d,day:g,year:this._getYear(f,u,0),month:x.monthMod(u)}),b+=l,d++}},{key:"generateSecondScale",value:function(t){for(var e=t.currentMillisecond,i=t.currentSecond,a=t.currentMinute,s=t.currentHour,r=t.currentDate,o=t.currentMonth,n=t.currentYear,l=t.secondsWidthOnXAxis,h=t.numberOfSeconds,c=i+1,d=a,g=r,u=o,f=n,p=s,b=(1e3-e)/1e3*l,v=0;v<h;v++)c>=60&&(c=0,++d>=60&&(d=0,24===++p&&(p=0))),this.timeScaleArray.push({position:b,value:c,unit:"second",hour:p,minute:d,second:c,day:g,year:this._getYear(f,u,0),month:x.monthMod(u)}),b+=l,c++}},{key:"createRawDateString",value:function(t,e){var i=t.year;return 0===t.month&&(t.month=1),i+="-"+("0"+t.month.toString()).slice(-2),"day"===t.unit?i+="day"===t.unit?"-"+("0"+e).slice(-2):"-01":i+="-"+("0"+(t.day?t.day:"1")).slice(-2),"hour"===t.unit?i+="hour"===t.unit?"T"+("0"+e).slice(-2):"T00":i+="T"+("0"+(t.hour?t.hour:"0")).slice(-2),"minute"===t.unit?i+=":"+("0"+e).slice(-2):i+=":"+(t.minute?("0"+t.minute).slice(-2):"00"),"second"===t.unit?i+=":"+("0"+e).slice(-2):i+=":00",this.utc&&(i+=".000Z"),i}},{key:"formatDates",value:function(t){var e=this,i=this.w;return t.map((function(t){var a=t.value.toString(),s=new T(e.ctx),r=e.createRawDateString(t,a),o=s.getDate(s.parseDate(r));if(e.utc||(o=s.getDate(s.parseDateWithTimezone(r))),void 0===i.config.xaxis.labels.format){var n="dd MMM",l=i.config.xaxis.labels.datetimeFormatter;"year"===t.unit&&(n=l.year),"month"===t.unit&&(n=l.month),"day"===t.unit&&(n=l.day),"hour"===t.unit&&(n=l.hour),"minute"===t.unit&&(n=l.minute),"second"===t.unit&&(n=l.second),a=s.formatDate(o,n)}else a=s.formatDate(o,i.config.xaxis.labels.format);return{dateString:r,position:t.position,value:a,unit:t.unit,year:t.year,month:t.month}}))}},{key:"removeOverlappingTS",value:function(t){var e,i=this,a=new m(this.ctx),s=!1;t.length>0&&t[0].value&&t.every((function(e){return e.value.length===t[0].value.length}))&&(s=!0,e=a.getTextRects(t[0].value).width);var r=0,o=t.map((function(o,n){if(n>0&&i.w.config.xaxis.labels.hideOverlappingLabels){var l=s?e:a.getTextRects(t[r].value).width,h=t[r].position;return o.position>h+l+10?(r=n,o):null}return o}));return o=o.filter((function(t){return null!==t}))}},{key:"_getYear",value:function(t,e,i){return t+Math.floor(e/12)+i}}]),t}(),Dt=function(){function t(e,i){a(this,t),this.ctx=i,this.w=i.w,this.el=e}return r(t,[{key:"setupElements",value:function(){var t=this.w.globals,e=this.w.config,i=e.chart.type;t.axisCharts=["line","area","bar","rangeBar","rangeArea","candlestick","boxPlot","scatter","bubble","radar","heatmap","treemap"].indexOf(i)>-1,t.xyCharts=["line","area","bar","rangeBar","rangeArea","candlestick","boxPlot","scatter","bubble"].indexOf(i)>-1,t.isBarHorizontal=("bar"===e.chart.type||"rangeBar"===e.chart.type||"boxPlot"===e.chart.type)&&e.plotOptions.bar.horizontal,t.chartClass=".apexcharts"+t.chartID,t.dom.baseEl=this.el,t.dom.elWrap=document.createElement("div"),m.setAttrs(t.dom.elWrap,{id:t.chartClass.substring(1),class:"apexcharts-canvas "+t.chartClass.substring(1)}),this.el.appendChild(t.dom.elWrap),t.dom.Paper=new window.SVG.Doc(t.dom.elWrap),t.dom.Paper.attr({class:"apexcharts-svg","xmlns:data":"ApexChartsNS",transform:"translate(".concat(e.chart.offsetX,", ").concat(e.chart.offsetY,")")}),t.dom.Paper.node.style.background=e.chart.background,this.setSVGDimensions(),t.dom.elGraphical=t.dom.Paper.group().attr({class:"apexcharts-inner apexcharts-graphical"}),t.dom.elAnnotations=t.dom.Paper.group().attr({class:"apexcharts-annotations"}),t.dom.elDefs=t.dom.Paper.defs(),t.dom.elLegendWrap=document.createElement("div"),t.dom.elLegendWrap.classList.add("apexcharts-legend"),t.dom.elWrap.appendChild(t.dom.elLegendWrap),t.dom.Paper.add(t.dom.elGraphical),t.dom.elGraphical.add(t.dom.elDefs)}},{key:"plotChartType",value:function(t,e){var i=this.w,a=i.config,s=i.globals,r={series:[],i:[]},o={series:[],i:[]},n={series:[],i:[]},l={series:[],i:[]},h={series:[],i:[]},c={series:[],i:[]},d={series:[],i:[]},g={series:[],i:[]},u={series:[],seriesRangeEnd:[],i:[]};s.series.map((function(e,f){var p=0;void 0!==t[f].type?("column"===t[f].type||"bar"===t[f].type?(s.series.length>1&&a.plotOptions.bar.horizontal&&console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"),h.series.push(e),h.i.push(f),p++,i.globals.columnSeries=h.series):"area"===t[f].type?(o.series.push(e),o.i.push(f),p++):"line"===t[f].type?(r.series.push(e),r.i.push(f),p++):"scatter"===t[f].type?(n.series.push(e),n.i.push(f)):"bubble"===t[f].type?(l.series.push(e),l.i.push(f),p++):"candlestick"===t[f].type?(c.series.push(e),c.i.push(f),p++):"boxPlot"===t[f].type?(d.series.push(e),d.i.push(f),p++):"rangeBar"===t[f].type?(g.series.push(e),g.i.push(f),p++):"rangeArea"===t[f].type?(u.series.push(s.seriesRangeStart[f]),u.seriesRangeEnd.push(s.seriesRangeEnd[f]),u.i.push(f),p++):console.warn("You have specified an unrecognized chart type. Available types for this property are line/area/column/bar/scatter/bubble"),p>1&&(s.comboCharts=!0)):(r.series.push(e),r.i.push(f))}));var f=new zt(this.ctx,e),p=new kt(this.ctx,e);this.ctx.pie=new Lt(this.ctx);var x=new Tt(this.ctx);this.ctx.rangeBar=new Mt(this.ctx,e);var b=new Pt(this.ctx),v=[];if(s.comboCharts){if(o.series.length>0&&v.push(f.draw(o.series,"area",o.i)),h.series.length>0)if(i.config.chart.stacked){var m=new wt(this.ctx,e);v.push(m.draw(h.series,h.i))}else this.ctx.bar=new yt(this.ctx,e),v.push(this.ctx.bar.draw(h.series,h.i));if(u.series.length>0&&v.push(f.draw(u.series,"rangeArea",u.i,u.seriesRangeEnd)),r.series.length>0&&v.push(f.draw(r.series,"line",r.i)),c.series.length>0&&v.push(p.draw(c.series,c.i)),d.series.length>0&&v.push(p.draw(d.series,d.i)),g.series.length>0&&v.push(this.ctx.rangeBar.draw(g.series,g.i)),n.series.length>0){var y=new zt(this.ctx,e,!0);v.push(y.draw(n.series,"scatter",n.i))}if(l.series.length>0){var w=new zt(this.ctx,e,!0);v.push(w.draw(l.series,"bubble",l.i))}}else switch(a.chart.type){case"line":v=f.draw(s.series,"line");break;case"area":v=f.draw(s.series,"area");break;case"bar":if(a.chart.stacked)v=new wt(this.ctx,e).draw(s.series);else this.ctx.bar=new yt(this.ctx,e),v=this.ctx.bar.draw(s.series);break;case"candlestick":v=new kt(this.ctx,e).draw(s.series);break;case"boxPlot":v=new kt(this.ctx,e).draw(s.series);break;case"rangeBar":v=this.ctx.rangeBar.draw(s.series);break;case"rangeArea":v=f.draw(s.seriesRangeStart,"rangeArea",void 0,s.seriesRangeEnd);break;case"heatmap":v=new St(this.ctx,e).draw(s.series);break;case"treemap":v=new Yt(this.ctx,e).draw(s.series);break;case"pie":case"donut":case"polarArea":v=this.ctx.pie.draw(s.series);break;case"radialBar":v=x.draw(s.series);break;case"radar":v=b.draw(s.series);break;default:v=f.draw(s.series)}return v}},{key:"setSVGDimensions",value:function(){var t=this.w.globals,e=this.w.config;t.svgWidth=e.chart.width,t.svgHeight=e.chart.height;var i=x.getDimensions(this.el),a=e.chart.width.toString().split(/[0-9]+/g).pop();"%"===a?x.isNumber(i[0])&&(0===i[0].width&&(i=x.getDimensions(this.el.parentNode)),t.svgWidth=i[0]*parseInt(e.chart.width,10)/100):"px"!==a&&""!==a||(t.svgWidth=parseInt(e.chart.width,10));var s=e.chart.height.toString().split(/[0-9]+/g).pop();if("auto"!==t.svgHeight&&""!==t.svgHeight)if("%"===s){var r=x.getDimensions(this.el.parentNode);t.svgHeight=r[1]*parseInt(e.chart.height,10)/100}else t.svgHeight=parseInt(e.chart.height,10);else t.axisCharts?t.svgHeight=t.svgWidth/1.61:t.svgHeight=t.svgWidth/1.2;if(t.svgWidth<0&&(t.svgWidth=0),t.svgHeight<0&&(t.svgHeight=0),m.setAttrs(t.dom.Paper.node,{width:t.svgWidth,height:t.svgHeight}),"%"!==s){var o=e.chart.sparkline.enabled?0:t.axisCharts?e.chart.parentHeightOffset:0;t.dom.Paper.node.parentNode.parentNode.style.minHeight=t.svgHeight+o+"px"}t.dom.elWrap.style.width=t.svgWidth+"px",t.dom.elWrap.style.height=t.svgHeight+"px"}},{key:"shiftGraphPosition",value:function(){var t=this.w.globals,e=t.translateY,i={transform:"translate("+t.translateX+", "+e+")"};m.setAttrs(t.dom.elGraphical.node,i)}},{key:"resizeNonAxisCharts",value:function(){var t=this.w,e=t.globals,i=0,a=t.config.chart.sparkline.enabled?1:15;a+=t.config.grid.padding.bottom,"top"!==t.config.legend.position&&"bottom"!==t.config.legend.position||!t.config.legend.show||t.config.legend.floating||(i=new lt(this.ctx).legendHelpers.getLegendBBox().clwh+10);var s=t.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"),r=2.05*t.globals.radialSize;if(s&&!t.config.chart.sparkline.enabled&&0!==t.config.plotOptions.radialBar.startAngle){var o=x.getBoundingClientRect(s);r=o.bottom;var n=o.bottom-o.top;r=Math.max(2.05*t.globals.radialSize,n)}var l=r+e.translateY+i+a;e.dom.elLegendForeign&&e.dom.elLegendForeign.setAttribute("height",l),t.config.chart.height&&String(t.config.chart.height).indexOf("%")>0||(e.dom.elWrap.style.height=l+"px",m.setAttrs(e.dom.Paper.node,{height:l}),e.dom.Paper.node.parentNode.parentNode.style.minHeight=l+"px")}},{key:"coreCalculations",value:function(){new U(this.ctx).init()}},{key:"resetGlobals",value:function(){var t=this,e=function(){return t.w.config.series.map((function(t){return[]}))},i=new E,a=this.w.globals;i.initGlobalVars(a),a.seriesXvalues=e(),a.seriesYvalues=e()}},{key:"isMultipleY",value:function(){if(this.w.config.yaxis.constructor===Array&&this.w.config.yaxis.length>1)return this.w.globals.isMultipleYAxis=!0,!0}},{key:"xySettings",value:function(){var t=null,e=this.w;if(e.globals.axisCharts){if("back"===e.config.xaxis.crosshairs.position)new Q(this.ctx).drawXCrosshairs();if("back"===e.config.yaxis[0].crosshairs.position)new Q(this.ctx).drawYCrosshairs();if("datetime"===e.config.xaxis.type&&void 0===e.config.xaxis.labels.formatter){this.ctx.timeScale=new Rt(this.ctx);var i=[];isFinite(e.globals.minX)&&isFinite(e.globals.maxX)&&!e.globals.isBarHorizontal?i=this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minX,e.globals.maxX):e.globals.isBarHorizontal&&(i=this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minY,e.globals.maxY)),this.ctx.timeScale.recalcDimensionsBasedOnFormat(i)}t=new y(this.ctx).getCalculatedRatios()}return t}},{key:"updateSourceChart",value:function(t){this.ctx.w.globals.selection=void 0,this.ctx.updateHelpers._updateOptions({chart:{selection:{xaxis:{min:t.w.globals.minX,max:t.w.globals.maxX}}}},!1,!1)}},{key:"setupBrushHandler",value:function(){var t=this,i=this.w;if(i.config.chart.brush.enabled&&"function"!=typeof i.config.chart.events.selection){var a=i.config.chart.brush.targets||[i.config.chart.brush.target];a.forEach((function(e){var i=ApexCharts.getChartByID(e);i.w.globals.brushSource=t.ctx,"function"!=typeof i.w.config.chart.events.zoomed&&(i.w.config.chart.events.zoomed=function(){t.updateSourceChart(i)}),"function"!=typeof i.w.config.chart.events.scrolled&&(i.w.config.chart.events.scrolled=function(){t.updateSourceChart(i)})})),i.config.chart.events.selection=function(t,s){a.forEach((function(t){var a=ApexCharts.getChartByID(t),r=x.clone(i.config.yaxis);if(i.config.chart.brush.autoScaleYaxis&&1===a.w.globals.series.length){var o=new _(a);r=o.autoScaleY(a,r,s)}var n=a.w.config.yaxis.reduce((function(t,i,s){return[].concat(u(t),[e(e({},a.w.config.yaxis[s]),{},{min:r[0].min,max:r[0].max})])}),[]);a.ctx.updateHelpers._updateOptions({xaxis:{min:s.xaxis.min,max:s.xaxis.max},yaxis:n},!1,!1,!1,!1)}))}}}}]),t}(),Ht=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"_updateOptions",value:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return new Promise((function(n){var l=[e.ctx];r&&(l=e.ctx.getSyncedCharts()),e.ctx.w.globals.isExecCalled&&(l=[e.ctx],e.ctx.w.globals.isExecCalled=!1),l.forEach((function(r,h){var c=r.w;if(c.globals.shouldAnimate=s,a||(c.globals.resized=!0,c.globals.dataChanged=!0,s&&r.series.getPreviousPaths()),t&&"object"===i(t)&&(r.config=new X(t),t=y.extendArrayProps(r.config,t,c),r.w.globals.chartID!==e.ctx.w.globals.chartID&&delete t.series,c.config=x.extend(c.config,t),o&&(c.globals.lastXAxis=t.xaxis?x.clone(t.xaxis):[],c.globals.lastYAxis=t.yaxis?x.clone(t.yaxis):[],c.globals.initialConfig=x.extend({},c.config),c.globals.initialSeries=x.clone(c.config.series),t.series))){for(var d=0;d<c.globals.collapsedSeriesIndices.length;d++){var g=c.config.series[c.globals.collapsedSeriesIndices[d]];c.globals.collapsedSeries[d].data=c.globals.axisCharts?g.data.slice():g}for(var u=0;u<c.globals.ancillaryCollapsedSeriesIndices.length;u++){var f=c.config.series[c.globals.ancillaryCollapsedSeriesIndices[u]];c.globals.ancillaryCollapsedSeries[u].data=c.globals.axisCharts?f.data.slice():f}r.series.emptyCollapsedSeries(c.config.series)}return r.update(t).then((function(){h===l.length-1&&n(r)}))}))}))}},{key:"_updateSeries",value:function(t,e){var i=this,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(s){var r,o=i.w;return o.globals.shouldAnimate=e,o.globals.dataChanged=!0,e&&i.ctx.series.getPreviousPaths(),o.globals.axisCharts?(0===(r=t.map((function(t,e){return i._extendSeries(t,e)}))).length&&(r=[{data:[]}]),o.config.series=r):o.config.series=t.slice(),a&&(o.globals.initialConfig.series=x.clone(o.config.series),o.globals.initialSeries=x.clone(o.config.series)),i.ctx.update().then((function(){s(i.ctx)}))}))}},{key:"_extendSeries",value:function(t,i){var a=this.w,s=a.config.series[i];return e(e({},a.config.series[i]),{},{name:t.name?t.name:s&&s.name,color:t.color?t.color:s&&s.color,type:t.type?t.type:s&&s.type,data:t.data?t.data:s&&s.data})}},{key:"toggleDataPointSelection",value:function(t,e){var i=this.w,a=null,s=".apexcharts-series[data\\:realIndex='".concat(t,"']");return i.globals.axisCharts?a=i.globals.dom.Paper.select("".concat(s," path[j='").concat(e,"'], ").concat(s," circle[j='").concat(e,"'], ").concat(s," rect[j='").concat(e,"']")).members[0]:void 0===e&&(a=i.globals.dom.Paper.select("".concat(s," path[j='").concat(t,"']")).members[0],"pie"!==i.config.chart.type&&"polarArea"!==i.config.chart.type&&"donut"!==i.config.chart.type||this.ctx.pie.pieClicked(t)),a?(new m(this.ctx).pathMouseDown(a,null),a.node?a.node:null):(console.warn("toggleDataPointSelection: Element not found"),null)}},{key:"forceXAxisUpdate",value:function(t){var e=this.w;if(["min","max"].forEach((function(i){void 0!==t.xaxis[i]&&(e.config.xaxis[i]=t.xaxis[i],e.globals.lastXAxis[i]=t.xaxis[i])})),t.xaxis.categories&&t.xaxis.categories.length&&(e.config.xaxis.categories=t.xaxis.categories),e.config.xaxis.convertedCatToNumeric){var i=new z(t);t=i.convertCatToNumericXaxis(t,this.ctx)}return t}},{key:"forceYAxisUpdate",value:function(t){return t.chart&&t.chart.stacked&&"100%"===t.chart.stackType&&(Array.isArray(t.yaxis)?t.yaxis.forEach((function(e,i){t.yaxis[i].min=0,t.yaxis[i].max=100})):(t.yaxis.min=0,t.yaxis.max=100)),t}},{key:"revertDefaultAxisMinMax",value:function(t){var e=this,i=this.w,a=i.globals.lastXAxis,s=i.globals.lastYAxis;t&&t.xaxis&&(a=t.xaxis),t&&t.yaxis&&(s=t.yaxis),i.config.xaxis.min=a.min,i.config.xaxis.max=a.max;var r=function(t){void 0!==s[t]&&(i.config.yaxis[t].min=s[t].min,i.config.yaxis[t].max=s[t].max)};i.config.yaxis.map((function(t,a){i.globals.zoomed||void 0!==s[a]?r(a):void 0!==e.ctx.opts.yaxis[a]&&(t.min=e.ctx.opts.yaxis[a].min,t.max=e.ctx.opts.yaxis[a].max)}))}}]),t}();Xt="undefined"!=typeof window?window:void 0,Et=function(t,e){var a=(void 0!==this?this:t).SVG=function(t){if(a.supported)return t=new a.Doc(t),a.parser.draw||a.prepare(),t};if(a.ns="http://www.w3.org/2000/svg",a.xmlns="http://www.w3.org/2000/xmlns/",a.xlink="http://www.w3.org/1999/xlink",a.svgjs="http://svgjs.dev",a.supported=!0,!a.supported)return!1;a.did=1e3,a.eid=function(t){return"Svgjs"+d(t)+a.did++},a.create=function(t){var i=e.createElementNS(this.ns,t);return i.setAttribute("id",this.eid(t)),i},a.extend=function(){var t,e;e=(t=[].slice.call(arguments)).pop();for(var i=t.length-1;i>=0;i--)if(t[i])for(var s in e)t[i].prototype[s]=e[s];a.Set&&a.Set.inherit&&a.Set.inherit()},a.invent=function(t){var e="function"==typeof t.create?t.create:function(){this.constructor.call(this,a.create(t.create))};return t.inherit&&(e.prototype=new t.inherit),t.extend&&a.extend(e,t.extend),t.construct&&a.extend(t.parent||a.Container,t.construct),e},a.adopt=function(e){return e?e.instance?e.instance:((i="svg"==e.nodeName?e.parentNode instanceof t.SVGElement?new a.Nested:new a.Doc:"linearGradient"==e.nodeName?new a.Gradient("linear"):"radialGradient"==e.nodeName?new a.Gradient("radial"):a[d(e.nodeName)]?new(a[d(e.nodeName)]):new a.Element(e)).type=e.nodeName,i.node=e,e.instance=i,i instanceof a.Doc&&i.namespace().defs(),i.setData(JSON.parse(e.getAttribute("svgjs:data"))||{}),i):null;var i},a.prepare=function(){var t=e.getElementsByTagName("body")[0],i=(t?new a.Doc(t):a.adopt(e.documentElement).nested()).size(2,0);a.parser={body:t||e.documentElement,draw:i.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,poly:i.polyline().node,path:i.path().node,native:a.create("svg")}},a.parser={native:a.create("svg")},e.addEventListener("DOMContentLoaded",(function(){a.parser.draw||a.prepare()}),!1),a.regex={numberAndUnit:/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,hex:/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb:/rgb\((\d+),(\d+),(\d+)\)/,reference:/#([a-z0-9\-_]+)/i,transforms:/\)\s*,?\s*/,whitespace:/\s/g,isHex:/^#[a-f0-9]{3,6}$/i,isRgb:/^rgb\(/,isCss:/[^:]+:[^;]+;?/,isBlank:/^(\s+)?$/,isNumber:/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,isPercent:/^-?[\d\.]+%$/,isImage:/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,delimiter:/[\s,]+/,hyphen:/([^e])\-/gi,pathLetters:/[MLHVCSQTAZ]/gi,isPathLetter:/[MLHVCSQTAZ]/i,numbersWithDots:/((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,dots:/\./g},a.utils={map:function(t,e){for(var i=t.length,a=[],s=0;s<i;s++)a.push(e(t[s]));return a},filter:function(t,e){for(var i=t.length,a=[],s=0;s<i;s++)e(t[s])&&a.push(t[s]);return a},filterSVGElements:function(e){return this.filter(e,(function(e){return e instanceof t.SVGElement}))}},a.defaults={attrs:{"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","font-size":16,"font-family":"Helvetica, Arial, sans-serif","text-anchor":"start"}},a.Color=function(t){var e,s;this.r=0,this.g=0,this.b=0,t&&("string"==typeof t?a.regex.isRgb.test(t)?(e=a.regex.rgb.exec(t.replace(a.regex.whitespace,"")),this.r=parseInt(e[1]),this.g=parseInt(e[2]),this.b=parseInt(e[3])):a.regex.isHex.test(t)&&(e=a.regex.hex.exec(4==(s=t).length?["#",s.substring(1,2),s.substring(1,2),s.substring(2,3),s.substring(2,3),s.substring(3,4),s.substring(3,4)].join(""):s),this.r=parseInt(e[1],16),this.g=parseInt(e[2],16),this.b=parseInt(e[3],16)):"object"===i(t)&&(this.r=t.r,this.g=t.g,this.b=t.b))},a.extend(a.Color,{toString:function(){return this.toHex()},toHex:function(){return"#"+g(this.r)+g(this.g)+g(this.b)},toRgb:function(){return"rgb("+[this.r,this.g,this.b].join()+")"},brightness:function(){return this.r/255*.3+this.g/255*.59+this.b/255*.11},morph:function(t){return this.destination=new a.Color(t),this},at:function(t){return this.destination?(t=t<0?0:t>1?1:t,new a.Color({r:~~(this.r+(this.destination.r-this.r)*t),g:~~(this.g+(this.destination.g-this.g)*t),b:~~(this.b+(this.destination.b-this.b)*t)})):this}}),a.Color.test=function(t){return t+="",a.regex.isHex.test(t)||a.regex.isRgb.test(t)},a.Color.isRgb=function(t){return t&&"number"==typeof t.r&&"number"==typeof t.g&&"number"==typeof t.b},a.Color.isColor=function(t){return a.Color.isRgb(t)||a.Color.test(t)},a.Array=function(t,e){0==(t=(t||[]).valueOf()).length&&e&&(t=e.valueOf()),this.value=this.parse(t)},a.extend(a.Array,{toString:function(){return this.value.join(" ")},valueOf:function(){return this.value},parse:function(t){return t=t.valueOf(),Array.isArray(t)?t:this.split(t)}}),a.PointArray=function(t,e){a.Array.call(this,t,e||[[0,0]])},a.PointArray.prototype=new a.Array,a.PointArray.prototype.constructor=a.PointArray;for(var s={M:function(t,e,i){return e.x=i.x=t[0],e.y=i.y=t[1],["M",e.x,e.y]},L:function(t,e){return e.x=t[0],e.y=t[1],["L",t[0],t[1]]},H:function(t,e){return e.x=t[0],["H",t[0]]},V:function(t,e){return e.y=t[0],["V",t[0]]},C:function(t,e){return e.x=t[4],e.y=t[5],["C",t[0],t[1],t[2],t[3],t[4],t[5]]},Q:function(t,e){return e.x=t[2],e.y=t[3],["Q",t[0],t[1],t[2],t[3]]},Z:function(t,e,i){return e.x=i.x,e.y=i.y,["Z"]}},r="mlhvqtcsaz".split(""),o=0,n=r.length;o<n;++o)s[r[o]]=function(t){return function(e,i,a){if("H"==t)e[0]=e[0]+i.x;else if("V"==t)e[0]=e[0]+i.y;else if("A"==t)e[5]=e[5]+i.x,e[6]=e[6]+i.y;else for(var r=0,o=e.length;r<o;++r)e[r]=e[r]+(r%2?i.y:i.x);if(s&&"function"==typeof s[t])return s[t](e,i,a)}}(r[o].toUpperCase());a.PathArray=function(t,e){a.Array.call(this,t,e||[["M",0,0]])},a.PathArray.prototype=new a.Array,a.PathArray.prototype.constructor=a.PathArray,a.extend(a.PathArray,{toString:function(){return function(t){for(var e=0,i=t.length,a="";e<i;e++)a+=t[e][0],null!=t[e][1]&&(a+=t[e][1],null!=t[e][2]&&(a+=" ",a+=t[e][2],null!=t[e][3]&&(a+=" ",a+=t[e][3],a+=" ",a+=t[e][4],null!=t[e][5]&&(a+=" ",a+=t[e][5],a+=" ",a+=t[e][6],null!=t[e][7]&&(a+=" ",a+=t[e][7])))));return a+" "}(this.value)},move:function(t,e){var i=this.bbox();return i.x,i.y,this},at:function(t){if(!this.destination)return this;for(var e=this.value,i=this.destination.value,s=[],r=new a.PathArray,o=0,n=e.length;o<n;o++){s[o]=[e[o][0]];for(var l=1,h=e[o].length;l<h;l++)s[o][l]=e[o][l]+(i[o][l]-e[o][l])*t;"A"===s[o][0]&&(s[o][4]=+(0!=s[o][4]),s[o][5]=+(0!=s[o][5]))}return r.value=s,r},parse:function(t){if(t instanceof a.PathArray)return t.valueOf();var e,i={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0};t="string"==typeof t?t.replace(a.regex.numbersWithDots,h).replace(a.regex.pathLetters," $& ").replace(a.regex.hyphen,"$1 -").trim().split(a.regex.delimiter):t.reduce((function(t,e){return[].concat.call(t,e)}),[]);var r=[],o=new a.Point,n=new a.Point,l=0,c=t.length;do{a.regex.isPathLetter.test(t[l])?(e=t[l],++l):"M"==e?e="L":"m"==e&&(e="l"),r.push(s[e].call(null,t.slice(l,l+=i[e.toUpperCase()]).map(parseFloat),o,n))}while(c>l);return r},bbox:function(){return a.parser.draw||a.prepare(),a.parser.path.setAttribute("d",this.toString()),a.parser.path.getBBox()}}),a.Number=a.invent({create:function(t,e){this.value=0,this.unit=e||"","number"==typeof t?this.value=isNaN(t)?0:isFinite(t)?t:t<0?-34e37:34e37:"string"==typeof t?(e=t.match(a.regex.numberAndUnit))&&(this.value=parseFloat(e[1]),"%"==e[5]?this.value/=100:"s"==e[5]&&(this.value*=1e3),this.unit=e[5]):t instanceof a.Number&&(this.value=t.valueOf(),this.unit=t.unit)},extend:{toString:function(){return("%"==this.unit?~~(1e8*this.value)/1e6:"s"==this.unit?this.value/1e3:this.value)+this.unit},toJSON:function(){return this.toString()},valueOf:function(){return this.value},plus:function(t){return t=new a.Number(t),new a.Number(this+t,this.unit||t.unit)},minus:function(t){return t=new a.Number(t),new a.Number(this-t,this.unit||t.unit)},times:function(t){return t=new a.Number(t),new a.Number(this*t,this.unit||t.unit)},divide:function(t){return t=new a.Number(t),new a.Number(this/t,this.unit||t.unit)},to:function(t){var e=new a.Number(this);return"string"==typeof t&&(e.unit=t),e},morph:function(t){return this.destination=new a.Number(t),t.relative&&(this.destination.value+=this.value),this},at:function(t){return this.destination?new a.Number(this.destination).minus(this).times(t).plus(this):this}}}),a.Element=a.invent({create:function(t){this._stroke=a.defaults.attrs.stroke,this._event=null,this.dom={},(this.node=t)&&(this.type=t.nodeName,this.node.instance=this,this._stroke=t.getAttribute("stroke")||this._stroke)},extend:{x:function(t){return this.attr("x",t)},y:function(t){return this.attr("y",t)},cx:function(t){return null==t?this.x()+this.width()/2:this.x(t-this.width()/2)},cy:function(t){return null==t?this.y()+this.height()/2:this.y(t-this.height()/2)},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},width:function(t){return this.attr("width",t)},height:function(t){return this.attr("height",t)},size:function(t,e){var i=u(this,t,e);return this.width(new a.Number(i.width)).height(new a.Number(i.height))},clone:function(t){this.writeDataToDom();var e=x(this.node.cloneNode(!0));return t?t.add(e):this.after(e),e},remove:function(){return this.parent()&&this.parent().removeElement(this),this},replace:function(t){return this.after(t).remove(),t},addTo:function(t){return t.put(this)},putIn:function(t){return t.add(this)},id:function(t){return this.attr("id",t)},show:function(){return this.style("display","")},hide:function(){return this.style("display","none")},visible:function(){return"none"!=this.style("display")},toString:function(){return this.attr("id")},classes:function(){var t=this.attr("class");return null==t?[]:t.trim().split(a.regex.delimiter)},hasClass:function(t){return-1!=this.classes().indexOf(t)},addClass:function(t){if(!this.hasClass(t)){var e=this.classes();e.push(t),this.attr("class",e.join(" "))}return this},removeClass:function(t){return this.hasClass(t)&&this.attr("class",this.classes().filter((function(e){return e!=t})).join(" ")),this},toggleClass:function(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t)},reference:function(t){return a.get(this.attr(t))},parent:function(e){var i=this;if(!i.node.parentNode)return null;if(i=a.adopt(i.node.parentNode),!e)return i;for(;i&&i.node instanceof t.SVGElement;){if("string"==typeof e?i.matches(e):i instanceof e)return i;if(!i.node.parentNode||"#document"==i.node.parentNode.nodeName)return null;i=a.adopt(i.node.parentNode)}},doc:function(){return this instanceof a.Doc?this:this.parent(a.Doc)},parents:function(t){var e=[],i=this;do{if(!(i=i.parent(t))||!i.node)break;e.push(i)}while(i.parent);return e},matches:function(t){return function(t,e){return(t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.oMatchesSelector).call(t,e)}(this.node,t)},native:function(){return this.node},svg:function(t){var i=e.createElement("svg");if(!(t&&this instanceof a.Parent))return i.appendChild(t=e.createElement("svg")),this.writeDataToDom(),t.appendChild(this.node.cloneNode(!0)),i.innerHTML.replace(/^<svg>/,"").replace(/<\/svg>$/,"");i.innerHTML="<svg>"+t.replace(/\n/,"").replace(/<([\w:-]+)([^<]+?)\/>/g,"<$1$2></$1>")+"</svg>";for(var s=0,r=i.firstChild.childNodes.length;s<r;s++)this.node.appendChild(i.firstChild.firstChild);return this},writeDataToDom:function(){return(this.each||this.lines)&&(this.each?this:this.lines()).each((function(){this.writeDataToDom()})),this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),this},setData:function(t){return this.dom=t,this},is:function(t){return function(t,e){return t instanceof e}(this,t)}}}),a.easing={"-":function(t){return t},"<>":function(t){return-Math.cos(t*Math.PI)/2+.5},">":function(t){return Math.sin(t*Math.PI/2)},"<":function(t){return 1-Math.cos(t*Math.PI/2)}},a.morph=function(t){return function(e,i){return new a.MorphObj(e,i).at(t)}},a.Situation=a.invent({create:function(t){this.init=!1,this.reversed=!1,this.reversing=!1,this.duration=new a.Number(t.duration).valueOf(),this.delay=new a.Number(t.delay).valueOf(),this.start=+new Date+this.delay,this.finish=this.start+this.duration,this.ease=t.ease,this.loop=0,this.loops=!1,this.animations={},this.attrs={},this.styles={},this.transforms=[],this.once={}}}),a.FX=a.invent({create:function(t){this._target=t,this.situations=[],this.active=!1,this.situation=null,this.paused=!1,this.lastPos=0,this.pos=0,this.absPos=0,this._speed=1},extend:{animate:function(t,e,s){"object"===i(t)&&(e=t.ease,s=t.delay,t=t.duration);var r=new a.Situation({duration:t||1e3,delay:s||0,ease:a.easing[e||"-"]||e});return this.queue(r),this},target:function(t){return t&&t instanceof a.Element?(this._target=t,this):this._target},timeToAbsPos:function(t){return(t-this.situation.start)/(this.situation.duration/this._speed)},absPosToTime:function(t){return this.situation.duration/this._speed*t+this.situation.start},startAnimFrame:function(){this.stopAnimFrame(),this.animationFrame=t.requestAnimationFrame(function(){this.step()}.bind(this))},stopAnimFrame:function(){t.cancelAnimationFrame(this.animationFrame)},start:function(){return!this.active&&this.situation&&(this.active=!0,this.startCurrent()),this},startCurrent:function(){return this.situation.start=+new Date+this.situation.delay/this._speed,this.situation.finish=this.situation.start+this.situation.duration/this._speed,this.initAnimations().step()},queue:function(t){return("function"==typeof t||t instanceof a.Situation)&&this.situations.push(t),this.situation||(this.situation=this.situations.shift()),this},dequeue:function(){return this.stop(),this.situation=this.situations.shift(),this.situation&&(this.situation instanceof a.Situation?this.start():this.situation.call(this)),this},initAnimations:function(){var t,e=this.situation;if(e.init)return this;for(var i in e.animations){t=this.target()[i](),Array.isArray(t)||(t=[t]),Array.isArray(e.animations[i])||(e.animations[i]=[e.animations[i]]);for(var s=t.length;s--;)e.animations[i][s]instanceof a.Number&&(t[s]=new a.Number(t[s])),e.animations[i][s]=t[s].morph(e.animations[i][s])}for(var i in e.attrs)e.attrs[i]=new a.MorphObj(this.target().attr(i),e.attrs[i]);for(var i in e.styles)e.styles[i]=new a.MorphObj(this.target().style(i),e.styles[i]);return e.initialTransformation=this.target().matrixify(),e.init=!0,this},clearQueue:function(){return this.situations=[],this},clearCurrent:function(){return this.situation=null,this},stop:function(t,e){var i=this.active;return this.active=!1,e&&this.clearQueue(),t&&this.situation&&(!i&&this.startCurrent(),this.atEnd()),this.stopAnimFrame(),this.clearCurrent()},after:function(t){var e=this.last();return this.target().on("finished.fx",(function i(a){a.detail.situation==e&&(t.call(this,e),this.off("finished.fx",i))})),this._callStart()},during:function(t){var e=this.last(),i=function(i){i.detail.situation==e&&t.call(this,i.detail.pos,a.morph(i.detail.pos),i.detail.eased,e)};return this.target().off("during.fx",i).on("during.fx",i),this.after((function(){this.off("during.fx",i)})),this._callStart()},afterAll:function(t){var e=function e(i){t.call(this),this.off("allfinished.fx",e)};return this.target().off("allfinished.fx",e).on("allfinished.fx",e),this._callStart()},last:function(){return this.situations.length?this.situations[this.situations.length-1]:this.situation},add:function(t,e,i){return this.last()[i||"animations"][t]=e,this._callStart()},step:function(t){var e,i,a;t||(this.absPos=this.timeToAbsPos(+new Date)),!1!==this.situation.loops?(e=Math.max(this.absPos,0),i=Math.floor(e),!0===this.situation.loops||i<this.situation.loops?(this.pos=e-i,a=this.situation.loop,this.situation.loop=i):(this.absPos=this.situation.loops,this.pos=1,a=this.situation.loop-1,this.situation.loop=this.situation.loops),this.situation.reversing&&(this.situation.reversed=this.situation.reversed!=Boolean((this.situation.loop-a)%2))):(this.absPos=Math.min(this.absPos,1),this.pos=this.absPos),this.pos<0&&(this.pos=0),this.situation.reversed&&(this.pos=1-this.pos);var s=this.situation.ease(this.pos);for(var r in this.situation.once)r>this.lastPos&&r<=s&&(this.situation.once[r].call(this.target(),this.pos,s),delete this.situation.once[r]);return this.active&&this.target().fire("during",{pos:this.pos,eased:s,fx:this,situation:this.situation}),this.situation?(this.eachAt(),1==this.pos&&!this.situation.reversed||this.situation.reversed&&0==this.pos?(this.stopAnimFrame(),this.target().fire("finished",{fx:this,situation:this.situation}),this.situations.length||(this.target().fire("allfinished"),this.situations.length||(this.target().off(".fx"),this.active=!1)),this.active?this.dequeue():this.clearCurrent()):!this.paused&&this.active&&this.startAnimFrame(),this.lastPos=s,this):this},eachAt:function(){var t,e=this,i=this.target(),s=this.situation;for(var r in s.animations)t=[].concat(s.animations[r]).map((function(t){return"string"!=typeof t&&t.at?t.at(s.ease(e.pos),e.pos):t})),i[r].apply(i,t);for(var r in s.attrs)t=[r].concat(s.attrs[r]).map((function(t){return"string"!=typeof t&&t.at?t.at(s.ease(e.pos),e.pos):t})),i.attr.apply(i,t);for(var r in s.styles)t=[r].concat(s.styles[r]).map((function(t){return"string"!=typeof t&&t.at?t.at(s.ease(e.pos),e.pos):t})),i.style.apply(i,t);if(s.transforms.length){t=s.initialTransformation,r=0;for(var o=s.transforms.length;r<o;r++){var n=s.transforms[r];n instanceof a.Matrix?t=n.relative?t.multiply((new a.Matrix).morph(n).at(s.ease(this.pos))):t.morph(n).at(s.ease(this.pos)):(n.relative||n.undo(t.extract()),t=t.multiply(n.at(s.ease(this.pos))))}i.matrix(t)}return this},once:function(t,e,i){var a=this.last();return i||(t=a.ease(t)),a.once[t]=e,this},_callStart:function(){return setTimeout(function(){this.start()}.bind(this),0),this}},parent:a.Element,construct:{animate:function(t,e,i){return(this.fx||(this.fx=new a.FX(this))).animate(t,e,i)},delay:function(t){return(this.fx||(this.fx=new a.FX(this))).delay(t)},stop:function(t,e){return this.fx&&this.fx.stop(t,e),this},finish:function(){return this.fx&&this.fx.finish(),this}}}),a.MorphObj=a.invent({create:function(t,e){return a.Color.isColor(e)?new a.Color(t).morph(e):a.regex.delimiter.test(t)?a.regex.pathLetters.test(t)?new a.PathArray(t).morph(e):new a.Array(t).morph(e):a.regex.numberAndUnit.test(e)?new a.Number(t).morph(e):(this.value=t,void(this.destination=e))},extend:{at:function(t,e){return e<1?this.value:this.destination},valueOf:function(){return this.value}}}),a.extend(a.FX,{attr:function(t,e,a){if("object"===i(t))for(var s in t)this.attr(s,t[s]);else this.add(t,e,"attrs");return this},plot:function(t,e,i,a){return 4==arguments.length?this.plot([t,e,i,a]):this.add("plot",new(this.target().morphArray)(t))}}),a.Box=a.invent({create:function(t,e,s,r){if(!("object"!==i(t)||t instanceof a.Element))return a.Box.call(this,null!=t.left?t.left:t.x,null!=t.top?t.top:t.y,t.width,t.height);4==arguments.length&&(this.x=t,this.y=e,this.width=s,this.height=r),b(this)}}),a.BBox=a.invent({create:function(t){if(a.Box.apply(this,[].slice.call(arguments)),t instanceof a.Element){var i;try{if(!e.documentElement.contains){for(var s=t.node;s.parentNode;)s=s.parentNode;if(s!=e)throw new Error("Element not in the dom")}i=t.node.getBBox()}catch(e){if(t instanceof a.Shape){a.parser.draw||a.prepare();var r=t.clone(a.parser.draw.instance).show();r&&r.node&&"function"==typeof r.node.getBBox&&(i=r.node.getBBox()),r&&"function"==typeof r.remove&&r.remove()}else i={x:t.node.clientLeft,y:t.node.clientTop,width:t.node.clientWidth,height:t.node.clientHeight}}a.Box.call(this,i)}},inherit:a.Box,parent:a.Element,construct:{bbox:function(){return new a.BBox(this)}}}),a.BBox.prototype.constructor=a.BBox,a.Matrix=a.invent({create:function(t){var e=p([1,0,0,1,0,0]);t=null===t?e:t instanceof a.Element?t.matrixify():"string"==typeof t?p(t.split(a.regex.delimiter).map(parseFloat)):6==arguments.length?p([].slice.call(arguments)):Array.isArray(t)?p(t):t&&"object"===i(t)?t:e;for(var s=m.length-1;s>=0;--s)this[m[s]]=null!=t[m[s]]?t[m[s]]:e[m[s]]},extend:{extract:function(){var t=f(this,0,1);f(this,1,0);var e=180/Math.PI*Math.atan2(t.y,t.x)-90;return{x:this.e,y:this.f,transformedX:(this.e*Math.cos(e*Math.PI/180)+this.f*Math.sin(e*Math.PI/180))/Math.sqrt(this.a*this.a+this.b*this.b),transformedY:(this.f*Math.cos(e*Math.PI/180)+this.e*Math.sin(-e*Math.PI/180))/Math.sqrt(this.c*this.c+this.d*this.d),rotation:e,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f,matrix:new a.Matrix(this)}},clone:function(){return new a.Matrix(this)},morph:function(t){return this.destination=new a.Matrix(t),this},multiply:function(t){return new a.Matrix(this.native().multiply(function(t){return t instanceof a.Matrix||(t=new a.Matrix(t)),t}(t).native()))},inverse:function(){return new a.Matrix(this.native().inverse())},translate:function(t,e){return new a.Matrix(this.native().translate(t||0,e||0))},native:function(){for(var t=a.parser.native.createSVGMatrix(),e=m.length-1;e>=0;e--)t[m[e]]=this[m[e]];return t},toString:function(){return"matrix("+v(this.a)+","+v(this.b)+","+v(this.c)+","+v(this.d)+","+v(this.e)+","+v(this.f)+")"}},parent:a.Element,construct:{ctm:function(){return new a.Matrix(this.node.getCTM())},screenCTM:function(){if(this instanceof a.Nested){var t=this.rect(1,1),e=t.node.getScreenCTM();return t.remove(),new a.Matrix(e)}return new a.Matrix(this.node.getScreenCTM())}}}),a.Point=a.invent({create:function(t,e){var a;a=Array.isArray(t)?{x:t[0],y:t[1]}:"object"===i(t)?{x:t.x,y:t.y}:null!=t?{x:t,y:null!=e?e:t}:{x:0,y:0},this.x=a.x,this.y=a.y},extend:{clone:function(){return new a.Point(this)},morph:function(t,e){return this.destination=new a.Point(t,e),this}}}),a.extend(a.Element,{point:function(t,e){return new a.Point(t,e).transform(this.screenCTM().inverse())}}),a.extend(a.Element,{attr:function(t,e,s){if(null==t){for(t={},s=(e=this.node.attributes).length-1;s>=0;s--)t[e[s].nodeName]=a.regex.isNumber.test(e[s].nodeValue)?parseFloat(e[s].nodeValue):e[s].nodeValue;return t}if("object"===i(t))for(var r in t)this.attr(r,t[r]);else if(null===e)this.node.removeAttribute(t);else{if(null==e)return null==(e=this.node.getAttribute(t))?a.defaults.attrs[t]:a.regex.isNumber.test(e)?parseFloat(e):e;"stroke-width"==t?this.attr("stroke",parseFloat(e)>0?this._stroke:null):"stroke"==t&&(this._stroke=e),"fill"!=t&&"stroke"!=t||(a.regex.isImage.test(e)&&(e=this.doc().defs().image(e,0,0)),e instanceof a.Image&&(e=this.doc().defs().pattern(0,0,(function(){this.add(e)})))),"number"==typeof e?e=new a.Number(e):a.Color.isColor(e)?e=new a.Color(e):Array.isArray(e)&&(e=new a.Array(e)),"leading"==t?this.leading&&this.leading(e):"string"==typeof s?this.node.setAttributeNS(s,t,e.toString()):this.node.setAttribute(t,e.toString()),!this.rebuild||"font-size"!=t&&"x"!=t||this.rebuild(t,e)}return this}}),a.extend(a.Element,{transform:function(t,e){var s;return"object"!==i(t)?(s=new a.Matrix(this).extract(),"string"==typeof t?s[t]:s):(s=new a.Matrix(this),e=!!e||!!t.relative,null!=t.a&&(s=e?s.multiply(new a.Matrix(t)):new a.Matrix(t)),this.attr("transform",s))}}),a.extend(a.Element,{untransform:function(){return this.attr("transform",null)},matrixify:function(){return(this.attr("transform")||"").split(a.regex.transforms).slice(0,-1).map((function(t){var e=t.trim().split("(");return[e[0],e[1].split(a.regex.delimiter).map((function(t){return parseFloat(t)}))]})).reduce((function(t,e){return"matrix"==e[0]?t.multiply(p(e[1])):t[e[0]].apply(t,e[1])}),new a.Matrix)},toParent:function(t){if(this==t)return this;var e=this.screenCTM(),i=t.screenCTM().inverse();return this.addTo(t).untransform().transform(i.multiply(e)),this},toDoc:function(){return this.toParent(this.doc())}}),a.Transformation=a.invent({create:function(t,e){if(arguments.length>1&&"boolean"!=typeof e)return this.constructor.call(this,[].slice.call(arguments));if(Array.isArray(t))for(var a=0,s=this.arguments.length;a<s;++a)this[this.arguments[a]]=t[a];else if(t&&"object"===i(t))for(a=0,s=this.arguments.length;a<s;++a)this[this.arguments[a]]=t[this.arguments[a]];this.inversed=!1,!0===e&&(this.inversed=!0)}}),a.Translate=a.invent({parent:a.Matrix,inherit:a.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["transformedX","transformedY"],method:"translate"}}),a.extend(a.Element,{style:function(t,e){if(0==arguments.length)return this.node.style.cssText||"";if(arguments.length<2)if("object"===i(t))for(var s in t)this.style(s,t[s]);else{if(!a.regex.isCss.test(t))return this.node.style[c(t)];for(t=t.split(/\s*;\s*/).filter((function(t){return!!t})).map((function(t){return t.split(/\s*:\s*/)}));e=t.pop();)this.style(e[0],e[1])}else this.node.style[c(t)]=null===e||a.regex.isBlank.test(e)?"":e;return this}}),a.Parent=a.invent({create:function(t){this.constructor.call(this,t)},inherit:a.Element,extend:{children:function(){return a.utils.map(a.utils.filterSVGElements(this.node.childNodes),(function(t){return a.adopt(t)}))},add:function(t,e){return null==e?this.node.appendChild(t.node):t.node!=this.node.childNodes[e]&&this.node.insertBefore(t.node,this.node.childNodes[e]),this},put:function(t,e){return this.add(t,e),t},has:function(t){return this.index(t)>=0},index:function(t){return[].slice.call(this.node.childNodes).indexOf(t.node)},get:function(t){return a.adopt(this.node.childNodes[t])},first:function(){return this.get(0)},last:function(){return this.get(this.node.childNodes.length-1)},each:function(t,e){for(var i=this.children(),s=0,r=i.length;s<r;s++)i[s]instanceof a.Element&&t.apply(i[s],[s,i]),e&&i[s]instanceof a.Container&&i[s].each(t,e);return this},removeElement:function(t){return this.node.removeChild(t.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,this},defs:function(){return this.doc().defs()}}}),a.extend(a.Parent,{ungroup:function(t,e){return 0===e||this instanceof a.Defs||this.node==a.parser.draw||(t=t||(this instanceof a.Doc?this:this.parent(a.Parent)),e=e||1/0,this.each((function(){return this instanceof a.Defs?this:this instanceof a.Parent?this.ungroup(t,e-1):this.toParent(t)})),this.node.firstChild||this.remove()),this},flatten:function(t,e){return this.ungroup(t,e)}}),a.Container=a.invent({create:function(t){this.constructor.call(this,t)},inherit:a.Parent}),a.ViewBox=a.invent({parent:a.Container,construct:{}}),["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","touchstart","touchmove","touchleave","touchend","touchcancel"].forEach((function(t){a.Element.prototype[t]=function(e){return a.on(this.node,t,e),this}})),a.listeners=[],a.handlerMap=[],a.listenerId=0,a.on=function(t,e,i,s,r){var o=i.bind(s||t.instance||t),n=(a.handlerMap.indexOf(t)+1||a.handlerMap.push(t))-1,l=e.split(".")[0],h=e.split(".")[1]||"*";a.listeners[n]=a.listeners[n]||{},a.listeners[n][l]=a.listeners[n][l]||{},a.listeners[n][l][h]=a.listeners[n][l][h]||{},i._svgjsListenerId||(i._svgjsListenerId=++a.listenerId),a.listeners[n][l][h][i._svgjsListenerId]=o,t.addEventListener(l,o,r||{passive:!0})},a.off=function(t,e,i){var s=a.handlerMap.indexOf(t),r=e&&e.split(".")[0],o=e&&e.split(".")[1],n="";if(-1!=s)if(i){if("function"==typeof i&&(i=i._svgjsListenerId),!i)return;a.listeners[s][r]&&a.listeners[s][r][o||"*"]&&(t.removeEventListener(r,a.listeners[s][r][o||"*"][i],!1),delete a.listeners[s][r][o||"*"][i])}else if(o&&r){if(a.listeners[s][r]&&a.listeners[s][r][o]){for(var l in a.listeners[s][r][o])a.off(t,[r,o].join("."),l);delete a.listeners[s][r][o]}}else if(o)for(var h in a.listeners[s])for(var n in a.listeners[s][h])o===n&&a.off(t,[h,o].join("."));else if(r){if(a.listeners[s][r]){for(var n in a.listeners[s][r])a.off(t,[r,n].join("."));delete a.listeners[s][r]}}else{for(var h in a.listeners[s])a.off(t,h);delete a.listeners[s],delete a.handlerMap[s]}},a.extend(a.Element,{on:function(t,e,i,s){return a.on(this.node,t,e,i,s),this},off:function(t,e){return a.off(this.node,t,e),this},fire:function(e,i){return e instanceof t.Event?this.node.dispatchEvent(e):this.node.dispatchEvent(e=new a.CustomEvent(e,{detail:i,cancelable:!0})),this._event=e,this},event:function(){return this._event}}),a.Defs=a.invent({create:"defs",inherit:a.Container}),a.G=a.invent({create:"g",inherit:a.Container,extend:{x:function(t){return null==t?this.transform("x"):this.transform({x:t-this.x()},!0)}},construct:{group:function(){return this.put(new a.G)}}}),a.Doc=a.invent({create:function(t){t&&("svg"==(t="string"==typeof t?e.getElementById(t):t).nodeName?this.constructor.call(this,t):(this.constructor.call(this,a.create("svg")),t.appendChild(this.node),this.size("100%","100%")),this.namespace().defs())},inherit:a.Container,extend:{namespace:function(){return this.attr({xmlns:a.ns,version:"1.1"}).attr("xmlns:xlink",a.xlink,a.xmlns).attr("xmlns:svgjs",a.svgjs,a.xmlns)},defs:function(){var t;return this._defs||((t=this.node.getElementsByTagName("defs")[0])?this._defs=a.adopt(t):this._defs=new a.Defs,this.node.appendChild(this._defs.node)),this._defs},parent:function(){return this.node.parentNode&&"#document"!=this.node.parentNode.nodeName?this.node.parentNode:null},remove:function(){return this.parent()&&this.parent().removeChild(this.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,a.parser.draw&&!a.parser.draw.parentNode&&this.node.appendChild(a.parser.draw),this},clone:function(t){this.writeDataToDom();var e=this.node,i=x(e.cloneNode(!0));return t?(t.node||t).appendChild(i.node):e.parentNode.insertBefore(i.node,e.nextSibling),i}}}),a.extend(a.Element,{}),a.Gradient=a.invent({create:function(t){this.constructor.call(this,a.create(t+"Gradient")),this.type=t},inherit:a.Container,extend:{at:function(t,e,i){return this.put(new a.Stop).update(t,e,i)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},fill:function(){return"url(#"+this.id()+")"},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="gradientTransform"),a.Container.prototype.attr.call(this,t,e,i)}},construct:{gradient:function(t,e){return this.defs().gradient(t,e)}}}),a.extend(a.Gradient,a.FX,{from:function(t,e){return"radial"==(this._target||this).type?this.attr({fx:new a.Number(t),fy:new a.Number(e)}):this.attr({x1:new a.Number(t),y1:new a.Number(e)})},to:function(t,e){return"radial"==(this._target||this).type?this.attr({cx:new a.Number(t),cy:new a.Number(e)}):this.attr({x2:new a.Number(t),y2:new a.Number(e)})}}),a.extend(a.Defs,{gradient:function(t,e){return this.put(new a.Gradient(t)).update(e)}}),a.Stop=a.invent({create:"stop",inherit:a.Element,extend:{update:function(t){return("number"==typeof t||t instanceof a.Number)&&(t={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",new a.Number(t.offset)),this}}}),a.Pattern=a.invent({create:"pattern",inherit:a.Container,extend:{fill:function(){return"url(#"+this.id()+")"},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="patternTransform"),a.Container.prototype.attr.call(this,t,e,i)}},construct:{pattern:function(t,e,i){return this.defs().pattern(t,e,i)}}}),a.extend(a.Defs,{pattern:function(t,e,i){return this.put(new a.Pattern).update(i).attr({x:0,y:0,width:t,height:e,patternUnits:"userSpaceOnUse"})}}),a.Shape=a.invent({create:function(t){this.constructor.call(this,t)},inherit:a.Element}),a.Symbol=a.invent({create:"symbol",inherit:a.Container,construct:{symbol:function(){return this.put(new a.Symbol)}}}),a.Use=a.invent({create:"use",inherit:a.Shape,extend:{element:function(t,e){return this.attr("href",(e||"")+"#"+t,a.xlink)}},construct:{use:function(t,e){return this.put(new a.Use).element(t,e)}}}),a.Rect=a.invent({create:"rect",inherit:a.Shape,construct:{rect:function(t,e){return this.put(new a.Rect).size(t,e)}}}),a.Circle=a.invent({create:"circle",inherit:a.Shape,construct:{circle:function(t){return this.put(new a.Circle).rx(new a.Number(t).divide(2)).move(0,0)}}}),a.extend(a.Circle,a.FX,{rx:function(t){return this.attr("r",t)},ry:function(t){return this.rx(t)}}),a.Ellipse=a.invent({create:"ellipse",inherit:a.Shape,construct:{ellipse:function(t,e){return this.put(new a.Ellipse).size(t,e).move(0,0)}}}),a.extend(a.Ellipse,a.Rect,a.FX,{rx:function(t){return this.attr("rx",t)},ry:function(t){return this.attr("ry",t)}}),a.extend(a.Circle,a.Ellipse,{x:function(t){return null==t?this.cx()-this.rx():this.cx(t+this.rx())},y:function(t){return null==t?this.cy()-this.ry():this.cy(t+this.ry())},cx:function(t){return null==t?this.attr("cx"):this.attr("cx",t)},cy:function(t){return null==t?this.attr("cy"):this.attr("cy",t)},width:function(t){return null==t?2*this.rx():this.rx(new a.Number(t).divide(2))},height:function(t){return null==t?2*this.ry():this.ry(new a.Number(t).divide(2))},size:function(t,e){var i=u(this,t,e);return this.rx(new a.Number(i.width).divide(2)).ry(new a.Number(i.height).divide(2))}}),a.Line=a.invent({create:"line",inherit:a.Shape,extend:{array:function(){return new a.PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])},plot:function(t,e,i,s){return null==t?this.array():(t=void 0!==e?{x1:t,y1:e,x2:i,y2:s}:new a.PointArray(t).toLine(),this.attr(t))},move:function(t,e){return this.attr(this.array().move(t,e).toLine())},size:function(t,e){var i=u(this,t,e);return this.attr(this.array().size(i.width,i.height).toLine())}},construct:{line:function(t,e,i,s){return a.Line.prototype.plot.apply(this.put(new a.Line),null!=t?[t,e,i,s]:[0,0,0,0])}}}),a.Polyline=a.invent({create:"polyline",inherit:a.Shape,construct:{polyline:function(t){return this.put(new a.Polyline).plot(t||new a.PointArray)}}}),a.Polygon=a.invent({create:"polygon",inherit:a.Shape,construct:{polygon:function(t){return this.put(new a.Polygon).plot(t||new a.PointArray)}}}),a.extend(a.Polyline,a.Polygon,{array:function(){return this._array||(this._array=new a.PointArray(this.attr("points")))},plot:function(t){return null==t?this.array():this.clear().attr("points","string"==typeof t?t:this._array=new a.PointArray(t))},clear:function(){return delete this._array,this},move:function(t,e){return this.attr("points",this.array().move(t,e))},size:function(t,e){var i=u(this,t,e);return this.attr("points",this.array().size(i.width,i.height))}}),a.extend(a.Line,a.Polyline,a.Polygon,{morphArray:a.PointArray,x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},width:function(t){var e=this.bbox();return null==t?e.width:this.size(t,e.height)},height:function(t){var e=this.bbox();return null==t?e.height:this.size(e.width,t)}}),a.Path=a.invent({create:"path",inherit:a.Shape,extend:{morphArray:a.PathArray,array:function(){return this._array||(this._array=new a.PathArray(this.attr("d")))},plot:function(t){return null==t?this.array():this.clear().attr("d","string"==typeof t?t:this._array=new a.PathArray(t))},clear:function(){return delete this._array,this}},construct:{path:function(t){return this.put(new a.Path).plot(t||new a.PathArray)}}}),a.Image=a.invent({create:"image",inherit:a.Shape,extend:{load:function(e){if(!e)return this;var i=this,s=new t.Image;return a.on(s,"load",(function(){a.off(s);var t=i.parent(a.Pattern);null!==t&&(0==i.width()&&0==i.height()&&i.size(s.width,s.height),t&&0==t.width()&&0==t.height()&&t.size(i.width(),i.height()),"function"==typeof i._loaded&&i._loaded.call(i,{width:s.width,height:s.height,ratio:s.width/s.height,url:e}))})),a.on(s,"error",(function(t){a.off(s),"function"==typeof i._error&&i._error.call(i,t)})),this.attr("href",s.src=this.src=e,a.xlink)},loaded:function(t){return this._loaded=t,this},error:function(t){return this._error=t,this}},construct:{image:function(t,e,i){return this.put(new a.Image).load(t).size(e||0,i||e||0)}}}),a.Text=a.invent({create:function(){this.constructor.call(this,a.create("text")),this.dom.leading=new a.Number(1.3),this._rebuild=!0,this._build=!1,this.attr("font-family",a.defaults.attrs["font-family"])},inherit:a.Shape,extend:{x:function(t){return null==t?this.attr("x"):this.attr("x",t)},text:function(t){if(void 0===t){t="";for(var e=this.node.childNodes,i=0,s=e.length;i<s;++i)0!=i&&3!=e[i].nodeType&&1==a.adopt(e[i]).dom.newLined&&(t+="\n"),t+=e[i].textContent;return t}if(this.clear().build(!0),"function"==typeof t)t.call(this,this);else{i=0;for(var r=(t=t.split("\n")).length;i<r;i++)this.tspan(t[i]).newLine()}return this.build(!1).rebuild()},size:function(t){return this.attr("font-size",t).rebuild()},leading:function(t){return null==t?this.dom.leading:(this.dom.leading=new a.Number(t),this.rebuild())},lines:function(){var t=(this.textPath&&this.textPath()||this).node,e=a.utils.map(a.utils.filterSVGElements(t.childNodes),(function(t){return a.adopt(t)}));return new a.Set(e)},rebuild:function(t){if("boolean"==typeof t&&(this._rebuild=t),this._rebuild){var e=this,i=0,s=this.dom.leading*new a.Number(this.attr("font-size"));this.lines().each((function(){this.dom.newLined&&(e.textPath()||this.attr("x",e.attr("x")),"\n"==this.text()?i+=s:(this.attr("dy",s+i),i=0))})),this.fire("rebuild")}return this},build:function(t){return this._build=!!t,this},setData:function(t){return this.dom=t,this.dom.leading=new a.Number(t.leading||1.3),this}},construct:{text:function(t){return this.put(new a.Text).text(t)},plain:function(t){return this.put(new a.Text).plain(t)}}}),a.Tspan=a.invent({create:"tspan",inherit:a.Shape,extend:{text:function(t){return null==t?this.node.textContent+(this.dom.newLined?"\n":""):("function"==typeof t?t.call(this,this):this.plain(t),this)},dx:function(t){return this.attr("dx",t)},dy:function(t){return this.attr("dy",t)},newLine:function(){var t=this.parent(a.Text);return this.dom.newLined=!0,this.dy(t.dom.leading*t.attr("font-size")).attr("x",t.x())}}}),a.extend(a.Text,a.Tspan,{plain:function(t){return!1===this._build&&this.clear(),this.node.appendChild(e.createTextNode(t)),this},tspan:function(t){var e=(this.textPath&&this.textPath()||this).node,i=new a.Tspan;return!1===this._build&&this.clear(),e.appendChild(i.node),i.text(t)},clear:function(){for(var t=(this.textPath&&this.textPath()||this).node;t.hasChildNodes();)t.removeChild(t.lastChild);return this},length:function(){return this.node.getComputedTextLength()}}),a.TextPath=a.invent({create:"textPath",inherit:a.Parent,parent:a.Text,construct:{morphArray:a.PathArray,array:function(){var t=this.track();return t?t.array():null},plot:function(t){var e=this.track(),i=null;return e&&(i=e.plot(t)),null==t?i:this},track:function(){var t=this.textPath();if(t)return t.reference("href")},textPath:function(){if(this.node.firstChild&&"textPath"==this.node.firstChild.nodeName)return a.adopt(this.node.firstChild)}}}),a.Nested=a.invent({create:function(){this.constructor.call(this,a.create("svg")),this.style("overflow","visible")},inherit:a.Container,construct:{nested:function(){return this.put(new a.Nested)}}});var l={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(t,e){return"color"==e?t:t+"-"+e}};function h(t,e,i,s){return i+s.replace(a.regex.dots," .")}function c(t){return t.toLowerCase().replace(/-(.)/g,(function(t,e){return e.toUpperCase()}))}function d(t){return t.charAt(0).toUpperCase()+t.slice(1)}function g(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function u(t,e,i){if(null==e||null==i){var a=t.bbox();null==e?e=a.width/a.height*i:null==i&&(i=a.height/a.width*e)}return{width:e,height:i}}function f(t,e,i){return{x:e*t.a+i*t.c+0,y:e*t.b+i*t.d+0}}function p(t){return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}function x(e){for(var i=e.childNodes.length-1;i>=0;i--)e.childNodes[i]instanceof t.SVGElement&&x(e.childNodes[i]);return a.adopt(e).id(a.eid(e.nodeName))}function b(t){return null==t.x&&(t.x=0,t.y=0,t.width=0,t.height=0),t.w=t.width,t.h=t.height,t.x2=t.x+t.width,t.y2=t.y+t.height,t.cx=t.x+t.width/2,t.cy=t.y+t.height/2,t}function v(t){return Math.abs(t)>1e-37?t:0}["fill","stroke"].forEach((function(t){var e={};e[t]=function(e){if(void 0===e)return this;if("string"==typeof e||a.Color.isRgb(e)||e&&"function"==typeof e.fill)this.attr(t,e);else for(var i=l[t].length-1;i>=0;i--)null!=e[l[t][i]]&&this.attr(l.prefix(t,l[t][i]),e[l[t][i]]);return this},a.extend(a.Element,a.FX,e)})),a.extend(a.Element,a.FX,{translate:function(t,e){return this.transform({x:t,y:e})},matrix:function(t){return this.attr("transform",new a.Matrix(6==arguments.length?[].slice.call(arguments):t))},opacity:function(t){return this.attr("opacity",t)},dx:function(t){return this.x(new a.Number(t).plus(this instanceof a.FX?0:this.x()),!0)},dy:function(t){return this.y(new a.Number(t).plus(this instanceof a.FX?0:this.y()),!0)}}),a.extend(a.Path,{length:function(){return this.node.getTotalLength()},pointAt:function(t){return this.node.getPointAtLength(t)}}),a.Set=a.invent({create:function(t){Array.isArray(t)?this.members=t:this.clear()},extend:{add:function(){for(var t=[].slice.call(arguments),e=0,i=t.length;e<i;e++)this.members.push(t[e]);return this},remove:function(t){var e=this.index(t);return e>-1&&this.members.splice(e,1),this},each:function(t){for(var e=0,i=this.members.length;e<i;e++)t.apply(this.members[e],[e,this.members]);return this},clear:function(){return this.members=[],this},length:function(){return this.members.length},has:function(t){return this.index(t)>=0},index:function(t){return this.members.indexOf(t)},get:function(t){return this.members[t]},first:function(){return this.get(0)},last:function(){return this.get(this.members.length-1)},valueOf:function(){return this.members}},construct:{set:function(t){return new a.Set(t)}}}),a.FX.Set=a.invent({create:function(t){this.set=t}}),a.Set.inherit=function(){var t=[];for(var e in a.Shape.prototype)"function"==typeof a.Shape.prototype[e]&&"function"!=typeof a.Set.prototype[e]&&t.push(e);for(var e in t.forEach((function(t){a.Set.prototype[t]=function(){for(var e=0,i=this.members.length;e<i;e++)this.members[e]&&"function"==typeof this.members[e][t]&&this.members[e][t].apply(this.members[e],arguments);return"animate"==t?this.fx||(this.fx=new a.FX.Set(this)):this}})),t=[],a.FX.prototype)"function"==typeof a.FX.prototype[e]&&"function"!=typeof a.FX.Set.prototype[e]&&t.push(e);t.forEach((function(t){a.FX.Set.prototype[t]=function(){for(var e=0,i=this.set.members.length;e<i;e++)this.set.members[e].fx[t].apply(this.set.members[e].fx,arguments);return this}}))},a.extend(a.Element,{}),a.extend(a.Element,{remember:function(t,e){if("object"===i(arguments[0]))for(var a in t)this.remember(a,t[a]);else{if(1==arguments.length)return this.memory()[t];this.memory()[t]=e}return this},forget:function(){if(0==arguments.length)this._memory={};else for(var t=arguments.length-1;t>=0;t--)delete this.memory()[arguments[t]];return this},memory:function(){return this._memory||(this._memory={})}}),a.get=function(t){var i=e.getElementById(function(t){var e=(t||"").toString().match(a.regex.reference);if(e)return e[1]}(t)||t);return a.adopt(i)},a.select=function(t,i){return new a.Set(a.utils.map((i||e).querySelectorAll(t),(function(t){return a.adopt(t)})))},a.extend(a.Parent,{select:function(t){return a.select(t,this.node)}});var m="abcdef".split("");if("function"!=typeof t.CustomEvent){var y=function(t,i){i=i||{bubbles:!1,cancelable:!1,detail:void 0};var a=e.createEvent("CustomEvent");return a.initCustomEvent(t,i.bubbles,i.cancelable,i.detail),a};y.prototype=t.Event.prototype,a.CustomEvent=y}else a.CustomEvent=t.CustomEvent;return a},"function"==typeof define&&define.amd?define((function(){return Et(Xt,Xt.document)})):"object"===("undefined"==typeof exports?"undefined":i(exports))&&"undefined"!=typeof module?module.exports=Xt.document?Et(Xt,Xt.document):function(t){return Et(t,t.document)}:Xt.SVG=Et(Xt,Xt.document),
/*! svg.filter.js - v2.0.2 - 2016-02-24
  * https://github.com/wout/svg.filter.js
  * Copyright (c) 2016 Wout Fierens; Licensed MIT */
function(){SVG.Filter=SVG.invent({create:"filter",inherit:SVG.Parent,extend:{source:"SourceGraphic",sourceAlpha:"SourceAlpha",background:"BackgroundImage",backgroundAlpha:"BackgroundAlpha",fill:"FillPaint",stroke:"StrokePaint",autoSetIn:!0,put:function(t,e){return this.add(t,e),!t.attr("in")&&this.autoSetIn&&t.attr("in",this.source),t.attr("result")||t.attr("result",t),t},blend:function(t,e,i){return this.put(new SVG.BlendEffect(t,e,i))},colorMatrix:function(t,e){return this.put(new SVG.ColorMatrixEffect(t,e))},convolveMatrix:function(t){return this.put(new SVG.ConvolveMatrixEffect(t))},componentTransfer:function(t){return this.put(new SVG.ComponentTransferEffect(t))},composite:function(t,e,i){return this.put(new SVG.CompositeEffect(t,e,i))},flood:function(t,e){return this.put(new SVG.FloodEffect(t,e))},offset:function(t,e){return this.put(new SVG.OffsetEffect(t,e))},image:function(t){return this.put(new SVG.ImageEffect(t))},merge:function(){var t=[void 0];for(var e in arguments)t.push(arguments[e]);return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect,t)))},gaussianBlur:function(t,e){return this.put(new SVG.GaussianBlurEffect(t,e))},morphology:function(t,e){return this.put(new SVG.MorphologyEffect(t,e))},diffuseLighting:function(t,e,i){return this.put(new SVG.DiffuseLightingEffect(t,e,i))},displacementMap:function(t,e,i,a,s){return this.put(new SVG.DisplacementMapEffect(t,e,i,a,s))},specularLighting:function(t,e,i,a){return this.put(new SVG.SpecularLightingEffect(t,e,i,a))},tile:function(){return this.put(new SVG.TileEffect)},turbulence:function(t,e,i,a,s){return this.put(new SVG.TurbulenceEffect(t,e,i,a,s))},toString:function(){return"url(#"+this.attr("id")+")"}}}),SVG.extend(SVG.Defs,{filter:function(t){var e=this.put(new SVG.Filter);return"function"==typeof t&&t.call(e,e),e}}),SVG.extend(SVG.Container,{filter:function(t){return this.defs().filter(t)}}),SVG.extend(SVG.Element,SVG.G,SVG.Nested,{filter:function(t){return this.filterer=t instanceof SVG.Element?t:this.doc().filter(t),this.doc()&&this.filterer.doc()!==this.doc()&&this.doc().defs().add(this.filterer),this.attr("filter",this.filterer),this.filterer},unfilter:function(t){return this.filterer&&!0===t&&this.filterer.remove(),delete this.filterer,this.attr("filter",null)}}),SVG.Effect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",t)},result:function(t){return null==t?this.attr("result"):this.attr("result",t)},toString:function(){return this.result()}}}),SVG.ParentEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Parent,extend:{in:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",t)},result:function(t){return null==t?this.attr("result"):this.attr("result",t)},toString:function(){return this.result()}}});var t={blend:function(t,e){return this.parent()&&this.parent().blend(this,t,e)},colorMatrix:function(t,e){return this.parent()&&this.parent().colorMatrix(t,e).in(this)},convolveMatrix:function(t){return this.parent()&&this.parent().convolveMatrix(t).in(this)},componentTransfer:function(t){return this.parent()&&this.parent().componentTransfer(t).in(this)},composite:function(t,e){return this.parent()&&this.parent().composite(this,t,e)},flood:function(t,e){return this.parent()&&this.parent().flood(t,e)},offset:function(t,e){return this.parent()&&this.parent().offset(t,e).in(this)},image:function(t){return this.parent()&&this.parent().image(t)},merge:function(){return this.parent()&&this.parent().merge.apply(this.parent(),[this].concat(arguments))},gaussianBlur:function(t,e){return this.parent()&&this.parent().gaussianBlur(t,e).in(this)},morphology:function(t,e){return this.parent()&&this.parent().morphology(t,e).in(this)},diffuseLighting:function(t,e,i){return this.parent()&&this.parent().diffuseLighting(t,e,i).in(this)},displacementMap:function(t,e,i,a){return this.parent()&&this.parent().displacementMap(this,t,e,i,a)},specularLighting:function(t,e,i,a){return this.parent()&&this.parent().specularLighting(t,e,i,a).in(this)},tile:function(){return this.parent()&&this.parent().tile().in(this)},turbulence:function(t,e,i,a,s){return this.parent()&&this.parent().turbulence(t,e,i,a,s).in(this)}};SVG.extend(SVG.Effect,t),SVG.extend(SVG.ParentEffect,t),SVG.ChildEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(t){this.attr("in",t)}}});var e={blend:function(t,e,i){this.attr({in:t,in2:e,mode:i||"normal"})},colorMatrix:function(t,e){"matrix"==t&&(e=s(e)),this.attr({type:t,values:void 0===e?null:e})},convolveMatrix:function(t){t=s(t),this.attr({order:Math.sqrt(t.split(" ").length),kernelMatrix:t})},composite:function(t,e,i){this.attr({in:t,in2:e,operator:i})},flood:function(t,e){this.attr("flood-color",t),null!=e&&this.attr("flood-opacity",e)},offset:function(t,e){this.attr({dx:t,dy:e})},image:function(t){this.attr("href",t,SVG.xlink)},displacementMap:function(t,e,i,a,s){this.attr({in:t,in2:e,scale:i,xChannelSelector:a,yChannelSelector:s})},gaussianBlur:function(t,e){null!=t||null!=e?this.attr("stdDeviation",r(Array.prototype.slice.call(arguments))):this.attr("stdDeviation","0 0")},morphology:function(t,e){this.attr({operator:t,radius:e})},tile:function(){},turbulence:function(t,e,i,a,s){this.attr({numOctaves:e,seed:i,stitchTiles:a,baseFrequency:t,type:s})}},i={merge:function(){var t;if(arguments[0]instanceof SVG.Set){var e=this;arguments[0].each((function(t){this instanceof SVG.MergeNode?e.put(this):(this instanceof SVG.Effect||this instanceof SVG.ParentEffect)&&e.put(new SVG.MergeNode(this))}))}else{t=Array.isArray(arguments[0])?arguments[0]:arguments;for(var i=0;i<t.length;i++)t[i]instanceof SVG.MergeNode?this.put(t[i]):this.put(new SVG.MergeNode(t[i]))}},componentTransfer:function(t){if(this.rgb=new SVG.Set,["r","g","b","a"].forEach(function(t){this[t]=new(SVG["Func"+t.toUpperCase()])("identity"),this.rgb.add(this[t]),this.node.appendChild(this[t].node)}.bind(this)),t)for(var e in t.rgb&&(["r","g","b"].forEach(function(e){this[e].attr(t.rgb)}.bind(this)),delete t.rgb),t)this[e].attr(t[e])},diffuseLighting:function(t,e,i){this.attr({surfaceScale:t,diffuseConstant:e,kernelUnitLength:i})},specularLighting:function(t,e,i,a){this.attr({surfaceScale:t,diffuseConstant:e,specularExponent:i,kernelUnitLength:a})}},a={distantLight:function(t,e){this.attr({azimuth:t,elevation:e})},pointLight:function(t,e,i){this.attr({x:t,y:e,z:i})},spotLight:function(t,e,i,a,s,r){this.attr({x:t,y:e,z:i,pointsAtX:a,pointsAtY:s,pointsAtZ:r})},mergeNode:function(t){this.attr("in",t)}};function s(t){return Array.isArray(t)&&(t=new SVG.Array(t)),t.toString().replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s+/g," ")}function r(t){if(!Array.isArray(t))return t;for(var e=0,i=t.length,a=[];e<i;e++)a.push(t[e]);return a.join(" ")}function o(){var t=function(){};for(var e in"function"==typeof arguments[arguments.length-1]&&(t=arguments[arguments.length-1],Array.prototype.splice.call(arguments,arguments.length-1,1)),arguments)for(var i in arguments[e])t(arguments[e][i],i,arguments[e])}["r","g","b","a"].forEach((function(t){a["Func"+t.toUpperCase()]=function(t){switch(this.attr("type",t),t){case"table":this.attr("tableValues",arguments[1]);break;case"linear":this.attr("slope",arguments[1]),this.attr("intercept",arguments[2]);break;case"gamma":this.attr("amplitude",arguments[1]),this.attr("exponent",arguments[2]),this.attr("offset",arguments[2])}}})),o(e,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.Effect,extend:{}})})),o(i,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.ParentEffect,extend:{}})})),o(a,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments)},inherit:SVG.ChildEffect,extend:{}})})),SVG.extend(SVG.MergeEffect,{in:function(t){return t instanceof SVG.MergeNode?this.add(t,0):this.add(new SVG.MergeNode(t),0),this}}),SVG.extend(SVG.CompositeEffect,SVG.BlendEffect,SVG.DisplacementMapEffect,{in2:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in2")+'"]').get(0)||this.attr("in2"):this.attr("in2",t)}}),SVG.filter={sepiatone:[.343,.669,.119,0,0,.249,.626,.13,0,0,.172,.334,.111,0,0,0,0,0,1,0]}}.call(void 0),function(){function t(t,s,r,o,n,l,h){for(var c=t.slice(s,r||h),d=o.slice(n,l||h),g=0,u={pos:[0,0],start:[0,0]},f={pos:[0,0],start:[0,0]};;){if(c[g]=e.call(u,c[g]),d[g]=e.call(f,d[g]),c[g][0]!=d[g][0]||"M"==c[g][0]||"A"==c[g][0]&&(c[g][4]!=d[g][4]||c[g][5]!=d[g][5])?(Array.prototype.splice.apply(c,[g,1].concat(a.call(u,c[g]))),Array.prototype.splice.apply(d,[g,1].concat(a.call(f,d[g])))):(c[g]=i.call(u,c[g]),d[g]=i.call(f,d[g])),++g==c.length&&g==d.length)break;g==c.length&&c.push(["C",u.pos[0],u.pos[1],u.pos[0],u.pos[1],u.pos[0],u.pos[1]]),g==d.length&&d.push(["C",f.pos[0],f.pos[1],f.pos[0],f.pos[1],f.pos[0],f.pos[1]])}return{start:c,dest:d}}function e(t){switch(t[0]){case"z":case"Z":t[0]="L",t[1]=this.start[0],t[2]=this.start[1];break;case"H":t[0]="L",t[2]=this.pos[1];break;case"V":t[0]="L",t[2]=t[1],t[1]=this.pos[0];break;case"T":t[0]="Q",t[3]=t[1],t[4]=t[2],t[1]=this.reflection[1],t[2]=this.reflection[0];break;case"S":t[0]="C",t[6]=t[4],t[5]=t[3],t[4]=t[2],t[3]=t[1],t[2]=this.reflection[1],t[1]=this.reflection[0]}return t}function i(t){var e=t.length;return this.pos=[t[e-2],t[e-1]],-1!="SCQT".indexOf(t[0])&&(this.reflection=[2*this.pos[0]-t[e-4],2*this.pos[1]-t[e-3]]),t}function a(t){var e=[t];switch(t[0]){case"M":return this.pos=this.start=[t[1],t[2]],e;case"L":t[5]=t[3]=t[1],t[6]=t[4]=t[2],t[1]=this.pos[0],t[2]=this.pos[1];break;case"Q":t[6]=t[4],t[5]=t[3],t[4]=1*t[4]/3+2*t[2]/3,t[3]=1*t[3]/3+2*t[1]/3,t[2]=1*this.pos[1]/3+2*t[2]/3,t[1]=1*this.pos[0]/3+2*t[1]/3;break;case"A":e=function(t,e){var i,a,s,r,o,n,l,h,c,d,g,u,f,p,x,b,v,m,y,w,k,A,S,C,L,P,T=Math.abs(e[1]),M=Math.abs(e[2]),I=e[3]%360,z=e[4],X=e[5],E=e[6],Y=e[7],F=new SVG.Point(t),R=new SVG.Point(E,Y),D=[];if(0===T||0===M||F.x===R.x&&F.y===R.y)return[["C",F.x,F.y,R.x,R.y,R.x,R.y]];i=new SVG.Point((F.x-R.x)/2,(F.y-R.y)/2).transform((new SVG.Matrix).rotate(I)),(a=i.x*i.x/(T*T)+i.y*i.y/(M*M))>1&&(T*=a=Math.sqrt(a),M*=a);s=(new SVG.Matrix).rotate(I).scale(1/T,1/M).rotate(-I),F=F.transform(s),R=R.transform(s),r=[R.x-F.x,R.y-F.y],n=r[0]*r[0]+r[1]*r[1],o=Math.sqrt(n),r[0]/=o,r[1]/=o,l=n<4?Math.sqrt(1-n/4):0,z===X&&(l*=-1);h=new SVG.Point((R.x+F.x)/2+l*-r[1],(R.y+F.y)/2+l*r[0]),c=new SVG.Point(F.x-h.x,F.y-h.y),d=new SVG.Point(R.x-h.x,R.y-h.y),g=Math.acos(c.x/Math.sqrt(c.x*c.x+c.y*c.y)),c.y<0&&(g*=-1);u=Math.acos(d.x/Math.sqrt(d.x*d.x+d.y*d.y)),d.y<0&&(u*=-1);X&&g>u&&(u+=2*Math.PI);!X&&g<u&&(u-=2*Math.PI);for(p=Math.ceil(2*Math.abs(g-u)/Math.PI),b=[],v=g,f=(u-g)/p,x=4*Math.tan(f/4)/3,k=0;k<=p;k++)y=Math.cos(v),m=Math.sin(v),w=new SVG.Point(h.x+y,h.y+m),b[k]=[new SVG.Point(w.x+x*m,w.y-x*y),w,new SVG.Point(w.x-x*m,w.y+x*y)],v+=f;for(b[0][0]=b[0][1].clone(),b[b.length-1][2]=b[b.length-1][1].clone(),s=(new SVG.Matrix).rotate(I).scale(T,M).rotate(-I),k=0,A=b.length;k<A;k++)b[k][0]=b[k][0].transform(s),b[k][1]=b[k][1].transform(s),b[k][2]=b[k][2].transform(s);for(k=1,A=b.length;k<A;k++)S=(w=b[k-1][2]).x,C=w.y,L=(w=b[k][0]).x,P=w.y,E=(w=b[k][1]).x,Y=w.y,D.push(["C",S,C,L,P,E,Y]);return D}(this.pos,t),t=e[0]}return t[0]="C",this.pos=[t[5],t[6]],this.reflection=[2*t[5]-t[3],2*t[6]-t[4]],e}function s(t,e){if(!1===e)return!1;for(var i=e,a=t.length;i<a;++i)if("M"==t[i][0])return i;return!1}SVG.extend(SVG.PathArray,{morph:function(e){for(var i=this.value,a=this.parse(e),r=0,o=0,n=!1,l=!1;!1!==r||!1!==o;){var h;n=s(i,!1!==r&&r+1),l=s(a,!1!==o&&o+1),!1===r&&(r=0==(h=new SVG.PathArray(c.start).bbox()).height||0==h.width?i.push(i[0])-1:i.push(["M",h.x+h.width/2,h.y+h.height/2])-1),!1===o&&(o=0==(h=new SVG.PathArray(c.dest).bbox()).height||0==h.width?a.push(a[0])-1:a.push(["M",h.x+h.width/2,h.y+h.height/2])-1);var c=t(i,r,n,a,o,l);i=i.slice(0,r).concat(c.start,!1===n?[]:i.slice(n)),a=a.slice(0,o).concat(c.dest,!1===l?[]:a.slice(l)),r=!1!==n&&r+c.start.length,o=!1!==l&&o+c.dest.length}return this.value=i,this.destination=new SVG.PathArray,this.destination.value=a,this}})}(),
/*! svg.draggable.js - v2.2.2 - 2019-01-08
  * https://github.com/svgdotjs/svg.draggable.js
  * Copyright (c) 2019 Wout Fierens; Licensed MIT */
function(){function t(t){t.remember("_draggable",this),this.el=t}t.prototype.init=function(t,e){var i=this;this.constraint=t,this.value=e,this.el.on("mousedown.drag",(function(t){i.start(t)})),this.el.on("touchstart.drag",(function(t){i.start(t)}))},t.prototype.transformPoint=function(t,e){var i=(t=t||window.event).changedTouches&&t.changedTouches[0]||t;return this.p.x=i.clientX-(e||0),this.p.y=i.clientY,this.p.matrixTransform(this.m)},t.prototype.getBBox=function(){var t=this.el.bbox();return this.el instanceof SVG.Nested&&(t=this.el.rbox()),(this.el instanceof SVG.G||this.el instanceof SVG.Use||this.el instanceof SVG.Nested)&&(t.x=this.el.x(),t.y=this.el.y()),t},t.prototype.start=function(t){if("click"!=t.type&&"mousedown"!=t.type&&"mousemove"!=t.type||1==(t.which||t.buttons)){var e=this;if(this.el.fire("beforedrag",{event:t,handler:this}),!this.el.event().defaultPrevented){t.preventDefault(),t.stopPropagation(),this.parent=this.parent||this.el.parent(SVG.Nested)||this.el.parent(SVG.Doc),this.p=this.parent.node.createSVGPoint(),this.m=this.el.node.getScreenCTM().inverse();var i,a=this.getBBox();if(this.el instanceof SVG.Text)switch(i=this.el.node.getComputedTextLength(),this.el.attr("text-anchor")){case"middle":i/=2;break;case"start":i=0}this.startPoints={point:this.transformPoint(t,i),box:a,transform:this.el.transform()},SVG.on(window,"mousemove.drag",(function(t){e.drag(t)})),SVG.on(window,"touchmove.drag",(function(t){e.drag(t)})),SVG.on(window,"mouseup.drag",(function(t){e.end(t)})),SVG.on(window,"touchend.drag",(function(t){e.end(t)})),this.el.fire("dragstart",{event:t,p:this.startPoints.point,m:this.m,handler:this})}}},t.prototype.drag=function(t){var e=this.getBBox(),i=this.transformPoint(t),a=this.startPoints.box.x+i.x-this.startPoints.point.x,s=this.startPoints.box.y+i.y-this.startPoints.point.y,r=this.constraint,o=i.x-this.startPoints.point.x,n=i.y-this.startPoints.point.y;if(this.el.fire("dragmove",{event:t,p:i,m:this.m,handler:this}),this.el.event().defaultPrevented)return i;if("function"==typeof r){var l=r.call(this.el,a,s,this.m);"boolean"==typeof l&&(l={x:l,y:l}),!0===l.x?this.el.x(a):!1!==l.x&&this.el.x(l.x),!0===l.y?this.el.y(s):!1!==l.y&&this.el.y(l.y)}else"object"==typeof r&&(null!=r.minX&&a<r.minX?o=(a=r.minX)-this.startPoints.box.x:null!=r.maxX&&a>r.maxX-e.width&&(o=(a=r.maxX-e.width)-this.startPoints.box.x),null!=r.minY&&s<r.minY?n=(s=r.minY)-this.startPoints.box.y:null!=r.maxY&&s>r.maxY-e.height&&(n=(s=r.maxY-e.height)-this.startPoints.box.y),null!=r.snapToGrid&&(a-=a%r.snapToGrid,s-=s%r.snapToGrid,o-=o%r.snapToGrid,n-=n%r.snapToGrid),this.el instanceof SVG.G?this.el.matrix(this.startPoints.transform).transform({x:o,y:n},!0):this.el.move(a,s));return i},t.prototype.end=function(t){var e=this.drag(t);this.el.fire("dragend",{event:t,p:e,m:this.m,handler:this}),SVG.off(window,"mousemove.drag"),SVG.off(window,"touchmove.drag"),SVG.off(window,"mouseup.drag"),SVG.off(window,"touchend.drag")},SVG.extend(SVG.Element,{draggable:function(e,i){"function"!=typeof e&&"object"!=typeof e||(i=e,e=!0);var a=this.remember("_draggable")||new t(this);return(e=void 0===e||e)?a.init(i||{},e):(this.off("mousedown.drag"),this.off("touchstart.drag")),this}})}.call(void 0),function(){function t(t){this.el=t,t.remember("_selectHandler",this),this.pointSelection={isSelected:!1},this.rectSelection={isSelected:!1},this.pointsList={lt:[0,0],rt:["width",0],rb:["width","height"],lb:[0,"height"],t:["width",0],r:["width","height"],b:["width","height"],l:[0,"height"]},this.pointCoord=function(t,e,i){var a="string"!=typeof t?t:e[t];return i?a/2:a},this.pointCoords=function(t,e){var i=this.pointsList[t];return{x:this.pointCoord(i[0],e,"t"===t||"b"===t),y:this.pointCoord(i[1],e,"r"===t||"l"===t)}}}t.prototype.init=function(t,e){var i=this.el.bbox();this.options={};var a=this.el.selectize.defaults.points;for(var s in this.el.selectize.defaults)this.options[s]=this.el.selectize.defaults[s],void 0!==e[s]&&(this.options[s]=e[s]);var r=["points","pointsExclude"];for(var s in r){var o=this.options[r[s]];"string"==typeof o?o=o.length>0?o.split(/\s*,\s*/i):[]:"boolean"==typeof o&&"points"===r[s]&&(o=o?a:[]),this.options[r[s]]=o}this.options.points=[a,this.options.points].reduce((function(t,e){return t.filter((function(t){return e.indexOf(t)>-1}))})),this.options.points=[this.options.points,this.options.pointsExclude].reduce((function(t,e){return t.filter((function(t){return e.indexOf(t)<0}))})),this.parent=this.el.parent(),this.nested=this.nested||this.parent.group(),this.nested.matrix(new SVG.Matrix(this.el).translate(i.x,i.y)),this.options.deepSelect&&-1!==["line","polyline","polygon"].indexOf(this.el.type)?this.selectPoints(t):this.selectRect(t),this.observe(),this.cleanup()},t.prototype.selectPoints=function(t){return this.pointSelection.isSelected=t,this.pointSelection.set||(this.pointSelection.set=this.parent.set(),this.drawPoints()),this},t.prototype.getPointArray=function(){var t=this.el.bbox();return this.el.array().valueOf().map((function(e){return[e[0]-t.x,e[1]-t.y]}))},t.prototype.drawPoints=function(){for(var t=this,e=this.getPointArray(),i=0,a=e.length;i<a;++i){var s=function(e){return function(i){(i=i||window.event).preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation();var a=i.pageX||i.touches[0].pageX,s=i.pageY||i.touches[0].pageY;t.el.fire("point",{x:a,y:s,i:e,event:i})}}(i),r=this.drawPoint(e[i][0],e[i][1]).addClass(this.options.classPoints).addClass(this.options.classPoints+"_point").on("touchstart",s).on("mousedown",s);this.pointSelection.set.add(r)}},t.prototype.drawPoint=function(t,e){var i=this.options.pointType;switch(i){case"circle":return this.drawCircle(t,e);case"rect":return this.drawRect(t,e);default:if("function"==typeof i)return i.call(this,t,e);throw new Error("Unknown "+i+" point type!")}},t.prototype.drawCircle=function(t,e){return this.nested.circle(this.options.pointSize).center(t,e)},t.prototype.drawRect=function(t,e){return this.nested.rect(this.options.pointSize,this.options.pointSize).center(t,e)},t.prototype.updatePointSelection=function(){var t=this.getPointArray();this.pointSelection.set.each((function(e){this.cx()===t[e][0]&&this.cy()===t[e][1]||this.center(t[e][0],t[e][1])}))},t.prototype.updateRectSelection=function(){var t=this,e=this.el.bbox();if(this.rectSelection.set.get(0).attr({width:e.width,height:e.height}),this.options.points.length&&this.options.points.map((function(i,a){var s=t.pointCoords(i,e);t.rectSelection.set.get(a+1).center(s.x,s.y)})),this.options.rotationPoint){var i=this.rectSelection.set.length();this.rectSelection.set.get(i-1).center(e.width/2,20)}},t.prototype.selectRect=function(t){var e=this,i=this.el.bbox();function a(t){return function(i){(i=i||window.event).preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation();var a=i.pageX||i.touches[0].pageX,s=i.pageY||i.touches[0].pageY;e.el.fire(t,{x:a,y:s,event:i})}}if(this.rectSelection.isSelected=t,this.rectSelection.set=this.rectSelection.set||this.parent.set(),this.rectSelection.set.get(0)||this.rectSelection.set.add(this.nested.rect(i.width,i.height).addClass(this.options.classRect)),this.options.points.length&&this.rectSelection.set.length()<2){this.options.points.map((function(t,s){var r=e.pointCoords(t,i),o=e.drawPoint(r.x,r.y).attr("class",e.options.classPoints+"_"+t).on("mousedown",a(t)).on("touchstart",a(t));e.rectSelection.set.add(o)})),this.rectSelection.set.each((function(){this.addClass(e.options.classPoints)}))}if(this.options.rotationPoint&&(this.options.points&&!this.rectSelection.set.get(9)||!this.options.points&&!this.rectSelection.set.get(1))){var s=function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation();var i=t.pageX||t.touches[0].pageX,a=t.pageY||t.touches[0].pageY;e.el.fire("rot",{x:i,y:a,event:t})},r=this.drawPoint(i.width/2,20).attr("class",this.options.classPoints+"_rot").on("touchstart",s).on("mousedown",s);this.rectSelection.set.add(r)}},t.prototype.handler=function(){var t=this.el.bbox();this.nested.matrix(new SVG.Matrix(this.el).translate(t.x,t.y)),this.rectSelection.isSelected&&this.updateRectSelection(),this.pointSelection.isSelected&&this.updatePointSelection()},t.prototype.observe=function(){var t=this;if(MutationObserver)if(this.rectSelection.isSelected||this.pointSelection.isSelected)this.observerInst=this.observerInst||new MutationObserver((function(){t.handler()})),this.observerInst.observe(this.el.node,{attributes:!0});else try{this.observerInst.disconnect(),delete this.observerInst}catch(t){}else this.el.off("DOMAttrModified.select"),(this.rectSelection.isSelected||this.pointSelection.isSelected)&&this.el.on("DOMAttrModified.select",(function(){t.handler()}))},t.prototype.cleanup=function(){!this.rectSelection.isSelected&&this.rectSelection.set&&(this.rectSelection.set.each((function(){this.remove()})),this.rectSelection.set.clear(),delete this.rectSelection.set),!this.pointSelection.isSelected&&this.pointSelection.set&&(this.pointSelection.set.each((function(){this.remove()})),this.pointSelection.set.clear(),delete this.pointSelection.set),this.pointSelection.isSelected||this.rectSelection.isSelected||(this.nested.remove(),delete this.nested)},SVG.extend(SVG.Element,{selectize:function(e,i){return"object"==typeof e&&(i=e,e=!0),(this.remember("_selectHandler")||new t(this)).init(void 0===e||e,i||{}),this}}),SVG.Element.prototype.selectize.defaults={points:["lt","rt","rb","lb","t","r","b","l"],pointsExclude:[],classRect:"svg_select_boundingRect",classPoints:"svg_select_points",pointSize:7,rotationPoint:!0,deepSelect:!1,pointType:"circle"}}(),function(){(function(){function t(t){t.remember("_resizeHandler",this),this.el=t,this.parameters={},this.lastUpdateCall=null,this.p=t.doc().node.createSVGPoint()}t.prototype.transformPoint=function(t,e,i){return this.p.x=t-(this.offset.x-window.pageXOffset),this.p.y=e-(this.offset.y-window.pageYOffset),this.p.matrixTransform(i||this.m)},t.prototype._extractPosition=function(t){return{x:null!=t.clientX?t.clientX:t.touches[0].clientX,y:null!=t.clientY?t.clientY:t.touches[0].clientY}},t.prototype.init=function(t){var e=this;if(this.stop(),"stop"!==t){for(var i in this.options={},this.el.resize.defaults)this.options[i]=this.el.resize.defaults[i],void 0!==t[i]&&(this.options[i]=t[i]);this.el.on("lt.resize",(function(t){e.resize(t||window.event)})),this.el.on("rt.resize",(function(t){e.resize(t||window.event)})),this.el.on("rb.resize",(function(t){e.resize(t||window.event)})),this.el.on("lb.resize",(function(t){e.resize(t||window.event)})),this.el.on("t.resize",(function(t){e.resize(t||window.event)})),this.el.on("r.resize",(function(t){e.resize(t||window.event)})),this.el.on("b.resize",(function(t){e.resize(t||window.event)})),this.el.on("l.resize",(function(t){e.resize(t||window.event)})),this.el.on("rot.resize",(function(t){e.resize(t||window.event)})),this.el.on("point.resize",(function(t){e.resize(t||window.event)})),this.update()}},t.prototype.stop=function(){return this.el.off("lt.resize"),this.el.off("rt.resize"),this.el.off("rb.resize"),this.el.off("lb.resize"),this.el.off("t.resize"),this.el.off("r.resize"),this.el.off("b.resize"),this.el.off("l.resize"),this.el.off("rot.resize"),this.el.off("point.resize"),this},t.prototype.resize=function(t){var e=this;this.m=this.el.node.getScreenCTM().inverse(),this.offset={x:window.pageXOffset,y:window.pageYOffset};var i=this._extractPosition(t.detail.event);if(this.parameters={type:this.el.type,p:this.transformPoint(i.x,i.y),x:t.detail.x,y:t.detail.y,box:this.el.bbox(),rotation:this.el.transform().rotation},"text"===this.el.type&&(this.parameters.fontSize=this.el.attr()["font-size"]),void 0!==t.detail.i){var a=this.el.array().valueOf();this.parameters.i=t.detail.i,this.parameters.pointCoords=[a[t.detail.i][0],a[t.detail.i][1]]}switch(t.type){case"lt":this.calc=function(t,e){var i=this.snapToGrid(t,e);if(this.parameters.box.width-i[0]>0&&this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-i[0]);i=this.checkAspectRatio(i),this.el.move(this.parameters.box.x+i[0],this.parameters.box.y+i[1]).size(this.parameters.box.width-i[0],this.parameters.box.height-i[1])}};break;case"rt":this.calc=function(t,e){var i=this.snapToGrid(t,e,2);if(this.parameters.box.width+i[0]>0&&this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+i[0]);i=this.checkAspectRatio(i,!0),this.el.move(this.parameters.box.x,this.parameters.box.y+i[1]).size(this.parameters.box.width+i[0],this.parameters.box.height-i[1])}};break;case"rb":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.width+i[0]>0&&this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+i[0]);i=this.checkAspectRatio(i),this.el.move(this.parameters.box.x,this.parameters.box.y).size(this.parameters.box.width+i[0],this.parameters.box.height+i[1])}};break;case"lb":this.calc=function(t,e){var i=this.snapToGrid(t,e,1);if(this.parameters.box.width-i[0]>0&&this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-i[0]);i=this.checkAspectRatio(i,!0),this.el.move(this.parameters.box.x+i[0],this.parameters.box.y).size(this.parameters.box.width-i[0],this.parameters.box.height+i[1])}};break;case"t":this.calc=function(t,e){var i=this.snapToGrid(t,e,2);if(this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y+i[1]).height(this.parameters.box.height-i[1])}};break;case"r":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.width+i[0]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y).width(this.parameters.box.width+i[0])}};break;case"b":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y).height(this.parameters.box.height+i[1])}};break;case"l":this.calc=function(t,e){var i=this.snapToGrid(t,e,1);if(this.parameters.box.width-i[0]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x+i[0],this.parameters.box.y).width(this.parameters.box.width-i[0])}};break;case"rot":this.calc=function(t,e){var i=t+this.parameters.p.x,a=e+this.parameters.p.y,s=Math.atan2(this.parameters.p.y-this.parameters.box.y-this.parameters.box.height/2,this.parameters.p.x-this.parameters.box.x-this.parameters.box.width/2),r=Math.atan2(a-this.parameters.box.y-this.parameters.box.height/2,i-this.parameters.box.x-this.parameters.box.width/2),o=this.parameters.rotation+180*(r-s)/Math.PI+this.options.snapToAngle/2;this.el.center(this.parameters.box.cx,this.parameters.box.cy).rotate(o-o%this.options.snapToAngle,this.parameters.box.cx,this.parameters.box.cy)};break;case"point":this.calc=function(t,e){var i=this.snapToGrid(t,e,this.parameters.pointCoords[0],this.parameters.pointCoords[1]),a=this.el.array().valueOf();a[this.parameters.i][0]=this.parameters.pointCoords[0]+i[0],a[this.parameters.i][1]=this.parameters.pointCoords[1]+i[1],this.el.plot(a)}}this.el.fire("resizestart",{dx:this.parameters.x,dy:this.parameters.y,event:t}),SVG.on(window,"touchmove.resize",(function(t){e.update(t||window.event)})),SVG.on(window,"touchend.resize",(function(){e.done()})),SVG.on(window,"mousemove.resize",(function(t){e.update(t||window.event)})),SVG.on(window,"mouseup.resize",(function(){e.done()}))},t.prototype.update=function(t){if(t){var e=this._extractPosition(t),i=this.transformPoint(e.x,e.y),a=i.x-this.parameters.p.x,s=i.y-this.parameters.p.y;this.lastUpdateCall=[a,s],this.calc(a,s),this.el.fire("resizing",{dx:a,dy:s,event:t})}else this.lastUpdateCall&&this.calc(this.lastUpdateCall[0],this.lastUpdateCall[1])},t.prototype.done=function(){this.lastUpdateCall=null,SVG.off(window,"mousemove.resize"),SVG.off(window,"mouseup.resize"),SVG.off(window,"touchmove.resize"),SVG.off(window,"touchend.resize"),this.el.fire("resizedone")},t.prototype.snapToGrid=function(t,e,i,a){var s;return void 0!==a?s=[(i+t)%this.options.snapToGrid,(a+e)%this.options.snapToGrid]:(i=null==i?3:i,s=[(this.parameters.box.x+t+(1&i?0:this.parameters.box.width))%this.options.snapToGrid,(this.parameters.box.y+e+(2&i?0:this.parameters.box.height))%this.options.snapToGrid]),t<0&&(s[0]-=this.options.snapToGrid),e<0&&(s[1]-=this.options.snapToGrid),t-=Math.abs(s[0])<this.options.snapToGrid/2?s[0]:s[0]-(t<0?-this.options.snapToGrid:this.options.snapToGrid),e-=Math.abs(s[1])<this.options.snapToGrid/2?s[1]:s[1]-(e<0?-this.options.snapToGrid:this.options.snapToGrid),this.constraintToBox(t,e,i,a)},t.prototype.constraintToBox=function(t,e,i,a){var s,r,o=this.options.constraint||{};return void 0!==a?(s=i,r=a):(s=this.parameters.box.x+(1&i?0:this.parameters.box.width),r=this.parameters.box.y+(2&i?0:this.parameters.box.height)),void 0!==o.minX&&s+t<o.minX&&(t=o.minX-s),void 0!==o.maxX&&s+t>o.maxX&&(t=o.maxX-s),void 0!==o.minY&&r+e<o.minY&&(e=o.minY-r),void 0!==o.maxY&&r+e>o.maxY&&(e=o.maxY-r),[t,e]},t.prototype.checkAspectRatio=function(t,e){if(!this.options.saveAspectRatio)return t;var i=t.slice(),a=this.parameters.box.width/this.parameters.box.height,s=this.parameters.box.width+t[0],r=this.parameters.box.height-t[1],o=s/r;return o<a?(i[1]=s/a-this.parameters.box.height,e&&(i[1]=-i[1])):o>a&&(i[0]=this.parameters.box.width-r*a,e&&(i[0]=-i[0])),i},SVG.extend(SVG.Element,{resize:function(e){return(this.remember("_resizeHandler")||new t(this)).init(e||{}),this}}),SVG.Element.prototype.resize.defaults={snapToAngle:.1,snapToGrid:1,constraint:{},saveAspectRatio:!1}}).call(this)}(),void 0===window.Apex&&(window.Apex={});var Ot=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"initModules",value:function(){this.ctx.publicMethods=["updateOptions","updateSeries","appendData","appendSeries","toggleSeries","showSeries","hideSeries","setLocale","resetSeries","zoomX","toggleDataPointSelection","dataURI","exportToCSV","addXaxisAnnotation","addYaxisAnnotation","addPointAnnotation","clearAnnotations","removeAnnotation","paper","destroy"],this.ctx.eventList=["click","mousedown","mousemove","mouseleave","touchstart","touchmove","touchleave","mouseup","touchend"],this.ctx.animations=new b(this.ctx),this.ctx.axes=new J(this.ctx),this.ctx.core=new Dt(this.ctx.el,this.ctx),this.ctx.config=new X({}),this.ctx.data=new N(this.ctx),this.ctx.grid=new j(this.ctx),this.ctx.graphics=new m(this.ctx),this.ctx.coreUtils=new y(this.ctx),this.ctx.crosshairs=new Q(this.ctx),this.ctx.events=new Z(this.ctx),this.ctx.exports=new G(this.ctx),this.ctx.localization=new $(this.ctx),this.ctx.options=new L,this.ctx.responsive=new K(this.ctx),this.ctx.series=new O(this.ctx),this.ctx.theme=new tt(this.ctx),this.ctx.formatters=new W(this.ctx),this.ctx.titleSubtitle=new et(this.ctx),this.ctx.legend=new lt(this.ctx),this.ctx.toolbar=new ht(this.ctx),this.ctx.tooltip=new bt(this.ctx),this.ctx.dimensions=new ot(this.ctx),this.ctx.updateHelpers=new Ht(this.ctx),this.ctx.zoomPanSelection=new ct(this.ctx),this.ctx.w.globals.tooltip=new bt(this.ctx)}}]),t}(),Nt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"clear",value:function(t){var e=t.isUpdating;this.ctx.zoomPanSelection&&this.ctx.zoomPanSelection.destroy(),this.ctx.toolbar&&this.ctx.toolbar.destroy(),this.ctx.animations=null,this.ctx.axes=null,this.ctx.annotations=null,this.ctx.core=null,this.ctx.data=null,this.ctx.grid=null,this.ctx.series=null,this.ctx.responsive=null,this.ctx.theme=null,this.ctx.formatters=null,this.ctx.titleSubtitle=null,this.ctx.legend=null,this.ctx.dimensions=null,this.ctx.options=null,this.ctx.crosshairs=null,this.ctx.zoomPanSelection=null,this.ctx.updateHelpers=null,this.ctx.toolbar=null,this.ctx.localization=null,this.ctx.w.globals.tooltip=null,this.clearDomElements({isUpdating:e})}},{key:"killSVG",value:function(t){t.each((function(t,e){this.removeClass("*"),this.off(),this.stop()}),!0),t.ungroup(),t.clear()}},{key:"clearDomElements",value:function(t){var e=this,i=t.isUpdating,a=this.w.globals.dom.Paper.node;a.parentNode&&a.parentNode.parentNode&&!i&&(a.parentNode.parentNode.style.minHeight="unset");var s=this.w.globals.dom.baseEl;s&&this.ctx.eventList.forEach((function(t){s.removeEventListener(t,e.ctx.events.documentEvent)}));var r=this.w.globals.dom;if(null!==this.ctx.el)for(;this.ctx.el.firstChild;)this.ctx.el.removeChild(this.ctx.el.firstChild);this.killSVG(r.Paper),r.Paper.remove(),r.elWrap=null,r.elGraphical=null,r.elAnnotations=null,r.elLegendWrap=null,r.baseEl=null,r.elGridRect=null,r.elGridRectMask=null,r.elGridRectMarkerMask=null,r.elForecastMask=null,r.elNonForecastMask=null,r.elDefs=null}}]),t}(),Wt=new WeakMap;var Bt=function(){function t(e,i){a(this,t),this.opts=i,this.ctx=this,this.w=new Y(i).init(),this.el=e,this.w.globals.cuid=x.randomId(),this.w.globals.chartID=this.w.config.chart.id?x.escapeString(this.w.config.chart.id):this.w.globals.cuid,new Ot(this).initModules(),this.create=x.bind(this.create,this),this.windowResizeHandler=this._windowResizeHandler.bind(this),this.parentResizeHandler=this._parentResizeCallback.bind(this)}return r(t,[{key:"render",value:function(){var t=this;return new Promise((function(e,i){if(null!==t.el){void 0===Apex._chartInstances&&(Apex._chartInstances=[]),t.w.config.chart.id&&Apex._chartInstances.push({id:t.w.globals.chartID,group:t.w.config.chart.group,chart:t}),t.setLocale(t.w.config.chart.defaultLocale);var a=t.w.config.chart.events.beforeMount;if("function"==typeof a&&a(t,t.w),t.events.fireEvent("beforeMount",[t,t.w]),window.addEventListener("resize",t.windowResizeHandler),function(t,e){var i=!1;if(t.nodeType!==Node.DOCUMENT_FRAGMENT_NODE){var a=t.getBoundingClientRect();"none"!==t.style.display&&0!==a.width||(i=!0)}var s=new ResizeObserver((function(a){i&&e.call(t,a),i=!0}));t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?Array.from(t.children).forEach((function(t){return s.observe(t)})):s.observe(t),Wt.set(e,s)}(t.el.parentNode,t.parentResizeHandler),!t.css){var s=t.el.getRootNode&&t.el.getRootNode(),r=x.is("ShadowRoot",s),o=t.el.ownerDocument,n=o.getElementById("apexcharts-css");!r&&n||(t.css=document.createElement("style"),t.css.id="apexcharts-css",t.css.textContent='@keyframes opaque {\n  0% {\n      opacity: 0\n  }\n\n  to {\n      opacity: 1\n  }\n}\n\n@keyframes resizeanim {\n  0%,to {\n      opacity: 0\n  }\n}\n\n.apexcharts-canvas {\n  position: relative;\n  user-select: none\n}\n\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0,0,0,.5);\n  box-shadow: 0 0 1px rgba(255,255,255,.5);\n  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5)\n}\n\n.apexcharts-inner {\n  position: relative\n}\n\n.apexcharts-text tspan {\n  font-family: inherit\n}\n\n.legend-mouseover-inactive {\n  transition: .15s ease all;\n  opacity: .2\n}\n\n.apexcharts-legend-text {\n  padding-left: 15px;\n  margin-left: -15px;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255,255,255,.96)\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30,30,30,.8)\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #eceff1;\n  border-bottom: 1px solid #ddd\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0,0,0,.7);\n  border-bottom: 1px solid #333\n}\n\n.apexcharts-tooltip-text-goals-value,.apexcharts-tooltip-text-y-value,.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  margin-left: 5px;\n  font-weight: 600\n}\n\n.apexcharts-tooltip-text-goals-label:empty,.apexcharts-tooltip-text-goals-value:empty,.apexcharts-tooltip-text-y-label:empty,.apexcharts-tooltip-text-y-value:empty,.apexcharts-tooltip-text-z-value:empty,.apexcharts-tooltip-title:empty {\n  display: none\n}\n\n.apexcharts-tooltip-text-goals-label,.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px\n}\n\n.apexcharts-tooltip-goals-group,.apexcharts-tooltip-text-goals-label,.apexcharts-tooltip-text-goals-value {\n  display: flex\n}\n\n.apexcharts-tooltip-text-goals-label:not(:empty),.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0;\n  margin-right: 10px;\n  border-radius: 50%\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px\n}\n\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0!important\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px\n}\n\n.apexcharts-custom-tooltip,.apexcharts-tooltip-box {\n  padding: 4px 8px\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: 700\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px\n}\n\n.apexcharts-xaxistooltip,.apexcharts-yaxistooltip {\n  opacity: 0;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #eceff1;\n  border: 1px solid #90a4ae\n}\n\n.apexcharts-xaxistooltip {\n  padding: 9px 10px;\n  transition: .15s ease all\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0,0,0,.7);\n  border: 1px solid rgba(0,0,0,.5);\n  color: #fff\n}\n\n.apexcharts-xaxistooltip:after,.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-left: -6px\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-left: -7px\n}\n\n.apexcharts-xaxistooltip-bottom:after,.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%\n}\n\n.apexcharts-xaxistooltip-top:after,.apexcharts-xaxistooltip-top:before {\n  top: 100%\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-yaxistooltip {\n  padding: 4px 10px\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0,0,0,.7);\n  border: 1px solid rgba(0,0,0,.5);\n  color: #fff\n}\n\n.apexcharts-yaxistooltip:after,.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-top: -6px\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-top: -7px\n}\n\n.apexcharts-yaxistooltip-left:after,.apexcharts-yaxistooltip-left:before {\n  left: 100%\n}\n\n.apexcharts-yaxistooltip-right:after,.apexcharts-yaxistooltip-right:before {\n  right: 100%\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none\n}\n\n.apexcharts-xcrosshairs,.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: .15s ease all\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0\n}\n\n.apexcharts-selection-rect {\n  cursor: move\n}\n\n.svg_select_boundingRect,.svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_boundingRect,.apexcharts-selection-rect+g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_points_l,.apexcharts-selection-rect+g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-menu-icon,.apexcharts-pan-icon,.apexcharts-reset-icon,.apexcharts-selection-icon,.apexcharts-toolbar-custom-icon,.apexcharts-zoom-icon,.apexcharts-zoomin-icon,.apexcharts-zoomout-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6e8192;\n  text-align: center\n}\n\n.apexcharts-menu-icon svg,.apexcharts-reset-icon svg,.apexcharts-zoom-icon svg,.apexcharts-zoomin-icon svg,.apexcharts-zoomout-icon svg {\n  fill: #6e8192\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(.76)\n}\n\n.apexcharts-theme-dark .apexcharts-menu-icon svg,.apexcharts-theme-dark .apexcharts-pan-icon svg,.apexcharts-theme-dark .apexcharts-reset-icon svg,.apexcharts-theme-dark .apexcharts-selection-icon svg,.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,.apexcharts-theme-dark .apexcharts-zoom-icon svg,.apexcharts-theme-dark .apexcharts-zoomin-icon svg,.apexcharts-theme-dark .apexcharts-zoomout-icon svg {\n  fill: #f3f4f5\n}\n\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {\n  fill: #008ffb\n}\n\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg,.apexcharts-theme-light .apexcharts-reset-icon:hover svg,.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {\n  fill: #333\n}\n\n.apexcharts-menu-icon,.apexcharts-selection-icon {\n  position: relative\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px\n}\n\n.apexcharts-menu-icon,.apexcharts-reset-icon,.apexcharts-zoom-icon {\n  transform: scale(.85)\n}\n\n.apexcharts-zoomin-icon,.apexcharts-zoomout-icon {\n  transform: scale(.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px\n}\n\n.apexcharts-pan-icon {\n  transform: scale(.62);\n  position: relative;\n  left: 1px;\n  top: 0\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6e8192;\n  stroke-width: 2\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008ffb\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0 6px 2px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: .15s ease all;\n  pointer-events: none\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: .15s ease all\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0,0,0,.7);\n  color: #fff\n}\n\n@media screen and (min-width:768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n      opacity: 1\n  }\n}\n\n.apexcharts-canvas .apexcharts-element-hidden,.apexcharts-datalabel.apexcharts-element-hidden,.apexcharts-hide .apexcharts-series-points {\n  opacity: 0\n}\n\n.apexcharts-datalabel,.apexcharts-datalabel-label,.apexcharts-datalabel-value,.apexcharts-datalabels,.apexcharts-pie-label {\n  cursor: default;\n  pointer-events: none\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: .3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease\n}\n\n.apexcharts-annotation-rect,.apexcharts-area-series .apexcharts-area,.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,.apexcharts-gridline,.apexcharts-line,.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,.apexcharts-point-annotation-label,.apexcharts-radar-series path,.apexcharts-radar-series polygon,.apexcharts-toolbar svg,.apexcharts-tooltip .apexcharts-marker,.apexcharts-xaxis-annotation-label,.apexcharts-yaxis-annotation-label,.apexcharts-zoom-rect {\n  pointer-events: none\n}\n\n.apexcharts-marker {\n  transition: .15s ease all\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden\n}\n\n.contract-trigger:before,.resize-triggers,.resize-triggers>div {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0\n}\n\n.resize-triggers>div {\n  height: 100%;\n  width: 100%;\n  background: #eee;\n  overflow: auto\n}\n\n.contract-trigger:before {\n  overflow: hidden;\n  width: 200%;\n  height: 200%\n}\n',r?s.prepend(t.css):o.head.appendChild(t.css))}var l=t.create(t.w.config.series,{});if(!l)return e(t);t.mount(l).then((function(){"function"==typeof t.w.config.chart.events.mounted&&t.w.config.chart.events.mounted(t,t.w),t.events.fireEvent("mounted",[t,t.w]),e(l)})).catch((function(t){i(t)}))}else i(new Error("Element not found"))}))}},{key:"create",value:function(t,e){var i=this.w;new Ot(this).initModules();var a=this.w.globals;(a.noData=!1,a.animationEnded=!1,this.responsive.checkResponsiveConfig(e),i.config.xaxis.convertedCatToNumeric)&&new z(i.config).convertCatToNumericXaxis(i.config,this.ctx);if(null===this.el)return a.animationEnded=!0,null;if(this.core.setupElements(),"treemap"===i.config.chart.type&&(i.config.grid.show=!1,i.config.yaxis[0].show=!1),0===a.svgWidth)return a.animationEnded=!0,null;var s=y.checkComboSeries(t);a.comboCharts=s.comboCharts,a.comboBarCount=s.comboBarCount;var r=t.every((function(t){return t.data&&0===t.data.length}));(0===t.length||r)&&this.series.handleNoData(),this.events.setupEventHandlers(),this.data.parseData(t),this.theme.init(),new R(this).setGlobalMarkerSize(),this.formatters.setLabelFormatters(),this.titleSubtitle.draw(),a.noData&&a.collapsedSeries.length!==a.series.length&&!i.config.legend.showForSingleSeries||this.legend.init(),this.series.hasAllSeriesEqualX(),a.axisCharts&&(this.core.coreCalculations(),"category"!==i.config.xaxis.type&&this.formatters.setLabelFormatters(),this.ctx.toolbar.minX=i.globals.minX,this.ctx.toolbar.maxX=i.globals.maxX),this.formatters.heatmapLabelFormatters(),new y(this).getLargestMarkerSize(),this.dimensions.plotCoords();var o=this.core.xySettings();this.grid.createGridMask();var n=this.core.plotChartType(t,o),l=new H(this);l.bringForward(),i.config.dataLabels.background.enabled&&l.dataLabelsBackground(),this.core.shiftGraphPosition();var h={plot:{left:i.globals.translateX,top:i.globals.translateY,width:i.globals.gridWidth,height:i.globals.gridHeight}};return{elGraph:n,xyRatios:o,elInner:i.globals.dom.elGraphical,dimensions:h}}},{key:"mount",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=this,a=i.w;return new Promise((function(s,r){if(null===i.el)return r(new Error("Not enough data to display or target element not found"));(null===e||a.globals.allSeriesCollapsed)&&i.series.handleNoData(),i.grid=new j(i);var o=i.grid.drawGrid();"treemap"!==a.config.chart.type&&i.axes.drawAxis(a.config.chart.type,o),i.annotations=new P(i),i.annotations.drawImageAnnos(),i.annotations.drawTextAnnos(),"back"===a.config.grid.position&&o&&a.globals.dom.elGraphical.add(o.el);var n=new V(t.ctx,o),l=new q(t.ctx,o);if(null!==o&&(n.xAxisLabelCorrections(o.xAxisTickWidth),l.setYAxisTextAlignments(),a.config.yaxis.map((function(t,e){-1===a.globals.ignoreYAxisIndexes.indexOf(e)&&l.yAxisTitleRotate(e,t.opposite)}))),"back"===a.config.annotations.position&&(a.globals.dom.Paper.add(a.globals.dom.elAnnotations),i.annotations.drawAxesAnnotations()),Array.isArray(e.elGraph))for(var h=0;h<e.elGraph.length;h++)a.globals.dom.elGraphical.add(e.elGraph[h]);else a.globals.dom.elGraphical.add(e.elGraph);if("front"===a.config.grid.position&&o&&a.globals.dom.elGraphical.add(o.el),o&&o.elGridBorders&&o.elGridBorders.node&&a.globals.dom.elGraphical.add(o.elGridBorders),"front"===a.config.xaxis.crosshairs.position&&i.crosshairs.drawXCrosshairs(),"front"===a.config.yaxis[0].crosshairs.position&&i.crosshairs.drawYCrosshairs(),"front"===a.config.annotations.position&&(a.globals.dom.Paper.add(a.globals.dom.elAnnotations),i.annotations.drawAxesAnnotations()),!a.globals.noData){if(a.config.tooltip.enabled&&!a.globals.noData&&i.w.globals.tooltip.drawTooltip(e.xyRatios),a.globals.axisCharts&&(a.globals.isXNumeric||a.config.xaxis.convertedCatToNumeric||a.globals.isRangeBar))(a.config.chart.zoom.enabled||a.config.chart.selection&&a.config.chart.selection.enabled||a.config.chart.pan&&a.config.chart.pan.enabled)&&i.zoomPanSelection.init({xyRatios:e.xyRatios});else{var c=a.config.chart.toolbar.tools;["zoom","zoomin","zoomout","selection","pan","reset"].forEach((function(t){c[t]=!1}))}a.config.chart.toolbar.show&&!a.globals.allSeriesCollapsed&&i.toolbar.createToolbar()}a.globals.memory.methodsToExec.length>0&&a.globals.memory.methodsToExec.forEach((function(t){t.method(t.params,!1,t.context)})),a.globals.axisCharts||a.globals.noData||i.core.resizeNonAxisCharts(),s(i)}))}},{key:"destroy",value:function(){var t,e;window.removeEventListener("resize",this.windowResizeHandler),this.el.parentNode,t=this.parentResizeHandler,(e=Wt.get(t))&&(e.disconnect(),Wt.delete(t));var i=this.w.config.chart.id;i&&Apex._chartInstances.forEach((function(t,e){t.id===x.escapeString(i)&&Apex._chartInstances.splice(e,1)})),new Nt(this.ctx).clear({isUpdating:!1})}},{key:"updateOptions",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=this.w;return o.globals.selection=void 0,t.series&&(this.series.resetSeries(!1,!0,!1),t.series.length&&t.series[0].data&&(t.series=t.series.map((function(t,i){return e.updateHelpers._extendSeries(t,i)}))),this.updateHelpers.revertDefaultAxisMinMax()),t.xaxis&&(t=this.updateHelpers.forceXAxisUpdate(t)),t.yaxis&&(t=this.updateHelpers.forceYAxisUpdate(t)),o.globals.collapsedSeriesIndices.length>0&&this.series.clearPreviousPaths(),t.theme&&(t=this.theme.updateThemeOptions(t)),this.updateHelpers._updateOptions(t,i,a,s,r)}},{key:"updateSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(t,e,i)}},{key:"appendSeries",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=this.w.config.series.slice();return a.push(t),this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(a,e,i)}},{key:"appendData",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this;i.w.globals.dataChanged=!0,i.series.getPreviousPaths();for(var a=i.w.config.series.slice(),s=0;s<a.length;s++)if(null!==t[s]&&void 0!==t[s])for(var r=0;r<t[s].data.length;r++)a[s].data.push(t[s].data[r]);return i.w.config.series=a,e&&(i.w.globals.initialSeries=x.clone(i.w.config.series)),this.update()}},{key:"update",value:function(t){var e=this;return new Promise((function(i,a){new Nt(e.ctx).clear({isUpdating:!0});var s=e.create(e.w.config.series,t);if(!s)return i(e);e.mount(s).then((function(){"function"==typeof e.w.config.chart.events.updated&&e.w.config.chart.events.updated(e,e.w),e.events.fireEvent("updated",[e,e.w]),e.w.globals.isDirty=!0,i(e)})).catch((function(t){a(t)}))}))}},{key:"getSyncedCharts",value:function(){var t=this.getGroupedCharts(),e=[this];return t.length&&(e=[],t.forEach((function(t){e.push(t)}))),e}},{key:"getGroupedCharts",value:function(){var t=this;return Apex._chartInstances.filter((function(t){if(t.group)return!0})).map((function(e){return t.w.config.chart.group===e.group?e.chart:t}))}},{key:"toggleSeries",value:function(t){return this.series.toggleSeries(t)}},{key:"highlightSeriesOnLegendHover",value:function(t,e){return this.series.toggleSeriesOnHover(t,e)}},{key:"showSeries",value:function(t){this.series.showSeries(t)}},{key:"hideSeries",value:function(t){this.series.hideSeries(t)}},{key:"resetSeries",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.series.resetSeries(t,e)}},{key:"addEventListener",value:function(t,e){this.events.addEventListener(t,e)}},{key:"removeEventListener",value:function(t,e){this.events.removeEventListener(t,e)}},{key:"addXaxisAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addXaxisAnnotationExternal(t,e,a)}},{key:"addYaxisAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addYaxisAnnotationExternal(t,e,a)}},{key:"addPointAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addPointAnnotationExternal(t,e,a)}},{key:"clearAnnotations",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=this;t&&(e=t),e.annotations.clearAnnotations(e)}},{key:"removeAnnotation",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i=this;e&&(i=e),i.annotations.removeAnnotation(i,t)}},{key:"getChartArea",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")}},{key:"getSeriesTotalXRange",value:function(t,e){return this.coreUtils.getSeriesTotalsXRange(t,e)}},{key:"getHighestValueInSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=new U(this.ctx);return e.getMinYMaxY(t).highestY}},{key:"getLowestValueInSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=new U(this.ctx);return e.getMinYMaxY(t).lowestY}},{key:"getSeriesTotal",value:function(){return this.w.globals.seriesTotals}},{key:"toggleDataPointSelection",value:function(t,e){return this.updateHelpers.toggleDataPointSelection(t,e)}},{key:"zoomX",value:function(t,e){this.ctx.toolbar.zoomUpdateOptions(t,e)}},{key:"setLocale",value:function(t){this.localization.setCurrentLocaleValues(t)}},{key:"dataURI",value:function(t){return new G(this.ctx).dataURI(t)}},{key:"exportToCSV",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=new G(this.ctx);return e.exportToCSV(t)}},{key:"paper",value:function(){return this.w.globals.dom.Paper}},{key:"_parentResizeCallback",value:function(){this.w.globals.animationEnded&&this.w.config.chart.redrawOnParentResize&&this._windowResize()}},{key:"_windowResize",value:function(){var t=this;clearTimeout(this.w.globals.resizeTimer),this.w.globals.resizeTimer=window.setTimeout((function(){t.w.globals.resized=!0,t.w.globals.dataChanged=!1,t.ctx.update()}),150)}},{key:"_windowResizeHandler",value:function(){var t=this.w.config.chart.redrawOnWindowResize;"function"==typeof t&&(t=t()),t&&this._windowResize()}}],[{key:"getChartByID",value:function(t){var e=x.escapeString(t),i=Apex._chartInstances.filter((function(t){return t.id===e}))[0];return i&&i.chart}},{key:"initOnLoad",value:function(){for(var e=document.querySelectorAll("[data-apexcharts]"),i=0;i<e.length;i++){new t(e[i],JSON.parse(e[i].getAttribute("data-options"))).render()}}},{key:"exec",value:function(t,e){var i=this.getChartByID(t);if(i){i.w.globals.isExecCalled=!0;var a=null;if(-1!==i.publicMethods.indexOf(e)){for(var s=arguments.length,r=new Array(s>2?s-2:0),o=2;o<s;o++)r[o-2]=arguments[o];a=i[e].apply(i,r)}return a}}},{key:"merge",value:function(t,e){return x.extend(t,e)}}]),t}();return Bt}));

/**
 * SimpleBar.js - v5.3.6
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.SimpleBar = factory());
}(this, function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var O = 'object';
	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global_1 =
	  // eslint-disable-next-line no-undef
	  check(typeof globalThis == O && globalThis) ||
	  check(typeof window == O && window) ||
	  check(typeof self == O && self) ||
	  check(typeof commonjsGlobal == O && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func
	  Function('return this')();

	var fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var descriptors = !fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
	var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : nativePropertyIsEnumerable;

	var objectPropertyIsEnumerable = {
		f: f
	};

	var createPropertyDescriptor = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString = {}.toString;

	var classofRaw = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	var split = ''.split;

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings



	var toIndexedObject = function (it) {
	  return indexedObject(requireObjectCoercible(it));
	};

	var isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	// `ToPrimitive` abstract operation
	// https://tc39.github.io/ecma262/#sec-toprimitive
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var toPrimitive = function (input, PREFERRED_STRING) {
	  if (!isObject(input)) return input;
	  var fn, val;
	  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var hasOwnProperty = {}.hasOwnProperty;

	var has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var document$1 = global_1.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS = isObject(document$1) && isObject(document$1.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS ? document$1.createElement(it) : {};
	};

	// Thank's IE8 for his funny defineProperty
	var ie8DomDefine = !descriptors && !fails(function () {
	  return Object.defineProperty(documentCreateElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
	var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPrimitive(P, true);
	  if (ie8DomDefine) try {
	    return nativeGetOwnPropertyDescriptor(O, P);
	  } catch (error) { /* empty */ }
	  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor = {
		f: f$1
	};

	var anObject = function (it) {
	  if (!isObject(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  } return it;
	};

	var nativeDefineProperty = Object.defineProperty;

	// `Object.defineProperty` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperty
	var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (ie8DomDefine) try {
	    return nativeDefineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var objectDefineProperty = {
		f: f$2
	};

	var hide = descriptors ? function (object, key, value) {
	  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var setGlobal = function (key, value) {
	  try {
	    hide(global_1, key, value);
	  } catch (error) {
	    global_1[key] = value;
	  } return value;
	};

	var shared = createCommonjsModule(function (module) {
	var SHARED = '__core-js_shared__';
	var store = global_1[SHARED] || setGlobal(SHARED, {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.2.1',
	  mode:  'global',
	  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
	});
	});

	var functionToString = shared('native-function-to-string', Function.toString);

	var WeakMap$1 = global_1.WeakMap;

	var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(functionToString.call(WeakMap$1));

	var id = 0;
	var postfix = Math.random();

	var uid = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
	};

	var keys = shared('keys');

	var sharedKey = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var hiddenKeys = {};

	var WeakMap$2 = global_1.WeakMap;
	var set, get, has$1;

	var enforce = function (it) {
	  return has$1(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (nativeWeakMap) {
	  var store = new WeakMap$2();
	  var wmget = store.get;
	  var wmhas = store.has;
	  var wmset = store.set;
	  set = function (it, metadata) {
	    wmset.call(store, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget.call(store, it) || {};
	  };
	  has$1 = function (it) {
	    return wmhas.call(store, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys[STATE] = true;
	  set = function (it, metadata) {
	    hide(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return has(it, STATE) ? it[STATE] : {};
	  };
	  has$1 = function (it) {
	    return has(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has$1,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var redefine = createCommonjsModule(function (module) {
	var getInternalState = internalState.get;
	var enforceInternalState = internalState.enforce;
	var TEMPLATE = String(functionToString).split('toString');

	shared('inspectSource', function (it) {
	  return functionToString.call(it);
	});

	(module.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  if (typeof value == 'function') {
	    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
	    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
	  }
	  if (O === global_1) {
	    if (simple) O[key] = value;
	    else setGlobal(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }
	  if (simple) O[key] = value;
	  else hide(O, key, value);
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, 'toString', function toString() {
	  return typeof this == 'function' && getInternalState(this).source || functionToString.call(this);
	});
	});

	var path = global_1;

	var aFunction = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	var getBuiltIn = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
	    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
	};

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `ToInteger` abstract operation
	// https://tc39.github.io/ecma262/#sec-tointeger
	var toInteger = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
	};

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.github.io/ecma262/#sec-tolength
	var toLength = function (argument) {
	  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
	var toAbsoluteIndex = function (index, length) {
	  var integer = toInteger(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
	  includes: createMethod(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod(false)
	};

	var indexOf = arrayIncludes.indexOf;


	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~indexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys$1);
	};

	var objectGetOwnPropertyNames = {
		f: f$3
	};

	var f$4 = Object.getOwnPropertySymbols;

	var objectGetOwnPropertySymbols = {
		f: f$4
	};

	// all object keys, includes non-enumerable and symbols
	var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = objectGetOwnPropertyNames.f(anObject(it));
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};

	var copyConstructorProperties = function (target, source) {
	  var keys = ownKeys(source);
	  var defineProperty = objectDefineProperty.f;
	  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	  }
	};

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : typeof detection == 'function' ? fails(detection)
	    : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';

	var isForced_1 = isForced;

	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global_1;
	  } else if (STATIC) {
	    target = global_1[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global_1[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor$1(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty === typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      hide(sourceProperty, 'sham', true);
	    }
	    // extend global
	    redefine(target, key, sourceProperty, options);
	  }
	};

	var aFunction$1 = function (it) {
	  if (typeof it != 'function') {
	    throw TypeError(String(it) + ' is not a function');
	  } return it;
	};

	// optional / simple context binding
	var bindContext = function (fn, that, length) {
	  aFunction$1(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 0: return function () {
	      return fn.call(that);
	    };
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	// `ToObject` abstract operation
	// https://tc39.github.io/ecma262/#sec-toobject
	var toObject = function (argument) {
	  return Object(requireObjectCoercible(argument));
	};

	// `IsArray` abstract operation
	// https://tc39.github.io/ecma262/#sec-isarray
	var isArray = Array.isArray || function isArray(arg) {
	  return classofRaw(arg) == 'Array';
	};

	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
	  // Chrome 38 Symbol has incorrect toString conversion
	  // eslint-disable-next-line no-undef
	  return !String(Symbol());
	});

	var Symbol$1 = global_1.Symbol;
	var store$1 = shared('wks');

	var wellKnownSymbol = function (name) {
	  return store$1[name] || (store$1[name] = nativeSymbol && Symbol$1[name]
	    || (nativeSymbol ? Symbol$1 : uid)('Symbol.' + name));
	};

	var SPECIES = wellKnownSymbol('species');

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate = function (originalArray, length) {
	  var C;
	  if (isArray(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    else if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
	};

	var push = [].push;

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
	var createMethod$1 = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = indexedObject(O);
	    var boundFunction = bindContext(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push.call(target, value); // filter
	        } else if (IS_EVERY) return false;  // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$1(0),
	  // `Array.prototype.map` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.map
	  map: createMethod$1(1),
	  // `Array.prototype.filter` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
	  filter: createMethod$1(2),
	  // `Array.prototype.some` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.some
	  some: createMethod$1(3),
	  // `Array.prototype.every` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.every
	  every: createMethod$1(4),
	  // `Array.prototype.find` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.find
	  find: createMethod$1(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$1(6)
	};

	var sloppyArrayMethod = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !method || !fails(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal
	    method.call(null, argument || function () { throw 1; }, 1);
	  });
	};

	var $forEach = arrayIteration.forEach;


	// `Array.prototype.forEach` method implementation
	// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	var arrayForEach = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	} : [].forEach;

	// `Array.prototype.forEach` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	_export({ target: 'Array', proto: true, forced: [].forEach != arrayForEach }, {
	  forEach: arrayForEach
	});

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	for (var COLLECTION_NAME in domIterables) {
	  var Collection = global_1[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  // some Chrome versions have non-configurable methods on DOMTokenList
	  if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
	    hide(CollectionPrototype, 'forEach', arrayForEach);
	  } catch (error) {
	    CollectionPrototype.forEach = arrayForEach;
	  }
	}

	var canUseDOM = !!(
	  typeof window !== 'undefined' &&
	  window.document &&
	  window.document.createElement
	);

	var canUseDom = canUseDOM;

	var SPECIES$1 = wellKnownSymbol('species');

	var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
	  return !fails(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$1] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $filter = arrayIteration.filter;


	// `Array.prototype.filter` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	_export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('filter') }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys
	var objectKeys = Object.keys || function keys(O) {
	  return objectKeysInternal(O, enumBugKeys);
	};

	// `Object.defineProperties` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperties
	var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
	  return O;
	};

	var html = getBuiltIn('document', 'documentElement');

	var IE_PROTO = sharedKey('IE_PROTO');

	var PROTOTYPE = 'prototype';
	var Empty = function () { /* empty */ };

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var length = enumBugKeys.length;
	  var lt = '<';
	  var script = 'script';
	  var gt = '>';
	  var js = 'java' + script + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = String(js);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
	  return createDict();
	};

	// `Object.create` method
	// https://tc39.github.io/ecma262/#sec-object.create
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : objectDefineProperties(result, Properties);
	};

	hiddenKeys[IE_PROTO] = true;

	var UNSCOPABLES = wellKnownSymbol('unscopables');
	var ArrayPrototype = Array.prototype;

	// Array.prototype[@@unscopables]
	// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
	if (ArrayPrototype[UNSCOPABLES] == undefined) {
	  hide(ArrayPrototype, UNSCOPABLES, objectCreate(null));
	}

	// add a key to Array.prototype[@@unscopables]
	var addToUnscopables = function (key) {
	  ArrayPrototype[UNSCOPABLES][key] = true;
	};

	var iterators = {};

	var correctPrototypeGetter = !fails(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var IE_PROTO$1 = sharedKey('IE_PROTO');
	var ObjectPrototype = Object.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.getprototypeof
	var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO$1)) return O[IE_PROTO$1];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectPrototype : null;
	};

	var ITERATOR = wellKnownSymbol('iterator');
	var BUGGY_SAFARI_ITERATORS = false;

	var returnThis = function () { return this; };

	// `%IteratorPrototype%` object
	// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
	  }
	}

	if (IteratorPrototype == undefined) IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	if ( !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
	};

	var defineProperty = objectDefineProperty.f;



	var TO_STRING_TAG = wellKnownSymbol('toStringTag');

	var setToStringTag = function (it, TAG, STATIC) {
	  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
	    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
	  }
	};

	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





	var returnThis$1 = function () { return this; };

	var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
	  setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
	  iterators[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var aPossiblePrototype = function (it) {
	  if (!isObject(it) && it !== null) {
	    throw TypeError("Can't set " + String(it) + ' as a prototype');
	  } return it;
	};

	// `Object.setPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
	    setter.call(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter.call(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$1 = wellKnownSymbol('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis$2 = function () { return this; };

	var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$1]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
	      if ( objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
	        if (objectSetPrototypeOf) {
	          objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
	        } else if (typeof CurrentIteratorPrototype[ITERATOR$1] != 'function') {
	          hide(CurrentIteratorPrototype, ITERATOR$1, returnThis$2);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
	    }
	  }

	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    INCORRECT_VALUES_NAME = true;
	    defaultIterator = function values() { return nativeIterator.call(this); };
	  }

	  // define iterator
	  if ( IterablePrototype[ITERATOR$1] !== defaultIterator) {
	    hide(IterablePrototype, ITERATOR$1, defaultIterator);
	  }
	  iterators[NAME] = defaultIterator;

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        redefine(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
	  }

	  return methods;
	};

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState = internalState.set;
	var getInternalState = internalState.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.github.io/ecma262/#sec-createarrayiterator
	var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
	  setInternalState(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return { value: undefined, done: true };
	  }
	  if (kind == 'keys') return { value: index, done: false };
	  if (kind == 'values') return { value: target[index], done: false };
	  return { value: [index, target[index]], done: false };
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
	iterators.Arguments = iterators.Array;

	// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

	var nativeAssign = Object.assign;

	// `Object.assign` method
	// https://tc39.github.io/ecma262/#sec-object.assign
	// should work with symbols and should have deterministic property order (V8 bug)
	var objectAssign = !nativeAssign || fails(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var symbol = Symbol();
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
	  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  var propertyIsEnumerable = objectPropertyIsEnumerable.f;
	  while (argumentsLength > index) {
	    var S = indexedObject(arguments[index++]);
	    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
	    }
	  } return T;
	} : nativeAssign;

	// `Object.assign` method
	// https://tc39.github.io/ecma262/#sec-object.assign
	_export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, {
	  assign: objectAssign
	});

	var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof = function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
	};

	var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
	var test = {};

	test[TO_STRING_TAG$2] = 'z';

	// `Object.prototype.toString` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
	var objectToString = String(test) !== '[object z]' ? function toString() {
	  return '[object ' + classof(this) + ']';
	} : test.toString;

	var ObjectPrototype$1 = Object.prototype;

	// `Object.prototype.toString` method
	// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
	if (objectToString !== ObjectPrototype$1.toString) {
	  redefine(ObjectPrototype$1, 'toString', objectToString, { unsafe: true });
	}

	// a string of all valid unicode whitespaces
	// eslint-disable-next-line max-len
	var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var whitespace = '[' + whitespaces + ']';
	var ltrim = RegExp('^' + whitespace + whitespace + '*');
	var rtrim = RegExp(whitespace + whitespace + '*$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod$2 = function (TYPE) {
	  return function ($this) {
	    var string = String(requireObjectCoercible($this));
	    if (TYPE & 1) string = string.replace(ltrim, '');
	    if (TYPE & 2) string = string.replace(rtrim, '');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
	  start: createMethod$2(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
	  end: createMethod$2(2),
	  // `String.prototype.trim` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
	  trim: createMethod$2(3)
	};

	var trim = stringTrim.trim;


	var nativeParseInt = global_1.parseInt;
	var hex = /^[+-]?0[Xx]/;
	var FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

	// `parseInt` method
	// https://tc39.github.io/ecma262/#sec-parseint-string-radix
	var _parseInt = FORCED ? function parseInt(string, radix) {
	  var S = trim(String(string));
	  return nativeParseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
	} : nativeParseInt;

	// `parseInt` method
	// https://tc39.github.io/ecma262/#sec-parseint-string-radix
	_export({ global: true, forced: parseInt != _parseInt }, {
	  parseInt: _parseInt
	});

	// `String.prototype.{ codePointAt, at }` methods implementation
	var createMethod$3 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = String(requireObjectCoercible($this));
	    var position = toInteger(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = S.charCodeAt(position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING ? S.charAt(position) : first
	        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$3(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$3(true)
	};

	var charAt = stringMultibyte.charAt;



	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$1 = internalState.set;
	var getInternalState$1 = internalState.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState$1(this, {
	    type: STRING_ITERATOR,
	    string: String(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState$1(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return { value: undefined, done: true };
	  point = charAt(string, index);
	  state.index += point.length;
	  return { value: point, done: false };
	});

	var redefineAll = function (target, src, options) {
	  for (var key in src) redefine(target, key, src[key], options);
	  return target;
	};

	var freezing = !fails(function () {
	  return Object.isExtensible(Object.preventExtensions({}));
	});

	var internalMetadata = createCommonjsModule(function (module) {
	var defineProperty = objectDefineProperty.f;



	var METADATA = uid('meta');
	var id = 0;

	var isExtensible = Object.isExtensible || function () {
	  return true;
	};

	var setMetadata = function (it) {
	  defineProperty(it, METADATA, { value: {
	    objectID: 'O' + ++id, // object ID
	    weakData: {}          // weak collections IDs
	  } });
	};

	var fastKey = function (it, create) {
	  // return a primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMetadata(it);
	  // return object ID
	  } return it[METADATA].objectID;
	};

	var getWeakData = function (it, create) {
	  if (!has(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMetadata(it);
	  // return the store of weak collections IDs
	  } return it[METADATA].weakData;
	};

	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (freezing && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
	  return it;
	};

	var meta = module.exports = {
	  REQUIRED: false,
	  fastKey: fastKey,
	  getWeakData: getWeakData,
	  onFreeze: onFreeze
	};

	hiddenKeys[METADATA] = true;
	});
	var internalMetadata_1 = internalMetadata.REQUIRED;
	var internalMetadata_2 = internalMetadata.fastKey;
	var internalMetadata_3 = internalMetadata.getWeakData;
	var internalMetadata_4 = internalMetadata.onFreeze;

	var ITERATOR$2 = wellKnownSymbol('iterator');
	var ArrayPrototype$1 = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod = function (it) {
	  return it !== undefined && (iterators.Array === it || ArrayPrototype$1[ITERATOR$2] === it);
	};

	var ITERATOR$3 = wellKnownSymbol('iterator');

	var getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$3]
	    || it['@@iterator']
	    || iterators[classof(it)];
	};

	// call something on iterator step with safe closing on error
	var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (error) {
	    var returnMethod = iterator['return'];
	    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
	    throw error;
	  }
	};

	var iterate_1 = createCommonjsModule(function (module) {
	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
	  var boundFunction = bindContext(fn, that, AS_ENTRIES ? 2 : 1);
	  var iterator, iterFn, index, length, result, step;

	  if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod(iterable);
	    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = toLength(iterable.length); length > index; index++) {
	        result = AS_ENTRIES
	          ? boundFunction(anObject(step = iterable[index])[0], step[1])
	          : boundFunction(iterable[index]);
	        if (result && result instanceof Result) return result;
	      } return new Result(false);
	    }
	    iterator = iterFn.call(iterable);
	  }

	  while (!(step = iterator.next()).done) {
	    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
	    if (result && result instanceof Result) return result;
	  } return new Result(false);
	};

	iterate.stop = function (result) {
	  return new Result(true, result);
	};
	});

	var anInstance = function (it, Constructor, name) {
	  if (!(it instanceof Constructor)) {
	    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
	  } return it;
	};

	var ITERATOR$4 = wellKnownSymbol('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR$4] = function () {
	    return this;
	  };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR$4] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	// makes subclassing work correct for wrapped built-ins
	var inheritIfRequired = function ($this, dummy, Wrapper) {
	  var NewTarget, NewTargetPrototype;
	  if (
	    // it can work only with native `setPrototypeOf`
	    objectSetPrototypeOf &&
	    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
	    typeof (NewTarget = dummy.constructor) == 'function' &&
	    NewTarget !== Wrapper &&
	    isObject(NewTargetPrototype = NewTarget.prototype) &&
	    NewTargetPrototype !== Wrapper.prototype
	  ) objectSetPrototypeOf($this, NewTargetPrototype);
	  return $this;
	};

	var collection = function (CONSTRUCTOR_NAME, wrapper, common, IS_MAP, IS_WEAK) {
	  var NativeConstructor = global_1[CONSTRUCTOR_NAME];
	  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
	  var Constructor = NativeConstructor;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var exported = {};

	  var fixMethod = function (KEY) {
	    var nativeMethod = NativePrototype[KEY];
	    redefine(NativePrototype, KEY,
	      KEY == 'add' ? function add(value) {
	        nativeMethod.call(this, value === 0 ? 0 : value);
	        return this;
	      } : KEY == 'delete' ? function (key) {
	        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
	      } : KEY == 'get' ? function get(key) {
	        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
	      } : KEY == 'has' ? function has(key) {
	        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
	      } : function set(key, value) {
	        nativeMethod.call(this, key === 0 ? 0 : key, value);
	        return this;
	      }
	    );
	  };

	  // eslint-disable-next-line max-len
	  if (isForced_1(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
	    new NativeConstructor().entries().next();
	  })))) {
	    // create collection constructor
	    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
	    internalMetadata.REQUIRED = true;
	  } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
	    var instance = new Constructor();
	    // early implementations not supports chaining
	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
	    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
	    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    // eslint-disable-next-line no-new
	    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
	    // for early implementations -0 and +0 not the same
	    var BUGGY_ZERO = !IS_WEAK && fails(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new NativeConstructor();
	      var index = 5;
	      while (index--) $instance[ADDER](index, index);
	      return !$instance.has(-0);
	    });

	    if (!ACCEPT_ITERABLES) {
	      Constructor = wrapper(function (dummy, iterable) {
	        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
	        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
	        if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
	        return that;
	      });
	      Constructor.prototype = NativePrototype;
	      NativePrototype.constructor = Constructor;
	    }

	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }

	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

	    // weak collections should not contains .clear method
	    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
	  }

	  exported[CONSTRUCTOR_NAME] = Constructor;
	  _export({ global: true, forced: Constructor != NativeConstructor }, exported);

	  setToStringTag(Constructor, CONSTRUCTOR_NAME);

	  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

	  return Constructor;
	};

	var getWeakData = internalMetadata.getWeakData;








	var setInternalState$2 = internalState.set;
	var internalStateGetterFor = internalState.getterFor;
	var find = arrayIteration.find;
	var findIndex = arrayIteration.findIndex;
	var id$1 = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function (store) {
	  return store.frozen || (store.frozen = new UncaughtFrozenStore());
	};

	var UncaughtFrozenStore = function () {
	  this.entries = [];
	};

	var findUncaughtFrozen = function (store, key) {
	  return find(store.entries, function (it) {
	    return it[0] === key;
	  });
	};

	UncaughtFrozenStore.prototype = {
	  get: function (key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function (key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function (key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;
	    else this.entries.push([key, value]);
	  },
	  'delete': function (key) {
	    var index = findIndex(this.entries, function (it) {
	      return it[0] === key;
	    });
	    if (~index) this.entries.splice(index, 1);
	    return !!~index;
	  }
	};

	var collectionWeak = {
	  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, CONSTRUCTOR_NAME);
	      setInternalState$2(that, {
	        type: CONSTRUCTOR_NAME,
	        id: id$1++,
	        frozen: undefined
	      });
	      if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
	    });

	    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

	    var define = function (that, key, value) {
	      var state = getInternalState(that);
	      var data = getWeakData(anObject(key), true);
	      if (data === true) uncaughtFrozenStore(state).set(key, value);
	      else data[state.id] = value;
	      return that;
	    };

	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function (key) {
	        var state = getInternalState(this);
	        if (!isObject(key)) return false;
	        var data = getWeakData(key);
	        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
	        return data && has(data, state.id) && delete data[state.id];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has$1(key) {
	        var state = getInternalState(this);
	        if (!isObject(key)) return false;
	        var data = getWeakData(key);
	        if (data === true) return uncaughtFrozenStore(state).has(key);
	        return data && has(data, state.id);
	      }
	    });

	    redefineAll(C.prototype, IS_MAP ? {
	      // 23.3.3.3 WeakMap.prototype.get(key)
	      get: function get(key) {
	        var state = getInternalState(this);
	        if (isObject(key)) {
	          var data = getWeakData(key);
	          if (data === true) return uncaughtFrozenStore(state).get(key);
	          return data ? data[state.id] : undefined;
	        }
	      },
	      // 23.3.3.5 WeakMap.prototype.set(key, value)
	      set: function set(key, value) {
	        return define(this, key, value);
	      }
	    } : {
	      // 23.4.3.1 WeakSet.prototype.add(value)
	      add: function add(value) {
	        return define(this, value, true);
	      }
	    });

	    return C;
	  }
	};

	var es_weakMap = createCommonjsModule(function (module) {






	var enforceIternalState = internalState.enforce;


	var IS_IE11 = !global_1.ActiveXObject && 'ActiveXObject' in global_1;
	var isExtensible = Object.isExtensible;
	var InternalWeakMap;

	var wrapper = function (get) {
	  return function WeakMap() {
	    return get(this, arguments.length ? arguments[0] : undefined);
	  };
	};

	// `WeakMap` constructor
	// https://tc39.github.io/ecma262/#sec-weakmap-constructor
	var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak, true, true);

	// IE11 WeakMap frozen keys fix
	// We can't use feature detection because it crash some old IE builds
	// https://github.com/zloirock/core-js/issues/485
	if (nativeWeakMap && IS_IE11) {
	  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
	  internalMetadata.REQUIRED = true;
	  var WeakMapPrototype = $WeakMap.prototype;
	  var nativeDelete = WeakMapPrototype['delete'];
	  var nativeHas = WeakMapPrototype.has;
	  var nativeGet = WeakMapPrototype.get;
	  var nativeSet = WeakMapPrototype.set;
	  redefineAll(WeakMapPrototype, {
	    'delete': function (key) {
	      if (isObject(key) && !isExtensible(key)) {
	        var state = enforceIternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeDelete.call(this, key) || state.frozen['delete'](key);
	      } return nativeDelete.call(this, key);
	    },
	    has: function has(key) {
	      if (isObject(key) && !isExtensible(key)) {
	        var state = enforceIternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeHas.call(this, key) || state.frozen.has(key);
	      } return nativeHas.call(this, key);
	    },
	    get: function get(key) {
	      if (isObject(key) && !isExtensible(key)) {
	        var state = enforceIternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
	      } return nativeGet.call(this, key);
	    },
	    set: function set(key, value) {
	      if (isObject(key) && !isExtensible(key)) {
	        var state = enforceIternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
	      } else nativeSet.call(this, key, value);
	      return this;
	    }
	  });
	}
	});

	var ITERATOR$5 = wellKnownSymbol('iterator');
	var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
	var ArrayValues = es_array_iterator.values;

	for (var COLLECTION_NAME$1 in domIterables) {
	  var Collection$1 = global_1[COLLECTION_NAME$1];
	  var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;
	  if (CollectionPrototype$1) {
	    // some Chrome versions have non-configurable methods on DOMTokenList
	    if (CollectionPrototype$1[ITERATOR$5] !== ArrayValues) try {
	      hide(CollectionPrototype$1, ITERATOR$5, ArrayValues);
	    } catch (error) {
	      CollectionPrototype$1[ITERATOR$5] = ArrayValues;
	    }
	    if (!CollectionPrototype$1[TO_STRING_TAG$3]) hide(CollectionPrototype$1, TO_STRING_TAG$3, COLLECTION_NAME$1);
	    if (domIterables[COLLECTION_NAME$1]) for (var METHOD_NAME in es_array_iterator) {
	      // some Chrome versions have non-configurable methods on DOMTokenList
	      if (CollectionPrototype$1[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
	        hide(CollectionPrototype$1, METHOD_NAME, es_array_iterator[METHOD_NAME]);
	      } catch (error) {
	        CollectionPrototype$1[METHOD_NAME] = es_array_iterator[METHOD_NAME];
	      }
	    }
	  }
	}

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString$1 = objectProto.toString;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject$1(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject$1(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject$1(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString$1.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject$1(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject$1(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	var lodash_throttle = throttle;

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT$1 = 'Expected a function';

	/** Used as references for various `Number` constants. */
	var NAN$1 = 0 / 0;

	/** `Object#toString` result references. */
	var symbolTag$1 = '[object Symbol]';

	/** Used to match leading and trailing whitespace. */
	var reTrim$1 = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary$1 = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal$1 = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt$1 = parseInt;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	/** Detect free variable `self`. */
	var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString$2 = objectProto$1.toString;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax$1 = Math.max,
	    nativeMin$1 = Math.min;

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now$1 = function() {
	  return root$1.Date.now();
	};

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce$1(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT$1);
	  }
	  wait = toNumber$1(wait) || 0;
	  if (isObject$2(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax$1(toNumber$1(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin$1(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now$1();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now$1());
	  }

	  function debounced() {
	    var time = now$1(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject$2(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike$1(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol$1(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike$1(value) && objectToString$2.call(value) == symbolTag$1);
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber$1(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol$1(value)) {
	    return NAN$1;
	  }
	  if (isObject$2(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject$2(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim$1, '');
	  var isBinary = reIsBinary$1.test(value);
	  return (isBinary || reIsOctal$1.test(value))
	    ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex$1.test(value) ? NAN$1 : +value);
	}

	var lodash_debounce = debounce$1;

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT$2 = 'Expected a function';

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal$2 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	/** Detect free variable `self`. */
	var freeSelf$2 = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root$2 = freeGlobal$2 || freeSelf$2 || Function('return this')();

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto$2 = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root$2['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString$3 = objectProto$2.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root$2, 'Map'),
	    nativeCreate = getNative(Object, 'create');

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty$1.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject$3(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT$2);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject$3(value) ? objectToString$3.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject$3(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	var lodash_memoize = memoize;

	var resizeObservers = [];

	var hasActiveObservations = function () {
	    return resizeObservers.some(function (ro) { return ro.activeTargets.length > 0; });
	};

	var hasSkippedObservations = function () {
	    return resizeObservers.some(function (ro) { return ro.skippedTargets.length > 0; });
	};

	var msg = 'ResizeObserver loop completed with undelivered notifications.';
	var deliverResizeLoopError = function () {
	    var event;
	    if (typeof ErrorEvent === 'function') {
	        event = new ErrorEvent('error', {
	            message: msg
	        });
	    }
	    else {
	        event = document.createEvent('Event');
	        event.initEvent('error', false, false);
	        event.message = msg;
	    }
	    window.dispatchEvent(event);
	};

	var ResizeObserverBoxOptions;
	(function (ResizeObserverBoxOptions) {
	    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
	    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
	    ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
	})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));

	var freeze = function (obj) { return Object.freeze(obj); };

	var ResizeObserverSize = (function () {
	    function ResizeObserverSize(inlineSize, blockSize) {
	        this.inlineSize = inlineSize;
	        this.blockSize = blockSize;
	        freeze(this);
	    }
	    return ResizeObserverSize;
	}());

	var DOMRectReadOnly = (function () {
	    function DOMRectReadOnly(x, y, width, height) {
	        this.x = x;
	        this.y = y;
	        this.width = width;
	        this.height = height;
	        this.top = this.y;
	        this.left = this.x;
	        this.bottom = this.top + this.height;
	        this.right = this.left + this.width;
	        return freeze(this);
	    }
	    DOMRectReadOnly.prototype.toJSON = function () {
	        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
	        return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
	    };
	    DOMRectReadOnly.fromRect = function (rectangle) {
	        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
	    };
	    return DOMRectReadOnly;
	}());

	var isSVG = function (target) { return target instanceof SVGElement && 'getBBox' in target; };
	var isHidden = function (target) {
	    if (isSVG(target)) {
	        var _a = target.getBBox(), width = _a.width, height = _a.height;
	        return !width && !height;
	    }
	    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
	    return !(offsetWidth || offsetHeight || target.getClientRects().length);
	};
	var isElement = function (obj) {
	    var _a, _b;
	    if (obj instanceof Element) {
	        return true;
	    }
	    var scope = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView;
	    return !!(scope && obj instanceof scope.Element);
	};
	var isReplacedElement = function (target) {
	    switch (target.tagName) {
	        case 'INPUT':
	            if (target.type !== 'image') {
	                break;
	            }
	        case 'VIDEO':
	        case 'AUDIO':
	        case 'EMBED':
	        case 'OBJECT':
	        case 'CANVAS':
	        case 'IFRAME':
	        case 'IMG':
	            return true;
	    }
	    return false;
	};

	var global$1 = typeof window !== 'undefined' ? window : {};

	var cache = new WeakMap();
	var scrollRegexp = /auto|scroll/;
	var verticalRegexp = /^tb|vertical/;
	var IE = (/msie|trident/i).test(global$1.navigator && global$1.navigator.userAgent);
	var parseDimension = function (pixel) { return parseFloat(pixel || '0'); };
	var size = function (inlineSize, blockSize, switchSizes) {
	    if (inlineSize === void 0) { inlineSize = 0; }
	    if (blockSize === void 0) { blockSize = 0; }
	    if (switchSizes === void 0) { switchSizes = false; }
	    return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
	};
	var zeroBoxes = freeze({
	    devicePixelContentBoxSize: size(),
	    borderBoxSize: size(),
	    contentBoxSize: size(),
	    contentRect: new DOMRectReadOnly(0, 0, 0, 0)
	});
	var calculateBoxSizes = function (target, forceRecalculation) {
	    if (forceRecalculation === void 0) { forceRecalculation = false; }
	    if (cache.has(target) && !forceRecalculation) {
	        return cache.get(target);
	    }
	    if (isHidden(target)) {
	        cache.set(target, zeroBoxes);
	        return zeroBoxes;
	    }
	    var cs = getComputedStyle(target);
	    var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
	    var removePadding = !IE && cs.boxSizing === 'border-box';
	    var switchSizes = verticalRegexp.test(cs.writingMode || '');
	    var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
	    var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
	    var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
	    var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
	    var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
	    var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
	    var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
	    var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
	    var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
	    var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
	    var horizontalPadding = paddingLeft + paddingRight;
	    var verticalPadding = paddingTop + paddingBottom;
	    var horizontalBorderArea = borderLeft + borderRight;
	    var verticalBorderArea = borderTop + borderBottom;
	    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
	    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
	    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
	    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
	    var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
	    var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
	    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
	    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
	    var boxes = freeze({
	        devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
	        borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
	        contentBoxSize: size(contentWidth, contentHeight, switchSizes),
	        contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
	    });
	    cache.set(target, boxes);
	    return boxes;
	};
	var calculateBoxSize = function (target, observedBox, forceRecalculation) {
	    var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
	    switch (observedBox) {
	        case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
	            return devicePixelContentBoxSize;
	        case ResizeObserverBoxOptions.BORDER_BOX:
	            return borderBoxSize;
	        default:
	            return contentBoxSize;
	    }
	};

	var ResizeObserverEntry = (function () {
	    function ResizeObserverEntry(target) {
	        var boxes = calculateBoxSizes(target);
	        this.target = target;
	        this.contentRect = boxes.contentRect;
	        this.borderBoxSize = freeze([boxes.borderBoxSize]);
	        this.contentBoxSize = freeze([boxes.contentBoxSize]);
	        this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
	    }
	    return ResizeObserverEntry;
	}());

	var calculateDepthForNode = function (node) {
	    if (isHidden(node)) {
	        return Infinity;
	    }
	    var depth = 0;
	    var parent = node.parentNode;
	    while (parent) {
	        depth += 1;
	        parent = parent.parentNode;
	    }
	    return depth;
	};

	var broadcastActiveObservations = function () {
	    var shallowestDepth = Infinity;
	    var callbacks = [];
	    resizeObservers.forEach(function processObserver(ro) {
	        if (ro.activeTargets.length === 0) {
	            return;
	        }
	        var entries = [];
	        ro.activeTargets.forEach(function processTarget(ot) {
	            var entry = new ResizeObserverEntry(ot.target);
	            var targetDepth = calculateDepthForNode(ot.target);
	            entries.push(entry);
	            ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
	            if (targetDepth < shallowestDepth) {
	                shallowestDepth = targetDepth;
	            }
	        });
	        callbacks.push(function resizeObserverCallback() {
	            ro.callback.call(ro.observer, entries, ro.observer);
	        });
	        ro.activeTargets.splice(0, ro.activeTargets.length);
	    });
	    for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
	        var callback = callbacks_1[_i];
	        callback();
	    }
	    return shallowestDepth;
	};

	var gatherActiveObservationsAtDepth = function (depth) {
	    resizeObservers.forEach(function processObserver(ro) {
	        ro.activeTargets.splice(0, ro.activeTargets.length);
	        ro.skippedTargets.splice(0, ro.skippedTargets.length);
	        ro.observationTargets.forEach(function processTarget(ot) {
	            if (ot.isActive()) {
	                if (calculateDepthForNode(ot.target) > depth) {
	                    ro.activeTargets.push(ot);
	                }
	                else {
	                    ro.skippedTargets.push(ot);
	                }
	            }
	        });
	    });
	};

	var process = function () {
	    var depth = 0;
	    gatherActiveObservationsAtDepth(depth);
	    while (hasActiveObservations()) {
	        depth = broadcastActiveObservations();
	        gatherActiveObservationsAtDepth(depth);
	    }
	    if (hasSkippedObservations()) {
	        deliverResizeLoopError();
	    }
	    return depth > 0;
	};

	var trigger;
	var callbacks = [];
	var notify = function () { return callbacks.splice(0).forEach(function (cb) { return cb(); }); };
	var queueMicroTask = function (callback) {
	    if (!trigger) {
	        var toggle_1 = 0;
	        var el_1 = document.createTextNode('');
	        var config = { characterData: true };
	        new MutationObserver(function () { return notify(); }).observe(el_1, config);
	        trigger = function () { el_1.textContent = "" + (toggle_1 ? toggle_1-- : toggle_1++); };
	    }
	    callbacks.push(callback);
	    trigger();
	};

	var queueResizeObserver = function (cb) {
	    queueMicroTask(function ResizeObserver() {
	        requestAnimationFrame(cb);
	    });
	};

	var watching = 0;
	var isWatching = function () { return !!watching; };
	var CATCH_PERIOD = 250;
	var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
	var events = [
	    'resize',
	    'load',
	    'transitionend',
	    'animationend',
	    'animationstart',
	    'animationiteration',
	    'keyup',
	    'keydown',
	    'mouseup',
	    'mousedown',
	    'mouseover',
	    'mouseout',
	    'blur',
	    'focus'
	];
	var time = function (timeout) {
	    if (timeout === void 0) { timeout = 0; }
	    return Date.now() + timeout;
	};
	var scheduled = false;
	var Scheduler = (function () {
	    function Scheduler() {
	        var _this = this;
	        this.stopped = true;
	        this.listener = function () { return _this.schedule(); };
	    }
	    Scheduler.prototype.run = function (timeout) {
	        var _this = this;
	        if (timeout === void 0) { timeout = CATCH_PERIOD; }
	        if (scheduled) {
	            return;
	        }
	        scheduled = true;
	        var until = time(timeout);
	        queueResizeObserver(function () {
	            var elementsHaveResized = false;
	            try {
	                elementsHaveResized = process();
	            }
	            finally {
	                scheduled = false;
	                timeout = until - time();
	                if (!isWatching()) {
	                    return;
	                }
	                if (elementsHaveResized) {
	                    _this.run(1000);
	                }
	                else if (timeout > 0) {
	                    _this.run(timeout);
	                }
	                else {
	                    _this.start();
	                }
	            }
	        });
	    };
	    Scheduler.prototype.schedule = function () {
	        this.stop();
	        this.run();
	    };
	    Scheduler.prototype.observe = function () {
	        var _this = this;
	        var cb = function () { return _this.observer && _this.observer.observe(document.body, observerConfig); };
	        document.body ? cb() : global$1.addEventListener('DOMContentLoaded', cb);
	    };
	    Scheduler.prototype.start = function () {
	        var _this = this;
	        if (this.stopped) {
	            this.stopped = false;
	            this.observer = new MutationObserver(this.listener);
	            this.observe();
	            events.forEach(function (name) { return global$1.addEventListener(name, _this.listener, true); });
	        }
	    };
	    Scheduler.prototype.stop = function () {
	        var _this = this;
	        if (!this.stopped) {
	            this.observer && this.observer.disconnect();
	            events.forEach(function (name) { return global$1.removeEventListener(name, _this.listener, true); });
	            this.stopped = true;
	        }
	    };
	    return Scheduler;
	}());
	var scheduler = new Scheduler();
	var updateCount = function (n) {
	    !watching && n > 0 && scheduler.start();
	    watching += n;
	    !watching && scheduler.stop();
	};

	var skipNotifyOnElement = function (target) {
	    return !isSVG(target)
	        && !isReplacedElement(target)
	        && getComputedStyle(target).display === 'inline';
	};
	var ResizeObservation = (function () {
	    function ResizeObservation(target, observedBox) {
	        this.target = target;
	        this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
	        this.lastReportedSize = {
	            inlineSize: 0,
	            blockSize: 0
	        };
	    }
	    ResizeObservation.prototype.isActive = function () {
	        var size = calculateBoxSize(this.target, this.observedBox, true);
	        if (skipNotifyOnElement(this.target)) {
	            this.lastReportedSize = size;
	        }
	        if (this.lastReportedSize.inlineSize !== size.inlineSize
	            || this.lastReportedSize.blockSize !== size.blockSize) {
	            return true;
	        }
	        return false;
	    };
	    return ResizeObservation;
	}());

	var ResizeObserverDetail = (function () {
	    function ResizeObserverDetail(resizeObserver, callback) {
	        this.activeTargets = [];
	        this.skippedTargets = [];
	        this.observationTargets = [];
	        this.observer = resizeObserver;
	        this.callback = callback;
	    }
	    return ResizeObserverDetail;
	}());

	var observerMap = new WeakMap();
	var getObservationIndex = function (observationTargets, target) {
	    for (var i = 0; i < observationTargets.length; i += 1) {
	        if (observationTargets[i].target === target) {
	            return i;
	        }
	    }
	    return -1;
	};
	var ResizeObserverController = (function () {
	    function ResizeObserverController() {
	    }
	    ResizeObserverController.connect = function (resizeObserver, callback) {
	        var detail = new ResizeObserverDetail(resizeObserver, callback);
	        observerMap.set(resizeObserver, detail);
	    };
	    ResizeObserverController.observe = function (resizeObserver, target, options) {
	        var detail = observerMap.get(resizeObserver);
	        var firstObservation = detail.observationTargets.length === 0;
	        if (getObservationIndex(detail.observationTargets, target) < 0) {
	            firstObservation && resizeObservers.push(detail);
	            detail.observationTargets.push(new ResizeObservation(target, options && options.box));
	            updateCount(1);
	            scheduler.schedule();
	        }
	    };
	    ResizeObserverController.unobserve = function (resizeObserver, target) {
	        var detail = observerMap.get(resizeObserver);
	        var index = getObservationIndex(detail.observationTargets, target);
	        var lastObservation = detail.observationTargets.length === 1;
	        if (index >= 0) {
	            lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
	            detail.observationTargets.splice(index, 1);
	            updateCount(-1);
	        }
	    };
	    ResizeObserverController.disconnect = function (resizeObserver) {
	        var _this = this;
	        var detail = observerMap.get(resizeObserver);
	        detail.observationTargets.slice().forEach(function (ot) { return _this.unobserve(resizeObserver, ot.target); });
	        detail.activeTargets.splice(0, detail.activeTargets.length);
	    };
	    return ResizeObserverController;
	}());

	var ResizeObserver = (function () {
	    function ResizeObserver(callback) {
	        if (arguments.length === 0) {
	            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
	        }
	        if (typeof callback !== 'function') {
	            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
	        }
	        ResizeObserverController.connect(this, callback);
	    }
	    ResizeObserver.prototype.observe = function (target, options) {
	        if (arguments.length === 0) {
	            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
	        }
	        if (!isElement(target)) {
	            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
	        }
	        ResizeObserverController.observe(this, target, options);
	    };
	    ResizeObserver.prototype.unobserve = function (target) {
	        if (arguments.length === 0) {
	            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
	        }
	        if (!isElement(target)) {
	            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
	        }
	        ResizeObserverController.unobserve(this, target);
	    };
	    ResizeObserver.prototype.disconnect = function () {
	        ResizeObserverController.disconnect(this);
	    };
	    ResizeObserver.toString = function () {
	        return 'function ResizeObserver () { [polyfill code] }';
	    };
	    return ResizeObserver;
	}());

	// `Array.prototype.{ reduce, reduceRight }` methods implementation
	var createMethod$4 = function (IS_RIGHT) {
	  return function (that, callbackfn, argumentsLength, memo) {
	    aFunction$1(callbackfn);
	    var O = toObject(that);
	    var self = indexedObject(O);
	    var length = toLength(O.length);
	    var index = IS_RIGHT ? length - 1 : 0;
	    var i = IS_RIGHT ? -1 : 1;
	    if (argumentsLength < 2) while (true) {
	      if (index in self) {
	        memo = self[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if (IS_RIGHT ? index < 0 : length <= index) {
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }
	    return memo;
	  };
	};

	var arrayReduce = {
	  // `Array.prototype.reduce` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
	  left: createMethod$4(false),
	  // `Array.prototype.reduceRight` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
	  right: createMethod$4(true)
	};

	var $reduce = arrayReduce.left;


	// `Array.prototype.reduce` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
	_export({ target: 'Array', proto: true, forced: sloppyArrayMethod('reduce') }, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var defineProperty$1 = objectDefineProperty.f;

	var FunctionPrototype = Function.prototype;
	var FunctionPrototypeToString = FunctionPrototype.toString;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME = 'name';

	// Function instances `.name` property
	// https://tc39.github.io/ecma262/#sec-function-instances-name
	if (descriptors && !(NAME in FunctionPrototype)) {
	  defineProperty$1(FunctionPrototype, NAME, {
	    configurable: true,
	    get: function () {
	      try {
	        return FunctionPrototypeToString.call(this).match(nameRE)[1];
	      } catch (error) {
	        return '';
	      }
	    }
	  });
	}

	// `RegExp.prototype.flags` getter implementation
	// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
	var regexpFlags = function () {
	  var that = anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.dotAll) result += 's';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

	var nativeExec = RegExp.prototype.exec;
	// This always refers to the native implementation, because the
	// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
	// which loads this file before patching the method.
	var nativeReplace = String.prototype.replace;

	var patchedExec = nativeExec;

	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/;
	  var re2 = /b*/g;
	  nativeExec.call(re1, 'a');
	  nativeExec.call(re2, 'a');
	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
	})();

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

	if (PATCH) {
	  patchedExec = function exec(str) {
	    var re = this;
	    var lastIndex, reCopy, match, i;

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

	    match = nativeExec.call(re, str);

	    if (UPDATES_LAST_INDEX_WRONG && match) {
	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
	      nativeReplace.call(match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    return match;
	  };
	}

	var regexpExec = patchedExec;

	_export({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec }, {
	  exec: regexpExec
	});

	var SPECIES$2 = wellKnownSymbol('species');

	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
	  // #replace needs built-in support for named groups.
	  // #match works fine because it just return the exec results, even if it has
	  // a "grops" property.
	  var re = /./;
	  re.exec = function () {
	    var result = [];
	    result.groups = { a: '7' };
	    return result;
	  };
	  return ''.replace(re, '$<a>') !== '7';
	});

	// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	// Weex JS has frozen built-in prototypes, so use try / catch wrapper
	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
	  var re = /(?:)/;
	  var originalExec = re.exec;
	  re.exec = function () { return originalExec.apply(this, arguments); };
	  var result = 'ab'.split(re);
	  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
	});

	var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
	  var SYMBOL = wellKnownSymbol(KEY);

	  var DELEGATES_TO_SYMBOL = !fails(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  });

	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;
	    re.exec = function () { execCalled = true; return null; };

	    if (KEY === 'split') {
	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.
	      re.constructor = {};
	      re.constructor[SPECIES$2] = function () { return re; };
	    }

	    re[SYMBOL]('');
	    return !execCalled;
	  });

	  if (
	    !DELEGATES_TO_SYMBOL ||
	    !DELEGATES_TO_EXEC ||
	    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
	    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
	  ) {
	    var nativeRegExpMethod = /./[SYMBOL];
	    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
	      if (regexp.exec === regexpExec) {
	        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	          // The native String method already delegates to @@method (this
	          // polyfilled function), leasing to infinite recursion.
	          // We avoid it by directly calling the native @@method method.
	          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
	        }
	        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
	      }
	      return { done: false };
	    });
	    var stringMethod = methods[0];
	    var regexMethod = methods[1];

	    redefine(String.prototype, KEY, stringMethod);
	    redefine(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) { return regexMethod.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) { return regexMethod.call(string, this); }
	    );
	    if (sham) hide(RegExp.prototype[SYMBOL], 'sham', true);
	  }
	};

	var charAt$1 = stringMultibyte.charAt;

	// `AdvanceStringIndex` abstract operation
	// https://tc39.github.io/ecma262/#sec-advancestringindex
	var advanceStringIndex = function (S, index, unicode) {
	  return index + (unicode ? charAt$1(S, index).length : 1);
	};

	// `RegExpExec` abstract operation
	// https://tc39.github.io/ecma262/#sec-regexpexec
	var regexpExecAbstract = function (R, S) {
	  var exec = R.exec;
	  if (typeof exec === 'function') {
	    var result = exec.call(R, S);
	    if (typeof result !== 'object') {
	      throw TypeError('RegExp exec method returned something other than an Object or null');
	    }
	    return result;
	  }

	  if (classofRaw(R) !== 'RegExp') {
	    throw TypeError('RegExp#exec called on incompatible receiver');
	  }

	  return regexpExec.call(R, S);
	};

	// @@match logic
	fixRegexpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
	  return [
	    // `String.prototype.match` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.match
	    function match(regexp) {
	      var O = requireObjectCoercible(this);
	      var matcher = regexp == undefined ? undefined : regexp[MATCH];
	      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	    },
	    // `RegExp.prototype[@@match]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
	    function (regexp) {
	      var res = maybeCallNative(nativeMatch, regexp, this);
	      if (res.done) return res.value;

	      var rx = anObject(regexp);
	      var S = String(this);

	      if (!rx.global) return regexpExecAbstract(rx, S);

	      var fullUnicode = rx.unicode;
	      rx.lastIndex = 0;
	      var A = [];
	      var n = 0;
	      var result;
	      while ((result = regexpExecAbstract(rx, S)) !== null) {
	        var matchStr = String(result[0]);
	        A[n] = matchStr;
	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
	        n++;
	      }
	      return n === 0 ? null : A;
	    }
	  ];
	});

	var max$1 = Math.max;
	var min$2 = Math.min;
	var floor$1 = Math.floor;
	var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

	var maybeToString = function (it) {
	  return it === undefined ? it : String(it);
	};

	// @@replace logic
	fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
	  return [
	    // `String.prototype.replace` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
	    function replace(searchValue, replaceValue) {
	      var O = requireObjectCoercible(this);
	      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
	      return replacer !== undefined
	        ? replacer.call(searchValue, O, replaceValue)
	        : nativeReplace.call(String(O), searchValue, replaceValue);
	    },
	    // `RegExp.prototype[@@replace]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
	    function (regexp, replaceValue) {
	      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
	      if (res.done) return res.value;

	      var rx = anObject(regexp);
	      var S = String(this);

	      var functionalReplace = typeof replaceValue === 'function';
	      if (!functionalReplace) replaceValue = String(replaceValue);

	      var global = rx.global;
	      if (global) {
	        var fullUnicode = rx.unicode;
	        rx.lastIndex = 0;
	      }
	      var results = [];
	      while (true) {
	        var result = regexpExecAbstract(rx, S);
	        if (result === null) break;

	        results.push(result);
	        if (!global) break;

	        var matchStr = String(result[0]);
	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
	      }

	      var accumulatedResult = '';
	      var nextSourcePosition = 0;
	      for (var i = 0; i < results.length; i++) {
	        result = results[i];

	        var matched = String(result[0]);
	        var position = max$1(min$2(toInteger(result.index), S.length), 0);
	        var captures = [];
	        // NOTE: This is equivalent to
	        //   captures = result.slice(1).map(maybeToString)
	        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
	        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
	        var namedCaptures = result.groups;
	        if (functionalReplace) {
	          var replacerArgs = [matched].concat(captures, position, S);
	          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
	          var replacement = String(replaceValue.apply(undefined, replacerArgs));
	        } else {
	          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
	        }
	        if (position >= nextSourcePosition) {
	          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
	          nextSourcePosition = position + matched.length;
	        }
	      }
	      return accumulatedResult + S.slice(nextSourcePosition);
	    }
	  ];

	  // https://tc39.github.io/ecma262/#sec-getsubstitution
	  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
	    var tailPos = position + matched.length;
	    var m = captures.length;
	    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
	    if (namedCaptures !== undefined) {
	      namedCaptures = toObject(namedCaptures);
	      symbols = SUBSTITUTION_SYMBOLS;
	    }
	    return nativeReplace.call(replacement, symbols, function (match, ch) {
	      var capture;
	      switch (ch.charAt(0)) {
	        case '$': return '$';
	        case '&': return matched;
	        case '`': return str.slice(0, position);
	        case "'": return str.slice(tailPos);
	        case '<':
	          capture = namedCaptures[ch.slice(1, -1)];
	          break;
	        default: // \d\d?
	          var n = +ch;
	          if (n === 0) return match;
	          if (n > m) {
	            var f = floor$1(n / 10);
	            if (f === 0) return match;
	            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
	            return match;
	          }
	          capture = captures[n - 1];
	      }
	      return capture === undefined ? '' : capture;
	    });
	  }
	});

	// Helper function to retrieve options from element attributes
	var getOptions = function getOptions(obj) {
	  var options = Array.prototype.reduce.call(obj, function (acc, attribute) {
	    var option = attribute.name.match(/data-simplebar-(.+)/);

	    if (option) {
	      var key = option[1].replace(/\W+(.)/g, function (x, chr) {
	        return chr.toUpperCase();
	      });

	      switch (attribute.value) {
	        case 'true':
	          acc[key] = true;
	          break;

	        case 'false':
	          acc[key] = false;
	          break;

	        case undefined:
	          acc[key] = true;
	          break;

	        default:
	          acc[key] = attribute.value;
	      }
	    }

	    return acc;
	  }, {});
	  return options;
	};
	function getElementWindow(element) {
	  if (!element || !element.ownerDocument || !element.ownerDocument.defaultView) {
	    return window;
	  }

	  return element.ownerDocument.defaultView;
	}
	function getElementDocument(element) {
	  if (!element || !element.ownerDocument) {
	    return document;
	  }

	  return element.ownerDocument;
	}

	var cachedScrollbarWidth = null;
	var cachedDevicePixelRatio = null;

	if (canUseDom) {
	  window.addEventListener('resize', function () {
	    if (cachedDevicePixelRatio !== window.devicePixelRatio) {
	      cachedDevicePixelRatio = window.devicePixelRatio;
	      cachedScrollbarWidth = null;
	    }
	  });
	}

	function scrollbarWidth(el) {
	  if (cachedScrollbarWidth === null) {
	    var document = getElementDocument(el);

	    if (typeof document === 'undefined') {
	      cachedScrollbarWidth = 0;
	      return cachedScrollbarWidth;
	    }

	    var body = document.body;
	    var box = document.createElement('div');
	    box.classList.add('simplebar-hide-scrollbar');
	    body.appendChild(box);
	    var width = box.getBoundingClientRect().right;
	    body.removeChild(box);
	    cachedScrollbarWidth = width;
	  }

	  return cachedScrollbarWidth;
	}

	var SimpleBar =
	/*#__PURE__*/
	function () {
	  function SimpleBar(element, options) {
	    var _this = this;

	    this.onScroll = function () {
	      var elWindow = getElementWindow(_this.el);

	      if (!_this.scrollXTicking) {
	        elWindow.requestAnimationFrame(_this.scrollX);
	        _this.scrollXTicking = true;
	      }

	      if (!_this.scrollYTicking) {
	        elWindow.requestAnimationFrame(_this.scrollY);
	        _this.scrollYTicking = true;
	      }
	    };

	    this.scrollX = function () {
	      if (_this.axis.x.isOverflowing) {
	        _this.showScrollbar('x');

	        _this.positionScrollbar('x');
	      }

	      _this.scrollXTicking = false;
	    };

	    this.scrollY = function () {
	      if (_this.axis.y.isOverflowing) {
	        _this.showScrollbar('y');

	        _this.positionScrollbar('y');
	      }

	      _this.scrollYTicking = false;
	    };

	    this.onMouseEnter = function () {
	      _this.showScrollbar('x');

	      _this.showScrollbar('y');
	    };

	    this.onMouseMove = function (e) {
	      _this.mouseX = e.clientX;
	      _this.mouseY = e.clientY;

	      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
	        _this.onMouseMoveForAxis('x');
	      }

	      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
	        _this.onMouseMoveForAxis('y');
	      }
	    };

	    this.onMouseLeave = function () {
	      _this.onMouseMove.cancel();

	      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
	        _this.onMouseLeaveForAxis('x');
	      }

	      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
	        _this.onMouseLeaveForAxis('y');
	      }

	      _this.mouseX = -1;
	      _this.mouseY = -1;
	    };

	    this.onWindowResize = function () {
	      // Recalculate scrollbarWidth in case it's a zoom
	      _this.scrollbarWidth = _this.getScrollbarWidth();

	      _this.hideNativeScrollbar();
	    };

	    this.hideScrollbars = function () {
	      _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
	      _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

	      if (!_this.isWithinBounds(_this.axis.y.track.rect)) {
	        _this.axis.y.scrollbar.el.classList.remove(_this.classNames.visible);

	        _this.axis.y.isVisible = false;
	      }

	      if (!_this.isWithinBounds(_this.axis.x.track.rect)) {
	        _this.axis.x.scrollbar.el.classList.remove(_this.classNames.visible);

	        _this.axis.x.isVisible = false;
	      }
	    };

	    this.onPointerEvent = function (e) {
	      var isWithinTrackXBounds, isWithinTrackYBounds;
	      _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
	      _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

	      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
	        isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
	      }

	      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
	        isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
	      } // If any pointer event is called on the scrollbar


	      if (isWithinTrackXBounds || isWithinTrackYBounds) {
	        // Preventing the event's default action stops text being
	        // selectable during the drag.
	        e.preventDefault(); // Prevent event leaking

	        e.stopPropagation();

	        if (e.type === 'mousedown') {
	          if (isWithinTrackXBounds) {
	            _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();

	            if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
	              _this.onDragStart(e, 'x');
	            } else {
	              _this.onTrackClick(e, 'x');
	            }
	          }

	          if (isWithinTrackYBounds) {
	            _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();

	            if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
	              _this.onDragStart(e, 'y');
	            } else {
	              _this.onTrackClick(e, 'y');
	            }
	          }
	        }
	      }
	    };

	    this.drag = function (e) {
	      var eventOffset;
	      var track = _this.axis[_this.draggedAxis].track;
	      var trackSize = track.rect[_this.axis[_this.draggedAxis].sizeAttr];
	      var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
	      var contentSize = _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollSizeAttr];
	      var hostSize = parseInt(_this.elStyles[_this.axis[_this.draggedAxis].sizeAttr], 10);
	      e.preventDefault();
	      e.stopPropagation();

	      if (_this.draggedAxis === 'y') {
	        eventOffset = e.pageY;
	      } else {
	        eventOffset = e.pageX;
	      } // Calculate how far the user's mouse is from the top/left of the scrollbar (minus the dragOffset).


	      var dragPos = eventOffset - track.rect[_this.axis[_this.draggedAxis].offsetAttr] - _this.axis[_this.draggedAxis].dragOffset; // Convert the mouse position into a percentage of the scrollbar height/width.

	      var dragPerc = dragPos / (trackSize - scrollbar.size); // Scroll the content by the same percentage.

	      var scrollPos = dragPerc * (contentSize - hostSize); // Fix browsers inconsistency on RTL

	      if (_this.draggedAxis === 'x') {
	        scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? scrollPos - (trackSize + scrollbar.size) : scrollPos;
	        scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollPos : scrollPos;
	      }

	      _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
	    };

	    this.onEndDrag = function (e) {
	      var elDocument = getElementDocument(_this.el);
	      var elWindow = getElementWindow(_this.el);
	      e.preventDefault();
	      e.stopPropagation();

	      _this.el.classList.remove(_this.classNames.dragging);

	      elDocument.removeEventListener('mousemove', _this.drag, true);
	      elDocument.removeEventListener('mouseup', _this.onEndDrag, true);
	      _this.removePreventClickId = elWindow.setTimeout(function () {
	        // Remove these asynchronously so we still suppress click events
	        // generated simultaneously with mouseup.
	        elDocument.removeEventListener('click', _this.preventClick, true);
	        elDocument.removeEventListener('dblclick', _this.preventClick, true);
	        _this.removePreventClickId = null;
	      });
	    };

	    this.preventClick = function (e) {
	      e.preventDefault();
	      e.stopPropagation();
	    };

	    this.el = element;
	    this.minScrollbarWidth = 20;
	    this.options = Object.assign({}, SimpleBar.defaultOptions, {}, options);
	    this.classNames = Object.assign({}, SimpleBar.defaultOptions.classNames, {}, this.options.classNames);
	    this.axis = {
	      x: {
	        scrollOffsetAttr: 'scrollLeft',
	        sizeAttr: 'width',
	        scrollSizeAttr: 'scrollWidth',
	        offsetSizeAttr: 'offsetWidth',
	        offsetAttr: 'left',
	        overflowAttr: 'overflowX',
	        dragOffset: 0,
	        isOverflowing: true,
	        isVisible: false,
	        forceVisible: false,
	        track: {},
	        scrollbar: {}
	      },
	      y: {
	        scrollOffsetAttr: 'scrollTop',
	        sizeAttr: 'height',
	        scrollSizeAttr: 'scrollHeight',
	        offsetSizeAttr: 'offsetHeight',
	        offsetAttr: 'top',
	        overflowAttr: 'overflowY',
	        dragOffset: 0,
	        isOverflowing: true,
	        isVisible: false,
	        forceVisible: false,
	        track: {},
	        scrollbar: {}
	      }
	    };
	    this.removePreventClickId = null; // Don't re-instantiate over an existing one

	    if (SimpleBar.instances.has(this.el)) {
	      return;
	    }

	    this.recalculate = lodash_throttle(this.recalculate.bind(this), 64);
	    this.onMouseMove = lodash_throttle(this.onMouseMove.bind(this), 64);
	    this.hideScrollbars = lodash_debounce(this.hideScrollbars.bind(this), this.options.timeout);
	    this.onWindowResize = lodash_debounce(this.onWindowResize.bind(this), 64, {
	      leading: true
	    });
	    SimpleBar.getRtlHelpers = lodash_memoize(SimpleBar.getRtlHelpers);
	    this.init();
	  }
	  /**
	   * Static properties
	   */

	  /**
	   * Helper to fix browsers inconsistency on RTL:
	   *  - Firefox inverts the scrollbar initial position
	   *  - IE11 inverts both scrollbar position and scrolling offset
	   * Directly inspired by @KingSora's OverlayScrollbars https://github.com/KingSora/OverlayScrollbars/blob/master/js/OverlayScrollbars.js#L1634
	   */


	  SimpleBar.getRtlHelpers = function getRtlHelpers() {
	    var dummyDiv = document.createElement('div');
	    dummyDiv.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
	    var scrollbarDummyEl = dummyDiv.firstElementChild;
	    document.body.appendChild(scrollbarDummyEl);
	    var dummyContainerChild = scrollbarDummyEl.firstElementChild;
	    scrollbarDummyEl.scrollLeft = 0;
	    var dummyContainerOffset = SimpleBar.getOffset(scrollbarDummyEl);
	    var dummyContainerChildOffset = SimpleBar.getOffset(dummyContainerChild);
	    scrollbarDummyEl.scrollLeft = 999;
	    var dummyContainerScrollOffsetAfterScroll = SimpleBar.getOffset(dummyContainerChild);
	    return {
	      // determines if the scrolling is responding with negative values
	      isRtlScrollingInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left && dummyContainerChildOffset.left - dummyContainerScrollOffsetAfterScroll.left !== 0,
	      // determines if the origin scrollbar position is inverted or not (positioned on left or right)
	      isRtlScrollbarInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left
	    };
	  };

	  SimpleBar.getOffset = function getOffset(el) {
	    var rect = el.getBoundingClientRect();
	    var elDocument = getElementDocument(el);
	    var elWindow = getElementWindow(el);
	    return {
	      top: rect.top + (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
	      left: rect.left + (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
	    };
	  };

	  var _proto = SimpleBar.prototype;

	  _proto.init = function init() {
	    // Save a reference to the instance, so we know this DOM node has already been instancied
	    SimpleBar.instances.set(this.el, this); // We stop here on server-side

	    if (canUseDom) {
	      this.initDOM();
	      this.setAccessibilityAttributes();
	      this.scrollbarWidth = this.getScrollbarWidth();
	      this.recalculate();
	      this.initListeners();
	    }
	  };

	  _proto.initDOM = function initDOM() {
	    var _this2 = this;

	    // make sure this element doesn't have the elements yet
	    if (Array.prototype.filter.call(this.el.children, function (child) {
	      return child.classList.contains(_this2.classNames.wrapper);
	    }).length) {
	      // assume that element has his DOM already initiated
	      this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper);
	      this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper);
	      this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl);
	      this.offsetEl = this.el.querySelector("." + this.classNames.offset);
	      this.maskEl = this.el.querySelector("." + this.classNames.mask);
	      this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder);
	      this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl);
	      this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl);
	      this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal);
	      this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
	    } else {
	      // Prepare DOM
	      this.wrapperEl = document.createElement('div');
	      this.contentWrapperEl = document.createElement('div');
	      this.offsetEl = document.createElement('div');
	      this.maskEl = document.createElement('div');
	      this.contentEl = document.createElement('div');
	      this.placeholderEl = document.createElement('div');
	      this.heightAutoObserverWrapperEl = document.createElement('div');
	      this.heightAutoObserverEl = document.createElement('div');
	      this.wrapperEl.classList.add(this.classNames.wrapper);
	      this.contentWrapperEl.classList.add(this.classNames.contentWrapper);
	      this.offsetEl.classList.add(this.classNames.offset);
	      this.maskEl.classList.add(this.classNames.mask);
	      this.contentEl.classList.add(this.classNames.contentEl);
	      this.placeholderEl.classList.add(this.classNames.placeholder);
	      this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl);
	      this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);

	      while (this.el.firstChild) {
	        this.contentEl.appendChild(this.el.firstChild);
	      }

	      this.contentWrapperEl.appendChild(this.contentEl);
	      this.offsetEl.appendChild(this.contentWrapperEl);
	      this.maskEl.appendChild(this.offsetEl);
	      this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
	      this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
	      this.wrapperEl.appendChild(this.maskEl);
	      this.wrapperEl.appendChild(this.placeholderEl);
	      this.el.appendChild(this.wrapperEl);
	    }

	    if (!this.axis.x.track.el || !this.axis.y.track.el) {
	      var track = document.createElement('div');
	      var scrollbar = document.createElement('div');
	      track.classList.add(this.classNames.track);
	      scrollbar.classList.add(this.classNames.scrollbar);
	      track.appendChild(scrollbar);
	      this.axis.x.track.el = track.cloneNode(true);
	      this.axis.x.track.el.classList.add(this.classNames.horizontal);
	      this.axis.y.track.el = track.cloneNode(true);
	      this.axis.y.track.el.classList.add(this.classNames.vertical);
	      this.el.appendChild(this.axis.x.track.el);
	      this.el.appendChild(this.axis.y.track.el);
	    }

	    this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar);
	    this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar);

	    if (!this.options.autoHide) {
	      this.axis.x.scrollbar.el.classList.add(this.classNames.visible);
	      this.axis.y.scrollbar.el.classList.add(this.classNames.visible);
	    }

	    this.el.setAttribute('data-simplebar', 'init');
	  };

	  _proto.setAccessibilityAttributes = function setAccessibilityAttributes() {
	    var ariaLabel = this.options.ariaLabel || 'scrollable content';
	    this.contentWrapperEl.setAttribute('tabindex', '0');
	    this.contentWrapperEl.setAttribute('role', 'region');
	    this.contentWrapperEl.setAttribute('aria-label', ariaLabel);
	  };

	  _proto.initListeners = function initListeners() {
	    var _this3 = this;

	    var elWindow = getElementWindow(this.el); // Event listeners

	    if (this.options.autoHide) {
	      this.el.addEventListener('mouseenter', this.onMouseEnter);
	    }

	    ['mousedown', 'click', 'dblclick'].forEach(function (e) {
	      _this3.el.addEventListener(e, _this3.onPointerEvent, true);
	    });
	    ['touchstart', 'touchend', 'touchmove'].forEach(function (e) {
	      _this3.el.addEventListener(e, _this3.onPointerEvent, {
	        capture: true,
	        passive: true
	      });
	    });
	    this.el.addEventListener('mousemove', this.onMouseMove);
	    this.el.addEventListener('mouseleave', this.onMouseLeave);
	    this.contentWrapperEl.addEventListener('scroll', this.onScroll); // Browser zoom triggers a window resize

	    elWindow.addEventListener('resize', this.onWindowResize); // Hack for https://github.com/WICG/ResizeObserver/issues/38

	    var resizeObserverStarted = false;
	    var resizeObserver = elWindow.ResizeObserver || ResizeObserver;
	    this.resizeObserver = new resizeObserver(function () {
	      if (!resizeObserverStarted) return;

	      _this3.recalculate();
	    });
	    this.resizeObserver.observe(this.el);
	    this.resizeObserver.observe(this.contentEl);
	    elWindow.requestAnimationFrame(function () {
	      resizeObserverStarted = true;
	    }); // This is required to detect horizontal scroll. Vertical scroll only needs the resizeObserver.

	    this.mutationObserver = new elWindow.MutationObserver(this.recalculate);
	    this.mutationObserver.observe(this.contentEl, {
	      childList: true,
	      subtree: true,
	      characterData: true
	    });
	  };

	  _proto.recalculate = function recalculate() {
	    var elWindow = getElementWindow(this.el);
	    this.elStyles = elWindow.getComputedStyle(this.el);
	    this.isRtl = this.elStyles.direction === 'rtl';
	    var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
	    var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1;
	    var contentElOffsetWidth = this.contentEl.offsetWidth;
	    var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
	    var elOverflowX = this.elStyles.overflowX;
	    var elOverflowY = this.elStyles.overflowY;
	    this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft;
	    this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
	    var contentElScrollHeight = this.contentEl.scrollHeight;
	    var contentElScrollWidth = this.contentEl.scrollWidth;
	    this.contentWrapperEl.style.height = isHeightAuto ? 'auto' : '100%'; // Determine placeholder size

	    this.placeholderEl.style.width = isWidthAuto ? contentElOffsetWidth + "px" : 'auto';
	    this.placeholderEl.style.height = contentElScrollHeight + "px";
	    var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
	    this.axis.x.isOverflowing = contentElScrollWidth > contentElOffsetWidth;
	    this.axis.y.isOverflowing = contentElScrollHeight > contentWrapperElOffsetHeight; // Set isOverflowing to false if user explicitely set hidden overflow

	    this.axis.x.isOverflowing = elOverflowX === 'hidden' ? false : this.axis.x.isOverflowing;
	    this.axis.y.isOverflowing = elOverflowY === 'hidden' ? false : this.axis.y.isOverflowing;
	    this.axis.x.forceVisible = this.options.forceVisible === 'x' || this.options.forceVisible === true;
	    this.axis.y.forceVisible = this.options.forceVisible === 'y' || this.options.forceVisible === true;
	    this.hideNativeScrollbar(); // Set isOverflowing to false if scrollbar is not necessary (content is shorter than offset)

	    var offsetForXScrollbar = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
	    var offsetForYScrollbar = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
	    this.axis.x.isOverflowing = this.axis.x.isOverflowing && contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
	    this.axis.y.isOverflowing = this.axis.y.isOverflowing && contentElScrollHeight > contentWrapperElOffsetHeight - offsetForXScrollbar;
	    this.axis.x.scrollbar.size = this.getScrollbarSize('x');
	    this.axis.y.scrollbar.size = this.getScrollbarSize('y');
	    this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px";
	    this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px";
	    this.positionScrollbar('x');
	    this.positionScrollbar('y');
	    this.toggleTrackVisibility('x');
	    this.toggleTrackVisibility('y');
	  }
	  /**
	   * Calculate scrollbar size
	   */
	  ;

	  _proto.getScrollbarSize = function getScrollbarSize(axis) {
	    if (axis === void 0) {
	      axis = 'y';
	    }

	    if (!this.axis[axis].isOverflowing) {
	      return 0;
	    }

	    var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
	    var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
	    var scrollbarSize;
	    var scrollbarRatio = trackSize / contentSize; // Calculate new height/position of drag handle.

	    scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);

	    if (this.options.scrollbarMaxSize) {
	      scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
	    }

	    return scrollbarSize;
	  };

	  _proto.positionScrollbar = function positionScrollbar(axis) {
	    if (axis === void 0) {
	      axis = 'y';
	    }

	    if (!this.axis[axis].isOverflowing) {
	      return;
	    }

	    var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
	    var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
	    var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
	    var scrollbar = this.axis[axis].scrollbar;
	    var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
	    scrollOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollOffset : scrollOffset;
	    var scrollPourcent = scrollOffset / (contentSize - hostSize);
	    var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
	    handleOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? handleOffset + (trackSize - scrollbar.size) : handleOffset;
	    scrollbar.el.style.transform = axis === 'x' ? "translate3d(" + handleOffset + "px, 0, 0)" : "translate3d(0, " + handleOffset + "px, 0)";
	  };

	  _proto.toggleTrackVisibility = function toggleTrackVisibility(axis) {
	    if (axis === void 0) {
	      axis = 'y';
	    }

	    var track = this.axis[axis].track.el;
	    var scrollbar = this.axis[axis].scrollbar.el;

	    if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
	      track.style.visibility = 'visible';
	      this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'scroll';
	    } else {
	      track.style.visibility = 'hidden';
	      this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'hidden';
	    } // Even if forceVisible is enabled, scrollbar itself should be hidden


	    if (this.axis[axis].isOverflowing) {
	      scrollbar.style.display = 'block';
	    } else {
	      scrollbar.style.display = 'none';
	    }
	  };

	  _proto.hideNativeScrollbar = function hideNativeScrollbar() {
	    this.offsetEl.style[this.isRtl ? 'left' : 'right'] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
	    this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
	  }
	  /**
	   * On scroll event handling
	   */
	  ;

	  _proto.onMouseMoveForAxis = function onMouseMoveForAxis(axis) {
	    if (axis === void 0) {
	      axis = 'y';
	    }

	    this.axis[axis].track.rect = this.axis[axis].track.el.getBoundingClientRect();
	    this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
	    var isWithinScrollbarBoundsX = this.isWithinBounds(this.axis[axis].scrollbar.rect);

	    if (isWithinScrollbarBoundsX) {
	      this.axis[axis].scrollbar.el.classList.add(this.classNames.hover);
	    } else {
	      this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
	    }

	    if (this.isWithinBounds(this.axis[axis].track.rect)) {
	      this.showScrollbar(axis);
	      this.axis[axis].track.el.classList.add(this.classNames.hover);
	    } else {
	      this.axis[axis].track.el.classList.remove(this.classNames.hover);
	    }
	  };

	  _proto.onMouseLeaveForAxis = function onMouseLeaveForAxis(axis) {
	    if (axis === void 0) {
	      axis = 'y';
	    }

	    this.axis[axis].track.el.classList.remove(this.classNames.hover);
	    this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
	  };

	  /**
	   * Show scrollbar
	   */
	  _proto.showScrollbar = function showScrollbar(axis) {
	    if (axis === void 0) {
	      axis = 'y';
	    }

	    var scrollbar = this.axis[axis].scrollbar.el;

	    if (!this.axis[axis].isVisible) {
	      scrollbar.classList.add(this.classNames.visible);
	      this.axis[axis].isVisible = true;
	    }

	    if (this.options.autoHide) {
	      this.hideScrollbars();
	    }
	  }
	  /**
	   * Hide Scrollbar
	   */
	  ;

	  /**
	   * on scrollbar handle drag movement starts
	   */
	  _proto.onDragStart = function onDragStart(e, axis) {
	    if (axis === void 0) {
	      axis = 'y';
	    }

	    var elDocument = getElementDocument(this.el);
	    var elWindow = getElementWindow(this.el);
	    var scrollbar = this.axis[axis].scrollbar; // Measure how far the user's mouse is from the top of the scrollbar drag handle.

	    var eventOffset = axis === 'y' ? e.pageY : e.pageX;
	    this.axis[axis].dragOffset = eventOffset - scrollbar.rect[this.axis[axis].offsetAttr];
	    this.draggedAxis = axis;
	    this.el.classList.add(this.classNames.dragging);
	    elDocument.addEventListener('mousemove', this.drag, true);
	    elDocument.addEventListener('mouseup', this.onEndDrag, true);

	    if (this.removePreventClickId === null) {
	      elDocument.addEventListener('click', this.preventClick, true);
	      elDocument.addEventListener('dblclick', this.preventClick, true);
	    } else {
	      elWindow.clearTimeout(this.removePreventClickId);
	      this.removePreventClickId = null;
	    }
	  }
	  /**
	   * Drag scrollbar handle
	   */
	  ;

	  _proto.onTrackClick = function onTrackClick(e, axis) {
	    var _this4 = this;

	    if (axis === void 0) {
	      axis = 'y';
	    }

	    if (!this.options.clickOnTrack) return;
	    var elWindow = getElementWindow(this.el);
	    this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
	    var scrollbar = this.axis[axis].scrollbar;
	    var scrollbarOffset = scrollbar.rect[this.axis[axis].offsetAttr];
	    var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
	    var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
	    var t = axis === 'y' ? this.mouseY - scrollbarOffset : this.mouseX - scrollbarOffset;
	    var dir = t < 0 ? -1 : 1;
	    var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;

	    var scrollTo = function scrollTo() {
	      if (dir === -1) {
	        if (scrolled > scrollSize) {
	          var _this4$contentWrapper;

	          scrolled -= _this4.options.clickOnTrackSpeed;

	          _this4.contentWrapperEl.scrollTo((_this4$contentWrapper = {}, _this4$contentWrapper[_this4.axis[axis].offsetAttr] = scrolled, _this4$contentWrapper));

	          elWindow.requestAnimationFrame(scrollTo);
	        }
	      } else {
	        if (scrolled < scrollSize) {
	          var _this4$contentWrapper2;

	          scrolled += _this4.options.clickOnTrackSpeed;

	          _this4.contentWrapperEl.scrollTo((_this4$contentWrapper2 = {}, _this4$contentWrapper2[_this4.axis[axis].offsetAttr] = scrolled, _this4$contentWrapper2));

	          elWindow.requestAnimationFrame(scrollTo);
	        }
	      }
	    };

	    scrollTo();
	  }
	  /**
	   * Getter for content element
	   */
	  ;

	  _proto.getContentElement = function getContentElement() {
	    return this.contentEl;
	  }
	  /**
	   * Getter for original scrolling element
	   */
	  ;

	  _proto.getScrollElement = function getScrollElement() {
	    return this.contentWrapperEl;
	  };

	  _proto.getScrollbarWidth = function getScrollbarWidth() {
	    // Try/catch for FF 56 throwing on undefined computedStyles
	    try {
	      // Detect browsers supporting CSS scrollbar styling and do not calculate
	      if (getComputedStyle(this.contentWrapperEl, '::-webkit-scrollbar').display === 'none' || 'scrollbarWidth' in document.documentElement.style || '-ms-overflow-style' in document.documentElement.style) {
	        return 0;
	      } else {
	        return scrollbarWidth(this.el);
	      }
	    } catch (e) {
	      return scrollbarWidth(this.el);
	    }
	  };

	  _proto.removeListeners = function removeListeners() {
	    var _this5 = this;

	    var elWindow = getElementWindow(this.el); // Event listeners

	    if (this.options.autoHide) {
	      this.el.removeEventListener('mouseenter', this.onMouseEnter);
	    }

	    ['mousedown', 'click', 'dblclick'].forEach(function (e) {
	      _this5.el.removeEventListener(e, _this5.onPointerEvent, true);
	    });
	    ['touchstart', 'touchend', 'touchmove'].forEach(function (e) {
	      _this5.el.removeEventListener(e, _this5.onPointerEvent, {
	        capture: true,
	        passive: true
	      });
	    });
	    this.el.removeEventListener('mousemove', this.onMouseMove);
	    this.el.removeEventListener('mouseleave', this.onMouseLeave);

	    if (this.contentWrapperEl) {
	      this.contentWrapperEl.removeEventListener('scroll', this.onScroll);
	    }

	    elWindow.removeEventListener('resize', this.onWindowResize);

	    if (this.mutationObserver) {
	      this.mutationObserver.disconnect();
	    }

	    if (this.resizeObserver) {
	      this.resizeObserver.disconnect();
	    } // Cancel all debounced functions


	    this.recalculate.cancel();
	    this.onMouseMove.cancel();
	    this.hideScrollbars.cancel();
	    this.onWindowResize.cancel();
	  }
	  /**
	   * UnMount mutation observer and delete SimpleBar instance from DOM element
	   */
	  ;

	  _proto.unMount = function unMount() {
	    this.removeListeners();
	    SimpleBar.instances.delete(this.el);
	  }
	  /**
	   * Check if mouse is within bounds
	   */
	  ;

	  _proto.isWithinBounds = function isWithinBounds(bbox) {
	    return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
	  }
	  /**
	   * Find element children matches query
	   */
	  ;

	  _proto.findChild = function findChild(el, query) {
	    var matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
	    return Array.prototype.filter.call(el.children, function (child) {
	      return matches.call(child, query);
	    })[0];
	  };

	  return SimpleBar;
	}();

	SimpleBar.defaultOptions = {
	  autoHide: true,
	  forceVisible: false,
	  clickOnTrack: true,
	  clickOnTrackSpeed: 40,
	  classNames: {
	    contentEl: 'simplebar-content',
	    contentWrapper: 'simplebar-content-wrapper',
	    offset: 'simplebar-offset',
	    mask: 'simplebar-mask',
	    wrapper: 'simplebar-wrapper',
	    placeholder: 'simplebar-placeholder',
	    scrollbar: 'simplebar-scrollbar',
	    track: 'simplebar-track',
	    heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
	    heightAutoObserverEl: 'simplebar-height-auto-observer',
	    visible: 'simplebar-visible',
	    horizontal: 'simplebar-horizontal',
	    vertical: 'simplebar-vertical',
	    hover: 'simplebar-hover',
	    dragging: 'simplebar-dragging'
	  },
	  scrollbarMinSize: 25,
	  scrollbarMaxSize: 0,
	  timeout: 1000
	};
	SimpleBar.instances = new WeakMap();

	SimpleBar.initDOMLoadedElements = function () {
	  document.removeEventListener('DOMContentLoaded', this.initDOMLoadedElements);
	  window.removeEventListener('load', this.initDOMLoadedElements);
	  Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]'), function (el) {
	    if (el.getAttribute('data-simplebar') !== 'init' && !SimpleBar.instances.has(el)) new SimpleBar(el, getOptions(el.attributes));
	  });
	};

	SimpleBar.removeObserver = function () {
	  this.globalObserver.disconnect();
	};

	SimpleBar.initHtmlApi = function () {
	  this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this); // MutationObserver is IE11+

	  if (typeof MutationObserver !== 'undefined') {
	    // Mutation observer to observe dynamically added elements
	    this.globalObserver = new MutationObserver(SimpleBar.handleMutations);
	    this.globalObserver.observe(document, {
	      childList: true,
	      subtree: true
	    });
	  } // Taken from jQuery `ready` function
	  // Instantiate elements already present on the page


	  if (document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll) {
	    // Handle it asynchronously to allow scripts the opportunity to delay init
	    window.setTimeout(this.initDOMLoadedElements);
	  } else {
	    document.addEventListener('DOMContentLoaded', this.initDOMLoadedElements);
	    window.addEventListener('load', this.initDOMLoadedElements);
	  }
	};

	SimpleBar.handleMutations = function (mutations) {
	  mutations.forEach(function (mutation) {
	    Array.prototype.forEach.call(mutation.addedNodes, function (addedNode) {
	      if (addedNode.nodeType === 1) {
	        if (addedNode.hasAttribute('data-simplebar')) {
	          !SimpleBar.instances.has(addedNode) && document.documentElement.contains(addedNode) && new SimpleBar(addedNode, getOptions(addedNode.attributes));
	        } else {
	          Array.prototype.forEach.call(addedNode.querySelectorAll('[data-simplebar]'), function (el) {
	            if (el.getAttribute('data-simplebar') !== 'init' && !SimpleBar.instances.has(el) && document.documentElement.contains(el)) new SimpleBar(el, getOptions(el.attributes));
	          });
	        }
	      }
	    });
	    Array.prototype.forEach.call(mutation.removedNodes, function (removedNode) {
	      if (removedNode.nodeType === 1) {
	        if (removedNode.getAttribute('data-simplebar') === 'init') {
	          SimpleBar.instances.has(removedNode) && !document.documentElement.contains(removedNode) && SimpleBar.instances.get(removedNode).unMount();
	        } else {
	          Array.prototype.forEach.call(removedNode.querySelectorAll('[data-simplebar="init"]'), function (el) {
	            SimpleBar.instances.has(el) && !document.documentElement.contains(el) && SimpleBar.instances.get(el).unMount();
	          });
	        }
	      }
	    });
	  });
	};

	SimpleBar.getOptions = getOptions;
	/**
	 * HTML API
	 * Called only in a browser env.
	 */

	if (canUseDom) {
	  SimpleBar.initHtmlApi();
	}

	return SimpleBar;

}));

$(function () {


  // =====================================
  // Profit
  // =====================================
  var chart = {
    series: [
      { name: "Earnings this month:", data: [355, 390, 300, 350, 390, 180, 355, 390] },
      { name: "Expense this month:", data: [280, 250, 325, 215, 250, 310, 280, 250] },
    ],

    chart: {
      type: "bar",
      height: 345,
      offsetX: -15,
      toolbar: { show: true },
      foreColor: "#adb0bb",
      fontFamily: 'inherit',
      sparkline: { enabled: false },
    },


    colors: ["#5D87FF", "#49BEFF"],


    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
        borderRadius: [6],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      },
    },
    markers: { size: 0 },

    dataLabels: {
      enabled: false,
    },


    legend: {
      show: false,
    },


    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },

    xaxis: {
      type: "category",
      categories: ["16/08", "17/08", "18/08", "19/08", "20/08", "21/08", "22/08", "23/08"],
      labels: {
        style: { cssClass: "grey--text lighten-2--text fill-color" },
      },
    },


    yaxis: {
      show: true,
      min: 0,
      max: 400,
      tickAmount: 4,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    stroke: {
      show: true,
      width: 3,
      lineCap: "butt",
      colors: ["transparent"],
    },


    tooltip: { theme: "light" },

    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 3,
            }
          },
        }
      }
    ]


  };

  var chart = new ApexCharts(document.querySelector("#chart"), chart);
  chart.render();


  // =====================================
  // Breakup
  // =====================================
  var breakup = {
    color: "#adb5bd",
    series: [38, 40, 25],
    labels: ["2022", "2021", "2020"],
    chart: {
      width: 180,
      type: "donut",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
        },
      },
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors: ["#5D87FF", "#ecf2ff", "#F9F9FD"],

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 150,
          },
        },
      },
    ],
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#breakup"), breakup);
  chart.render();



  // =====================================
  // Earning
  // =====================================
  var earning = {
    chart: {
      id: "sparkline3",
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Earnings",
        color: "#49BEFF",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#f3feff"],
      type: "solid",
      opacity: 0.05,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#earning"), earning).render();
})