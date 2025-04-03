function am(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function sm(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var _d={exports:{}},Qo={},Ed={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ui=Symbol.for("react.element"),um=Symbol.for("react.portal"),cm=Symbol.for("react.fragment"),dm=Symbol.for("react.strict_mode"),fm=Symbol.for("react.profiler"),pm=Symbol.for("react.provider"),hm=Symbol.for("react.context"),mm=Symbol.for("react.forward_ref"),gm=Symbol.for("react.suspense"),vm=Symbol.for("react.memo"),ym=Symbol.for("react.lazy"),Eu=Symbol.iterator;function xm(e){return e===null||typeof e!="object"?null:(e=Eu&&e[Eu]||e["@@iterator"],typeof e=="function"?e:null)}var Cd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Od=Object.assign,bd={};function cr(e,t,n){this.props=e,this.context=t,this.refs=bd,this.updater=n||Cd}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Td(){}Td.prototype=cr.prototype;function Ps(e,t,n){this.props=e,this.context=t,this.refs=bd,this.updater=n||Cd}var js=Ps.prototype=new Td;js.constructor=Ps;Od(js,cr.prototype);js.isPureReactComponent=!0;var Cu=Array.isArray,zd=Object.prototype.hasOwnProperty,_s={current:null},Ld={key:!0,ref:!0,__self:!0,__source:!0};function Rd(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)zd.call(t,r)&&!Ld.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ui,type:e,key:o,ref:l,props:i,_owner:_s.current}}function wm(e,t){return{$$typeof:ui,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Es(e){return typeof e=="object"&&e!==null&&e.$$typeof===ui}function Sm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ou=/\/+/g;function kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sm(""+e.key):t.toString(36)}function Ui(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ui:case um:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+kl(l,0):r,Cu(i)?(n="",e!=null&&(n=e.replace(Ou,"$&/")+"/"),Ui(i,t,n,"",function(u){return u})):i!=null&&(Es(i)&&(i=wm(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ou,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Cu(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+kl(o,a);l+=Ui(o,t,n,s,i)}else if(s=xm(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+kl(o,a++),l+=Ui(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function xi(e,t,n){if(e==null)return e;var r=[],i=0;return Ui(e,r,"","",function(o){return t.call(n,o,i++)}),r}function km(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},Hi={transition:null},Pm={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Hi,ReactCurrentOwner:_s};function Nd(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:xi,forEach:function(e,t,n){xi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xi(e,function(){t++}),t},toArray:function(e){return xi(e,function(t){return t})||[]},only:function(e){if(!Es(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=cr;B.Fragment=cm;B.Profiler=fm;B.PureComponent=Ps;B.StrictMode=dm;B.Suspense=gm;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pm;B.act=Nd;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Od({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=_s.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)zd.call(t,s)&&!Ld.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ui,type:e.type,key:i,ref:o,props:r,_owner:l}};B.createContext=function(e){return e={$$typeof:hm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pm,_context:e},e.Consumer=e};B.createElement=Rd;B.createFactory=function(e){var t=Rd.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:mm,render:e}};B.isValidElement=Es;B.lazy=function(e){return{$$typeof:ym,_payload:{_status:-1,_result:e},_init:km}};B.memo=function(e,t){return{$$typeof:vm,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Hi.transition;Hi.transition={};try{e()}finally{Hi.transition=t}};B.unstable_act=Nd;B.useCallback=function(e,t){return ze.current.useCallback(e,t)};B.useContext=function(e){return ze.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};B.useEffect=function(e,t){return ze.current.useEffect(e,t)};B.useId=function(){return ze.current.useId()};B.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return ze.current.useMemo(e,t)};B.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};B.useRef=function(e){return ze.current.useRef(e)};B.useState=function(e){return ze.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return ze.current.useTransition()};B.version="18.3.1";Ed.exports=B;var E=Ed.exports;const Qn=jd(E),jm=am({__proto__:null,default:Qn},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m=E,Em=Symbol.for("react.element"),Cm=Symbol.for("react.fragment"),Om=Object.prototype.hasOwnProperty,bm=_m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tm={key:!0,ref:!0,__self:!0,__source:!0};function $d(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Om.call(t,r)&&!Tm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Em,type:e,key:o,ref:l,props:i,_owner:bm.current}}Qo.Fragment=Cm;Qo.jsx=$d;Qo.jsxs=$d;_d.exports=Qo;var c=_d.exports,Id={exports:{}},Xe={},Md={exports:{}},Dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,N){var F=L.length;L.push(N);e:for(;0<F;){var V=F-1>>>1,G=L[V];if(0<i(G,N))L[V]=N,L[F]=G,F=V;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var N=L[0],F=L.pop();if(F!==N){L[0]=F;e:for(var V=0,G=L.length,Ce=G>>>1;V<Ce;){var Ue=2*(V+1)-1,Re=L[Ue],He=Ue+1,yt=L[He];if(0>i(Re,F))He<G&&0>i(yt,Re)?(L[V]=yt,L[He]=F,V=He):(L[V]=Re,L[Ue]=F,V=Ue);else if(He<G&&0>i(yt,F))L[V]=yt,L[He]=F,V=He;else break e}}return N}function i(L,N){var F=L.sortIndex-N.sortIndex;return F!==0?F:L.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],h=1,d=null,g=3,x=!1,p=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=L)r(u),N.sortIndex=N.expirationTime,t(s,N);else break;N=n(u)}}function w(L){if(y=!1,v(L),!p)if(n(s)!==null)p=!0,ae(P);else{var N=n(u);N!==null&&xe(w,N.startTime-L)}}function P(L,N){p=!1,y&&(y=!1,m(z),z=-1),x=!0;var F=g;try{for(v(N),d=n(s);d!==null&&(!(d.expirationTime>N)||L&&!I());){var V=d.callback;if(typeof V=="function"){d.callback=null,g=d.priorityLevel;var G=V(d.expirationTime<=N);N=e.unstable_now(),typeof G=="function"?d.callback=G:d===n(s)&&r(s),v(N)}else r(s);d=n(s)}if(d!==null)var Ce=!0;else{var Ue=n(u);Ue!==null&&xe(w,Ue.startTime-N),Ce=!1}return Ce}finally{d=null,g=F,x=!1}}var j=!1,_=null,z=-1,O=5,C=-1;function I(){return!(e.unstable_now()-C<O)}function $(){if(_!==null){var L=e.unstable_now();C=L;var N=!0;try{N=_(!0,L)}finally{N?M():(j=!1,_=null)}}else j=!1}var M;if(typeof f=="function")M=function(){f($)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,rt=A.port2;A.port1.onmessage=$,M=function(){rt.postMessage(null)}}else M=function(){k($,0)};function ae(L){_=L,j||(j=!0,M())}function xe(L,N){z=k(function(){L(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){p||x||(p=!0,ae(P))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(L){switch(g){case 1:case 2:case 3:var N=3;break;default:N=g}var F=g;g=N;try{return L()}finally{g=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,N){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var F=g;g=L;try{return N()}finally{g=F}},e.unstable_scheduleCallback=function(L,N,F){var V=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?V+F:V):F=V,L){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=F+G,L={id:h++,callback:N,priorityLevel:L,startTime:F,expirationTime:G,sortIndex:-1},F>V?(L.sortIndex=F,t(u,L),n(s)===null&&L===n(u)&&(y?(m(z),z=-1):y=!0,xe(w,F-V))):(L.sortIndex=G,t(s,L),p||x||(p=!0,ae(P))),L},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(L){var N=g;return function(){var F=g;g=N;try{return L.apply(this,arguments)}finally{g=F}}}})(Dd);Md.exports=Dd;var zm=Md.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm=E,Ge=zm;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ad=new Set,Hr={};function wn(e,t){Gn(e,t),Gn(e+"Capture",t)}function Gn(e,t){for(Hr[e]=t,e=0;e<t.length;e++)Ad.add(t[e])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),da=Object.prototype.hasOwnProperty,Rm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bu={},Tu={};function Nm(e){return da.call(Tu,e)?!0:da.call(bu,e)?!1:Rm.test(e)?Tu[e]=!0:(bu[e]=!0,!1)}function $m(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Im(e,t,n,r){if(t===null||typeof t>"u"||$m(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cs=/[\-:]([a-z])/g;function Os(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Cs,Os);ke[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Cs,Os);ke[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Cs,Os);ke[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function bs(e,t,n,r){var i=ke.hasOwnProperty(t)?ke[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Im(t,n,i,r)&&(n=null),r||i===null?Nm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var bt=Lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wi=Symbol.for("react.element"),_n=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),Ts=Symbol.for("react.strict_mode"),fa=Symbol.for("react.profiler"),Fd=Symbol.for("react.provider"),Ud=Symbol.for("react.context"),zs=Symbol.for("react.forward_ref"),pa=Symbol.for("react.suspense"),ha=Symbol.for("react.suspense_list"),Ls=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Hd=Symbol.for("react.offscreen"),zu=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=zu&&e[zu]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,Pl;function Cr(e){if(Pl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pl=t&&t[1]||""}return`
`+Pl+e}var jl=!1;function _l(e,t){if(!e||jl)return"";jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{jl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cr(e):""}function Mm(e){switch(e.tag){case 5:return Cr(e.type);case 16:return Cr("Lazy");case 13:return Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 2:case 15:return e=_l(e.type,!1),e;case 11:return e=_l(e.type.render,!1),e;case 1:return e=_l(e.type,!0),e;default:return""}}function ma(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case _n:return"Portal";case fa:return"Profiler";case Ts:return"StrictMode";case pa:return"Suspense";case ha:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ud:return(e.displayName||"Context")+".Consumer";case Fd:return(e._context.displayName||"Context")+".Provider";case zs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ls:return t=e.displayName||null,t!==null?t:ma(e.type)||"Memo";case Nt:t=e._payload,e=e._init;try{return ma(e(t))}catch{}}return null}function Dm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ma(t);case 8:return t===Ts?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Am(e){var t=Wd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Si(e){e._valueTracker||(e._valueTracker=Am(e))}function Bd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ga(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Lu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vd(e,t){t=t.checked,t!=null&&bs(e,"checked",t,!1)}function va(e,t){Vd(e,t);var n=qt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ya(e,t.type,n):t.hasOwnProperty("defaultValue")&&ya(e,t.type,qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ru(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ya(e,t,n){(t!=="number"||oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Or=Array.isArray;function Dn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Nu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(Or(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qt(n)}}function Qd(e,t){var n=qt(t.value),r=qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $u(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ki,Xd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ki=ki||document.createElement("div"),ki.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ki.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fm=["Webkit","ms","Moz","O"];Object.keys(Lr).forEach(function(e){Fm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lr[t]=Lr[e]})});function Kd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Lr.hasOwnProperty(e)&&Lr[e]?(""+t).trim():t+"px"}function Yd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Um=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sa(e,t){if(t){if(Um[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function ka(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pa=null;function Rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ja=null,An=null,Fn=null;function Iu(e){if(e=fi(e)){if(typeof ja!="function")throw Error(b(280));var t=e.stateNode;t&&(t=qo(t),ja(e.stateNode,e.type,t))}}function qd(e){An?Fn?Fn.push(e):Fn=[e]:An=e}function Zd(){if(An){var e=An,t=Fn;if(Fn=An=null,Iu(e),t)for(e=0;e<t.length;e++)Iu(t[e])}}function Jd(e,t){return e(t)}function ef(){}var El=!1;function tf(e,t,n){if(El)return e(t,n);El=!0;try{return Jd(e,t,n)}finally{El=!1,(An!==null||Fn!==null)&&(ef(),Zd())}}function Br(e,t){var n=e.stateNode;if(n===null)return null;var r=qo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var _a=!1;if(_t)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){_a=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{_a=!1}function Hm(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Rr=!1,lo=null,ao=!1,Ea=null,Wm={onError:function(e){Rr=!0,lo=e}};function Bm(e,t,n,r,i,o,l,a,s){Rr=!1,lo=null,Hm.apply(Wm,arguments)}function Vm(e,t,n,r,i,o,l,a,s){if(Bm.apply(this,arguments),Rr){if(Rr){var u=lo;Rr=!1,lo=null}else throw Error(b(198));ao||(ao=!0,Ea=u)}}function Sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mu(e){if(Sn(e)!==e)throw Error(b(188))}function Qm(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Mu(i),e;if(o===r)return Mu(i),t;o=o.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function rf(e){return e=Qm(e),e!==null?of(e):null}function of(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=of(e);if(t!==null)return t;e=e.sibling}return null}var lf=Ge.unstable_scheduleCallback,Du=Ge.unstable_cancelCallback,Gm=Ge.unstable_shouldYield,Xm=Ge.unstable_requestPaint,ue=Ge.unstable_now,Km=Ge.unstable_getCurrentPriorityLevel,Ns=Ge.unstable_ImmediatePriority,af=Ge.unstable_UserBlockingPriority,so=Ge.unstable_NormalPriority,Ym=Ge.unstable_LowPriority,sf=Ge.unstable_IdlePriority,Go=null,gt=null;function qm(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Go,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:eg,Zm=Math.log,Jm=Math.LN2;function eg(e){return e>>>=0,e===0?32:31-(Zm(e)/Jm|0)|0}var Pi=64,ji=4194304;function br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function uo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=br(a):(o&=l,o!==0&&(r=br(o)))}else l=n&~i,l!==0?r=br(l):o!==0&&(r=br(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-st(t),i=1<<n,r|=e[n],t&=~i;return r}function tg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ng(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-st(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=tg(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Ca(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uf(){var e=Pi;return Pi<<=1,!(Pi&4194240)&&(Pi=64),e}function Cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ci(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function rg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-st(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function $s(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var K=0;function cf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var df,Is,ff,pf,hf,Oa=!1,_i=[],Ht=null,Wt=null,Bt=null,Vr=new Map,Qr=new Map,Mt=[],ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Au(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(t.pointerId)}}function yr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=fi(t),t!==null&&Is(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function og(e,t,n,r,i){switch(t){case"focusin":return Ht=yr(Ht,e,t,n,r,i),!0;case"dragenter":return Wt=yr(Wt,e,t,n,r,i),!0;case"mouseover":return Bt=yr(Bt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Vr.set(o,yr(Vr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Qr.set(o,yr(Qr.get(o)||null,e,t,n,r,i)),!0}return!1}function mf(e){var t=ln(e.target);if(t!==null){var n=Sn(t);if(n!==null){if(t=n.tag,t===13){if(t=nf(n),t!==null){e.blockedOn=t,hf(e.priority,function(){ff(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ba(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pa=r,n.target.dispatchEvent(r),Pa=null}else return t=fi(n),t!==null&&Is(t),e.blockedOn=n,!1;t.shift()}return!0}function Fu(e,t,n){Wi(e)&&n.delete(t)}function lg(){Oa=!1,Ht!==null&&Wi(Ht)&&(Ht=null),Wt!==null&&Wi(Wt)&&(Wt=null),Bt!==null&&Wi(Bt)&&(Bt=null),Vr.forEach(Fu),Qr.forEach(Fu)}function xr(e,t){e.blockedOn===t&&(e.blockedOn=null,Oa||(Oa=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,lg)))}function Gr(e){function t(i){return xr(i,e)}if(0<_i.length){xr(_i[0],e);for(var n=1;n<_i.length;n++){var r=_i[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&xr(Ht,e),Wt!==null&&xr(Wt,e),Bt!==null&&xr(Bt,e),Vr.forEach(t),Qr.forEach(t),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)mf(n),n.blockedOn===null&&Mt.shift()}var Un=bt.ReactCurrentBatchConfig,co=!0;function ag(e,t,n,r){var i=K,o=Un.transition;Un.transition=null;try{K=1,Ms(e,t,n,r)}finally{K=i,Un.transition=o}}function sg(e,t,n,r){var i=K,o=Un.transition;Un.transition=null;try{K=4,Ms(e,t,n,r)}finally{K=i,Un.transition=o}}function Ms(e,t,n,r){if(co){var i=ba(e,t,n,r);if(i===null)Ml(e,t,r,fo,n),Au(e,r);else if(og(i,e,t,n,r))r.stopPropagation();else if(Au(e,r),t&4&&-1<ig.indexOf(e)){for(;i!==null;){var o=fi(i);if(o!==null&&df(o),o=ba(e,t,n,r),o===null&&Ml(e,t,r,fo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ml(e,t,r,null,n)}}var fo=null;function ba(e,t,n,r){if(fo=null,e=Rs(r),e=ln(e),e!==null)if(t=Sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fo=e,null}function gf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Km()){case Ns:return 1;case af:return 4;case so:case Ym:return 16;case sf:return 536870912;default:return 16}default:return 16}}var At=null,Ds=null,Bi=null;function vf(){if(Bi)return Bi;var e,t=Ds,n=t.length,r,i="value"in At?At.value:At.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Bi=i.slice(e,1<r?1-r:void 0)}function Vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ei(){return!0}function Uu(){return!1}function Ke(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ei:Uu,this.isPropagationStopped=Uu,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ei)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ei)},persist:function(){},isPersistent:Ei}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},As=Ke(dr),di=le({},dr,{view:0,detail:0}),ug=Ke(di),Ol,bl,wr,Xo=le({},di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(Ol=e.screenX-wr.screenX,bl=e.screenY-wr.screenY):bl=Ol=0,wr=e),Ol)},movementY:function(e){return"movementY"in e?e.movementY:bl}}),Hu=Ke(Xo),cg=le({},Xo,{dataTransfer:0}),dg=Ke(cg),fg=le({},di,{relatedTarget:0}),Tl=Ke(fg),pg=le({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),hg=Ke(pg),mg=le({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gg=Ke(mg),vg=le({},dr,{data:0}),Wu=Ke(vg),yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wg[e])?!!t[e]:!1}function Fs(){return Sg}var kg=le({},di,{key:function(e){if(e.key){var t=yg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fs,charCode:function(e){return e.type==="keypress"?Vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pg=Ke(kg),jg=le({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bu=Ke(jg),_g=le({},di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fs}),Eg=Ke(_g),Cg=le({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Og=Ke(Cg),bg=le({},Xo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tg=Ke(bg),zg=[9,13,27,32],Us=_t&&"CompositionEvent"in window,Nr=null;_t&&"documentMode"in document&&(Nr=document.documentMode);var Lg=_t&&"TextEvent"in window&&!Nr,yf=_t&&(!Us||Nr&&8<Nr&&11>=Nr),Vu=" ",Qu=!1;function xf(e,t){switch(e){case"keyup":return zg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function Rg(e,t){switch(e){case"compositionend":return wf(t);case"keypress":return t.which!==32?null:(Qu=!0,Vu);case"textInput":return e=t.data,e===Vu&&Qu?null:e;default:return null}}function Ng(e,t){if(Cn)return e==="compositionend"||!Us&&xf(e,t)?(e=vf(),Bi=Ds=At=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yf&&t.locale!=="ko"?null:t.data;default:return null}}var $g={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$g[e.type]:t==="textarea"}function Sf(e,t,n,r){qd(r),t=po(t,"onChange"),0<t.length&&(n=new As("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $r=null,Xr=null;function Ig(e){Lf(e,0)}function Ko(e){var t=Tn(e);if(Bd(t))return e}function Mg(e,t){if(e==="change")return t}var kf=!1;if(_t){var zl;if(_t){var Ll="oninput"in document;if(!Ll){var Xu=document.createElement("div");Xu.setAttribute("oninput","return;"),Ll=typeof Xu.oninput=="function"}zl=Ll}else zl=!1;kf=zl&&(!document.documentMode||9<document.documentMode)}function Ku(){$r&&($r.detachEvent("onpropertychange",Pf),Xr=$r=null)}function Pf(e){if(e.propertyName==="value"&&Ko(Xr)){var t=[];Sf(t,Xr,e,Rs(e)),tf(Ig,t)}}function Dg(e,t,n){e==="focusin"?(Ku(),$r=t,Xr=n,$r.attachEvent("onpropertychange",Pf)):e==="focusout"&&Ku()}function Ag(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ko(Xr)}function Fg(e,t){if(e==="click")return Ko(t)}function Ug(e,t){if(e==="input"||e==="change")return Ko(t)}function Hg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:Hg;function Kr(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!da.call(t,i)||!dt(e[i],t[i]))return!1}return!0}function Yu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qu(e,t){var n=Yu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yu(n)}}function jf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _f(){for(var e=window,t=oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oo(e.document)}return t}function Hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wg(e){var t=_f(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jf(n.ownerDocument.documentElement,n)){if(r!==null&&Hs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=qu(n,o);var l=qu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bg=_t&&"documentMode"in document&&11>=document.documentMode,On=null,Ta=null,Ir=null,za=!1;function Zu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;za||On==null||On!==oo(r)||(r=On,"selectionStart"in r&&Hs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Kr(Ir,r)||(Ir=r,r=po(Ta,"onSelect"),0<r.length&&(t=new As("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=On)))}function Ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bn={animationend:Ci("Animation","AnimationEnd"),animationiteration:Ci("Animation","AnimationIteration"),animationstart:Ci("Animation","AnimationStart"),transitionend:Ci("Transition","TransitionEnd")},Rl={},Ef={};_t&&(Ef=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function Yo(e){if(Rl[e])return Rl[e];if(!bn[e])return e;var t=bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ef)return Rl[e]=t[n];return e}var Cf=Yo("animationend"),Of=Yo("animationiteration"),bf=Yo("animationstart"),Tf=Yo("transitionend"),zf=new Map,Ju="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(e,t){zf.set(e,t),wn(t,[e])}for(var Nl=0;Nl<Ju.length;Nl++){var $l=Ju[Nl],Vg=$l.toLowerCase(),Qg=$l[0].toUpperCase()+$l.slice(1);Jt(Vg,"on"+Qg)}Jt(Cf,"onAnimationEnd");Jt(Of,"onAnimationIteration");Jt(bf,"onAnimationStart");Jt("dblclick","onDoubleClick");Jt("focusin","onFocus");Jt("focusout","onBlur");Jt(Tf,"onTransitionEnd");Gn("onMouseEnter",["mouseout","mouseover"]);Gn("onMouseLeave",["mouseout","mouseover"]);Gn("onPointerEnter",["pointerout","pointerover"]);Gn("onPointerLeave",["pointerout","pointerover"]);wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));function ec(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vm(r,t,void 0,e),e.currentTarget=null}function Lf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;ec(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;ec(i,a,u),o=s}}}if(ao)throw e=Ea,ao=!1,Ea=null,e}function q(e,t){var n=t[Ia];n===void 0&&(n=t[Ia]=new Set);var r=e+"__bubble";n.has(r)||(Rf(t,e,2,!1),n.add(r))}function Il(e,t,n){var r=0;t&&(r|=4),Rf(n,e,r,t)}var Oi="_reactListening"+Math.random().toString(36).slice(2);function Yr(e){if(!e[Oi]){e[Oi]=!0,Ad.forEach(function(n){n!=="selectionchange"&&(Gg.has(n)||Il(n,!1,e),Il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oi]||(t[Oi]=!0,Il("selectionchange",!1,t))}}function Rf(e,t,n,r){switch(gf(t)){case 1:var i=ag;break;case 4:i=sg;break;default:i=Ms}n=i.bind(null,t,n,e),i=void 0,!_a||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ml(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=ln(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}tf(function(){var u=o,h=Rs(n),d=[];e:{var g=zf.get(e);if(g!==void 0){var x=As,p=e;switch(e){case"keypress":if(Vi(n)===0)break e;case"keydown":case"keyup":x=Pg;break;case"focusin":p="focus",x=Tl;break;case"focusout":p="blur",x=Tl;break;case"beforeblur":case"afterblur":x=Tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=dg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Eg;break;case Cf:case Of:case bf:x=hg;break;case Tf:x=Og;break;case"scroll":x=ug;break;case"wheel":x=Tg;break;case"copy":case"cut":case"paste":x=gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Bu}var y=(t&4)!==0,k=!y&&e==="scroll",m=y?g!==null?g+"Capture":null:g;y=[];for(var f=u,v;f!==null;){v=f;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,m!==null&&(w=Br(f,m),w!=null&&y.push(qr(f,w,v)))),k)break;f=f.return}0<y.length&&(g=new x(g,p,null,n,h),d.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==Pa&&(p=n.relatedTarget||n.fromElement)&&(ln(p)||p[Et]))break e;if((x||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,x?(p=n.relatedTarget||n.toElement,x=u,p=p?ln(p):null,p!==null&&(k=Sn(p),p!==k||p.tag!==5&&p.tag!==6)&&(p=null)):(x=null,p=u),x!==p)){if(y=Hu,w="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Bu,w="onPointerLeave",m="onPointerEnter",f="pointer"),k=x==null?g:Tn(x),v=p==null?g:Tn(p),g=new y(w,f+"leave",x,n,h),g.target=k,g.relatedTarget=v,w=null,ln(h)===u&&(y=new y(m,f+"enter",p,n,h),y.target=v,y.relatedTarget=k,w=y),k=w,x&&p)t:{for(y=x,m=p,f=0,v=y;v;v=Pn(v))f++;for(v=0,w=m;w;w=Pn(w))v++;for(;0<f-v;)y=Pn(y),f--;for(;0<v-f;)m=Pn(m),v--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=Pn(y),m=Pn(m)}y=null}else y=null;x!==null&&tc(d,g,x,y,!1),p!==null&&k!==null&&tc(d,k,p,y,!0)}}e:{if(g=u?Tn(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var P=Mg;else if(Gu(g))if(kf)P=Ug;else{P=Ag;var j=Dg}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(P=Fg);if(P&&(P=P(e,u))){Sf(d,P,n,h);break e}j&&j(e,g,u),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&ya(g,"number",g.value)}switch(j=u?Tn(u):window,e){case"focusin":(Gu(j)||j.contentEditable==="true")&&(On=j,Ta=u,Ir=null);break;case"focusout":Ir=Ta=On=null;break;case"mousedown":za=!0;break;case"contextmenu":case"mouseup":case"dragend":za=!1,Zu(d,n,h);break;case"selectionchange":if(Bg)break;case"keydown":case"keyup":Zu(d,n,h)}var _;if(Us)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Cn?xf(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(yf&&n.locale!=="ko"&&(Cn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Cn&&(_=vf()):(At=h,Ds="value"in At?At.value:At.textContent,Cn=!0)),j=po(u,z),0<j.length&&(z=new Wu(z,e,null,n,h),d.push({event:z,listeners:j}),_?z.data=_:(_=wf(n),_!==null&&(z.data=_)))),(_=Lg?Rg(e,n):Ng(e,n))&&(u=po(u,"onBeforeInput"),0<u.length&&(h=new Wu("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=_))}Lf(d,t)})}function qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function po(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Br(e,n),o!=null&&r.unshift(qr(e,o,i)),o=Br(e,t),o!=null&&r.push(qr(e,o,i))),e=e.return}return r}function Pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=Br(n,o),s!=null&&l.unshift(qr(n,s,a))):i||(s=Br(n,o),s!=null&&l.push(qr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Xg=/\r\n?/g,Kg=/\u0000|\uFFFD/g;function nc(e){return(typeof e=="string"?e:""+e).replace(Xg,`
`).replace(Kg,"")}function bi(e,t,n){if(t=nc(t),nc(e)!==t&&n)throw Error(b(425))}function ho(){}var La=null,Ra=null;function Na(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $a=typeof setTimeout=="function"?setTimeout:void 0,Yg=typeof clearTimeout=="function"?clearTimeout:void 0,rc=typeof Promise=="function"?Promise:void 0,qg=typeof queueMicrotask=="function"?queueMicrotask:typeof rc<"u"?function(e){return rc.resolve(null).then(e).catch(Zg)}:$a;function Zg(e){setTimeout(function(){throw e})}function Dl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Gr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gr(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ic(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fr=Math.random().toString(36).slice(2),mt="__reactFiber$"+fr,Zr="__reactProps$"+fr,Et="__reactContainer$"+fr,Ia="__reactEvents$"+fr,Jg="__reactListeners$"+fr,ev="__reactHandles$"+fr;function ln(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ic(e);e!==null;){if(n=e[mt])return n;e=ic(e)}return t}e=n,n=e.parentNode}return null}function fi(e){return e=e[mt]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function qo(e){return e[Zr]||null}var Ma=[],zn=-1;function en(e){return{current:e}}function J(e){0>zn||(e.current=Ma[zn],Ma[zn]=null,zn--)}function Y(e,t){zn++,Ma[zn]=e.current,e.current=t}var Zt={},Ee=en(Zt),De=en(!1),hn=Zt;function Xn(e,t){var n=e.type.contextTypes;if(!n)return Zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function mo(){J(De),J(Ee)}function oc(e,t,n){if(Ee.current!==Zt)throw Error(b(168));Y(Ee,t),Y(De,n)}function Nf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(b(108,Dm(e)||"Unknown",i));return le({},n,r)}function go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,hn=Ee.current,Y(Ee,e),Y(De,De.current),!0}function lc(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=Nf(e,t,hn),r.__reactInternalMemoizedMergedChildContext=e,J(De),J(Ee),Y(Ee,e)):J(De),Y(De,n)}var St=null,Zo=!1,Al=!1;function $f(e){St===null?St=[e]:St.push(e)}function tv(e){Zo=!0,$f(e)}function tn(){if(!Al&&St!==null){Al=!0;var e=0,t=K;try{var n=St;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,Zo=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),lf(Ns,tn),i}finally{K=t,Al=!1}}return null}var Ln=[],Rn=0,vo=null,yo=0,Ye=[],qe=0,mn=null,kt=1,Pt="";function rn(e,t){Ln[Rn++]=yo,Ln[Rn++]=vo,vo=e,yo=t}function If(e,t,n){Ye[qe++]=kt,Ye[qe++]=Pt,Ye[qe++]=mn,mn=e;var r=kt;e=Pt;var i=32-st(r)-1;r&=~(1<<i),n+=1;var o=32-st(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,kt=1<<32-st(t)+i|n<<i|r,Pt=o+e}else kt=1<<o|n<<i|r,Pt=e}function Ws(e){e.return!==null&&(rn(e,1),If(e,1,0))}function Bs(e){for(;e===vo;)vo=Ln[--Rn],Ln[Rn]=null,yo=Ln[--Rn],Ln[Rn]=null;for(;e===mn;)mn=Ye[--qe],Ye[qe]=null,Pt=Ye[--qe],Ye[qe]=null,kt=Ye[--qe],Ye[qe]=null}var Qe=null,Ve=null,te=!1,at=null;function Mf(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ac(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Ve=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:kt,overflow:Pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Ve=null,!0):!1;default:return!1}}function Da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Aa(e){if(te){var t=Ve;if(t){var n=t;if(!ac(e,t)){if(Da(e))throw Error(b(418));t=Vt(n.nextSibling);var r=Qe;t&&ac(e,t)?Mf(r,n):(e.flags=e.flags&-4097|2,te=!1,Qe=e)}}else{if(Da(e))throw Error(b(418));e.flags=e.flags&-4097|2,te=!1,Qe=e}}}function sc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function Ti(e){if(e!==Qe)return!1;if(!te)return sc(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Na(e.type,e.memoizedProps)),t&&(t=Ve)){if(Da(e))throw Df(),Error(b(418));for(;t;)Mf(e,t),t=Vt(t.nextSibling)}if(sc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=Qe?Vt(e.stateNode.nextSibling):null;return!0}function Df(){for(var e=Ve;e;)e=Vt(e.nextSibling)}function Kn(){Ve=Qe=null,te=!1}function Vs(e){at===null?at=[e]:at.push(e)}var nv=bt.ReactCurrentBatchConfig;function Sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function zi(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function uc(e){var t=e._init;return t(e._payload)}function Af(e){function t(m,f){if(e){var v=m.deletions;v===null?(m.deletions=[f],m.flags|=16):v.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Kt(m,f),m.index=0,m.sibling=null,m}function o(m,f,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<f?(m.flags|=2,f):v):(m.flags|=2,f)):(m.flags|=1048576,f)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,f,v,w){return f===null||f.tag!==6?(f=Ql(v,m.mode,w),f.return=m,f):(f=i(f,v),f.return=m,f)}function s(m,f,v,w){var P=v.type;return P===En?h(m,f,v.props.children,w,v.key):f!==null&&(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Nt&&uc(P)===f.type)?(w=i(f,v.props),w.ref=Sr(m,f,v),w.return=m,w):(w=Zi(v.type,v.key,v.props,null,m.mode,w),w.ref=Sr(m,f,v),w.return=m,w)}function u(m,f,v,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Gl(v,m.mode,w),f.return=m,f):(f=i(f,v.children||[]),f.return=m,f)}function h(m,f,v,w,P){return f===null||f.tag!==7?(f=dn(v,m.mode,w,P),f.return=m,f):(f=i(f,v),f.return=m,f)}function d(m,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ql(""+f,m.mode,v),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case wi:return v=Zi(f.type,f.key,f.props,null,m.mode,v),v.ref=Sr(m,null,f),v.return=m,v;case _n:return f=Gl(f,m.mode,v),f.return=m,f;case Nt:var w=f._init;return d(m,w(f._payload),v)}if(Or(f)||gr(f))return f=dn(f,m.mode,v,null),f.return=m,f;zi(m,f)}return null}function g(m,f,v,w){var P=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(m,f,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wi:return v.key===P?s(m,f,v,w):null;case _n:return v.key===P?u(m,f,v,w):null;case Nt:return P=v._init,g(m,f,P(v._payload),w)}if(Or(v)||gr(v))return P!==null?null:h(m,f,v,w,null);zi(m,v)}return null}function x(m,f,v,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(v)||null,a(f,m,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case wi:return m=m.get(w.key===null?v:w.key)||null,s(f,m,w,P);case _n:return m=m.get(w.key===null?v:w.key)||null,u(f,m,w,P);case Nt:var j=w._init;return x(m,f,v,j(w._payload),P)}if(Or(w)||gr(w))return m=m.get(v)||null,h(f,m,w,P,null);zi(f,w)}return null}function p(m,f,v,w){for(var P=null,j=null,_=f,z=f=0,O=null;_!==null&&z<v.length;z++){_.index>z?(O=_,_=null):O=_.sibling;var C=g(m,_,v[z],w);if(C===null){_===null&&(_=O);break}e&&_&&C.alternate===null&&t(m,_),f=o(C,f,z),j===null?P=C:j.sibling=C,j=C,_=O}if(z===v.length)return n(m,_),te&&rn(m,z),P;if(_===null){for(;z<v.length;z++)_=d(m,v[z],w),_!==null&&(f=o(_,f,z),j===null?P=_:j.sibling=_,j=_);return te&&rn(m,z),P}for(_=r(m,_);z<v.length;z++)O=x(_,m,z,v[z],w),O!==null&&(e&&O.alternate!==null&&_.delete(O.key===null?z:O.key),f=o(O,f,z),j===null?P=O:j.sibling=O,j=O);return e&&_.forEach(function(I){return t(m,I)}),te&&rn(m,z),P}function y(m,f,v,w){var P=gr(v);if(typeof P!="function")throw Error(b(150));if(v=P.call(v),v==null)throw Error(b(151));for(var j=P=null,_=f,z=f=0,O=null,C=v.next();_!==null&&!C.done;z++,C=v.next()){_.index>z?(O=_,_=null):O=_.sibling;var I=g(m,_,C.value,w);if(I===null){_===null&&(_=O);break}e&&_&&I.alternate===null&&t(m,_),f=o(I,f,z),j===null?P=I:j.sibling=I,j=I,_=O}if(C.done)return n(m,_),te&&rn(m,z),P;if(_===null){for(;!C.done;z++,C=v.next())C=d(m,C.value,w),C!==null&&(f=o(C,f,z),j===null?P=C:j.sibling=C,j=C);return te&&rn(m,z),P}for(_=r(m,_);!C.done;z++,C=v.next())C=x(_,m,z,C.value,w),C!==null&&(e&&C.alternate!==null&&_.delete(C.key===null?z:C.key),f=o(C,f,z),j===null?P=C:j.sibling=C,j=C);return e&&_.forEach(function($){return t(m,$)}),te&&rn(m,z),P}function k(m,f,v,w){if(typeof v=="object"&&v!==null&&v.type===En&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case wi:e:{for(var P=v.key,j=f;j!==null;){if(j.key===P){if(P=v.type,P===En){if(j.tag===7){n(m,j.sibling),f=i(j,v.props.children),f.return=m,m=f;break e}}else if(j.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Nt&&uc(P)===j.type){n(m,j.sibling),f=i(j,v.props),f.ref=Sr(m,j,v),f.return=m,m=f;break e}n(m,j);break}else t(m,j);j=j.sibling}v.type===En?(f=dn(v.props.children,m.mode,w,v.key),f.return=m,m=f):(w=Zi(v.type,v.key,v.props,null,m.mode,w),w.ref=Sr(m,f,v),w.return=m,m=w)}return l(m);case _n:e:{for(j=v.key;f!==null;){if(f.key===j)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(m,f.sibling),f=i(f,v.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=Gl(v,m.mode,w),f.return=m,m=f}return l(m);case Nt:return j=v._init,k(m,f,j(v._payload),w)}if(Or(v))return p(m,f,v,w);if(gr(v))return y(m,f,v,w);zi(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,v),f.return=m,m=f):(n(m,f),f=Ql(v,m.mode,w),f.return=m,m=f),l(m)):n(m,f)}return k}var Yn=Af(!0),Ff=Af(!1),xo=en(null),wo=null,Nn=null,Qs=null;function Gs(){Qs=Nn=wo=null}function Xs(e){var t=xo.current;J(xo),e._currentValue=t}function Fa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Hn(e,t){wo=e,Qs=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function et(e){var t=e._currentValue;if(Qs!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(wo===null)throw Error(b(308));Nn=e,wo.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var an=null;function Ks(e){an===null?an=[e]:an.push(e)}function Uf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ks(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ct(e,r)}function Ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function Ys(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ct(e,n)}return i=r.interleaved,i===null?(t.next=t,Ks(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ct(e,n)}function Qi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$s(e,n)}}function cc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function So(e,t,n,r){var i=e.updateQueue;$t=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;l=0,h=u=s=null,a=o;do{var g=a.lane,x=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,y=a;switch(g=t,x=n,y.tag){case 1:if(p=y.payload,typeof p=="function"){d=p.call(x,d,g);break e}d=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=y.payload,g=typeof p=="function"?p.call(x,d,g):p,g==null)break e;d=le({},d,g);break e;case 2:$t=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else x={eventTime:x,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=x,s=d):h=h.next=x,l|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);vn|=l,e.lanes=l,e.memoizedState=d}}function dc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var pi={},vt=en(pi),Jr=en(pi),ei=en(pi);function sn(e){if(e===pi)throw Error(b(174));return e}function qs(e,t){switch(Y(ei,t),Y(Jr,e),Y(vt,pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wa(t,e)}J(vt),Y(vt,t)}function qn(){J(vt),J(Jr),J(ei)}function Wf(e){sn(ei.current);var t=sn(vt.current),n=wa(t,e.type);t!==n&&(Y(Jr,e),Y(vt,n))}function Zs(e){Jr.current===e&&(J(vt),J(Jr))}var ie=en(0);function ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fl=[];function Js(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var Gi=bt.ReactCurrentDispatcher,Ul=bt.ReactCurrentBatchConfig,gn=0,oe=null,pe=null,ge=null,Po=!1,Mr=!1,ti=0,rv=0;function Pe(){throw Error(b(321))}function eu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!dt(e[n],t[n]))return!1;return!0}function tu(e,t,n,r,i,o){if(gn=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gi.current=e===null||e.memoizedState===null?av:sv,e=n(r,i),Mr){o=0;do{if(Mr=!1,ti=0,25<=o)throw Error(b(301));o+=1,ge=pe=null,t.updateQueue=null,Gi.current=uv,e=n(r,i)}while(Mr)}if(Gi.current=jo,t=pe!==null&&pe.next!==null,gn=0,ge=pe=oe=null,Po=!1,t)throw Error(b(300));return e}function nu(){var e=ti!==0;return ti=0,e}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?oe.memoizedState=ge=e:ge=ge.next=e,ge}function tt(){if(pe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=ge===null?oe.memoizedState:ge.next;if(t!==null)ge=t,pe=e;else{if(e===null)throw Error(b(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ge===null?oe.memoizedState=ge=e:ge=ge.next=e}return ge}function ni(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=tt(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=pe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var h=u.lane;if((gn&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=d,l=r):s=s.next=d,oe.lanes|=h,vn|=h}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,dt(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,oe.lanes|=o,vn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wl(e){var t=tt(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);dt(o,t.memoizedState)||(Ie=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bf(){}function Vf(e,t){var n=oe,r=tt(),i=t(),o=!dt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ie=!0),r=r.queue,ru(Xf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,ri(9,Gf.bind(null,n,r,i,t),void 0,null),ye===null)throw Error(b(349));gn&30||Qf(n,t,i)}return i}function Qf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gf(e,t,n,r){t.value=n,t.getSnapshot=r,Kf(t)&&Yf(e)}function Xf(e,t,n){return n(function(){Kf(t)&&Yf(e)})}function Kf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dt(e,n)}catch{return!0}}function Yf(e){var t=Ct(e,1);t!==null&&ut(t,e,1,-1)}function fc(e){var t=pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:e},t.queue=e,e=e.dispatch=lv.bind(null,oe,e),[t.memoizedState,e]}function ri(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qf(){return tt().memoizedState}function Xi(e,t,n,r){var i=pt();oe.flags|=e,i.memoizedState=ri(1|t,n,void 0,r===void 0?null:r)}function Jo(e,t,n,r){var i=tt();r=r===void 0?null:r;var o=void 0;if(pe!==null){var l=pe.memoizedState;if(o=l.destroy,r!==null&&eu(r,l.deps)){i.memoizedState=ri(t,n,o,r);return}}oe.flags|=e,i.memoizedState=ri(1|t,n,o,r)}function pc(e,t){return Xi(8390656,8,e,t)}function ru(e,t){return Jo(2048,8,e,t)}function Zf(e,t){return Jo(4,2,e,t)}function Jf(e,t){return Jo(4,4,e,t)}function ep(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tp(e,t,n){return n=n!=null?n.concat([e]):null,Jo(4,4,ep.bind(null,t,e),n)}function iu(){}function np(e,t){var n=tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&eu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rp(e,t){var n=tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&eu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ip(e,t,n){return gn&21?(dt(n,t)||(n=uf(),oe.lanes|=n,vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n)}function iv(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{K=n,Ul.transition=r}}function op(){return tt().memoizedState}function ov(e,t,n){var r=Xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lp(e))ap(t,n);else if(n=Uf(e,t,n,r),n!==null){var i=Te();ut(n,e,r,i),sp(n,t,r)}}function lv(e,t,n){var r=Xt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lp(e))ap(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,dt(a,l)){var s=t.interleaved;s===null?(i.next=i,Ks(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Uf(e,t,i,r),n!==null&&(i=Te(),ut(n,e,r,i),sp(n,t,r))}}function lp(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function ap(e,t){Mr=Po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$s(e,n)}}var jo={readContext:et,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},av={readContext:et,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:pc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xi(4194308,4,ep.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xi(4,2,e,t)},useMemo:function(e,t){var n=pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ov.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:fc,useDebugValue:iu,useDeferredValue:function(e){return pt().memoizedState=e},useTransition:function(){var e=fc(!1),t=e[0];return e=iv.bind(null,e[1]),pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,i=pt();if(te){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),ye===null)throw Error(b(349));gn&30||Qf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,pc(Xf.bind(null,r,o,e),[e]),r.flags|=2048,ri(9,Gf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=pt(),t=ye.identifierPrefix;if(te){var n=Pt,r=kt;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ti++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sv={readContext:et,useCallback:np,useContext:et,useEffect:ru,useImperativeHandle:tp,useInsertionEffect:Zf,useLayoutEffect:Jf,useMemo:rp,useReducer:Hl,useRef:qf,useState:function(){return Hl(ni)},useDebugValue:iu,useDeferredValue:function(e){var t=tt();return ip(t,pe.memoizedState,e)},useTransition:function(){var e=Hl(ni)[0],t=tt().memoizedState;return[e,t]},useMutableSource:Bf,useSyncExternalStore:Vf,useId:op,unstable_isNewReconciler:!1},uv={readContext:et,useCallback:np,useContext:et,useEffect:ru,useImperativeHandle:tp,useInsertionEffect:Zf,useLayoutEffect:Jf,useMemo:rp,useReducer:Wl,useRef:qf,useState:function(){return Wl(ni)},useDebugValue:iu,useDeferredValue:function(e){var t=tt();return pe===null?t.memoizedState=e:ip(t,pe.memoizedState,e)},useTransition:function(){var e=Wl(ni)[0],t=tt().memoizedState;return[e,t]},useMutableSource:Bf,useSyncExternalStore:Vf,useId:op,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ua(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var el={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),i=Xt(e),o=jt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Qt(e,o,i),t!==null&&(ut(t,e,i,r),Qi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),i=Xt(e),o=jt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Qt(e,o,i),t!==null&&(ut(t,e,i,r),Qi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=Xt(e),i=jt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Qt(e,i,r),t!==null&&(ut(t,e,r,n),Qi(t,e,r))}};function hc(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(i,o):!0}function up(e,t,n){var r=!1,i=Zt,o=t.contextType;return typeof o=="object"&&o!==null?o=et(o):(i=Ae(t)?hn:Ee.current,r=t.contextTypes,o=(r=r!=null)?Xn(e,i):Zt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=el,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function mc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&el.enqueueReplaceState(t,t.state,null)}function Ha(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ys(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=et(o):(o=Ae(t)?hn:Ee.current,i.context=Xn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ua(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&el.enqueueReplaceState(i,i.state,null),So(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zn(e,t){try{var n="",r=t;do n+=Mm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cv=typeof WeakMap=="function"?WeakMap:Map;function cp(e,t,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Eo||(Eo=!0,Ja=r),Wa(e,t)},n}function dp(e,t,n){n=jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Wa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Wa(e,t),typeof r!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function gc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=jv.bind(null,e,t,n),t.then(e,e))}function vc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jt(-1,1),t.tag=2,Qt(n,t,1))),n.lanes|=1),e)}var dv=bt.ReactCurrentOwner,Ie=!1;function be(e,t,n,r){t.child=e===null?Ff(t,null,n,r):Yn(t,e.child,n,r)}function xc(e,t,n,r,i){n=n.render;var o=t.ref;return Hn(t,i),r=tu(e,t,n,r,o,i),n=nu(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ot(e,t,i)):(te&&n&&Ws(t),t.flags|=1,be(e,t,r,i),t.child)}function wc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!fu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,fp(e,t,o,r,i)):(e=Zi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(l,r)&&e.ref===t.ref)return Ot(e,t,i)}return t.flags|=1,e=Kt(o,r),e.ref=t.ref,e.return=t,t.child=e}function fp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Kr(o,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,Ot(e,t,i)}return Ba(e,t,n,r,i)}function pp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(In,Be),Be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(In,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(In,Be),Be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Y(In,Be),Be|=r;return be(e,t,i,n),t.child}function hp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ba(e,t,n,r,i){var o=Ae(n)?hn:Ee.current;return o=Xn(t,o),Hn(t,i),n=tu(e,t,n,r,o,i),r=nu(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ot(e,t,i)):(te&&r&&Ws(t),t.flags|=1,be(e,t,n,i),t.child)}function Sc(e,t,n,r,i){if(Ae(n)){var o=!0;go(t)}else o=!1;if(Hn(t,i),t.stateNode===null)Ki(e,t),up(t,n,r),Ha(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=et(u):(u=Ae(n)?hn:Ee.current,u=Xn(t,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&mc(t,l,r,u),$t=!1;var g=t.memoizedState;l.state=g,So(t,r,l,i),s=t.memoizedState,a!==r||g!==s||De.current||$t?(typeof h=="function"&&(Ua(t,n,h,r),s=t.memoizedState),(a=$t||hc(t,n,a,r,g,s,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Hf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ot(t.type,a),l.props=u,d=t.pendingProps,g=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=et(s):(s=Ae(n)?hn:Ee.current,s=Xn(t,s));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||g!==s)&&mc(t,l,r,s),$t=!1,g=t.memoizedState,l.state=g,So(t,r,l,i);var p=t.memoizedState;a!==d||g!==p||De.current||$t?(typeof x=="function"&&(Ua(t,n,x,r),p=t.memoizedState),(u=$t||hc(t,n,u,r,g,p,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,p,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,p,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),l.props=r,l.state=p,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Va(e,t,n,r,o,i)}function Va(e,t,n,r,i,o){hp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&lc(t,n,!1),Ot(e,t,o);r=t.stateNode,dv.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Yn(t,e.child,null,o),t.child=Yn(t,null,a,o)):be(e,t,a,o),t.memoizedState=r.state,i&&lc(t,n,!0),t.child}function mp(e){var t=e.stateNode;t.pendingContext?oc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oc(e,t.context,!1),qs(e,t.containerInfo)}function kc(e,t,n,r,i){return Kn(),Vs(i),t.flags|=256,be(e,t,n,r),t.child}var Qa={dehydrated:null,treeContext:null,retryLane:0};function Ga(e){return{baseLanes:e,cachePool:null,transitions:null}}function gp(e,t,n){var r=t.pendingProps,i=ie.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(ie,i&1),e===null)return Aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=rl(l,r,0,null),e=dn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ga(n),t.memoizedState=Qa,e):ou(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return fv(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Kt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Kt(a,o):(o=dn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Ga(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Qa,r}return o=e.child,e=o.sibling,r=Kt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ou(e,t){return t=rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Li(e,t,n,r){return r!==null&&Vs(r),Yn(t,e.child,null,n),e=ou(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fv(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Bl(Error(b(422))),Li(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=rl({mode:"visible",children:r.children},i,0,null),o=dn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Yn(t,e.child,null,l),t.child.memoizedState=Ga(l),t.memoizedState=Qa,o);if(!(t.mode&1))return Li(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(b(419)),r=Bl(o,r,void 0),Li(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ie||a){if(r=ye,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ct(e,i),ut(r,e,i,-1))}return du(),r=Bl(Error(b(421))),Li(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=_v.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ve=Vt(i.nextSibling),Qe=t,te=!0,at=null,e!==null&&(Ye[qe++]=kt,Ye[qe++]=Pt,Ye[qe++]=mn,kt=e.id,Pt=e.overflow,mn=t),t=ou(t,r.children),t.flags|=4096,t)}function Pc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fa(e.return,t,n)}function Vl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function vp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(be(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pc(e,n,t);else if(e.tag===19)Pc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ko(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Vl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ko(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Vl(t,!0,n,null,o);break;case"together":Vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ki(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=Kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pv(e,t,n){switch(t.tag){case 3:mp(t),Kn();break;case 5:Wf(t);break;case 1:Ae(t.type)&&go(t);break;case 4:qs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(xo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?gp(e,t,n):(Y(ie,ie.current&1),e=Ot(e,t,n),e!==null?e.sibling:null);Y(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,pp(e,t,n)}return Ot(e,t,n)}var yp,Xa,xp,wp;yp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xa=function(){};xp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,sn(vt.current);var o=null;switch(n){case"input":i=ga(e,i),r=ga(e,r),o=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),o=[];break;case"textarea":i=xa(e,i),r=xa(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ho)}Sa(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&q("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};wp=function(e,t,n,r){n!==r&&(t.flags|=4)};function kr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hv(e,t,n){var r=t.pendingProps;switch(Bs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return Ae(t.type)&&mo(),je(t),null;case 3:return r=t.stateNode,qn(),J(De),J(Ee),Js(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(ns(at),at=null))),Xa(e,t),je(t),null;case 5:Zs(t);var i=sn(ei.current);if(n=t.type,e!==null&&t.stateNode!=null)xp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return je(t),null}if(e=sn(vt.current),Ti(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[mt]=t,r[Zr]=o,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<Tr.length;i++)q(Tr[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Lu(r,o),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},q("invalid",r);break;case"textarea":Nu(r,o),q("invalid",r)}Sa(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&bi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&bi(r.textContent,a,e),i=["children",""+a]):Hr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&q("scroll",r)}switch(n){case"input":Si(r),Ru(r,o,!0);break;case"textarea":Si(r),$u(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ho)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[mt]=t,e[Zr]=r,yp(e,t,!1,!1),t.stateNode=e;e:{switch(l=ka(n,r),n){case"dialog":q("cancel",e),q("close",e),i=r;break;case"iframe":case"object":case"embed":q("load",e),i=r;break;case"video":case"audio":for(i=0;i<Tr.length;i++)q(Tr[i],e);i=r;break;case"source":q("error",e),i=r;break;case"img":case"image":case"link":q("error",e),q("load",e),i=r;break;case"details":q("toggle",e),i=r;break;case"input":Lu(e,r),i=ga(e,r),q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),q("invalid",e);break;case"textarea":Nu(e,r),i=xa(e,r),q("invalid",e);break;default:i=r}Sa(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Yd(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Xd(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Wr(e,s):typeof s=="number"&&Wr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Hr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&q("scroll",e):s!=null&&bs(e,o,s,l))}switch(n){case"input":Si(e),Ru(e,r,!1);break;case"textarea":Si(e),$u(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Dn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ho)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)wp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=sn(ei.current),sn(vt.current),Ti(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(o=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:bi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return je(t),null;case 13:if(J(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ve!==null&&t.mode&1&&!(t.flags&128))Df(),Kn(),t.flags|=98560,o=!1;else if(o=Ti(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(b(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[mt]=t}else Kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),o=!1}else at!==null&&(ns(at),at=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?he===0&&(he=3):du())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return qn(),Xa(e,t),e===null&&Yr(t.stateNode.containerInfo),je(t),null;case 10:return Xs(t.type._context),je(t),null;case 17:return Ae(t.type)&&mo(),je(t),null;case 19:if(J(ie),o=t.memoizedState,o===null)return je(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)kr(o,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ko(e),l!==null){for(t.flags|=128,kr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(ie,ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&ue()>Jn&&(t.flags|=128,r=!0,kr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ko(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!te)return je(t),null}else 2*ue()-o.renderingStartTime>Jn&&n!==1073741824&&(t.flags|=128,r=!0,kr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ue(),t.sibling=null,n=ie.current,Y(ie,r?n&1|2:n&1),t):(je(t),null);case 22:case 23:return cu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function mv(e,t){switch(Bs(t),t.tag){case 1:return Ae(t.type)&&mo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qn(),J(De),J(Ee),Js(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Zs(t),null;case 13:if(J(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));Kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(ie),null;case 4:return qn(),null;case 10:return Xs(t.type._context),null;case 22:case 23:return cu(),null;case 24:return null;default:return null}}var Ri=!1,_e=!1,gv=typeof WeakSet=="function"?WeakSet:Set,R=null;function $n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function Ka(e,t,n){try{n()}catch(r){se(e,t,r)}}var jc=!1;function vv(e,t){if(La=co,e=_f(),Hs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,h=0,d=e,g=null;t:for(;;){for(var x;d!==n||i!==0&&d.nodeType!==3||(a=l+i),d!==o||r!==0&&d.nodeType!==3||(s=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(x=d.firstChild)!==null;)g=d,d=x;for(;;){if(d===e)break t;if(g===n&&++u===i&&(a=l),g===o&&++h===r&&(s=l),(x=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ra={focusedElem:e,selectionRange:n},co=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var y=p.memoizedProps,k=p.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:ot(t.type,y),k);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(w){se(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return p=jc,jc=!1,p}function Dr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ka(t,n,o)}i=i.next}while(i!==r)}}function tl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ya(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sp(e){var t=e.alternate;t!==null&&(e.alternate=null,Sp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[Zr],delete t[Ia],delete t[Jg],delete t[ev])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kp(e){return e.tag===5||e.tag===3||e.tag===4}function _c(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ho));else if(r!==4&&(e=e.child,e!==null))for(qa(e,t,n),e=e.sibling;e!==null;)qa(e,t,n),e=e.sibling}function Za(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Za(e,t,n),e=e.sibling;e!==null;)Za(e,t,n),e=e.sibling}var we=null,lt=!1;function Lt(e,t,n){for(n=n.child;n!==null;)Pp(e,t,n),n=n.sibling}function Pp(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Go,n)}catch{}switch(n.tag){case 5:_e||$n(n,t);case 6:var r=we,i=lt;we=null,Lt(e,t,n),we=r,lt=i,we!==null&&(lt?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(lt?(e=we,n=n.stateNode,e.nodeType===8?Dl(e.parentNode,n):e.nodeType===1&&Dl(e,n),Gr(e)):Dl(we,n.stateNode));break;case 4:r=we,i=lt,we=n.stateNode.containerInfo,lt=!0,Lt(e,t,n),we=r,lt=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Ka(n,t,l),i=i.next}while(i!==r)}Lt(e,t,n);break;case 1:if(!_e&&($n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){se(n,t,a)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Lt(e,t,n),_e=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function Ec(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gv),t.forEach(function(r){var i=Ev.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:we=a.stateNode,lt=!1;break e;case 3:we=a.stateNode.containerInfo,lt=!0;break e;case 4:we=a.stateNode.containerInfo,lt=!0;break e}a=a.return}if(we===null)throw Error(b(160));Pp(o,l,i),we=null,lt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jp(t,e),t=t.sibling}function jp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),ft(e),r&4){try{Dr(3,e,e.return),tl(3,e)}catch(y){se(e,e.return,y)}try{Dr(5,e,e.return)}catch(y){se(e,e.return,y)}}break;case 1:it(t,e),ft(e),r&512&&n!==null&&$n(n,n.return);break;case 5:if(it(t,e),ft(e),r&512&&n!==null&&$n(n,n.return),e.flags&32){var i=e.stateNode;try{Wr(i,"")}catch(y){se(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Vd(i,o),ka(a,l);var u=ka(a,o);for(l=0;l<s.length;l+=2){var h=s[l],d=s[l+1];h==="style"?Yd(i,d):h==="dangerouslySetInnerHTML"?Xd(i,d):h==="children"?Wr(i,d):bs(i,h,d,u)}switch(a){case"input":va(i,o);break;case"textarea":Qd(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Dn(i,!!o.multiple,x,!1):g!==!!o.multiple&&(o.defaultValue!=null?Dn(i,!!o.multiple,o.defaultValue,!0):Dn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zr]=o}catch(y){se(e,e.return,y)}}break;case 6:if(it(t,e),ft(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){se(e,e.return,y)}}break;case 3:if(it(t,e),ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gr(t.containerInfo)}catch(y){se(e,e.return,y)}break;case 4:it(t,e),ft(e);break;case 13:it(t,e),ft(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(su=ue())),r&4&&Ec(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(u=_e)||h,it(t,e),_e=u):it(t,e),ft(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(R=e,h=e.child;h!==null;){for(d=R=h;R!==null;){switch(g=R,x=g.child,g.tag){case 0:case 11:case 14:case 15:Dr(4,g,g.return);break;case 1:$n(g,g.return);var p=g.stateNode;if(typeof p.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(y){se(r,n,y)}}break;case 5:$n(g,g.return);break;case 22:if(g.memoizedState!==null){Oc(d);continue}}x!==null?(x.return=g,R=x):Oc(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Kd("display",l))}catch(y){se(e,e.return,y)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){se(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:it(t,e),ft(e),r&4&&Ec(e);break;case 21:break;default:it(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kp(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wr(i,""),r.flags&=-33);var o=_c(e);Za(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=_c(e);qa(e,a,l);break;default:throw Error(b(161))}}catch(s){se(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yv(e,t,n){R=e,_p(e)}function _p(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ri;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||_e;a=Ri;var u=_e;if(Ri=l,(_e=s)&&!u)for(R=i;R!==null;)l=R,s=l.child,l.tag===22&&l.memoizedState!==null?bc(i):s!==null?(s.return=l,R=s):bc(i);for(;o!==null;)R=o,_p(o),o=o.sibling;R=i,Ri=a,_e=u}Cc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):Cc(e)}}function Cc(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||tl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&dc(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}dc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Gr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}_e||t.flags&512&&Ya(t)}catch(g){se(t,t.return,g)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Oc(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function bc(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{tl(4,t)}catch(s){se(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){se(t,i,s)}}var o=t.return;try{Ya(t)}catch(s){se(t,o,s)}break;case 5:var l=t.return;try{Ya(t)}catch(s){se(t,l,s)}}}catch(s){se(t,t.return,s)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var xv=Math.ceil,_o=bt.ReactCurrentDispatcher,lu=bt.ReactCurrentOwner,Je=bt.ReactCurrentBatchConfig,Q=0,ye=null,de=null,Se=0,Be=0,In=en(0),he=0,ii=null,vn=0,nl=0,au=0,Ar=null,$e=null,su=0,Jn=1/0,xt=null,Eo=!1,Ja=null,Gt=null,Ni=!1,Ft=null,Co=0,Fr=0,es=null,Yi=-1,qi=0;function Te(){return Q&6?ue():Yi!==-1?Yi:Yi=ue()}function Xt(e){return e.mode&1?Q&2&&Se!==0?Se&-Se:nv.transition!==null?(qi===0&&(qi=uf()),qi):(e=K,e!==0||(e=window.event,e=e===void 0?16:gf(e.type)),e):1}function ut(e,t,n,r){if(50<Fr)throw Fr=0,es=null,Error(b(185));ci(e,n,r),(!(Q&2)||e!==ye)&&(e===ye&&(!(Q&2)&&(nl|=n),he===4&&Dt(e,Se)),Fe(e,r),n===1&&Q===0&&!(t.mode&1)&&(Jn=ue()+500,Zo&&tn()))}function Fe(e,t){var n=e.callbackNode;ng(e,t);var r=uo(e,e===ye?Se:0);if(r===0)n!==null&&Du(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Du(n),t===1)e.tag===0?tv(Tc.bind(null,e)):$f(Tc.bind(null,e)),qg(function(){!(Q&6)&&tn()}),n=null;else{switch(cf(r)){case 1:n=Ns;break;case 4:n=af;break;case 16:n=so;break;case 536870912:n=sf;break;default:n=so}n=Rp(n,Ep.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ep(e,t){if(Yi=-1,qi=0,Q&6)throw Error(b(327));var n=e.callbackNode;if(Wn()&&e.callbackNode!==n)return null;var r=uo(e,e===ye?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Oo(e,r);else{t=r;var i=Q;Q|=2;var o=Op();(ye!==e||Se!==t)&&(xt=null,Jn=ue()+500,cn(e,t));do try{kv();break}catch(a){Cp(e,a)}while(!0);Gs(),_o.current=o,Q=i,de!==null?t=0:(ye=null,Se=0,t=he)}if(t!==0){if(t===2&&(i=Ca(e),i!==0&&(r=i,t=ts(e,i))),t===1)throw n=ii,cn(e,0),Dt(e,r),Fe(e,ue()),n;if(t===6)Dt(e,r);else{if(i=e.current.alternate,!(r&30)&&!wv(i)&&(t=Oo(e,r),t===2&&(o=Ca(e),o!==0&&(r=o,t=ts(e,o))),t===1))throw n=ii,cn(e,0),Dt(e,r),Fe(e,ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:on(e,$e,xt);break;case 3:if(Dt(e,r),(r&130023424)===r&&(t=su+500-ue(),10<t)){if(uo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$a(on.bind(null,e,$e,xt),t);break}on(e,$e,xt);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-st(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xv(r/1960))-r,10<r){e.timeoutHandle=$a(on.bind(null,e,$e,xt),r);break}on(e,$e,xt);break;case 5:on(e,$e,xt);break;default:throw Error(b(329))}}}return Fe(e,ue()),e.callbackNode===n?Ep.bind(null,e):null}function ts(e,t){var n=Ar;return e.current.memoizedState.isDehydrated&&(cn(e,t).flags|=256),e=Oo(e,t),e!==2&&(t=$e,$e=n,t!==null&&ns(t)),e}function ns(e){$e===null?$e=e:$e.push.apply($e,e)}function wv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!dt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~au,t&=~nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function Tc(e){if(Q&6)throw Error(b(327));Wn();var t=uo(e,0);if(!(t&1))return Fe(e,ue()),null;var n=Oo(e,t);if(e.tag!==0&&n===2){var r=Ca(e);r!==0&&(t=r,n=ts(e,r))}if(n===1)throw n=ii,cn(e,0),Dt(e,t),Fe(e,ue()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,$e,xt),Fe(e,ue()),null}function uu(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Jn=ue()+500,Zo&&tn())}}function yn(e){Ft!==null&&Ft.tag===0&&!(Q&6)&&Wn();var t=Q;Q|=1;var n=Je.transition,r=K;try{if(Je.transition=null,K=1,e)return e()}finally{K=r,Je.transition=n,Q=t,!(Q&6)&&tn()}}function cu(){Be=In.current,J(In)}function cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yg(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Bs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mo();break;case 3:qn(),J(De),J(Ee),Js();break;case 5:Zs(r);break;case 4:qn();break;case 13:J(ie);break;case 19:J(ie);break;case 10:Xs(r.type._context);break;case 22:case 23:cu()}n=n.return}if(ye=e,de=e=Kt(e.current,null),Se=Be=t,he=0,ii=null,au=nl=vn=0,$e=Ar=null,an!==null){for(t=0;t<an.length;t++)if(n=an[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}an=null}return e}function Cp(e,t){do{var n=de;try{if(Gs(),Gi.current=jo,Po){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Po=!1}if(gn=0,ge=pe=oe=null,Mr=!1,ti=0,lu.current=null,n===null||n.return===null){he=1,ii=t,de=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Se,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=vc(l);if(x!==null){x.flags&=-257,yc(x,l,a,o,t),x.mode&1&&gc(o,u,t),t=x,s=u;var p=t.updateQueue;if(p===null){var y=new Set;y.add(s),t.updateQueue=y}else p.add(s);break e}else{if(!(t&1)){gc(o,u,t),du();break e}s=Error(b(426))}}else if(te&&a.mode&1){var k=vc(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),yc(k,l,a,o,t),Vs(Zn(s,a));break e}}o=s=Zn(s,a),he!==4&&(he=2),Ar===null?Ar=[o]:Ar.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=cp(o,s,t);cc(o,m);break e;case 1:a=s;var f=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Gt===null||!Gt.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=dp(o,a,t);cc(o,w);break e}}o=o.return}while(o!==null)}Tp(n)}catch(P){t=P,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function Op(){var e=_o.current;return _o.current=jo,e===null?jo:e}function du(){(he===0||he===3||he===2)&&(he=4),ye===null||!(vn&268435455)&&!(nl&268435455)||Dt(ye,Se)}function Oo(e,t){var n=Q;Q|=2;var r=Op();(ye!==e||Se!==t)&&(xt=null,cn(e,t));do try{Sv();break}catch(i){Cp(e,i)}while(!0);if(Gs(),Q=n,_o.current=r,de!==null)throw Error(b(261));return ye=null,Se=0,he}function Sv(){for(;de!==null;)bp(de)}function kv(){for(;de!==null&&!Gm();)bp(de)}function bp(e){var t=Lp(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?Tp(e):de=t,lu.current=null}function Tp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mv(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,de=null;return}}else if(n=hv(n,t,Be),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);he===0&&(he=5)}function on(e,t,n){var r=K,i=Je.transition;try{Je.transition=null,K=1,Pv(e,t,n,r)}finally{Je.transition=i,K=r}return null}function Pv(e,t,n,r){do Wn();while(Ft!==null);if(Q&6)throw Error(b(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(rg(e,o),e===ye&&(de=ye=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ni||(Ni=!0,Rp(so,function(){return Wn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Je.transition,Je.transition=null;var l=K;K=1;var a=Q;Q|=4,lu.current=null,vv(e,n),jp(n,e),Wg(Ra),co=!!La,Ra=La=null,e.current=n,yv(n),Xm(),Q=a,K=l,Je.transition=o}else e.current=n;if(Ni&&(Ni=!1,Ft=e,Co=i),o=e.pendingLanes,o===0&&(Gt=null),qm(n.stateNode),Fe(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Eo)throw Eo=!1,e=Ja,Ja=null,e;return Co&1&&e.tag!==0&&Wn(),o=e.pendingLanes,o&1?e===es?Fr++:(Fr=0,es=e):Fr=0,tn(),null}function Wn(){if(Ft!==null){var e=cf(Co),t=Je.transition,n=K;try{if(Je.transition=null,K=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,Co=0,Q&6)throw Error(b(331));var i=Q;for(Q|=4,R=e.current;R!==null;){var o=R,l=o.child;if(R.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(R=u;R!==null;){var h=R;switch(h.tag){case 0:case 11:case 15:Dr(8,h,o)}var d=h.child;if(d!==null)d.return=h,R=d;else for(;R!==null;){h=R;var g=h.sibling,x=h.return;if(Sp(h),h===u){R=null;break}if(g!==null){g.return=x,R=g;break}R=x}}}var p=o.alternate;if(p!==null){var y=p.child;if(y!==null){p.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}R=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,R=l;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Dr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,R=m;break e}R=o.return}}var f=e.current;for(R=f;R!==null;){l=R;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,R=v;else e:for(l=f;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tl(9,a)}}catch(P){se(a,a.return,P)}if(a===l){R=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,R=w;break e}R=a.return}}if(Q=i,tn(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Go,e)}catch{}r=!0}return r}finally{K=n,Je.transition=t}}return!1}function zc(e,t,n){t=Zn(n,t),t=cp(e,t,1),e=Qt(e,t,1),t=Te(),e!==null&&(ci(e,1,t),Fe(e,t))}function se(e,t,n){if(e.tag===3)zc(e,e,n);else for(;t!==null;){if(t.tag===3){zc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gt===null||!Gt.has(r))){e=Zn(n,e),e=dp(t,e,1),t=Qt(t,e,1),e=Te(),t!==null&&(ci(t,1,e),Fe(t,e));break}}t=t.return}}function jv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(Se&n)===n&&(he===4||he===3&&(Se&130023424)===Se&&500>ue()-su?cn(e,0):au|=n),Fe(e,t)}function zp(e,t){t===0&&(e.mode&1?(t=ji,ji<<=1,!(ji&130023424)&&(ji=4194304)):t=1);var n=Te();e=Ct(e,t),e!==null&&(ci(e,t,n),Fe(e,n))}function _v(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zp(e,n)}function Ev(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),zp(e,n)}var Lp;Lp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Ie=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ie=!1,pv(e,t,n);Ie=!!(e.flags&131072)}else Ie=!1,te&&t.flags&1048576&&If(t,yo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ki(e,t),e=t.pendingProps;var i=Xn(t,Ee.current);Hn(t,n),i=tu(null,t,r,e,i,n);var o=nu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,go(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ys(t),i.updater=el,t.stateNode=i,i._reactInternals=t,Ha(t,r,e,n),t=Va(null,t,r,!0,o,n)):(t.tag=0,te&&o&&Ws(t),be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ki(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ov(r),e=ot(r,e),i){case 0:t=Ba(null,t,r,e,n);break e;case 1:t=Sc(null,t,r,e,n);break e;case 11:t=xc(null,t,r,e,n);break e;case 14:t=wc(null,t,r,ot(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Ba(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Sc(e,t,r,i,n);case 3:e:{if(mp(t),e===null)throw Error(b(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Hf(e,t),So(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Zn(Error(b(423)),t),t=kc(e,t,r,n,i);break e}else if(r!==i){i=Zn(Error(b(424)),t),t=kc(e,t,r,n,i);break e}else for(Ve=Vt(t.stateNode.containerInfo.firstChild),Qe=t,te=!0,at=null,n=Ff(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kn(),r===i){t=Ot(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return Wf(t),e===null&&Aa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Na(r,i)?l=null:o!==null&&Na(r,o)&&(t.flags|=32),hp(e,t),be(e,t,l,n),t.child;case 6:return e===null&&Aa(t),null;case 13:return gp(e,t,n);case 4:return qs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yn(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),xc(e,t,r,i,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,Y(xo,r._currentValue),r._currentValue=l,o!==null)if(dt(o.value,l)){if(o.children===i.children&&!De.current){t=Ot(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=jt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Fa(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(b(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Fa(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Hn(t,n),i=et(i),r=r(i),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,i=ot(r,t.pendingProps),i=ot(r.type,i),wc(e,t,r,i,n);case 15:return fp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Ki(e,t),t.tag=1,Ae(r)?(e=!0,go(t)):e=!1,Hn(t,n),up(t,r,i),Ha(t,r,i,n),Va(null,t,r,!0,e,n);case 19:return vp(e,t,n);case 22:return pp(e,t,n)}throw Error(b(156,t.tag))};function Rp(e,t){return lf(e,t)}function Cv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new Cv(e,t,n,r)}function fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ov(e){if(typeof e=="function")return fu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zs)return 11;if(e===Ls)return 14}return 2}function Kt(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")fu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case En:return dn(n.children,i,o,t);case Ts:l=8,i|=8;break;case fa:return e=Ze(12,n,t,i|2),e.elementType=fa,e.lanes=o,e;case pa:return e=Ze(13,n,t,i),e.elementType=pa,e.lanes=o,e;case ha:return e=Ze(19,n,t,i),e.elementType=ha,e.lanes=o,e;case Hd:return rl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fd:l=10;break e;case Ud:l=9;break e;case zs:l=11;break e;case Ls:l=14;break e;case Nt:l=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=Ze(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function dn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function rl(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=Hd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ql(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function Gl(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cl(0),this.expirationTimes=Cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pu(e,t,n,r,i,o,l,a,s){return e=new bv(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ze(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ys(o),e}function Tv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Np(e){if(!e)return Zt;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Nf(e,n,t)}return t}function $p(e,t,n,r,i,o,l,a,s){return e=pu(n,r,!0,e,i,o,l,a,s),e.context=Np(null),n=e.current,r=Te(),i=Xt(n),o=jt(r,i),o.callback=t??null,Qt(n,o,i),e.current.lanes=i,ci(e,i,r),Fe(e,r),e}function il(e,t,n,r){var i=t.current,o=Te(),l=Xt(i);return n=Np(n),t.context===null?t.context=n:t.pendingContext=n,t=jt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qt(i,t,l),e!==null&&(ut(e,i,l,o),Qi(e,i,l)),l}function bo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hu(e,t){Lc(e,t),(e=e.alternate)&&Lc(e,t)}function zv(){return null}var Ip=typeof reportError=="function"?reportError:function(e){console.error(e)};function mu(e){this._internalRoot=e}ol.prototype.render=mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));il(e,t,null,null)};ol.prototype.unmount=mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){il(null,e,null,null)}),t[Et]=null}};function ol(e){this._internalRoot=e}ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=pf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&mf(e)}};function gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rc(){}function Lv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=bo(l);o.call(u)}}var l=$p(t,r,e,0,null,!1,!1,"",Rc);return e._reactRootContainer=l,e[Et]=l.current,Yr(e.nodeType===8?e.parentNode:e),yn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=bo(s);a.call(u)}}var s=pu(e,0,!1,null,null,!1,!1,"",Rc);return e._reactRootContainer=s,e[Et]=s.current,Yr(e.nodeType===8?e.parentNode:e),yn(function(){il(t,s,n,r)}),s}function al(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=bo(l);a.call(s)}}il(t,l,e,i)}else l=Lv(n,t,e,i,r);return bo(l)}df=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=br(t.pendingLanes);n!==0&&($s(t,n|1),Fe(t,ue()),!(Q&6)&&(Jn=ue()+500,tn()))}break;case 13:yn(function(){var r=Ct(e,1);if(r!==null){var i=Te();ut(r,e,1,i)}}),hu(e,1)}};Is=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var n=Te();ut(t,e,134217728,n)}hu(e,134217728)}};ff=function(e){if(e.tag===13){var t=Xt(e),n=Ct(e,t);if(n!==null){var r=Te();ut(n,e,t,r)}hu(e,t)}};pf=function(){return K};hf=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};ja=function(e,t,n){switch(t){case"input":if(va(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=qo(r);if(!i)throw Error(b(90));Bd(r),va(r,i)}}}break;case"textarea":Qd(e,n);break;case"select":t=n.value,t!=null&&Dn(e,!!n.multiple,t,!1)}};Jd=uu;ef=yn;var Rv={usingClientEntryPoint:!1,Events:[fi,Tn,qo,qd,Zd,uu]},Pr={findFiberByHostInstance:ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nv={bundleType:Pr.bundleType,version:Pr.version,rendererPackageName:Pr.rendererPackageName,rendererConfig:Pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rf(e),e===null?null:e.stateNode},findFiberByHostInstance:Pr.findFiberByHostInstance||zv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{Go=$i.inject(Nv),gt=$i}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rv;Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gu(t))throw Error(b(200));return Tv(e,t,null,n)};Xe.createRoot=function(e,t){if(!gu(e))throw Error(b(299));var n=!1,r="",i=Ip;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=pu(e,1,!1,null,null,n,!1,r,i),e[Et]=t.current,Yr(e.nodeType===8?e.parentNode:e),new mu(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=rf(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return yn(e)};Xe.hydrate=function(e,t,n){if(!ll(t))throw Error(b(200));return al(null,e,t,!0,n)};Xe.hydrateRoot=function(e,t,n){if(!gu(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Ip;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=$p(t,null,e,1,n??null,i,!1,o,l),e[Et]=t.current,Yr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ol(t)};Xe.render=function(e,t,n){if(!ll(t))throw Error(b(200));return al(null,e,t,!1,n)};Xe.unmountComponentAtNode=function(e){if(!ll(e))throw Error(b(40));return e._reactRootContainer?(yn(function(){al(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};Xe.unstable_batchedUpdates=uu;Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ll(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return al(e,t,n,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function Mp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mp)}catch(e){console.error(e)}}Mp(),Id.exports=Xe;var $v=Id.exports,Dp,Nc=$v;Dp=Nc.createRoot,Nc.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(this,arguments)}var Ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ut||(Ut={}));const $c="popstate";function Iv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return rs("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:To(i)}return Dv(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ap(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Mv(){return Math.random().toString(36).substr(2,8)}function Ic(e,t){return{usr:e.state,key:e.key,idx:t}}function rs(e,t,n,r){return n===void 0&&(n=null),oi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pr(t):t,{state:n,key:t&&t.key||r||Mv()})}function To(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function pr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Dv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Ut.Pop,s=null,u=h();u==null&&(u=0,l.replaceState(oi({},l.state,{idx:u}),""));function h(){return(l.state||{idx:null}).idx}function d(){a=Ut.Pop;let k=h(),m=k==null?null:k-u;u=k,s&&s({action:a,location:y.location,delta:m})}function g(k,m){a=Ut.Push;let f=rs(y.location,k,m);u=h()+1;let v=Ic(f,u),w=y.createHref(f);try{l.pushState(v,"",w)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(w)}o&&s&&s({action:a,location:y.location,delta:1})}function x(k,m){a=Ut.Replace;let f=rs(y.location,k,m);u=h();let v=Ic(f,u),w=y.createHref(f);l.replaceState(v,"",w),o&&s&&s({action:a,location:y.location,delta:0})}function p(k){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof k=="string"?k:To(k);return f=f.replace(/ $/,"%20"),fe(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let y={get action(){return a},get location(){return e(i,l)},listen(k){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener($c,d),s=k,()=>{i.removeEventListener($c,d),s=null}},createHref(k){return t(i,k)},createURL:p,encodeLocation(k){let m=p(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:x,go(k){return l.go(k)}};return y}var Mc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Mc||(Mc={}));function Av(e,t,n){return n===void 0&&(n="/"),Fv(e,t,n)}function Fv(e,t,n,r){let i=typeof t=="string"?pr(t):t,o=vu(i.pathname||"/",n);if(o==null)return null;let l=Fp(e);Uv(l);let a=null;for(let s=0;a==null&&s<l.length;++s){let u=Jv(o);a=Yv(l[s],u)}return a}function Fp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(fe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Yt([r,s.relativePath]),h=n.concat(s);o.children&&o.children.length>0&&(fe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Fp(o.children,t,h,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Xv(u,o.index),routesMeta:h})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of Up(o.path))i(o,l,s)}),t}function Up(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Up(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Uv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Kv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Hv=/^:[\w-]+$/,Wv=3,Bv=2,Vv=1,Qv=10,Gv=-2,Dc=e=>e==="*";function Xv(e,t){let n=e.split("/"),r=n.length;return n.some(Dc)&&(r+=Gv),t&&(r+=Bv),n.filter(i=>!Dc(i)).reduce((i,o)=>i+(Hv.test(o)?Wv:o===""?Vv:Qv),r)}function Kv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Yv(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,h=o==="/"?t:t.slice(o.length)||"/",d=qv({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},h),g=s.route;if(!d)return null;Object.assign(i,d.params),l.push({params:i,pathname:Yt([o,d.pathname]),pathnameBase:r0(Yt([o,d.pathnameBase])),route:g}),d.pathnameBase!=="/"&&(o=Yt([o,d.pathnameBase]))}return l}function qv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Zv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,h,d)=>{let{paramName:g,isOptional:x}=h;if(g==="*"){let y=a[d]||"";l=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const p=a[d];return x&&!p?u[g]=void 0:u[g]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function Zv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ap(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Jv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ap(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function vu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function e0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?pr(e):e;return{pathname:n?n.startsWith("/")?n:t0(n,t):t,search:i0(r),hash:o0(i)}}function t0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function n0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Hp(e,t){let n=n0(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Wp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=pr(e):(i=oi({},e),fe(!i.pathname||!i.pathname.includes("?"),Xl("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),Xl("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),Xl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let d=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),d-=1;i.pathname=g.join("/")}a=d>=0?t[d]:"/"}let s=e0(i,a),u=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||h)&&(s.pathname+="/"),s}const Yt=e=>e.join("/").replace(/\/\/+/g,"/"),r0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),i0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,o0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function l0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bp=["post","put","patch","delete"];new Set(Bp);const a0=["get",...Bp];new Set(a0);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function li(){return li=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},li.apply(this,arguments)}const yu=E.createContext(null),s0=E.createContext(null),kn=E.createContext(null),sl=E.createContext(null),Tt=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Vp=E.createContext(null);function u0(e,t){let{relative:n}=t===void 0?{}:t;hi()||fe(!1);let{basename:r,navigator:i}=E.useContext(kn),{hash:o,pathname:l,search:a}=Kp(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:Yt([r,l])),i.createHref({pathname:s,search:a,hash:o})}function hi(){return E.useContext(sl)!=null}function ul(){return hi()||fe(!1),E.useContext(sl).location}function Qp(e){E.useContext(kn).static||E.useLayoutEffect(e)}function Gp(){let{isDataRoute:e}=E.useContext(Tt);return e?j0():c0()}function c0(){hi()||fe(!1);let e=E.useContext(yu),{basename:t,future:n,navigator:r}=E.useContext(kn),{matches:i}=E.useContext(Tt),{pathname:o}=ul(),l=JSON.stringify(Hp(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return Qp(()=>{a.current=!0}),E.useCallback(function(u,h){if(h===void 0&&(h={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Wp(u,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Yt([t,d.pathname])),(h.replace?r.replace:r.push)(d,h.state,h)},[t,r,l,o,e])}const d0=E.createContext(null);function f0(e){let t=E.useContext(Tt).outlet;return t&&E.createElement(d0.Provider,{value:e},t)}function Xp(){let{matches:e}=E.useContext(Tt),t=e[e.length-1];return t?t.params:{}}function Kp(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(kn),{matches:i}=E.useContext(Tt),{pathname:o}=ul(),l=JSON.stringify(Hp(i,r.v7_relativeSplatPath));return E.useMemo(()=>Wp(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function p0(e,t){return h0(e,t)}function h0(e,t,n,r){hi()||fe(!1);let{navigator:i,static:o}=E.useContext(kn),{matches:l}=E.useContext(Tt),a=l[l.length-1],s=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let h=ul(),d;if(t){var g;let m=typeof t=="string"?pr(t):t;u==="/"||(g=m.pathname)!=null&&g.startsWith(u)||fe(!1),d=m}else d=h;let x=d.pathname||"/",p=x;if(u!=="/"){let m=u.replace(/^\//,"").split("/");p="/"+x.replace(/^\//,"").split("/").slice(m.length).join("/")}let y=Av(e,{pathname:p}),k=x0(y&&y.map(m=>Object.assign({},m,{params:Object.assign({},s,m.params),pathname:Yt([u,i.encodeLocation?i.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?u:Yt([u,i.encodeLocation?i.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),l,n,r);return t&&k?E.createElement(sl.Provider,{value:{location:li({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ut.Pop}},k):k}function m0(){let e=P0(),t=l0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,null)}const g0=E.createElement(m0,null);class v0 extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(Tt.Provider,{value:this.props.routeContext},E.createElement(Vp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function y0(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(yu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Tt.Provider,{value:t},r)}function x0(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=l.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);h>=0||fe(!1),l=l.slice(0,Math.min(l.length,h+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<l.length;h++){let d=l[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:g,errors:x}=n,p=d.route.loader&&g[d.route.id]===void 0&&(!x||x[d.route.id]===void 0);if(d.route.lazy||p){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((h,d,g)=>{let x,p=!1,y=null,k=null;n&&(x=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||g0,s&&(u<0&&g===0?(_0("route-fallback"),p=!0,k=null):u===g&&(p=!0,k=d.route.hydrateFallbackElement||null)));let m=t.concat(l.slice(0,g+1)),f=()=>{let v;return x?v=y:p?v=k:d.route.Component?v=E.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=h,E.createElement(y0,{match:d,routeContext:{outlet:h,matches:m,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?E.createElement(v0,{location:n.location,revalidation:n.revalidation,component:y,error:x,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var Yp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Yp||{}),qp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(qp||{});function w0(e){let t=E.useContext(yu);return t||fe(!1),t}function S0(e){let t=E.useContext(s0);return t||fe(!1),t}function k0(e){let t=E.useContext(Tt);return t||fe(!1),t}function Zp(e){let t=k0(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function P0(){var e;let t=E.useContext(Vp),n=S0(),r=Zp();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function j0(){let{router:e}=w0(Yp.UseNavigateStable),t=Zp(qp.UseNavigateStable),n=E.useRef(!1);return Qp(()=>{n.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,li({fromRouteId:t},o)))},[e,t])}const Ac={};function _0(e,t,n){Ac[e]||(Ac[e]=!0)}function E0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function C0(e){return f0(e.context)}function me(e){fe(!1)}function O0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ut.Pop,navigator:o,static:l=!1,future:a}=e;hi()&&fe(!1);let s=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:s,navigator:o,static:l,future:li({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=pr(r));let{pathname:h="/",search:d="",hash:g="",state:x=null,key:p="default"}=r,y=E.useMemo(()=>{let k=vu(h,s);return k==null?null:{location:{pathname:k,search:d,hash:g,state:x,key:p},navigationType:i}},[s,h,d,g,x,p,i]);return y==null?null:E.createElement(kn.Provider,{value:u},E.createElement(sl.Provider,{children:n,value:y}))}function b0(e){let{children:t,location:n}=e;return p0(is(t),n)}new Promise(()=>{});function is(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let o=[...t,i];if(r.type===E.Fragment){n.push.apply(n,is(r.props.children,o));return}r.type!==me&&fe(!1),!r.props.index||!r.props.children||fe(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=is(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function os(){return os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},os.apply(this,arguments)}function T0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function z0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function L0(e,t){return e.button===0&&(!t||t==="_self")&&!z0(e)}const R0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],N0="6";try{window.__reactRouterVersion=N0}catch{}const $0="startTransition",Fc=jm[$0];function I0(e){let{basename:t,children:n,future:r,window:i}=e,o=E.useRef();o.current==null&&(o.current=Iv({window:i,v5Compat:!0}));let l=o.current,[a,s]=E.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},h=E.useCallback(d=>{u&&Fc?Fc(()=>s(d)):s(d)},[s,u]);return E.useLayoutEffect(()=>l.listen(h),[l,h]),E.useEffect(()=>E0(r),[r]),E.createElement(O0,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const M0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",D0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ne=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:u,preventScrollReset:h,viewTransition:d}=t,g=T0(t,R0),{basename:x}=E.useContext(kn),p,y=!1;if(typeof u=="string"&&D0.test(u)&&(p=u,M0))try{let v=new URL(window.location.href),w=u.startsWith("//")?new URL(v.protocol+u):new URL(u),P=vu(w.pathname,x);w.origin===v.origin&&P!=null?u=P+w.search+w.hash:y=!0}catch{}let k=u0(u,{relative:i}),m=A0(u,{replace:l,state:a,target:s,preventScrollReset:h,relative:i,viewTransition:d});function f(v){r&&r(v),v.defaultPrevented||m(v)}return E.createElement("a",os({},g,{href:p||k,onClick:y||o?r:f,ref:n,target:s}))});var Uc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Uc||(Uc={}));var Hc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hc||(Hc={}));function A0(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:a}=t===void 0?{}:t,s=Gp(),u=ul(),h=Kp(e,{relative:l});return E.useCallback(d=>{if(L0(d,n)){d.preventDefault();let g=r!==void 0?r:To(u)===To(h);s(e,{replace:g,state:i,preventScrollReset:o,relative:l,viewTransition:a})}},[u,s,h,r,i,n,e,o,l,a])}var Me=function(){return Me=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Me.apply(this,arguments)};function zo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Z="-ms-",Ur="-moz-",X="-webkit-",Jp="comm",cl="rule",xu="decl",F0="@import",eh="@keyframes",U0="@layer",th=Math.abs,wu=String.fromCharCode,ls=Object.assign;function H0(e,t){return ve(e,0)^45?(((t<<2^ve(e,0))<<2^ve(e,1))<<2^ve(e,2))<<2^ve(e,3):0}function nh(e){return e.trim()}function wt(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function Ji(e,t,n){return e.indexOf(t,n)}function ve(e,t){return e.charCodeAt(t)|0}function er(e,t,n){return e.slice(t,n)}function ht(e){return e.length}function rh(e){return e.length}function zr(e,t){return t.push(e),e}function W0(e,t){return e.map(t).join("")}function Wc(e,t){return e.filter(function(n){return!wt(n,t)})}var dl=1,tr=1,ih=0,nt=0,ce=0,hr="";function fl(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:dl,column:tr,length:l,return:"",siblings:a}}function Rt(e,t){return ls(fl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function jn(e){for(;e.root;)e=Rt(e.root,{children:[e]});zr(e,e.siblings)}function B0(){return ce}function V0(){return ce=nt>0?ve(hr,--nt):0,tr--,ce===10&&(tr=1,dl--),ce}function ct(){return ce=nt<ih?ve(hr,nt++):0,tr++,ce===10&&(tr=1,dl++),ce}function fn(){return ve(hr,nt)}function eo(){return nt}function pl(e,t){return er(hr,e,t)}function as(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Q0(e){return dl=tr=1,ih=ht(hr=e),nt=0,[]}function G0(e){return hr="",e}function Kl(e){return nh(pl(nt-1,ss(e===91?e+2:e===40?e+1:e)))}function X0(e){for(;(ce=fn())&&ce<33;)ct();return as(e)>2||as(ce)>3?"":" "}function K0(e,t){for(;--t&&ct()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return pl(e,eo()+(t<6&&fn()==32&&ct()==32))}function ss(e){for(;ct();)switch(ce){case e:return nt;case 34:case 39:e!==34&&e!==39&&ss(ce);break;case 40:e===41&&ss(e);break;case 92:ct();break}return nt}function Y0(e,t){for(;ct()&&e+ce!==57;)if(e+ce===84&&fn()===47)break;return"/*"+pl(t,nt-1)+"*"+wu(e===47?e:ct())}function q0(e){for(;!as(fn());)ct();return pl(e,nt)}function Z0(e){return G0(to("",null,null,null,[""],e=Q0(e),0,[0],e))}function to(e,t,n,r,i,o,l,a,s){for(var u=0,h=0,d=l,g=0,x=0,p=0,y=1,k=1,m=1,f=0,v="",w=i,P=o,j=r,_=v;k;)switch(p=f,f=ct()){case 40:if(p!=108&&ve(_,d-1)==58){Ji(_+=U(Kl(f),"&","&\f"),"&\f",th(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:_+=Kl(f);break;case 9:case 10:case 13:case 32:_+=X0(p);break;case 92:_+=K0(eo()-1,7);continue;case 47:switch(fn()){case 42:case 47:zr(J0(Y0(ct(),eo()),t,n,s),s);break;default:_+="/"}break;case 123*y:a[u++]=ht(_)*m;case 125*y:case 59:case 0:switch(f){case 0:case 125:k=0;case 59+h:m==-1&&(_=U(_,/\f/g,"")),x>0&&ht(_)-d&&zr(x>32?Vc(_+";",r,n,d-1,s):Vc(U(_," ","")+";",r,n,d-2,s),s);break;case 59:_+=";";default:if(zr(j=Bc(_,t,n,u,h,i,a,v,w=[],P=[],d,o),o),f===123)if(h===0)to(_,t,j,j,w,o,d,a,P);else switch(g===99&&ve(_,3)===110?100:g){case 100:case 108:case 109:case 115:to(e,j,j,r&&zr(Bc(e,j,j,0,0,i,a,v,i,w=[],d,P),P),i,P,d,a,r?w:P);break;default:to(_,j,j,j,[""],P,0,a,P)}}u=h=x=0,y=m=1,v=_="",d=l;break;case 58:d=1+ht(_),x=p;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&V0()==125)continue}switch(_+=wu(f),f*y){case 38:m=h>0?1:(_+="\f",-1);break;case 44:a[u++]=(ht(_)-1)*m,m=1;break;case 64:fn()===45&&(_+=Kl(ct())),g=fn(),h=d=ht(v=_+=q0(eo())),f++;break;case 45:p===45&&ht(_)==2&&(y=0)}}return o}function Bc(e,t,n,r,i,o,l,a,s,u,h,d){for(var g=i-1,x=i===0?o:[""],p=rh(x),y=0,k=0,m=0;y<r;++y)for(var f=0,v=er(e,g+1,g=th(k=l[y])),w=e;f<p;++f)(w=nh(k>0?x[f]+" "+v:U(v,/&\f/g,x[f])))&&(s[m++]=w);return fl(e,t,n,i===0?cl:a,s,u,h,d)}function J0(e,t,n,r){return fl(e,t,n,Jp,wu(B0()),er(e,2,-2),0,r)}function Vc(e,t,n,r,i){return fl(e,t,n,xu,er(e,0,r),er(e,r+1,-1),r,i)}function oh(e,t,n){switch(H0(e,t)){case 5103:return X+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return X+e+e;case 4789:return Ur+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return X+e+Ur+e+Z+e+e;case 5936:switch(ve(e,t+11)){case 114:return X+e+Z+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return X+e+Z+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return X+e+Z+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return X+e+Z+e+e;case 6165:return X+e+Z+"flex-"+e+e;case 5187:return X+e+U(e,/(\w+).+(:[^]+)/,X+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return X+e+Z+"flex-item-"+U(e,/flex-|-self/g,"")+(wt(e,/flex-|baseline/)?"":Z+"grid-row-"+U(e,/flex-|-self/g,""))+e;case 4675:return X+e+Z+"flex-line-pack"+U(e,/align-content|flex-|-self/g,"")+e;case 5548:return X+e+Z+U(e,"shrink","negative")+e;case 5292:return X+e+Z+U(e,"basis","preferred-size")+e;case 6060:return X+"box-"+U(e,"-grow","")+X+e+Z+U(e,"grow","positive")+e;case 4554:return X+U(e,/([^-])(transform)/g,"$1"+X+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,X+"$1"),/(image-set)/,X+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,X+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,X+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+X+e+e;case 4200:if(!wt(e,/flex-|baseline/))return Z+"grid-column-align"+er(e,t)+e;break;case 2592:case 3360:return Z+U(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,wt(r.props,/grid-\w+-end/)})?~Ji(e+(n=n[t].value),"span",0)?e:Z+U(e,"-start","")+e+Z+"grid-row-span:"+(~Ji(n,"span",0)?wt(n,/\d+/):+wt(n,/\d+/)-+wt(e,/\d+/))+";":Z+U(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return wt(r.props,/grid-\w+-start/)})?e:Z+U(U(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,X+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ht(e)-1-t>6)switch(ve(e,t+1)){case 109:if(ve(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+X+"$2-$3$1"+Ur+(ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ji(e,"stretch",0)?oh(U(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return U(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,u){return Z+i+":"+o+u+(l?Z+i+"-span:"+(a?s:+s-+o)+u:"")+e});case 4949:if(ve(e,t+6)===121)return U(e,":",":"+X)+e;break;case 6444:switch(ve(e,ve(e,14)===45?18:11)){case 120:return U(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+X+(ve(e,14)===45?"inline-":"")+"box$3$1"+X+"$2$3$1"+Z+"$2box$3")+e;case 100:return U(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(e,"scroll-","scroll-snap-")+e}return e}function Lo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ey(e,t,n,r){switch(e.type){case U0:if(e.children.length)break;case F0:case xu:return e.return=e.return||e.value;case Jp:return"";case eh:return e.return=e.value+"{"+Lo(e.children,r)+"}";case cl:if(!ht(e.value=e.props.join(",")))return""}return ht(n=Lo(e.children,r))?e.return=e.value+"{"+n+"}":""}function ty(e){var t=rh(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function ny(e){return function(t){t.root||(t=t.return)&&e(t)}}function ry(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case xu:e.return=oh(e.value,e.length,n);return;case eh:return Lo([Rt(e,{value:U(e.value,"@","@"+X)})],r);case cl:if(e.length)return W0(n=e.props,function(i){switch(wt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jn(Rt(e,{props:[U(i,/:(read-\w+)/,":"+Ur+"$1")]})),jn(Rt(e,{props:[i]})),ls(e,{props:Wc(n,r)});break;case"::placeholder":jn(Rt(e,{props:[U(i,/:(plac\w+)/,":"+X+"input-$1")]})),jn(Rt(e,{props:[U(i,/:(plac\w+)/,":"+Ur+"$1")]})),jn(Rt(e,{props:[U(i,/:(plac\w+)/,Z+"input-$1")]})),jn(Rt(e,{props:[i]})),ls(e,{props:Wc(n,r)});break}return""})}}var iy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},We={},nr=typeof process<"u"&&We!==void 0&&(We.REACT_APP_SC_ATTR||We.SC_ATTR)||"data-styled",lh="active",ah="data-styled-version",hl="6.1.15",Su=`/*!sc*/
`,Ro=typeof window<"u"&&"HTMLElement"in window,oy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&We!==void 0&&We.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&We.REACT_APP_SC_DISABLE_SPEEDY!==""?We.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&We.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&We!==void 0&&We.SC_DISABLE_SPEEDY!==void 0&&We.SC_DISABLE_SPEEDY!==""&&We.SC_DISABLE_SPEEDY!=="false"&&We.SC_DISABLE_SPEEDY),ml=Object.freeze([]),rr=Object.freeze({});function ly(e,t,n){return n===void 0&&(n=rr),e.theme!==n.theme&&e.theme||t||n.theme}var sh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ay=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,sy=/(^-|-$)/g;function Qc(e){return e.replace(ay,"-").replace(sy,"")}var uy=/(a)(d)/gi,Ii=52,Gc=function(e){return String.fromCharCode(e+(e>25?39:97))};function us(e){var t,n="";for(t=Math.abs(e);t>Ii;t=t/Ii|0)n=Gc(t%Ii)+n;return(Gc(t%Ii)+n).replace(uy,"$1-$2")}var Yl,uh=5381,Mn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ch=function(e){return Mn(uh,e)};function cy(e){return us(ch(e)>>>0)}function dy(e){return e.displayName||e.name||"Component"}function ql(e){return typeof e=="string"&&!0}var dh=typeof Symbol=="function"&&Symbol.for,fh=dh?Symbol.for("react.memo"):60115,fy=dh?Symbol.for("react.forward_ref"):60112,py={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},hy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ph={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},my=((Yl={})[fy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yl[fh]=ph,Yl);function Xc(e){return("type"in(t=e)&&t.type.$$typeof)===fh?ph:"$$typeof"in e?my[e.$$typeof]:py;var t}var gy=Object.defineProperty,vy=Object.getOwnPropertyNames,Kc=Object.getOwnPropertySymbols,yy=Object.getOwnPropertyDescriptor,xy=Object.getPrototypeOf,Yc=Object.prototype;function hh(e,t,n){if(typeof t!="string"){if(Yc){var r=xy(t);r&&r!==Yc&&hh(e,r,n)}var i=vy(t);Kc&&(i=i.concat(Kc(t)));for(var o=Xc(e),l=Xc(t),a=0;a<i.length;++a){var s=i[a];if(!(s in hy||n&&n[s]||l&&s in l||o&&s in o)){var u=yy(t,s);try{gy(e,s,u)}catch{}}}}return e}function ir(e){return typeof e=="function"}function ku(e){return typeof e=="object"&&"styledComponentId"in e}function un(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function qc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function ai(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function cs(e,t,n){if(n===void 0&&(n=!1),!n&&!ai(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=cs(e[r],t[r]);else if(ai(t))for(var r in t)e[r]=cs(e[r],t[r]);return e}function Pu(e,t){Object.defineProperty(e,"toString",{value:t})}function mi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var wy=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw mi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(Su);return n},e}(),no=new Map,No=new Map,ro=1,Mi=function(e){if(no.has(e))return no.get(e);for(;No.has(ro);)ro++;var t=ro++;return no.set(e,t),No.set(t,e),t},Sy=function(e,t){ro=t+1,no.set(e,t),No.set(t,e)},ky="style[".concat(nr,"][").concat(ah,'="').concat(hl,'"]'),Py=new RegExp("^".concat(nr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),jy=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},_y=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Su),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var s=a.match(Py);if(s){var u=0|parseInt(s[1],10),h=s[2];u!==0&&(Sy(h,u),jy(e,h,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},Zc=function(e){for(var t=document.querySelectorAll(ky),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(nr)!==lh&&(_y(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Ey(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var mh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var s=Array.from(a.querySelectorAll("style[".concat(nr,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(nr,lh),r.setAttribute(ah,hl);var l=Ey();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Cy=function(){function e(t){this.element=mh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw mi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Oy=function(){function e(t){this.element=mh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),by=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Jc=Ro,Ty={isServer:!Ro,useCSSOMInjection:!oy},gh=function(){function e(t,n,r){t===void 0&&(t=rr),n===void 0&&(n={});var i=this;this.options=Me(Me({},Ty),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ro&&Jc&&(Jc=!1,Zc(this)),Pu(this,function(){return function(o){for(var l=o.getTag(),a=l.length,s="",u=function(d){var g=function(m){return No.get(m)}(d);if(g===void 0)return"continue";var x=o.names.get(g),p=l.getGroup(d);if(x===void 0||!x.size||p.length===0)return"continue";var y="".concat(nr,".g").concat(d,'[id="').concat(g,'"]'),k="";x!==void 0&&x.forEach(function(m){m.length>0&&(k+="".concat(m,","))}),s+="".concat(p).concat(y,'{content:"').concat(k,'"}').concat(Su)},h=0;h<a;h++)u(h);return s}(i)})}return e.registerId=function(t){return Mi(t)},e.prototype.rehydrate=function(){!this.server&&Ro&&Zc(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Me(Me({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new by(i):r?new Cy(i):new Oy(i)}(this.options),new wy(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Mi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Mi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Mi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),zy=/&/g,Ly=/^\s*\/\/.*$/gm;function vh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=vh(n.children,t)),n})}function Ry(e){var t,n,r,i=rr,o=i.options,l=o===void 0?rr:o,a=i.plugins,s=a===void 0?ml:a,u=function(g,x,p){return p.startsWith(n)&&p.endsWith(n)&&p.replaceAll(n,"").length>0?".".concat(t):g},h=s.slice();h.push(function(g){g.type===cl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(zy,n).replace(r,u))}),l.prefix&&h.push(ry),h.push(ey);var d=function(g,x,p,y){x===void 0&&(x=""),p===void 0&&(p=""),y===void 0&&(y="&"),t=y,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var k=g.replace(Ly,""),m=Z0(p||x?"".concat(p," ").concat(x," { ").concat(k," }"):k);l.namespace&&(m=vh(m,l.namespace));var f=[];return Lo(m,ty(h.concat(ny(function(v){return f.push(v)})))),f};return d.hash=s.length?s.reduce(function(g,x){return x.name||mi(15),Mn(g,x.name)},uh).toString():"",d}var Ny=new gh,ds=Ry(),yh=Qn.createContext({shouldForwardProp:void 0,styleSheet:Ny,stylis:ds});yh.Consumer;Qn.createContext(void 0);function ed(){return E.useContext(yh)}var $y=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ds);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Pu(this,function(){throw mi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ds),this.name+t.hash},e}(),Iy=function(e){return e>="A"&&e<="Z"};function td(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Iy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var xh=function(e){return e==null||e===!1||e===""},wh=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!xh(o)&&(Array.isArray(o)&&o.isCss||ir(o)?r.push("".concat(td(i),":"),o,";"):ai(o)?r.push.apply(r,zo(zo(["".concat(i," {")],wh(o),!1),["}"],!1)):r.push("".concat(td(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in iy||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function pn(e,t,n,r){if(xh(e))return[];if(ku(e))return[".".concat(e.styledComponentId)];if(ir(e)){if(!ir(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return pn(i,t,n,r)}var o;return e instanceof $y?n?(e.inject(n,r),[e.getName(r)]):[e]:ai(e)?wh(e):Array.isArray(e)?Array.prototype.concat.apply(ml,e.map(function(l){return pn(l,t,n,r)})):[e.toString()]}function My(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ir(n)&&!ku(n))return!1}return!0}var Dy=ch(hl),Ay=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&My(t),this.componentId=n,this.baseHash=Mn(Dy,n),this.baseStyle=r,gh.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=un(i,this.staticRulesId);else{var o=qc(pn(this.rules,t,n,r)),l=us(Mn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=un(i,l),this.staticRulesId=l}else{for(var s=Mn(this.baseHash,r.hash),u="",h=0;h<this.rules.length;h++){var d=this.rules[h];if(typeof d=="string")u+=d;else if(d){var g=qc(pn(d,t,n,r));s=Mn(s,g+h),u+=g}}if(u){var x=us(s>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),i=un(i,x)}}return i},e}(),Sh=Qn.createContext(void 0);Sh.Consumer;var Zl={};function Fy(e,t,n){var r=ku(e),i=e,o=!ql(e),l=t.attrs,a=l===void 0?ml:l,s=t.componentId,u=s===void 0?function(w,P){var j=typeof w!="string"?"sc":Qc(w);Zl[j]=(Zl[j]||0)+1;var _="".concat(j,"-").concat(cy(hl+j+Zl[j]));return P?"".concat(P,"-").concat(_):_}(t.displayName,t.parentComponentId):s,h=t.displayName,d=h===void 0?function(w){return ql(w)?"styled.".concat(w):"Styled(".concat(dy(w),")")}(e):h,g=t.displayName&&t.componentId?"".concat(Qc(t.displayName),"-").concat(t.componentId):t.componentId||u,x=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,p=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;p=function(w,P){return y(w,P)&&k(w,P)}}else p=y}var m=new Ay(n,g,r?i.componentStyle:void 0);function f(w,P){return function(j,_,z){var O=j.attrs,C=j.componentStyle,I=j.defaultProps,$=j.foldedComponentIds,M=j.styledComponentId,A=j.target,rt=Qn.useContext(Sh),ae=ed(),xe=j.shouldForwardProp||ae.shouldForwardProp,L=ly(_,rt,I)||rr,N=function(Re,He,yt){for(var mr,nn=Me(Me({},He),{className:void 0,theme:yt}),Sl=0;Sl<Re.length;Sl+=1){var vi=ir(mr=Re[Sl])?mr(nn):mr;for(var zt in vi)nn[zt]=zt==="className"?un(nn[zt],vi[zt]):zt==="style"?Me(Me({},nn[zt]),vi[zt]):vi[zt]}return He.className&&(nn.className=un(nn.className,He.className)),nn}(O,_,L),F=N.as||A,V={};for(var G in N)N[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&N.theme===L||(G==="forwardedAs"?V.as=N.forwardedAs:xe&&!xe(G,F)||(V[G]=N[G]));var Ce=function(Re,He){var yt=ed(),mr=Re.generateAndInjectStyles(He,yt.styleSheet,yt.stylis);return mr}(C,N),Ue=un($,M);return Ce&&(Ue+=" "+Ce),N.className&&(Ue+=" "+N.className),V[ql(F)&&!sh.has(F)?"class":"className"]=Ue,z&&(V.ref=z),E.createElement(F,V)}(v,w,P)}f.displayName=d;var v=Qn.forwardRef(f);return v.attrs=x,v.componentStyle=m,v.displayName=d,v.shouldForwardProp=p,v.foldedComponentIds=r?un(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=g,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(P){for(var j=[],_=1;_<arguments.length;_++)j[_-1]=arguments[_];for(var z=0,O=j;z<O.length;z++)cs(P,O[z],!0);return P}({},i.defaultProps,w):w}}),Pu(v,function(){return".".concat(v.styledComponentId)}),o&&hh(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function nd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var rd=function(e){return Object.assign(e,{isCss:!0})};function Uy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ir(e)||ai(e))return rd(pn(nd(ml,zo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?pn(r):rd(pn(nd(r,t)))}function fs(e,t,n){if(n===void 0&&(n=rr),!t)throw mi(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,Uy.apply(void 0,zo([i],o,!1)))};return r.attrs=function(i){return fs(e,t,Me(Me({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return fs(e,t,Me(Me({},n),i))},r}var kh=function(e){return fs(Fy,e)},S=kh;sh.forEach(function(e){S[e]=kh(e)});const Hy=S.nav`
  width: 100%;
  max-width: 1200px; /* ✅ 限制最大寬度 */
  margin: auto; /* ✅ 讓 Navbar 置中 */
  background-color: blue;
  display: flex;
  justify-content: center; /* ✅ 讓內容在電腦版置中 */
  align-items: center;
  padding: 15px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
`,Wy=S.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: ${e=>e.open?"flex":"none"}; /* ✅ 手機版預設隱藏 */
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%); /* ✅ 手機版也置中 */
    width: 80%;
    background-color: rgba(0, 0, 255, 0.9);
    padding: 20px;
    text-align: center;
    border-radius: 5px;
  }
`,jr=S(ne)`
  font-size: 18px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 10px;

  &:hover {
    color: hsl(0, 100%, 40%);
  }
`,By=S.div`
  display: none; /* ✅ 預設隱藏 */
  font-size: 24px;
  cursor: pointer;
  color: white;

  @media (max-width: 768px) {
    display: block; /* ✅ 手機版顯示 */
  }
`;function Ph(){const[e,t]=E.useState(!1);return c.jsxs(Hy,{children:[c.jsx(By,{onClick:()=>t(!e),children:"☰"}),c.jsxs(Wy,{open:e,children:[c.jsx(jr,{to:"/",children:"首頁"}),c.jsx(jr,{to:"/shopping",children:"手機商場"}),c.jsx(jr,{to:"/phonelease",children:"手機租借"}),c.jsx(jr,{to:"/contact-us",children:"聯絡我們"}),c.jsx(jr,{to:"/login",children:"會員登入"})]})]})}const Vy=S.footer`
  width: 100%;
  max-width: 1200px;  /* ✅ 限制最大寬度 */
  margin: auto;
  background-color: hsl(0, 0%, 50%);
  text-align: center;
  padding: 10px 20px; /* ✅ 增加 padding，讓內容不會緊貼邊界 */
  border-radius: 5px; /* ✅ 讓 footer 角落更圓潤 */
`,Qy=S.div`
  display: flex;
  justify-content: center; /* ✅ 讓連結置中 */
  gap: 20px; /* ✅ 增加間距，取代 margin-right */
  flex-wrap: wrap; /* ✅ 手機版換行 */
  padding-bottom: 10px;
`,Di=S(ne)`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: hsl(0, 100%, 40%);
  }
`,Gy=S.p`
  color: white;
  font-size: 14px; /* ✅ 讓版權聲明更小，避免影響視覺 */
`;function jh(){return c.jsxs(Vy,{children:[c.jsxs(Qy,{children:[c.jsx(Di,{to:"/",children:"首頁"}),c.jsx(Di,{to:"/shopping",children:"手機商場"}),c.jsx(Di,{to:"/phonelease",children:"手機租借"}),c.jsx(Di,{to:"/contact-us",children:"聯絡我們"})]}),c.jsx(Gy,{children:"版權所有 © 2024"})]})}var _h={},Eh={},gl={},Ch={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};e.default=t})(Ch);var Xy="Expected a function",id=NaN,Ky="[object Symbol]",Yy=/^\s+|\s+$/g,qy=/^[-+]0x[0-9a-f]+$/i,Zy=/^0b[01]+$/i,Jy=/^0o[0-7]+$/i,ex=parseInt,tx=typeof yi=="object"&&yi&&yi.Object===Object&&yi,nx=typeof self=="object"&&self&&self.Object===Object&&self,rx=tx||nx||Function("return this")(),ix=Object.prototype,ox=ix.toString,lx=Math.max,ax=Math.min,Jl=function(){return rx.Date.now()};function sx(e,t,n){var r,i,o,l,a,s,u=0,h=!1,d=!1,g=!0;if(typeof e!="function")throw new TypeError(Xy);t=od(t)||0,ps(n)&&(h=!!n.leading,d="maxWait"in n,o=d?lx(od(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g);function x(j){var _=r,z=i;return r=i=void 0,u=j,l=e.apply(z,_),l}function p(j){return u=j,a=setTimeout(m,t),h?x(j):l}function y(j){var _=j-s,z=j-u,O=t-_;return d?ax(O,o-z):O}function k(j){var _=j-s,z=j-u;return s===void 0||_>=t||_<0||d&&z>=o}function m(){var j=Jl();if(k(j))return f(j);a=setTimeout(m,y(j))}function f(j){return a=void 0,g&&r?x(j):(r=i=void 0,l)}function v(){a!==void 0&&clearTimeout(a),u=0,r=s=i=a=void 0}function w(){return a===void 0?l:f(Jl())}function P(){var j=Jl(),_=k(j);if(r=arguments,i=this,s=j,_){if(a===void 0)return p(s);if(d)return a=setTimeout(m,t),x(s)}return a===void 0&&(a=setTimeout(m,t)),l}return P.cancel=v,P.flush=w,P}function ps(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ux(e){return!!e&&typeof e=="object"}function cx(e){return typeof e=="symbol"||ux(e)&&ox.call(e)==Ky}function od(e){if(typeof e=="number")return e;if(cx(e))return id;if(ps(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ps(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Yy,"");var n=Zy.test(e);return n||Jy.test(e)?ex(e.slice(2),n?2:8):qy.test(e)?id:+e}var dx=sx,Oh={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",l=0;l<arguments.length;l++){var a=arguments[l];a&&(o=i(o,r(a)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var l="";for(var a in o)t.call(o,a)&&o[a]&&(l=i(l,a));return l}function i(o,l){return l?o?o+" "+l:o+l:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Oh);var vl=Oh.exports,T={},ju={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(E);function n(i){return i&&i.__esModule?i:{default:i}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(o){return t.default.createElement("ul",{style:{display:"block"}},o)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(o){return t.default.createElement("button",null,o+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null,unslick:!1};e.default=r})(ju);Object.defineProperty(T,"__esModule",{value:!0});T.checkSpecKeys=T.checkNavigable=T.changeSlide=T.canUseDOM=T.canGoNext=void 0;T.clamp=Th;T.extractObject=void 0;T.filterSettings=Ex;T.validSettings=T.swipeStart=T.swipeMove=T.swipeEnd=T.slidesOnRight=T.slidesOnLeft=T.slideHandler=T.siblingDirection=T.safePreventDefault=T.lazyStartIndex=T.lazySlidesOnRight=T.lazySlidesOnLeft=T.lazyEndIndex=T.keyHandler=T.initializedState=T.getWidth=T.getTrackLeft=T.getTrackCSS=T.getTrackAnimateCSS=T.getTotalSlides=T.getSwipeDirection=T.getSlideCount=T.getRequiredLazySlides=T.getPreClones=T.getPostClones=T.getOnDemandLazySlides=T.getNavigableIndexes=T.getHeight=void 0;var fx=bh(E),px=bh(ju);function bh(e){return e&&e.__esModule?e:{default:e}}function si(e){"@babel/helpers - typeof";return si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},si(e)}function ld(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ld(Object(n),!0).forEach(function(r){hx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ld(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hx(e,t,n){return t=mx(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mx(e){var t=gx(e,"string");return si(t)=="symbol"?t:String(t)}function gx(e,t){if(si(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(si(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Th(e,t,n){return Math.max(t,Math.min(e,n))}var Bn=T.safePreventDefault=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()},zh=T.getOnDemandLazySlides=function(t){for(var n=[],r=Lh(t),i=Rh(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};T.getRequiredLazySlides=function(t){for(var n=[],r=Lh(t),i=Rh(t),o=r;o<i;o++)n.push(o);return n};var Lh=T.lazyStartIndex=function(t){return t.currentSlide-vx(t)},Rh=T.lazyEndIndex=function(t){return t.currentSlide+yx(t)},vx=T.lazySlidesOnLeft=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0},yx=T.lazySlidesOnRight=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow},hs=T.getWidth=function(t){return t&&t.offsetWidth||0},Nh=T.getHeight=function(t){return t&&t.offsetHeight||0},$h=T.getSwipeDirection=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,l;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),l=Math.round(o*180/Math.PI),l<0&&(l=360-Math.abs(l)),l<=45&&l>=0||l<=360&&l>=315?"left":l>=135&&l<=225?"right":n===!0?l>=35&&l<=135?"up":"down":"vertical"},Ih=T.canGoNext=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};T.extractObject=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};T.initializedState=function(t){var n=fx.default.Children.count(t.children),r=t.listRef,i=Math.ceil(hs(r)),o=t.trackRef&&t.trackRef.node,l=Math.ceil(hs(o)),a;if(t.vertical)a=i;else{var s=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(s*=i/100),a=Math.ceil((i-s)/t.slidesToShow)}var u=r&&Nh(r.querySelector('[data-index="0"]')),h=u*t.slidesToShow,d=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(d=n-1-t.initialSlide);var g=t.lazyLoadedList||[],x=zh(ee(ee({},t),{},{currentSlide:d,lazyLoadedList:g}));g=g.concat(x);var p={slideCount:n,slideWidth:a,listWidth:i,trackWidth:l,currentSlide:d,slideHeight:u,listHeight:h,lazyLoadedList:g};return t.autoplaying===null&&t.autoplay&&(p.autoplaying="playing"),p};T.slideHandler=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,l=t.index,a=t.slideCount,s=t.lazyLoad,u=t.currentSlide,h=t.centerMode,d=t.slidesToScroll,g=t.slidesToShow,x=t.useCSS,p=t.lazyLoadedList;if(n&&r)return{};var y=l,k,m,f,v={},w={},P=o?l:Th(l,0,a-1);if(i){if(!o&&(l<0||l>=a))return{};l<0?y=l+a:l>=a&&(y=l-a),s&&p.indexOf(y)<0&&(p=p.concat(y)),v={animating:!0,currentSlide:y,lazyLoadedList:p,targetSlide:y},w={animating:!1,targetSlide:y}}else k=y,y<0?(k=y+a,o?a%d!==0&&(k=a-a%d):k=0):!Ih(t)&&y>u?y=k=u:h&&y>=a?(y=o?a:a-1,k=o?0:a-1):y>=a&&(k=y-a,o?a%d!==0&&(k=0):k=a-g),!o&&y+g>=a&&(k=a-g),m=Io(ee(ee({},t),{},{slideIndex:y})),f=Io(ee(ee({},t),{},{slideIndex:k})),o||(m===f&&(y=k),m=f),s&&(p=p.concat(zh(ee(ee({},t),{},{currentSlide:y})))),x?(v={animating:!0,currentSlide:k,trackStyle:Mh(ee(ee({},t),{},{left:m})),lazyLoadedList:p,targetSlide:P},w={animating:!1,currentSlide:k,trackStyle:$o(ee(ee({},t),{},{left:f})),swipeLeft:null,targetSlide:P}):v={currentSlide:k,trackStyle:$o(ee(ee({},t),{},{left:f})),lazyLoadedList:p,targetSlide:P};return{state:v,nextState:w}};T.changeSlide=function(t,n){var r,i,o,l,a,s=t.slidesToScroll,u=t.slidesToShow,h=t.slideCount,d=t.currentSlide,g=t.targetSlide,x=t.lazyLoad,p=t.infinite;if(l=h%s!==0,r=l?0:(h-d)%s,n.message==="previous")o=r===0?s:u-r,a=d-o,x&&!p&&(i=d-o,a=i===-1?h-1:i),p||(a=g-s);else if(n.message==="next")o=r===0?s:r,a=d+o,x&&!p&&(a=(d+s)%h+r),p||(a=g+s);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,p){var y=kx(ee(ee({},t),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-h:a<n.currentSlide&&y==="right"&&(a=a+h)}}else n.message==="index"&&(a=Number(n.index));return a};T.keyHandler=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};T.swipeStart=function(t,n,r){return t.target.tagName==="IMG"&&Bn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};T.swipeMove=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,l=n.swipeToSlide,a=n.verticalSwiping,s=n.rtl,u=n.currentSlide,h=n.edgeFriction,d=n.edgeDragged,g=n.onEdge,x=n.swiped,p=n.swiping,y=n.slideCount,k=n.slidesToScroll,m=n.infinite,f=n.touchObject,v=n.swipeEvent,w=n.listHeight,P=n.listWidth;if(!r){if(i)return Bn(t);o&&l&&a&&Bn(t);var j,_={},z=Io(n);f.curX=t.touches?t.touches[0].pageX:t.clientX,f.curY=t.touches?t.touches[0].pageY:t.clientY,f.swipeLength=Math.round(Math.sqrt(Math.pow(f.curX-f.startX,2)));var O=Math.round(Math.sqrt(Math.pow(f.curY-f.startY,2)));if(!a&&!p&&O>10)return{scrolling:!0};a&&(f.swipeLength=O);var C=(s?-1:1)*(f.curX>f.startX?1:-1);a&&(C=f.curY>f.startY?1:-1);var I=Math.ceil(y/k),$=$h(n.touchObject,a),M=f.swipeLength;return m||(u===0&&($==="right"||$==="down")||u+1>=I&&($==="left"||$==="up")||!Ih(n)&&($==="left"||$==="up"))&&(M=f.swipeLength*h,d===!1&&g&&(g($),_.edgeDragged=!0)),!x&&v&&(v($),_.swiped=!0),o?j=z+M*(w/P)*C:s?j=z-M*C:j=z+M*C,a&&(j=z+M*C),_=ee(ee({},_),{},{touchObject:f,swipeLeft:j,trackStyle:$o(ee(ee({},n),{},{left:j}))}),Math.abs(f.curX-f.startX)<Math.abs(f.curY-f.startY)*.8||f.swipeLength>10&&(_.swiping=!0,Bn(t)),_}};T.swipeEnd=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,l=n.listWidth,a=n.touchThreshold,s=n.verticalSwiping,u=n.listHeight,h=n.swipeToSlide,d=n.scrolling,g=n.onSwipe,x=n.targetSlide,p=n.currentSlide,y=n.infinite;if(!r)return i&&Bn(t),{};var k=s?u/a:l/a,m=$h(o,s),f={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(d||!o.swipeLength)return f;if(o.swipeLength>k){Bn(t),g&&g(m);var v,w,P=y?p:x;switch(m){case"left":case"up":w=P+sd(n),v=h?ad(n,w):w,f.currentDirection=0;break;case"right":case"down":w=P-sd(n),v=h?ad(n,w):w,f.currentDirection=1;break;default:v=P}f.triggerSlideHandler=v}else{var j=Io(n);f.trackStyle=Mh(ee(ee({},n),{},{left:j}))}return f};var xx=T.getNavigableIndexes=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o},ad=T.checkNavigable=function(t,n){var r=xx(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n},sd=T.getSlideCount=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(s){if(t.vertical){if(s.offsetTop+Nh(s)/2>t.swipeLeft*-1)return r=s,!1}else if(s.offsetLeft-n+hs(s)/2>t.swipeLeft*-1)return r=s,!1;return!0}),!r)return 0;var l=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-l)||1;return a}else return t.slidesToScroll},_u=T.checkSpecKeys=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)},$o=T.getTrackCSS=function(t){_u(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=Sx(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=ee(ee({},o),{},{WebkitTransform:l,transform:a,msTransform:s})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o},Mh=T.getTrackAnimateCSS=function(t){_u(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=$o(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n},Io=T.getTrackLeft=function(t){if(t.unslick)return 0;_u(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,l=t.slideCount,a=t.slidesToShow,s=t.slidesToScroll,u=t.slideWidth,h=t.listWidth,d=t.variableWidth,g=t.slideHeight,x=t.fade,p=t.vertical,y=0,k,m,f=0;if(x||t.slideCount===1)return 0;var v=0;if(i?(v=-io(t),l%s!==0&&n+s>l&&(v=-(n>l?a-(n-l):l%s)),o&&(v+=parseInt(a/2))):(l%s!==0&&n+s>l&&(v=a-l%s),o&&(v=parseInt(a/2))),y=v*u,f=v*g,p?k=n*g*-1+f:k=n*u*-1+y,d===!0){var w,P=r&&r.node;if(w=n+io(t),m=P&&P.childNodes[w],k=m?m.offsetLeft*-1:0,o===!0){w=i?n+io(t):n,m=P&&P.children[w],k=0;for(var j=0;j<w;j++)k-=P&&P.children[j]&&P.children[j].offsetWidth;k-=parseInt(t.centerPadding),k+=m&&(h-m.offsetWidth)/2}}return k},io=T.getPreClones=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)},wx=T.getPostClones=function(t){return t.unslick||!t.infinite?0:t.slideCount},Sx=T.getTotalSlides=function(t){return t.slideCount===1?1:io(t)+t.slideCount+wx(t)},kx=T.siblingDirection=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+Px(t)?"left":"right":t.targetSlide<t.currentSlide-jx(t)?"right":"left"},Px=T.slidesOnRight=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),i&&n%2===0&&(l+=1),l}return i?0:n-1},jx=T.slidesOnLeft=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),!i&&n%2===0&&(l+=1),l}return i?n-1:0};T.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var _x=T.validSettings=Object.keys(px.default);function Ex(e){return _x.reduce(function(t,n){return e.hasOwnProperty(n)&&(t[n]=e[n]),t},{})}var yl={};Object.defineProperty(yl,"__esModule",{value:!0});yl.Track=void 0;var It=Dh(E),ea=Dh(vl),ta=T;function Dh(e){return e&&e.__esModule?e:{default:e}}function or(e){"@babel/helpers - typeof";return or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},or(e)}function ms(){return ms=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ms.apply(this,arguments)}function Cx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ox(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Fh(r.key),r)}}function bx(e,t,n){return t&&Ox(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Tx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&gs(e,t)}function gs(e,t){return gs=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},gs(e,t)}function zx(e){var t=Ah();return function(){var r=Mo(e),i;if(t){var o=Mo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Lx(this,i)}}function Lx(e,t){if(t&&(or(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return vs(e)}function vs(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ah(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ah=function(){return!!e})()}function Mo(e){return Mo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Mo(e)}function ud(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ud(Object(n),!0).forEach(function(r){ys(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ud(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ys(e,t,n){return t=Fh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fh(e){var t=Rx(e,"string");return or(t)=="symbol"?t:String(t)}function Rx(e,t){if(or(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(or(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var na=function(t){var n,r,i,o,l;t.rtl?l=t.slideCount-1-t.index:l=t.index,i=l<0||l>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(l-t.currentSlide)%t.slideCount===0,l>t.currentSlide-o-1&&l<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=l&&l<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var s=l===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":s}},Nx=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,n.zIndex=t.currentSlide===t.index?999:998,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},ra=function(t,n){return t.key||n},$x=function(t){var n,r=[],i=[],o=[],l=It.default.Children.count(t.children),a=(0,ta.lazyStartIndex)(t),s=(0,ta.lazyEndIndex)(t);return It.default.Children.forEach(t.children,function(u,h){var d,g={message:"children",index:h,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(h)>=0?d=u:d=It.default.createElement("div",null);var x=Nx(Ne(Ne({},t),{},{index:h})),p=d.props.className||"",y=na(Ne(Ne({},t),{},{index:h}));if(r.push(It.default.cloneElement(d,{key:"original"+ra(d,h),"data-index":h,className:(0,ea.default)(y,p),tabIndex:"-1","aria-hidden":!y["slick-active"],style:Ne(Ne({outline:"none"},d.props.style||{}),x),onClick:function(f){d.props&&d.props.onClick&&d.props.onClick(f),t.focusOnSelect&&t.focusOnSelect(g)}})),t.infinite&&t.fade===!1){var k=l-h;k<=(0,ta.getPreClones)(t)&&(n=-k,n>=a&&(d=u),y=na(Ne(Ne({},t),{},{index:n})),i.push(It.default.cloneElement(d,{key:"precloned"+ra(d,n),"data-index":n,tabIndex:"-1",className:(0,ea.default)(y,p),"aria-hidden":!y["slick-active"],style:Ne(Ne({},d.props.style||{}),x),onClick:function(f){d.props&&d.props.onClick&&d.props.onClick(f),t.focusOnSelect&&t.focusOnSelect(g)}}))),n=l+h,n<s&&(d=u),y=na(Ne(Ne({},t),{},{index:n})),o.push(It.default.cloneElement(d,{key:"postcloned"+ra(d,n),"data-index":n,tabIndex:"-1",className:(0,ea.default)(y,p),"aria-hidden":!y["slick-active"],style:Ne(Ne({},d.props.style||{}),x),onClick:function(f){d.props&&d.props.onClick&&d.props.onClick(f),t.focusOnSelect&&t.focusOnSelect(g)}}))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)};yl.Track=function(e){Tx(n,e);var t=zx(n);function n(){var r;Cx(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),ys(vs(r),"node",null),ys(vs(r),"handleRef",function(a){r.node=a}),r}return bx(n,[{key:"render",value:function(){var i=$x(this.props),o=this.props,l=o.onMouseEnter,a=o.onMouseOver,s=o.onMouseLeave,u={onMouseEnter:l,onMouseOver:a,onMouseLeave:s};return It.default.createElement("div",ms({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(It.default.PureComponent);var xl={};function lr(e){"@babel/helpers - typeof";return lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lr(e)}Object.defineProperty(xl,"__esModule",{value:!0});xl.Dots=void 0;var Ai=Uh(E),Ix=Uh(vl),cd=T;function Uh(e){return e&&e.__esModule?e:{default:e}}function dd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Mx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dd(Object(n),!0).forEach(function(r){Dx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dx(e,t,n){return t=Hh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ax(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fx(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Hh(r.key),r)}}function Ux(e,t,n){return t&&Fx(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Hh(e){var t=Hx(e,"string");return lr(t)=="symbol"?t:String(t)}function Hx(e,t){if(lr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(lr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Wx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&xs(e,t)}function xs(e,t){return xs=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},xs(e,t)}function Bx(e){var t=Wh();return function(){var r=Do(e),i;if(t){var o=Do(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Vx(this,i)}}function Vx(e,t){if(t&&(lr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Qx(e)}function Qx(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Wh(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Wh=function(){return!!e})()}function Do(e){return Do=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Do(e)}var Gx=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n};xl.Dots=function(e){Wx(n,e);var t=Bx(n);function n(){return Ax(this,n),t.apply(this,arguments)}return Ux(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,l=i.onMouseOver,a=i.onMouseLeave,s=i.infinite,u=i.slidesToScroll,h=i.slidesToShow,d=i.slideCount,g=i.currentSlide,x=Gx({slideCount:d,slidesToScroll:u,slidesToShow:h,infinite:s}),p={onMouseEnter:o,onMouseOver:l,onMouseLeave:a},y=[],k=0;k<x;k++){var m=(k+1)*u-1,f=s?m:(0,cd.clamp)(m,0,d-1),v=f-(u-1),w=s?v:(0,cd.clamp)(v,0,d-1),P=(0,Ix.default)({"slick-active":s?g>=w&&g<=f:g===w}),j={message:"dots",index:k,slidesToScroll:u,currentSlide:g},_=this.clickHandler.bind(this,j);y=y.concat(Ai.default.createElement("li",{key:k,className:P},Ai.default.cloneElement(this.props.customPaging(k),{onClick:_})))}return Ai.default.cloneElement(this.props.appendDots(y),Mx({className:this.props.dotsClass},p))}}]),n}(Ai.default.PureComponent);var ar={};function sr(e){"@babel/helpers - typeof";return sr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sr(e)}Object.defineProperty(ar,"__esModule",{value:!0});ar.PrevArrow=ar.NextArrow=void 0;var Vn=Vh(E),Bh=Vh(vl),Xx=T;function Vh(e){return e&&e.__esModule?e:{default:e}}function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ao.apply(this,arguments)}function fd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Fo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fd(Object(n),!0).forEach(function(r){Kx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Kx(e,t,n){return t=Xh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qh(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Yx(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Xh(r.key),r)}}function Gh(e,t,n){return t&&Yx(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Xh(e){var t=qx(e,"string");return sr(t)=="symbol"?t:String(t)}function qx(e,t){if(sr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(sr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Kh(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ws(e,t)}function ws(e,t){return ws=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},ws(e,t)}function Yh(e){var t=qh();return function(){var r=Uo(e),i;if(t){var o=Uo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Zx(this,i)}}function Zx(e,t){if(t&&(sr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Jx(e)}function Jx(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function qh(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(qh=function(){return!!e})()}function Uo(e){return Uo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Uo(e)}ar.PrevArrow=function(e){Kh(n,e);var t=Yh(n);function n(){return Qh(this,n),t.apply(this,arguments)}return Gh(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var l={key:"0","data-role":"none",className:(0,Bh.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.prevArrow?s=Vn.default.cloneElement(this.props.prevArrow,Fo(Fo({},l),a)):s=Vn.default.createElement("button",Ao({key:"0",type:"button"},l)," ","Previous"),s}}]),n}(Vn.default.PureComponent);ar.NextArrow=function(e){Kh(n,e);var t=Yh(n);function n(){return Qh(this,n),t.apply(this,arguments)}return Gh(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,Xx.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var l={key:"1","data-role":"none",className:(0,Bh.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.nextArrow?s=Vn.default.cloneElement(this.props.nextArrow,Fo(Fo({},l),a)):s=Vn.default.createElement("button",Ao({key:"1",type:"button"},l)," ","Next"),s}}]),n}(Vn.default.PureComponent);var Zh=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var l=o[i];n.call(r,l[1],l[0])}},t}()}(),Ss=typeof window<"u"&&typeof document<"u"&&window.document===document,Ho=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),e1=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Ho):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),t1=2;function n1(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function l(){e1(o)}function a(){var s=Date.now();if(n){if(s-i<t1)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=s}return a}var r1=20,i1=["top","right","bottom","left","width","height","size","weight"],o1=typeof MutationObserver<"u",l1=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=n1(this.refresh.bind(this),r1)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Ss||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),o1?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Ss||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=i1.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Jh=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},ur=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Ho},em=wl(0,0,0,0);function Wo(e){return parseFloat(e)||0}function pd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+Wo(o)},0)}function a1(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],l=e["padding-"+o];n[o]=Wo(l)}return n}function s1(e){var t=e.getBBox();return wl(0,0,t.width,t.height)}function u1(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return em;var r=ur(e).getComputedStyle(e),i=a1(r),o=i.left+i.right,l=i.top+i.bottom,a=Wo(r.width),s=Wo(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=pd(r,"left","right")+o),Math.round(s+l)!==n&&(s-=pd(r,"top","bottom")+l)),!d1(e)){var u=Math.round(a+o)-t,h=Math.round(s+l)-n;Math.abs(u)!==1&&(a-=u),Math.abs(h)!==1&&(s-=h)}return wl(i.left,i.top,a,s)}var c1=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof ur(e).SVGGraphicsElement}:function(e){return e instanceof ur(e).SVGElement&&typeof e.getBBox=="function"}}();function d1(e){return e===ur(e).document.documentElement}function f1(e){return Ss?c1(e)?s1(e):u1(e):em}function p1(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return Jh(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function wl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var h1=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=wl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=f1(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),m1=function(){function e(t,n){var r=p1(n);Jh(this,{target:t,contentRect:r})}return e}(),g1=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Zh,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof ur(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new h1(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof ur(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new m1(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),tm=typeof WeakMap<"u"?new WeakMap:new Zh,nm=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=l1.getInstance(),r=new g1(t,n,this);tm.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){nm.prototype[e]=function(){var t;return(t=tm.get(this))[e].apply(t,arguments)}});var v1=function(){return typeof Ho.ResizeObserver<"u"?Ho.ResizeObserver:nm}();const y1=Object.freeze(Object.defineProperty({__proto__:null,default:v1},Symbol.toStringTag,{value:"Module"})),x1=sm(y1);Object.defineProperty(gl,"__esModule",{value:!0});gl.InnerSlider=void 0;var Oe=gi(E),w1=gi(Ch),S1=gi(dx),k1=gi(vl),re=T,P1=yl,j1=xl,hd=ar,_1=gi(x1);function gi(e){return e&&e.__esModule?e:{default:e}}function xn(e){"@babel/helpers - typeof";return xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xn(e)}function Bo(){return Bo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bo.apply(this,arguments)}function E1(e,t){if(e==null)return{};var n=C1(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function C1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function md(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?md(Object(n),!0).forEach(function(r){W(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):md(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function O1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,im(r.key),r)}}function T1(e,t,n){return t&&b1(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function z1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ks(e,t)}function ks(e,t){return ks=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},ks(e,t)}function L1(e){var t=rm();return function(){var r=Vo(e),i;if(t){var o=Vo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return R1(this,i)}}function R1(e,t){if(t&&(xn(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return H(e)}function H(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rm(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(rm=function(){return!!e})()}function Vo(e){return Vo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Vo(e)}function W(e,t,n){return t=im(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function im(e){var t=N1(e,"string");return xn(t)=="symbol"?t:String(t)}function N1(e,t){if(xn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(xn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}gl.InnerSlider=function(e){z1(n,e);var t=L1(n);function n(r){var i;O1(this,n),i=t.call(this,r),W(H(i),"listRefHandler",function(l){return i.list=l}),W(H(i),"trackRefHandler",function(l){return i.track=l}),W(H(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var l=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,re.getHeight)(l)+"px"}}),W(H(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var l=(0,re.getOnDemandLazySlides)(D(D({},i.props),i.state));l.length>0&&(i.setState(function(s){return{lazyLoadedList:s.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}var a=D({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new _1.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(s){s.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,s.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),W(H(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(l){return clearTimeout(l)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),W(H(i),"componentDidUpdate",function(l){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,re.getOnDemandLazySlides)(D(D({},i.props),i.state));a.length>0&&(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var s=D(D({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(l);u&&i.updateState(s,u,function(){i.state.currentSlide>=Oe.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Oe.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),W(H(i),"onWindowResized",function(l){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,S1.default)(function(){return i.resizeWindow(l)},50),i.debouncedResize()}),W(H(i),"resizeWindow",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var s=D(D({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(s,l,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),W(H(i),"updateState",function(l,a,s){var u=(0,re.initializedState)(l);l=D(D(D({},l),u),{},{slideIndex:u.currentSlide});var h=(0,re.getTrackLeft)(l);l=D(D({},l),{},{left:h});var d=(0,re.getTrackCSS)(l);(a||Oe.default.Children.count(i.props.children)!==Oe.default.Children.count(l.children))&&(u.trackStyle=d),i.setState(u,s)}),W(H(i),"ssrInit",function(){if(i.props.variableWidth){var l=0,a=0,s=[],u=(0,re.getPreClones)(D(D(D({},i.props),i.state),{},{slideCount:i.props.children.length})),h=(0,re.getPostClones)(D(D(D({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(_){s.push(_.props.style.width),l+=_.props.style.width});for(var d=0;d<u;d++)a+=s[s.length-1-d],l+=s[s.length-1-d];for(var g=0;g<h;g++)l+=s[g];for(var x=0;x<i.state.currentSlide;x++)a+=s[x];var p={width:l+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(s[i.state.currentSlide],"px");p.left="calc(".concat(p.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:p}}var k=Oe.default.Children.count(i.props.children),m=D(D(D({},i.props),i.state),{},{slideCount:k}),f=(0,re.getPreClones)(m)+(0,re.getPostClones)(m)+k,v=100/i.props.slidesToShow*f,w=100/f,P=-w*((0,re.getPreClones)(m)+i.state.currentSlide)*v/100;i.props.centerMode&&(P+=(100-w*v/100)/2);var j={width:v+"%",left:P+"%"};return{slideWidth:w+"%",trackStyle:j}}),W(H(i),"checkImagesLoad",function(){var l=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=l.length,s=0;Array.prototype.forEach.call(l,function(u){var h=function(){return++s&&s>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var d=u.onclick;u.onclick=function(g){d(g),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=h,u.onerror=function(){h(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),W(H(i),"progressiveLazyLoad",function(){for(var l=[],a=D(D({},i.props),i.state),s=i.state.currentSlide;s<i.state.slideCount+(0,re.getPostClones)(a);s++)if(i.state.lazyLoadedList.indexOf(s)<0){l.push(s);break}for(var u=i.state.currentSlide-1;u>=-(0,re.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){l.push(u);break}l.length>0?(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),W(H(i),"slideHandler",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=i.props,u=s.asNavFor,h=s.beforeChange,d=s.onLazyLoad,g=s.speed,x=s.afterChange,p=i.state.currentSlide,y=(0,re.slideHandler)(D(D(D({index:l},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),k=y.state,m=y.nextState;if(k){h&&h(p,k.currentSlide);var f=k.lazyLoadedList.filter(function(v){return i.state.lazyLoadedList.indexOf(v)<0});d&&f.length>0&&d(f),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),x&&x(p),delete i.animationEndCallback),i.setState(k,function(){u&&i.asNavForIndex!==l&&(i.asNavForIndex=l,u.innerSlider.slideHandler(l)),m&&(i.animationEndCallback=setTimeout(function(){var v=m.animating,w=E1(m,["animating"]);i.setState(w,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:v})},10)),x&&x(k.currentSlide),delete i.animationEndCallback})},g))})}}),W(H(i),"changeSlide",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=D(D({},i.props),i.state),u=(0,re.changeSlide)(s,l);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var h=i.list.querySelectorAll(".slick-current");h[0]&&h[0].focus()}}),W(H(i),"clickHandler",function(l){i.clickable===!1&&(l.stopPropagation(),l.preventDefault()),i.clickable=!0}),W(H(i),"keyHandler",function(l){var a=(0,re.keyHandler)(l,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),W(H(i),"selectHandler",function(l){i.changeSlide(l)}),W(H(i),"disableBodyScroll",function(){var l=function(s){s=s||window.event,s.preventDefault&&s.preventDefault(),s.returnValue=!1};window.ontouchmove=l}),W(H(i),"enableBodyScroll",function(){window.ontouchmove=null}),W(H(i),"swipeStart",function(l){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,re.swipeStart)(l,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),W(H(i),"swipeMove",function(l){var a=(0,re.swipeMove)(l,D(D(D({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),W(H(i),"swipeEnd",function(l){var a=(0,re.swipeEnd)(l,D(D(D({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var s=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),s!==void 0&&(i.slideHandler(s),i.props.verticalSwiping&&i.enableBodyScroll())}}),W(H(i),"touchEnd",function(l){i.swipeEnd(l),i.clickable=!0}),W(H(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),W(H(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),W(H(i),"slickGoTo",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l=Number(l),isNaN(l))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:l,currentSlide:i.state.currentSlide},a)},0))}),W(H(i),"play",function(){var l;if(i.props.rtl)l=i.state.currentSlide-i.props.slidesToScroll;else if((0,re.canGoNext)(D(D({},i.props),i.state)))l=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(l)}),W(H(i),"autoPlay",function(l){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(l==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(l==="leave"){if(a==="paused"||a==="focused")return}else if(l==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),W(H(i),"pause",function(l){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;l==="paused"?i.setState({autoplaying:"paused"}):l==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),W(H(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),W(H(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),W(H(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),W(H(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),W(H(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),W(H(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),W(H(i),"render",function(){var l=(0,k1.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=D(D({},i.props),i.state),s=(0,re.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;s=D(D({},s),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var h;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var d=(0,re.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),g=i.props.pauseOnDotsHover;d=D(D({},d),{},{clickHandler:i.changeSlide,onMouseEnter:g?i.onDotsLeave:null,onMouseOver:g?i.onDotsOver:null,onMouseLeave:g?i.onDotsLeave:null}),h=Oe.default.createElement(j1.Dots,d)}var x,p,y=(0,re.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(x=Oe.default.createElement(hd.PrevArrow,y),p=Oe.default.createElement(hd.NextArrow,y));var k=null;i.props.vertical&&(k={height:i.state.listHeight});var m=null;i.props.vertical===!1?i.props.centerMode===!0&&(m={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(m={padding:i.props.centerPadding+" 0px"});var f=D(D({},k),m),v=i.props.touchMove,w={className:"slick-list",style:f,onClick:i.clickHandler,onMouseDown:v?i.swipeStart:null,onMouseMove:i.state.dragging&&v?i.swipeMove:null,onMouseUp:v?i.swipeEnd:null,onMouseLeave:i.state.dragging&&v?i.swipeEnd:null,onTouchStart:v?i.swipeStart:null,onTouchMove:i.state.dragging&&v?i.swipeMove:null,onTouchEnd:v?i.touchEnd:null,onTouchCancel:i.state.dragging&&v?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},P={className:l,dir:"ltr",style:i.props.style};return i.props.unslick&&(w={className:"slick-list"},P={className:l}),Oe.default.createElement("div",P,i.props.unslick?"":x,Oe.default.createElement("div",Bo({ref:i.listRefHandler},w),Oe.default.createElement(P1.Track,Bo({ref:i.trackRefHandler},s),i.props.children)),i.props.unslick?"":p,i.props.unslick?"":h)}),i.list=null,i.track=null,i.state=D(D({},w1.default),{},{currentSlide:i.props.initialSlide,targetSlide:i.props.initialSlide?i.props.initialSlide:0,slideCount:Oe.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=D(D({},i.state),o),i}return T1(n,[{key:"didPropsChange",value:function(i){for(var o=!1,l=0,a=Object.keys(this.props);l<a.length;l++){var s=a[l];if(!i.hasOwnProperty(s)){o=!0;break}if(!(xn(i[s])==="object"||typeof i[s]=="function"||isNaN(i[s]))&&i[s]!==this.props[s]){o=!0;break}}return o||Oe.default.Children.count(this.props.children)!==Oe.default.Children.count(i.children)}}]),n}(Oe.default.Component);var $1=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},I1=$1,M1=I1,D1=function(e){var t=/[height|width]$/;return t.test(e)},gd=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=M1(r),D1(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},A1=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=gd(n),r<e.length-1&&(t+=", ")}),t):gd(e)},F1=A1,ia,vd;function U1(){if(vd)return ia;vd=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},ia=e,ia}var oa,yd;function om(){if(yd)return oa;yd=1;function e(r,i){var o=0,l=r.length,a;for(o;o<l&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return oa={isFunction:n,isArray:t,each:e},oa}var la,xd;function H1(){if(xd)return la;xd=1;var e=U1(),t=om().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(l){o.mql=l.currentTarget||l,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,l){if(o.equals(r))return o.destroy(),!i.splice(l,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},la=n,la}var aa,wd;function W1(){if(wd)return aa;wd=1;var e=H1(),t=om(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(l,a,s){var u=this.queries,h=s&&this.browserIsIncapable;return u[l]||(u[l]=new e(l,h)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(d){r(d)&&(d={match:d}),u[l].addHandler(d)}),this},unregister:function(l,a){var s=this.queries[l];return s&&(a?s.removeHandler(a):(s.clear(),delete this.queries[l])),this}},aa=o,aa}var sa,Sd;function B1(){if(Sd)return sa;Sd=1;var e=W1();return sa=new e,sa}(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=l(E),n=gl,r=l(F1),i=l(ju),o=T;function l(O){return O&&O.__esModule?O:{default:O}}function a(O){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},a(O)}function s(){return s=Object.assign?Object.assign.bind():function(O){for(var C=1;C<arguments.length;C++){var I=arguments[C];for(var $ in I)Object.prototype.hasOwnProperty.call(I,$)&&(O[$]=I[$])}return O},s.apply(this,arguments)}function u(O,C){var I=Object.keys(O);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(O);C&&($=$.filter(function(M){return Object.getOwnPropertyDescriptor(O,M).enumerable})),I.push.apply(I,$)}return I}function h(O){for(var C=1;C<arguments.length;C++){var I=arguments[C]!=null?arguments[C]:{};C%2?u(Object(I),!0).forEach(function($){P(O,$,I[$])}):Object.getOwnPropertyDescriptors?Object.defineProperties(O,Object.getOwnPropertyDescriptors(I)):u(Object(I)).forEach(function($){Object.defineProperty(O,$,Object.getOwnPropertyDescriptor(I,$))})}return O}function d(O,C){if(!(O instanceof C))throw new TypeError("Cannot call a class as a function")}function g(O,C){for(var I=0;I<C.length;I++){var $=C[I];$.enumerable=$.enumerable||!1,$.configurable=!0,"value"in $&&($.writable=!0),Object.defineProperty(O,j($.key),$)}}function x(O,C,I){return C&&g(O.prototype,C),Object.defineProperty(O,"prototype",{writable:!1}),O}function p(O,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");O.prototype=Object.create(C&&C.prototype,{constructor:{value:O,writable:!0,configurable:!0}}),Object.defineProperty(O,"prototype",{writable:!1}),C&&y(O,C)}function y(O,C){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function($,M){return $.__proto__=M,$},y(O,C)}function k(O){var C=v();return function(){var $=w(O),M;if(C){var A=w(this).constructor;M=Reflect.construct($,arguments,A)}else M=$.apply(this,arguments);return m(this,M)}}function m(O,C){if(C&&(a(C)==="object"||typeof C=="function"))return C;if(C!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return f(O)}function f(O){if(O===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O}function v(){try{var O=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(v=function(){return!!O})()}function w(O){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(I){return I.__proto__||Object.getPrototypeOf(I)},w(O)}function P(O,C,I){return C=j(C),C in O?Object.defineProperty(O,C,{value:I,enumerable:!0,configurable:!0,writable:!0}):O[C]=I,O}function j(O){var C=_(O,"string");return a(C)=="symbol"?C:String(C)}function _(O,C){if(a(O)!="object"||!O)return O;var I=O[Symbol.toPrimitive];if(I!==void 0){var $=I.call(O,C);if(a($)!="object")return $;throw new TypeError("@@toPrimitive must return a primitive value.")}return(C==="string"?String:Number)(O)}var z=(0,o.canUseDOM)()&&B1();e.default=function(O){p(I,O);var C=k(I);function I($){var M;return d(this,I),M=C.call(this,$),P(f(M),"innerSliderRefHandler",function(A){return M.innerSlider=A}),P(f(M),"slickPrev",function(){return M.innerSlider.slickPrev()}),P(f(M),"slickNext",function(){return M.innerSlider.slickNext()}),P(f(M),"slickGoTo",function(A){var rt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return M.innerSlider.slickGoTo(A,rt)}),P(f(M),"slickPause",function(){return M.innerSlider.pause("paused")}),P(f(M),"slickPlay",function(){return M.innerSlider.autoPlay("play")}),M.state={breakpoint:null},M._responsiveMediaHandlers=[],M}return x(I,[{key:"media",value:function(M,A){z.register(M,A),this._responsiveMediaHandlers.push({query:M,handler:A})}},{key:"componentDidMount",value:function(){var M=this;if(this.props.responsive){var A=this.props.responsive.map(function(ae){return ae.breakpoint});A.sort(function(ae,xe){return ae-xe}),A.forEach(function(ae,xe){var L;xe===0?L=(0,r.default)({minWidth:0,maxWidth:ae}):L=(0,r.default)({minWidth:A[xe-1]+1,maxWidth:ae}),(0,o.canUseDOM)()&&M.media(L,function(){M.setState({breakpoint:ae})})});var rt=(0,r.default)({minWidth:A.slice(-1)[0]});(0,o.canUseDOM)()&&this.media(rt,function(){M.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(M){z.unregister(M.query,M.handler)})}},{key:"render",value:function(){var M=this,A,rt;this.state.breakpoint?(rt=this.props.responsive.filter(function(Re){return Re.breakpoint===M.state.breakpoint}),A=rt[0].settings==="unslick"?"unslick":h(h(h({},i.default),this.props),rt[0].settings)):A=h(h({},i.default),this.props),A.centerMode&&(A.slidesToScroll>1,A.slidesToScroll=1),A.fade&&(A.slidesToShow>1,A.slidesToScroll>1,A.slidesToShow=1,A.slidesToScroll=1);var ae=t.default.Children.toArray(this.props.children);ae=ae.filter(function(Re){return typeof Re=="string"?!!Re.trim():!!Re}),A.variableWidth&&(A.rows>1||A.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),A.variableWidth=!1);for(var xe=[],L=null,N=0;N<ae.length;N+=A.rows*A.slidesPerRow){for(var F=[],V=N;V<N+A.rows*A.slidesPerRow;V+=A.slidesPerRow){for(var G=[],Ce=V;Ce<V+A.slidesPerRow&&(A.variableWidth&&ae[Ce].props.style&&(L=ae[Ce].props.style.width),!(Ce>=ae.length));Ce+=1)G.push(t.default.cloneElement(ae[Ce],{key:100*N+10*V+Ce,tabIndex:-1,style:{width:"".concat(100/A.slidesPerRow,"%"),display:"inline-block"}}));F.push(t.default.createElement("div",{key:10*N+V},G))}A.variableWidth?xe.push(t.default.createElement("div",{key:N,style:{width:L}},F)):xe.push(t.default.createElement("div",{key:N},F))}if(A==="unslick"){var Ue="regular slider "+(this.props.className||"");return t.default.createElement("div",{className:Ue},ae)}else xe.length<=A.slidesToShow&&!A.infinite&&(A.unslick=!0);return t.default.createElement(n.InnerSlider,s({style:this.props.style,ref:this.innerSliderRefHandler},(0,o.filterSettings)(A)),xe)}}]),I}(t.default.Component)})(Eh);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Eh);function n(r){return r&&r.__esModule?r:{default:r}}e.default=t.default})(_h);const lm=jd(_h),ua=S.img`
padding-top: 10px;
width: 1000px;
height: 500px;

`;function V1(){const e={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1};return c.jsx("div",{className:"slider-container",children:c.jsxs(lm,{...e,children:[c.jsx("div",{children:c.jsx(ua,{src:"/PhoneWeb/img/07.jpg"})}),c.jsx("div",{children:c.jsx(ua,{src:"/PhoneWeb/img/08.jpg"})}),c.jsx("div",{children:c.jsx(ua,{src:"/PhoneWeb/img/08.png"})})]})})}const ca=S.img`
padding-top:10px;
width: 1000px;
height: auto;

`;function Q1(){const e={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1};return c.jsx("div",{className:"slider-container",children:c.jsxs(lm,{...e,children:[c.jsx("div",{children:c.jsx(ca,{src:"/PhoneWeb/img/05.PNG"})}),c.jsx("div",{children:c.jsx(ca,{src:"/PhoneWeb/img/06.png"})}),c.jsx("div",{children:c.jsx(ca,{src:"/PhoneWeb/img/07.PNG"})})]})})}const G1=S.div`
  width: 100%;
  max-width: 1200px; /* 限制最大寬度 */
  margin: auto;
  padding: 20px;
`,X1=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`,K1=S.h2`
  padding: 10px;
  font-size: 32px; 
  text-align: center;
  border: 1px solid #000;
  border-radius: 5px;
  width: 100%;
  max-width: 600px; 

  @media (max-width: 768px) {
    font-size: 24px;
    width: 90%;
  }
`,kd=S.p`
  margin-top: 10px;
  padding: 10px;
  font-size: 32px; 
  text-align: center;
  background-color: palevioletred;
  color: white;
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 5px;
  }
`,Pd=S.div`
  padding: 20px;
  background-color: #d3d3d3;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;function Y1(){return c.jsxs(G1,{children:[c.jsx(X1,{children:c.jsx(K1,{children:"歡迎來手機購物 & 手機租借網站"})}),c.jsx(kd,{children:"最新消息"}),c.jsx(Pd,{children:c.jsx(Q1,{})}),c.jsx(kd,{children:"熱賣商品"}),c.jsx(Pd,{children:c.jsx(V1,{})})]})}function q1(){const e="http://localhost:3000",[t,n]=E.useState([]),r=async()=>{try{const y=await(await fetch(`${e}/products`)).json();n(y)}catch(p){console.error("錯誤：",p)}};E.useEffect(()=>{r()},[]);const i=S.div`
    min-height: 100vh;
    background: linear-gradient(135deg, #f3f4f6, #d1d5db); /* ✅ 漸層背景 */
    padding: 20px;
  `,o=S.h1`
    font-size: 50px;
    margin: 30px 0;
    text-align: center;
    color: #333;
  `,l=S.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  `,a=S.div`
    width: 250px;
    padding: 20px;
    background: white; /* ✅ 白色背景 */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */

    @media (max-width: 768px) {
      width: 90%;
    }
  `,s=S(ne)`
    display: block;
    color: #333;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
    text-decoration: none;
    transition: color 0.3s, transform 0.2s;

    &:hover {
      color: #ff4500; /* ✅ 滑鼠移上去變橘色 */
      transform: translateX(5px); /* ✅ 滑鼠移上去往右微移動 */
    }
  `,u=S.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  `,h=S(ne)`
    width: 260px;
    background: white;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    text-decoration: none;
    color: inherit;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: scale(1.05); /* ✅ 滑鼠移上去放大 */
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
  `,d=S.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
  `,g=S.p`
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    color: #333;
  `,x=S.p`
    font-size: 16px;
    color: #e60000; /* ✅ 紅色價格 */
    margin-top: 5px;
  `;return c.jsxs(i,{children:[c.jsx(o,{children:" 手機商場"}),c.jsxs(l,{children:[c.jsx(a,{children:c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(s,{to:"/shopping/iphone",children:" Apple iPhone"})}),c.jsx("li",{children:c.jsx(s,{to:"/shopping/ipad",children:" Apple iPad"})}),c.jsx("li",{children:c.jsx(s,{to:"/shopping/samsung",children:" 三星系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/shopping/Xiaomi",children:" 小米系列"})})]})}),c.jsx(u,{children:t.map(p=>c.jsxs(h,{to:`/shopping/shopping-list/${p.id}`,children:[c.jsx(d,{src:p.image,alt:p.producsname}),c.jsx(g,{children:p.producsname}),c.jsxs(x,{children:["$",p.price]})]},p.id))})]})]})}function Z1(){const e="http://localhost:3000",t=async()=>{try{const y=await(await fetch(`${e}/lease`,{method:"get"})).json();r(y)}catch(p){console.log(p)}},[n,r]=E.useState([]);E.useEffect(()=>{t()},[]);const i=S.div`
   min-height: 100vh;
   background: linear-gradient(135deg, #f3f4f6, #d1d5db); /* ✅ 漸層背景 */
   padding: 20px;
 `,o=S.h1`
   font-size: 50px;
   margin: 30px 0;
   text-align: center;
   color: #333;
 `,l=S.div`
   display: flex;
   justify-content: center;
   gap: 20px;
   max-width: 1200px;
   margin: 0 auto;
   padding: 20px;

   @media (max-width: 768px) {
     flex-direction: column;
     align-items: center;
   }
 `,a=S.div`
   width: 250px;
   padding: 20px;
   background: white; /* ✅ 白色背景 */
   border-radius: 10px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */

   @media (max-width: 768px) {
     width: 90%;
   }
 `,s=S(ne)`
   display: block;
   color: #333;
   font-size: 18px;
   font-weight: bold;
   padding: 10px 0;
   text-decoration: none;
   transition: color 0.3s, transform 0.2s;

   &:hover {
     color: #ff4500; /* ✅ 滑鼠移上去變橘色 */
     transform: translateX(5px); /* ✅ 滑鼠移上去往右微移動 */
   }
 `,u=S.div`
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
   justify-content: center;
 `,h=S(ne)`
   width: 260px;
   background: white;
   border-radius: 10px;
   padding: 15px;
   text-align: center;
   text-decoration: none;
   color: inherit;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */
   transition: transform 0.3s, box-shadow 0.3s;

   &:hover {
     transform: scale(1.05); /* ✅ 滑鼠移上去放大 */
     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
   }
 `,d=S.img`
   width: 100%;
   height: auto;
   border-radius: 10px;
 `,g=S.p`
   font-size: 18px;
   font-weight: bold;
   margin-top: 10px;
   color: #333;
 `,x=S.p`
   font-size: 16px;
   color: #e60000; /* ✅ 紅色價格 */
   margin-top: 5px;
 `;return c.jsx(c.Fragment,{children:c.jsxs(i,{children:[c.jsx(o,{children:"手機租借"}),c.jsxs(l,{children:[c.jsx(a,{children:c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(s,{to:"/phonelease/iphone",children:"apple iphone系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/phonelease/ipad",children:"apple ipad系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/phonelease/samsung",children:"三星系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/phonelease/Xiaomi",children:"小米系列"})})]})}),c.jsx(u,{children:n.map(p=>c.jsxs(h,{to:`/phonelease/phonelease-list/${p.id}`,children:[c.jsx(d,{src:p.image,alt:p.producsname}),c.jsx(g,{children:p.producsname}),c.jsxs(x,{children:["$",p.price]})]},p.id))})]})]})})}const J1=S.h2`
  padding-top: 20px;
  text-align: center;
  font-size: 45px;
  font-weight: bold;
  margin: 0 20px;
  color: #333;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`,ew=S.form`
  width: 500px;
  padding: 20px;
  margin: 30px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 90%;
  }
`,_r=S.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Er=S.label`
  font-size: 18px;
  font-weight: bold;
  color: #444;
`,Fi=S.input`
  width: 100%;
  height: 40px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;

  &:focus {
    border-color: #4a90e2;
    outline: none;
  }
`,tw=S.textarea`
  width: 100%;
  height: 150px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  resize: none;

  &:focus {
    border-color: #4a90e2;
    outline: none;
  }
`,nw=S.button`
  width: 100%;
  height: 45px;
  background-color: #4a90e2;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357abd;
  }

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;function rw(){const e="http://localhost:3000",[t,n]=E.useState(""),[r,i]=E.useState(""),[o,l]=E.useState(""),[a,s]=E.useState(""),[u,h]=E.useState(""),[d,g]=E.useState(!1),x=async p=>{p.preventDefault(),g(!0);const y={name:t,tel:r,email:o,title:a,message:u};try{(await fetch(`${e}/Contactus`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)})).ok?(alert("✅ 表單提交成功！"),n(""),i(""),l(""),s(""),h("")):alert("❌ 提交失敗，請稍後再試！")}catch(k){console.error("提交錯誤:",k),alert("⚠️ 伺服器錯誤，請稍後再試！")}g(!1)};return c.jsxs(c.Fragment,{children:[c.jsx(J1,{children:"歡迎有任何問題於下方填寫表單"}),c.jsxs(ew,{onSubmit:x,children:[c.jsxs(_r,{children:[c.jsx(Er,{htmlFor:"name",children:"姓名:"}),c.jsx(Fi,{type:"text",id:"name",value:t,onChange:p=>n(p.target.value),required:!0})]}),c.jsxs(_r,{children:[c.jsx(Er,{htmlFor:"tel",children:"電話:"}),c.jsx(Fi,{type:"text",id:"tel",maxLength:"10",value:r,onChange:p=>i(p.target.value),required:!0})]}),c.jsxs(_r,{children:[c.jsx(Er,{htmlFor:"email",children:"Email:"}),c.jsx(Fi,{type:"email",id:"email",value:o,onChange:p=>l(p.target.value),required:!0})]}),c.jsxs(_r,{children:[c.jsx(Er,{htmlFor:"title",children:"標題:"}),c.jsx(Fi,{type:"text",id:"title",value:a,onChange:p=>s(p.target.value),required:!0})]}),c.jsxs(_r,{children:[c.jsx(Er,{htmlFor:"message",children:"內容:"}),c.jsx(tw,{id:"message",value:u,onChange:p=>h(p.target.value),required:!0})]}),c.jsx(nw,{type:"submit",disabled:d,children:d?"送出中...":"送出"})]})]})}function iw(){return c.jsxs(c.Fragment,{children:[c.jsx(Ph,{}),c.jsx(C0,{}),c.jsx(jh,{})]})}const ow=S.div`
  margin-left: 200px;
  margin-right: 200px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`,lw=S.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`,aw=S.div`
  width: 350px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`,sw=S.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,uw=S.div`
  width: 300px;
  margin-left: 20px;
  padding-top: 50px;
  text-align: center;

  @media (max-width: 768px) {
    width: 80%;
    padding-top: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding-top: 10px;
  }
`,cw=S.p`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,dw=S.p`
  font-size: 20px;
  font-weight: bold;
  color: #e74c3c;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`,fw=S.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
`,pw=S.button`
  font-size: 14px;
  font-weight: bold;
  height: 50px;
  width: 150px;
  background-color: #3498db;
  color: white;
  border: 1px solid #3498db;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,hw=S.button`
  font-size: 14px;
  font-weight: bold;
  height: 50px;
  width: 150px;
  background-color: #2ecc71;
  color: white;
  border: 1px solid #2ecc71;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #27ae60;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,mw=S.div`
  margin-top: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,gw=S.p`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,vw=S.p`
  font-size: 18px;
  text-align: justify;
  color: #555;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,yw=S.button`
  font-size: 14px;
  font-weight: bold;
  height: 50px;
  width: 250px;
  background-color: gray;
  color: white;
  border: 1px solid gray;
  border-radius: 5px;
  margin-top: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f39c12;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,xw=S(ne)`
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  color: black;

  &:hover {
    color: #e74c3c;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,ww="http://localhost:3000",Sw=async()=>{try{const t=await(await fetch(`${ww}/products`,{method:"get"})).json();return console.log("API 回傳的 products:",t),t}catch(e){return console.error("Error fetching products:",e),[]}};function kw(){const[e,t]=E.useState([]),{productId:n}=Xp(),[r,i]=E.useState(!0);if(E.useEffect(()=>{(async()=>{console.log("開始取得產品資料..."),i(!0);const a=await Sw();t(a),i(!1)})()},[]),r)return c.jsx("p",{children:"載入中..."});console.log("所有產品:",e);const o=e.find(l=>l.id===n);return console.log("找到的產品:",o),o?c.jsxs(ow,{children:[c.jsxs(lw,{children:[c.jsx(aw,{children:c.jsx(sw,{src:o.image})}),c.jsxs(uw,{children:[c.jsx(cw,{children:o.producsname}),c.jsxs(dw,{children:["NT$",o.price]}),c.jsxs(fw,{children:[c.jsx(pw,{children:"直接購買"}),c.jsx(hw,{children:"加入購物車"})]})]})]}),c.jsxs(mw,{children:[c.jsx(gw,{children:"產品介紹"}),c.jsx(vw,{children:o.introduction})]}),c.jsx(yw,{children:c.jsx(xw,{to:"/shopping",children:"回商品頁"})})]}):c.jsx("p",{children:"產品未找到"})}function Pw(){const e="http://localhost:3000",t=async()=>{try{const y=await(await fetch(`${e}/products?_start=0&_end=11`,{method:"get"})).json();r(y)}catch(p){console.log(p)}},[n,r]=E.useState([]);E.useEffect(()=>{t()},[]);const i=S.div`
    min-height: 100vh;
    background: linear-gradient(135deg, #f3f4f6, #d1d5db); /* ✅ 漸層背景 */
    padding: 20px;
  `,o=S.h1`
    font-size: 50px;
    margin: 30px 0;
    text-align: center;
    color: #333;
  `,l=S.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  `,a=S.div`
    width: 250px;
    padding: 20px;
    background: white; /* ✅ 白色背景 */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */

    @media (max-width: 768px) {
      width: 90%;
    }
  `,s=S(ne)`
    display: block;
    color: #333;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
    text-decoration: none;
    transition: color 0.3s, transform 0.2s;

    &:hover {
      color: #ff4500; /* ✅ 滑鼠移上去變橘色 */
      transform: translateX(5px); /* ✅ 滑鼠移上去往右微移動 */
    }
  `,u=S.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  `,h=S(ne)`
    width: 260px;
    background: white;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    text-decoration: none;
    color: inherit;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: scale(1.05); /* ✅ 滑鼠移上去放大 */
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
  `,d=S.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
  `,g=S.p`
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    color: #333;
  `,x=S.p`
    font-size: 16px;
    color: #e60000; /* ✅ 紅色價格 */
    margin-top: 5px;
  `;return c.jsx(c.Fragment,{children:c.jsxs(i,{children:[c.jsx(o,{children:"手機商場"}),c.jsxs(l,{className:"shop",children:[c.jsx(a,{className:"shopleft",children:c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(s,{to:"/shopping/iphone",children:"apple iphone系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/shopping/ipad",children:"apple ipad系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/shopping/samsung",children:"三星系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/shopping/Xiaomi",children:"小米系列"})})]})}),c.jsx(u,{children:n.map(p=>c.jsxs(h,{to:`/shopping/shopping-list/${p.id}`,children:[c.jsx(d,{src:p.image,alt:p.producsname}),c.jsx(g,{children:p.producsname}),c.jsxs(x,{children:["$",p.price]})]},p.id))})]})]})})}function jw(){const e="http://localhost:3000",[t,n]=E.useState([]),r=async()=>{try{const y=await(await fetch(`${e}/products?_start=12&_end=16`,{method:"get"})).json();n(y)}catch(p){console.log(p)}};E.useEffect(()=>{r()},[]);const i=S.div`
    min-height: 100vh;
    background: linear-gradient(135deg, #f3f4f6, #d1d5db); /* ✅ 漸層背景 */
    padding: 20px;
  `,o=S.h1`
    font-size: 50px;
    margin: 30px 0;
    text-align: center;
    color: #333;
  `,l=S.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  `,a=S.div`
    width: 250px;
    padding: 20px;
    background: white; /* ✅ 白色背景 */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */

    @media (max-width: 768px) {
      width: 90%;
    }
  `,s=S(ne)`
    display: block;
    color: #333;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
    text-decoration: none;
    transition: color 0.3s, transform 0.2s;

    &:hover {
      color: #ff4500; /* ✅ 滑鼠移上去變橘色 */
      transform: translateX(5px); /* ✅ 滑鼠移上去往右微移動 */
    }
  `,u=S.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  `,h=S(ne)`
    width: 260px;
    background: white;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    text-decoration: none;
    color: inherit;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: scale(1.05); /* ✅ 滑鼠移上去放大 */
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
  `,d=S.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
  `,g=S.p`
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    color: #333;
  `,x=S.p`
    font-size: 16px;
    color: #e60000; /* ✅ 紅色價格 */
    margin-top: 5px;
  `;return c.jsx(c.Fragment,{children:c.jsxs(i,{children:[c.jsx(o,{children:"手機商場"}),c.jsxs(l,{className:"shop",children:[c.jsx(a,{className:"shopleft",children:c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(s,{to:"/shopping/iphone",children:"apple iphone系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/shopping/ipad",children:"apple ipad系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/shopping/samsung",children:"三星系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/shopping/Xiaomi",children:"小米系列"})})]})}),c.jsx(u,{children:t.map(p=>c.jsxs(h,{to:`/shopping/shopping-list/${p.id}`,children:[c.jsx(d,{src:p.image,alt:p.producsname}),c.jsx(g,{children:p.producsname}),c.jsxs(x,{children:["$",p.price]})]},p.id))})]})]})})}function _w(){const e="http://localhost:3000",t=async()=>{try{const y=await(await fetch(`${e}/products?_start=17&_end=22`,{method:"get"})).json();r(y)}catch(p){console.log(p)}},[n,r]=E.useState([]);E.useEffect(()=>{t()},[]);const i=S.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f3f4f6, #d1d5db); /* ✅ 漸層背景 */
  padding: 20px;
`,o=S.h1`
  font-size: 50px;
  margin: 30px 0;
  text-align: center;
  color: #333;
`,l=S.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,a=S.div`
  width: 250px;
  padding: 20px;
  background: white; /* ✅ 白色背景 */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */

  @media (max-width: 768px) {
    width: 90%;
  }
`,s=S(ne)`
  display: block;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
  text-decoration: none;
  transition: color 0.3s, transform 0.2s;

  &:hover {
    color: #ff4500; /* ✅ 滑鼠移上去變橘色 */
    transform: translateX(5px); /* ✅ 滑鼠移上去往右微移動 */
  }
`,u=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`,h=S(ne)`
  width: 260px;
  background: white;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05); /* ✅ 滑鼠移上去放大 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`,d=S.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`,g=S.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  color: #333;
`,x=S.p`
  font-size: 16px;
  color: #e60000; /* ✅ 紅色價格 */
  margin-top: 5px;
`;return c.jsx(c.Fragment,{children:c.jsxs(i,{children:[c.jsx(o,{children:"手機商場"}),c.jsxs(l,{className:"shop",children:[c.jsx(a,{className:"shopleft",children:c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(s,{to:"/shopping/iphone",children:"apple iphone系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/shopping/ipad",children:"apple ipad系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/shopping/samsung",children:"三星系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/shopping/Xiaomi",children:"小米系列"})})]})}),c.jsx(u,{children:n.map(p=>c.jsxs(h,{to:`/shopping/shopping-list/${p.id}`,children:[c.jsx(d,{src:p.image,alt:p.producsname}),c.jsx(g,{children:p.producsname}),c.jsxs(x,{children:["$",p.price]})]},p.id))})]})]})})}function Ew(){const e="http://localhost:3000",t=async()=>{try{const y=await(await fetch(`${e}/products?_start=23&_end=30`,{method:"get"})).json();r(y)}catch(p){console.log(p)}},[n,r]=E.useState([]);E.useEffect(()=>{t()},[]);const i=S.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f3f4f6, #d1d5db); /* ✅ 漸層背景 */
  padding: 20px;
`,o=S.h1`
  font-size: 50px;
  margin: 30px 0;
  text-align: center;
  color: #333;
`,l=S.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,a=S.div`
  width: 250px;
  padding: 20px;
  background: white; /* ✅ 白色背景 */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */

  @media (max-width: 768px) {
    width: 90%;
  }
`,s=S(ne)`
  display: block;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
  text-decoration: none;
  transition: color 0.3s, transform 0.2s;

  &:hover {
    color: #ff4500; /* ✅ 滑鼠移上去變橘色 */
    transform: translateX(5px); /* ✅ 滑鼠移上去往右微移動 */
  }
`,u=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`,h=S(ne)`
  width: 260px;
  background: white;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05); /* ✅ 滑鼠移上去放大 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`,d=S.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`,g=S.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  color: #333;
`,x=S.p`
  font-size: 16px;
  color: #e60000; /* ✅ 紅色價格 */
  margin-top: 5px;
`;return c.jsx(c.Fragment,{children:c.jsxs(i,{children:[c.jsx(o,{children:"手機商場"}),c.jsxs(l,{className:"shop",children:[c.jsx(a,{className:"shopleft",children:c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(s,{to:"/shopping/iphone",children:"apple iphone系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/shopping/ipad",children:"apple ipad系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/shopping/samsung",children:"三星系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/shopping/Xiaomi",children:"小米系列"})})]})}),c.jsx(u,{children:n.map(p=>c.jsxs(h,{to:`/shopping/shopping-list/${p.id}`,children:[c.jsx(d,{src:p.image,alt:p.producsname}),c.jsx(g,{children:p.producsname}),c.jsxs(x,{children:["$",p.price]})]},p.id))})]})]})})}function Cw(){const e="http://localhost:3000",t=async()=>{try{const y=await(await fetch(`${e}/lease?_start=0&_end=11`,{method:"get"})).json();r(y)}catch(p){console.log(p)}},[n,r]=E.useState([]);E.useEffect(()=>{t()},[]);const i=S.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f3f4f6, #d1d5db); /* ✅ 漸層背景 */
  padding: 20px;
`,o=S.h1`
  font-size: 50px;
  margin: 30px 0;
  text-align: center;
  color: #333;
`,l=S.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,a=S.div`
  width: 250px;
  padding: 20px;
  background: white; /* ✅ 白色背景 */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */

  @media (max-width: 768px) {
    width: 90%;
  }
`,s=S(ne)`
  display: block;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
  text-decoration: none;
  transition: color 0.3s, transform 0.2s;

  &:hover {
    color: #ff4500; /* ✅ 滑鼠移上去變橘色 */
    transform: translateX(5px); /* ✅ 滑鼠移上去往右微移動 */
  }
`,u=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`,h=S(ne)`
  width: 260px;
  background: white;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05); /* ✅ 滑鼠移上去放大 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`,d=S.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`,g=S.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  color: #333;
`,x=S.p`
  font-size: 16px;
  color: #e60000; /* ✅ 紅色價格 */
  margin-top: 5px;
`;return c.jsx(c.Fragment,{children:c.jsxs(i,{children:[c.jsx(o,{children:"手機租借"}),c.jsxs(l,{children:[c.jsx(a,{children:c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(s,{to:"/phonelease/iphone",children:"apple iphone系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/phonelease/ipad",children:"apple ipad系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/phonelease/samsung",children:"三星系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/phonelease/Xiaomi",children:"小米系列"})})]})}),c.jsx(u,{children:n.map(p=>c.jsxs(h,{to:`/phonelease/phonelease-list/${p.id}`,children:[c.jsx(d,{src:p.image,alt:p.producsname}),c.jsx(g,{children:p.producsname}),c.jsxs(x,{children:["$",p.price]})]},p.id))})]})]})})}function Ow(){const e="http://localhost:3000",t=async()=>{try{const y=await(await fetch(`${e}/lease?_start=12&_end=16`,{method:"get"})).json();r(y)}catch(p){console.log(p)}},[n,r]=E.useState([]);E.useEffect(()=>{t()},[]);const i=S.div`
   min-height: 100vh;
   background: linear-gradient(135deg, #f3f4f6, #d1d5db); /* ✅ 漸層背景 */
   padding: 20px;
 `,o=S.h1`
   font-size: 50px;
   margin: 30px 0;
   text-align: center;
   color: #333;
 `,l=S.div`
   display: flex;
   justify-content: center;
   gap: 20px;
   max-width: 1200px;
   margin: 0 auto;
   padding: 20px;

   @media (max-width: 768px) {
     flex-direction: column;
     align-items: center;
   }
 `,a=S.div`
   width: 250px;
   padding: 20px;
   background: white; /* ✅ 白色背景 */
   border-radius: 10px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */

   @media (max-width: 768px) {
     width: 90%;
   }
 `,s=S(ne)`
   display: block;
   color: #333;
   font-size: 18px;
   font-weight: bold;
   padding: 10px 0;
   text-decoration: none;
   transition: color 0.3s, transform 0.2s;

   &:hover {
     color: #ff4500; /* ✅ 滑鼠移上去變橘色 */
     transform: translateX(5px); /* ✅ 滑鼠移上去往右微移動 */
   }
 `,u=S.div`
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
   justify-content: center;
 `,h=S(ne)`
   width: 260px;
   background: white;
   border-radius: 10px;
   padding: 15px;
   text-align: center;
   text-decoration: none;
   color: inherit;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */
   transition: transform 0.3s, box-shadow 0.3s;

   &:hover {
     transform: scale(1.05); /* ✅ 滑鼠移上去放大 */
     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
   }
 `,d=S.img`
   width: 100%;
   height: auto;
   border-radius: 10px;
 `,g=S.p`
   font-size: 18px;
   font-weight: bold;
   margin-top: 10px;
   color: #333;
 `,x=S.p`
   font-size: 16px;
   color: #e60000; /* ✅ 紅色價格 */
   margin-top: 5px;
 `;return c.jsx(c.Fragment,{children:c.jsxs(i,{children:[c.jsx(o,{children:"手機租借"}),c.jsxs(l,{children:[c.jsx(a,{children:c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(s,{to:"/phonelease/iphone",children:"apple iphone系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/phonelease/ipad",children:"apple ipad系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/phonelease/samsung",children:"三星系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/phonelease/Xiaomi",children:"小米系列"})})]})}),c.jsx(u,{children:n.map(p=>c.jsxs(h,{to:`/phonelease/phonelease-list/${p.id}`,children:[c.jsx(d,{src:p.image,alt:p.producsname}),c.jsx(g,{children:p.producsname}),c.jsxs(x,{children:["$",p.price]})]},p.id))})]})]})})}function bw(){const e="http://localhost:3000",t=async()=>{try{const y=await(await fetch(`${e}/lease?_start=17&_end=22`,{method:"get"})).json();r(y)}catch(p){console.log(p)}},[n,r]=E.useState([]);E.useEffect(()=>{t()},[]);const i=S.div`
   min-height: 100vh;
   background: linear-gradient(135deg, #f3f4f6, #d1d5db); /* ✅ 漸層背景 */
   padding: 20px;
 `,o=S.h1`
   font-size: 50px;
   margin: 30px 0;
   text-align: center;
   color: #333;
 `,l=S.div`
   display: flex;
   justify-content: center;
   gap: 20px;
   max-width: 1200px;
   margin: 0 auto;
   padding: 20px;

   @media (max-width: 768px) {
     flex-direction: column;
     align-items: center;
   }
 `,a=S.div`
   width: 250px;
   padding: 20px;
   background: white; /* ✅ 白色背景 */
   border-radius: 10px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */

   @media (max-width: 768px) {
     width: 90%;
   }
 `,s=S(ne)`
   display: block;
   color: #333;
   font-size: 18px;
   font-weight: bold;
   padding: 10px 0;
   text-decoration: none;
   transition: color 0.3s, transform 0.2s;

   &:hover {
     color: #ff4500; /* ✅ 滑鼠移上去變橘色 */
     transform: translateX(5px); /* ✅ 滑鼠移上去往右微移動 */
   }
 `,u=S.div`
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
   justify-content: center;
 `,h=S(ne)`
   width: 260px;
   background: white;
   border-radius: 10px;
   padding: 15px;
   text-align: center;
   text-decoration: none;
   color: inherit;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */
   transition: transform 0.3s, box-shadow 0.3s;

   &:hover {
     transform: scale(1.05); /* ✅ 滑鼠移上去放大 */
     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
   }
 `,d=S.img`
   width: 100%;
   height: auto;
   border-radius: 10px;
 `,g=S.p`
   font-size: 18px;
   font-weight: bold;
   margin-top: 10px;
   color: #333;
 `,x=S.p`
   font-size: 16px;
   color: #e60000; /* ✅ 紅色價格 */
   margin-top: 5px;
 `;return c.jsx(c.Fragment,{children:c.jsxs(i,{children:[c.jsx(o,{children:"手機租借"}),c.jsxs(l,{children:[c.jsx(a,{children:c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(s,{to:"/phonelease/iphone",children:"apple iphone系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/phonelease/ipad",children:"apple ipad系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/phonelease/samsung",children:"三星系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/phonelease/Xiaomi",children:"小米系列"})})]})}),c.jsx(u,{children:n.map(p=>c.jsxs(h,{to:`/phonelease/phonelease-list/${p.id}`,children:[c.jsx(d,{src:p.image,alt:p.producsname}),c.jsx(g,{children:p.producsname}),c.jsxs(x,{children:["$",p.price]})]},p.id))})]})]})})}function Tw(){const e="http://localhost:3000",t=async()=>{try{const y=await(await fetch(`${e}/lease?_start=23&_end=30`,{method:"get"})).json();r(y)}catch(p){console.log(p)}},[n,r]=E.useState([]);E.useEffect(()=>{t()},[]);const i=S.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f3f4f6, #d1d5db); /* ✅ 漸層背景 */
  padding: 20px;
`,o=S.h1`
  font-size: 50px;
  margin: 30px 0;
  text-align: center;
  color: #333;
`,l=S.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,a=S.div`
  width: 250px;
  padding: 20px;
  background: white; /* ✅ 白色背景 */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */

  @media (max-width: 768px) {
    width: 90%;
  }
`,s=S(ne)`
  display: block;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
  text-decoration: none;
  transition: color 0.3s, transform 0.2s;

  &:hover {
    color: #ff4500; /* ✅ 滑鼠移上去變橘色 */
    transform: translateX(5px); /* ✅ 滑鼠移上去往右微移動 */
  }
`,u=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`,h=S(ne)`
  width: 260px;
  background: white;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05); /* ✅ 滑鼠移上去放大 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`,d=S.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`,g=S.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  color: #333;
`,x=S.p`
  font-size: 16px;
  color: #e60000; /* ✅ 紅色價格 */
  margin-top: 5px;
`;return c.jsx(c.Fragment,{children:c.jsxs(i,{children:[c.jsx(o,{children:"手機租借"}),c.jsxs(l,{children:[c.jsx(a,{children:c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(s,{to:"/phonelease/iphone",children:"apple iphone系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/phonelease/ipad",children:"apple ipad系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/phonelease/samsung",children:"三星系列"})}),c.jsx("li",{children:c.jsx(s,{to:"/phonelease/Xiaomi",children:"小米系列"})})]})}),c.jsx(u,{children:n.map(p=>c.jsxs(h,{to:`/phonelease/phonelease-list/${p.id}`,children:[c.jsx(d,{src:p.image,alt:p.producsname}),c.jsx(g,{children:p.producsname}),c.jsxs(x,{children:["$",p.price]})]},p.id))})]})]})})}const zw=S.div`
  margin-left: 200px;
  margin-right: 200px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`,Lw=S.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`,Rw=S.div`
  width: 350px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`,Nw=S.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,$w=S.div`
  width: 300px;
  margin-left: 20px;
  padding-top: 50px;
  text-align: center;

  @media (max-width: 768px) {
    width: 80%;
    padding-top: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding-top: 10px;
  }
`,Iw=S.p`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,Mw=S.p`
  font-size: 20px;
  font-weight: bold;
  color: #e74c3c;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`,Dw=S.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
`,Aw=S.button`
  font-size: 14px;
  font-weight: bold;
  height: 50px;
  width: 150px;
  background-color: #3498db;
  color: white;
  border: 1px solid #3498db;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,Fw=S.button`
  font-size: 14px;
  font-weight: bold;
  height: 50px;
  width: 150px;
  background-color: #2ecc71;
  color: white;
  border: 1px solid #2ecc71;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #27ae60;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,Uw=S.div`
  margin-top: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,Hw=S.p`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,Ww=S.p`
  font-size: 18px;
  text-align: justify;
  color: #555;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,Bw=S.button`
  font-size: 14px;
  font-weight: bold;
  height: 50px;
  width: 250px;
  background-color: gray;
  color: white;
  border: 1px solid gray;
  border-radius: 5px;
  margin-top: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f39c12;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,Vw=S(ne)`
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  color: black;

  &:hover {
    color: #e74c3c;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,Qw="http://localhost:3000",Gw=async()=>{try{const t=await(await fetch(`${Qw}/lease`,{method:"get"})).json();return console.log("API 回傳的 Lease :",t),t}catch(e){return console.error("Error fetching Lease :",e),[]}};function Xw(){const[e,t]=E.useState([]),{leaseId:n}=Xp(),[r,i]=E.useState(!0);if(E.useEffect(()=>{(async()=>{console.log("開始取得產品資料..."),i(!0);const a=await Gw();t(a),i(!1)})()},[]),r)return c.jsx("p",{children:"載入中..."});console.log("所有產品:",e);const o=e.find(l=>l.id===n);return console.log("找到的產品:",o),o?c.jsx(c.Fragment,{children:c.jsxs(zw,{children:[c.jsxs(Lw,{children:[c.jsx(Rw,{children:c.jsx(Nw,{src:o.image})}),c.jsxs($w,{children:[c.jsx(Iw,{children:o.producsname}),c.jsxs(Mw,{children:["NT$",o.price]}),c.jsxs(Dw,{children:[c.jsx(Aw,{children:"直接購買"}),c.jsx(Fw,{children:"加入購物車"})]})]})]}),c.jsxs(Uw,{children:[c.jsx(Hw,{children:"產品介紹"}),c.jsx(Ww,{children:o.introduction})]}),c.jsx(Bw,{children:c.jsx(Vw,{to:"/phonelease",children:"回手機租借"})})]})}):c.jsx("p",{children:"產品未找到"})}const Kw=({setUser:e})=>{const[t,n]=E.useState(""),[r,i]=E.useState(""),o=Gp(),l=async x=>{x.preventDefault(),!(!t||!r)&&(e({name:t,email:r}),o("/"))},a=S.form`
    width: 100%;
    max-width: 400px;
    padding: 20px;
    margin: 30px auto;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `,s=S.h5`
    font-size: 30px;
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  `,u=S.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  `,h=S.label`
    font-size: 16px;
    font-weight: 500;
    color: #555;
    margin-bottom: 8px;
  `,d=S.input`
    width: 100%;
    height: 40px;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  `,g=S.button`
    width: 100%;
    height: 45px;
    background-color: #007bff;
    color: white;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }

    &:disabled {
      background-color: #aaa;
      cursor: not-allowed;
    }
  `;return c.jsx("section",{className:"section",children:c.jsxs(a,{onSubmit:l,children:[c.jsx(s,{children:"Login"}),c.jsxs(u,{children:[c.jsx(h,{htmlFor:"name",children:"Name:"}),c.jsx(d,{type:"text",id:"name",value:t,onChange:x=>n(x.target.value),required:!0})]}),c.jsxs(u,{children:[c.jsx(h,{htmlFor:"email",children:"Email:"}),c.jsx(d,{type:"email",id:"email",value:r,onChange:x=>i(x.target.value),required:!0})]}),c.jsx(g,{type:"submit",children:"Login"})]})})},Yw=({user:e})=>c.jsx("section",{className:"section",children:c.jsxs("h4",{children:["Hello, ",e==null?void 0:e.name]})});function qw(){const[e,t]=E.useState(null);return c.jsx(c.Fragment,{children:c.jsxs(I0,{basename:"/PhoneWeb",children:[c.jsx(Ph,{}),c.jsxs(b0,{children:[c.jsx(me,{path:"/",element:c.jsx(iw,{})}),c.jsx(me,{index:!0,element:c.jsx(Y1,{})}),c.jsx(me,{path:"shopping",element:c.jsx(q1,{})}),c.jsx(me,{path:"shopping/iphone",element:c.jsx(Pw,{})}),c.jsx(me,{path:"shopping/ipad",element:c.jsx(jw,{})}),c.jsx(me,{path:"shopping/samsung",element:c.jsx(_w,{})}),c.jsx(me,{path:"shopping/Xiaomi",element:c.jsx(Ew,{})}),c.jsx(me,{path:"/shopping/shopping-list/:productId",element:c.jsx(kw,{})}),c.jsx(me,{path:"phonelease",element:c.jsx(Z1,{})}),c.jsx(me,{path:"phonelease/iphone",element:c.jsx(Cw,{})}),c.jsx(me,{path:"phonelease/ipad",element:c.jsx(Ow,{})}),c.jsx(me,{path:"phonelease/samsung",element:c.jsx(bw,{})}),c.jsx(me,{path:"phonelease/Xiaomi",element:c.jsx(Tw,{})}),c.jsx(me,{path:"/phonelease/phonelease-list/:leaseId",element:c.jsx(Xw,{})}),c.jsx(me,{path:"contact-us/",element:c.jsx(rw,{})}),c.jsx(me,{path:"login",element:c.jsx(Kw,{setUser:t})}),c.jsx(me,{path:"dashboard",element:c.jsx(Yw,{user:e})})]}),c.jsx(jh,{})]})})}Dp(document.getElementById("root")).render(c.jsx(E.StrictMode,{children:c.jsx(qw,{})}));
