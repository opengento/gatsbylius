(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return i}));a("f3/d"),a("0mN4");var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),o=a("9eSz"),c=a.n(o),s=a("Bl7J"),u=a("vrFN");t.default=function(e){var t=e.data,a=l.a.useState(null),n=a[0],o=a[1];return l.a.useEffect((function(){fetch("https://api.github.com/repos/opengento/gatsbylius/contributors").then((function(e){return e.json()})).then(o)}),[]),l.a.createElement(s.a,null,l.a.createElement(u.a,{title:"The fastest shop on earth!"}),l.a.createElement("h1",null,"You're browsing the fastest shop on earth!"),l.a.createElement("p",null,"This is an experimentation created at a friendly"," ",l.a.createElement("a",{href:"https://opengento.fr/"},"Opengento")," meetup in France, over a weekend. It uses the"," ",l.a.createElement("a",{href:"https://github.com/Sylius/ShopApiPlugin"},"Sylius Shop API")," as a ",l.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby")," source, to create a fast eCommerce PWA."),l.a.createElement("section",null,l.a.createElement("h2",null,"Our products"),l.a.createElement("ul",{style:{listStyle:"none",display:"flex",flexWrap:"wrap",justifyContent:"space-between"}},t.allProduct.nodes.map((function(e){return l.a.createElement("li",{key:e.slug},l.a.createElement(r.Link,{to:"/product/"+e.slug},l.a.createElement(c.a,{fixed:e.localImage.childImageSharp.fixed}),l.a.createElement("br",null),e.name))})))),l.a.createElement("section",null,l.a.createElement("h2",null,"Our categories"),l.a.createElement("ul",null,t.allCategory.edges.map((function(e){var t=e.node;return l.a.createElement("li",{key:t.code},l.a.createElement(r.Link,{to:"/categories/"+t.code},t.name))})))),n&&l.a.createElement("section",null,l.a.createElement("h2",null,"Thanks!"),l.a.createElement("p",null,"Thanks to all these contributors who worked on this project:"),l.a.createElement("ul",{style:{listStyle:"none",display:"flex",flexWrap:"wrap",justifyContent:"space-between"}},n.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:e.html_url},l.a.createElement("img",{src:e.avatar_url,width:"100px",alt:"Avatar of "+e.login}),l.a.createElement("br",null),e.login),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/opengento/gatsbylius/commits?author="+e.login,alt:"Contributions of "+e.login},"(",e.contributions," contributions)"))})))))};var i="4096696653"}}]);
//# sourceMappingURL=component---src-pages-index-js-99d49de6387247dd714c.js.map