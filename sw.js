if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const t=e=>s(e,o),l={module:{uri:o},exports:d,require:t};i[o]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CIPJtimw.css",revision:null},{url:"assets/index-DBgSlzTn.js",revision:null},{url:"firebase-messaging-sw.js",revision:"2926370a33c69dbed05a484eb5fd26ed"},{url:"index.html",revision:"2a554318a250ce2a86c40af6710b069f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"android-chrome-192x192.png",revision:"df0605465d896bad8191194fea91acc6"},{url:"android-chrome-512x512.png",revision:"43ad6297e22bdeb7e0da8b511799416c"},{url:"manifest.webmanifest",revision:"d61e175e7b9efb9cb9828300bfb2e87b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
