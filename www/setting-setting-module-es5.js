function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-setting-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSettingSettingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Setting</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n     <ion-item>\n        <ion-row>\n          <ion-col size=\"6\" style=\"height: 15px;\">\n            <ion-label><b>Age</b></ion-label>\n           <ion-label position=\"floating\">Min</ion-label>\n           <ion-input inputmode=\"number\" required=\"true\" (click)=\"showPickerMin()\"></ion-input>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-label>&nbsp;</ion-label>\n           <ion-label position=\"floating\">Max</ion-label>\n           <ion-input inputmode=\"number\" required=\"true\" (click)=\"showPickerMax()\"></ion-input>\n          </ion-col>\n        </ion-row>\n     </ion-item><br>\n     <ion-item>\n      <ion-label><h2><b>Sex</b></h2></ion-label>\n      <ion-input inputmode=\"text\" required=\"true\" (click)=\"showPickerSex()\"></ion-input>\n     </ion-item><br>\n      <ion-item>\n        <ion-label>Country</ion-label>\n        <ion-select required=\"true\">\n          <ion-select-option value=\"albanie\">\n            Albania\n          </ion-select-option>\n          <ion-select-option value=\"angola\">\n            Angola\n          </ion-select-option>\n          <ion-select-option value=\"armeny\">\n            Armenia\n          </ion-select-option>\n        </ion-select>\n      </ion-item><br>\n      <ion-item>\n        <ion-label>State</ion-label>\n        <ion-select required=\"true\" >\n          <ion-select-option value=\"albanie\">\n            Albany\n          </ion-select-option>\n          <ion-select-option value=\"angola\">\n            Angola\n          </ion-select-option>\n          <ion-select-option value=\"armeny\">\n            Armeny\n          </ion-select-option>\n        </ion-select>\n      </ion-item><br>\n      <ion-item>\n        <ion-label>City</ion-label>\n        <ion-select required=\"true\">\n          <ion-select-option value=\"albanie\">\n            New York\n          </ion-select-option>\n          <ion-select-option value=\"angola\">\n            California\n          </ion-select-option>\n          <ion-select-option value=\"armeny\">\n            Mineapolis\n          </ion-select-option>\n        </ion-select>\n      </ion-item><br>\n     <ion-item>\n      <ion-label>Notification</ion-label>\n      <ion-toggle color=\"primary\" slot=\"end\" ></ion-toggle>\n     </ion-item>\n   </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/setting/setting-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/setting/setting-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: SettingPageRoutingModule */

  /***/
  function srcAppSettingSettingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPageRoutingModule", function () {
      return SettingPageRoutingModule;
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


    var _setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./setting.page */
    "./src/app/setting/setting.page.ts");

    var routes = [{
      path: '',
      component: _setting_page__WEBPACK_IMPORTED_MODULE_3__["SettingPage"]
    }];

    var SettingPageRoutingModule = function SettingPageRoutingModule() {
      _classCallCheck(this, SettingPageRoutingModule);
    };

    SettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SettingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/setting/setting.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/setting/setting.module.ts ***!
    \*******************************************/

  /*! exports provided: SettingPageModule */

  /***/
  function srcAppSettingSettingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPageModule", function () {
      return SettingPageModule;
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


    var _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./setting-routing.module */
    "./src/app/setting/setting-routing.module.ts");
    /* harmony import */


    var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./setting.page */
    "./src/app/setting/setting.page.ts");

    var SettingPageModule = function SettingPageModule() {
      _classCallCheck(this, SettingPageModule);
    };

    SettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingPageRoutingModule"]],
      declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]]
    })], SettingPageModule);
    /***/
  },

  /***/
  "./src/app/setting/setting.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/setting/setting.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppSettingSettingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-list {\n  padding: 10px;\n}\n\nion-content {\n  --background: #f0efef;\n  --padding-start: 5px;\n  --padding-end: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9DOlxcVXNlcnNcXFQ0ODBcXERvd25sb2Fkc1xcQ29waWUgZGUgZGF0aW5nL3NyY1xcYXBwXFxzZXR0aW5nXFxzZXR0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2V0dGluZy9zZXR0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZy9zZXR0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmMGVmZWY7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcclxufSIsImlvbi1saXN0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmMGVmZWY7XG4gIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICAtLXBhZGRpbmctZW5kOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/setting/setting.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/setting/setting.page.ts ***!
    \*****************************************/

  /*! exports provided: SettingPage */

  /***/
  function srcAppSettingSettingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPage", function () {
      return SettingPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var SettingPage = /*#__PURE__*/function () {
      function SettingPage(pickerController) {
        _classCallCheck(this, SettingPage);

        this.pickerController = pickerController;
      }

      _createClass(SettingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // CHOOSE AGE MIN

      }, {
        key: "showPickerMin",
        value: function showPickerMin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var options, picker;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    options = {
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                      }, {
                        text: 'Ok',
                        handler: function handler(value) {}
                      }],
                      columns: [{
                        name: 'min',
                        options: this.getColumnOptions()
                      }]
                    };
                    _context.next = 3;
                    return this.pickerController.create(options);

                  case 3:
                    picker = _context.sent;
                    picker.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // CHOOSE AGE MAX

      }, {
        key: "showPickerMax",
        value: function showPickerMax() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var options, picker;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    options = {
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                      }, {
                        text: 'Ok',
                        handler: function handler(value) {}
                      }],
                      columns: [{
                        name: 'max',
                        options: this.getColumnOptions()
                      }]
                    };
                    _context2.next = 3;
                    return this.pickerController.create(options);

                  case 3:
                    picker = _context2.sent;
                    picker.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // CHOOSE SEX

      }, {
        key: "showPickerSex",
        value: function showPickerSex() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var options, picker;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    options = {
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                      }, {
                        text: 'Ok',
                        handler: function handler(value) {}
                      }],
                      columns: [{
                        name: 'Sex',
                        options: [{
                          text: 'Man',
                          value: 'Woman'
                        }, {
                          text: 'Man',
                          value: 'Woman'
                        }]
                      }]
                    };
                    _context3.next = 3;
                    return this.pickerController.create(options);

                  case 3:
                    picker = _context3.sent;
                    picker.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getColumnOptions",
        value: function getColumnOptions() {
          // tslint:disable-next-line:prefer-const
          var options = [];

          for (var i = 18; i < 90; i++) {
            options.push({
              text: i,
              value: i
            });
          }

          return options;
        }
      }]);

      return SettingPage;
    }();

    SettingPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"]
      }];
    };

    SettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-setting',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./setting.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./setting.page.scss */
      "./src/app/setting/setting.page.scss"))["default"]]
    })], SettingPage);
    /***/
  }
}]);
//# sourceMappingURL=setting-setting-module-es5.js.map