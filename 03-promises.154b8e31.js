!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc");function u(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}btnRef=document.querySelector("form"),inpDelay=document.querySelector('input[name="delay"]'),inpStep=document.querySelector('input[name="step"]'),inpAmount=document.querySelector('input[name="amount"]'),btnRef.addEventListener("submit",(function(n){n.preventDefault();for(var t=0;t<Number(inpAmount.value);t+=1)u(t+1,Number(inpDelay.value)+t*Number(inpStep.value)).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.success("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}))}();
//# sourceMappingURL=03-promises.154b8e31.js.map
