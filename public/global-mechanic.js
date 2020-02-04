!function(e){function t(t){for(var a,l,r=t[0],u=t[1],c=t[2],d=0,f=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);for(s&&s(t);f.length;)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={0:0},i=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var s=u;i.push([42,1]),n()}({10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(0),o=a.createContext({});t.StaticAssetContext=o;t.useStaticAssets=()=>a.useContext(o),t.default=o},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(1);t.titleFont=a.css`

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
`},146:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),l=o(n(1)),r=n(13),u=o(n(147)),c=l.default(e=>{const{content:t,...n}=e,a=i.createRef(),o=u.default(16/9,a);return i.default.createElement("div",Object.assign({ref:a,style:o},n),i.default.createElement("iframe",{src:`https://player.vimeo.com/video/${t.vimeoId}`,frameBorder:0,allow:"autoplay; fullscreen",allowFullScreen:!0}))}).withConfig({displayName:"VimeoContent",componentId:"sc-h8kl1f"})`
    ${r.content}

    background-color: ${e=>e.theme.colors.accent};

    iframe {
        width: 100%;
        height: 100%;
    }

`;t.default=c},147:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(0);t.default=(e,t)=>{const[n,o]=a.useState(NaN);return a.useEffect(()=>{const a=()=>{const a=t&&t.current&&t.current.getBoundingClientRect(),i=(a?a.width:0)/e;i!==n&&o(i)};return Number.isNaN(n)&&a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[n]),{height:Number.isNaN(n)?"":n+"px"}}},148:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(0)),i=a(n(1)),l=a(n(17)),r=n(27),u=i.default(e=>{const{page:t,...n}=e;return o.default.createElement(l.default,Object.assign({page:t},n),t.contents.map((e,t)=>"text"===e.type?o.default.createElement(r.TextContent,{key:t,content:e}):"vimeo"===e.type?o.default.createElement(r.VimeoContent,{key:t,content:e}):o.default.createElement(r.FileContent,{key:t,content:e})))}).withConfig({displayName:"ContentPage",componentId:"sc-3iamhq"})`
    align-items: flex-start;
`;t.default=u},149:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(0)),i=a(n(17)),l=n(14),r=a(n(1)),u=a(n(4)),c=a(n(29)),s=r.default.div.withConfig({displayName:"MenuPortrait",componentId:"sc-1a6hth7"})`

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
`,d=r.default(e=>{const{page:t,...n}=e,a=o.default.createElement("h2",{key:t.path},t.name);return o.default.createElement(l.Link,Object.assign({to:"/"+t.path},n),t.portrait?o.default.createElement(s,{portraitId:t.portrait},a):a)}).withConfig({displayName:"MenuLink",componentId:"sc-1k7d9mm"})`
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
`,f=r.default(e=>{const{page:t,pages:n,...a}=e,l=t.pages;return o.default.createElement(i.default,Object.assign({page:t},a),o.default.createElement(o.default.Fragment,null,t.name?o.default.createElement(c.default,null,`# ${t.name}`):null,l.map(e=>{const t=n.find(t=>t._id===e);return t?o.default.createElement(d,{key:t.path,page:t}):null})))}).withConfig({displayName:"MenuPage",componentId:"sc-16mxsot"})`
    font-size: 2.5vmin;
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
`;t.default=o},154:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(0)),i=a(n(1)),l=n(14),r=n(155),u=n(10),c=i.default(e=>{const{navIconTo:t,...n}=e,a=u.useStaticAssets();return o.default.createElement("div",Object.assign({},n),o.default.createElement(l.Link,{to:"/"},o.default.createElement(r.Icon,{image:a.nut}),o.default.createElement("h2",null,"Global Mechanic")))}).withConfig({displayName:"TopBar",componentId:"sc-1w3zwt3"})`

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
`;t.default=c},155:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(26));t.Icon=o.default},156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a={light:{name:"light",colors:{bg:"white",fg:"black",accent:"rgba(0,0,0, 0.125)"}},dark:{name:"dark",colors:{bg:"black",fg:"white",accent:"rgba(255,255,255, 0.125)"}}};t.default=a},157:function(e,t,n){"use strict";n.r(t);var a=n.p+"dots@64e92568b4db6618fbbf7e3c6ef6d45a.png",o=n.p+"facebook-light@d5b260428934b00b6cf17f20131b2e00.png",i=n.p+"facebook-dark@ba538f47aa4b8d12098739cc692e7f2b.png",l=n.p+"hamburger-light@847bac10d228bb6e83d80c0fd9d6c57d.png",r=n.p+"hamburger-dark@64862f6829b581c2f4b34bafe2a49356.png",u=n.p+"insta-light@75e9ce10f04539676c60f329d603f2e1.png",c=n.p+"insta-dark@61f0ed47be76e3432dc4d1632558d66b.png",s=n.p+"nut-light@b0cf71e5bfed6d25821cb4198f843b4f.png",d=n.p+"nut-dark@d35f3ae9e1b72afe956cdb9e31d5b69b.png",f=n.p+"twitter-light@6da784944e1b665a29ad4bb49722b35b.png",m=n.p+"twitter-dark@f8eab05848d8fb835c1c861c073465fc.png",h=n.p+"vimeo-light@37d58422b00a01cfef17e813c0af319e.png",p=n.p+"vimeo-dark@2c1c03d27e6e5e8f910977c17fa9eb17.png",g=n.p+"x-dark@c36d095477451feb034ec5d0baae4749.png",_=n.p+"x-light@010b4a82d44080ea4c553c56927440bc.png";n.d(t,"light",(function(){return b})),n.d(t,"dark",(function(){return y}));const b={dots:a,facebook:o,hamburger:l,insta:u,nut:s,twitter:f,vimeo:h,x:_},y={dots:a,facebook:i,hamburger:r,insta:c,nut:d,twitter:m,vimeo:p,x:g}},16:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(56));t.PageDataProvider=o.default,t.PageDataContext=o.PageDataContext,t.default=o.default},17:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),l=a(n(1)),r=o(n(63)),u=l.default(l.withTheme(e=>{const{page:t,children:n,setThemeType:a,theme:o,...l}=e;return i.useEffect(()=>{o.name!==t.theme&&a(t.theme)},[o.name]),i.default.createElement("div",Object.assign({},l),n,t.flags&&t.flags.socialMediaLinks?i.default.createElement(r.default,null):null)})).withConfig({displayName:"Page",componentId:"sc-muy6bp"})`
    display: flex;
    flex-direction: column;
    
    align-items: center;

    flex: 1 1 auto;
    box-sizing: border-box;
    overflow-x: hidden;

`;t.default=u},26:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(1)).default.span.withConfig({displayName:"Icon",componentId:"sc-7evtvm"})`

    display: inline-block;
    width: 1.25em;
    height: 1em;

    flex: 0 0 auto;

    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${e=>e.image});
`;t.default=o},27:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(64));t.FileContent=o.default;const i=a(n(28));t.TextContent=i.default;const l=a(n(146));t.VimeoContent=l.default},28:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),l=o(n(1)),r=o(n(29)),u=n(13),c=l.default(e=>{const{content:t,...n}=e;return i.default.createElement("div",Object.assign({},n),t.text.split("\n").map((e,t,n)=>i.default.createElement(i.Fragment,{key:t},i.default.createElement(r.default,null,e),t===n.length-1?null:i.default.createElement("br",null))))}).withConfig({displayName:"TextContent",componentId:"sc-8w99vp"})`

    ${u.content}

    padding: 1em;
`;t.default=c},29:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(0)),i=a(n(66)),l=a(n(1)).default(e=>{const{children:t,...n}=e;return o.default.createElement(i.default,Object.assign({source:t},n))}).withConfig({displayName:"Markdown",componentId:"sc-wm60hn"})`

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

`;t.default=l},4:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});t.IS_DEV=!1;const n="undefined"==typeof window?"":origin;t.HOST=n,t.default=n}).call(this,n(9))},42:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0}),n(43);const o=n(157),i=n(4);function l(){try{const e=document.getElementById("global-mechanic-ssr"),t=e&&e.innerText;return t&&JSON.parse(t)||[]}catch(e){return i.IS_DEV&&console.error("could not parse json tag",e),[]}}window.onload=async function(){const e=await Promise.resolve().then(()=>a(n(0))),{hydrate:t}=await Promise.resolve().then(()=>a(n(45))),{BrowserRouter:i}=await Promise.resolve().then(()=>a(n(14))),{default:r}=await Promise.resolve().then(()=>a(n(54)));t(e.createElement(i,null,e.createElement(r,{initialPageData:l(),lightStaticAssets:o.light,darkStaticAssets:o.dark})),document.getElementById("global-mechanic-www"))}},54:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(55));t.default=o.default},55:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),l=n(1),r=o(n(16)),u=o(n(60)),c=o(n(152)),s=o(n(153)),d=o(n(154)),f=o(n(156)),m=o(n(10));t.default=e=>{const{initialPageData:t,lightStaticAssets:n,darkStaticAssets:a}=e,o=t.map(e=>e.theme).find(e=>e)||"light",[h,p]=i.useState(o),g=f.default[h],_="dark"===h?n:a;return i.default.createElement(r.default,{initialPageData:t},i.default.createElement(m.default.Provider,{value:_},i.default.createElement(l.ThemeProvider,{theme:g},i.default.createElement(c.default,null),i.default.createElement(s.default,null,i.default.createElement(d.default,{navIconTo:"/menu"}),i.default.createElement(u.default,{setThemeType:p})))))}},56:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),l=o(n(57)),r=i.createContext([]);t.PageDataContext=r;t.default=e=>{const{initialPageData:t=[],children:n}=e,[a,o]=i.useState(t);return i.useEffect(()=>{l.default().then(o)},[]),i.default.createElement(r.Provider,{value:a},n)}},57:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(58)),i=n(4);t.default=async function(){const e=await o.default(`${i.HOST}/data`);return await e.json()}},60:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),l=n(14),r=n(16),u=n(61),c=o(n(151)),s=e=>{const{setThemeType:t}=e,n=i.useContext(r.PageDataContext).find(e=>!e.path);return n?i.default.createElement(u.SplashPage,{page:n,setThemeType:t}):i.default.createElement("span",null,"LOADING")},d=e=>{const{setThemeType:t}=e,n=(()=>{const e=l.useLocation().pathname.split("/").filter(e=>!!e);return e[e.length-1]})(),a=c.default(n),o=i.useContext(r.PageDataContext),s=o.find(a);return s?"content"===s.type?i.default.createElement(u.ContentPage,{page:s,setThemeType:t}):i.default.createElement(u.MenuPage,{page:s,pages:o,setThemeType:t}):i.default.createElement(u.MissingPage,null)};t.default=e=>i.default.createElement(l.Switch,null,i.default.createElement(l.Route,{path:"/",exact:!0},i.default.createElement(s,Object.assign({},e))),i.default.createElement(l.Route,{path:"/*"},i.default.createElement(d,Object.assign({},e))))},61:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(62));t.SplashPage=o.default;const i=a(n(148));t.ContentPage=i.default;const l=a(n(149));t.MenuPage=l.default;const r=a(n(150));t.MissingPage=r.default},62:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),l=a(n(1)),r=o(n(17)),u=n(16),c=n(10),s=o(n(4)),d=n(27),f=l.css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: -100;
`,m=l.default.span.withConfig({displayName:"BackgroundOverlay",componentId:"sc-9d82kl"})`
    ${f}
    background-image: url(${e=>e.staticImage});
