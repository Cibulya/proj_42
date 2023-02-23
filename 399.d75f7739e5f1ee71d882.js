"use strict";(self.webpackChunkproj_42=self.webpackChunkproj_42||[]).push([[399],{9399:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var a=r(5893),n=r(7294),s=r(4160),i=r(2327),c=function(){return c=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)};const o=function(e){return(0,a.jsx)("span",c({className:"error-text"},{children:e.text}))};var l=function(){return l=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},l.apply(this,arguments)},p=RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i),u=RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/);const h=function(e){var t=(0,i.$)().t;return(0,a.jsxs)("div",l({className:e.type},{children:[(0,a.jsx)("label",l({className:"label",htmlFor:e.type},{children:t("".concat(e.type))})),(0,a.jsx)("input",{className:"input",type:"password"===e.type?"password":"text",name:e.type,onChange:function(t){var r;t.preventDefault();var a=t.target,n=a.name,s=a.value;switch(n){case"username":e.initialState.errors.username=s.length<5?"Username must be 5 characters long!":"";break;case"email":e.initialState.errors.email=p.test(s)?"":"Email is not valid!";break;case"password":e.initialState.errors.password=u.test(s)?"":"Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"}var i=l(l({},e.initialState),((r={})[n]=s,r));e.checkInputChange(i)}}),e.initialState.errors["".concat(e.type)].length>0&&(0,a.jsx)(o,{text:e.initialState.errors[e.type]})]}))};var m=function(){return m=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},m.apply(this,arguments)};const f=function(e){var t=(0,n.useState)({username:"",email:"",password:"",errors:{username:"",email:"",password:""}}),r=t[0],c=t[1],o=(0,i.$)().t,l=function(e){c(m({},e)),console.log(r)};return(0,a.jsxs)("div",m({className:(0,s.A)("sign-wrapper",{},[e.className])},{children:[(0,a.jsx)("h2",{children:o("".concat(e.typeForm))}),(0,a.jsxs)("form",m({className:"form",onSubmit:function(e){e.preventDefault();var t=!0;return Object.values(r.errors).forEach((function(e){return e.length>0&&(t=!1)})),t},noValidate:!0},{children:["sign-up"===e.typeForm&&(0,a.jsx)(h,{type:"username",checkInputChange:l,initialState:r}),(0,a.jsx)(h,{type:"email",checkInputChange:l,initialState:r}),(0,a.jsx)(h,{type:"password",checkInputChange:l,initialState:r}),(0,a.jsx)("div",m({className:"submit"},{children:(0,a.jsx)("button",m({className:"learning__btn"},{children:"sign-up"===e.typeForm?o("register"):o("sign-in")}))}))]}))]}))};var d=function(){return d=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},d.apply(this,arguments)};const g=function(){return(0,a.jsxs)("div",d({className:"learning-mode"},{children:[(0,a.jsx)(f,{className:"card",typeForm:"sign-up"}),(0,a.jsx)(f,{className:"card",typeForm:"sign-in"})]}))}}}]);