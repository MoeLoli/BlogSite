(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["archive"],{"1cd8":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fragment",[r("Article",{attrs:{slug:t.target.slug,cover:t.target.cover,subtitle:t.target.subtitle,title:t.target.title,time:t.target.date,updated:t.target.updated,categories:t.target.categories,tags:t.target.tags,content:t.target.content,to:{name:"Post",params:t.$route.params}}}),t.target.related.lengtg>0?r("related-contents",{attrs:{related:t.target.related}}):t._e(),t.target.comments&&t.themeComments.enabled?r("comments",{attrs:{slug:t.target.slug,title:t.target.title||"Untitled"}}):t._e(),r("photoswipe")],1)},n=[],i=(r("99af"),r("4160"),r("c975"),r("b0c0"),r("ac1f"),r("5319"),r("159b"),r("b85c")),o=(r("96cf"),r("1da1")),c=r("d4ec"),s=r("bee2"),l=r("262e"),u=r("2caf"),g=r("9ab4"),h=r("1b40"),p=r("6011"),d=r("3f08"),m=r("ecb0"),f=r("8115"),b=r("6f2d"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",{staticClass:"related-contents--wrapper"},[r("h2",{staticClass:"section-title"},[t._v(t._s(t.$t("article.relatedContents")))]),r("div",{staticClass:"related-contents"},[r("div",{staticClass:"flex article-list--tile"},t._l(t.related,(function(t){return r("article-list-tile",{key:t.slug,attrs:{cover:t.cover,slug:t.slug,title:t.title}})})),1)])])},y=[],O=r("2c92"),k=function(t){Object(l["a"])(r,t);var e=Object(u["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return r}(h["c"]);Object(g["a"])([Object(h["b"])({type:Array,required:!0})],k.prototype,"related",void 0),k=Object(g["a"])([Object(h["a"])({name:"related-contents",components:{ArticleListTile:O["a"]}})],k);var j=k,x=j,w=r("2877"),S=Object(w["a"])(x,v,y,!1,null,null,null),C=S.exports,A=(r("d3b7"),r("ddb0"),r("3835")),_=r("53ca"),I=(r("343a"),r("3fb5a"),r("b24f")),q=r.n(I),P=r("14fd"),$=r.n(P),D=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;Object(c["a"])(this,t),this.items=[],void 0!==q.a&&void 0!==$.a?(this.galleryUID=r,t.createGallery(e),this.loadItems(e),this.bindClick()):console.error("PhotoSwipe lib not loaded.")}return Object(s["a"])(t,[{key:"loadItems",value:function(t){this.items=[];var e,r=t.querySelectorAll("figure"),a=Object(i["a"])(r);try{for(a.s();!(e=a.n()).done;){var n=e.value,o=n.querySelector("figcaption"),c=n.querySelector("img"),s={w:parseInt(c.getAttribute("width")),h:parseInt(c.getAttribute("height")),src:c.src,msrc:c.getAttribute("data-thumb")||c.src,el:n};o&&(s.title=o.innerHTML),this.items.push(s)}}catch(l){a.e(l)}finally{a.f()}}},{key:"open",value:function(t){var e=this,r=document.querySelector(".pswp"),a=new q.a(r,$.a,this.items,{index:t,galleryUID:this.galleryUID,getThumbBoundsFn:function(t){var r=e.items[t].el.getElementsByTagName("img")[0],a=window.pageYOffset||document.documentElement.scrollTop,n=r.getBoundingClientRect();return{x:n.left,y:n.top+a,w:n.width}}});a.init()}},{key:"bindClick",value:function(){var t,e=this,r=Object(i["a"])(this.items.entries());try{var a=function(){var r=Object(A["a"])(t.value,2),a=r[0],n=r[1],i=n.el.querySelector("a");if(!i)return{v:void 0};i.addEventListener("click",(function(t){t.preventDefault(),e.open(a)}))};for(r.s();!(t=r.n()).done;){var n=a();if("object"===Object(_["a"])(n))return n.v}}catch(o){r.e(o)}finally{r.f()}}}],[{key:"createGallery",value:function(e){var r,a=e.querySelectorAll("figure"),n=[],o=Object(i["a"])(a);try{for(o.s();!(r=o.n()).done;){var c=r.value;n.length?c.previousElementSibling===n[n.length-1]?n.push(c):n.length&&(t.wrap(n),n=[c]):n=[c]}}catch(s){o.e(s)}finally{o.f()}n.length>0&&t.wrap(n)}},{key:"wrap",value:function(t){var e=document.createElement("div");e.className="gallery";var r=t[0].parentNode,a=t[0];null===r||void 0===r||r.insertBefore(e,a);var n,o=Object(i["a"])(t);try{for(o.s();!(n=o.n()).done;){var c=n.value;e.appendChild(c)}}catch(s){o.e(s)}finally{o.f()}}}]),t}(),E=D,M=function(t){Object(l["a"])(r,t);var e=Object(u["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return Object(s["a"])(r,[{key:"fetch",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var r,a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.store,a=e.route,n=a.matched[0].props.default.isImplicit,i=n?-1===a.path.indexOf("page")?a.path.replace(/^\/\/?/,""):a.path.replace(/^\/page\/?/,""):a.params.slug,t.next=5,r.dispatch("detailable/".concat(p["c"]),{isImplicit:n,sourceOrSlug:i});case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"beforeRouteUpdate",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,r,a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=this.fetch,!n){t.next=11;break}return t.prev=2,t.next=5,n({store:this.$store,route:e});case 5:t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](2),console.log(t.t0),a();case 11:a();case 12:case"end":return t.stop()}}),t,this,[[2,7]])})));function e(e,r,a){return t.apply(this,arguments)}return e}()},{key:"mounted",value:function(){this.gallary()}},{key:"gallary",value:function(){var t=this;if(document.querySelectorAll(".article-content")){document.querySelectorAll(".article-content").forEach((function(e){e.querySelectorAll("img").forEach((function(e){var r=Math.round(e.naturalWidth),a=Math.round(e.naturalHeight);0!==r&&0!==a?(e.setAttribute("width",r),e.setAttribute("height",a),e.parentNode.setAttribute("data-size","".concat(r,"x").concat(a)),e.parentNode.parentNode.style.flexGrow=100*r/a,e.parentNode.parentNode.style.flexBasis=240*r/a+"px"):t.gallary()}))})),new E(document.querySelector(".article-content"));var e,r=Object(i["a"])(document.querySelectorAll(".gallery"));try{for(r.s();!(e=r.n()).done;){var a=e.value;"BR"===a.nextElementSibling.tagName&&a.nextElementSibling.remove()}}catch(n){r.e(n)}finally{r.f()}}}},{key:"hexoConfigSite",get:function(){return this.$store.state.meta.hexoConfig.site}},{key:"hexoConfigUrl",get:function(){return this.$store.state.meta.hexoConfig.url}},{key:"target",get:function(){return this.$store.state.detailable.target}},{key:"themeComments",get:function(){return this.$store.state.meta.themeConfig.comments}},{key:"themeArticle",get:function(){return this.$store.state.meta.themeConfig.article}}]),r}(h["c"]);M=Object(g["a"])([Object(h["a"])({name:"Archive",components:{Article:m["a"],Fragment:d["a"],comments:f["a"],photoswipe:b["a"],RelatedContents:C},metaInfo:function(){var t=this.target,e={};e.title=t.title+" - "+this.hexoConfigSite.title||"Hexo - Stack Theme",e.meta=[],e.meta.push({property:"og:title",content:this.target.title+" - "+this.hexoConfigSite.title}),e.meta.push({property:"og:og:site_name",content:"Archives - "+this.hexoConfigSite.title}),e.meta.push({property:"og:locale",content:this.hexoConfigSite.language}),e.meta.push({property:"og:type",content:"article"}),e.meta.push({property:"og:url",content:this.hexoConfigUrl.url+this.$route.fullPath}),e.meta.push({property:"og:description",content:t.excerpt}),t.cover&&e.meta.push({property:"og:image",content:this.target.cover}),e.meta.push({name:"twitter:card",content:"summary_large_image"}),e.meta.push({name:"twitter:title",content:t.title+" - "+this.hexoConfigSite.title}),e.meta.push({name:"twitter:description",content:this.target.excerpt}),t.cover&&e.meta.push({name:"twitter:image",content:this.target.cover});var r=t.tags;e.meta.push({property:"article:section",content:"post"});for(var a=0;a<r.length;a++)e.meta.push({property:"article:tag",content:r[a].name});return t.updated&&e.meta.push({property:"article:published_time",content:this.target.updated}),e}})],M);var R=M,N=R,T=Object(w["a"])(N,a,n,!1,null,null,null);e["default"]=T.exports},"2c92":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{class:t.cover?"has-image":""},[r("router-link",{attrs:{to:{name:t.type,params:{slug:t.slug}}}},[t.cover?r("div",{staticClass:"article-image"},[r("img",{attrs:{src:t.image,width:"250",height:"150",loading:"lazy","data-key":"Post-"+t.slug,"data-hash":t._f("md5")("Post-"+t.slug)}})]):t._e(),r("div",{staticClass:"article-details",style:{background:t.tileBackground}},[r("h2",{staticClass:"article-title"},[t._v(" "+t._s(t.title)+" ")])])])],1)},n=[],i=(r("99af"),r("d3b7"),r("25f0"),r("96cf"),r("1da1")),o=r("d4ec"),c=r("bee2"),s=r("262e"),l=r("2caf"),u=r("9ab4"),g=r("3452"),h=r("1b40"),p=r("0621"),d=r.n(p),m={};if(Object.prototype.hasOwnProperty.call(localStorage,"StackColorsCache"))try{m=JSON.parse(localStorage.getItem("StackColorsCache")||"{}")}catch(j){m={}}var f=function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r,a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e){t.next=4;break}return t.next=3,d.a.from(a).getPalette();case 3:return t.abrupt("return",t.sent);case 4:if(Object.prototype.hasOwnProperty.call(m,e)&&m[e].hash===r){t.next=10;break}return t.next=7,d.a.from(a).getPalette();case 7:n=t.sent,m[e]={hash:r,Vibrant:{hex:n.Vibrant.hex,rgb:n.Vibrant.rgb,bodyTextColor:n.Vibrant.bodyTextColor},DarkMuted:{hex:n.DarkMuted.hex,rgb:n.DarkMuted.rgb,bodyTextColor:n.DarkMuted.bodyTextColor}},localStorage.setItem("StackColorsCache",JSON.stringify(m));case 10:return t.abrupt("return",m[e]);case 11:case"end":return t.stop()}}),t)})));return function(e,r,a){return t.apply(this,arguments)}}(),b=function(t){Object(s["a"])(r,t);var e=Object(l["a"])(r);function r(){var t;return Object(o["a"])(this,r),t=e.apply(this,arguments),t.tileBackground="",t}return Object(c["a"])(r,[{key:"created",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.cover){t.next=5;break}return t.next=3,f("Post-".concat(this.slug),Object(g["MD5"])(this.slug).toString(),this.cover);case 3:e=t.sent,this.tileBackground="\n            linear-gradient(0deg,\n                rgba(".concat(e.DarkMuted.rgb[0],", ").concat(e.DarkMuted.rgb[1],", ").concat(e.DarkMuted.rgb[2],", 0.5) 0%,\n                rgba(").concat(e.Vibrant.rgb[0],", ").concat(e.Vibrant.rgb[1],", ").concat(e.Vibrant.rgb[2],", 0.75) 100%)");case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"themeImageProcessing",get:function(){return this.$store.state.meta.themeConfig.imageProcessing}},{key:"themeStorage",get:function(){return this.$store.state.meta.themeConfig.storage}},{key:"image",get:function(){if(this.themeStorage.enabled&&this.themeImageProcessing.cover.enabled){var t={provider:""};return t.provider=this.themeStorage.provider.toLowerCase(),"upyun"===t.provider&&(t.separator=this.themeStorage.upyun.separator),this.cover+this.getImageAddon(t,{width:250,height:150,webp:!0,both:!0})}return this.cover}}]),r}(h["c"]);Object(u["a"])([Object(h["b"])({type:String})],b.prototype,"cover",void 0),Object(u["a"])([Object(h["b"])({type:String,default:"Post"})],b.prototype,"type",void 0),Object(u["a"])([Object(h["b"])({type:String,required:!0})],b.prototype,"slug",void 0),Object(u["a"])([Object(h["b"])({type:String,required:!0})],b.prototype,"title",void 0),b=Object(u["a"])([Object(h["a"])({name:"Article-list-tile",filters:{md5:function(t){return Object(g["MD5"])(t).toString()}}})],b);var v=b,y=v,O=r("2877"),k=Object(O["a"])(y,a,n,!1,null,null,null);e["a"]=k.exports}}]);