`,h=l.default(e=>{const{fileId:t,...n}=e;return i.default.createElement("div",Object.assign({},n),i.default.createElement("video",{muted:!0,loop:!0,autoPlay:!0},i.default.createElement("source",{src:`${s.default}/file/${t}`})))}).withConfig({displayName:"BackgroundVideo",componentId:"sc-1yz4pi5"})`
    ${f}

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
`,p=l.default.h1.withConfig({displayName:"BackgroundText",componentId:"sc-1vhdl66"})`
    color: transparent;
    margin: 0;

    font-size: 45vmin;
    
    overflow: hidden;
    max-width: 100vw;

    flex: 0 0 auto;

    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${e=>e.theme.colors.bg};
`,g=l.default(e=>{const{page:t,...n}=e,a=c.useStaticAssets(),o=t.contents.find(e=>"text"===e.type),l=t.contents.find(e=>"file"===e.type),s=i.useContext(u.PageDataContext),f=s&&s.find(e=>"about"===e.path),g=f&&f.contents[0];return i.default.createElement(r.default,Object.assign({page:t},n),l?i.default.createElement(h,{fileId:l.file}):null,i.default.createElement(m,{staticImage:a.dots}),o?i.default.createElement(p,null,o.text):null,g?i.default.createElement(d.TextContent,{style:{color:"white",width:"max(50vw, 42em)"},content:g}):null)}).withConfig({displayName:"SplashPage",componentId:"sc-1louq4"})`
    
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    margin: auto;
`;t.default=g},63:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(0)),i=a(n(1)),l=a(n(26)),r=n(10),u=i.default(e=>{const{to:t,...n}=e;return o.default.createElement(l.default,Object.assign({as:"a",href:t,target:"_blank"},n))}).withConfig({displayName:"SocialMediaLink",componentId:"sc-1p2h2mh"})`
    font-size: 1.5em;
    margin-left: 0.125em;
