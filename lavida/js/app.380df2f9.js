(function(t){function e(e){for(var n,l,r=e[0],u=e[1],c=e[2],d=0,h=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&h.push(a[l][0]),a[l]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);o&&o(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,r=1;r<i.length;r++){var u=i[r];0!==a[u]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=i[0]))}return t}var n={},a={app:0},s=[];function l(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=n,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(i,n,function(e){return t[e]}.bind(null,n));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var o=u;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("85ec"),a=i.n(n);a.a},"0a16":function(t,e,i){"use strict";var n=i("f7db"),a=i.n(n);a.a},4938:function(t,e,i){"use strict";var n=i("4fa5"),a=i.n(n);a.a},"4cb9":function(t,e,i){},"4fa5":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=i("5c96"),s=i.n(a),l=(i("0fae"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app"},[i("h1",[t._v("Lavida Character Manager")]),i("character",{ref:"char"}),i("console")],1)}),r=[],u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"character"},[i("div",{staticClass:"toptop"},[i("el-button",{on:{click:t.load}},[t._v("从文件读取角色")]),i("el-button",{on:{click:t.save}},[t._v("保存角色到文件")]),i("el-button",{on:{click:function(e){t.noteVisible=!0}}},[t._v("记录")])],1),i("div",{staticClass:"top"},[i("el-card",{staticClass:"basic"},[i("b",{attrs:{slot:"header"},slot:"header"},[t._v("基本信息")]),i("div",{staticClass:"multi"},[i("span",{staticClass:"item"},[t._v("玩家："),i("editable",{model:{value:t.info.player,callback:function(e){t.$set(t.info,"player",e)},expression:"info.player"}})],1),i("span",{staticClass:"item"},[t._v("姓名："),i("editable",{model:{value:t.info.name,callback:function(e){t.$set(t.info,"name",e)},expression:"info.name"}})],1),i("span",{staticClass:"item"},[t._v("时代："),i("editable",{model:{value:t.info.time,callback:function(e){t.$set(t.info,"time",e)},expression:"info.time"}})],1),i("span",{staticClass:"item"},[t._v("职业："),i("editable",{model:{value:t.info.profession,callback:function(e){t.$set(t.info,"profession",e)},expression:"info.profession"}})],1),i("span",{staticClass:"item"},[t._v("性别："),i("editable",{model:{value:t.info.gender,callback:function(e){t.$set(t.info,"gender",e)},expression:"info.gender"}})],1),i("span",{staticClass:"item"},[t._v("年龄："),i("editable",{model:{value:t.info.age,callback:function(e){t.$set(t.info,"age",e)},expression:"info.age"}})],1),i("span",{staticClass:"item"},[t._v("住地："),i("editable",{model:{value:t.info.place,callback:function(e){t.$set(t.info,"place",e)},expression:"info.place"}})],1),i("span",{staticClass:"item"},[t._v("故乡："),i("editable",{model:{value:t.info.hometown,callback:function(e){t.$set(t.info,"hometown",e)},expression:"info.hometown"}})],1)])]),i("attributes",{staticClass:"attributes",model:{value:t.attributes,callback:function(e){t.attributes=e},expression:"attributes"}})],1),i("div",{staticClass:"center"},[i("el-card",{staticClass:"variables"},[i("b",{attrs:{slot:"header"},slot:"header"},[t._v("基本变量")]),i("div",{staticClass:"multi"},[i("el-card",{staticClass:"item"},[i("variable",{attrs:{name:"体力 HP"},model:{value:t.attributes.HP,callback:function(e){t.$set(t.attributes,"HP",e)},expression:"attributes.HP"}})],1),i("el-card",{staticClass:"item"},[i("variable",{attrs:{name:"理智 SAN"},model:{value:t.attributes.SAN,callback:function(e){t.$set(t.attributes,"SAN",e)},expression:"attributes.SAN"}})],1),i("el-card",{staticClass:"item"},[i("variable",{attrs:{name:"魔法 MP",max:t.attributes.MaxMP},model:{value:t.attributes.MP,callback:function(e){t.$set(t.attributes,"MP",e)},expression:"attributes.MP"}})],1)],1)]),i("skills",{staticClass:"skills",attrs:{total:null==t.attributes.EDU?0:5*t.attributes.EDU},model:{value:t.skills,callback:function(e){t.skills=e},expression:"skills"}})],1),i("el-drawer",{attrs:{visible:t.noteVisible,title:"角色 "+t.info.name+" 的记录",direction:"rtl",size:"300px"},on:{"update:visible":function(e){t.noteVisible=e}}},[i("el-input",{staticClass:"note-input",attrs:{type:"textarea",resize:"none",rows:"16"},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}})],1)],1)},c=[],o=(i("a4d3"),i("e01a"),i("d28b"),i("b0c0"),i("a9e3"),i("b64b"),i("d3b7"),i("25f0"),i("3ca3"),i("ddb0"),i("2b3d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-card",[i("div",{attrs:{slot:"header"},slot:"header"},[i("b",[t._v("角色属性")]),i("el-button",{staticClass:"header-button",attrs:{type:"text"},on:{click:function(e){t.dialog=t.dice=!0}}},[t._v("快速开局")]),i("el-dialog",{attrs:{visible:t.dialog,width:"80%"},on:{"update:visible":function(e){t.dialog=e},closed:function(e){t.dice=!1}}},[i("div",{staticClass:"dialog-wrapper"},[i("div",{staticClass:"dice-wrapper"},[t.dice?i("dice",{attrs:{min:1,max:6},on:{result:t.diceFinish}}):t._e(),t.diceFinished?t._e():i("div",{staticClass:"dice-total"},[t._v("累计点数："+t._s(t.total))]),t.diceFinished?t._e():i("div",{staticClass:"dice-total"},[t._v("第"+t._s(t.round)+"/"+t._s(t.roundMax)+"轮 第"+t._s(t.step)+"/"+t._s(t.stepMax)+"次")])],1),i("div",{staticClass:"dialog-tags"},[i("div",{staticClass:"dialog-attrtags"},[t._l(t.diceAttributes,(function(e,n){return i("span",{key:n,staticClass:"dialog-tag"},[t._v(" "+t._s(e.name)+"： "),i("el-button",{on:{click:function(e){return t.setAttr(n)}}},[t._v(t._s(null==e.value?"???":e.value))])],1)})),i("span",{staticClass:"dialog-tag"},[t._v("移动 MOV："),i("b",{staticClass:"dialog-number"},[t._v(t._s(t.aMOV))])]),i("span",{staticClass:"dialog-tag"},[t._v("幸运 Luck："),i("el-input",{staticClass:"dialog-input",attrs:{type:"number",min:0,max:70,value:t.aLuck},on:{input:function(e){t.aLuck=1*e}}})],1),i("span",{staticClass:"dialog-tag"},[t._v("信用评级："),i("el-input",{staticClass:"dialog-input",attrs:{type:"number",min:0,max:70,value:t.aMoney},on:{input:function(e){t.aLuck=70-e}}})],1),i("span",{staticClass:"dialog-tag"},[t._v("体力 HP："),i("b",{staticClass:"dialog-number"},[t._v(t._s(t.aHP))])]),i("span",{staticClass:"dialog-tag"},[t._v("魔法 MP："),i("b",{staticClass:"dialog-number"},[t._v(t._s(t.aMP))])]),t.canSave?i("el-button",{staticClass:"dialog-tag",attrs:{icon:"el-icon-check",circle:""},on:{click:t.save}}):t._e()],2),i("el-divider"),i("div",t._l(t.diceResults,(function(e,n){return i("el-button",{key:n,staticClass:"dialog-tag",attrs:{type:t.selected==n?"primary":null},on:{click:function(e){t.selected=t.selected==n?null:n}}},[t._v(t._s(e))])})),1)],1)])])],1),i("div",{staticClass:"multi"},[i("el-card",{staticClass:"item"},[i("attribute",{attrs:{name:"力量 STR",value:t.value.STR}})],1),i("el-card",{staticClass:"item"},[i("attribute",{attrs:{name:"体质 CON",value:t.value.CON}})],1),i("el-card",{staticClass:"item"},[i("attribute",{attrs:{name:"体型 SIZ",value:t.value.SIZ}})],1),i("el-card",{staticClass:"item"},[i("attribute",{attrs:{name:"敏捷 DEX",value:t.value.DEX}})],1),i("el-card",{staticClass:"item"},[i("attribute",{attrs:{name:"外貌 APP",value:t.value.APP}})],1),i("el-card",{staticClass:"item"},[i("attribute",{attrs:{name:"智力 INT",value:t.value.INT}})],1),i("el-card",{staticClass:"item"},[i("attribute",{attrs:{name:"意志 POW",value:t.value.POW}})],1),i("el-card",{staticClass:"item"},[i("attribute",{attrs:{name:"教育 EDU",value:t.value.EDU}})],1),i("el-card",{staticClass:"item"},[i("variable",{attrs:{name:"移动 MOV",value:t.value.MOV,constant:""}})],1),i("el-card",{staticClass:"item"},[i("variable",{attrs:{name:"幸运 Luck",value:t.value.Luck,constant:""}})],1),i("el-card",{staticClass:"item"},[i("variable",{attrs:{name:"信用评级",value:t.value.Money,constant:""}})],1)],1)])}),d=[],h=(i("4de4"),i("4160"),i("a434"),i("e439"),i("dbb4"),i("159b"),i("ade3")),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"dice"},[i("div",{staticClass:"number",style:t.diceUpperStyle},[t._v(t._s(t.upper))]),i("div",{staticClass:"number",class:{emphasized:t.emphasized},style:t.diceLowerStyle},[t._v(t._s(t.lower))])]),i("el-button",{staticClass:"button",on:{click:function(e){t.stop=!0}}},[t._v("STOP")]),null==t.basic?i("div",{staticClass:"bonus"},[t._v(" 奖励骰子 "),i("el-switch",{model:{value:t.bonus,callback:function(e){t.bonus=e},expression:"bonus"}})],1):i("div",{staticClass:"bonus"},[t._v(" 基础点数："+t._s(t.basic)+" ")])],1)},f=[],p={props:{min:Number,max:Number},data:function(){return{upper:0,lower:0,stop:!1,timer:null,interval:1,position:0,emphasized:!1,bonus:!1,basic:null}},computed:{len:function(){return this.max-this.min+1},diceUpperStyle:function(){return{top:this.position-100+"%"}},diceLowerStyle:function(){return{top:this.position+"%"}}},mounted:function(){var t=this;this.timer=setInterval((function(){return t.nextFrame()}),this.interval)},beforeDestroy:function(){null!=this.timer&&clearInterval(this.timer)},methods:{nextFrame:function(){var t=this;if(this.stop)if(this.interval<40)clearInterval(this.timer),this.timer=setInterval((function(){return t.nextFrame()}),this.interval+=1);else if(!this.position)return clearInterval(this.timer),this.timer=null,void(this.bonus?null==this.basic?this.emphasize((function(){t.basic=t.lower,t.upper=t.lower=0,t.stop=!1,t.interval=1,t.timer=setInterval((function(){return t.nextFrame()}),t.interval)})):this.emphasize((function(){return t.$emit("result",t.basic-t.lower)})):this.emphasize((function(){return t.$emit("result",t.lower)})));if((this.position+=4)>=100){this.position=0;var e=null==this.basic?this.len:6,i=null==this.basic?this.min:1,n=Math.floor(Math.random()*e)+i;this.lower=this.upper,this.upper=n}},emphasize:function(t){var e=this;this.emphasized=!0,this.timer=setInterval((function(){clearInterval(e.timer),e.timer=null,e.emphasized=!1,t()}),500)}}},b=p,m=(i("7c0c"),i("2877")),y=Object(m["a"])(b,v,f,!1,null,"6f9c56f9",null),g=y.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("b",{staticClass:"tag"},[t._v(t._s(t.name))]),i("b",{staticClass:"value",style:{color:t.valueColor}},[t._v(t._s(null==t.value?"--":t.value))]),null!=t.value?i("el-popover",{attrs:{trigger:"hover"}},[i("div",{staticClass:"check-hover"},[i("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.checkOpen(2)}}},[t._v("困难")]),i("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.checkOpen(5)}}},[t._v("极难")])],1),i("el-button",{staticClass:"check-button",attrs:{slot:"reference",icon:"icon-dice",circle:""},on:{click:function(e){return t.checkOpen(1)}},slot:"reference"})],1):t._e(),i("el-dialog",{attrs:{visible:t.dialog,width:"300px"},on:{"update:visible":function(e){t.dialog=e},closed:t.checkClose}},[i("div",{staticClass:"check"},[t.dice?i("dice",{attrs:{min:1,max:100},on:{result:function(e){t.diceResult=e}}}):t._e(),null!=t.diceResult?i("b",{staticClass:"check-text",style:{color:t.diceResultColor}},[t._v(t._s(t.diceResultText))]):t._e()],1)])],1)},C=[],_={components:{Dice:g},props:{name:String,value:Number},data:function(){return{dialog:!1,dice:!1,diceResult:null,difficulty:1}},computed:{valueColor:function(){return null==this.value||this.value<30?"red":this.value<70?"orange":"green"},diceResultText:function(){return null==this.diceResult?"":this.diceResult<=this.value/this.difficulty?this.diceResult<=1?"大成功":"成功":this.diceResult>=96?"大失败":"失败"},diceResultColor:function(){return this.diceResult<=this.value/this.difficulty?"green":"red"}},methods:{checkOpen:function(t){this.dialog=!0,this.dice=!0,this.difficulty=t},checkClose:function(){this.dice=!1,this.diceResult=null}}},x=_,O=(i("d44d"),Object(m["a"])(x,k,C,!1,null,"37c8f67b",null)),w=O.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("b",{staticClass:"tag"},[t._v(t._s(t.name))]),t.editable?i("el-popover",{attrs:{trigger:"hover"}},[i("el-input",{staticClass:"hover-input",attrs:{type:"number",min:1},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),i("el-button",{staticClass:"hover-button",attrs:{size:"mini",icon:"el-icon-minus",circle:""},on:{click:function(e){return t.plus(-t.input)}}}),i("el-button",{staticClass:"hover-button",attrs:{size:"mini",icon:"icon-dice",circle:""},on:{click:function(e){return t.diceOpen(1*t.input,!0)}}}),i("el-button",{attrs:{slot:"reference",size:"mini",icon:"el-icon-minus",circle:""},on:{click:function(e){return t.plus(-1)}},slot:"reference"})],1):t._e(),i("b",{staticClass:"value",style:{color:t.valueColor}},[t._v(t._s(null==t.value?"--":t.value)+t._s(null==t.max?"":"/"+t.max))]),t.editable?i("el-popover",{attrs:{trigger:"hover"}},[i("el-input",{staticClass:"hover-input",attrs:{type:"number",min:1},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),i("el-button",{staticClass:"hover-button",attrs:{size:"mini",icon:"el-icon-plus",circle:""},on:{click:function(e){return t.plus(1*t.input)}}}),i("el-button",{staticClass:"hover-button",attrs:{size:"mini",icon:"icon-dice",circle:""},on:{click:function(e){return t.diceOpen(1*t.input,!1)}}}),i("el-button",{attrs:{slot:"reference",size:"mini",icon:"el-icon-plus",circle:""},on:{click:function(e){return t.plus(1)}},slot:"reference"})],1):t._e(),i("el-dialog",{attrs:{visible:t.dialog,width:"300px"},on:{"update:visible":function(e){t.dialog=e},closed:t.diceClose}},[i("div",{staticClass:"check"},[t.dice?i("dice",{attrs:{min:1,max:t.dice.max},on:{result:t.diceFinish}}):t._e(),null!=t.diceResult?i("b",{staticClass:"check-text",style:{color:t.diceResultColor}},[t._v(t._s(t.diceResult.old)+" → "+t._s(t.value))]):t._e()],1)])],1)},M=[],S={components:{Dice:g},props:{name:String,value:Number,max:Number,constant:Boolean},data:function(){return{input:"1",dialog:!1,dice:null,diceResult:null}},computed:{editable:function(){return!this.constant&&null!=this.value},valueColor:function(){if(null==this.value)return"red";if(null==this.max)return this.value<=0?"red":"green";var t=this.value/this.max;return t<.3?"red":t<.7?"orange":"green"},diceResultColor:function(){return this.dice.minus?"red":"green"}},methods:{plus:function(t){var e=1*this.value+t;null!=this.max&&e>this.max&&(e=this.max),this.$emit("input",e)},diceOpen:function(t,e){this.dialog=!0,this.dice={max:t,minus:e}},diceFinish:function(t){this.diceResult={old:this.value,delta:t};var e=1*this.value+t*(this.dice.minus?-1:1);null!=this.max&&e>this.max&&(e=this.max),this.$emit("input",e)},diceClose:function(){this.dice=null,this.diceResult=null}}},A=S,R=(i("d3cc"),Object(m["a"])(A,P,M,!1,null,"a4465aa2",null)),j=R.exports;function $(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function L(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?$(Object(i),!0).forEach((function(e){Object(h["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):$(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var N={components:{Dice:g,Attribute:w,Variable:j},props:{value:Object},data:function(){return{dialog:!1,dice:!1,roundMax:8,round:1,step:1,total:0,diceAttributes:[{name:"力量 STR",value:null},{name:"体质 CON",value:null},{name:"体型 SIZ",value:null},{name:"敏捷 DEX",value:null},{name:"外貌 APP",value:null},{name:"智力 INT",value:null},{name:"意志 POW",value:null},{name:"教育 EDU",value:null}],diceResults:[],selected:null,aLuck:35}},computed:{stepMax:function(){return this.round>6?2:3},diceFinished:function(){return this.round>this.roundMax},aMOV:function(){return 7+(this.diceAttributes[0].value>this.diceAttributes[2].value)+(this.diceAttributes[3].value>this.diceAttributes[2].value)},aMoney:function(){return 70-this.aLuck},aHP:function(){return Math.floor((this.diceAttributes[1].value+this.diceAttributes[2].value)/10)},aMP:function(){return this.diceAttributes[5].value/5},canSave:function(){if(this.aLuck<0||this.aMoney<0)return!1;var t=!0,e=!1,i=void 0;try{for(var n,a=this.diceAttributes[Symbol.iterator]();!(t=(n=a.next()).done);t=!0){var s=n.value;if(null==s.value)return!1}}catch(l){e=!0,i=l}finally{try{t||null==a.return||a.return()}finally{if(e)throw i}}return!0}},methods:{pushResult:function(t){var e=0;while(e<this.diceResults.length&&this.diceResults[e]>t)e++;this.diceResults.splice(e,0,t)},diceFinish:function(t){var e=this;if(!this.diceFinished){if(this.total+=t,++this.step>this.stepMax){if(this.pushResult(5*this.total),++this.round>this.roundMax)return;this.total=this.round>6?5:0,this.step=1}this.dice=!1,this.$nextTick((function(){return e.dice=!0}))}},setAttr:function(t){null==this.diceAttributes[t].value?null!=this.diceResults[this.selected]&&(this.diceAttributes[t].value=this.diceResults[this.selected],this.diceResults.splice(this.selected,1),this.selected=null):(this.pushResult(this.diceAttributes[t].value),this.diceAttributes[t].value=null)},save:function(){this.$emit("input",L({},this.value,{STR:this.diceAttributes[0].value,CON:this.diceAttributes[1].value,SIZ:this.diceAttributes[2].value,DEX:this.diceAttributes[3].value,APP:this.diceAttributes[4].value,INT:this.diceAttributes[5].value,POW:this.diceAttributes[6].value,EDU:this.diceAttributes[7].value,MOV:this.aMOV,Luck:this.aLuck,Money:this.aMoney,HP:this.aHP,SAN:99,MP:this.aMP})),this.dialog=!1,this.round=1,this.step=1,this.total=0;var t=!0,e=!1,i=void 0;try{for(var n,a=this.diceAttributes[Symbol.iterator]();!(t=(n=a.next()).done);t=!0){var s=n.value;s.value=null}}catch(l){e=!0,i=l}finally{try{t||null==a.return||a.return()}finally{if(e)throw i}}this.diceResults=[],this.selected=null,this.aLuck=35}}},I=N,E=(i("6757"),Object(m["a"])(I,o,d,!1,null,"59edae7e",null)),D=E.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-card",[i("div",{attrs:{slot:"header"},slot:"header"},[i("b",[t._v("技能点数")]),i("el-button",{staticClass:"header-button",attrs:{type:"text"},on:{click:function(e){t.dialog=!0}}},[t._v("分配点数")])],1),t.dialog?i("div",[i("div",{staticClass:"dialog-top"},[i("span",{staticClass:"dialog-top-text"},[t._v("剩余可分配点数："+t._s(t.total-t.points))]),i("el-button",{on:{click:function(e){t.dialog=!1}}},[t._v("返回")]),i("el-button",{on:{click:t.save}},[t._v("确认")])],1),i("div",{staticClass:"skills-multi"},[t._l(t.skillList,(function(e,n){return i("div",{key:n,staticClass:"skill"},[i("span",{style:{"font-size":e.name.length>3?e.name.length>4?"12px":"15px":null}},[t._v(t._s(e.name)+" ")]),i("el-input",{staticClass:"dialog-input",attrs:{type:"number",min:0,max:100-e.basic,value:e.add},on:{input:function(e){return t.assign(n,1*e)}}}),t._v(" + "+t._s(e.basic)+" = "),i("b",{style:{color:t.colorList[n]}},[t._v(t._s(e.basic+e.add))])],1)})),i("div",{staticClass:"skill"},[t._v(" 自定义 "),i("el-input",{staticClass:"dialog-custom",model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t.input.length>0?i("el-button",{staticClass:"dialog-button",on:{click:t.custom}},[t._v("添加")]):t._e()],1)],2)]):i("div",{staticClass:"skills-multi"},t._l(t.value,(function(t,e){return i("attribute",{key:e,staticClass:"skill",attrs:{name:t.name,value:t.value}})})),1)])},T=[],F=(i("d81d"),{components:{Attribute:w},props:{value:Array,total:Number},data:function(){return{dialog:!1,points:0,skillList:[{name:"会计",basic:5,add:0},{name:"人类学",basic:1,add:0},{name:"估价",basic:5,add:0},{name:"考古学",basic:1,add:0},{name:"魅惑",basic:15,add:0},{name:"攀爬",basic:20,add:0},{name:"计算机",basic:5,add:0},{name:"克苏鲁神话",basic:0,add:0},{name:"乔装",basic:5,add:0},{name:"汽车驾驶",basic:20,add:0},{name:"电类维修",basic:10,add:0},{name:"电子学",basic:1,add:0},{name:"话术",basic:5,add:0},{name:"斗殴",basic:25,add:0},{name:"剑术",basic:20,add:0},{name:"手枪",basic:20,add:0},{name:"枪械",basic:25,add:0},{name:"急救",basic:30,add:0},{name:"历史",basic:5,add:0},{name:"恐吓",basic:15,add:0},{name:"跳跃",basic:20,add:0},{name:"法律",basic:5,add:0},{name:"图书馆使用",basic:20,add:0},{name:"聆听",basic:20,add:0},{name:"锁匠",basic:1,add:0},{name:"机类维修",basic:10,add:0},{name:"医学",basic:1,add:0},{name:"博物学",basic:10,add:0},{name:"领航",basic:10,add:0},{name:"神秘学",basic:5,add:0},{name:"重机",basic:1,add:0},{name:"说服",basic:10,add:0},{name:"精神分析",basic:1,add:0},{name:"心理学",basic:10,add:0},{name:"骑术",basic:5,add:0},{name:"药学",basic:1,add:0},{name:"妙手",basic:10,add:0},{name:"侦察",basic:25,add:0},{name:"潜行",basic:20,add:0},{name:"游泳",basic:20,add:0},{name:"投掷",basic:20,add:0},{name:"追踪",basic:10,add:0},{name:"潜水",basic:1,add:0},{name:"原力",basic:0,add:0},{name:"圣光",basic:0,add:0},{name:"MC生存",basic:10,add:0},{name:"MC建筑",basic:10,add:0},{name:"MC红石",basic:5,add:0},{name:"MC战斗",basic:10,add:0},{name:"MC跑酷",basic:10,add:0},{name:"MC模组",basic:10,add:0},{name:"MC命令方块",basic:1,add:0}],input:""}},computed:{colorList:function(){return this.skillList.map((function(t){var e=t.basic+t.add;return e<30?"red":e<70?"orange":"green"}))}},methods:{assign:function(t,e){var i=this.skillList[t];if(!(e<0||i.basic+e>100)){var n=e-i.add;this.points+n>this.total||(i.add=e,this.points+=n)}},custom:function(){this.skillList.push({name:this.input,basic:0,add:0}),this.input=""},save:function(){var t=[],e=!0,i=!1,n=void 0;try{for(var a,s=this.skillList[Symbol.iterator]();!(e=(a=s.next()).done);e=!0){var l=a.value,r=l.basic+l.add;r>0&&t.push({name:l.name,value:r}),l.add=0}}catch(u){i=!0,n=u}finally{try{e||null==s.return||s.return()}finally{if(i)throw n}}this.points=0,this.$emit("input",t),this.dialog=!1}}}),V=F,U=(i("0a16"),Object(m["a"])(V,z,T,!1,null,"1bc17aba",null)),H=U.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.editing?i("span",[i("el-input",{staticClass:"input",model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t.canSave?i("el-button",{attrs:{icon:"el-icon-check",circle:""},on:{click:t.save}}):t._e(),t.canClose?i("el-button",{attrs:{icon:"el-icon-close",circle:""},on:{click:t.cancel}}):t._e()],1):i("span",[t._v(" "+t._s(t.value)+" "),i("el-button",{attrs:{icon:"el-icon-edit",circle:""},on:{click:t.edit}})],1)},X=[],Z={props:{value:String},data:function(){return{editing:!1,input:null}},watch:{value:function(t){this.editing=null==t}},computed:{canSave:function(){return null!=this.input&&(null==this.input.length||this.input.length>0)},canClose:function(){return null!=this.value}},mounted:function(){null==this.value&&this.edit()},methods:{edit:function(){this.editing=!0,this.input=this.value},save:function(){this.editing=!1,this.$emit("input",this.input)},cancel:function(){this.editing=!1}}},J=Z,B=(i("4938"),Object(m["a"])(J,W,X,!1,null,"043761ec",null)),q=B.exports,G={components:{Attributes:D,Skills:H,Editable:q,Attribute:w,Variable:j},data:function(){return{info:{player:"Merlin",name:"石块",time:"瘟疫危机",profession:"防疫专家",gender:"女",age:"25",place:"武汉",hometown:"石家庄"},attributes:{STR:50,CON:50,SIZ:50,DEX:50,APP:50,INT:50,POW:50,EDU:50,MOV:7,Luck:35,Money:35,HP:10,SAN:99,MaxMP:10,MP:10},skills:[{name:"检疫",value:100},{name:"急救",value:80},{name:"聆听",value:70},{name:"妙手",value:60}],noteVisible:!1,note:""}},methods:{load:function(){var t=this,e=document.createElement("input");e.type="file",e.accept="application/json",e.onchange=function(e){if(!(e.target.files.length<=0)){var i=new FileReader;i.onload=function(i){var n;try{n=JSON.parse(i.target.result)}catch(e){return void t.$message({type:"error",message:e.toString()})}null==n.info&&(n.info={}),null==n.attributes&&(n.attributes={}),null==n.skills&&(n.skills=[]);for(var a=0,s=Object.keys(t.info);a<s.length;a++){var l=s[a];if(null==n.info[l])t.info[l]=null;else{var r=n.info[l].toString();t.info[l]=r.length>0?r:null}}for(var u=0,c=Object.keys(t.attributes);u<c.length;u++){var o=c[u];if(null==n.attributes[o])t.attributes[o]=null;else{var d=Number(n.attributes[o]);t.attributes[o]=isFinite(d)?d:null}}var h=[];if(Array.isArray(n.skills)){var v=!0,f=!1,p=void 0;try{for(var b,m=n.skills[Symbol.iterator]();!(v=(b=m.next()).done);v=!0){var y=b.value;if(null!=y.name&&null!=y.value){var g=Number(y.value);isFinite(g)&&h.push({name:y.name.toString(),value:g})}}}catch(O){f=!0,p=O}finally{try{v||null==m.return||m.return()}finally{if(f)throw p}}}else for(var k=0,C=Object.keys(n.skills);k<C.length;k++){var _=C[k];if(null!=n.skills[_]){var x=Number(n.skills[_]);isFinite(x)&&h.push({name:_,value:x})}}t.skills=h,null!=n.note&&(t.note=n.note.toString())},i.readAsText(e.target.files[0])}},e.click()},save:function(){var t={info:this.info,attributes:this.attributes,skills:this.skills,note:this.note},e=new Blob([JSON.stringify(t)],{type:"application/json"}),i=URL.createObjectURL(e),n=document.createElement("a");n.href=i,n.download=this.attributes.name+".json",n.click(),URL.revokeObjectURL(i)}}},K=G,Q=(i("659b"),Object(m["a"])(K,u,c,!1,null,"ebf224ae",null)),Y=Q.exports,tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"console",style:{bottom:t.visible?null:"-40vh"}},[i("el-button",{staticClass:"button",attrs:{type:"info",size:"mini"},on:{click:function(e){t.visible=!t.visible}}},[i("span",{staticClass:"button-content"},[t._v("控制台")])]),i("div",{staticClass:"console-content"},[i("div",{ref:"text",staticClass:"text"},[t._v(t._s(t.text))]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"input",domProps:{value:t.input},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.send(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.historyUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.historyDown(e)}],input:function(e){e.target.composing||(t.input=e.target.value)}}})])],1)},et=[],it=(i("ac1f"),i("1276"),i("498a"),{data:function(){return{visible:!1,text:"",input:"",history:[],historyIndex:-1}},methods:{println:function(t){var e=this;this.text+=t+"\n",this.$nextTick((function(){return e.$refs.text.scrollTop=e.$refs.text.scrollHeight}))},send:function(){this.input.length<=0||("/"==this.input[0]?this.command(this.input.substring(1).trim().split(/ +/)):this.println(this.input),this.history.push(this.input),this.input="",this.historyIndex=-1)},historyUp:function(){this.history.length<=0||0==this.historyIndex||(this.historyIndex<0&&(this.historyIndex=this.history.length),this.input=this.history[--this.historyIndex])},historyDown:function(){this.historyIndex<0||(this.historyIndex==this.history.length-1?(this.historyIndex=-1,this.input=""):this.input=this.history[++this.historyIndex])},command:function(t){var e,i,n;switch(t[0]){case"cls":this.text="";break;case"get":if(t.length<3)return this.println("错误使用命令 `get`");if(e=this.findChar(t[1]),!e)return this.println("找不到角色 `"+t[1]+"`");if(i=this.getValue(e,t[2]),void 0===i)return this.println("找不到属性或技能 `"+t[2]+"`");this.println(t[1]+"."+t[2]+": "+i);break;case"set":if(t.length<4)return this.println("错误使用命令 `set`");if(e=this.findChar(t[1]),!e)return this.println("找不到角色 `"+t[1]+"`");if(n=this.setValue(e,t[2],t[3]),void 0===n)return this.println("类型错误或找不到属性或技能 `"+t[2]+"`");this.println(t[1]+"."+t[2]+": "+n+" -> "+t[3]);break;case"addskill":if(t.length<4)return this.println("错误使用命令 `addskill`");if(e=this.findChar(t[1]),!e)return this.println("找不到角色 `"+t[1]+"`");if(i=Number(t[3]),!isFinite(i))return this.println("非法数字 `"+t[3]+"`");e.skills.push({name:t[2],value:i}),this.println(t[1]+"."+t[2]+": "+t[3]);break;case"delskill":if(t.length<3)return this.println("错误使用命令 `delskill`");if(e=this.findChar(t[1]),!e)return this.println("找不到角色 `"+t[1]+"`");n=[];for(var a=0;a<e.skills.length;a++){var s=e.skills[a];s.name==t[2]&&(n.push(s),e.skills.splice(a,1),a--)}if(n.length<=0)return this.println("找不到技能 `"+t[2]+"`");i="共删除"+n.length+"项技能：";var l=!0,r=!1,u=void 0;try{for(var c,o=n[Symbol.iterator]();!(l=(c=o.next()).done);l=!0){var d=c.value;i+="\n"+d.name+": "+d.value}}catch(h){r=!0,u=h}finally{try{l||null==o.return||o.return()}finally{if(r)throw u}}this.println(i);break;case"":this.println("命令不能为空");break;default:this.println("未知命令 `"+t[0]+"`")}},findChar:function(t){var e=!0,i=!1,n=void 0;try{for(var a,s=this.$parent.charList[Symbol.iterator]();!(e=(a=s.next()).done);e=!0){var l=a.value;if(l.info.name==t)return l}}catch(r){i=!0,n=r}finally{try{e||null==s.return||s.return()}finally{if(i)throw n}}},getValue:function(t,e){var i=t.info[e];if(void 0!==i)return i;if(i=t.attributes[e],void 0!==i)return i;var n=!0,a=!1,s=void 0;try{for(var l,r=t.skills[Symbol.iterator]();!(n=(l=r.next()).done);n=!0){var u=l.value;if(u.name==e)return u.value}}catch(c){a=!0,s=c}finally{try{n||null==r.return||r.return()}finally{if(a)throw s}}},setValue:function(t,e,i){var n=t.info[e];if(void 0!==n)return t.info[e]=i,n;if(n=t.attributes[e],void 0!==n){if(i=Number(i),!isFinite(i))return;return t.attributes[e]=i,i}var a=!0,s=!1,l=void 0;try{for(var r,u=t.skills[Symbol.iterator]();!(a=(r=u.next()).done);a=!0){var c=r.value;if(c.name==e){if(i=Number(i),!isFinite(i))return;return n=c.value,c.value=i,n}}}catch(o){s=!0,l=o}finally{try{a||null==u.return||u.return()}finally{if(s)throw l}}}}}),nt=it,at=(i("e5ed"),Object(m["a"])(nt,tt,et,!1,null,"1c29a00c",null)),st=at.exports,lt={components:{Character:Y,Console:st},data:function(){return{charList:[]}},mounted:function(){this.charList.push(this.$refs.char)}},rt=lt,ut=(i("034f"),Object(m["a"])(rt,l,r,!1,null,null,null)),ct=ut.exports;n["default"].config.productionTip=!1,n["default"].use(s.a),new n["default"]({render:function(t){return t(ct)}}).$mount("#app")},"57f5":function(t,e,i){},"5dfd":function(t,e,i){},"659b":function(t,e,i){"use strict";var n=i("4cb9"),a=i.n(n);a.a},6757:function(t,e,i){"use strict";var n=i("7074"),a=i.n(n);a.a},7074:function(t,e,i){},"7c0c":function(t,e,i){"use strict";var n=i("99cd"),a=i.n(n);a.a},"85ec":function(t,e,i){},9752:function(t,e,i){},"99cd":function(t,e,i){},d3cc:function(t,e,i){"use strict";var n=i("9752"),a=i.n(n);a.a},d44d:function(t,e,i){"use strict";var n=i("5dfd"),a=i.n(n);a.a},e5ed:function(t,e,i){"use strict";var n=i("57f5"),a=i.n(n);a.a},f7db:function(t,e,i){}});
//# sourceMappingURL=app.380df2f9.js.map