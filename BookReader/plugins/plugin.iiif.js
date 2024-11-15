"use strict";(self.webpackChunk_internetarchive_bookreader=self.webpackChunk_internetarchive_bookreader||[]).push([[69],{8:function(t,e,n){function o(t,e,n){return e=a(e),function(t,e){if(e&&("object"==c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,r()?Reflect.construct(e,n||[],a(t).constructor):e.apply(t,n))}function r(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(r=function(){return!!t})()}function i(){return i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},i.apply(null,arguments)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,p(o.key),o)}}function l(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t){var e=function(t,e){if("object"!=c(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=c(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==c(e)?e:e+""}n(2675),n(9463),n(2259),n(5700),n(8706),n(3792),n(2062),n(9572),n(8130),n(9085),n(3851),n(875),n(9432),n(6099),n(825),n(888),n(7764),n(3500),n(2953);var h=window.BookReader,b={enabled:!0,manifest:null},d=function(){return l((function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;f(this,t),this.options=e,this.optionVariables=n,this.manifest=e.manifest}),[{key:"load",value:function(){if("http://iiif.io/api/presentation/2/context.json"==this.manifest["@context"]){var t=this.manifest;return this.manifestToBookReaderV2(t)}if("http://iiif.io/api/presentation/3/context.json"==this.manifest["@context"]){var e=this.manifest;return this.manifestToBookReaderV3(e)}throw new Error("Unsupported IIIF context "+this.manifest["@context"])}},{key:"manifestToBookReaderV3",value:function(t){var e={bookTitle:v(t.label),pageProgression:"right-to-left"==t.viewingDirection?"rl":"lr",metadata:(t.metadata||[]).map((function(t){return{label:v(t.label),value:v(t.value)}})),data:[],getPageURI:function(e,n,o){var r=Math.floor(100/n),i=t.items[e].items[0].items[0].body,a=(i instanceof Array?i[0]:i).service[0].id;return"".concat(a,"/full/pct:").concat(r,"/0/default.jpg")}};"top-to-bottom"!=t.viewingDirection&&"bottom-to-top"!=t.viewingDirection||console.warn("Unsupported viewingDirection",t.viewingDirection);var n=[];return t.items.forEach((function(o,r){var i=t.items[r].items[0].items[0].body,a={uri:(i instanceof Array?i[0]:i).service[0].id,width:o.width,height:o.height,pageNum:v(o.label)};n.push(a),r%2==0&&(e.data.push(n),n=[])})),n.length>0&&e.data.push(n),e}},{key:"manifestToBookReaderV2",value:function(t){var e,n={bookTitle:t.label,metadata:t.metadata,thumbnail:null===(e=t.thumbnail)||void 0===e?void 0:e["@id"],data:[],getPageURI:function(e,n,o){var r=Math.floor(100/n),i=t.sequences[0].canvases[e].images[0].resource.service["@id"];return"".concat(i,"/full/pct:").concat(r,"/0/default.jpg")}},o=[];return t.sequences[0].canvases.forEach((function(t,e){var r={uri:t.images[0].resource.service["@id"],width:t.width,height:t.height,pageNum:t.label};o.push(r),e%2==0&&(n.data.push(o),o=[])})),o.length>0&&n.data.push(o),n}}])}();function v(t){var e=Object.keys(t)[0];return(t[navigator.language]||t[e])[0]}var y=function(t){function e(){return f(this,e),o(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(e,t),l(e,[{key:"setup",value:function(t){var n,o,r,u=Object.assign({},b,t.plugins.iiif);return u.enabled&&(this.iiifPlugin=new d(u,t.vars),t.plugins.iiif=this.iiifPlugin.options,Object.assign(t,this.iiifPlugin.load())),(n=e,o=this,"function"==typeof(r=i(a(1&3?n.prototype:n),"setup",o))?function(t){return r.apply(o,t)}:r)([t])}}])}(h);window.BookReader=y}},function(t){t(t.s=8)}]);
//# sourceMappingURL=plugin.iiif.js.map