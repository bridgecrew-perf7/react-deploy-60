(this["webpackJsonpreact-magazine"]=this["webpackJsonpreact-magazine"]||[]).push([[0],{12:function(e,t,c){e.exports={product:"Card_product__2pxiW",product__image:"Card_product__image__3UAxz",image_switch:"Card_image_switch__3vDmF",image_switch__item:"Card_image_switch__item__2UG9d",image_switch__img:"Card_image_switch__img__3jJaZ",image_pagination:"Card_image_pagination__19Ly9",image_pagination__item:"Card_image_pagination__item__1cnmL",__active:"Card___active__1-wsN",product__title:"Card_product__title__3rOSh",product__props:"Card_product__props__Ezre1",product__rating:"Card_product__rating__2kYsw",product__testimonials:"Card_product__testimonials__jP_PC",product__info:"Card_product__info__2sp47",product__term:"Card_product__term__3SD_p",product__available:"Card_product__available__1Ief6",product_price:"Card_product_price__2wmBH",product_price__current:"Card_product_price__current__1QR4t",product_price__old:"Card_product_price__old__K_AhK",product_price__procentdiscount:"Card_product_price__procentdiscount__3g1uJ"}},30:function(e,t,c){e.exports={grid_contain:"ShopContent_grid_contain__2hE-R",products_grid:"ShopContent_products_grid__1uuPF",filters:"ShopContent_filters__exmpL",rr:"ShopContent_rr__1YQTS",filters_price__input:"ShopContent_filters_price__input__30U3s"}},56:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var a=c(4),s=c.n(a),n=c(34),r=c.n(n),i=c(16),l=(c(56),c(28)),o=c(20),d=c(0),j=c.n(d),m=c(3),_=c(9),b=c(12),h=c.n(b),u=s.a.createContext({}),p=c(1),x=function(e){var t=e.id,c=e.image,s=e.title,n=e.testimonials,r=e.available,l=e.cost,o=e.onAdd,d=e.discount,j=e.procentdiscount,m=Object(a.useState)(0),b=Object(_.a)(m,2),x=b[0],O=b[1],g=Object(a.useContext)(u).isItemAdded,f={id:t,parentId:t,title:s,image:c,testimonials:n,available:r,cost:l};return Object(p.jsxs)("article",{className:h.a.product,children:[Object(p.jsxs)("div",{className:h.a.product__image,children:[Object(p.jsx)(i.b,{to:"/products/".concat(t),className:h.a.image_switch,children:c.map((function(e,t){return Object(p.jsx)("div",{className:h.a.image_switch__item,onMouseEnter:function(){return O(t)},children:Object(p.jsx)("div",{className:h.a.image_switch__img,children:Object(p.jsx)("img",{src:e,alt:s})})},t)}))}),Object(p.jsx)("ul",{className:h.a.image_pagination,"aria-hidden":"true",children:c.map((function(e,t){return Object(p.jsx)("li",{className:t===x?"".concat(h.a.image_pagination__item," ").concat(h.a.__active):h.a.image_pagination__item},t)}))})]}),Object(p.jsx)("h3",{className:h.a.product__title,children:Object(p.jsx)(i.b,{to:"/products/".concat(t),children:s})}),Object(p.jsxs)("div",{className:h.a.product__props,children:[Object(p.jsxs)("span",{className:h.a.product__rating,children:[Object(p.jsx)("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{d:"M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"})}),"4,5"]}),Object(p.jsxs)("span",{className:h.a.product__testimonials,children:[n," \u043e\u0442\u0437\u044b\u0432\u0430"]})]}),Object(p.jsxs)("div",{className:h.a.product__info,children:[Object(p.jsx)("span",{className:h.a.product__term,children:"\u0410\u0440\u0442\u0438\u043a\u0443\u043b: 879876"}),Object(p.jsxs)("span",{className:h.a.product__available,children:["\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438: ",r," \u0448\u0442"]})]}),Object(p.jsx)("div",{className:h.a.product_price,children:d?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("span",{className:h.a.product_price__current,children:[Math.floor(l/100*(100-j))," \u20bd"]}),Object(p.jsxs)("span",{className:h.a.product_price__old,children:[l," \u20bd  "]}),Object(p.jsxs)("span",{className:h.a.product_price__procentdiscount,children:["\u0421\u043a\u0438\u0434\u043a\u0430: ",j,"% "]})]}):Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("span",{className:h.a.product_price__current,children:[l," \u20bd"]})})}),Object(p.jsx)("button",{className:g(t)?"btn active":"btn",onClick:function(){o(f)},children:g(t)?"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0435":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})},O=c(25),g=c.n(O),f=c(30),v=c.n(f),C=c(48),N=(c(76),function(e){var t=e.openModal,c=e.items,a=e.onRemove,s=e.onClose,n=Object(C.useState)(!1),r=Object(_.a)(n,2),i=r[0],l=r[1];return Object(p.jsx)("div",{className:t?"modal is-open":"modal",children:Object(p.jsxs)("div",{className:t?"modal__container order-modal modal-open":"modal__container order-modal",children:[Object(p.jsx)("div",{className:"closeModal",onClick:s,children:Object(p.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{d:"M9.77193 0.228069C10.076 0.532161 10.076 1.02519 9.77193 1.32928L6.10128 4.99994L9.77205 8.67072C10.0761 8.97481 10.0761 9.46784 9.77205 9.77193C9.46796 10.076 8.97493 10.076 8.67084 9.77193L5.00006 6.10115L1.32928 9.77193C1.02519 10.076 0.532161 10.076 0.228069 9.77193C-0.0760227 9.46784 -0.0760234 8.97481 0.228069 8.67072L3.89885 4.99994L0.228192 1.32928C-0.0759003 1.02519 -0.0758996 0.532161 0.228193 0.228069C0.532285 -0.076023 1.02532 -0.076023 1.32941 0.228069L5.00006 3.89872L8.67072 0.228069C8.97481 -0.076023 9.46784 -0.076023 9.77193 0.228069Z",fill:"#808080"})})}),Object(p.jsxs)("div",{className:"modal-content order-modal__content",children:[Object(p.jsxs)("div",{className:"order-modal__top",children:[Object(p.jsx)("h2",{className:"order-modal__title",children:"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430"}),Object(p.jsx)("span",{className:"order-modal__number",children:"\u0417\u0430\u043a\u0430\u0437 \u2116 3456 67"})]}),Object(p.jsxs)("div",{className:"order-modal__info",children:[Object(p.jsxs)("div",{className:"order-modal__quantity order-modal__info-item",children:["\u0422\u043e\u0432\u0430\u0440\u043e\u0432 \u0432 \u0437\u0430\u043a\u0430\u0437\u0435: ",Object(p.jsxs)("span",{children:[c.length," \u0448\u0442"]})]}),Object(p.jsxs)("div",{className:"order-modal__summ order-modal__info-item",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",Object(p.jsx)("span",{children:"0 \u20bd"})]}),Object(p.jsxs)("div",{className:"order-modal__products order-modal__info-item",children:[Object(p.jsxs)("button",{className:"order-modal__btn",onClick:function(){l(!i)},children:["\u0421\u043e\u0441\u0442\u0430\u0432 \u0437\u0430\u043a\u0430\u0437\u0430",Object(p.jsx)("svg",{width:"7",height:"5",viewBox:"0 0 7 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{d:"M6.92012 0.810028C6.81343 0.703128 6.64032 0.702963 6.53341 0.809631L3.69335 3.6438C3.58672 3.75041 3.41327 3.7504 3.30645 3.64359L0.466594 0.809631C0.359693 0.70295 0.18658 0.703128 0.0798849 0.810028C-0.0267831 0.916928 -0.0266053 1.09006 0.0802814 1.19672L2.91994 4.03049C3.07992 4.19044 3.28999 4.27039 3.50008 4.27039C3.71005 4.27039 3.92007 4.19047 4.07984 4.03068L6.91972 1.19672C7.02661 1.09006 7.02678 0.916928 6.92012 0.810028Z",fill:"#808080"})})]}),Object(p.jsx)("ul",{className:i?"order-modal__list":"order-modal__list active",children:c.map((function(e,t){return Object(p.jsx)("li",{className:"order-modal__item",children:Object(p.jsxs)("article",{className:"order-modal__product order-product",children:[Object(p.jsx)("img",{src:e.image[0],alt:e.title,className:"order-product__img"}),Object(p.jsxs)("div",{className:"order-product__text",children:[Object(p.jsx)("h3",{className:"order-product__title",children:e.title}),Object(p.jsxs)("span",{className:"order-product__price",children:[e.cost," \u20bd "]})]}),Object(p.jsx)("button",{className:"order-product__delete",onClick:function(){return a(e.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})},t)}))})]})]}),Object(p.jsxs)("form",{className:"order-modal__form order",children:[Object(p.jsx)("input",{type:"hidden",name:"theme",value:"\u041e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u0437\u0432\u043e\u043d\u043e\u043a"}),Object(p.jsx)("input",{type:"hidden",name:"admin_email[]",value:"maxgraph23@gmail.com"}),Object(p.jsx)("input",{type:"hidden",name:"form_subject",value:"\u0417\u0430\u044f\u0432\u043a\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430 \u0421\u0430\u0439\u0442"}),Object(p.jsxs)("label",{className:"order__label",children:[Object(p.jsx)("span",{className:"order__text",children:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),Object(p.jsx)("input",{type:"text",name:"\u0418\u043c\u044f",className:"order__input"})]}),Object(p.jsxs)("label",{className:"order__label",children:[Object(p.jsx)("span",{className:"order__text",children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(p.jsx)("input",{type:"tel",name:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",className:"order__input",placeholder:"+7 (___)___-__-__"})]}),Object(p.jsxs)("label",{className:"order__label",children:[Object(p.jsx)("span",{className:"order__text",children:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),Object(p.jsx)("input",{type:"email",name:"Email",className:"order__input",placeholder:"post@gmail.com"})]}),Object(p.jsx)("button",{className:"order__btn btn",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})]})]})})}),w=(c(77),c(21)),L=function(){var e=Object(w.c)((function(e){return e.user})),t=e.email;return{isAuth:!!t,email:t,token:e.token,id:e.id}},k=c(36),y=Object(k.b)({name:"user",initialState:{email:null,token:null,id:null},reducers:{setUser:function(e,t){e.email=t.payload.email,e.token=t.payload.token,e.id=t.payload.id},removeUser:function(e){e.email=null,e.token=null,e.id=null}}}),S=y.actions,M=S.setUser,H=S.removeUser,B=y.reducer,I=function(e){var t=e.items,c=e.onRemove,s=e.onSearch,n=Object(w.b)(),r=L(),l=r.isAuth,o=r.email,d=Object(a.useState)("light"),j=Object(_.a)(d,2),m=j[0],b=j[1],h=Object(a.useState)(!1),u=Object(_.a)(h,2),x=u[0],O=u[1];return Object(a.useEffect)((function(){document.body.setAttribute("data-theme",JSON.parse(localStorage.getItem("themestring"))||m)}),[m]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("header",{className:"header",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"app-header-left",children:[Object(p.jsx)(i.b,{to:"/",className:"app-name",children:"Portfolio"}),Object(p.jsxs)("div",{className:"search-wrapper",children:[Object(p.jsx)("input",{onChange:function(e){return s(e.target.value)},className:"search-input",type:"text",placeholder:"Search"}),Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"feather feather-search",viewBox:"0 0 24 24",children:[Object(p.jsx)("defs",{}),Object(p.jsx)("circle",{cx:"11",cy:"11",r:"8"}),Object(p.jsx)("path",{d:"M21 21l-4.35-4.35"})]})]})]}),Object(p.jsxs)("div",{className:"app-header-right",children:[Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:"btn-header-1",onClick:function(){b("light"===m?"dark":"light"),localStorage.setItem("themestring",JSON.stringify(m))},children:"light"===JSON.parse(localStorage.getItem("themestring"))?Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})}),Object(p.jsx)("div",{children:Object(p.jsxs)("button",{className:t.length>0?"bagage btn-header-1 active":"bagage btn-header-1",children:[Object(p.jsx)("img",{className:"svg",src:"https://img.icons8.com/color/48/000000/shopping-basket.png",alt:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(p.jsx)("div",{className:"cart-content",children:t.length>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("ul",{className:"cart-content__list","data-simplebar":!0,children:t.map((function(e,t){return Object(p.jsx)("li",{className:"cart-content__item",children:Object(p.jsxs)("article",{className:"cart-content__product cart-product",children:[Object(p.jsx)("img",{src:e.image[0],alt:"\u0422\u043e\u0432\u0430\u0440",className:"cart-product__img"}),Object(p.jsxs)("div",{className:"cart-product__text",children:[Object(p.jsx)("h3",{className:"cart-product__title",children:e.title}),Object(p.jsxs)("span",{className:"cart-product__price",children:[e.cost," \u20bd"]})]}),Object(p.jsx)("button",{className:"cart-product__delete","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440",onClick:function(){return c(e.id)},children:Object(p.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(p.jsx)("path",{d:"M18.5715 2.85715H13.5715V2.14285C13.5715 0.959387 12.6121 0 11.4287 0H8.57152C7.38805 0 6.42867 0.959387 6.42867 2.14285V2.85715H1.42865C1.03415 2.85715 0.714355 3.17695 0.714355 3.57145C0.714355 3.96595 1.03419 4.28571 1.42865 4.28571H2.20506L3.57151 19.3507C3.6052 19.7196 3.91537 20.0015 4.28581 20H15.7144C16.0848 20.0015 16.395 19.7196 16.4287 19.3507L17.7951 4.28571H18.5715C18.966 4.28571 19.2858 3.96591 19.2858 3.57141C19.2858 3.17691 18.966 2.85715 18.5715 2.85715ZM7.85722 2.14285C7.85722 1.74835 8.17702 1.42856 8.57152 1.42856H11.4287C11.8232 1.42856 12.143 1.74835 12.143 2.14285V2.85715H7.85726V2.14285H7.85722ZM15.0622 18.5714H4.93796L3.64295 4.28571H7.14296H16.3608L15.0622 18.5714Z",fill:"#4D4D4D",fillOpacity:"0.3"}),Object(p.jsx)("path",{d:"M7.8573 16.381C7.85722 16.38 7.85717 16.379 7.85709 16.378L7.14279 6.37805C7.11479 5.98355 6.77227 5.68647 6.3778 5.71447C5.9833 5.74247 5.68623 6.085 5.71423 6.47946L6.42853 16.4794C6.45519 16.854 6.76733 17.144 7.14283 17.143H7.19427C7.58781 17.1157 7.88467 16.7745 7.8573 16.381Z",fill:"#4D4D4D",fillOpacity:"0.3"}),Object(p.jsx)("path",{d:"M9.99994 5.71436C9.60544 5.71436 9.28564 6.03415 9.28564 6.42865V16.4286C9.28564 16.8231 9.60544 17.1429 9.99994 17.1429C10.3944 17.1429 10.7142 16.8231 10.7142 16.4286V6.42865C10.7142 6.03415 10.3944 5.71436 9.99994 5.71436Z",fill:"#4D4D4D",fillOpacity:"0.3"}),Object(p.jsx)("path",{d:"M13.6219 5.71423C13.2274 5.68623 12.8849 5.9833 12.8569 6.3778L12.1426 16.3778C12.1137 16.7712 12.4091 17.1136 12.8026 17.1425C12.8038 17.1426 12.8049 17.1427 12.8062 17.1428H12.8569C13.2324 17.1437 13.5445 16.8537 13.5712 16.4792L14.2855 6.47921C14.3135 6.08475 14.0164 5.74227 13.6219 5.71423Z",fill:"#4D4D4D",fillOpacity:"0.3"})]})})]})},t)}))}),Object(p.jsxs)("div",{className:"cart-content__bottom",children:[Object(p.jsxs)("div",{className:"cart-content__fullprice",children:[Object(p.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(p.jsx)("span",{className:"fullprice",children:"568 789 \u20bd"})]}),Object(p.jsx)("div",{className:"cart-content__btn btn",onClick:function(){return O(!0)},children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}):Object(p.jsxs)("div",{className:"noproduct",children:[Object(p.jsx)("img",{src:"https://img.icons8.com/color/48/000000/shopping-basket.png",alt:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(p.jsx)("h3",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f"}),Object(p.jsx)("p",{children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u0442\u043e\u0432\u0430\u0440, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437."})]})})]})}),l?Object(p.jsxs)("button",{className:"btn",onClick:function(){return n(H())},children:[o," \u0412\u044b\u0439\u0442\u0438"]}):Object(p.jsx)(i.b,{to:"/login",className:"btn-header-2 btn",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}),Object(p.jsx)(N,{openModal:x,items:t,onRemove:c,onClose:function(){return O(!1)}})]})},A=(c(84),function(){return Object(p.jsx)("div",{className:"centerFixed",children:Object(p.jsxs)("div",{className:"contentFix",children:[Object(p.jsx)("h3",{style:{fontSize:"140px"},children:"PAGE 404"}),Object(p.jsx)(i.b,{to:"/",children:Object(p.jsx)("p",{children:"Back to main"})})]})})}),Z=c(8),D=(c(85),function(e){var t,c=e.id,s=e.image,n=e.title,r=e.testimonials,i=e.available,l=e.cost,o=e.onAdd,d=e.discount,j=e.procentdiscount,m=Object(a.useState)(0),b=Object(_.a)(m,2),h=b[0],x=b[1],O=Object(Z.f)();s&&(t=s.map((function(e,t){return Object(p.jsx)("div",{className:"slider-nav__item",tabIndex:"0",children:Object(p.jsx)("img",{src:e,alt:n,onMouseEnter:function(){return x(t)}})},t)})));var g=Object(a.useContext)(u).isItemAdded,f={id:c,parentId:c,title:n,image:s,testimonials:r,available:i,cost:l};return Object(p.jsxs)("div",{className:"card",style:{marginTop:"25px"},children:[Object(p.jsxs)("button",{className:"back",onClick:function(){return O(-1)},children:[Object(p.jsx)("svg",{width:"6",height:"10",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{fillRule:"evenodd",clipPath:"evenodd",d:"M0.192 5.4491L4.864 9.82036C5.136 10.0599 5.552 10.0599 5.808 9.82036C6.064 9.58084 6.064 9.19162 5.808 8.93713L1.6 5L5.808 1.06287C6.064 0.823354 6.064 0.419162 5.808 0.179641C5.552 -0.0598803 5.136 -0.0598804 4.864 0.179641L0.192 4.56587C-0.0639997 4.80539 -0.0639998 5.19461 0.192 5.4491Z",fill:"#484B55"})}),"Back"]}),Object(p.jsxs)("div",{className:"card-content",children:[Object(p.jsxs)("div",{className:"card-slider",children:[Object(p.jsx)("div",{className:"card-slider__nav slider-nav",children:t}),Object(p.jsx)("div",{className:"card-slider__block slider-block",children:Object(p.jsx)("div",{className:"swiper-slide",children:s&&Object(p.jsx)("img",{src:s[h],alt:n})})})]}),Object(p.jsxs)("div",{className:"card-info",children:[Object(p.jsx)("span",{className:"vendor",children:"\u0410\u0440\u0442\u0438\u043a\u0443\u043b: 879876"}),Object(p.jsx)("h1",{className:"title",children:n}),Object(p.jsxs)("div",{className:"testimonials",children:[Object(p.jsxs)("div",{className:"rating",children:[Object(p.jsx)("span",{className:"Card_product__rating__3UhWQ",style:{marginRight:"0px"},children:Object(p.jsx)("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{d:"M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"})})}),Object(p.jsx)("span",{className:"Card_product__rating__3UhWQ",style:{marginRight:"0px"},children:Object(p.jsx)("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{d:"M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"})})}),Object(p.jsx)("span",{className:"Card_product__rating__3UhWQ",style:{marginRight:"0px"},children:Object(p.jsx)("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{d:"M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"})})}),Object(p.jsx)("span",{className:"Card_product__rating__3UhWQ",style:{marginRight:"0px"},children:Object(p.jsx)("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{d:"M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"})})}),Object(p.jsx)("span",{className:"Card_product__rating__3UhWQ",style:{marginRight:"0px"},children:Object(p.jsx)("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{d:"M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"})})})]}),Object(p.jsxs)("p",{className:"testimonials__link",children:["\u041e\u0442\u0437\u044b\u0432\u044b ",r]})]}),Object(p.jsxs)("span",{className:"available",children:["\u0412 \u043d\u0430\u0447\u0430\u043b\u0438\u0438: ",i," \u0448\u0442"]}),Object(p.jsx)("div",{className:"price",children:d?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("span",{className:"price__current",children:[Math.floor(l/100*(100-j))," \u20bd"]}),Object(p.jsxs)("span",{className:"price__old",children:[l," \u20bd"]}),Object(p.jsxs)("span",{className:"price__procentdiscount",children:["\u0421\u043a\u0438\u0434\u043a\u0430: ",j,"% "]})]}):Object(p.jsxs)("span",{className:"price__current",children:[l," \u20bd"]})}),Object(p.jsx)("button",{className:g(c)?"btn active":"btn",onClick:function(){o(f)},children:g(c)?"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0435":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]})]})}),F=function(e){var t=e.onAdd,c=Object(a.useState)([]),s=Object(_.a)(c,2),n=s[0],r=s[1],i=Object(Z.g)().id;return Object(a.useEffect)((function(){g.a.get("https://617aac64cb1efe001700ffa7.mockapi.io/card",i).then((function(e){var t=e.data;return r(t[i-1])}))}),[i]),Object(p.jsx)(D,Object(l.a)({image:n.image,title:n.title,testimonials:n.testimonials,available:n.available,cost:n.cost,discount:n.discount,procentdiscount:n.procentdiscount,onAdd:t},n),n.id)},R=c(29),U=function(e){var t=e.title,c=e.handleClick,s=e.link,n=e.backLink,r=Object(a.useState)(""),l=Object(_.a)(r,2),o=l[0],d=l[1],j=Object(a.useState)(""),m=Object(_.a)(j,2),b=m[0],h=m[1],u=Object(a.useState)(!1),x=Object(_.a)(u,2),O=x[0],g=x[1];return Object(p.jsx)("div",{className:"centerFixed",children:Object(p.jsxs)("div",{className:"form__container",children:[Object(p.jsx)("div",{className:"form__title",children:Object(p.jsx)("h3",{children:t})}),Object(p.jsxs)("div",{className:"form__content",children:[Object(p.jsxs)("div",{className:"form__row",children:[Object(p.jsx)("label",{className:"form__label",htmlFor:"auth_email",children:" \u042d\u043b. \u043f\u043e\u0447\u0442\u0430 \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d "}),Object(p.jsx)("input",{id:"auth_email",type:"email",value:o,onChange:function(e){return d(e.target.value)},className:"form__input"})]}),Object(p.jsxs)("div",{className:"form__row",children:[Object(p.jsx)("label",{className:"form__label",htmlFor:"auth_pass",children:" \u041f\u0430\u0440\u043e\u043b\u044c "}),Object(p.jsxs)("div",{className:"form__input__container",children:[Object(p.jsx)("input",{id:"auth_pass",type:O?"password":"text",value:b,onChange:function(e){return h(e.target.value)},className:"form__input"}),Object(p.jsxs)("div",{className:"password-icon",children:[Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:O?{display:"none"}:{display:"block"},onClick:function(){return g(!0)},width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-eye",children:[Object(p.jsx)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),Object(p.jsx)("circle",{cx:"12",cy:"12",r:"3"})]}),Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:O?{display:"block"}:{display:"none"},onClick:function(){return g(!1)},width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-eye-off",children:[Object(p.jsx)("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),Object(p.jsx)("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})]})]})]})]}),Object(p.jsx)("div",{className:"btn-content",children:Object(p.jsx)("button",{className:"btn",onClick:function(){return c(o,b)},children:t})}),Object(p.jsx)("div",{className:"additional-content",children:Object(p.jsx)(i.b,{className:"additional-text",to:{pathname:s},children:n})})]})})},W=function(){var e=Object(w.b)(),t=Object(Z.f)();return Object(p.jsx)(U,{title:"\u0412\u043e\u0439\u0442\u0438",handleClick:function(c,a){var s=Object(R.b)();Object(R.c)(s,c,a).then((function(c){var a=c.user;e(M({email:a.email,id:a.uid,token:a.accessToken})),t("/")})).catch((function(){return alert("\u041e\u0428\u0418\u0411\u041a\u0410")}))},link:"/register",backLink:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})},E=function(){return Object(p.jsx)(W,{})},z=function(){var e=Object(w.b)(),t=Object(Z.f)();return Object(p.jsx)(U,{title:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",handleClick:function(c,a){var s=Object(R.b)();console.log(s),Object(R.a)(s,c,a).then((function(c){var a=c.user;e(M({email:a.email,id:a.uid,token:a.accessToken})),t("/")})).catch(console.error)},link:"/login",backLink:"\u0412\u043e\u0439\u0442\u0438"})},P=function(){return Object(p.jsx)(z,{})},J=function(){var e=Object(a.useState)([]),t=Object(_.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),r=Object(_.a)(n,2),i=r[0],d=r[1],b=Object(a.useState)(""),h=Object(_.a)(b,2),O=h[0],f=h[1];Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(j.a.mark((function e(){var t,c,a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([g.a.get("https://617aac64cb1efe001700ffa7.mockapi.io/items"),g.a.get("https://617aac64cb1efe001700ffa7.mockapi.io/card")]);case 3:t=e.sent,c=Object(_.a)(t,2),a=c[0],n=c[1],d(a.data),s(n.data),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 ;("),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var C=function(){var e=Object(m.a)(j.a.mark((function e(t){var c,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=i.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return d((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,g.a.delete("https://617aac64cb1efe001700ffa7.mockapi.io/items/".concat(c.id));case 6:e.next=14;break;case 8:return d((function(e){return[].concat(Object(o.a)(e),[t])})),e.next=11,g.a.post("https://617aac64cb1efe001700ffa7.mockapi.io/items",t);case 11:a=e.sent,s=a.data,d((function(e){return e.map((function(e){return e.parentId===s.parentId?Object(l.a)(Object(l.a)({},e),{},{id:s.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),N=c.filter((function(e){return e.title.toLowerCase().includes(O.toLowerCase())})).map((function(e){return Object(p.jsx)(x,Object(l.a)({image:e.image,title:e.title,testimonials:e.testimonials,available:e.available,cost:e.cost,discount:e.discount,procentdiscount:e.procentdiscount,onAdd:function(e){return C(e)}},e),e.id)}));return Object(p.jsxs)(u.Provider,{value:{items:c,cartItems:i,isItemAdded:function(e){return i.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToCart:C,setCartItems:d},children:[Object(p.jsx)(I,{items:i,onRemove:function(e){try{g.a.delete("https://617aac64cb1efe001700ffa7.mockapi.io/items/".concat(e)),d((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))}))}catch(t){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b"),console.error(t)}},onSearch:f}),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(Z.c,{children:[Object(p.jsx)(Z.a,{exact:!0,path:"/",element:Object(p.jsxs)("div",{className:v.a.grid_contain,children:[Object(p.jsx)("div",{className:v.a.filters,children:Object(p.jsx)("div",{className:v.a.rr,children:Object(p.jsx)("h3",{className:v.a.filters_price__title,children:"\u0426\u0435\u043d\u0430"})})}),Object(p.jsx)("div",{className:v.a.products_grid,children:N.length>0?N:Object(p.jsx)("div",{className:"centerFixed",children:Object(p.jsx)("div",{className:"contentFix",children:Object(p.jsx)("div",{className:"pswp__preloader__icn",children:Object(p.jsx)("div",{className:"pswp__preloader__cut",children:Object(p.jsx)("div",{className:"pswp__preloader__donut"})})})})})})]})}),Object(p.jsx)(Z.a,{path:"/products/:id",element:Object(p.jsx)(F,{onAdd:function(e){return C(e)}})}),Object(p.jsx)(Z.a,{path:"*",element:Object(p.jsx)(A,{})}),Object(p.jsx)(Z.a,{path:"/login",element:Object(p.jsx)(E,{})}),Object(p.jsx)(Z.a,{path:"/register",element:Object(p.jsx)(P,{})})]})})]})};c(87).config();var Q=function(){return Object(p.jsx)(J,{})},V=Object(k.a)({reducer:{user:B}}),T=c(50);Object(T.a)({apiKey:"AIzaSyBKCGTV6ipm4XSGplBkXvd84RvprY4Hn1c",authDomain:"auth-example-cbddf.firebaseapp.com",projectId:"auth-example-cbddf",storageBucket:"auth-example-cbddf.appspot.com",messagingSenderId:"685184225263",appId:"1:685184225263:web:81ffc22681c2ec57ce701a"});r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(i.a,{children:Object(p.jsx)(w.a,{store:V,children:Object(p.jsx)(Q,{})})})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.11d4d30f.chunk.js.map