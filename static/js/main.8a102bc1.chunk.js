(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{28:function(e,a,t){e.exports=t.p+"static/media/resume.30313dab.pdf"},43:function(e,a,t){e.exports=t(76)},48:function(e,a,t){},49:function(e,a,t){e.exports=t.p+"static/media/headshot.f0a057dc.jpeg"},76:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(15),c=t.n(o),s=(t(48),t(23)),l=t(4),i=!0,m={gradientColors:"#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",firstName:"Joshua",middleName:"Brian",lastName:"Kaplinsky",message:" Changing the world, one <line \\> at a time. ",icons:[{image:"fa-github",url:"https://github.com/jkaplinsky1"},{image:"fa-linkedin",url:"https://www.linkedin.com/in/joshkaplinsky/"}]},u={show:!0,heading:"About Me",imageLink:t(49),imageSize:375,message:"I am a Software Engineer with a passions for modern technology. My drive to learn new skills, experience in problem solving, creativity and leadership sets me apart and brings a new prospective to any team. ",resume:t(28)},f=t(38),d=t.n(f),p=t(17),g=t(39),b=r.a.forwardRef((function(e,a){var t=e.gradient,n=e.title,o=e.message,c=e.icons;return r.a.createElement(g.a,{fluid:!0,id:"home",style:{background:"linear-gradient(136deg,".concat(t,")"),backgroundSize:"1200% 1200%"},className:"title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement(p.a,{className:"text-center"},r.a.createElement("h1",{ref:a,className:"display-1"},n),r.a.createElement(d.a,{className:"lead typist",cursor:{show:!1}}," ",o),r.a.createElement("div",{className:"p-5"},c.map((function(e,a){return r.a.createElement("a",{key:"social-icon-".concat(a),target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x socialicons")}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg ",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me")))})),h=t(24),w=t.n(h),v=t(40),E=t(12),k=(t(28),t(41)),N=t.n(k),y=new RegExp(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),x=function(e){var a=e.heading,t=e.message,n=e.link,o=e.imgSize,c=e.resume,s=r.a.useState(""),l=Object(E.a)(s,2),i=l[0],m=l[1],u=r.a.useState(Boolean(n)),f=Object(E.a)(u,2),d=f[0],p=f[1];r.a.useEffect((function(){n&&!y.test(n)?g():m(n)}),[n]);var g=function(){var e=Object(v.a)(w.a.mark((function e(){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.instagram.com/","/?__a=1",e.prev=2,e.next=5,N.a.get("https://www.instagram.com/"+n+"/?__a=1");case 5:a=e.sent,m(a.data.graphql.user.profile_pic_url_hd),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),p(!1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},d&&r.a.createElement("img",{className:"border border-secondary rounded-circle",src:i,alt:"profilepicture",width:o,height:o})),r.a.createElement("div",{className:"col-lg-".concat(d?"7":"12")},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a),r.a.createElement("p",{className:"lead text-center"},t),c&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:c,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))},j=function(e){return r.a.createElement("footer",{style:{backgroundColor:"#f5f5f5"},className:"mt-auto py-5 text-center "},r.a.createElement(p.a,null,e.children,r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/jkaplinsky1","aria-label":"My GitHub"},"Josh Kaplinsky")," ","using ",r.a.createElement("i",{className:"fab fa-react"}),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"},"Project code is open source. Feel free to fork and make your own version."))))},R="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,_="undefined"!==typeof window;function S(e){var a=e.element,t=e.useWindow;if(!_)return{x:0,y:0};var n=(a?a.current:document.body).getBoundingClientRect();return t?{x:window.scrollX,y:window.scrollY}:{x:n.left,y:n.top}}function O(e,a,t,r,o){var c=Object(n.useRef)(S({useWindow:r})),s=null,l=function(){var a=S({element:t,useWindow:r});e({prevPos:c.current,currPos:a}),c.current=a,s=null};R((function(){if(_){var e=function(){o?null===s&&(s=setTimeout(l,o)):l()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e),s&&clearTimeout(s)}}}),a)}O.defaultProps={deps:[],element:!1,useWindow:!1,wait:null};var z=function(e){var a=r.a.useState(null),t=Object(E.a)(a,2),n=t[0],o=t[1];return r.a.useEffect((function(){var a=e.current,t=new ResizeObserver((function(e){e.forEach((function(e){o(e.contentRect)}))}));return t.observe(a),function(){t.unobserve(a)}}),[e]),n},L=t(16),C=t(20),B=r.a.forwardRef((function(e,a){var t=Object(n.useState)(!0),o=Object(E.a)(t,2),c=o[0],s=o[1],l=Object(n.useState)(0),i=Object(E.a)(l,2),f=i[0],d=i[1],p=r.a.useRef(),g=z(p),b=g?g.bottom:0;return O((function(e){e.prevPos;var t=e.currPos;g&&(t.y+a.current.offsetTop-g.bottom>5?s(!0):s(!1),d(t.y))}),[b]),r.a.useEffect((function(){g&&(b-f>=a.current.offsetTop?s(!1):s(!0))}),[b,g,a,f]),r.a.createElement(L.a,{ref:p,className:" fixed-top  ".concat(c?"navbar-transparent":"navbar-white"),expand:"lg"},r.a.createElement(L.a.Brand,{className:"brand",href:"/#home"},"<".concat(m.firstName," />")),r.a.createElement(L.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"toggler"}),r.a.createElement(L.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(C.a,{className:"mr-auto"},r.a.createElement(C.a.Link,{className:"nav-link lead",href:u.resume,target:"_blank",rel:"noreferrer noopener"},"Resume"),u.show&&r.a.createElement(C.a.Link,{className:"nav-link lead",href:"/#aboutme"},"About"))))})),P=r.a.forwardRef((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{gradient:m.gradientColors,title:"".concat(m.firstName," ").concat(m.middleName," ").concat(m.lastName),message:m.message,icons:m.icons,ref:a}),u.show&&r.a.createElement(x,{heading:u.heading,message:u.message,link:u.imageLink,imgSize:u.imageSize,resume:u.resume}))})),W=function(){var e=r.a.useRef();return r.a.createElement(s.a,{basename:"/"},i&&r.a.createElement(B,{ref:e}),r.a.createElement(l.a,{path:"/",exact:!0,component:function(){return r.a.createElement(P,{ref:e})}}),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.8a102bc1.chunk.js.map