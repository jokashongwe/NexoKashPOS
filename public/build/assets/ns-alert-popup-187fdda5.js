import{_ as c}from"./lang-643e0c49.js";import{_ as l}from"./_plugin-vue_export-helper-c27b6911.js";import{o as a,c as p,a as o,t as n,e as u,f as m,w as f,y as d,r as _,h}from"./runtime-core.esm-bundler-a9e64527.js";const x={data(){return{title:"",message:""}},computed:{size(){return this.$popupParams.size||"h-full w-full"}},mounted(){this.title=this.$popupParams.title,this.message=this.$popupParams.message,this.$popup.event.subscribe(e=>{e.event==="click-overlay"&&(this.$popupParams.onAction!==void 0&&this.$popupParams.onAction(!1),this.$popup.close())})},methods:{__:c,emitAction(e){this.$popupParams.onAction!==void 0&&this.$popupParams.onAction(e),this.$popup.close()}}},y={class:"flex items-center justify-center flex-col flex-auto p-4"},$={key:0,class:"text-3xl font-body"},v={class:"py-4 text-center"},P={class:"action-buttons flex border-t justify-end items-center p-2"};function b(e,i,g,w,t,s){const r=_("ns-button");return a(),p("div",{id:"alert-popup",class:d([s.size,"w-6/7-screen md:w-4/7-screen lg:w-3/7-screen flex flex-col shadow-lg"])},[o("div",y,[t.title?(a(),p("h2",$,n(t.title),1)):u("",!0),o("p",v,n(t.message),1)]),o("div",P,[m(r,{onClick:i[0]||(i[0]=A=>s.emitAction(!0)),type:"info"},{default:f(()=>[h(n(s.__("Ok")),1)]),_:1})])],2)}const N=l(x,[["render",b]]);export{N as default};