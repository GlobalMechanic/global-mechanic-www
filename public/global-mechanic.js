!function(e){function t(t){for(var a,r,l=t[0],u=t[1],c=t[2],d=0,f=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);for(s&&s(t);f.length;)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,l=1;l<n.length;l++){var u=n[l];0!==o[u]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={0:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;i.push([42,1]),n()}({10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(0),o=a.createContext({});t.StaticAssetContext=o;t.useStaticAssets=()=>a.useContext(o),t.default=o},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(1);t.titleFont=a.css`

    font-family: "Chronicle Cond A", "Chronicle Cond B";
    font-style: normal;
    font-weight: 700;

`,t.titleFontItalic=a.css`

    font-family: "Chronicle Cond A", "Chronicle Cond B";
    font-style: italic;
    font-weight: 700;

`,t.bodyFont=a.css`

    font-family: "Ringside Condensed A", "Ringside Condensed B";
    font-style: normal;
    font-weight: 300;

`,t.bodyFontBold=a.css`

    font-family: "Ringside Condensed A", "Ringside Condensed B";
    font-style: normal;
    font-weight: 700;

`,t.content=a.css`
    box-sizing: border-box;
    width: 100%;
    align-self: center;
`},146:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),r=o(n(1)),l=n(13),u=o(n(147)),c=r.default(e=>{const{content:t,...n}=e,a=i.createRef(),o=u.default(16/9,a);return i.default.createElement("div",Object.assign({ref:a,style:o},n),i.default.createElement("iframe",{src:`https://player.vimeo.com/video/${t.vimeoId}`,frameBorder:0,allow:"autoplay; fullscreen",allowFullScreen:!0}))}).withConfig({displayName:"VimeoContent",componentId:"sc-h8kl1f"})`
    ${l.content}

    background-color: ${e=>e.theme.colors.accent};

    iframe {
        width: 100%;
        height: 100%;
    }

`;t.default=c},147:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(0);t.default=(e,t)=>{const[n,o]=a.useState(NaN);return a.useEffect(()=>{const a=()=>{const a=t&&t.current&&t.current.getBoundingClientRect(),i=(a?a.width:0)/e;i!==n&&o(i)};return Number.isNaN(n)&&a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[n]),{height:Number.isNaN(n)?"":n+"px"}}},148:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(0)),i=a(n(1)),r=a(n(16)),l=n(27),u=i.default(e=>{const{page:t,...n}=e;return o.default.createElement(r.default,Object.assign({page:t},n),t.contents.map((e,t)=>"text"===e.type?o.default.createElement(l.TextContent,{key:t,content:e}):"vimeo"===e.type?o.default.createElement(l.VimeoContent,{key:t,content:e}):o.default.createElement(l.FileContent,{key:t,content:e})))}).withConfig({displayName:"ContentPage",componentId:"sc-3iamhq"})`
    align-items: flex-start;
`;t.default=u},149:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(0)),i=a(n(16)),r=n(14),l=a(n(1)),u=a(n(6)),c=a(n(29)),s=l.default.div.withConfig({displayName:"MenuPortrait",componentId:"sc-1a6hth7"})`

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    overflow: hidden;

    width: 100vw;
    height: min(56.25vw, 25em);
    background-position: center;
    background-size: cover;
    background-image: url(${u.default}/file/${e=>e.portraitId}-thumb);

    h2 {
        margin: 0em 0.25em 0.25em 0em;

        color: ${e=>e.theme.colors.bg};
        font-size: 3em;
    }
`,d=l.default(e=>{const{page:t,...n}=e,a=o.default.createElement("h2",{key:t.path},t.name);return o.default.createElement(r.Link,Object.assign({to:"/"+t.path},n),t.portrait?o.default.createElement(s,{portraitId:t.portrait},a):a)}).withConfig({displayName:"MenuLink",componentId:"sc-1k7d9mm"})`
    text-decoration: none;
    color: inherit;
    &:visited {
        color: inherit;
    }

    text-align: center;

    > h2 {
        margin: 0;
        font-size: 4em;
    }
`,f=l.default(e=>{const{page:t,pages:n,...a}=e,r=t.pages;return o.default.createElement(i.default,Object.assign({page:t},a),o.default.createElement(o.default.Fragment,null,t.name?o.default.createElement(c.default,null,`# ${t.name}`):null,r.map(e=>{const t=n.find(t=>t._id===e);return t?o.default.createElement(d,{key:t.path,page:t}):null})))}).withConfig({displayName:"MenuPage",componentId:"sc-16mxsot"})`
    font-size: 3vmin;
    overflow: hidden;
`;t.default=f},150:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(0)),i=a(n(1)).default.div.withConfig({displayName:"MissingPageStyle",componentId:"sc-pe6y2"})`
    h2 { color: red; }
`;t.default=()=>o.default.createElement(i,null,o.default.createElement("h2",null,"Page Not Found!"))},151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=e=>{const t=e.replace(/_/g,"-");return n=>e===n.path||t===n.path}},152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(1),o=n(13),i=a.createGlobalStyle`

    html {
        background-color: ${e=>e.theme.colors.bg};
        color: ${e=>e.theme.colors.fg};

        @media only screen and (min-width: 1500px) {
            font-size: 1.6rem;
        }

        @media only screen and (max-width: 1500px) {
            font-size: 1.3rem;
        }

        @media only screen and (max-width: 1200px) {
            font-size: 1rem;
        }

        @media only screen and (max-width: 1000px) {
            font-size: 0.8rem;
        }

        @media only screen and (max-width: 700px) {
            font-size: 0.7rem;
        }

        @media only screen and (max-width: 400px) {
            font-size: 0.6rem;
        }

        @media only screen and (max-width: 300px) {
            font-size: 0.5rem;
        }
    }

    html, body, main {
        display: flex;
        flex-direction: column;
        ${o.bodyFont};
    } 

    body, main {
        flex: 1 1 auto;
    }

    main {
        min-height: 100vh;
    }

    h1, h2, h3, h4, h5, h6 {
        ${o.titleFont};
    }

`;t.default=i},153:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(1)).default.div.withConfig({displayName:"PageContainer",componentId:"sc-1hgd6my"})`
   display: flex;
   flex-direction: column;
   flex: 1 1 auto;
`;t.default=o},154:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(0)),i=a(n(1)),r=n(14),l=n(155),u=n(10),c=i.default(e=>{const{navIconTo:t,...n}=e,a=u.useStaticAssets(),i=r.useLocation().pathname===t;return o.default.createElement("div",Object.assign({},n),o.default.createElement(r.Link,{to:"/"},o.default.createElement(l.Icon,{image:a.nut}),o.default.createElement("h2",null,"Global Mechanic")),o.default.createElement(r.Link,{to:i?"/":t},o.default.createElement(l.Icon,{image:i?a.x:a.hamburger})))}).withConfig({displayName:"TopBar",componentId:"sc-1w3zwt3"})`

    display: flex;
    align-items: baseline;
    padding: 0.5em 0.75em;

    position: sticky;
    top: 0em;

    font-size: 1.25em;

    a:first-child {
        margin-right: auto;
        display: inherit;
        align-items: inherit;
    }

    a > h2 {
        margin: 0;
    }

    a {
        cursor: pointer;
        text-decoration: none;
        &:visited {
            color: inherit;
        }
    }
`;t.default=c},155:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(26));t.Icon=o.default},156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a={light:{name:"light",colors:{bg:"white",fg:"black",accent:"rgba(0,0,0, 0.125)"}},dark:{name:"dark",colors:{bg:"black",fg:"white",accent:"rgba(255,255,255, 0.125)"}}};t.default=a},157:function(e,t,n){"use strict";n.r(t);var a=n.p+"dots@64e92568b4db6618fbbf7e3c6ef6d45a.png",o=n.p+"facebook-light@d5b260428934b00b6cf17f20131b2e00.png",i=n.p+"facebook-dark@ba538f47aa4b8d12098739cc692e7f2b.png",r=n.p+"hamburger-light@847bac10d228bb6e83d80c0fd9d6c57d.png",l=n.p+"hamburger-dark@64862f6829b581c2f4b34bafe2a49356.png",u=n.p+"insta-light@75e9ce10f04539676c60f329d603f2e1.png",c=n.p+"insta-dark@61f0ed47be76e3432dc4d1632558d66b.png",s=n.p+"nut-light@b0cf71e5bfed6d25821cb4198f843b4f.png",d=n.p+"nut-dark@d35f3ae9e1b72afe956cdb9e31d5b69b.png",f=n.p+"twitter-light@6da784944e1b665a29ad4bb49722b35b.png",m=n.p+"twitter-dark@f8eab05848d8fb835c1c861c073465fc.png",h=n.p+"vimeo-light@37d58422b00a01cfef17e813c0af319e.png",p=n.p+"vimeo-dark@2c1c03d27e6e5e8f910977c17fa9eb17.png",g=n.p+"x-dark@c36d095477451feb034ec5d0baae4749.png",_=n.p+"x-light@010b4a82d44080ea4c553c56927440bc.png";n.d(t,"light",(function(){return b})),n.d(t,"dark",(function(){return y}));const b={dots:a,facebook:o,hamburger:r,insta:u,nut:s,twitter:f,vimeo:h,x:_},y={dots:a,facebook:i,hamburger:l,insta:c,nut:d,twitter:m,vimeo:p,x:g}},16:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),r=a(n(1)),l=o(n(63)),u=r.default(r.withTheme(e=>{const{page:t,children:n,setThemeType:a,theme:o,...r}=e;return i.useEffect(()=>{o.name!==t.theme&&a(t.theme)},[o.name]),i.default.createElement("div",Object.assign({},r),n,t.flags&&t.flags.socialMediaLinks?i.default.createElement(l.default,null):null)})).withConfig({displayName:"Page",componentId:"sc-muy6bp"})`
    display: flex;
    flex-direction: column;
    
    align-items: center;

    flex: 1 1 auto;
    box-sizing: border-box;
    overflow-x: hidden;

    > div {

    }
`;t.default=u},25:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(56));t.PageDataProvider=o.default,t.PageDataContext=o.PageDataContext,t.default=o.default},26:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(1)).default.span.withConfig({displayName:"Icon",componentId:"sc-7evtvm"})`

    display: inline-block;
    width: 1.25em;
    height: 1em;

    flex: 0 0 auto;

    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${e=>e.image});
`;t.default=o},27:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(64));t.FileContent=o.default;const i=a(n(28));t.TextContent=i.default;const r=a(n(146));t.VimeoContent=r.default},28:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),r=o(n(1)),l=o(n(29)),u=n(13),c=r.default(e=>{const{content:t,...n}=e;return i.default.createElement("div",Object.assign({},n),t.text.split("\n").map((e,t,n)=>i.default.createElement(i.Fragment,{key:t},i.default.createElement(l.default,null,e),t===n.length-1?null:i.default.createElement("br",null))))}).withConfig({displayName:"TextContent",componentId:"sc-8w99vp"})`

    ${u.content}

    padding: 1em;
`;t.default=c},29:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(0)),i=a(n(66)),r=a(n(1)).default(e=>{const{children:t,...n}=e;return o.default.createElement(i.default,Object.assign({source:t},n))}).withConfig({displayName:"Markdown",componentId:"sc-wm60hn"})`

    font-size: 2em;

    h1, h2, h3, h4, h5, h6, p, ul {
        margin: 0;
    }

    h1:first-child {
        font-size: 4em;
    }

    a {
        color: inherit;
    }

`;t.default=r},42:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0}),n(43);const o=n(157),i=n(6);function r(){try{const e=document.getElementById("global-mechanic-ssr"),t=e&&e.innerText;return t&&JSON.parse(t)||[]}catch(e){return i.IS_DEV&&console.error("could not parse json tag",e),[]}}window.onload=async function(){const e=await Promise.resolve().then(()=>a(n(0))),{hydrate:t}=await Promise.resolve().then(()=>a(n(45))),{BrowserRouter:i}=await Promise.resolve().then(()=>a(n(14))),{default:l}=await Promise.resolve().then(()=>a(n(54)));t(e.createElement(i,null,e.createElement(l,{initialPageData:r(),lightStaticAssets:o.light,darkStaticAssets:o.dark})),document.getElementById("global-mechanic-www"))}},54:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(55));t.default=o.default},55:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),r=n(1),l=o(n(25)),u=o(n(60)),c=o(n(152)),s=o(n(153)),d=o(n(154)),f=o(n(156)),m=o(n(10));t.default=e=>{const{initialPageData:t,lightStaticAssets:n,darkStaticAssets:a}=e,o=t.map(e=>e.theme).find(e=>e)||"light",[h,p]=i.useState(o),g=f.default[h],_="dark"===h?n:a;return i.default.createElement(l.default,{initialPageData:t},i.default.createElement(m.default.Provider,{value:_},i.default.createElement(r.ThemeProvider,{theme:g},i.default.createElement(c.default,null),i.default.createElement(s.default,null,i.default.createElement(d.default,{navIconTo:"/menu"}),i.default.createElement(u.default,{setThemeType:p})))))}},56:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),r=o(n(57)),l=i.createContext([]);t.PageDataContext=l;t.default=e=>{const{initialPageData:t=[],children:n}=e,[a,o]=i.useState(t);return i.useEffect(()=>{r.default().then(o)},[]),i.default.createElement(l.Provider,{value:a},n)}},57:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(58)),i=n(6);t.default=async function(){const e=await o.default(`${i.HOST}/data`);return await e.json()}},6:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});t.IS_DEV=!1;const n="undefined"==typeof window?"":origin;t.HOST=n,t.default=n}).call(this,n(9))},60:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),r=n(14),l=n(25),u=n(61),c=o(n(151)),s=e=>{const{setThemeType:t}=e,n=i.useContext(l.PageDataContext).find(e=>!e.path);return n?i.default.createElement(u.SplashPage,{page:n,setThemeType:t}):i.default.createElement("span",null,"LOADING")},d=e=>{const{setThemeType:t}=e,n=(()=>{const e=r.useLocation().pathname.split("/").filter(e=>!!e);return e[e.length-1]})(),a=c.default(n),o=i.useContext(l.PageDataContext),s=o.find(a);return s?"content"===s.type?i.default.createElement(u.ContentPage,{page:s,setThemeType:t}):i.default.createElement(u.MenuPage,{page:s,pages:o,setThemeType:t}):i.default.createElement(u.MissingPage,null)};t.default=e=>i.default.createElement(r.Switch,null,i.default.createElement(r.Route,{path:"/",exact:!0},i.default.createElement(s,Object.assign({},e))),i.default.createElement(r.Route,{path:"/*"},i.default.createElement(d,Object.assign({},e))))},61:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(62));t.SplashPage=o.default;const i=a(n(148));t.ContentPage=i.default;const r=a(n(149));t.MenuPage=r.default;const l=a(n(150));t.MissingPage=l.default},62:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),r=o(n(1)),l=a(n(16)),u=n(27),c=n(10),s=r.css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: -100;
`,d=r.default.span.withConfig({displayName:"BackgroundOverlay",componentId:"sc-9d82kl"})`
    ${s}
    background-image: url(${e=>e.staticImage});
