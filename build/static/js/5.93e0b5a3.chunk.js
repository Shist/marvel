(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{41:function(e,t,c){"use strict";var a=c.p+"static/media/error.42292aa1.gif",n=(c(44),c(2));t.a=function(){return Object(n.jsx)("img",{src:a,alt:"Error",className:"error-msg"})}},43:function(e,t,c){"use strict";var a=c(4),n=c.n(a),r=c(7),s=c(5),i=c(0);t.a=function(){var e=function(){var e=Object(i.useState)("waiting"),t=Object(s.a)(e,2),c=t[0],a=t[1];return{request:Object(i.useCallback)(function(){var e=Object(r.a)(n.a.mark((function e(t){var c,r,s,i,o,l=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-type":"application/json"},a("loading"),e.prev=4,e.next=7,fetch(t,{method:c,body:r,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(4),a("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){a("loading")}),[]),process:c,setProcess:a}}(),t=e.request,c=e.clearError,a=e.process,o=e.setProcess,l="https://gateway.marvel.com:443/v1/public/",u="apikey=b590e2183035d8a341bf24ada146846a",j=function(){var e=Object(r.a)(n.a.mark((function e(){var c,a,r=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.length>0&&void 0!==r[0]?r[0]:210,e.next=3,t("".concat(l,"characters?limit=9&offset=").concat(c,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(n.a.mark((function e(c){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"characters/").concat(c,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",f(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(n.a.mark((function e(c){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"characters?name=").concat(c,"&").concat(u));case 2:return a=e.sent,e.abrupt("return",a.data.results.map(f));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(n.a.mark((function e(){var c,a,r=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.length>0&&void 0!==r[0]?r[0]:0,e.next=3,t("".concat(l,"comics?orderBy=issueNumber&limit=8&offset=").concat(c,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(r.a)(n.a.mark((function e(c){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"comics/").concat(c,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",O(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return{id:e.id,name:e.name,description:e.description,thumbnail:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),homepage:e.urls[0].url,wiki:e.urls[1].wiki,comics:e.comics.items}},O=function(e){var t;return{id:e.id,title:e.title,description:e.description||"There is no description about this comics yet",pageCount:e.pageCount?"".concat(e.pageCount," pages"):"There is no info about number of pages of that comics",thumbnail:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"Not available"}};return{clearError:c,process:a,setProcess:o,getAllCharacters:j,getCharacter:d,getCharactersByName:h,getComic:m,getAllComics:b}}},44:function(e,t,c){},47:function(e,t,c){"use strict";var a=c(23),n=c(41),r=(c(48),c(2)),s=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(r.jsxs)("div",{className:"skeleton",children:[Object(r.jsxs)("div",{className:"pulse skeleton__header",children:[Object(r.jsx)("div",{className:"pulse skeleton__circle"}),Object(r.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(r.jsx)("div",{className:"pulse skeleton__block"}),Object(r.jsx)("div",{className:"pulse skeleton__block"}),Object(r.jsx)("div",{className:"pulse skeleton__block"})]})]})};t.a=function(e,t,c){switch(e){case"waiting":return Object(r.jsx)(s,{});case"loading":return Object(r.jsx)(a.a,{});case"confirmed":return Object(r.jsx)(t,{data:c});case"error":return Object(r.jsx)(n.a,{});default:throw new Error("Unexpected process state")}}},48:function(e,t,c){},52:function(e,t,c){"use strict";var a=c(11),n=c(14),r=c(15),s=c(16),i=c(0),o=c(41),l=c(2),u=function(e){Object(r.a)(c,e);var t=Object(s.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(n.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(o.a,{}):this.props.children}}]),c}(i.Component);t.a=u},56:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},81:function(e,t,c){},91:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c(0),r=c(45),s=c(43),i=c(47),o=(c(69),c.p+"static/media/mjolnir.61f31e18.png"),l=c(2),u=function(e){var t=e.data;if(!t)return null;var c=t.name,a=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki;return Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:n,alt:"Random character",className:"randomchar__img",style:(null===n||void 0===n?void 0:n.endsWith("image_not_available.jpg"))?{objectFit:"contain"}:null}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:a||"There is currently no additional information about this character."}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},j=function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],r=t[1],j=Object(s.a)(),d=j.clearError,h=j.getCharacter,b=j.process,m=j.setProcess;Object(n.useEffect)((function(){O();var e=setInterval(O,6e4);return function(){clearInterval(e)}}),[]);var f=function(e){r(e)},O=function(){d();var e=Math.floor(400*Math.random()+1011e3);h(e).then(f).then((function(){return m("confirmed")}))};return Object(l.jsxs)("div",{className:"randomchar",children:[Object(i.a)(b,u,c),Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{className:"button button__main",onClick:function(){"loading"!==b&&O()},children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},d=c(8),h=c(94),b=c(92),m=(c(56),function(e){var t=e.char,c=e.itemsRefs,a=e.onItemClicked;return Object(l.jsxs)("li",{className:"char-list-item",ref:function(e){return c.current[t.id]=e},tabIndex:"0",role:"button",onClick:a,onKeyDown:function(e){"Space"!==e.code&&"Enter"!==e.code||(e.preventDefault(),a())},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:"character ".concat(t.name),style:t.thumbnail.endsWith("image_not_available.jpg")?{objectFit:"contain"}:null}),Object(l.jsx)("div",{className:"char-list-item__name",children:t.name})]})}),f=c(23),O=c(41),p=(c(70),function(e,t,c){switch(e){case"waiting":return Object(l.jsx)(f.a,{});case"loading":return c?Object(l.jsx)(t,{}):Object(l.jsx)(f.a,{});case"confirmed":return Object(l.jsx)(t,{});case"error":return Object(l.jsx)(O.a,{});default:throw new Error("Unexpected process state")}}),v=function(e){var t=e.onCharSelected,c=Object(n.useState)([]),r=Object(a.a)(c,2),i=r[0],o=r[1],u=Object(n.useState)(!1),j=Object(a.a)(u,2),f=j[0],O=j[1],v=Object(n.useState)(210),x=Object(a.a)(v,2),_=x[0],g=x[1],N=Object(n.useState)(!1),k=Object(a.a)(N,2),w=k[0],y=k[1],C=Object(s.a)(),E=C.getAllCharacters,S=C.process,T=C.setProcess;Object(n.useEffect)((function(){P(_,!0)}),[]);var P=function(e,t){O(!t),E(e).then(F).then((function(){return T("confirmed")}))},F=function(e){var t=!1;e.length<9&&(t=!0),o((function(t){return[].concat(Object(d.a)(t),Object(d.a)(e))})),O(!1),g((function(e){return e+9})),y(t)},I=Object(n.useRef)([]),R=Object(l.jsx)("ul",{className:"char__grid",children:Object(l.jsx)(h.a,{component:null,children:i.map((function(e){return e?Object(l.jsx)(b.a,{timeout:500,classNames:"char-list-item",children:Object(l.jsx)(m,{char:e,itemsRefs:I,onItemClicked:function(){var c;t(null===e||void 0===e?void 0:e.id),c=null===e||void 0===e?void 0:e.id,I.current.forEach((function(e){return e.classList.remove("char__item-selected")})),I.current[c].classList.add("char__item-selected"),I.current[c].focus()}},null===e||void 0===e?void 0:e.id)},null===e||void 0===e?void 0:e.id):null}))})});return Object(l.jsxs)("div",{className:"char__list",children:[p(S,(function(){return R}),f),Object(l.jsx)("button",{className:"button button__main button__long",disabled:f,style:{display:w?"none":"block"},onClick:function(){return P(_,!1)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})},x=(c(71),function(e){var t=e.data,c=t.name,a=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics.map((function(e,t){return t<10?Object(l.jsx)("li",{className:"char__comics-item",children:e.name},t):null}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:n,alt:c,style:n.endsWith("image_not_available.jpg")?{objectFit:"contain"}:null}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:a}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsx)("ul",{className:"char__comics-list",children:i.length?i:"There are no any comics with this character"})]})}),_=function(e){var t=e.charId,c=Object(n.useState)(null),r=Object(a.a)(c,2),o=r[0],u=r[1],j=Object(s.a)(),d=j.clearError,h=j.getCharacter,b=j.process,m=j.setProcess;Object(n.useEffect)((function(){f()}),[t]);var f=function(){t&&(d(),h(t).then(O).then((function(){return m("confirmed")})))},O=function(e){u(e)};return Object(l.jsx)("div",{className:"char__info",children:Object(i.a)(b,x,o)})},g=c(85),N=c(86),k=c(12),w=(c(81),function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],r=t[1],i=Object(s.a)(),o=i.clearError,u=i.getCharactersByName,j=i.process,d=i.setProcess,h="error"===j?Object(l.jsx)("div",{className:"char__search-critical-error",children:Object(l.jsx)(O.a,{})}):null,b=c?c.length>0?Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",c[0].name," page?"]}),Object(l.jsx)(k.b,{to:"/characters/".concat(c[0].id),className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"To page"})})]}):Object(l.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(l.jsxs)("div",{className:"char__search-form",children:[Object(l.jsx)(g.d,{initialValues:{charName:""},validationSchema:N.a({charName:N.b().required("This field is required")}),onSubmit:function(e){var t=e.charName;o(),u(t).then((function(e){return r(e)})).then((function(){return d("confirmed")}))},children:Object(l.jsxs)(g.c,{children:[Object(l.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsx)(g.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(l.jsx)("button",{type:"submit",className:"button button__main",disabled:"loading"===j,children:Object(l.jsx)("div",{className:"inner",children:"find"})})]}),Object(l.jsx)(g.a,{component:"div",className:"char__search-error",name:"charName"})]})}),b,h]})}),y=c(52),C=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(r.a,{children:[Object(l.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(l.jsx)("title",{children:"Marvel information portal"})]}),Object(l.jsx)(y.a,{children:Object(l.jsx)(j,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(y.a,{children:Object(l.jsx)(v,{onCharSelected:function(e){s(e)}})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(y.a,{children:Object(l.jsx)(_,{charId:c})}),Object(l.jsx)(y.a,{children:Object(l.jsx)(w,{})})]})]}),Object(l.jsx)("img",{className:"bg-decoration",src:C,alt:"vision"})]})}}}]);
//# sourceMappingURL=5.93e0b5a3.chunk.js.map