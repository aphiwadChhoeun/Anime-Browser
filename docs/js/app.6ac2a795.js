(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);m&&m(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},a={app:0},o=[];function s(e){return c.p+"js/"+({anime:"anime"}[e]||e)+"."+{anime:"36485434"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={anime:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="css/"+({anime:"anime"}[e]||e)+"."+{anime:"d18a8baf"}[e]+".css",a=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete i[e],m.parentNode.removeChild(m),n(o)},m.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",f.name="ChunkLoadError",f.type=r,f.request=i,n[1](f)}a[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Anime-Browser/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var m=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2529:function(e,t,n){},"2fb4":function(e,t,n){},5489:function(e,t,n){"use strict";var r=n("2529"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"page__container"},[n("section",{staticClass:"section wrapper"},[n("router-view")],1)]),n("footer-site")],1)},a=[],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"content has-text-centered"},[n("div",[e._v(" Made with "),n("span",{staticClass:"mdi mdi-heart"}),e._v(" by "),n("a",{staticClass:"link",attrs:{href:"https://twitter.com/aphiwadchhoeun",target:"_blank",rel:"nofollow"}},[e._v("Aphiwad Chhoeun")]),e._v(" 2020 ")])])])}],c={name:"FooterSite"},u=c,l=(n("6217"),n("2877")),f=Object(l["a"])(u,o,s,!1,null,"14e2e82f",null),m=f.exports,p={name:"App",components:{FooterSite:m}},d=p,h=Object(l["a"])(d,i,a,!1,null,"31ec6eec",null),v=h.exports,g=(n("d3b7"),n("8c4f")),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inner__wrapper scrollable"},[n("anime-listing")],1)},_=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"parent",staticClass:"parent"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-multiline"},e._l(e.animes,(function(t){return n("anime-list-item",{key:t.mal_id,attrs:{anime:t},on:{"anime-clicked":e.onAnimeClick}})})),1)])])},w=[],C=n("2a34"),k=n.n(C),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column is-2"},[n("div",{ref:"item",staticClass:"list__item",on:{click:e.onClick}},[n("figure",{staticClass:"image is-square"},[n("img",{attrs:{src:e.anime.image_url,alt:e.anime.title}})])])])},j=[],A={name:"AnimeListItem",props:{anime:{type:Object}},methods:{onClick:function(){var e=this.$refs.item.getBoundingClientRect();this.$emit("anime-clicked",this.anime.mal_id,e.x,e.y,e.width,e.height)}}},x=A,E=(n("5489"),Object(l["a"])(x,O,j,!1,null,"2d669726",null)),S=E.exports,$=n("cffa"),P={name:"AnimeListing",components:{AnimeListItem:S},data:function(){return{animes:[]}},mounted:function(){var e=this;k.a.loadTop("anime",1,"favorite").then((function(e){return e.top})).then((function(t){e.animes=t,$["a"].to(e.$refs.parent,{opacity:1,duration:.5,ease:"power3.out"})}))},methods:{onAnimeClick:function(e,t,n,r,i){this.$router.push({name:"Anime",params:{id:e,x:t,y:n,width:r,height:i}})}}},L=P,T=(n("934e"),Object(l["a"])(L,y,w,!1,null,"c55836fe",null)),B=T.exports,M={name:"Home",components:{AnimeListing:B}},N=M,q=Object(l["a"])(N,b,_,!1,null,"0850c97a",null),F=q.exports;r["a"].use(g["a"]);var H=[{path:"/",name:"Home",component:F},{path:"/anime/:id",name:"Anime",component:function(){return n.e("anime").then(n.bind(null,"08de"))}}],I=new g["a"]({routes:H}),D=I;n("2fb4");r["a"].config.productionTip=!1,new r["a"]({router:D,render:function(e){return e(v)}}).$mount("#app")},"59e5":function(e,t,n){},6217:function(e,t,n){"use strict";var r=n("59e5"),i=n.n(r);i.a},"934e":function(e,t,n){"use strict";var r=n("e81a"),i=n.n(r);i.a},e81a:function(e,t,n){}});
//# sourceMappingURL=app.6ac2a795.js.map