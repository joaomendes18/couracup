"use strict";(self.webpackChunkcouracup=self.webpackChunkcouracup||[]).push([[104],{1104:(O,l,r)=>{r.r(l),r.d(l,{TenOfJunePage:()=>G});var o=r(4755),e=r(1902);function c(t,n){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const a=e.oxw().$implicit;e.xp6(1),e.AsE("",a.homeGoals," x ",a.awayGoals,"")}}function s(t,n){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const a=e.oxw().$implicit;e.xp6(1),e.Oqu(a.time)}}const d=function(t){return{result:t}};function u(t,n){if(1&t&&(e.TgZ(0,"div",4)(1,"div",5)(2,"span"),e._uU(3),e.qZA()(),e.TgZ(4,"div",6),e.YNc(5,c,2,2,"span",7),e.YNc(6,s,2,1,"span",7),e.qZA(),e.TgZ(7,"div",8)(8,"span"),e._uU(9),e.qZA()()()),2&t){const a=n.$implicit;e.xp6(3),e.Oqu(a.home),e.xp6(1),e.Q6J("ngClass",e.VKq(5,d,a.homeGoals&&a.awayGoals)),e.xp6(1),e.Q6J("ngIf",a.homeGoals&&a.awayGoals),e.xp6(1),e.Q6J("ngIf",!(a.homeGoals&&a.awayGoals)),e.xp6(3),e.Oqu(a.away)}}function m(t,n){if(1&t&&(e.TgZ(0,"div",1)(1,"div",2),e._uU(2,"Jogos"),e.qZA(),e.YNc(3,u,10,7,"div",3),e.qZA()),2&t){const a=e.oxw();e.xp6(3),e.Q6J("ngForOf",a.matches)}}let f=(()=>{class t{constructor(){this.matches=[],this.Object=Object}ngOnInit(){this.data?.forEach((a,p)=>{p>10&&a.hasOwnProperty("A")&&this.matches.push({time:a.A,home:a.C,homeGoals:a.D,away:a.G,awayGoals:a.F})})}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-matches"]],inputs:{data:"data"},standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","table-wrapper",4,"ngIf"],[1,"table-wrapper"],[1,"title"],["class","table-match",4,"ngFor","ngForOf"],[1,"table-match"],[1,"cell","home"],[1,"cell","center",3,"ngClass"],[4,"ngIf"],[1,"cell","away"]],template:function(a,p){1&a&&e.YNc(0,m,4,1,"div",0),2&a&&e.Q6J("ngIf",null==p.matches?null:p.matches.length)},dependencies:[o.ax,o.O5,o.mk],styles:["app-matches .table-wrapper{display:flex;flex-direction:column;grid-gap:.3rem}app-matches .table-wrapper .title{background-color:#ffde3de6;color:#292f6c;text-align:center;padding:.1rem}app-matches .table-wrapper .table-match{display:grid;grid-template-columns:1fr 6rem 1fr;grid-gap:.3rem;overflow:hidden}app-matches .table-wrapper .table-match .cell{display:flex;align-items:center;justify-content:center;overflow:hidden;background-color:#292f6ce6;padding:.1rem .5rem}app-matches .table-wrapper .table-match .cell.home{justify-content:flex-end}app-matches .table-wrapper .table-match .cell.away{justify-content:flex-start}app-matches .table-wrapper .table-match .cell.center{background-color:#ffde3de6;color:#292f6c}app-matches .table-wrapper .table-match .cell.center.result{background-color:#fff}app-matches .table-wrapper .table-match .cell span{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}\n"],encapsulation:2}),t})(),g=(()=>{class t{transform(a){switch(a){case"position":return"#";case"team":return"Equipa";case"points":return"P";case"played":return"J";case"wins":return"V";case"draws":return"E";case"losses":return"D";case"goalsFor":return"GM";case"goalsAgainst":return"GS";case"goalsDifference":return"DG";default:return a}}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275pipe=e.Yjl({name:"localization",type:t,pure:!0,standalone:!0}),t})();function h(t,n){if(1&t&&(e.TgZ(0,"div",5),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.Oqu(a)}}function w(t,n){if(1&t&&(e.TgZ(0,"div",2)(1,"div",3),e._uU(2,"Equipas"),e.qZA(),e.YNc(3,h,2,1,"div",4),e.qZA()),2&t){const a=e.oxw();e.xp6(3),e.Q6J("ngForOf",a.teams)}}function b(t,n){if(1&t&&(e.TgZ(0,"div")(1,"span"),e._uU(2),e.qZA()()),2&t){const a=n.$implicit,p=e.oxw().$implicit;e.Gre("cell ",p,""),e.xp6(2),e.Oqu(a[p])}}function _(t,n){if(1&t&&(e.TgZ(0,"div",9)(1,"div")(2,"span"),e._uU(3),e.ALo(4,"localization"),e.qZA()(),e.YNc(5,b,3,4,"div",10),e.qZA()),2&t){const a=n.$implicit,p=e.oxw(2);e.xp6(1),e.Gre("header ",a,""),e.xp6(2),e.Oqu(e.lcZ(4,5,a)),e.xp6(2),e.Q6J("ngForOf",p.table)}}function v(t,n){if(1&t&&(e.TgZ(0,"div",6)(1,"div",3),e._uU(2,"Classifica\xe7\xe3o"),e.qZA(),e.TgZ(3,"div",7),e.YNc(4,_,6,7,"div",8),e.qZA()()),2&t){const a=e.oxw();e.xp6(4),e.Q6J("ngForOf",a.Object.keys(a.table[0]))}}let x=(()=>{class t{constructor(){this.teams=[],this.table=[],this.Object=Object}ngOnInit(){let a=0;this.data?.forEach((p,i)=>{i>1&&i<9&&this.table.push({position:++a,team:p.C,points:p.D,played:p.E,wins:p.F,draws:p.G,losses:p.H,goalsFor:p.I,goalsAgainst:p.J,goalsDifference:p.K})})}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-table"]],inputs:{data:"data"},standalone:!0,features:[e.jDz],decls:2,vars:2,consts:[["class","teams-wrapper",4,"ngIf"],["class","table-wrapper",4,"ngIf"],[1,"teams-wrapper"],[1,"title"],["class","content",4,"ngFor","ngForOf"],[1,"content"],[1,"table-wrapper"],[1,"table-container"],["class","column",4,"ngFor","ngForOf"],[1,"column"],[3,"class",4,"ngFor","ngForOf"]],template:function(a,p){1&a&&(e.YNc(0,w,4,1,"div",0),e.YNc(1,v,5,1,"div",1)),2&a&&(e.Q6J("ngIf",!1),e.xp6(1),e.Q6J("ngIf",null==p.table?null:p.table.length))},dependencies:[o.ax,o.O5,g],styles:["app-table{display:flex;width:100%}app-table .teams-wrapper{display:flex;flex-direction:column;grid-gap:.3rem;margin-bottom:2rem;width:100%}app-table .teams-wrapper .title{background-color:#ffde3de6;color:#292f6c;text-align:center;padding:.1rem}app-table .teams-wrapper .content{background-color:#292f6ce6;text-align:center;padding:.1rem}app-table .table-wrapper{display:flex;flex-direction:column;grid-gap:.3rem;width:100%}app-table .table-wrapper .title{background-color:#ffde3de6;color:#292f6c;text-align:center;padding:.1rem}app-table .table-wrapper .table-container{display:grid;grid-template-columns:1.5rem minmax(10rem,auto) repeat(8,2.3rem);grid-gap:.3rem;overflow:hidden}app-table .table-wrapper .table-container .column{display:grid;grid-auto-rows:auto;grid-gap:.3rem;overflow:hidden}app-table .table-wrapper .table-container .column .header{display:flex;align-items:center;justify-content:center;overflow:hidden;background-color:#292f6ce6;padding:.1rem}app-table .table-wrapper .table-container .column .header.team{justify-content:flex-start;padding:.1rem .5rem}app-table .table-wrapper .table-container .column .header span{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}app-table .table-wrapper .table-container .column .cell{display:flex;align-items:center;justify-content:center;overflow:hidden;background-color:#292f6ce6;padding:.1rem}app-table .table-wrapper .table-container .column .cell.team{justify-content:flex-start}app-table .table-wrapper .table-container .column .cell span{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}\n"],encapsulation:2}),t})();var Z=r(5869);function y(t,n){if(1&t&&e._UZ(0,"app-table",1),2&t){const a=e.oxw();e.Q6J("data",a.data)}}function T(t,n){if(1&t&&e._UZ(0,"app-matches",1),2&t){const a=e.oxw();e.Q6J("data",a.data)}}let A=(()=>{class t{constructor(){this.dataService=(0,e.f3M)(Z.D),this.sheet=""}ngOnInit(){this.data=this.dataService?.couracup?.find(a=>a.name===this.sheet)?.data,this.data||console.log("Erro!!!")}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-group"]],inputs:{sheet:"sheet"},standalone:!0,features:[e.jDz],decls:2,vars:2,consts:[[3,"data",4,"ngIf"],[3,"data"]],template:function(a,p){1&a&&(e.YNc(0,y,1,1,"app-table",0),e.YNc(1,T,1,1,"app-matches",0)),2&a&&(e.Q6J("ngIf",p.data),e.xp6(1),e.Q6J("ngIf",p.data))},dependencies:[x,f,o.O5],styles:["app-group{display:flex;flex-direction:column;gap:1rem;padding-bottom:1rem}\n"],encapsulation:2}),t})(),G=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["page-10-06"]],standalone:!0,features:[e.jDz],decls:24,vars:4,consts:[[1,"u-wrapper"],[1,"u-title"],[1,"u-groups-wrapper"],[1,"u-group-wrapper"],[1,"u-group-title"],[3,"sheet"]],template:function(a,p){1&a&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"U7"),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"div",4),e._uU(6,"Grupo A"),e.qZA(),e._UZ(7,"app-group",5),e.qZA(),e.TgZ(8,"div",3)(9,"div",4),e._uU(10,"Grupo B"),e.qZA(),e._UZ(11,"app-group",5),e.qZA()()(),e.TgZ(12,"div",0)(13,"div",1),e._uU(14,"U9"),e.qZA(),e.TgZ(15,"div",2)(16,"div",3)(17,"div",4),e._uU(18,"Grupo A"),e.qZA(),e._UZ(19,"app-group",5),e.qZA(),e.TgZ(20,"div",3)(21,"div",4),e._uU(22,"Grupo B"),e.qZA(),e._UZ(23,"app-group",5),e.qZA()()()),2&a&&(e.xp6(7),e.Q6J("sheet","U7_GA"),e.xp6(4),e.Q6J("sheet","U7_GB"),e.xp6(8),e.Q6J("sheet","U9_GA"),e.xp6(4),e.Q6J("sheet","U9_GB"))},dependencies:[A],styles:["page-10-06{display:flex;padding:1rem;padding-top:0;gap:2rem}page-10-06 .u-wrapper{display:flex;flex-direction:column;gap:1rem}page-10-06 .u-wrapper .u-title{background-color:#fff;color:#292f6c;text-align:center;padding:.2rem;font-size:1.3rem;font-weight:700}page-10-06 .u-wrapper .u-groups-wrapper{display:flex;gap:1rem}page-10-06 .u-wrapper .u-groups-wrapper .u-group-wrapper{display:flex;flex-direction:column;gap:.5rem}page-10-06 .u-wrapper .u-groups-wrapper .u-group-wrapper .u-group-title{background-color:#292f6ce6;text-align:center;padding:.2rem;font-size:1.1rem}\n"],encapsulation:2}),t})()}}]);