import{a as r,g as U,c as G,r as z,b as J,h,T as Y,N as Z,A,l as p,O as D,H as ee,I as te}from"./index-JEwjvj96.js";import{u as ne,d as ae,Q as N,b as ue,i as le,R as re}from"./Ripple-Tz9AO0sx.js";const X={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},ie=Object.keys(X),oe={align:{type:String,validator:e=>ie.includes(e)}};function se(e){return r(()=>{const u=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${X[u]}`})}function ce(e){return e.appContext.config.globalProperties.$router!==void 0}function H(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function V(e,u){return(e.aliasOf||e)===(u.aliasOf||u)}function de(e,u){for(const s in u){const n=u[s],c=e[s];if(typeof n=="string"){if(n!==c)return!1}else if(Array.isArray(c)===!1||c.length!==n.length||n.some((q,C)=>q!==c[C]))return!1}return!0}function F(e,u){return Array.isArray(u)===!0?e.length===u.length&&e.every((s,n)=>s===u[n]):e.length===1&&e[0]===u}function ve(e,u){return Array.isArray(e)===!0?F(e,u):Array.isArray(u)===!0?F(u,e):e===u}function fe(e,u){if(Object.keys(e).length!==Object.keys(u).length)return!1;for(const s in e)if(ve(e[s],u[s])===!1)return!1;return!0}const ge={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean};function be({fallbackTag:e,useDisableForRouterLinkProps:u=!0}={}){const s=U(),{props:n,proxy:c,emit:q}=s,C=ce(s),x=r(()=>n.disable!==!0&&n.href!==void 0),w=u===!0?r(()=>C===!0&&n.disable!==!0&&x.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):r(()=>C===!0&&x.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),m=r(()=>w.value===!0?j(n.to):null),d=r(()=>m.value!==null),B=r(()=>x.value===!0||d.value===!0),a=r(()=>n.type==="a"||B.value===!0?"a":n.tag||e||"div"),R=r(()=>x.value===!0?{href:n.href,target:n.target}:d.value===!0?{href:m.value.href,target:n.target}:{}),v=r(()=>{if(d.value===!1)return-1;const{matched:i}=m.value,{length:f}=i,y=i[f-1];if(y===void 0)return-1;const E=c.$route.matched;if(E.length===0)return-1;const P=E.findIndex(V.bind(null,y));if(P!==-1)return P;const K=H(i[f-2]);return f>1&&H(y)===K&&E[E.length-1].path!==K?E.findIndex(V.bind(null,i[f-2])):P}),L=r(()=>d.value===!0&&v.value!==-1&&de(c.$route.params,m.value.params)),l=r(()=>L.value===!0&&v.value===c.$route.matched.length-1&&fe(c.$route.params,m.value.params)),b=r(()=>d.value===!0?l.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":L.value===!0?` ${n.activeClass}`:"":"");function j(i){try{return c.$router.resolve(i)}catch{}return null}function _(i,{returnRouterError:f,to:y=n.to,replace:E=n.replace}={}){if(n.disable===!0)return i.preventDefault(),Promise.resolve(!1);if(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey||i.button!==void 0&&i.button!==0||n.target==="_blank")return Promise.resolve(!1);i.preventDefault();const P=c.$router[E===!0?"replace":"push"](y);return f===!0?P:P.then(()=>{}).catch(()=>{})}function Q(i){if(d.value===!0){const f=y=>_(i,y);q("click",i,f),i.defaultPrevented!==!0&&f()}else q("click",i)}return{hasRouterLink:d,hasHrefLink:x,hasLink:B,linkTag:a,resolvedLink:m,linkIsActive:L,linkIsExactActive:l,linkClass:b,linkAttrs:R,getLink:j,navigateToRouterLink:_,navigateOnClick:Q}}const W={none:0,xs:4,sm:8,md:16,lg:24,xl:32},he={xs:8,sm:10,md:14,lg:20,xl:24},me=["button","submit","reset"],ye=/[^\s]\/[^\s]/,ke=["flat","outline","push","unelevated"];function qe(e,u){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":u}const xe={...ne,...ge,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...ke.reduce((e,u)=>(e[u]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...oe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},Le={...xe,round:Boolean};function Ee(e){const u=ae(e,he),s=se(e),{hasRouterLink:n,hasLink:c,linkTag:q,linkAttrs:C,navigateOnClick:x}=be({fallbackTag:"button"}),w=r(()=>{const l=e.fab===!1&&e.fabMini===!1?u.value:{};return e.padding!==void 0?Object.assign({},l,{padding:e.padding.split(/\s+/).map(b=>b in W?W[b]+"px":b).join(" "),minWidth:"0",minHeight:"0"}):l}),m=r(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),d=r(()=>e.disable!==!0&&e.loading!==!0),B=r(()=>d.value===!0?e.tabindex||0:-1),a=r(()=>qe(e,"standard")),R=r(()=>{const l={tabindex:B.value};return c.value===!0?Object.assign(l,C.value):me.includes(e.type)===!0&&(l.type=e.type),q.value==="a"?(e.disable===!0?l["aria-disabled"]="true":l.href===void 0&&(l.role="button"),n.value!==!0&&ye.test(e.type)===!0&&(l.type=e.type)):e.disable===!0&&(l.disabled="",l["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(l,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),l}),v=r(()=>{let l;e.color!==void 0?e.flat===!0||e.outline===!0?l=`text-${e.textColor||e.color}`:l=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(l=`text-${e.textColor}`);const b=e.round===!0?"round":`rectangle${m.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${a.value} q-btn--${b}`+(l!==void 0?" "+l:"")+(d.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),L=r(()=>s.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:v,style:w,innerClasses:L,attributes:R,hasLink:c,linkTag:q,navigateOnClick:x,isActionable:d}}const{passiveCapture:g}=p;let S=null,T=null,$=null;const Be=G({name:"QBtn",props:{...Le,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:u,emit:s}){const{proxy:n}=U(),{classes:c,style:q,innerClasses:C,attributes:x,hasLink:w,linkTag:m,navigateOnClick:d,isActionable:B}=Ee(e),a=z(null),R=z(null);let v=null,L,l=null;const b=r(()=>e.label!==void 0&&e.label!==null&&e.label!==""),j=r(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:w.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),_=r(()=>({center:e.round})),Q=r(()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}}),i=r(()=>{if(e.loading===!0)return{onMousedown:M,onTouchstart:M,onClick:M,onKeydown:M,onKeyup:M};if(B.value===!0){const t={onClick:y,onKeydown:E,onMousedown:K};if(n.$q.platform.has.touch===!0){const o=e.onTouchstart!==void 0?"":"Passive";t[`onTouchstart${o}`]=P}return t}return{onClick:A}}),f=r(()=>({ref:a,class:"q-btn q-btn-item non-selectable no-outline "+c.value,style:q.value,...x.value,...i.value}));function y(t){if(a.value!==null){if(t!==void 0){if(t.defaultPrevented===!0)return;const o=document.activeElement;if(e.type==="submit"&&o!==document.body&&a.value.contains(o)===!1&&o.contains(a.value)===!1){t.qAvoidFocus!==!0&&a.value.focus();const I=()=>{document.removeEventListener("keydown",A,!0),document.removeEventListener("keyup",I,g),a.value?.removeEventListener("blur",I,g)};document.addEventListener("keydown",A,!0),document.addEventListener("keyup",I,g),a.value.addEventListener("blur",I,g)}}d(t)}}function E(t){a.value!==null&&(s("keydown",t),D(t,[13,32])===!0&&T!==a.value&&(T!==null&&O(),t.defaultPrevented!==!0&&(t.qAvoidFocus!==!0&&a.value.focus(),T=a.value,a.value.classList.add("q-btn--active"),document.addEventListener("keyup",k,!0),a.value.addEventListener("blur",k,g)),A(t)))}function P(t){a.value!==null&&(s("touchstart",t),t.defaultPrevented!==!0&&(S!==a.value&&(S!==null&&O(),S=a.value,v=t.target,v.addEventListener("touchcancel",k,g),v.addEventListener("touchend",k,g)),L=!0,l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,L=!1},200)))}function K(t){a.value!==null&&(t.qSkipRipple=L===!0,s("mousedown",t),t.defaultPrevented!==!0&&$!==a.value&&($!==null&&O(),$=a.value,a.value.classList.add("q-btn--active"),document.addEventListener("mouseup",k,g)))}function k(t){if(a.value!==null&&!(t?.type==="blur"&&document.activeElement===a.value)){if(t?.type==="keyup"){if(T===a.value&&D(t,[13,32])===!0){const o=new MouseEvent("click",t);o.qKeyEvent=!0,t.defaultPrevented===!0&&ee(o),t.cancelBubble===!0&&te(o),a.value.dispatchEvent(o),A(t),t.qKeyEvent=!0}s("keyup",t)}O()}}function O(t){const o=R.value;t!==!0&&(S===a.value||$===a.value)&&o!==null&&o!==document.activeElement&&(o.setAttribute("tabindex",-1),o.focus()),S===a.value&&(v!==null&&(v.removeEventListener("touchcancel",k,g),v.removeEventListener("touchend",k,g)),S=v=null),$===a.value&&(document.removeEventListener("mouseup",k,g),$=null),T===a.value&&(document.removeEventListener("keyup",k,!0),a.value?.removeEventListener("blur",k,g),T=null),a.value?.classList.remove("q-btn--active")}function M(t){A(t),t.qSkipRipple=!0}return J(()=>{O(!0)}),Object.assign(n,{click:t=>{B.value===!0&&y(t)}}),()=>{let t=[];e.icon!==void 0&&t.push(h(N,{name:e.icon,left:e.stack!==!0&&b.value===!0,role:"img"})),b.value===!0&&t.push(h("span",{class:"block"},[e.label])),t=ue(u.default,t),e.iconRight!==void 0&&e.round===!1&&t.push(h(N,{name:e.iconRight,right:e.stack!==!0&&b.value===!0,role:"img"}));const o=[h("span",{class:"q-focus-helper",ref:R})];return e.loading===!0&&e.percentage!==void 0&&o.push(h("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[h("span",{class:"q-btn__progress-indicator fit block",style:Q.value})])),o.push(h("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+C.value},t)),e.loading!==null&&o.push(h(Y,{name:"q-transition--fade"},()=>e.loading===!0?[h("span",{key:"loading",class:"absolute-full flex flex-center"},u.loading!==void 0?u.loading():[h(le)])]:null)),Z(h(m.value,f.value,o),[[re,j.value,void 0,_.value]])}}});export{Be as Q};
