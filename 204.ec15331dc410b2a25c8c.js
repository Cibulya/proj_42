"use strict";(self.webpackChunkproj_42=self.webpackChunkproj_42||[]).push([[204],{478:(t,e,n)=>{n.d(e,{b:()=>a});var o,r="https://guiseppe-production.up.railway.app/api/";!function(t){t.COFFEE="coffee/",t.REGISTER="register/",t.USER="user/",t.LOGIN="login/",t.LOGOUT="logout/",t.SET_PICTURE="setpicture/",t.RESTORE="restore/"}(o||(o={}));var a={getUser:function(){return fetch("".concat(r).concat(o.USER),{method:"GET",credentials:"include",mode:"cors",headers:{}}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))},createUser:function(t){return fetch("".concat(r).concat(o.REGISTER),{method:"POST",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))},loginUser:function(t){return fetch("".concat(r).concat(o.LOGIN),{method:"POST",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))},logoutUser:function(){return fetch("".concat(r).concat(o.LOGOUT),{method:"POST",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))},updateAvatar:function(t){return fetch("".concat(r).concat(o.SET_PICTURE),{method:"PUT",credentials:"same-origin",mode:"cors",headers:{},body:t}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))},restoreUser:function(t){return fetch("".concat(r).concat(o.RESTORE),{method:"POST",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))}}},4655:(t,e,n)=>{n.d(e,{Z:()=>a});var o=n(5893),r=function(){return r=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},r.apply(this,arguments)};const a=function(t){return(0,o.jsx)("span",r({className:"error-text"},{children:t.text}))}},3305:(t,e,n)=>{n.d(e,{Z:()=>p});var o=n(5893),r=n(7294),a=n(2327),i=n(4655),c=function(){return c=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},c.apply(this,arguments)},s=RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i),u=RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/);const l=function(t){var e=(0,a.$)().t;return(0,o.jsxs)("div",c({className:"secretWord"===t.type?"username":t.type},{children:[(0,o.jsx)("label",c({className:"label",htmlFor:t.type},{children:e("".concat(t.type))})),(0,o.jsx)("input",{className:"input",type:"password"===t.type?"password":"text",name:t.type,value:t.initialState[t.type],onChange:function(e){var n;e.preventDefault();var o=e.target,r=o.name,a=o.value;switch(r){case"username":t.initialState.errors.username=a.length<5?"Username must be 5 characters long!":"";break;case"email":t.initialState.errors.email=s.test(a)?"":"Email is not valid!";break;case"password":t.initialState.errors.password=u.test(a)?"":"Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";break;case"secretWord":t.initialState.errors.secretWord=a.length<5?"Secret word must be 5 characters long!":""}var i=c(c({},t.initialState),((n={})[r]=a,n));t.checkInputChange(i)}}),t.initialState.errors["".concat(t.type)].length>0&&(0,o.jsx)(i.Z,{text:t.initialState.errors[t.type]})]}))};var d=n(478),m=function(){return m=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},m.apply(this,arguments)};const p=function(t){var e=(0,a.$)().t,n=(0,r.useState)({username:"",email:"",password:"",secretWord:"",errors:{username:"",email:"",password:"",secretWord:""}}),c=n[0],s=n[1],u=(0,r.useState)(""),p=u[0],b=u[1],h=(0,r.useRef)(),g=function(t){s(m({},t)),b("")};return(0,o.jsxs)("form",m({ref:h,className:"form",onSubmit:function(e){e.preventDefault();var n=!0;if(Object.values(c.errors).forEach((function(t){return t.length>0&&(n=!1)})),n){switch(t.typeForm){case"sign-up":d.b.createUser({name:c.username,email:c.email,password:c.password,secretWord:c.secretWord}).then((function(t){t&&"User created"===t.message&&d.b.loginUser({email:c.email,password:c.password}).then((function(t){t.hasOwnProperty("error")?b(t.error||"Try again"):h.current.parentElement.style.display="none"}))}));break;case"login":d.b.loginUser({email:c.email,password:c.password}).then((function(t){t.hasOwnProperty("error")?b(t.error||"Try again"):h.current.parentElement.style.display="none"}));break;case"restore":d.b.restoreUser({email:c.email,password:c.password,secretWord:c.secretWord}).then((function(t){500!==t.statusCode?d.b.loginUser({email:c.email,password:c.password}).then((function(t){t.hasOwnProperty("error")?b(t.error||"Try again"):h.current.parentElement.style.display="none"})):b(t.message||"Try again")}))}s({username:"",email:"",password:"",secretWord:"",errors:{username:"",email:"",password:"",secretWord:""}})}},noValidate:!0},{children:[p.length>0&&(0,o.jsx)(i.Z,{text:p}),"login"===t.typeForm&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l,{type:"email",checkInputChange:g,initialState:c}),(0,o.jsx)(l,{type:"password",checkInputChange:g,initialState:c})]}),"sign-up"===t.typeForm&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l,{type:"username",checkInputChange:g,initialState:c}),(0,o.jsx)(l,{type:"email",checkInputChange:g,initialState:c}),(0,o.jsx)(l,{type:"password",checkInputChange:g,initialState:c}),(0,o.jsx)(l,{type:"secretWord",checkInputChange:g,initialState:c})]}),"restore"===t.typeForm&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l,{type:"email",checkInputChange:g,initialState:c}),(0,o.jsx)(l,{type:"secretWord",checkInputChange:g,initialState:c}),(0,o.jsx)(l,{type:"password",checkInputChange:g,initialState:c})]}),(0,o.jsx)("div",m({className:"submit"},{children:(0,o.jsx)("button",m({className:"learning__btn"},{children:"sign-up"===t.typeForm?e("register"):"restore"===t.typeForm?e("restore"):e("login")}))}))]}))}},4030:(t,e,n)=>{n.r(e),n.d(e,{default:()=>C});var o=n(5893),r=n(7294),a=n(4160),i=n(2327),c=[{modalCenter:{text:"modalCenter-text-1",picture:"",buttonOne:"modalCenter-buttonOne-1",buttonTwo:""},modalLeft:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightTop:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"modalLeft-text-2",picture:"",buttonOne:"",buttonTwo:""},modalRightTop:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"modalLeft-text-3",picture:"",buttonOne:"modalLeft-buttonOne-3",buttonTwo:""},modalRightTop:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"modalLeft-text-4",picture:"modalLeft-picture-4",buttonOne:"OK",buttonTwo:""},modalRightTop:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"modalLeft-text-5",picture:"",buttonOne:"modalLeft-buttonOne-5",buttonTwo:""},modalRightTop:{text:"modalRightTop-text-5",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"modalRightBottom-text-5",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"modalLeft-text-6",picture:"",buttonOne:"OK",buttonTwo:""},modalRightTop:{text:"CONTROLLER",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"MODEL",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"modalLeft-text-7",picture:"",buttonOne:"",buttonTwo:""},modalRightTop:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightTop:{text:"modalRightTop-text-8",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightTop:{text:"modalRightTop-text-9",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightTop:{text:"modalRightTop-text-10",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightTop:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"modalRightBottom-text-11",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightTop:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"modalRightBottom-text-12",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"modalLeft-text-13",picture:"",buttonOne:"Repeat",buttonTwo:"Quiz"},modalRightTop:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"modalLeft-text-answer",picture:"",buttonOne:"Next",buttonTwo:""},modalRightTop:{text:"CONTROLLER",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"MODEL",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"modalLeft-text-answer",picture:"",buttonOne:"Next",buttonTwo:""},modalRightTop:{text:"CONTROLLER",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"MODEL",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"modalLeft-text-answer",picture:"",buttonOne:"Next",buttonTwo:""},modalRightTop:{text:"CONTROLLER",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"MODEL",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"modalLeft-text-answer",picture:"",buttonOne:"Next",buttonTwo:""},modalRightTop:{text:"CONTROLLER",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"MODEL",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"modalLeft-text-answer",picture:"",buttonOne:"Next",buttonTwo:""},modalRightTop:{text:"CONTROLLER",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"MODEL",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"modalCenter-text-19",picture:"",buttonOne:"modalCenter-buttonOne-19",buttonTwo:""},modalLeft:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightTop:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}}],s=n(8551),u=n(9067),l=function(){return l=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},l.apply(this,arguments)};const d=function(t){var e=(0,i.$)().t,n=function(e){e===c.length?(t.callback(e-1),window.open("https://www.youtube.com/watch?v=OBGxt8zhbRk")):t.callback(e)};return(0,o.jsxs)("div",l({className:(0,a.A)("card",{},["".concat(t.className)])},{children:[""!==t.state.text?(0,o.jsx)("p",{children:e("".concat(t.state.text))}):(0,o.jsx)(o.Fragment,{}),""!==t.state.picture?(0,o.jsx)("img",{src:t.state.picture,width:"280px",height:"200px",alt:"MVC model"}):(0,o.jsx)(o.Fragment,{}),""!==t.state.buttonOne?(0,o.jsx)("button",l({className:"learning__btn",onClick:function(o){"Repeat"!==e("".concat(t.state.buttonOne))?n(t.progress+1):("true"===document.querySelector(".onBtn").getAttribute("aria-pressed")&&(0,s.U)(),(0,u.Q)(),n(0))}},{children:e("".concat(t.state.buttonOne))})):(0,o.jsx)(o.Fragment,{}),""!==t.state.buttonTwo?(0,o.jsx)("button",l({className:"learning__btn",onClick:function(e){n(t.progress+1)}},{children:e("".concat(t.state.buttonTwo))})):(0,o.jsx)(o.Fragment,{})]}))};var m=n(5297),p=n(1508),b=n(9041),h=n(3305),g=(n(503),function(){return g=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},g.apply(this,arguments)});const x=function(t){var e=t.weather;return(0,o.jsxs)("div",g({className:"weather-wrapper"},{children:[(0,o.jsx)("div",g({className:"weather-main"},{children:(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:null===e?"":e.city_name}),(0,o.jsx)("p",{children:null===e?"":e.weather.description})]})})),(0,o.jsx)("div",g({className:"weather-info"},{children:(0,o.jsxs)("div",g({className:"temperature"},{children:[(0,o.jsx)("img",{width:"60px",alt:"weather-icon",src:null===e?"":"https://raw.githubusercontent.com/MarinaKovel/coffeemachinedata/main/weather/".concat(e.weather.icon,".png")}),(0,o.jsxs)("h2",{children:[null===e?"":e.temp,"°C"]})]}))}))]}))},f=function(){var t=(0,i.$)().i18n,e=(0,r.useState)(null),n=e[0],a=e[1];return(0,r.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var n=e.coords,o=n.latitude,r=n.longitude;fetch("".concat("https://api.weatherbit.io/v2.0/","current?key=").concat("b5577dac54634a88a36e9bc8abe697fb","&lang=").concat(t.language,"&lat=").concat(o,"&lon=").concat(r,"&units=M")).then((function(t){return t.json()})).then((function(t){a(t.data[0])})).catch((function(t){return console.error(t)}))}))}),[t.language]),(0,o.jsx)(x,{weather:n})};var w=n(1766),O=n(3382),T=n(5725),y=n(975),j=function(){return j=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},j.apply(this,arguments)},v=null;const L=function(){var t=r.useState(!1),e=t[0],n=t[1],a=r.useState(30),i=a[0],c=a[1],s=function(t,e){c(e);var n=+(e/100).toFixed(1);v&&v.volume(n)};return(0,o.jsx)("div",j({className:"music__container"},{children:(0,o.jsxs)(T.ZP,j({container:!0,spacing:2,alignItems:"center"},{children:[(0,o.jsx)(T.ZP,j({item:!0},{children:(0,o.jsx)(O.Z,j({value:"check",selected:e,onChange:function(){null!=v?(v.stop(),v.unload(),v=null,s(event,30)):(v=new w.Howl({src:["https://stream.nightride.fm/nightride.mp3"],html5:!0,volume:.5})).play(),n(!e)},className:"radio"},{children:" Music ON/OFF"}))})),(0,o.jsx)(T.ZP,{item:!0,className:"volume__icon"}),(0,o.jsx)(T.ZP,j({item:!0,xs:!0},{children:(0,o.jsx)(y.ZP,{value:"number"==typeof i?i:0,onChange:s,"aria-labelledby":"input-slider",color:"secondary"})}))]}))}))};var _=function(){return _=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},_.apply(this,arguments)},R=0;const C=function(){(0,i.$)().t;var t=(0,r.useState)(0),e=t[0],n=t[1],s=c[e],u=Object.entries(s),l=document.querySelector(".machine"),g=document.querySelector(".message"),x=document.getElementsByClassName("card"),w=document.querySelector(".learning__btn"),O=document.querySelector(".auth"),T=document.querySelector(".auth-icon"),y=document.querySelector(".control__middle"),j=document.querySelector(".control__screen"),v=[["right__machine","wrong__modal","wrong__modal"],["wrong__machine","right__modal","wrong__modal"],["wrong__machine","wrong__modal","right__modal"]];switch(e){case 1:document.querySelector(".submit").addEventListener("click",(function(){n(e+1),O.style.display="none"}));break;case 4:l.classList.add("blink__machine"),w.addEventListener("click",(function(){l.classList.remove("blink__machine")}));break;case 5:l.classList.add("blink__machine"),setTimeout((function(){l&&l.classList.remove("blink__machine"),x[1]&&x[1].classList.add("blink__modal")}),3e3),setTimeout((function(){x[1]&&x[1].classList.remove("blink__modal"),x[2]&&x[2].classList.add("blink__modal")}),6e3),setTimeout((function(){x[2]&&x[2].classList.remove("blink__modal")}),9e3);break;case 6:T&&(T.style.display="none"),j.style.display="none",setTimeout((function(){y.classList.remove("hidden")}),0),y.addEventListener("click",(function(){n(e+1),g.innerHTML=""}));break;case 7:case 8:case 9:case 10:setTimeout((function(){n(e+1),g.innerHTML=""}),3e3);break;case 11:setTimeout((function(){n(e+1)}),7e3),R=0;break;case 13:case 16:C(0);break;case 14:C(2);break;case 15:case 17:C(1);break;case 18:setTimeout((function(){var t=document.querySelector(".modalCenter");t&&(t.innerHTML+="QUIZ RESULT: You got ".concat(R,"/5 points!"))}),0),document.querySelector(".bonus").style.display="flex"}function C(t){document.addEventListener("keydown",(function(o){S(),"KeyV"==o.code&&l.classList.add(v[t][0]),"KeyC"==o.code&&x[1].classList.add(v[t][1]),"KeyM"==o.code&&x[2].classList.add(v[t][2]),setTimeout((function(){S(),n(e+1)}),1500)}),{once:!0}),setTimeout((function(){g.innerHTML="VIEW"}),0)}function S(){l&&x[1]&&x[2]&&(l.getAttribute("class").includes("right__machine")||x[1].getAttribute("class").includes("right__modal")||x[2].getAttribute("class").includes("right__modal"))&&R++,l.classList.remove("right__machine"),l.classList.remove("wrong__machine"),x[1].classList.remove("right__modal"),x[1].classList.remove("wrong__modal"),x[2].classList.remove("right__modal"),x[2].classList.remove("wrong__modal")}return(0,o.jsxs)("div",_({className:(0,a.A)("learning-mode")},{children:[(0,o.jsx)(p.Z,_({className:(0,a.A)("progress"),sx:{width:"80%"}},{children:(0,o.jsx)(b.Z,{color:"secondary",variant:"buffer",value:e/18*100,valueBuffer:100})})),c.length>e?u.map((function(t){if(""!==t[1].text)return console.log(e),(0,o.jsx)(d,{className:(0,a.A)("".concat(t[0]),{},["".concat(""!==t[1].picture?"withImg":"")]),callback:n,progress:e,state:t[1]},"".concat(t[0],"-index"))})):(0,o.jsx)(o.Fragment,{}),(0,o.jsx)("div",_({className:"learning__machine"},{children:(0,o.jsx)(m.Z,{})})),(0,o.jsx)(h.Z,{className:"card auth",typeForm:"sign-up"}),(0,o.jsxs)("div",_({className:"bonus"},{children:[(0,o.jsx)(f,{}),(0,o.jsx)(L,{})]}))]}))}},503:(t,e,n)=>{var o=n(4783)(t.id,{locals:!1});t.hot.dispose(o),t.hot.accept(void 0,o)}}]);