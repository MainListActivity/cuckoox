import{K as D,L as N,M as T,r as f,N as I,z as r,d as B,o as P,u as _,O as q,t as C,v as z,A as u,x as h,P as J,Q as m,B as b,y as M,J as U,R as S,S as E,T as L,U as k}from"./DlhO2sqe.js";import{c as O,f as A,V as x,u as F,S as K}from"./CwWfAZVD.js";import{m as Q,c as W,V as $,a as j,b as R}from"./DTUbGaeS.js";import{V as G}from"./wuvDgO2j.js";const H=O("v-code","code"),Y=D({...N(),...Q()},"VForm"),X=T()({name:"VForm",props:Y(),emits:{"update:modelValue":c=>!0,submit:c=>!0},setup(c,v){let{slots:i,emit:p}=v;const d=W(c),g=f();function w(o){o.preventDefault(),d.reset()}function y(o){const s=o,a=d.validate();s.then=a.then.bind(a),s.catch=a.catch.bind(a),s.finally=a.finally.bind(a),p("submit",s),s.defaultPrevented||a.then(V=>{var e;let{valid:t}=V;t&&((e=g.value)==null||e.submit())}),s.preventDefault()}return I(()=>{var o;return r("form",{ref:g,class:["v-form",c.class],style:c.style,novalidate:!0,onReset:w,onSubmit:y},[(o=i.default)==null?void 0:o.call(i,d)])}),A(d,g)}}),Z={class:"w-100 h-100 d-flex justify-center align-center"},ne=B({__name:"signin",setup(c){P(()=>{});const v=f(""),i=f({img:"http://mmbiz.qpic.cn/mmbiz_jpg/GM04hicnQSqv2ICDKicic6N4aTfTpTIo1oLC2iadTvbCEfDwFnDYwDOlyfCDQJE2LJAwt3iaNPwRpJ0OCWicb7KdaR5w/0",loginId:"",loginType:"text"}),p=f(!1),d=_(),g=q(),w=async()=>{const t=new EventSource("https://api.cuckoox.cn/wx/signin");p.value=!0,t.onmessage=async e=>{if(e.data.startsWith("token:"))await y(e.data.substring(6)),t.close();else if(e.data.startsWith("loginForm:")){const n=JSON.parse(e.data.substring(10));i.value={...n,img:"https://m.wbiao.cn/mallapi/wechat/picReverseUrl?url="+n.img}}else t.close()},t.onerror=e=>{t.close()}},y=async t=>{k().value={token:t};const e=await F().value;if(e){let n=await e.query("select * from $token");n[0][0]||(await e.authenticate(t),n=await e.query("select * from $token"));const l=await e.select(new K(n[0][0].ID))||{userName:n[0][0].ID,avatar:"admin"};l.token=t,k().value=l,o()}};async function o(t){d.push({path:"/"})}const s=f(""),a=f(""),V=async()=>{k().value={namespace:"test",database:"test",auth:{username:s.value,password:a.value}},await F().value&&(p.value=!0,o())};return(t,e)=>(C(),z("div",Z,[r($,{title:"欢迎登录",variant:"tonal",width:"500","min-height":"500"},{default:u(()=>[r(j,null,{default:u(()=>[e[5]||(e[5]=h("p",null,"请输入您的账号密码并点击确定",-1)),r(G,{class:"mx-auto align-center"},{default:u(()=>{var n;return[h("div",{style:J(`background-size: contain;background-position: center;width:100%;height:300px;background-image: url(${(n=m(i))==null?void 0:n.img})`),class:"bg-cover bg-center"},null,4),h("div",null,[e[2]||(e[2]=b("请扫描上方二维码并在输入框中输入 ")),r(H,null,{default:u(()=>{var l;return[b(M((l=m(i))==null?void 0:l.loginId),1)]}),_:1})]),m(g).query.admin?(C(),U(X,{key:0,"fast-fail":"",onSubmit:E(V,["prevent"])},{default:u(()=>[r(R,{modelValue:m(s),"onUpdate:modelValue":e[0]||(e[0]=l=>S(s)?s.value=l:null),label:"用户名"},null,8,["modelValue"]),r(R,{"error-messages":m(v),modelValue:m(a),"onUpdate:modelValue":e[1]||(e[1]=l=>S(a)?a.value=l:null),label:"密码",type:"password"},null,8,["error-messages","modelValue"]),r(x,{class:"mt-2",type:"submit",block:""},{default:u(()=>e[3]||(e[3]=[b("确定")])),_:1})]),_:1})):L("",!0),r(x,{class:"mt-2",onClick:w,block:"",loading:m(p)},{default:u(()=>e[4]||(e[4]=[b("确定")])),_:1},8,["loading"])]}),_:1})]),_:1})]),_:1})]))}});export{ne as default};
//# sourceMappingURL=BCvqABw0.js.map