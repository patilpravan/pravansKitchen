(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3xYlb",total:"Cart_total__1pkQh",actions:"Cart_actions__wL8AM","button--alt":"Cart_button--alt__1Gbk4",button:"Cart_button__3OjAN"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3B2m_",summary:"CartItem_summary__3Xoyd",price:"CartItem_price__1wuXG",amount:"CartItem_amount__74m58",actions:"CartItem_actions__1jgFM"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__3LU61",icon:"HeaderCartButton_icon__1T_Jl",badge:"HeaderCartButton_badge__1a26H",bump:"HeaderCartButton_bump__Vvm_K"}},,,function(e,t,n){e.exports={header:"Header_header__2LkU0","main-image":"Header_main-image__3Gyfh"}},function(e,t,n){e.exports={meal:"MealItem_meal__1J4It",description:"MealItem_description__1H-US",price:"MealItem_price__i6IJq"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3jheX",modal:"Modal_modal__3Gq1p","slide-down":"Modal_slide-down__1JwY5"}},,,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__14WwG","meals-appear":"AvailableMeals_meals-appear__3b6mv"}},function(e,t,n){e.exports={card:"Card_card__2apSK"}},function(e,t,n){e.exports={form:"MealItemForm_form__2fTk4"}},function(e,t,n){e.exports={input:"Input_input__fmRfA"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__xywDL"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),i=(n(28),n(2)),r=n(1),s=n.n(r),o=n(10),l=n.n(o),d=n.p+"static/media/meals.2971f633.jpg",u=n(0),m=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},j=n(7),b=n.n(j),O=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),h=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(O).items,o=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(b.a.button," ").concat(a?b.a.bump:"");return Object(r.useEffect)((function(){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}),[s]),Object(u.jsxs)("button",{className:l,onClick:e.onShowCart,children:[Object(u.jsx)("span",{className:b.a.icon,children:Object(u.jsx)(m,{})}),Object(u.jsx)("span",{children:"Your Cart"}),Object(u.jsx)("span",{className:b.a.badge,children:o})]})},p=function(e){return Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsxs)("header",{className:l.a.header,children:[Object(u.jsx)("h1",{children:"Pravan's Kitchen"}),Object(u.jsx)(h,{onShowCart:e.onShowcart})]}),Object(u.jsx)("div",{className:l.a["main-image"],children:Object(u.jsx)("img",{src:d,alt:"Food all Over Table"})})]})},x=n(16),f=n.n(x),_=n(17),v=n.n(_),C=function(e){return Object(u.jsx)("div",{className:v.a.card,children:e.children})},y=n(11),A=n.n(y),N=n(18),g=n.n(N),I=n(3),w=n(19),M=n.n(w),k=s.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{className:M.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(I.a)({ref:t},e.input))]})})),H=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(u.jsxs)("form",{className:g.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):(e.onAddCartHandler(a),c(!0))},children:[Object(u.jsx)(k,{ref:s,label:"Qty",input:{id:"Amount_"+e.id,type:"number",min:1,max:5,defaultValue:1,step:1}}),Object(u.jsx)("button",{children:"+ Add"}),!a&&Object(u.jsx)("p",{children:"Please Enter valid amount i.e. 1-5"})]})},S=function(e){var t=Object(r.useContext)(O),n="Rs. ".concat(e.price);return Object(u.jsxs)("li",{className:A.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{children:e.description}),Object(u.jsx)("div",{className:A.a.price,children:n})]}),Object(u.jsx)(H,{onAddCartHandler:function(n){t.addItem({name:e.name,id:e.id,amount:n,price:e.price})},id:e.id})]})},R=[{id:"m1",name:"Vadapav",description:"Maharastraian special recipe",price:30},{id:"m2",name:"Idly",description:"A south indian specialty!",price:40},{id:"m3",name:"Dosa",description:"Mysore Masala, Crispy, with Chutney",price:70},{id:"m4",name:"Misal",description:"Hot!!!! and Spicy!!!!",price:120}],D=function(e){var t=R.map((function(e){return Object(u.jsx)(S,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(u.jsx)("section",{className:f.a.meals,children:Object(u.jsx)("ul",{children:Object(u.jsx)(C,{children:t})})})},E=n(20),F=n.n(E),T=function(e){return Object(u.jsxs)("section",{className:F.a.summary,children:[Object(u.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(u.jsx)("p",{children:"Choose your favorite breakfast from our broad selection of available items and enjoy a delicious breakfast at home."}),Object(u.jsx)("p",{children:"All our food items are cooked with high-quality ingredients, just-in-time and of by experienced chefs!"})]})},B=function(e){return Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsx)(T,{}),Object(u.jsx)(D,{})]})},J=n(4),P=n.n(J),G=n(12),L=n.n(G),V=n(8),Y=n.n(V),U=function(e){return Object(u.jsx)("div",{className:L.a.backdrop,onClick:e.onClose})},q=function(e){return Object(u.jsx)("div",{className:L.a.modal,children:e.children})},z=document.getElementById("overlay"),K=function(e){return Object(u.jsxs)(s.a.Fragment,{children:[Y.a.createPortal(Object(u.jsx)(U,{onClose:e.onClose}),z),Y.a.createPortal(Object(u.jsx)(q,{onClose:e.onClose,children:e.children}),z)]})},X=n(5),Q=n.n(X),W=function(e){var t="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:Q.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:Q.a.summary,children:[Object(u.jsx)("span",{className:Q.a.price,children:t}),Object(u.jsxs)("span",{className:Q.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsxs)("div",{className:Q.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},$=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(O),o="Rs. ".concat(s.totalAmount),l=s.items.length>0,d=function(e){s.removeItem(e)},m=function(e){s.addItem(Object(I.a)(Object(I.a)({},e),{},{amount:1}))},j=Object(u.jsx)("ul",{className:P.a["cart-items"],children:s.items.map((function(e){return Object(u.jsx)(W,{name:e.name,amount:e.amount,price:e.price,onRemove:d.bind(null,e.id),onAdd:m.bind(null,e)},e.id)}))});return Object(u.jsxs)("div",{children:[!a&&Object(u.jsxs)(K,{onClose:e.onClose,children:[Object(u.jsx)("div",{children:j}),Object(u.jsxs)("div",{className:P.a.total,children:[Object(u.jsx)("span",{children:"Total Amount"}),Object(u.jsx)("span",{children:o})]}),Object(u.jsxs)("div",{className:P.a.actions,children:[Object(u.jsx)("button",{className:P.a["button--alt"],onClick:e.onClose,children:"Close"}),l&&Object(u.jsx)("button",{className:P.a.button,onClick:function(){c(!0),s.clearCart(),setTimeout((function(){c(!1),e.onClose()}),3e3)},children:"Order"})]})]}),a&&Object(u.jsx)(K,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:" Your Order has been Placed !!! "}),Object(u.jsx)("h5",{children:" Thank you for ordering from Us !"})]})})]})},Z=n(13),ee={items:[],totalAmount:0},te=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(I.a)(Object(I.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(Z.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],d=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(I.a)(Object(I.a)({},l),{},{amount:l.amount-1});(s=Object(Z.a)(e.items))[o]=u}return{items:s,totalAmount:d}}return t.type,ee},ne=function(e){var t=Object(r.useReducer)(te,ee),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(u.jsx)(O.Provider,{value:s,children:e.children})};var ae=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(ne,{children:[n&&Object(u.jsx)($,{onClose:function(){a(!1)}}),Object(u.jsx)(p,{onShowcart:function(){a(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(B,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(ae,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.57fac222.chunk.js.map