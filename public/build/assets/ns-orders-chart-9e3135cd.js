import{_ as c,n as x,a as p}from"./currency-dc6217f5.js";import{V as u}from"./npm~vue3-apexcharts-7a9102da.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";import{an as d,af as h,G as f,H as t,c as b,z as k,A as y}from"./npm~@vue~runtime-core_-0a26b3ab.js";import{V as l}from"./npm~@vue~shared_-5bb087a6.js";import"./npm~numeral-304d6dd9.js";import"./npm~@ckeditor~ckeditor5-build-classic_-b5d88964.js";import"./npm~currency.js-57f74176.js";import"./npm~vue-0182d78b.js";import"./npm~@vue~runtime-dom_-2c8e0ca9.js";import"./npm~@vue~reactivity_-26e9e2f4.js";import"./npm~@vue~compiler-dom_-ce2c1e21.js";import"./npm~@vue~compiler-core_-745c8708.js";import"./npm~apexcharts-ecf800c7.js";const v={name:"ns-orders-chart",data(){return{totalWeeklySales:0,totalWeekTaxes:0,totalWeekExpenses:0,totalWeekIncome:0,chartOptions:{theme:{mode:window.ns.theme},chart:{id:"vuechart-example",width:"100%",height:"100%"},stroke:{curve:"smooth",dashArray:[0,8]},xaxis:{categories:[]},colors:["#5f83f3","#AAA"]},series:[{name:c("Current Week"),data:[]},{name:c("Previous Week"),data:[]}],reportSubscription:null,report:null}},components:{VueApexCharts:u},methods:{__:c,nsCurrency:x,nsRawCurrency:p},mounted(){this.reportSubscription=Dashboard.weeksSummary.subscribe(n=>{n.result!==void 0&&(this.chartOptions.xaxis.categories=n.result.map(s=>s.label),this.report=n,this.totalWeeklySales=0,this.totalWeekIncome=0,this.totalWeekExpenses=0,this.totalWeekTaxes=0,this.report.result.forEach((s,i)=>{if(s.current!==void 0){const a=s.current.entries.map(e=>e.day_paid_orders);let o=0;a.length>0&&(o=a.reduce((e,r)=>e+r)),this.totalWeekExpenses+=s.current.entries.map(e=>parseFloat(e.day_expenses)).reduce((e,r)=>e+r),this.totalWeekTaxes+=s.current.entries.map(e=>parseFloat(e.day_taxes)).reduce((e,r)=>e+r),this.totalWeekIncome+=s.current.entries.map(e=>parseFloat(e.day_income)).reduce((e,r)=>e+r),this.series[0].data.push(o)}else this.series[0].data.push(0);if(s.previous!==void 0){const a=s.previous.entries.map(e=>e.day_paid_orders);let o=0;a.length>0&&(o=a.reduce((e,r)=>e+r)),this.series[1].data.push(o)}else this.series[1].data.push(0)}),this.totalWeeklySales=this.series[0].data.reduce((s,i)=>s+i))})}},w={id:"ns-orders-chart",class:"flex flex-auto flex-col shadow ns-box rounded-lg overflow-hidden"},g={class:"p-2 flex ns-box-header items-center justify-between border-b"},W={class:"font-semibold"},C={class:"head flex-auto flex h-56"},S={class:"w-full h-full pt-2"},E={class:"foot p-2 -mx-4 flex flex-wrap"},A={class:"flex w-full lg:w-full border-b lg:border-t lg:py-1 lg:my-1"},V={class:"px-4 w-1/2 lg:w-1/2 flex flex-col items-center justify-center"},j={class:"text-xs"},I={class:"text-lg xl:text-xl font-bold"},O={class:"px-4 w-1/2 lg:w-1/2 flex flex-col items-center justify-center"},T={class:"text-xs"},B={class:"text-lg xl:text-xl font-bold"},N={class:"flex w-full lg:w-full"},F={class:"px-4 w-full lg:w-1/2 flex flex-col items-center justify-center"},R={class:"text-xs"},D={class:"text-lg xl:text-xl font-bold"},z={class:"px-4 w-full lg:w-1/2 flex flex-col items-center justify-center"},G={class:"text-xs"},H={class:"text-lg xl:text-xl font-bold"};function P(n,s,i,a,o,e){const r=d("ns-close-button"),_=d("vue-apex-charts");return h(),f("div",w,[t("div",g,[t("h3",W,l(e.__("Recents Orders")),1),t("div",null,[b(r,{onClick:s[0]||(s[0]=q=>n.$emit("onRemove"))})])]),t("div",C,[t("div",S,[o.report?(h(),k(_,{key:0,height:"100%",type:"area",options:o.chartOptions,series:o.series},null,8,["options","series"])):y("",!0)])]),t("div",E,[t("div",A,[t("div",V,[t("span",j,l(e.__("Weekly Sales")),1),t("h2",I,l(e.nsCurrency(o.totalWeeklySales,"abbreviate")),1)]),t("div",O,[t("span",T,l(e.__("Week Taxes")),1),t("h2",B,l(e.nsCurrency(o.totalWeekTaxes,"abbreviate")),1)])]),t("div",N,[t("div",F,[t("span",R,l(e.__("Net Income")),1),t("h2",D,l(e.nsCurrency(o.totalWeekIncome,"abbreviate")),1)]),t("div",z,[t("span",G,l(e.__("Week Expenses")),1),t("h2",H,l(e.nsCurrency(o.totalWeekExpenses,"abbreviate")),1)])])])])}const re=m(v,[["render",P]]);export{re as default};