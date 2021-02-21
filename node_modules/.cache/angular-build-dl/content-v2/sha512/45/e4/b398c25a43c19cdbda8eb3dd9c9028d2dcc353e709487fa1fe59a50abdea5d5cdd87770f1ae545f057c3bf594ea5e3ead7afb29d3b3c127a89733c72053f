(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <ion-list no-padding>\n    <ion-item *ngFor=\"let chat of chatData\" \n    routerLink=\"/chat/{{ chat.id }}\" routerDirection=\"forward\" >\n      <ion-avatar class=\"chatImage\" slot=\"start\">\n        <ion-img [src]=\"chat.image\"></ion-img>\n      </ion-avatar>\n      <ion-label>\n        <div class=\"withcount\">\n          <div class=\"nameAvatar\">\n            <h2 color=\"light\">{{chat.name}}\n            </h2>\n          </div>\n          <div class=\"timeEnd\">\n            <ion-text slot=\"end\" color=\"dark\">\n              <ion-avatar class=\"chatCount\" *ngIf=\"chat.count\">{{chat.count}}</ion-avatar>\n            </ion-text>\n          </div>\n        </div>\n        <p class=\"widthHalf\">{{chat.description}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab2/tab2-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "./src/app/tab2/tab2-routing.module.ts");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".plusClass {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 25px;\n  background: white;\n  border-radius: 50%;\n  right: 15px;\n  position: relative;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n  box-shadow: 0 0.5px 0px 5px rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.14), 0 0px 0px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-header:after {\n  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.5);\n  background-image: none;\n  left: 0;\n  bottom: -8px;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 8px;\n  content: \"\";\n}\n\nion-content {\n  --background: rgb(255, 255, 255);\n}\n\nion-header,\nion-toolbar,\nion-item {\n  --background: rgb(255, 255, 255);\n}\n\n.contentCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.padding_right {\n  padding-right: 8px;\n}\n\n.withcount {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.chatCount {\n  background: #df432e;\n  width: 17px !important;\n  height: 17px !important;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  font-size: 10px;\n  font-weight: bold;\n  color: var(--background);\n  margin-left: 8px;\n}\n\nh2 {\n  color: #161616;\n}\n\n.timeEnd {\n  display: flex;\n  justify-content: flex-end;\n  width: 50%;\n}\n\n.widthHalf {\n  width: 70%;\n  color: grey;\n  font-size: 12px;\n}\n\n.nameAvatar {\n  display: flex;\n  /* justify-content: center; */\n  align-items: center;\n  width: 50%;\n}\n\n.nameAvatar h2 {\n  font-size: 0.94em;\n  font-weight: bold;\n}\n\nion-text {\n  font-size: 10px;\n}\n\n.sc-ion-label-ios-h {\n  height: 44px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXFQ0ODBcXERvd25sb2Fkc1xcQ29waWUgZGUgZGF0aW5nL3NyY1xcYXBwXFx0YWIyXFx0YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEdBQUE7RUFDQSxnSEFBQTtBQ0FKOztBREdJO0VBQ0UseUNBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0FOOztBREdFO0VBQ0UsZ0NBQUE7QUNBSjs7QURFRTs7O0VBR0UsZ0NBQUE7QUNDSjs7QURDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUU7RUFDRSxrQkFBQTtBQ0dKOztBRERFO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNJSjs7QURGRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhFO0VBQ0UsY0FBQTtBQ01KOztBREpFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ09KOztBRExFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDUUo7O0FETkU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNTSjs7QURSSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNVTjs7QURQRTtFQUNFLGVBQUE7QUNVSjs7QURSRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ1dKIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucGx1c0NsYXNzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsIGNvbG9yIDE1bXMgbGluZWFyO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBib3R0b206IC04cHg7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMCB0b3AgMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCJcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG4gIGlvbi1oZWFkZXIsXHJcbiAgaW9uLXRvb2xiYXIsXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG4gIC5jb250ZW50Q2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5wYWRkaW5nX3JpZ2h0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICB9XHJcbiAgLndpdGhjb3VudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmNoYXRDb3VudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGY0MzJlO1xyXG4gICAgd2lkdGg6IDE3cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTdweCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgaDIge1xyXG4gICAgY29sb3I6IHJnYigyMiwgMjIsIDIyKTtcclxuICB9XHJcbiAgLnRpbWVFbmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICAud2lkdGhIYWxmIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLm5hbWVBdmF0YXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45NGVtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICAuc2MtaW9uLWxhYmVsLWlvcy1oIHtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gICIsIi5wbHVzQ2xhc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLCBjb2xvciAxNW1zIGxpbmVhcjtcbiAgYm94LXNoYWRvdzogMCAwLjVweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuaW9uLWhlYWRlcjphZnRlciB7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBsZWZ0OiAwO1xuICBib3R0b206IC04cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMCB0b3AgMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbmlvbi1oZWFkZXIsXG5pb24tdG9vbGJhcixcbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbi5jb250ZW50Q2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wYWRkaW5nX3JpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4ud2l0aGNvdW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2hhdENvdW50IHtcbiAgYmFja2dyb3VuZDogI2RmNDMyZTtcbiAgd2lkdGg6IDE3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbmgyIHtcbiAgY29sb3I6ICMxNjE2MTY7XG59XG5cbi50aW1lRW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLndpZHRoSGFsZiB7XG4gIHdpZHRoOiA3MCU7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5uYW1lQXZhdGFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG59XG4ubmFtZUF2YXRhciBoMiB7XG4gIGZvbnQtc2l6ZTogMC45NGVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLXRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5zYy1pb24tbGFiZWwtaW9zLWgge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let Tab2Page = class Tab2Page {
    constructor(route) {
        this.route = route;
        this.chatData = [{
                id: '12edd', name: 'Jovenica Alba',
                image: '../../assets/chat/chat1.jpg',
                // tslint:disable-next-line:max-line-length
                description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                count: '2',
                time: '12:17'
            }, {
                id: '12edd', name: 'Oliver',
                image: ' ../../assets/chat/chat2.jpg',
                // tslint:disable-next-line:max-line-length
                description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                time: '12:17'
            }, {
                id: '12edd', name: 'George',
                image: ' ../../assets/chat/chat3.jpg',
                // tslint:disable-next-line:max-line-length
                description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                count: '2',
                time: 'Yesterday'
            }, {
                id: '12edd', name: 'Harry',
                image: ' ../../assets/chat/chat4.jpg',
                // tslint:disable-next-line:max-line-length
                description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                time: 'Sunday'
            }, {
                id: '12edd', name: 'Jack',
                image: ' ../../assets/chat/chat5.jpg',
                // tslint:disable-next-line:max-line-length
                description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                time: '11:15'
            }, {
                id: '12edd', name: 'Jacob',
                image: ' ../../assets/chat/chat6.jpg',
                // tslint:disable-next-line:max-line-length
                description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                count: '1',
                time: 'Yesterday'
            }, {
                id: '12edd', name: 'Noah',
                image: ' ../../assets/chat/chat7.jpg',
                // tslint:disable-next-line:max-line-length
                description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                time: 'Monday'
            }, {
                id: '12edd', name: 'Charlie',
                image: ' ../../assets/chat/chat8.jpg',
                // tslint:disable-next-line:max-line-length
                description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                count: '6',
                time: '07:00'
            }, {
                id: '12edd', name: 'Logan',
                image: ' ../../assets/chat/chat1.jpg',
                // tslint:disable-next-line:max-line-length
                description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                time: 'Yesterday'
            }, {
                id: '12edd', name: 'Harrison',
                image: ' ../../assets/chat/chat2.jpg',
                // tslint:disable-next-line:max-line-length
                description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                time: 'Yesterday'
            }, {
                id: '12edd', name: 'Sebastian',
                image: ' ../../assets/chat/chat3.jpg',
                // tslint:disable-next-line:max-line-length
                description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                time: 'Yesterday'
            }, {
                id: '12edd', name: 'Zachary',
                image: ' ../../assets/chat/chat4.jpg',
                // tslint:disable-next-line:max-line-length
                description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                time: 'Today'
            }, {
                id: '12edd', name: 'Elijah',
                image: ' ../../assets/chat/chat5.jpg',
                // tslint:disable-next-line:max-line-length
                description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                time: '18:25'
            }
        ];
    }
    onShow(chat) {
        this.route.navigate(['bubble', chat]);
    }
};
Tab2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
    })
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map