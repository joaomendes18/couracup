"use strict";(self.webpackChunkcouracup=self.webpackChunkcouracup||[]).push([[992],{8992:(v,n,o)=>{o.r(n),o.d(n,{SeventeenEighteenOfJunePage:()=>Z});var s=o(9767),i=o(5861),u=o(6814),a=o(4769),c=o(471),d=o(9558),l=o(9718),f=o(5619);function m(r,g){if(1&r&&(a.ynx(0),a.TgZ(1,"div",1),a._uU(2,"JOGOS 17 DE JUNHO"),a.qZA(),a.TgZ(3,"div",2),a._uU(4,"JOGOS 18 DE JUNHO"),a.qZA(),a.TgZ(5,"div",3)(6,"div",4),a._uU(7,"CAMPO 1"),a.qZA(),a._UZ(8,"app-matches",5),a.qZA(),a.TgZ(9,"div",6)(10,"div",4),a._uU(11,"CAMPO 2"),a.qZA(),a._UZ(12,"app-matches",5),a.qZA(),a.TgZ(13,"div",7)(14,"div",4),a._uU(15,"CAMPO 1"),a.qZA(),a._UZ(16,"app-matches",5),a.qZA(),a.TgZ(17,"div",8)(18,"div",4),a._uU(19,"CAMPO 2"),a.qZA(),a._UZ(20,"app-matches",5),a.qZA(),a.TgZ(21,"div",9),a._uU(22,"CLASSIFICA\xc7\xc3O"),a.qZA(),a.TgZ(23,"div",10)(24,"div",11),a._uU(25,"GRUPO A"),a.qZA(),a._UZ(26,"app-table",5),a.qZA(),a.TgZ(27,"div",12)(28,"div",11),a._uU(29,"GRUPO B"),a.qZA(),a._UZ(30,"app-table",5),a.qZA(),a.TgZ(31,"div",13)(32,"div",11),a._uU(33,"GRUPO C"),a.qZA(),a._UZ(34,"app-table",5),a.qZA(),a.TgZ(35,"div",14)(36,"div",11),a._uU(37,"GRUPO D"),a.qZA(),a._UZ(38,"app-table",5),a.qZA(),a.TgZ(39,"div",15)(40,"div",11),a._uU(41,"GRUPO E"),a.qZA(),a._UZ(42,"app-table",5),a.qZA(),a.TgZ(43,"div",16)(44,"div",11),a._uU(45,"GRUPO F"),a.qZA(),a._UZ(46,"app-table",5),a.qZA(),a.BQk()),2&r){const e=a.oxw();a.xp6(8),a.Q6J("data",e.campo117),a.xp6(4),a.Q6J("data",e.campo217),a.xp6(4),a.Q6J("data",e.campo118),a.xp6(4),a.Q6J("data",e.campo218),a.xp6(6),a.Q6J("data",e.grupo1),a.xp6(4),a.Q6J("data",e.grupo2),a.xp6(4),a.Q6J("data",e.grupo3),a.xp6(4),a.Q6J("data",e.grupo4),a.xp6(4),a.Q6J("data",e.grupo5),a.xp6(4),a.Q6J("data",e.grupo6)}}let U=(()=>{class r{constructor(){this.dataService=(0,a.f3M)(l.D),this.grupo1=[],this.grupo2=[],this.grupo3=[],this.grupo4=[],this.grupo5=[],this.grupo6=[],this.ready$=new f.X(!1)}ngOnInit(){var e=this;return(0,i.Z)(function*(){yield e.readData(),yield e.readData2(),setInterval((0,i.Z)(function*(){yield e.readData(),yield e.readData2()}),1e4)})()}readData(){var e=this;return(0,i.Z)(function*(){try{const p=yield e.dataService.getData("./assets/files/u11.xlsm");e.setData(p)}catch{console.log("error")}})()}setData(e){const p=e?.find(t=>"Resultados"===t.name)?.data;this.campo117=p.splice(10,3),this.campo217=p.splice(23,3),this.grupo1=e?.find(t=>"U11_A"===t.name)?.data.slice(2,5),this.grupo2=e?.find(t=>"U11_B"===t.name)?.data.slice(2,5),this.grupo3=e?.find(t=>"U11_C"===t.name)?.data.slice(2,5),this.grupo4=e?.find(t=>"U11_D"===t.name)?.data.slice(2,5),this.grupo5=e?.find(t=>"U11_E"===t.name)?.data.slice(2,5),this.grupo6=e?.find(t=>"U11_F"===t.name)?.data.slice(2,5),this.ready$.next(!0)}readData2(){var e=this;return(0,i.Z)(function*(){try{const p=yield e.dataService.getData("./assets/files/u11_n.xlsm");e.setData2(p)}catch{console.log("error")}})()}setData2(e){const p=e?.find(t=>"Resultados"===t.name)?.data;this.campo118=p.splice(31,6),this.campo218=p.splice(37,6),this.ready$.next(!0)}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=a.Xpm({type:r,selectors:[["page-U11-17-18-06"]],standalone:!0,features:[a.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[1,"u-title","jogos17"],[1,"u-title","jogos18"],[1,"u-group-wrapper","campo1-17"],[1,"u-group-title"],[3,"data"],[1,"u-group-wrapper","campo2-17"],[1,"u-group-wrapper","campo1-18"],[1,"u-group-wrapper","campo2-18"],[1,"u-title","classificacao"],[1,"u-table-wrapper","grupo1"],[1,"u-table-title"],[1,"u-table-wrapper","grupo2"],[1,"u-table-wrapper","grupo3"],[1,"u-table-wrapper","grupo4"],[1,"u-table-wrapper","grupo5"],[1,"u-table-wrapper","grupo6"]],template:function(e,p){1&e&&(a.YNc(0,m,47,10,"ng-container",0),a.ALo(1,"async")),2&e&&a.Q6J("ngIf",a.lcZ(1,1,p.ready$))},dependencies:[c.G,d.a,u.O5,u.Ov],styles:['page-U11-17-18-06{display:grid;padding-top:0;gap:1rem;grid-template-areas:"classificacao classificacao" "grupo1 grupo2" "grupo3 grupo4" "grupo5 grupo6" "jogos17 jogos17" "campo1-17 campo2-17" "jogos18 jogos18" "campo1-18 campo2-18";grid-auto-rows:max-content;grid-template-columns:1fr 1fr}page-U11-17-18-06 .jogos17{grid-area:jogos17}page-U11-17-18-06 .jogos18{grid-area:jogos18}page-U11-17-18-06 .campo1{grid-area:campo1}page-U11-17-18-06 .campo2{grid-area:campo2}page-U11-17-18-06 .classificacao{grid-area:classificacao}page-U11-17-18-06 .grupo1{grid-area:grupo1}page-U11-17-18-06 .grupo2{grid-area:grupo2}page-U11-17-18-06 .grupo3{grid-area:grupo3}page-U11-17-18-06 .grupo4{grid-area:grupo4}page-U11-17-18-06 .grupo5{grid-area:grupo5}page-U11-17-18-06 .grupo6{grid-area:grupo6}page-U11-17-18-06 .u-title{background-color:#fff;color:#292f6c;text-align:center;padding:.2rem;font-size:1.3rem;font-weight:700}page-U11-17-18-06 .u-group-wrapper{display:flex;flex-direction:column;gap:.5rem}page-U11-17-18-06 .u-group-wrapper .u-group-title{background-color:#292f6ce6;text-align:center;padding:.2rem;font-size:1.1rem}page-U11-17-18-06 .u-group-title-final{background-color:#292f6ce6;text-align:center;padding:.2rem;font-size:1.1rem}page-U11-17-18-06 .u-table-wrapper{display:flex;flex-direction:column;gap:.5rem}page-U11-17-18-06 .u-table-wrapper .u-table-title{background-color:#ffde3de6;color:#292f6c;text-align:center;padding:.2rem;font-size:1.1rem}\n'],encapsulation:2}),r})(),Z=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=a.Xpm({type:r,selectors:[["page-17-18-06"]],standalone:!0,features:[a.jDz],decls:6,vars:0,consts:[[1,"u-title"],[1,"page-u11"],[1,"page-u13"]],template:function(e,p){1&e&&(a.TgZ(0,"div",0),a._uU(1,"U11"),a.qZA(),a._UZ(2,"page-U11-17-18-06",1),a.TgZ(3,"div",0),a._uU(4,"U13"),a.qZA(),a._UZ(5,"page-U13-17-06",2))},dependencies:[s.e,U],styles:['page-17-18-06{display:grid;flex:1;padding:1rem;padding-top:0;gap:3rem;justify-content:center;grid-template-columns:1fr 1fr;grid-template-areas:"u11 u13" "page-u11 page-u13";grid-auto-rows:max-content;row-gap:1rem}.u11{grid-area:u11}.page-u11{grid-area:page-u11}.u13{grid-area:u13}.page-u13{grid-area:page-u13}.u-title{background-color:#292f6ce6;text-align:center;padding:.2rem;font-size:1.7rem;font-weight:700}\n'],encapsulation:2}),r})()}}]);