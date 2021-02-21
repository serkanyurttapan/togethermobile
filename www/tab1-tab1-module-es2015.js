(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-card *ngFor=\"let p of people\">\n    <img routerLink=\"/view\" routerDirection=\"forward\" [src]=\"p.img\" />\n    <ion-card-header routerLink=\"/view\" routerDirection=\"forward\">\n      <ion-card-title> {{ p.name }}, 19 yrs\n        <ion-icon color=\"success\" name=\"checkmark-circle\"></ion-icon>\n      </ion-card-title>\n      <ion-card-subtitle>\n        <ion-icon name=\"location\"></ion-icon> {{ p.city }} ({{ p.country }}) \n      </ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n</ion-content>\n<ion-footer slot=\"bottom\" class=\"ion-no-border\">\n  <ion-row>\n    <ion-col size=\"5\">\n      <ion-fab-button (click)=\"onDisLike()\" class=\"ion-float-right\" color=\"danger\">\n        <ion-icon name=\"close-sharp\"></ion-icon>\n      </ion-fab-button>\n    </ion-col>\n    <ion-col size=\"2\">\n      &nbsp;\n    </ion-col>\n    <ion-col size=\"5\">\n      <ion-fab-button (click)=\"onLike()\" color=\"success\">\n        <ion-icon name=\"heart-sharp\"></ion-icon>\n      </ion-fab-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  padding: 0;\n  margin: 0;\n}\n\n@media screen and (min-height: 570px) and (max-height: 680px) {\n  img {\n    width: 100%;\n    height: 480px;\n  }\n\n  ion-card-header {\n    margin-top: -91px;\n    color: white;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    text-shadow: 0px 1px 4px black;\n    background: rgba(0, 0, 0, 0.4);\n  }\n}\n\n@media screen and (max-height: 570px) {\n  img {\n    width: 100%;\n    height: 410px;\n  }\n\n  ion-card-header {\n    margin-top: -77px;\n    margin-bottom: 0;\n    padding-bottom: 8px;\n    color: white;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    text-shadow: 0px 1px 4px black;\n    background: rgba(0, 0, 0, 0.4);\n  }\n\n  ion-card-title {\n    font-size: 23px;\n    color: white;\n  }\n\n  ion-footer {\n    padding-top: 0px;\n  }\n}\n\nimg {\n  width: 100%;\n  border-radius: 10px;\n  margin: 0px;\n  box-shadow: 1px 2px 15px black;\n}\n\nion-card {\n  position: absolute;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\nion-card-subtitle {\n  color: white;\n}\n\nion-card-title {\n  color: white;\n}\n\nion-card-content {\n  padding: 0;\n}\n\nion-fab-button {\n  --box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.8);\n}\n\n@media screen and (min-height: 680px) {\n  ion-footer {\n    padding-top: 10px;\n  }\n\n  img {\n    width: 100%;\n    height: 600px;\n  }\n\n  ion-card-header {\n    margin-top: -92px;\n    color: white;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    text-shadow: 0px 1px 4px black;\n    background: rgba(0, 0, 0, 0.4);\n  }\n}\n\nimg {\n  width: 100%;\n  height: 99%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXFQ0ODBcXERvd25sb2Fkc1xcQ29waWUgZGUgZGF0aW5nL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FDREo7O0FER0E7RUFFSTtJQUNJLFdBQUE7SUFDQSxhQUFBO0VDRE47O0VESUc7SUFDRyxpQkFBQTtJQUNBLFlBQUE7SUFDQSwrQkFBQTtJQUNBLGdDQUFBO0lBQ0EsOEJBQUE7SUFDQSw4QkFBQTtFQ0ROO0FBQ0Y7O0FETUE7RUFFSTtJQUNJLFdBQUE7SUFDQSxhQUFBO0VDTE47O0VEUUc7SUFDRyxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsK0JBQUE7SUFDQSxnQ0FBQTtJQUNBLDhCQUFBO0lBQ0EsOEJBQUE7RUNMTjs7RURRRTtJQUNJLGVBQUE7SUFDQSxZQUFBO0VDTE47O0VEUUU7SUFDSSxnQkFBQTtFQ0xOO0FBQ0Y7O0FEUUE7RUFDRyxXQUFBO0VBQ0EsbUJBQUE7RUFDQyxXQUFBO0VBQ0EsOEJBQUE7QUNOSjs7QURTQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTko7O0FEU0E7RUFDSSxZQUFBO0FDTko7O0FEU0E7RUFDSSxZQUFBO0FDTko7O0FEU0E7RUFDSSxVQUFBO0FDTko7O0FEU0E7RUFDSSw2Q0FBQTtBQ05KOztBRFNBO0VBRUc7SUFDQyxpQkFBQTtFQ1BGOztFRFVDO0lBQ0MsV0FBQTtJQUNBLGFBQUE7RUNQRjs7RURVQztJQUNDLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLCtCQUFBO0lBQ0EsZ0NBQUE7SUFDQSw4QkFBQTtJQUNBLDhCQUFBO0VDUEY7QUFDRjs7QURVQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pb24tY29udGVudHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDU3MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDY4MHB4KVxyXG57IFxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ4MHB4O1xyXG4gICAgIH1cclxuXHJcbiAgICAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC05MXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDRweCBibGFjaztcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICB9XHJcblxyXG4gICAgIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNTcwcHgpXHJcbnsgXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDEwcHg7XHJcbiAgICAgfVxyXG5cclxuICAgICBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTc3cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDRweCBibGFjaztcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWZvb3RlcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5pbWcge1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxNXB4IGJsYWNrO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlvbi1mYWItYnV0dG9ue1xyXG4gICAgLS1ib3gtc2hhZG93OiAwcHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNjgwcHgpXHJcbnsgXHJcbiAgIGlvbi1mb290ZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgfVxyXG5cclxuICAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgfVxyXG5cclxuICAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgbWFyZ2luLXRvcDogLTkycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCA0cHggYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTklO1xyXG4gfSIsImlvbi1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNTcwcHgpIGFuZCAobWF4LWhlaWdodDogNjgwcHgpIHtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ4MHB4O1xuICB9XG5cbiAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAtOTFweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCA0cHggYmxhY2s7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNTcwcHgpIHtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQxMHB4O1xuICB9XG5cbiAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAtNzdweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAxcHggNHB4IGJsYWNrO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgfVxuXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgaW9uLWZvb3RlciB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgfVxufVxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDE1cHggYmxhY2s7XG59XG5cbmlvbi1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1ib3gtc2hhZG93OiAwcHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNjgwcHgpIHtcbiAgaW9uLWZvb3RlciB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjAwcHg7XG4gIH1cblxuICBpb24tY2FyZC1oZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IC05MnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDRweCBibGFjaztcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIH1cbn1cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk5JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let Tab1Page = class Tab1Page {
    constructor(gestureCtrl, plt, modalController, router) {
        this.gestureCtrl = gestureCtrl;
        this.plt = plt;
        this.modalController = modalController;
        this.router = router;
        this.people = [
            {
                name: 'Maxie Lynch',
                img: '../../assets/chat/chat1.jpg',
                city: 'New York',
                country: 'USA',
                power: 0
            },
            {
                name: 'Bennoch Sperry',
                img: '../../assets/chat/chat2.jpg',
                city: 'Washington',
                country: 'USA',
                power: 0
            },
            {
                name: 'Mikeny Hartington',
                img: '../../assets/chat/chat3.jpg',
                city: 'Atlanta',
                country: 'USA',
                power: 0
            }, {
                name: 'Maxie Lynch',
                img: '../../assets/chat/chat4.jpg',
                city: 'New York',
                country: 'USA',
                power: 0
            },
            {
                name: 'Bennoch Sperry',
                img: '../../assets/chat/chat5.jpg',
                city: 'Washington',
                country: 'USA',
                power: 0
            },
            {
                name: 'Mikeny Hartington',
                img: '../../assets/chat/chat6.jpg',
                city: 'Atlanta',
                country: 'USA',
                power: 0
            }
        ];
        this.nbr = 1;
    }
    ngOnInit() {
        //  this.checkPhoto();
        /* this.authservice.onGetUser().then(
           () => {},
           () => { this.router.navigate(['/signup2']); }
         ); */
    }
    // LIKE ACTION
    onLike() {
        const card = this.cards.toArray()[this.cards.toArray().length - this.nbr];
        card.nativeElement.style.transition = '1s ease-out';
        card.nativeElement.style.transform = `translateX(${+this.plt.width() * 2}px)
              rotate(${100}deg)`;
        this.nbr++;
    }
    // DISLIKE ACTION
    onDisLike() {
        const card = this.cards.toArray()[this.cards.toArray().length - this.nbr];
        card.nativeElement.style.transition = '1s ease-out';
        card.nativeElement.style.transform = `translateX(${-this.plt.width() * 2}px)
              rotate(${100}deg)`;
        this.nbr++;
    }
    ngAfterViewInit() {
        const cardArray = this.cards.toArray();
        this.useTinderSwipe(cardArray);
    }
    // TINDER SWIPE FONCTIONNALITY
    useTinderSwipe(cardArray) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < cardArray.length; i++) {
            const card = cardArray[i];
            const gesture = this.gestureCtrl.create({
                el: card.nativeElement,
                gestureName: 'swipte',
                onStart: ev => {
                },
                onMove: ev => {
                    card.nativeElement.style.transform = `translateX(${ev.deltaX}px)
          rotate(${ev.deltaX / 10}deg)`;
                    this.setCardColor(ev.deltaX, card.nativeElement);
                },
                onEnd: ev => {
                    card.nativeElement.style.transition = '1s ease-out';
                    if (ev.deltaX > 150) {
                        card.nativeElement.style.transform = `translateX(${+this.plt.width() * 2}px)
            rotate(${ev.deltaX / 2}deg)`;
                        this.nbr++;
                    }
                    else if (ev.deltaX < -150) {
                        card.nativeElement.style.transform = `translateX(${-this.plt.width() * 2}px)
            rotate(${ev.deltaX / 2}deg)`;
                        this.nbr++;
                    }
                    else {
                        card.nativeElement.style.transform = '';
                    }
                }
            });
            gesture.enable(true);
        }
    }
    setCardColor(x, element) {
        let color = '';
        const abs = Math.abs(x);
        const min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
        const hexCode = this.decimalToHex(min, 2);
        if (x < 0) {
            color = '#FF' + hexCode + hexCode;
        }
        else {
            color = '#' + hexCode + 'FF' + hexCode;
        }
    }
    decimalToHex(d, padding) {
        let hex = Number(d).toString(16);
        padding = typeof padding === 'undefined' || padding === null ? (padding = 2) : padding;
        while (hex.length < padding) {
            hex = '0' + hex;
        }
        return hex;
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["GestureController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], Tab1Page.prototype, "cards", void 0);
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map