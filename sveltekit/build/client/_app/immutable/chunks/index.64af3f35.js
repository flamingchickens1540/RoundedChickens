var E=Object.defineProperty;var C=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(C(e,typeof t!="symbol"?t+"":t,n),n);import{r as h,n as y,i as b,j,k as A,l as B,f as v,m as I,p as L,q as N,v as P,w as T,x as q}from"./scheduler.682ccc96.js";let $=!1;function D(){$=!0}function H(){$=!1}function M(e,t,n,i){for(;e<t;){const l=e+(t-e>>1);n(l)<=i?e=l+1:t=l}return e}function O(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let s=0;s<t.length;s++){const o=t[s];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let l=0;for(let r=0;r<t.length;r++){const s=t[r].claim_order,o=(l>0&&t[n[l]].claim_order<=s?l+1:M(1,l,d=>t[n[d]].claim_order,s))-1;i[r]=n[o]+1;const c=o+1;n[c]=r,l=Math.max(c,l)}const u=[],a=[];let f=t.length-1;for(let r=n[l]+1;r!=0;r=i[r-1]){for(u.push(t[r-1]);f>=r;f--)a.push(t[f]);f--}for(;f>=0;f--)a.push(t[f]);u.reverse(),a.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<a.length;r++){for(;s<u.length&&a[r].claim_order>=u[s].claim_order;)s++;const o=s<u.length?u[s]:null;e.insertBefore(a[r],o)}}function z(e,t){if($){for(O(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function te(e,t,n){$&&!n?z(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function R(e){e.parentNode&&e.parentNode.removeChild(e)}function ne(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function U(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function ie(){return x(" ")}function re(){return x("")}function se(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function V(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ae(e,t,n){const i=t.toLowerCase();i in e?e[i]=typeof e[i]=="boolean"&&n===""?!0:n:t in e?e[t]=typeof e[t]=="boolean"&&n===""?!0:n:V(e,t,n)}function le(e){return e.dataset.svelteH}function W(e){return Array.from(e.childNodes)}function F(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function S(e,t,n,i,l=!1){F(e);const u=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const f=e[a];if(t(f)){const r=n(f);return r===void 0?e.splice(a,1):e[a]=r,l||(e.claim_info.last_index=a),f}}for(let a=e.claim_info.last_index-1;a>=0;a--){const f=e[a];if(t(f)){const r=n(f);return r===void 0?e.splice(a,1):e[a]=r,l?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,f}}return i()})();return u.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,u}function G(e,t,n,i){return S(e,l=>l.nodeName===t,l=>{const u=[];for(let a=0;a<l.attributes.length;a++){const f=l.attributes[a];n[f.name]||u.push(f.name)}u.forEach(a=>l.removeAttribute(a))},()=>i(t))}function fe(e,t,n){return G(e,t,n,U)}function J(e,t){return S(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function ue(e){return J(e," ")}function ce(e,t){t=""+t,e.data!==t&&(e.data=t)}function oe(e,t){e.value=t??""}function _e(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function de(e,t){return new e(t)}const m=new Set;let _;function me(){_={r:0,c:[],p:_}}function he(){_.r||h(_.c),_=_.p}function K(e,t){e&&e.i&&(m.delete(e),e.i(t))}function $e(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),_.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function pe(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function ye(e){e&&e.c()}function xe(e,t){e&&e.l(t)}function Q(e,t,n){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),v(()=>{const u=e.$$.on_mount.map(P).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...u):h(u),e.$$.on_mount=[]}),l.forEach(v)}function X(e,t){const n=e.$$;n.fragment!==null&&(I(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){e.$$.dirty[0]===-1&&(T.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ge(e,t,n,i,l,u,a=null,f=[-1]){const r=L;N(e);const s=e.$$={fragment:null,ctx:[],props:u,update:y,not_equal:l,bound:b(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:b(),dirty:f,skip_bound:!1,root:t.target||r.$$.root};a&&a(s.root);let o=!1;if(s.ctx=n?n(e,t.props||{},(c,d,...g)=>{const w=g.length?g[0]:d;return s.ctx&&l(s.ctx[c],s.ctx[c]=w)&&(!s.skip_bound&&s.bound[c]&&s.bound[c](w),o&&Y(e,c)),d}):[],s.update(),o=!0,h(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){D();const c=W(t.target);s.fragment&&s.fragment.l(c),c.forEach(R)}else s.fragment&&s.fragment.c();t.intro&&K(e.$$.fragment),Q(e,t.target,t.anchor),H(),j()}N(r)}class we{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){X(this,1),this.$destroy=y}$on(t,n){if(!A(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Z);export{se as A,pe as B,ne as C,oe as D,we as S,te as a,he as b,ue as c,K as d,re as e,R as f,U as g,fe as h,ge as i,W as j,V as k,_e as l,x as m,J as n,ce as o,me as p,de as q,ye as r,ie as s,$e as t,xe as u,Q as v,X as w,z as x,le as y,ae as z};
