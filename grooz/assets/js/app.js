!function(t){function e(e){for(var a,r,i=e[0],l=e[1],c=e[2],u=0,v=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&v.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);for(p&&p(e);v.length;)v.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,i=1;i<s.length;i++){var l=s[i];0!==o[l]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},o={0:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=l;n.push([47,1]),s()}({21:function(t,e){},3:function(t,e,s){var a=s(44);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s(7)(a,o);a.locals&&(t.exports=a.locals)},4:function(t,e,s){var a=s(46);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s(7)(a,o);a.locals&&(t.exports=a.locals)},40:function(t,e,s){var a=s(41);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s(7)(a,o);a.locals&&(t.exports=a.locals)},41:function(t,e,s){},43:function(t,e,s){"use strict";var a=s(3);s.n(a).a},44:function(t,e,s){},45:function(t,e,s){"use strict";var a=s(4);s.n(a).a},46:function(t,e,s){},47:function(t,e,s){"use strict";s.r(e);s(21);var a=s(8),o=s.n(a),n=s(1);o.a.use(n.a);var r=new n.a.Store({state:{},getters:{},mutations:{},actions:{}}),i=s(9),l=s(19),c=s.n(l),p=s(20),u=s.n(p),v=(s(40),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[t._m(0),t._v(" "),s("div",{staticClass:"login_content"},[s("div",{staticClass:"form-group",class:{"has-error":t.err}},[s("label",{staticClass:"control-label",class:{"control-label-on":t.labelL},attrs:{for:"login-phone"}},[t._v("Номер телефона")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"},{name:"mask",rawName:"v-mask",value:"+7-###-###-##-##",expression:"'+7-###-###-##-##'"}],staticClass:"form-control",attrs:{placeholder:t.phoneText,type:"text",id:"login-phone"},domProps:{value:t.phoneNumber},on:{focus:function(e){return t.focusChange()},blur:function(e){return t.blurChange()},input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}}),t._v(" "),s("div",{ref:"login_phone_error",staticClass:"form-danger"})]),t._v(" "),s("div",{staticClass:"form-group",class:{"has-error":t.err}},[s("label",{staticClass:"control-label",class:{"control-label-on":t.labelP},attrs:{for:"login-password"}},[t._v("Пароль")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passWord,expression:"passWord"}],staticClass:"form-control",attrs:{type:"password",name:"password",id:"login-password",placeholder:"Пароль"},domProps:{value:t.passWord},on:{focus:function(e){t.labelP=!0},blur:function(e){t.labelP=!1},input:function(e){e.target.composing||(t.passWord=e.target.value)}}}),t._v(" "),s("div",{ref:"login_password_error",staticClass:"form-danger"})]),t._v(" "),s("div",{staticClass:"login_send"},[s("button",{staticClass:"btn btn-bold btn-active-yellow",attrs:{name:"send"},on:{click:t.next}},[t._v("ВОЙТИ")]),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])])});v._withStripped=!0;var d=s(5),f={directives:{mask:d.mask},name:"formLogin",data:function(){return{phoneNumber:"",labelP:!1,labelL:!1,phoneText:"Номер телефона",passWord:"",err:!1}},methods:{focusChange:function(){this.phoneText="+7-___-___-__-__",this.labelL=!0},blurChange:function(){this.phoneText="Номер телефона",this.labelL=!1},next:function(){var t=this;if(16==this.phoneNumber.length&&this.passWord.length>7){var e;e=(e=this.phoneNumber.split("+").join("").split("-").join("")).slice(1);var s=new FormData;s.set("phone",e),s.set("password",this.passWord),Vue.axios.post("https://dev.cargo.direct/api/login",s).then((function(e){"Успешно авторизован."==e.data.message?(t.err=!1,t.$router.push("/carrier/user/company")):(null!=e.data.errors.phone&&(t.$refs.login_phone_error.innerHTML=e.data.errors.phone),null!=e.data.errors.error&&(t.$refs.login_phone_error.innerHTML=e.data.errors.error),null!=e.data.errors.password&&(t.$refs.login_password_error.innerHTML=e.data.errors.password))}))}else this.phoneNumber.length<16&&(this.$refs.login_phone_error.innerHTML="Номер слишком короткий"),this.passWord.length<8&&(this.$refs.login_password_error.innerHTML="Пароль не менее 8 символов"),this.err=!0}}},m=(s(43),s(6)),_=Object(m.a)(f,v,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("div",{staticClass:"login_title"},[this._v("Вход")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login_recovery",attrs:{name:"recovery"}},[e("a",{staticClass:"no-decorate"},[e("span",{staticClass:"border_bottom_dashed spacing-1"},[this._v("ЗАБЫЛИ ПАРОЛЬ?")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("div",{staticClass:"login-line-separator"}),this._v(" "),e("div",{staticClass:"login_register"},[e("p",{staticClass:"no-decorate"},[e("span",{staticClass:"border_bottom_dashed spacing-1 uppercase"},[this._v("Еще не зарегистированы?")])])])])}],!1,null,null,null);_.options.__file="src/components/formLogin.vue";var h=_.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"company"},[t._m(0),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"company-content"},[t._m(1),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"portlet"},[t._m(2),t._v(" "),s("div",{staticClass:"content-body"},[s("div",{staticClass:"form-body"},[t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("div",{staticClass:"form-group field-companyprofile-bik"},[s("label",{staticClass:"control-label",attrs:{for:"companyprofile-bik"}},[t._v("БИК")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.codeBIK,expression:"codeBIK"},{name:"mask",rawName:"v-mask",value:"#########",expression:"'#########'"}],staticClass:"form-control suggestions-input",staticStyle:{"box-sizing":"border-box"},attrs:{type:"text",id:"companyprofile-bik",name:"CompanyProfile[bik]",value:"",maxlength:"9","data-type":"bik",autocomplete:"off",placeholder:"БИК"},domProps:{value:t.codeBIK},on:{click:function(e){t.statusBankCh=!0},input:function(e){e.target.composing||(t.codeBIK=e.target.value)}}}),t._v(" "),s("div",{staticClass:"company-suggestions-container"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.statusBankCh,expression:"statusBankCh"}],staticClass:"company-suggestions",on:{mouseleave:function(e){t.statusBankCh=!1}}},t._l(t.banksChooses.slice(0,5),(function(e,a){return s("div",{key:"bankName-"+a,staticClass:"company-suggestions-item",on:{click:function(s){return t.bankChoose(e)}}},[s("span",{staticClass:"suggestions-value"},[t._v(t._s(e.value))]),t._v(" "),s("div",{staticClass:"company-suggestions-text"},[s("span",{staticClass:"company-suggestions-text company-suggestions-text_inline"},[t._v(t._s(e.data.bic))]),t._v("\n                      "+t._s(e.data.address.value)+"\n                    ")])])})),0)]),t._v(" "),s("p",{staticClass:"company-help-block company-help-block-error"})]),t._v(" "),s("div",{staticClass:"form-group field-companyprofile-bank_title"},[s("label",{staticClass:"control-label",attrs:{for:"companyprofile-bank_title"}},[t._v("Наименование Банка")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.bankName,expression:"bankName"}],staticClass:"form-control",attrs:{type:"text",id:"companyprofile-bank_title",name:"CompanyProfile[bank_title]",value:"",readonly:"",maxlength:"255","data-type":"bank_title",autocomplete:"off",placeholder:"Наименование Банка"},domProps:{value:t.bankName},on:{input:function(e){e.target.composing||(t.bankName=e.target.value)}}}),t._v(" "),s("p",{staticClass:"company-help-block company-help-block-error"})]),t._v(" "),s("div",{staticClass:"form-group field-companyprofile-corr_schet"},[s("label",{staticClass:"control-label",attrs:{for:"companyprofile-corr_schet"}},[t._v("Корреспондентский счет")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.korCount,expression:"korCount"}],staticClass:"form-control",attrs:{type:"text",id:"companyprofile-corr_schet",name:"CompanyProfile[corr_schet]",value:"",readonly:"",maxlength:"20","data-type":"corr_schet",autocomplete:"off",placeholder:"Корреспондентский счет"},domProps:{value:t.korCount},on:{input:function(e){e.target.composing||(t.korCount=e.target.value)}}}),t._v(" "),s("p",{staticClass:"company-help-block company-help-block-error"})]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("div",{staticClass:"clearfix"})]),t._v(" "),s("button",{staticClass:"btn btn-brand btn-save",attrs:{type:"submit"}},[t._v("Сохранить")])])])])])])};b._withStripped=!0;var C={directives:{mask:d.mask},name:"formLogin",data:function(){return{codeBIK:"",codeChoose:"",bankName:"",korCount:"",statusBankCh:!1,banksChooses:[]}},methods:{bankChoose:function(t){this.codeBIK=t.data.bic,this.korCount=t.data.correspondent_account,this.bankName=t.value,this.statusBankCh=!1}},watch:{codeBIK:function(t){var e=this,s=t,a={method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Token 5d7f541af5b3cc8e369890f92a07574ecc68861a"},body:JSON.stringify({query:s})};fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/bank",a).then((function(t){return t.text()})).then((function(t){return e.banksChooses=JSON.parse(t).suggestions})).catch()}},mounted:function(){}},y=(s(45),Object(m.a)(C,b,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"company-bar"},[e("ul",{staticClass:"company-breadcrumb"},[e("li",[this._v("Профиль")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"company-nav-container"},[e("ul",{staticClass:"company-nav company-nav-pills"},[e("li",{staticClass:"active"},[e("a",{attrs:{href:"#"}},[this._v("Компания")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[this._v("Информация о пользователе")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[this._v("Сменить пароль")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-title"},[e("div",{staticClass:"content-text content-title-yellow"},[e("span",{staticClass:"content-text-subject bold uppercase"},[this._v("Компания")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group field-profile-inn",attrs:{id:"company-info-block"}},[e("span",[this._v("ИНН / КПП")]),this._v(" : 5027234975 / 502701001\n              "),e("br"),this._v(" "),e("span",[this._v("Организация")]),this._v(' : ООО "РД ТРАНСПОРТ"\n            ')])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group field-companyprofile-count_cars required"},[e("label",{staticClass:"control-label",attrs:{for:"companyprofile-count_cars"}},[this._v("Общее количество машин в собственности")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"companyprofile-count_cars",name:"CompanyProfile[count_cars]",value:"3",autocomplete:"off",placeholder:"Общее количество машин в собственности","aria-required":"true"}}),this._v(" "),e("p",{staticClass:"company-help-block company-help-block-error"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group field-companyprofile-post_address required"},[e("label",{staticClass:"control-label",attrs:{for:"companyprofile-post_address"}},[this._v("\n                Почтовый адрес\n                "),e("span",{staticClass:"popovers label-popovers",attrs:{title:"Пожалуйста, заполните почтовый адрес, и документы по перевозкам будут доставлены максимально быстро."}},[this._v("?")])]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"companyprofile-post_address",name:"CompanyProfile[post_address]",value:"Ленина д.3",autocomplete:"off",placeholder:"Почтовый адрес","aria-required":"true"}}),this._v(" "),e("p",{staticClass:"company-help-block company-help-block-error"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group field-companyprofile-site"},[e("label",{staticClass:"control-label",attrs:{for:"companyprofile-site"}},[this._v("Сайт компании")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"companyprofile-site",name:"CompanyProfile[site]",maxlength:"255",autocomplete:"off",placeholder:"Сайт компании"}}),this._v(" "),e("p",{staticClass:"company-help-block company-help-block-error"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group field-companyprofile-schet"},[e("label",{staticClass:"control-label",attrs:{for:"companyprofile-schet"}},[this._v("Номер банковского счета")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"companyprofile-schet",name:"CompanyProfile[schet]",value:"",maxlength:"20","data-type":"schet",autocomplete:"off",placeholder:"Номер банковского счета"}}),this._v(" "),e("p",{staticClass:"company-help-block company-help-block-error"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"company-form-download-container"},[s("div",{staticClass:"company-form-download"},[s("input",{attrs:{"data-moderate":"",type:"hidden",name:"files_[]",value:"15942445225f063daa8ab084.78439610.jpg"}}),t._v(" "),s("div",{staticClass:"form-group field-companyprofile-scan_edo"},[s("label",{staticClass:"control-label",attrs:{for:"companyprofile-scan_edo"}},[t._v("Соглашение об электронном взаимодействии")]),t._v(" "),s("input",{attrs:{type:"hidden",name:"CompanyProfile[scan_edo][]",value:""}}),t._v(" "),s("div",{staticClass:"file-input"},[s("div",{staticClass:"file-preview"},[s("div",{staticClass:"file-preview-thumbnails"},[s("div",{staticClass:"file-preview-frame krajee-default file-preview-initial file-sortable kv-preview-thumb",attrs:{id:"preview-1594724646325_60-init_0"}},[s("div",{staticClass:"file-preview-content"},[t._v("Scan Edo #1")]),t._v(" "),s("div",{staticClass:"file-preview-footer pull-right"},[s("button",{staticClass:"save-file btn btn-xs btn-default",attrs:{type:"button"}},[s("i",{staticClass:"glyphicon glyphicon-save text-success"})]),t._v(" "),s("a",{staticClass:"kv-file-download btn btn-xs btn-default"},[s("i",{staticClass:"glyphicon glyphicon-search text-success"})]),t._v(" "),s("button",{staticClass:"kv-file-remove btn btn-sm btn-kv btn-default btn-outline-secondary",attrs:{type:"button",title:"Remove file"}},[s("i",{staticClass:"glyphicon glyphicon-trash"})])])])]),t._v(" "),s("div",{staticClass:"clearfix"}),t._v(" "),s("div",{staticClass:"file-preview-status text-center text-success"}),t._v(" "),s("div",{staticClass:"kv-fileinput-error file-error-message",staticStyle:{display:"none"}})]),t._v(" "),s("div",{staticClass:"kv-upload-progress company-hidden"}),t._v(" "),s("div",{staticClass:"clearfix"}),t._v(" "),s("button",{staticClass:"btn btn-default btn-secondary company-hidden fileinput-cancel fileinput-cancel-button",attrs:{type:"button",title:"Abort ongoing upload"}},[s("i",{staticClass:"glyphicon glyphicon-ban-circle"}),t._v(" "),s("span",{staticClass:"hidden-xs"},[t._v("Cancel")])]),t._v(" "),s("a",{staticClass:"btn btn-default btn-secondary fileinput-upload company-upload-button",attrs:{title:"Загрузить и сохранить"}},[s("i",{staticClass:"glyphicon glyphicon-upload"}),t._v(" "),s("span",{staticClass:"hidden-xs"},[t._v("Загрузить и сохранить")])]),t._v(" "),s("div",{staticClass:"btn btn-brand btn-file"},[s("i",{staticClass:"glyphicon glyphicon-folder-open"}),t._v(" \n                      "),s("input",{staticClass:"input_field_file_on_event",attrs:{type:"file",id:"companyprofile-scan_edo",name:"CompanyProfile[scan_edo][]",multiple:""}})])]),t._v(" "),s("p",{staticClass:"company-help-block company-help-block-error"})])]),t._v(" "),s("div",{staticClass:"content-help-symbol"},[s("span",{staticClass:"popovers label-popovers",attrs:{title:"Распечатайте указанный документ из приветственного письма или профиля, подпишите у уполномоченного лица вашей компании (лица, имеющего права действовать без доверенности от имени компании, либо лица, наделенного полномочиями по взаимодействию с GroozGo). Прикрепите документ в профиль или отправьте в ответе на приветственное письмо, направленное после регистрации. После этого ваша компания сможет совершать юридически значимые действия на сервисе GroozGo – заключать договоры, размещать и/или принимать к исполнению заказы на перевозку"}},[t._v("?")])]),t._v(" "),s("div",{staticClass:"company-form-download"},[s("div",{staticClass:"form-group"},[s("a",{staticClass:"btn btn-brand-outline"},[t._v("Скачать шаблон")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[this._v("\n                Получен оригинал соглашения об электронном взаимодействии \n                "),e("span",{staticClass:"popovers label-popovers",attrs:{title:"Если оригинал не получен - значение “Нет”"}},[this._v("?")])]),this._v(" "),e("div",{staticClass:"col-md-12"},[e("p",{staticClass:"form-control-static"},[this._v("Нет")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[this._v("\n                Срок действия соглашения об электронном взаимодействии \n                "),e("span",{staticClass:"popovers label-popovers",attrs:{title:"Срок устанавливается при проверке скан-копии или оригинала Соглашения об электронном взаимодействии. До получения оригинала срок – 30 дней с даты проверки скан-копии"}},[this._v("?")])]),this._v(" "),e("div",{staticClass:"col-md-12"},[e("p",{staticClass:"form-control-static"},[this._v("Нет")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[this._v("\n                Статус подписания документов ЭДО \n                "),e("span",{staticClass:"popovers label-popovers",attrs:{title:"Если вы отказались от подписания договоров и соглашений и/или не предоставили соглашение об электронном взаимодействии - значение “Не подписаны”"}},[this._v("?")])]),this._v(" "),e("div",{staticClass:"col-md-12"},[e("p",{staticClass:"form-control-static"},[this._v("Не подписаны")])])])}],!1,null,"fd01895c",null));y.options.__file="src/components/userCompany.vue";var g=y.exports;window.Vue=s(8),Vue.use(i.a),Vue.use(u.a,c.a);var k=[{path:"/",component:h},{path:"/carrier/user/company",component:g}],x=new i.a({routes:k});new Vue({el:"#app",router:x,store:r})}});