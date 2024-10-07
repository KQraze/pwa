(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function da(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const le={},Un=[],pt=()=>{},Np=()=>!1,tr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ha=t=>t.startsWith("onUpdate:"),Ae=Object.assign,pa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Op=Object.prototype.hasOwnProperty,X=(t,e)=>Op.call(t,e),U=Array.isArray,$n=t=>nr(t)==="[object Map]",ku=t=>nr(t)==="[object Set]",j=t=>typeof t=="function",ye=t=>typeof t=="string",Zt=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",Mu=t=>(ue(t)||j(t))&&j(t.then)&&j(t.catch),Lu=Object.prototype.toString,nr=t=>Lu.call(t),xp=t=>nr(t).slice(8,-1),Fu=t=>nr(t)==="[object Object]",_a=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ys=da(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Pp=/-(\w)/g,zt=sr(t=>t.replace(Pp,(e,n)=>n?n.toUpperCase():"")),Dp=/\B([A-Z])/g,On=sr(t=>t.replace(Dp,"-$1").toLowerCase()),Bu=sr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Br=sr(t=>t?`on${Bu(t)}`:""),Gt=(t,e)=>!Object.is(t,e),Ur=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Uu=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},kp=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ul;const $u=()=>Ul||(Ul=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ga(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ye(s)?Bp(s):ga(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ye(t)||ue(t))return t}const Mp=/;(?![^(]*\))/g,Lp=/:([^]+)/,Fp=/\/\*[^]*?\*\//g;function Bp(t){const e={};return t.replace(Fp,"").split(Mp).forEach(n=>{if(n){const s=n.split(Lp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ma(t){let e="";if(ye(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=ma(t[n]);s&&(e+=s+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Up="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$p=da(Up);function Hu(t){return!!t||t===""}const ju=t=>!!(t&&t.__v_isRef===!0),ya=t=>ye(t)?t:t==null?"":U(t)||ue(t)&&(t.toString===Lu||!j(t.toString))?ju(t)?ya(t.value):JSON.stringify(t,Wu,2):String(t),Wu=(t,e)=>ju(e)?Wu(t,e.value):$n(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[$r(s,r)+" =>"]=i,n),{})}:ku(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>$r(n))}:Zt(e)?$r(e):ue(e)&&!U(e)&&!Fu(e)?String(e):e,$r=(t,e="")=>{var n;return Zt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Me;class qu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Me,!e&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Me;try{return Me=this,e()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Vu(t){return new qu(t)}function Ku(){return Me}function Hp(t,e=!1){Me&&Me.cleanups.push(t)}let re;const Hr=new WeakSet;class zu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Me&&Me.active&&Me.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hr.has(this)&&(Hr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$l(this),Ju(this);const e=re,n=it;re=this,it=!0;try{return this.fn()}finally{Qu(this),re=e,it=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ea(e);this.deps=this.depsTail=void 0,$l(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bo(this)&&this.run()}get dirty(){return bo(this)}}let Gu=0,Fn;function Yu(t){t.flags|=8,t.next=Fn,Fn=t}function va(){Gu++}function ba(){if(--Gu>0)return;let t;for(;Fn;){let e=Fn,n;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=Fn,Fn=void 0;e;){if(n=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Ju(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Qu(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Ea(s),jp(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function bo(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Xu(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Os))return;t.globalVersion=Os;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!bo(t)){t.flags&=-3;return}const n=re,s=it;re=t,it=!0;try{Ju(t);const i=t.fn(t._value);(e.version===0||Gt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{re=n,it=s,Qu(t),t.flags&=-3}}function Ea(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s),!n.subs&&n.computed){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Ea(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function jp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let it=!0;const Zu=[];function en(){Zu.push(it),it=!1}function tn(){const t=Zu.pop();it=t===void 0?!0:t}function $l(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=re;re=void 0;try{e()}finally{re=n}}}let Os=0;class Wp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wa{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!re||!it||re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==re)n=this.activeLink=new Wp(re,this),re.deps?(n.prevDep=re.depsTail,re.depsTail.nextDep=n,re.depsTail=n):re.deps=re.depsTail=n,ef(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=re.depsTail,n.nextDep=void 0,re.depsTail.nextDep=n,re.depsTail=n,re.deps===n&&(re.deps=s)}return n}trigger(e){this.version++,Os++,this.notify(e)}notify(e){va();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ba()}}}function ef(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)ef(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Oi=new WeakMap,mn=Symbol(""),Eo=Symbol(""),xs=Symbol("");function De(t,e,n){if(it&&re){let s=Oi.get(t);s||Oi.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new wa),i.target=t,i.map=s,i.key=n),i.track()}}function Tt(t,e,n,s,i,r){const o=Oi.get(t);if(!o){Os++;return}const a=l=>{l&&l.trigger()};if(va(),e==="clear")o.forEach(a);else{const l=U(t),c=l&&_a(n);if(l&&n==="length"){const u=Number(s);o.forEach((f,d)=>{(d==="length"||d===xs||!Zt(d)&&d>=u)&&a(f)})}else switch(n!==void 0&&a(o.get(n)),c&&a(o.get(xs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(mn)),$n(t)&&a(o.get(Eo)));break;case"delete":l||(a(o.get(mn)),$n(t)&&a(o.get(Eo)));break;case"set":$n(t)&&a(o.get(mn));break}}ba()}function qp(t,e){const n=Oi.get(t);return n&&n.get(e)}function Dn(t){const e=$(t);return e===t?e:(De(e,"iterate",xs),Ze(t)?e:e.map(Oe))}function ir(t){return De(t=$(t),"iterate",xs),t}const Vp={__proto__:null,[Symbol.iterator](){return jr(this,Symbol.iterator,Oe)},concat(...t){return Dn(this).concat(...t.map(e=>U(e)?Dn(e):e))},entries(){return jr(this,"entries",t=>(t[1]=Oe(t[1]),t))},every(t,e){return Et(this,"every",t,e,void 0,arguments)},filter(t,e){return Et(this,"filter",t,e,n=>n.map(Oe),arguments)},find(t,e){return Et(this,"find",t,e,Oe,arguments)},findIndex(t,e){return Et(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Et(this,"findLast",t,e,Oe,arguments)},findLastIndex(t,e){return Et(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Et(this,"forEach",t,e,void 0,arguments)},includes(...t){return Wr(this,"includes",t)},indexOf(...t){return Wr(this,"indexOf",t)},join(t){return Dn(this).join(t)},lastIndexOf(...t){return Wr(this,"lastIndexOf",t)},map(t,e){return Et(this,"map",t,e,void 0,arguments)},pop(){return us(this,"pop")},push(...t){return us(this,"push",t)},reduce(t,...e){return Hl(this,"reduce",t,e)},reduceRight(t,...e){return Hl(this,"reduceRight",t,e)},shift(){return us(this,"shift")},some(t,e){return Et(this,"some",t,e,void 0,arguments)},splice(...t){return us(this,"splice",t)},toReversed(){return Dn(this).toReversed()},toSorted(t){return Dn(this).toSorted(t)},toSpliced(...t){return Dn(this).toSpliced(...t)},unshift(...t){return us(this,"unshift",t)},values(){return jr(this,"values",Oe)}};function jr(t,e,n){const s=ir(t),i=s[e]();return s!==t&&!Ze(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Kp=Array.prototype;function Et(t,e,n,s,i,r){const o=ir(t),a=o!==t&&!Ze(t),l=o[e];if(l!==Kp[e]){const f=l.apply(t,r);return a?Oe(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Oe(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function Hl(t,e,n,s){const i=ir(t);let r=n;return i!==t&&(Ze(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Oe(a),l,t)}),i[e](r,...s)}function Wr(t,e,n){const s=$(t);De(s,"iterate",xs);const i=s[e](...n);return(i===-1||i===!1)&&Ia(n[0])?(n[0]=$(n[0]),s[e](...n)):i}function us(t,e,n=[]){en(),va();const s=$(t)[e].apply(t,n);return ba(),tn(),s}const zp=da("__proto__,__v_isRef,__isVue"),tf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zt));function Gp(t){Zt(t)||(t=String(t));const e=$(this);return De(e,"has",t),e.hasOwnProperty(t)}class nf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?a_:af:r?of:rf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=U(e);if(!i){let l;if(o&&(l=Vp[n]))return l;if(n==="hasOwnProperty")return Gp}const a=Reflect.get(e,n,he(e)?e:s);return(Zt(n)?tf.has(n):zp(n))||(i||De(e,"get",n),r)?a:he(a)?o&&_a(n)?a:a.value:ue(a)?i?lf(a):vt(a):a}}class sf extends nf{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=bn(r);if(!Ze(s)&&!bn(s)&&(r=$(r),s=$(s)),!U(e)&&he(r)&&!he(s))return l?!1:(r.value=s,!0)}const o=U(e)&&_a(n)?Number(n)<e.length:X(e,n),a=Reflect.set(e,n,s,he(e)?e:i);return e===$(i)&&(o?Gt(s,r)&&Tt(e,"set",n,s):Tt(e,"add",n,s)),a}deleteProperty(e,n){const s=X(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Tt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Zt(n)||!tf.has(n))&&De(e,"has",n),s}ownKeys(e){return De(e,"iterate",U(e)?"length":mn),Reflect.ownKeys(e)}}class Yp extends nf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Jp=new sf,Qp=new Yp,Xp=new sf(!0);const Ca=t=>t,rr=t=>Reflect.getPrototypeOf(t);function fi(t,e,n=!1,s=!1){t=t.__v_raw;const i=$(t),r=$(e);n||(Gt(e,r)&&De(i,"get",e),De(i,"get",r));const{has:o}=rr(i),a=s?Ca:n?Ra:Oe;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function di(t,e=!1){const n=this.__v_raw,s=$(n),i=$(t);return e||(Gt(t,i)&&De(s,"has",t),De(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function hi(t,e=!1){return t=t.__v_raw,!e&&De($(t),"iterate",mn),Reflect.get(t,"size",t)}function jl(t,e=!1){!e&&!Ze(t)&&!bn(t)&&(t=$(t));const n=$(this);return rr(n).has.call(n,t)||(n.add(t),Tt(n,"add",t,t)),this}function Wl(t,e,n=!1){!n&&!Ze(e)&&!bn(e)&&(e=$(e));const s=$(this),{has:i,get:r}=rr(s);let o=i.call(s,t);o||(t=$(t),o=i.call(s,t));const a=r.call(s,t);return s.set(t,e),o?Gt(e,a)&&Tt(s,"set",t,e):Tt(s,"add",t,e),this}function ql(t){const e=$(this),{has:n,get:s}=rr(e);let i=n.call(e,t);i||(t=$(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Tt(e,"delete",t,void 0),r}function Vl(){const t=$(this),e=t.size!==0,n=t.clear();return e&&Tt(t,"clear",void 0,void 0),n}function pi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=$(o),l=e?Ca:t?Ra:Oe;return!t&&De(a,"iterate",mn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function _i(t,e,n){return function(...s){const i=this.__v_raw,r=$(i),o=$n(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Ca:e?Ra:Oe;return!e&&De(r,"iterate",l?Eo:mn),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Lt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Zp(){const t={get(r){return fi(this,r)},get size(){return hi(this)},has:di,add:jl,set:Wl,delete:ql,clear:Vl,forEach:pi(!1,!1)},e={get(r){return fi(this,r,!1,!0)},get size(){return hi(this)},has:di,add(r){return jl.call(this,r,!0)},set(r,o){return Wl.call(this,r,o,!0)},delete:ql,clear:Vl,forEach:pi(!1,!0)},n={get(r){return fi(this,r,!0)},get size(){return hi(this,!0)},has(r){return di.call(this,r,!0)},add:Lt("add"),set:Lt("set"),delete:Lt("delete"),clear:Lt("clear"),forEach:pi(!0,!1)},s={get(r){return fi(this,r,!0,!0)},get size(){return hi(this,!0)},has(r){return di.call(this,r,!0)},add:Lt("add"),set:Lt("set"),delete:Lt("delete"),clear:Lt("clear"),forEach:pi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=_i(r,!1,!1),n[r]=_i(r,!0,!1),e[r]=_i(r,!1,!0),s[r]=_i(r,!0,!0)}),[t,n,e,s]}const[e_,t_,n_,s_]=Zp();function Sa(t,e){const n=e?t?s_:n_:t?t_:e_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(X(n,i)&&i in s?n:s,i,r)}const i_={get:Sa(!1,!1)},r_={get:Sa(!1,!0)},o_={get:Sa(!0,!1)};const rf=new WeakMap,of=new WeakMap,af=new WeakMap,a_=new WeakMap;function l_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function c_(t){return t.__v_skip||!Object.isExtensible(t)?0:l_(xp(t))}function vt(t){return bn(t)?t:Ta(t,!1,Jp,i_,rf)}function u_(t){return Ta(t,!1,Xp,r_,of)}function lf(t){return Ta(t,!0,Qp,o_,af)}function Ta(t,e,n,s,i){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=c_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function It(t){return bn(t)?It(t.__v_raw):!!(t&&t.__v_isReactive)}function bn(t){return!!(t&&t.__v_isReadonly)}function Ze(t){return!!(t&&t.__v_isShallow)}function Ia(t){return t?!!t.__v_raw:!1}function $(t){const e=t&&t.__v_raw;return e?$(e):t}function Aa(t){return!X(t,"__v_skip")&&Object.isExtensible(t)&&Uu(t,"__v_skip",!0),t}const Oe=t=>ue(t)?vt(t):t,Ra=t=>ue(t)?lf(t):t;function he(t){return t?t.__v_isRef===!0:!1}function ht(t){return f_(t,!1)}function f_(t,e){return he(t)?t:new d_(t,e)}class d_{constructor(e,n){this.dep=new wa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:$(e),this._value=n?e:Oe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Ze(e)||bn(e);e=s?e:$(e),Gt(e,n)&&(this._rawValue=e,this._value=s?e:Oe(e),this.dep.trigger())}}function Ut(t){return he(t)?t.value:t}const h_={get:(t,e,n)=>e==="__v_raw"?t:Ut(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return he(i)&&!he(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function cf(t){return It(t)?t:new Proxy(t,h_)}function p_(t){const e=U(t)?new Array(t.length):{};for(const n in t)e[n]=uf(t,n);return e}class __{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return qp($(this._object),this._key)}}class g_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function m_(t,e,n){return he(t)?t:j(t)?new g_(t):ue(t)&&arguments.length>1?uf(t,e,n):ht(t)}function uf(t,e,n){const s=t[e];return he(s)?s:new __(t,e,n)}class y_{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new wa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Os-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&re!==this)return Yu(this),!0}get value(){const e=this.dep.track();return Xu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function v_(t,e,n=!1){let s,i;return j(t)?s=t:(s=t.get,i=t.set),new y_(s,i,n)}const gi={},xi=new WeakMap;let un;function b_(t,e=!1,n=un){if(n){let s=xi.get(n);s||xi.set(n,s=[]),s.push(t)}}function E_(t,e,n=le){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=O=>i?O:Ze(O)||i===!1||i===0?jt(O,1):jt(O);let u,f,d,g,_=!1,v=!1;if(he(t)?(f=()=>t.value,_=Ze(t)):It(t)?(f=()=>c(t),_=!0):U(t)?(v=!0,_=t.some(O=>It(O)||Ze(O)),f=()=>t.map(O=>{if(he(O))return O.value;if(It(O))return c(O);if(j(O))return l?l(O,2):O()})):j(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){en();try{d()}finally{tn()}}const O=un;un=u;try{return l?l(t,3,[g]):t(g)}finally{un=O}}:f=pt,e&&i){const O=f,M=i===!0?1/0:i;f=()=>jt(O(),M)}const E=Ku(),x=()=>{u.stop(),E&&pa(E.effects,u)};if(r&&e){const O=e;e=(...M)=>{O(...M),x()}}let P=v?new Array(t.length).fill(gi):gi;const D=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const M=u.run();if(i||_||(v?M.some((fe,de)=>Gt(fe,P[de])):Gt(M,P))){d&&d();const fe=un;un=u;try{const de=[M,P===gi?void 0:v&&P[0]===gi?[]:P,g];l?l(e,3,de):e(...de),P=M}finally{un=fe}}}else u.run()};return a&&a(D),u=new zu(f),u.scheduler=o?()=>o(D,!1):D,g=O=>b_(O,!1,u),d=u.onStop=()=>{const O=xi.get(u);if(O){if(l)l(O,4);else for(const M of O)M();xi.delete(u)}},e?s?D(!0):P=u.run():o?o(D.bind(null,!0),!0):u.run(),x.pause=u.pause.bind(u),x.resume=u.resume.bind(u),x.stop=x,x}function jt(t,e=1/0,n){if(e<=0||!ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,he(t))jt(t.value,e,n);else if(U(t))for(let s=0;s<t.length;s++)jt(t[s],e,n);else if(ku(t)||$n(t))t.forEach(s=>{jt(s,e,n)});else if(Fu(t)){for(const s in t)jt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&jt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qs(t,e,n,s){try{return s?t(...s):t()}catch(i){or(i,e,n)}}function gt(t,e,n,s){if(j(t)){const i=Qs(t,e,n,s);return i&&Mu(i)&&i.catch(r=>{or(r,e,n)}),i}if(U(t)){const i=[];for(let r=0;r<t.length;r++)i.push(gt(t[r],e,n,s));return i}}function or(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||le;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){en(),Qs(r,null,10,[t,l,c]),tn();return}}w_(t,n,i,s,o)}function w_(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}let Ps=!1,wo=!1;const Le=[];let ft=0;const Hn=[];let $t=null,Ln=0;const ff=Promise.resolve();let Na=null;function Xs(t){const e=Na||ff;return t?e.then(this?t.bind(this):t):e}function C_(t){let e=Ps?ft+1:0,n=Le.length;for(;e<n;){const s=e+n>>>1,i=Le[s],r=Ds(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Oa(t){if(!(t.flags&1)){const e=Ds(t),n=Le[Le.length-1];!n||!(t.flags&2)&&e>=Ds(n)?Le.push(t):Le.splice(C_(e),0,t),t.flags|=1,df()}}function df(){!Ps&&!wo&&(wo=!0,Na=ff.then(pf))}function S_(t){U(t)?Hn.push(...t):$t&&t.id===-1?$t.splice(Ln+1,0,t):t.flags&1||(Hn.push(t),t.flags|=1),df()}function Kl(t,e,n=Ps?ft+1:0){for(;n<Le.length;n++){const s=Le[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Le.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function hf(t){if(Hn.length){const e=[...new Set(Hn)].sort((n,s)=>Ds(n)-Ds(s));if(Hn.length=0,$t){$t.push(...e);return}for($t=e,Ln=0;Ln<$t.length;Ln++){const n=$t[Ln];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}$t=null,Ln=0}}const Ds=t=>t.id==null?t.flags&2?-1:1/0:t.id;function pf(t){wo=!1,Ps=!0;try{for(ft=0;ft<Le.length;ft++){const e=Le[ft];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ft<Le.length;ft++){const e=Le[ft];e&&(e.flags&=-2)}ft=0,Le.length=0,hf(),Ps=!1,Na=null,(Le.length||Hn.length)&&pf()}}let nt=null,_f=null;function Pi(t){const e=nt;return nt=t,_f=t&&t.type.__scopeId||null,e}function T_(t,e=nt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&ec(-1);const r=Pi(e);let o;try{o=t(...i)}finally{Pi(r),s._d&&ec(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ln(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(en(),gt(l,n,8,[t.el,a,t,e]),tn())}}const I_=Symbol("_vte"),A_=t=>t.__isTeleport;function xa(t,e){t.shapeFlag&6&&t.component?(t.transition=e,xa(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function nn(t,e){return j(t)?Ae({name:t.name},e,{setup:t}):t}function gf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Co(t,e,n,s,i=!1){if(U(t)){t.forEach((_,v)=>Co(_,e&&(U(e)?e[v]:e),n,s,i));return}if(vs(s)&&!i)return;const r=s.shapeFlag&4?Fa(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===le?a.refs={}:a.refs,f=a.setupState,d=$(f),g=f===le?()=>!1:_=>X(d,_);if(c!=null&&c!==l&&(ye(c)?(u[c]=null,g(c)&&(f[c]=null)):he(c)&&(c.value=null)),j(l))Qs(l,a,12,[o,u]);else{const _=ye(l),v=he(l);if(_||v){const E=()=>{if(t.f){const x=_?g(l)?f[l]:u[l]:l.value;i?U(x)&&pa(x,r):U(x)?x.includes(r)||x.push(r):_?(u[l]=[r],g(l)&&(f[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else _?(u[l]=o,g(l)&&(f[l]=o)):v&&(l.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,Ke(E,n)):E()}}}const vs=t=>!!t.type.__asyncLoader,mf=t=>t.type.__isKeepAlive;function R_(t,e){yf(t,"a",e)}function N_(t,e){yf(t,"da",e)}function yf(t,e,n=xe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ar(e,s,n),n){let i=n.parent;for(;i&&i.parent;)mf(i.parent.vnode)&&O_(s,e,n,i),i=i.parent}}function O_(t,e,n,s){const i=ar(e,t,s,!0);lr(()=>{pa(s[e],i)},n)}function ar(t,e,n=xe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{en();const a=Zs(n),l=gt(e,n,t,o);return a(),tn(),l});return s?i.unshift(r):i.push(r),r}}const Pt=t=>(e,n=xe)=>{(!fr||t==="sp")&&ar(t,(...s)=>e(...s),n)},x_=Pt("bm"),Pa=Pt("m"),P_=Pt("bu"),D_=Pt("u"),k_=Pt("bum"),lr=Pt("um"),M_=Pt("sp"),L_=Pt("rtg"),F_=Pt("rtc");function B_(t,e=xe){ar("ec",t,e)}const U_=Symbol.for("v-ndc");function vf(t,e,n,s){let i;const r=n,o=U(t);if(o||ye(t)){const a=o&&It(t);let l=!1;a&&(l=!Ze(t),t=ir(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(l?Oe(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(ue(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const So=t=>t?Ff(t)?Fa(t):So(t.parent):null,bs=Ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>So(t.parent),$root:t=>So(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Da(t),$forceUpdate:t=>t.f||(t.f=()=>{Oa(t.update)}),$nextTick:t=>t.n||(t.n=Xs.bind(t.proxy)),$watch:t=>lg.bind(t)}),qr=(t,e)=>t!==le&&!t.__isScriptSetup&&X(t,e),$_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(qr(s,e))return o[e]=1,s[e];if(i!==le&&X(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&X(c,e))return o[e]=3,r[e];if(n!==le&&X(n,e))return o[e]=4,n[e];To&&(o[e]=0)}}const u=bs[e];let f,d;if(u)return e==="$attrs"&&De(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==le&&X(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,X(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return qr(i,e)?(i[e]=n,!0):s!==le&&X(s,e)?(s[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==le&&X(t,o)||qr(e,o)||(a=r[0])&&X(a,o)||X(s,o)||X(bs,o)||X(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function zl(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let To=!0;function H_(t){const e=Da(t),n=t.proxy,s=t.ctx;To=!1,e.beforeCreate&&Gl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:g,updated:_,activated:v,deactivated:E,beforeDestroy:x,beforeUnmount:P,destroyed:D,unmounted:O,render:M,renderTracked:fe,renderTriggered:de,errorCaptured:W,serverPrefetch:G,expose:me,inheritAttrs:Je,components:at,directives:Mt,filters:os}=e;if(c&&j_(c,s,null),o)for(const z in o){const se=o[z];j(se)&&(s[z]=se.bind(n))}if(i){const z=i.call(n,n);ue(z)&&(t.data=vt(z))}if(To=!0,r)for(const z in r){const se=r[z],on=j(se)?se.bind(n,n):j(se.get)?se.get.bind(n,n):pt,ci=!j(se)&&j(se.set)?se.set.bind(n):pt,an=Ce({get:on,set:ci});Object.defineProperty(s,z,{enumerable:!0,configurable:!0,get:()=>an.value,set:lt=>an.value=lt})}if(a)for(const z in a)bf(a[z],s,n,z);if(l){const z=j(l)?l.call(n):l;Reflect.ownKeys(z).forEach(se=>{G_(se,z[se])})}u&&Gl(u,t,"c");function ge(z,se){U(se)?se.forEach(on=>z(on.bind(n))):se&&z(se.bind(n))}if(ge(x_,f),ge(Pa,d),ge(P_,g),ge(D_,_),ge(R_,v),ge(N_,E),ge(B_,W),ge(F_,fe),ge(L_,de),ge(k_,P),ge(lr,O),ge(M_,G),U(me))if(me.length){const z=t.exposed||(t.exposed={});me.forEach(se=>{Object.defineProperty(z,se,{get:()=>n[se],set:on=>n[se]=on})})}else t.exposed||(t.exposed={});M&&t.render===pt&&(t.render=M),Je!=null&&(t.inheritAttrs=Je),at&&(t.components=at),Mt&&(t.directives=Mt),G&&gf(t)}function j_(t,e,n=pt){U(t)&&(t=Io(t));for(const s in t){const i=t[s];let r;ue(i)?"default"in i?r=Es(i.from||s,i.default,!0):r=Es(i.from||s):r=Es(i),he(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Gl(t,e,n){gt(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function bf(t,e,n,s){let i=s.includes(".")?Df(n,s):()=>n[s];if(ye(t)){const r=e[t];j(r)&&Ei(i,r)}else if(j(t))Ei(i,t.bind(n));else if(ue(t))if(U(t))t.forEach(r=>bf(r,e,n,s));else{const r=j(t.handler)?t.handler.bind(n):e[t.handler];j(r)&&Ei(i,r,t)}}function Da(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Di(l,c,o,!0)),Di(l,e,o)),ue(e)&&r.set(e,l),l}function Di(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Di(t,r,n,!0),i&&i.forEach(o=>Di(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=W_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const W_={data:Yl,props:Jl,emits:Jl,methods:ms,computed:ms,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:ms,directives:ms,watch:V_,provide:Yl,inject:q_};function Yl(t,e){return e?t?function(){return Ae(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function q_(t,e){return ms(Io(t),Io(e))}function Io(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ke(t,e){return t?[...new Set([].concat(t,e))]:e}function ms(t,e){return t?Ae(Object.create(null),t,e):e}function Jl(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:Ae(Object.create(null),zl(t),zl(e??{})):e}function V_(t,e){if(!t)return e;if(!e)return t;const n=Ae(Object.create(null),t);for(const s in e)n[s]=ke(t[s],e[s]);return n}function Ef(){return{app:null,config:{isNativeTag:Np,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let K_=0;function z_(t,e){return function(s,i=null){j(s)||(s=Ae({},s)),i!=null&&!ue(i)&&(i=null);const r=Ef(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:K_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Ng,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&j(u.install)?(o.add(u),u.install(c,...f)):j(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const g=c._ceVNode||J(s,i);return g.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(g,u):t(g,u,d),l=!0,c._container=u,u.__vue_app__=c,Fa(g.component)}},onUnmount(u){a.push(u)},unmount(){l&&(gt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=yn;yn=c;try{return u()}finally{yn=f}}};return c}}let yn=null;function G_(t,e){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[t]=e}}function Es(t,e,n=!1){const s=xe||nt;if(s||yn){const i=yn?yn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&j(e)?e.call(s&&s.proxy):e}}function Y_(){return!!(xe||nt||yn)}const wf={},Cf=()=>Object.create(wf),Sf=t=>Object.getPrototypeOf(t)===wf;function J_(t,e,n,s=!1){const i={},r=Cf();t.propsDefaults=Object.create(null),Tf(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:u_(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Q_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=$(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(cr(t.emitsOptions,d))continue;const g=e[d];if(l)if(X(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const _=zt(d);i[_]=Ao(l,a,_,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{Tf(t,e,i,r)&&(c=!0);let u;for(const f in a)(!e||!X(e,f)&&((u=On(f))===f||!X(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Ao(l,a,f,void 0,t,!0)):delete i[f]);if(r!==a)for(const f in r)(!e||!X(e,f))&&(delete r[f],c=!0)}c&&Tt(t.attrs,"set","")}function Tf(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ys(l))continue;const c=e[l];let u;i&&X(i,u=zt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:cr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=$(n),c=a||le;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Ao(i,l,f,c[f],t,!X(c,f))}}return o}function Ao(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Zs(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===On(n))&&(s=!0))}return s}const X_=new WeakMap;function If(t,e,n=!1){const s=n?X_:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!j(t)){const u=f=>{l=!0;const[d,g]=If(f,e,!0);Ae(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ue(t)&&s.set(t,Un),Un;if(U(r))for(let u=0;u<r.length;u++){const f=zt(r[u]);Ql(f)&&(o[f]=le)}else if(r)for(const u in r){const f=zt(u);if(Ql(f)){const d=r[u],g=o[f]=U(d)||j(d)?{type:d}:Ae({},d),_=g.type;let v=!1,E=!0;if(U(_))for(let x=0;x<_.length;++x){const P=_[x],D=j(P)&&P.name;if(D==="Boolean"){v=!0;break}else D==="String"&&(E=!1)}else v=j(_)&&_.name==="Boolean";g[0]=v,g[1]=E,(v||X(g,"default"))&&a.push(f)}}const c=[o,a];return ue(t)&&s.set(t,c),c}function Ql(t){return t[0]!=="$"&&!ys(t)}const Af=t=>t[0]==="_"||t==="$stable",ka=t=>U(t)?t.map(dt):[dt(t)],Z_=(t,e,n)=>{if(e._n)return e;const s=T_((...i)=>ka(e(...i)),n);return s._c=!1,s},Rf=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Af(i))continue;const r=t[i];if(j(r))e[i]=Z_(i,r,s);else if(r!=null){const o=ka(r);e[i]=()=>o}}},Nf=(t,e)=>{const n=ka(e);t.slots.default=()=>n},Of=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},eg=(t,e,n)=>{const s=t.slots=Cf();if(t.vnode.shapeFlag&32){const i=e._;i?(Of(s,e,n),n&&Uu(s,"_",i,!0)):Rf(e,s)}else e&&Nf(t,e)},tg=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=le;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Of(i,e,n):(r=!e.$stable,Rf(e,i)),o=e}else e&&(Nf(t,e),o={default:1});if(r)for(const a in i)!Af(a)&&o[a]==null&&delete i[a]},Ke=_g;function ng(t){return sg(t)}function sg(t,e){const n=$u();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:g=pt,insertStaticContent:_}=t,v=(h,p,y,C=null,b=null,w=null,R=void 0,A=null,I=!!p.dynamicChildren)=>{if(h===p)return;h&&!fs(h,p)&&(C=ui(h),lt(h,b,w,!0),h=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:S,ref:L,shapeFlag:N}=p;switch(S){case ur:E(h,p,y,C);break;case ks:x(h,p,y,C);break;case zr:h==null&&P(p,y,C,R);break;case Qe:at(h,p,y,C,b,w,R,A,I);break;default:N&1?M(h,p,y,C,b,w,R,A,I):N&6?Mt(h,p,y,C,b,w,R,A,I):(N&64||N&128)&&S.process(h,p,y,C,b,w,R,A,I,ls)}L!=null&&b&&Co(L,h&&h.ref,w,p||h,!p)},E=(h,p,y,C)=>{if(h==null)s(p.el=a(p.children),y,C);else{const b=p.el=h.el;p.children!==h.children&&c(b,p.children)}},x=(h,p,y,C)=>{h==null?s(p.el=l(p.children||""),y,C):p.el=h.el},P=(h,p,y,C)=>{[h.el,h.anchor]=_(h.children,p,y,C,h.el,h.anchor)},D=({el:h,anchor:p},y,C)=>{let b;for(;h&&h!==p;)b=d(h),s(h,y,C),h=b;s(p,y,C)},O=({el:h,anchor:p})=>{let y;for(;h&&h!==p;)y=d(h),i(h),h=y;i(p)},M=(h,p,y,C,b,w,R,A,I)=>{p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),h==null?fe(p,y,C,b,w,R,A,I):G(h,p,b,w,R,A,I)},fe=(h,p,y,C,b,w,R,A)=>{let I,S;const{props:L,shapeFlag:N,transition:k,dirs:B}=h;if(I=h.el=o(h.type,w,L&&L.is,L),N&8?u(I,h.children):N&16&&W(h.children,I,null,C,b,Vr(h,w),R,A),B&&ln(h,null,C,"created"),de(I,h,h.scopeId,R,C),L){for(const ie in L)ie!=="value"&&!ys(ie)&&r(I,ie,null,L[ie],w,C);"value"in L&&r(I,"value",null,L.value,w),(S=L.onVnodeBeforeMount)&&ut(S,C,h)}B&&ln(h,null,C,"beforeMount");const Y=ig(b,k);Y&&k.beforeEnter(I),s(I,p,y),((S=L&&L.onVnodeMounted)||Y||B)&&Ke(()=>{S&&ut(S,C,h),Y&&k.enter(I),B&&ln(h,null,C,"mounted")},b)},de=(h,p,y,C,b)=>{if(y&&g(h,y),C)for(let w=0;w<C.length;w++)g(h,C[w]);if(b){let w=b.subTree;if(p===w||Mf(w.type)&&(w.ssContent===p||w.ssFallback===p)){const R=b.vnode;de(h,R,R.scopeId,R.slotScopeIds,b.parent)}}},W=(h,p,y,C,b,w,R,A,I=0)=>{for(let S=I;S<h.length;S++){const L=h[S]=A?Ht(h[S]):dt(h[S]);v(null,L,p,y,C,b,w,R,A)}},G=(h,p,y,C,b,w,R)=>{const A=p.el=h.el;let{patchFlag:I,dynamicChildren:S,dirs:L}=p;I|=h.patchFlag&16;const N=h.props||le,k=p.props||le;let B;if(y&&cn(y,!1),(B=k.onVnodeBeforeUpdate)&&ut(B,y,p,h),L&&ln(p,h,y,"beforeUpdate"),y&&cn(y,!0),(N.innerHTML&&k.innerHTML==null||N.textContent&&k.textContent==null)&&u(A,""),S?me(h.dynamicChildren,S,A,y,C,Vr(p,b),w):R||se(h,p,A,null,y,C,Vr(p,b),w,!1),I>0){if(I&16)Je(A,N,k,y,b);else if(I&2&&N.class!==k.class&&r(A,"class",null,k.class,b),I&4&&r(A,"style",N.style,k.style,b),I&8){const Y=p.dynamicProps;for(let ie=0;ie<Y.length;ie++){const ee=Y[ie],We=N[ee],Ne=k[ee];(Ne!==We||ee==="value")&&r(A,ee,We,Ne,b,y)}}I&1&&h.children!==p.children&&u(A,p.children)}else!R&&S==null&&Je(A,N,k,y,b);((B=k.onVnodeUpdated)||L)&&Ke(()=>{B&&ut(B,y,p,h),L&&ln(p,h,y,"updated")},C)},me=(h,p,y,C,b,w,R)=>{for(let A=0;A<p.length;A++){const I=h[A],S=p[A],L=I.el&&(I.type===Qe||!fs(I,S)||I.shapeFlag&70)?f(I.el):y;v(I,S,L,null,C,b,w,R,!0)}},Je=(h,p,y,C,b)=>{if(p!==y){if(p!==le)for(const w in p)!ys(w)&&!(w in y)&&r(h,w,p[w],null,b,C);for(const w in y){if(ys(w))continue;const R=y[w],A=p[w];R!==A&&w!=="value"&&r(h,w,A,R,b,C)}"value"in y&&r(h,"value",p.value,y.value,b)}},at=(h,p,y,C,b,w,R,A,I)=>{const S=p.el=h?h.el:a(""),L=p.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:k,slotScopeIds:B}=p;B&&(A=A?A.concat(B):B),h==null?(s(S,y,C),s(L,y,C),W(p.children||[],y,L,b,w,R,A,I)):N>0&&N&64&&k&&h.dynamicChildren?(me(h.dynamicChildren,k,y,b,w,R,A),(p.key!=null||b&&p===b.subTree)&&xf(h,p,!0)):se(h,p,y,L,b,w,R,A,I)},Mt=(h,p,y,C,b,w,R,A,I)=>{p.slotScopeIds=A,h==null?p.shapeFlag&512?b.ctx.activate(p,y,C,R,I):os(p,y,C,b,w,R,I):li(h,p,I)},os=(h,p,y,C,b,w,R)=>{const A=h.component=Cg(h,C,b);if(mf(h)&&(A.ctx.renderer=ls),Sg(A,!1,R),A.asyncDep){if(b&&b.registerDep(A,ge,R),!h.el){const I=A.subTree=J(ks);x(null,I,p,y)}}else ge(A,h,p,y,b,w,R)},li=(h,p,y)=>{const C=p.component=h.component;if(hg(h,p,y))if(C.asyncDep&&!C.asyncResolved){z(C,p,y);return}else C.next=p,C.update();else p.el=h.el,C.vnode=p},ge=(h,p,y,C,b,w,R)=>{const A=()=>{if(h.isMounted){let{next:N,bu:k,u:B,parent:Y,vnode:ie}=h;{const qe=Pf(h);if(qe){N&&(N.el=ie.el,z(h,N,R)),qe.asyncDep.then(()=>{h.isUnmounted||A()});return}}let ee=N,We;cn(h,!1),N?(N.el=ie.el,z(h,N,R)):N=ie,k&&Ur(k),(We=N.props&&N.props.onVnodeBeforeUpdate)&&ut(We,Y,N,ie),cn(h,!0);const Ne=Kr(h),et=h.subTree;h.subTree=Ne,v(et,Ne,f(et.el),ui(et),h,b,w),N.el=Ne.el,ee===null&&pg(h,Ne.el),B&&Ke(B,b),(We=N.props&&N.props.onVnodeUpdated)&&Ke(()=>ut(We,Y,N,ie),b)}else{let N;const{el:k,props:B}=p,{bm:Y,m:ie,parent:ee,root:We,type:Ne}=h,et=vs(p);if(cn(h,!1),Y&&Ur(Y),!et&&(N=B&&B.onVnodeBeforeMount)&&ut(N,ee,p),cn(h,!0),k&&Ll){const qe=()=>{h.subTree=Kr(h),Ll(k,h.subTree,h,b,null)};et&&Ne.__asyncHydrate?Ne.__asyncHydrate(k,h,qe):qe()}else{We.ce&&We.ce._injectChildStyle(Ne);const qe=h.subTree=Kr(h);v(null,qe,y,C,h,b,w),p.el=qe.el}if(ie&&Ke(ie,b),!et&&(N=B&&B.onVnodeMounted)){const qe=p;Ke(()=>ut(N,ee,qe),b)}(p.shapeFlag&256||ee&&vs(ee.vnode)&&ee.vnode.shapeFlag&256)&&h.a&&Ke(h.a,b),h.isMounted=!0,p=y=C=null}};h.scope.on();const I=h.effect=new zu(A);h.scope.off();const S=h.update=I.run.bind(I),L=h.job=I.runIfDirty.bind(I);L.i=h,L.id=h.uid,I.scheduler=()=>Oa(L),cn(h,!0),S()},z=(h,p,y)=>{p.component=h;const C=h.vnode.props;h.vnode=p,h.next=null,Q_(h,p.props,C,y),tg(h,p.children,y),en(),Kl(h),tn()},se=(h,p,y,C,b,w,R,A,I=!1)=>{const S=h&&h.children,L=h?h.shapeFlag:0,N=p.children,{patchFlag:k,shapeFlag:B}=p;if(k>0){if(k&128){ci(S,N,y,C,b,w,R,A,I);return}else if(k&256){on(S,N,y,C,b,w,R,A,I);return}}B&8?(L&16&&as(S,b,w),N!==S&&u(y,N)):L&16?B&16?ci(S,N,y,C,b,w,R,A,I):as(S,b,w,!0):(L&8&&u(y,""),B&16&&W(N,y,C,b,w,R,A,I))},on=(h,p,y,C,b,w,R,A,I)=>{h=h||Un,p=p||Un;const S=h.length,L=p.length,N=Math.min(S,L);let k;for(k=0;k<N;k++){const B=p[k]=I?Ht(p[k]):dt(p[k]);v(h[k],B,y,null,b,w,R,A,I)}S>L?as(h,b,w,!0,!1,N):W(p,y,C,b,w,R,A,I,N)},ci=(h,p,y,C,b,w,R,A,I)=>{let S=0;const L=p.length;let N=h.length-1,k=L-1;for(;S<=N&&S<=k;){const B=h[S],Y=p[S]=I?Ht(p[S]):dt(p[S]);if(fs(B,Y))v(B,Y,y,null,b,w,R,A,I);else break;S++}for(;S<=N&&S<=k;){const B=h[N],Y=p[k]=I?Ht(p[k]):dt(p[k]);if(fs(B,Y))v(B,Y,y,null,b,w,R,A,I);else break;N--,k--}if(S>N){if(S<=k){const B=k+1,Y=B<L?p[B].el:C;for(;S<=k;)v(null,p[S]=I?Ht(p[S]):dt(p[S]),y,Y,b,w,R,A,I),S++}}else if(S>k)for(;S<=N;)lt(h[S],b,w,!0),S++;else{const B=S,Y=S,ie=new Map;for(S=Y;S<=k;S++){const Ve=p[S]=I?Ht(p[S]):dt(p[S]);Ve.key!=null&&ie.set(Ve.key,S)}let ee,We=0;const Ne=k-Y+1;let et=!1,qe=0;const cs=new Array(Ne);for(S=0;S<Ne;S++)cs[S]=0;for(S=B;S<=N;S++){const Ve=h[S];if(We>=Ne){lt(Ve,b,w,!0);continue}let ct;if(Ve.key!=null)ct=ie.get(Ve.key);else for(ee=Y;ee<=k;ee++)if(cs[ee-Y]===0&&fs(Ve,p[ee])){ct=ee;break}ct===void 0?lt(Ve,b,w,!0):(cs[ct-Y]=S+1,ct>=qe?qe=ct:et=!0,v(Ve,p[ct],y,null,b,w,R,A,I),We++)}const Fl=et?rg(cs):Un;for(ee=Fl.length-1,S=Ne-1;S>=0;S--){const Ve=Y+S,ct=p[Ve],Bl=Ve+1<L?p[Ve+1].el:C;cs[S]===0?v(null,ct,y,Bl,b,w,R,A,I):et&&(ee<0||S!==Fl[ee]?an(ct,y,Bl,2):ee--)}}},an=(h,p,y,C,b=null)=>{const{el:w,type:R,transition:A,children:I,shapeFlag:S}=h;if(S&6){an(h.component.subTree,p,y,C);return}if(S&128){h.suspense.move(p,y,C);return}if(S&64){R.move(h,p,y,ls);return}if(R===Qe){s(w,p,y);for(let N=0;N<I.length;N++)an(I[N],p,y,C);s(h.anchor,p,y);return}if(R===zr){D(h,p,y);return}if(C!==2&&S&1&&A)if(C===0)A.beforeEnter(w),s(w,p,y),Ke(()=>A.enter(w),b);else{const{leave:N,delayLeave:k,afterLeave:B}=A,Y=()=>s(w,p,y),ie=()=>{N(w,()=>{Y(),B&&B()})};k?k(w,Y,ie):ie()}else s(w,p,y)},lt=(h,p,y,C=!1,b=!1)=>{const{type:w,props:R,ref:A,children:I,dynamicChildren:S,shapeFlag:L,patchFlag:N,dirs:k,cacheIndex:B}=h;if(N===-2&&(b=!1),A!=null&&Co(A,null,y,h,!0),B!=null&&(p.renderCache[B]=void 0),L&256){p.ctx.deactivate(h);return}const Y=L&1&&k,ie=!vs(h);let ee;if(ie&&(ee=R&&R.onVnodeBeforeUnmount)&&ut(ee,p,h),L&6)Rp(h.component,y,C);else{if(L&128){h.suspense.unmount(y,C);return}Y&&ln(h,null,p,"beforeUnmount"),L&64?h.type.remove(h,p,y,ls,C):S&&!S.hasOnce&&(w!==Qe||N>0&&N&64)?as(S,p,y,!1,!0):(w===Qe&&N&384||!b&&L&16)&&as(I,p,y),C&&Dl(h)}(ie&&(ee=R&&R.onVnodeUnmounted)||Y)&&Ke(()=>{ee&&ut(ee,p,h),Y&&ln(h,null,p,"unmounted")},y)},Dl=h=>{const{type:p,el:y,anchor:C,transition:b}=h;if(p===Qe){Ap(y,C);return}if(p===zr){O(h);return}const w=()=>{i(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(h.shapeFlag&1&&b&&!b.persisted){const{leave:R,delayLeave:A}=b,I=()=>R(y,w);A?A(h.el,w,I):I()}else w()},Ap=(h,p)=>{let y;for(;h!==p;)y=d(h),i(h),h=y;i(p)},Rp=(h,p,y)=>{const{bum:C,scope:b,job:w,subTree:R,um:A,m:I,a:S}=h;Xl(I),Xl(S),C&&Ur(C),b.stop(),w&&(w.flags|=8,lt(R,h,p,y)),A&&Ke(A,p),Ke(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},as=(h,p,y,C=!1,b=!1,w=0)=>{for(let R=w;R<h.length;R++)lt(h[R],p,y,C,b)},ui=h=>{if(h.shapeFlag&6)return ui(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=d(h.anchor||h.el),y=p&&p[I_];return y?d(y):p};let Fr=!1;const kl=(h,p,y)=>{h==null?p._vnode&&lt(p._vnode,null,null,!0):v(p._vnode||null,h,p,null,null,null,y),p._vnode=h,Fr||(Fr=!0,Kl(),hf(),Fr=!1)},ls={p:v,um:lt,m:an,r:Dl,mt:os,mc:W,pc:se,pbc:me,n:ui,o:t};let Ml,Ll;return{render:kl,hydrate:Ml,createApp:z_(kl,Ml)}}function Vr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function cn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ig(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xf(t,e,n=!1){const s=t.children,i=e.children;if(U(s)&&U(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Ht(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&xf(o,a)),a.type===ur&&(a.el=o.el)}}function rg(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Pf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pf(e)}function Xl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const og=Symbol.for("v-scx"),ag=()=>Es(og);function bi(t,e){return Ma(t,null,e)}function Ei(t,e,n){return Ma(t,e,n)}function Ma(t,e,n=le){const{immediate:s,deep:i,flush:r,once:o}=n,a=Ae({},n);let l;if(fr)if(r==="sync"){const d=ag();l=d.__watcherHandles||(d.__watcherHandles=[])}else if(!e||s)a.once=!0;else{const d=()=>{};return d.stop=pt,d.resume=pt,d.pause=pt,d}const c=xe;a.call=(d,g,_)=>gt(d,c,g,_);let u=!1;r==="post"?a.scheduler=d=>{Ke(d,c&&c.suspense)}:r!=="sync"&&(u=!0,a.scheduler=(d,g)=>{g?d():Oa(d)}),a.augmentJob=d=>{e&&(d.flags|=4),u&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const f=E_(t,e,a);return l&&l.push(f),f}function lg(t,e,n){const s=this.proxy,i=ye(t)?t.includes(".")?Df(s,t):()=>s[t]:t.bind(s,s);let r;j(e)?r=e:(r=e.handler,n=e);const o=Zs(this),a=Ma(i,r.bind(s),n);return o(),a}function Df(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const cg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${zt(e)}Modifiers`]||t[`${On(e)}Modifiers`];function ug(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||le;let i=n;const r=e.startsWith("update:"),o=r&&cg(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>ye(u)?u.trim():u)),o.number&&(i=n.map(kp)));let a,l=s[a=Br(e)]||s[a=Br(zt(e))];!l&&r&&(l=s[a=Br(On(e))]),l&&gt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,gt(c,t,6,i)}}function kf(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!j(t)){const l=c=>{const u=kf(c,e,!0);u&&(a=!0,Ae(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ue(t)&&s.set(t,null),null):(U(r)?r.forEach(l=>o[l]=null):Ae(o,r),ue(t)&&s.set(t,o),o)}function cr(t,e){return!t||!tr(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,On(e))||X(t,e))}function Kr(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:g,ctx:_,inheritAttrs:v}=t,E=Pi(t);let x,P;try{if(n.shapeFlag&4){const O=i||s,M=O;x=dt(c.call(M,O,u,f,g,d,_)),P=a}else{const O=e;x=dt(O.length>1?O(f,{attrs:a,slots:o,emit:l}):O(f,null)),P=e.props?a:fg(a)}}catch(O){ws.length=0,or(O,t,1),x=J(ks)}let D=x;if(P&&v!==!1){const O=Object.keys(P),{shapeFlag:M}=D;O.length&&M&7&&(r&&O.some(ha)&&(P=dg(P,r)),D=Cn(D,P,!1,!0))}return n.dirs&&(D=Cn(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&xa(D,n.transition),x=D,Pi(E),x}const fg=t=>{let e;for(const n in t)(n==="class"||n==="style"||tr(n))&&((e||(e={}))[n]=t[n]);return e},dg=(t,e)=>{const n={};for(const s in t)(!ha(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function hg(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Zl(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==s[d]&&!cr(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Zl(s,o,c):!0:!!o;return!1}function Zl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!cr(n,r))return!0}return!1}function pg({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Mf=t=>t.__isSuspense;function _g(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):S_(t)}const Qe=Symbol.for("v-fgt"),ur=Symbol.for("v-txt"),ks=Symbol.for("v-cmt"),zr=Symbol.for("v-stc"),ws=[];let Ge=null;function En(t=!1){ws.push(Ge=t?null:[])}function gg(){ws.pop(),Ge=ws[ws.length-1]||null}let Ms=1;function ec(t){Ms+=t,t<0&&Ge&&(Ge.hasOnce=!0)}function mg(t){return t.dynamicChildren=Ms>0?Ge||Un:null,gg(),Ms>0&&Ge&&Ge.push(t),t}function wn(t,e,n,s,i,r){return mg(Wt(t,e,n,s,i,r,!0))}function Vn(t){return t?t.__v_isVNode===!0:!1}function fs(t,e){return t.type===e.type&&t.key===e.key}const Lf=({key:t})=>t??null,wi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ye(t)||he(t)||j(t)?{i:nt,r:t,k:e,f:!!n}:t:null);function Wt(t,e=null,n=null,s=0,i=null,r=t===Qe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lf(e),ref:e&&wi(e),scopeId:_f,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:nt};return a?(La(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ye(n)?8:16),Ms>0&&!o&&Ge&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ge.push(l),l}const J=yg;function yg(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===U_)&&(t=ks),Vn(t)){const a=Cn(t,e,!0);return n&&La(a,n),Ms>0&&!r&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(t)]=a:Ge.push(a)),a.patchFlag=-2,a}if(Rg(t)&&(t=t.__vccOpts),e){e=vg(e);let{class:a,style:l}=e;a&&!ye(a)&&(e.class=ma(a)),ue(l)&&(Ia(l)&&!U(l)&&(l=Ae({},l)),e.style=ga(l))}const o=ye(t)?1:Mf(t)?128:A_(t)?64:ue(t)?4:j(t)?2:0;return Wt(t,e,n,s,i,o,r,!0)}function vg(t){return t?Ia(t)||Sf(t)?Ae({},t):t:null}function Cn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Dt(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Lf(c),ref:e&&e.ref?n&&r?U(r)?r.concat(wi(e)):[r,wi(e)]:wi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cn(t.ssContent),ssFallback:t.ssFallback&&Cn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&xa(u,l.clone(u)),u}function bg(t=" ",e=0){return J(ur,null,t,e)}function dt(t){return t==null||typeof t=="boolean"?J(ks):U(t)?J(Qe,null,t.slice()):Vn(t)?Ht(t):J(ur,null,String(t))}function Ht(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cn(t)}function La(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),La(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Sf(e)?e._ctx=nt:i===3&&nt&&(nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:nt},n=32):(e=String(e),s&64?(n=16,e=[bg(e)]):n=8);t.children=e,t.shapeFlag|=n}function Dt(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ma([e.class,s.class]));else if(i==="style")e.style=ga([e.style,s.style]);else if(tr(i)){const r=e[i],o=s[i];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ut(t,e,n,s=null){gt(t,e,7,[n,s])}const Eg=Ef();let wg=0;function Cg(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Eg,r={uid:wg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:If(s,i),emitsOptions:kf(s,i),emit:null,emitted:null,propsDefaults:le,inheritAttrs:s.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ug.bind(null,r),t.ce&&t.ce(r),r}let xe=null,ki,Ro;{const t=$u(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};ki=e("__VUE_INSTANCE_SETTERS__",n=>xe=n),Ro=e("__VUE_SSR_SETTERS__",n=>fr=n)}const Zs=t=>{const e=xe;return ki(t),t.scope.on(),()=>{t.scope.off(),ki(e)}},tc=()=>{xe&&xe.scope.off(),ki(null)};function Ff(t){return t.vnode.shapeFlag&4}let fr=!1;function Sg(t,e=!1,n=!1){e&&Ro(e);const{props:s,children:i}=t.vnode,r=Ff(t);J_(t,s,r,e),eg(t,i,n);const o=r?Tg(t,e):void 0;return e&&Ro(!1),o}function Tg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,$_);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Ag(t):null,r=Zs(t);en();const o=Qs(s,t,0,[t.props,i]);if(tn(),r(),Mu(o)){if(vs(t)||gf(t),o.then(tc,tc),e)return o.then(a=>{nc(t,a,e)}).catch(a=>{or(a,t,0)});t.asyncDep=o}else nc(t,o,e)}else Bf(t,e)}function nc(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=cf(e)),Bf(t,n)}let sc;function Bf(t,e,n){const s=t.type;if(!t.render){if(!e&&sc&&!s.render){const i=s.template||Da(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ae(Ae({isCustomElement:r,delimiters:a},o),l);s.render=sc(i,c)}}t.render=s.render||pt}{const i=Zs(t);en();try{H_(t)}finally{tn(),i()}}}const Ig={get(t,e){return De(t,"get",""),t[e]}};function Ag(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ig),slots:t.slots,emit:t.emit,expose:e}}function Fa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(cf(Aa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in bs)return bs[n](t)},has(e,n){return n in e||n in bs}})):t.proxy}function Rg(t){return j(t)&&"__vccOpts"in t}const Ce=(t,e)=>v_(t,e,fr);function mi(t,e,n){const s=arguments.length;return s===2?ue(e)&&!U(e)?Vn(e)?J(t,null,[e]):J(t,e):J(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Vn(n)&&(n=[n]),J(t,e,n))}const Ng="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let No;const ic=typeof window<"u"&&window.trustedTypes;if(ic)try{No=ic.createPolicy("vue",{createHTML:t=>t})}catch{}const Uf=No?t=>No.createHTML(t):t=>t,Og="http://www.w3.org/2000/svg",xg="http://www.w3.org/1998/Math/MathML",wt=typeof document<"u"?document:null,rc=wt&&wt.createElement("template"),Pg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?wt.createElementNS(Og,t):e==="mathml"?wt.createElementNS(xg,t):n?wt.createElement(t,{is:n}):wt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>wt.createTextNode(t),createComment:t=>wt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{rc.innerHTML=Uf(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=rc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Dg=Symbol("_vtc");function kg(t,e,n){const s=t[Dg];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const oc=Symbol("_vod"),Mg=Symbol("_vsh"),Lg=Symbol(""),Fg=/(^|;)\s*display\s*:/;function Bg(t,e,n){const s=t.style,i=ye(n);let r=!1;if(n&&!i){if(e)if(ye(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ci(s,a,"")}else for(const o in e)n[o]==null&&Ci(s,o,"");for(const o in n)o==="display"&&(r=!0),Ci(s,o,n[o])}else if(i){if(e!==n){const o=s[Lg];o&&(n+=";"+o),s.cssText=n,r=Fg.test(n)}}else e&&t.removeAttribute("style");oc in t&&(t[oc]=r?s.display:"",t[Mg]&&(s.display="none"))}const ac=/\s*!important$/;function Ci(t,e,n){if(U(n))n.forEach(s=>Ci(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Ug(t,e);ac.test(n)?t.setProperty(On(s),n.replace(ac,""),"important"):t[s]=n}}const lc=["Webkit","Moz","ms"],Gr={};function Ug(t,e){const n=Gr[e];if(n)return n;let s=zt(e);if(s!=="filter"&&s in t)return Gr[e]=s;s=Bu(s);for(let i=0;i<lc.length;i++){const r=lc[i]+s;if(r in t)return Gr[e]=r}return e}const cc="http://www.w3.org/1999/xlink";function uc(t,e,n,s,i,r=$p(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(cc,e.slice(6,e.length)):t.setAttributeNS(cc,e,n):n==null||r&&!Hu(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Zt(n)?String(n):n)}function fc(t,e,n,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Uf(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let r=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Hu(n):n==null&&o==="string"?(n="",r=!0):o==="number"&&(n=0,r=!0)}try{t[e]=n}catch{}r&&t.removeAttribute(e)}function $g(t,e,n,s){t.addEventListener(e,n,s)}function Hg(t,e,n,s){t.removeEventListener(e,n,s)}const dc=Symbol("_vei");function jg(t,e,n,s,i=null){const r=t[dc]||(t[dc]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Wg(e);if(s){const c=r[e]=Kg(s,i);$g(t,a,c,l)}else o&&(Hg(t,a,o,l),r[e]=void 0)}}const hc=/(?:Once|Passive|Capture)$/;function Wg(t){let e;if(hc.test(t)){e={};let s;for(;s=t.match(hc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):On(t.slice(2)),e]}let Yr=0;const qg=Promise.resolve(),Vg=()=>Yr||(qg.then(()=>Yr=0),Yr=Date.now());function Kg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;gt(zg(s,n.value),e,5,[s])};return n.value=t,n.attached=Vg(),n}function zg(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const pc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Gg=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?kg(t,s,o):e==="style"?Bg(t,n,s):tr(e)?ha(e)||jg(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Yg(t,e,s,o))?(fc(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&uc(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ye(s))?fc(t,zt(e),s):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),uc(t,e,s,o))};function Yg(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&pc(e)&&j(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return pc(e)&&ye(n)?!1:e in t}const Jg=Ae({patchProp:Gg},Pg);let _c;function Qg(){return _c||(_c=ng(Jg))}const $f=(...t)=>{const e=Qg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Zg(s);if(!i)return;const r=e._component;!j(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Xg(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Xg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Zg(t){return ye(t)?document.querySelector(t):t}var em=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Hf;const dr=t=>Hf=t,jf=Symbol();function Oo(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Cs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Cs||(Cs={}));function tm(){const t=Vu(!0),e=t.run(()=>ht({}));let n=[],s=[];const i=Aa({install(r){dr(i),i._a=r,r.provide(jf,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!em?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Wf=()=>{};function gc(t,e,n,s=Wf){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Ku()&&Hp(i),i}function kn(t,...e){t.slice().forEach(n=>{n(...e)})}const nm=t=>t(),mc=Symbol(),Jr=Symbol();function xo(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Oo(i)&&Oo(s)&&t.hasOwnProperty(n)&&!he(s)&&!It(s)?t[n]=xo(i,s):t[n]=s}return t}const sm=Symbol();function im(t){return!Oo(t)||!t.hasOwnProperty(sm)}const{assign:Bt}=Object;function rm(t){return!!(he(t)&&t.effect)}function om(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=p_(n.state.value[t]);return Bt(u,r,Object.keys(o||{}).reduce((f,d)=>(f[d]=Aa(Ce(()=>{dr(n);const g=n._s.get(t);return o[d].call(g,g)})),f),{}))}return l=qf(t,c,e,n,s,!0),l}function qf(t,e,n={},s,i,r){let o;const a=Bt({actions:{}},n),l={deep:!0};let c,u,f=[],d=[],g;const _=s.state.value[t];!r&&!_&&(s.state.value[t]={}),ht({});let v;function E(W){let G;c=u=!1,typeof W=="function"?(W(s.state.value[t]),G={type:Cs.patchFunction,storeId:t,events:g}):(xo(s.state.value[t],W),G={type:Cs.patchObject,payload:W,storeId:t,events:g});const me=v=Symbol();Xs().then(()=>{v===me&&(c=!0)}),u=!0,kn(f,G,s.state.value[t])}const x=r?function(){const{state:G}=n,me=G?G():{};this.$patch(Je=>{Bt(Je,me)})}:Wf;function P(){o.stop(),f=[],d=[],s._s.delete(t)}const D=(W,G="")=>{if(mc in W)return W[Jr]=G,W;const me=function(){dr(s);const Je=Array.from(arguments),at=[],Mt=[];function os(z){at.push(z)}function li(z){Mt.push(z)}kn(d,{args:Je,name:me[Jr],store:M,after:os,onError:li});let ge;try{ge=W.apply(this&&this.$id===t?this:M,Je)}catch(z){throw kn(Mt,z),z}return ge instanceof Promise?ge.then(z=>(kn(at,z),z)).catch(z=>(kn(Mt,z),Promise.reject(z))):(kn(at,ge),ge)};return me[mc]=!0,me[Jr]=G,me},O={_p:s,$id:t,$onAction:gc.bind(null,d),$patch:E,$reset:x,$subscribe(W,G={}){const me=gc(f,W,G.detached,()=>Je()),Je=o.run(()=>Ei(()=>s.state.value[t],at=>{(G.flush==="sync"?u:c)&&W({storeId:t,type:Cs.direct,events:g},at)},Bt({},l,G)));return me},$dispose:P},M=vt(O);s._s.set(t,M);const de=(s._a&&s._a.runWithContext||nm)(()=>s._e.run(()=>(o=Vu()).run(()=>e({action:D}))));for(const W in de){const G=de[W];if(he(G)&&!rm(G)||It(G))r||(_&&im(G)&&(he(G)?G.value=_[W]:xo(G,_[W])),s.state.value[t][W]=G);else if(typeof G=="function"){const me=D(G,W);de[W]=me,a.actions[W]=G}}return Bt(M,de),Bt($(M),de),Object.defineProperty(M,"$state",{get:()=>s.state.value[t],set:W=>{E(G=>{Bt(G,W)})}}),s._p.forEach(W=>{Bt(M,o.run(()=>W({store:M,app:s._a,pinia:s,options:a})))}),_&&r&&n.hydrate&&n.hydrate(M.$state,_),c=!0,u=!0,M}function am(t,e,n){let s,i;const r=typeof e=="function";s=t,i=r?n:e;function o(a,l){const c=Y_();return a=a||(c?Es(jf,null):null),a&&dr(a),a=Hf,a._s.has(s)||(r?qf(s,e,i,a):om(s,i,a)),a._s.get(s)}return o.$id=s,o}function lm(t){{t=$(t);const e={};for(const n in t){const s=t[n];(he(s)||It(s))&&(e[n]=m_(t,n))}return e}}const cm=t=>t.split(":",2).join(":"),um=t=>t.reduce((e,n)=>(e[cm(n.time)]={...n},e),{}),yc=am("task-store",()=>{const t=ht();return{table:t,initTable:async n=>{t.value={titles:["Time",n.user_name],fields:Object.entries(um(n.tasks??[])).sort((s,i)=>s[0].localeCompare(i[0]))}}}}),fm=["value"],dm=nn({__name:"TableField",props:{id:{},description:{},time:{}},emits:["update-task"],setup(t,{emit:e}){const n=t,s=e,i=r=>{var o;s("update-task",n.id,(o=r==null?void 0:r.target)==null?void 0:o.value,n.time)};return(r,o)=>(En(),wn("td",null,[Wt("input",{type:"text",placeholder:"Assign a task...",value:r.description,onChange:i},null,40,fm)]))}}),hm=nn({__name:"TableTitles",props:{titles:{}},setup(t){return(e,n)=>(En(!0),wn(Qe,null,vf(e.titles,(s,i)=>(En(),wn("th",{key:i},ya(s),1))),128))}}),pm=nn({__name:"TableRows",props:{fields:{}},emits:["update-task"],setup(t){return(e,n)=>(En(!0),wn(Qe,null,vf(e.fields,(s,i)=>{var r,o,a;return En(),wn("tr",{key:i},[Wt("td",null,ya(s[0]),1),J(Ut(dm),{id:(r=s[1])==null?void 0:r.id,description:(o=s[1])==null?void 0:o.description,time:(a=s[1])==null?void 0:a.time,onUpdateTask:n[0]||(n[0]=(l,c,u)=>e.$emit("update-task",l,c,u))},null,8,["id","description","time"])])}),128))}});function Vf(t,e){return function(){return t.apply(e,arguments)}}const{toString:_m}=Object.prototype,{getPrototypeOf:Ba}=Object,hr=(t=>e=>{const n=_m.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ot=t=>(t=t.toLowerCase(),e=>hr(e)===t),pr=t=>e=>typeof e===t,{isArray:Zn}=Array,Ls=pr("undefined");function gm(t){return t!==null&&!Ls(t)&&t.constructor!==null&&!Ls(t.constructor)&&Ye(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Kf=ot("ArrayBuffer");function mm(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Kf(t.buffer),e}const ym=pr("string"),Ye=pr("function"),zf=pr("number"),_r=t=>t!==null&&typeof t=="object",vm=t=>t===!0||t===!1,Si=t=>{if(hr(t)!=="object")return!1;const e=Ba(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},bm=ot("Date"),Em=ot("File"),wm=ot("Blob"),Cm=ot("FileList"),Sm=t=>_r(t)&&Ye(t.pipe),Tm=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Ye(t.append)&&((e=hr(t))==="formdata"||e==="object"&&Ye(t.toString)&&t.toString()==="[object FormData]"))},Im=ot("URLSearchParams"),[Am,Rm,Nm,Om]=["ReadableStream","Request","Response","Headers"].map(ot),xm=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ei(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let s,i;if(typeof t!="object"&&(t=[t]),Zn(t))for(s=0,i=t.length;s<i;s++)e.call(null,t[s],s,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(s=0;s<o;s++)a=r[s],e.call(null,t[a],a,t)}}function Gf(t,e){e=e.toLowerCase();const n=Object.keys(t);let s=n.length,i;for(;s-- >0;)if(i=n[s],e===i.toLowerCase())return i;return null}const hn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Yf=t=>!Ls(t)&&t!==hn;function Po(){const{caseless:t}=Yf(this)&&this||{},e={},n=(s,i)=>{const r=t&&Gf(e,i)||i;Si(e[r])&&Si(s)?e[r]=Po(e[r],s):Si(s)?e[r]=Po({},s):Zn(s)?e[r]=s.slice():e[r]=s};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&ei(arguments[s],n);return e}const Pm=(t,e,n,{allOwnKeys:s}={})=>(ei(e,(i,r)=>{n&&Ye(i)?t[r]=Vf(i,n):t[r]=i},{allOwnKeys:s}),t),Dm=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),km=(t,e,n,s)=>{t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Mm=(t,e,n,s)=>{let i,r,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),r=i.length;r-- >0;)o=i[r],(!s||s(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Ba(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Lm=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const s=t.indexOf(e,n);return s!==-1&&s===n},Fm=t=>{if(!t)return null;if(Zn(t))return t;let e=t.length;if(!zf(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Bm=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Ba(Uint8Array)),Um=(t,e)=>{const s=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=s.next())&&!i.done;){const r=i.value;e.call(t,r[0],r[1])}},$m=(t,e)=>{let n;const s=[];for(;(n=t.exec(e))!==null;)s.push(n);return s},Hm=ot("HTMLFormElement"),jm=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,i){return s.toUpperCase()+i}),vc=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Wm=ot("RegExp"),Jf=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),s={};ei(n,(i,r)=>{let o;(o=e(i,r,t))!==!1&&(s[r]=o||i)}),Object.defineProperties(t,s)},qm=t=>{Jf(t,(e,n)=>{if(Ye(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=t[n];if(Ye(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Vm=(t,e)=>{const n={},s=i=>{i.forEach(r=>{n[r]=!0})};return Zn(t)?s(t):s(String(t).split(e)),n},Km=()=>{},zm=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Qr="abcdefghijklmnopqrstuvwxyz",bc="0123456789",Qf={DIGIT:bc,ALPHA:Qr,ALPHA_DIGIT:Qr+Qr.toUpperCase()+bc},Gm=(t=16,e=Qf.ALPHA_DIGIT)=>{let n="";const{length:s}=e;for(;t--;)n+=e[Math.random()*s|0];return n};function Ym(t){return!!(t&&Ye(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Jm=t=>{const e=new Array(10),n=(s,i)=>{if(_r(s)){if(e.indexOf(s)>=0)return;if(!("toJSON"in s)){e[i]=s;const r=Zn(s)?[]:{};return ei(s,(o,a)=>{const l=n(o,i+1);!Ls(l)&&(r[a]=l)}),e[i]=void 0,r}}return s};return n(t,0)},Qm=ot("AsyncFunction"),Xm=t=>t&&(_r(t)||Ye(t))&&Ye(t.then)&&Ye(t.catch),Xf=((t,e)=>t?setImmediate:e?((n,s)=>(hn.addEventListener("message",({source:i,data:r})=>{i===hn&&r===n&&s.length&&s.shift()()},!1),i=>{s.push(i),hn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ye(hn.postMessage)),Zm=typeof queueMicrotask<"u"?queueMicrotask.bind(hn):typeof process<"u"&&process.nextTick||Xf,m={isArray:Zn,isArrayBuffer:Kf,isBuffer:gm,isFormData:Tm,isArrayBufferView:mm,isString:ym,isNumber:zf,isBoolean:vm,isObject:_r,isPlainObject:Si,isReadableStream:Am,isRequest:Rm,isResponse:Nm,isHeaders:Om,isUndefined:Ls,isDate:bm,isFile:Em,isBlob:wm,isRegExp:Wm,isFunction:Ye,isStream:Sm,isURLSearchParams:Im,isTypedArray:Bm,isFileList:Cm,forEach:ei,merge:Po,extend:Pm,trim:xm,stripBOM:Dm,inherits:km,toFlatObject:Mm,kindOf:hr,kindOfTest:ot,endsWith:Lm,toArray:Fm,forEachEntry:Um,matchAll:$m,isHTMLForm:Hm,hasOwnProperty:vc,hasOwnProp:vc,reduceDescriptors:Jf,freezeMethods:qm,toObjectSet:Vm,toCamelCase:jm,noop:Km,toFiniteNumber:zm,findKey:Gf,global:hn,isContextDefined:Yf,ALPHABET:Qf,generateString:Gm,isSpecCompliantForm:Ym,toJSONObject:Jm,isAsyncFn:Qm,isThenable:Xm,setImmediate:Xf,asap:Zm};function H(t,e,n,s,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),s&&(this.request=s),i&&(this.response=i,this.status=i.status?i.status:null)}m.inherits(H,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:m.toJSONObject(this.config),code:this.code,status:this.status}}});const Zf=H.prototype,ed={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{ed[t]={value:t}});Object.defineProperties(H,ed);Object.defineProperty(Zf,"isAxiosError",{value:!0});H.from=(t,e,n,s,i,r)=>{const o=Object.create(Zf);return m.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),H.call(o,t.message,e,n,s,i),o.cause=t,o.name=t.name,r&&Object.assign(o,r),o};const ey=null;function Do(t){return m.isPlainObject(t)||m.isArray(t)}function td(t){return m.endsWith(t,"[]")?t.slice(0,-2):t}function Ec(t,e,n){return t?t.concat(e).map(function(i,r){return i=td(i),!n&&r?"["+i+"]":i}).join(n?".":""):e}function ty(t){return m.isArray(t)&&!t.some(Do)}const ny=m.toFlatObject(m,{},null,function(e){return/^is[A-Z]/.test(e)});function gr(t,e,n){if(!m.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=m.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,E){return!m.isUndefined(E[v])});const s=n.metaTokens,i=n.visitor||u,r=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&m.isSpecCompliantForm(e);if(!m.isFunction(i))throw new TypeError("visitor must be a function");function c(_){if(_===null)return"";if(m.isDate(_))return _.toISOString();if(!l&&m.isBlob(_))throw new H("Blob is not supported. Use a Buffer instead.");return m.isArrayBuffer(_)||m.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,v,E){let x=_;if(_&&!E&&typeof _=="object"){if(m.endsWith(v,"{}"))v=s?v:v.slice(0,-2),_=JSON.stringify(_);else if(m.isArray(_)&&ty(_)||(m.isFileList(_)||m.endsWith(v,"[]"))&&(x=m.toArray(_)))return v=td(v),x.forEach(function(D,O){!(m.isUndefined(D)||D===null)&&e.append(o===!0?Ec([v],O,r):o===null?v:v+"[]",c(D))}),!1}return Do(_)?!0:(e.append(Ec(E,v,r),c(_)),!1)}const f=[],d=Object.assign(ny,{defaultVisitor:u,convertValue:c,isVisitable:Do});function g(_,v){if(!m.isUndefined(_)){if(f.indexOf(_)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(_),m.forEach(_,function(x,P){(!(m.isUndefined(x)||x===null)&&i.call(e,x,m.isString(P)?P.trim():P,v,d))===!0&&g(x,v?v.concat(P):[P])}),f.pop()}}if(!m.isObject(t))throw new TypeError("data must be an object");return g(t),e}function wc(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function Ua(t,e){this._pairs=[],t&&gr(t,this,e)}const nd=Ua.prototype;nd.append=function(e,n){this._pairs.push([e,n])};nd.toString=function(e){const n=e?function(s){return e.call(this,s,wc)}:wc;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function sy(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function sd(t,e,n){if(!e)return t;const s=n&&n.encode||sy,i=n&&n.serialize;let r;if(i?r=i(e,n):r=m.isURLSearchParams(e)?e.toString():new Ua(e,n).toString(s),r){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+r}return t}class Cc{constructor(){this.handlers=[]}use(e,n,s){return this.handlers.push({fulfilled:e,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){m.forEach(this.handlers,function(s){s!==null&&e(s)})}}const id={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},iy=typeof URLSearchParams<"u"?URLSearchParams:Ua,ry=typeof FormData<"u"?FormData:null,oy=typeof Blob<"u"?Blob:null,ay={isBrowser:!0,classes:{URLSearchParams:iy,FormData:ry,Blob:oy},protocols:["http","https","file","blob","url","data"]},$a=typeof window<"u"&&typeof document<"u",ko=typeof navigator=="object"&&navigator||void 0,ly=$a&&(!ko||["ReactNative","NativeScript","NS"].indexOf(ko.product)<0),cy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",uy=$a&&window.location.href||"http://localhost",fy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:$a,hasStandardBrowserEnv:ly,hasStandardBrowserWebWorkerEnv:cy,navigator:ko,origin:uy},Symbol.toStringTag,{value:"Module"})),$e={...fy,...ay};function dy(t,e){return gr(t,new $e.classes.URLSearchParams,Object.assign({visitor:function(n,s,i,r){return $e.isNode&&m.isBuffer(n)?(this.append(s,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function hy(t){return m.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function py(t){const e={},n=Object.keys(t);let s;const i=n.length;let r;for(s=0;s<i;s++)r=n[s],e[r]=t[r];return e}function rd(t){function e(n,s,i,r){let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&m.isArray(i)?i.length:o,l?(m.hasOwnProp(i,o)?i[o]=[i[o],s]:i[o]=s,!a):((!i[o]||!m.isObject(i[o]))&&(i[o]=[]),e(n,s,i[o],r)&&m.isArray(i[o])&&(i[o]=py(i[o])),!a)}if(m.isFormData(t)&&m.isFunction(t.entries)){const n={};return m.forEachEntry(t,(s,i)=>{e(hy(s),i,n,0)}),n}return null}function _y(t,e,n){if(m.isString(t))try{return(e||JSON.parse)(t),m.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(0,JSON.stringify)(t)}const ti={transitional:id,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const s=n.getContentType()||"",i=s.indexOf("application/json")>-1,r=m.isObject(e);if(r&&m.isHTMLForm(e)&&(e=new FormData(e)),m.isFormData(e))return i?JSON.stringify(rd(e)):e;if(m.isArrayBuffer(e)||m.isBuffer(e)||m.isStream(e)||m.isFile(e)||m.isBlob(e)||m.isReadableStream(e))return e;if(m.isArrayBufferView(e))return e.buffer;if(m.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(s.indexOf("application/x-www-form-urlencoded")>-1)return dy(e,this.formSerializer).toString();if((a=m.isFileList(e))||s.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return gr(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return r||i?(n.setContentType("application/json",!1),_y(e)):e}],transformResponse:[function(e){const n=this.transitional||ti.transitional,s=n&&n.forcedJSONParsing,i=this.responseType==="json";if(m.isResponse(e)||m.isReadableStream(e))return e;if(e&&m.isString(e)&&(s&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?H.from(a,H.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:$e.classes.FormData,Blob:$e.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};m.forEach(["delete","get","head","post","put","patch"],t=>{ti.headers[t]={}});const gy=m.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),my=t=>{const e={};let n,s,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),s=o.substring(i+1).trim(),!(!n||e[n]&&gy[n])&&(n==="set-cookie"?e[n]?e[n].push(s):e[n]=[s]:e[n]=e[n]?e[n]+", "+s:s)}),e},Sc=Symbol("internals");function ds(t){return t&&String(t).trim().toLowerCase()}function Ti(t){return t===!1||t==null?t:m.isArray(t)?t.map(Ti):String(t)}function yy(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(t);)e[s[1]]=s[2];return e}const vy=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Xr(t,e,n,s,i){if(m.isFunction(s))return s.call(this,e,n);if(i&&(e=n),!!m.isString(e)){if(m.isString(s))return e.indexOf(s)!==-1;if(m.isRegExp(s))return s.test(e)}}function by(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,s)=>n.toUpperCase()+s)}function Ey(t,e){const n=m.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(t,s+n,{value:function(i,r,o){return this[s].call(this,e,i,r,o)},configurable:!0})})}class He{constructor(e){e&&this.set(e)}set(e,n,s){const i=this;function r(a,l,c){const u=ds(l);if(!u)throw new Error("header name must be a non-empty string");const f=m.findKey(i,u);(!f||i[f]===void 0||c===!0||c===void 0&&i[f]!==!1)&&(i[f||l]=Ti(a))}const o=(a,l)=>m.forEach(a,(c,u)=>r(c,u,l));if(m.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(m.isString(e)&&(e=e.trim())&&!vy(e))o(my(e),n);else if(m.isHeaders(e))for(const[a,l]of e.entries())r(l,a,s);else e!=null&&r(n,e,s);return this}get(e,n){if(e=ds(e),e){const s=m.findKey(this,e);if(s){const i=this[s];if(!n)return i;if(n===!0)return yy(i);if(m.isFunction(n))return n.call(this,i,s);if(m.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ds(e),e){const s=m.findKey(this,e);return!!(s&&this[s]!==void 0&&(!n||Xr(this,this[s],s,n)))}return!1}delete(e,n){const s=this;let i=!1;function r(o){if(o=ds(o),o){const a=m.findKey(s,o);a&&(!n||Xr(s,s[a],a,n))&&(delete s[a],i=!0)}}return m.isArray(e)?e.forEach(r):r(e),i}clear(e){const n=Object.keys(this);let s=n.length,i=!1;for(;s--;){const r=n[s];(!e||Xr(this,this[r],r,e,!0))&&(delete this[r],i=!0)}return i}normalize(e){const n=this,s={};return m.forEach(this,(i,r)=>{const o=m.findKey(s,r);if(o){n[o]=Ti(i),delete n[r];return}const a=e?by(r):String(r).trim();a!==r&&delete n[r],n[a]=Ti(i),s[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return m.forEach(this,(s,i)=>{s!=null&&s!==!1&&(n[i]=e&&m.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const s=new this(e);return n.forEach(i=>s.set(i)),s}static accessor(e){const s=(this[Sc]=this[Sc]={accessors:{}}).accessors,i=this.prototype;function r(o){const a=ds(o);s[a]||(Ey(i,o),s[a]=!0)}return m.isArray(e)?e.forEach(r):r(e),this}}He.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);m.reduceDescriptors(He.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(s){this[n]=s}}});m.freezeMethods(He);function Zr(t,e){const n=this||ti,s=e||n,i=He.from(s.headers);let r=s.data;return m.forEach(t,function(a){r=a.call(n,r,i.normalize(),e?e.status:void 0)}),i.normalize(),r}function od(t){return!!(t&&t.__CANCEL__)}function es(t,e,n){H.call(this,t??"canceled",H.ERR_CANCELED,e,n),this.name="CanceledError"}m.inherits(es,H,{__CANCEL__:!0});function ad(t,e,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):e(new H("Request failed with status code "+n.status,[H.ERR_BAD_REQUEST,H.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function wy(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Cy(t,e){t=t||10;const n=new Array(t),s=new Array(t);let i=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=s[r];o||(o=c),n[i]=l,s[i]=c;let f=r,d=0;for(;f!==i;)d+=n[f++],f=f%t;if(i=(i+1)%t,i===r&&(r=(r+1)%t),c-o<e)return;const g=u&&c-u;return g?Math.round(d*1e3/g):void 0}}function Sy(t,e){let n=0,s=1e3/e,i,r;const o=(c,u=Date.now())=>{n=u,i=null,r&&(clearTimeout(r),r=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=s?o(c,u):(i=c,r||(r=setTimeout(()=>{r=null,o(i)},s-f)))},()=>i&&o(i)]}const Mi=(t,e,n=3)=>{let s=0;const i=Cy(50,250);return Sy(r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=o-s,c=i(l),u=o<=a;s=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Tc=(t,e)=>{const n=t!=null;return[s=>e[0]({lengthComputable:n,total:t,loaded:s}),e[1]]},Ic=t=>(...e)=>m.asap(()=>t(...e)),Ty=$e.hasStandardBrowserEnv?function(){const e=$e.navigator&&/(msie|trident)/i.test($e.navigator.userAgent),n=document.createElement("a");let s;function i(r){let o=r;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return s=i(window.location.href),function(o){const a=m.isString(o)?i(o):o;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}(),Iy=$e.hasStandardBrowserEnv?{write(t,e,n,s,i,r){const o=[t+"="+encodeURIComponent(e)];m.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),m.isString(s)&&o.push("path="+s),m.isString(i)&&o.push("domain="+i),r===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ay(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Ry(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function ld(t,e){return t&&!Ay(e)?Ry(t,e):e}const Ac=t=>t instanceof He?{...t}:t;function Sn(t,e){e=e||{};const n={};function s(c,u,f){return m.isPlainObject(c)&&m.isPlainObject(u)?m.merge.call({caseless:f},c,u):m.isPlainObject(u)?m.merge({},u):m.isArray(u)?u.slice():u}function i(c,u,f){if(m.isUndefined(u)){if(!m.isUndefined(c))return s(void 0,c,f)}else return s(c,u,f)}function r(c,u){if(!m.isUndefined(u))return s(void 0,u)}function o(c,u){if(m.isUndefined(u)){if(!m.isUndefined(c))return s(void 0,c)}else return s(void 0,u)}function a(c,u,f){if(f in e)return s(c,u);if(f in t)return s(void 0,c)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>i(Ac(c),Ac(u),!0)};return m.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=l[u]||i,d=f(t[u],e[u],u);m.isUndefined(d)&&f!==a||(n[u]=d)}),n}const cd=t=>{const e=Sn({},t);let{data:n,withXSRFToken:s,xsrfHeaderName:i,xsrfCookieName:r,headers:o,auth:a}=e;e.headers=o=He.from(o),e.url=sd(ld(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(m.isFormData(n)){if($e.hasStandardBrowserEnv||$e.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if($e.hasStandardBrowserEnv&&(s&&m.isFunction(s)&&(s=s(e)),s||s!==!1&&Ty(e.url))){const c=i&&r&&Iy.read(r);c&&o.set(i,c)}return e},Ny=typeof XMLHttpRequest<"u",Oy=Ny&&function(t){return new Promise(function(n,s){const i=cd(t);let r=i.data;const o=He.from(i.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=i,u,f,d,g,_;function v(){g&&g(),_&&_(),i.cancelToken&&i.cancelToken.unsubscribe(u),i.signal&&i.signal.removeEventListener("abort",u)}let E=new XMLHttpRequest;E.open(i.method.toUpperCase(),i.url,!0),E.timeout=i.timeout;function x(){if(!E)return;const D=He.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),M={data:!a||a==="text"||a==="json"?E.responseText:E.response,status:E.status,statusText:E.statusText,headers:D,config:t,request:E};ad(function(de){n(de),v()},function(de){s(de),v()},M),E=null}"onloadend"in E?E.onloadend=x:E.onreadystatechange=function(){!E||E.readyState!==4||E.status===0&&!(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(x)},E.onabort=function(){E&&(s(new H("Request aborted",H.ECONNABORTED,t,E)),E=null)},E.onerror=function(){s(new H("Network Error",H.ERR_NETWORK,t,E)),E=null},E.ontimeout=function(){let O=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const M=i.transitional||id;i.timeoutErrorMessage&&(O=i.timeoutErrorMessage),s(new H(O,M.clarifyTimeoutError?H.ETIMEDOUT:H.ECONNABORTED,t,E)),E=null},r===void 0&&o.setContentType(null),"setRequestHeader"in E&&m.forEach(o.toJSON(),function(O,M){E.setRequestHeader(M,O)}),m.isUndefined(i.withCredentials)||(E.withCredentials=!!i.withCredentials),a&&a!=="json"&&(E.responseType=i.responseType),c&&([d,_]=Mi(c,!0),E.addEventListener("progress",d)),l&&E.upload&&([f,g]=Mi(l),E.upload.addEventListener("progress",f),E.upload.addEventListener("loadend",g)),(i.cancelToken||i.signal)&&(u=D=>{E&&(s(!D||D.type?new es(null,t,E):D),E.abort(),E=null)},i.cancelToken&&i.cancelToken.subscribe(u),i.signal&&(i.signal.aborted?u():i.signal.addEventListener("abort",u)));const P=wy(i.url);if(P&&$e.protocols.indexOf(P)===-1){s(new H("Unsupported protocol "+P+":",H.ERR_BAD_REQUEST,t));return}E.send(r||null)})},xy=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let s=new AbortController,i;const r=function(c){if(!i){i=!0,a();const u=c instanceof Error?c:this.reason;s.abort(u instanceof H?u:new es(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,r(new H(`timeout ${e} of ms exceeded`,H.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(r):c.removeEventListener("abort",r)}),t=null)};t.forEach(c=>c.addEventListener("abort",r));const{signal:l}=s;return l.unsubscribe=()=>m.asap(a),l}},Py=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let s=0,i;for(;s<n;)i=s+e,yield t.slice(s,i),s=i},Dy=async function*(t,e){for await(const n of ky(t))yield*Py(n,e)},ky=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:s}=await e.read();if(n)break;yield s}}finally{await e.cancel()}},Rc=(t,e,n,s)=>{const i=Dy(t,e);let r=0,o,a=l=>{o||(o=!0,s&&s(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await i.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=r+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),i.return()}},{highWaterMark:2})},mr=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",ud=mr&&typeof ReadableStream=="function",My=mr&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),fd=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Ly=ud&&fd(()=>{let t=!1;const e=new Request($e.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Nc=64*1024,Mo=ud&&fd(()=>m.isReadableStream(new Response("").body)),Li={stream:Mo&&(t=>t.body)};mr&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Li[e]&&(Li[e]=m.isFunction(t[e])?n=>n[e]():(n,s)=>{throw new H(`Response type '${e}' is not supported`,H.ERR_NOT_SUPPORT,s)})})})(new Response);const Fy=async t=>{if(t==null)return 0;if(m.isBlob(t))return t.size;if(m.isSpecCompliantForm(t))return(await new Request($e.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(m.isArrayBufferView(t)||m.isArrayBuffer(t))return t.byteLength;if(m.isURLSearchParams(t)&&(t=t+""),m.isString(t))return(await My(t)).byteLength},By=async(t,e)=>{const n=m.toFiniteNumber(t.getContentLength());return n??Fy(e)},Uy=mr&&(async t=>{let{url:e,method:n,data:s,signal:i,cancelToken:r,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:f="same-origin",fetchOptions:d}=cd(t);c=c?(c+"").toLowerCase():"text";let g=xy([i,r&&r.toAbortSignal()],o),_;const v=g&&g.unsubscribe&&(()=>{g.unsubscribe()});let E;try{if(l&&Ly&&n!=="get"&&n!=="head"&&(E=await By(u,s))!==0){let M=new Request(e,{method:"POST",body:s,duplex:"half"}),fe;if(m.isFormData(s)&&(fe=M.headers.get("content-type"))&&u.setContentType(fe),M.body){const[de,W]=Tc(E,Mi(Ic(l)));s=Rc(M.body,Nc,de,W)}}m.isString(f)||(f=f?"include":"omit");const x="credentials"in Request.prototype;_=new Request(e,{...d,signal:g,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:s,duplex:"half",credentials:x?f:void 0});let P=await fetch(_);const D=Mo&&(c==="stream"||c==="response");if(Mo&&(a||D&&v)){const M={};["status","statusText","headers"].forEach(G=>{M[G]=P[G]});const fe=m.toFiniteNumber(P.headers.get("content-length")),[de,W]=a&&Tc(fe,Mi(Ic(a),!0))||[];P=new Response(Rc(P.body,Nc,de,()=>{W&&W(),v&&v()}),M)}c=c||"text";let O=await Li[m.findKey(Li,c)||"text"](P,t);return!D&&v&&v(),await new Promise((M,fe)=>{ad(M,fe,{data:O,headers:He.from(P.headers),status:P.status,statusText:P.statusText,config:t,request:_})})}catch(x){throw v&&v(),x&&x.name==="TypeError"&&/fetch/i.test(x.message)?Object.assign(new H("Network Error",H.ERR_NETWORK,t,_),{cause:x.cause||x}):H.from(x,x&&x.code,t,_)}}),Lo={http:ey,xhr:Oy,fetch:Uy};m.forEach(Lo,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Oc=t=>`- ${t}`,$y=t=>m.isFunction(t)||t===null||t===!1,dd={getAdapter:t=>{t=m.isArray(t)?t:[t];const{length:e}=t;let n,s;const i={};for(let r=0;r<e;r++){n=t[r];let o;if(s=n,!$y(n)&&(s=Lo[(o=String(n)).toLowerCase()],s===void 0))throw new H(`Unknown adapter '${o}'`);if(s)break;i[o||"#"+r]=s}if(!s){const r=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?r.length>1?`since :
`+r.map(Oc).join(`
`):" "+Oc(r[0]):"as no adapter specified";throw new H("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return s},adapters:Lo};function eo(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new es(null,t)}function xc(t){return eo(t),t.headers=He.from(t.headers),t.data=Zr.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),dd.getAdapter(t.adapter||ti.adapter)(t).then(function(s){return eo(t),s.data=Zr.call(t,t.transformResponse,s),s.headers=He.from(s.headers),s},function(s){return od(s)||(eo(t),s&&s.response&&(s.response.data=Zr.call(t,t.transformResponse,s.response),s.response.headers=He.from(s.response.headers))),Promise.reject(s)})}const hd="1.7.7",Ha={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ha[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});const Pc={};Ha.transitional=function(e,n,s){function i(r,o){return"[Axios v"+hd+"] Transitional option '"+r+"'"+o+(s?". "+s:"")}return(r,o,a)=>{if(e===!1)throw new H(i(o," has been removed"+(n?" in "+n:"")),H.ERR_DEPRECATED);return n&&!Pc[o]&&(Pc[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};function Hy(t,e,n){if(typeof t!="object")throw new H("options must be an object",H.ERR_BAD_OPTION_VALUE);const s=Object.keys(t);let i=s.length;for(;i-- >0;){const r=s[i],o=e[r];if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new H("option "+r+" must be "+l,H.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new H("Unknown option "+r,H.ERR_BAD_OPTION)}}const Fo={assertOptions:Hy,validators:Ha},Ft=Fo.validators;class vn{constructor(e){this.defaults=e,this.interceptors={request:new Cc,response:new Cc}}async request(e,n){try{return await this._request(e,n)}catch(s){if(s instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const r=i.stack?i.stack.replace(/^.+\n/,""):"";try{s.stack?r&&!String(s.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+r):s.stack=r}catch{}}throw s}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Sn(this.defaults,n);const{transitional:s,paramsSerializer:i,headers:r}=n;s!==void 0&&Fo.assertOptions(s,{silentJSONParsing:Ft.transitional(Ft.boolean),forcedJSONParsing:Ft.transitional(Ft.boolean),clarifyTimeoutError:Ft.transitional(Ft.boolean)},!1),i!=null&&(m.isFunction(i)?n.paramsSerializer={serialize:i}:Fo.assertOptions(i,{encode:Ft.function,serialize:Ft.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&m.merge(r.common,r[n.method]);r&&m.forEach(["delete","get","head","post","put","patch","common"],_=>{delete r[_]}),n.headers=He.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,d;if(!l){const _=[xc.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,c),d=_.length,u=Promise.resolve(n);f<d;)u=u.then(_[f++],_[f++]);return u}d=a.length;let g=n;for(f=0;f<d;){const _=a[f++],v=a[f++];try{g=_(g)}catch(E){v.call(this,E);break}}try{u=xc.call(this,g)}catch(_){return Promise.reject(_)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Sn(this.defaults,e);const n=ld(e.baseURL,e.url);return sd(n,e.params,e.paramsSerializer)}}m.forEach(["delete","get","head","options"],function(e){vn.prototype[e]=function(n,s){return this.request(Sn(s||{},{method:e,url:n,data:(s||{}).data}))}});m.forEach(["post","put","patch"],function(e){function n(s){return function(r,o,a){return this.request(Sn(a||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}vn.prototype[e]=n(),vn.prototype[e+"Form"]=n(!0)});class ja{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const s=this;this.promise.then(i=>{if(!s._listeners)return;let r=s._listeners.length;for(;r-- >0;)s._listeners[r](i);s._listeners=null}),this.promise.then=i=>{let r;const o=new Promise(a=>{s.subscribe(a),r=a}).then(i);return o.cancel=function(){s.unsubscribe(r)},o},e(function(r,o,a){s.reason||(s.reason=new es(r,o,a),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=s=>{e.abort(s)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new ja(function(i){e=i}),cancel:e}}}function jy(t){return function(n){return t.apply(null,n)}}function Wy(t){return m.isObject(t)&&t.isAxiosError===!0}const Bo={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Bo).forEach(([t,e])=>{Bo[e]=t});function pd(t){const e=new vn(t),n=Vf(vn.prototype.request,e);return m.extend(n,vn.prototype,e,{allOwnKeys:!0}),m.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return pd(Sn(t,i))},n}const ve=pd(ti);ve.Axios=vn;ve.CanceledError=es;ve.CancelToken=ja;ve.isCancel=od;ve.VERSION=hd;ve.toFormData=gr;ve.AxiosError=H;ve.Cancel=ve.CanceledError;ve.all=function(e){return Promise.all(e)};ve.spread=jy;ve.isAxiosError=Wy;ve.mergeConfig=Sn;ve.AxiosHeaders=He;ve.formToJSON=t=>rd(m.isHTMLForm(t)?new FormData(t):t);ve.getAdapter=dd.getAdapter;ve.HttpStatusCode=Bo;ve.default=ve;var Dc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw ts(e)},ts=function(t){return new Error("Firebase Database ("+_d.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Wa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,f=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),s.push(n[u],n[f],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw new Vy;const d=r<<2|a>>4;if(s.push(d),c!==64){const g=a<<4&240|c>>2;if(s.push(g),f!==64){const _=c<<6&192|f;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Vy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const md=function(t){const e=gd(t);return Wa.encodeByteArray(e,!0)},Fi=function(t){return md(t).replace(/\./g,"")},Uo=function(t){try{return Wa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t){return yd(void 0,t)}function yd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!zy(n)||(t[n]=yd(t[n],e[n]));return t}function zy(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=()=>Gy().__FIREBASE_DEFAULTS__,Jy=()=>{if(typeof process>"u"||typeof Dc>"u")return;const t=Dc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Qy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uo(t[1]);return e&&JSON.parse(e)},vd=()=>{try{return Yy()||Jy()||Qy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xy=t=>{var e,n;return(n=(e=vd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Zy=t=>{const e=Xy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},bd=()=>{var t;return(t=vd())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Fi(JSON.stringify(n)),Fi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ed(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tv())}function nv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wd(){return _d.NODE_ADMIN===!0}function Cd(){try{return typeof indexedDB=="object"}catch{return!1}}function Sd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function sv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv="FirebaseError";class ns extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=iv,Object.setPrototypeOf(this,ns.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vr.prototype.create)}}class vr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?rv(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ns(i,a,s)}}function rv(t,e){return t.replace(ov,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ov=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){return JSON.parse(t)}function be(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Fs(Uo(r[0])||""),n=Fs(Uo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},av=function(t){const e=Td(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},lv=function(t){const e=Td(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Kn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function kc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function $o(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Mc(r)&&Mc(o)){if(!$o(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Mc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):f<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[f]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function qa(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},br=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t){return t&&t._delegate?t._delegate:t}class Nt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new yr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pv(e))try{this.getOrInitializeService({instanceIdentifier:fn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fn){return this.instances.has(e)}getOptions(e=fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fn){return this.component?this.component.multipleInstances?e:fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hv(t){return t===fn?void 0:t}function pv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const gv={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},mv=ae.INFO,yv={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},vv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=yv[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Id{constructor(e){this.name=e,this._logLevel=mv,this._logHandler=vv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const bv=(t,e)=>e.some(n=>t instanceof n);let Lc,Fc;function Ev(){return Lc||(Lc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wv(){return Fc||(Fc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ad=new WeakMap,Ho=new WeakMap,Rd=new WeakMap,to=new WeakMap,Va=new WeakMap;function Cv(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(At(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ad.set(n,t)}).catch(()=>{}),Va.set(e,t),e}function Sv(t){if(Ho.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ho.set(t,e)}let jo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ho.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Tv(t){jo=t(jo)}function Iv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(no(this),e,...n);return Rd.set(s,e.sort?e.sort():[e]),At(s)}:wv().includes(t)?function(...e){return t.apply(no(this),e),At(Ad.get(this))}:function(...e){return At(t.apply(no(this),e))}}function Av(t){return typeof t=="function"?Iv(t):(t instanceof IDBTransaction&&Sv(t),bv(t,Ev())?new Proxy(t,jo):t)}function At(t){if(t instanceof IDBRequest)return Cv(t);if(to.has(t))return to.get(t);const e=Av(t);return e!==t&&(to.set(t,e),Va.set(e,t)),e}const no=t=>Va.get(t);function Er(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=At(o);return s&&o.addEventListener("upgradeneeded",l=>{s(At(o.result),l.oldVersion,l.newVersion,At(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function so(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",s=>e(s.oldVersion,s)),At(n).then(()=>{})}const Rv=["get","getKey","getAll","getAllKeys","count"],Nv=["put","add","delete","clear"],io=new Map;function Bc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(io.get(e))return io.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Nv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Rv.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return io.set(e,r),r}Tv(t=>({...t,get:(e,n,s)=>Bc(e,n)||t.get(e,n,s),has:(e,n)=>!!Bc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wo="@firebase/app",Uc="0.10.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Id("@firebase/app"),Pv="@firebase/app-compat",Dv="@firebase/analytics-compat",kv="@firebase/analytics",Mv="@firebase/app-check-compat",Lv="@firebase/app-check",Fv="@firebase/auth",Bv="@firebase/auth-compat",Uv="@firebase/database",$v="@firebase/data-connect",Hv="@firebase/database-compat",jv="@firebase/functions",Wv="@firebase/functions-compat",qv="@firebase/installations",Vv="@firebase/installations-compat",Kv="@firebase/messaging",zv="@firebase/messaging-compat",Gv="@firebase/performance",Yv="@firebase/performance-compat",Jv="@firebase/remote-config",Qv="@firebase/remote-config-compat",Xv="@firebase/storage",Zv="@firebase/storage-compat",eb="@firebase/firestore",tb="@firebase/vertexai-preview",nb="@firebase/firestore-compat",sb="firebase",ib="10.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="[DEFAULT]",rb={[Wo]:"fire-core",[Pv]:"fire-core-compat",[kv]:"fire-analytics",[Dv]:"fire-analytics-compat",[Lv]:"fire-app-check",[Mv]:"fire-app-check-compat",[Fv]:"fire-auth",[Bv]:"fire-auth-compat",[Uv]:"fire-rtdb",[$v]:"fire-data-connect",[Hv]:"fire-rtdb-compat",[jv]:"fire-fn",[Wv]:"fire-fn-compat",[qv]:"fire-iid",[Vv]:"fire-iid-compat",[Kv]:"fire-fcm",[zv]:"fire-fcm-compat",[Gv]:"fire-perf",[Yv]:"fire-perf-compat",[Jv]:"fire-rc",[Qv]:"fire-rc-compat",[Xv]:"fire-gcs",[Zv]:"fire-gcs-compat",[eb]:"fire-fst",[nb]:"fire-fst-compat",[tb]:"fire-vertex","fire-js":"fire-js",[sb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new Map,ob=new Map,Vo=new Map;function $c(t,e){try{t.container.addComponent(e)}catch(n){Ot.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yt(t){const e=t.name;if(Vo.has(e))return Ot.debug(`There were multiple attempts to register component ${e}.`),!1;Vo.set(e,t);for(const n of Ui.values())$c(n,t);for(const n of ob.values())$c(n,t);return!0}function wr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new vr("app","Firebase",ab);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=ib;function Nd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:qo,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw qt.create("bad-app-name",{appName:String(i)});if(n||(n=bd()),!n)throw qt.create("no-options");const r=Ui.get(i);if(r){if($o(n,r.options)&&$o(s,r.config))return r;throw qt.create("duplicate-app",{appName:i})}const o=new _v(i);for(const l of Vo.values())o.addComponent(l);const a=new lb(n,s,o);return Ui.set(i,a),a}function Od(t=qo){const e=Ui.get(t);if(!e&&t===qo&&bd())return Nd();if(!e)throw qt.create("no-app",{appName:t});return e}function _t(t,e,n){var s;let i=(s=rb[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ot.warn(a.join(" "));return}Yt(new Nt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub="firebase-heartbeat-database",fb=1,Bs="firebase-heartbeat-store";let ro=null;function xd(){return ro||(ro=Er(ub,fb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bs)}catch(n){console.warn(n)}}}}).catch(t=>{throw qt.create("idb-open",{originalErrorMessage:t.message})})),ro}async function db(t){try{const n=(await xd()).transaction(Bs),s=await n.objectStore(Bs).get(Pd(t));return await n.done,s}catch(e){if(e instanceof ns)Ot.warn(e.message);else{const n=qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ot.warn(n.message)}}}async function Hc(t,e){try{const s=(await xd()).transaction(Bs,"readwrite");await s.objectStore(Bs).put(e,Pd(t)),await s.done}catch(n){if(n instanceof ns)Ot.warn(n.message);else{const s=qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ot.warn(s.message)}}}function Pd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=1024,pb=30*24*60*60*1e3;class _b{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=jc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=pb}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Ot.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jc(),{heartbeatsToSend:s,unsentEntries:i}=gb(this._heartbeatsCache.heartbeats),r=Fi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Ot.warn(n),""}}}function jc(){return new Date().toISOString().substring(0,10)}function gb(t,e=hb){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Wc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class mb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cd()?Sd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await db(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wc(t){return Fi(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(t){Yt(new Nt("platform-logger",e=>new Ov(e),"PRIVATE")),Yt(new Nt("heartbeat",e=>new _b(e),"PRIVATE")),_t(Wo,Uc,t),_t(Wo,Uc,"esm2017"),_t("fire-js","")}yb("");var qc={};const Vc="@firebase/database",Kc="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dd="";function vb(t){Dd=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Fs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new bb(e)}}catch{}return new Eb},pn=kd("localStorage"),wb=kd("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Id("@firebase/database"),Cb=function(){let t=1;return function(){return t++}}(),Md=function(t){const e=fv(t),n=new uv;n.update(e);const s=n.digest();return Wa.encodeByteArray(s)},ni=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ni.apply(null,s):typeof s=="object"?e+=be(s):e+=s,e+=" "}return e};let Ss=null,zc=!0;const Sb=function(t,e){T(!e,"Can't turn on custom loggers persistently."),jn.logLevel=ae.VERBOSE,Ss=jn.log.bind(jn)},Ie=function(...t){if(zc===!0&&(zc=!1,Ss===null&&wb.get("logging_enabled")===!0&&Sb()),Ss){const e=ni.apply(null,t);Ss(e)}},si=function(t){return function(...e){Ie(t,...e)}},Ko=function(...t){const e="FIREBASE INTERNAL ERROR: "+ni(...t);jn.error(e)},xt=function(...t){const e=`FIREBASE FATAL ERROR: ${ni(...t)}`;throw jn.error(e),new Error(e)},je=function(...t){const e="FIREBASE WARNING: "+ni(...t);jn.warn(e)},Tb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ka=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ib=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zn="[MIN_NAME]",Tn="[MAX_NAME]",xn=function(t,e){if(t===e)return 0;if(t===zn||e===Tn)return-1;if(e===zn||t===Tn)return 1;{const n=Gc(t),s=Gc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Ab=function(t,e){return t===e?0:t<e?-1:1},hs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+be(e))},za=function(t){if(typeof t!="object"||t===null)return be(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=be(e[s]),n+=":",n+=za(t[e[s]]);return n+="}",n},Ld=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Re(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Fd=function(t){T(!Ka(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},Rb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Nb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ob(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const xb=new RegExp("^-?(0*)\\d{1,10}$"),Pb=-2147483648,Db=2147483647,Gc=function(t){if(xb.test(t)){const e=Number(t);if(e>=Pb&&e<=Db)return e}return null},ss=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw je("Exception was thrown by user callback.",n),e},Math.floor(0))}},kb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ts=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',je(e)}}class Ii{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ii.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="5",Bd="v",Ud="s",$d="r",Hd="f",jd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Wd="ls",qd="p",zo="ac",Vd="websocket",Kd="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Fb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Gd(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===Vd)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Kd)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Fb(t)&&(n.ns=t.namespace);const i=[];return Re(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.counters_={}}incrementCounter(e,n=1){bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Ky(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo={},ao={};function Ya(t){const e=t.toString();return oo[e]||(oo[e]=new Bb),oo[e]}function Ub(t,e){const n=t.toString();return ao[n]||(ao[n]=e()),ao[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ss(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="start",Hb="close",jb="pLPCommand",Wb="pRTLPCB",Yd="id",Jd="pw",Qd="ser",qb="cb",Vb="seg",Kb="ts",zb="d",Gb="dframe",Xd=1870,Zd=30,Yb=Xd-Zd,Jb=25e3,Qb=3e4;class Bn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=si(e),this.stats_=Ya(n),this.urlFn=l=>(this.appCheckToken&&(l[zo]=this.appCheckToken),Gd(n,Kd,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new $b(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Qb)),Ib(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ja((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Yc)this.id=a,this.password=l;else if(o===Hb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Yc]="t",s[Qd]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[qb]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Bd]=Ga,this.transportSessionId&&(s[Ud]=this.transportSessionId),this.lastSessionId&&(s[Wd]=this.lastSessionId),this.applicationId&&(s[qd]=this.applicationId),this.appCheckToken&&(s[zo]=this.appCheckToken),typeof location<"u"&&location.hostname&&jd.test(location.hostname)&&(s[$d]=Hd);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bn.forceAllow_=!0}static forceDisallow(){Bn.forceDisallow_=!0}static isAvailable(){return Bn.forceAllow_?!0:!Bn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Rb()&&!Nb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=md(n),i=Ld(s,Yb);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Gb]="t",s[Yd]=e,s[Jd]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ja{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Cb(),window[jb+this.uniqueCallbackIdentifier]=e,window[Wb+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ja.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ie("frame writing exception"),a.stack&&Ie(a.stack),Ie(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Yd]=this.myID,e[Jd]=this.myPW,e[Qd]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zd+s.length<=Xd;){const o=this.pendingSegs.shift();s=s+"&"+Vb+i+"="+o.seg+"&"+Kb+i+"="+o.ts+"&"+zb+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Jb)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=16384,Zb=45e3;let $i=null;typeof MozWebSocket<"u"?$i=MozWebSocket:typeof WebSocket<"u"&&($i=WebSocket);class tt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=si(this.connId),this.stats_=Ya(n),this.connURL=tt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Bd]=Ga,typeof location<"u"&&location.hostname&&jd.test(location.hostname)&&(o[$d]=Hd),n&&(o[Ud]=n),s&&(o[Wd]=s),i&&(o[zo]=i),r&&(o[qd]=r),Gd(e,Vd,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pn.set("previous_websocket_failure",!0);try{let s;wd(),this.mySock=new $i(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){tt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&$i!==null&&!tt.forceDisallow_}static previouslyFailed(){return pn.isInMemoryStorage||pn.get("previous_websocket_failure")===!0}markConnectionHealthy(){pn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Fs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ld(n,Xb);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Zb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tt.responsesRequiredToBeHealthy=2;tt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Bn,tt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=tt&&tt.isAvailable();let s=n&&!tt.previouslyFailed();if(e.webSocketOnly&&(n||je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[tt];else{const i=this.transports_=[];for(const r of Us.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Us.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Us.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=6e4,tE=5e3,nE=10*1024,sE=100*1024,lo="t",Jc="d",iE="s",Qc="r",rE="e",Xc="o",Zc="a",eu="n",tu="p",oE="h";class aE{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=si("c:"+this.id+":"),this.transportManager_=new Us(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ts(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>sE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>nE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(lo in e){const n=e[lo];n===Zc?this.upgradeIfSecondaryHealthy_():n===Qc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Xc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=hs("t",e),s=hs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:eu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=hs("t",e),s=hs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=hs(lo,e);if(Jc in e){const s=e[Jc];if(n===oE){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===eu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===iE?this.onConnectionShutdown_(s):n===Qc?this.onReset_(s):n===rE?Ko("Server Error: "+s):n===Xc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ko("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ga!==s&&je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ts(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(eE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ts(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(tE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends th{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ed()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Hi}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=32,su=768;class te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new te("")}function V(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Jt(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new te(t.pieces_,e)}function Qa(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function lE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function $s(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function nh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new te(e,0)}function pe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof te)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new te(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function Fe(t,e){const n=V(t),s=V(e);if(n===null)return e;if(n===s)return Fe(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function cE(t,e){const n=$s(t,0),s=$s(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=xn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Xa(t,e){if(Jt(t)!==Jt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Xe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Jt(t)>Jt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class uE{constructor(e,n){this.errorPrefix_=n,this.parts_=$s(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=br(this.parts_[s]);sh(this)}}function fE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=br(e),sh(t)}function dE(t){const e=t.parts_.pop();t.byteLength_-=br(e),t.parts_.length>0&&(t.byteLength_-=1)}function sh(t){if(t.byteLength_>su)throw new Error(t.errorPrefix_+"has a key path longer than "+su+" bytes ("+t.byteLength_+").");if(t.parts_.length>nu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+nu+") or object contains a cycle "+dn(t))}function dn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends th{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Za}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=1e3,hE=60*5*1e3,iu=30*1e3,pE=1.3,_E=3e4,gE="server_kill",ru=3;class Rt extends eh{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Rt.nextPersistentConnectionId_++,this.log_=si("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ps,this.maxReconnectDelay_=hE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!wd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Za.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Hi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(be(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new yr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Rt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bt(e,"w")){const s=Kn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=iu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=av(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ko("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_E&&(this.reconnectDelay_=ps),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*pE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Rt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(f){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new aE(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{je(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(gE)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&je(f),l())}}}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],kc(this.interruptReasons_)&&(this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>za(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new te(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ie("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ru&&(this.reconnectDelay_=iu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ie("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ru&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Dd.replace(/\./g,"-")]=1,Ed()?e["framework.cordova"]=1:nv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hi.getInstance().currentlyOnline();return kc(this.interruptReasons_)&&e}}Rt.nextPersistentConnectionId_=0;Rt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new q(zn,e),i=new q(zn,n);return this.compare(s,i)!==0}minPost(){return q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi;class ih extends Cr{static get __EMPTY_NODE(){return yi}static set __EMPTY_NODE(e){yi=e}compare(e,n){return xn(e.name,n.name)}isDefinedOn(e){throw ts("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(Tn,yi)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,yi)}toString(){return".key"}}const Wn=new ih;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class we{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??we.RED,this.left=i??Ue.EMPTY_NODE,this.right=r??Ue.EMPTY_NODE}copy(e,n,s,i,r){return new we(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}we.RED=!0;we.BLACK=!1;class mE{copy(e,n,s,i,r){return this}insert(e,n,s){return new we(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,we.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,we.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new vi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new vi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new vi(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new mE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t,e){return xn(t.name,e.name)}function el(t,e){return xn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go;function vE(t){Go=t}const rh=function(t){return typeof t=="number"?"number:"+Fd(t):"string:"+t},oh=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bt(e,".sv"),"Priority must be a string or number.")}else T(t===Go||t.isEmpty(),"priority of unexpected type.");T(t===Go||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ou;class Ee{constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),oh(this.priorityNode_)}static set __childrenNodeConstructor(e){ou=e}static get __childrenNodeConstructor(){return ou}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:V(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=V(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||Jt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+rh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Fd(this.value_):e+=this.value_,this.lazyHash_=Md(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ee.VALUE_TYPE_ORDER.indexOf(n),r=Ee.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ah,lh;function bE(t){ah=t}function EE(t){lh=t}class wE extends Cr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?xn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(Tn,new Ee("[PRIORITY-POST]",lh))}makePost(e,n){const s=ah(e);return new q(n,new Ee("[PRIORITY-POST]",s))}toString(){return".priority"}}const _e=new wE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=Math.log(2);class SE{constructor(e){const n=r=>parseInt(Math.log(r)/CE,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ji=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let f,d;if(u===0)return null;if(u===1)return f=t[l],d=n?n(f):f,new we(d,f.node,we.BLACK,null,null);{const g=parseInt(u/2,10)+l,_=i(l,g),v=i(g+1,c);return f=t[g],d=n?n(f):f,new we(d,f.node,we.BLACK,_,v)}},r=function(l){let c=null,u=null,f=t.length;const d=function(_,v){const E=f-_,x=f;f-=_;const P=i(E+1,x),D=t[E],O=n?n(D):D;g(new we(O,D.node,v,null,P))},g=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const v=l.nextBitIsOne(),E=Math.pow(2,l.count-(_+1));v?d(E,we.BLACK):(d(E,we.BLACK),d(E,we.RED))}return u},o=new SE(t.length),a=r(o);return new Ue(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co;const Mn={};class St{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(Mn&&_e,"ChildrenNode.ts has not been loaded"),co=co||new St({".priority":Mn},{".priority":_e}),co}get(e){const n=Kn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return bt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Wn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(q.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=ji(s,e.getCompare()):a=Mn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new St(u,c)}addToIndexes(e,n){const s=Bi(this.indexes_,(i,r)=>{const o=Kn(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===Mn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(q.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ji(a,o.getCompare())}else return Mn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new q(e.name,a))),l.insert(e,e.node)}});return new St(s,this.indexSet_)}removeFromIndexes(e,n){const s=Bi(this.indexes_,i=>{if(i===Mn)return i;{const r=n.get(e.name);return r?i.remove(new q(e.name,r)):i}});return new St(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s;class F{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&oh(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _s||(_s=new F(new Ue(el),null,St.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_s}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_s:n}}getChild(e){const n=V(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new q(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?_s:this.priorityNode_;return new F(i,o,r)}}updateChild(e,n){const s=V(e);if(s===null)return n;{T(V(e)!==".priority"||Jt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ce(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(_e,(o,a)=>{n[o]=a.val(e),s++,r&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+rh(this.getPriority().val())+":"),this.forEachChild(_e,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Md(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new q(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ii?-1:0}withIndex(e){if(e===Wn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Wn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(_e),i=n.getIterator(_e);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Wn?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class TE extends F{constructor(){super(new Ue(el),F.EMPTY_NODE,St.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const ii=new TE;Object.defineProperties(q,{MIN:{value:new q(zn,F.EMPTY_NODE)},MAX:{value:new q(Tn,ii)}});ih.__EMPTY_NODE=F.EMPTY_NODE;Ee.__childrenNodeConstructor=F;vE(ii);EE(ii);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=!0;function Se(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,Se(e))}if(!(t instanceof Array)&&IE){const n=[];let s=!1;if(Re(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Se(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new q(o,l)))}}),n.length===0)return F.EMPTY_NODE;const r=ji(n,yE,o=>o.name,el);if(s){const o=ji(n,_e.getCompare());return new F(r,Se(e),new St({".priority":o},{".priority":_e}))}else return new F(r,Se(e),St.Default)}else{let n=F.EMPTY_NODE;return Re(t,(s,i)=>{if(bt(t,s)&&s.substring(0,1)!=="."){const r=Se(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Se(e))}}bE(Se);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE extends Cr{constructor(e){super(),this.indexPath_=e,T(!K(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?xn(e.name,n.name):r}makePost(e,n){const s=Se(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,s);return new q(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,ii);return new q(Tn,e)}toString(){return $s(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE extends Cr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?xn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const s=Se(e);return new q(n,s)}toString(){return".value"}}const NE=new RE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t){return{type:"value",snapshotNode:t}}function Gn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Hs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function js(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function OE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Hs(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Gn(n,s)):o.trackChildChange(js(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,r)=>{n.hasChild(i)||s.trackChildChange(Hs(i,r))}),n.isLeafNode()||n.forEachChild(_e,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(js(i,r,o))}else s.trackChildChange(Gn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.indexedFilter_=new tl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ws.getStartPost_(e),this.endPost_=Ws.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new q(n,s))||(s=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const r=this;return n.forEachChild(_e,(o,a)=>{r.matches(new q(o,a))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ws(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new q(n,s))||(s=F.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,g)=>f(g,d)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new q(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,l);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(js(n,s,f)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Hs(n,f));const v=a.updateImmediateChild(n,F.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Gn(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Hs(c.name,c.node)),r.trackChildChange(Gn(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,F.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zn}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Tn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new nl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function PE(t){return t.loadsAllData()?new tl(t.getIndex()):t.hasLimit()?new xE(t):new Ws(t)}function au(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===NE?n="$value":t.index_===Wn?n="$key":(T(t.index_ instanceof AE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=be(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=be(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+be(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=be(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function lu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends eh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=si("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Wi.getListenId_(e,s),a={};this.listens_[o]=a;const l=au(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,s),Kn(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Wi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=au(e._queryParams),s=e._path.toString(),i=new yr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+cv(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Fs(a.responseText)}catch{je("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&je("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(){return{value:null,children:new Map}}function uh(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=V(e);t.children.has(s)||t.children.set(s,qi());const i=t.children.get(s);e=ce(e),uh(i,e,n)}}function Yo(t,e,n){t.value!==null?n(e,t.value):kE(t,(s,i)=>{const r=new te(e.toString()+"/"+s);Yo(i,r,n)})}function kE(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Re(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=10*1e3,LE=30*1e3,FE=5*60*1e3;class BE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ME(e);const s=cu+(LE-cu)*Math.random();Ts(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Re(e,(i,r)=>{r>0&&bt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ts(this.reportStats_.bind(this),Math.floor(Math.random()*2*FE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(st||(st={}));function sl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function il(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function rl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=st.ACK_USER_WRITE,this.source=sl()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new te(e));return new Vi(Q(),n,this.revert)}}else return T(V(this.path)===e,"operationForChild called for unrelated child."),new Vi(ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n){this.source=e,this.path=n,this.type=st.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new qs(this.source,Q()):new qs(this.source,ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=st.OVERWRITE}operationForChild(e){return K(this.path)?new In(this.source,Q(),this.snap.getImmediateChild(e)):new In(this.source,ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=st.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new te(e));return n.isEmpty()?null:n.value?new In(this.source,Q(),n.value):new Yn(this.source,Q(),n)}else return T(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Yn(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=V(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $E(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(OE(o.childName,o.snapshotNode))}),gs(t,i,"child_removed",e,s,n),gs(t,i,"child_added",e,s,n),gs(t,i,"child_moved",r,s,n),gs(t,i,"child_changed",e,s,n),gs(t,i,"value",e,s,n),i}function gs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>jE(t,a,l)),o.forEach(a=>{const l=HE(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function HE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function jE(t,e,n){if(e.childName==null||n.childName==null)throw ts("Should only compare child_ events.");const s=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t,e){return{eventCache:t,serverCache:e}}function Is(t,e,n,s){return Sr(new Qt(e,n,s),t.serverCache)}function fh(t,e,n,s){return Sr(t.eventCache,new Qt(e,n,s))}function Ki(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function An(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uo;const WE=()=>(uo||(uo=new Ue(Ab)),uo);class oe{constructor(e,n=WE()){this.value=e,this.children=n}static fromObject(e){let n=new oe(null);return Re(e,(s,i)=>{n=n.set(new te(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(K(e))return null;{const s=V(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ce(e),n);return r!=null?{path:pe(new te(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=V(e),s=this.children.get(n);return s!==null?s.subtree(ce(e)):new oe(null)}}set(e,n){if(K(e))return new oe(n,this.children);{const s=V(e),r=(this.children.get(s)||new oe(null)).set(ce(e),n),o=this.children.insert(s,r);return new oe(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const n=V(e),s=this.children.get(n);if(s){const i=s.remove(ce(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new oe(null):new oe(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const n=V(e),s=this.children.get(n);return s?s.get(ce(e)):null}}setTree(e,n){if(K(e))return n;{const s=V(e),r=(this.children.get(s)||new oe(null)).setTree(ce(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new oe(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(pe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(K(e))return null;{const r=V(e),o=this.children.get(r);return o?o.findOnPath_(ce(e),pe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if(K(e))return this;{this.value&&s(n,this.value);const i=V(e),r=this.children.get(i);return r?r.foreachOnPath_(ce(e),pe(n,i),s):new oe(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(pe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.writeTree_=e}static empty(){return new rt(new oe(null))}}function As(t,e,n){if(K(e))return new rt(new oe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Fe(i,e);return r=r.updateChild(o,n),new rt(t.writeTree_.set(i,r))}else{const i=new oe(n),r=t.writeTree_.setTree(e,i);return new rt(r)}}}function Jo(t,e,n){let s=t;return Re(n,(i,r)=>{s=As(s,pe(e,i),r)}),s}function uu(t,e){if(K(e))return rt.empty();{const n=t.writeTree_.setTree(e,new oe(null));return new rt(n)}}function Qo(t,e){return Pn(t,e)!=null}function Pn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Fe(n.path,e)):null}function fu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(s,i)=>{e.push(new q(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new q(s,i.value))}),e}function Vt(t,e){if(K(e))return t;{const n=Pn(t,e);return n!=null?new rt(new oe(n)):new rt(t.writeTree_.subtree(e))}}function Xo(t){return t.writeTree_.isEmpty()}function Jn(t,e){return dh(Q(),t.writeTree_,e)}function dh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=dh(pe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(pe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t,e){return gh(e,t)}function qE(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=As(t.visibleWrites,e,n)),t.lastWriteId=s}function VE(t,e,n,s){T(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Jo(t.visibleWrites,e,n),t.lastWriteId=s}function KE(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function zE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&GE(a,s.path)?i=!1:Xe(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return YE(t),!0;if(s.snap)t.visibleWrites=uu(t.visibleWrites,s.path);else{const a=s.children;Re(a,l=>{t.visibleWrites=uu(t.visibleWrites,pe(s.path,l))})}return!0}else return!1}function GE(t,e){if(t.snap)return Xe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xe(pe(t.path,n),e))return!0;return!1}function YE(t){t.visibleWrites=hh(t.allWrites,JE,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function JE(t){return t.visible}function hh(t,e,n){let s=rt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Xe(n,o)?(a=Fe(n,o),s=As(s,a,r.snap)):Xe(o,n)&&(a=Fe(o,n),s=As(s,Q(),r.snap.getChild(a)));else if(r.children){if(Xe(n,o))a=Fe(n,o),s=Jo(s,a,r.children);else if(Xe(o,n))if(a=Fe(o,n),K(a))s=Jo(s,Q(),r.children);else{const l=Kn(r.children,V(a));if(l){const c=l.getChild(ce(a));s=As(s,Q(),c)}}}else throw ts("WriteRecord should have .snap or .children")}}return s}function ph(t,e,n,s,i){if(!s&&!i){const r=Pn(t.visibleWrites,e);if(r!=null)return r;{const o=Vt(t.visibleWrites,e);if(Xo(o))return n;if(n==null&&!Qo(o,Q()))return null;{const a=n||F.EMPTY_NODE;return Jn(o,a)}}}else{const r=Vt(t.visibleWrites,e);if(!i&&Xo(r))return n;if(!i&&n==null&&!Qo(r,Q()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Xe(c.path,e)||Xe(e,c.path))},a=hh(t.allWrites,o,e),l=n||F.EMPTY_NODE;return Jn(a,l)}}}function QE(t,e,n){let s=F.EMPTY_NODE;const i=Pn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Vt(t.visibleWrites,e);return n.forEachChild(_e,(o,a)=>{const l=Jn(Vt(r,new te(o)),a);s=s.updateImmediateChild(o,l)}),fu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Vt(t.visibleWrites,e);return fu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function XE(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=pe(e,n);if(Qo(t.visibleWrites,r))return null;{const o=Vt(t.visibleWrites,r);return Xo(o)?i.getChild(n):Jn(o,i.getChild(n))}}function ZE(t,e,n,s){const i=pe(e,n),r=Pn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Vt(t.visibleWrites,i);return Jn(o,s.getNode().getImmediateChild(n))}else return null}function ew(t,e){return Pn(t.visibleWrites,e)}function tw(t,e,n,s,i,r,o){let a;const l=Vt(t.visibleWrites,e),c=Pn(l,Q());if(c!=null)a=c;else if(n!=null)a=Jn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)f(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function nw(){return{visibleWrites:rt.empty(),allWrites:[],lastWriteId:-1}}function zi(t,e,n,s){return ph(t.writeTree,t.treePath,e,n,s)}function ol(t,e){return QE(t.writeTree,t.treePath,e)}function du(t,e,n,s){return XE(t.writeTree,t.treePath,e,n,s)}function Gi(t,e){return ew(t.writeTree,pe(t.treePath,e))}function sw(t,e,n,s,i,r){return tw(t.writeTree,t.treePath,e,n,s,i,r)}function al(t,e,n){return ZE(t.writeTree,t.treePath,e,n)}function _h(t,e){return gh(pe(t.treePath,e),t.writeTree)}function gh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,js(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Hs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Gn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,js(s,e.snapshotNode,i.oldSnap));else throw ts("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const mh=new rw;class ll{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Qt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return al(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:An(this.viewCache_),r=sw(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t){return{filter:t}}function aw(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function lw(t,e,n,s,i){const r=new iw;let o,a;if(n.type===st.OVERWRITE){const c=n;c.source.fromUser?o=Zo(t,e,c.path,c.snap,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!K(c.path),o=Yi(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===st.MERGE){const c=n;c.source.fromUser?o=uw(t,e,c.path,c.children,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ea(t,e,c.path,c.children,s,i,a,r))}else if(n.type===st.ACK_USER_WRITE){const c=n;c.revert?o=hw(t,e,c.path,s,i,r):o=fw(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===st.LISTEN_COMPLETE)o=dw(t,e,n.path,s,r);else throw ts("Unknown operation type: "+n.type);const l=r.getChanges();return cw(e,o,l),{viewCache:o,changes:l}}function cw(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ki(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(ch(Ki(e)))}}function yh(t,e,n,s,i,r){const o=e.eventCache;if(Gi(s,n)!=null)return e;{let a,l;if(K(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=An(e),u=c instanceof F?c:F.EMPTY_NODE,f=ol(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=zi(s,An(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=V(n);if(c===".priority"){T(Jt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=du(s,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=ce(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=du(s,n,o.getNode(),l);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=al(s,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,i,r):a=o.getNode()}}return Is(e,a,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function Yi(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(K(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),g,null)}else{const g=V(n);if(!l.isCompleteForPath(n)&&Jt(n)>1)return e;const _=ce(n),E=l.getNode().getImmediateChild(g).updateChild(_,s);g===".priority"?c=u.updatePriority(l.getNode(),E):c=u.updateChild(l.getNode(),g,E,_,mh,null)}const f=fh(e,c,l.isFullyInitialized()||K(n),u.filtersNodes()),d=new ll(i,f,r);return yh(t,f,n,i,d,a)}function Zo(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new ll(i,e,r);if(K(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Is(e,c,!0,t.filter.filtersNodes());else{const f=V(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Is(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ce(n),g=a.getNode().getImmediateChild(f);let _;if(K(d))_=s;else{const v=u.getCompleteChild(f);v!=null?Qa(d)===".priority"&&v.getChild(nh(d)).isEmpty()?_=v:_=v.updateChild(d,s):_=F.EMPTY_NODE}if(g.equals(_))l=e;else{const v=t.filter.updateChild(a.getNode(),f,_,d,u,o);l=Is(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function hu(t,e){return t.eventCache.isCompleteForChild(e)}function uw(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=pe(n,l);hu(e,V(u))&&(a=Zo(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=pe(n,l);hu(e,V(u))||(a=Zo(t,a,u,c,i,r,o))}),a}function pu(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ea(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;K(n)?c=s:c=new oe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),_=pu(t,g,d);l=Yi(t,l,new te(f),_,i,r,o,a)}}),c.children.inorderTraversal((f,d)=>{const g=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!g){const _=e.serverCache.getNode().getImmediateChild(f),v=pu(t,_,d);l=Yi(t,l,new te(f),v,i,r,o,a)}}),l}function fw(t,e,n,s,i,r,o){if(Gi(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(K(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Yi(t,e,n,l.getNode().getChild(n),i,r,a,o);if(K(n)){let c=new oe(null);return l.getNode().forEachChild(Wn,(u,f)=>{c=c.set(new te(u),f)}),ea(t,e,n,c,i,r,a,o)}else return e}else{let c=new oe(null);return s.foreach((u,f)=>{const d=pe(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),ea(t,e,n,c,i,r,a,o)}}function dw(t,e,n,s,i){const r=e.serverCache,o=fh(e,r.getNode(),r.isFullyInitialized()||K(n),r.isFiltered());return yh(t,o,n,s,mh,i)}function hw(t,e,n,s,i,r){let o;if(Gi(s,n)!=null)return e;{const a=new ll(s,e,i),l=e.eventCache.getNode();let c;if(K(n)||V(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=zi(s,An(e));else{const f=e.serverCache.getNode();T(f instanceof F,"serverChildren would be complete if leaf node"),u=ol(s,f)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=V(n);let f=al(s,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,ce(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,F.EMPTY_NODE,ce(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=zi(s,An(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Gi(s,Q())!=null,Is(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new tl(s.getIndex()),r=PE(s);this.processor_=ow(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(F.EMPTY_NODE,a.getNode(),null),u=new Qt(l,o.isFullyInitialized(),i.filtersNodes()),f=new Qt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Sr(f,u),this.eventGenerator_=new UE(this.query_)}get query(){return this.query_}}function _w(t){return t.viewCache_.serverCache.getNode()}function gw(t){return Ki(t.viewCache_)}function mw(t,e){const n=An(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(V(e)).isEmpty())?n.getChild(e):null}function _u(t){return t.eventRegistrations_.length===0}function yw(t,e){t.eventRegistrations_.push(e)}function gu(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function mu(t,e,n,s){e.type===st.MERGE&&e.source.queryId!==null&&(T(An(t.viewCache_),"We should always have a full cache before handling merges"),T(Ki(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=lw(t.processor_,i,e,n,s);return aw(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,vh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function vw(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(r,o)=>{s.push(Gn(r,o))}),n.isFullyInitialized()&&s.push(ch(n.getNode())),vh(t,s,n.getNode(),e)}function vh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return $E(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji;class bh{constructor(){this.views=new Map}}function bw(t){T(!Ji,"__referenceConstructor has already been defined"),Ji=t}function Ew(){return T(Ji,"Reference.ts has not been loaded"),Ji}function ww(t){return t.views.size===0}function cl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),mu(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(mu(o,e,n,s));return r}}function Eh(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=zi(n,i?s:null),l=!1;a?l=!0:s instanceof F?(a=ol(n,s),l=!1):(a=F.EMPTY_NODE,l=!1);const c=Sr(new Qt(a,l,!1),new Qt(s,i,!1));return new pw(e,c)}return o}function Cw(t,e,n,s,i,r){const o=Eh(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),yw(o,n),vw(o,n)}function Sw(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Xt(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(gu(c,n,s)),_u(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(gu(l,n,s)),_u(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Xt(t)&&r.push(new(Ew())(e._repo,e._path)),{removed:r,events:o}}function wh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Kt(t,e){let n=null;for(const s of t.views.values())n=n||mw(s,e);return n}function Ch(t,e){if(e._queryParams.loadsAllData())return Ir(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Sh(t,e){return Ch(t,e)!=null}function Xt(t){return Ir(t)!=null}function Ir(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi;function Tw(t){T(!Qi,"__referenceConstructor has already been defined"),Qi=t}function Iw(){return T(Qi,"Reference.ts has not been loaded"),Qi}let Aw=1;class yu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=nw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Rw(t,e,n,s,i){return qE(t.pendingWriteTree_,e,n,s,i),i?is(t,new In(sl(),e,n)):[]}function Nw(t,e,n,s){VE(t.pendingWriteTree_,e,n,s);const i=oe.fromObject(n);return is(t,new Yn(sl(),e,i))}function _n(t,e,n=!1){const s=KE(t.pendingWriteTree_,e);if(zE(t.pendingWriteTree_,e)){let r=new oe(null);return s.snap!=null?r=r.set(Q(),!0):Re(s.children,o=>{r=r.set(new te(o),!0)}),is(t,new Vi(s.path,r,n))}else return[]}function ri(t,e,n){return is(t,new In(il(),e,n))}function Ow(t,e,n){const s=oe.fromObject(n);return is(t,new Yn(il(),e,s))}function xw(t,e){return is(t,new qs(il(),e))}function Pw(t,e,n){const s=ul(t,n);if(s){const i=fl(s),r=i.path,o=i.queryId,a=Fe(r,e),l=new qs(rl(o),a);return dl(t,r,l)}else return[]}function Xi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Sh(o,e))){const l=Sw(o,e,n,s);ww(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(r,(d,g)=>Xt(g));if(u&&!f){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=Mw(d);for(let _=0;_<g.length;++_){const v=g[_],E=v.query,x=Nh(t,v);t.listenProvider_.startListening(Rs(E),Vs(t,E),x.hashFn,x.onComplete)}}}!f&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Rs(e),null):c.forEach(d=>{const g=t.queryToTagMap.get(Ar(d));t.listenProvider_.stopListening(Rs(d),g)}))}Lw(t,c)}return a}function Th(t,e,n,s){const i=ul(t,s);if(i!=null){const r=fl(i),o=r.path,a=r.queryId,l=Fe(o,e),c=new In(rl(a),l,n);return dl(t,o,c)}else return[]}function Dw(t,e,n,s){const i=ul(t,s);if(i){const r=fl(i),o=r.path,a=r.queryId,l=Fe(o,e),c=oe.fromObject(n),u=new Yn(rl(a),l,c);return dl(t,o,u)}else return[]}function ta(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const _=Fe(d,i);r=r||Kt(g,_),o=o||Xt(g)});let a=t.syncPointTree_.get(i);a?(o=o||Xt(a),r=r||Kt(a,Q())):(a=new bh,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=Kt(_,Q());v&&(r=r.updateImmediateChild(g,v))}));const c=Sh(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ar(e);T(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=Fw();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=Tr(t.pendingWriteTree_,i);let f=Cw(a,e,n,u,r,l);if(!c&&!o&&!s){const d=Ch(a,e);f=f.concat(Bw(t,e,d))}return f}function Ih(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Fe(o,e),c=Kt(a,l);if(c)return c});return ph(i,e,r,n,!0)}function kw(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const f=Fe(c,n);s=s||Kt(u,f)});let i=t.syncPointTree_.get(n);i?s=s||Kt(i,Q()):(i=new bh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Qt(s,!0,!1):null,a=Tr(t.pendingWriteTree_,e._path),l=Eh(i,e,a,r?o.getNode():F.EMPTY_NODE,r);return gw(l)}function is(t,e){return Ah(e,t.syncPointTree_,null,Tr(t.pendingWriteTree_,Q()))}function Ah(t,e,n,s){if(K(t.path))return Rh(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=Kt(i,Q()));let r=[];const o=V(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=_h(s,o);r=r.concat(Ah(a,l,c,u))}return i&&(r=r.concat(cl(i,t,s,n))),r}}function Rh(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=Kt(i,Q()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=_h(s,o),u=t.operationForChild(o);u&&(r=r.concat(Rh(u,a,l,c)))}),i&&(r=r.concat(cl(i,t,s,n))),r}function Nh(t,e){const n=e.query,s=Vs(t,n);return{hashFn:()=>(_w(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Pw(t,n._path,s):xw(t,n._path);{const r=Ob(i,n);return Xi(t,n,null,r)}}}}function Vs(t,e){const n=Ar(e);return t.queryToTagMap.get(n)}function Ar(t){return t._path.toString()+"$"+t._queryIdentifier}function ul(t,e){return t.tagToQueryMap.get(e)}function fl(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new te(t.substr(0,e))}}function dl(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=Tr(t.pendingWriteTree_,e);return cl(s,n,i,null)}function Mw(t){return t.fold((e,n,s)=>{if(n&&Xt(n))return[Ir(n)];{let i=[];return n&&(i=wh(n)),Re(s,(r,o)=>{i=i.concat(o)}),i}})}function Rs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Iw())(t._repo,t._path):t}function Lw(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ar(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Fw(){return Aw++}function Bw(t,e,n){const s=e._path,i=Vs(t,e),r=Nh(t,n),o=t.listenProvider_.startListening(Rs(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!Xt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!K(c)&&u&&Xt(u))return[Ir(u).query];{let d=[];return u&&(d=d.concat(wh(u).map(g=>g.query))),Re(f,(g,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Rs(u),Vs(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new hl(n)}node(){return this.node_}}class pl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new pl(this.syncTree_,n)}node(){return Ih(this.syncTree_,this.path_)}}const Uw=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},vu=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return $w(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Hw(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},$w=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},Hw=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Oh=function(t,e,n,s){return _l(e,new pl(n,t),s)},jw=function(t,e,n){return _l(t,new hl(e),n)};function _l(t,e,n){const s=t.getPriority().val(),i=vu(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=vu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ee(a,Se(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ee(i))),o.forEachChild(_e,(a,l)=>{const c=_l(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ml(t,e){let n=e instanceof te?e:new te(e),s=t,i=V(n);for(;i!==null;){const r=Kn(s.node.children,i)||{children:{},childCount:0};s=new gl(i,s,r),n=ce(n),i=V(n)}return s}function rs(t){return t.node.value}function xh(t,e){t.node.value=e,na(t)}function Ph(t){return t.node.childCount>0}function Ww(t){return rs(t)===void 0&&!Ph(t)}function Rr(t,e){Re(t.node.children,(n,s)=>{e(new gl(n,t,s))})}function Dh(t,e,n,s){n&&!s&&e(t),Rr(t,i=>{Dh(i,e,!0,s)}),n&&s&&e(t)}function qw(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function oi(t){return new te(t.parent===null?t.name:oi(t.parent)+"/"+t.name)}function na(t){t.parent!==null&&Vw(t.parent,t.name,t)}function Vw(t,e,n){const s=Ww(n),i=bt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,na(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,na(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=/[\[\].#$\/\u0000-\u001F\u007F]/,zw=/[\[\].#$\u0000-\u001F\u007F]/,fo=10*1024*1024,yl=function(t){return typeof t=="string"&&t.length!==0&&!Kw.test(t)},kh=function(t){return typeof t=="string"&&t.length!==0&&!zw.test(t)},Gw=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),kh(t)},Yw=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ka(t)||t&&typeof t=="object"&&bt(t,".sv")},vl=function(t,e,n){const s=n instanceof te?new uE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+dn(s));if(typeof e=="function")throw new Error(t+"contains a function "+dn(s)+" with contents = "+e.toString());if(Ka(e))throw new Error(t+"contains "+e.toString()+" "+dn(s));if(typeof e=="string"&&e.length>fo/3&&br(e)>fo)throw new Error(t+"contains a string greater than "+fo+" utf8 bytes "+dn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Re(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!yl(o)))throw new Error(t+" contains an invalid key ("+o+") "+dn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fE(s,o),vl(t,a,s),dE(s)}),i&&r)throw new Error(t+' contains ".value" child '+dn(s)+" in addition to actual children.")}},Jw=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=$s(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!yl(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(cE);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Xe(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Qw=function(t,e,n,s){const i=qa(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Re(e,(o,a)=>{const l=new te(o);if(vl(i,a,pe(n,l)),Qa(l)===".priority"&&!Yw(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),Jw(i,r)},Mh=function(t,e,n,s){if(!kh(n))throw new Error(qa(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Xw=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Mh(t,e,n)},Zw=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!yl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Gw(n))throw new Error(qa(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bl(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Xa(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Lh(t,e,n){bl(t,n),Fh(t,s=>Xa(s,e))}function mt(t,e,n){bl(t,n),Fh(t,s=>Xe(s,e)||Xe(e,s))}function Fh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(tC(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function tC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ss&&Ie("event: "+n.toString()),ss(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="repo_interrupt",sC=25;class iC{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qi(),this.transactionQueueTree_=new gl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rC(t,e,n){if(t.stats_=Ya(t.repoInfo_),t.forceRestClient_||kb())t.server_=new Wi(t.repoInfo_,(s,i,r,o)=>{bu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Eu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Rt(t.repoInfo_,e,(s,i,r,o)=>{bu(t,s,i,r,o)},s=>{Eu(t,s)},s=>{aC(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Ub(t.repoInfo_,()=>new BE(t.stats_,t.server_)),t.infoData_=new DE,t.infoSyncTree_=new yu({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=ri(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),wl(t,"connected",!1),t.serverSyncTree_=new yu({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);mt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function oC(t){const n=t.infoData_.getNode(new te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function El(t){return Uw({timestamp:oC(t)})}function bu(t,e,n,s,i){t.dataUpdateCount++;const r=new te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Bi(n,c=>Se(c));o=Dw(t.serverSyncTree_,r,l,i)}else{const l=Se(n);o=Th(t.serverSyncTree_,r,l,i)}else if(s){const l=Bi(n,c=>Se(c));o=Ow(t.serverSyncTree_,r,l)}else{const l=Se(n);o=ri(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ks(t,r)),mt(t.eventQueue_,a,o)}function Eu(t,e){wl(t,"connected",e),e===!1&&uC(t)}function aC(t,e){Re(e,(n,s)=>{wl(t,n,s)})}function wl(t,e,n){const s=new te("/.info/"+e),i=Se(n);t.infoData_.updateSnapshot(s,i);const r=ri(t.infoSyncTree_,s,i);mt(t.eventQueue_,s,r)}function Bh(t){return t.nextWriteId_++}function lC(t,e,n){const s=kw(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Se(i).withIndex(e._queryParams.getIndex());ta(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ri(t.serverSyncTree_,e._path,r);else{const a=Vs(t.serverSyncTree_,e);o=Th(t.serverSyncTree_,e._path,r,a)}return mt(t.eventQueue_,e._path,o),Xi(t.serverSyncTree_,e,n,null,!0),r},i=>(Nr(t,"get for query "+be(e)+" failed: "+i),Promise.reject(new Error(i))))}function cC(t,e,n,s){Nr(t,"update",{path:e.toString(),value:n});let i=!0;const r=El(t),o={};if(Re(n,(a,l)=>{i=!1,o[a]=Oh(pe(e,a),Se(l),t.serverSyncTree_,r)}),i)Ie("update() called with empty data.  Don't do anything."),wu(t,s,"ok",void 0);else{const a=Bh(t),l=Nw(t.serverSyncTree_,e,o,a);bl(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const f=c==="ok";f||je("update at "+e+" failed: "+c);const d=_n(t.serverSyncTree_,a,!f),g=d.length>0?Ks(t,e):e;mt(t.eventQueue_,g,d),wu(t,s,c,u)}),Re(n,c=>{const u=Wh(t,pe(e,c));Ks(t,u)}),mt(t.eventQueue_,e,[])}}function uC(t){Nr(t,"onDisconnectEvents");const e=El(t),n=qi();Yo(t.onDisconnect_,Q(),(i,r)=>{const o=Oh(i,r,t.serverSyncTree_,e);uh(n,i,o)});let s=[];Yo(n,Q(),(i,r)=>{s=s.concat(ri(t.serverSyncTree_,i,r));const o=Wh(t,i);Ks(t,o)}),t.onDisconnect_=qi(),mt(t.eventQueue_,Q(),s)}function fC(t,e,n){let s;V(e._path)===".info"?s=ta(t.infoSyncTree_,e,n):s=ta(t.serverSyncTree_,e,n),Lh(t.eventQueue_,e._path,s)}function dC(t,e,n){let s;V(e._path)===".info"?s=Xi(t.infoSyncTree_,e,n):s=Xi(t.serverSyncTree_,e,n),Lh(t.eventQueue_,e._path,s)}function hC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(nC)}function Nr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ie(n,...e)}function wu(t,e,n,s){e&&ss(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Uh(t,e,n){return Ih(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function Cl(t,e=t.transactionQueueTree_){if(e||Or(t,e),rs(e)){const n=Hh(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&pC(t,oi(e),n)}else Ph(e)&&Rr(e,n=>{Cl(t,n)})}function pC(t,e,n){const s=n.map(c=>c.currentWriteId),i=Uh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Fe(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Nr(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(_n(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Or(t,ml(t.transactionQueueTree_,e)),Cl(t,t.transactionQueueTree_),mt(t.eventQueue_,e,u);for(let d=0;d<f.length;d++)ss(f[d])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{je("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Ks(t,e)}},o)}function Ks(t,e){const n=$h(t,e),s=oi(n),i=Hh(t,n);return _C(t,i,s),s}function _C(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Fe(n,l.path);let u=!1,f;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,i=i.concat(_n(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=sC)u=!0,f="maxretry",i=i.concat(_n(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Uh(t,l.path,o);l.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){vl("transaction failed: Data returned ",g,l.path);let _=Se(g);typeof g=="object"&&g!=null&&bt(g,".priority")||(_=_.updatePriority(d.getPriority()));const E=l.currentWriteId,x=El(t),P=jw(_,d,x);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=P,l.currentWriteId=Bh(t),o.splice(o.indexOf(E),1),i=i.concat(Rw(t.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),i=i.concat(_n(t.serverSyncTree_,E,!0))}else u=!0,f="nodata",i=i.concat(_n(t.serverSyncTree_,l.currentWriteId,!0))}mt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}Or(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ss(s[a]);Cl(t,t.transactionQueueTree_)}function $h(t,e){let n,s=t.transactionQueueTree_;for(n=V(e);n!==null&&rs(s)===void 0;)s=ml(s,n),e=ce(e),n=V(e);return s}function Hh(t,e){const n=[];return jh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function jh(t,e,n){const s=rs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Rr(e,i=>{jh(t,i,n)})}function Or(t,e){const n=rs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,xh(e,n.length>0?n:void 0)}Rr(e,s=>{Or(t,s)})}function Wh(t,e){const n=oi($h(t,e)),s=ml(t.transactionQueueTree_,e);return qw(s,i=>{ho(t,i)}),ho(t,s),Dh(s,i=>{ho(t,i)}),n}function ho(t,e){const n=rs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(_n(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?xh(e,void 0):n.length=r+1,mt(t.eventQueue_,oi(e),i);for(let o=0;o<s.length;o++)ss(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function mC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):je(`Invalid query segment '${n}' in query '${t}'`)}return e}const Cu=function(t,e){const n=yC(t),s=n.namespace;n.domain==="firebase.com"&&xt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&xt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Tb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new zd(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new te(n.pathString)}},yC=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(i=gC(t.substring(u,f)));const d=mC(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+be(this.snapshot.exportVal())}}class bC{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return K(this._path)?null:Qa(this._path)}get ref(){return new kt(this._repo,this._path)}get _queryIdentifier(){const e=lu(this._queryParams),n=za(e);return n==="{}"?"default":n}get _queryObject(){return lu(this._queryParams)}isEqual(e){if(e=sn(e),!(e instanceof Sl))return!1;const n=this._repo===e._repo,s=Xa(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+lE(this._path)}}class kt extends Sl{constructor(e,n){super(e,n,new nl,!1)}get parent(){const e=nh(this._path);return e===null?null:new kt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class zs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new te(e),s=sa(this.ref,e);return new zs(this._node.getChild(n),s,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new zs(i,sa(this.ref,s),_e)))}hasChild(e){const n=new te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function EC(t,e){return t=sn(t),t._checkNotDeleted("ref"),sa(t._root,e)}function sa(t,e){return t=sn(t),V(t._path)===null?Xw("child","path",e):Mh("child","path",e),new kt(t._repo,pe(t._path,e))}function wC(t,e){Qw("update",e,t._path);const n=new yr;return cC(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function CC(t){t=sn(t);const e=new qh(()=>{}),n=new xr(e);return lC(t._repo,t,n).then(s=>new zs(s,new kt(t._repo,t._path),t._queryParams.getIndex()))}class xr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new vC("value",this,new zs(e.snapshotNode,new kt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new bC(this,e,n):null}matches(e){return e instanceof xr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function SC(t,e,n,s,i){const r=new qh(n,void 0),o=new xr(r);return fC(t._repo,t,o),()=>dC(t._repo,t,o)}function TC(t,e,n,s){return SC(t,"value",e)}bw(kt);Tw(kt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC="FIREBASE_DATABASE_EMULATOR_HOST",ia={};let AC=!1;function RC(t,e,n,s){t.repoInfo_=new zd(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function NC(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||xt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Cu(r,i),a=o.repoInfo,l;typeof process<"u"&&qc&&(l=qc[IC]),l?(r=`http://${l}?ns=${a.namespace}`,o=Cu(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new Lb(t.name,t.options,e);Zw("Invalid Firebase Database URL",o),K(o.path)||xt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=xC(a,t,c,new Mb(t.name,n));return new PC(u,t)}function OC(t,e){const n=ia[e];(!n||n[t.key]!==t)&&xt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),hC(t),delete n[t.key]}function xC(t,e,n,s){let i=ia[e.name];i||(i={},ia[e.name]=i);let r=i[t.toURLString()];return r&&xt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new iC(t,AC,n,s),i[t.toURLString()]=r,r}class PC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new kt(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(OC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xt("Cannot call "+e+" on a deleted database.")}}function DC(t=Od(),e){const n=wr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Zy("database");s&&kC(n,...s)}return n}function kC(t,e,n,s={}){t=sn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&xt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&xt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ii(Ii.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:ev(s.mockUserToken,t.app.options.projectId);r=new Ii(o)}RC(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t){vb(cb),Yt(new Nt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return NC(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),_t(Vc,Kc,t),_t(Vc,Kc,"esm2017")}Rt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Rt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};MC();var LC="firebase",FC="10.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t(LC,FC,"app");const BC={apiKey:"AIzaSyBg4vVrlcQiiYaBoN4RxVZNC-NNib1yKMQ",authDomain:"myapp-9c0d3.firebaseapp.com",projectId:"myapp-9c0d3",storageBucket:"myapp-9c0d3.appspot.com",messagingSenderId:"721166739682",appId:"1:721166739682:web:5838f60a79104768fc16bb",databaseURL:"https://myapp-9c0d3-default-rtdb.firebaseio.com/"},Vh=Nd(BC),UC=DC(Vh),ai={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Qn={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},Be={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},$C={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom",NONE:"none"},Kh={dangerouslyHTMLString:!1,multiple:!0,position:ai.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},HC={rtl:!1,newestOnTop:!1,toastClassName:""},zh={...Kh,...HC};({...Kh,type:Be.DEFAULT});var Z=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(Z||{}),ra=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(ra||{});const jC={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},WC={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},qC={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},VC={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"},Su="Toastify--animate Toastify__none-enter";function Gh(t,e=!1){var n;let s=jC;if(!t||typeof t=="string")switch(t){case"flip":s=VC;break;case"zoom":s=qC;break;case"slide":s=WC;break}else s=t;if(e)s.enter=Su;else if(s.enter===Su){const i=(n=s.exit.split("__")[1])==null?void 0:n.split("-")[0];s.enter=`Toastify--animate Toastify__${i}-enter`}return s}function KC(t){return t.containerId||String(t.position)}const Pr="will-unmount";function zC(t=ai.TOP_RIGHT){return!!document.querySelector(`.${Z.CSS_NAMESPACE}__toast-container--${t}`)}function GC(t=ai.TOP_RIGHT){return`${Z.CSS_NAMESPACE}__toast-container--${t}`}function YC(t,e,n=!1){const s=[`${Z.CSS_NAMESPACE}__toast-container`,`${Z.CSS_NAMESPACE}__toast-container--${t}`,n?`${Z.CSS_NAMESPACE}__toast-container--rtl`:null].filter(Boolean).join(" ");return qn(e)?e({position:t,rtl:n,defaultClassName:s}):`${s} ${e||""}`}function JC(t){var e;const{position:n,containerClassName:s,rtl:i=!1,style:r={}}=t,o=Z.CSS_NAMESPACE,a=GC(n),l=document.querySelector(`.${o}`),c=document.querySelector(`.${a}`),u=!!c&&!((e=c.className)!=null&&e.includes(Pr)),f=l||document.createElement("div"),d=document.createElement("div");d.className=YC(n,s,i),d.dataset.testid=`${Z.CSS_NAMESPACE}__toast-container--${n}`,d.id=KC(t);for(const g in r)if(Object.prototype.hasOwnProperty.call(r,g)){const _=r[g];d.style[g]=_}return l||(f.className=Z.CSS_NAMESPACE,document.body.appendChild(f)),u||f.appendChild(d),d}function oa(t){var e,n,s;const i=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),r=document.getElementById(i);r&&r.removeEventListener("animationend",oa,!1);try{Gs[i].unmount(),(s=document.getElementById(i))==null||s.remove(),delete Gs[i],delete Te[i]}catch{}}const Gs=vt({});function QC(t,e){const n=document.getElementById(String(e));n&&(Gs[n.id]=t)}function aa(t,e=!0){const n=String(t);if(!Gs[n])return;const s=document.getElementById(n);s&&s.classList.add(Pr),e?(ZC(t),s&&s.addEventListener("animationend",oa,!1)):oa(n),yt.items=yt.items.filter(i=>i.containerId!==t)}function XC(t){for(const e in Gs)aa(e,t);yt.items=[]}function Yh(t,e){const n=document.getElementById(t.toastId);if(n){let s=t;s={...s,...Gh(s.transition)};const i=s.appendPosition?`${s.exit}--${s.position}`:s.exit;n.className+=` ${i}`,e&&e(n)}}function ZC(t){for(const e in Te)if(e===t)for(const n of Te[e]||[])Yh(n)}function eS(t){const e=Xn().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function Tl(t){return document.getElementById(t)}function tS(t){const e=Tl(t.containerId);return e&&e.classList.contains(Pr)}function Tu(t){var e;const n=Vn(t.content)?$(t.content.props):null;return n??$((e=t.data)!=null?e:{})}function nS(t){return t?yt.items.filter(e=>e.containerId===t).length>0:yt.items.length>0}function sS(){if(yt.items.length>0){const t=yt.items.shift();Ai(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const Te=vt({}),yt=vt({items:[]});function Xn(){const t=$(Te);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function iS(t){return Xn().find(e=>e.toastId===t)}function Ai(t,e={}){if(tS(e)){const n=Tl(e.containerId);n&&n.addEventListener("animationend",la.bind(null,t,e),!1)}else la(t,e)}function la(t,e={}){const n=Tl(e.containerId);n&&n.removeEventListener("animationend",la.bind(null,t,e),!1);const s=Te[e.containerId]||[],i=s.length>0;if(!i&&!zC(e.position)){const r=JC(e),o=$f(CS,e);o.mount(r),QC(o,r.id)}i&&!e.updateId&&(e.position=s[0].position),Xs(()=>{e.updateId?ze.update(e):ze.add(t,e)})}const ze={add(t,e){const{containerId:n=""}=e;n&&(Te[n]=Te[n]||[],Te[n].find(s=>s.toastId===e.toastId)||setTimeout(()=>{var s,i;e.newestOnTop?(s=Te[n])==null||s.unshift(e):(i=Te[n])==null||i.push(e),e.onOpen&&e.onOpen(Tu(e))},e.delay||0))},remove(t){if(t){const e=eS(t);if(e){const n=Te[e];let s=n.find(i=>i.toastId===t);Te[e]=n.filter(i=>i.toastId!==t),!Te[e].length&&!nS(e)&&aa(e,!1),sS(),Xs(()=>{s!=null&&s.onClose&&(s.onClose(Tu(s)),s=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){Te[e]=Te[e]||[];const n=Te[e].find(r=>r.toastId===t.toastId),s=(n==null?void 0:n.position)!==t.position||(n==null?void 0:n.transition)!==t.transition,i={...t,disabledEnterTransition:!s,updateId:void 0};ze.dismissForce(t==null?void 0:t.toastId),setTimeout(()=>{ne(i.content,i)},t.delay||0)}},clear(t,e=!0){t?aa(t,e):XC(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,s=document.getElementById(n);s&&(s.removeEventListener("animationend",ze.dismissCallback,!1),setTimeout(()=>{ze.remove(n)}))},dismiss(t){if(t){const e=Xn();for(const n of e)if(n.toastId===t){Yh(n,s=>{s.addEventListener("animationend",ze.dismissCallback,!1)});break}}},dismissForce(t){if(t){const e=Xn();for(const n of e)if(n.toastId===t){const s=document.getElementById(t);s&&(s.remove(),s.removeEventListener("animationend",ze.dismissCallback,!1),ze.remove(t));break}}}},Jh=vt({}),Zi=vt({});function Qh(){return Math.random().toString(36).substring(2,9)}function rS(t){return typeof t=="number"&&!isNaN(t)}function ca(t){return typeof t=="string"}function qn(t){return typeof t=="function"}function Dr(...t){return Dt(...t)}function Ri(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function oS(t={}){Jh[`${Z.CSS_NAMESPACE}-default-options`]=t}function aS(){return Jh[`${Z.CSS_NAMESPACE}-default-options`]||zh}function lS(){return document.documentElement.classList.contains("dark")?"dark":"light"}var Ni=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(Ni||{});const Xh={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},disabledEnterTransition:{type:Boolean,required:!1,default:!1},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:ai.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:Qn.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:Be.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},cS={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:Be.DEFAULT},theme:{type:String,required:!1,default:Qn.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},uS=nn({name:"ProgressBar",props:cS,setup(t,{attrs:e}){const n=ht(),s=Ce(()=>t.hide?"true":"false"),i=Ce(()=>({...e.style||{},animationDuration:`${t.autoClose===!0?5e3:t.autoClose}ms`,animationPlayState:t.isRunning?"running":"paused",opacity:t.hide||t.autoClose===!1?0:1,transform:t.controlledProgress?`scaleX(${t.progress})`:"none"})),r=Ce(()=>[`${Z.CSS_NAMESPACE}__progress-bar`,t.controlledProgress?`${Z.CSS_NAMESPACE}__progress-bar--controlled`:`${Z.CSS_NAMESPACE}__progress-bar--animated`,`${Z.CSS_NAMESPACE}__progress-bar-theme--${t.theme}`,`${Z.CSS_NAMESPACE}__progress-bar--${t.type}`,t.rtl?`${Z.CSS_NAMESPACE}__progress-bar--rtl`:null].filter(Boolean).join(" ")),o=Ce(()=>`${r.value} ${(e==null?void 0:e.class)||""}`),a=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},l=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),a())},c=Ce(()=>t.controlledProgress?null:l),u=Ce(()=>t.controlledProgress?l:null);return bi(()=>{n.value&&(a(),n.value.onanimationend=c.value,n.value.ontransitionend=u.value)}),()=>J("div",{ref:n,role:"progressbar","aria-hidden":s.value,"aria-label":"notification timer",class:o.value,style:i.value},null)}}),fS=nn({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:Qn.AUTO},type:{type:String,required:!1,default:Qn.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>J("button",{class:`${Z.CSS_NAMESPACE}__close-button ${Z.CSS_NAMESPACE}__close-button--${t.theme}`,type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[J("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[J("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),kr=({theme:t,type:e,path:n,...s})=>J("svg",Dt({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${e})`},s),[J("path",{d:n},null)]);function dS(t){return J(kr,Dt(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function hS(t){return J(kr,Dt(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function pS(t){return J(kr,Dt(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function _S(t){return J(kr,Dt(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function gS(){return J("div",{class:`${Z.CSS_NAMESPACE}__spinner`},null)}const ua={info:hS,warning:dS,success:pS,error:_S,spinner:gS},mS=t=>t in ua;function yS({theme:t,type:e,isLoading:n,icon:s}){let i;const r={theme:t,type:e};return n?i=ua.spinner():s===!1?i=void 0:Ri(s)?i=$(s):qn(s)?i=s(r):Vn(s)?i=Cn(s,r):ca(s)||rS(s)?i=s:mS(e)&&(i=ua[e](r)),i}const vS=()=>{};function bS(t,e,n=Z.COLLAPSE_DURATION){const{scrollHeight:s,style:i}=t,r=n;requestAnimationFrame(()=>{i.minHeight="initial",i.height=s+"px",i.transition=`all ${r}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,r)})})}function ES(t){const e=ht(!1),n=ht(!1),s=ht(!1),i=ht(Ni.Enter),r=vt({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||Z.COLLAPSE_DURATION}),o=r.done||vS,a=Ce(()=>r.appendPosition?`${r.enter}--${r.position}`:r.enter),l=Ce(()=>r.appendPosition?`${r.exit}--${r.position}`:r.exit),c=Ce(()=>t.pauseOnHover?{onMouseenter:E,onMouseleave:v}:{});function u(){const P=a.value.split(" ");d().addEventListener(ra.ENTRANCE_ANIMATION_END,v,{once:!0});const D=M=>{const fe=d();M.target===fe&&(fe.dispatchEvent(new Event(ra.ENTRANCE_ANIMATION_END)),fe.removeEventListener("animationend",D),fe.removeEventListener("animationcancel",D),i.value===Ni.Enter&&M.type!=="animationcancel"&&fe.classList.remove(...P))},O=()=>{const M=d();M.classList.add(...P),M.addEventListener("animationend",D),M.addEventListener("animationcancel",D)};t.pauseOnFocusLoss&&g(),O()}function f(){if(!d())return;const P=()=>{const O=d();O.removeEventListener("animationend",P),r.collapse?bS(O,o,r.collapseDuration):o()},D=()=>{const O=d();i.value=Ni.Exit,O&&(O.className+=` ${l.value}`,O.addEventListener("animationend",P))};n.value||(s.value?P():setTimeout(D))}function d(){return t.toastRef.value}function g(){document.hasFocus()||E(),window.addEventListener("focus",v),window.addEventListener("blur",E)}function _(){window.removeEventListener("focus",v),window.removeEventListener("blur",E)}function v(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function E(){e.value=!1}function x(P){P&&(P.stopPropagation(),P.preventDefault()),n.value=!1}return bi(f),bi(()=>{const P=Xn();n.value=P.findIndex(D=>D.toastId===r.toastId)>-1}),bi(()=>{t.isLoading!==void 0&&(t.loading.value?E():v())}),Pa(u),lr(()=>{t.pauseOnFocusLoss&&_()}),{isIn:n,isRunning:e,hideToast:x,eventHandlers:c}}const wS=nn({name:"ToastItem",inheritAttrs:!1,props:Xh,setup(t){const e=ht(),n=Ce(()=>!!t.isLoading),s=Ce(()=>t.progress!==void 0&&t.progress!==null),i=Ce(()=>yS(t)),r=Ce(()=>[`${Z.CSS_NAMESPACE}__toast`,`${Z.CSS_NAMESPACE}__toast-theme--${t.theme}`,`${Z.CSS_NAMESPACE}__toast--${t.type}`,t.rtl?`${Z.CSS_NAMESPACE}__toast--rtl`:void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:o,isIn:a,hideToast:l,eventHandlers:c}=ES({toastRef:e,loading:n,done:()=>{ze.remove(t.toastId)},...Gh(t.transition,t.disabledEnterTransition),...t});return()=>J("div",Dt({id:t.toastId,class:r.value,style:t.toastStyle||{},ref:e,"data-testid":`toast-item-${t.toastId}`,onClick:u=>{t.closeOnClick&&l(),t.onClick&&t.onClick(u)}},c.value),[J("div",{role:t.role,"data-testid":"toast-body",class:`${Z.CSS_NAMESPACE}__toast-body ${t.bodyClassName||""}`},[i.value!=null&&J("div",{"data-testid":`toast-icon-${t.type}`,class:[`${Z.CSS_NAMESPACE}__toast-icon`,t.isLoading?"":`${Z.CSS_NAMESPACE}--animate-icon ${Z.CSS_NAMESPACE}__zoom-enter`].join(" ")},[Ri(i.value)?mi($(i.value),{theme:t.theme,type:t.type}):qn(i.value)?i.value({theme:t.theme,type:t.type}):i.value]),J("div",{"data-testid":"toast-content"},[Ri(t.content)?mi($(t.content),{toastProps:$(t),closeToast:l,data:t.data}):qn(t.content)?t.content({toastProps:$(t),closeToast:l,data:t.data}):t.dangerouslyHTMLString?mi("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&J(fS,{theme:t.theme,closeToast:u=>{u.stopPropagation(),u.preventDefault(),l()}},null),Ri(t.closeButton)?mi($(t.closeButton),{closeToast:l,type:t.type,theme:t.theme}):qn(t.closeButton)?t.closeButton({closeToast:l,type:t.type,theme:t.theme}):null,J(uS,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:a.value,type:t.type,hide:t.hideProgressBar,isRunning:o.value,autoClose:t.autoClose,controlledProgress:s.value,progress:t.progress,closeToast:t.isLoading?void 0:l},null)])}});let Ns=0;function Zh(){typeof window>"u"||(Ns&&window.cancelAnimationFrame(Ns),Ns=window.requestAnimationFrame(Zh),Zi.lastUrl!==window.location.href&&(Zi.lastUrl=window.location.href,ze.clear()))}const CS=nn({name:"ToastifyContainer",inheritAttrs:!1,props:Xh,setup(t){const e=Ce(()=>t.containerId),n=Ce(()=>Te[e.value]||[]),s=Ce(()=>n.value.filter(i=>i.position===t.position));return Pa(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(Zh)}),lr(()=>{typeof window<"u"&&Ns&&(window.cancelAnimationFrame(Ns),Zi.lastUrl="")}),()=>J(Qe,null,[s.value.map(i=>{const{toastId:r=""}=i;return J(wS,Dt({key:r},i),null)})])}});let po=!1;function ep(){const t=[];return Xn().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(Pr)&&t.push(e)}),t}function SS(t){const e=ep().length,n=t??0;return n>0&&e+yt.items.length>=n}function TS(t){SS(t.limit)&&!t.updateId&&yt.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function rn(t,e,n={}){if(po)return;n=Dr(aS(),{type:e},$(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=Qh()),n={...n,content:t,containerId:n.containerId||String(n.position)};const s=Number(n==null?void 0:n.progress);return s<0&&(n.progress=0),s>1&&(n.progress=1),n.theme==="auto"&&(n.theme=lS()),TS(n),Zi.lastUrl=window.location.href,n.multiple?yt.items.length?n.updateId&&Ai(t,n):Ai(t,n):(po=!0,ne.clearAll(void 0,!1),setTimeout(()=>{Ai(t,n)},0),setTimeout(()=>{po=!1},390)),n.toastId}const ne=(t,e)=>rn(t,Be.DEFAULT,e);ne.info=(t,e)=>rn(t,Be.DEFAULT,{...e,type:Be.INFO});ne.error=(t,e)=>rn(t,Be.DEFAULT,{...e,type:Be.ERROR});ne.warning=(t,e)=>rn(t,Be.DEFAULT,{...e,type:Be.WARNING});ne.warn=ne.warning;ne.success=(t,e)=>rn(t,Be.DEFAULT,{...e,type:Be.SUCCESS});ne.loading=(t,e)=>rn(t,Be.DEFAULT,Dr(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));ne.dark=(t,e)=>rn(t,Be.DEFAULT,Dr(e,{theme:Qn.DARK}));ne.remove=t=>{t?ze.dismiss(t):ze.clear()};ne.clearAll=(t,e)=>{Xs(()=>{ze.clear(t,e)})};ne.isActive=t=>{let e=!1;return e=ep().findIndex(n=>n.toastId===t)>-1,e};ne.update=(t,e={})=>{setTimeout(()=>{const n=iS(t);if(n){const s=$(n),{content:i}=s,r={...s,...e,toastId:e.toastId||t,updateId:Qh()},o=r.render||i;delete r.render,rn(o,r.type,r)}},0)};ne.done=t=>{ne.update(t,{isLoading:!1,progress:1})};ne.promise=IS;function IS(t,{pending:e,error:n,success:s},i){var r,o,a;let l;const c={...i||{},autoClose:!1};e&&(l=ca(e)?ne.loading(e,c):ne.loading(e.render,{...c,...e}));const u={autoClose:(r=i==null?void 0:i.autoClose)!=null?r:!0,closeOnClick:(o=i==null?void 0:i.closeOnClick)!=null?o:!0,closeButton:(a=i==null?void 0:i.autoClose)!=null?a:null,isLoading:void 0,draggable:null,delay:100},f=(g,_,v)=>{if(_==null){ne.remove(l);return}const E={type:g,...u,...i,data:v},x=ca(_)?{render:_}:_;return l?ne.update(l,{...E,...x,isLoading:!1}):ne(x.render,{...E,...x,isLoading:!1}),v},d=qn(t)?t():t;return d.then(g=>{f("success",s,g)}).catch(g=>{f("error",n,g)}),d}ne.POSITION=ai;ne.THEME=Qn;ne.TYPE=Be;ne.TRANSITIONS=$C;const AS={install(t,e={}){RS(e)}};typeof window<"u"&&(window.Vue3Toastify=AS);function RS(t={}){const e=Dr(zh,t);oS(e)}ve.create({baseURL:void 0,headers:{"Content-Type":"application/json"}});const NS=t=>{const e=EC(UC,"/");return TC(e,s=>{t(s.val()),ne("The tasks have been changed",{theme:"light",type:"info",position:"top-center",autoClose:3e3,transition:"slide",dangerouslyHTMLString:!0})}),{updateTask:(s,i)=>{const r={};let o;CC(e).then(a=>{if(o=a.val().tasks.findIndex(c=>c.id===s),typeof o=="number"&&o>=0)return r[`/tasks/${o}/description`]=i,wC(e,r)})}}},OS={key:0},xS={key:1,class:"table"},PS=nn({__name:"App",setup(t){const{table:e}=lm(yc()),{initTable:n}=yc(),{updateTask:s}=NS(n);return(i,r)=>{var o,a;return Ut(e)?(En(),wn("table",OS,[Wt("thead",null,[Wt("tr",null,[J(Ut(hm),{titles:((o=Ut(e))==null?void 0:o.titles)??[]},null,8,["titles"])])]),Wt("tbody",null,[J(Ut(pm),{fields:((a=Ut(e))==null?void 0:a.fields)??[],onUpdateTask:r[0]||(r[0]=(l,c)=>Ut(s)(l,c))},null,8,["fields"])])])):(En(),wn("main",xS,r[1]||(r[1]=[Wt("p",null,"Загрузка таблицы...",-1)])))}}}),tp="@firebase/installations",Il="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=1e4,sp=`w:${Il}`,ip="FIS_v2",DS="https://firebaseinstallations.googleapis.com/v1",kS=60*60*1e3,MS="installations",LS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Rn=new vr(MS,LS,FS);function rp(t){return t instanceof ns&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op({projectId:t}){return`${DS}/projects/${t}/installations`}function ap(t){return{token:t.token,requestStatus:2,expiresIn:US(t.expiresIn),creationTime:Date.now()}}async function lp(t,e){const s=(await e.json()).error;return Rn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function cp({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function BS(t,{refreshToken:e}){const n=cp(t);return n.append("Authorization",$S(e)),n}async function up(t){const e=await t();return e.status>=500&&e.status<600?t():e}function US(t){return Number(t.replace("s","000"))}function $S(t){return`${ip} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HS({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=op(t),i=cp(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:ip,appId:t.appId,sdkVersion:sp},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await up(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:ap(c.authToken)}}else throw await lp("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=/^[cdef][\w-]{21}$/,fa="";function qS(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=VS(t);return WS.test(n)?n:fa}catch{return fa}}function VS(t){return jS(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=new Map;function hp(t,e){const n=Mr(t);pp(n,e),KS(n,e)}function pp(t,e){const n=dp.get(t);if(n)for(const s of n)s(e)}function KS(t,e){const n=zS();n&&n.postMessage({key:t,fid:e}),GS()}let gn=null;function zS(){return!gn&&"BroadcastChannel"in self&&(gn=new BroadcastChannel("[Firebase] FID Change"),gn.onmessage=t=>{pp(t.data.key,t.data.fid)}),gn}function GS(){dp.size===0&&gn&&(gn.close(),gn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS="firebase-installations-database",JS=1,Nn="firebase-installations-store";let _o=null;function Al(){return _o||(_o=Er(YS,JS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Nn)}}})),_o}async function er(t,e){const n=Mr(t),i=(await Al()).transaction(Nn,"readwrite"),r=i.objectStore(Nn),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&hp(t,e.fid),e}async function _p(t){const e=Mr(t),s=(await Al()).transaction(Nn,"readwrite");await s.objectStore(Nn).delete(e),await s.done}async function Lr(t,e){const n=Mr(t),i=(await Al()).transaction(Nn,"readwrite"),r=i.objectStore(Nn),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&hp(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rl(t){let e;const n=await Lr(t.appConfig,s=>{const i=QS(s),r=XS(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===fa?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function QS(t){const e=t||{fid:qS(),registrationStatus:0};return gp(e)}function XS(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Rn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=ZS(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:eT(t)}:{installationEntry:e}}async function ZS(t,e){try{const n=await HS(t,e);return er(t.appConfig,n)}catch(n){throw rp(n)&&n.customData.serverCode===409?await _p(t.appConfig):await er(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function eT(t){let e=await Iu(t.appConfig);for(;e.registrationStatus===1;)await fp(100),e=await Iu(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Rl(t);return s||n}return e}function Iu(t){return Lr(t,e=>{if(!e)throw Rn.create("installation-not-found");return gp(e)})}function gp(t){return tT(t)?{fid:t.fid,registrationStatus:0}:t}function tT(t){return t.registrationStatus===1&&t.registrationTime+np<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT({appConfig:t,heartbeatServiceProvider:e},n){const s=sT(t,n),i=BS(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:sp,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await up(()=>fetch(s,a));if(l.ok){const c=await l.json();return ap(c)}else throw await lp("Generate Auth Token",l)}function sT(t,{fid:e}){return`${op(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nl(t,e=!1){let n;const s=await Lr(t.appConfig,r=>{if(!mp(r))throw Rn.create("not-registered");const o=r.authToken;if(!e&&oT(o))return r;if(o.requestStatus===1)return n=iT(t,e),r;{if(!navigator.onLine)throw Rn.create("app-offline");const a=lT(r);return n=rT(t,a),a}});return n?await n:s.authToken}async function iT(t,e){let n=await Au(t.appConfig);for(;n.authToken.requestStatus===1;)await fp(100),n=await Au(t.appConfig);const s=n.authToken;return s.requestStatus===0?Nl(t,e):s}function Au(t){return Lr(t,e=>{if(!mp(e))throw Rn.create("not-registered");const n=e.authToken;return cT(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function rT(t,e){try{const n=await nT(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await er(t.appConfig,s),n}catch(n){if(rp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _p(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await er(t.appConfig,s)}throw n}}function mp(t){return t!==void 0&&t.registrationStatus===2}function oT(t){return t.requestStatus===2&&!aT(t)}function aT(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+kS}function lT(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function cT(t){return t.requestStatus===1&&t.requestTime+np<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uT(t){const e=t,{installationEntry:n,registrationPromise:s}=await Rl(e);return s?s.catch(console.error):Nl(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fT(t,e=!1){const n=t;return await dT(n),(await Nl(n,e)).token}async function dT(t){const{registrationPromise:e}=await Rl(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(t){if(!t||!t.options)throw go("App Configuration");if(!t.name)throw go("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw go(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function go(t){return Rn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="installations",pT="installations-internal",_T=t=>{const e=t.getProvider("app").getImmediate(),n=hT(e),s=wr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},gT=t=>{const e=t.getProvider("app").getImmediate(),n=wr(e,yp).getImmediate();return{getId:()=>uT(n),getToken:i=>fT(n,i)}};function mT(){Yt(new Nt(yp,_T,"PUBLIC")),Yt(new Nt(pT,gT,"PRIVATE"))}mT();_t(tp,Il);_t(tp,Il,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT="/firebase-messaging-sw.js",vT="/firebase-cloud-messaging-push-scope",vp="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",bT="https://fcmregistrations.googleapis.com/v1",bp="google.c.a.c_id",ET="google.c.a.c_l",wT="google.c.a.ts",CT="google.c.a.e";var Ru;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Ru||(Ru={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Ys;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Ys||(Ys={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ST(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(n),i=new Uint8Array(s.length);for(let r=0;r<s.length;++r)i[r]=s.charCodeAt(r);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="fcm_token_details_db",TT=5,Nu="fcm_token_object_Store";async function IT(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(r=>r.name).includes(mo))return null;let e=null;return(await Er(mo,TT,{upgrade:async(s,i,r,o)=>{var a;if(i<2||!s.objectStoreNames.contains(Nu))return;const l=o.objectStore(Nu),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(i===2){const u=c;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:(a=u.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:Ct(u.vapidKey)}}}else if(i===3){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:Ct(u.auth),p256dh:Ct(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:Ct(u.vapidKey)}}}else if(i===4){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:Ct(u.auth),p256dh:Ct(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:Ct(u.vapidKey)}}}}}})).close(),await so(mo),await so("fcm_vapid_details_db"),await so("undefined"),AT(e)?e:null}function AT(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT="firebase-messaging-database",NT=1,Js="firebase-messaging-store";let yo=null;function Ep(){return yo||(yo=Er(RT,NT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Js)}}})),yo}async function OT(t){const e=wp(t),s=await(await Ep()).transaction(Js).objectStore(Js).get(e);if(s)return s;{const i=await IT(t.appConfig.senderId);if(i)return await Ol(t,i),i}}async function Ol(t,e){const n=wp(t),i=(await Ep()).transaction(Js,"readwrite");return await i.objectStore(Js).put(e,n),await i.done,e}function wp({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Pe=new vr("messaging","Messaging",xT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(t,e){const n=await Pl(t),s=Cp(e),i={method:"POST",headers:n,body:JSON.stringify(s)};let r;try{r=await(await fetch(xl(t.appConfig),i)).json()}catch(o){throw Pe.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(r.error){const o=r.error.message;throw Pe.create("token-subscribe-failed",{errorInfo:o})}if(!r.token)throw Pe.create("token-subscribe-no-token");return r.token}async function DT(t,e){const n=await Pl(t),s=Cp(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(s)};let r;try{r=await(await fetch(`${xl(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Pe.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(r.error){const o=r.error.message;throw Pe.create("token-update-failed",{errorInfo:o})}if(!r.token)throw Pe.create("token-update-no-token");return r.token}async function kT(t,e){const s={method:"DELETE",headers:await Pl(t)};try{const r=await(await fetch(`${xl(t.appConfig)}/${e}`,s)).json();if(r.error){const o=r.error.message;throw Pe.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Pe.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function xl({projectId:t}){return`${bT}/projects/${t}/registrations`}async function Pl({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Cp({p256dh:t,auth:e,endpoint:n,vapidKey:s}){const i={web:{endpoint:n,auth:e,p256dh:t}};return s!==vp&&(i.web.applicationPubKey=s),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=7*24*60*60*1e3;async function LT(t){const e=await BT(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Ct(e.getKey("auth")),p256dh:Ct(e.getKey("p256dh"))},s=await OT(t.firebaseDependencies);if(s){if(UT(s.subscriptionOptions,n))return Date.now()>=s.createTime+MT?FT(t,{token:s.token,createTime:Date.now(),subscriptionOptions:n}):s.token;try{await kT(t.firebaseDependencies,s.token)}catch(i){console.warn(i)}return Ou(t.firebaseDependencies,n)}else return Ou(t.firebaseDependencies,n)}async function FT(t,e){try{const n=await DT(t.firebaseDependencies,e),s=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Ol(t.firebaseDependencies,s),n}catch(n){throw n}}async function Ou(t,e){const s={token:await PT(t,e),createTime:Date.now(),subscriptionOptions:e};return await Ol(t,s),s.token}async function BT(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ST(e)})}function UT(t,e){const n=e.vapidKey===t.vapidKey,s=e.endpoint===t.endpoint,i=e.auth===t.auth,r=e.p256dh===t.p256dh;return n&&s&&i&&r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return $T(e,t),HT(e,t),jT(e,t),e}function $T(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const s=e.notification.body;s&&(t.notification.body=s);const i=e.notification.image;i&&(t.notification.image=i);const r=e.notification.icon;r&&(t.notification.icon=r)}function HT(t,e){e.data&&(t.data=e.data)}function jT(t,e){var n,s,i,r,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(s=e.fcmOptions)===null||s===void 0?void 0:s.link)!==null&&i!==void 0?i:(r=e.notification)===null||r===void 0?void 0:r.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(t){return typeof t=="object"&&!!t&&bp in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sp("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Sp("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Sp(t,e){const n=[];for(let s=0;s<t.length;s++)n.push(t.charAt(s)),s<e.length&&n.push(e.charAt(s));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t){if(!t||!t.options)throw vo("App Configuration Object");if(!t.name)throw vo("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const s of e)if(!n[s])throw vo(s);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function vo(t){return Pe.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,n,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=qT(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KT(t){try{t.swRegistration=await navigator.serviceWorker.register(yT,{scope:vT}),t.swRegistration.update().catch(()=>{})}catch(e){throw Pe.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zT(t,e){if(!e&&!t.swRegistration&&await KT(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Pe.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GT(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=vp)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tp(t,e){if(!navigator)throw Pe.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Pe.create("permission-blocked");return await GT(t,e==null?void 0:e.vapidKey),await zT(t,e==null?void 0:e.serviceWorkerRegistration),LT(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YT(t,e,n){const s=JT(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:n[bp],message_name:n[ET],message_time:n[wT],message_device_time:Math.floor(Date.now()/1e3)})}function JT(t){switch(t){case Ys.NOTIFICATION_CLICKED:return"notification_open";case Ys.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Ys.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(xu(n)):t.onMessageHandler.next(xu(n)));const s=n.data;WT(s)&&s[CT]==="1"&&await YT(t,n.messageType,s)}const Pu="@firebase/messaging",Du="0.12.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=t=>{const e=new VT(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>QT(e,n)),e},ZT=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:s=>Tp(e,s)}};function eI(){Yt(new Nt("messaging",XT,"PUBLIC")),Yt(new Nt("messaging-internal",ZT,"PRIVATE")),_t(Pu,Du),_t(Pu,Du,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(){try{await Sd()}catch{return!1}return typeof window<"u"&&Cd()&&sv()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t,e){if(!navigator)throw Pe.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t=Od()){return tI().then(e=>{if(!e)throw Pe.create("unsupported-browser")},e=>{throw Pe.create("indexed-db-unsupported")}),wr(sn(t),"messaging").getImmediate()}async function iI(t,e){return t=sn(t),Tp(t,e)}function rI(t,e){return t=sn(t),nI(t,e)}eI();const Ip=sI(Vh);iI(Ip,{vapidKey:"BJ-Cy91acaJ1K7efR3RltkE29snJH-ygssGHtqnyRPtnJNdMYUmkOw-uPu3mraS3Hw5MtqU4ajk4AmnktYnGyew"}).then(t=>{t?console.log("FCM Token:",t):console.log("No registration token available.")}).catch(t=>{console.log("An error occurred while retrieving token.",t)});rI(Ip,t=>{console.log(t)});"serviceWorker"in navigator&&navigator.serviceWorker.register("/firebase-messaging-sw.js").then(t=>{console.log("Service Worker registered with scope:",t.scope)}).catch(t=>{console.log("Service Worker registration failed:",t)});const oI=$f(PS);oI.use(tm()).mount("#app");
