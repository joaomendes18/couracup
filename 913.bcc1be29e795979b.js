"use strict";(self.webpackChunkcouracup=self.webpackChunkcouracup||[]).push([[913],{5913:(v,u,p)=>{p.r(u),p.d(u,{SeventeenOfJunePage:()=>Z});var c=p(9767),i=p(5861),n=p(6814),a=p(4769),s=p(471),d=p(9558),l=p(9718),f=p(5619);function m(t,g){if(1&t&&(a.ynx(0),a.TgZ(1,"div",1),a._uU(2,"JOGOS"),a.qZA(),a.TgZ(3,"div",2)(4,"div",3),a._uU(5,"CAMPO 1"),a.qZA(),a._UZ(6,"app-matches",4),a.qZA(),a.TgZ(7,"div",5)(8,"div",3),a._uU(9,"CAMPO 2"),a.qZA(),a._UZ(10,"app-matches",4),a.qZA(),a.TgZ(11,"div",6),a._uU(12,"CLASSIFICA\xc7\xc3O"),a.qZA(),a.TgZ(13,"div",7)(14,"div",8),a._uU(15,"GRUPO A"),a.qZA(),a._UZ(16,"app-table",4),a.qZA(),a.TgZ(17,"div",9)(18,"div",8),a._uU(19,"GRUPO B"),a.qZA(),a._UZ(20,"app-table",4),a.qZA(),a.TgZ(21,"div",10)(22,"div",8),a._uU(23,"GRUPO C"),a.qZA(),a._UZ(24,"app-table",4),a.qZA(),a.TgZ(25,"div",11)(26,"div",8),a._uU(27,"GRUPO D"),a.qZA(),a._UZ(28,"app-table",4),a.qZA(),a.TgZ(29,"div",12)(30,"div",8),a._uU(31,"GRUPO E"),a.qZA(),a._UZ(32,"app-table",4),a.qZA(),a.TgZ(33,"div",13)(34,"div",8),a._uU(35,"GRUPO F"),a.qZA(),a._UZ(36,"app-table",4),a.qZA(),a.BQk()),2&t){const e=a.oxw();a.xp6(6),a.Q6J("data",e.campo1),a.xp6(4),a.Q6J("data",e.campo2),a.xp6(6),a.Q6J("data",e.grupo1),a.xp6(4),a.Q6J("data",e.grupo2),a.xp6(4),a.Q6J("data",e.grupo3),a.xp6(4),a.Q6J("data",e.grupo4),a.xp6(4),a.Q6J("data",e.grupo5),a.xp6(4),a.Q6J("data",e.grupo6)}}let U=(()=>{class t{constructor(){this.dataService=(0,a.f3M)(l.D),this.grupo1=[],this.grupo2=[],this.grupo3=[],this.grupo4=[],this.grupo5=[],this.grupo6=[],this.ready$=new f.X(!1)}ngOnInit(){var e=this;return(0,i.Z)(function*(){yield e.readData(),setInterval((0,i.Z)(function*(){e.readData()}),1e4)})()}readData(){var e=this;return(0,i.Z)(function*(){try{const o=yield e.dataService.getData("./assets/files/u11.xlsm");e.setData(o)}catch{console.log("error")}})()}setData(e){const o=e?.find(r=>"Resultados"===r.name)?.data;this.campo1=o.splice(1,12),this.campo2=o.splice(5,12),this.grupo1=e?.find(r=>"U11_A"===r.name)?.data.slice(2,5),this.grupo2=e?.find(r=>"U11_B"===r.name)?.data.slice(2,5),this.grupo3=e?.find(r=>"U11_C"===r.name)?.data.slice(2,5),this.grupo4=e?.find(r=>"U11_D"===r.name)?.data.slice(2,5),this.grupo5=e?.find(r=>"U11_E"===r.name)?.data.slice(2,5),this.grupo6=e?.find(r=>"U11_F"===r.name)?.data.slice(2,5),this.ready$.next(!0)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["page-U11-17-06"]],standalone:!0,features:[a.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[1,"u-title","jogos"],[1,"u-group-wrapper","campo1"],[1,"u-group-title"],[3,"data"],[1,"u-group-wrapper","campo2"],[1,"u-title","classificacao"],[1,"u-table-wrapper","grupo1"],[1,"u-table-title"],[1,"u-table-wrapper","grupo2"],[1,"u-table-wrapper","grupo3"],[1,"u-table-wrapper","grupo4"],[1,"u-table-wrapper","grupo5"],[1,"u-table-wrapper","grupo6"]],template:function(e,o){1&e&&(a.YNc(0,m,37,8,"ng-container",0),a.ALo(1,"async")),2&e&&a.Q6J("ngIf",a.lcZ(1,1,o.ready$))},dependencies:[s.G,d.a,n.O5,n.Ov],styles:['page-U11-17-06{display:grid;padding-top:0;gap:1rem;grid-template-areas:"jogos jogos" "campo1 campo2" "classificacao classificacao" "grupo1 grupo2" "grupo3 grupo4" "grupo5 grupo6";grid-auto-rows:max-content;grid-template-columns:1fr 1fr}page-U11-17-06 .jogos{grid-area:jogos}page-U11-17-06 .campo1{grid-area:campo1}page-U11-17-06 .campo2{grid-area:campo2}page-U11-17-06 .classificacao{grid-area:classificacao}page-U11-17-06 .grupo1{grid-area:grupo1}page-U11-17-06 .grupo2{grid-area:grupo2}page-U11-17-06 .grupo3{grid-area:grupo3}page-U11-17-06 .grupo4{grid-area:grupo4}page-U11-17-06 .grupo5{grid-area:grupo5}page-U11-17-06 .grupo6{grid-area:grupo6}page-U11-17-06 .u-title{background-color:#fff;color:#292f6c;text-align:center;padding:.2rem;font-size:1.3rem;font-weight:700}page-U11-17-06 .u-group-wrapper{display:flex;flex-direction:column;gap:.5rem}page-U11-17-06 .u-group-wrapper .u-group-title{background-color:#292f6ce6;text-align:center;padding:.2rem;font-size:1.1rem}page-U11-17-06 .u-group-title-final{background-color:#292f6ce6;text-align:center;padding:.2rem;font-size:1.1rem}page-U11-17-06 .u-table-wrapper{display:flex;flex-direction:column;gap:.5rem}page-U11-17-06 .u-table-wrapper .u-table-title{background-color:#ffde3de6;color:#292f6c;text-align:center;padding:.2rem;font-size:1.1rem}\n'],encapsulation:2}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["page-17-06"]],standalone:!0,features:[a.jDz],decls:6,vars:0,consts:[[1,"u-title"],[1,"page-u11"],[1,"page-u13"]],template:function(e,o){1&e&&(a.TgZ(0,"div",0),a._uU(1,"U11"),a.qZA(),a._UZ(2,"page-U11-17-06",1),a.TgZ(3,"div",0),a._uU(4,"U13"),a.qZA(),a._UZ(5,"page-U13-17-06",2))},dependencies:[c.e,U],styles:['page-17-06{display:grid;flex:1;padding:1rem;gap:3rem;justify-content:center;grid-template-columns:1fr 1fr;grid-template-areas:"u11 u13" "page-u11 page-u13";grid-auto-rows:max-content;row-gap:1rem}.u11{grid-area:u11}.page-u11{grid-area:page-u11}.u13{grid-area:u13}.page-u13{grid-area:page-u13}.u-title{background-color:#292f6ce6;text-align:center;padding:.2rem;font-size:1.7rem;font-weight:700}\n'],encapsulation:2}),t})()}}]);