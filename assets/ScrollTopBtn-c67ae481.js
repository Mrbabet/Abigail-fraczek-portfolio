import{r as t,a as e}from"./index-57330312.js";import{T as d}from"./AnimatedPage-8023dd9d.js";const m=()=>{const[n,r]=t.useState(!1);t.useEffect(()=>{function o(){const{scrollTop:s,clientHeight:l,scrollHeight:c}=document.documentElement,a=s+l===c;r(a)}return window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}},[]);function i(){window.scrollTo({top:0,behavior:"smooth"})}return e("button",{onClick:i,style:{display:n?"flex":"none",backgroundColor:"transparent",border:"1px solid black",outline:0,position:"fixed",bottom:"50px",right:"50%",height:"42px",width:"42px",borderRadius:"50%",justifyContent:"center",alignItems:"center",cursor:"pointer"},children:e(d,{})})};export{m as S};
