(function(t){function e(e){for(var s,l,r=e[0],u=e[1],c=e[2],d=0,b=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&b.push(a[l][0]),a[l]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);o&&o(e);while(b.length)b.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,r=1;r<i.length;r++){var u=i[r];0!==a[u]&&(s=!1)}s&&(n.splice(e--,1),t=l(l.s=i[0]))}return t}var s={},a={app:0},n=[];function l(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=s,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(i,s,function(e){return t[e]}.bind(null,s));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var o=u;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"047d":function(t,e,i){"use strict";var s=i("1b0b"),a=i.n(s);a.a},"1b0b":function(t,e,i){},2735:function(t,e,i){},"361a":function(t,e,i){},"3a45":function(t,e,i){"use strict";var s=i("a1db"),a=i.n(s);a.a},"4bec":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),a=i("5c96"),n=i.n(a),l=(i("0fae"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("Lavida Character Manager")]),i("character")],1)}),r=[],u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"character"},[i("div",{staticClass:"toptop"},[i("el-button",{on:{click:t.load}},[t._v("从文件读取角色")]),i("el-button",{on:{click:t.save}},[t._v("保存角色到文件")])],1),i("div",{staticClass:"top"},[i("el-card",{staticClass:"basic"},[i("b",{attrs:{slot:"header"},slot:"header"},[t._v("基本信息")]),i("div",{staticClass:"multi"},[i("span",{staticClass:"item"},[t._v("玩家："),i("editable",{model:{value:t.attributes.player,callback:function(e){t.$set(t.attributes,"player",e)},expression:"attributes.player"}})],1),i("span",{staticClass:"item"},[t._v("姓名："),i("editable",{model:{value:t.attributes.name,callback:function(e){t.$set(t.attributes,"name",e)},expression:"attributes.name"}})],1),i("span",{staticClass:"item"},[t._v("时代："),i("editable",{model:{value:t.attributes.time,callback:function(e){t.$set(t.attributes,"time",e)},expression:"attributes.time"}})],1),i("span",{staticClass:"item"},[t._v("职业："),i("editable",{model:{value:t.attributes.profession,callback:function(e){t.$set(t.attributes,"profession",e)},expression:"attributes.profession"}})],1),i("span",{staticClass:"item"},[t._v("性别："),i("editable",{attrs:{options:[{label:"男",value:!0},{label:"女",value:!1}]},model:{value:t.attributes.isMale,callback:function(e){t.$set(t.attributes,"isMale",e)},expression:"attributes.isMale"}})],1),i("span",{staticClass:"item"},[t._v("年龄："),i("editable",{attrs:{number:{min:0}},model:{value:t.attributes.age,callback:function(e){t.$set(t.attributes,"age",e)},expression:"attributes.age"}})],1),i("span",{staticClass:"item"},[t._v("住地："),i("editable",{model:{value:t.attributes.place,callback:function(e){t.$set(t.attributes,"place",e)},expression:"attributes.place"}})],1),i("span",{staticClass:"item"},[t._v("故乡："),i("editable",{model:{value:t.attributes.hometown,callback:function(e){t.$set(t.attributes,"hometown",e)},expression:"attributes.hometown"}})],1)])]),i("el-card",{staticClass:"attributes"},[i("div",{attrs:{slot:"header"},slot:"header"},[i("b",[t._v("角色属性")]),i("el-button",{staticClass:"header-button",attrs:{type:"text"}},[t._v("快速开局")])],1),i("div",{staticClass:"multi"},[i("el-card",{staticClass:"item"},[i("attribute",{attrs:{name:"力量 STR",value:t.attributes.STR}})],1),i("el-card",{staticClass:"item"},[i("attribute",{attrs:{name:"体质 CON",value:t.attributes.CON}})],1),i("el-card",{staticClass:"item"},[i("attribute",{attrs:{name:"体型 SIZ",value:t.attributes.SIZ}})],1),i("el-card",{staticClass:"item"},[i("attribute",{attrs:{name:"敏捷 DEX",value:t.attributes.DEX}})],1),i("el-card",{staticClass:"item"},[i("attribute",{attrs:{name:"外貌 APP",value:t.attributes.APP}})],1),i("el-card",{staticClass:"item"},[i("attribute",{attrs:{name:"智力 INT",value:t.attributes.INT}})],1),i("el-card",{staticClass:"item"},[i("attribute",{attrs:{name:"意志 POW",value:t.attributes.POW}})],1),i("el-card",{staticClass:"item"},[i("attribute",{attrs:{name:"教育 EDU",value:t.attributes.EDU}})],1),i("el-card",{staticClass:"item"},[i("attribute",{attrs:{name:"移动 MOV",value:t.attributes.MOV}})],1),i("el-card",{staticClass:"item"},[i("variable",{attrs:{name:"幸运 Luck",value:t.attributes.Luck,constant:""}})],1),i("el-card",{staticClass:"item"},[i("variable",{attrs:{name:"信用评级",value:t.attributes.Money,constant:""}})],1),i("el-card",{staticClass:"item"},[i("attribute",{attrs:{name:"闪避",value:t.attributes.ShanBi}})],1)],1)])],1),i("div",{staticClass:"center"},[i("el-card",{staticClass:"variables"},[i("b",{attrs:{slot:"header"},slot:"header"},[t._v("基本变量")]),i("div",{staticClass:"multi"},[i("el-card",{staticClass:"item"},[i("variable",{attrs:{name:"体力 HP"},model:{value:t.attributes.HP,callback:function(e){t.$set(t.attributes,"HP",e)},expression:"attributes.HP"}})],1),i("el-card",{staticClass:"item"},[i("variable",{attrs:{name:"理智 SAN"},model:{value:t.attributes.SAN,callback:function(e){t.$set(t.attributes,"SAN",e)},expression:"attributes.SAN"}})],1),i("el-card",{staticClass:"item"},[i("variable",{attrs:{name:"魔法 MP",max:10},model:{value:t.attributes.MP,callback:function(e){t.$set(t.attributes,"MP",e)},expression:"attributes.MP"}})],1)],1)]),i("el-card",{staticClass:"skills"},[i("div",{attrs:{slot:"header"},slot:"header"},[i("b",[t._v("技能点数")]),i("el-button",{staticClass:"header-button",attrs:{type:"text"}},[t._v("分配点数")])],1),i("div",{staticClass:"skills-multi"},t._l(t.skills,(function(t,e){return i("attribute",{key:e,staticClass:"item skill",attrs:{name:t.name,value:t.value}})})),1)])],1)])},c=[],o=(i("a4d3"),i("e01a"),i("d28b"),i("b0c0"),i("a9e3"),i("b64b"),i("d3b7"),i("25f0"),i("3ca3"),i("ddb0"),i("2b3d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.editing?i("span",[t.options?i("el-select",{staticClass:"input",model:{value:t.input,callback:function(e){t.input=e},expression:"input"}},t._l(t.options,(function(t,e){return i("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1):t.number?i("el-input",{staticClass:"input",attrs:{type:"number",min:t.number.min,max:t.number.max},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}):i("el-input",{staticClass:"input",model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t.canSave?i("el-button",{attrs:{icon:"el-icon-check",circle:""},on:{click:t.save}}):t._e(),t.canClose?i("el-button",{attrs:{icon:"el-icon-close",circle:""},on:{click:t.cancel}}):t._e()],1):i("span",[t._v(" "+t._s(t.display)+" "),i("el-button",{attrs:{icon:"el-icon-edit",circle:""},on:{click:t.edit}})],1)}),d=[],b={props:["value","options","number"],data:function(){return{editing:!1,input:null}},watch:{value:function(t){this.editing=null==t}},computed:{display:function(){if(this.options){var t=!0,e=!1,i=void 0;try{for(var s,a=this.options[Symbol.iterator]();!(t=(s=a.next()).done);t=!0){var n=s.value;if(n.value==this.value)return n.label}}catch(l){e=!0,i=l}finally{try{t||null==a.return||a.return()}finally{if(e)throw i}}}return this.value},canSave:function(){return null!=this.input&&(null==this.input.length||this.input.length>0)&&(null==this.number||(null==this.number.min||this.input>=this.number.min)&&(null==this.number.max||this.input<=this.number.max))},canClose:function(){return null!=this.value}},mounted:function(){null==this.value&&this.edit()},methods:{edit:function(){this.editing=!0,this.input=this.value},save:function(){this.editing=!1,this.$emit("input",this.input)},cancel:function(){this.editing=!1}}},p=b,v=(i("5eaa"),i("2877")),m=Object(v["a"])(p,o,d,!1,null,"e6bcd0c6",null),h=m.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("b",{staticClass:"tag"},[t._v(t._s(t.name))]),i("b",{staticClass:"value",style:{color:t.valueColor}},[t._v(t._s(null==t.value?"--":t.value))]),null!=t.value?i("el-popover",{attrs:{trigger:"hover"}},[i("div",{staticClass:"check-hover"},[i("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.checkOpen(2)}}},[t._v("困难")]),i("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.checkOpen(5)}}},[t._v("极难")])],1),i("el-button",{staticClass:"check-button",attrs:{slot:"reference",icon:"el-icon-s-promotion",circle:""},on:{click:function(e){return t.checkOpen(1)}},slot:"reference"})],1):t._e(),i("el-dialog",{attrs:{visible:t.dialog,width:"30%"},on:{"update:visible":function(e){t.dialog=e},closed:t.checkClose}},[i("div",{staticClass:"check"},[t.dice?i("dice",{attrs:{min:1,max:100},on:{result:function(e){t.diceResult=e}}}):t._e(),null!=t.diceResult?i("b",{staticClass:"check-text",style:{color:t.diceResultColor}},[t._v(t._s(t.diceResultText))]):t._e()],1)])],1)},C=[],_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"dice"},[i("div",{staticClass:"number",style:t.diceUpperStyle},[t._v(t._s(t.upper))]),i("div",{staticClass:"number",style:t.diceLowerStyle},[t._v(t._s(t.lower))])]),i("el-button",{staticClass:"button",on:{click:function(e){t.stop=!0}}},[t._v("STOP")]),null==t.basic?i("div",{staticClass:"bonus"},[t._v(" 奖励骰子 "),i("el-switch",{model:{value:t.bonus,callback:function(e){t.bonus=e},expression:"bonus"}})],1):i("div",{staticClass:"bonus"},[t._v(" 基础点数："+t._s(t.basic)+" ")])],1)},k=[],x={props:{min:Number,max:Number},data:function(){return{upper:0,lower:0,stop:!1,timer:null,interval:1,position:0,bonus:!1,basic:null}},computed:{len:function(){return this.max-this.min+1},diceUpperStyle:function(){return{top:this.position-100+"%"}},diceLowerStyle:function(){return{top:this.position+"%"}}},mounted:function(){var t=this;this.timer=setInterval((function(){return t.nextFrame()}),this.interval)},methods:{nextFrame:function(){var t=this;if(this.stop)if(this.interval<40)clearInterval(this.timer),this.timer=setInterval((function(){return t.nextFrame()}),this.interval+=1);else if(!this.position)return clearInterval(this.timer),void(this.bonus?null==this.basic?(this.basic=this.lower,this.upper=this.lower=0,this.stop=!1,this.interval=1,this.timer=setInterval((function(){return t.nextFrame()}),this.interval)):this.$emit("result",this.basic-this.lower):this.$emit("result",this.lower));if((this.position+=4)>=100){this.position=0;var e=null==this.basic?this.len:6,i=null==this.basic?this.min:1,s=Math.floor(Math.random()*e)+i;this.lower=this.upper,this.upper=s}}}},g=x,y=(i("047d"),Object(v["a"])(g,_,k,!1,null,"435f7287",null)),O=y.exports,w={components:{Dice:O},props:{name:String,value:Number},data:function(){return{dialog:!1,dice:!1,diceResult:null,difficulty:1}},computed:{valueColor:function(){return null==this.value||this.value<30?"red":this.value<70?"orange":"green"},diceResultText:function(){return null==this.diceResult?"":this.diceResult<=this.value/this.difficulty?this.diceResult<=1?"大成功":"成功":this.diceResult>=96?"大失败":"失败"},diceResultColor:function(){return this.diceResult<=this.value?"green":"red"}},methods:{checkOpen:function(t){this.dialog=!0,this.dice=!0,this.difficulty=t},checkClose:function(){this.dice=!1,this.diceResult=null}}},S=w,R=(i("56e5"),Object(v["a"])(S,f,C,!1,null,"e2ca927c",null)),$=R.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("b",{staticClass:"tag"},[t._v(t._s(t.name))]),t.editable?i("el-popover",{attrs:{trigger:"hover"}},[i("el-input",{staticClass:"hover-input",attrs:{type:"number",min:1},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),i("el-button",{staticClass:"hover-button",attrs:{size:"mini",icon:"el-icon-minus",circle:""},on:{click:function(e){return t.plus(-t.input)}}}),i("el-button",{staticClass:"hover-button",attrs:{size:"mini",icon:"el-icon-s-promotion",circle:""},on:{click:function(e){return t.diceOpen(1*t.input,!0)}}}),i("el-button",{attrs:{slot:"reference",size:"mini",icon:"el-icon-minus",circle:""},on:{click:function(e){return t.plus(-1)}},slot:"reference"})],1):t._e(),i("b",{staticClass:"value",style:{color:t.valueColor}},[t._v(t._s(null==t.value?"--":t.value)+t._s(null==t.max?"":"/"+t.max))]),t.editable?i("el-popover",{attrs:{trigger:"hover"}},[i("el-input",{staticClass:"hover-input",attrs:{type:"number",min:1},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),i("el-button",{staticClass:"hover-button",attrs:{size:"mini",icon:"el-icon-plus",circle:""},on:{click:function(e){return t.plus(1*t.input)}}}),i("el-button",{staticClass:"hover-button",attrs:{size:"mini",icon:"el-icon-s-promotion",circle:""},on:{click:function(e){return t.diceOpen(1*t.input,!1)}}}),i("el-button",{attrs:{slot:"reference",size:"mini",icon:"el-icon-plus",circle:""},on:{click:function(e){return t.plus(1)}},slot:"reference"})],1):t._e(),i("el-dialog",{attrs:{visible:t.dialog,width:"30%"},on:{"update:visible":function(e){t.dialog=e},closed:t.diceClose}},[i("div",{staticClass:"check"},[t.dice?i("dice",{attrs:{min:1,max:t.dice.max},on:{result:t.diceFinish}}):t._e(),null!=t.diceResult?i("b",{staticClass:"check-text",style:{color:t.diceResultColor}},[t._v(t._s(t.diceResult.old)+" -> "+t._s(t.value))]):t._e()],1)])],1)},j=[],M={components:{Dice:O},props:{name:String,value:Number,max:Number,constant:Boolean},data:function(){return{input:"1",dialog:!1,dice:null,diceResult:null}},computed:{editable:function(){return!this.constant&&null!=this.value},valueColor:function(){if(null==this.value)return"red";if(null==this.max)return this.value<=0?"red":"green";var t=this.value/this.max;return t<.3?"red":t<.7?"orange":"green"},diceResultColor:function(){return this.dice.minus?"red":"green"}},methods:{plus:function(t){var e=1*this.value+t;null!=this.max&&e>this.max&&(e=this.max),this.$emit("input",e)},diceOpen:function(t,e){this.dialog=!0,this.dice={max:t,minus:e}},diceFinish:function(t){this.diceResult={old:this.value,delta:t};var e=1*this.value+t*(this.dice.minus?-1:1);null!=this.max&&e>this.max&&(e=this.max),this.$emit("input",e)},diceClose:function(){this.dice=null,this.diceResult=null}}},N=M,E=(i("3a45"),Object(v["a"])(N,P,j,!1,null,"d574fce2",null)),T=E.exports,A={components:{Editable:h,Attribute:$,Variable:T},data:function(){return{attributes:{},skills:[]}},methods:{load:function(){var t=this,e=document.createElement("input");e.type="file",e.accept="application/json",e.onchange=function(e){if(!(e.target.files.length<=0)){var i=new FileReader;i.onload=function(i){var s;try{s=JSON.parse(i.target.result)}catch(e){return void t.$message({type:"error",message:e.toString()})}var a={},n=[];if(null==s.attributes&&(s.attributes={}),null==s.skills&&(s.skills=[]),a=s.attributes,Array.isArray(s.skills)){var l=!0,r=!1,u=void 0;try{for(var c,o=s.skills[Symbol.iterator]();!(l=(c=o.next()).done);l=!0){var d=c.value;if(null!=d.name&&null!=d.value){var b=Number(d.value);isFinite(b)&&n.push({name:d.name.toString(),value:b})}}}catch(f){r=!0,u=f}finally{try{l||null==o.return||o.return()}finally{if(r)throw u}}}else for(var p=0,v=Object.keys(s.skills);p<v.length;p++){var m=v[p];if(null!=s.skills[m]){var h=Number(s.skills[m]);isFinite(h)&&n.push({name:m,value:h})}}t.attributes=a,t.skills=n},i.readAsText(e.target.files[0])}},e.click()},save:function(){var t={attributes:this.attributes,skills:this.skills},e=new Blob([JSON.stringify(t)],{type:"application/json"}),i=URL.createObjectURL(e),s=document.createElement("a");s.href=i,s.download=this.attributes.name+".json",s.click(),URL.revokeObjectURL(i)}}},F=A,I=(i("6f97"),Object(v["a"])(F,u,c,!1,null,"4911b498",null)),L=I.exports,z={components:{Character:L}},U=z,D=Object(v["a"])(U,l,r,!1,null,null,null),H=D.exports;s["default"].config.productionTip=!1,s["default"].use(n.a),new s["default"]({render:function(t){return t(H)}}).$mount("#app")},"56e5":function(t,e,i){"use strict";var s=i("4bec"),a=i.n(s);a.a},"5eaa":function(t,e,i){"use strict";var s=i("2735"),a=i.n(s);a.a},"6f97":function(t,e,i){"use strict";var s=i("361a"),a=i.n(s);a.a},a1db:function(t,e,i){}});
//# sourceMappingURL=app.21f95b18.js.map