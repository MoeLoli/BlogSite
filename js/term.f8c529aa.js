(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["term"],{"4c03":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"site-footer"},[a("section",{staticClass:"copyright"},[t._v(" © "+t._s((new Date).getFullYear())+" "+t._s(t.site.title)+" ")]),t._m(0)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"powerby"},[t._v(" Built with ♥, "),a("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v("Vue.js")]),t._v(" and "),a("a",{attrs:{href:"https://hexo.io/",target:"_blank"}},[t._v("Hexo")]),t._v("."),a("br"),t._v(" Theme "),a("b",[a("a",{attrs:{href:"https://github.com/CaiJimmy/hugo-theme-stack",target:"_blank"}},[t._v("Stack")])]),t._v(" designed by "),a("b",[a("a",{attrs:{href:"https://jimmycai.com",target:"_blank"}},[t._v("Jimmy")])]),t._v(" modified by "),a("b",[a("a",{attrs:{href:"https://jcl.moe",target:"_blank"}},[t._v("Jin")])])])}],n=a("d4ec"),r=a("bee2"),o=a("262e"),c=a("2caf"),u=a("9ab4"),l=a("2b0e"),h=a("2fe1"),p=function(t){Object(o["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return Object(r["a"])(a,[{key:"site",get:function(){return this.$store.state.meta.hexoConfig.site}}]),a}(l["a"]);p=Object(u["a"])([Object(h["b"])({name:"Footer-Component"})],p);var g=p,m=g,f=a("2877"),d=Object(f["a"])(m,s,i,!1,null,null,null);e["a"]=d.exports},"6d63":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"main"},[a("h3",{staticClass:"taxonomy-type section-title"},[t._v(" "+t._s(t.type.toLocaleUpperCase())+" ")]),a("div",{staticClass:"taxonomy-card"},[a("div",{staticClass:"taxonomy-details"},[a("h3",{staticClass:"taxonomy-count"},[t._v(" "+t._s(t.posts.length)+" post"+t._s(t.posts.length>1?"s":"")+" ")]),a("h1",{staticClass:"taxonomy-term"},[t._v(t._s(t.slug))]),t.target.subtitle?a("h2",{staticClass:"taxonomy-description"},[t._v(" "+t._s(t.target.subtitle)+" ")]):t._e()]),t.target.cover?a("div",{staticClass:"taxonomy-image"},[a("img",{attrs:{src:t.target.cover+t.getImageAddon(t.cdnConfig,{width:120,height:120,webp:!0,both:!0}),width:"120",height:"120",loading:"lazy"}})]):t._e()]),a("section",{staticClass:"article-list--compact"},t._l(t.posts,(function(e){return a("article",{key:e.slug},[a("router-link",{attrs:{to:{name:"Post",params:{slug:e.slug}}}},[a("div",{staticClass:"article-details"},[a("h2",{staticClass:"article-title"},[t._v(" "+t._s(e.title||"Untitled")+" ")]),a("footer",{staticClass:"article-time"},[a("time",{attrs:{"data-timeago":"true",datetime:e.date}},[t._v(" "+t._s(t._f("format")(e.date,"MMM DD, YYYY"))+" ")])])]),e.cover?a("div",{staticClass:"article-image"},[a("img",{attrs:{src:e.cover+t.getImageAddon(t.cdnConfig,{width:120,height:120,webp:!0,both:!0}),width:"120",height:"120",loading:"lazy"}})]):t._e()])],1)})),0),a("footer-component")],1)},i=[],n=(a("a4d3"),a("e01a"),a("99af"),a("c975"),a("ac1f"),a("5319"),a("96cf"),a("1da1")),r=a("d4ec"),o=a("bee2"),c=a("262e"),u=a("2caf"),l=a("9ab4"),h=a("60a3"),p=a("6011"),g=a("4c03"),m=function(t){Object(c["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(o["a"])(a,[{key:"fetch",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,s,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.store,s=e.route,i=s.matched[0].props.default.isImplicit,n=i?-1===s.path.indexOf("page")?s.path.replace(/^\/\/?/,""):s.path.replace(/^\/page\/?/,""):s.params.slug,t.next=5,a.dispatch("detailable/".concat(p["d"]),{isImplicit:i,sourceOrSlug:n});case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"beforeRouteUpdate",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,a,s){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=this.fetch,!i){t.next=11;break}return t.prev=2,t.next=5,i({store:this.$store,route:e});case 5:t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](2),console.log(t.t0),s();case 11:s();case 12:case"end":return t.stop()}}),t,this,[[2,7]])})));function e(e,a,s){return t.apply(this,arguments)}return e}()},{key:"created",value:function(){document.title=this.slug+" - "+this.site.title||"Hexo - Stack Theme"}},{key:"type",get:function(){return this.$attrs.type}},{key:"slug",get:function(){return this.$route.params.slug}},{key:"site",get:function(){return this.$store.state.meta.hexoConfig.site}},{key:"url",get:function(){return this.$store.state.meta.hexoConfig.url}},{key:"target",get:function(){return this.$store.state.detailable.target}},{key:"posts",get:function(){var t=this.$store.state;return"Category"===this.type?t.categories.oneCategoryPosts.postlist:"Tag"===this.type?t.tags.oneTagPosts.postlist:[]}},{key:"cdn",get:function(){return this.$store.state.meta.themeConfig.cdn}},{key:"cdnConfig",get:function(){var t={};return this.cdn.qiniu.enable&&(t.name="qiniu"),this.cdn.upyun.enable&&(t.name="upyun"),t.split_tag=this.cdn.upyun.split_tag,t}},{key:"categoryImages",get:function(){return this.$store.state.meta.themeConfig.category}}]),a}(h["c"]);m=Object(l["a"])([Object(h["a"])({name:"Term",components:{FooterComponent:g["a"]},metaInfo:function(){var t={};return t.title="".concat(this.type,": ").concat(this.slug," - ").concat(this.site.title)||"Hexo - Stack Theme",t.meta=[],t.meta.push({property:"og:title",content:"".concat(this.type,": ").concat(this.slug," - ").concat(this.site.title)}),t.meta.push({property:"og:og:site_name",content:"Archives - "+this.site.title}),t.meta.push({property:"og:description",content:this.site.description}),t.meta.push({property:"og:locale",content:this.site.language}),t.meta.push({property:"og:type",content:"website"}),t.meta.push({property:"og:url",content:this.url.url+this.$route.fullPath}),t.meta.push({name:"twitter:card",content:"summary_large_image"}),t.meta.push({name:"twitter:title",content:"".concat(this.type,": ").concat(this.slug," - ").concat(this.site.title)}),t.meta.push({name:"twitter:description",content:this.site.description}),t}})],m);var f=m,d=f,y=a("2877"),v=Object(y["a"])(d,s,i,!1,null,null,null);e["default"]=v.exports}}]);