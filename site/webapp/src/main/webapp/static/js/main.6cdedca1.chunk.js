(this["webpackJsonp@bloomreach/example-react-csr"]=this["webpackJsonp@bloomreach/example-react-csr"]||[]).push([[0],{43:function(e,t,a){e.exports=a(90)},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),s=a(9),m=a(10),i=a(42),o=a(25),u=a.n(o),p=a(4);function E(e){var t=e.component.getModels().document,a=t&&e.page.getContent(t);if(!a)return null;var n=a.getData(),l=n.content,c=n.image,m=n.link,i=n.title,o=c&&e.page.getContent(c),u=m&&e.page.getContent(m);return r.a.createElement("div",{className:"jumbotron mb-3 ".concat(e.page.isPreview()?"has-edit-button":"")},r.a.createElement(p.BrManageContentButton,{content:a}),i&&r.a.createElement("h1",null,i),o&&r.a.createElement("img",{className:"img-fluid",src:o.getUrl(),alt:i}),l&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.page.rewriteLinks(l.value)}}),u&&r.a.createElement("p",{className:"lead"},r.a.createElement(s.b,{to:u.getUrl(),className:"btn btn-primary btn-lg",role:"button"},"Learn more")))}function g(e){var t=e.component.getModels().document,a=t&&e.page.getContent(t);if(!a)return null;var n=a.getData(),l=n.author,c=n.content,s=n.date,m=n.image,i=n.title,o=m&&e.page.getContent(m);return r.a.createElement("div",{className:e.page.isPreview()?"has-edit-button":""},r.a.createElement(p.BrManageContentButton,{content:a}),o&&r.a.createElement("img",{className:"img-fluid mb-3",src:o.getUrl(),alt:i}),i&&r.a.createElement("h1",null,i),l&&r.a.createElement("p",{className:"mb-3 text-muted"},l),s&&r.a.createElement("p",{className:"mb-3 small text-muted"},new Date(s).toDateString()),c&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.page.rewriteLinks(c.value)}}))}var d=a(24),h=a(2);function b(e){var t=e.item;r.a.useContext(p.BrPageContext);return t._links.site?(t._links.site.type,d.TYPE_LINK_EXTERNAL,r.a.createElement(h.d.NavItem,{href:t._links.site.href},t.name)):r.a.createElement(h.d.NavItem,null,t.name)}function v(){var e=r.a.useContext(p.BrComponentContext),t=r.a.useContext(p.BrPageContext);if(!e||!t)return null;var a=e.getModels().menu;return r.a.createElement(h.d.Nav,{className:"".concat(t.isPreview()?"has-edit-button":"")},r.a.createElement(p.BrManageMenuButton,{menu:a}),a.siteMenuItems.map((function(e,t){return r.a.createElement(b,{item:e})})))}function w(e){var t=e.component.getModels().pageable;return t?r.a.createElement("div",null,t.items.map((function(t,a){return r.a.createElement(f,{key:a,item:e.page.getContent(t)})})),r.a.createElement(N,t)):null}function f(e){var t=e.item,a=t.getData(),n=a.author,l=a.date,c=a.introduction,m=a.title;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement(p.BrManageContentButton,{content:t}),r.a.createElement("div",{className:"card-body"},m&&r.a.createElement("h2",{className:"card-title"},r.a.createElement(s.b,{to:t.getUrl()},m)),n&&r.a.createElement("div",{className:"card-subtitle mb-3 text-muted"},n),l&&r.a.createElement("div",{className:"card-subtitle mb-3 small text-muted"},new Date(l).toDateString()),c&&r.a.createElement("p",{className:"card-text"},c)))}function N(e){var t=r.a.useContext(p.BrPageContext);if(!t||!e.showPagination)return null;var a=t.getUrl(),n=function(e){return"".concat(a).concat(a.includes("?")?"&":"?","page=").concat(e)};return r.a.createElement("nav",{"aria-label":"News List Pagination"},r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",{className:"page-item ".concat(e.previous?"":"disabled")},r.a.createElement(s.b,{to:e.previous?n(e.previousPage):"#",className:"page-link","aria-label":"Previous"},r.a.createElement("span",{"aria-hidden":"true"},"\xab"),r.a.createElement("span",{className:"sr-only"},"Previous"))),e.pageNumbersArray.map((function(t,a){return r.a.createElement("li",{key:a,className:"page-item ".concat(t===e.currentPage?"active":"")},r.a.createElement(s.b,{to:n(t),className:"page-link"},t))})),r.a.createElement("li",{className:"page-item ".concat(e.next?"":"disabled")},r.a.createElement(s.b,{to:e.next?n(e.nextPage):"#",className:"page-link","aria-label":"Next"},r.a.createElement("span",{"aria-hidden":"true"},"\xbb"),r.a.createElement("span",{className:"sr-only"},"Next")))))}u.a.interceptors.request.use((function(e){return Object(i.a)({},e,{withCredentials:!0})})),c.a.render(r.a.createElement(s.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/(.*)",component:function(e){var t={httpClient:u.a,options:{live:{cmsBaseUrl:"http://localhost:8080/site",spaBaseUrl:""},preview:{cmsBaseUrl:"http://localhost:8080/site/_cmsinternal",spaBaseUrl:"/site/_cmsinternal?bloomreach-preview=true"}},request:{path:"".concat(e.location.pathname).concat(e.location.search)}},a={Banner:E,Content:g,"News List":w};return r.a.createElement(p.BrPage,{configuration:t,mapping:a},r.a.createElement(h.d,{orgName:"Health Education England",orgSplit:"Library and Knowledge Services"},r.a.createElement(h.d.Container,null,r.a.createElement(h.d.Logo,{href:"/"}),r.a.createElement(h.d.Content,null,r.a.createElement(h.d.MenuToggle,null),r.a.createElement(h.d.Search,null))),r.a.createElement(p.BrComponent,{path:"menu"},r.a.createElement(v,null))),r.a.createElement(h.b,null,r.a.createElement(h.f,null,r.a.createElement(h.a,{width:"full"},r.a.createElement(h.e,null,r.a.createElement(p.BrComponent,{path:"main"}))))),r.a.createElement(h.c,null,r.a.createElement(h.c.List,{columns:!0},r.a.createElement(h.c.ListItem,{href:"https://www.nhs.uk/nhs-sites/"},"NHS sites"),r.a.createElement(h.c.ListItem,{href:"https://www.nhs.uk/about-us/"},"About us"),r.a.createElement(h.c.ListItem,{href:"https://www.nhs.uk/contact-us/"},"Contact us"),r.a.createElement(h.c.ListItem,{href:"https://www.nhs.uk/personalisation/login.aspx"},"Profile editor login"),r.a.createElement(h.c.ListItem,{href:"https://www.nhs.uk/about-us/sitemap/"},"Sitemap"),r.a.createElement(h.c.ListItem,{href:"https://www.nhs.uk/accessibility/"},"Accessibility"),r.a.createElement(h.c.ListItem,{href:"https://www.nhs.uk/our-policies/"},"Our policies"),r.a.createElement(h.c.ListItem,{href:"https://www.nhs.uk/our-policies/cookies-policy/"},"Cookies")),r.a.createElement(h.c.Copyright,null,"\xa9 Crown copyright")))}}),r.a.createElement(m.a,{to:"/"}))),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.6cdedca1.chunk.js.map