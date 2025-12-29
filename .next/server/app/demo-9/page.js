(()=>{var e={};e.id=318,e.ids=[318],e.modules={331:(e,t,i)=>{Promise.resolve().then(i.bind(i,1135))},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1135:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>g});var s=i(687),n=i(6214),r=i.n(n),l=i(1666),a=i(5814),o=i.n(a),c=i(4184),d=i(6813),u=i(7827),p=i(9040),m=i(3210);function x(e){let t=e.replace("#",""),i=0,s=0,n=0,r=1;return 6===t.length?(i=parseInt(t.slice(0,2),16)/255,s=parseInt(t.slice(2,4),16)/255,n=parseInt(t.slice(4,6),16)/255):8===t.length&&(i=parseInt(t.slice(0,2),16)/255,s=parseInt(t.slice(2,4),16)/255,n=parseInt(t.slice(4,6),16)/255,r=parseInt(t.slice(6,8),16)/255),[i,s,n,r]}let h=`
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0, 1);
  }
`,f=`
  precision highp float;

  #define PI 3.14159265359

  uniform float iTime;
  uniform vec3 iResolution;
  uniform float uSpinRotation;
  uniform float uSpinSpeed;
  uniform vec2 uOffset;
  uniform vec4 uColor1;
  uniform vec4 uColor2;
  uniform vec4 uColor3;
  uniform float uContrast;
  uniform float uLighting;
  uniform float uSpinAmount;
  uniform float uPixelFilter;
  uniform float uSpinEase;
  uniform bool uIsRotate;
  uniform vec2 uMouse;

  varying vec2 vUv;

  vec4 effect(vec2 screenSize, vec2 screen_coords) {
    float pixel_size = length(screenSize.xy) / uPixelFilter;
    vec2 uv = (floor(screen_coords.xy * (1.0 / pixel_size)) * pixel_size - 0.5 * screenSize.xy) / length(screenSize.xy) - uOffset;
    float uv_len = length(uv);
    
    float speed = (uSpinRotation * uSpinEase * 0.2);
    if(uIsRotate){
      speed = iTime * speed;
    }
    speed += 302.2;
    
    // Mouse influence for gentle rotation (applied additively)
    float mouseInfluence = (uMouse.x * 2.0 - 1.0);
    speed += mouseInfluence * 0.1;
    
    float new_pixel_angle = atan(uv.y, uv.x) + speed - uSpinEase * 20.0 * (uSpinAmount * uv_len + (1.0 - uSpinAmount));
    vec2 mid = (screenSize.xy / length(screenSize.xy)) / 2.0;
    uv = (vec2(uv_len * cos(new_pixel_angle) + mid.x, uv_len * sin(new_pixel_angle) + mid.y) - mid);
    
    uv *= 30.0;
    // Fix: Apply mouse influence additively rather than scaling with time.
    float baseSpeed = iTime * uSpinSpeed;
    speed = baseSpeed + mouseInfluence * 2.0;
    
    vec2 uv2 = vec2(uv.x + uv.y);
    
    for(int i = 0; i < 5; i++) {
      uv2 += sin(max(uv.x, uv.y)) + uv;
      uv += 0.5 * vec2(
        cos(5.1123314 + 0.353 * uv2.y + speed * 0.131121),
        sin(uv2.x - 0.113 * speed)
      );
      uv -= cos(uv.x + uv.y) - sin(uv.x * 0.711 - uv.y);
    }
    
    float contrast_mod = (0.25 * uContrast + 0.5 * uSpinAmount + 1.2);
    float paint_res = min(2.0, max(0.0, length(uv) * 0.035 * contrast_mod));
    float c1p = max(0.0, 1.0 - contrast_mod * abs(1.0 - paint_res));
    float c2p = max(0.0, 1.0 - contrast_mod * abs(paint_res));
    float c3p = 1.0 - min(1.0, c1p + c2p);
    float light = (uLighting - 0.2) * max(c1p * 5.0 - 4.0, 0.0) + uLighting * max(c2p * 5.0 - 4.0, 0.0);
    
    return (0.3 / uContrast) * uColor1 + (1.0 - 0.3 / uContrast) * (uColor1 * c1p + uColor2 * c2p + vec4(c3p * uColor3.rgb, c3p * uColor1.a)) + light;
  }

  void main() {
    vec2 uv = vUv * iResolution.xy;
    gl_FragColor = effect(iResolution.xy, uv);
  }
`,v=({spinRotation:e=-2,spinSpeed:t=7,offset:i=[0,0],color1:n="#DE443B",color2:r="#006BB4",color3:l="#162325",contrast:a=3.5,lighting:o=.4,spinAmount:v=.25,pixelFilter:j=745,spinEase:g=1,isRotate:b=!1,mouseInteraction:y=!0})=>{let w=(0,m.useRef)(null);return(0,m.useEffect)(()=>{let s,m;if(!w.current)return;let S=w.current,_=new c.A,P=_.gl;function k(){_.setSize(S.offsetWidth,S.offsetHeight),s&&(s.uniforms.iResolution.value=[P.canvas.width,P.canvas.height,P.canvas.width/P.canvas.height])}P.clearColor(0,0,0,1),window.addEventListener("resize",k),k();let N=new d.l(P);s=new u.B(P,{vertex:h,fragment:f,uniforms:{iTime:{value:0},iResolution:{value:[P.canvas.width,P.canvas.height,P.canvas.width/P.canvas.height]},uSpinRotation:{value:e},uSpinSpeed:{value:t},uOffset:{value:i},uColor1:{value:x(n)},uColor2:{value:x(r)},uColor3:{value:x(l)},uContrast:{value:a},uLighting:{value:o},uSpinAmount:{value:v},uPixelFilter:{value:j},uSpinEase:{value:g},uIsRotate:{value:b},uMouse:{value:[.5,.5]}}});let C=new p.e(P,{geometry:N,program:s});function R(e){if(!y)return;let t=S.getBoundingClientRect(),i=(e.clientX-t.left)/t.width,n=1-(e.clientY-t.top)/t.height;s.uniforms.uMouse.value=[i,n]}return m=requestAnimationFrame(function e(t){m=requestAnimationFrame(e),s.uniforms.iTime.value=.001*t,_.render({scene:C})}),S.appendChild(P.canvas),S.addEventListener("mousemove",R),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",k),S.removeEventListener("mousemove",R),S.removeChild(P.canvas),P.getExtension("WEBGL_lose_context")?.loseContext()}},[e,t,i,n,r,l,a,o,v,j,g,b,y,w]),(0,s.jsx)("div",{ref:w,className:"w-full h-full"})},j=({text:e,scrambleSpeed:t=40,maxIterations:i=10,useOriginalCharsOnly:n=!1,characters:r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",className:a,scrambledClassName:o,sequential:c=!1,revealDirection:d="start",...u})=>{let[p,x]=(0,m.useState)(e),[h,f]=(0,m.useState)(!1),[v,j]=(0,m.useState)(!1),[g,b]=(0,m.useState)(new Set);return(0,m.useEffect)(()=>{let s;let l=0,a=new Set(g),o=()=>{let t=e.length;switch(d){case"start":default:return a.size;case"end":return t-1-a.size;case"center":let i=Math.floor(t/2),s=Math.floor(a.size/2),n=a.size%2==0?i+s:i-s-1;if(n>=0&&n<t&&!a.has(n))return n;for(let e=0;e<t;e++)if(!a.has(e))return e;return 0}},u=e=>{if(!n)return e.split("").map((t,i)=>" "===t?" ":a.has(i)?e[i]:p[Math.floor(Math.random()*p.length)]).join("");{let t=e.split("").map((e,t)=>({char:e,isSpace:" "===e,index:t,isRevealed:a.has(t)})),i=t.filter(e=>!e.isSpace&&!e.isRevealed).map(e=>e.char);for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}let s=0;return t.map(t=>t.isSpace?" ":t.isRevealed?e[t.index]:i[s++]).join("")}},p=n?Array.from(new Set(e.split(""))).filter(e=>" "!==e):r.split("");return h?(j(!0),s=setInterval(()=>{if(c){if(a.size<e.length){let t=o();a.add(t),x(u(e))}else clearInterval(s),j(!1)}else x(u(e)),++l>=i&&(clearInterval(s),j(!1),x(e))},t)):(x(e),a.clear()),()=>{s&&clearInterval(s)}},[h,e,r,t,n,c,d,i,g]),(0,s.jsxs)(l.P.span,{onHoverStart:()=>f(!0),onHoverEnd:()=>f(!1),className:`inline-block whitespace-pre-wrap ${a||""}`,...u,children:[(0,s.jsx)("span",{className:"sr-only",children:p}),(0,s.jsx)("span",{"aria-hidden":"true",children:p.split("").map((e,t)=>(0,s.jsx)("span",{className:!g.has(t)&&v&&h?o:a,children:e},t))})]})};i(2378);let g=()=>(0,s.jsxs)("main",{className:`main-content-9 ${r().className} overflow-clip`,children:[(0,s.jsx)("div",{className:"fixed h-screen w-screen pointer-events-none -z-10",children:(0,s.jsx)(v,{isRotate:!0,mouseInteraction:!1,pixelFilter:5e3,color1:"#ffffff",color2:"#fafafa",color3:"#eeeeee",spinAmount:.1,spinRotation:.1})}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)(l.P.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.4},className:"w-1/3 hidden lg:block",children:(0,s.jsxs)("div",{className:"p-8 sm:p-10 h-full",children:[(0,s.jsxs)(o(),{href:"/",className:"text-4xl fixed top-10",children:["Slinkton ",(0,s.jsx)("br",{})," Alberto"]}),(0,s.jsx)("span",{className:"fixed bottom-10 left-10 h-5 w-5 bg-black rounded-full -skew-x-6"})]})}),(0,s.jsxs)(l.P.section,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.4,delay:.15},className:"px-8 flex-1",children:[(0,s.jsxs)("div",{className:"py-8 sm:py-10 w-full",children:[(0,s.jsxs)("div",{className:"h-[70vh]",children:[(0,s.jsx)(o(),{href:"/",className:"text-2xl lg:hidden mb-10 inline-block pt-10 sm:pt-0",children:"Slinkton Alberto"}),(0,s.jsxs)("p",{className:"text-4xl sm:text-5xl leading-12 sm:leading-15",children:["Independent ",(0,s.jsx)("br",{}),"Creative Developer"]})]}),(0,s.jsx)("p",{className:"text-lg font-[300] mb-8",children:"Projects"}),(0,s.jsxs)("ul",{className:"text-4xl flex flex-col gap-3 [&_i]:text-sm [&_i]:text-[#f54900] [&_i]:align-top [&_i]:opacity-0 [&_a]:hover:[&_i]:opacity-100 [&_a]:hover:[&_i]:delay-[0.42s]",children:[(0,s.jsx)("li",{children:(0,s.jsxs)(o(),{href:"#!",children:[(0,s.jsx)(j,{text:"NexaSite"})," ",(0,s.jsx)("i",{children:"(2024)"})]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(o(),{href:"#!",children:[(0,s.jsx)(j,{text:"MockSphere"})," ",(0,s.jsx)("i",{children:"(2024)"})]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(o(),{href:"#!",children:[(0,s.jsx)(j,{text:"WebNest"})," ",(0,s.jsx)("i",{children:"(2024)"})]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(o(),{href:"#!",children:[(0,s.jsx)(j,{text:"PhantomPage"})," ",(0,s.jsx)("i",{children:"(2024)"})]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(o(),{href:"#!",children:[(0,s.jsx)(j,{text:"SiteForge"})," ",(0,s.jsx)("i",{children:"(2024)"})]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(o(),{href:"#!",children:[(0,s.jsx)(j,{text:"PixelFrame"})," ",(0,s.jsx)("i",{children:"(2024)"})]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(o(),{href:"#!",children:[(0,s.jsx)(j,{text:"EchoWeb"})," ",(0,s.jsx)("i",{children:"(2023)"})]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(o(),{href:"#!",children:[(0,s.jsx)(j,{text:"CodeCanvas"})," ",(0,s.jsx)("i",{children:"(2023)"})]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(o(),{href:"#!",children:[(0,s.jsx)(j,{text:"VirtuaVista"})," ",(0,s.jsx)("i",{children:"(2022)"})]})})]}),(0,s.jsxs)("div",{className:"h-[87vh] flex flex-col justify-center",children:[(0,s.jsx)("p",{className:"text-lg font-[300] mt-32 mb-6",children:"Contact"}),(0,s.jsxs)("ul",{className:"text-2xl flex flex-col gap-1",children:[(0,s.jsx)("li",{children:(0,s.jsx)(o(),{href:"mailto:uM7yT@example.com",children:(0,s.jsx)(j,{text:"Email"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(o(),{href:"www.x.com",children:(0,s.jsx)(j,{text:"X(Twitter)"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(o(),{href:"www.linkedin.com",children:(0,s.jsx)(j,{text:"Linkedin"})})})]})]})]}),(0,s.jsx)("footer",{className:"py-8",children:(0,s.jsxs)("span",{className:"text-sm text-balance inline-block",children:["\xa9 ",new Date().getFullYear()," by Slink — Developed by ",(0,s.jsx)(o(),{className:"relative after:absolute after:content-[''] after:w-full after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-0 after:left-0 hover:after:left-auto hover:after:right-0 after:bottom-0",href:"https://themeforest.net/user/platol/portfolio","aria-label":"Slink",children:"Platol"})]})})]}),(0,s.jsx)(l.P.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.4,delay:.3},className:"lg:w-1/4 absolute sm:fixed sm:right-2 top-1",children:(0,s.jsxs)("div",{className:"p-8 sm:p-10 h-full text-end",children:[(0,s.jsx)("p",{className:"opacity-50 text-sm sm:text-xl sticky sm:top-10",children:"Full Site Soon"}),(0,s.jsx)("span",{className:"block lg:hidden fixed bottom-8 right-8 h-5 w-5 bg-black rounded-full -skew-x-6"})]})})]})]})},1628:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,6346,23)),Promise.resolve().then(i.t.bind(i,7924,23)),Promise.resolve().then(i.t.bind(i,5656,23)),Promise.resolve().then(i.t.bind(i,99,23)),Promise.resolve().then(i.t.bind(i,8243,23)),Promise.resolve().then(i.t.bind(i,8827,23)),Promise.resolve().then(i.t.bind(i,2763,23)),Promise.resolve().then(i.t.bind(i,7173,23))},2339:()=>{},2378:()=>{},2536:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var s=i(5239),n=i(8088),r=i(8170),l=i.n(r),a=i(893),o={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>a[e]);i.d(t,o);let c={children:["",{children:["demo-9",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,6141)),"/Users/dev/projects/obiwan/slink-coming-soon-nextjs-template-2025-10-23-09-06-18-utc/template-files/app/demo-9/page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,2648)),"/Users/dev/projects/obiwan/slink-coming-soon-nextjs-template-2025-10-23-09-06-18-utc/template-files/app/layout.js"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(i.t.bind(i,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(i.t.bind(i,5284,23)),"next/dist/client/components/unauthorized-error"]}]}.children,d=["/Users/dev/projects/obiwan/slink-coming-soon-nextjs-template-2025-10-23-09-06-18-utc/template-files/app/demo-9/page.js"],u={require:i,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/demo-9/page",pathname:"/demo-9",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2648:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r,metadata:()=>n});var s=i(7413);i(7779);let n={title:"Slink - Coming Soon Nextjs Template",description:"Coming Soon",siteName:"Slink",url:"https://slink-nextjs.vercel.app",type:"website",icons:{icon:"/favicon.png"},metadataBase:new URL("https://slink-nextjs.vercel.app"),alternates:{canonical:"/"},openGraph:{images:"/ogimage.png"}},r=({children:e})=>(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{children:e})})},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},5548:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,6444,23)),Promise.resolve().then(i.t.bind(i,6042,23)),Promise.resolve().then(i.t.bind(i,8170,23)),Promise.resolve().then(i.t.bind(i,9477,23)),Promise.resolve().then(i.t.bind(i,9345,23)),Promise.resolve().then(i.t.bind(i,2089,23)),Promise.resolve().then(i.t.bind(i,6577,23)),Promise.resolve().then(i.t.bind(i,1307,23))},6141:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});let s=(0,i(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/dev/projects/obiwan/slink-coming-soon-nextjs-template-2025-10-23-09-06-18-utc/template-files/app/demo-9/page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/dev/projects/obiwan/slink-coming-soon-nextjs-template-2025-10-23-09-06-18-utc/template-files/app/demo-9/page.js","default")},6214:e=>{e.exports={style:{fontFamily:"'Urbanist', 'Urbanist Fallback'",fontStyle:"italic"},className:"__className_0f8d94"}},6259:(e,t,i)=>{Promise.resolve().then(i.bind(i,6141))},6763:()=>{},7779:()=>{},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")}};var t=require("../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),s=t.X(0,[825,814,666,501],()=>i(2536));module.exports=s})();