(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{618:function(t,e,r){t.exports={}},629:function(t,e,r){"use strict";r(618)},650:function(t,e,r){"use strict";var n=r(808),o=r(127),c=r(21),l={name:"AppStoreBanner",components:{SfBanner:n.a,SfImage:o.a,SfButton:c.a}},d=(r(629),r(2)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SfBanner",{staticClass:"sf-banner--left desktop-only banner-app",attrs:{image:"/homepage/bannerD.png",subtitle:"Fashon to take away",title:"Download our application to your mobile"},scopedSlots:t._u([{key:"call-to-action",fn:function(){return[r("div",{staticClass:"banner-app__call-to-action"},[r("SfButton",{staticClass:"banner-app__button sf-button--pure",attrs:{"aria-label":"Go to Apple Product"},on:{click:function(){}}},[r("img",{attrs:{src:"/homepage/apple.png",width:"174",height:"57"}})]),t._v(" "),r("SfButton",{staticClass:"banner-app__button sf-button--pure",attrs:{"aria-label":"Go to Google Product"},on:{click:function(){}}},[r("img",{attrs:{src:"/homepage/google.png",width:"174",height:"57"}})])],1)]},proxy:!0}])})}),[],!1,null,"6f7e855c",null);e.a=component.exports},685:function(t,e,r){t.exports={}},686:function(t,e,r){t.exports={}},690:function(t,e,r){t.exports={}},741:function(t,e,r){"use strict";r(685)},742:function(t,e,r){"use strict";r(686)},746:function(t,e,r){"use strict";r(690)},792:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(5),c=(r(49),r(19),r(103),r(52),r(626),r(684),r(32),r(8),r(14),r(22),r(18),r(20),r(29),r(30),r(651)),l=r(368),d=r(627),f=r(380),_=r(183),m=r(184),h=r(247),v=r(590),y=r(704),S=r(614),k=r(812),C=r(25),w=r(127),O=r(808),P=r(813),j=r(814),I=r(190),x=r(705),B=r(21),G=r(13),L=r(809),D=r(50);function A(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var $={name:"InstagramFeed",components:{SfSection:L.a,SfImage:w.a},setup:function(){return{addBasePath:G.f}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(D.a)()),beforeDestroy:function(){Object(D.b)()}},E=$,T=(r(741),r(2)),F=Object(T.a)(E,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SfSection",{staticClass:"title",attrs:{"title-heading":"Share Your Look","subtitle-heading":"#YOURLOOK"}},[r("div",{staticClass:"grid grid-images"},[r("div",{staticClass:"grid__row"},[r("div",{staticClass:"grid__col"},[t.isMobile?r("SfImage",{attrs:{src:t.addBasePath("/homepage/imageAm.webp"),alt:"katherina_trn",width:160,height:160}},[t._v("katherina_trn")]):r("SfImage",{attrs:{src:t.addBasePath("/homepage/imageAd.webp"),alt:"katherina_trn",width:470,height:470}},[t._v("katherina_trn")])],1),t._v(" "),r("div",{staticClass:"grid__col small"},[t.isMobile?r("SfImage",{attrs:{src:t.addBasePath("/homepage/imageBm.webp"),alt:"katherina_trn",width:160,height:160}},[t._v("katherina_trn")]):r("SfImage",{attrs:{src:t.addBasePath("/homepage/imageCd.webp"),alt:"katherina_trn",width:470,height:160}},[t._v("katherina_trn")])],1)]),t._v(" "),r("div",{staticClass:"grid__row"},[r("div",{staticClass:"grid__col small"},[t.isMobile?r("SfImage",{attrs:{src:t.addBasePath("/homepage/imageCm.webp"),alt:"katherina_trn",width:160,height:160}},[t._v("katherina_trn")]):r("SfImage",{attrs:{src:t.addBasePath("/homepage/imageBd.webp"),alt:"katherina_trn",width:470,height:160}},[t._v("katherina_trn")])],1),t._v(" "),r("div",{staticClass:"grid__col"},[t.isMobile?r("SfImage",{attrs:{src:t.addBasePath("/homepage/imageDm.webp"),alt:"katherina_trn",width:160,height:160}},[t._v("katherina_trn")]):r("SfImage",{attrs:{src:t.addBasePath("/homepage/imageDd.webp"),alt:"katherina_trn",width:470,height:470}},[t._v("katherina_trn")])],1)])])])}),[],!1,null,"eb1fb194",null).exports,H=r(798),R=r(589),M=r(82),V=r(28),z={name:"RelatedProducts",components:{SfCarousel:H.a,SfProductCard:R.a,SfSection:L.a,SfLoader:d.a,SfLink:M.a,SfPrice:m.a},props:{title:String,products:Array,loading:Boolean},setup:function(){return{productGetters:V.d}},data:function(){return{pdpUpsellSettings:{type:"slider",perView:4,peek:0,autoplay:!1,animationDuration:600,gap:20,breakpoints:{1023:{perView:3,peek:{before:0,after:72}},767:{perView:2,peek:{before:0,after:72}},510:{perView:1,peek:{before:0,after:72}}}}}}},N=(r(742),Object(T.a)(z,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SfSection",{staticClass:"section pdc-sec-title pdp-upsell-section",attrs:{"title-heading":t.title}},[r("SfLoader",{class:{loading:t.loading},attrs:{loading:t.loading}},[r("SfCarousel",{ref:"bscarousel",staticClass:"carousel",attrs:{"data-cy":"related-products-carousel",settings:t.pdpUpsellSettings}},t._l(t.products,(function(e,i){return r("SfCarouselItem",{key:i,staticClass:"carousel__item"},[r("SfProductCard",{staticClass:"pdp-product-card",attrs:{title:t.productGetters.getName(e),image:t.productGetters.getPDPCoverImage(e,"medium"),link:t.localePath("/p/"+t.productGetters.getId(e)+"/"+t.productGetters.getSlug(e)),"wishlist-icon":!1,"image-width":295,"image-height":295},scopedSlots:t._u([{key:"title",fn:function(){return[r("SfLink",{staticClass:"sf-product-card__link",attrs:{link:t.localePath("/p/"+t.productGetters.getId(e)+"/"+t.productGetters.getSlug(e))}},[r("h3",{staticClass:"sf-product-card__title"},[t._v("\n                "+t._s(t.productGetters.getName(e))+"\n              ")])])]},proxy:!0},{key:"price",fn:function(){return[r("SfPrice",{staticClass:"sf-product-card__price",scopedSlots:t._u([t.productGetters.getPrice(e).special?{key:"special",fn:function(){return[r("ins",{staticClass:"sf-price__special"},[t._v(t._s(t.$n(t.productGetters.getPrice(e).special,"currency")))])]},proxy:!0}:null,{key:"old",fn:function(){return[r("span")]},proxy:!0},t.productGetters.getPrice(e).regular>0?{key:"regular",fn:function(){return[r("del",{staticClass:"sf-price__old"},[t._v(t._s(t.$n(t.productGetters.getPrice(e).regular,"currency")))])]},proxy:!0}:null],null,!0)})]},proxy:!0}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,null,null).exports),W=r(1),Z=r(650),U=r(246),J=r(241);function K(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function Q(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?K(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):K(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var Y={name:"Product",components:{SfAlert:c.a,SfColor:l.a,SfLoader:d.a,SfProperty:f.a,SfHeading:_.a,SfPrice:m.a,SfRating:h.a,SfSelect:v.a,SfAddToCart:y.a,SfTabs:S.a,SfGallery:k.a,SfIcon:C.a,SfImage:w.a,SfBanner:O.a,SfSticky:P.a,SfReview:j.a,SfBadge:I.a,SfBreadcrumbs:x.a,SfButton:B.a,InstagramFeed:F,RelatedProducts:N,MobileStoreBanner:Z.a,LazyHydrate:U.a},beforeRouteEnter:function(t,e,r){r((function(t){t.prevRoute=e}))},transition:"fade",setup:function(t,e){var r=Object(W.j)([]),n=Object(W.j)(1),c=e.root.$route.params.slug,l=Object(V.j)("products"),d=l.loading,f=l.products,_=l.search,m=Object(J.a)().send,h=Object(V.j)("relatedProducts"),v=h.products,y=h.search,S=h.loading,k=Object(V.f)(),C=k.addItem,w=k.loading,O={id:"test1",name:"Test",coverImage:"https://cdn.shopify.com/s/files/1/0407/1902/4288/products/ZA030136_011_p_600x600.jpg?v=1593091618",price:269,type:"Blouse",rating:4},P=Object(W.a)((function(){return V.d.getId(O.value)})),j=Object(W.a)((function(){return V.d.getProductOriginalId(O.value)})),I=Object(W.a)((function(){return V.d.getName(O.value)})),x=Object(W.a)((function(){return V.d.getPDPCoverImage(O.value)})),B=Object(W.a)((function(){return V.d.getDescription(O.value)})),L=Object(W.a)((function(){return V.d.getDescription(O.value,!0)})),D=Object(W.a)((function(){return V.d.getAttributes(f.value)})),A=Object(W.a)((function(){return V.d.getSelectedVariant(f.value,e.root.$route.query)})),$=function(){r.value=[{text:"Home",route:{link:"/"}},{text:"products",route:{link:"#"}},{text:I.value,route:{link:"#"}}]};Object(W.q)(I,(function(t,e){t!==e&&$()}),{deep:!0});var E=[{small:"https://cdn.shopify.com/s/files/1/0407/1902/4288/products/ZA030136_011_p_600x600.jpg?v=1593091618",normal:"https://cdn.shopify.com/s/files/1/0407/1902/4288/products/ZA030136_011_p_600x600.jpg?v=1593091618",big:"https://cdn.shopify.com/s/files/1/0407/1902/4288/products/ZA030136_011_p_600x600.jpg?v=1593091618",alt:"image"}],T=Object(W.a)((function(){return V.d.getStock(O.value)})),F=Object(W.a)((function(){return V.d.getVariantImage(O.value)||0}));Object(G.k)(Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_({slug:c,selectedOptions:A.value}).then((function(){if("Product's name"===I.value)return e.root.error({statusCode:404,message:"This product could not be found"})}));case 2:return t.next=4,y({productId:P.value,related:!0});case 4:case"end":return t.stop()}}),t)}))));return{updateFilter:function(filter){D.value&&Object.keys(D.value).forEach((function(t){t in filter||(filter[t]=Object.keys(A.value).length>0?A.value[t]:D.value[t][0].value)})),e.root.$router.push({path:e.root.$route.path,query:Q(Q({},A.value),filter)})},configuration:A,product:O,productDescription:B,productCoverImage:x,productDescriptionHtml:L,ActiveVariantImage:F,sendNotification:m,originalId:j,relatedProducts:Object(W.a)((function(){return V.d.getFiltered(v.value,{master:!0})})),relatedLoading:S,options:D,stock:T,productTitle:I,breadcrumbs:r,qty:n,addItem:C,loading:w,productloading:d,productGallery:function(){return O.value&&0===O.value.images.length&&O.value.images.push({originalSrc:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/placeholder_600x600.jpg?v=1625742127"}),E.map((function(img){return{mobile:{url:img.small},desktop:{url:img.normal},big:{url:img.big},alt:O.name||O.value.name}}))},productGetters:V.d,setBreadcrumb:$,atttLbl:""}},data:function(){return{stock:5,properties:[{name:"Product Code",value:"578902-00"},{name:"Category",value:"Pants"},{name:"Material",value:"Cotton"},{name:"Country",value:"Germany"}],description:"Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",detailsIsActive:!1,brand:"Brand name is the perfect pairing of quality and design. This label creates major everyday vibes with its collection of modern brooches, silver and gold jewellery, or clips it back with hair accessories in geo styles.",careInstructions:"Do not wash!"}},mounted:function(){var t=this;window.addEventListener("load",(function(){t.setGalleryWidth()})),this.$nextTick((function(){t.setGalleryWidth(),t.setBreadcrumb(),window.addEventListener("resize",t.setGalleryWidth)}))},updated:function(){this.setGalleryWidth()},methods:{addingToCart:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.addItem(t).then((function(){e.sendNotification({key:"product_added",message:"".concat(t.product.name," has been successfully added to your cart."),type:"success",title:"Product added!",icon:"check"}),e.qty=1}));case 2:case"end":return r.stop()}}),r)})))()},updatedQuantity:function(t){this.qty=t},setGalleryWidth:function(){var t=document.getElementsByClassName("product__gallery"),e=t.length>0&&t[0].querySelectorAll(".glide__slides"),r=e.length>0&&e[0].querySelectorAll(".glide__slide");"boolean"!=typeof r&&r.length>0&&r.forEach((function(t){t.style.flexBasis=t.style.width}))}}},X=(r(746),Object(T.a)(Y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.productloading?r("SfLoader",{staticClass:"pdc-pdp-loader",attrs:{loading:t.productloading}},[r("div")]):r("div",{attrs:{id:"product"}},[r("SfBreadcrumbs",{staticClass:"breadcrumbs",attrs:{breadcrumbs:t.breadcrumbs},scopedSlots:t._u([{key:"link",fn:function(e){var n=e.breadcrumb;return[r("nuxt-link",{staticClass:"sf-link disable-active-link sf-breadcrumbs__breadcrumb",attrs:{"data-testid":n.text,to:n.route.link}},[t._v("\n        "+t._s(n.text)+"\n      ")])]}}])}),t._v(" "),r("div",{staticClass:"product"},[r("SfGallery",{staticClass:"product__gallery",attrs:{images:t.productGallery(),current:t.ActiveVariantImage+1,"image-width":"422","image-height":"664","thumb-width":"160","thumb-height":"160"}}),t._v(" "),r("div",{staticClass:"product__info"},[r("div",{staticClass:"product__header"},[r("SfHeading",{staticClass:"sf-heading--no-underline sf-heading--left",attrs:{title:t.product.name,level:1}}),t._v(" "),r("div",{staticClass:"product_stock_wrap"},[r("SfBadge",{staticClass:"sf-badge--number",class:t.productGetters.getStockStatus(t.product)?"color-success":"color-danger"},[t._v("\n            "+t._s(t.productGetters.getStockStatus(t.product)?"In stock":"Out of Stock")+"\n          ")]),t._v(" "),r("SfIcon",{staticClass:"product__drag-icon smartphone-only",attrs:{icon:"drag",size:"xxl",color:"var(--c-text-disabled)"}})],1),t._v(" "),r("div",{staticClass:"product__price-and-rating"},[t.productGetters.getPrice(t.product).special&&parseFloat(t.productGetters.getPrice(t.product).special)<parseFloat(t.productGetters.getPrice(t.product).regular)?[r("SfPrice",{attrs:{regular:t.$n(t.product.price,"currency"),special:t.$n(t.productGetters.getPrice(t.product).special,"currency")}}),t._v(" "),r("SfBadge",{staticClass:"sf-badge--number"},[t._v("\n              "+t._s(t.productGetters.getDiscountPercentage(t.product))+"% off\n            ")])]:t.productGetters.getPrice(t.product).special&&parseFloat(t.productGetters.getPrice(t.product).special)>parseFloat(t.productGetters.getPrice(t.product).regular)?r("SfPrice",{attrs:{regular:t.$n(t.productGetters.getPrice(t.product).special,"currency")}}):r("SfPrice",{attrs:{regular:t.$n(t.product.price,"currency")}})],2)],1),t._v(" "),r("div",[t.productDescription?r("p",{staticClass:"product__description desktop-only"},[t._v("\n          "+t._s(t.productDescription)+"\n        ")]):t._e(),t._v(" "),t.options&&Object.keys(t.options).length>0?r("div",[t._l(t.options,(function(option,e){return["color"!==e.toLowerCase()?r("SfSelect",{key:"attrib-"+e,class:"sf-select--underlined product__select-"+e.toLowerCase(),attrs:{"data-cy":"product-select_"+e.toLowerCase(),set:t.atttLbl=e,value:t.configuration[e]||t.options[e][0],label:t.$t(""+e),required:!0},on:{input:function(e){var r;return t.updateFilter(((r={})[t.atttLbl]=e,r))}}},t._l(option,(function(e,a){return r("SfSelectOption",{key:"item-"+a,attrs:{value:e}},[t._v("\n                "+t._s(e)+"\n              ")])})),1):r("div",{key:"attrib-"+e.toLowerCase(),class:"product__"+e.toLowerCase()+"s"},[r("p",{staticClass:"product__color-label"},[t._v(t._s(t.$t(""+e))+":")]),t._v(" "),t._l(option,(function(n,a){return r("SfColor",{key:"item-"+a,class:"product__color "+n,attrs:{"data-cy":"product-color_update",color:n,selected:t.configuration[e]?t.configuration[e]===n:0===a},on:{click:function(r){var o;t.atttLbl=e,t.updateFilter(((o={})[t.atttLbl]=n,o))}}})}))],2)]}))],2):t._e(),t._v(" "),r("SfAddToCart",{staticClass:"product__add-to-cart",attrs:{"data-cy":"product-cart_add",stock:t.stock,"can-add-to-cart":t.stock>0},scopedSlots:t._u([{key:"add-to-cart-btn",fn:function(){return[r("SfButton",{staticClass:"sf-add-to-cart__button",attrs:{disabled:t.loading},on:{click:function(e){t.addingToCart({product:t.product,quantity:parseInt(t.qty),customQuery:[{key:"CustomAttrKey",value:"CustomAttrValue"}]})}}},[t._v("\n              Add to Bag\n            ")])]},proxy:!0}]),model:{value:t.qty,callback:function(e){t.qty=e},expression:"qty"}}),t._v(" "),r("LazyHydrate",{attrs:{"when-idle":""}},[r("SfTabs",{staticClass:"product__tabs",attrs:{"open-tab":1}},[r("SfTab",{attrs:{"data-cy":"product-tab_description",title:"Description"}},[t.productDescriptionHtml?r("div",{staticClass:"product__description"},[r("div",{domProps:{innerHTML:t._s(t.productDescriptionHtml)}})]):t._e(),t._v(" "),t._l(t.properties,(function(e,i){return r("SfProperty",{key:i,staticClass:"product__property",attrs:{name:e.name,value:e.value},scopedSlots:t._u(["Category"===e.name?{key:"value",fn:function(){return[r("SfButton",{staticClass:"product__property__button sf-button--text"},[t._v("\n                    "+t._s(e.value)+"\n                  ")])]},proxy:!0}:null],null,!0)})}))],2),t._v(" "),r("SfTab",{staticClass:"product__additional-info",attrs:{title:"Additional Information","data-cy":"product-tab_additional"}},[r("div",{staticClass:"product__additional-info"},[r("p",{staticClass:"product__additional-info__title"},[t._v("\n                  "+t._s(t.$t("Brand"))+"\n                ")]),t._v(" "),r("p",[t._v(t._s(t.brand))]),t._v(" "),r("p",{staticClass:"product__additional-info__title"},[t._v("\n                  "+t._s(t.$t("Instruction1"))+"\n                ")]),t._v(" "),r("p",{staticClass:"product__additional-info__paragraph"},[t._v("\n                  "+t._s(t.$t("Instruction2"))+"\n                ")]),t._v(" "),r("p",{staticClass:"product__additional-info__paragraph"},[t._v("\n                  "+t._s(t.$t("Instruction3"))+"\n                ")]),t._v(" "),r("p",[t._v(t._s(t.careInstructions))])])])],1)],1)],1)])],1),t._v(" "),r("LazyHydrate",{attrs:{"when-visible":""}},[r("RelatedProducts",{attrs:{products:t.relatedProducts,loading:t.relatedLoading,title:"Match it with"}})],1),t._v(" "),r("LazyHydrate",{attrs:{"when-visible":""}},[r("InstagramFeed")],1),t._v(" "),r("LazyHydrate",{attrs:{"when-visible":""}},[r("MobileStoreBanner")],1)],1)}),[],!1,null,"213564ff",null));e.default=X.exports}}]);