import{T as c}from"./vue3-date-time-picker.esm.f6c600f4.js";import{u as l,r as m,o as p,c as u,a as f}from"./app.216eec89.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const k={components:{Datepicker:c},props:["placeholder"],data(){return{date:new Date,dark:!0}},methods:{format(e){const o=e.getDate(),t=e.getMonth()+1,a=e.getFullYear();return`Selected date is ${o}/${t}/${a}`}},mounted(){this.dark=l()}},_={class:"demo-wrap"};function h(e,o,t,a,r,n){const s=m("Datepicker");return p(),u("div",_,[f(s,{modelValue:r.date,"onUpdate:modelValue":o[0]||(o[0]=d=>r.date=d),placeholder:t.placeholder,format:n.format,dark:r.dark},null,8,["modelValue","placeholder","format","dark"])])}var v=i(k,[["render",h]]);export{v as default};
