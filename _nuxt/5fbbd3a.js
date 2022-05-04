(window.webpackJsonp=window.webpackJsonp||[]).push([[11,14],{619:function(e,t,r){e.exports={}},620:function(e,t,r){e.exports={}},621:function(e,t,r){e.exports={}},623:function(e,t,r){e.exports={}},640:function(e,t,r){"use strict";r(619)},644:function(e,t,r){"use strict";r(620)},645:function(e,t,r){"use strict";r(621)},647:function(e,t,r){"use strict";r(623)},678:function(e,t,r){"use strict";r.r(t);var n=r(2),component=Object(n.a)({},undefined,undefined,!1,null,null,null);t.default=component.exports},680:function(e,t,r){e.exports={}},700:function(e,t,r){"use strict";r.r(t);r(22),r(18),r(20),r(8),r(29),r(14),r(30);var n=r(5),o=r(0),c=(r(49),r(19),r(93),r(1)),l=r(641),d=r(642),f=r(614),v=r(381),m=r(21),_=r(651),y=r(380),h=r(183),w=r(649),C=r(28),S=r(13),O=r(89),k={props:{title:{type:String,default:"Tab"}},data:function(){return{isActive:!0}}},P=r(2),x=Object(P.a)(k,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"tab"},[e._t("default")],2)}),[],!1,null,null,null).exports,j={props:{mode:{type:String,default:"light"}},data:function(){return{selectedIndex:0,tabs:[]}},created:function(){this.tabs=this.$children},mounted:function(){this.selectTab(0)},methods:{selectTab:function(i){this.selectedIndex=i,this.tabs.forEach((function(e,t){e.isActive=t===i}))}}},T=(r(640),Object(P.a)(j,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tabs"},[r("ul",{staticClass:"tabs__header"},e._l(e.tabs,(function(t,n){return r("li",{key:t.title,class:{tab__selected:n==e.selectedIndex},on:{click:function(t){return e.selectTab(n)}}},[e._v("\n      "+e._s(t.title)+"\n    ")])})),0),e._v(" "),e._t("default")],2)}),[],!1,null,null,null).exports);function A(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function N(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}Object(l.c)("email",N(N({},d.b),{},{message:"Invalid email"})),Object(l.c)("required",N(N({},d.g),{},{message:"This field is required"})),Object(l.c)("min",N(N({},d.d),{},{message:"The field should have at least {length} characters"})),Object(l.c)("password",{validate:function(e){return String(e).length>=8&&String(e).match(/[A-Za-z]/gi)&&String(e).match(/[0-9]/gi)},message:"Password must have at least 8 characters including one letter and a number"}),Object(l.c)("confirmed",N(N({},d.a),{},{message:"Passwords don't match"}));var L={name:"PersonalDetails",components:{SfTabs:f.a,SfInput:v.a,SfButton:m.a,SfAlert:_.a,SfProperty:y.a,SfHeading:h.a,SfCheckbox:w.a,ValidationProvider:l.b,ValidationObserver:l.a,Tab:x,Tabs:T},props:{account:{type:Object,default:function(){return{}}},title:{type:String,default:"My Profile"}},setup:function(){var e=Object(C.m)(),t=e.user,r=e.load,o=e.changePassword,l=e.updateUser,d=Object(c.j)(null),f=Object(c.j)(null),v=Object(c.a)((function(){return C.s.getFirstName(t.value)})),m=Object(c.a)((function(){return C.s.getLastName(t.value)})),_=Object(c.a)((function(){return C.s.getEmailAddress(t.value)})),y=Object(c.a)((function(){return C.s.getPhone(t.value)})),h=Object(c.a)((function(){return C.s.getdisplayName(t.value)})),w=Object(O.b)().send,k=Object(c.j)(!1),form=Object(c.j)({firstName:v.value,lastName:m.value,email:_.value,phone:y.value,displayName:h.value,newPassword:""}),P=function(e,t){return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!t){n.next=8;break}return n.next=4,e({current:"",new:form.value.newPassword}).then((function(){r(),w({key:"password_changed",message:"Password changed successfully.",type:"success",title:"Success!",icon:"check"})}));case 4:form.value.newPassword="",form.value.repeatPassword="",n.next=10;break;case 8:return n.next=10,e({user:form.value}).then((function(){r(),w({key:"profile_success",message:"Profile updated successfully.",type:"success",title:"Success!",icon:"check"})}));case 10:k.value=!1,n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(0),w({key:"profile_failed",message:n.t0.message,type:"danger",title:"Failed!"}),n.abrupt("return",!1);case 17:case"end":return n.stop()}}),n,null,[[0,13]])})))},x=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",P(o,!0)());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",P(l,!1)());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(S.k)(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r().then((function(){form.value.email=t.value.email,form.value.firstName=t.value.firstName,form.value.lastName=t.value.lastName}));case 2:case"end":return e.stop()}}),e)})))),{user:t,error:f,success:d,form:form,updatePassword:x,updateProfile:j,firstName:v,lastName:m,phone:y,displayName:h,email:_,isEdited:k}},head:function(){return{title:"My Profile - Pure Daily Care",meta:[{hid:"My Profile - Pure Daily Care",name:"My Profile - Pure Daily Care",content:"Pure Daily Care promotes natural beauty by combining the most modern technologies into easy-to-use, at-home products. Pure Daily Care technologies harness the healing power of naturally occurring phenomenon like steam, electricity and light to drastically improve your skin profile without the use of cosmetics."}]}}},G=L,R=(r(644),Object(P.a)(G,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"my_account_content_wrap"},[r("div",{staticClass:"my_accoutn_title_wrap"},[r("SfHeading",{staticClass:"my_accoutn_title",attrs:{level:1,title:e.title}}),e._v(" "),e.isEdited?e._e():r("div",{staticClass:"my_accoutn_title_actions"},[r("SfButton",{staticClass:"edit_action",on:{click:function(t){e.isEdited=!0,e.scrollToTop()}}},[r("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M11.7167 7.51667L12.4833 8.28333L4.93333 15.8333H4.16667V15.0667L11.7167 7.51667ZM14.7167 2.5C14.5083 2.5 14.2917 2.58333 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C15.1417 2.575 14.9333 2.5 14.7167 2.5ZM11.7167 5.15833L2.5 14.375V17.5H5.625L14.8417 8.28333L11.7167 5.15833Z",fill:"black"}})]),e._v("\n        Edit Your Profile\n      ")])],1)],1),e._v(" "),e.isEdited?r("div",{staticClass:"my_account_content container-small"},[r("tabs",[r("tab",{attrs:{title:"Personal Data"}},[r("ValidationObserver",{attrs:{tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.handleSubmit;return[r("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),n(e.updateProfile)}}},[r("div",{staticClass:"row"},[r("ValidationProvider",{staticClass:"col-6",attrs:{tag:"div",rules:"required|min:2"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_firstName",name:"firstName",label:"First Name",valid:!n[0],"error-message":n[0]},model:{value:e.form.firstName,callback:function(t){e.$set(e.form,"firstName",t)},expression:"form.firstName"}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{staticClass:"col-6",attrs:{tag:"div",rules:"required|min:2"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_lastName",name:"lastName",label:"Last Name",valid:!n[0],"error-message":n[0]},model:{value:e.form.lastName,callback:function(t){e.$set(e.form,"lastName",t)},expression:"form.lastName"}})]}}],null,!0)})],1),e._v(" "),r("ValidationProvider",{attrs:{tag:"div",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_email",type:"email",name:"email",label:"Your e-mail",valid:!n[0],"error-message":n[0],disabled:!0},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})]}}],null,!0)}),e._v(" "),r("div",{staticClass:"my-account-bottom-action-wrap"},[r("div",{staticClass:"form__button_wrap"},[r("SfButton",{staticClass:"form__button",attrs:{"data-cy":"my-profile-btn_update"},nativeOn:{click:function(t){return e.scrollToTop()}}},[e._v("Update Profile")])],1),e._v(" "),r("div",{staticClass:"form__button_wrap"},[r("SfButton",{staticClass:"form__button",attrs:{"data-cy":"my-profile-btn_cancel"},on:{click:function(t){e.isEdited=!1,e.scrollToTop()}}},[e._v("Cancel")])],1)])],1)]}}],null,!1,2831619478)})],1),e._v(" "),r("tab",{attrs:{title:"Password Change"}},[r("ValidationObserver",{attrs:{tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.handleSubmit;return[r("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),n(e.updatePassword)}}},[r("div",{staticClass:"form__horizontal"},[r("ValidationProvider",{attrs:{tag:"div",rules:"required|min:5",vid:"password"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_newPassword",type:"password",name:"newPassword",label:"New Password",valid:!n[0],"error-message":n[0]},model:{value:e.form.newPassword,callback:function(t){e.$set(e.form,"newPassword",t)},expression:"form.newPassword"}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{attrs:{tag:"div",rules:"required|confirmed:password"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element",attrs:{"data-cy":"my-profile-input_repeatPassword",type:"password",name:"repeatPassword",label:"Repeat Password",valid:!n[0],"error-message":n[0]},model:{value:e.form.repeatPassword,callback:function(t){e.$set(e.form,"repeatPassword",t)},expression:"form.repeatPassword"}})]}}],null,!0)})],1),e._v(" "),r("div",{staticClass:"my-account-bottom-action-wrap"},[r("div",{staticClass:"form__button_wrap"},[r("SfButton",{staticClass:"form__button",attrs:{"data-cy":"my-profile-btn_update-password"},nativeOn:{click:function(t){return e.scrollToTop()}}},[e._v("Change password")])],1),e._v(" "),r("div",{staticClass:"form__button_wrap"},[r("SfButton",{staticClass:"form__button",attrs:{"data-cy":"my-profile-btn_cancel"},nativeOn:{click:function(t){e.isEdited=!1,e.scrollToTop()}}},[e._v("Cancel")])],1)])])]}}],null,!1,2482359324)})],1)],1)],1):r("div",{staticClass:"user_profile_detail"},[e.displayName?r("SfProperty",{staticClass:"my-profile-cname",attrs:{name:"Name",value:e.displayName}}):e._e(),e._v(" "),e.email?r("SfProperty",{staticClass:"my-profile-cemail",attrs:{name:"Email",value:e.email}}):e._e(),e._v(" "),e.phone?r("SfProperty",{staticClass:"my-profile-cmobile",attrs:{name:"Mobile",value:e.phone}}):e._e()],1)])}),[],!1,null,null,null));t.default=R.exports},702:function(e,t,r){"use strict";r.r(t);var n=r(5),o=(r(49),r(21)),c=r(25),l=r(183),d=r(627),f=r(598),v=r(652),m=r(653),_=r(28),y=r(1),h=r(13),w=r(241),C={name:"AdressBook",components:{SfButton:o.a,SfIcon:c.a,SfHeading:l.a,SfLoader:d.a,SfNotification:f.a,UserBillingAddress:m.a,BillingAddressForm:v.a},props:{title:{type:String,default:"Address Book"}},setup:function(){var e=Object(_.n)(),t=e.billing,r=e.load,o=e.addAddress,c=e.deleteAddress,l=e.updateAddress,d=e.loading,f=Object(y.a)((function(){return _.r.getAddresses(t.value)})),v=Object(y.j)(!1),m=Object(y.j)(void 0),C=Object(y.a)((function(){return!m.value})),S=Object(w.a)().send,O=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(address){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c({address:address}).then((function(){t.value?(r(),S({key:"address_removed",message:"Address has been removed successfully",type:"success",title:"Address removed!",icon:"check"})):S({key:"address_removed",message:"Something went wrong, please retry",type:"danger",title:"Remove address failed!"})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(n){var form,c,d,f,_,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return form=n.form,c=n.onComplete,d=n.onError,e.prev=1,f=C.value?o:l,_="Addressbook updated successfully",C.value&&(_="Address added successfully"),e.next=7,f({address:form.value}).then((function(){t.value?(r(),S({key:"address_success",message:_,type:"success",title:"Success!",icon:"check"})):S({key:"address_failed",message:"Somethig went wrong, please retry",type:"danger",title:"Failed!"})}));case 7:return data=e.sent,v.value=!1,m.value=void 0,e.next=12,c(data);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),d(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.k)(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:case"end":return e.stop()}}),e)})))),{changeAddress:function(){var address=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;m.value=address,v.value=!0},updateAddress:l,removeAddress:O,saveAddress:k,userBillingGetters:_.r,addresses:f,edittingAddress:v,activeAddress:m,isNewAddress:C,loading:d}},data:function(){return{visible:!1,addressToRemove:{}}},methods:{ConfirmRemove:function(address){this.visible=!0,this.addressToRemove=address},handleRemove:function(address){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoadervisible=!0,t.next=3,e.removeAddress(address).then((function(){e.visible=!1}));case 3:case"end":return t.stop()}}),t)})))()}}},S=C,O=(r(645),r(2)),component=Object(O.a)(S,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"my_account_content_wrap"},[r("div",{staticClass:"my_accoutn_title_wrap"},[r("SfHeading",{staticClass:"my_accoutn_title",attrs:{level:1,title:e.title}})],1),e._v(" "),e.edittingAddress?r("div",{staticClass:"tab-orphan"},[r("div",{attrs:{"data-cy":"billing-details-tab_change"}},[r("BillingAddressForm",{attrs:{address:e.activeAddress,"is-new":e.isNewAddress},on:{submit:e.saveAddress}})],1)]):r("div",{staticClass:"tab-orphan"},[r("transition",{attrs:{name:"sf-collapse-top",mode:"out-in"}},[r("div",{staticClass:"notifications"},[e.loading?e._e():r("SfNotification",{attrs:{visible:e.visible,title:"Are you sure?",message:"Are you sure you would like to remove this address from your account?",type:"secondary"},scopedSlots:e._u([{key:"action",fn:function(){return[r("div",{staticClass:"button-wrap"},[r("SfButton",{on:{click:function(t){return e.handleRemove(e.addressToRemove)}}},[e._v("Yes")]),e._v(" "),r("SfButton",{on:{click:function(t){e.visible=!1}}},[e._v("Cancel")])],1)]},proxy:!0},{key:"close",fn:function(){return[r("div")]},proxy:!0}],null,!1,1994956572)})],1)]),e._v(" "),e.loading?r("SfLoader",{staticClass:"address-loader",class:{loading:e.loading},attrs:{loading:e.loading}},[r("div")]):e._e(),e._v(" "),e.loading?e._e():r("div",{attrs:{"data-cy":"billing-details-tab_details"}},[r("div",{staticClass:"billing-list"},[e._l(e.addresses,(function(address){return r("div",{key:e.userBillingGetters.getId(address),staticClass:"billing"},[r("div",{staticClass:"billing__wrap"},[r("div",{staticClass:"billing__content"},[r("div",{staticClass:"billing__address"},[r("UserBillingAddress",{attrs:{address:address}})],1)]),e._v(" "),r("div",{staticClass:"billing__actions"},[r("SfButton",{staticClass:" sf-button--text",attrs:{"data-cy":"billing-details-btn_change"},on:{click:function(t){e.changeAddress(address),e.scrollToTop()}}},[e._v("\n                Edit\n              ")]),e._v(" "),r("SfButton",{staticClass:"billing__button-delete sf-button--text",attrs:{"data-cy":"billing-details-btn_delete"},on:{click:function(t){return e.ConfirmRemove(address)}}},[e._v("\n                Delete\n              ")])],1)])])})),e._v(" "),r("div",{staticClass:"billing add-address-btn"},[r("div",{staticClass:"billing__wrap",on:{click:function(t){e.changeAddress(),e.scrollToTop()}}},[r("SfButton",{staticClass:"action-button sf-button--text",attrs:{"data-cy":"billing-details-btn_add"}},[r("SfIcon",{attrs:{icon:"plus"}}),e._v("\n              Add Address\n            ")],1)],1)])],2)])],1)])}),[],!1,null,"5fa24fe5",null);t.default=component.exports},703:function(e,t,r){"use strict";r.r(t);var n=r(5),o=(r(49),r(19),r(103),r(8),r(36),r(37),r(643),r(242),r(614)),c=r(773),l=r(21),d=r(380),f=r(82),v=r(25),m=r(127),_=r(183),y=r(651),h=r(190),w=r(627),C=r(1),S=r(28),O=r(13),k={name:"PersonalDetails",components:{SfTabs:o.a,SfTable:c.a,SfButton:l.a,SfProperty:d.a,SfLink:f.a,SfIcon:v.a,SfImage:m.a,SfHeading:_.a,SfAlert:y.a,SfBadge:h.a,SfLoader:w.a},props:{title:{type:String,default:"My Orders"}},setup:function(){var e=Object(S.o)(),t=e.orders,r=e.search,o=e.loading,c=Object(C.j)(null);Object(O.k)(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:case"end":return e.stop()}}),e)}))));var l=function(e,t){var a=document.createElement("a");document.body.appendChild(a),a.style="display: none";var r=window.URL.createObjectURL(e);a.href=r,a.download=t,a.click(),window.URL.revokeObjectURL(r)},d=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(new Blob([JSON.stringify(t.value)],{type:"application/json"}),"orders.json");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(new Blob([JSON.stringify(t)],{type:"application/json"}),"order "+S.c.getId(t)+".json");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{tableHeaders:["Order ID","Date and Time","Tracking Number","Name","Price","Status",""],orders:Object(C.a)((function(){return t?t.value:[]})),getStatusTextClass:function(e){switch(S.c.getStatus(e)){case O.a.Open:return"text-warning";case O.a.Complete:return"text-success";default:return""}},orderGetters:S.c,downloadOrder:f,downloadOrders:d,currentOrder:c,loading:o}},head:function(){return{title:"My Orders - Pure Daily Care",meta:[{hid:"My Orders - Pure Daily Care",name:"My Orders - Pure Daily Care",content:"Pure Daily Care promotes natural beauty by combining the most modern technologies into easy-to-use, at-home products. Pure Daily Care technologies harness the healing power of naturally occurring phenomenon like steam, electricity and light to drastically improve your skin profile without the use of cosmetics."}]}}},P=k,x=(r(647),r(2)),component=Object(x.a)(P,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"my_account_content_wrap"},[r("div",{class:null==e.currentOrder?"":"no-title",attrs:{"data-cy":"order-history-tab_my-orders no-title"}},[e.currentOrder?r("div",[[r("div",{staticClass:"order-head-wrapper"},[r("div",{staticClass:"order-number"},[r("SfButton",{staticClass:"sf-button--text all-orders",attrs:{"data-cy":"order-history-btn_orders"},on:{click:function(t){e.currentOrder=null,e.scrollToTop()}}},[r("SfIcon",{attrs:{icon:"arrow_left"}})],1),e._v("Order #"+e._s(e.orderGetters.getId(e.currentOrder))+"\n          ")],1),e._v(" "),r("SfBadge",{staticClass:"current-order-status"},[e._v(e._s(e.orderGetters.getStatus(e.currentOrder).toLowerCase()))])],1),e._v(" "),r("div",{staticClass:"order-date-wrap"},[r("p",[e._v("Date & Time: "),r("strong",[e._v(e._s(e.orderGetters.getDate(e.currentOrder)))])]),e._v(" "),"FULFILLED"===e.orderGetters.getStatus(e.currentOrder)?r("p",[e._v("\n            Order Tracking: "),r("strong",[e._v(e._s(e.orderGetters.getTracking(e.currentOrder)))]),e._v(" ")," - "!=e.orderGetters.getTracking(e.currentOrder)?r("span",{staticClass:"redirect-icon"},[r("SfLink",{attrs:{target:"_blank",href:e.orderGetters.getTrackingUrl(e.currentOrder)}},[r("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M13.8333 13.8333H2.16667V2.16667H8V0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.24167 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8H13.8333V13.8333ZM9.66667 0.5V2.16667H12.6583L4.46667 10.3583L5.64167 11.5333L13.8333 3.34167V6.33333H15.5V0.5H9.66667Z",fill:"#000000"}})])])],1):e._e()]):e._e()])],e._v(" "),r("div",{staticClass:"table-responsive"},[r("SfTable",{staticClass:"ordered-products-table"},[r("SfTableHeading",[r("SfTableHeader",{staticClass:"products__name text-left"},[e._v(e._s("Product name"))]),e._v(" "),r("SfTableHeader",{staticClass:"products__name"},[e._v(e._s("SKU"))]),e._v(" "),r("SfTableHeader",{staticClass:"products__name"},[e._v(e._s("Price"))]),e._v(" "),r("SfTableHeader",[e._v(e._s("Qty"))]),e._v(" "),r("SfTableHeader",[e._v(e._s("Subtotal"))])],1),e._v(" "),e._l(e.orderGetters.getItems(e.currentOrder),(function(t,i){return r("SfTableRow",{key:i},[r("SfTableData",{staticClass:"products__name"},[r("nuxt-link",{staticClass:"product-img",attrs:{to:"/products/"+e.orderGetters.getItemSlug(t)}},[r("SfImage",{attrs:{src:e.orderGetters.getItemImage(t)+"?fm=webp",height:"100",width:"100",lazy:!1,loading:"lazy"}})],1),e._v(" "),r("nuxt-link",{attrs:{to:"/products/"+e.orderGetters.getItemSlug(t)}},[e._v("\n              "+e._s(e.orderGetters.getItemName(t))+"\n            ")])],1),e._v(" "),r("SfTableData",{staticClass:"data-ordered-sku"},[r("strong",{staticClass:"mobile-lable"},[e._v("SKU:")]),e._v("\n            "+e._s(e.orderGetters.getItemSku(t))+"\n          ")]),e._v(" "),r("SfTableData",{staticClass:"data-ordered-price"},[r("strong",{staticClass:"mobile-lable"},[e._v("Price:")]),e._v("\n            "+e._s(e.$n(e.orderGetters.getItemPrice(t),"currency"))+"\n          ")]),e._v(" "),r("SfTableData",{staticClass:"data-ordered-quantity"},[r("strong",{staticClass:"mobile-lable"},[e._v("Qty:")]),e._v("\n            "+e._s(e.orderGetters.getItemQty(t))+"\n          ")]),e._v(" "),r("SfTableData",{staticClass:"data-ordered-subtotal"},[r("strong",{staticClass:"mobile-lable"},[e._v("Subtotal:")]),e._v("\n            "+e._s(e.$n(e.orderGetters.getSubtotalPrice(e.currentOrder),"currency"))+"\n          ")])],1)}))],2)],1),e._v(" "),r("div",{staticClass:"highlighted highlighted--total"},[r("SfProperty",{staticClass:"sf-property--full-width property",attrs:{name:"Subtotal",value:e.$n(e.orderGetters.getSubtotalPrice(e.currentOrder),"currency")}}),e._v(" "),r("SfProperty",{staticClass:"sf-property--full-width property",attrs:{name:"Shipping",value:e.$n(e.orderGetters.getShippingPrice(e.currentOrder),"currency")}}),e._v(" "),r("SfProperty",{staticClass:"sf-property--full-width property",attrs:{name:"Tax",value:e.$n(e.orderGetters.getTaxPrice(e.currentOrder),"currency")}}),e._v(" "),r("SfProperty",{staticClass:"sf-property--full-width property order-grand-total",attrs:{name:"Grand total",value:e.$n(e.orderGetters.getPrice(e.currentOrder),"currency")}}),e._v(" "),r("SfProperty",{staticClass:"sf-property--full-width property",attrs:{name:"Payment status",value:e.orderGetters.getPaymentStatus(e.currentOrder)}})],1),e._v(" "),r("div",{staticClass:"order-info-wrapper"},[r("SfHeading",{attrs:{title:"Order Information",level:4}}),e._v(" "),r("div",{staticClass:"order-info-cols"},[r("div",{staticClass:"order-info-col order-info-col-1"},[r("SfHeading",{attrs:{title:"Shipping Address",level:5}}),e._v(" "),"No shipping address available"!=e.orderGetters.getShippingAddress(e.currentOrder)?[r("p",[e._v(e._s(e.orderGetters.getCustomerName(e.currentOrder)))]),e._v(" "),e._l(e.orderGetters.getShippingAddress(e.currentOrder),(function(t,n){return r("div",{key:n},[e._v(e._s(t.value))])})),e._v(" "),""!=e.orderGetters.getCustomerPhone(e.currentOrder)?r("strong",[e._v(e._s(e.orderGetters.getCustomerPhone(e.currentOrder)))]):e._e()]:[r("p",[e._v("No shipping information provided yet!")])]],2),e._v(" "),r("div",{staticClass:"order-info-col order-info-col-3"},[r("SfHeading",{attrs:{title:"Billing Address",level:5}}),e._v(" "),"No shipping address available"!=e.orderGetters.getShippingAddress(e.currentOrder)?[r("p",[e._v(e._s(e.orderGetters.getCustomerName(e.currentOrder)))]),e._v(" "),e._l(e.orderGetters.getShippingAddress(e.currentOrder),(function(t,n){return r("div",{key:n},[e._v(e._s(t.value))])})),e._v(" "),""!=e.orderGetters.getCustomerPhone(e.currentOrder)?r("strong",[e._v(e._s(e.orderGetters.getCustomerPhone(e.currentOrder)))]):e._e()]:[r("p",[e._v("No billing information provided yet!")])]],2)])],1)],2):r("div",[r("div",{staticClass:"my_accoutn_title_wrap"},[r("SfHeading",{staticClass:"my_accoutn_title",attrs:{level:1,title:e.title}})],1),e._v(" "),e.loading?r("SfLoader",{staticClass:"order-loader",class:{loading:e.loading},attrs:{loading:e.loading}},[r("div")]):e._e(),e._v(" "),!e.loading&&e.orders&&e.orders.data&&0===e.orders.data.length?r("div",{staticClass:"no-orders my_account_content container-small"},[r("p",{staticClass:"no-orders__title"},[e._v(e._s("Currently you don't have any orders."))]),e._v(" "),r("div",{staticClass:"my-account-bottom-action-wrap"},[r("div",{staticClass:"form__button_wrap"},[r("SfButton",{staticClass:"no-orders__button form__button",attrs:{"data-cy":"order-history-btn_start",link:e.localePath("/c/accessories")}},[e._v("Start shopping")])],1)])]):e.loading?e._e():r("div",{staticClass:"table-responsive"},[r("SfTable",{staticClass:"orders-list-table"},[r("SfTableHeading",e._l(e.tableHeaders,(function(t){return r("SfTableHeader",{key:t},[e._v(e._s(t))])})),1),e._v(" "),e._l(e.orders.data,(function(t){return r("SfTableRow",{key:e.orderGetters.getId(t)},[r("SfTableData",{staticClass:"data-order-no"},[r("strong",{staticClass:"mobile-lable"},[e._v("Order no")]),e._v(" "),r("SfButton",{staticClass:"sf-button--text",attrs:{"data-cy":"order-history-btn_view"},on:{click:function(r){e.currentOrder=t}}},[e._v("\n                #"+e._s(e.orderGetters.getId(t))+"\n              ")])],1),e._v(" "),r("SfTableData",{staticClass:"data-order-date"},[r("strong",{staticClass:"mobile-lable"},[e._v("Date and Time")]),e._v("\n              "+e._s(e.orderGetters.getDate(t))+"\n            ")]),e._v(" "),"FULFILLED"===e.orderGetters.getStatus(t)?r("SfTableData",{staticClass:"data-order-tracking"},[r("strong",{staticClass:"mobile-lable"},[e._v("Tracking Number")]),e._v(" "),r("span",{staticClass:"order-track-wrap"},[e._v("\n                "+e._s(e.orderGetters.getTracking(t))+"\n                ")," - "!=e.orderGetters.getTracking(t)?r("span",[r("SfLink",{attrs:{target:"_blank",href:e.orderGetters.getTrackingUrl(t)}},[r("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M13.8333 13.8333H2.16667V2.16667H8V0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.24167 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8H13.8333V13.8333ZM9.66667 0.5V2.16667H12.6583L4.46667 10.3583L5.64167 11.5333L13.8333 3.34167V6.33333H15.5V0.5H9.66667Z",fill:"#666666"}})])])],1):e._e()])]):r("SfTableData",{staticClass:"data-order-tracking"},[r("strong",{staticClass:"mobile-lable"},[e._v("Tracking Number")]),e._v(" - ")]),e._v(" "),r("SfTableData",{staticClass:"data-order-name"},[r("strong",{staticClass:"mobile-lable"},[e._v("Name")]),e._v("\n              "+e._s(e.orderGetters.getCustomerName(t))+"\n            ")]),e._v(" "),r("SfTableData",{staticClass:"data-order-price"},[r("strong",{staticClass:"mobile-lable"},[e._v("Price")]),e._v("\n              "+e._s(e.$n(e.orderGetters.getPrice(t),"currency"))+"\n            ")]),e._v(" "),r("SfTableData",{staticClass:"data-order-status"},[r("strong",{staticClass:"mobile-lable"},[e._v("Status")]),e._v(" "),r("span",{class:e.getStatusTextClass(t)},[e._v(e._s(e.orderGetters.getStatus(t).toLowerCase()))])]),e._v(" "),r("SfTableData",{staticClass:"orders__view orders__element--right"},[r("SfButton",{staticClass:"sf-button--text",attrs:{"data-cy":"order-history-btn_view"},on:{click:function(r){e.currentOrder=t,e.scrollToTop()}}},[r("SfIcon",[[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#666666"}},[r("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),e._v(" "),r("path",{attrs:{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"}})])]],2),e._v(" "),r("strong",{staticClass:"mobile-lable"},[e._v("View Order")])],1)],1)],1)}))],2)],1)],1)])])}),[],!1,null,null,null);t.default=component.exports},737:function(e,t,r){"use strict";r(680)},801:function(e,t,r){"use strict";r.r(t);var n=r(5),o=(r(49),r(19),r(103),r(54),r(41),r(705)),c=r(794),l=r(130),d=r(82),f=r(1),v=r(28),m=r(700),_=r(702),y=r(678),h=r(703),w=r(13),C=r(241),S={name:"MyAccount",components:{SfBreadcrumbs:o.a,SfContentPages:c.a,SfMenuItem:l.a,MyProfile:m.default,AdressBook:_.default,LoyaltyCard:y.default,OrderHistory:h.default,SfLink:d.a},middleware:"authenticated",setup:function(e,t){var r=t.root,o=r.$router,c=r.$route,l=Object(v.m)(),d=l.logout,m=l.load,_=l.user,y=Object(v.h)("UpdateNewsletterPreference"),h=y.loading,S=y.content,O=y.search,k=Object(C.a)().send,P=Object(f.j)("");P=Object(f.a)((function(){return v.s.getToken(_.value)}));var x=Object(f.a)((function(){return v.s.AcceptsMarketingStatus(_.value)})),j=Object(f.a)((function(){return v.s.getEmailAddress(_.value)})),T=Object(f.a)((function(){return v.s.getCleanID(_.value)}));if(""!==P.value){var A=Object(f.a)((function(){var e=c.params.pageName;return e?(e.charAt(0).toUpperCase()+e.slice(1)).replace("-"," "):"My profile"})),N=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(title){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Log out"!==title){e.next=6;break}return e.next=3,d();case 3:return k({key:"logout_success",message:"You are successfully logged out",type:"success",icon:"check",title:"Loguut success"}),o.push("/"),e.abrupt("return");case 6:o.push("/my-account/".concat((title||"").toLowerCase().replace(" ","-")));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.k)(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:case"end":return e.stop()}}),e)})))),{loadUser:m,changeActivePage:N,activePage:A,acceptsMarketing:x,UpdateNewsletterPreference:O,email:j,id:T,NewsletterStatus:S,sendNotification:k,newsLetterLoading:h}}o.push("/")},data:function(){return{breadcrumbs:[{text:"Home",route:{link:"/"}},{text:"My Account",route:{link:"/my-account"}},{text:this.activePage,route:{link:"#"}}],currentPage:this.activePage}},methods:{updateNewsletterPreference:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.UpdateNewsletterPreference({ContentType:"updatePreferences",Email:t.email,isSubscribed:e,customerId:t.id}).then((function(){t.sendNotification({key:"preferences_updated",message:t.NewsletterStatus,type:"success",icon:"check",title:"Subscribed status"})}));case 2:return r.next=4,t.loadUser();case 4:case"end":return r.stop()}}),r)})))()}}},O=S,k=(r(737),r(2)),component=Object(k.a)(O,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"account"}},[r("SfBreadcrumbs",{staticClass:"breadcrumbs",attrs:{breadcrumbs:e.breadcrumbs},scopedSlots:e._u([{key:"link",fn:function(t){var n=t.breadcrumb;return[r("nuxt-link",{staticClass:"sf-link disable-active-link sf-breadcrumbs__breadcrumb",attrs:{"data-testid":n.text,to:n.route.link}},[e._v("\n        "+e._s(n.text)+"\n      ")])]}}])}),e._v(" "),r("SfContentPages",{staticClass:"my-account",attrs:{"data-cy":"account_content-pages",active:e.currentPage,title:"Menu"},on:{"click:change":function(t){e.currentPage=t}},scopedSlots:e._u([{key:"menu-item",fn:function(t){var n=t.page;return[r("SfMenuItem",{staticClass:"sf-content-pages__menu",class:{"is-active":n.title===e.activePage},attrs:{label:"Billing details"===n.title?"Address Book":"Order history"===n.title?"My Orders":n.title,icon:""},on:{click:function(t){return e.changeActivePage(n.title)}}})]}}])},[e._v(" "),r("SfContentPage",{attrs:{"data-cy":"Account-my-profile",title:"My profile"}},[r("MyProfile")],1),e._v(" "),r("SfContentPage",{attrs:{"data-cy":"Account-address-book",title:"Billing details"}},[r("AdressBook")],1),e._v(" "),r("SfContentPage",{attrs:{"data-cy":"Account-my-orders",title:"Order history"}},[r("OrderHistory")],1),e._v(" "),r("SfContentPage",{attrs:{"data-cy":"account-page_log-out",title:"Log out"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);