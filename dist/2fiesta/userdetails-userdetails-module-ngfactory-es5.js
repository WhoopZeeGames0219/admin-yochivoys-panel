function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userdetails-userdetails-module-ngfactory"], {
  /***/
  "./src/app/userdetails/userdetails-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/userdetails/userdetails-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: UserdetailsRoutingModule, ɵ0 */

  /***/
  function srcAppUserdetailsUserdetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdetailsRoutingModule", function () {
      return UserdetailsRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _userdetails_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./userdetails.component */
    "./src/app/userdetails/userdetails.component.ts");

    var ɵ0 = {
      breadcrumb: 'Users Details'
    };
    var routes = [{
      path: '',
      component: _userdetails_component__WEBPACK_IMPORTED_MODULE_1__["UserdetailsComponent"],
      data: ɵ0
    }];

    var UserdetailsRoutingModule = function UserdetailsRoutingModule() {
      _classCallCheck(this, UserdetailsRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/userdetails/userdetails.component.ngfactory.js":
  /*!****************************************************************!*\
    !*** ./src/app/userdetails/userdetails.component.ngfactory.js ***!
    \****************************************************************/

  /*! exports provided: RenderType_UserdetailsComponent, View_UserdetailsComponent_0, View_UserdetailsComponent_Host_0, UserdetailsComponentNgFactory */

  /***/
  function srcAppUserdetailsUserdetailsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_UserdetailsComponent", function () {
      return RenderType_UserdetailsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_UserdetailsComponent_0", function () {
      return View_UserdetailsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_UserdetailsComponent_Host_0", function () {
      return View_UserdetailsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdetailsComponentNgFactory", function () {
      return UserdetailsComponentNgFactory;
    });
    /* harmony import */


    var _userdetails_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./userdetails.component.scss.shim.ngstyle */
    "./src/app/userdetails/userdetails.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _node_modules_ngx_spinner_ngx_spinner_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../node_modules/ngx-spinner/ngx-spinner.ngfactory */
    "./node_modules/ngx-spinner/ngx-spinner.ngfactory.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
    "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _userdetails_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./userdetails.component */
    "./src/app/userdetails/userdetails.component.ts");
    /* harmony import */


    var _services_apis_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_UserdetailsComponent = [_userdetails_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_UserdetailsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_UserdetailsComponent,
      data: {}
    });

    function View_UserdetailsComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " - ", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.index + 1;
        var currVal_1 = _v.context.$implicit;

        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }

    function View_UserdetailsComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "small_lbl"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var currVal_0 = _v.parent.parent.context.$implicit.streetHistory;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_UserdetailsComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "label", [["class", "trackLink"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.showTrack() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", " >"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.showTracking;

        _ck(_v, 5, 0, currVal_1);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("Tracking"));

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_UserdetailsComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [","]))], null, null);
    }

    function View_UserdetailsComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "border_bottom"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " X ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_2 = _v.parent.context.index != _v.parent.parent.context.$implicit.order.length;

        _ck(_v, 3, 0, currVal_2);
      }, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.name;
        var currVal_1 = _v.parent.context.$implicit.quantiy;

        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }

    function View_UserdetailsComponent_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "flex_titles"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [["class", "sub_name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" - ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "p", [["class", "sub_name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " ", " "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _v.context.$implicit.name;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.getCurrency();

        var currVal_2 = _v.context.$implicit.value;

        _ck(_v, 4, 0, currVal_1, currVal_2);
      });
    }

    function View_UserdetailsComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "subNames"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [["class", "food_title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", " X ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var currVal_2 = _v.context.$implicit.item;

        _ck(_v, 4, 0, currVal_2);
      }, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.name;
        var currVal_1 = _v.parent.context.$implicit.selectedItem[_v.context.index].total;

        _ck(_v, 2, 0, currVal_0, currVal_1);
      });
    }

    function View_UserdetailsComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var currVal_0 = !_v.context.$implicit.selectedItem || !_v.context.$implicit.selectedItem.length;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.selectedItem;

        _ck(_v, 4, 0, currVal_1);
      }, null);
    }

    function View_UserdetailsComponent_11(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "p", [["class", "head_gray"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).transform("Discount"));

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_UserdetailsComponent_12(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "small_lbl"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", "", " "]))], null, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _co.getCurrency();

        var currVal_1 = _v.parent.context.$implicit.dicount;

        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }

    function View_UserdetailsComponent_13(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "status_detail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "status_completed_delivered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("Delivered"));

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_UserdetailsComponent_14(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "status_detail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "status_canceled_rejected"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("Your Order is"));

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).transform(_v.parent.context.$implicit.status));

        _ck(_v, 2, 0, currVal_0, currVal_1);
      });
    }

    function View_UserdetailsComponent_15(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "status_detail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "status_created_ongoing_accepted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("Your Order is"));

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).transform(_v.parent.context.$implicit.status));

        _ck(_v, 2, 0, currVal_0, currVal_1);
      });
    }

    function View_UserdetailsComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 38, "div", [["class", "card_div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [["class", "resto_detail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "div", [["class", "back_image"]], [[4, "backgroundImage", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["style", "margin-left: 20px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "p", [["class", "res_name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "p", [["class", "res_location"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "div", [["class", "line_div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 22, "div", [["class", "order_detail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "p", [["class", "head_gray"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "div", [["class", "small_lbl"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "p", [["class", "head_gray"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "p", [["class", "small_lbl"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 2, "p", [["class", "head_gray"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](28, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "p", [["class", "small_lbl"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](31, null, ["", "", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 0, "div", [["class", "line_div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_3 = _v.context.$implicit.streetHistory != null && _v.context.$implicit.streetHistory.length != 0;

        _ck(_v, 11, 0, currVal_3);

        var currVal_5 = _v.context.$implicit.order;

        _ck(_v, 17, 0, currVal_5);

        var currVal_8 = _v.context.$implicit.appliedCoupon;

        _ck(_v, 24, 0, currVal_8);

        var currVal_9 = _v.context.$implicit.appliedCoupon;

        _ck(_v, 26, 0, currVal_9);

        var currVal_13 = _v.context.$implicit.status == "completed" || _v.context.$implicit.status == "delivered";

        _ck(_v, 34, 0, currVal_13);

        var currVal_14 = _v.context.$implicit.status == "rejected" || _v.context.$implicit.status == "canceled";

        _ck(_v, 36, 0, currVal_14);

        var currVal_15 = _v.context.$implicit.status == "created" || _v.context.$implicit.status == "ongoing" || _v.context.$implicit.status === "accepted";

        _ck(_v, 38, 0, currVal_15);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "url(" + _v.context.$implicit.vid.cover + ")";

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.vid.name;

        _ck(_v, 5, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.vid.address;

        _ck(_v, 7, 0, currVal_2);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).transform("ITEMS"));

        _ck(_v, 13, 0, currVal_4);

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).transform("ORDERED ON"));

        _ck(_v, 19, 0, currVal_6);

        var currVal_7 = _co.getDate(_v.context.$implicit.time);

        _ck(_v, 22, 0, currVal_7);

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 28, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).transform("TOTAL AMOUNT"));

        _ck(_v, 28, 0, currVal_10);

        var currVal_11 = _co.getCurrency();

        var currVal_12 = _v.context.$implicit.grandTotal;

        _ck(_v, 31, 0, currVal_11, currVal_12);
      });
    }

    function View_UserdetailsComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "orders"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.myOrders;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_UserdetailsComponent_17(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "p", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "p", [["class", "name"], ["style", "color: black;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", " ", " ", ""]))], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("item.title"));

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.house;
        var currVal_2 = _v.context.$implicit.landmark;
        var currVal_3 = _v.context.$implicit.address;

        _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3);
      });
    }

    function View_UserdetailsComponent_16(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "address"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.myaddress;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_UserdetailsComponent_19(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "row"], ["style", "border-bottom: 1px solid lightgray;padding: 10px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["alt", ""], ["height", "100"], ["onError", "this.src='assets/images/user.png'"], ["style", "border-radius: 50%; object-fit: cover;"], ["width", "100"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 11, "div", [["class", "col-md-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "p", [["style", "font-weight: bold; color: #061360; font-size: 16px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 6, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "strong", [["style", "color: #490608"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fecha publicada: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", " / "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "strong", [["style", "color: #490608"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hora: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_v.context.$implicit == null ? null : _v.context.$implicit.cover) ? _v.context.$implicit.cover : _v.context.$implicit == null ? null : _v.context.$implicit.vid == null ? null : _v.context.$implicit.vid.cover;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.vid.name;

        _ck(_v, 5, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.descriptions;

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.createdAt;

        _ck(_v, 11, 0, currVal_3);

        var currVal_4 = _co.convertTo12Hour(_v.context.$implicit.createdTime);

        _ck(_v, 14, 0, currVal_4);
      });
    }

    function View_UserdetailsComponent_18(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "review"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.reviews;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_UserdetailsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "ngx-spinner", [["color", "#e74c3c"], ["type", "ball-pulse-sync"]], null, null, null, _node_modules_ngx_spinner_ngx_spinner_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NgxSpinnerComponent_0"], _node_modules_ngx_spinner_ngx_spinner_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NgxSpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerComponent"], [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        color: [0, "color"],
        type: [1, "type"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "p", [["style", "font-size: 20px; color: #e74c3c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 120, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 119, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 118, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 3, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 113, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 88, "div", [["class", "col-xl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 87, "div", [["class", "user-card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 86, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 3, "div", [["class", "top-card text-center d-flex flex-column justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "img", [["alt", ""], ["class", "img-responsive"], ["onError", "this.src='assets/images/user.png'"], ["style", "height: 150px;width: 150px;border-radius: 50%; object-fit: cover;"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "h5", [["class", "text-capitalize p-t-20 text-dark"], ["style", "font-size: 24px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 13, "div", [["class", "card-contain text-center p-t-30 d-flex flex-column justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 12, "table", [["class", "table table-striped table-bordered rounded-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 5, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Correo Electr\xF3nico"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tel\xE9fono"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 5, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "td", [["scope", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](31, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](33, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 20, "div", [["class", "table-responsive text-center p-t-10 d-flex flex-column justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 19, "table", [["class", "table table-striped table-bordered rounded-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 10, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 9, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 2, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](39, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 2, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](42, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 2, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](45, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 7, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 1, "td", [["scope", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](50, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](52, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](54, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 46, "div", [["class", "container mt-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 45, "form", [["class", "d-flex justify-content-center align-items-center flex-wrap gap-3"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).onReset() !== false;
          ad = pd_1 && ad;
        }

        if ("ngSubmit" === en) {
          var pd_2 = _co.generateUserReport() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], [[8, null], [8, null]], null, {
        ngSubmit: "ngSubmit"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 1, "label", [["class", "form-label"], ["for", "startDate"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fecha de inicio:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 5, "input", [["class", "form-control"], ["id", "startDate"], ["name", "startDate"], ["type", "date"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.startDate = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 1, "label", [["class", "form-label"], ["for", "endDate"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fecha de fin:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 5, "input", [["class", "form-control"], ["id", "endDate"], ["name", "endDate"], ["type", "date"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.endDate = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 20, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 1, "label", [["class", "form-label"], ["for", "status"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Estado:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 17, "select", [["class", "form-control"], ["id", "status"], ["name", "status"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).onChange($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_2 = (_co.selectedStatus = $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 3, "option", [["value", "rejected"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](90, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Rechazada"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 3, "option", [["value", "canceled"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](93, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](94, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancelada"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 3, "option", [["value", "delivered"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](97, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Entregada"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](100, 0, null, null, 1, "button", [["class", "btn btn-warning rounded text-dark font-weight-bold"], ["type", "submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Generar Reporte"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 23, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 22, "div", [["class", "user-card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 21, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 20, "ngb-tabset", [], null, null, null, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_NgbTabset_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_NgbTabset"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](106, 2146304, null, 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTabset"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTabsetConfig"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        tabs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 5, "ngb-tab", [["title", "Ordenes"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](109, 2113536, [[1, 4]], 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTab"], [], {
        title: [0, "title"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        titleTpls: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        contentTpls: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_UserdetailsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](113, 16384, [[3, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTabContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, null, 5, "ngb-tab", [["title", "Direccion"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](115, 2113536, [[1, 4]], 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTab"], [], {
        title: [0, "title"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        titleTpls: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        contentTpls: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_UserdetailsComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](119, 16384, [[5, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTabContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, null, 5, "ngb-tab", [["title", "Rese\xF1as"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](121, 2113536, [[1, 4]], 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTab"], [], {
        title: [0, "title"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        titleTpls: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        contentTpls: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_UserdetailsComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](125, 16384, [[7, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTabContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "#e74c3c";
        var currVal_1 = "ball-pulse-sync";

        _ck(_v, 1, 0, currVal_0, currVal_1);

        var currVal_28 = "startDate";
        var currVal_29 = _co.startDate;

        _ck(_v, 67, 0, currVal_28, currVal_29);

        var currVal_37 = "endDate";
        var currVal_38 = _co.endDate;

        _ck(_v, 76, 0, currVal_37, currVal_38);

        var currVal_46 = "status";
        var currVal_47 = _co.selectedStatus;

        _ck(_v, 85, 0, currVal_46, currVal_47);

        var currVal_48 = "rejected";

        _ck(_v, 89, 0, currVal_48);

        var currVal_49 = "rejected";

        _ck(_v, 90, 0, currVal_49);

        var currVal_50 = "canceled";

        _ck(_v, 93, 0, currVal_50);

        var currVal_51 = "canceled";

        _ck(_v, 94, 0, currVal_51);

        var currVal_52 = "delivered";

        _ck(_v, 97, 0, currVal_52);

        var currVal_53 = "delivered";

        _ck(_v, 98, 0, currVal_53);

        var currVal_54 = "Ordenes";

        _ck(_v, 109, 0, currVal_54);

        var currVal_55 = "Direccion";

        _ck(_v, 115, 0, currVal_55);

        var currVal_56 = "Rese\xF1as";

        _ck(_v, 121, 0, currVal_56);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).transform("Please wait..."));

        _ck(_v, 3, 0, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).transform("User Details"));

        _ck(_v, 10, 0, currVal_3);

        var currVal_4 = _co.photo;

        _ck(_v, 17, 0, currVal_4);

        var currVal_5 = _co.name;

        _ck(_v, 19, 0, currVal_5);

        var currVal_6 = _co.email;

        _ck(_v, 31, 0, currVal_6);

        var currVal_7 = _co.phone;

        _ck(_v, 33, 0, currVal_7);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 39, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).transform("Orders"));

        _ck(_v, 39, 0, currVal_8);

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 42, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).transform("Address"));

        _ck(_v, 42, 0, currVal_9);

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 45, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).transform("Reviews"));

        _ck(_v, 45, 0, currVal_10);

        var currVal_11 = _co.myOrders.length;

        _ck(_v, 50, 0, currVal_11);

        var currVal_12 = _co.myaddress.length;

        _ck(_v, 52, 0, currVal_12);

        var currVal_13 = _co.reviews.length;

        _ck(_v, 54, 0, currVal_13);

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassUntouched;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassTouched;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassPristine;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassDirty;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassValid;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassInvalid;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassPending;

        _ck(_v, 56, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20);

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassUntouched;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassTouched;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassPristine;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassDirty;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassValid;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassInvalid;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassPending;

        _ck(_v, 64, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27);

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassUntouched;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassTouched;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassPristine;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassDirty;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassValid;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassInvalid;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassPending;

        _ck(_v, 73, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36);

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).ngClassUntouched;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).ngClassTouched;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).ngClassPristine;

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).ngClassDirty;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).ngClassValid;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).ngClassInvalid;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).ngClassPending;

        _ck(_v, 82, 0, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45);
      });
    }

    function View_UserdetailsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-userdetails", [], null, null, null, View_UserdetailsComponent_0, RenderType_UserdetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _userdetails_component__WEBPACK_IMPORTED_MODULE_9__["UserdetailsComponent"], [_services_apis_service__WEBPACK_IMPORTED_MODULE_10__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var UserdetailsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-userdetails", _userdetails_component__WEBPACK_IMPORTED_MODULE_9__["UserdetailsComponent"], View_UserdetailsComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/userdetails/userdetails.component.scss.shim.ngstyle.js":
  /*!************************************************************************!*\
    !*** ./src/app/userdetails/userdetails.component.scss.shim.ngstyle.js ***!
    \************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppUserdetailsUserdetailsComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["@charset \"UTF-8\";\n.orders[_ngcontent-%COMP%] {\n  height: 60vh;\n  overflow: scroll;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  padding: 15px;\n  margin-top: 20px;\n  border: 0.5px solid lightgray;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .line_div[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 100%;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .back_image[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n  min-width: 50px;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .res_name[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 18px;\n  font-weight: 600;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .res_location[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 14px;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .head_gray[_ngcontent-%COMP%] {\n  color: #6b1414;\n  font-weight: bold;\n  font-size: 14px;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .small_lbl[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .border_bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed lightgray;\n  padding: 5px 0px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]   .food_title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]   .flex_titles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]   .flex_titles[_ngcontent-%COMP%]   .sub_name[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: black;\n  font-size: 12px;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .status_detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-weight: bolder;\n  font-size: 14px;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .status_detail[_ngcontent-%COMP%]   .status_canceled_rejected[_ngcontent-%COMP%] {\n  color: red;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .status_detail[_ngcontent-%COMP%]   .status_created_ongoing_accepted[_ngcontent-%COMP%] {\n  color: #aaaa0a;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .status_detail[_ngcontent-%COMP%]   .status_completed_delivered[_ngcontent-%COMP%] {\n  color: green;\n}\n.address[_ngcontent-%COMP%] {\n  height: 60vh;\n  overflow: scroll;\n}\n.address[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  position: relative;\n  border-bottom: 1px solid lightgray;\n  overflow-x: auto;\n}\n.address[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n.address[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.address[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .scroll-item[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.address[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: black;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n}\n.address[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #7a7a7a;\n  font-size: 0.9rem;\n}\n.address[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .moreIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 1px;\n}\n.review[_ngcontent-%COMP%] {\n  height: 60vh;\n  overflow: scroll;\n}\n.trackLink[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.trackLink[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  font-weight: bold;\n}\n.rounded-table[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0;\n  border: 1px solid #dee2e6;\n  \n  border-radius: 6px;\n  \n  overflow: hidden;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmRldGFpbHMvdXNlcmRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXJkZXRhaWxzL0M6XFxsYXJhZ29uXFx3d3dcXGFkbWluLXlvY2hpdm95cy1wYW5lbC1kZXYvc3JjXFxhcHBcXHVzZXJkZXRhaWxzXFx1c2VyZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0RJO0VBQ0ksV0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBREdSO0FDRlE7RUFDSSxXQUFBO0FESVo7QUNGUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FESVo7QUNGUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FESVo7QUNGWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FESWhCO0FDRFk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FER2hCO0FDRFk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBREdoQjtBQ0VZO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBREFoQjtBQ0dZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FERGhCO0FDR1k7RUFDSSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FERGhCO0FDR1k7RUFDSSxtQ0FBQTtFQUNBLG1CQUFBO0FERGhCO0FDRWdCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FEQXBCO0FDRWdCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QURBcEI7QUNDb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QURDeEI7QUNJUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FERlo7QUNHWTtFQUNJLFVBQUE7QUREaEI7QUNHWTtFQUNJLGNBQUE7QUREaEI7QUNHWTtFQUNJLFlBQUE7QUREaEI7QUNPQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBREpKO0FDS0k7RUFJSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBRE5SO0FDQVE7RUFDSSxXQUFBO0FERVo7QUNJUTtFQUNJLGFBQUE7QURGWjtBQ0lRO0VBQ0ksY0FBQTtBREZaO0FDSVE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FERlo7QUNJUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBREZaO0FDSVE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FERlo7QUNNQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBREhKO0FDTUE7RUFDSSxlQUFBO0FESEo7QUNNQTtFQUNJLDBCQUFBO0VBQ0EsaUJBQUE7QURISjtBQ01BO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQTJCLG9CQUFBO0VBQzNCLGtCQUFBO0VBQW9CLDhCQUFBO0VBQ3BCLGdCQUFBO0VBQWtCLHdEQUFBO0FEQXRCIiwiZmlsZSI6InNyYy9hcHAvdXNlcmRldGFpbHMvdXNlcmRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ub3JkZXJzIHtcbiAgaGVpZ2h0OiA2MHZoO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLm9yZGVycyAuY2FyZF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5vcmRlcnMgLmNhcmRfZGl2IHAge1xuICBtYXJnaW46IDBweDtcbn1cbi5vcmRlcnMgLmNhcmRfZGl2IC5saW5lX2RpdiB7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm9yZGVycyAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ub3JkZXJzIC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cbi5vcmRlcnMgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLnJlc19uYW1lIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ub3JkZXJzIC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5yZXNfbG9jYXRpb24ge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5vcmRlcnMgLmNhcmRfZGl2IC5vcmRlcl9kZXRhaWwgLmhlYWRfZ3JheSB7XG4gIGNvbG9yOiAjNmIxNDE0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm9yZGVycyAuY2FyZF9kaXYgLm9yZGVyX2RldGFpbCAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5vcmRlcnMgLmNhcmRfZGl2IC5vcmRlcl9kZXRhaWwgLmJvcmRlcl9ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5vcmRlcnMgLmNhcmRfZGl2IC5vcmRlcl9kZXRhaWwgLnN1Yk5hbWVzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4ub3JkZXJzIC5jYXJkX2RpdiAub3JkZXJfZGV0YWlsIC5zdWJOYW1lcyAuZm9vZF90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ub3JkZXJzIC5jYXJkX2RpdiAub3JkZXJfZGV0YWlsIC5zdWJOYW1lcyAuZmxleF90aXRsZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ub3JkZXJzIC5jYXJkX2RpdiAub3JkZXJfZGV0YWlsIC5zdWJOYW1lcyAuZmxleF90aXRsZXMgLnN1Yl9uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm9yZGVycyAuY2FyZF9kaXYgLnN0YXR1c19kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5vcmRlcnMgLmNhcmRfZGl2IC5zdGF0dXNfZGV0YWlsIC5zdGF0dXNfY2FuY2VsZWRfcmVqZWN0ZWQge1xuICBjb2xvcjogcmVkO1xufVxuLm9yZGVycyAuY2FyZF9kaXYgLnN0YXR1c19kZXRhaWwgLnN0YXR1c19jcmVhdGVkX29uZ29pbmdfYWNjZXB0ZWQge1xuICBjb2xvcjogI2FhYWEwYTtcbn1cbi5vcmRlcnMgLmNhcmRfZGl2IC5zdGF0dXNfZGV0YWlsIC5zdGF0dXNfY29tcGxldGVkX2RlbGl2ZXJlZCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmFkZHJlc3Mge1xuICBoZWlnaHQ6IDYwdmg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG4uYWRkcmVzcyAubGlzdCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5hZGRyZXNzIC5saXN0IHAge1xuICBtYXJnaW46IDBweDtcbn1cbi5hZGRyZXNzIC5saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYWRkcmVzcyAubGlzdCAuc2Nyb2xsLWl0ZW0ge1xuICBmbGV4OiAwIDAgYXV0bztcbn1cbi5hZGRyZXNzIC5saXN0IC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmFkZHJlc3MgLmxpc3QgLm5hbWUge1xuICBjb2xvcjogIzdhN2E3YTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4uYWRkcmVzcyAubGlzdCAubW9yZUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMXB4O1xufVxuXG4ucmV2aWV3IHtcbiAgaGVpZ2h0OiA2MHZoO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4udHJhY2tMaW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udHJhY2tMaW5rOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucm91bmRlZC10YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAvKiBDb2xvciBkZWwgYm9yZGUgKi9cbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAvKiBBanVzdGEgZWwgcmFkaW8gZGVsIGJvcmRlICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qIEFzZWfDunJhdGUgZGUgcXVlIGxhcyBlc3F1aW5hcyByZWRvbmRlYWRhcyBmdW5jaW9uZW4gKi9cbn0iLCIub3JkZXJze1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIC5jYXJkX2RpdntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIHB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuICAgICAgICAubGluZV9kaXZ7XG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJlc3RvX2RldGFpbHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJlc19uYW1le1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVzX2xvY2F0aW9ue1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9yZGVyX2RldGFpbHtcbiAgICAgICAgICAgIC5oZWFkX2dyYXl7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigxMDcsIDIwLCAyMCk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib3JkZXJfYm90dG9te1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN1Yk5hbWVze1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgLmZvb2RfdGl0bGV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5mbGV4X3RpdGxlc3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAuc3ViX25hbWV7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc3RhdHVzX2RldGFpbHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIC5zdGF0dXNfY2FuY2VsZWRfcmVqZWN0ZWR7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdGF0dXNfY3JlYXRlZF9vbmdvaW5nX2FjY2VwdGVke1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTcwLCAxNzAsIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdGF0dXNfY29tcGxldGVkX2RlbGl2ZXJlZHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hZGRyZXNze1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIC5saXN0e1xuICAgICAgICBwe1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5zY3JvbGwtaXRlbSB7XG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgICAubmFtZXtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTIyLCAxMjIsIDEyMik7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgfVxuICAgICAgICAubW9yZUljb257XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4ucmV2aWV3e1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4udHJhY2tMaW5rIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50cmFja0xpbms6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucm91bmRlZC10YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2OyAvKiBDb2xvciBkZWwgYm9yZGUgKi9cbiAgICBib3JkZXItcmFkaXVzOiA2cHg7IC8qIEFqdXN0YSBlbCByYWRpbyBkZWwgYm9yZGUgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBBc2Vnw7pyYXRlIGRlIHF1ZSBsYXMgZXNxdWluYXMgcmVkb25kZWFkYXMgZnVuY2lvbmVuICovXG4gIH1cbiAgXG4gXG5cbiJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/userdetails/userdetails.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/userdetails/userdetails.component.ts ***!
    \******************************************************/

  /*! exports provided: UserdetailsComponent */

  /***/
  function srcAppUserdetailsUserdetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdetailsComponent", function () {
      return UserdetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jspdf */
    "./node_modules/jspdf/dist/jspdf.min.js");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jspdf-autotable */
    "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
    /* harmony import */


    var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);

    var UserdetailsComponent = /*#__PURE__*/function () {
      function UserdetailsComponent(api, route, http) {
        var _this = this;

        _classCallCheck(this, UserdetailsComponent);

        this.api = api;
        this.route = route;
        this.http = http;
        this.myOrders = [];
        this.myaddress = [];
        this.reviews = [];
        this.name = '';
        this.email = '';
        this.photo = '';
        this.phone = '';
        this.showTracking = false;
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.id) {
            _this.id = data.id;

            _this.getProfile();

            _this.getMyOrders();

            _this.getAddress();
          }
        });
      }

      _createClass(UserdetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getProfile",
        value: function getProfile() {
          var _this2 = this;

          this.api.getMyProfile(this.id).then(function (data) {
            console.log('userdata', data);

            if (data) {
              _this2.name = data.fullname;
              _this2.photo = data && data.cover ? data.cover : 'assets/avatar-1.jpg';
              _this2.email = data.email;
              _this2.phone = data.phone;

              _this2.api.getMyReviews(data.uid).then(function (reviews) {
                console.log(reviews);
                _this2.reviews = reviews;
              }, function (error) {
                console.log(error);
              })["catch"](function (error) {
                console.log(error);
              });
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getAddress",
        value: function getAddress() {
          var _this3 = this;

          this.api.getMyAddress(this.id).then(function (data) {
            console.log('my address', data);

            if (data) {
              _this3.myaddress = data;
            }
          }, function (error) {
            console.log(error);
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "convertTo12Hour",
        value: function convertTo12Hour(time) {
          if (!time) return '';

          var _time$split$map = time.split(':').map(Number),
              _time$split$map2 = _slicedToArray(_time$split$map, 2),
              hours = _time$split$map2[0],
              minutes = _time$split$map2[1];

          var suffix = hours >= 12 ? 'PM' : 'AM';
          var hour12 = hours % 12 || 12; // Convierte 0 (medianoche) o 12 (mediodía) al formato adecuado.

          return "".concat(hour12, ":").concat(minutes.toString().padStart(2, '0'), " ").concat(suffix);
        }
      }, {
        key: "getMyOrders",
        value: function getMyOrders() {
          var _this4 = this;

          this.api.getMyOrders(this.id).then(function (data) {
            console.log('my orders', data);

            if (data && data.length) {
              data.forEach(function (element) {
                element.time = new Date(element.time);
              });
              data.sort(function (a, b) {
                return b.time - a.time;
              });
              _this4.myOrders = data;

              _this4.myOrders.forEach(function (element) {
                element.order = JSON.parse(element.order);
              });

              console.log('my order==>', _this4.myOrders);
            }
          }, function (error) {
            console.log(error);
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getDate",
        value: function getDate(date) {
          return moment__WEBPACK_IMPORTED_MODULE_1__(date).format('llll');
        }
      }, {
        key: "getCurrency",
        value: function getCurrency() {
          return this.api.getCurrecySymbol();
        }
      }, {
        key: "showTrack",
        value: function showTrack() {
          this.showTracking = !this.showTracking;
        }
      }, {
        key: "getOrderStatus",
        value: function getOrderStatus(status) {
          switch (status) {
            case 'rejected':
              return 'Rechazada';

            case 'canceled':
              return 'Cancelada';

            case 'delivered':
              return 'Entregada';

            case 'created':
              return 'Creado';

            default:
              return 'Desconocido';
            // Por si el estado no está en los valores conocidos
          }
        }
      }, {
        key: "generateUserReport",
        value: function generateUserReport() {
          var _this5 = this;

          var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2___default.a();
          var margin = 10; // Rango de fechas

          var filteredOrders = this.myOrders;
          var filteredReviews = this.reviews;

          if (this.startDate && this.endDate) {
            var start = moment__WEBPACK_IMPORTED_MODULE_1__(this.startDate).startOf('day');
            var end = moment__WEBPACK_IMPORTED_MODULE_1__(this.endDate).endOf('day');
            filteredOrders = this.myOrders.filter(function (order) {
              return moment__WEBPACK_IMPORTED_MODULE_1__(order.time).isBetween(start, end, undefined, '[]');
            });
            filteredReviews = this.reviews.filter(function (review) {
              return moment__WEBPACK_IMPORTED_MODULE_1__(review.createdAt).isBetween(start, end, undefined, '[]');
            });
          }

          if (this.selectedStatus) {
            filteredOrders = filteredOrders.filter(function (order) {
              return order.status === _this5.selectedStatus;
            });
          } // Título del reporte


          doc.setFontSize(16);
          doc.text('Reporte de Detalles del Usuario', doc.internal.pageSize.width / 2, margin, {
            align: 'center'
          }); // Cargar la imagen y agregarla en cada página

          this.http.get('assets/images/dashboard/yochivoy_logo.png', {
            responseType: 'blob'
          }).subscribe(function (blob) {
            var reader = new FileReader();

            reader.onload = function () {
              var base64Image = reader.result; // Función para agregar la imagen en la parte superior de cada página

              var addImageToPage = function addImageToPage() {
                doc.addImage(base64Image, 'PNG', 175, 5, 30, 15); // Ajustar coordenadas y tamaño según sea necesario
              }; // Agregar la imagen en la primera página


              addImageToPage(); // Detalles del usuario

              var userDetailsTitleY = margin + 10; // Posición Y para el título

              doc.setFontSize(14);
              doc.text('Detalles del Usuario', margin, userDetailsTitleY);
              var userDetails = [['Nombre:', _this5.name || 'N/A'], ['Correo Electrónico:', _this5.email || 'N/A'], ['Teléfono:', _this5.phone || 'N/A'], ['Órdenes:', filteredOrders.length], ['Direcciones:', _this5.myaddress.length], ['Reseñas:', filteredReviews.length]];
              doc.setFontSize(12);
              jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default()(doc, {
                body: userDetails,
                theme: 'grid',
                startY: userDetailsTitleY + 5,
                margin: {
                  left: margin,
                  right: margin
                }
              }); // Tabla de órdenes

              if (filteredOrders.length) {
                var ordersTitleY = doc.previousAutoTable.finalY + 10;
                doc.setFontSize(14);
                doc.text('Órdenes del Usuario', margin, ordersTitleY);
                jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default()(doc, {
                  startY: ordersTitleY + 5,
                  head: [['Orden', 'Restaurante', 'Fecha', 'Total', 'Estado']],
                  body: filteredOrders.map(function (order) {
                    return [order.id || 'N/A', order.vid.name || 'N/A', _this5.getDate(order.time) || 'N/A', "".concat(_this5.getCurrency()).concat(order.grandTotal || '0'), _this5.getOrderStatus(order.status) || 'N/A'];
                  }),
                  theme: 'grid',
                  margin: {
                    left: margin,
                    right: margin
                  }
                });
              } // Tabla de direcciones


              if (_this5.myaddress.length) {
                var addressesTitleY = doc.previousAutoTable.finalY + 10; // Posición Y para el título de la tabla

                doc.setFontSize(14);
                doc.text('Direcciones Registradas', margin, addressesTitleY);
                jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default()(doc, {
                  startY: addressesTitleY + 5,
                  head: [['Título', 'Dirección']],
                  body: _this5.myaddress.map(function (addr) {
                    return [addr.title || 'N/A', "".concat(addr.house || '', ", ").concat(addr.landmark || '', ", ").concat(addr.address || '').trim() || 'N/A'];
                  }),
                  theme: 'grid',
                  headStyles: {
                    textColor: [0, 0, 0]
                  },
                  margin: {
                    left: margin,
                    right: margin
                  }
                });
              } /// Tabla de reseñas


              if (filteredReviews.length) {
                var reviewsTitleY = doc.previousAutoTable.finalY + 10;
                doc.setFontSize(14);
                doc.text('Reseñas del Usuario', margin, reviewsTitleY);
                jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default()(doc, {
                  startY: reviewsTitleY + 5,
                  head: [['Restaurante', 'Fecha', 'Reseña']],
                  body: filteredReviews.map(function (review) {
                    return [review.vid.name || 'N/A', _this5.getDate(review.createdAt) || 'N/A', review.descriptions || 'N/A'];
                  }),
                  theme: 'grid',
                  margin: {
                    left: margin,
                    right: margin
                  }
                });
              } // Si hay más páginas, agregarlas y añadir la imagen a cada una


              var pageCount = doc.internal.pages.length;

              for (var i = 1; i < pageCount; i++) {
                doc.setPage(i);
                addImageToPage();
              } // Descargar el reporte


              doc.save("Reporte_Usuario_".concat(_this5.name || 'N/A', ".pdf"));
            };

            reader.readAsDataURL(blob); // Convertir la imagen a base64
          });
        }
      }]);

      return UserdetailsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/userdetails/userdetails.module.ngfactory.js":
  /*!*************************************************************!*\
    !*** ./src/app/userdetails/userdetails.module.ngfactory.js ***!
    \*************************************************************/

  /*! exports provided: UserdetailsModuleNgFactory */

  /***/
  function srcAppUserdetailsUserdetailsModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdetailsModuleNgFactory", function () {
      return UserdetailsModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _userdetails_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./userdetails.module */
    "./src/app/userdetails/userdetails.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _userdetails_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./userdetails.component.ngfactory */
    "./src/app/userdetails/userdetails.component.ngfactory.js");
    /* harmony import */


    var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
    "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-toasty/src/toasty.service */
    "./node_modules/ng2-toasty/src/toasty.service.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular2-notifications/dist/src/simple-notifications/services/notifications.service */
    "./node_modules/angular2-notifications/dist/src/simple-notifications/services/notifications.service.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! css-animator/angular/animation.service */
    "./node_modules/css-animator/angular/animation.service.js");
    /* harmony import */


    var css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @nicky-lenaers/ngx-scroll-to */
    "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm2015/nicky-lenaers-ngx-scroll-to.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../shared/menu-items/menu-items */
    "./src/app/shared/menu-items/menu-items.ts");
    /* harmony import */


    var _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../shared/todo/todo.service */
    "./src/app/shared/todo/todo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _userdetails_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./userdetails-routing.module */
    "./src/app/userdetails/userdetails-routing.module.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ng2_toasty__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ng2-toasty */
    "./node_modules/ng2-toasty/index.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! angular2-notifications/dist/src/simple-notifications.module */
    "./node_modules/angular2-notifications/dist/src/simple-notifications.module.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! css-animator/angular/animator.module */
    "./node_modules/css-animator/angular/animator.module.js");
    /* harmony import */


    var css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20__);
    /* harmony import */


    var ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ng-click-outside/lib/click-outside.module */
    "./node_modules/ng-click-outside/lib/click-outside.module.js");
    /* harmony import */


    var ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21__);
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _userdetails_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./userdetails.component */
    "./src/app/userdetails/userdetails.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var UserdetailsModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_userdetails_module__WEBPACK_IMPORTED_MODULE_1__["UserdetailsModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _userdetails_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["UserdetailsComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵsNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ɵw"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyService"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["toastyServiceFactory"], [ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"], angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__["AnimationService"], css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__["AnimationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToService"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToService"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵc"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵd"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_12__["MapsAPILoader"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["LazyMapsAPILoader"], [[2, _agm_core__WEBPACK_IMPORTED_MODULE_12__["LAZY_MAPS_API_CONFIG"]], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵc"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵd"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_13__["MenuItems"], _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_13__["MenuItems"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_14__["TodoService"], _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_14__["TodoService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _userdetails_routing_module__WEBPACK_IMPORTED_MODULE_16__["UserdetailsRoutingModule"], _userdetails_routing_module__WEBPACK_IMPORTED_MODULE_16__["UserdetailsRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_toasty__WEBPACK_IMPORTED_MODULE_18__["ToastyModule"], ng2_toasty__WEBPACK_IMPORTED_MODULE_18__["ToastyModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19__["SimpleNotificationsModule"], angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19__["SimpleNotificationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20__["AnimatorModule"], css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20__["AnimatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21__["ClickOutsideModule"], ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21__["ClickOutsideModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PerfectScrollbarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PerfectScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_23__["NgxSkeletonLoaderModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_23__["NgxSkeletonLoaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _userdetails_module__WEBPACK_IMPORTED_MODULE_1__["UserdetailsModule"], _userdetails_module__WEBPACK_IMPORTED_MODULE_1__["UserdetailsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], function () {
        return [[{
          path: "",
          component: _userdetails_component__WEBPACK_IMPORTED_MODULE_26__["UserdetailsComponent"],
          data: _userdetails_routing_module__WEBPACK_IMPORTED_MODULE_16__["ɵ0"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _agm_core__WEBPACK_IMPORTED_MODULE_12__["LAZY_MAPS_API_CONFIG"], {
        apiKey: "AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk"
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PERFECT_SCROLLBAR_CONFIG"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["ɵ0"], [])]);
    });
    /***/

  },

  /***/
  "./src/app/userdetails/userdetails.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/userdetails/userdetails.module.ts ***!
    \***************************************************/

  /*! exports provided: UserdetailsModule */

  /***/
  function srcAppUserdetailsUserdetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdetailsModule", function () {
      return UserdetailsModule;
    });

    var UserdetailsModule = function UserdetailsModule() {
      _classCallCheck(this, UserdetailsModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=userdetails-userdetails-module-ngfactory-es5.js.map