import{V as s,W as e,X as o,Y as r}from"./entry-7c82b6e4.mjs";class t{constructor(a){this.router=a}async goTo(a){await e({hash:"#"+a.name}),a.goTo()}screenByName(a){return o.find(r,{name:a})}}const i=()=>new t(s());export{i as u};