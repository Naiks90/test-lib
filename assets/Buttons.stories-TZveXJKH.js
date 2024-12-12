import{f as h}from"./index-B5ZI-g0m.js";import{u as d,d as v,k as z,v as w,s as x,g as l}from"./vue.esm-bundler-CdLs5YeB.js";import{L as E}from"./Loader-CFWjQzPz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k=["disabled"],t={__name:"Button",props:{loading:Boolean,disabled:Boolean,size:{type:String,validator:function(e){return["lg","md","sm"].indexOf(e)!==-1}},type:{type:String,validator:function(e){return["primary","secondary","red","gray","tag","filters","secondary-outlined","green","border-red","border-green"].indexOf(e)!==-1}},loaderSize:{type:Number,default:32},colorStart:{type:String,default:"#ddd"},colorEnd:{type:String,default:"#333"}},setup(e){const s=e,B=d(()=>({lg:"btn-lg",md:"btn-md",sm:"btn-sm"})[s.size]??""),S=d(()=>s.type?{primary:"btn-primary",secondary:"btn-secondary",red:"btn-red",gray:"btn-gray",tag:"btn-tag",filters:"btn-filters","secondary-outlined":"btn-secondary-outlined",green:"btn-green","border-red":"btn-border-red","border-green":"btn-border-green"}[s.type]??"":"btn");return(n,T)=>(l(),v("button",x(n.$attrs,{class:[B.value,S.value],disabled:e.loading||e.disabled}),[e.loading?(l(),z(E,{key:0,width:7,size:e.loaderSize,radius:8,colorStart:e.colorStart,colorEnd:e.colorEnd},null,8,["size","colorStart","colorEnd"])):w(n.$slots,"default",{key:1})],16,k))}};t.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"loading",type:{name:"boolean"}},{name:"disabled",type:{name:"boolean"}},{name:"size",type:{name:"string"},values:["lg","md","sm"]},{name:"type",type:{name:"string"},values:["primary","secondary","red","gray","tag","filters","secondary-outlined","green","border-red","border-green"]},{name:"loaderSize",type:{name:"number"},defaultValue:{func:!1,value:"32"}},{name:"colorStart",type:{name:"string"},defaultValue:{func:!1,value:"'#ddd'"}},{name:"colorEnd",type:{name:"string"},defaultValue:{func:!1,value:"'#333'"}}],slots:[{name:"default"}],sourceFiles:["/home/sasha/Документи/dron/del/lib/src/components/Button.vue"]};const O={title:"Example/Button",component:t,tags:["autodocs"],argTypes:{loading:{control:"boolean"},disabled:{control:"boolean"},loaderSize:{control:"number"},colorStart:{control:"color"},colorEnd:{control:"color"},size:{control:{type:"select"},options:["lg","md","sm"]},type:{control:{type:"select"},options:["primary","secondary","red","gray","tag","filters","secondary-outlined","green","border-red","border-green"]}},args:{onClick:h()}},r={render:e=>({components:{Button:t},setup(){return{args:e}},template:'<Button v-bind="args" style="width:156px">Send Request</Button>'}),args:{size:"lg",type:"primary"}},o={render:e=>({components:{Button:t},setup(){return{args:e}},template:'<Button v-bind="args" style="width:156px">This is a button</Button>'}),args:{size:"lg",type:"primary",loading:!0}},a={render:e=>({components:{Button:t},setup(){return{args:e}},template:'<Button v-bind="args" style="width:156px">This is a button</Button>'}),args:{size:"lg",type:"secondary"}};var i,c,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Button v-bind="args" style="width:156px">Send Request</Button>\`
  }),
  args: {
    size: 'lg',
    type: 'primary'
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,p,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Button v-bind="args" style="width:156px">This is a button</Button>\`
  }),
  args: {
    size: 'lg',
    type: 'primary',
    loading: true
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,b,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Button v-bind="args" style="width:156px">This is a button</Button>\`
  }),
  args: {
    size: 'lg',
    type: 'secondary'
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const V=["Primary","PrimaryLoading","Secondary"];export{r as Primary,o as PrimaryLoading,a as Secondary,V as __namedExportsOrder,O as default};