`,c=i.default(e=>{const t=r.useStaticAssets();return o.default.createElement("div",Object.assign({},e),o.default.createElement(u,{image:t.insta,to:"https://www.instagram.com/globalmechanic/?hl=en"}),o.default.createElement(u,{image:t.facebook,to:"https://www.facebook.com/GlobalMechanicMedia/"}),o.default.createElement(u,{image:t.vimeo,to:"https://vimeo.com/globalmechanicmedia"}),o.default.createElement(u,{image:t.twitter,to:"https://twitter.com/globalmechanic?lang=en"}))}).withConfig({displayName:"SocialMediaLinks",componentId:"sc-o5eifv"})`

    display: flex;
    position: fixed;
    bottom: 1em;
    left: 1em;
    
    align-items: baseline;
`;t.default=c},64:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),l=o(n(1)),r=o(n(65)),u=o(n(4)),c=o(n(28)),s=n(13),d={video:l.default(e=>{const{content:t,meta:n,...a}=e;return i.default.createElement("video",Object.assign({controls:!0},a),i.default.createElement("source",{src:`${u.default}/file/${t.file}`,type:n.mime}))}).withConfig({displayName:"Video",componentId:"sc-ut04jo"})`
    width: 100%; 
`,image:l.default(e=>{const{content:t,meta:n,...a}=e,o=`${u.default}/file/${t.file}`;return i.default.createElement("img",Object.assign({src:o},a))}).withConfig({displayName:"Image",componentId:"sc-1dl6hrz"})`

    margin: auto;

    max-width: 100%;
    max-height: 100%;
    margin-bottom: -0.1em;
