(()=>{"use strict";var n,e,t,o,r,i,a,c,s,l,d,p,u,h,f={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,':root {\n    --nav-width: 220px;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n/* Nav bar */\n\nnav {\n    position: fixed;\n    width: var(--nav-width);\n    top: 0;\n    bottom: 0;\n    left: 0;\n    background-color: whitesmoke;\n    padding: 16px;\n}\n\nnav h2 {\n    margin-bottom: 16px;\n}\n\nnav ul {\n    list-style: none;\n    padding-block: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\nnav h3 {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n#add-new-list {\n    width: 30px;\n    height: 30px;\n    font-weight: bold;\n    font-size: 24px;\n    border: none;\n    background-color: lightskyblue;\n    border-radius: 50%;\n}\n\n#add-new-list:hover {\n    background-color: black;\n    color: white;\n    cursor: pointer;\n}\n\nnav a {\n    display: inline-block;\n    width: 100%;\n    text-decoration: none;\n    color: black;\n    font-weight: bold;\n    padding: 4px 16px;\n}\n\nnav a:hover {\n    background-color: #ccc;\n}\n\n/* Main */\n\nmain {\n    margin-left: calc(var(--nav-width) + 16px);\n    padding: 16px;\n    display: flex;\n    height: 100vh;\n    gap: 32px;\n}\n\n/* To do list */\n\n.current-list {\n    position: relative;\n    background-color: blueviolet;\n    padding: 16px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.current-list h2 {\n    margin-bottom: 8px;\n}\n\n#add-new-task {\n    position: absolute;\n    bottom: 16px;\n    right: 16px;\n    font-weight: bold;\n    font-size: 2.6rem;\n    border: none;\n    border-radius: 50%;\n    width: 56px;\n    height: 56px;\n    background-color: lightskyblue;\n    color: white;\n}\n\n#add-new-task:hover {\n    background-color: white;\n    color: black;\n    cursor: pointer;\n}\n\n/* List item */\n\n.list-item {\n    background-color: whitesmoke;\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    border-radius: 8px;\n}\n\n.list-item > h3 {\n    border-bottom: 1px solid #ccc;\n}\n\n.list-item button {\n    width: 60px;\n    padding: 4px;    \n}\n\n.list-item-delete {\n    background-color: tomato;\n    border: none;\n    border-radius: 6px;\n}\n\n.list-item-delete:hover {\n    outline: 1px solid tomato;\n    background-color: whitesmoke;\n    cursor: pointer;\n}\n\n.list-item-view {\n    background-color: gold;\n    border: none;\n    border-radius: 6px;\n}\n\n.list-item-view:hover {\n    outline: 1px solid gold;\n    background-color: whitesmoke;\n    cursor: pointer;\n}\n\n/* New task */\n\n.task {\n    background-color: whitesmoke;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    padding: 16px;\n    border-radius: 8px;\n    width: 480px;\n}\n\n.task-item {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n}\n\n.task-item :nth-child(1) {\n    flex-basis: 80px;\n}\n\n.task-item :nth-child(2) {\n    flex-grow: 1;\n}\n\n.task input,\n.task textarea,\n.task select {\n    padding: 4px;\n    font-size: 1rem;\n}\n\n.task .buttons {\n    margin-top: auto;\n    display: flex;\n    gap: 16px;\n}\n\n.task .buttons * {\n    flex: 1;\n    padding-block:12px;\n    font-size: 1rem;\n    font-weight: bold;\n    border: none;\n    border-radius: 8px;\n}\n\n.task #delete {\n    background: tomato;\n}\n\n#delete:hover {\n    outline: 2px solid tomato;\n    background-color: white;\n    cursor: pointer;\n}\n\n.task #save-change {\n    background-color: lime;\n}\n\n#save-change:hover {\n    outline: 2px solid lime;\n    background-color: white;\n    cursor: pointer;\n}\n\n.checklist-list {\n    list-style: none;\n    padding-inline: 16px;\n}\n\n.checklist-list li {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.checklist-list input[type="checkbox"] {\n    width: 18px;\n    height: 18px;\n}\n\n.checklist-list input[type="checkbox"]:hover {\n    cursor: pointer;\n}\n\n#new-checklist-item {\n    width: 20px;\n    height: 20px;\n    border: none;\n    background-color: #ccc;\n    border-radius: 50%;\n    font-weight: bold;\n    font-size: 16px;\n    margin-top: 16px;\n    margin-inline: 16px;\n}\n\n#new-checklist-item:hover {\n    outline: 2px solid black;\n    cursor: pointer;\n}\n\n#new-checklist-item + span {\n    color: #949494;\n}',""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=r(h,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},x={};function g(n){var e=x[n];if(void 0!==e)return e.exports;var t=x[n]={id:n,exports:{}};return f[n](t,t.exports,g),t.exports}g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),g.nc=void 0,n=g(379),e=g.n(n),t=g(795),o=g.n(t),r=g(569),i=g.n(r),a=g(565),c=g.n(a),s=g(216),l=g.n(s),d=g(589),p=g.n(d),u=g(426),(h={}).styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals})();