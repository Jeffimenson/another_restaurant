(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    font-family: Helvetica, sans-serif;\n}\n\nbutton, input {\n    background-color: inherit;\n    border: none;\n    font-size: inherit;\n    font-family: inherit;\n    color: inherit;\n    cursor: pointer;\n}\n\nbutton:active, input:active {\n    cursor: default;\n}\n\n/* Preliminaries above and other stuff below */\n\nimg.logo {\n    display: block;\n    height: 100%;\n}\n\nheader {\n    width: 100%;\n    letter-spacing: 3px;\n    display: flex;\n    font-size: 18px;\n    justify-content: center;\n    align-items: center;\n    gap: 4em;\n    box-shadow: 0 0 2px 2px gainsboro;\n    height: 80px;\n}\n\nheader > .fake-link {\n    padding: 30px 0;\n    height: 100%;\n}\n\nbutton#order {\n    background-color: blue;\n    color: azure;\n    width: 130px;\n    padding: 12px 16px;\n    border-radius: 6px;\n}\n\n.fake-link.selected {\n    border-bottom: 4px gold solid;\n    padding-bottom: 26px;\n    font-weight: 700;\n}\n\n#content {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 80px 25%;\n    display: flex;\n    flex-direction: column;\n\n    font-size: 18px;\n    gap: 20px;\n}\n\n#content h1 {\n    font-size: 2.5em;\n}\n\n#content.about img {\n    display: block;\n    height: 450px;\n    object-fit:cover;\n    margin-bottom: 20px;\n}\n\n#content .menu-holder {\n    width: 100%;\n\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: auto;\n    grid-auto-rows: 200px;\n\n    grid-column-start: 2;\n    gap: 60px;\n}\n\n#content h1{\n    text-align: center;\n}\n\n#content.menu {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 80px;\n}\n\n#content.menu .sidebar {\n    display: flex;\n    flex-direction: column;\n\n    grid-row-start: 2;\n\n    border: gainsboro 2px solid;\n    border-radius: 10px;\n    height: fit-content;\n}\n\n#content.menu .sidebar.featured {\n    grid-row-start: 1;\n}\n\n.sidebar .sidetab {\n    display: flex;\n    height: 80px;\n    align-items: center;\n    gap: 15px;\n    padding-left: 15px;\n\n    cursor: pointer;\n}\n\n.sidebar .sidetab.selected {\n    font-weight: bold;\n    border-left: blue 4px solid;\n}\n\n.sidetab img {\n    display: block;\n    width: 30%;\n    object-fit: contain;\n}\n\n.menu-holder article {\n\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n\n    cursor: pointer;\n\n    justify-content: space-between;\n}\n\n\n.menu-holder article img {\n    width: 100%;\n    height: 70%;\n    margin-bottom: 0px;    \n    object-fit: contain;\n\n}\n.menu-holder article p:not(.limited)::after {\n    content: ' ®';\n}\n\n.menu-holder article p.limited {\n    color: rgb(173, 121, 24);\n    font-size: 0.8em;\n    font-weight: bold;\n}\n\n.menu-holder h1 {\n    text-align: center;\n    grid-column: 1 / -1;\n}",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=t.p+"a0c7661c0b963cd23374.jpg",h=t.p+"d8243cecb215e5ad41df.jpeg";function b(n,e){let t=x(0,n);const o=t>-1?t:n.length,r=n.slice(0,o),i=[];let a;for(;t>-1;){const e=x(t+1,n),o=e>-1?e:n.length,r=n.slice(t+1,o);if(0===r.length)throw console.error("Usage error: Tried to use two symbols for class and/or id in a row.");if("."===n.at(t))i.unshift(r);else{if(void 0!==a)throw console.error("Argument error: elements can't have multiple ids");a=r}t=e}const c=document.createElement(r);for(const n of i)c.classList.add(n);return a&&c.setAttribute("id",a),e&&e.append(c),c}function x(n,e){const t=e.indexOf("#",n),o=e.indexOf(".",n);return-1===t?o:-1===o?t:t>o?o:t}const v=document.querySelector("body"),y=document.querySelector("#content"),w=[];!function(n){const e=b("header"),t=b("img.logo",e);t.src=g,t.alt="logo",n[0]=b("button.fake-link#menu",e),n[0].textContent="Menu",n[1]=b("button.fake-link#contact",e),n[1].textContent="Contact",n[2]=b("button.fake-link#about",e),n[2].textContent="About",b("button#order",e).textContent="Order now",v.prepend(e)}(w);const k=w[0],C=w[1],E=w[2];j(E,w);let T="about";function j(n,e){S(n,e),b("h1",y).textContent="About us";const t=b("img",y);t.src=h,t.alt="man enjoying bcbonalds burger";const o=document.createElement("h2");o.textContent="Dedication to you",y.append(o);const r=document.createElement("p");r.textContent="We redefine fast food with imaginative flavors and a quirky atmosphere all for our mission to make dining fun and unforgettable! Join us at BcBonalds for a delightful experience that leaves you smiling with every bite.",y.append(r)}function L(n,e,t){const o=document.createElement("article"),r=document.createElement("img");r.src=e,r.alt="entry image for "+n,o.append(r),t&&(b("p.limited",o).textContent="Limited Time Only");const i=document.createElement("p");return i.textContent=n,o.append(i),o}function S(n,e){e.map((n=>{n.classList.remove("selected")})),n.classList.add("selected")}function A(n){n.textContent=""}function M(n){y.classList.remove(T),y.classList.add(n),T=n}y.classList.add(T),E.addEventListener("click",(()=>{M("about"),A(y),j(E,w)})),C.addEventListener("click",(()=>{M("contact"),A(y),function(n,e){S(n,e);const t=document.createElement("h2");t.textContent="Reach us at:",y.append(t);const o=document.createElement("p");o.append(document.createTextNode("bcbonaldsisgreat@bcbonalds.com")),o.append(document.createElement("br")),o.append(document.createTextNode("669-420-6969")),y.append(o)}(C,w)})),k.addEventListener("click",(()=>{M("menu"),A(y),function(n,e){S(n,e);const t=b("div.sidebar.featured",y),o=b("div.sidetab",t),r=b("img",o);r.src="https://s7d1.scene7.com/is/image/mcdonalds/desserts_shakes_300x300:category-panel-left-desktop",r.alt="featured image",b("p",o).textContent="Featured";const i=b("div.sidebar",y),a=b("div.sidetab.selected",i);b("img",a).src="https://s7d1.scene7.com/is/image/mcdonalds/burgers_300x300:category-panel-left-desktop",a.alt="tab picture",b("p",a).textContent="Burgers";for(let n=0;n<5;n++){const n=b("div.sidetab",i);b("img",n).src="https://s7d1.scene7.com/is/image/mcdonalds/burgers_300x300:category-panel-left-desktop",n.alt="tab picture",b("p",n).textContent="Burgers"}const c=b("div.menu-holder",y);b("h1",c).textContent="Our food";for(let n=0;n<8;n++){const n=L("BcBurger","https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:1-4-product-tile-desktop",!0);c.append(n)}}(k,w)}))})()})();