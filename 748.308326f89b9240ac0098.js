"use strict";(self.webpackChunkproj_42=self.webpackChunkproj_42||[]).push([[748],{478:(t,e,o)=>{o.d(e,{b:()=>a});var n,r="https://guiseppe-production.up.railway.app/api/";!function(t){t.COFFEE="coffee/",t.REGISTER="register/",t.USER="user/",t.LOGIN="login/",t.LOGOUT="logout/",t.SET_PICTURE="setpicture/"}(n||(n={}));var a={getUser:function(){return fetch("".concat(r).concat(n.USER),{method:"GET",credentials:"include",mode:"cors",headers:{}}).then((function(t){return t.json()}))},createUser:function(t){return fetch("".concat(r).concat(n.REGISTER),{method:"POST",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()}))},loginUser:function(t){return fetch("".concat(r).concat(n.LOGIN),{method:"POST",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()}))},logoutUser:function(){return fetch("".concat(r).concat(n.LOGOUT),{method:"POST",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}))},updateAvatar:function(t){return fetch("".concat(r).concat(n.SET_PICTURE),{method:"PUT",credentials:"same-origin",mode:"cors",headers:{},body:t}).then((function(t){return t.json()}))}}},91:(t,e,o)=>{o.d(e,{Z:()=>b});var n=o(5893),r=o(7294),a=o(2327),i=function(){return i=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},i.apply(this,arguments)};const s=function(t){return(0,n.jsx)("span",i({className:"error-text"},{children:t.text}))};var c=function(){return c=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},c.apply(this,arguments)},u=RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i),l=RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/);const d=function(t){var e=(0,a.$)().t;return(0,n.jsxs)("div",c({className:t.type},{children:[(0,n.jsx)("label",c({className:"label",htmlFor:t.type},{children:e("".concat(t.type))})),(0,n.jsx)("input",{className:"input",type:"password"===t.type?"password":"text",name:t.type,onChange:function(e){var o;e.preventDefault();var n=e.target,r=n.name,a=n.value;switch(r){case"username":t.initialState.errors.username=a.length<5?"Username must be 5 characters long!":"";break;case"email":t.initialState.errors.email=u.test(a)?"":"Email is not valid!";break;case"password":t.initialState.errors.password=l.test(a)?"":"Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";break;case"secretWord":t.initialState.errors.secretWord=a.length<5?"Secret word must be 5 characters long!":""}var i=c(c({},t.initialState),((o={})[r]=a,o));t.checkInputChange(i)}}),t.initialState.errors["".concat(t.type)].length>0&&(0,n.jsx)(s,{text:t.initialState.errors[t.type]})]}))};var m=o(478),p=function(){return p=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},p.apply(this,arguments)};const b=function(t){var e=(0,a.$)().t,o=(0,r.useState)({username:"",email:"",password:"",secretWord:"",errors:{username:"",email:"",password:"",secretWord:""}}),i=o[0],s=o[1],c=function(t){s(p({},t))};return(0,n.jsxs)("form",p({className:"form",onSubmit:function(e){e.preventDefault();var o=!0;if(Object.values(i.errors).forEach((function(t){return t.length>0&&(o=!1)})),o){switch(t.typeForm){case"sign-up":m.b.createUser({name:i.username,email:i.email,password:i.password,secretWord:i.secretWord}).then((function(t){return console.log(t)}));break;case"sign-in":m.b.loginUser({email:i.email,password:i.password}).then((function(t){return console.log(t)}))}s({username:"",email:"",password:"",secretWord:"",errors:{username:"",email:"",password:"",secretWord:""}})}},noValidate:!0},{children:["sign-in"===t.typeForm&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{type:"email",checkInputChange:c,initialState:i}),(0,n.jsx)(d,{type:"password",checkInputChange:c,initialState:i})]}),"sign-up"===t.typeForm&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{type:"username",checkInputChange:c,initialState:i}),(0,n.jsx)(d,{type:"email",checkInputChange:c,initialState:i}),(0,n.jsx)(d,{type:"password",checkInputChange:c,initialState:i}),(0,n.jsx)(d,{type:"secretWord",checkInputChange:c,initialState:i})]}),"restore"===t.typeForm&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{type:"email",checkInputChange:c,initialState:i}),(0,n.jsx)(d,{type:"secretWord",checkInputChange:c,initialState:i})]}),"change-password"===t.typeForm&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{type:"password",checkInputChange:c,initialState:i}),(0,n.jsx)(d,{type:"secretWord",checkInputChange:c,initialState:i})]}),(0,n.jsx)("div",p({className:"submit"},{children:(0,n.jsx)("button",p({className:"learning__btn"},{children:"sign-up"===t.typeForm?e("register"):"restore"===t.typeForm?e("restore"):"change-password"===t.typeForm?e("save"):e("sign-in")}))}))]}))}},6411:(t,e,o)=>{o.d(e,{Z:()=>f});var n=o(5893),r=o(7294),a=o(4160),i=o(2327),s=o(8435),c=o(2640),u=o(1508),l=o(7109),d=o(478),m=function(){return m=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},m.apply(this,arguments)};const p=function(t){var e=(0,i.$)().t,o=(0,r.useRef)(null),a=(0,r.useState)(null),s=a[0],c=a[1],u=(0,r.useState)({userName:"",email:"",secretWord:"",userImage:""}),p=u[0],b=u[1];return(0,r.useEffect)((function(){d.b.getUser().then((function(t){console.log(t),b(m(m({},p),{email:t.email,userName:t.name,userImage:t.userImage}))}))}),[]),(0,n.jsxs)("form",m({className:"form",onSubmit:function(t){t.preventDefault();var e=new FormData;e.append("userImage",s),e.append("email",p.email),d.b.updateAvatar(e).then((function(t){b(m(m({},p),{userImage:t}))})),o.current.value="",c(null)},noValidate:!0},{children:[(0,n.jsx)(l.Z,{alt:e("userPhoto"),src:p.userImage,sx:{width:72,height:72}}),(0,n.jsx)("label",m({className:"label label-file",htmlFor:"file"},{children:e("add-file")})),(0,n.jsx)("input",{ref:o,id:"file",className:"input input-file",type:"file",name:"file",onChange:function(t){var e=t.target.files;e&&(c(e[0]),b(m(m({},p),{userImage:URL.createObjectURL(e[0])})))}}),(0,n.jsx)("div",m({className:"submit"},{children:(0,n.jsx)("button",m({className:"learning__btn"},{children:e("save")}))}))]}))};var b=o(91),h=function(){return h=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},h.apply(this,arguments)};const f=function(t){var e=(0,i.$)().t,o=r.useState("one"),l=o[0],d=o[1];return(0,n.jsxs)("div",h({className:(0,a.A)("sign-wrapper",{},[t.className])},{children:[(0,n.jsx)("h2",{children:e("userSettings")}),(0,n.jsx)(u.Z,h({sx:{width:"100%"}},{children:(0,n.jsxs)(s.Z,h({value:l,onChange:function(t,e){d(e)},textColor:"secondary",indicatorColor:"secondary","aria-label":"secondary tabs example"},{children:[(0,n.jsx)(c.Z,{value:"one",label:e("changePhoto")}),(0,n.jsx)(c.Z,{value:"two",label:"changePassword"})]}))})),"one"===l?(0,n.jsx)(p,{}):(0,n.jsx)(b.Z,{typeForm:"change-password"})]}))}},9292:(t,e,o)=>{o.r(e),o.d(e,{default:()=>A});var n=o(5893),r=o(7294),a=o(4160),i=o(2327),s=[{modalCenter:{text:"Welcome! \n Here we mix Real Life and Digital! We would like to introduce you the MVC architecture pattern on the Real Life Example – Coffee Machine. Or you can relax and drink a digital Coffee :)",picture:"",buttonOne:"Let’s start!",buttonTwo:""},modalLeft:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightTop:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"So, you have an exclusive coffee machine like Elon Musk, do you? Turn it on.",picture:"",buttonOne:"",buttonTwo:""},modalRightTop:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"Personal account in Coffee Machine? No way! Do you know that Coffee Machine is conceivable as an application divided on 3 parts, like MVC pattern?",picture:"",buttonOne:"Let’s see",buttonTwo:""},modalRightTop:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"MVC is an architecture pattern which separates logic, UI & database connection of our application. It’s divided into 3 sections: MODEL, VIEW and CONTROLLER.",picture:"https://raw.githubusercontent.com/MarinaKovel/coffeemachinedata/main/mvc.png",buttonOne:"OK",buttonTwo:""},modalRightTop:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"Now you (User) interact with VIEW. VIEW is responsible for look and feel of our application (UI components, forms, buttons..).",picture:"",buttonOne:"Whaaat?",buttonTwo:""},modalRightTop:{text:"CONTROLLER \nreceives input from VIEW, uses logic to translate the input to a request for the MODEL",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"MODEL \nstores & manages data and provides data to the VIEW",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"But what’s happened during Logging in? \n1. You filled in the Login form in the VIEW.\n2. CONTROLLER verified and sent your data to MODEL. \n3. MODEL updated VIEW and you see your name and picture",picture:"",buttonOne:"OK",buttonTwo:""},modalRightTop:{text:"CONTROLLER",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"MODEL",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"And now let’s make an MVC coffee! Choose a coffee on the screen.",picture:"",buttonOne:"",buttonTwo:""},modalRightTop:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightTop:{text:"CONTROLLER:\nChecking validation of the User…",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightTop:{text:"CONTROLLER:\nChecking water, coffee beans and free space in the waste container…",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightTop:{text:"CONTROLLER:\nMODEL, you should make ",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightTop:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"MODEL: \nPreparing ",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightTop:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"MODEL: \nGrinding coffee beans. Water enters the boiler and heats up.",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:"Coffee is ready. You can take it (click on the cup) in the VIEW. Check if you understood the MVC with a Quiz. Good luck!",picture:"",buttonOne:"Repeat",buttonTwo:"Quiz"},modalRightTop:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:'Choose the correct element for this step (press "M" for MODEL, "V" for VIEW or "C" for CONTROLLER): You filled in the Login form',picture:"",buttonOne:"Next",buttonTwo:""},modalRightTop:{text:"CONTROLLER",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"MODEL",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:'Choose the correct element for this step (press "M" for MODEL, "V" for VIEW or "C" for CONTROLLER): Preparation of the coffee',picture:"",buttonOne:"Next",buttonTwo:""},modalRightTop:{text:"CONTROLLER",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"MODEL",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:'Choose the correct element for this step (press "M" for MODEL, "V" for VIEW or "C" for CONTROLLER): Checking water, coffee beans and free space in the waste container',picture:"",buttonOne:"Next",buttonTwo:""},modalRightTop:{text:"CONTROLLER",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"MODEL",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:'Choose the correct element for this step (press "M" for MODEL, "V" for VIEW or "C" for CONTROLLER): You choose a drink',picture:"",buttonOne:"Next",buttonTwo:""},modalRightTop:{text:"CONTROLLER",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"MODEL",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalLeft:{text:'Choose the correct element for this step (press "M" for MODEL, "V" for VIEW or "C" for CONTROLLER): Checking validation of the User',picture:"",buttonOne:"Next",buttonTwo:""},modalRightTop:{text:"CONTROLLER",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"MODEL",picture:"",buttonOne:"",buttonTwo:""}},{modalCenter:{text:"Finish!\n It’s time to drink a REAL coffee!",picture:"",buttonOne:"Shut down PC",buttonTwo:""},modalLeft:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightTop:{text:"",picture:"",buttonOne:"",buttonTwo:""},modalRightBottom:{text:"",picture:"",buttonOne:"",buttonTwo:""}}],c=function(){return c=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},c.apply(this,arguments)};const u=function(t){var e=(0,i.$)().t,o=function(e){e===s.length?(t.callback(e-1),window.open("https://www.youtube.com/watch?v=OBGxt8zhbRk")):t.callback(e)};return(0,n.jsxs)("div",c({className:(0,a.A)("card",{},["".concat(t.className)])},{children:[""!==t.state.text?(0,n.jsx)("p",{children:e("".concat(t.state.text,":key"))}):(0,n.jsx)(n.Fragment,{}),""!==t.state.picture?(0,n.jsx)("img",{src:t.state.picture,width:"280px",height:"200px",alt:"MVC model"}):(0,n.jsx)(n.Fragment,{}),""!==t.state.buttonOne?(0,n.jsx)("button",c({className:"learning__btn",onClick:function(n){"Repeat"!==e("".concat(t.state.buttonOne,":key"))?o(t.progress+1):o(0)}},{children:e("".concat(t.state.buttonOne,":key"))})):(0,n.jsx)(n.Fragment,{}),""!==t.state.buttonTwo?(0,n.jsx)("button",c({className:"learning__btn",onClick:function(e){o(t.progress+1)}},{children:e("".concat(t.state.buttonTwo,":key"))})):(0,n.jsx)(n.Fragment,{})]}))};var l=o(9607),d=o(1508),m=o(3366),p=o(7462),b=o(6010),h=o(4780),f=o(917),g=o(1796),w=o(8216),O=o(2734),x=o(9602),T=o(6122),v=o(1588),L=o(4867);function y(t){return(0,L.Z)("MuiLinearProgress",t)}(0,v.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const C=["className","color","value","valueBuffer","variant"];let R,j,k,E,_,S,N=t=>t;const I=(0,f.F4)(R||(R=N`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),M=(0,f.F4)(j||(j=N`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),Z=(0,f.F4)(k||(k=N`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),P=(t,e)=>"inherit"===e?"currentColor":t.vars?t.vars.palette.LinearProgress[`${e}Bg`]:"light"===t.palette.mode?(0,g.$n)(t.palette[e].main,.62):(0,g._j)(t.palette[e].main,.5),B=(0,x.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[`color${(0,w.Z)(o.color)}`],e[o.variant]]}})((({ownerState:t,theme:e})=>(0,p.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:P(e,t.color)},"inherit"===t.color&&"buffer"!==t.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===t.variant&&{backgroundColor:"transparent"},"query"===t.variant&&{transform:"rotate(180deg)"}))),W=(0,x.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.dashed,e[`dashedColor${(0,w.Z)(o.color)}`]]}})((({ownerState:t,theme:e})=>{const o=P(e,t.color);return(0,p.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===t.color&&{opacity:.3},{backgroundImage:`radial-gradient(${o} 0%, ${o} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,f.iv)(E||(E=N`
    animation: ${0} 3s infinite linear;
  `),Z)),D=(0,x.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.bar,e[`barColor${(0,w.Z)(o.color)}`],("indeterminate"===o.variant||"query"===o.variant)&&e.bar1Indeterminate,"determinate"===o.variant&&e.bar1Determinate,"buffer"===o.variant&&e.bar1Buffer]}})((({ownerState:t,theme:e})=>(0,p.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===t.color?"currentColor":(e.vars||e).palette[t.color].main},"determinate"===t.variant&&{transition:"transform .4s linear"},"buffer"===t.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:t})=>("indeterminate"===t.variant||"query"===t.variant)&&(0,f.iv)(_||(_=N`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),I))),V=(0,x.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.bar,e[`barColor${(0,w.Z)(o.color)}`],("indeterminate"===o.variant||"query"===o.variant)&&e.bar2Indeterminate,"buffer"===o.variant&&e.bar2Buffer]}})((({ownerState:t,theme:e})=>(0,p.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==t.variant&&{backgroundColor:"inherit"===t.color?"currentColor":(e.vars||e).palette[t.color].main},"inherit"===t.color&&{opacity:.3},"buffer"===t.variant&&{backgroundColor:P(e,t.color),transition:"transform .4s linear"})),(({ownerState:t})=>("indeterminate"===t.variant||"query"===t.variant)&&(0,f.iv)(S||(S=N`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),M))),$=r.forwardRef((function(t,e){const o=(0,T.Z)({props:t,name:"MuiLinearProgress"}),{className:r,color:a="primary",value:i,valueBuffer:s,variant:c="indeterminate"}=o,u=(0,m.Z)(o,C),l=(0,p.Z)({},o,{color:a,variant:c}),d=(t=>{const{classes:e,variant:o,color:n}=t,r={root:["root",`color${(0,w.Z)(n)}`,o],dashed:["dashed",`dashedColor${(0,w.Z)(n)}`],bar1:["bar",`barColor${(0,w.Z)(n)}`,("indeterminate"===o||"query"===o)&&"bar1Indeterminate","determinate"===o&&"bar1Determinate","buffer"===o&&"bar1Buffer"],bar2:["bar","buffer"!==o&&`barColor${(0,w.Z)(n)}`,"buffer"===o&&`color${(0,w.Z)(n)}`,("indeterminate"===o||"query"===o)&&"bar2Indeterminate","buffer"===o&&"bar2Buffer"]};return(0,h.Z)(r,y,e)})(l),f=(0,O.Z)(),g={},x={bar1:{},bar2:{}};if(("determinate"===c||"buffer"===c)&&void 0!==i){g["aria-valuenow"]=Math.round(i),g["aria-valuemin"]=0,g["aria-valuemax"]=100;let t=i-100;"rtl"===f.direction&&(t=-t),x.bar1.transform=`translateX(${t}%)`}if("buffer"===c&&void 0!==s){let t=(s||0)-100;"rtl"===f.direction&&(t=-t),x.bar2.transform=`translateX(${t}%)`}return(0,n.jsxs)(B,(0,p.Z)({className:(0,b.Z)(d.root,r),ownerState:l,role:"progressbar"},g,{ref:e},u,{children:["buffer"===c?(0,n.jsx)(W,{className:d.dashed,ownerState:l}):null,(0,n.jsx)(D,{className:d.bar1,ownerState:l,style:x.bar1}),"determinate"===c?null:(0,n.jsx)(V,{className:d.bar2,ownerState:l,style:x.bar2})]}))}));var F=o(6411),U=function(){return U=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},U.apply(this,arguments)};const A=function(){(0,i.$)().t;var t=(0,r.useState)(0),e=t[0],o=t[1],c=s[e],m=Object.entries(c),p=document.querySelector(".machine"),b=document.querySelector(".message"),h=document.getElementsByClassName("card"),f=document.querySelector(".learning__btn"),g=[["right__machine","wrong__modal","wrong__modal"],["wrong__machine","right__modal","wrong__modal"],["wrong__machine","wrong__modal","right__modal"]];switch(e){case 1:document.querySelector(".onBtn").addEventListener("click",(function(){o(e+1)}));break;case 4:p.classList.add("blink__machine"),f.addEventListener("click",(function(){p.classList.remove("blink__machine")}));break;case 5:p.classList.add("blink__machine"),setTimeout((function(){p&&p.classList.remove("blink__machine"),h[1]&&h[1].classList.add("blink__modal")}),3e3),setTimeout((function(){h[1]&&h[1].classList.remove("blink__modal"),h[2]&&h[2].classList.add("blink__modal")}),6e3),setTimeout((function(){h[2]&&h[2].classList.remove("blink__modal")}),9e3);break;case 6:document.querySelector(".control__middle").addEventListener("click",(function(){o(e+1),b.innerHTML=""}));break;case 7:case 8:case 9:case 10:setTimeout((function(){o(e+1),b.innerHTML=""}),3e3);break;case 11:setTimeout((function(){o(e+1)}),7e3);break;case 13:case 16:w(0);break;case 14:w(2);break;case 15:case 17:w(1)}function w(t){document.addEventListener("keydown",(function(n){O(),"KeyV"==n.code&&p.classList.add(g[t][0]),"KeyC"==n.code&&h[1].classList.add(g[t][1]),"KeyM"==n.code&&h[2].classList.add(g[t][2]),setTimeout((function(){O(),o(e+1)}),1500)}),{once:!0}),setTimeout((function(){b.innerHTML="VIEW"}),0)}function O(){p.classList.remove("right__machine"),p.classList.remove("wrong__machine"),h[1].classList.remove("right__modal"),h[1].classList.remove("wrong__modal"),h[2].classList.remove("right__modal"),h[2].classList.remove("wrong__modal")}return(0,n.jsxs)("div",U({className:(0,a.A)("learning-mode")},{children:[(0,n.jsx)(F.Z,{}),s.length>e?m.map((function(t){if(""!==t[1].text)return console.log(e),(0,n.jsx)(u,{className:(0,a.A)("".concat(t[0]),{},["".concat(""!==t[1].picture?"withImg":"")]),callback:o,progress:e,state:t[1]},"".concat(t[0],"-index"))})):(0,n.jsx)(n.Fragment,{}),(0,n.jsx)("div",U({className:"learning__machine"},{children:(0,n.jsx)(l.Z,{})})),(0,n.jsx)(d.Z,U({className:(0,a.A)("progress"),sx:{width:"80%"}},{children:(0,n.jsx)($,{variant:"buffer",value:e/18*100,valueBuffer:100})}))]}))}}}]);