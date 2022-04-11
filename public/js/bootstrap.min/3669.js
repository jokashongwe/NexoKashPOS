"use strict";(self.webpackChunkNexoPOS_4x=self.webpackChunkNexoPOS_4x||[]).push([[3669],{3669:(s,e,i)=>{i.r(e),i.d(e,{default:()=>d});var t=i(7389),n=i(2277),r=i(7266),a=i(9671);const o={name:"ns-login",props:["token","user"],data:function(){return{fields:[],xXsrfToken:null,validation:new r.Z,isSubitting:!1}},mounted:function(){var s=this;(0,n.D)([a.ih.get("/api/nexopos/v4/fields/ns.new-password"),a.ih.get("/sanctum/csrf-cookie")]).subscribe((function(e){s.fields=s.validation.createFields(e[0]),s.xXsrfToken=a.ih.response.config.headers["X-XSRF-TOKEN"],setTimeout((function(){return a.kq.doAction("ns-login-mounted",s)}),100)}),(function(s){a.kX.error(s.message||(0,t.__)("An unexpected error occured."),(0,t.__)("OK"),{duration:0}).subscribe()}))},methods:{__:t.__,submitNewPassword:function(){var s=this;if(!this.validation.validateFields(this.fields))return a.kX.error((0,t.__)("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(this.fields),a.kq.applyFilters("ns-new-password-submit",!0)&&(this.isSubitting=!0,a.ih.post("/auth/new-password/".concat(this.user,"/").concat(this.token),this.validation.getValue(this.fields),{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe((function(s){a.kX.success(s.message).subscribe(),setTimeout((function(){document.location=s.data.redirectTo}),500)}),(function(e){s.isSubitting=!1,s.validation.enableFields(s.fields),e.data&&s.validation.triggerFieldsErrors(s.fields,e.data),a.kX.error(e.message).subscribe()})))}}};const d=(0,i(1900).Z)(o,(function(){var s=this,e=s.$createElement,i=s._self._c||e;return i("div",{staticClass:"bg-white rounded shadow overflow-hidden transition-all duration-100"},[i("div",{staticClass:"p-3 -my-2"},[s.fields.length>0?i("div",{staticClass:"py-2 fade-in-entrance anim-duration-300"},s._l(s.fields,(function(s,e){return i("ns-field",{key:e,attrs:{field:s}})})),1):s._e()]),s._v(" "),0===s.fields.length?i("div",{staticClass:"flex items-center justify-center py-10"},[i("ns-spinner",{attrs:{border:"4",size:"16"}})],1):s._e(),s._v(" "),i("div",{staticClass:"flex justify-between items-center bg-gray-200 p-3"},[i("div",[i("ns-button",{staticClass:"justify-between",attrs:{type:"info"},on:{click:function(e){return s.submitNewPassword()}}},[s.isSubitting?i("ns-spinner",{staticClass:"mr-2",attrs:{size:"6",border:"2"}}):s._e(),s._v(" "),i("span",[s._v(s._s(s.__("Save Password")))])],1)],1),s._v(" "),i("div")])])}),[],!1,null,null,null).exports}}]);