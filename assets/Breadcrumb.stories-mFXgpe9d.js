import{d as r,F as l,f as d,g as e,k as p,l as _,m as f,t as g,j as h,p as k,e as y,q as b}from"./vue.esm-bundler-CdLs5YeB.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";const u={props:{items:Array,linkComponent:{type:[String,Object],default:"a"}}},B={class:"breadcrumb"},v={key:0,xmlns:"http://www.w3.org/2000/svg",width:"17",height:"16",viewBox:"0 0 17 16",fill:"none"};function w(N,n,t,j,V,E){return e(),r("div",B,[(e(!0),r(l,null,d(t.items,(o,s)=>(e(),r(l,{key:s},[(e(),p(k(t.linkComponent),{href:o.url,class:h(["breadcrumb__link",{active:s===t.items.length-1}])},{default:_(()=>[f(g(o.title),1)]),_:2},1032,["href","class"])),s<t.items.length-1?(e(),r("svg",v,n[0]||(n[0]=[y("path",{d:"M6.76465 12L10.7646 8L6.76465 4",stroke:"#686868","stroke-width":"1.33333","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))):b("",!0)],64))),128))])}const x=C(u,[["render",w]]);u.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"items",type:{name:"array"}},{name:"linkComponent",type:{name:"string|object"},defaultValue:{func:!1,value:"'a'"}}],sourceFiles:["/home/sasha/Документи/dron/del/lib/src/components/Breadcrumb.vue"]};const S={title:"Example/Breadcrumb",component:x,tags:["autodocs"],argTypes:{}},a={args:{items:[{title:"Home",url:"#"},{title:"Child",url:"#"},{title:"Current",url:"#"}]}};var i,m,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Home',
      url: '#'
    }, {
      title: 'Child',
      url: '#'
    }, {
      title: 'Current',
      url: '#'
    }]
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const D=["Primary"];export{a as Primary,D as __namedExportsOrder,S as default};
