#!/usr/bin/env node







parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OUiy":[function(require,module,exports) {
module.exports={info:{name:"Win Verma",title:"Frontend Developer"},links:[{name:"github",url:"github.com/winverma"},{name:"linkedin",url:"linkedin/in/win-electrifier"}],style:{corner:"premium",border:"dotted",baseColor:"cyan",accentColor:"white"}};
},{}],"CE5M":[function(require,module,exports) {
const e=require("chalk"),{style:o}=require("../config.json"),c={base:e[o.baseColor],accent:e[o.accentColor]};module.exports=c;
},{"../config.json":"OUiy"}],"iJA9":[function(require,module,exports) {
const t=1,i=4,d=1,n=4,g=1,a=8,o=1,e=4,m=2,p=3;module.exports={marginTop:1,marginBottom:1,marginLeft:4,marginRight:4,paddingTop:1,paddingBottom:1,paddingLeft:4,paddingRight:8,indent:2,titlePaddingLeft:3};
},{}],"gWjp":[function(require,module,exports) {
const r={verticalBorder:"┇",horizontalBorder:"-"},o={verticalBorder:"│",horizontalBorder:"―"},e={verticalBorder:"│",horizontalBorder:"━"};module.exports={dotted:r,base:o,thick:e};
},{}],"FO+Z":[function(require,module,exports) {
const e=require("./colors"),{links:r,info:t,style:n}=require("../config.json"),{paddingLeft:o,paddingRight:a,indent:i}=require("./constants"),g=require("./border"),s=e=>" ".repeat(e),l=r=>e.base(g[n.border].verticalBorder).repeat(r),d=r=>e.base(g[n.border].horizontalBorder).repeat(r),h=e=>{return` ${e.name}: ${e.url} `.length},u=()=>{const e=r.map(e=>h(e));return Math.max(...e)},c=()=>{const e=r.map(e=>e.name.length);return Math.max(...e)},p=()=>{const e=u();return o+i+a+e},m=e=>{return p()-o-a-e.length},L=e=>{return c()-e.length};module.exports={space:s,verticalBorder:l,horizontalBorder:d,getLinkLength:h,getLongestLength:u,getLongestLinkNameLength:c,getWidth:p,getFill:m,getShift:L};
},{"./colors":"CE5M","../config.json":"OUiy","./constants":"iJA9","./border":"gWjp"}],"EVzN":[function(require,module,exports) {
const t={topLeft:"⟐",topRight:"⟐",bottomLeft:"⟐",bottomRight:"⟐"},o={topLeft:"◢",topRight:"◣",bottomLeft:"◥",bottomRight:"◤"},e={topLeft:"┏",topRight:"┓",bottomLeft:"┗",bottomRight:"┛"},m={topLeft:"╭",topRight:"╮",bottomLeft:"╰",bottomRight:"╯"},p={topLeft:"✜",topRight:"✜",bottomLeft:"✜",bottomRight:"✜"};module.exports={premium:t,rounded:m,base:e,triangle:o,plus:p};
},{}],"RfSX":[function(require,module,exports) {
const{space:e,verticalBorder:t,horizontalBorder:n,getLinkLength:r,getLongestLength:o,getLongestLinkNameLength:i,getWidth:s,getFill:a,getShift:g}=require("./utils"),b=require("./corners"),L=require("./colors"),{marginLeft:c,paddingLeft:u,paddingRight:d,indent:l,marginRight:h,titlePaddingLeft:j}=require("./constants"),{links:f,info:p,style:m}=require("../config.json"),B=()=>{return[e(c),L.base(b[m.corner].topLeft),L.base(n(s())),L.base(b[m.corner].topRight),e(h)].join("")},k=()=>{return[e(c),L.base(b[m.corner].bottomLeft),L.base(n(s())),L.base(b[m.corner].bottomRight),e(h)].join("")},q=()=>{return[L.base(e(c)),L.base(t(1)),L.base(e(s())),L.base(t(1)),e(h)].join("")},R=n=>{return[e(c),L.base(t(1)),e(u),n,e(d),L.base(t(1)),e(h)].join("")},S=(t,n)=>{const r=g(t),o=[e(r+l),t,": ",n].join(""),i=a(o),s=[e(r+l),L.base(t),L.base(": "),L.accent(n),e(i)].join("");return R(s)},T=n=>{const r=s()-j-n.length;return[L.base(e(c)),L.base(t(1)),L.base(e(j)),L.base(n),L.base(e(r)),L.base(t(1))].join("")},v=()=>{return[e(c),L.base(t(1)),L.base(n(s())),L.base(t(1))].join("")};module.exports={getBlankLine:q,getTopBorder:B,getLinkLine:S,getTitleLine:T,getBottomBorder:k,getSeperator:v};
},{"./utils":"FO+Z","./corners":"EVzN","./colors":"CE5M","./constants":"iJA9","../config.json":"OUiy"}],"Focm":[function(require,module,exports) {

const{links:e,info:n}=require("../config.json"),{getBlankLine:o,getTopBorder:i,getLinkLine:t,getTitleLine:r,getBottomBorder:g,getSeperator:l}=require("./builder"),a=[i(),o(),r(n.name),r(n.title),o(),l(),o(),...e.map(e=>t(e.name,e.url)),o(),o(),g()].join("\n");console.log(a);
},{"../config.json":"OUiy","./builder":"RfSX"}]},{},["Focm"], null)