`,download:l.default(e=>{const{meta:t,content:n,...a}=e;return i.default.createElement("a",Object.assign({target:"_blank",rel:"noopener noreferrer",href:`${u.default}/file/${n.file}?download=${t.name+t.ext}`},a),"↓ ",t.name+t.ext)}).withConfig({displayName:"Download",componentId:"sc-1oms75h"})`
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
`,markdown:l.default(e=>{const t=(e=>{const[t,n]=i.useState("");return i.useEffect(()=>{if(e){const t=`${u.default}/file/${e}`;fetch(t).then(e=>e.text()).then(n)}else t&&n("")}),t})(e.content.file);return i.default.createElement(c.default,{content:{type:"text",text:t}})}).withConfig({displayName:"Markdown",componentId:"sc-voml8d"})`
    background-color: transparent;
`},f=l.default(e=>{const{description:t=c.default,content:n,...a}=e,o=(e=>{const[t,n]=i.useState(null);return i.useEffect(()=>{e?r.default(e).then(n):t&&n(null)},[e]),t})(n.file),l=o&&o.description,u=o&&d[(e=>{const{mime:t,ext:n}=e;return"md"===n||".md"===n?"markdown":t.includes("video")?"video":t.includes("image")?"image":"download"})(o)];return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",Object.assign({},a),o&&u?i.default.createElement(u,{content:n,meta:o}):null),t&&l?i.default.createElement(t,{content:{type:"text",text:l}}):null)}).withConfig({displayName:"FileContent",componentId:"sc-11h9ib8"})`
    ${s.content}
    display: flex;
`;t.default=f},65:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(4));t.default=async function(e){const t=`${o.default}/file/${e}-meta`;try{const e=await fetch(t);let n=await e.json();return n=JSON.parse(n),n}catch(e){return null}}}});