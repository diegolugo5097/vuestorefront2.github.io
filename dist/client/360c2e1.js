(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{601:function(t,e,n){t.exports={}},605:function(t,e,n){"use strict";n(601)},614:function(t,e,n){"use strict";var r=n(35),o=(n(51),n(8),n(14),n(237),n(3)),d=n(585),c=n(238),l=n(21),f=n(577),h={name:"SfTab",components:{SfChevron:c.a,SfScrollable:f.a,SfButton:l.a},inject:["tabConfig"],props:{title:{type:String,default:""}},data:function(){return{isActive:!1,desktopMin:1024}},computed:{tabMaxContentHeight:function(){return this.tabConfig.tabMaxContentHeight},tabShowText:function(){return this.tabConfig.tabShowText},tabHideText:function(){return this.tabConfig.tabHideText}},methods:{tabClick:function(){if(d.a){var t=Math.max(document.documentElement.clientWidth,window.innerWidth);this.isActive&&t>this.desktopMin||this.$parent.$emit("toggle",this._uid)}}}},v=n(2),_=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-tabs__tab"},[t._t("title",(function(){return[n("SfButton",{staticClass:"sf-button--pure sf-tabs__title",class:{"is-active":t.isActive},attrs:{"aria-pressed":t.isActive.toString()},on:{click:t.tabClick}},[t._v("\n      "+t._s(t.title)+"\n      "),n("SfChevron",{staticClass:"sf-tabs__chevron",class:{"sf-chevron--right":!t.isActive}})],1)]}),null,{tabClick:t.tabClick,isActive:t.isActive,title:t.title}),t._v(" "),n("div",{staticClass:"sf-tabs__content"},[n("div",{staticClass:"sf-tabs__content__tab",class:{"display-none":!t.isActive}},[t.tabMaxContentHeight?n("SfScrollable",{attrs:{"max-content-height":t.tabMaxContentHeight,"show-text":t.tabShowText,"hide-text":t.tabHideText}},[t._t("default")],2):t._t("default")],2)])],2)}),[],!1,null,null,null).exports;o.default.component("SfTab",_);var m={name:"SfTabs",props:{openTab:{type:Number,default:1},tabMaxContentHeight:{type:String,default:""},tabShowText:{type:String,default:"show"},tabHideText:{type:String,default:"hide"}},data:function(){return{tabs:[],initialTabActivated:!1}},watch:{openTab:function(t,e){t!==e&&this.toggle(this.$children[t-1]._uid)}},mounted:function(){var t;this.$on("toggle",this.toggle),(t=this.tabs).push.apply(t,Object(r.a)(this.$children)),this.openTab&&this.openChild()},methods:{toggle:function(t){this.tabs.forEach((function(e){e.isActive=e._uid===t}));var e=this.tabs.findIndex((function(t){return!0===t.isActive}))+1;this.$emit("click:tab",e)},openChild:function(){this.openTab<this.$children.length+1&&(this.tabs[this.openTab-1].isActive=!0,this.initialTabActivated=!0)}},provide:function(){var t=this,e={};return Object.defineProperty(e,"tabMaxContentHeight",{get:function(){return t.tabMaxContentHeight}}),Object.defineProperty(e,"tabShowText",{get:function(){return t.tabShowText}}),Object.defineProperty(e,"tabHideText",{get:function(){return t.tabHideText}}),{tabConfig:e}}},A=(n(605),Object(v.a)(m,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.initialTabActivated,expression:"initialTabActivated"}],staticClass:"sf-tabs"},[t._t("default")],2)}),[],!1,null,null,null));e.a=A.exports},683:function(t,e,n){t.exports={}},740:function(t,e,n){"use strict";n(683)},791:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(49),n(614)),d=n(21),c=n(25),l={name:"UserShippingAddress",props:{address:{default:function(){},type:Object}}},f=n(2),h=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shipping-addr",attrs:{address:t.address}},[n("section",[n("p",[n("strong",[t._v(t._s(t.address.name))])]),t._v(" "),n("p",[n("i",[t._v(t._s(t.address.company))])]),t._v(" "),n("p",[n("i",[t._v(t._s(t.address.formattedArea))])]),t._v(" "),n("p",[n("i",[t._v(t._s(t.address.phone))])]),t._v(" "),n("p",[n("i",[t._v(t._s(t.address.email))])])])])}),[],!1,null,null,null).exports,v={name:"ShippingAddressForm"},_=Object(f.a)(v,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b",[t._v("Please implement vendor-specific ShippingAddressForm component in the 'components/MyAccount' directory")])}),[],!1,null,null,null).exports,m=n(28),A=n(1),S=n(13),C={name:"ShippingDetails",components:{SfTabs:o.a,SfButton:d.a,SfIcon:c.a,UserShippingAddress:h,ShippingAddressForm:_},setup:function(){var t=Object(m.p)(),e=t.shipping,n=t.load,o=t.addAddress,d=t.deleteAddress,c=t.updateAddress,l=Object(A.a)((function(){return m.t.getAddresses(e.value)})),f=Object(A.j)(!1),h=Object(A.j)(void 0),v=Object(A.a)((function(){return!h.value})),_=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var form,n,r,d,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return form=e.form,n=e.onComplete,r=e.onError,t.prev=1,d=v.value?o:c,t.next=5,d({address:form});case 5:return data=t.sent,f.value=!1,h.value=void 0,t.next=10,n(data);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),r(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(S.k)(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:case"end":return t.stop()}}),t)})))),{changeAddress:function(){var address=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;h.value=address,f.value=!0},updateAddress:c,removeAddress:function(address){return d({address:address})},saveAddress:_,userShippingGetters:m.t,addresses:l,edittingAddress:f,activeAddress:h,isNewAddress:v}}},x=C,w=(n(740),Object(f.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.edittingAddress?n("SfTabs",{key:"edit-address",staticClass:"tab-orphan",attrs:{"open-tab":1}},[n("SfTab",{attrs:{title:t.isNewAddress?"Add the address":"Update the address"}},[n("p",{staticClass:"message"},[t._v("\n        "+t._s(t.$t("Contact details updated"))+"\n      ")]),t._v(" "),n("ShippingAddressForm",{attrs:{address:t.activeAddress,isNew:t.isNewAddress},on:{submit:t.saveAddress}})],1)],1):n("SfTabs",{key:"address-list",staticClass:"tab-orphan",attrs:{"open-tab":1}},[n("SfTab",{attrs:{title:"Shipping details"}},[n("p",{staticClass:"message"},[t._v("\n        "+t._s(t.$t("Manage shipping addresses"))+"\n      ")]),t._v(" "),n("transition-group",{staticClass:"shipping-list",attrs:{tag:"div",name:"fade"}},t._l(t.addresses,(function(address){return n("div",{key:t.userShippingGetters.getId(address),staticClass:"shipping"},[n("div",{staticClass:"shipping__content"},[n("div",{staticClass:"shipping__address"},[n("UserShippingAddress",{attrs:{address:address}})],1)]),t._v(" "),n("div",{staticClass:"shipping__actions"},[n("SfIcon",{staticClass:"smartphone-only",attrs:{icon:"cross",color:"gray",size:"14px",role:"button"},on:{click:function(e){return t.removeAddress(address)}}}),t._v(" "),n("SfButton",{on:{click:function(e){return t.changeAddress(address)}}},[t._v("\n              "+t._s(t.$t("Change"))+"\n            ")]),t._v(" "),n("SfButton",{staticClass:"color-light shipping__button-delete desktop-only",on:{click:function(e){return t.removeAddress(address)}}},[t._v("\n              "+t._s(t.$t("Delete"))+"\n            ")])],1)])})),0),t._v(" "),n("SfButton",{staticClass:"action-button",on:{click:function(e){return t.changeAddress()}}},[t._v("\n        "+t._s(t.$t("Add new address"))+"\n      ")])],1)],1)],1)}),[],!1,null,"2772725d",null));e.default=w.exports}}]);