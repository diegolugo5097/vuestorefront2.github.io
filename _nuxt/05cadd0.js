(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{618:function(e,t,n){e.exports={}},629:function(e,t,n){"use strict";n(618)},650:function(e,t,n){"use strict";var o=n(808),r=n(127),l=n(21),c={name:"AppStoreBanner",components:{SfBanner:o.a,SfImage:r.a,SfButton:l.a}},d=(n(629),n(2)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SfBanner",{staticClass:"sf-banner--left desktop-only banner-app",attrs:{image:"/homepage/bannerD.png",subtitle:"Fashon to take away",title:"Download our application to your mobile"},scopedSlots:e._u([{key:"call-to-action",fn:function(){return[n("div",{staticClass:"banner-app__call-to-action"},[n("SfButton",{staticClass:"banner-app__button sf-button--pure",attrs:{"aria-label":"Go to Apple Product"},on:{click:function(){}}},[n("img",{attrs:{src:"/homepage/apple.png",width:"174",height:"57"}})]),e._v(" "),n("SfButton",{staticClass:"banner-app__button sf-button--pure",attrs:{"aria-label":"Go to Google Product"},on:{click:function(){}}},[n("img",{attrs:{src:"/homepage/google.png",width:"174",height:"57"}})])],1)]},proxy:!0}])})}),[],!1,null,"6f7e855c",null);t.a=component.exports},667:function(e,t,n){e.exports={}},672:function(e,t,n){e.exports={}},722:function(e,t,n){"use strict";n(667)},727:function(e,t,n){"use strict";n(672)},797:function(e,t,n){"use strict";n.r(t);var o=n(5),r=(n(49),n(19),n(103),n(793)),l=n(808),c=n(810),d=n(809),f=n(798),m=n(127),h=n(811),w=n(183),S=n(706),v=n(21),k=n(28),y=n(1),_=n(13),x=n(246),C=n(650),H=n(589),j=n(627),B={name:"RelatedProducts",components:{SfCarousel:f.a,SfProductCard:H.a,SfSection:d.a,SfLoader:j.a},props:{title:String,products:Array,loading:Boolean},setup:function(){return{productGetters:k.d}}},L=(n(722),n(2)),O=Object(L.a)(B,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SfSection",{staticClass:"section",attrs:{"title-heading":e.title}},[n("SfLoader",{class:{loading:e.loading},attrs:{loading:e.loading}},[n("SfCarousel",{staticClass:"carousel",attrs:{"data-cy":"related-products-carousel",settings:{peek:16,breakpoints:{1023:{peek:0,perView:2}}}}},e._l(e.products,(function(t,i){return n("SfCarouselItem",{key:i,staticClass:"carousel__item"},[n("SfProductCard",{attrs:{title:e.productGetters.getName(t),image:e.productGetters.getCoverImage(t),"regular-price":e.$n(e.productGetters.getPrice(t).regular,"currency"),"special-price":e.productGetters.getPrice(t).special&&e.$n(e.productGetters.getPrice(t).special,"currency"),link:e.localePath("/p/"+e.productGetters.getId(t)+"/"+e.productGetters.getSlug(t))}})],1)})),1)],1)],1)}),[],!1,null,"908a130c",null).exports,T={name:"Home",components:{SfHero:r.a,RelatedProducts:O,SfBanner:l.a,SfCallToAction:c.a,SfSection:d.a,SfCarousel:f.a,SfImage:m.a,SfBannerGrid:h.a,SfHeading:w.a,SfArrow:S.a,SfButton:v.a,MobileStoreBanner:C.a,LazyHydrate:x.a},setup:function(){var e=Object(k.j)("relatedProducts"),t=e.products,n=e.search,r=e.loading,l=Object(k.f)(),c=l.cart,d=l.load,f=l.addItem,m=l.isInCart;return Object(_.k)(Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({limit:8});case 2:return e.next=4,d();case 4:case"end":return e.stop()}}),e)})))),{products:Object(y.a)((function(){return k.d.getFiltered(t.value,{master:!0})})),getChkId:Object(y.a)((function(){return c.value.id})),productsLoading:r,productGetters:k.d,addToCart:f,isInCart:m}},data:function(){return{heroes:[{title:"Colorful summer dresses are already in store",subtitle:"SUMMER COLLECTION 2021",buttonText:"Learn more",background:"#eceff1",image:{mobile:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_328x224.jpg",desktop:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_1240x400.jpg"},link:"/c/women/women-clothing-shirts"},{title:"Colorful summer dresses are already in store",subtitle:"SUMMER COLLECTION 2021",buttonText:"Learn more",background:"#fce4ec",image:{mobile:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerH_328x224.jpg",desktop:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerH_1240x400.jpg"},link:"/c/women/women-clothing-dresses"},{title:"Colorful summer dresses are already in store",subtitle:"SUMMER COLLECTION 2021",buttonText:"Learn more",background:"#efebe9",image:{mobile:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerA_328x224.jpg",desktop:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerA_1240x400.jpg"},link:"/c/women/women-shoes-sandals",className:"sf-hero-item--position-bg-top-left sf-hero-item--align-right"}],banners:[{slot:"banner-A",subtitle:"Dresses",title:"Cocktail & Party",description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",buttonText:"Shop now",image:{mobile:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_328x343.jpg",desktop:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerF_332x840.jpg"},class:"sf-banner--slim desktop-only",link:"/c/women/women-clothing-skirts"},{slot:"banner-B",subtitle:"Dresses",title:"Linen Dresses",description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",buttonText:"Shop now",image:{mobile:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerE_328x343.jpg",desktop:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerE_496x840.jpg"},class:"sf-banner--slim banner-central desktop-only",link:"/c/women/women-clothing-dresses"},{slot:"banner-C",subtitle:"T-Shirts",title:"The Office Life",image:{mobile:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerC_328x343.jpg",desktop:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerC_332x400.jpg"},class:"sf-banner--slim banner__tshirt",link:"/c/women/women-clothing-shirts"},{slot:"banner-D",subtitle:"Summer Sandals",title:"Eco Sandals",image:{mobile:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerG_328x343.jpg",desktop:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerG_332x400.jpg"},class:"sf-banner--slim",link:"/c/women/women-shoes-sandals"}],showHome:!1}},methods:{toggleWishlist:function(e){this.products[e].isInWishlist=!this.products[e].isInWishlist},goToQuotes:function(){this.$router.push("/QuickOrder")}}},G=(n(727),n(631)),I=n.n(G),N=n(708),P=Object(L.a)(T,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("LazyHydrate",[n("h3",[e._v("Go To Quick Order Form")])]),e._v(" "),n("v-btn",{staticClass:"quickOrderBtn",attrs:{dark:""},on:{click:e.goToQuotes}},[e._v("Quick Order")]),e._v(" "),n("SfHero",{directives:[{name:"show",rawName:"v-show",value:e.showHome,expression:"showHome"}],staticClass:"hero"},e._l(e.heroes,(function(t,i){return n("SfHeroItem",{directives:[{name:"show",rawName:"v-show",value:e.showHome,expression:"showHome"}],key:i,class:t.className,attrs:{title:t.title,subtitle:t.subtitle,"button-text":t.buttonText,background:t.background,image:t.image}})})),1),e._v(" "),n("LazyHydrate",{attrs:{"when-visible":""}},[n("SfBannerGrid",{directives:[{name:"show",rawName:"v-show",value:e.showHome,expression:"showHome"}],staticClass:"banner-grid",attrs:{"banner-grid":1},scopedSlots:e._u([e._l(e.banners,(function(t){return{key:t.slot,fn:function(){return[n("SfBanner",{directives:[{name:"show",rawName:"v-show",value:e.showHome,expression:"showHome"}],key:t.slot,class:t.class,attrs:{title:t.title,subtitle:t.subtitle,description:t.description,"button-text":t.buttonText,image:t.image}})]},proxy:!0}}))],null,!0)})],1),e._v(" "),n("LazyHydrate",{attrs:{"when-visible":""}},[n("RelatedProducts",{directives:[{name:"show",rawName:"v-show",value:e.showHome,expression:"showHome"}],attrs:{products:e.products,loading:e.productsLoading,title:"Match it with"}})],1),e._v(" "),n("LazyHydrate",{attrs:{"when-visible":""}},[n("SfCallToAction",{directives:[{name:"show",rawName:"v-show",value:e.showHome,expression:"showHome"}],staticClass:"call-to-action",attrs:{title:"Subscribe to Newsletters","button-text":"Subscribe",description:"Be aware of upcoming sales and events. Receive gifts and special offers!",image:"https://cdn.shopify.com/s/files/1/0407/1902/4288/files/newsletter_1240x202.jpg?v=1616496568"}})],1),e._v(" "),n("LazyHydrate",{attrs:{"when-visible":""}},[n("MobileStoreBanner",{directives:[{name:"show",rawName:"v-show",value:e.showHome,expression:"showHome"}]})],1)],1)}),[],!1,null,"5823ab2f",null);t.default=P.exports;I()(P,{VBtn:N.a})}}]);