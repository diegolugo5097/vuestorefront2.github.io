(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{603:function(t,e,n){t.exports={}},607:function(t,e,n){"use strict";n(603)},608:function(t,e,n){t.exports={}},609:function(t,e,n){t.exports={}},615:function(t,e,n){"use strict";n(608)},616:function(t,e,n){t.exports={}},617:function(t,e,n){"use strict";n(609)},627:function(t,e,n){"use strict";var r={name:"SfLoader",props:{loading:{default:!0,type:Boolean}}},o=(n(607),n(2)),component=Object(o.a)(r,(function(t,e){var n=e._c;return n("div",e._g(e._b({ref:e.data.ref,class:[e.data.class,e.data.staticClass,"sf-loader"],style:[e.data.style,e.data.staticStyle]},"div",e.data.attrs,!1),e.listeners),[n("transition",{attrs:{name:"sf-fade",mode:"out-in"}},[e.props.loading?n("div",{staticClass:"sf-loader__overlay"},[e._t("loader",(function(){return[n("svg",{staticClass:"sf-loader__spinner",attrs:{role:"img",width:"38",height:"38",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg"}},[n("title",[e._v("Loading...")]),e._v(" "),n("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[n("circle",{attrs:{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}}),e._v(" "),n("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[n("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]}))],2):e._t("default")],2)],1)}),[],!0,null,null,null);e.a=component.exports},628:function(t,e,n){"use strict";n(616)},649:function(t,e,n){"use strict";var r=n(35),o=(n(43),n(56),n(20),n(8),n(25)),c={name:"SfCheckbox",directives:{focus:n(584).a},components:{SfIcon:o.a},model:{prop:"selected",event:"change"},props:{name:{type:String,default:""},value:{type:[String,Boolean],default:""},label:{type:String,default:""},hintMessage:{type:String,default:"Required."},required:{type:Boolean,default:!1},infoMessage:{type:String,default:""},errorMessage:{type:String,default:"This field is not correct."},valid:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},selected:{type:[Array,Boolean],default:function(){return[]}}},computed:{isChecked:function(){return"boolean"==typeof this.selected?this.selected:this.selected.includes(this.value)},computedMessageSlotName:function(){return this.messagesHandler("show-error-message","show-info-message",this.required?"show-hint-message":"")},computedMessage:function(){return this.messagesHandler(this.errorMessage,this.infoMessage,this.required?this.hintMessage:"")},computedMessageClass:function(){return this.messagesHandler("sf-checkbox__message--error","sf-checkbox__message--info",this.required?"sf-checkbox__message--hint":"")}},methods:{inputHandler:function(){var t=this;if("boolean"==typeof this.selected)this.$emit("change",!this.selected);else{var e=Object(r.a)(this.selected);e.includes(this.value)?e=e.filter((function(e){return e!==t.value})):e.push(this.value),this.$emit("change",e)}},messagesHandler:function(t,e,n){return this.errorMessage&&!this.valid?t:this.infoMessage&&this.valid?e:this.hintMessage?n:""}}},l=(n(615),n(2)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-checkbox",class:{"is-active":t.isChecked,"is-disabled":t.disabled,"has-error":!t.valid,"is-required":t.required},attrs:{"data-testid":t.name}},[n("label",{staticClass:"sf-checkbox__container"},[n("input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"sf-checkbox__input",attrs:{type:"checkbox",name:t.name,disabled:t.disabled},domProps:{value:t.value,checked:t.isChecked},on:{change:t.inputHandler}}),t._v(" "),t._t("checkmark",(function(){return[n("span",{staticClass:"sf-checkbox__checkmark",class:{"sf-checkbox__checkmark is-active":t.isChecked}},[n("SfIcon",{class:{"display-none":!t.isChecked},attrs:{icon:"check",color:"white"}})],1)]}),null,{isChecked:t.isChecked,disabled:t.disabled}),t._v(" "),t._t("label",(function(){return[n("span",{staticClass:"sf-checkbox__label",class:{"display-none":!t.label}},[t._v(t._s(t.label))])]}),null,{label:t.label,isChecked:t.isChecked,disabled:t.disabled})],2),t._v(" "),n("div",{staticClass:"sf-checkbox__message"},[n("transition",{attrs:{name:"sf-fade"}},[t.disabled?t._e():t._t(t.computedMessageSlotName,(function(){return[n("div",{class:t.computedMessageClass},[t._v(t._s(t.computedMessage))])]}),null,{computedMessage:t.computedMessage})],2)],1)])}),[],!1,null,null,null);e.a=component.exports},655:function(t,e,n){t.exports={}},656:function(t,e,n){t.exports={}},657:function(t,e,n){t.exports={}},658:function(t,e,n){t.exports={}},659:function(t,e,n){t.exports={}},704:function(t,e,n){"use strict";n(51);var r=n(21),o=n(248),c={name:"SfAddToCart",components:{SfButton:r.a,SfQuantitySelector:o.a},model:{prop:"qty"},props:{disabled:{type:Boolean,default:!1},qty:{type:[Number,String],default:1}}},l=(n(628),n(2)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-add-to-cart"},[t._t("quantity-select-input",(function(){return[n("SfQuantitySelector",{staticClass:"sf-add-to-cart__select-quantity",attrs:{qty:t.qty,"aria-label":"Quantity",disabled:t.disabled},on:{input:function(e){return t.$emit("input",e)}}})]}),null,{qty:t.qty}),t._v(" "),t._t("add-to-cart-btn",(function(){return[n("SfButton",t._g({staticClass:"sf-add-to-cart__button",attrs:{disabled:t.disabled}},t.$listeners),[t._v("\n      Add to cart\n    ")])]}))],2)}),[],!1,null,null,null);e.a=component.exports},705:function(t,e,n){"use strict";var r={name:"SfBreadcrumbs",inject:{components:{default:{SfLink:n(82).a}}},props:{breadcrumbs:{type:Array,default:function(){return[]}}},breadcrumbLast:function(t){return t.length-1}},o=(n(617),n(2)),component=Object(o.a)(r,(function(t,e){var n=e._c;return n("nav",e._g(e._b({class:[e.data.class,e.data.staticClass,"sf-breadcrumbs"],style:[e.data.style,e.data.staticStyle],attrs:{"aria-label":"breadcrumb"}},"nav",e.data.attrs,!1),e.listeners),[n("ol",{staticClass:"sf-breadcrumbs__list"},e._l(e.props.breadcrumbs,(function(t,i){return n("li",{key:i,staticClass:"sf-breadcrumbs__list-item",attrs:{"aria-current":e.$options.breadcrumbLast(e.props.breadcrumbs)===i&&"page"}},[e.$options.breadcrumbLast(e.props.breadcrumbs)!==i?[e._t("link",(function(){return[n(e.injections.components.SfLink,{tag:"component",staticClass:"sf-breadcrumbs__breadcrumb",attrs:{link:t.link,"data-testid":t.text}},[e._v("\n            "+e._s(t.text)+"\n          ")])]}),null,{breadcrumb:t})]:[e._t("current",(function(){return[n(e.injections.components.SfLink,{tag:"component",staticClass:"sf-breadcrumbs__breadcrumb current",attrs:{link:t.link}},[e._v("\n            "+e._s(t.text)+"\n          ")])]}),null,{breadcrumb:t})]],2)})),0)])}),[],!0,null,null,null);e.a=component.exports},710:function(t,e,n){"use strict";n(655)},711:function(t,e,n){"use strict";n(656)},712:function(t,e,n){"use strict";n(657)},713:function(t,e,n){"use strict";n(658)},714:function(t,e,n){"use strict";n(659)},796:function(t,e,n){"use strict";var r=n(35),o=(n(8),n(52),n(102),n(14),n(43),n(56),n(3)),c=n(584),l=(n(22),n(18),n(20),n(29),n(30),n(0));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={functional:!0,props:{transition:{type:[String,Boolean],default:"sf-expand"},group:{type:Boolean,default:!1}},render:function(t,e){var data=e.data,n=e.children,r=e.props,o=!1===r.transition,c={beforeEnter:function(t){t.style.setProperty("height","auto")},enter:function(t){t.style.setProperty("height","auto");var e=getComputedStyle(t).height;t.style.setProperty("height","0"),requestAnimationFrame((function(){t.style.setProperty("height",e)}))},leave:function(t){var e=getComputedStyle(t).height;t.style.setProperty("height",e),requestAnimationFrame((function(){t.style.setProperty("height","0")}))}};return t("transition",f(f({},data),{},{attrs:{name:o?"":r.transition},on:"sf-expand"===r.transition&&c}),n)}},m=n(238),_=n(21),v={name:"SfAccordionItem",directives:{focus:c.a},components:{SfChevron:m.a,SfButton:_.a,SfExpand:h},props:{header:{type:String,default:""}},data:function(){return{isOpen:!1}},methods:{accordionClick:function(){this.$parent.$emit("toggle",this._uid)}}},y=(n(713),n(2)),k=Object(y.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-accordion-item"},[t._t("header",(function(){return[n("SfButton",{staticClass:"sf-button--pure sf-accordion-item__header",class:{"is-open":t.isOpen},attrs:{"aria-pressed":t.isOpen.toString(),"aria-expanded":t.isOpen.toString(),"data-testid":"accordion-item-"+t.header},on:{click:t.accordionClick}},[t._v("\n      "+t._s(t.header)+"\n      "),t._t("additional-info"),t._v(" "),n("SfChevron",{staticClass:"sf-accordion-item__chevron",class:{"sf-chevron--right":!t.isOpen},attrs:{tabindex:"0"}})],2)]}),null,{header:t.header,isOpen:t.isOpen,accordionClick:t.accordionClick,showChevron:t.$parent.showChevron}),t._v(" "),n("SfExpand",{attrs:{transition:t.$parent.transition}},[n("div",{class:{"display-none":!t.isOpen}},[n("div",{staticClass:"sf-accordion-item__content"},[t._t("default")],2)])])],2)}),[],!1,null,null,null).exports;o.default.component("SfAccordionItem",k);var S={name:"SfAccordion",props:{open:{type:[String,Array],default:""},multiple:{type:Boolean,default:!1},transition:{type:String,default:"sf-expand"},showChevron:{type:Boolean,default:!0}},data:function(){return{items:[],openHeader:this.open,internalMultiple:this.multiple}},computed:{headersAreClosed:function(){return this.$children.map((function(header){return header.isOpen})).every((function(header){return!1===header}))}},watch:{open:function(t,e){if(t&&t!==e){var n=this.$children.find((function(e){return e.header===t}));this.toggleHandler(n._uid)}}},mounted:function(){this.$on("toggle",this.toggleHandler),this.setAccordionItems(),this.setAsOpen(),this.$emit("click:open-header")},updated:function(){this.setAccordionItems(),this.setAsOpen(),this.$emit("click:open-header")},methods:{setAccordionItems:function(){var t;this.$children&&this.$children.length&&(t=this.items).push.apply(t,Object(r.a)(this.$children))},setAsOpen:function(){var t=this;this.$children&&this.$children.length&&("all"===this.open&&(this.internalMultiple=!0,this.openHeader=this.items.map((function(t){return t.header}))),this.items.forEach((function(e){e.isOpen=Array.isArray(t.openHeader)?t.openHeader.includes(e.header):t.openHeader===e.header})))},toggleHandler:function(t){var e=this;if(this.internalMultiple||Array.isArray(this.openHeader)){var n=this.items.find((function(e){return e._uid===t}));n.isOpen=!n.isOpen,this.$emit("click:open",n.isOpen)}else this.items.forEach((function(n){n._uid===t?(n.isOpen=!n.isOpen,e.openHeader=n.header,e.$emit("click:open",e.openHeader)):n.isOpen=!1}));this.headersAreClosed&&(this.openHeader="")}}},C=(n(714),Object(y.a)(S,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"sf-accordion",class:{"has-chevron":t.showChevron}},[t._t("default")],2)}),[],!1,null,null,null));e.a=C.exports},805:function(t,e,n){"use strict";n(51);var r=n(649),o=n(368),c={name:"SfFilter",components:{SfCheckbox:r.a,SfColor:o.a},props:{label:{type:String,default:""},count:{type:[String,Number],default:""},selected:{type:Boolean,default:!1},color:{type:String,default:""}}},l=(n(710),n(2)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SfCheckbox",t._g({staticClass:"sf-filter",class:{"is-active":t.selected,"is-color":t.color},attrs:{name:t.label,selected:t.selected},scopedSlots:t._u([{key:"label",fn:function(){return[t._t("color",(function(){return[n("SfColor",{staticClass:"sf-filter__color",class:{"display-none":!t.color},attrs:{color:t.color,"has-badge":!1,selected:t.selected},on:{click:function(e){return t.$emit("change",!t.selected)}}})]}),null,{color:t.color,selected:t.selected}),t._v(" "),t._t("label",(function(){return[n("div",{staticClass:"sf-filter__label"},[t._v(t._s(t.label))])]}),null,{label:t.label}),t._v(" "),t._t("count",(function(){return[n("div",{staticClass:"sf-filter__count"},[t._v(t._s(t.count))])]}),null,{count:t.count})]},proxy:!0}],null,!0)},t.$listeners))}),[],!1,null,null,null);e.a=component.exports},806:function(t,e,n){"use strict";n(51);var r=n(184),o=n(25),c=n(82),l=n(247),d=n(127),f=n(21),h=n(704),m=n(324),_=n.n(m),v={name:"SfProductCardHorizontal",components:{SfPrice:r.a,SfRating:l.a,SfImage:d.a,SfIcon:o.a,SfLink:c.a,SfButton:f.a,SfAddToCart:h.a},props:{description:{type:String,default:""},image:{type:[Array,Object,String],default:""},imageWidth:{type:[String,Number],default:140},imageHeight:{type:[String,Number],default:200},title:{type:String,default:""},link:{type:[String,Object],default:null},linkTag:{type:String,default:void 0},scoreRating:{type:[Number,Boolean],default:!1},reviewsCount:{type:[Number,Boolean],default:!1},maxRating:{type:[Number,String],default:5},regularPrice:{type:[Number,String],default:null},specialPrice:{type:[Number,String],default:null},wishlistIcon:{type:[String,Array,Boolean],default:"heart"},isInWishlistIcon:{type:[String,Array],default:"heart_fill"},isInWishlist:{type:Boolean,default:!1},qty:{type:[Number,String],default:1}},data:function(){return{quantity:this.qty,productPlaceholder:_.a}},computed:{currentWishlistIcon:function(){return this.isInWishlist?this.isInWishlistIcon:this.wishlistIcon},ariaLabel:function(){return this.isInWishlist?"Remove from wishlist":"Add to wishlist"},wishlistIconClasses:function(){return"".concat("sf-product-card-horizontal__wishlist-icon"," ").concat(this.isOnWishlist?"sf-product-card-horizontal--on-wishlist":"")},itemQuantity:{get:function(){return"string"==typeof this.quantity?Number(this.quantity):this.quantity},set:function(t){this.quantity=t}}},methods:{toggleIsInWishlist:function(){this.$emit("click:wishlist",!this.isInWishlist)}}},y=(n(711),n(2)),component=Object(y.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-product-card-horizontal"},[n("div",{staticClass:"sf-product-card-horizontal__image-wrapper"},[t._t("image",(function(){return[n("SfLink",{staticClass:"\n          sf-product-card-horizontal__link\n          sf-product-card-horizontal__link--image\n        ",attrs:{link:t.link}},[Array.isArray(t.image)?t._l(t.image.slice(0,2),(function(picture,e){return n("SfImage",{key:e,staticClass:"sf-product-card-horizontal__picture",attrs:{src:picture,alt:t.title,width:t.imageWidth,height:t.imageHeight,placeholder:t.productPlaceholder}})})):n("SfImage",{staticClass:"sf-product-card-horizontal__image",attrs:{src:t.image,alt:t.title,width:t.imageWidth,height:t.imageHeight,placeholder:t.productPlaceholder}})],2)]}),null,{image:t.image,title:t.title,link:t.link,imageHeight:t.imageHeight,imageWidth:t.imageWidth})],2),t._v(" "),n("div",{staticClass:"sf-product-card-horizontal__main"},[n("div",{staticClass:"sf-product-card-horizontal__details"},[t._t("title",(function(){return[n("SfLink",{staticClass:"sf-product-card-horizontal__link",attrs:{link:t.link}},[n("h3",{staticClass:"sf-product-card-horizontal__title"},[t._v("\n            "+t._s(t.title)+"\n          ")])])]}),null,{title:t.title,link:t.link}),t._v(" "),t._t("description",(function(){return[n("p",{staticClass:"sf-product-card-horizontal__description desktop-only"},[t._v("\n          "+t._s(t.description)+"\n        ")])]})),t._v(" "),n("div",{staticClass:"sf-product-card-horizontal__configuration"},[t._t("configuration")],2)],2),t._v(" "),n("div",{staticClass:"sf-product-card-horizontal__actions-wrapper"},[t._t("price",(function(){return[n("SfPrice",{staticClass:"sf-product-card-horizontal__price",class:{"display-none":!t.regularPrice},attrs:{regular:t.regularPrice,special:t.specialPrice}})]}),null,{specialPrice:t.specialPrice,regularPrice:t.regularPrice}),t._v(" "),t._t("reviews",(function(){return[n("div",{staticClass:"sf-product-card-horizontal__reviews",class:{"display-none":!t.scoreRating}},["number"==typeof t.scoreRating?n("SfRating",{staticClass:"sf-product-card-horizontal__rating",attrs:{max:t.maxRating,score:t.scoreRating}}):t._e(),t._v(" "),n("SfButton",{staticClass:"sf-button--pure sf-product-card-horizontal__reviews-count",class:{"display-none":!t.reviewsCount},attrs:{"aria-label":"Read "+t.reviewsCount+" reviews about "+t.title,href:"#"},on:{click:function(e){return t.$emit("click:reviews")}}},[t._v("\n            ("+t._s(t.reviewsCount)+")\n          ")])],1)]}),null,{maxRating:t.maxRating,scoreRating:t.scoreRating}),t._v(" "),n("div",{staticClass:"sf-product-card-horizontal__actions"},[t._t("actions")],2),t._v(" "),n("div",{staticClass:"sf-product-card-horizontal__add-to-cart"},[t._t("add-to-cart",(function(){return[n("SfAddToCart",{staticClass:"sf-product-card-horizontal__add-to-cart desktop-only",on:{input:function(e){return t.$emit("input",e)},click:function(e){return t.$emit("click:add-to-cart",t.itemQuantity)}},model:{value:t.itemQuantity,callback:function(e){t.itemQuantity=e},expression:"itemQuantity"}})]}))],2)],2),t._v(" "),!1!==t.wishlistIcon?n("SfButton",{staticClass:"sf-button--pure smartphone-only",attrs:{"aria-label":t.ariaLabel+" "+t.title},on:{click:t.toggleIsInWishlist}},[t._t("wishlist-icon",(function(){return[n("SfIcon",{attrs:{icon:t.currentWishlistIcon,size:"19px","data-test":"sf-wishlist-icon"}})]}),null,{currentWishlistIcon:t.currentWishlistIcon})],2):t._e()],1)])}),[],!1,null,null,null);e.a=component.exports},807:function(t,e,n){"use strict";var r=n(0),o=(n(51),n(65),n(36),n(41),n(8),n(59),n(22),n(18),n(20),n(29),n(14),n(30),n(25)),c=n(82),l=n(21);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"SfPagination",components:{SfIcon:o.a,SfLink:c.a,SfButton:l.a},props:{total:{type:Number,default:0},visible:{type:Number,default:5},hasArrows:{type:Boolean,default:!0},current:{type:Number,default:1},pageParamName:{type:String,default:"page"}},computed:{hasRouter:function(){return this.$route},componentIs:function(){return this.hasRouter?"SfLink":"SfButton"},currentPage:function(){return this.hasRouter?this.$route.query[this.pageParamName]?parseInt(this.$route.query[this.pageParamName],10):1:this.current},getPrev:function(){return this.currentPage===this.firstVisiblePageNumber?this.currentPage:this.currentPage-1},canGoPrev:function(){return this.currentPage!==this.firstVisiblePageNumber},getNext:function(){return this.currentPage===this.lastVisiblePageNumber?this.currentPage:this.currentPage+1},canGoNext:function(){return this.currentPage!==this.lastVisiblePageNumber},showFirst:function(){return this.firstVisiblePageNumber>1},showLast:function(){return this.lastVisiblePageNumber<this.total},listOfPageNumbers:function(){return Array.from(Array(this.total),(function(t,i){return i+1}))},limitedPageNumbers:function(){return this.total<=this.visible?this.listOfPageNumbers:this.currentPage<this.visible-Math.floor(this.visible/2)+1?this.listOfPageNumbers.slice(0,this.visible):this.total-this.currentPage<this.visible-Math.ceil(this.visible/2)+1?this.listOfPageNumbers.slice(this.total-this.visible):this.listOfPageNumbers.slice(this.currentPage-Math.ceil(this.visible/2),this.currentPage+Math.floor(this.visible/2))},firstVisiblePageNumber:function(){return this.limitedPageNumbers[0]},lastVisiblePageNumber:function(){return this.limitedPageNumbers[this.limitedPageNumbers.length-1]}},methods:{go:function(t){this.$emit("click",t)},getLinkTo:function(t){var e=t.toString();return this.hasRouter?f(f({},this.$route),{},{query:f(f({},this.$route.query),{},Object(r.a)({},this.pageParamName,t))}):e}}},m=(n(712),n(2)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"sf-pagination"},[t._t("prev",(function(){return[n("div",{staticClass:"sf-pagination__item prev",class:{"display-none":!t.hasArrows}},[n(t.componentIs,{tag:"component",class:{"sf-button--pure":!t.hasRouter,"sf-arrow--transparent":!t.hasRouter&&!t.canGoPrev},attrs:{link:t.hasRouter?t.getLinkTo(t.getPrev):null,disabled:!t.hasRouter&&!t.canGoPrev,"aria-label":"Go to previous page","data-testid":"pagination-button-prev"},on:{click:function(e){!t.hasRouter&&t.go(t.getPrev)}}},[n("SfIcon",{attrs:{icon:"arrow_left",size:"1.125rem"}})],1)],1)]}),null,{isDisabled:!t.canGoPrev,go:t.go,prev:t.getPrev}),t._v(" "),[t._t("number",(function(){return[n(t.componentIs,{tag:"component",staticClass:"sf-pagination__item",class:{"sf-button--pure":!t.hasRouter,"display-none":!t.showFirst},attrs:{link:t.hasRouter?t.getLinkTo(1):null},on:{click:function(e){!t.hasRouter&&t.go(1)}}},[t._v("\n        1\n      ")])]}),null,{page:1}),t._v(" "),t._t("points",(function(){return[n("div",{staticClass:"sf-pagination__item",class:{"display-none":t.firstVisiblePageNumber<=2}},[t._v("\n        ...\n      ")])]}))],t._v(" "),t._l(t.limitedPageNumbers,(function(e){return[t._t("number",(function(){return[n(t.currentPage===e?"span":t.componentIs,{key:e,tag:"component",staticClass:"sf-pagination__item",class:{"sf-button--pure":!t.hasRouter&&t.currentPage!==e,current:t.currentPage===e},attrs:{link:t.hasRouter&&t.currentPage!==e?t.getLinkTo(e):null},on:{click:function(n){!t.hasRouter&&t.currentPage!==e&&t.go(e)}}},[t._v("\n        "+t._s(e)+"\n      ")])]}),null,{page:e,currentPage:t.currentPage})]})),t._v(" "),t.showLast?[t._t("points",(function(){return[n("div",{staticClass:"sf-pagination__item",class:{"display-none":t.lastVisiblePageNumber>=t.total-1}},[t._v("\n        ...\n      ")])]})),t._v(" "),t._t("number",(function(){return[n(t.componentIs,{tag:"component",staticClass:"sf-pagination__item",class:{"sf-button--pure":!t.hasRouter},attrs:{link:t.hasRouter?t.getLinkTo(t.total):null},on:{click:function(e){!t.hasRouter&&t.go(t.total)}}},[t._v("\n        "+t._s(t.total)+"\n      ")])]}),null,{page:t.total})]:t._e(),t._v(" "),t._t("next",(function(){return[n("div",{staticClass:"sf-pagination__item next",class:{"display-none":!t.hasArrows}},[n(t.componentIs,{tag:"component",class:{"sf-button--pure":!t.hasRouter,"sf-arrow--transparent":!t.hasRouter&&!t.canGoNext},attrs:{link:t.hasRouter?t.getLinkTo(t.getNext):null,disabled:!t.hasRouter&&!t.canGoNext,"aria-label":"Go to previous next","data-testid":"pagination-button-next"},on:{click:function(e){!t.hasRouter&&t.go(t.getNext)}}},[n("SfIcon",{attrs:{icon:"arrow_right",size:"1.125rem"}})],1)],1)]}),null,{isDisabled:!t.canGoNext,go:t.go,next:t.getNext})],2)}),[],!1,null,null,null);e.a=component.exports}}]);