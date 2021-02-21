function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatChatPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\" color=\"light\">\n      <img [src]=\"img\" class=\"img-head\"/>\n    </ion-buttons>\n    <ion-title color=\"light\">Username</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding class=\"contentBg\" #content id=\"chat-parent\" overflow-scroll=\"true\" (ionScrollStart)=\"logScrollStart()\"\n  (ionScroll)=\"logScrolling($event)\">\n  <div>\n    <div id=\"chat-container\">\n      <div class=\"message-wrap\">\n        <div *ngFor=\"let msg of msgList;let i = index; let first = first; let last = last\" class=\"message\">\n          <div class=\"message-left\" *ngIf=\"msg.userId == toUser\">\n            <div class=\"msg-detail\">\n              <div class=\"msg-content\">\n                <p class=\"line-breaker \">{{msg.message}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"message-right\" *ngIf=\"msg.userId == User && msg.userId != toUser\">\n            <ion-spinner name=\"dots\" *ngIf=\"msg.status === 'pending'\"></ion-spinner>\n            <div class=\"msg-detail\">\n              <div class=\"msg-info\">\n              </div>\n              <div class=\"msg-content\">\n                <p class=\"line-breaker  \">{{msg.message}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer class=\"footer\">\n  <ion-toolbar class=\"footerSections\">\n    <div class=\"containerFooter\">\n      <ion-icon (click)=\"addFile()\" size=\"large\" color=\"medium\" name=\"add-circle\"></ion-icon>\n      <div class=\"inputConatiner\">\n        <ion-input class=\"placeholdertext inputMessage inputBg\" type=\"text\" placeholder=\"Type a message\" [(ngModel)]=\"inpText\"\n          autofocus=\"true\" padding-start></ion-input>\n      </div>\n      <div class=\"send-button-parent\">\n        <ion-button  class=\"sendBtn\" color=\"primary\">\n          <ion-icon class=\"sendBtn-icon\" name=\"send\" color=\"light\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/chat/chat-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/chat/chat-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: ChatPageRoutingModule */

  /***/
  function srcAppChatChatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function () {
      return ChatPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat.page */
    "./src/app/chat/chat.page.ts");

    var routes = [{
      path: '',
      component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
    }];

    var ChatPageRoutingModule = function ChatPageRoutingModule() {
      _classCallCheck(this, ChatPageRoutingModule);
    };

    ChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/chat/chat.module.ts":
  /*!*************************************!*\
    !*** ./src/app/chat/chat.module.ts ***!
    \*************************************/

  /*! exports provided: ChatPageModule */

  /***/
  function srcAppChatChatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPageModule", function () {
      return ChatPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chat-routing.module */
    "./src/app/chat/chat-routing.module.ts");
    /* harmony import */


    var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat.page */
    "./src/app/chat/chat.page.ts");

    var ChatPageModule = function ChatPageModule() {
      _classCallCheck(this, ChatPageModule);
    };

    ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPageRoutingModule"]],
      declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
    })], ChatPageModule);
    /***/
  },

  /***/
  "./src/app/chat/chat.page.scss":
  /*!*************************************!*\
    !*** ./src/app/chat/chat.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatChatPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgb(219, 219, 219);\n}\n\n.img-head {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 2px solid white;\n}\n\n#chat-parent {\n  scroll-behavior: smooth;\n}\n\n.header {\n  --background:#224068;\n}\n\n.headerColor {\n  --color:#fff;\n  color: #fff;\n}\n\n.line-breaker {\n  white-space: pre-line;\n}\n\n.input-wrap {\n  display: flex;\n}\n\n.input-wrap input {\n  flex: 1;\n  border: 0;\n  border-style: solid;\n  padding: 10px;\n}\n\n.message-wrap .message {\n  position: relative;\n  padding: 7px 0;\n}\n\n.message-wrap .message .user-img {\n  position: absolute;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 45px;\n  width: 35px;\n  height: 35px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36);\n}\n\n.message-wrap .message .msg-detail {\n  width: 100%;\n  display: inline-block;\n  position: relative;\n}\n\n.message-wrap .message .msg-detail p {\n  margin: 0;\n  font-size: 14px;\n}\n\n.message-wrap .message .msg-detail .msg-info p {\n  font-size: 0.8em;\n  color: #888;\n}\n\n.message-wrap .message .msg-detail .msg-content {\n  position: relative;\n  border-radius: 5px;\n  padding: 8px;\n  margin-right: 5px;\n  width: auto;\n  max-width: 80%;\n}\n\n.message-wrap .message .msg-detail .msg-content .line-breaker {\n  white-space: pre-line;\n  padding-left: 7px;\n}\n\n.message-wrap .message-left .msg-content {\n  float: left;\n  position: relative;\n  background: rgba(159, 199, 166, 0.9);\n  color: black;\n}\n\n.message-wrap .message-left .msg-detail {\n  padding-left: 5px;\n}\n\n.message-wrap .message-left .user-img {\n  left: 0;\n  z-index: 9999;\n}\n\n.message-wrap .message-right .msg-detail .msg-info {\n  text-align: right;\n}\n\n.message-wrap .message-right .user-img {\n  right: 0;\n}\n\n.message-wrap .message-right .msg-content {\n  float: right;\n  color: #2a2828;\n  background: white;\n}\n\n.avatarImg {\n  border-radius: 50%;\n  width: 34px;\n  border: 1px solid black;\n  height: 34px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.userProdDetail {\n  border: 5px solid gray !important;\n  padding: 0px;\n}\n\n.rate {\n  font-size: 18px;\n  font-weight: bold;\n  margin-top: 0px;\n}\n\n.proImg {\n  height: 65px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 70px;\n  border-radius: 5%;\n}\n\n.detail {\n  font-size: 16px;\n  color: #3b5998 !important;\n  font-weight: bold;\n}\n\n.msgSpace {\n  margin-right: 8px !important;\n}\n\n.iconMsg {\n  background-color: transparent !important;\n  margin-right: -12px !important;\n}\n\n.containerFooter {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.sendBtn-icon {\n  font-size: 30px;\n}\n\n.send-button-parent {\n  padding: 0 6px 0 8px;\n}\n\n.backbtn {\n  margin-right: 10px !important;\n  font-size: 3.4rem !important;\n  color: black !important;\n}\n\n.sendBtn {\n  opacity: 1 !important;\n  height: 40px;\n}\n\n.inputConatiner {\n  width: 80%;\n}\n\n.inputMessage {\n  border: 1px solid #d8d8e0;\n  border-radius: 10px;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n}\n\n.arrow-left {\n  position: absolute;\n  left: -11px;\n  width: 0 !important;\n  height: 0 !important;\n  border-top: 10px solid transparent !important;\n  border-bottom: 10px solid transparent !important;\n  border-right: 10px solid #253D63 !important;\n}\n\nspan.line-style {\n  position: absolute;\n  border-left: 3px solid #fff;\n  margin-left: 16px;\n  height: 100%;\n  max-height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n}\n\nspan.triangle {\n  border-radius: 2px;\n  height: 14px;\n  width: 14px;\n  top: 14px;\n  display: block;\n  border-style: solid;\n  border-color: rgba(37, 61, 99, 0.83);\n  border-width: 1px;\n  transform: rotate(45deg);\n  position: absolute;\n  background: rgba(37, 61, 99, 0.83);\n  left: 53px;\n}\n\n.footerSections {\n  --background:#bdccd3;\n  background: #bdccd3;\n}\n\n.inputBg {\n  background: #fff;\n}\n\n@-webkit-keyframes dash {\n  from {\n    stroke-dashoffset: 1000;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n\n@keyframes dash {\n  from {\n    stroke-dashoffset: 1000;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9DOlxcVXNlcnNcXFQ0ODBcXERvd25sb2Fkc1xcQ29waWUgZGUgZGF0aW5nL3NyY1xcYXBwXFxjaGF0XFxjaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hhdC9jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNFSjs7QURDQTtFQUNJLHVCQUFBO0FDRUo7O0FEQUU7RUFDRSxvQkFBQTtBQ0dKOztBRERFO0VBQ0UsWUFBQTtFQUNDLFdBQUE7QUNJTDs7QURGRztFQUNDLHFCQUFBO0FDS0o7O0FESEU7RUFDRSxhQUFBO0FDTUo7O0FETEk7RUFDRSxPQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ09OOztBRENJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDRU47O0FERE07RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7QUNHUjs7QURETTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDR1I7O0FERlE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQ0lWOztBRERVO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDR1o7O0FEQVE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNFVjs7QURBVTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUNFZDs7QURJTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQ0ZSOztBRElNO0VBQ0UsaUJBQUE7QUNGUjs7QURJTTtFQUNFLE9BQUE7RUFDQSxhQUFBO0FDRlI7O0FEUVE7RUFDRSxpQkFBQTtBQ05WOztBRFVNO0VBQ0UsUUFBQTtBQ1JSOztBRFVNO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ1JSOztBRGNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ1hKOztBRGNFO0VBQ0UsaUNBQUE7RUFDQSxZQUFBO0FDWEo7O0FEY0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDWEo7O0FEY0U7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ1hKOztBRGNFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNYSjs7QURjRTtFQUNFLDRCQUFBO0FDWEo7O0FEY0U7RUFDRSx3Q0FBQTtFQUNBLDhCQUFBO0FDWEo7O0FEY0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1hKOztBRGNFO0VBRUUsZUFBQTtBQ1pKOztBRGNFO0VBQ0Usb0JBQUE7QUNYSjs7QURlRTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBQ1pKOztBRGNFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDWEo7O0FEYUU7RUFDRSxVQUFBO0FDVko7O0FEYUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDVko7O0FEYUU7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7QUNYSjs7QURjRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGdEQUFBO0VBQ0EsMkNBQUE7QUNYSjs7QURjRTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtBQ1hKOztBRGVFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBRUEsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtBQ1pKOztBRGVFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtBQ1pKOztBRGNFO0VBQ0UsZ0JBQUE7QUNYSjs7QURlRTtFQUNFO0lBQ0UsdUJBQUE7RUNaSjtFRGNFO0lBQ0Usb0JBQUE7RUNaSjtBQUNGOztBRE1FO0VBQ0U7SUFDRSx1QkFBQTtFQ1pKO0VEY0U7SUFDRSxvQkFBQTtFQ1pKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyMTksIDIxOSwgMjE5KTtcclxufVxyXG4uaW1nLWhlYWR7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4jY2hhdC1wYXJlbnR7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICB9XHJcbiAgLmhlYWRlcntcclxuICAgIC0tYmFja2dyb3VuZDojMjI0MDY4O1xyXG4gIH1cclxuICAuaGVhZGVyQ29sb3J7XHJcbiAgICAtLWNvbG9yOiNmZmY7XHJcbiAgICAgY29sb3I6I2ZmZjtcclxuICB9XHJcbiAgIC5saW5lLWJyZWFrZXIge1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gIH1cclxuICAuaW5wdXQtd3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaW5wdXQge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5tZXNzYWdlLXdyYXAge1xyXG4gICAgLy8gcGFkZGluZzogMCAxMHB4O1xyXG4gICAgXHJcbiAgICBcclxuICAgIC5tZXNzYWdlIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nOiA3cHggMDtcclxuICAgICAgLnVzZXItaW1nIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xyXG4gICAgICB9XHJcbiAgICAgIC5tc2ctZGV0YWlsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubXNnLWluZm8ge1xyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgICAgICAgICAgY29sb3I6ICM4ODg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tc2ctY29udGVudCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5saW5lLWJyZWFrZXIge1xyXG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZS1sZWZ0IHtcclxuICAgICAgLm1zZy1jb250ZW50IHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNTksIDE5OSwgMTY2LCAwLjkpO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgfVxyXG4gICAgICAubXNnLWRldGFpbCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnVzZXItaW1nIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5tZXNzYWdlLXJpZ2h0IHtcclxuICAgICAgLm1zZy1kZXRhaWwge1xyXG4gICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcbiAgICAgICAgLm1zZy1pbmZvIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC51c2VyLWltZyB7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLm1zZy1jb250ZW50IHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgY29sb3I6ICMyYTI4Mjg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuICBcclxuICAuYXZhdGFySW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyBcclxuICAgIHdpZHRoOjM0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGhlaWdodDozNHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXJcclxuICB9XHJcbiAgXHJcbiAgLnVzZXJQcm9kRGV0YWlse1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgZ3JheSAhaW1wb3J0YW50OyBcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnJhdGV7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHhcclxuICB9XHJcbiAgXHJcbiAgLnByb0ltZ3tcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLmRldGFpbHtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgY29sb3I6cmdiKDU5LDg5LDE1MikgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAubXNnU3BhY2V7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuaWNvbk1zZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6LTEycHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lckZvb3RlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnNlbmRCdG4taWNvbntcclxuICAgIC8vIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICAuc2VuZC1idXR0b24tcGFyZW50e1xyXG4gICAgcGFkZGluZzogMCA2cHggMCA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5iYWNrYnRue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDMuNHJlbSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zZW5kQnRue1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICAuaW5wdXRDb25hdGluZXJ7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dE1lc3NhZ2V7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3RlcntcclxuICAgIC8vIG1pbi1oZWlnaHQ6IDcwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmFycm93LWxlZnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTExcHg7XHJcbiAgICB3aWR0aDogMCAhaW1wb3J0YW50OyBcclxuICAgIGhlaWdodDogMCAhaW1wb3J0YW50OyBcclxuICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgXHJcbiAgICBib3JkZXItcmlnaHQ6MTBweCBzb2xpZCAjMjUzRDYzICFpbXBvcnRhbnQ7ICBcclxuICB9XHJcbiAgXHJcbiAgc3Bhbi5saW5lLXN0eWxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2ZmZjtcclxuICAgIG1hcmdpbi1sZWZ0OjE2cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6MDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBzcGFuLnRyaWFuZ2xlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgdG9wOiAxNHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDM3LCA2MSwgOTksIDAuODMpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzcsIDYxLCA5OSwgMC44Myk7XHJcbiAgICBsZWZ0OiA1M3B4O1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyU2VjdGlvbnN7XHJcbiAgICAtLWJhY2tncm91bmQ6I2JkY2NkMztcclxuICAgIGJhY2tncm91bmQ6ICNiZGNjZDM7XHJcbiAgfVxyXG4gIC5pbnB1dEJne1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gIH1cclxuICBcclxuICBcclxuICBAa2V5ZnJhbWVzIGRhc2gge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigyMTksIDIxOSwgMjE5KTtcbn1cblxuLmltZy1oZWFkIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuI2NoYXQtcGFyZW50IHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi5oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IzIyNDA2ODtcbn1cblxuLmhlYWRlckNvbG9yIHtcbiAgLS1jb2xvcjojZmZmO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmxpbmUtYnJlYWtlciB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cblxuLmlucHV0LXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmlucHV0LXdyYXAgaW5wdXQge1xuICBmbGV4OiAxO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDdweCAwO1xufVxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAudXNlci1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4zNik7XG59XG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIC5tc2ctaW5mbyBwIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICM4ODg7XG59XG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCAubGluZS1icmVha2VyIHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbn1cbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UtbGVmdCAubXNnLWNvbnRlbnQge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1OSwgMTk5LCAxNjYsIDAuOSk7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UtbGVmdCAubXNnLWRldGFpbCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS1sZWZ0IC51c2VyLWltZyB7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5OTk7XG59XG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlLXJpZ2h0IC5tc2ctZGV0YWlsIC5tc2ctaW5mbyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS1yaWdodCAudXNlci1pbWcge1xuICByaWdodDogMDtcbn1cbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UtcmlnaHQgLm1zZy1jb250ZW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzJhMjgyODtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5hdmF0YXJJbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAzNHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnVzZXJQcm9kRGV0YWlsIHtcbiAgYm9yZGVyOiA1cHggc29saWQgZ3JheSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5yYXRlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4ucHJvSW1nIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xufVxuXG4uZGV0YWlsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzNiNTk5OCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1zZ1NwYWNlIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcbn1cblxuLmljb25Nc2cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IC0xMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXJGb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VuZEJ0bi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uc2VuZC1idXR0b24tcGFyZW50IHtcbiAgcGFkZGluZzogMCA2cHggMCA4cHg7XG59XG5cbi5iYWNrYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMy40cmVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4uc2VuZEJ0biB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uaW5wdXRDb25hdGluZXIge1xuICB3aWR0aDogODAlO1xufVxuXG4uaW5wdXRNZXNzYWdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhlMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hcnJvdy1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTFweDtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgIzI1M0Q2MyAhaW1wb3J0YW50O1xufVxuXG5zcGFuLmxpbmUtc3R5bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xufVxuXG5zcGFuLnRyaWFuZ2xlIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xuICB0b3A6IDE0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMzcsIDYxLCA5OSwgMC44Myk7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzcsIDYxLCA5OSwgMC44Myk7XG4gIGxlZnQ6IDUzcHg7XG59XG5cbi5mb290ZXJTZWN0aW9ucyB7XG4gIC0tYmFja2dyb3VuZDojYmRjY2QzO1xuICBiYWNrZ3JvdW5kOiAjYmRjY2QzO1xufVxuXG4uaW5wdXRCZyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbkBrZXlmcmFtZXMgZGFzaCB7XG4gIGZyb20ge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xuICB9XG4gIHRvIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/chat/chat.page.ts":
  /*!***********************************!*\
    !*** ./src/app/chat/chat.page.ts ***!
    \***********************************/

  /*! exports provided: ChatPage */

  /***/
  function srcAppChatChatPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPage", function () {
      return ChatPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ChatPage = /*#__PURE__*/function () {
      function ChatPage(actRoute, actionSheetController) {
        _classCallCheck(this, ChatPage);

        this.actRoute = actRoute;
        this.actionSheetController = actionSheetController;
        this.img = '../../assets/chat/chat1.jpg';
        this.User = 'Me';
        this.toUser = 'driver';
        this.editorMsg = '';
        this.showEmojiPicker = false;
        this.count = 0;
        this.arr = [{
          messageId: '1',
          userId: '140000198202211138',
          userName: 'Luff',
          userImgUrl: './assets/user.jpg',
          toUserId: '210000198410281948',
          toUserName: 'Hancock',
          userAvatar: './assets/to-user.jpg',
          time: 1488349800000,
          message: 'Hey, that\'s an awesome chat UI',
          status: 'success'
        }, {
          messageId: '2',
          userId: '210000198410281948',
          userName: 'Hancock',
          userImgUrl: './assets/to-user.jpg',
          toUserId: '140000198202211138',
          toUserName: 'Luff',
          userAvatar: './assets/user.jpg',
          time: 1491034800000,
          message: 'Right, it totally blew my mind. They have other great apps and designs too !',
          status: 'success'
        }, {
          messageId: '3',
          userId: '140000198202211138',
          userName: 'Luff',
          userImgUrl: './assets/user.jpg',
          toUserId: '210000198410281948',
          toUserName: 'Hancock',
          userAvatar: './assets/to-user.jpg',
          time: 1491034920000,
          message: 'And it is free ?',
          status: 'success'
        }, {
          messageId: '4',
          userId: '210000198410281948',
          userName: 'Hancock',
          userImgUrl: './assets/to-user.jpg',
          toUserId: '140000198202211138',
          toUserName: 'Luff',
          userAvatar: './assets/user.jpg',
          time: 1491036720000,
          message: 'Yes, totally free. Beat that ! ',
          status: 'success'
        }, {
          messageId: '5',
          userId: '210000198410281948',
          userName: 'Hancock',
          userImgUrl: './assets/to-user.jpg',
          toUserId: '140000198202211138',
          toUserName: 'Luff',
          userAvatar: './assets/user.jpg',
          time: 1491108720000,
          message: 'Wow, that\'s so cool. Hats off to the developers. This is gooood stuff',
          status: 'success'
        }, {
          messageId: '6',
          userId: '140000198202211138',
          userName: 'Luff',
          userImgUrl: './assets/user.jpg',
          toUserId: '210000198410281948',
          toUserName: 'Hancock',
          userAvatar: './assets/to-user.jpg',
          time: 1491231120000,
          message: 'Check out their other designs.',
          status: 'success'
        }];
        this.msgList = [{
          userId: this.User,
          userName: this.User,
          userAvatar: 'assets/driver.jpeg',
          time: '12:01 pm',
          message: 'Hey, that\'s an awesome chat UI',
          upertext: 'Hello'
        }, {
          userId: this.toUser,
          userName: this.toUser,
          userAvatar: 'assets/user.jpeg',
          time: '12:01 pm',
          message: 'Right, it totally blew my mind. They have other great apps and designs too!',
          upertext: 'Hii'
        }, {
          userId: this.User,
          userName: this.User,
          userAvatar: 'assets/driver.jpeg',
          time: '12:01 pm',
          message: 'And it is free ?',
          upertext: 'How r u '
        }, {
          userId: this.toUser,
          userName: this.toUser,
          userAvatar: 'assets/user.jpeg',
          time: '12:01 pm',
          message: 'Yes, totally free. Beat that !',
          upertext: 'good'
        }, {
          userId: this.User,
          userName: this.User,
          userAvatar: 'assets/driver.jpeg',
          time: '12:01 pm',
          message: 'Wow, that\'s so cool. Hats off to the developers. This is gooood stuff',
          upertext: 'How r u '
        }, {
          userId: this.toUser,
          userName: this.toUser,
          userAvatar: 'assets/user.jpeg',
          time: '12:01 pm',
          message: 'Check out their other designs.',
          upertext: 'good'
        }, {
          userId: this.User,
          userName: this.User,
          userAvatar: 'assets/driver.jpeg',
          time: '12:01 pm',
          // tslint:disable-next-line:max-line-length
          message: 'Have you seen their other apps ? They have a collection of ready-made apps for developers. This makes my life so easy. I love it! ',
          upertext: 'How r u '
        }, {
          userId: this.toUser,
          userName: this.toUser,
          userAvatar: 'assets/user.jpeg',
          time: '12:01 pm',
          message: 'Well, good things come in small package after all',
          upertext: 'good'
        }];
      }

      _createClass(ChatPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.actRoute.snapshot.params.id;
        }
      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          this.content.scrollToBottom(100);
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.events.unsubscribe('chat:received');
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          console.log('scrollBottom');
          setTimeout(function () {
            _this.scrollToBottom();
          }, 500);
          console.log('scrollBottom2');
        }
      }, {
        key: "logScrollStart",
        value: function logScrollStart() {
          console.log('logScrollStart');
          document.getElementById('chat-parent');
        }
      }, {
        key: "logScrolling",
        value: function logScrolling(event) {
          console.log('event', event);
        }
      }, {
        key: "addFile",
        value: function addFile() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.actionSheetController.create({
                      header: 'Choose a picture',
                      buttons: [{
                        text: 'From gallery',
                        icon: 'image-sharp',
                        handler: function handler() {}
                      }, {
                        text: 'From Camera',
                        icon: 'camera',
                        handler: function handler() {}
                      }]
                    });

                  case 2:
                    actionSheet = _context.sent;
                    _context.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ChatPage;
    }();

    ChatPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content')], ChatPage.prototype, "content", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chat_input')], ChatPage.prototype, "messageInput", void 0);
    ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./chat.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./chat.page.scss */
      "./src/app/chat/chat.page.scss"))["default"]]
    })], ChatPage);
    /***/
  }
}]);
//# sourceMappingURL=chat-chat-module-es5.js.map