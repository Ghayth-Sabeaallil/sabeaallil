import{r as u,j as s}from"./index-BnWZiWsO.js";const p=()=>{const n=u.useRef(null),d=()=>{n.current&&(n.current.classList.length>1?n.current.classList.remove("active"):n.current.classList.add("active"))},a=m=>{const g=document.getElementById(m).getBoundingClientRect().top+window.pageYOffset,c=window.pageYOffset,j=g-c,o=1300;let t=null;function r(e){t===null&&(t=e);const l=e-t,i=x(l,c,j,o);window.scrollTo(0,i),l<o&&requestAnimationFrame(r)}function x(e,l,i,h){return e/=h/2,e<1?i/2*e*e+l:(e--,-i/2*(e*(e-2)-1)+l)}requestAnimationFrame(r)};return s.jsxs(s.Fragment,{children:[s.jsxs("header",{className:"navbar-dekstop",children:[s.jsx("a",{className:"logo",href:"/",children:s.jsx("img",{src:"./LOGO.svg",alt:"logo"})}),s.jsxs("nav",{className:"middle-items",children:[s.jsx("a",{className:"middle",onClick:()=>a("projects-section"),children:"PROJECTS"}),s.jsx("a",{className:"middle",onClick:()=>a("home-section"),children:"HOME"}),s.jsx("a",{className:"middle",onClick:()=>a("skill-section"),children:"SKILLS"})]})]}),s.jsxs("header",{className:"navbar-mobile",children:[s.jsx("a",{className:"logo",href:"/",children:s.jsx("img",{src:"./LOGO.svg",alt:"logo"})}),s.jsxs("nav",{ref:n,className:"middle-items",children:[s.jsx("a",{className:"middle",onClick:()=>a("projects-section"),children:"PROJECTS"}),s.jsx("a",{className:"middle",onClick:()=>a("home-section"),children:"HOME"}),s.jsx("a",{className:"middle",onClick:()=>a("skill-section"),children:"SKILLS"})]}),s.jsxs("button",{onClick:d,className:"navbar-toggler",id:"navbar-toggler",children:[s.jsx("span",{className:"toggler-icon"}),s.jsx("span",{className:"toggler-icon"}),s.jsx("span",{className:"toggler-icon"})]})]})]})};export{p as default};
