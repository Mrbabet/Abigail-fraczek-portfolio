import{r as Q}from"./index-d2788e6c.js";var P={};function U(e){if(!e||typeof window>"u")return;const n=document.createElement("style");return n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n),e}Object.defineProperty(P,"__esModule",{value:!0});var i=Q;function V(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var l=V(i);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var s=function(){return s=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},s.apply(this,arguments)};U(`.marquee-container {
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: 100%;
}
.marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.overlay::before, .overlay::after {
  background: linear-gradient(to right, var(--gradient-color));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
}
.overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.overlay::before {
  left: 0;
  top: 0;
}

.marquee {
  flex: 0 0 auto;
  min-width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}`);var Y=function(e){var n,r,t,a,o=e.style,X=o===void 0?{}:o,g=e.className,D=g===void 0?"":g,h=e.play,d=h===void 0?!0:h,_=e.pauseOnHover,w=_===void 0?!1:_,b=e.pauseOnClick,C=b===void 0?!1:b,q=e.direction,x=q===void 0?"left":q,E=e.speed,O=E===void 0?20:E,R=e.delay,k=R===void 0?0:R,W=e.loop,u=W===void 0?0:W,M=e.gradient,G=M===void 0?!0:M,N=e.gradientColor,c=N===void 0?[255,255,255]:N,j=e.gradientWidth,v=j===void 0?200:j,T=e.onFinish,Z=e.onCycleComplete,z=e.children,L=i.useState(0),S=L[0],$=L[1],A=i.useState(0),F=A[0],J=A[1],H=i.useState(!1),f=H[0],K=H[1],m=i.useRef(null),p=i.useRef(null);i.useEffect(function(){if(f){var y=function(){p.current&&m.current&&($(m.current.getBoundingClientRect().width),J(p.current.getBoundingClientRect().width))};return y(),window.addEventListener("resize",y),function(){window.removeEventListener("resize",y)}}},[f]),i.useEffect(function(){K(!0)},[]);var B="rgba("+c[0]+", "+c[1]+", "+c[2],I=F<S?S/O:F/O;return l.default.createElement(i.Fragment,null,f?l.default.createElement("div",{ref:m,style:s(s({},X),(n={},n["--pause-on-hover"]=!d||w?"paused":"running",n["--pause-on-click"]=!d||w&&!C||C?"paused":"running",n)),className:D+" marquee-container"},G&&l.default.createElement("div",{style:(r={},r["--gradient-color"]=B+", 1), "+B+", 0)",r["--gradient-width"]=typeof v=="number"?v+"px":v,r),className:"overlay"}),l.default.createElement("div",{ref:p,style:(t={},t["--play"]=d?"running":"paused",t["--direction"]=x==="left"?"normal":"reverse",t["--duration"]=I+"s",t["--delay"]=k+"s",t["--iteration-count"]=u?""+u:"infinite",t),className:"marquee",onAnimationIteration:Z,onAnimationEnd:T},z),l.default.createElement("div",{style:(a={},a["--play"]=d?"running":"paused",a["--direction"]=x==="left"?"normal":"reverse",a["--duration"]=I+"s",a["--delay"]=k+"s",a["--iteration-count"]=u?""+u:"infinite",a),className:"marquee","aria-hidden":"true"},z)):null)},ne=P.default=Y;export{ne as _};
