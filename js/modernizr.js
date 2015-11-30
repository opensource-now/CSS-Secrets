/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-textshadow !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,s,i,a;for(var l in m){if(e=[],n=m[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),y.push((r?"":"no-")+a.join("-"))}}function s(e){var n=v.className,t=Modernizr._config.classPrefix||"";if(g&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),g?v.className.baseVal=n:v.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):g?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(){var e=n.body;return e||(e=a(g?"svg":"body"),e.fake=!0),e}function f(e,t,o,r){var s,i,f,u,d="modernizr",p=a("div"),c=l();if(parseInt(o,10))for(;o--;)f=a("div"),f.id=r?r[o]:d+(o+1),p.appendChild(f);return s=a("style"),s.type="text/css",s.id="s"+d,(c.fake?c:p).appendChild(s),c.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",u=v.style.overflow,v.style.overflow="hidden",v.appendChild(c)),i=t(p,e),c.fake?(c.parentNode.removeChild(c),v.style.overflow=u,v.offsetHeight):p.parentNode.removeChild(p),!!i}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(u(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];r--;)s.push("("+u(n[r])+":"+o+")");return s=s.join(" or "),f("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function p(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e,n,r,s){function l(){u&&(delete w.style,delete w.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var f=d(e,r);if(!o(f,"undefined"))return f}for(var u,c,m,h,y,v=["modernizr","tspan"];!w.style;)u=!0,w.modElem=a(v.shift()),w.style=w.modElem.style;for(m=e.length,c=0;m>c;c++)if(h=e[c],y=w.style[h],i(h,"-")&&(h=p(h)),w.style[h]!==t){if(s||o(r,"undefined"))return l(),"pfx"==n?h:!0;try{w.style[h]=r}catch(g){}if(w.style[h]!=y)return l(),"pfx"==n?h:!0}return l(),!1}var m=[],h={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){m.push({name:e,fn:n,options:t})},addAsyncTest:function(e){m.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=h,Modernizr=new Modernizr;var y=[],v=n.documentElement,g="svg"===v.nodeName.toLowerCase(),C={elem:a("modernizr")};Modernizr._q.push(function(){delete C.elem});var w={style:C.elem.style};Modernizr._q.unshift(function(){delete w.style});var S=h.testProp=function(e,n,o){return c([e],t,n,o)};Modernizr.addTest("textshadow",S("textShadow","1px 1px")),r(),s(y),delete h.addTest,delete h.addAsyncTest;for(var x=0;x<Modernizr._q.length;x++)Modernizr._q[x]();e.Modernizr=Modernizr}(window,document);