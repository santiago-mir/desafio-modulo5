function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=e.parcelRequired5de;null==s&&((s=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var s={id:t,exports:{}};return n[t]=s,e.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequired5de=s),s.register("27Lyk",(function(e,n){var i,s;t(e.exports,"register",(()=>i),(t=>i=t)),t(e.exports,"resolve",(()=>s),(t=>s=t));var o={};i=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},s=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),s.register("60jVI",(function(t,e){t.exports=new URL(s("27Lyk").resolve("9FfCk"),import.meta.url).toString()})),s.register("etGmb",(function(t,e){t.exports=new URL(s("27Lyk").resolve("1Bffm"),import.meta.url).toString()})),s.register("fw6a9",(function(t,e){t.exports=new URL(s("27Lyk").resolve("hJPD1"),import.meta.url).toString()})),s("27Lyk").register(JSON.parse('{"dZpbI":"index.35308c22.js","9FfCk":"piedra.a94a49ea.png","1Bffm":"papel.dae44514.png","hJPD1":"tijera.7788fbe9.png"}'));class o extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const t=document.createElement("button"),e=document.createElement("style");e.innerHTML="\n      .button{\n        height: 87px;\n        min-width: 330px;\n        max-width: 380px;\n        border: 10px solid var(--dark-blue);\n        border-radius: 10px;\n        background-color: var(--blue);\n        color: white;\n        font-family: 'Odibee Sans', cursive;\n        font-size: 45px;\n      }\n    ",this.shadow.appendChild(e),t.classList.add("button"),t.textContent=this.textContent,this.shadow.appendChild(t)}}customElements.define("custom-button",o);class r extends HTMLElement{tag="p";type="title";constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.tag=this.getAttribute("tag")||this.tag,this.type=this.getAttribute("type")||this.type}connectedCallback(){this.render()}render(){const t=document.createElement(this.tag),e=document.createElement("style");e.innerHTML="\n      .title{\n        font-family: 'Roboto Mono', monospace;\n        font-weight: 700;\n        font-size: 80px;\n        line-height: 70px;\n        text-align:center;\n      \n        color: var(--green);\n      }\n\n      .subtitle{\n        font-family: 'Roboto Mono', monospace;\n        font-weight: 500;\n        font-size: 40px;\n        text-align:center;\n       \n      }\n      .paragraph{\n        font-family: 'Odibee Sans', cursive;\n        font-size: 45px;\n        margin: 0;\n      }\n    ",t.textContent=this.textContent,t.classList.add(this.type),this.shadow.appendChild(e),this.shadow.appendChild(t)}}customElements.define("custom-text",r);class a extends HTMLElement{type="piedra";status="active";variant="computer-hand";constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.type=this.getAttribute("type")||"piedra",this.status=this.getAttribute("status")||"inactive",this.variant=this.getAttribute("variant")||""}connectedCallback(){this.render()}getImageURL(t){return[s("60jVI"),s("etGmb"),s("fw6a9")].find((e=>e.includes(t)))}render(){const t=document.createElement("style");t.innerHTML="\n          .imagen{\n            width: 100%;\n            height: 100%;\n            max-width: 180px;\n            max-height: 250px;\n            position: relative;\n            bottom: -30px;\n            \n          }\n          \n          .computer-hand, .user-hand{\n            width: 150px;\n            height: 320px;\n            position:relative;\n            transition: all 1s ease;\n            \n            \n          }\n          \n         .computer-hand{\n            rotate: 180deg;\n            top: -70px;\n            \n         }\n         .user-hand{\n          bottom: -70px;\n         }\n        \n          .active{\n            bottom: -110px;\n            \n          }\n          .active:hover{\n         \n            bottom: -50px;\n            transition: bottom 1s ease-out;\n          }\n          .active:focus{\n            bottom: -10px;\n          }\n          .active:active{\n            bottom: -10px;\n          }\n       \n          \n          \n       \n        \n      ";const e=this.getImageURL(this.type);this.shadow.innerHTML=`\n          <img  class="${this.classList}" src=${e}/>\n      `;const n=this.shadow.querySelector(".imagen");"active"==this.status&&n?.classList.add("active"),"computer-hand"==this.variant?(n?.classList.remove("imagen"),n?.classList.add("computer-hand")):"user-hand"==this.variant&&(n?.classList.remove("imagen"),n?.classList.add("user-hand")),this.shadow.appendChild(t)}}customElements.define("custom-image",a);const d={data:{currentGame:{myPlay:"",computerPlay:""},history:{}},listeners:[],getState(){return this.data},setState(t){this.data=t;for(const t of this.listeners)t()},setMove(t,e){const n=this.getState();n.currentGame={myPlay:t,computerPlay:e},this.setState(n)},whoWins:(t,e)=>t==e?"empate":"tijera"==t&&"papel"==e||"piedra"==t&&"tijera"==e||"papel"==t&&"piedra"==e||!("tijera"==t&&"piedra"==e||"piedra"==t&&"papel"==e||"papel"==t&&"tijera"==e)&&void 0,suscribe(t){this.listeners.push(t)},initHistory(){localStorage.getItem("history")||localStorage.setItem("history",JSON.stringify({user:0,computer:0}))},getHistory:()=>JSON.parse(localStorage.getItem("history")),saveHistory(t,e){const n=this.getHistory();1==this.whoWins(t,e)?n.user=n.user+1:0==this.whoWins(t,e)&&(n.computer=n.computer+1),localStorage.setItem("history",JSON.stringify(n))},clearHistory(){localStorage.setItem("history",JSON.stringify({user:0,computer:0}))}};document.querySelector(".root"),d.initHistory();
//# sourceMappingURL=index.35308c22.js.map