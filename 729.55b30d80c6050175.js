"use strict";(self.webpackChunkcouracup=self.webpackChunkcouracup||[]).push([[729],{1729:(A,n,s)=>{s.r(n),s.d(n,{EighteenOfJunePage:()=>v});var g=s(5861),c=s(6814),a=s(4769),u=s(471),l=s(9718),d=s(5619);function f(i,o){if(1&i&&(a.ynx(0),a.TgZ(1,"div",1),a._uU(2,"JOGOS"),a.qZA(),a.TgZ(3,"div",2),a._uU(4,"CAMPO 1"),a.qZA(),a.TgZ(5,"div",3),a._uU(6,"CAMPO 2"),a.qZA(),a._UZ(7,"app-matches",4)(8,"app-matches",5)(9,"app-matches",6)(10,"app-matches",7)(11,"app-matches",8)(12,"app-matches",9)(13,"app-matches",10)(14,"app-matches",11),a.BQk()),2&i){const e=a.oxw();a.xp6(7),a.Q6J("data",e.oitavos1)("title","OITAVOS DE FINAL"),a.xp6(1),a.Q6J("data",e.oitavos2)("title","OITAVOS DE FINAL"),a.xp6(1),a.Q6J("data",e.quartos1)("title","QUARTOS DE FINAL"),a.xp6(1),a.Q6J("data",e.quartos2)("title","QUARTOS DE FINAL"),a.xp6(1),a.Q6J("data",e.meias1)("title","MEIAS FINAIS"),a.xp6(1),a.Q6J("data",e.meias2)("title","MEIAS FINAIS"),a.xp6(1),a.Q6J("data",e.terceiros)("title","TERCEIROS/QUARTOS"),a.xp6(1),a.Q6J("data",e.final)("title","FINAL")}}let m=(()=>{class i{constructor(){this.dataService=(0,a.f3M)(l.D),this.grupo1=[],this.grupo2=[],this.grupo3=[],this.grupo4=[],this.oitavos1=[],this.oitavos2=[],this.quartos1=[],this.quartos2=[],this.meias1=[],this.meias2=[],this.final=[],this.terceiros=[],this.ready$=new d.X(!1)}ngOnInit(){var e=this;return(0,g.Z)(function*(){yield e.readData(),setInterval((0,g.Z)(function*(){yield e.readData()}),1e4)})()}readData(){var e=this;return(0,g.Z)(function*(){try{const r=yield e.dataService.getData("./assets/files/u13.xlsm");e.setData(r)}catch{console.log("error")}})()}setData(e){const r=e?.find(p=>"Resultados"===p.name)?.data;this.campo1=r.splice(0,15),this.campo2=r.splice(1,15),this.grupo1=e?.find(p=>"U13_A"===p.name)?.data.slice(2,6),this.grupo2=e?.find(p=>"U13_B"===p.name)?.data.slice(2,6),this.grupo3=e?.find(p=>"U13_C"===p.name)?.data.slice(2,6),this.grupo4=e?.find(p=>"U13_D"===p.name)?.data.slice(2,6);const t=e?.find(p=>"Fase Final"===p.name)?.data;this.oitavos1=[...t].splice(0,4),this.oitavos2=[...t].splice(5,4),this.quartos1=[...t].splice(10,2),this.quartos2=[...t].splice(13,2),this.meias1=[...t].splice(16,1),this.meias2=[...t].splice(17,1),this.terceiros=[...t].splice(19,1),this.final=[...t].splice(20,1),this.ready$.next(!0)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=a.Xpm({type:i,selectors:[["page-U13-18-06"]],standalone:!0,features:[a.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[1,"u-title","jogos"],[1,"u-group-title","campo1"],[1,"u-group-title","campo2"],[1,"oitavos1",3,"data","title"],[1,"oitavos2",3,"data","title"],[1,"quartos1",3,"data","title"],[1,"quartos2",3,"data","title"],[1,"meias1",3,"data","title"],[1,"meias2",3,"data","title"],[1,"terceiros",3,"data","title"],[1,"final",3,"data","title"]],template:function(e,r){1&e&&(a.YNc(0,f,15,16,"ng-container",0),a.ALo(1,"async")),2&e&&a.Q6J("ngIf",a.lcZ(1,1,r.ready$))},dependencies:[u.G,c.O5,c.Ov],styles:['page-U13-18-06{display:grid;padding-top:0;gap:1rem;grid-template-areas:"jogos jogos" "campo1 campo2" "oitavos1 oitavos2" "quartos1 quartos2" "meias1 meias2" "terceiros terceiros" "final final";grid-auto-rows:max-content;grid-template-columns:1fr 1fr}page-U13-18-06 .jogos{grid-area:jogos}page-U13-18-06 .campo1{grid-area:campo1}page-U13-18-06 .campo2{grid-area:campo2}page-U13-18-06 .quartos1{grid-area:quartos1}page-U13-18-06 .quartos2{grid-area:quartos2}page-U13-18-06 .meias1{grid-area:meias1}page-U13-18-06 .meias2{grid-area:meias2}page-U13-18-06 .terceiros{grid-area:terceiros}page-U13-18-06 .final{grid-area:final}page-U13-18-06 .u-title{background-color:#fff;color:#292f6c;text-align:center;padding:.2rem;font-size:1.3rem;font-weight:700}page-U13-18-06 .u-group-wrapper{display:flex;flex-direction:column;gap:.5rem}page-U13-18-06 .u-group-wrapper .u-group-title{background-color:#292f6ce6;text-align:center;padding:.2rem;font-size:1.1rem}page-U13-18-06 .u-group-title-final{background-color:#292f6ce6;text-align:center;padding:.2rem;font-size:1.1rem}page-U13-18-06 .u-table-wrapper{display:flex;flex-direction:column;gap:.5rem}page-U13-18-06 .u-table-wrapper .u-table-title{background-color:#ffde3de6;color:#292f6c;text-align:center;padding:.2rem;font-size:1.1rem}page-U13-18-06 .u-group-title{background-color:#292f6ce6;text-align:center;padding:.2rem;font-size:1.1rem}\n'],encapsulation:2}),i})();var U=s(9558);function h(i,o){if(1&i&&(a.ynx(0),a.TgZ(1,"div",1),a._uU(2,"JOGOS"),a.qZA(),a.TgZ(3,"div",2)(4,"div",3),a._uU(5,"CAMPO 1"),a.qZA(),a._UZ(6,"app-matches",4),a.qZA(),a.TgZ(7,"div",5)(8,"div",3),a._uU(9,"CAMPO 2"),a.qZA(),a._UZ(10,"app-matches",4),a.qZA(),a.TgZ(11,"div",6),a._uU(12,"CLASSIFICA\xc7\xc3O"),a.qZA(),a.TgZ(13,"div",7)(14,"div",8),a._uU(15,"GRUPO G"),a.qZA(),a._UZ(16,"app-table",4),a.qZA(),a.TgZ(17,"div",9)(18,"div",8),a._uU(19,"GRUPO H"),a.qZA(),a._UZ(20,"app-table",4),a.qZA(),a.TgZ(21,"div",10)(22,"div",8),a._uU(23,"GRUPO I"),a.qZA(),a._UZ(24,"app-table",4),a.qZA(),a.TgZ(25,"div",11)(26,"div",8),a._uU(27,"GRUPO J"),a.qZA(),a._UZ(28,"app-table",4),a.qZA(),a.TgZ(29,"div",12)(30,"div",8),a._uU(31,"GRUPO K"),a.qZA(),a._UZ(32,"app-table",4),a.qZA(),a.TgZ(33,"div",13)(34,"div",8),a._uU(35,"GRUPO L"),a.qZA(),a._UZ(36,"app-table",4),a.qZA(),a.TgZ(37,"div",14),a._uU(38,"JOGOS"),a.qZA(),a.TgZ(39,"div",15)(40,"div",3),a._uU(41,"CAMPO 1"),a.qZA(),a._UZ(42,"app-matches",4),a.qZA(),a.TgZ(43,"div",16)(44,"div",3),a._uU(45,"CAMPO 2"),a.qZA(),a._UZ(46,"app-matches",4),a.qZA(),a.TgZ(47,"div",17),a._uU(48,"CLASSIFICA\xc7\xc3O"),a.qZA(),a.TgZ(49,"div",18)(50,"div",8),a._uU(51,"GRUPO M"),a.qZA(),a._UZ(52,"app-table",4),a.qZA(),a.TgZ(53,"div",19)(54,"div",8),a._uU(55,"GRUPO N"),a.qZA(),a._UZ(56,"app-table",4),a.qZA(),a._UZ(57,"app-matches",20),a.BQk()),2&i){const e=a.oxw();a.xp6(6),a.Q6J("data",e.campo1),a.xp6(4),a.Q6J("data",e.campo2),a.xp6(6),a.Q6J("data",e.grupo1),a.xp6(4),a.Q6J("data",e.grupo2),a.xp6(4),a.Q6J("data",e.grupo3),a.xp6(4),a.Q6J("data",e.grupo4),a.xp6(4),a.Q6J("data",e.grupo5),a.xp6(4),a.Q6J("data",e.grupo6),a.xp6(6),a.Q6J("data",e.campo3),a.xp6(4),a.Q6J("data",e.campo4),a.xp6(6),a.Q6J("data",e.grupo7),a.xp6(4),a.Q6J("data",e.grupo8),a.xp6(1),a.Q6J("data",e.final)("title","FINAL")}}let Z=(()=>{class i{constructor(){this.dataService=(0,a.f3M)(l.D),this.grupo1=[],this.grupo2=[],this.grupo3=[],this.grupo4=[],this.grupo5=[],this.grupo6=[],this.grupo7=[],this.grupo8=[],this.final=[],this.ready$=new d.X(!1)}ngOnInit(){var e=this;return(0,g.Z)(function*(){yield e.readData(),setInterval((0,g.Z)(function*(){e.readData()}),1e4)})()}readData(){var e=this;return(0,g.Z)(function*(){try{const r=yield e.dataService.getData("./assets/files/u11_n.xlsm");e.setData(r)}catch{console.log("error")}})()}setData(e){const r=e?.find(t=>"Resultados"===t.name)?.data;this.campo1=[...r].splice(10,3).concat([...r].splice(31,6)),this.campo2=[...r].splice(26,3).concat([...r].splice(43,6)),this.campo3=[...r].splice(37,3),this.campo4=[...r].splice(49,3),this.grupo1=e?.find(t=>"U11_A"===t.name)?.data.slice(2,5),this.grupo2=e?.find(t=>"U11_B"===t.name)?.data.slice(2,5),this.grupo3=e?.find(t=>"U11_C"===t.name)?.data.slice(2,5),this.grupo4=e?.find(t=>"U11_D"===t.name)?.data.slice(2,5),this.grupo5=e?.find(t=>"U11_E"===t.name)?.data.slice(2,5),this.grupo6=e?.find(t=>"U11_F"===t.name)?.data.slice(2,5),this.grupo7=e?.find(t=>"U11_M"===t.name)?.data.slice(2,5),this.grupo8=e?.find(t=>"U11_N"===t.name)?.data.slice(2,5),this.final=[...r].splice(40,1),this.ready$.next(!0)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=a.Xpm({type:i,selectors:[["page-U11-18-06"]],standalone:!0,features:[a.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[1,"u-title","jogos"],[1,"u-group-wrapper","campo1"],[1,"u-group-title"],[3,"data"],[1,"u-group-wrapper","campo2"],[1,"u-title","classificacao"],[1,"u-table-wrapper","grupo1"],[1,"u-table-title"],[1,"u-table-wrapper","grupo2"],[1,"u-table-wrapper","grupo3"],[1,"u-table-wrapper","grupo4"],[1,"u-table-wrapper","grupo5"],[1,"u-table-wrapper","grupo6"],[1,"u-title","jogos1"],[1,"u-group-wrapper","campo3"],[1,"u-group-wrapper","campo4"],[1,"u-title","classificacao1"],[1,"u-table-wrapper","grupo7"],[1,"u-table-wrapper","grupo8"],[1,"final",3,"data","title"]],template:function(e,r){1&e&&(a.YNc(0,h,58,14,"ng-container",0),a.ALo(1,"async")),2&e&&a.Q6J("ngIf",a.lcZ(1,1,r.ready$))},dependencies:[u.G,U.a,c.O5,c.Ov],styles:['page-U11-18-06{display:grid;padding-top:0;gap:1rem;grid-template-areas:"jogos jogos" "campo1 campo2" "classificacao classificacao" "grupo1 grupo2" "grupo3 grupo4" "grupo5 grupo6" "jogos1 jogos1" "campo3 campo4" "classificacao1 classificacao1" "grupo7 grupo8" "final final";grid-auto-rows:max-content;grid-template-columns:1fr 1fr}page-U11-18-06 .jogos{grid-area:jogos}page-U11-18-06 .campo1{grid-area:campo1}page-U11-18-06 .campo2{grid-area:campo2}page-U11-18-06 .classificacao{grid-area:classificacao}page-U11-18-06 .grupo1{grid-area:grupo1}page-U11-18-06 .grupo2{grid-area:grupo2}page-U11-18-06 .grupo3{grid-area:grupo3}page-U11-18-06 .grupo4{grid-area:grupo4}page-U11-18-06 .grupo5{grid-area:grupo5}page-U11-18-06 .grupo6{grid-area:grupo6}page-U11-18-06 .grupo7{grid-area:grupo7}page-U11-18-06 .grupo8{grid-area:grupo8}page-U11-18-06 .jogos1{grid-area:jogos1}page-U11-18-06 .classificacao1{grid-area:classificacao1}page-U11-18-06 .campo3{grid-area:campo3}page-U11-18-06 .campo4{grid-area:campo4}page-U11-18-06 .final{grid-area:final}page-U11-18-06 .u-title{background-color:#fff;color:#292f6c;text-align:center;padding:.2rem;font-size:1.3rem;font-weight:700}page-U11-18-06 .u-group-wrapper{display:flex;flex-direction:column;gap:.5rem}page-U11-18-06 .u-group-wrapper .u-group-title{background-color:#292f6ce6;text-align:center;padding:.2rem;font-size:1.1rem}page-U11-18-06 .u-group-title-final{background-color:#292f6ce6;text-align:center;padding:.2rem;font-size:1.1rem}page-U11-18-06 .u-table-wrapper{display:flex;flex-direction:column;gap:.5rem}page-U11-18-06 .u-table-wrapper .u-table-title{background-color:#ffde3de6;color:#292f6c;text-align:center;padding:.2rem;font-size:1.1rem}\n'],encapsulation:2}),i})(),v=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=a.Xpm({type:i,selectors:[["page-18-06"]],standalone:!0,features:[a.jDz],decls:6,vars:0,consts:[[1,"u-title"],[1,"page-u11"],[1,"page-u13"]],template:function(e,r){1&e&&(a.TgZ(0,"div",0),a._uU(1,"U11"),a.qZA(),a._UZ(2,"page-U11-18-06",1),a.TgZ(3,"div",0),a._uU(4,"U13"),a.qZA(),a._UZ(5,"page-U13-18-06",2))},dependencies:[m,Z],styles:['page-18-06{display:grid;flex:1;padding:1rem;padding-top:0;gap:3rem;justify-content:center;grid-template-columns:1fr 1fr;grid-template-areas:"u11 u13" "page-u11 page-u13";grid-auto-rows:max-content;row-gap:1rem}.u11{grid-area:u11}.page-u11{grid-area:page-u11}.u13{grid-area:u13}.page-u13{grid-area:page-u13}.u-title{background-color:#292f6ce6;text-align:center;padding:.2rem;font-size:1.7rem;font-weight:700}\n'],encapsulation:2}),i})()}}]);