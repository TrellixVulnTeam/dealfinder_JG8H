(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{tmrb:function(i,e,n){"use strict";n.r(e),n.d(e,"Tab1PageModule",function(){return v});var o=n("TEn/"),t=n("ofXK"),s=n("3Pt+"),c=n("qtYk"),a=n("tyNb"),r=n("mrSG"),b=n("1dz3"),l=n("fXoL"),g=n("ROdG"),d=n("IfdK");function h(i,e){if(1&i){const i=l.Nb();l.Mb(0,"div"),l.Mb(1,"ion-slides",7),l.Mb(2,"ion-slide"),l.Kb(3,"ion-img",8),l.Lb(),l.Mb(4,"ion-slide"),l.Kb(5,"ion-img",9),l.Lb(),l.Mb(6,"ion-slide"),l.Kb(7,"ion-img",10),l.Lb(),l.Lb(),l.Mb(8,"div"),l.Mb(9,"p",11),l.ic(10,"Category"),l.Lb(),l.Mb(11,"ion-grid",12),l.Mb(12,"ion-row"),l.Mb(13,"ion-col"),l.Mb(14,"div",13),l.Ub("click",function(){return l.ec(i),l.Wb().moveToViewCategory(1)}),l.Kb(15,"ion-img",14),l.Mb(16,"ion-label",15),l.ic(17,"F&B"),l.Lb(),l.Lb(),l.Lb(),l.Mb(18,"ion-col"),l.Mb(19,"div",13),l.Ub("click",function(){return l.ec(i),l.Wb().moveToViewCategory(11)}),l.Kb(20,"ion-img",16),l.Mb(21,"ion-label",15),l.ic(22,"Shopping"),l.Lb(),l.Lb(),l.Lb(),l.Mb(23,"ion-col"),l.Mb(24,"div"),l.Kb(25,"ion-img",17),l.Mb(26,"ion-label",15),l.ic(27,"Massage"),l.Lb(),l.Lb(),l.Lb(),l.Mb(28,"ion-col"),l.Mb(29,"div",13),l.Ub("click",function(){return l.ec(i),l.Wb().moveToViewCategory(4)}),l.Kb(30,"ion-img",18),l.Mb(31,"ion-label",15),l.ic(32,"Leisure"),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(33,"ion-row"),l.Mb(34,"ion-col"),l.Kb(35,"ion-img",19),l.Mb(36,"ion-label",15),l.ic(37,"Kids"),l.Lb(),l.Lb(),l.Mb(38,"ion-col"),l.Mb(39,"div",13),l.Ub("click",function(){return l.ec(i),l.Wb().moveToViewCategory(2)}),l.Kb(40,"ion-img",20),l.Mb(41,"ion-label",15),l.ic(42,"Beauty"),l.Lb(),l.Lb(),l.Lb(),l.Mb(43,"ion-col"),l.Mb(44,"div",13),l.Ub("click",function(){return l.ec(i),l.Wb().moveToViewCategory(5)}),l.Kb(45,"ion-img",21),l.Mb(46,"ion-label",15),l.ic(47,"Fitness"),l.Lb(),l.Lb(),l.Lb(),l.Mb(48,"ion-col"),l.Kb(49,"ion-img",22),l.Mb(50,"ion-label",15),l.ic(51,"Others"),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb()}if(2&i){const i=l.Wb();l.zb(1),l.bc("options",i.slideOpts)}}function u(i,e){if(1&i){const i=l.Nb();l.Mb(0,"ion-item",13),l.Ub("click",function(){l.ec(i);const e=l.Wb().index;return l.Wb(2).goToDeal(e)}),l.Mb(1,"ion-thumbnail",27),l.Kb(2,"img",28),l.Lb(),l.Mb(3,"ion-label"),l.ic(4),l.Lb(),l.Lb()}if(2&i){const i=l.Wb().$implicit;l.zb(4),l.jc(i.dealName)}}function f(i,e){if(1&i&&(l.Mb(0,"ion-list"),l.hc(1,u,5,1,"ion-item",26),l.Lb()),2&i){const i=l.Wb(2);l.zb(1),l.bc("ngIf",i.searchedDeals.length>0)}}function p(i,e){1&i&&(l.Mb(0,"div",29),l.Mb(1,"h3"),l.ic(2,"No available results"),l.Lb(),l.Lb())}function M(i,e){if(1&i&&(l.Mb(0,"div"),l.Mb(1,"ion-item-divider",23),l.ic(2,"Search result:"),l.Lb(),l.hc(3,f,2,1,"ion-list",24),l.hc(4,p,3,0,"div",25),l.Lb()),2&i){const i=l.Wb();l.zb(3),l.bc("ngForOf",i.searchedDeals),l.zb(1),l.bc("ngIf",0==i.searchedDeals.length)}}const m=[{path:"",component:(()=>{class i{constructor(i,e,n,o){this.router=i,this.dealService=e,this.sessionService=n,this.modalController=o,this.slideOpts={initialSlide:0,speed:400,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},this.allDeals=new Array,this.searchedDeals=new Array,this.dealService.getAllDeals().subscribe(i=>{this.allDeals=i},i=>{console.log("********** ViewCategory.ts: "+i)},()=>{console.log(this.allDeals)}),this.searchVal="",this.existSearch=!1}ngOnInIt(){this.dealService.getAllDeals().subscribe(i=>{this.allDeals=i},i=>{console.log("********** ViewCategory.ts: "+i)},()=>{console.log(this.allDeals)})}moveToViewCategory(i){this.router.navigate(["/viewCategory",{categoryId:i}])}_ionChange(i){console.log(i.detail.value),this.searchVal=i.detail.value,this.searchedDeals=this.allDeals,this.searchVal&&""!=this.searchVal.trim()&&(this.searchedDeals=this.searchedDeals.filter(i=>i.dealName.toLowerCase().indexOf(this.searchVal.toLowerCase())>-1),console.log(this.searchedDeals))}goToDeal(i){this.router.navigate(["/viewDeal",{deal:JSON.stringify(this.searchedDeals[i])}])}clickFavourites(){return Object(r.a)(this,void 0,void 0,function*(){if(0==this.sessionService.getIsLogin()){const i=yield this.modalController.create({component:b.a,cssClass:"my-custom-modal-class"});return yield i.present()}})}}return i.\u0275fac=function(e){return new(e||i)(l.Jb(a.g),l.Jb(g.a),l.Jb(d.a),l.Jb(o.I))},i.\u0275cmp=l.Db({type:i,selectors:[["app-tab1"]],decls:9,vars:3,consts:[["color","primary"],[3,"ionChange"],["slot","primary"],["fill","solid","color","primary",2,"font-size","25px",3,"click"],["name","heart-circle-outline"],[3,"fullscreen"],[4,"ngIf"],["pager","true",3,"options"],["src","../assets/icon/food1.jpg"],["src","../assets/icon/shopping.jpeg"],["src","../assets/icon/children.png"],[1,"sub-headers"],["id","category-grid"],[3,"click"],["src","../assets/icon/food.png",1,"icon"],[1,"icon-label"],["src","../assets/icon/shopping.png",1,"icon"],["src","../assets/icon/massage.png",1,"icon"],["src","../assets/icon/leisure.png",1,"icon"],["src","../assets/icon/kids.png",1,"icon"],["src","../assets/icon/beauty.png",1,"icon"],["src","../assets/icon/fitness.png",1,"icon"],["src","../assets/icon/other.png",1,"icon"],["color","grey"],[4,"ngFor","ngForOf"],["style","text-align: center;display: block; margin-left: auto; margin-right: auto ",4,"ngIf"],[3,"click",4,"ngIf"],["slot","start"],["src","https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"],[2,"text-align","center","display","block","margin-left","auto","margin-right","auto"]],template:function(i,e){1&i&&(l.Mb(0,"ion-header"),l.Mb(1,"ion-toolbar",0),l.Mb(2,"ion-searchbar",1),l.Ub("ionChange",function(i){return e._ionChange(i)}),l.Lb(),l.Mb(3,"ion-buttons",2),l.Mb(4,"ion-button",3),l.Ub("click",function(){return e.clickFavourites()}),l.Kb(5,"ion-icon",4),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(6,"ion-content",5),l.hc(7,h,52,1,"div",6),l.hc(8,M,5,2,"div",6),l.Lb()),2&i&&(l.zb(6),l.bc("fullscreen",!0),l.zb(1),l.bc("ngIf",""==e.searchVal),l.zb(1),l.bc("ngIf",""!=e.searchVal))},directives:[o.l,o.F,o.w,o.J,o.f,o.e,o.m,o.i,t.j,o.y,o.x,o.n,o.k,o.v,o.h,o.s,o.q,t.i,o.t,o.p,o.D],styles:["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]{border-radius:50px;width:100%}ion-slides[_ngcontent-%COMP%]{height:30%}.sub-headers[_ngcontent-%COMP%]{padding-left:8px;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;font-weight:700}ion-slides[_ngcontent-%COMP%]{height:78%;width:100%}#category-grid[_ngcontent-%COMP%]{text-align:center}.icon[_ngcontent-%COMP%]{width:40px;height:40px;margin-left:auto;margin-right:auto}.icon-label[_ngcontent-%COMP%]{font-size:15px}.categoryButton[_ngcontent-%COMP%]{background-color:initial}"]}),i})()}];let L=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=l.Hb({type:i}),i.\u0275inj=l.Gb({imports:[[a.i.forChild(m)],a.i]}),i})(),v=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=l.Hb({type:i}),i.\u0275inj=l.Gb({imports:[[o.G,t.b,s.a,c.a,L]]}),i})()}}]);