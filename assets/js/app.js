!function(t){function s(s){for(var i,r,o=s[0],c=s[1],l=s[2],p=0,g=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&g.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);for(m&&m(s);g.length;)g.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],i=!0,o=1;o<e.length;o++){var c=e[o];0!==a[c]&&(i=!1)}i&&(n.splice(s--,1),t=r(r.s=e[0]))}return t}var i={},a={0:0},n=[];function r(s){if(i[s])return i[s].exports;var e=i[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=i,r.d=function(t,s,e){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)r.d(e,i,function(s){return t[s]}.bind(null,i));return e},r.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var l=0;l<o.length;l++)s(o[l]);var m=c;n.push([34,1]),e()}([,,,function(t,s,e){var i=e(23);"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,a);i.locals&&(t.exports=i.locals)},function(t,s,e){var i=e(25);"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,a);i.locals&&(t.exports=i.locals)},function(t,s,e){var i=e(27);"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,a);i.locals&&(t.exports=i.locals)},function(t,s,e){var i=e(29);"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,a);i.locals&&(t.exports=i.locals)},function(t,s,e){var i=e(31);"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,a);i.locals&&(t.exports=i.locals)},,,function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"work-block section tab",class:{"notActive-tab":t.description}},t._l(t.projectData,(function(s,i){return e("a",{key:"keysforcenterMark"+i,staticClass:"work-box",attrs:{work:s,Index:i,href:s.url,target:"_blank"},on:{click:function(e){return t.openMoreWork(e,s.name,s.url)}}},[e("div",{staticClass:"work-box__img_wrap"},[e("img",{staticClass:"work-box__img",attrs:{src:s.img,alt:s.name}}),t._v(" "),e("div",{staticClass:"description",on:{click:function(e){return t.openDescription(e,s.name)}}},[e("span",{staticClass:"description__link"},[t._v(t._s(t.lngData.description))])])]),t._v(" "),e("p",{staticClass:"work-box__title"},[t._v(t._s(s.name))])])})),0),t._v(" "),""!=t.workName&&t.description&&null!=t.descriptionData[t.workName].imgs?e("CoolLightBox",{attrs:{items:t.descriptionData[t.workName].imgs,index:t.index,loop:""},on:{close:function(s){t.index=null}}}):t._e(),t._v(" "),""!=t.workName?e("section",{staticClass:"block block_margin description-block ",class:{"description-block_notActive":!t.description}},[e("span",{staticClass:"block__close",on:{click:t.closeDescription}},[t._v("X")]),t._v(" "),e("h2",{staticClass:"description-block__title"},[t._v(t._s(t.descriptionData[t.workName].title))]),t._v(" "),e("p",{staticClass:"description-block__text"},[t._v(t._s(t.descriptionData[t.workName].text))]),t._v(" "),null!=t.descriptionData[t.workName].imgs?e("div",{staticClass:"images-wrapper"},t._l(t.descriptionData[t.workName].imgs.slice(0,5),(function(s,i){return e("div",{key:i,staticClass:"image",style:{backgroundImage:"url("+s.src+")"},on:{click:function(s){return t.setIndex(i)}}})})),0):t._e(),t._v(" "),e("ul",{staticClass:"technologies"},t._l(t.descriptionData[t.workName].tags,(function(s,i){return e("li",{key:"keysforcenterMark"+i,staticClass:"technologies__item",attrs:{skill:s,Index:i},on:{click:t.openSkills}},[t._v(t._s(s))])})),0)]):t._e()],1)};i._withStripped=!0;var a={name:"works",components:{CoolLightBox:e(8).a},data:function(){return{description:!1,workName:"",index:null}},computed:{projectData:function(){return this.$store.getters.getprojectData},lngData:function(){return this.$store.getters.getlngData},descriptionData:function(){return this.$store.getters.getdescriptionData}},methods:{setIndex:function(t){this.index=t},openSkills:function(){this.$router.push("/Skills")},closeDescription:function(){this.description=!1},openMoreWork:function(t,s,e){e.length<1&&this.openDescription(t,s)},openDescription:function(t,s){t.preventDefault(),this.workName=s,this.description=!0}},mounted:function(){this.workName=this.projectData[0].name}},n=(e(22),e(0)),r=Object(n.a)(a,i,[],!1,null,null,null);r.options.__file="src/components/works.vue";s.default=r.exports},function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"block block_margin about-me tab "},[e("h2",{staticClass:"about-me__first-title"},[t._v(t._s(t.lngData.mySkills))]),t._v(" "),e("div",{staticClass:"skills"},t._l(t.skillsData,(function(s,i){return e("div",{key:"skillsasa"+i,staticClass:"skills-box",attrs:{skill:s,Index:i}},[e("div",{staticClass:"skills-box__img_wrap"},[e("img",{staticClass:"skills-box__img",attrs:{src:s.src,alt:"skill"}})]),t._v(" "),e("div",{staticClass:"skills-box__wrap"},[e("h3",{staticClass:"skills-box__title"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"skills-box__description"},[t._v(t._s(s.descr))])])])})),0)])};i._withStripped=!0;var a={name:"skills",computed:{skillsData:function(){return this.$store.getters.getskillsData},lngData:function(){return this.$store.getters.getlngData}}},n=(e(24),e(0)),r=Object(n.a)(a,i,[],!1,null,null,null);r.options.__file="src/components/skills.vue";s.default=r.exports},function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"block block_margin contacts tab "},[e("h2",{staticClass:"contacts__title"},[t._v(t._s(t.lngData.contacts))]),t._v(" "),e("div",{staticClass:"contact-me"},[e("p",{staticClass:"contact-me__title"},[t._v(t._s(t.lngData.contactMe)+" ⬇")]),t._v(" "),e("span",{staticClass:"contact-me__phone"},[t._v(t._s(t.lngData.phone)+": \r\n              "),e("a",{staticClass:"contact-me__link",attrs:{href:"tel:+111223333333"}},[t._v("  +111 (22) 333-33-33")])]),t._v(" "),e("span",{staticClass:"contact-me__email"},[t._v(t._s(t.lngData.email)+": \r\n              "),e("a",{staticClass:"contact-me__link",attrs:{href:"mailto:nzavrazhnev@bk.ru"}},[t._v("nzavrazhnev@bk.ru")])])]),t._v(" "),e("div",{staticClass:"social-media"},[e("p",{staticClass:"social-media__title"},[t._v(t._s(t.lngData.networkTitle)+" ⬇")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])};i._withStripped=!0;var a={name:"social",computed:{lngData:function(){return this.$store.getters.getlngData}}},n=(e(26),e(0)),r=Object(n.a)(a,i,[function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"social-media__link",attrs:{href:"https://vk.com/n.zavrazhnev",target:"_blank"}},[s("div",{staticClass:"social-media__img_wrap"},[s("img",{staticClass:"social-media__img",attrs:{src:"/assets/img/contact-icons/vk.svg",alt:"vk"}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"social-media__link",attrs:{href:"https://www.instagram.com/nikita_zavrazhnev/",target:"_blank"}},[s("div",{staticClass:"social-media__img_wrap"},[s("img",{staticClass:"social-media__img",attrs:{src:"/assets/img/contact-icons/instagram.svg",alt:"instagram"}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"social-media__link",attrs:{href:"https://t.me/Nick654Z",target:"_blank"}},[s("div",{staticClass:"social-media__img_wrap"},[s("img",{staticClass:"social-media__img",attrs:{src:"/assets/img/contact-icons/telegram.svg",alt:"telegram"}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"social-media__link",attrs:{href:"https://github.com/Nikita654",target:"_blank"}},[s("div",{staticClass:"social-media__img_wrap"},[s("img",{staticClass:"social-media__img",attrs:{src:"/assets/img/contact-icons/github.svg",alt:"github"}})])])}],!1,null,null,null);r.options.__file="src/components/social.vue";s.default=r.exports},,,function(t,s){},,,,,,,function(t,s,e){"use strict";var i=e(3);e.n(i).a},function(t,s,e){},function(t,s,e){"use strict";var i=e(4);e.n(i).a},function(t,s,e){},function(t,s,e){"use strict";var i=e(5);e.n(i).a},function(t,s,e){},function(t,s,e){"use strict";var i=e(6);e.n(i).a},function(t,s,e){},function(t,s,e){"use strict";var i=e(7);e.n(i).a},function(t,s,e){},function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{staticClass:"header section"},[e("a",{staticClass:"brand-logo",attrs:{href:"./"}},[e("p",{staticClass:"brand-logo__name",class:{"brand-logo__nameRU":"ru"==t.lng}},[t._v(t._s(t.lngData.myName))]),t._v(" "),e("p",{staticClass:"brand-logo__subtitle",class:{"brand-logo__subtitleRU":"ru"==t.lng}},[t._v(t._s(t.lngData.myProf))])]),t._v(" "),e("p",{staticClass:"header__title"},[t._v(t._s(t.lngData.myProfText))]),t._v(" "),e("p",{staticClass:"header_lngTurn"},[e("span",{class:{activeLng:"en"==t.lng},on:{click:function(s){return t.changeLng("en")}}},[t._v(t._s(t.lngData.English))]),t._v(" / \n       "),e("span",{class:{activeLng:"ru"==t.lng},on:{click:function(s){return t.changeLng("ru")}}},[t._v(t._s(t.lngData.Russian))])])])};i._withStripped=!0;var a={name:"naming",computed:{lngData:function(){return this.$store.getters.getlngData},lng:function(){return this.$store.getters.getlng}},mounted:function(){var t=localStorage.getItem("lng");null!=t&&NaN!=t&&null!=t&&this.$store.commit("changeLng",t)},watch:{lng:function(t){var s=document.getElementsByTagName("title")[0];document.getElementsByTagName("html")[0].lang=t,s.text=this.lngData.myName}},methods:{changeLng:function(t){localStorage.setItem("lng",t),this.$store.commit("changeLng",t)}}},n=(e(28),e(0)),r=Object(n.a)(a,i,[],!1,null,null,null);r.options.__file="src/components/naming.vue";s.default=r.exports},function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",{staticClass:"nav section"},[e("div",{staticClass:"nav__list"},[e("router-link",{staticClass:"nav__link",attrs:{to:"/"}},[e("span",{staticClass:"nav__link_main"},[t._v(t._s(t.lngData.myWorks))]),t._v(" "),e("span",{staticClass:"nav__link_hover"},[t._v(t._s(t.lngData.myWorks))])]),t._v(" "),e("router-link",{staticClass:"nav__link",attrs:{to:"/Skills"}},[e("span",{staticClass:"nav__link_main"},[t._v(t._s(t.lngData.skills))]),t._v(" "),e("span",{staticClass:"nav__link_hover"},[t._v(t._s(t.lngData.skills))])]),t._v(" "),e("router-link",{staticClass:"nav__link",attrs:{to:"/Contacts"}},[e("span",{staticClass:"nav__link_main"},[t._v(t._s(t.lngData.contacts))]),t._v(" "),e("span",{staticClass:"nav__link_hover"},[t._v(t._s(t.lngData.contacts))])])],1)])};i._withStripped=!0;var a={name:"navigator",computed:{lngData:function(){return this.$store.getters.getlngData}},mounted:function(){}},n=(e(30),e(0)),r=Object(n.a)(a,i,[],!1,null,null,null);r.options.__file="src/components/navigator.vue";s.default=r.exports},function(t,s,e){"use strict";e.r(s);e(15);var i=e(9),a=e.n(i),n=e(13),r=[{src:"/assets/img/skill-icons/data.svg",descr:"Использование SASS и Emmet",name:"HTML + CSS"},{src:"/assets/img/skill-icons/resize.svg",descr:"Использование flexbox,media queries,grid",name:"Adaptive Layout"},{src:"/assets/img/skill-icons/binary-data.svg",descr:"Поддержка всех современных браузеров",name:"Cross-Browser"},{src:"/assets/img/skill-icons/code.svg",descr:"Глубокие знания JS(до ES10), также Webpack для сборки проектов",name:"JavaScript"},{src:"/assets/img/skill-icons/vue.svg",descr:"Использование Vue, VueX, Vue Router,Nuxt JS в своих проектах",name:"Vue"},{src:"/assets/img/skill-icons/software.svg",descr:"Работа с Photoshop,Figma,Zeplin",name:"Design"}],o={waxom:{title:"WAXOM",text:"Один из первых сайтов, использовал многие технологии и идеи впервые. Оттачивал на нем свои навыки.Показывал знакомым и при первых собеседованиях.",tags:["HTML","CSS","JavaScript","SASS","BEM"]},wooder:{title:"WOODER",text:"Один из первых сайтов, использовал многие технологии и идеи впервые. Оттачивал на нем свои навыки верстки множества мелких деталей и их анимации.",tags:["HTML","CSS","JavaScript","SASS","BEM"]},creative:{title:"CREATIVE",text:"Первый сайт, осваивал на нем адаптивную верстку, методологии, кроссбраузерность и современные подходы в разработке.",tags:["HTML","CSS","JavaScript","SASS","BEM"]},woop:{title:"WOOP",text:"Комерческий сайт, работу которого смог оставить в своем доступе, использовал в ней карусель и впервые GET и POST запросы",tags:["HTML","SASS","JavaScript","BEM"]},"color group":{title:"COLOR GROUP",text:"Тестовой задание при приеме на работу, использовал в нем многие приемы оптимизации.",tags:["HTML","SASS","JavaScript","WEBPACK","BEM"]},prima:{title:"PRIMA",text:"Мой первый коммерческий опыт, использовал исключительно нативный JS, а также многие вещи писал вручную и впервые, никаких снипетов, примеров и старого кода.",tags:["HTML","SASS","JavaScript","WORDPRESS"],imgs:[{title:"На фоне воспроизводится видео",description:"Главная страница",src:"/assets/img/works/prima/prima1.png"},{title:"Можно выбрать статью которая окажется снизу или откроется в новом окне, блоки при появление добавляются анимацией",description:"Услуги",src:"/assets/img/works/prima/prima2.png"},{title:"Слайдер статей",description:"Слайдер",src:"/assets/img/works/prima/prima3.png"},{title:"Вид статьи, выбранной выше",description:"Услуги",src:"/assets/img/works/prima/prima4.png"},{title:"Слайдер отзывов",description:"Портфолио",src:"/assets/img/works/prima/prima5.png"},{title:"Слайдер на странице О нас",description:"О нас",src:"/assets/img/works/prima/prima6.png"},{title:"Изображение страницы Контакты",description:"Контакты",src:"/assets/img/works/prima/prima7.png"},{title:"Наконец, немного кода из исходников, написанного для Вордпресса",description:"Пример кода 1",src:"/assets/img/works/prima/prima8.png"},{title:"В заключение, нативный JS, на котором был написан сайт",description:"Пример кода 2",src:"/assets/img/works/prima/prima9.png"}]},sportboost:{title:"SPORTBOOST",text:"Беттинг сервис, в основе которого лежит SPA приложение, разработка которого длилась более 7 месяцев на постоянной основе.",tags:["HTML","CSS","VUE","VUEX","WEBPACK","WEBSOCKET"],imgs:[{title:"Страница лайв-матчей спортивных матчей с их маркетами и коэффициентами",description:"Лайв",src:"/assets/img/works/live.png"},{title:"Страница покера для пользователей сайта",description:"Покер",src:"/assets/img/works/poker.png"},{title:"Различные игры для пользователей",description:"Игры",src:"/assets/img/works/alg.png"},{title:"Личный кабинет пользователя с настройками уведомлений и историей ставок",description:"Личный кабинет",src:"/assets/img/works/cabinet.png"},{title:"Раздел казино на сайте",description:"Казино",src:"/assets/img/works/casino.png"},{title:"Раздел Лайв-Казино на сайте",description:"Лайв-Казино",src:"/assets/img/works/live-casino.png"},{title:"Страница различный видов игр",description:"Рулетки",src:"/assets/img/works/games.png"}]},nordick:{title:"NORDICK",text:"Приложение для партнеров по Беттингу, разработка которого заняла 4 месяца, которое включало в себя возможность сделать ставку, получить ее результат, проследить за нужным матчем и следить за лайв ставками",tags:["HTML","CSS","VUE","VUEX","WEBPACK","WEBSOCKET"],imgs:[{title:"Вид главной страницы приложения",description:"Главная",src:"/assets/img/nordic.png"},{title:"Открыты все окна приложения в один момент",description:"Главная со всеми окнами",src:"/assets/img/nordick3Full.png"}]}},c={description:"ОПИСАНИЕ",contacts:"КОНТАКТЫ",contactMe:"Вы можете связаться со мной",phone:"Телефон",email:"Почта",networkTitle:"Также вы можете найти меня в соцсетях",mySkills:"МОИ НАВЫКИ",skills:"НАВЫКИ",myWorks:"МОИ РАБОТЫ",myName:"Никита Завражнев",myProf:"ФРОНТЕНД РАЗРАБОТЧИК",myProfText:"Специалист в разработке веб-сайтов.",Russian:"Русский",English:"Английский"},l=[{src:"/assets/img/skill-icons/data.svg",descr:"Using pre-processors SASS and Emmet",name:"HTML + CSS"},{src:"/assets/img/skill-icons/resize.svg",descr:"Adaptive layout using flexbox,media queries,grid",name:"Adaptive Layout"},{src:"/assets/img/skill-icons/binary-data.svg",descr:"Optimal site display in all modern browsers",name:"Cross-Browser"},{src:"/assets/img/skill-icons/code.svg",descr:"Deep knowledge of JavaScript with ES10 standart. Using Webpack to build a project",name:"JavaScript"},{src:"/assets/img/skill-icons/vue.svg",descr:"Using Vue,VueX,Vue Router, Nuxt js in my project",name:"Vue"},{src:"/assets/img/skill-icons/software.svg",descr:"Using photoshop,figma,zeplin to work with layouts",name:"Design"}],m={waxom:{title:"WAXOM",text:"One of my first sites, using new technology and new ideas in Web.",tags:["HTML","CSS","JavaScript","SASS","BEM"]},wooder:{title:"WOODER",text:"One of my first sites, using new technology and new ideas in Web, example done animations for many site tiny details",tags:["HTML","CSS","JavaScript","SASS","BEM"]},creative:{title:"CREATIVE",text:"My first site, using adaptive layout, BEM, cross-browser and modern features and methods in web development.",tags:["HTML","CSS","JavaScript","SASS","BEM"]},woop:{title:"WOOP",text:"Commercial site, source code can save with my access, because dont got money for project. Using  GET and POST requests and Carousel.js",tags:["HTML","SASS","JavaScript","BEM"]},"color group":{title:"COLOR GROUP",text:"Test task was for an interview, using many optimization methods and Webpack to build.",tags:["HTML","SASS","JavaScript","WEBPACK","BEM"]},prima:{title:"PRIMA",text:"My first commercial site, using vanilla JavaScript for many tasks, also create many things for the first time, no exist snippets, examples and old code.",tags:["HTML","SASS","JavaScript","WORDPRESS"],imgs:[{title:"loop background video",description:"Main page",src:"/assets/img/works/prima/prima1.png"},{title:"Many articles in blocks for select, selected article appear under blocks with animation",description:"Services",src:"/assets/img/works/prima/prima2.png"},{title:"Articles slider",description:"slider",src:"/assets/img/works/prima/prima3.png"},{title:"Selected article design",description:"Services",src:"/assets/img/works/prima/prima4.png"},{title:"Slider reviews",description:"Portfolio",src:"/assets/img/works/prima/prima5.png"},{title:"Slider on page About us",description:"About us",src:"/assets/img/works/prima/prima6.png"},{title:"Contacts page design",description:"Contacts",src:"/assets/img/works/prima/prima7.png"},{title:"Finally, some code in my source, created for Wordpress",description:"Example 1",src:"/assets/img/works/prima/prima8.png"},{title:"In conclusion, vanilla Javascript for sliders,animations and scroll",description:"Example 2",src:"/assets/img/works/prima/prima9.png"}]},sportboost:{title:"SPORTBOOST",text:"Bet service, create it on SPA base, created this app 7 month/10 hours in day.",tags:["HTML","CSS","VUE","VUEX","WEBPACK","WEBSOCKET"],imgs:[{title:"Live events page with markets and kefs",description:"In-Play",src:"/assets/img/works/live.png"},{title:"Poker page for users site",description:"Poker",src:"/assets/img/works/poker.png"},{title:"Different games for users",description:"Games",src:"/assets/img/works/alg.png"},{title:"User cabinet with more informations and settings",description:"User cabinet",src:"/assets/img/works/cabinet.png"},{title:"Casino block on site",description:"Casino",src:"/assets/img/works/casino.png"},{title:"Live-Casino page on site",description:"Лайв-Казино",src:"/assets/img/works/live-casino.png"},{title:"Different games on page",description:"Roulette",src:"/assets/img/works/games.png"}]},nordick:{title:"NORDICK",text:"This app created for bet partner, development was 4 montgh, include opportunity to make bet, get result, search selected match and check live kefs",tags:["HTML","CSS","VUE","VUEX","WEBPACK","WEBSOCKET"],imgs:[{title:"Main page design",description:"Main page",src:"/assets/img/nordic.png"},{title:"Main page with open windows",description:"Main page",src:"/assets/img/nordick3Full.png"}]}},p={description:"DESCRIPTION",contacts:"CONTACTS",contactMe:"You can contact me",phone:"Phone",email:"E-mail",networkTitle:"And also you can find me in social networks",mySkills:"MY SKILLS",skills:"SKILLS",myWorks:"MY WORKS",myName:"Nikita Zavrazhnev",myProf:"FRONTEND DEVELOPER",myProfText:"I am a web development specialist.",Russian:"Russian",English:"English"},g=p,u=l,d=m;a.a.use(n.a);var _=new n.a.Store({state:{lngData:g,projectData:[{url:"https://nikita654.github.io/waxom",img:"/assets/img/min-images/waxom.png",name:"waxom"},{url:"https://nikita654.github.io/wooder.html",img:"/assets/img/min-images/wooder.png",name:"wooder"},{url:"https://nikita654.github.io/creative.html",img:"/assets/img/min-images/creative.png",name:"creative"},{url:"https://nikita654.github.io/woop.html",img:"/assets/img/min-images/woop.png",name:"woop"},{url:"https://nikita654.github.io/color.html",img:"/assets/img/min-images/color.png",name:"color group"},{url:"",img:"/assets/img/min-images/prima.png",name:"prima"},{url:"",img:"/assets/img/min-images/bet.png",name:"sportboost"},{url:"",img:"/assets/img/min-images/nordick.png",name:"nordick"}],skillsData:u,descriptionData:d,lng:"en"},getters:{getlng:function(t){return t.lng},getlngData:function(t){return t.lngData},getdescriptionData:function(t){return t.descriptionData},getprojectData:function(t){return t.projectData},getskillsData:function(t){return t.skillsData}},mutations:{changeLng:function(t,s){"ru"==s&&(t.lngData=c,t.skillsData=r,t.descriptionData=o),"en"==s&&(t.lngData=p,t.skillsData=l,t.descriptionData=m),t.lng=s}},actions:{}}),v=e(14),k=e(8),f=(e(19),e(10)),h=e(11),S=e(12);window.Vue=e(9),Vue.use(v.a),Vue.use(k.a),Vue.component("works",e(10).default),Vue.component("naming",e(32).default),Vue.component("navigator",e(33).default),Vue.component("skills",e(11).default),Vue.component("social",e(12).default);var w=[{path:"/",component:f.default},{path:"/Skills",component:h.default},{path:"/Contacts",component:S.default}],b=new v.a({routes:w});new Vue({el:"#app",router:b,store:_})}]);