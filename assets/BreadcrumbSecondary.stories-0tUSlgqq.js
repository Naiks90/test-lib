import{d as r,F as c,f as g,g as t,k,l as f,m as h,t as b,s as C,p as B,e as _,q as v}from"./vue.esm-bundler-CdLs5YeB.js";const w={class:"breadcrumb-secondary"},S={key:0,width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u={__name:"BreadcrumbSecondary",props:{items:Array,linkComponent:{type:[String,Object],default:"a"}},setup(e){const p=e,y=a=>p.linkComponent==="a"?{href:a}:{to:a};return(a,o)=>(t(),r("div",w,[(t(!0),r(c,null,g(e.items,(l,s)=>(t(),r(c,{key:s},[(t(),k(B(e.linkComponent),C({ref_for:!0},y(l.url),{class:["breadcrumb-secondary__link",{active:s===e.items.length-1}]}),{default:f(()=>[h(b(l.title),1)]),_:2},1040,["class"])),s<e.items.length-1?(t(),r("svg",S,o[0]||(o[0]=[_("path",{d:"M6 12.5L10 8.5L6 4.5",stroke:"#D0D5DD","stroke-width":"1.33333","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))):v("",!0)],64))),128))]))}};u.__docgenInfo={exportName:"default",displayName:"BreadcrumbSecondary",description:"",tags:{},props:[{name:"items",type:{name:"array"}},{name:"linkComponent",type:{name:"string|object"},defaultValue:{func:!1,value:"'a'"}}],sourceFiles:["/home/sasha/Документи/dron/del/lib/src/components/BreadcrumbSecondary.vue"]};const D={title:"Example/BreadcrumbSecondary",component:u,tags:["autodocs"],argTypes:{}},n={args:{items:[{title:"Home",url:"#"},{title:"Child",url:"#"},{title:"Current",url:"#"}]}};var i,m,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const N=["Primary"];export{n as Primary,N as __namedExportsOrder,D as default};