`,f=r.default(u.FileContent).withConfig({displayName:"BackgroundVideoContent",componentId:"sc-1xmotu4"})`
    ${s}

    video {
        position: inherit;

        top: 50%;
        left: 50%;

        min-width: 100%;
        min-height: 100%;

        width: auto;
        height: auto;

        opacity: 0.75;

        transform: translate(-50%, -50%);
    }

    background-color: ${e=>e.theme.colors.fg};
`,m=r.default.h1.withConfig({displayName:"BackgroundText",componentId:"sc-1vhdl66"})`
    color: transparent;
    margin: 0;

    font-size: 45vmin;
    
    overflow: hidden;
    max-width: 100vw;

    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${e=>e.theme.colors.bg};
`,h=r.default(e=>{const{page:t,...n}=e,a=c.useStaticAssets(),o=t.contents.find(e=>"text"===e.type),r=t.contents.find(e=>"file"===e.type);return i.default.createElement(l.default,Object.assign({page:t},n),r?i.default.createElement(f,{content:r,description:null}):null,i.default.createElement(d,{staticImage:a.dots}),o?i.default.createElement(m,null,o.text):null)}).withConfig({displayName:"SplashPage",componentId:"sc-1louq4"})`
    ${s};
    
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    margin: auto;
`;t.default=h},63:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(0)),i=a(n(1)),r=a(n(26)),l=n(10),u=i.default(e=>{const{to:t,...n}=e;return o.default.createElement(r.default,Object.assign({as:"a",href:t,target:"_blank"},n))}).withConfig({displayName:"SocialMediaLink",componentId:"sc-1p2h2mh"})`
    font-size: 1.5em;
    margin-left: 0.125em;
