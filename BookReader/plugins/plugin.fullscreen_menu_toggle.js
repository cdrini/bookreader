!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){!function(){function e(e){e.refs.$BRnav.children(".js-tooltip").css("display","none");setTimeout((function(){e.hideNavigation();var n=e.fullscreenMenu;i(e),n.menuIsShowing=!1}),500)}jQuery.extend(BookReader.defaultOptions,{enableFullScreenMenuToggle:!0});var n,t=function(e){e.refs.$BRnav.children(".js-tooltip").css("display","block"),o(e)},o=function(e){e.refs.$brPageViewEl&&e.refs.$brPageViewEl[0].removeEventListener("click",r,!0),e.refs.$brTwoPageView&&e.refs.$brTwoPageView[0].removeEventListener("click",r,!0)},r=function(e,n){var t=e.fullscreenMenu,o=n.currentTarget.offsetWidth,r=n.currentTarget.offsetLeft,i=Math.round(o/5),u=Math.round(i+r),l=Math.round(o-i+r);n.clientX>u&&n.clientX<l&&(t.menuIsShowing?(e.hideNavigation(),t.menuIsShowing=!1):(e.showNavigation(),t.menuIsShowing=!0),event.stopPropagation())};function i(e){var n=(document.querySelector(".BRcontainer")||{}).firstChild;n&&n.addEventListener("click",r.bind(this,e),!0)}BookReader.prototype.initFullScreenToggle=function(e){$(document).on("BookReader:fullscreenToggled",function(e){this.isFullscreen()?this.fullscreenMenu.onEnterFullscreen(this):this.fullscreenMenu.onExitFullscreen(this)}.bind(this));var n=function(e){this.isFullscreen()&&i(this)}.bind(this);$(document).on(["BookReader:1PageViewSelected","BookReader:2PageViewSelected","BookReader:zoomIn","BookReader:zoomOut","BookReader:resize"].join(" "),n),$(window).on("orientationchange",n)},BookReader.prototype.setup=(n=BookReader.prototype.setup,function(o){n.call(this,o),this.fullscreenMenu={menuIsShowing:!0,onEnterFullscreen:e,onExitFullscreen:t}}),BookReader.prototype.init=function(e){return function(){e.call(this),this.options.enableFullScreenMenuToggle&&this.initFullScreenToggle()}}(BookReader.prototype.init)}()}]);
//# sourceMappingURL=plugin.fullscreen_menu_toggle.js.map