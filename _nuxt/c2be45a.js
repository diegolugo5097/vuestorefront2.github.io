(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{601:function(t,e,n){t.exports={}},603:function(t,e,n){t.exports={}},605:function(t,e,n){"use strict";n(601)},606:function(t,e,n){t.exports={}},607:function(t,e,n){"use strict";n(603)},609:function(t,e,n){t.exports={}},610:function(t,e,n){"use strict";n(606)},614:function(t,e,n){"use strict";var r=n(35),c=(n(51),n(8),n(14),n(237),n(3)),o=n(585),l=n(238),f=n(21),d=n(577),h={name:"SfTab",components:{SfChevron:l.a,SfScrollable:d.a,SfButton:f.a},inject:["tabConfig"],props:{title:{type:String,default:""}},data:function(){return{isActive:!1,desktopMin:1024}},computed:{tabMaxContentHeight:function(){return this.tabConfig.tabMaxContentHeight},tabShowText:function(){return this.tabConfig.tabShowText},tabHideText:function(){return this.tabConfig.tabHideText}},methods:{tabClick:function(){if(o.a){var t=Math.max(document.documentElement.clientWidth,window.innerWidth);this.isActive&&t>this.desktopMin||this.$parent.$emit("toggle",this._uid)}}}},m=n(2),_=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-tabs__tab"},[t._t("title",(function(){return[n("SfButton",{staticClass:"sf-button--pure sf-tabs__title",class:{"is-active":t.isActive},attrs:{"aria-pressed":t.isActive.toString()},on:{click:t.tabClick}},[t._v("\n      "+t._s(t.title)+"\n      "),n("SfChevron",{staticClass:"sf-tabs__chevron",class:{"sf-chevron--right":!t.isActive}})],1)]}),null,{tabClick:t.tabClick,isActive:t.isActive,title:t.title}),t._v(" "),n("div",{staticClass:"sf-tabs__content"},[n("div",{staticClass:"sf-tabs__content__tab",class:{"display-none":!t.isActive}},[t.tabMaxContentHeight?n("SfScrollable",{attrs:{"max-content-height":t.tabMaxContentHeight,"show-text":t.tabShowText,"hide-text":t.tabHideText}},[t._t("default")],2):t._t("default")],2)])],2)}),[],!1,null,null,null).exports;c.default.component("SfTab",_);var v={name:"SfTabs",props:{openTab:{type:Number,default:1},tabMaxContentHeight:{type:String,default:""},tabShowText:{type:String,default:"show"},tabHideText:{type:String,default:"hide"}},data:function(){return{tabs:[],initialTabActivated:!1}},watch:{openTab:function(t,e){t!==e&&this.toggle(this.$children[t-1]._uid)}},mounted:function(){var t;this.$on("toggle",this.toggle),(t=this.tabs).push.apply(t,Object(r.a)(this.$children)),this.openTab&&this.openChild()},methods:{toggle:function(t){this.tabs.forEach((function(e){e.isActive=e._uid===t}));var e=this.tabs.findIndex((function(t){return!0===t.isActive}))+1;this.$emit("click:tab",e)},openChild:function(){this.openTab<this.$children.length+1&&(this.tabs[this.openTab-1].isActive=!0,this.initialTabActivated=!0)}},provide:function(){var t=this,e={};return Object.defineProperty(e,"tabMaxContentHeight",{get:function(){return t.tabMaxContentHeight}}),Object.defineProperty(e,"tabShowText",{get:function(){return t.tabShowText}}),Object.defineProperty(e,"tabHideText",{get:function(){return t.tabHideText}}),{tabConfig:e}}},C=(n(605),Object(m.a)(v,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.initialTabActivated,expression:"initialTabActivated"}],staticClass:"sf-tabs"},[t._t("default")],2)}),[],!1,null,null,null));e.a=C.exports},617:function(t,e,n){"use strict";n(609)},622:function(t,e,n){t.exports={}},627:function(t,e,n){"use strict";var r={name:"SfLoader",props:{loading:{default:!0,type:Boolean}}},c=(n(607),n(2)),component=Object(c.a)(r,(function(t,e){var n=e._c;return n("div",e._g(e._b({ref:e.data.ref,class:[e.data.class,e.data.staticClass,"sf-loader"],style:[e.data.style,e.data.staticStyle]},"div",e.data.attrs,!1),e.listeners),[n("transition",{attrs:{name:"sf-fade",mode:"out-in"}},[e.props.loading?n("div",{staticClass:"sf-loader__overlay"},[e._t("loader",(function(){return[n("svg",{staticClass:"sf-loader__spinner",attrs:{role:"img",width:"38",height:"38",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg"}},[n("title",[e._v("Loading...")]),e._v(" "),n("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[n("circle",{attrs:{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}}),e._v(" "),n("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[n("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]}))],2):e._t("default")],2)],1)}),[],!0,null,null,null);e.a=component.exports},646:function(t,e,n){"use strict";n(622)},651:function(t,e,n){"use strict";n(43);var r={name:"SfAlert",components:{SfIcon:n(25).a},props:{message:{type:String,default:""},type:{type:String,default:"secondary",validator:function(t){return["secondary","info","success","warning","danger"].includes(t)}}},computed:{icon:function(){switch(this.type){case"success":return"added_to_cart";case"danger":return"info_shield";default:return"info_circle"}},colorClass:function(){switch(this.type){case"secondary":return"color-secondary";case"info":default:return"color-info";case"success":return"color-success";case"warning":return"color-warning";case"danger":return"color-danger"}}}},c=(n(610),n(2)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-alert",class:t.colorClass},[t._t("icon",(function(){return[n("SfIcon",{staticClass:"sf-alert__icon",attrs:{"aria-hidden":"true",icon:t.icon}})]}),null,{icon:t.icon}),t._v(" "),t._t("message",(function(){return[n("span",{staticClass:"sf-alert__message",class:{"display-none":!t.message}},[t._v(t._s(t.message))])]}),null,{message:t.message})],2)}),[],!1,null,null,null);e.a=component.exports},679:function(t,e,n){t.exports={}},705:function(t,e,n){"use strict";var r={name:"SfBreadcrumbs",inject:{components:{default:{SfLink:n(82).a}}},props:{breadcrumbs:{type:Array,default:function(){return[]}}},breadcrumbLast:function(t){return t.length-1}},c=(n(617),n(2)),component=Object(c.a)(r,(function(t,e){var n=e._c;return n("nav",e._g(e._b({class:[e.data.class,e.data.staticClass,"sf-breadcrumbs"],style:[e.data.style,e.data.staticStyle],attrs:{"aria-label":"breadcrumb"}},"nav",e.data.attrs,!1),e.listeners),[n("ol",{staticClass:"sf-breadcrumbs__list"},e._l(e.props.breadcrumbs,(function(t,i){return n("li",{key:i,staticClass:"sf-breadcrumbs__list-item",attrs:{"aria-current":e.$options.breadcrumbLast(e.props.breadcrumbs)===i&&"page"}},[e.$options.breadcrumbLast(e.props.breadcrumbs)!==i?[e._t("link",(function(){return[n(e.injections.components.SfLink,{tag:"component",staticClass:"sf-breadcrumbs__breadcrumb",attrs:{link:t.link,"data-testid":t.text}},[e._v("\n            "+e._s(t.text)+"\n          ")])]}),null,{breadcrumb:t})]:[e._t("current",(function(){return[n(e.injections.components.SfLink,{tag:"component",staticClass:"sf-breadcrumbs__breadcrumb current",attrs:{link:t.link}},[e._v("\n            "+e._s(t.text)+"\n          ")])]}),null,{breadcrumb:t})]],2)})),0)])}),[],!0,null,null,null);e.a=component.exports},736:function(t,e,n){"use strict";n(679)},773:function(t,e,n){"use strict";var r=n(3),c=(n(20),n(8),{name:"SfTableRow",inject:["table"],mounted:function(){this.$slots.default&&this.table.updateColumnsCount(this.$slots.default.filter((function(t){return t.tag})).length)}}),o=n(2),l=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tbody",[n("tr",{staticClass:"sf-table__row"},[t._t("default")],2)])}),[],!1,null,null,null).exports,f={name:"SfTableData"},d=Object(o.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("td",{staticClass:"sf-table__data"},[t._t("default")],2)}),[],!1,null,null,null).exports,h={name:"SfTableHeader"},m=Object(o.a)(h,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("th",{staticClass:"sf-table__header"},[t._t("default")],2)}),[],!1,null,null,null).exports,_={name:"SfTableHeading",inject:["table"],mounted:function(){this.$slots.default&&this.table.updateColumnsCount(this.$slots.default.filter((function(t){return t.tag})).length)}},v=Object(o.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",{staticClass:"sf-table__heading"},[t._t("default")],2)])}),[],!1,null,null,null).exports;r.default.component("SfTableRow",l),r.default.component("SfTableData",d),r.default.component("SfTableHeader",m),r.default.component("SfTableHeading",v);var C={name:"SfTable",provide:function(){var table={};return Object.defineProperty(table,"updateColumnsCount",{value:this.updateColumnsCount}),{table:table}},methods:{updateColumnsCount:function(t){this.$el.style.setProperty("--_table-column-width",Math.ceil(t/2))}}},y=(n(646),Object(o.a)(C,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("table",{staticClass:"sf-table"},[t._t("default")],2)}),[],!1,null,null,null));e.a=y.exports},794:function(t,e,n){"use strict";n(22),n(18),n(20),n(29),n(30);var r=n(0),c=(n(8),n(14),n(3)),o={name:"SfContentPage",props:{title:{type:String,default:""},icon:{type:[String,Array],default:""}},inject:["provided"],computed:{isActive:function(){return this.provided.active.toLowerCase()===this.title.toLowerCase()}},mounted:function(){var t={title:this.title,icon:this.icon};this.$parent.items.push(t)}},l=n(2),f=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"sf-content-page",class:{"display-none":!t.isActive}},[t._t("default")],2)}),[],!1,null,null,null).exports,d={name:"SfContentCategory",props:{title:{type:String,default:""}},data:function(){return{items:[]}},mounted:function(){var t={title:this.title,items:this.items};this.$parent.items.push(t)},methods:{}},h=Object(l.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"sf-content-category"},[t._t("default")],2)}),[],!1,null,null,null).exports,m=n(579),_=n(130),v=n(25),C=n(131),y=n(50);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}c.default.component("SfContentPage",f),c.default.component("SfContentCategory",h);var w={name:"SfContentPages",components:{SfList:m.a,SfMenuItem:_.a,SfIcon:v.a,SfBar:C.a},props:{title:{type:String,default:""},active:{type:String,default:""}},data:function(){return{items:[]}},computed:x(x({},Object(y.a)()),{},{categories:function(){var t=[],e={items:[]},n=function(){if(e.items.length>0){var n=x({},e);t.push(n),e.items=[]}};return this.items.forEach((function(r){if(r.items){n();var c=x({},r);t.push(c)}else e.items.push(r)})),n(),t},isActive:function(){return this.active.length>0}}),provide:function(){var t=this,e={};return Object.defineProperty(e,"active",{get:function(){return t.active}}),{provided:e}},watch:{isMobile:function(t){t?this.$emit("click:change",""):this.$emit("click:change",this.categories[0].items[0].title)}},beforeDestroy:function(){Object(y.b)()},methods:{updatePage:function(title){this.$emit("click:change",title)},isPageActive:function(t){return t.title.toLowerCase()===this.active.toLowerCase()}}},j=(n(736),Object(l.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-content-pages"},[n("SfBar",{staticClass:"smartphone-only",attrs:{back:t.isActive,title:t.active?t.active:t.title},on:{"click:back":function(e){return t.updatePage()}}}),t._v(" "),n("section",{staticClass:"sf-content-pages__section",class:{"is-active":t.isActive}},[n("div",{staticClass:"sf-content-pages__sidebar"},[n("h1",{staticClass:"sf-content-pages__title desktop-only"},[t._v(t._s(t.title))]),t._v(" "),t._l(t.categories,(function(e,r){return n("div",{key:e.title+"-"+r},[n("h2",{staticClass:"sf-content-pages__category-title",class:{"display-none":!e.title}},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("SfList",{staticClass:"sf-content-pages__list"},t._l(e.items,(function(e,r){return n("SfListItem",{key:e.title+"-"+r,staticClass:"sf-content-pages__list-item"},[t._t("menu-item",(function(){return[n("SfMenuItem",{staticClass:"sf-content-pages__menu",class:{"is-active":t.isPageActive(e)},attrs:{label:e.title},on:{click:function(n){return t.updatePage(e.title)}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("SfIcon",{staticClass:"sf-menu-item__icon",class:{"display-none":!e.icon},attrs:{icon:e.icon,color:"#686d7d",size:"xxs"}})]},proxy:!0}],null,!0)})]}),null,{updatePage:t.updatePage,page:e,active:t.active})],2)})),1)],1)}))],2),t._v(" "),n("div",{staticClass:"sf-content-pages__content"},[t._t("default")],2)])],1)}),[],!1,null,null,null));e.a=j.exports}}]);