`,c=i.default(e=>{const t=l.useStaticAssets();return o.default.createElement("div",Object.assign({},e),o.default.createElement(u,{image:t.insta,to:"https://www.instagram.com/globalmechanic/?hl=en"}),o.default.createElement(u,{image:t.facebook,to:"https://www.facebook.com/GlobalMechanicMedia/"}),o.default.createElement(u,{image:t.vimeo,to:"https://vimeo.com/globalmechanicmedia"}),o.default.createElement(u,{image:t.twitter,to:"https://twitter.com/globalmechanic?lang=en"}))}).withConfig({displayName:"SocialMediaLinks",componentId:"sc-o5eifv"})`

    display: flex;
    position: fixed;
    bottom: 1em;
    left: 1em;
    
    align-items: baseline;
`;t.default=c},64:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),r=o(n(1)),l=o(n(65)),u=o(n(6)),c=o(n(28)),s=n(13),d={video:r.default(e=>{const{content:t,meta:n,...a}=e;return i.default.createElement("video",Object.assign({muted:!0,autoPlay:!0,loop:!0},a),i.default.createElement("source",{src:`${u.default}/file/${t.file}`,type:n.mime}))}).withConfig({displayName:"Video",componentId:"sc-ut04jo"})`
    width: 100%; 
`,image:r.default(e=>{const{content:t,meta:n,...a}=e,o=`${u.default}/file/${t.file}`;return i.default.createElement("img",Object.assign({src:o},a))}).withConfig({displayName:"Image",componentId:"sc-1dl6hrz"})`

    margin: auto;

    max-width: 100%;
    max-height: 100%;
    margin-bottom: -0.1em;
