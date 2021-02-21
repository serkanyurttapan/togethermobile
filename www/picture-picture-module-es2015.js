(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["picture-picture-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/picture/picture.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/picture/picture.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" ></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Pictures</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-col size=\"4\">\n       <div class=\"cadre\">\n        <ion-icon size=\"large\" *ngIf=\"!photo1\" color=\"danger\" name=\"add-circle-sharp\" \n                  style=\"margin-top: 50px;\" >\n        </ion-icon>\n        <img [src]=\"photo1\" height=\"100%\" width=\"100%\" />\n       </div>\n       <ion-icon size=\"large\" *ngIf=\"photo1\" name=\"close-circle-sharp\" color=\"danger\"\n                 ></ion-icon>\n    </ion-col>\n    <ion-col size=\"4\">\n      <div class=\"cadre\">\n       <ion-icon size=\"large\"  *ngIf=\"!photo2\" color=\"danger\" name=\"add-circle-sharp\"\n                 style=\"margin-top: 50px;\" >\n       </ion-icon>\n      </div>\n      <ion-icon size=\"large\" *ngIf=\"photo2\" name=\"close-circle-sharp\" color=\"danger\"\n        ></ion-icon>\n    </ion-col>\n    <ion-col size=\"4\">\n      <div class=\"cadre\">\n       <ion-icon size=\"large\" *ngIf=\"!photo3\" color=\"danger\" name=\"add-circle-sharp\"\n                 style=\"margin-top: 50px;\">\n       </ion-icon>\n      </div>\n      <ion-icon size=\"large\" *ngIf=\"photo3\" name=\"close-circle-sharp\" color=\"danger\"\n       ></ion-icon>\n   </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/picture/picture-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/picture/picture-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PicturePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicturePageRoutingModule", function() { return PicturePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _picture_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./picture.page */ "./src/app/picture/picture.page.ts");




const routes = [
    {
        path: '',
        component: _picture_page__WEBPACK_IMPORTED_MODULE_3__["PicturePage"]
    }
];
let PicturePageRoutingModule = class PicturePageRoutingModule {
};
PicturePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PicturePageRoutingModule);



/***/ }),

/***/ "./src/app/picture/picture.module.ts":
/*!*******************************************!*\
  !*** ./src/app/picture/picture.module.ts ***!
  \*******************************************/
/*! exports provided: PicturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicturePageModule", function() { return PicturePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _picture_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./picture-routing.module */ "./src/app/picture/picture-routing.module.ts");
/* harmony import */ var _picture_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./picture.page */ "./src/app/picture/picture.page.ts");







let PicturePageModule = class PicturePageModule {
};
PicturePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _picture_routing_module__WEBPACK_IMPORTED_MODULE_5__["PicturePageRoutingModule"]
        ],
        declarations: [_picture_page__WEBPACK_IMPORTED_MODULE_6__["PicturePage"]]
    })
], PicturePageModule);



/***/ }),

/***/ "./src/app/picture/picture.page.scss":
/*!*******************************************!*\
  !*** ./src/app/picture/picture.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cadre {\n  position: absolute;\n  border: 2px solid #eb3b5a;\n  height: 150px;\n  width: 85px;\n  border-radius: 8px;\n  background: darkgrey;\n  justify-content: center;\n  display: flex;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGljdHVyZS9DOlxcVXNlcnNcXFQ0ODBcXERvd25sb2Fkc1xcQ29waWUgZGUgZGF0aW5nL3NyY1xcYXBwXFxwaWN0dXJlXFxwaWN0dXJlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGljdHVyZS9waWN0dXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9waWN0dXJlL3BpY3R1cmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhZHJle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ViM2I1YTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogODVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IGRhcmtncmV5O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuIiwiLmNhZHJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZWIzYjVhO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogODVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiBkYXJrZ3JleTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/picture/picture.page.ts":
/*!*****************************************!*\
  !*** ./src/app/picture/picture.page.ts ***!
  \*****************************************/
/*! exports provided: PicturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicturePage", function() { return PicturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PicturePage = class PicturePage {
    constructor() {
        this.photo1 = '../../assets/chat/chat2.jpg';
        this.photo2 = null;
        this.photo3 = null;
    }
    ngOnInit() {
    }
};
PicturePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-picture',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./picture.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/picture/picture.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./picture.page.scss */ "./src/app/picture/picture.page.scss")).default]
    })
], PicturePage);



/***/ })

}]);
//# sourceMappingURL=picture-picture-module-es2015.js.map