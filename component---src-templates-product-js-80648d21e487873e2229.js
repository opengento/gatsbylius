(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Dltz:function(e,t,a){"use strict";a.r(t);a("0mN4"),a("f3/d");var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("Bl7J"),u=(a("dRSK"),function(e){var t=e.variants,a=e.onChange,n=t.map((function(e,t){return r.a.createElement("option",{key:t},e.name)}));return r.a.createElement("div",null,r.a.createElement("select",{onChange:function(e){a(t.find((function(t){return t.name===e.target.value})))}},n))}),m=function(e){return r.a.createElement("p",null,r.a.createElement("strong",null,e.price.current/100," ",e.price.currency))},i=a("9eSz"),o=a.n(i);a.d(t,"query",(function(){return s}));var p=function(e){var t=e.product;return r.a.createElement("div",{itemScope:!0,itemType:"http://schema.org/BreadcrumbList",className:""},r.a.createElement("span",{itemProp:"itemListElement",itemScope:!0,itemType:"http://schema.org/ListItem"},r.a.createElement(l.Link,{to:"/categories/"},r.a.createElement("span",{itemProp:"item"},r.a.createElement("span",{itemProp:"name"},"main_taxon"))))," /",r.a.createElement("span",null,t.name))},d=function(e){var t=e.product,a=Object(n.useState)(null),l=a[0],c=a[1];return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"product-name"},t.name),r.a.createElement("p",null,t.channelCode),l?r.a.createElement(m,{price:l.price}):r.a.createElement(m,{price:t.variants[0].price}),r.a.createElement(u,{variants:t.variants,onChange:function(e){return c(e)}}))},s=(t.default=function(e){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"product-informations"},r.a.createElement(p,{product:e.data.product}),r.a.createElement(o.a,{fixed:e.data.product.localImage.childImageSharp.fixed}),r.a.createElement(d,{product:e.data.product}),r.a.createElement("h5",null,"Détails"),r.a.createElement("p",null,e.data.product.description),r.a.createElement("h5",null,"Attributs"),r.a.createElement("ul",null,r.a.createElement("li",null,"Code: ",e.data.product.code),r.a.createElement("li",null,"Average Rating: ",e.data.product.averageRating,"/5"))),r.a.createElement("div",{className:"cross-sell"},r.a.createElement("h4",null,"Autres produits"),r.a.createElement("ul",null,e.data.allProduct.nodes.map((function(e){return r.a.createElement("li",{key:e.slug},r.a.createElement("p",null,r.a.createElement(l.Link,{to:"/product/"+e.slug},e.name)))})))))},"3844606964")}}]);
//# sourceMappingURL=component---src-templates-product-js-80648d21e487873e2229.js.map