`,download:r.default(e=>{const{meta:t,content:n,...a}=e;return i.default.createElement("a",Object.assign({target:"_blank",rel:"noopener noreferrer",href:`${u.default}/file/${n.file}?download=${t.name+t.ext}`},a),"↓ ",t.name+t.ext)}).withConfig({displayName:"Download",componentId:"sc-1oms75h"})`
    background-color: ${e=>e.theme.colors.accent};

    font-size: 2em;
    font-family: monospace;
    
    color: inherit;
    
    padding: 0.25em;
    text-decoration: none;

    display: block;
    box-sizing: border-box;
    width: 100%;
    text-align: right;
`,markdown:r.default(e=>{const t=(e=>{const[t,n]=i.useState("");return i.useEffect(()=>{if(e){const t=`${u.default}/file/${e}`;fetch(t).then(e=>e.text()).then(n)}else t&&n("")}),t})(e.content.file);return i.default.createElement(c.default,{content:{type:"text",text:t}})}).withConfig({displayName:"Markdown",componentId:"sc-voml8d"})`
    background-color: transparent;
`},f=r.default(e=>{const{description:t=c.default,content:n,...a}=e,o=(e=>{const[t,n]=i.useState(null);return i.useEffect(()=>{e?l.default(e).then(n):t&&n(null)},[e]),t})(n.file),r=o&&o.description,u=o&&d[(e=>{const{mime:t,ext:n}=e;return"md"===n||".md"===n?"markdown":t.includes("video")?"video":t.includes("image")?"image":"download"})(o)];return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",Object.assign({},a),o&&u?i.default.createElement(u,{content:n,meta:o}):null),t&&r?i.default.createElement(t,{content:{type:"text",text:r}}):null)}).withConfig({displayName:"FileContent",componentId:"sc-11h9ib8"})`
    ${s.content}
    display: flex;
`;t.default=f},65:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(6));t.default=async function(e){const t=`${o.default}/file/${e}-meta`;try{const e=await fetch(t);let n=await e.json();return n=JSON.parse(n),n}catch(e){return null}}}});