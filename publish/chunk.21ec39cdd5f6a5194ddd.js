(window.webpackJsonp=window.webpackJsonp||[]).push([[22,10],{158:function(t,e,s){"use strict";var i=s(17),o=s(30),a=s(31),r=s(20),n=s(70),c=s(32),d=s(22),u=s(2),l=s(7),h=s(174),p=s(176),b=s(175),_=s(178),m=s(25),g=s(162);const y=(t,e)=>{if("object"==typeof window){t=`productCard${t}Html`;const s="function"==typeof window[t]?window[t](e):window[t];if("string"==typeof s)return s}};var f={name:"ProductCard",components:{ALink:h.a,APicture:p.a,APrices:b.a,ProductVariations:_.a},props:{product:Object,productId:String,isSmall:Boolean,headingTag:{type:String,default:"h3"},buyText:String,transitionClass:{type:String,default:"animated fadeIn"},canAddToCart:{type:Boolean,default:!0},ecomPassport:{type:Object,default:()=>m.a},accountUrl:{type:String,default:"/app/#/account/"},isLoaded:Boolean,installmentsOption:Object,discountOption:Object},data:()=>({body:{},isLoading:!1,isWaitingBuy:!1,isHovered:!1,isFavorite:!1,error:""}),computed:{i19addToFavorites:()=>Object(o.a)(i.m),i19outOfStock:()=>Object(o.a)(i.Pc),i19unavailable:()=>Object(o.a)(i.ge),i19uponRequest:()=>"Sob consulta",isWithoutPrice(){return!Object(a.a)(this.body)},ratingHtml(){return y("Rating",this.body)},buyHtml(){return y("Buy",this.body)},footerHtml(){return y("Footer",this.body)},name(){return Object(r.a)(this.body)},strBuy(){return this.buyText||"object"==typeof window&&window.productCardBuyText||Object(o.a)(i.z)},isInStock(){return Object(n.a)(this.body)},isActive(){return this.body.available&&this.body.visible&&this.isInStock},isLogged:()=>m.a.checkAuthorization(),discount(){const{body:t}=this;return Object(c.a)(t)?Math.round(100*(t.base_price-Object(a.a)(t))/t.base_price):0},hasColors(){const{body:t}=this;return!!t.variations&&t.variations.some((t=>{const{specifications:e}=t;return Object.keys(e).includes("colors")}))},bodyWithColors(){const{body:t}=this,e=Object.assign({},t);if(e.variations){const t=e.variations.map((t=>{const{specifications:e}=t;if(Object.keys(e).includes("colors"))for(const t in e)Object.hasOwnProperty.call(e,t)&&"colors"!==t&&delete e[t];return t}));return{...e,variations:t}}},patternUrl(){const{body:t}=this;if(t.categories){if(t.categories.some((t=>"6492f2735e6069037042bb18"===t._id))){if(t.specs){const{specs:e}=t,s=e.findIndex((t=>"pattern"===t.grid));return s?`/search?filters[]=pattern:${e[s].text}`:null}return null}return null}return null}},methods:{setBody(t){this.body=Object.assign({},t),delete this.body.body_html,delete this.body.body_text,delete this.body.inventory_records,delete this.body.price_change_records,this.isFavorite=Object(g.a)(this.body._id,this.ecomPassport)},fetchItem(){this.productId&&(this.isLoading=!0,Object(u.g)({url:`/products/${this.productId}.json`}).then((t=>{let{data:e}=t;this.$emit("update:product",e),this.setBody(e),this.$emit("update:is-loaded",!0)})).catch((t=>{console.error(t),this.body.name&&this.body.slug&&this.body.pictures||(this.error=Object(o.a)(i.V))})).finally((()=>{this.isLoading=!1})))},toggleFavorite(){this.isLogged&&(this.isFavorite=Object(g.b)(this.body._id,this.ecomPassport))},buy(){const t=this.body;this.$emit("buy",{product:t}),this.canAddToCart&&(this.isWaitingBuy=!0,Object(u.g)({url:`/products/${t._id}.json`}).then((e=>{let{data:i}=e;const o=["variations","customizations","kit_composition"];for(let t=0;t<o.length;t++){const e=i[o[t]];if(e&&e.length)return Promise.all([s.e(0),s.e(2),s.e(5),s.e(18),s.e(29)]).then(s.bind(null,384)).then((t=>{new d.a({render:e=>e(t.default,{props:{product:i}})}).$mount(this.$refs.quickview)}))}const{quantity:a,price:r}=i;l.a.addProduct({...t,quantity:a,price:r})})).catch((e=>{console.error(e),window.location=`/${t.slug}`})).finally((()=>{this.isWaitingBuy=!1})))},showVariationPicture(t){if(t.picture_id){const e=this.body.pictures.findIndex((e=>{let{_id:s}=e;return s===t.picture_id}));this.currentGalleyImg=e+1}},handleGridOption(t){let{gridId:e,gridIndex:s,optionText:i}=t;if(0===s){this.body.variations.find((t=>getSpecTextValue(t,e)===i))}}},created(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}};e.a=f},164:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-card",class:{"product-card--inactive":t.body._id&&!t.isActive,"product-card--small":t.isSmall},attrs:{"data-product-id":t.body._id,"data-sku":t.body.sku},on:{mouseover:function(e){t.isHovered=!0}}},[s("transition",{attrs:{"enter-active-class":t.transitionClass}},[t.isLoading||t.patternUrl?t._e():s("section",[t._t("discount-tag",(function(){return[t.isActive&&t.discount>0?s("span",{staticClass:"product-card__offer-stamp"},[s("i",{staticClass:"i-arrow-down"}),t._v(" "),s("b",[t._v(t._s(t.discount))]),t._v("% ")]):t._e()]}),null,{discount:t.discount}),t._t("stamps"),t._t("body",(function(){return[s("a-link",{staticClass:"product-card__link",attrs:{href:"/"+t.body.slug,title:t.name}},[t._t("header"),s("div",{staticClass:"product-card__pictures"},[t.body.pictures&&t.body.pictures.length?t._l(t.body.pictures.slice(0,2).reverse(),(function(e,i){return 1===t.body.pictures.length||1===i||t.isHovered?s("a-picture",{key:i,staticClass:"product-card__picture",attrs:{src:e,"can-calc-height":!1}}):t._e()})):s("a-picture",{staticClass:"product-card__picture"})],2),t._t("title",(function(){return[s(t.headingTag,{tag:"component",staticClass:"product-card__name"},[t._v(" "+t._s(t.name)+" ")])]}))],2)]})),t._t("rating",(function(){return[t._m(0)]})),t.body.available&&t.body.visible?t.isInStock?t.isWithoutPrice?t._t("without-price",(function(){return[s("p",{staticClass:"badge badge-info mt-auto"},[t._v(" "+t._s(t.i19uponRequest)+" ")])]})):[t._t("prices",(function(){return[s("a-prices",{staticClass:"product-card__prices",attrs:{product:t.body,"installments-option":t.installmentsOption,"discount-option":t.discountOption}})]})),s("div",{staticClass:"product-card__buy fade",on:{click:t.buy}},[t._t("buy",(function(){return[t.buyHtml?s("div",{domProps:{innerHTML:t._s(t.buyHtml)}}):t._e(),s("button",{staticClass:"btn btn-primary",class:t.isSmall?"btn-sm":"btn-block",attrs:{type:"button",disabled:t.isWaitingBuy}},[t.isWaitingBuy?s("span",{staticClass:"product-card__buy-loading spinner-grow spinner-grow-sm",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e(),t._t("buy-button-content",(function(){return[s("i",{staticClass:"i-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")]}))],2)]}))],2),t.hasColors?t._t("variations",(function(){return[s("product-variations",{attrs:{product:t.bodyWithColors,"max-options-btns":15},on:{"select-option":t.handleGridOption}})]})):t._e()]:t._t("out-of-stock",(function(){return[s("p",{staticClass:"badge badge-dark mt-auto"},[t._v(" "+t._s(t.i19outOfStock)+" ")])]})):t._t("unavailable",(function(){return[s("p",{staticClass:"badge badge-warning mt-auto"},[t._v(" "+t._s(t.i19unavailable)+" ")])]})),t._t("favorite",(function(){return[s("a",{staticClass:"btn product-card__favorite fade",attrs:{href:t.isLogged?null:t.accountUrl},on:{click:t.toggleFavorite}},[s("i",{staticClass:"i-heart mr-1",class:t.isFavorite?"active":null})])]})),t._t("footer",(function(){return[t.footerHtml?s("div",{domProps:{innerHTML:t._s(t.footerHtml)}}):t._e()]}))],2),!t.isLoading&&t.patternUrl?s("section",[t._t("discount-tag",(function(){return[t.isActive&&t.discount>0?s("span",{staticClass:"product-card__offer-stamp"},[s("i",{staticClass:"i-arrow-down"}),t._v(" "),s("b",[t._v(t._s(t.discount))]),t._v("% ")]):t._e()]}),null,{discount:t.discount}),t._t("stamps"),t._t("body",(function(){return[s("a-link",{staticClass:"product-card__link",attrs:{href:t.patternUrl,title:t.name}},[t._t("header"),s("div",{staticClass:"product-card__pictures"},[t.body.pictures&&t.body.pictures.length?t._l(t.body.pictures.slice(0,2).reverse(),(function(e,i){return 1===t.body.pictures.length||1===i||t.isHovered?s("a-picture",{key:i,staticClass:"product-card__picture",attrs:{src:e,"can-calc-height":!1}}):t._e()})):s("a-picture",{staticClass:"product-card__picture"})],2),t._t("title",(function(){return[s(t.headingTag,{tag:"component",staticClass:"product-card__name"},[t._v(" "+t._s(t.name)+" ")])]}))],2)]})),t._t("favorite",(function(){return[s("a",{staticClass:"btn product-card__favorite fade",attrs:{href:t.isLogged?null:t.accountUrl},on:{click:t.toggleFavorite}},[s("i",{staticClass:"i-heart mr-1",class:t.isFavorite?"active":null})])]})),t._t("footer",(function(){return[t.footerHtml?s("div",{domProps:{innerHTML:t._s(t.footerHtml)}}):t._e()]}))],2):t._e()]),t.isLoading?[t._t("default"),t.error?s("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[t._v(" "+t._s(t.error)+" ")]):t._e()]:t._e(),s("div",{ref:"quickview"})],2)},o=[function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"product-card__rating",attrs:{"data-sku":t.body.sku},domProps:{innerHTML:t._s(t.ratingHtml)}})}]},210:function(t,e,s){"use strict";s.r(e);var i=s(31),o=s(68),a=s(78),r=s(2),n=s(7),c=s(48),d=s(175),u=s(179);const l="object"==typeof window&&window.storefront||{};var h={name:"BuyTogether",components:{APrices:d.a,ProductCard:u.a},props:{baseProduct:{type:Object,default:()=>l.context&&l.context.body||{}},ecomCart:{type:Object,default:()=>n.a},productCardProps:{type:Object,default:()=>({isSmall:!0})},fallbackMatchType:{type:String,default:"object"==typeof window&&window.ecomRecommendationsType||"recommended"}},data:()=>({ecomSearch:(new c.a).mergeFilter({range:{quantity:{gt:0}}}).mergeFilter({term:{available:!0}}),hasLoadedIds:!1,hasLoadedItems:!1,productQnts:{},recommendedItems:[],discount:0,discountType:"fixed",discountValue:0}),computed:{i19buyTogether:()=>"Compre junto",i19buyTogetherWith:()=>"Compre junto com",items(){return[this.baseProduct,...this.recommendedItems]},productIds(){return Object.keys(this.productQnts)},relatedProducts(){const t=this.baseProduct.related_products&&this.baseProduct.related_products[0];return t&&t.product_ids.length?t.product_ids:[]},subtotal(){return this.items.reduce(((t,e)=>t+(this.productQnts[e._id]||1)*Object(i.a)(e)),0)},canAddToCart(){return!this.items.find((t=>t.variations||t.customizations||t.kit_composition))}},methods:{formatMoney:o.a,buy(){const t=(this.subtotal-this.discount)/this.subtotal;this.items.forEach((e=>{const s=this.ecomCart.parseProduct({...e,base_price:Object(i.a)(e),price:Object(i.a)(e)*t,price_effective_date:{}});s.quantity=this.productQnts[e._id]||1,s.keep_item_quantity=!0,this.ecomCart.addItem(s)}))},calcDiscount(){"fixed"===this.discountType?this.discount=this.discountValue:this.discount=this.subtotal*this.discountValue/100},setProductQnts(t){if(t.length){const e={};t.slice(0,3).forEach((t=>{e[t]=1})),this.productQnts=e}},fetchItems(){this.productIds.length?(this.ecomSearch.setProductIds(this.productIds),delete this.ecomSearch.dsl.aggs,this.ecomSearch.fetch().then((()=>{this.recommendedItems=this.recommendedItems.concat(this.ecomSearch.getItems())})).finally((()=>{this.hasLoadedItems=!0}))):this.hasLoadedItems=!0}},watch:{subtotal:{handler(t,e){t!==e&&this.calcDiscount()},immediate:!0}},created(){if(this.baseProduct&&this.baseProduct._id){const t=n.a.parseProduct((t=>{const e=Object.assign({},t);return delete e.body_html,delete e.body_text,delete e.specifications,delete e.inventory_records,delete e.price_change_records,e})(this.baseProduct)),e=Object(i.a)(t)*t.quantity;Object(r.c)({url:"/apply_discount.json",method:"POST",data:{amount:{subtotal:e,total:e,discount:0},items:[t]}}).then((t=>{let{data:e}=t;for(let t=0;t<e.result.length;t++){const{validated:s,error:i,response:o}=e.result[t];if(s&&!i&&o.buy_together){const t=o.buy_together.sort(((t,e)=>t.products&&t.products.length?e.products&&e.products.length?t.products.length<=e.products.length&&t.discount.value>=e.discount.value?-1:0:-1:1));if(t[0]){const{products:e,discount:s}=t[0];this.productQnts=e||[],this.discountType=s.type,this.discountValue=s.value,this.$nextTick((()=>{this.calcDiscount()}))}}}})).finally((()=>{this.hasLoadedIds=!0,this.$nextTick((()=>{this.productIds.length?this.fetchItems():this.relatedProducts.length?(this.setProductQnts(this.relatedProducts),this.fetchItems()):this.fallbackMatchType&&Object(r.b)({url:`/products/${this.baseProduct._id}/${this.fallbackMatchType}.json`}).then((t=>{let{data:e}=t;this.setProductQnts(Object(a.a)(e)),this.$nextTick((()=>{this.fetchItems()}))}))}))}))}}},p=(s(316),s(38)),b=Object(p.a)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"buy-together"},[s("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[t.hasLoadedItems&&t.recommendedItems.length?s("div",[s("div",{staticClass:"buy-together__title"},[s("div",{staticClass:"buy-together__discount lead mb-3"},[t._v(" "+t._s(t.i19buyTogether)+" "),t.discount?s("span",{staticClass:"badge badge-success"},[t._v(" "+t._s(t.formatMoney(t.discount))+" "),s("span",[t._v("OFF")])]):t._e()])]),s("div",{staticClass:"buy-together__row row"},[s("div",{staticClass:"col-12",class:t.productIds.length>1?"col-md":"col-md-6 col-lg-4"},[s("div",{staticClass:"row"},t._l(t.items,(function(e){return t.items.length?s("div",{key:e._id,staticClass:"buy-together__item col-12",class:"col-md-"+12/t.items.length},[s("product-card",t._b({attrs:{product:e,productId:e._id,"is-loaded":!0}},"product-card",t.productCardProps,!1))],1):t._e()})),0)]),s("div",{staticClass:"buy-together__cta col-auto"},[s("a-prices",{attrs:{product:{price:t.subtotal-t.discount,base_price:t.subtotal},"is-literal":!0,"is-big":!0}}),t.canAddToCart?s("button",{staticClass:"btn btn-lg btn-primary mt-3",on:{click:t.buy}},[s("i",{staticClass:"i-shopping-basket mr-1"}),t._v(" "+t._s(t.i19buyTogether)+" ")]):t._e()],1)])]):t._e()]),s("transition",{attrs:{"leave-active-class":"animated fadeOut"}},[t.hasLoadedItems?t._e():t._t("default")],2)],1)}),[],!1,null,null,null);e.default=b.exports},278:function(t,e,s){var i=s(317);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(157).default)("3e17bbae",i,!0,{})},316:function(t,e,s){"use strict";s(278)},317:function(t,e,s){(e=s(156)(!0)).push([t.i,'.buy-together__title{text-align:center}.buy-together__row{align-items:center;justify-content:center}.buy-together__item{margin:0 auto;max-width:275px;padding-bottom:2rem!important}.buy-together__item:after{content:"+";font-size:1.5rem;position:absolute;right:50%}.buy-together__item:last-child:after{content:"="}@media(min-width:767px){.buy-together__item{max-width:none;padding-left:var(--spacer-2);padding-right:var(--spacer-2)}.buy-together__item:after{right:0;top:50%}}',"",{version:3,sources:["BuyTogether.scss"],names:[],mappings:"AAAA,qBAAqB,iBAAiB,CAAC,mBAAmB,kBAAkB,CAAC,sBAAsB,CAAC,oBAAoB,aAAa,CAAC,eAAe,CAAC,6BAA6B,CAAC,0BAA0B,WAAW,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,SAAS,CAAC,qCAAqC,WAAW,CAAC,wBAAwB,oBAAoB,cAAc,CAAC,4BAA4B,CAAC,6BAA6B,CAAC,0BAA0B,OAAO,CAAC,OAAO,CAAC",file:"BuyTogether.scss",sourcesContent:['.buy-together__title{text-align:center}.buy-together__row{align-items:center;justify-content:center}.buy-together__item{margin:0 auto;max-width:275px;padding-bottom:2rem!important}.buy-together__item:after{content:"+";font-size:1.5rem;position:absolute;right:50%}.buy-together__item:last-child:after{content:"="}@media(min-width:767px){.buy-together__item{max-width:none;padding-left:var(--spacer-2);padding-right:var(--spacer-2)}.buy-together__item:after{right:0;top:50%}}']}]),t.exports=e}}]);