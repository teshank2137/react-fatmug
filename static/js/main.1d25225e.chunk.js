(this["webpackJsonpreact-fatmug"]=this["webpackJsonpreact-fatmug"]||[]).push([[0],{101:function(e,n,t){"use strict";t.r(n);var i=t(0),a=t.n(i),c=t(13),r=t.n(c),s=(t(90),t(61)),o=t.n(s),d=t(70),l=t(6),j=t(14),p=t(15),b=t(71),u=t.n(b),h=t(9),x=t(33);function O(e){return{type:"SET_NAME",payload:e}}var m,g,f=function(e){return{type:"LOGIN_USER",payload:e}},y=t(121),w=t(2),v=p.a.div(m||(m=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n\n  .modal {\n    background-color: white;\n    padding: 50px;\n    display: flex;\n    flex-direction: column;\n    width: 400px;\n    -webkit-box-shadow: 4px 4px 5px 5px rgba(189, 195, 199, 1);\n    box-shadow: 4px 4px 5px 5px rgba(189, 195, 199, 1);\n  }\n  h1 {\n    margin: auto;\n  }\n  .field {\n    border: 2px solid grey;\n    margin-top: 40px;\n    border-radius: 5px;\n  }\n  .sup {\n    margin-top: 20px;\n  }\n  .fields sup {\n    margin-top: 20px;\n  }\n  input {\n    /* display: block; */\n    width: 100%;\n    padding: 3%;\n    border: none;\n    border-radius: 5px;\n    outline: none;\n  }\n  h5 {\n    color: grey;\n    margin-bottom: 32px;\n    font-weight: 500;\n    cursor: pointer;\n    padding: 8px 0;\n  }\n  .helper-text {\n    display: flex;\n    justify-content: space-between;\n  }\n  a {\n    text-decoration: none;\n    font-size: 12px;\n    padding: 8px 0;\n    color: grey;\n    cursor: pointer;\n  }\n  button {\n    width: 100px;\n    margin: auto;\n    margin-top: 30px;\n    padding: 8px;\n    background-color: #ff6600;\n    border-radius: 5px;\n    border: None;\n    cursor: pointer;\n  }\n  .error {\n    border: 2px solid red;\n  }\n  .passerror {\n    border: 2px solid red;\n  }\n"]))),N=p.a.div(g||(g=Object(j.a)(["\n  position: absolute;\n  top: 45vh;\n  right: 50vw;\n  z-index: 10;\n"])));function S(){var e=Object(h.f)(),n=Object(i.useState)(""),t=Object(l.a)(n,2),a=t[0],c=t[1],r=Object(i.useState)(""),s=Object(l.a)(r,2),j=s[0],p=s[1],b=Object(i.useState)(""),m=Object(l.a)(b,2),g=m[0],S=m[1],k=Object(i.useState)(""),T=Object(l.a)(k,2),C=T[0],E=T[1],_=Object(i.useState)(!1),I=Object(l.a)(_,2),L=I[0],z=I[1],A=Object(i.useState)(!1),P=Object(l.a)(A,2),U=P[0],D=P[1],F=Object(i.useState)(!1),R=Object(l.a)(F,2),M=R[0],G=R[1],Y=Object(i.useState)(!1),X=Object(l.a)(Y,2),J=X[0],K=X[1],B=Object(x.b)();function H(){return(H=Object(d.a)(o.a.mark((function n(){var t,i,c;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return K(!0),t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:j})},n.next=4,fetch("https://teshank.pythonanywhere.com/accounts/login/",t);case 4:if(200!==(i=n.sent).status){n.next=18;break}return B(O(a)),n.next=9,i.json();case 9:c=n.sent,B(f(c.token)),window.sessionStorage.setItem("token",c.token),window.sessionStorage.setItem("user",a),K(!1),D(!1),e.push("/"),n.next=20;break;case 18:D(!0),K(!1);case 20:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(w.jsxs)("div",{children:[Object(w.jsx)(N,{className:"progress",children:J?Object(w.jsx)(y.a,{}):null}),Object(w.jsxs)(u.a,{isFlipped:L,flipDirection:"horizontal",children:[Object(w.jsx)(v,{children:Object(w.jsxs)("div",{className:"modal",children:[Object(w.jsx)("h5",{onClick:function(e){z(!0),S(""),p(""),c(""),D(!1)},children:"create a new account"}),Object(w.jsx)("h1",{children:"Login"}),Object(w.jsxs)("div",{className:"fields",children:[Object(w.jsx)("div",{className:U?"field error":"field",children:Object(w.jsx)("input",{type:"text",id:"username",onChange:function(e){return c(e.target.value)},value:a,placeholder:"Username"})}),Object(w.jsx)("div",{className:U?"field error":"field",children:Object(w.jsx)("input",{type:"password",id:"password",value:j,placeholder:"Password",onChange:function(e){return p(e.target.value)}})})]}),Object(w.jsxs)("div",{className:"helper-text",children:[Object(w.jsx)("a",{href:"#username",children:"Forgot Password?"}),Object(w.jsx)("a",{href:"#password",children:"Not a Member yet?"})]}),Object(w.jsx)("button",{className:"submit",onClick:function(){return H.apply(this,arguments)},children:"Sign In"})]})}),Object(w.jsx)(v,{children:Object(w.jsxs)("div",{className:"modal",children:[Object(w.jsx)("h5",{onClick:function(e){z(!1),S(""),p(""),c(""),D(!1)},children:"Already Have an account? Login"}),Object(w.jsx)("h1",{children:"Signup"}),Object(w.jsxs)("div",{className:"fields sup",children:[Object(w.jsx)("div",{className:U?"field sup error":"field sup",children:Object(w.jsx)("input",{type:"email",id:"emailsup",onChange:function(e){return S(e.target.value)},value:g,placeholder:"Email"})}),Object(w.jsx)("div",{className:U?"field sup error":"field sup",children:Object(w.jsx)("input",{type:"text",id:"usernamesup",onChange:function(e){return c(e.target.value)},value:a,placeholder:"Username"})}),Object(w.jsx)("div",{className:" ".concat(U?"field sup error":"field sup"," ").concat(M?"passerror":null),children:Object(w.jsx)("input",{type:"password",id:"passwordsup",value:j,placeholder:"Password",onChange:function(e){return p(e.target.value)}})}),Object(w.jsx)("div",{className:" ".concat(U?"field sup error":"field sup"," ").concat(M?"passerror":null),children:Object(w.jsx)("input",{type:"password",id:"password2sup",value:C,placeholder:"Confirm Password",onChange:function(e){return E(e.target.value)}})})]}),Object(w.jsx)("button",{className:"submit",onClick:function(){if(j===C){G(!1),K(!0);var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:j,email:g})};fetch("https://teshank.pythonanywhere.com/accounts/signup/",n).then((function(e){return e.json()})).then((function(n){console.log(n),B(f(n.token)),window.sessionStorage.setItem("token",n.token),window.sessionStorage.setItem("user",a),B(O(a)),K(!1),D(!1),e.push("/")})).catch((function(e){console.log(e),D(!0),K(!1)}))}else G(!0)},children:"Sign Up"})]})})]})]})}var k,T=t(20),C=t(30),E={},_=function(e,n){var t=Object(x.c)((function(e){return e.token}))||function(){var e=window.sessionStorage.getItem("token");return f(e),e}(),a=Object(i.useState)([]),c=Object(l.a)(a,2),r=c[0],s=c[1],o=Object(i.useState)([]),d=Object(l.a)(o,2),j=d[0],p=d[1],b=Object(i.useState)([]),u=Object(l.a)(b,2),h=u[0],O=u[1],m=Object(i.useState)(!1),g=Object(l.a)(m,2),y=g[0],w=g[1],v="https://teshank.pythonanywhere.com/api/",N={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(t)}};switch(Object(i.useEffect)((function(){w(!0),"MY"===e?fetch(v+"myarticles/?page=".concat(n),N).then((function(e){return e.json()})).then((function(e){p(e.results),e.results.map((function(e){return E[e.id]=e}))})).catch((function(e){return p([])})):"LATEST"===e?fetch(v+"articles/?page=".concat(n),N).then((function(e){return e.json()})).then((function(e){e.results?(s(e.results),e.results.map((function(e){return E[e.id]=e}))):e.details&&s([])})).catch((function(e){return s([])})):"TOP"===e&&fetch(v+"toparticles/",N).then((function(e){return e.json()})).then((function(e){e.results?(O(e.results),e.results.map((function(e){return E[e.id]=e}))):e.details&&O([])})).catch((function(e){return O([])})),w(!1)}),[e,n,t]),e){case"LATEST":return[r,y];case"MY":return[j,y];case"TOP":return[h,y];case"DETAILS":return E;default:return null}},I=p.a.div(k||(k=Object(j.a)(["\n  margin: 2% 10%;\n  .image {\n    width: 100%;\n    object-fit: contain;\n  }\n  .content-header {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    padding: 3% 0;\n\n    border-bottom: 1px solid grey;\n    & h2 {\n      font-size: 18px;\n    }\n    & p {\n      font-size: 12px;\n    }\n    @media (min-width: 768px) {\n      & h2 {\n        font-size: 28px;\n      }\n      & p {\n        font-size: initial;\n      }\n    }\n  }\n  .content-body {\n    margin: 3% 0;\n    font-size: 15px;\n    @media (min-width: 786px) {\n      font-size: 20px;\n    }\n  }\n  footer {\n    margin-bottom: 5%;\n  }\n"])));function L(){var e=Object(h.h)().articleId,n=_("DETAILS")[e],t=a.a.useState(!0),i=Object(l.a)(t,2);i[0],i[1];return a.a.useEffect((function(){fetch("https://teshank.pythonanywhere.com/api/view/",{method:"POST",body:{id:e}}).then((function(e){return e.json()})).then((function(e){return console.log(e.article)}))}),[]),Object(w.jsx)(T.c,{children:Object(w.jsx)(T.b,{name:"article-".concat(e),children:Object(w.jsxs)(I,{children:[Object(w.jsx)("div",{className:"image-wrapper",children:Object(w.jsx)(T.d.Image,{className:"image",src:"https://teshank.pythonanywhere.com"+n.image_url||!1,animationKey:"image"})}),Object(w.jsxs)("div",{className:"content-header",children:[Object(w.jsx)("h2",{children:n.title}),Object(w.jsxs)("p",{children:[Date(n.time),Object(w.jsxs)("b",{children:[n.description.length%20," min read"]})]})]}),Object(w.jsx)("p",{className:"content-body",children:n.description}),Object(w.jsxs)("footer",{children:["by ",Object(w.jsx)("b",{children:n.username})]})]})})})}var z,A,P,U,D=t(76),F=t.n(D),R=t(75),M=t.n(R),G=p.a.div(z||(z=Object(j.a)(["\n  background-color: rgba(255, 255, 255, 0.5);\n  -webkit-box-shadow: 3px 1px 3px 3px rgba(232, 232, 232, 1);\n  box-shadow: 3px 1px 3px 3px rgba(232, 232, 232, 1);\n  margin: 12px 6px;\n  .article {\n    display: flex;\n    padding: 12px;\n    justify-content: space-between;\n  }\n  .description {\n    display: none;\n  }\n  .img {\n    width: 30vw;\n    height: 30vw;\n    object-fit: cover;\n    order: 2;\n    padding-left: 12px;\n    @media (min-width: 768px) {\n      width: 12vw;\n      height: 12vw;\n    }\n  }\n  section {\n    order: 1;\n  }\n  h5,\n  h2,\n  p {\n    padding-top: 8px;\n  }\n  span {\n    margin-left: 8px;\n  }\n  a {\n    text-decoration: none;\n    color: grey;\n    padding: 8px 0;\n  }\n  b {\n    color: grey;\n    cursor: pointer;\n  }\n"]))),Y=function(e){var n=Object(h.i)(),t=(n.path,n.url,Object(h.f)()),a=Object(T.e)("article-".concat(e.id)),c=Object(i.useCallback)((function(){return t.push("/view/".concat(e.id))}),[t,e.id]);return Object(w.jsx)(G,{children:Object(w.jsx)(T.b,{name:"article-".concat(e.id),children:Object(w.jsxs)("div",{className:"article",children:[Object(w.jsx)(T.d.Image,{className:"img",src:e.image_url,alt:"Thumbnail",animationKey:"image"}),Object(w.jsxs)("section",{children:[Object(w.jsx)("h4",{children:e.username}),Object(w.jsx)("h2",{className:"title",children:e.title}),Object(w.jsx)("p",{className:"description",children:e.description}),Object(w.jsxs)("p",{children:[Object(w.jsx)("b",{onClick:a(c),children:"Read more"}),Object(w.jsxs)("span",{children:[e.description.length%20," min read"]})]})]})]})})})},X=Object(p.a)(G)(A||(A=Object(j.a)(["\n  @media (min-width: 768px) {\n    margin: 2%;\n    padding: 3%;\n    .description {\n      display: inline-block;\n    }\n\n    .img {\n      order: -1;\n      width: 100%;\n      height: 100%;\n      padding-left: 0;\n    }\n\n    .article {\n      display: initial;\n      padding: 0;\n    }\n    .footer-text {\n      text-align: end;\n    }\n  }\n"]))),J=function(e){var n=Object(h.i)(),t=(n.path,n.url,Object(h.f)()),a=Object(T.e)("article-".concat(e.id)),c=Object(i.useCallback)((function(){return t.push("/view/".concat(e.id))}),[t,e.id]);return Object(w.jsx)(T.b,{name:"article-".concat(e.id),children:Object(w.jsx)(X,{children:Object(w.jsxs)("div",{className:"article",children:[Object(w.jsx)(T.d.Image,{animationKey:"image",className:"img",src:e.image_url,alt:"Thumbnail"}),Object(w.jsxs)("section",{children:[Object(w.jsxs)("h4",{children:[Object(w.jsx)("i",{className:"fas fa-info-circle"}),e.username]}),Object(w.jsx)("h2",{className:"title",children:e.title}),Object(w.jsx)("p",{className:"description",children:e.description}),Object(w.jsxs)("p",{className:"footer-text",children:[Object(w.jsx)("b",{onClick:a(c),children:"Read more"}),Object(w.jsxs)("span",{children:[e.description.length%20," min read"]})]})]})]})})})},K=Object(p.a)(G)(P||(P=Object(j.a)(["\n  display: flex;\n  padding: 1%;\n  margin: 2%;\n  .img {\n    order: -1;\n    margin-right: 2%;\n  }\n  .icons {\n    margin-left: auto;\n    align-self: center;\n    display: flex;\n    li {\n      list-style: none;\n      padding: 12px;\n    }\n  }\n  .description {\n    @media (min-width: 768px) {\n      display: initial;\n    }\n  }\n"]))),B=function(e){return Object(w.jsxs)(K,{children:[Object(w.jsx)("img",{className:"img",src:e.image_url,alt:"Thumbnail",animationKey:"image"}),Object(w.jsxs)("section",{children:[Object(w.jsx)("h2",{className:"title",children:e.title}),Object(w.jsxs)("p",{className:"description",children:[e.description.slice(0,500),"..."]}),Object(w.jsxs)("p",{children:[Object(w.jsx)("span",{children:"Read more"}),Object(w.jsxs)("span",{children:[e.description.length%20," min read"]})]})]}),Object(w.jsxs)("section",{className:"icons",children:[Object(w.jsx)("li",{children:Object(w.jsx)(M.a,{fontSize:"large"})}),Object(w.jsx)("li",{children:Object(w.jsx)(F.a,{fontSize:"large"})})]})]})},H=t(125),V=t(124),W=p.a.div(U||(U=Object(j.a)(["\n  .contents {\n    display: flex;\n    overflow: hidden;\n    flex-wrap: wrap-reverse;\n    justify-content: space-between;\n    @media (min-width: 768px) {\n      flex-wrap: nowrap;\n    }\n  }\n  .progress {\n    position: absolute;\n    top: 45vh;\n    right: 50vw;\n    z-index: 10;\n  }\n\n  .latest-articles {\n    border-top: 2px solid grey;\n    @media (min-width: 768px) {\n      flex: 3;\n      border: none;\n    }\n  }\n  aside {\n    margin-bottom: 12px;\n    border-bottom: 2px solid grey;\n    & .top-article-headline {\n      border-top: 1px solid grey;\n      border-bottom: 1px solid grey;\n      padding: 8px;\n    }\n    @media (min-width: 768px) {\n      padding: 0 2%;\n      flex: 2;\n      margin-top: 1%;\n      border: none;\n    }\n  }\n  footer {\n    display: flex;\n    padding: 16px;\n    justify-content: center;\n    .Footer {\n      text-align: center;\n    }\n  }\n"]))),q={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.4}}},Q={hidden:{opacity:0,y:50},show:{opacity:1,y:0,transition:{duration:.6}}};function Z(){var e=Object(i.useState)(1),n=Object(l.a)(e,2),t=n[0],a=n[1],c=_("LATEST",t),r=Object(l.a)(c,2),s=r[0],o=r[1],d=_("TOP"),j=Object(l.a)(d,2),p=j[0],b=j[1];return Object(w.jsx)(V.a.div,{initial:{opacity:0,y:"20%"},animate:{opacity:1,y:0},exit:{opacity:0,y:"20%"},transition:{transition:"easeOut"},children:Object(w.jsxs)(W,{children:[o||b?Object(w.jsx)("div",{className:"progress",children:Object(w.jsx)(y.a,{})}):null,Object(w.jsxs)(T.c,{children:[Object(w.jsxs)("div",{className:"contents",children:[Object(w.jsx)(V.a.section,{className:"latest-articles",variants:q,initial:"hidden",animate:"show",children:s.map((function(e){return Object(w.jsx)(V.a.div,{variants:Q,children:Object(w.jsx)(J,{id:e.id,title:e.title,username:e.username,description:e.description.slice(500),image_url:"https://teshank.pythonanywhere.com"+e.image_url||!1},e.id)})}))}),Object(w.jsxs)("aside",{children:[Object(w.jsx)("div",{className:"top-article-headline",children:"TOP ARTICLES"}),Object(w.jsx)(V.a.div,{className:"top-articles",variants:q,initial:"hidden",animate:"show",children:p.map((function(e){return Object(w.jsx)(V.a.div,{variants:Q,children:Object(w.jsx)(Y,{id:e.id,title:e.title,username:e.username,description:e.description,image_url:"https://teshank.pythonanywhere.com"+e.image_url||!1},e.id)})}))})]})]}),Object(w.jsx)("footer",{children:Object(w.jsx)(H.a,{className:"Footer",count:2,page:t,onChange:function(e,n){a(n)}})})]})]})})}var $,ee,ne=t(78),te=t(127),ie=t(126),ae=p.a.div($||($=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: 0 10%;\n  padding: 5%;\n\n  button {\n    align-self: center;\n    padding: 12px;\n    background: none;\n    border-radius: 5px;\n    background-color: #ff6600;\n    border: none;\n    transition: all 0.1s ease-out;\n  }\n  button:disabled {\n    background-color: #ff660045;\n    color: grey;\n  }\n  button:hover {\n    transform: translateX(1px) translateY(-1px);\n    -webkit-box-shadow: 2px 1px 2px 2px rgba(232, 232, 232, 1);\n    box-shadow: 2px 1px 2px 2px rgba(232, 232, 232, 1);\n  }\n  label {\n    padding: 12px 0;\n    font-size: 18px;\n  }\n  .form-image {\n    background: transparent;\n    padding: 12px 0;\n  }\n  input,\n  textarea {\n    padding: 12px;\n    background-color: #e8e8e8;\n    border: none;\n    border-radius: 5px;\n  }\n  textarea {\n    height: 50vh;\n  }\n  input:focus,\n  textarea:focus {\n    outline: none;\n    border: 2px solid grey;\n  }\n  .progress {\n    position: absolute;\n    top: 45vh;\n    right: 50vw;\n    z-index: 10;\n  }\n"])));function ce(e){return Object(w.jsx)(ie.a,Object(ne.a)({elevation:6,variant:"filled"},e))}function re(){var e=Object(x.c)((function(e){return e.token}))||window.sessionStorage.getItem("token"),n=Object(i.useState)(""),t=Object(l.a)(n,2),a=t[0],c=t[1],r=Object(i.useState)(""),s=Object(l.a)(r,2),o=s[0],d=s[1],j=Object(i.useState)(),p=Object(l.a)(j,2),b=p[0],u=p[1],h=Object(i.useState)(!1),O=Object(l.a)(h,2),m=O[0],g=O[1],f=Object(i.useState)(!1),v=Object(l.a)(f,2),N=v[0],S=v[1],k=Object(i.useState)(!1),T=Object(l.a)(k,2),C=T[0],E=T[1];Object(i.useEffect)((function(){a.length>2&&o.length>10&&b?g(!0):g(!1)}),[a,b,o]);var _=function(e,n){"clickaway"!==n&&E(!1)};return Object(w.jsxs)(V.a.div,{initial:{opacity:0,y:"20%"},animate:{opacity:1,y:0},exit:{opacity:0,y:"20%"},transition:{transition:"easeOut"},children:[Object(w.jsx)(te.a,{open:C,autoHideDuration:5e3,onClose:_,children:Object(w.jsx)(ce,{onClose:_,severity:"success",children:"Article uploaded successfully!"})}),Object(w.jsxs)(ae,{children:[N?Object(w.jsx)("div",{className:"progress",children:Object(w.jsx)(y.a,{})}):null,Object(w.jsx)("label",{children:"Title"}),Object(w.jsx)("input",{type:"text",id:"title",value:a,onChange:function(e){return c(e.target.value)}}),Object(w.jsx)("label",{children:"Description"}),Object(w.jsx)("textarea",{id:"description",onChange:function(e){return d(e.target.value)}}),Object(w.jsx)("label",{id:"image",children:"Upload Image"}),Object(w.jsx)("input",{className:"form-image",type:"file",id:"image",accept:"image/*",onChange:function(e){u(e.target.files[0])}}),Object(w.jsx)("button",{className:"submit",onClick:function(){S(!0);var n=new FormData;n.append("image",b),n.append("title",a),n.append("description",o),fetch("https://teshank.pythonanywhere.com/api/create/",{method:"POST",headers:{Authorization:"Token ".concat(e)},body:n}).then((function(e){return e.json()})).then((function(e){console.log(e),"success"===e.response&&(E(!0),S(!1))})),S(!1)},disabled:!m,children:"Upload"})]})]})}var se=p.a.div(ee||(ee=Object(j.a)(["\n  .progress {\n    position: absolute;\n    top: 45vh;\n    right: 50vw;\n    z-index: 10;\n  }\n  footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 2%;\n  }\n"]))),oe={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.4}}},de={hidden:{opacity:0,y:50},show:{opacity:1,y:0,transition:{duration:.6}}};function le(){var e=Object(i.useState)(1),n=Object(l.a)(e,2),t=n[0],a=n[1],c=_("MY",t),r=Object(l.a)(c,2),s=r[0],o=r[1];return Object(w.jsx)(V.a.div,{initial:{opacity:0,y:"20%"},animate:{opacity:1,y:0},exit:{opacity:0,y:"20%"},transition:{transition:"easeOut"},children:Object(w.jsxs)(se,{children:[o?Object(w.jsx)("div",{className:"progress",children:Object(w.jsx)(y.a,{})}):null,Object(w.jsx)(V.a.div,{className:"latest-articles",variants:oe,initial:"hidden",animate:"show",children:s.map((function(e){return Object(w.jsx)(V.a.div,{variants:de,children:Object(w.jsx)(B,{title:e.title,username:e.username,description:e.description,image_url:"https://teshank.pythonanywhere.com"+e.image_url||!1})})}))}),Object(w.jsx)("footer",{children:Object(w.jsx)(H.a,{className:"Footer",count:1,page:t,onChange:function(e,n){a(n)}})})]})})}var je,pe=t(129),be=p.a.div(je||(je=Object(j.a)(["\n  h1 {\n    font-size: 20px;\n    margin: 12px;\n  }\n  nav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    @media (min-width: 768px) {\n      margin: 0 2%;\n    }\n    a {\n      text-decoration: none;\n      color: black;\n    }\n    & h1 {\n      width: 45%;\n      margin-left: 0;\n    }\n    button {\n      padding: 5px 6px;\n      margin: 4px;\n      background: none;\n      border: none;\n      cursor: pointer;\n      @media (min-width: 786px) {\n        padding: 8px 12px;\n        margin-left: 16px;\n      }\n    }\n\n    & .btn-write {\n      background-color: #ff6600;\n      border-radius: 5px;\n    }\n    & .btn-articles {\n      border: 1px solid #ff6600;\n      border-radius: 5px;\n    }\n    & button:hover {\n      transform: translateX(2px) translateY(-2px);\n      -webkit-box-shadow: 2px 1px 2px 2px rgba(232, 232, 232, 1);\n      box-shadow: 2px 1px 2px 2px rgba(232, 232, 232, 1);\n    }\n  }\n"])));function ue(){var e=Object(h.f)(),n=Object(x.c)((function(e){return e.user}))||window.sessionStorage.getItem("user"),t=Object(x.b)(),a=Object(h.i)();a.path,a.url;return Object(i.useEffect)((function(){if(!n){var i=window.sessionStorage.getItem("token"),a=window.sessionStorage.getItem("user");t(O(a)),console.log(i),i?(t(f(i)),e.push("/")):e.push("/auth")}}),[]),Object(w.jsxs)(be,{children:[Object(w.jsxs)("nav",{children:[Object(w.jsx)("h1",{children:Object(w.jsxs)(C.b,{to:"/",children:["FATMUG | ",Object(w.jsxs)("span",{children:["Greetings! ",n]})]})}),Object(w.jsxs)("section",{children:[Object(w.jsx)(C.b,{to:"/create",children:Object(w.jsx)("button",{className:"btn-write",children:"Write"})}),Object(w.jsx)(C.b,{to:"/my-articles",children:Object(w.jsx)("button",{className:"btn-articles",children:"Your Articles"})}),Object(w.jsx)(C.b,{to:"/auth",children:Object(w.jsx)("button",{className:"btn-logout",onClick:function(e){t({type:"LOGOUT_USER",payload:""}),window.sessionStorage.removeItem("token")},children:"You Are Logged Out"!==n?"Logout":"Login"})})]})]}),Object(w.jsx)(pe.a,{children:Object(w.jsx)(h.c,{children:Object(w.jsxs)(T.a,{children:[Object(w.jsx)(h.a,{exact:!0,path:"/",children:Object(w.jsx)(Z,{})}),Object(w.jsx)(h.a,{path:"/view/:articleId",children:Object(w.jsx)(L,{})}),Object(w.jsx)(h.a,{path:"/create",children:Object(w.jsx)(re,{})}),Object(w.jsx)(h.a,{path:"/my-articles",children:Object(w.jsx)(le,{})})]})})})]})}var he=t(56);var xe=Object(he.a)({token:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOGIN_USER":case"LOGOUT_USER":return n.payload;default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_NAME":return n.payload;default:return e}}}),Oe=Object(he.b)(xe,"object"===typeof window&&"undefined"!==typeof window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e});var me=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(x.a,{store:Oe,children:Object(w.jsx)(C.a,{children:Object(w.jsxs)(h.c,{children:[Object(w.jsx)(h.a,{path:"/auth",children:Object(w.jsx)(S,{})}),Object(w.jsx)(h.a,{path:"/",children:Object(w.jsx)(ue,{})})]})})})})},ge=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,130)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),i(e),a(e),c(e),r(e)}))};r.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(me,{})}),document.getElementById("root")),ge()},90:function(e,n,t){}},[[101,1,2]]]);
//# sourceMappingURL=main.1d25225e.chunk.js.map