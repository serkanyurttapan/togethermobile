function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{tmrb:function(t,n,e){"use strict";e.r(n),e.d(n,"Tab1PageModule",(function(){return u}));var o=e("TEn/"),r=e("ofXK"),i=e("3Pt+"),a=e("qtYk"),c=e("tyNb"),s=e("fXoL");function l(t,n){if(1&t&&(s.Mb(0,"ion-card"),s.Kb(1,"img",8),s.Mb(2,"ion-card-header",9),s.Mb(3,"ion-card-title"),s.ec(4),s.Kb(5,"ion-icon",10),s.Lb(),s.Mb(6,"ion-card-subtitle"),s.Kb(7,"ion-icon",11),s.ec(8),s.Lb(),s.Lb(),s.Lb()),2&t){var e=n.$implicit;s.zb(1),s.Yb("src",e.img,s.bc),s.zb(3),s.gc(" ",e.name,", 19 yrs "),s.zb(4),s.hc(" ",e.city," (",e.country,") ")}}var d,b,h,p=[{path:"",component:(d=function(){function t(n,e,o,r){_classCallCheck(this,t),this.gestureCtrl=n,this.plt=e,this.modalController=o,this.router=r,this.people=[{name:"Maxie Lynch",img:"../../assets/chat/chat1.jpg",city:"New York",country:"USA",power:0},{name:"Bennoch Sperry",img:"../../assets/chat/chat2.jpg",city:"Washington",country:"USA",power:0},{name:"Mikeny Hartington",img:"../../assets/chat/chat3.jpg",city:"Atlanta",country:"USA",power:0},{name:"Maxie Lynch",img:"../../assets/chat/chat4.jpg",city:"New York",country:"USA",power:0},{name:"Bennoch Sperry",img:"../../assets/chat/chat5.jpg",city:"Washington",country:"USA",power:0},{name:"Mikeny Hartington",img:"../../assets/chat/chat6.jpg",city:"Atlanta",country:"USA",power:0}],this.nbr=1}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"onLike",value:function(){var t=this.cards.toArray()[this.cards.toArray().length-this.nbr];t.nativeElement.style.transition="1s ease-out",t.nativeElement.style.transform="translateX(".concat(2*+this.plt.width(),"px)\n              rotate(100deg)"),this.nbr++}},{key:"onDisLike",value:function(){var t=this.cards.toArray()[this.cards.toArray().length-this.nbr];t.nativeElement.style.transition="1s ease-out",t.nativeElement.style.transform="translateX(".concat(2*-this.plt.width(),"px)\n              rotate(100deg)"),this.nbr++}},{key:"ngAfterViewInit",value:function(){var t=this.cards.toArray();this.useTinderSwipe(t)}},{key:"useTinderSwipe",value:function(t){for(var n=this,e=function(e){var o=t[e];n.gestureCtrl.create({el:o.nativeElement,gestureName:"swipte",onStart:function(t){},onMove:function(t){o.nativeElement.style.transform="translateX(".concat(t.deltaX,"px)\n          rotate(").concat(t.deltaX/10,"deg)"),n.setCardColor(t.deltaX,o.nativeElement)},onEnd:function(t){o.nativeElement.style.transition="1s ease-out",t.deltaX>150?(o.nativeElement.style.transform="translateX(".concat(2*+n.plt.width(),"px)\n            rotate(").concat(t.deltaX/2,"deg)"),n.nbr++):t.deltaX<-150?(o.nativeElement.style.transform="translateX(".concat(2*-n.plt.width(),"px)\n            rotate(").concat(t.deltaX/2,"deg)"),n.nbr++):o.nativeElement.style.transform=""}}).enable(!0)},o=0;o<t.length;o++)e(o)}},{key:"setCardColor",value:function(t,n){var e=Math.abs(t),o=Math.trunc(Math.min(256-e,256));this.decimalToHex(o,2)}},{key:"decimalToHex",value:function(t,n){var e=Number(t).toString(16);for(n=null==n?n=2:n;e.length<n;)e="0"+e;return e}}]),t}(),d.\u0275fac=function(t){return new(t||d)(s.Jb(o.c),s.Jb(o.T),s.Jb(o.R),s.Jb(c.g))},d.\u0275cmp=s.Db({type:d,selectors:[["app-tab1"]],viewQuery:function(t,n){var e;1&t&&s.ic(o.j,!0,s.l),2&t&&s.ac(e=s.Ub())&&(n.cards=e)},decls:12,vars:1,consts:[[4,"ngFor","ngForOf"],["slot","bottom",1,"ion-no-border"],["size","5"],["color","danger",1,"ion-float-right",3,"click"],["name","close-sharp"],["size","2"],["color","success",3,"click"],["name","heart-sharp"],["routerLink","/view","routerDirection","forward",3,"src"],["routerLink","/view","routerDirection","forward"],["color","success","name","checkmark-circle"],["name","location"]],template:function(t,n){1&t&&(s.Mb(0,"ion-content"),s.dc(1,l,9,4,"ion-card",0),s.Lb(),s.Mb(2,"ion-footer",1),s.Mb(3,"ion-row"),s.Mb(4,"ion-col",2),s.Mb(5,"ion-fab-button",3),s.Tb("click",(function(){return n.onDisLike()})),s.Kb(6,"ion-icon",4),s.Lb(),s.Lb(),s.Mb(7,"ion-col",5),s.ec(8," \xa0 "),s.Lb(),s.Mb(9,"ion-col",2),s.Mb(10,"ion-fab-button",6),s.Tb("click",(function(){return n.onLike()})),s.Kb(11,"ion-icon",7),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&t&&(s.zb(1),s.Yb("ngForOf",n.people))},directives:[o.p,r.h,o.r,o.D,o.o,o.q,o.t,o.j,o.V,c.h,o.l,o.n,o.m],styles:["ion-content[_ngcontent-%COMP%]{padding:0;margin:0}@media screen and (min-height:570px) and (max-height:680px){img[_ngcontent-%COMP%]{width:100%;height:480px}ion-card-header[_ngcontent-%COMP%]{margin-top:-91px;color:#fff;border-bottom-left-radius:10px;border-bottom-right-radius:10px;text-shadow:0 1px 4px #000;background:rgba(0,0,0,.4)}}@media screen and (max-height:570px){img[_ngcontent-%COMP%]{width:100%;height:410px}ion-card-header[_ngcontent-%COMP%]{margin-top:-77px;margin-bottom:0;padding-bottom:8px;color:#fff;border-bottom-left-radius:10px;border-bottom-right-radius:10px;text-shadow:0 1px 4px #000;background:rgba(0,0,0,.4)}ion-card-title[_ngcontent-%COMP%]{font-size:23px;color:#fff}ion-footer[_ngcontent-%COMP%]{padding-top:0}}img[_ngcontent-%COMP%]{border-radius:10px;margin:0;box-shadow:1px 2px 15px #000}ion-card[_ngcontent-%COMP%]{position:absolute;margin:0;width:100%;height:100%}ion-card-subtitle[_ngcontent-%COMP%], ion-card-title[_ngcontent-%COMP%]{color:#fff}ion-card-content[_ngcontent-%COMP%]{padding:0}ion-fab-button[_ngcontent-%COMP%]{--box-shadow:0px 2px 10px rgba(0,0,0,0.8)}@media screen and (min-height:680px){ion-footer[_ngcontent-%COMP%]{padding-top:10px}img[_ngcontent-%COMP%]{width:100%;height:600px}ion-card-header[_ngcontent-%COMP%]{margin-top:-92px;color:#fff;border-bottom-left-radius:10px;border-bottom-right-radius:10px;text-shadow:0 1px 4px #000;background:rgba(0,0,0,.4)}}img[_ngcontent-%COMP%]{width:100%;height:99%}"]}),d)}],g=((h=function t(){_classCallCheck(this,t)}).\u0275mod=s.Hb({type:h}),h.\u0275inj=s.Gb({factory:function(t){return new(t||h)},imports:[[c.i.forChild(p)],c.i]}),h),u=((b=function t(){_classCallCheck(this,t)}).\u0275mod=s.Hb({type:b}),b.\u0275inj=s.Gb({factory:function(t){return new(t||b)},imports:[[o.P,r.b,i.a,a.a,g]]}),b)}}]);