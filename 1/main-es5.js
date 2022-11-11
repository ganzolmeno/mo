(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+Bt9":
    /*!***********************************************************************!*\
      !*** ./src/app/_Loot/SunkenTreasure/loot-sunkentreasure.component.ts ***!
      \***********************************************************************/

    /*! exports provided: LootSunkentreasureComponent */

    /***/
    function Bt9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LootSunkentreasureComponent", function () {
        return LootSunkentreasureComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _object_returns_object_returns_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../object-returns/object-returns.component */
      "wQSC");

      var LootSunkentreasureComponent = /*@__PURE__*/function () {
        var LootSunkentreasureComponent = /*#__PURE__*/function () {
          function LootSunkentreasureComponent() {
            _classCallCheck(this, LootSunkentreasureComponent);
          }

          _createClass(LootSunkentreasureComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return LootSunkentreasureComponent;
        }();

        LootSunkentreasureComponent.ɵfac = function LootSunkentreasureComponent_Factory(t) {
          return new (t || LootSunkentreasureComponent)();
        };

        LootSunkentreasureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LootSunkentreasureComponent,
          selectors: [["app-loot-sunkentreasure"]],
          hostAttrs: [1, "route-app"],
          decls: 1,
          vars: 3,
          consts: [[3, "objectID", "baseType", "isDisplayName"]],
          template: function LootSunkentreasureComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-object-returns", 0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("objectID", 1396)("baseType", "item")("isDisplayName", true);
            }
          },
          directives: [_object_returns_object_returns_component__WEBPACK_IMPORTED_MODULE_1__["ObjectReturnsComponent"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19Mb290L1N1bmtlblRyZWFzdXJlL2xvb3Qtc3Vua2VudHJlYXN1cmUuY29tcG9uZW50LmNzcyJ9 */"]
        });
        return LootSunkentreasureComponent;
      }();
      /***/

    },

    /***/
    "+KV0":
    /*!************************************************!*\
      !*** ./src/app/dev-lang/dev-lang.component.ts ***!
      \************************************************/

    /*! exports provided: DevLangComponent */

    /***/
    function KV0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DevLangComponent", function () {
        return DevLangComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../language.service */
      "y91y");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function DevLangComponent_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DevLangComponent_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r9.tag);
        }
      }

      function DevLangComponent_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DevLangComponent_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r10.key);
        }
      }

      function DevLangComponent_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DevLangComponent_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r11.en, " ");
        }
      }

      function DevLangComponent_ng_container_10_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.lang.settingLang.value);
        }
      }

      function DevLangComponent_ng_container_10_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r14[ctx_r13.lang.settingLang.value], " ");
        }
      }

      function DevLangComponent_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DevLangComponent_ng_container_10_th_2_Template, 2, 1, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DevLangComponent_ng_container_10_td_3_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matColumnDef", ctx_r6.lang.settingLang.value);
        }
      }

      function DevLangComponent_tr_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
        }
      }

      function DevLangComponent_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
        }
      }

      var DevLangComponent = /*@__PURE__*/function () {
        var DevLangComponent = /*#__PURE__*/function () {
          function DevLangComponent(lang) {
            _classCallCheck(this, DevLangComponent);

            this.lang = lang;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
            this.displayedColumns = ['tag', 'key', 'en'];
          }

          _createClass(DevLangComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getData();

              if (this.lang.settingLang.value !== 'en') {
                this.displayedColumns.push(this.lang.settingLang.value);
              }
            }
          }, {
            key: "getData",
            value: function getData() {
              this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();

              for (var key1 in this.lang.lang) {
                if (key1 === this.lang.settingLang.value) {
                  var temp1 = this.lang.lang[key1];

                  for (var key2 in temp1) {
                    if (temp1.hasOwnProperty(key2)) {
                      var temp2 = temp1[key2];

                      for (var key3 in temp2) {
                        if (temp2.hasOwnProperty(key3)) {
                          var temp3 = temp2[key3];
                          var obj = void 0;
                          obj = {};
                          obj.tag = key2;
                          obj.key = key3;
                          obj[this.lang.settingLang.value] = temp3;

                          if (this.lang.settingLang.value !== 'en') {
                            var temp4 = this.lang.lang.en;

                            if (temp4[key2] && temp4[key2][key3]) {
                              obj.en = temp4[key2][key3];
                            }
                          }

                          this.dataSource.data.push(obj);
                        }
                      }
                    }
                  }
                }
              }
            }
          }]);

          return DevLangComponent;
        }();

        DevLangComponent.ɵfac = function DevLangComponent_Factory(t) {
          return new (t || DevLangComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]));
        };

        DevLangComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: DevLangComponent,
          selectors: [["app-dev-lang"]],
          decls: 13,
          vars: 5,
          consts: [["mat-table", "", 1, "doc-table", "doc-table-info", 3, "dataSource"], ["matColumnDef", "tag"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "key"], ["matColumnDef", "en"], [4, "ngIf"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "matColumnDef"], ["mat-header-row", ""], ["mat-row", ""]],
          template: function DevLangComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DevLangComponent_th_2_Template, 2, 0, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DevLangComponent_td_3_Template, 2, 1, "td", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DevLangComponent_th_5_Template, 2, 0, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DevLangComponent_td_6_Template, 2, 1, "td", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DevLangComponent_th_8_Template, 2, 0, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DevLangComponent_td_9_Template, 2, 1, "td", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DevLangComponent_ng_container_10_Template, 4, 1, "ng-container", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DevLangComponent_tr_11_Template, 1, 0, "tr", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DevLangComponent_tr_12_Template, 1, 0, "tr", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang.settingLang.value !== "en");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            }
          },
          directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rldi1sYW5nL2Rldi1sYW5nLmNvbXBvbmVudC5jc3MifQ== */"]
        });
        return DevLangComponent;
      }();
      /***/

    },

    /***/
    "/Uh7":
    /*!**********************************!*\
      !*** ./src/app/image.service.ts ***!
      \**********************************/

    /*! exports provided: ImageService */

    /***/
    function Uh7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageService", function () {
        return ImageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _baseapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./baseapi.service */
      "JY2j");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      var ImageService = /*@__PURE__*/function () {
        var ImageService = /*#__PURE__*/function () {
          function ImageService(baseApi, sanitizer) {
            _classCallCheck(this, ImageService);

            this.baseApi = baseApi;
            this.sanitizer = sanitizer;
            this.quests = quests;
            this.npc_base = npc_base;
            this.item_base = item_base;
            this.Fletching = Fletching;
          }

          _createClass(ImageService, [{
            key: "init",
            value: function () {
              var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return this.preload().then(function () {});

                      case 2:
                        return _context.abrupt("return", Promise.resolve());

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              function init() {
                return _init.apply(this, arguments);
              }

              return init;
            }()
          }, {
            key: "preload",
            value: function () {
              var _preload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var imagePromise, key, _loop, _key;

                return regeneratorRuntime.wrap(function _callee2$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        imagePromise = {};

                        for (key in IMAGE_SHEET) {
                          if (IMAGE_SHEET[key].url) {
                            IMAGE_SHEET[key].url = this.baseApi.urls.cdn + IMAGE_SHEET[key].url + '?' + img_hashes[parseInt(key, 10) - 1] + this.baseApi.urls.mohostname;
                            IMAGE_SHEET[key].img = [];
                            IMAGE_SHEET[key].tile_half_width_floor = Math.trunc(IMAGE_SHEET[key].tile_width / 2);
                            IMAGE_SHEET[key].tile_half_height_floor = Math.trunc(IMAGE_SHEET[key].tile_height / 2);
                            imagePromise[key] = this.getImage(IMAGE_SHEET[key].url);
                          }
                        }

                        _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(_key) {
                          return regeneratorRuntime.wrap(function _loop$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  if (!imagePromise[_key]) {
                                    _context2.next = 3;
                                    break;
                                  }

                                  _context2.next = 3;
                                  return imagePromise[_key].then(function (e) {
                                    IMAGE_SHEET[_key].img = e;
                                  });

                                case 3:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _loop);
                        });
                        _context3.t0 = regeneratorRuntime.keys(imagePromise);

                      case 4:
                        if ((_context3.t1 = _context3.t0()).done) {
                          _context3.next = 9;
                          break;
                        }

                        _key = _context3.t1.value;
                        return _context3.delegateYield(_loop(_key), "t2", 7);

                      case 7:
                        _context3.next = 4;
                        break;

                      case 9:
                        return _context3.abrupt("return", Promise.resolve());

                      case 10:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee2, this);
              }));

              function preload() {
                return _preload.apply(this, arguments);
              }

              return preload;
            }()
          }, {
            key: "getImage",
            value: function () {
              var _getImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url) {
                return regeneratorRuntime.wrap(function _callee3$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return new Promise(function (resolve) {
                          var img = new Image();
                          img.src = url;

                          img.onload = function () {
                            resolve(img);
                          };

                          img.onerror = function () {
                            resolve(img);
                          };
                        });

                      case 2:
                        return _context4.abrupt("return", _context4.sent);

                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee3);
              }));

              function getImage(_x2) {
                return _getImage.apply(this, arguments);
              }

              return getImage;
            }()
          }, {
            key: "getImgBackGround",
            value: function getImgBackGround(img) {
              if (!img.sheet) {
                return;
              }

              var d = IMAGE_SHEET[img.sheet];

              if (d.img && d.img.src) {
                var src = d.img.src;
                this.sanitizer.bypassSecurityTrustStyle('url("' + src + '")');
                var safeimg = {
                  url: src,
                  width: d.tile_width,
                  height: d.tile_height,
                  offsetX: -img.x * d.tile_width,
                  offsetY: -img.y * d.tile_height
                };
                return safeimg;
              }
            }
          }, {
            key: "get_background",
            value: function get_background(a, b) {
              var _this = this;

              return new Promise(function (resolve, reject) {
                if (b.safeimg) {
                  resolve(b.safeimg);
                }

                b = b || item_base[a];

                if (!b) {
                  return '';
                }

                var body;

                if (b.img.arrow) {
                  b.safeimg = {
                    url: _this.sanitizer.bypassSecurityTrustStyle('url("' + Fletching.get_arrow_inventory_img(a).toDataURL('image/png') + '") no-repeat scroll 0px 0px transparent'),
                    width: 32,
                    height: 32
                  };
                  console.log(a);
                  resolve(b.safeimg);
                }

                if (b.img.hash) {
                  body = _this.getBodyImg(b.img.hash);

                  if (!body) {
                    reject('');
                  }

                  b.safeimg = {
                    url: _this.sanitizer.bypassSecurityTrustStyle('url("' + body.toDataURL('image/png') + '") no-repeat scroll 0px 0px transparent'),
                    width: body.width,
                    height: body.height
                  };
                  console.log(a);
                  resolve(b.safeimg);
                }

                var d = IMAGE_SHEET[b.img.sheet];

                if (d) {
                  reject('');
                }
                /*
                b.safeimg = {
                  url: this.sanitizer.bypassSecurityTrustStyle(
                    'url("' + d.img.src + '") no-repeat scroll ' + -b.img.x * d.tile_width + 'px ' + -b.img.y * d.tile_height + 'px transparent'),
                  width: d.tile_width,
                  height: d.tile_height
                };
                */


                body = _this.removeImgAlpha(d.img, -b.img.x * d.tile_width, -b.img.y * d.tile_height, d.tile_width, d.tile_height);
                b.safeimg = {
                  url: _this.sanitizer.bypassSecurityTrustStyle('url("' + body.toDataURL('image/png') + '") no-repeat scroll 0px 0px transparent'),
                  width: body.width,
                  height: body.height
                };
                console.log(a);
                resolve(b.safeimg);
              });
            }
          }, {
            key: "getBodyImg",
            value: function (_getBodyImg) {
              function getBodyImg(_x) {
                return _getBodyImg.apply(this, arguments);
              }

              getBodyImg.toString = function () {
                return _getBodyImg.toString();
              };

              return getBodyImg;
            }(function (a) {
              var b = a.split(' ');

              if (72 === b[4]) {
                b[4] = '0';
              }

              if (b[12]) {
                b[12] = '0';
              }

              a = b.join(' ');

              if (!body_images[a]) {
                body_images[a] = this.removeCanvasAlpha(getBodyImg(a));
              }

              return body_images[a];
            })
          }, {
            key: "removeImgAlpha",
            value: function removeImgAlpha(img, x, y, w, h) {
              var canvas = document.createElement('canvas');
              var ctx = canvas.getContext('2d');
              canvas.width = w;
              canvas.height = h;
              ctx.drawImage(img, -x, -y, w, h, 0, 0, w, h);
              return this.removeCanvasAlpha(canvas);
            }
          }, {
            key: "removeCanvasAlpha",
            value: function removeCanvasAlpha(canvas) {
              var ctx = canvas.getContext('2d');
              var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
              var lOffset = canvas.width;
              var rOffset = 0;
              var tOffset = canvas.height;
              var bOffset = 0;

              for (var i = 0; i < canvas.width; i++) {
                for (var j = 0; j < canvas.height; j++) {
                  var pos = (i + canvas.width * j) * 4;

                  if (imgData[pos] > 0 || imgData[pos + 1] > 0 || imgData[pos + 2] || imgData[pos + 3] > 0) {
                    bOffset = Math.max(j, bOffset);
                    rOffset = Math.max(i, rOffset);
                    tOffset = Math.min(j, tOffset);
                    lOffset = Math.min(i, lOffset);
                  }
                }
              }

              lOffset++;
              rOffset++;
              tOffset++;
              bOffset++;
              var newCanvas = document.createElement('canvas');
              newCanvas.width = rOffset - lOffset;
              newCanvas.height = bOffset - tOffset;
              imgData = ctx.getImageData(lOffset, tOffset, canvas.width, canvas.height);
              newCanvas.getContext('2d').putImageData(imgData, 0, 0);
              return newCanvas;
            }
          }]);

          return ImageService;
        }();

        ImageService.ɵfac = function ImageService_Factory(t) {
          return new (t || ImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_baseapi_service__WEBPACK_IMPORTED_MODULE_1__["BaseApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
        };

        ImageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: ImageService,
          factory: ImageService.ɵfac,
          providedIn: 'root'
        });
        return ImageService;
      }();
      /***/

    },

    /***/
    "/s/1":
    /*!************************************************************************!*\
      !*** ./src/app/_Quests/party-quest-kill/party-quest-kill.component.ts ***!
      \************************************************************************/

    /*! exports provided: PartyQuestKillComponent */

    /***/
    function s1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PartyQuestKillComponent", function () {
        return PartyQuestKillComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../wiki.service */
      "uUtE");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../language.service */
      "y91y");
      /* harmony import */


      var _party_quest_party_quest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../party-quest/party-quest.service */
      "BL1I");
      /* harmony import */


      var _highscore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../highscore.service */
      "8Rav");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function PartyQuestKillComponent_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.translateLang.Health.trans);
        }
      }

      function PartyQuestKillComponent_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r10.health);
        }
      }

      function PartyQuestKillComponent_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Exp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PartyQuestKillComponent_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r11 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r11.reward_exp * (ctx_r3.pq.difficulty.value * 1 + 1), "1."), " ");
        }
      }

      function PartyQuestKillComponent_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Coins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PartyQuestKillComponent_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r12 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r12.reward_coin * (ctx_r5.pq.difficulty.value * 1 + 1), "1."), " ");
        }
      }

      function PartyQuestKillComponent_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PartyQuestKillComponent_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r13.reward_mos * (ctx_r7.pq.difficulty.value * 1 + 1), "1."), " ");
        }
      }

      function PartyQuestKillComponent_tr_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
        }
      }

      function PartyQuestKillComponent_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
        }

        if (rf & 2) {
          var row_r14 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx_r9.hp === row_r14.health ? "tick" : "cross");
        }
      }

      var PartyQuestKillComponent = /*@__PURE__*/function () {
        var PartyQuestKillComponent = /*#__PURE__*/function () {
          function PartyQuestKillComponent(wiki, lang, pq, hs) {
            _classCallCheck(this, PartyQuestKillComponent);

            this.wiki = wiki;
            this.lang = lang;
            this.pq = pq;
            this.hs = hs;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
            this.hp = 10;
            this.displayedColumns = ['health', 'reward_exp', 'reward_coin', 'reward_mos'];
            this.translateLang = {
              Health: {
                trans: '',
                "class": 'i'
              }
            };
          }

          _createClass(PartyQuestKillComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this2 = this;

              this.LanguageSubscription = this.lang.settingLang.subscribe(function (e) {
                _this2.onLangChange();
              });
              this.HighscoreSubscription = this.hs.mainStats.subscribe(function (e) {
                _this2.onStatsChange();
              });
              this.getData();
            }
          }, {
            key: "getData",
            value: function getData() {
              for (var key in PartyQuests.kill_all_rewards) {
                if (PartyQuests.kill_all_rewards.hasOwnProperty(key)) {
                  var temp = PartyQuests.kill_all_rewards[key];
                  var obj = {};
                  obj.health = temp.health;
                  obj.reward_exp = temp.reward[0];
                  obj.reward_coin = temp.reward[1];
                  obj.reward_mos = temp.reward[2];
                  this.dataSource.data.push(obj);
                }
              }
            }
          }, {
            key: "onStatsChange",
            value: function onStatsChange() {
              var temp = Math.floor(this.hs.mainStats.value.health / 10) * 10;
              temp = temp > 120 ? 120 : temp;
              this.hp = temp;
            }
          }, {
            key: "onLangChange",
            value: function onLangChange() {
              for (var key in this.translateLang) {
                if (this.translateLang.hasOwnProperty(key)) {
                  this.translateLang[key].trans = this.lang.getString(key, this.translateLang[key]["class"]);
                }
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.LanguageSubscription.unsubscribe();
              this.HighscoreSubscription.unsubscribe();
            }
          }]);

          return PartyQuestKillComponent;
        }();

        PartyQuestKillComponent.ɵfac = function PartyQuestKillComponent_Factory(t) {
          return new (t || PartyQuestKillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_2__["WikiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_party_quest_party_quest_service__WEBPACK_IMPORTED_MODULE_4__["PartyQuestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_highscore_service__WEBPACK_IMPORTED_MODULE_5__["HighscoreService"]));
        };

        PartyQuestKillComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: PartyQuestKillComponent,
          selectors: [["app-party-quest-kill"]],
          decls: 15,
          vars: 3,
          consts: [["mat-table", "", 1, "doc-table", "doc-table-info", 3, "dataSource"], ["matColumnDef", "health"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "access center", 4, "matCellDef"], ["matColumnDef", "reward_exp"], ["mat-cell", "", "class", "right", 4, "matCellDef"], ["matColumnDef", "reward_coin"], ["matColumnDef", "reward_mos"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "className", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "access", "center"], ["mat-cell", "", 1, "right"], ["mat-header-row", ""], ["mat-row", "", 3, "className"]],
          template: function PartyQuestKillComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PartyQuestKillComponent_th_2_Template, 2, 1, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PartyQuestKillComponent_td_3_Template, 2, 1, "td", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PartyQuestKillComponent_th_5_Template, 2, 0, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PartyQuestKillComponent_td_6_Template, 3, 4, "td", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PartyQuestKillComponent_th_8_Template, 2, 0, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PartyQuestKillComponent_td_9_Template, 3, 4, "td", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PartyQuestKillComponent_th_11_Template, 2, 0, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PartyQuestKillComponent_td_12_Template, 3, 4, "td", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PartyQuestKillComponent_tr_13_Template, 1, 0, "tr", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PartyQuestKillComponent_tr_14_Template, 1, 1, "tr", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            }
          },
          directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19RdWVzdHMvcGFydHktcXVlc3Qta2lsbC9wYXJ0eS1xdWVzdC1raWxsLmNvbXBvbmVudC5jc3MifQ== */"]
        });
        return PartyQuestKillComponent;
      }();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Users\XUAN\Documents\Project\RPG MO\mo-tool-v10\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "14tG":
    /*!*******************************************!*\
      !*** ./src/app/app-initialize.service.ts ***!
      \*******************************************/

    /*! exports provided: AppInitializeService */

    /***/
    function tG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppInitializeService", function () {
        return AppInitializeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _baseapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./baseapi.service */
      "JY2j");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./language.service */
      "y91y");
      /* harmony import */


      var _image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./image.service */
      "/Uh7");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./wiki.service */
      "uUtE");

      var AppInitializeService = /*@__PURE__*/function () {
        var AppInitializeService = /*#__PURE__*/function () {
          function AppInitializeService(api, lang, image, wiki) {
            _classCallCheck(this, AppInitializeService);

            this.api = api;
            this.lang = lang;
            this.image = image;
            this.wiki = wiki;
          }

          _createClass(AppInitializeService, [{
            key: "start",
            value: function () {
              var _start = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return this.api.getVersion();

                      case 2:
                        _context5.next = 4;
                        return this.lang.init();

                      case 4:
                        _context5.next = 6;
                        return this.wiki.init();

                      case 6:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee4, this);
              }));

              function start() {
                return _start.apply(this, arguments);
              }

              return start;
            }()
          }]);

          return AppInitializeService;
        }();

        AppInitializeService.ɵfac = function AppInitializeService_Factory(t) {
          return new (t || AppInitializeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_baseapi_service__WEBPACK_IMPORTED_MODULE_1__["BaseApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_wiki_service__WEBPACK_IMPORTED_MODULE_4__["WikiService"]));
        };

        AppInitializeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: AppInitializeService,
          factory: AppInitializeService.ɵfac,
          providedIn: 'root'
        });
        return AppInitializeService;
      }();
      /***/

    },

    /***/
    "379c":
    /*!******************************************!*\
      !*** ./src/app/spell/spell.component.ts ***!
      \******************************************/

    /*! exports provided: SpellComponent */

    /***/
    function c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpellComponent", function () {
        return SpellComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var SpellComponent = /*@__PURE__*/function () {
        var SpellComponent = /*#__PURE__*/function () {
          function SpellComponent() {
            _classCallCheck(this, SpellComponent);
          }

          _createClass(SpellComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return SpellComponent;
        }();

        SpellComponent.ɵfac = function SpellComponent_Factory(t) {
          return new (t || SpellComponent)();
        };

        SpellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: SpellComponent,
          selectors: [["app-spell"]],
          decls: 2,
          vars: 0,
          template: function SpellComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " spell works!\n");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWxsL3NwZWxsLmNvbXBvbmVudC5jc3MifQ== */"]
        });
        return SpellComponent;
      }();
      /***/

    },

    /***/
    "3DlW":
    /*!******************************************!*\
      !*** ./src/app/arrow/arrow.component.ts ***!
      \******************************************/

    /*! exports provided: ArrowComponent */

    /***/
    function DlW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArrowComponent", function () {
        return ArrowComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ArrowComponent = /*@__PURE__*/function () {
        var ArrowComponent = /*#__PURE__*/function () {
          function ArrowComponent() {
            _classCallCheck(this, ArrowComponent);
          }

          _createClass(ArrowComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ArrowComponent;
        }();

        ArrowComponent.ɵfac = function ArrowComponent_Factory(t) {
          return new (t || ArrowComponent)();
        };

        ArrowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ArrowComponent,
          selectors: [["app-arrow"]],
          decls: 2,
          vars: 0,
          template: function ArrowComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " arrow works!\n");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fycm93L2Fycm93LmNvbXBvbmVudC5jc3MifQ== */"]
        });
        return ArrowComponent;
      }();
      /***/

    },

    /***/
    "6ERG":
    /*!*********************************************************!*\
      !*** ./src/app/_Out-frame/toolbar/toolbar.component.ts ***!
      \*********************************************************/

    /*! exports provided: ToolbarComponent */

    /***/
    function ERG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
        return ToolbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _highscore_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../highscore.service */
      "8Rav");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var ToolbarComponent = /*@__PURE__*/function () {
        var ToolbarComponent = /*#__PURE__*/function () {
          function ToolbarComponent(hs) {
            _classCallCheck(this, ToolbarComponent);

            this.hs = hs;
          }

          _createClass(ToolbarComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ToolbarComponent;
        }();

        ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
          return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_highscore_service__WEBPACK_IMPORTED_MODULE_1__["HighscoreService"]));
        };

        ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ToolbarComponent,
          selectors: [["app-toolbar"]],
          inputs: {
            sideNavMenu: "sideNavMenu",
            sideNavUser: "sideNavUser"
          },
          decls: 15,
          vars: 1,
          consts: [["mat-icon-button", "", 3, "click"], [1, "fas", "fa-bars"], ["routerLink", "/", 1, "logo"], [1, "logo1"], [1, "logo3"], [1, "logo2"], [1, "left-side"], [2, "font-size", "14px"], [1, "fas", "fa-user"]],
          template: function ToolbarComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_1_listener() {
                return ctx.sideNavMenu.toggle();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "tool");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_13_listener() {
                return ctx.sideNavUser.toggle();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hs.mainStats.value.name);
            }
          },
          directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
          styles: [".mat-toolbar[_ngcontent-%COMP%] {\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 56px;\r\n  background: #272727;\r\n}\r\n.left-side[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n}\r\n.logo[_ngcontent-%COMP%] {\r\n  font-family: Helvetica !important;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  line-height: 56px;\r\n  margin-left: 10px;\r\n}\r\n.logo1[_ngcontent-%COMP%] {\r\n  color: #80D8FF;\r\n}\r\n.logo2[_ngcontent-%COMP%] {\r\n  color: #CCFF90;\r\n}\r\n.logo3[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: 0 6px;\r\n  height: 100%;\r\n  display: inline-block;\r\n}\r\n.mat-icon-button[_ngcontent-%COMP%] {\r\n  font-size: 0.88em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX091dC1mcmFtZS90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL19PdXQtZnJhbWUvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXIge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogNTZweDtcclxuICBiYWNrZ3JvdW5kOiAjMjcyNzI3O1xyXG59XHJcbi5sZWZ0LXNpZGUge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ubG9nbzEge1xyXG4gIGNvbG9yOiAjODBEOEZGO1xyXG59XHJcblxyXG4ubG9nbzIge1xyXG4gIGNvbG9yOiAjQ0NGRjkwO1xyXG59XHJcblxyXG4ubG9nbzN7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDAgNnB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5tYXQtaWNvbi1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMC44OGVtO1xyXG59XHJcbiJdfQ== */"]
        });
        return ToolbarComponent;
      }();
      /***/

    },

    /***/
    "6feG":
    /*!**************************************************************************!*\
      !*** ./src/app/_Loot/valentines-present/valentines-present.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ValentinesPresentComponent */

    /***/
    function feG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValentinesPresentComponent", function () {
        return ValentinesPresentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../language.service */
      "y91y");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../wiki.service */
      "uUtE");
      /* harmony import */


      var _browser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../browser.service */
      "ZRPN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _object_returns_object_returns_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../object-returns/object-returns.component */
      "wQSC");

      function ValentinesPresentComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-tab", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", ctx_r1.lang.getString(ctx_r1.wiki.item_base[item_r2].name));
        }
      }

      var ValentinesPresentComponent = /*@__PURE__*/function () {
        var ValentinesPresentComponent = /*#__PURE__*/function () {
          function ValentinesPresentComponent(lang, wiki, browser, location, route, router) {
            _classCallCheck(this, ValentinesPresentComponent);

            this.lang = lang;
            this.wiki = wiki;
            this.browser = browser;
            this.location = location;
            this.route = route;
            this.router = router;
            this.ids = [4129, 4130, 4131];
            this.grades = ['common', 'rare', 'legendary'];
            this.id = 4131;
            this.tab = 2;
          }

          _createClass(ValentinesPresentComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this3 = this;

              this.routeParse();
              this.navigationSubscription = this.router.events.subscribe(function (event) {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                  _this3.routeParse();
                }
              });
            }
          }, {
            key: "setTabIndex",
            value: function setTabIndex(e) {
              this.id = this.ids[e];
              this.setUrl(e);
              this.browser.scrollTop();
            }
          }, {
            key: "setUrl",
            value: function setUrl(index) {
              this.location.replaceState('/valentines-present/' + this.grades[index]);
              this.browser.scrollTop();
            }
          }, {
            key: "routeParse",
            value: function routeParse() {
              var grade = this.route.snapshot.paramMap.get('grade');

              if (grade) {
                grade = grade.toLowerCase();
              }

              var index = this.grades.indexOf(grade);
              index = index === -1 ? 2 : index;
              this.tab = index;
              this.id = this.ids[index];
              this.setUrl(index);
            }
          }, {
            key: "ngAfterViewChecked",
            value: function ngAfterViewChecked() {
              var _this4 = this;

              setTimeout(function () {
                var object1 = document.querySelectorAll('.sticky');
                var h1;
                object1.forEach(function (e) {
                  h1 = e.offsetHeight;
                });
                _this4.stickyTop = h1;
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.navigationSubscription.unsubscribe();
            }
          }]);

          return ValentinesPresentComponent;
        }();

        ValentinesPresentComponent.ɵfac = function ValentinesPresentComponent_Factory(t) {
          return new (t || ValentinesPresentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_3__["WikiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_browser_service__WEBPACK_IMPORTED_MODULE_4__["BrowserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
        };

        ValentinesPresentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ValentinesPresentComponent,
          selectors: [["app-valentines-present"]],
          hostAttrs: [1, "route-app"],
          decls: 5,
          vars: 5,
          consts: [[1, "flex-v-center"], ["mat-align-tabs", "start", "animationDuration", "0ms", 1, "tab-custom-overflow", "sticky", 2, "width", "100%", 3, "selectedIndex", "selectedIndexChange"], ["tabs", ""], [4, "ngFor", "ngForOf"], [3, "objectID", "stickyTop", "baseType"], [3, "label"]],
          template: function ValentinesPresentComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 1, 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function ValentinesPresentComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
                return ctx.setTabIndex($event);
              })("selectedIndexChange", function ValentinesPresentComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
                return ctx.tab = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ValentinesPresentComponent_ng_container_3_Template, 2, 1, "ng-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-object-returns", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.tab);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ids);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("objectID", ctx.id)("stickyTop", ctx.stickyTop)("baseType", "item");
            }
          },
          directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _object_returns_object_returns_component__WEBPACK_IMPORTED_MODULE_7__["ObjectReturnsComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"]],
          encapsulation: 2
        });
        return ValentinesPresentComponent;
      }();
      /***/

    },

    /***/
    "7tBg":
    /*!************************************!*\
      !*** ./src/app/cl/cl.component.ts ***!
      \************************************/

    /*! exports provided: ClComponent */

    /***/
    function tBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClComponent", function () {
        return ClComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ClComponent = /*@__PURE__*/function () {
        var ClComponent = /*#__PURE__*/function () {
          function ClComponent() {
            _classCallCheck(this, ClComponent);
          }

          _createClass(ClComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ClComponent;
        }();

        ClComponent.ɵfac = function ClComponent_Factory(t) {
          return new (t || ClComponent)();
        };

        ClComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ClComponent,
          selectors: [["app-cl"]],
          decls: 2,
          vars: 0,
          template: function ClComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " cl works!\n");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsL2NsLmNvbXBvbmVudC5jc3MifQ== */"]
        });
        return ClComponent;
      }();
      /***/

    },

    /***/
    "8Rav":
    /*!**************************************!*\
      !*** ./src/app/highscore.service.ts ***!
      \**************************************/

    /*! exports provided: HighscoreService */

    /***/
    function Rav(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighscoreService", function () {
        return HighscoreService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _level_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./level.service */
      "BIPl");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _baseapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./baseapi.service */
      "JY2j");

      var HighscoreService = /*@__PURE__*/function () {
        var HighscoreService = /*#__PURE__*/function () {
          function HighscoreService(api, level) {
            _classCallCheck(this, HighscoreService);

            this.api = api;
            this.level = level;
            this.mainStats = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _level_service__WEBPACK_IMPORTED_MODULE_1__["Player"](this.level));
            this.searchCd = 0;
            this.searchTimer = null;
            this.searchPlayerName = '';
            this.searchStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('complete');
            this.mainStatsCopy = this.mainStats.value;

            if (localStorage.loadplayer) {
              this.searchPlayerName = localStorage.loadplayer;
              this.searchPlayer();
            }
          }

          _createClass(HighscoreService, [{
            key: "getPlayer",
            value: function getPlayer() {
              return this.api.getPlayer(this.searchPlayerName);
            }
          }, {
            key: "searchPlayer",
            value: function searchPlayer() {
              var _this5 = this;

              if (this.searchCd !== 0) {
                return;
              }

              this.searchStatus.next('start');

              if (this.searchTimer != null) {
                clearInterval(this.searchTimer);
              }

              if (undefined === this.searchPlayerName || '' === this.searchPlayerName) {
                this.startTimer(1);
                return;
              }

              this.getPlayer().subscribe(function (data) {
                _this5.startTimer(3);

                if (data.length === 0) {
                  _this5.searchStatus.next('none');

                  return;
                }

                _this5.searchStatus.next('success');

                var player = new _level_service__WEBPACK_IMPORTED_MODULE_1__["Player"](_this5.level);

                for (var i in data) {
                  if (data.hasOwnProperty(i)) {
                    _this5.mainStatsCopy[data[i].board] = player[data[i].board] = data[i].score;
                  }
                }

                player.check();
                _this5.mainStatsCopy.name = player.name = _this5.searchPlayerName;

                _this5.mainStats.next(player);

                localStorage.loadplayer = _this5.searchPlayerName;
                _this5.searchPlayerName = '';
              }, function (error) {
                _this5.searchStatus.next('error');

                _this5.startTimer(1);
              });
            }
          }, {
            key: "startTimer",
            value: function startTimer(sec) {
              var _this6 = this;

              this.searchStatus.next('cding');
              document.getElementById('btn-search').classList.add('cding');
              this.searchCd = sec;
              this.searchTimer = setInterval(function (cb) {
                return _this6.timerCountDown();
              }, 1e3);
            }
          }, {
            key: "timerCountDown",
            value: function timerCountDown() {
              if (this.searchCd-- <= 1) {
                this.searchStatus.next('finished');
                clearInterval(this.searchTimer);
                this.searchCd = 0;
                return;
              }
            }
          }]);

          return HighscoreService;
        }();

        HighscoreService.ɵfac = function HighscoreService_Factory(t) {
          return new (t || HighscoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_baseapi_service__WEBPACK_IMPORTED_MODULE_3__["BaseApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_level_service__WEBPACK_IMPORTED_MODULE_1__["LevelService"]));
        };

        HighscoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: HighscoreService,
          factory: HighscoreService.ɵfac,
          providedIn: 'root'
        });
        return HighscoreService;
      }();
      /***/

    },

    /***/
    "9hmh":
    /*!*********************************************************!*\
      !*** ./src/app/_Loot/Present/loot-present.component.ts ***!
      \*********************************************************/

    /*! exports provided: LootPresentComponent */

    /***/
    function hmh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LootPresentComponent", function () {
        return LootPresentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../wiki.service */
      "uUtE");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../language.service */
      "y91y");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function LootPresentComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.ObjectName.trans, " ");
        }
      }

      function LootPresentComponent_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.translateLang.Item.trans);
        }
      }

      function LootPresentComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.item, " ");
        }
      }

      function LootPresentComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.translateLang.Value.trans);
        }
      }

      function LootPresentComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r10.wiki, ".0-0"), " ");
        }
      }

      function LootPresentComponent_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", ctx_r5.displayedColumns.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r5.translateLang["Expected Value"].trans, " : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r5.totalValue / ctx_r5.totalCount, ".0-0"), "");
        }
      }

      function LootPresentComponent_tr_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
        }
      }

      function LootPresentComponent_tr_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
        }
      }

      function LootPresentComponent_tr_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
        }
      }

      var _c0 = function _c0() {
        return ["ev"];
      };

      var LootPresentComponent = /*@__PURE__*/function () {
        var LootPresentComponent = /*#__PURE__*/function () {
          function LootPresentComponent(wiki, lang) {
            _classCallCheck(this, LootPresentComponent);

            this.wiki = wiki;
            this.lang = lang;
            this.objectID = 0;
            this.stickyTop = 0;
            this.showName = false;
            this.ObjectName = {
              en: '',
              trans: ''
            };
            this.totalCount = 1;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
            this.displayedColumns = ['item', 'value'];
            this.translateLang = {
              'Actual Rate': {
                trans: '',
                "class": 'w'
              },
              Rate: {
                trans: '',
                "class": 'w'
              },
              Item: {
                trans: '',
                "class": 'i'
              },
              '_TOTAL_ items in total': {
                trans: '',
                "class": 'w'
              },
              'Rate is _RATE_% each': {
                trans: '',
                "class": 'w'
              },
              'Expected Value': {
                trans: '',
                "class": 'w'
              },
              Value: {
                trans: '',
                "class": 'w'
              }
            };
          }

          _createClass(LootPresentComponent, [{
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              for (var propertyName in changes) {
                if (propertyName === 'stickyTop') {
                  this.onChangeView();
                } else if (propertyName === 'objectID') {
                  this.getData();
                }
              }
            }
          }, {
            key: "onChangeView",
            value: function onChangeView() {
              var h = this.stickyTop;
              var object = document.querySelectorAll('.mat-header-cell');
              object.forEach(function (e) {
                e.style.top = h + 'px';
              });
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this7 = this;

              this.LanguageSubscription = this.lang.settingLang.subscribe(function (e) {
                _this7.onLangChange();
              });
            }
          }, {
            key: "onValueChange",
            value: function onValueChange() {
              this.totalValue = 0;

              for (var key in this.dataSource.data) {
                if (this.dataSource.data.hasOwnProperty(key)) {
                  var element = this.dataSource.data[key]; //this.wiki.item_value[element.item_id] = element.value;

                  this.totalValue += (element.value ? element.value : element.wiki) * 1;
                }
              }
            }
          }, {
            key: "getData",
            value: function getData() {
              var _this8 = this;

              var id = this.objectID;

              if (!id) {
                return;
              }

              this.totalCount = 0;
              this.totalValue = 0;
              var target = this.wiki.item_base;
              this.ObjectName.en = target[id].name;
              this.ObjectName.trans = this.lang.getString(target[id].name);
              this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
              this.wiki.item_base.forEach(function (item, i) {
                if (item.tags.includes('present' + id)) {
                  var obj;
                  obj = {};
                  obj.item_id = i;
                  obj.item_en = item.name;
                  obj.item = _this8.lang.getString(obj.item_en);
                  obj.wiki = item.params.price; //obj.value = this.wiki.item_value[obj.item_id];

                  _this8.totalCount++;
                  _this8.totalValue += (obj.value ? obj.value : obj.wiki) * 1;

                  _this8.dataSource.data.push(obj);
                }
              });
              var string = '_TOTAL_ items in total';
              var y = this.lang.getString(string, 'w');
              y = y.replace('_TOTAL_', this.totalCount.toString());
              this.translateLang[string].trans = y;
              this.ObjectName.trans = this.lang.getString(target[id].name);
              string = 'Rate is _RATE_% each';
              y = this.lang.getString(string, 'w');
              y = y.replace('_RATE_', (1 / this.totalCount * 100).toFixed(3).toString());
              this.translateLang[string].trans = y;
              this.ObjectName.trans = this.lang.getString(target[id].name);
            }
          }, {
            key: "onLangChange",
            value: function onLangChange() {
              var id = this.objectID;
              var target = this.wiki.item_base;
              this.ObjectName.en = target[id].name;
              this.ObjectName.trans = this.lang.getString(target[id].name);

              for (var key in this.translateLang) {
                if (this.translateLang.hasOwnProperty(key)) {
                  this.translateLang[key].trans = this.lang.getString(key, this.translateLang[key]["class"]);
                }
              }

              for (var _key2 in this.dataSource.data) {
                if (this.dataSource.data.hasOwnProperty(_key2)) {
                  var element = this.dataSource.data[_key2];
                  element.item = this.lang.getString(element.item_en);
                }
              }

              var string = '_TOTAL_ items in total';
              var y = this.translateLang[string].trans;
              y = y.replace('_TOTAL_', this.totalCount.toString());
              this.translateLang[string].trans = y;
              this.ObjectName.trans = this.lang.getString(target[id].name);
              string = 'Rate is _RATE_% each';
              y = this.translateLang[string].trans;
              y = y.replace('_RATE_', (1 / this.totalCount * 100).toFixed(3).toString());
              this.translateLang[string].trans = y;
              this.ObjectName.trans = this.lang.getString(target[id].name);
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.LanguageSubscription.unsubscribe();
            }
          }]);

          return LootPresentComponent;
        }();

        LootPresentComponent.ɵfac = function LootPresentComponent_Factory(t) {
          return new (t || LootPresentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_2__["WikiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]));
        };

        LootPresentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LootPresentComponent,
          selectors: [["app-loot-present"]],
          inputs: {
            objectID: "objectID",
            stickyTop: "stickyTop",
            showName: "showName"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
          decls: 19,
          vars: 10,
          consts: [[1, "mo-card", "flex-v-center"], [1, "mo-card-name", 2, "margin-bottom", "4px"], ["style", "margin-bottom: 4px;", 4, "ngIf"], [1, "ev", "left"], ["mat-table", "", 1, "doc-table", "doc-table-info", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "left", 4, "matCellDef"], ["matColumnDef", "value"], ["mat-cell", "", "class", "right", 4, "matCellDef"], ["matColumnDef", "ev"], ["mat-footer-cell", "", "class", "right", 3, "colSpan", 4, "matFooterCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", "class", "black", 4, "matFooterRowDef", "matFooterRowDefSticky"], [2, "margin-bottom", "4px"], [1, "main", "left"], ["mat-header-cell", ""], ["mat-cell", "", 1, "left"], ["mat-cell", "", 1, "right"], ["mat-footer-cell", "", 1, "right", 3, "colSpan"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", "", 1, "black"]],
          template: function LootPresentComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LootPresentComponent_div_2_Template, 3, 1, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LootPresentComponent_th_9_Template, 2, 1, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LootPresentComponent_td_10_Template, 2, 1, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LootPresentComponent_th_12_Template, 2, 1, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LootPresentComponent_td_13_Template, 3, 4, "td", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LootPresentComponent_td_15_Template, 3, 6, "td", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LootPresentComponent_tr_16_Template, 1, 0, "tr", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LootPresentComponent_tr_17_Template, 1, 0, "tr", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LootPresentComponent_tr_18_Template, 1, 0, "tr", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showName);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.translateLang["_TOTAL_ items in total"].trans);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.translateLang["Rate is _RATE_% each"].trans);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("matFooterRowDefSticky", true);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterRow"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19Mb290L1ByZXNlbnQvbG9vdC1wcmVzZW50LmNvbXBvbmVudC5jc3MifQ== */"]
        });
        return LootPresentComponent;
      }();
      /***/

    },

    /***/
    "AjEq":
    /*!*******************************************************************!*\
      !*** ./src/app/_Out-frame/game-version/game-version.component.ts ***!
      \*******************************************************************/

    /*! exports provided: GameVersionComponent */

    /***/
    function AjEq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameVersionComponent", function () {
        return GameVersionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _baseapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../baseapi.service */
      "JY2j");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../language.service */
      "y91y");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../config.service */
      "wxHw");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");

      var _c0 = ["icon"];

      var GameVersionComponent = /*@__PURE__*/function () {
        var GameVersionComponent = /*#__PURE__*/function () {
          function GameVersionComponent(api, lang, config) {
            _classCallCheck(this, GameVersionComponent);

            this.api = api;
            this.lang = lang;
            this.config = config;
            this.version = release_version;
          }

          _createClass(GameVersionComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this9 = this;

              this.langSubscription = this.lang.settingLang.subscribe(function () {
                _this9.onLangChange();
              });

              if (this.api.version.value > 0) {
                this.onVersionChange(this.api.version.value);
              } else {
                this.versionSubscription = this.api.version.subscribe(function (e) {
                  _this9.onVersionChange(e);
                });
              }

              this.setStatus('info-ver-warnning');
            }
          }, {
            key: "setStatus",
            value: function setStatus(status) {
              this.tooltip_en = status;
              this.onLangChange();
            }
          }, {
            key: "onLangChange",
            value: function onLangChange() {
              this.tooltip = this.lang.getString(this.tooltip_en, 'w');
            }
          }, {
            key: "onVersionChange",
            value: function onVersionChange(e) {
              var _this10 = this;

              if (!this.icon) {
                setTimeout(function () {
                  return _this10.onVersionChange(e);
                });
                return;
              }

              var icon = this.icon.nativeElement;
              var objString = {
                checked: {
                  f: 'check-circle',
                  b: 'ok'
                },
                err: {
                  f: 'exclamation-triangle',
                  b: 'danger'
                },
                unknow: {
                  f: 'question-circle',
                  b: 'warnning'
                }
              };
              var fontawasome = 'fas fa-';
              var myClassName = ' icon-ver-';
              var stat = '';

              if (e === this.version) {
                stat = 'checked';
              } else if (e > 0) {
                stat = 'err';
              } else {
                stat = 'unknow';
              }

              icon.className = fontawasome + objString[stat].f + myClassName + objString[stat].b;
              this.setStatus('info-ver-' + objString[stat].b);

              if (this.versionSubscription && e) {
                this.versionSubscription.unsubscribe();
                this.versionSubscription = null;
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.langSubscription.unsubscribe();

              if (this.versionSubscription) {
                this.versionSubscription.unsubscribe();
              }
            }
          }]);

          return GameVersionComponent;
        }();

        GameVersionComponent.ɵfac = function GameVersionComponent_Factory(t) {
          return new (t || GameVersionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_baseapi_service__WEBPACK_IMPORTED_MODULE_1__["BaseApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]));
        };

        GameVersionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: GameVersionComponent,
          selectors: [["app-game-version"]],
          viewQuery: function GameVersionComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.icon = _t.first);
            }
          },
          decls: 4,
          vars: 2,
          consts: [["id", "version-info", 3, "matTooltip"], [1, "fas", "fa-question-circle", "icon-ver-warnning"], ["icon", ""]],
          template: function GameVersionComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1, 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.tooltip);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" GAME VERSION: ", ctx.version, "\n");
            }
          },
          directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"]],
          styles: ["#version-info[_ngcontent-%COMP%] {\r\n  padding: 6px 12px;\r\n  font-size: .7em;\r\n  color: #aaa;\r\n  line-height: 1;\r\n  cursor: pointer;\r\n  text-align: center;\r\n}\r\n.icon-ver-danger[_ngcontent-%COMP%] {\r\n  color: #F44336;\r\n}\r\n.icon-ver-warnning[_ngcontent-%COMP%] {\r\n  color: #ffc107;\r\n}\r\n.icon-ver-ok[_ngcontent-%COMP%] {\r\n  color: #8bc34a;\r\n}\r\n.site-version[_ngcontent-%COMP%]{\r\n  padding: 6px 12px;\r\n  font-size: .7em;\r\n  color: #aaa;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX091dC1mcmFtZS9nYW1lLXZlcnNpb24vZ2FtZS12ZXJzaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvX091dC1mcmFtZS9nYW1lLXZlcnNpb24vZ2FtZS12ZXJzaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdmVyc2lvbi1pbmZvIHtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBmb250LXNpemU6IC43ZW07XHJcbiAgY29sb3I6ICNhYWE7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaWNvbi12ZXItZGFuZ2VyIHtcclxuICBjb2xvcjogI0Y0NDMzNjtcclxufVxyXG4uaWNvbi12ZXItd2Fybm5pbmcge1xyXG4gIGNvbG9yOiAjZmZjMTA3O1xyXG59XHJcbi5pY29uLXZlci1vayB7XHJcbiAgY29sb3I6ICM4YmMzNGE7XHJcbn1cclxuLnNpdGUtdmVyc2lvbntcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBmb250LXNpemU6IC43ZW07XHJcbiAgY29sb3I6ICNhYWE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"]
        });
        return GameVersionComponent;
      }();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BIPl":
    /*!**********************************!*\
      !*** ./src/app/level.service.ts ***!
      \**********************************/

    /*! exports provided: LevelService, Player */

    /***/
    function BIPl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LevelService", function () {
        return LevelService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Player", function () {
        return Player;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./language.service */
      "y91y");

      var LevelService = /*@__PURE__*/function () {
        var LevelService = /*#__PURE__*/function () {
          function LevelService(language) {
            var _this11 = this;

            _classCallCheck(this, LevelService);

            this.language = language;
            this.combat = ['accuracy', 'strength', 'defense', 'magic', 'health', 'archery'];
            this.pro = ['woodcutting', 'forging', 'mining', 'wizardry', 'fishing', 'fletching', 'cooking', 'jewelry', 'farming', 'breeding', 'alchemy', 'carpentry', 'fungiculture'];
            this.other = ['skill_quest'];
            this.range = {
              accuracy: {
                min: 1,
                max: 225
              },
              strength: {
                min: 1,
                max: 225
              },
              defense: {
                min: 1,
                max: 225
              },
              health: {
                min: 1,
                max: 225
              },
              magic: {
                min: 1,
                max: 225
              },
              alchemy: {
                min: 1,
                max: 225
              },
              woodcutting: {
                min: 1,
                max: 225
              },
              farming: {
                min: 1,
                max: 225
              },
              fishing: {
                min: 1,
                max: 225
              },
              cooking: {
                min: 1,
                max: 225
              },
              jewelry: {
                min: 1,
                max: 225
              },
              carpentry: {
                min: 1,
                max: 225
              },
              forging: {
                min: 1,
                max: 225
              },
              mining: {
                min: 1,
                max: 225
              },
              breeding: {
                min: 1,
                max: 225
              },
              fletching: {
                min: 1,
                max: 225
              },
              archery: {
                min: 1,
                max: 225
              },
              wizardry: {
                min: 1,
                max: 225
              },
              fungiculture: {
                min: 1,
                max: 225
              },
              skill_quest: {
                min: 0,
                max: 999999999
              }
            };
            this.translateLang = {};
            this.combat.map(function (e) {
              return _this11.translateLang[e] = e;
            });
            this.pro.map(function (e) {
              return _this11.translateLang[e] = e;
            });
            this.language.settingLang.subscribe(function (e) {
              _this11.onLangChange();
            });
          }

          _createClass(LevelService, [{
            key: "onLangChange",
            value: function onLangChange() {
              for (var key in this.translateLang) {
                if (this.translateLang.hasOwnProperty(key)) {
                  this.translateLang[key] = this.language.getString(capitaliseFirstLetter(key), 'i');
                }
              }
            }
          }]);

          return LevelService;
        }();

        LevelService.ɵfac = function LevelService_Factory(t) {
          return new (t || LevelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_language_service__WEBPACK_IMPORTED_MODULE_1__["LanguageService"]));
        };

        LevelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: LevelService,
          factory: LevelService.ɵfac,
          providedIn: 'root'
        });
        return LevelService;
      }();

      var Player = /*#__PURE__*/function () {
        function Player(lvl) {
          _classCallCheck(this, Player);

          this.lvl = lvl;
          this.name = '';
          this.hash = '';
          this.totalSkill = 0;
          this.combatLevel = 3;
          this.cl_int = 3;
          this.cl_float = '';
          this.accuracy = 1;
          this.strength = 1;
          this.defense = 1;
          this.health = 10;
          this.magic = 1;
          this.alchemy = 1;
          this.woodcutting = 1;
          this.farming = 1;
          this.fishing = 1;
          this.cooking = 1;
          this.jewelry = 1;
          this.carpentry = 1;
          this.forging = 1;
          this.mining = 1;
          this.breeding = 1;
          this.fletching = 1;
          this.archery = 1;
          this.wizardry = 1;
          this.fungiculture = 1;
          this.skill_quest = 0;
          this.scavenger_hunt = 0;
          this.cathedral = 0;
          this.check();
        }

        _createClass(Player, [{
          key: "getCL",
          value: function getCL() {
            var sum = this.accuracy + this.strength + this.health + this.defense;
            var magicDivider = (sum + this.archery) / 4 > this.magic ? 6 : 4;
            var archeryDivider = (sum + this.magic) / 4 > this.archery ? 6 : 4;
            return Math.floor((sum / 4 + this.magic / magicDivider + this.archery / archeryDivider) * 100) / 100;
          }
        }, {
          key: "check",
          value: function check() {
            for (var key in this.lvl.range) {
              if (this.lvl.range.hasOwnProperty(key)) {
                var range = this.lvl.range[key];
                this[key] = isNaN(this[key]) ? range.min : Math.floor(this[key]);

                if (this[key] < range.min) {
                  this[key] = range.min;
                } else if (this[key] > range.max) {
                  this[key] = range.max;
                }
              }
            }

            this.combatLevel = this.getCL();
            this.cl_int = Math.floor(this.combatLevel);
            this.cl_float = this.getClFloatString();
            this.totalSkill = this.getTotalSkill();
            return this;
          }
        }, {
          key: "getClFloatString",
          value: function getClFloatString() {
            var cl = this.combatLevel;
            var result = cl.toString();

            if (result.includes('+')) {
              result = '';
            } else if (result.includes('.')) {
              result = cl.toFixed(2).substr(result.indexOf('.'), 3);
            } else {
              result = '.00';
            }

            return result;
          }
        }, {
          key: "getTotalSkill",
          value: function getTotalSkill() {
            var _this12 = this;

            var sum = 0;
            this.lvl.pro.forEach(function (key) {
              sum += _this12[key];
            });
            this.lvl.combat.forEach(function (key) {
              sum += _this12[key];
            });
            return sum;
          }
        }]);

        return Player;
      }();
      /***/

    },

    /***/
    "BL1I":
    /*!************************************************************!*\
      !*** ./src/app/_Quests/party-quest/party-quest.service.ts ***!
      \************************************************************/

    /*! exports provided: PartyQuestService, SimplePlayer */

    /***/
    function BL1I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PartyQuestService", function () {
        return PartyQuestService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimplePlayer", function () {
        return SimplePlayer;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _highscore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../highscore.service */
      "8Rav");

      var PartyQuestService = /*@__PURE__*/function () {
        var PartyQuestService = /*#__PURE__*/function () {
          function PartyQuestService(hs) {
            _classCallCheck(this, PartyQuestService);

            this.hs = hs;
            this.onlygreen = true;
            this.difficulty = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
            this.players = [];
            this.level = {
              lowwerLimit: 0,
              upperLimit: 0,
              allMaxMob: 0,
              allMinMob: 0,
              normalMax: 0,
              normalMin: 0
            };

            for (var i = 0; i < 4; i++) {
              this.players[i] = new SimplePlayer();
            }
          }

          _createClass(PartyQuestService, [{
            key: "onStatsChange",
            value: function onStatsChange() {
              this.players[0].level = Math.floor(this.hs.mainStats.value.combatLevel);
              this.onPlayersChange();
            }
          }, {
            key: "onPlayersChange",
            value: function onPlayersChange() {
              var _this13 = this;

              var cl = this.players[0].level;
              this.level.lowwerLimit = Math.max(cl - 10 - Math.round(cl / 10), 0);
              this.level.upperLimit = cl + 10 + Math.round(cl / 10);
              var allMin = this.calcLevelRange((this.level.lowwerLimit * 3 + cl) / 4);
              var allMax = this.calcLevelRange((this.level.upperLimit * 3 + cl) / 4);
              this.level.allMinMob = Math.min(allMin.min, allMin.max, allMax.min, allMax.max);
              this.level.allMaxMob = Math.max(allMin.min, allMin.max, allMax.min, allMax.max);
              var sum = 0;
              var count = 0;
              this.players.forEach(function (e) {
                e.level = e.level > 300 ? 300 : e.level;
                e.level = e.level < 0 ? 0 : e.level;
                e.enabel = _this13.level.lowwerLimit > e.level ? 0 : _this13.level.upperLimit < e.level ? 2 : 1;

                if (e.enabel) {
                  sum += e.level * e.enabel;
                  count += e.enabel;
                }
              });
              var normal = this.calcLevelRange(sum / count);
              this.level.normalMin = normal.min;
              this.level.normalMax = normal.max;
            }
          }, {
            key: "calcLevelRange",
            value: function calcLevelRange(avg) {
              var a = Math.round((avg + 20 * this.difficulty.value) * (1.3 + this.difficulty.value * .2));
              a = Math.min(a, 325);
              a = a < 1 ? 1 : a;
              return {
                min: Math.max(1, a - 39),
                max: a < 1 ? 1 : a
              };
            }
          }]);

          return PartyQuestService;
        }();

        PartyQuestService.ɵfac = function PartyQuestService_Factory(t) {
          return new (t || PartyQuestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_highscore_service__WEBPACK_IMPORTED_MODULE_2__["HighscoreService"]));
        };

        PartyQuestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: PartyQuestService,
          factory: PartyQuestService.ɵfac,
          providedIn: 'root'
        });
        return PartyQuestService;
      }();

      var SimplePlayer = function SimplePlayer() {
        _classCallCheck(this, SimplePlayer);

        this.level = 0;
        this.enabel = 0;
      };
      /***/

    },

    /***/
    "BfIs":
    /*!*******************************************************************!*\
      !*** ./src/app/_Out-frame/sidenav-menu/sidenav-menu.component.ts ***!
      \*******************************************************************/

    /*! exports provided: SidenavMenuComponent */

    /***/
    function BfIs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavMenuComponent", function () {
        return SidenavMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "GS7A");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../language.service */
      "y91y");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _language_language_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../language/language.component */
      "OYwW");
      /* harmony import */


      var _game_version_game_version_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../game-version/game-version.component */
      "AjEq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      function SidenavMenuComponent_ng_container_0_li_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var key2_r3 = ctx.$implicit;

          var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r2.navTree[key_r1].page[key2_r3].path);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.translateLang[ctx_r2.navTree[key_r1].page[key2_r3].name]);
        }
      }

      function SidenavMenuComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavMenuComponent_ng_container_0_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var key_r1 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.navTree[key_r1].toggle = !ctx_r5.navTree[key_r1].toggle;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidenavMenuComponent_ng_container_0_li_7_Template, 3, 2, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var key_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.translateLang[ctx_r0.navTree[key_r1].name], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("class", "", ctx_r0.navTree[key_r1].icon, " nav-btn-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("class", "", ctx_r0.navTree[key_r1].toggle ? "fas fa-angle-up" : "fas fa-angle-down", " nav-btn-angle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@openClose", ctx_r0.navTree[key_r1].toggle ? "open" : "closed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.objectKeys(ctx_r0.navTree[key_r1].page));
        }
      }

      var SidenavMenuComponent = /*@__PURE__*/function () {
        var SidenavMenuComponent = /*#__PURE__*/function () {
          function SidenavMenuComponent(language) {
            _classCallCheck(this, SidenavMenuComponent);

            this.language = language;
            this.objectKeys = Object.keys;
            this.navTree = {
              wiki: {
                icon: 'fas fa-book-open',
                name: 'Wiki',
                toggle: true,
                page: {
                  /*item: { name: 'Item', path: '/item' },*/
                  mob: {
                    name: 'Mob',
                    path: '/mob'
                  }
                }
              },
              quest: {
                name: 'Quest',
                icon: 'fas fa-scroll',
                toggle: true,
                page: {
                  kq: {
                    name: 'Kill Quest',
                    path: '/kill-quest'
                  },
                  pq: {
                    name: 'Party Quest',
                    path: '/party-quest'
                  },
                  sq: {
                    name: 'Skill Quest',
                    path: '/skill-quest'
                  }
                }
              },
              loot: {
                name: 'Loot',
                icon: 'fas fa-box-open',
                toggle: true,
                page: {
                  hrc: {
                    path: '/hunting-reward',
                    name: 'Hunting Reward Chest'
                  },
                  rc: {
                    path: '/boss-retaliation',
                    name: 'Boss Retaliation'
                  },
                  presents: {
                    path: '/present',
                    name: 'Present'
                  },
                  rosechests: {
                    path: '/rose-chest',
                    name: 'Rose Chest'
                  },
                  ValentinesPresent: {
                    path: '/valentines-present',
                    name: 'Valentine\'s Present'
                  },
                  eggs: {
                    path: '/easter-egg',
                    name: 'Easter Egg'
                  },
                  deathdl: {
                    path: '/deaths-deal',
                    name: 'Death\'s Deal'
                  },
                  treasure: {
                    path: '/sunken-treasure',
                    name: 'Sunken Treasure'
                  }
                }
              }
            };
            this.translateLang = {};
          }

          _createClass(SidenavMenuComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this14 = this;

              this.initNavTree();
              this.language.settingLang.subscribe(function (e) {
                _this14.onLangChange();
              });
            }
          }, {
            key: "onLangChange",
            value: function onLangChange() {
              for (var key in this.translateLang) {
                if (this.translateLang.hasOwnProperty(key)) {
                  this.translateLang[key] = this.language.getString(key, 'w');
                }
              }
            }
          }, {
            key: "initNavTree",
            value: function initNavTree() {
              for (var key1 in this.navTree) {
                if (this.navTree.hasOwnProperty(key1)) {
                  var element1 = this.navTree[key1].name;
                  this.translateLang[element1] = element1;

                  for (var key2 in this.navTree[key1].page) {
                    if (this.navTree[key1].page.hasOwnProperty(key2)) {
                      var element2 = this.navTree[key1].page[key2].name;
                      this.translateLang[element2] = element2;
                    }
                  }
                }
              }
            }
          }]);

          return SidenavMenuComponent;
        }();

        SidenavMenuComponent.ɵfac = function SidenavMenuComponent_Factory(t) {
          return new (t || SidenavMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]));
        };

        SidenavMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: SidenavMenuComponent,
          selectors: [["app-sidenav-menu"]],
          decls: 4,
          vars: 1,
          consts: [[4, "ngFor", "ngForOf"], [2, "margin-top", "150px"], [1, "nav-btn", 3, "click"], [2, "float", "right"], [1, "nav-ul"], [3, "routerLink"]],
          template: function SidenavMenuComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidenavMenuComponent_ng_container_0_Template, 9, 5, "ng-container", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-language");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-game-version");
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.objectKeys(ctx.navTree));
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _language_language_component__WEBPACK_IMPORTED_MODULE_5__["LanguageComponent"], _game_version_game_version_component__WEBPACK_IMPORTED_MODULE_6__["GameVersionComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]],
          styles: ["nav[_ngcontent-%COMP%] {\r\n  margin: 6px 0;\r\n}\r\n\r\n.nav-btn[_ngcontent-%COMP%] {\r\n  padding: 2px;\r\n  padding-right: 20px;\r\n  padding-left: 12px;\r\n  line-height: 30px;\r\n  font-size: 16px;\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  text-align: left;\r\n  background-color: transparent;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  border: none;\r\n  cursor: pointer;\r\n  color: #CCC;\r\n}\r\n\r\n.nav-btn[_ngcontent-%COMP%]:hover {\r\n  color: #80D8FF;\r\n  background-color: rgba(255, 255, 255, .05);\r\n}\r\n\r\n.nav-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  line-height: 32px;\r\n}\r\n\r\n.nav-btn-icon[_ngcontent-%COMP%] {\r\n  float: left;\r\n  margin-right: 10px;\r\n}\r\n\r\n.nav-ul[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.nav-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  display: block;\r\n  text-decoration: none;\r\n  width: 100%;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.nav-ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding: 7px 0;\r\n  padding-left: 40px;\r\n  padding-right: 24px;\r\n  text-align: left;\r\n  width: 100%;\r\n  font-size: 16px;\r\n  color: #CCC;\r\n  white-space: nowrap;\r\n}\r\n\r\n.nav-ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #CCFF90;\r\n  background-color: rgba(255, 255, 255, .05);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX091dC1mcmFtZS9zaWRlbmF2LW1lbnUvc2lkZW5hdi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCwwQ0FBMEM7QUFDNUMiLCJmaWxlIjoic3JjL2FwcC9fT3V0LWZyYW1lL3NpZGVuYXYtbWVudS9zaWRlbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgbWFyZ2luOiA2cHggMDtcclxufVxyXG5cclxuLm5hdi1idG4ge1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTJweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNDQ0M7XHJcbn1cclxuXHJcbi5uYXYtYnRuOmhvdmVyIHtcclxuICBjb2xvcjogIzgwRDhGRjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNSk7XHJcbn1cclxuXHJcbi5uYXYtYnRuIHNwYW4ge1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4ubmF2LWJ0bi1pY29uIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXYtdWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubmF2LXVsIGxpIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi5uYXYtdWwgYSB7XHJcbiAgcGFkZGluZzogN3B4IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICNDQ0M7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLm5hdi11bCBhOmhvdmVyIHtcclxuICBjb2xvcjogI0NDRkY5MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNSk7XHJcbn1cclxuIl19 */"],
          data: {
            animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 1,
              visibility: 'visible'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              height: '0px',
              opacity: 0,
              visibility: 'hidden'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.15s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.15s')])])]
          }
        });
        return SidenavMenuComponent;
      }();
      /***/

    },

    /***/
    "C49S":
    /*!************************************************!*\
      !*** ./src/app/item-all/item-all.component.ts ***!
      \************************************************/

    /*! exports provided: ItemAllComponent */

    /***/
    function C49S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemAllComponent", function () {
        return ItemAllComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../wiki.service */
      "uUtE");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../language.service */
      "y91y");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var _c0 = function _c0(a0) {
        return {
          i: a0
        };
      };

      function ItemAllComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r1.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
        }
      }

      var ItemAllComponent = /*@__PURE__*/function () {
        var ItemAllComponent = /*#__PURE__*/function () {
          // private image: ImageService,
          function ItemAllComponent(wiki, lang) {
            _classCallCheck(this, ItemAllComponent);

            this.wiki = wiki;
            this.lang = lang;
            this.dataSource = [];
            this.translateLang = {
              MOB: {
                trans: '',
                "class": 'm'
              },
              HP: {
                trans: '',
                "class": 'w'
              },
              Acc: {
                trans: '',
                "class": 'w'
              },
              Str: {
                trans: '',
                "class": 'w'
              },
              Def: {
                trans: '',
                "class": 'w'
              },
              Melee: {
                trans: '',
                "class": 'w'
              },
              Block: {
                trans: '',
                "class": 'w'
              },
              Magic: {
                trans: '',
                "class": 'i'
              },
              Archery: {
                trans: '',
                "class": 'i'
              },
              Attack: {
                trans: '',
                "class": 'i'
              },
              Mode: {
                trans: '',
                "class": 'w'
              },
              Aggressive: {
                trans: '',
                "class": 'm'
              },
              Passive: {
                trans: '',
                "class": 'm'
              }
            };
            this.displayedColumns = ['name', 'cl', 'health', 'accuracy', 'strength', 'defense', 'melee_block', 'magic_block', 'archery_block', 'aggressive'];
          }

          _createClass(ItemAllComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this15 = this;

              this.LanguageSubscription = this.lang.settingLang.subscribe(function (e) {
                _this15.onLangChange();
              });
              this.getData();
            }
          }, {
            key: "onInit",
            value: function onInit() {
              this.getData();
            }
          }, {
            key: "getData",
            value: function getData() {
              var _this16 = this;

              this.dataSource = [];
              this.wiki.item_base.forEach(function (item, id) {
                //if (item.b_t === this.wiki.ITEM_CATEGORY.ARMOR) {
                if (true) {
                  var obj;
                  obj = {};
                  obj.id = id;
                  obj.name_en = item.name;
                  obj.name = _this16.lang.getString(item.name);

                  _this16.dataSource.push(obj);
                }
              });
            }
          }, {
            key: "isNaN",
            value: function (_isNaN) {
              function isNaN(_x3) {
                return _isNaN.apply(this, arguments);
              }

              isNaN.toString = function () {
                return _isNaN.toString();
              };

              return isNaN;
            }(function (num) {
              return isNaN(num);
            })
          }, {
            key: "onLangChange",
            value: function onLangChange() {
              var _this17 = this;

              for (var key in this.translateLang) {
                if (this.translateLang.hasOwnProperty(key)) {
                  this.translateLang[key].trans = this.lang.getString(key, this.translateLang[key]["class"]);
                }
              }

              this.dataSource.forEach(function (item) {
                item.name = _this17.lang.getString(item.name_en);
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.LanguageSubscription.unsubscribe();
            }
          }]);

          return ItemAllComponent;
        }();

        ItemAllComponent.ɵfac = function ItemAllComponent_Factory(t) {
          return new (t || ItemAllComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_1__["WikiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]));
        };

        ItemAllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ItemAllComponent,
          selectors: [["app-item-all"]],
          decls: 1,
          vars: 1,
          consts: [[4, "ngFor", "ngForOf"], ["routerLink", "/item", 3, "queryParams"]],
          template: function ItemAllComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ItemAllComponent_ng_container_0_Template, 4, 4, "ng-container", 0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSource);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tYWxsL2l0ZW0tYWxsLmNvbXBvbmVudC5jc3MifQ== */"]
        });
        return ItemAllComponent;
      }();
      /***/

    },

    /***/
    "J8JK":
    /*!**************************************************!*\
      !*** ./src/app/mob-drops/mob-drops.component.ts ***!
      \**************************************************/

    /*! exports provided: MobDropsComponent */

    /***/
    function J8JK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MobDropsComponent", function () {
        return MobDropsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _level_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../level.service */
      "BIPl");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../wiki.service */
      "uUtE");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../language.service */
      "y91y");
      /* harmony import */


      var _highscore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../highscore.service */
      "8Rav");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function MobDropsComponent_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.translateLang["Actual Rate"].trans);
        }
      }

      function MobDropsComponent_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r12.actual * 100, "1.2-2"), "%");
        }
      }

      function MobDropsComponent_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.translateLang.Item.trans);
        }
      }

      function MobDropsComponent_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.item, " ");
        }
      }

      function MobDropsComponent_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.translateLang.Value.trans);
        }
      }

      function MobDropsComponent_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r14.wiki, ".0-0"), " ");
        }
      }

      function MobDropsComponent_td_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", ctx_r6.displayedColumns.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r6.translateLang["No loot"].trans, " : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r6.percentNoLoot * 100, "1.2-2"), "%");
        }
      }

      function MobDropsComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", ctx_r7.displayedColumns.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r7.translateLang["Expected Value"].trans, " : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r7.expectedValue, ".0-0"), "");
        }
      }

      function MobDropsComponent_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
        }
      }

      function MobDropsComponent_tr_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
        }
      }

      function MobDropsComponent_tr_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
        }
      }

      function MobDropsComponent_tr_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
        }
      }

      var _c0 = function _c0() {
        return ["noLoot"];
      };

      var _c1 = function _c1() {
        return ["ev"];
      };

      var MobDropsComponent = /*@__PURE__*/function () {
        var MobDropsComponent = /*#__PURE__*/function () {
          function MobDropsComponent(lvl, wiki, lang, hs) {
            _classCallCheck(this, MobDropsComponent);

            this.lvl = lvl;
            this.wiki = wiki;
            this.lang = lang;
            this.hs = hs;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
            this.displayedColumns = ['actual', 'item', 'value'];
            this.translateLang = {
              'Actual Rate': {
                trans: '',
                "class": 'w'
              },
              Rate: {
                trans: '',
                "class": 'w'
              },
              Item: {
                trans: '',
                "class": 'i'
              },
              'No loot': {
                trans: '',
                "class": 'm'
              },
              Value: {
                trans: '',
                "class": 'w'
              },
              'Expected Value': {
                trans: '',
                "class": 'w'
              }
            };
          }

          _createClass(MobDropsComponent, [{
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              this.getData();
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this18 = this;

              this.LanguageSubscription = this.lang.settingLang.subscribe(function (e) {
                _this18.onLangChange();
              });
              this.getData();
            }
          }, {
            key: "getData",
            value: function getData() {
              var _this19 = this;

              var id = this.id;
              this.percentNoLoot = 0;
              this.expectedValue = 0;
              this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
              var returns = this.wiki.npc_base[id].params.drops;
              var sum = 0;
              returns.forEach(function (temp) {
                var obj;
                obj = {};
                obj.item_id = temp.id;
                obj.item_en = _this19.wiki.item_base[temp.id].name;
                obj.item = _this19.lang.getString(obj.item_en);
                obj.wiki = _this19.wiki.item_base[temp.id].params.price;
                obj.rate = temp.chance;
                obj.actual = (1 - sum) * obj.rate;
                _this19.expectedValue += obj.actual * obj.wiki;
                sum += obj.actual;

                _this19.dataSource.data.push(obj);
              });
              this.percentNoLoot = 1 - sum;
            }
          }, {
            key: "onLangChange",
            value: function onLangChange() {
              for (var key in this.translateLang) {
                if (this.translateLang.hasOwnProperty(key)) {
                  this.translateLang[key].trans = this.lang.getString(key, this.translateLang[key]["class"]);
                }
              }

              for (var _key3 in this.dataSource.data) {
                if (this.dataSource.data.hasOwnProperty(_key3)) {
                  var element = this.dataSource.data[_key3];
                  element.item = this.lang.getString(element.item_en);
                }
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.LanguageSubscription.unsubscribe();
            }
          }]);

          return MobDropsComponent;
        }();

        MobDropsComponent.ɵfac = function MobDropsComponent_Factory(t) {
          return new (t || MobDropsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_3__["WikiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_highscore_service__WEBPACK_IMPORTED_MODULE_5__["HighscoreService"]));
        };

        MobDropsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MobDropsComponent,
          selectors: [["app-mob-drops"]],
          inputs: {
            id: "id"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
          decls: 18,
          vars: 9,
          consts: [["mat-table", "", 1, "doc-table", "doc-table-info", 2, "margin", "0 12px", 3, "dataSource"], ["matColumnDef", "actual"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "right", 4, "matCellDef"], ["matColumnDef", "item"], ["mat-cell", "", "class", "left", 4, "matCellDef"], ["matColumnDef", "value"], ["matColumnDef", "noLoot"], ["mat-footer-cell", "", "class", "right", 3, "colSpan", 4, "matFooterCellDef"], ["matColumnDef", "ev"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", "class", "black", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-footer-row", "", "class", "black", 4, "matFooterRowDef"], ["mat-header-cell", ""], ["mat-cell", "", 1, "right"], ["mat-cell", "", 1, "left"], ["mat-footer-cell", "", 1, "right", 3, "colSpan"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", "", 1, "black"]],
          template: function MobDropsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MobDropsComponent_th_2_Template, 2, 1, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MobDropsComponent_td_3_Template, 3, 4, "td", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MobDropsComponent_th_5_Template, 2, 1, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MobDropsComponent_td_6_Template, 2, 1, "td", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MobDropsComponent_th_8_Template, 2, 1, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MobDropsComponent_td_9_Template, 3, 4, "td", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MobDropsComponent_td_11_Template, 3, 6, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MobDropsComponent_td_13_Template, 3, 6, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MobDropsComponent_tr_14_Template, 1, 0, "tr", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MobDropsComponent_tr_15_Template, 1, 0, "tr", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MobDropsComponent_tr_16_Template, 1, 0, "tr", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MobDropsComponent_tr_17_Template, 1, 0, "tr", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("matFooterRowDefSticky", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
            }
          },
          directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterRow"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYi1kcm9wcy9tb2ItZHJvcHMuY29tcG9uZW50LmNzcyJ9 */"]
        });
        return MobDropsComponent;
      }();
      /***/

    },

    /***/
    "JY2j":
    /*!************************************!*\
      !*** ./src/app/baseapi.service.ts ***!
      \************************************/

    /*! exports provided: BaseApiService */

    /***/
    function JY2j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseApiService", function () {
        return BaseApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var BaseApiService = /*@__PURE__*/function () {
        var BaseApiService = /*#__PURE__*/function () {
          function BaseApiService(http) {
            _classCallCheck(this, BaseApiService);

            this.http = http;
            this.urls = {
              highscore: 'https://rpg-de2.mo.ee/',
              cdn: cdn_url,
              data: this.getDataUrl(),
              mohostname: 'data.mo.ee'
            };
            this.version = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
            this.versionHash = '';
            this.expiredTime = 66E6;
            var thisTimestamp = new Date().getTime();
            var lastTimestamp = localStorage.versionExpired * 1;

            if (isNaN(lastTimestamp) || thisTimestamp - lastTimestamp > this.expiredTime) {
              this.fixedTimestamp = thisTimestamp;
              localStorage.versionExpired = thisTimestamp;
            } else {
              this.fixedTimestamp = lastTimestamp;
              localStorage.versionExpired = lastTimestamp;
            }
          }

          _createClass(BaseApiService, [{
            key: "getDataUrl",
            value: function getDataUrl() {
              return data_urls[Math.floor(data_urls.length * Math.random())];
            }
          }, {
            key: "getVersion",
            value: function () {
              var _getVersion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var _this20 = this;

                var url;
                return regeneratorRuntime.wrap(function _callee5$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        if (!this.version.value) {
                          _context6.next = 2;
                          break;
                        }

                        return _context6.abrupt("return", Promise.resolve());

                      case 2:
                        url = this.urls.highscore + 'version?t=' + this.fixedTimestamp;
                        _context6.next = 5;
                        return this.http.get(url).toPromise().then(function (result) {
                          _this20.version.next(result.v);

                          _this20.versionHash = result.c;
                        })["catch"](function () {
                          return _this20.version.next(0);
                        }).then(function () {
                          return Promise.resolve();
                        });

                      case 5:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee5, this);
              }));

              function getVersion() {
                return _getVersion.apply(this, arguments);
              }

              return getVersion;
            }()
          }, {
            key: "getMap",
            value: function getMap(a) {
              var _this21 = this;

              var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
              var f = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

              if (f > 2) {
                console.error('failed loading data of maps.');
                return Promise.resolve();
              }

              var url = (d ? 'https://rpg-de.mo.ee/' : cdn_url) + 'maps/map' + a + '.js?' + map_hashes[a];
              return this.http.get(url, {
                responseType: 'text'
              }).toPromise()["catch"](function () {
                setTimeout(function () {
                  _this21.getMap(a, !d, f++);
                });
              });
            }
          }, {
            key: "getPlayer",
            value: function getPlayer(player) {
              return this.http.get(this.urls.highscore + 'playerskills?n=' + encodeURIComponent(player) + '&t=' + this.fixedTimestamp);
            }
          }, {
            key: "getSupportsLanguage",
            value: function getSupportsLanguage() {
              var url = this.urls.data + '/languages?t=' + this.fixedTimestamp;
              return this.http.get(url).toPromise();
            }
          }, {
            key: "getLanguage",
            value: function () {
              var _getLanguage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(langCode) {
                var _this22 = this;

                var getHash,
                    _string,
                    dataPormise,
                    _loop2,
                    key,
                    _args9 = arguments;

                return regeneratorRuntime.wrap(function _callee7$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        getHash = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : false;

                        if (!(getHash && langCode !== 'en')) {
                          _context9.next = 4;
                          break;
                        }

                        _context9.next = 4;
                        return this.getLanguageHash(langCode).then(function (result) {
                          Translate.settings[langCode]['lang_' + langCode] = result.lang;
                          Translate.settings[langCode]['lang_names_' + langCode] = result.lang_names;
                        })["catch"](function () {});

                      case 4:
                        _string = ['lang_', 'lang_names_', 'mo_tool_'];
                        dataPormise = {};

                        _string.forEach( /*#__PURE__*/function () {
                          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(key) {
                            return regeneratorRuntime.wrap(function _callee6$(_context7) {
                              while (1) {
                                switch (_context7.prev = _context7.next) {
                                  case 0:
                                    dataPormise[key] = _this22.getLanguageFiles(langCode, key);

                                  case 1:
                                  case "end":
                                    return _context7.stop();
                                }
                              }
                            }, _callee6);
                          }));

                          return function (_x5) {
                            return _ref.apply(this, arguments);
                          };
                        }());

                        _loop2 = /*#__PURE__*/regeneratorRuntime.mark(function _loop2(key) {
                          return regeneratorRuntime.wrap(function _loop2$(_context8) {
                            while (1) {
                              switch (_context8.prev = _context8.next) {
                                case 0:
                                  if (!dataPormise.hasOwnProperty(key)) {
                                    _context8.next = 3;
                                    break;
                                  }

                                  _context8.next = 3;
                                  return dataPormise[key].then(function (data) {
                                    if (data) {
                                      if (!lang[langCode]) {
                                        lang[langCode] = {};
                                      }

                                      if (key === 'lang_') {
                                        for (var key2 in data) {
                                          if (data.hasOwnProperty(key2)) {
                                            var element = data[key2];
                                            lang[langCode][key2] = element;
                                          }
                                        }
                                      } else if (key === 'lang_names_') {
                                        lang[langCode].names = data.names;
                                      } else {
                                        lang[langCode].mo_tool = data;
                                      }
                                    }
                                  })["catch"](function () {});

                                case 3:
                                case "end":
                                  return _context8.stop();
                              }
                            }
                          }, _loop2);
                        });
                        _context9.t0 = regeneratorRuntime.keys(dataPormise);

                      case 9:
                        if ((_context9.t1 = _context9.t0()).done) {
                          _context9.next = 14;
                          break;
                        }

                        key = _context9.t1.value;
                        return _context9.delegateYield(_loop2(key), "t2", 12);

                      case 12:
                        _context9.next = 9;
                        break;

                      case 14:
                        return _context9.abrupt("return", new Promise(function (resolve, reject) {
                          if (!lang[langCode] || !lang[langCode]["interface"]) {
                            reject();
                          } else {
                            resolve(null);
                          }
                        }));

                      case 15:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee7, this);
              }));

              function getLanguage(_x4) {
                return _getLanguage.apply(this, arguments);
              }

              return getLanguage;
            }()
          }, {
            key: "getLanguageHash",
            value: function getLanguageHash(langCode) {
              var time = new Date();
              var url = this.urls.data + '/language?l=' + langCode + '&t=' + this.fixedTimestamp;
              return this.http.get(url).toPromise();
            }
          }, {
            key: "getLanguageFiles",
            value: function getLanguageFiles(langCode) {
              var _string = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'mo_tool_';

              if (Translate.settings[langCode] && Translate.settings[langCode][_string + langCode]) {
                var url = (_string === 'mo_tool_' ? '/1/assets/lang/' : this.urls.cdn + 'lang/' + _string) + langCode + '.json?' + Translate.settings[langCode][_string + langCode];
                return this.http.get(url).toPromise();
              }

              return Promise.resolve();
            }
          }]);

          return BaseApiService;
        }();

        BaseApiService.ɵfac = function BaseApiService_Factory(t) {
          return new (t || BaseApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
        };

        BaseApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: BaseApiService,
          factory: BaseApiService.ɵfac,
          providedIn: 'root'
        });
        return BaseApiService;
      }();
      /***/

    },

    /***/
    "OFCy":
    /*!**************************************************!*\
      !*** ./src/app/item-card/item-card.component.ts ***!
      \**************************************************/

    /*! exports provided: ItemCardComponent */

    /***/
    function OFCy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemCardComponent", function () {
        return ItemCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ItemCardComponent = /*@__PURE__*/function () {
        var ItemCardComponent = /*#__PURE__*/function () {
          function ItemCardComponent() {
            _classCallCheck(this, ItemCardComponent);
          }

          _createClass(ItemCardComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ItemCardComponent;
        }();

        ItemCardComponent.ɵfac = function ItemCardComponent_Factory(t) {
          return new (t || ItemCardComponent)();
        };

        ItemCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ItemCardComponent,
          selectors: [["app-item-card"]],
          decls: 2,
          vars: 0,
          template: function ItemCardComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "item-card works!");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tY2FyZC9pdGVtLWNhcmQuY29tcG9uZW50LmNzcyJ9 */"]
        });
        return ItemCardComponent;
      }();
      /***/

    },

    /***/
    "OYwW":
    /*!***********************************************************!*\
      !*** ./src/app/_Out-frame/language/language.component.ts ***!
      \***********************************************************/

    /*! exports provided: LanguageComponent */

    /***/
    function OYwW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageComponent", function () {
        return LanguageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../language.service */
      "y91y");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");

      function LanguageComponent_ng_container_1_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguageComponent_ng_container_1_ng_container_7_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var key_r4 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.changeLang(key_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var key_r4 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.Translate.settings[key_r4].name);
        }
      }

      function LanguageComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LanguageComponent_ng_container_1_ng_container_7_Template, 3, 1, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.lang.settingLangName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.objectKeys(ctx_r0.Translate.settings));
        }
      }

      function LanguageComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguageComponent_ng_container_2_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.getSupports();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.lang.settingLangName, " ");
        }
      }

      var LanguageComponent = /*@__PURE__*/function () {
        var LanguageComponent = /*#__PURE__*/function () {
          function LanguageComponent(lang, app) {
            _classCallCheck(this, LanguageComponent);

            this.lang = lang;
            this.app = app;
            this.objectKeys = Object.keys;
            this.Translate = Translate;
          }

          _createClass(LanguageComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "changeLang",
            value: function changeLang(langCode) {
              var _this23 = this;

              this.lang.getLanguage(langCode)["catch"](function () {
                _this23.app.showDialog("Failed loading language: ".concat(_this23.Translate.settings[langCode].name));
              });
            }
          }, {
            key: "getSupports",
            value: function getSupports() {
              var _this24 = this;

              this.lang.getSupports()["catch"](function () {
                _this24.lang.isSupportsLoading = false;

                _this24.app.showDialog('Language loading error.');
              });
            }
          }]);

          return LanguageComponent;
        }();

        LanguageComponent.ɵfac = function LanguageComponent_Factory(t) {
          return new (t || LanguageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_1__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]));
        };

        LanguageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LanguageComponent,
          selectors: [["app-language"]],
          decls: 3,
          vars: 2,
          consts: [[1, "box-setting"], [4, "ngIf"], [1, "label-lang"], ["mat-flat-button", "", "id", "bnt-lang", 3, "matMenuTriggerFor"], [1, "fas", "fa-globe"], ["id", "menu-languages"], ["menu", "matMenu"], [4, "ngFor", "ngForOf"], ["mat-menu-item", "", "value", "key", 3, "click"], ["matTooltip", "Load languages with click."], ["mat-flat-button", "", "id", "bnt-lang", 1, "mo-bnt-fake-disabled", 3, "click"]],
          template: function LanguageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LanguageComponent_ng_container_1_Template, 8, 3, "ng-container", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LanguageComponent_ng_container_2_Template, 5, 1, "ng-container", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang.isSupportsLoaded);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.lang.isSupportsLoaded);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"]],
          styles: ["#bnt-lang[_ngcontent-%COMP%] {\r\n  text-overflow: ellipsis;\r\n  width: 150px;\r\n  overflow: hidden;\r\n  padding: 0 4px;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.box-setting[_ngcontent-%COMP%] {\r\n  margin: 12px 0;\r\n  text-align: left;\r\n  line-height: 2;\r\n  padding: 0 12px;\r\n}\r\n.mat-menu-item[_ngcontent-%COMP%] {\r\n  line-height: 32px;\r\n  height: 32px;\r\n  padding: 0 8px;\r\n}\r\n.mo-bnt-fake-disabled[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, .05);\r\n  color: rgba(255, 255, 255, .3);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX091dC1mcmFtZS9sYW5ndWFnZS9sYW5ndWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLDBDQUEwQztFQUMxQyw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9fT3V0LWZyYW1lL2xhbmd1YWdlL2xhbmd1YWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2JudC1sYW5nIHtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAwIDRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJveC1zZXR0aW5nIHtcclxuICBtYXJnaW46IDEycHggMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIHBhZGRpbmc6IDAgMTJweDtcclxufVxyXG4ubWF0LW1lbnUtaXRlbSB7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG59XHJcbi5tby1ibnQtZmFrZS1kaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMDUpO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcclxufVxyXG4iXX0= */"]
        });
        return LanguageComponent;
      }();
      /***/

    },

    /***/
    "OqfT":
    /*!************************************************!*\
      !*** ./src/app/mob-card/mob-card.component.ts ***!
      \************************************************/

    /*! exports provided: MobCardComponent */

    /***/
    function OqfT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MobCardComponent", function () {
        return MobCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../wiki.service */
      "uUtE");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../language.service */
      "y91y");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      function MobCardComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.dataSource.name_en, " ");
        }
      }

      function MobCardComponent_td_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.translateLang["Melee Block"].trans, " ");
        }
      }

      function MobCardComponent_td_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.translateLang["Magic Block"].trans, " ");
        }
      }

      function MobCardComponent_td_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.translateLang["Archery Block"].trans, "");
        }
      }

      function MobCardComponent_td_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r4.dataSource.melee_block, "", ctx_r4.dataSource.melee_block ? "%" : "", " ");
        }
      }

      function MobCardComponent_td_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r5.dataSource.magic_block, "", ctx_r5.dataSource.magic_block ? "%" : "", " ");
        }
      }

      function MobCardComponent_td_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r6.dataSource.archery_block, "", ctx_r6.dataSource.archery_block ? "%" : "", "");
        }
      }

      function MobCardComponent_td_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.translateLang.Magic.trans);
        }
      }

      function MobCardComponent_td_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.translateLang.Spell.trans);
        }
      }

      function MobCardComponent_td_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Exp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.translateLang.Bonus.trans);
        }
      }

      function MobCardComponent_td_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.dataSource.magic);
        }
      }

      function MobCardComponent_td_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.dataSource.spells);
        }
      }

      function MobCardComponent_td_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.dataSource.additional_xp);
        }
      }

      function MobCardComponent_td_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r13.dataSource.respawn_time, "1."), "s");
        }
      }

      function MobCardComponent_td_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r14.dataSource.respawn_time - ctx_r14.dataSource.random_respawn, "1."), "s ~ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, ctx_r14.dataSource.respawn_time + ctx_r14.dataSource.random_respawn, "1."), "s");
        }
      }

      function MobCardComponent_table_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Exp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Coins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.translateLang["Kill Quest"].trans);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.translateLang.Qty.trans);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 6, ctx_r15.wiki.quests[ctx_r15.dataSource.kq_id].amount, "1."));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 9, ctx_r15.wiki.quests[ctx_r15.dataSource.kq_id].reward[0], "1."));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 12, ctx_r15.wiki.quests[ctx_r15.dataSource.kq_id].reward[1], "1."));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 15, ctx_r15.wiki.quests[ctx_r15.dataSource.kq_id].reward[2], "1."));
        }
      }

      var _c0 = function _c0() {
        return {
          p: 2
        };
      };

      function MobCardComponent_table_60_tr_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.translateLang["Party Dungeon"].trans);
        }
      }

      function MobCardComponent_table_60_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var q_r20 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r19.wiki.map_names[q_r20.id], " (", q_r20.qty, ")");
        }
      }

      function MobCardComponent_table_60_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobCardComponent_table_60_ng_container_5_ng_container_1_Template, 4, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.dataSource.on_maps);
        }
      }

      function MobCardComponent_table_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MobCardComponent_table_60_tr_4_Template, 4, 3, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MobCardComponent_table_60_ng_container_5_Template, 2, 1, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.translateLang.Locations.trans);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.dataSource.in_dungeon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.dataSource.on_maps);
        }
      }

      var MobCardComponent = /*@__PURE__*/function () {
        var MobCardComponent = /*#__PURE__*/function () {
          function MobCardComponent(wiki, lang) {
            _classCallCheck(this, MobCardComponent);

            this.wiki = wiki;
            this.lang = lang;
            this.dataSource = {};
            this.translateLang = {
              HP: {
                trans: '',
                "class": 'w'
              },
              ACC: {
                trans: '',
                "class": 'w'
              },
              STR: {
                trans: '',
                "class": 'w'
              },
              DEF: {
                trans: '',
                "class": 'w'
              },
              'Melee Block': {
                trans: '',
                "class": 'w'
              },
              'Magic Block': {
                trans: '',
                "class": 'w'
              },
              'Archery Block': {
                trans: '',
                "class": 'w'
              },
              'Attack Mode': {
                trans: '',
                "class": 'w'
              },
              Magic: {
                trans: '',
                "class": 'i'
              },
              Aggressive: {
                trans: '',
                "class": 'm'
              },
              Passive: {
                trans: '',
                "class": 'm'
              },
              Spell: {
                trans: '',
                "class": 'w'
              },
              Respawn: {
                trans: '',
                "class": 'w'
              },
              Bonus: {
                trans: '',
                "class": 'w'
              },
              'Kill Quest': {
                trans: '',
                "class": 'w'
              },
              'Party Quest': {
                trans: '',
                "class": 'w'
              },
              Qty: {
                trans: '',
                "class": 'w'
              },
              Locations: {
                trans: '',
                "class": 'w'
              },
              'Party Dungeon': {
                trans: '',
                "class": 'w'
              }
            };
          }

          _createClass(MobCardComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this25 = this;

              this.LanguageSubscription = this.lang.settingLang.subscribe(function (e) {
                _this25.onLangChange();
              });

              if (this.wiki.isWikiInit) {
                this.getData();
              } else {
                var timer = setInterval(function () {
                  if (_this25.wiki.isWikiInit) {
                    _this25.getData();

                    clearInterval(timer);
                  }
                }, 300);
              }
            }
          }, {
            key: "onLangChange",
            value: function onLangChange() {
              this.dataSource.name = this.lang.getString(this.dataSource.name_en);
              this.dataSource.spells = this.lang.getString(this.dataSource.spells_en);

              for (var key in this.translateLang) {
                if (this.translateLang.hasOwnProperty(key)) {
                  this.translateLang[key].trans = this.lang.getString(key, this.translateLang[key]["class"]);
                }
              }
            }
          }, {
            key: "getData",
            value: function getData() {
              var element = this.wiki.npc_base[this.id];
              this.dataSource = {};
              this.dataSource.name_en = element.name;
              this.dataSource.name = this.lang.getString(element.name);
              this.dataSource.cl = element.params.combat_level;
              this.dataSource.health = element.temp.health;
              this.dataSource.accuracy = element.temp.total_accuracy;
              this.dataSource.strength = element.temp.total_strength;
              this.dataSource.defense = element.temp.total_defense;
              this.dataSource.melee_block = element.temp.melee_block;
              this.dataSource.magic_block = element.temp.magic_block;
              this.dataSource.archery_block = element.temp.archery_block;
              this.dataSource.magic = element.temp.magic;
              this.dataSource.magics = element.temp.magics;

              if (this.dataSource.magics) {
                this.dataSource.spells_en = this.wiki.Magic[element.temp.magics[0].id].name;
                this.dataSource.spells = this.lang.getString(this.dataSource.spells_en);
              }

              this.dataSource.aggressive = element.params.aggressive;
              this.dataSource.in_dungeon = element.params.in_dungeon;
              this.dataSource.respawn_time = element.params.respawn_time;

              if (element.params.random_respawn) {
                this.dataSource.random_respawn = Math.round(this.dataSource.respawn_time * .1);
              }

              this.dataSource.additional_xp = element.params.additional_xp;
              this.dataSource.on_maps = element.on_maps;
              this.dataSource.kq_id = element.kq_id;
            }
          }, {
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              this.getData();
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.LanguageSubscription.unsubscribe();
            }
          }]);

          return MobCardComponent;
        }();

        MobCardComponent.ɵfac = function MobCardComponent_Factory(t) {
          return new (t || MobCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_1__["WikiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]));
        };

        MobCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MobCardComponent,
          selectors: [["app-mob-card"]],
          inputs: {
            id: "id"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
          decls: 61,
          vars: 45,
          consts: [[1, "mo-card", "flex-v-center"], [1, "mo-card-name", "doc-table-header"], [1, "main", "left"], ["class", "sub left", 4, "ngIf"], [1, "mat-table", "doc-table"], [1, "mat-row", "mat-row-title", "center"], [1, "mat-cell"], [1, "mat-row", "center"], ["class", "mat-cell", 4, "ngIf"], ["class", "mat-table doc-table", 4, "ngIf"], [1, "sub", "left"], ["colspan", "4", 1, "mat-cell"], ["class", "mat-row left", 4, "ngIf"], [4, "ngIf"], [1, "mat-row", "left"], ["routerLink", "/partyquest", 3, "queryParams"], [4, "ngFor", "ngForOf"], [1, "mat-cell", "left"]],
          template: function MobCardComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MobCardComponent_div_4_Template, 2, 1, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CL");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "number");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "number");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "number");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "number");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MobCardComponent_td_35_Template, 2, 1, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, MobCardComponent_td_36_Template, 2, 1, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, MobCardComponent_td_37_Template, 2, 1, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MobCardComponent_td_41_Template, 2, 2, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MobCardComponent_td_42_Template, 2, 2, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, MobCardComponent_td_43_Template, 2, 2, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "table", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, MobCardComponent_td_48_Template, 2, 1, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, MobCardComponent_td_49_Template, 2, 1, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, MobCardComponent_td_50_Template, 4, 1, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, MobCardComponent_td_54_Template, 2, 1, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, MobCardComponent_td_55_Template, 2, 1, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, MobCardComponent_td_56_Template, 2, 1, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, MobCardComponent_td_57_Template, 3, 4, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, MobCardComponent_td_58_Template, 4, 8, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, MobCardComponent_table_59_Template, 26, 18, "table", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, MobCardComponent_table_60_Template, 6, 3, "table", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dataSource.name, " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang.settingLang.value !== "en");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.translateLang.HP.trans);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.translateLang.ACC.trans);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.translateLang.STR.trans);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.translateLang.DEF.trans);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 30, ctx.dataSource.cl, "1."));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 33, ctx.dataSource.health, "1."));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 36, ctx.dataSource.accuracy, "1."));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](29, 39, ctx.dataSource.strength, "1."));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](32, 42, ctx.dataSource.defense, "1."));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.melee_block);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.magic_block);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.archery_block);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.translateLang["Attack Mode"].trans);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.melee_block);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.magic_block);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.archery_block);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dataSource.aggressive ? ctx.translateLang.Aggressive.trans : ctx.translateLang.Passive.trans);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.magics);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.magics);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.additional_xp);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.translateLang.Respawn.trans);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.magics);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.magics);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.additional_xp);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataSource.random_respawn);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.random_respawn);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.kq_id);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.in_dungeon || ctx.dataSource.on_maps);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]],
          styles: [".doc-table[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.mat-row-title[_ngcontent-%COMP%] {\r\n  background: #292929;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iLWNhcmQvbW9iLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2ItY2FyZC9tb2ItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5kb2MtdGFibGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5tYXQtcm93LXRpdGxlIHtcclxuICBiYWNrZ3JvdW5kOiAjMjkyOTI5O1xyXG59XHJcbiJdfQ== */"]
        });
        return MobCardComponent;
      }();
      /***/

    },

    /***/
    "S6yO":
    /*!**************************************!*\
      !*** ./src/app/npc/npc.component.ts ***!
      \**************************************/

    /*! exports provided: NpcComponent */

    /***/
    function S6yO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NpcComponent", function () {
        return NpcComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var NpcComponent = /*@__PURE__*/function () {
        var NpcComponent = /*#__PURE__*/function () {
          function NpcComponent() {
            _classCallCheck(this, NpcComponent);
          }

          _createClass(NpcComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return NpcComponent;
        }();

        NpcComponent.ɵfac = function NpcComponent_Factory(t) {
          return new (t || NpcComponent)();
        };

        NpcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: NpcComponent,
          selectors: [["app-npc"]],
          decls: 2,
          vars: 0,
          template: function NpcComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " npc works!\n");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25wYy9ucGMuY29tcG9uZW50LmNzcyJ9 */"]
        });
        return NpcComponent;
      }();
      /***/

    },

    /***/
    "SSix":
    /*!**************************************!*\
      !*** ./src/app/mob/mob.component.ts ***!
      \**************************************/

    /*! exports provided: MobComponent */

    /***/
    function SSix(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MobComponent", function () {
        return MobComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../language.service */
      "y91y");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../wiki.service */
      "uUtE");
      /* harmony import */


      var _mob_card_mob_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../mob-card/mob-card.component */
      "OqfT");
      /* harmony import */


      var _mob_drops_mob_drops_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../mob-drops/mob-drops.component */
      "J8JK");
      /* harmony import */


      var _mod_all_mod_all_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../mod-all/mod-all.component */
      "aGzc");

      function MobComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function MobComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-mob-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-mob-drops", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r2.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r2.id);
        }
      }

      function MobComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function MobComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mod-all");
        }
      }

      var MobComponent = /*@__PURE__*/function () {
        var MobComponent = /*#__PURE__*/function () {
          function MobComponent(location, router, route, lang, wiki) {
            _classCallCheck(this, MobComponent);

            this.location = location;
            this.router = router;
            this.route = route;
            this.lang = lang;
            this.wiki = wiki;
            this.id = -1;
          }

          _createClass(MobComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this26 = this;

              this.routeParse();
              this.navigationSubscription = this.router.events.subscribe(function (event) {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                  _this26.routeParse();
                }
              });
            }
          }, {
            key: "routeParse",
            value: function routeParse() {
              var _id = this.route.snapshot.queryParams.i;

              if (_id) {
                var g = parseInt(_id, 0);

                if (!(isNaN(g) || g < 0 || g > this.wiki.npc_base.length - 1 || this.wiki.npc_base[g].type !== 3)) {
                  this.id = g;
                } else {
                  this.id = -1;
                }
              } else {
                this.id = -1;
              }

              this.setUrl(this.id);
            }
          }, {
            key: "setUrl",
            value: function setUrl(id) {
              var url = '/mob';
              url += this.id === -1 ? '' : '?i=' + id;
              this.location.replaceState(url);
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.navigationSubscription.unsubscribe();
            }
          }]);

          return MobComponent;
        }();

        MobComponent.ɵfac = function MobComponent_Factory(t) {
          return new (t || MobComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_4__["WikiService"]));
        };

        MobComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MobComponent,
          selectors: [["app-mob"]],
          decls: 6,
          vars: 4,
          consts: [[4, "ngIf", "ngIfThen"], ["bool2", ""], ["bool1", ""], [1, "flex-h-top"], [3, "id"]],
          template: function MobComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MobComponent_ng_container_0_Template, 1, 0, "ng-container", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MobComponent_ng_container_3_Template, 1, 0, "ng-container", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MobComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }

            if (rf & 2) {
              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.id !== -1)("ngIfThen", _r1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.id === -1)("ngIfThen", _r4);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _mob_card_mob_card_component__WEBPACK_IMPORTED_MODULE_5__["MobCardComponent"], _mob_drops_mob_drops_component__WEBPACK_IMPORTED_MODULE_6__["MobDropsComponent"], _mod_all_mod_all_component__WEBPACK_IMPORTED_MODULE_7__["ModAllComponent"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYi9tb2IuY29tcG9uZW50LmNzcyJ9 */"]
        });
        return MobComponent;
      }();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: DialogComponent, AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
        return DialogComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "HeVh");
      /* harmony import */


      var _browser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./browser.service */
      "ZRPN");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./wiki.service */
      "uUtE");

      var _c0 = ["sideNavMenu"];
      var _c1 = ["sideNavUser"];

      var DialogComponent = /*@__PURE__*/function () {
        var DialogComponent = /*#__PURE__*/function () {
          function DialogComponent(dialogRef, data) {
            _classCallCheck(this, DialogComponent);

            this.dialogRef = dialogRef;
            this.data = data;
          }

          _createClass(DialogComponent, [{
            key: "onNoClick",
            value: function onNoClick() {
              this.dialogRef.close();
            }
          }]);

          return DialogComponent;
        }();

        DialogComponent.ɵfac = function DialogComponent_Factory(t) {
          return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
        };

        DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: DialogComponent,
          selectors: [["app-dialog-normal"]],
          decls: 4,
          vars: 2,
          consts: [["mat-dialog-title", "", 2, "text-align", "left", "font-size", "14px", "user-select", "text", 3, "innerHTML"], ["mat-dialog-actions", "", 2, "float", "right"], ["mat-raised-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]],
          template: function DialogComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h1", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ok");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data);
            }
          },
          directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
          encapsulation: 2
        });
        return DialogComponent;
      }();

      var AppComponent = /*@__PURE__*/function () {
        var AppComponent = /*#__PURE__*/function () {
          function AppComponent(dialog, changeDetectorRef, media, browser, router, wiki) {
            _classCallCheck(this, AppComponent);

            this.dialog = dialog;
            this.browser = browser;
            this.router = router;
            this.wiki = wiki;
            this.mobileQuery = media.matchMedia('(max-width: 600px)');

            this.mobileQueryListener = function () {
              return changeDetectorRef.detectChanges();
            };

            this.mobileQuery.addListener(this.mobileQueryListener);
          }

          _createClass(AppComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this27 = this;

              this.router.events.subscribe(function (ev) {
                if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                  _this27.browser.scrollTop(); // when platform mobile, close sidenaves


                  if (_this27.mobileQuery.matches) {
                    _this27.sideNavMenu.close();

                    _this27.sideNavUser.close();
                  }
                }
              });
            }
          }, {
            key: "showDialog",
            value: function showDialog(msg) {
              var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
              this.dialog.open(DialogComponent, {
                width: width + 'px',
                data: msg
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.mobileQuery.removeListener(this.mobileQueryListener);
            }
          }]);

          return AppComponent;
        }();

        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_browser_service__WEBPACK_IMPORTED_MODULE_5__["BrowserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_6__["WikiService"]));
        };

        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AppComponent,
          selectors: [["app-root"]],
          viewQuery: function AppComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sideNavMenu = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sideNavUser = _t.first);
            }
          },
          decls: 11,
          vars: 6,
          consts: [[1, "app-container"], [3, "sideNavMenu", "sideNavUser"], ["autosize", "", 1, "drawer-container"], ["position", "end", 1, "drawer-sidenav", 3, "mode", "opened"], ["sideNavUser", ""], [1, "drawer-sidenav", 2, "min-width", "175px", 3, "mode", "opened"], ["sideNavMenu", ""], ["ngro", ""], ["fxfill", "", 1, "drawer-content"]],
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-toolbar", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer-container", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-drawer", 3, 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sidenav-user");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-drawer", 5, 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-sidenav-menu", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sideNavMenu", _r1)("sideNavUser", _r0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "over" : "side")("opened", !ctx.mobileQuery.matches);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "over" : "side")("opened", !ctx.mobileQuery.matches);
            }
          },
          styles: [".app-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.drawer-container[_ngcontent-%COMP%] {\r\n  background-color: #121212;\r\n  height: 100%;\r\n}\r\n\r\n.drawer-sidenav[_ngcontent-%COMP%] {\r\n  background-color: #1c1c1c;\r\n  border: none;\r\n}\r\n\r\n.drawer-content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 10px;\r\n  -moz-user-select: text;\r\n  -o-user-select: text;\r\n  user-select: text;\r\n  -webkit-user-select: text;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .drawer-content[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBRXRCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZHJhd2VyLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5kcmF3ZXItc2lkZW5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5kcmF3ZXItY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xyXG4gIC1vLXVzZXItc2VsZWN0OiB0ZXh0O1xyXG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuZHJhd2VyLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuIl19 */"]
        });
        return AppComponent;
      }();
      /***/

    },

    /***/
    "VLu1":
    /*!************************************************************!*\
      !*** ./src/app/_Quests/kill-quest/kill-quest.component.ts ***!
      \************************************************************/

    /*! exports provided: KillQuestComponent */

    /***/
    function VLu1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KillQuestComponent", function () {
        return KillQuestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../wiki.service */
      "uUtE");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../language.service */
      "y91y");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function KillQuestComponent_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KillQuestComponent_td_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r16.id);
        }
      }

      function KillQuestComponent_th_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.translateLang.Name.trans);
        }
      }

      function KillQuestComponent_td_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r17.name);
        }
      }

      function KillQuestComponent_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.translateLang.Qty.trans);
        }
      }

      function KillQuestComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r18.amount);
        }
      }

      function KillQuestComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.translateLang.Mob.trans);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          i: a0
        };
      };

      function KillQuestComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, element_r19.mob_id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r19.mob);
        }
      }

      function KillQuestComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Exp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KillQuestComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r20.reward_exp, "1."));
        }
      }

      function KillQuestComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Coins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KillQuestComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r21.reward_coin, "1."));
        }
      }

      function KillQuestComponent_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KillQuestComponent_td_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r22.reward_mos, "1."));
        }
      }

      function KillQuestComponent_tr_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
        }
      }

      function KillQuestComponent_tr_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
        }
      }

      var KillQuestComponent = /*@__PURE__*/function () {
        var KillQuestComponent = /*#__PURE__*/function () {
          function KillQuestComponent(wiki, language) {
            _classCallCheck(this, KillQuestComponent);

            this.wiki = wiki;
            this.language = language;
            this.Objectkeys = Object.keys;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
            this.displayedColumns = ['id', 'name', 'amount', 'mob', 'reward_exp', 'reward_coin', 'reward_mos'];
            this.translateLang = {
              Name: {
                trans: '',
                "class": 'w'
              },
              Mob: {
                trans: '',
                "class": 'w'
              },
              Qty: {
                trans: '',
                "class": 'w'
              }
            };
          }

          _createClass(KillQuestComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this28 = this;

              this.subscription = this.language.settingLang.subscribe(function (e) {
                _this28.onLangChange();
              });
              this.getData();
            }
          }, {
            key: "onLangChange",
            value: function onLangChange() {
              for (var key in this.translateLang) {
                if (this.translateLang.hasOwnProperty(key)) {
                  this.translateLang[key].trans = this.language.getString(key, this.translateLang[key]["class"]);
                }
              }

              for (var _key4 in this.dataSource.data) {
                if (this.dataSource.data.hasOwnProperty(_key4)) {
                  var element = this.dataSource.data[_key4];
                  element.name = this.language.getString(element.name_en, 'q');
                  element.mob = this.language.getString(element.mob_en);
                }
              }
            }
          }, {
            key: "getData",
            value: function getData() {
              for (var key in this.wiki.quests) {
                if (this.wiki.quests.hasOwnProperty(key)) {
                  var temp = this.wiki.quests[key];
                  var obj = {};
                  obj.id = temp.id + 1;
                  obj.npc_id = temp.npc_id;
                  obj.name_en = temp.name;
                  obj.name = this.language.getString(obj.name_en, 'q');
                  obj.mob_id = temp.npc_id;
                  obj.mob_en = this.wiki.npc_base[temp.npc_id].name;
                  obj.mob = this.language.getString(obj.mob_en);
                  obj.amount = temp.amount;
                  obj.reward_exp = temp.reward[0];
                  obj.reward_coin = temp.reward[1];
                  obj.reward_mos = temp.reward[2];
                  this.dataSource.data.push(obj);
                }
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.subscription.unsubscribe();
            }
          }]);

          return KillQuestComponent;
        }();

        KillQuestComponent.ɵfac = function KillQuestComponent_Factory(t) {
          return new (t || KillQuestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_2__["WikiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]));
        };

        KillQuestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: KillQuestComponent,
          selectors: [["app-kill-quest"]],
          hostAttrs: [1, "route-app"],
          decls: 25,
          vars: 4,
          consts: [[1, "flex-v-center"], ["mat-table", "", 1, "doc-table", "doc-table-info", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "right", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", "class", "left", 4, "matCellDef"], ["matColumnDef", "amount"], ["matColumnDef", "mob", "sticky", ""], ["matColumnDef", "reward_exp"], ["matColumnDef", "reward_coin"], ["matColumnDef", "reward_mos"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "right"], ["mat-cell", "", 1, "left"], ["routerLink", "/mob", 3, "queryParams"], ["mat-header-row", ""], ["mat-row", ""]],
          template: function KillQuestComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KillQuestComponent_th_3_Template, 2, 0, "th", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KillQuestComponent_td_4_Template, 2, 1, "td", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, KillQuestComponent_th_6_Template, 2, 1, "th", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, KillQuestComponent_td_7_Template, 2, 1, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, KillQuestComponent_th_9_Template, 2, 1, "th", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, KillQuestComponent_td_10_Template, 2, 1, "td", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, KillQuestComponent_th_12_Template, 2, 1, "th", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, KillQuestComponent_td_13_Template, 3, 4, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, KillQuestComponent_th_15_Template, 2, 0, "th", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, KillQuestComponent_td_16_Template, 3, 4, "td", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, KillQuestComponent_th_18_Template, 2, 0, "th", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, KillQuestComponent_td_19_Template, 3, 4, "td", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, KillQuestComponent_th_21_Template, 2, 0, "th", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, KillQuestComponent_td_22_Template, 3, 4, "td", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, KillQuestComponent_tr_23_Template, 1, 0, "tr", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, KillQuestComponent_tr_24_Template, 1, 0, "tr", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            }
          },
          directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19RdWVzdHMva2lsbC1xdWVzdC9raWxsLXF1ZXN0LmNvbXBvbmVudC5jc3MifQ== */"]
        });
        return KillQuestComponent;
      }();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "ltgo");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/table */
      "GXRp");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "y7ui");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _modules_lower_case_url_serializer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./modules/lower-case-url-serializer.module */
      "ZRwu");
      /* harmony import */


      var _app_initialize_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app-initialize.service */
      "14tG");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "Ynp+");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/chips */
      "f44v");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/sort */
      "LUZP");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");
      /* harmony import */


      var _Out_frame_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./_Out-frame/toolbar/toolbar.component */
      "6ERG");
      /* harmony import */


      var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./capitalize.pipe */
      "q8YX");
      /* harmony import */


      var _Out_frame_main_main_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./_Out-frame/main/main.component */
      "rbLE");
      /* harmony import */


      var _item_item_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./item/item.component */
      "ZfIV");
      /* harmony import */


      var _mob_mob_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./mob/mob.component */
      "SSix");
      /* harmony import */


      var _npc_npc_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./npc/npc.component */
      "S6yO");
      /* harmony import */


      var _pet_pet_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./pet/pet.component */
      "iOwe");
      /* harmony import */


      var _spell_spell_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./spell/spell.component */
      "379c");
      /* harmony import */


      var _arrow_arrow_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./arrow/arrow.component */
      "3DlW");
      /* harmony import */


      var _Out_frame_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./_Out-frame/page-not-found/page-not-found.component */
      "eE67");
      /* harmony import */


      var _cl_cl_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./cl/cl.component */
      "7tBg");
      /* harmony import */


      var _Quests_kill_quest_kill_quest_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./_Quests/kill-quest/kill-quest.component */
      "VLu1");
      /* harmony import */


      var _Quests_party_quest_party_quest_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./_Quests/party-quest/party-quest.component */
      "gI/T");
      /* harmony import */


      var _Quests_party_quest_mobs_party_quest_mobs_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./_Quests/party-quest-mobs/party-quest-mobs.component */
      "y5ku");
      /* harmony import */


      var _Quests_party_quest_kill_party_quest_kill_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./_Quests/party-quest-kill/party-quest-kill.component */
      "/s/1");
      /* harmony import */


      var _Quests_skill_quest_skill_quest_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./_Quests/skill-quest/skill-quest.component */
      "s+sn");
      /* harmony import */


      var _Out_frame_language_language_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./_Out-frame/language/language.component */
      "OYwW");
      /* harmony import */


      var _Out_frame_sidenav_menu_sidenav_menu_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./_Out-frame/sidenav-menu/sidenav-menu.component */
      "BfIs");
      /* harmony import */


      var _Out_frame_game_version_game_version_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./_Out-frame/game-version/game-version.component */
      "AjEq");
      /* harmony import */


      var _Out_frame_sidenav_user_sidenav_user_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ./_Out-frame/sidenav-user/sidenav-user.component */
      "x1GA");
      /* harmony import */


      var _dev_lang_dev_lang_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ./dev-lang/dev-lang.component */
      "+KV0");
      /* harmony import */


      var _object_returns_object_returns_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ./object-returns/object-returns.component */
      "wQSC");
      /* harmony import */


      var _mod_all_mod_all_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ./mod-all/mod-all.component */
      "aGzc");
      /* harmony import */


      var _mob_card_mob_card_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ./mob-card/mob-card.component */
      "OqfT");
      /* harmony import */


      var _mob_drops_mob_drops_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ./mob-drops/mob-drops.component */
      "J8JK");
      /* harmony import */


      var _item_all_item_all_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! ./item-all/item-all.component */
      "C49S");
      /* harmony import */


      var _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ./item-card/item-card.component */
      "OFCy");
      /* harmony import */


      var _Loot_RetaliationChest_loot_retaliation_chest_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! ./_Loot/RetaliationChest/loot-retaliation-chest.component */
      "vYoZ");
      /* harmony import */


      var _Loot_EasterEggs_loot_eastereggs_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! ./_Loot/EasterEggs/loot-eastereggs.component */
      "q2/b");
      /* harmony import */


      var _Loot_SunkenTreasure_loot_sunkentreasure_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! ./_Loot/SunkenTreasure/loot-sunkentreasure.component */
      "+Bt9");
      /* harmony import */


      var _Loot_DeathDeal_loot_deathdeal_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! ./_Loot/DeathDeal/loot-deathdeal.component */
      "lFFA");
      /* harmony import */


      var _Loot_Presents_loot_presents_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! ./_Loot/Presents/loot-presents.component */
      "p4Yc");
      /* harmony import */


      var _Loot_Present_loot_present_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! ./_Loot/Present/loot-present.component */
      "9hmh");
      /* harmony import */


      var _Loot_HuntingReward_loot_hunting_reward_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! ./_Loot/HuntingReward/loot-hunting-reward.component */
      "tvyB");
      /* harmony import */


      var _object_returns_muliti_object_returns_muliti_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! ./object-returns-muliti/object-returns-muliti.component */
      "yVgE");
      /* harmony import */


      var _Loot_rose_chest_rose_chest_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! ./_Loot/rose-chest/rose-chest.component */
      "a19F");
      /* harmony import */


      var _Loot_valentines_present_valentines_present_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! ./_Loot/valentines-present/valentines-present.component */
      "6feG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "8sFK");

      var AppModule = /*@__PURE__*/function () {
        var AppModule = function AppModule() {
          _classCallCheck(this, AppModule);
        };

        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
          type: AppModule,
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          providers: [{
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__["UrlSerializer"],
            useClass: _modules_lower_case_url_serializer_module__WEBPACK_IMPORTED_MODULE_9__["LowerCaseUrlSerializer"]
          }, _app_initialize_service__WEBPACK_IMPORTED_MODULE_10__["AppInitializeService"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_5__["APP_INITIALIZER"],
            useFactory: function useFactory(App_Initialize) {
              return function () {
                return App_Initialize.start();
              };
            },
            deps: [_app_initialize_service__WEBPACK_IMPORTED_MODULE_10__["AppInitializeService"]],
            multi: true
          }],
          imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltipModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"]]]
        });
        return AppModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _Out_frame_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_31__["ToolbarComponent"], _capitalize_pipe__WEBPACK_IMPORTED_MODULE_32__["CapitalizePipe"], _Out_frame_main_main_component__WEBPACK_IMPORTED_MODULE_33__["MainComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_34__["ItemComponent"], _mob_mob_component__WEBPACK_IMPORTED_MODULE_35__["MobComponent"], _npc_npc_component__WEBPACK_IMPORTED_MODULE_36__["NpcComponent"], _pet_pet_component__WEBPACK_IMPORTED_MODULE_37__["PetComponent"], _spell_spell_component__WEBPACK_IMPORTED_MODULE_38__["SpellComponent"], _arrow_arrow_component__WEBPACK_IMPORTED_MODULE_39__["ArrowComponent"], _Out_frame_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_40__["PageNotFoundComponent"], _cl_cl_component__WEBPACK_IMPORTED_MODULE_41__["ClComponent"], _Quests_kill_quest_kill_quest_component__WEBPACK_IMPORTED_MODULE_42__["KillQuestComponent"], _Quests_party_quest_party_quest_component__WEBPACK_IMPORTED_MODULE_43__["PartyQuestComponent"], _Quests_skill_quest_skill_quest_component__WEBPACK_IMPORTED_MODULE_46__["SkillQuestComponent"], _app_component__WEBPACK_IMPORTED_MODULE_12__["DialogComponent"], _Out_frame_language_language_component__WEBPACK_IMPORTED_MODULE_47__["LanguageComponent"], _Out_frame_sidenav_menu_sidenav_menu_component__WEBPACK_IMPORTED_MODULE_48__["SidenavMenuComponent"], _Out_frame_game_version_game_version_component__WEBPACK_IMPORTED_MODULE_49__["GameVersionComponent"], _Out_frame_sidenav_user_sidenav_user_component__WEBPACK_IMPORTED_MODULE_50__["SidenavUserComponent"], _Quests_party_quest_kill_party_quest_kill_component__WEBPACK_IMPORTED_MODULE_45__["PartyQuestKillComponent"], _Quests_party_quest_mobs_party_quest_mobs_component__WEBPACK_IMPORTED_MODULE_44__["PartyQuestMobsComponent"], _dev_lang_dev_lang_component__WEBPACK_IMPORTED_MODULE_51__["DevLangComponent"], _object_returns_object_returns_component__WEBPACK_IMPORTED_MODULE_52__["ObjectReturnsComponent"], _mod_all_mod_all_component__WEBPACK_IMPORTED_MODULE_53__["ModAllComponent"], _mob_card_mob_card_component__WEBPACK_IMPORTED_MODULE_54__["MobCardComponent"], _mob_drops_mob_drops_component__WEBPACK_IMPORTED_MODULE_55__["MobDropsComponent"], _item_all_item_all_component__WEBPACK_IMPORTED_MODULE_56__["ItemAllComponent"], _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_57__["ItemCardComponent"], _Loot_RetaliationChest_loot_retaliation_chest_component__WEBPACK_IMPORTED_MODULE_58__["LootRetaliationChestComponent"], _Loot_EasterEggs_loot_eastereggs_component__WEBPACK_IMPORTED_MODULE_59__["LootEastereggsComponent"], _Loot_SunkenTreasure_loot_sunkentreasure_component__WEBPACK_IMPORTED_MODULE_60__["LootSunkentreasureComponent"], _Loot_DeathDeal_loot_deathdeal_component__WEBPACK_IMPORTED_MODULE_61__["LootDeathdealComponent"], _Loot_Presents_loot_presents_component__WEBPACK_IMPORTED_MODULE_62__["LootPresentsComponent"], _Loot_Present_loot_present_component__WEBPACK_IMPORTED_MODULE_63__["LootPresentComponent"], _Loot_HuntingReward_loot_hunting_reward_component__WEBPACK_IMPORTED_MODULE_64__["LootHuntingRewardComponent"], _object_returns_muliti_object_returns_muliti_component__WEBPACK_IMPORTED_MODULE_65__["ObjectReturnsMulitiComponent"], _Loot_rose_chest_rose_chest_component__WEBPACK_IMPORTED_MODULE_66__["RoseChestComponent"], _Loot_valentines_present_valentines_present_component__WEBPACK_IMPORTED_MODULE_67__["ValentinesPresentComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltipModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"]]
        });
      })();

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_68__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["NgPluralCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_router_router_l"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollable"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDragHandle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDragPreview"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDragPlaceholder"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_69__["Dir"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualForOf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTable"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCellOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["DataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["HeaderRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["FooterRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTextColumn"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkNoDataRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["NoDataRowOutlet"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkNestedTreeNode"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeNodePadding"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeNodeToggle"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTree"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeNode"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeNodeOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormArrayName"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatAnchor"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__["MatToolbarRow"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListAvatarCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_70__["MatLine"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListIconCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListSubheaderCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_70__["MatPseudoCheckbox"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListOption"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_71__["MatDivider"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxRequiredValidator"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggle"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltip"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["TooltipComponent"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_72__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_72__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatTextareaAutosize"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardAvatar"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatDrawer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatDrawerContent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenav"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogActions"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatNoDataRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTextColumn"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__["MatSort"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__["MatSortHeader"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabContent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipInput"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipRemove"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipAvatar"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipTrailingIcon"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_70__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_70__["MatOptgroup"], _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _Out_frame_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_31__["ToolbarComponent"], _Out_frame_main_main_component__WEBPACK_IMPORTED_MODULE_33__["MainComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_34__["ItemComponent"], _mob_mob_component__WEBPACK_IMPORTED_MODULE_35__["MobComponent"], _npc_npc_component__WEBPACK_IMPORTED_MODULE_36__["NpcComponent"], _pet_pet_component__WEBPACK_IMPORTED_MODULE_37__["PetComponent"], _spell_spell_component__WEBPACK_IMPORTED_MODULE_38__["SpellComponent"], _arrow_arrow_component__WEBPACK_IMPORTED_MODULE_39__["ArrowComponent"], _Out_frame_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_40__["PageNotFoundComponent"], _cl_cl_component__WEBPACK_IMPORTED_MODULE_41__["ClComponent"], _Quests_kill_quest_kill_quest_component__WEBPACK_IMPORTED_MODULE_42__["KillQuestComponent"], _Quests_party_quest_party_quest_component__WEBPACK_IMPORTED_MODULE_43__["PartyQuestComponent"], _Quests_skill_quest_skill_quest_component__WEBPACK_IMPORTED_MODULE_46__["SkillQuestComponent"], _app_component__WEBPACK_IMPORTED_MODULE_12__["DialogComponent"], _Out_frame_language_language_component__WEBPACK_IMPORTED_MODULE_47__["LanguageComponent"], _Out_frame_sidenav_menu_sidenav_menu_component__WEBPACK_IMPORTED_MODULE_48__["SidenavMenuComponent"], _Out_frame_game_version_game_version_component__WEBPACK_IMPORTED_MODULE_49__["GameVersionComponent"], _Out_frame_sidenav_user_sidenav_user_component__WEBPACK_IMPORTED_MODULE_50__["SidenavUserComponent"], _Quests_party_quest_kill_party_quest_kill_component__WEBPACK_IMPORTED_MODULE_45__["PartyQuestKillComponent"], _Quests_party_quest_mobs_party_quest_mobs_component__WEBPACK_IMPORTED_MODULE_44__["PartyQuestMobsComponent"], _dev_lang_dev_lang_component__WEBPACK_IMPORTED_MODULE_51__["DevLangComponent"], _object_returns_object_returns_component__WEBPACK_IMPORTED_MODULE_52__["ObjectReturnsComponent"], _mod_all_mod_all_component__WEBPACK_IMPORTED_MODULE_53__["ModAllComponent"], _mob_card_mob_card_component__WEBPACK_IMPORTED_MODULE_54__["MobCardComponent"], _mob_drops_mob_drops_component__WEBPACK_IMPORTED_MODULE_55__["MobDropsComponent"], _item_all_item_all_component__WEBPACK_IMPORTED_MODULE_56__["ItemAllComponent"], _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_57__["ItemCardComponent"], _Loot_RetaliationChest_loot_retaliation_chest_component__WEBPACK_IMPORTED_MODULE_58__["LootRetaliationChestComponent"], _Loot_EasterEggs_loot_eastereggs_component__WEBPACK_IMPORTED_MODULE_59__["LootEastereggsComponent"], _Loot_SunkenTreasure_loot_sunkentreasure_component__WEBPACK_IMPORTED_MODULE_60__["LootSunkentreasureComponent"], _Loot_DeathDeal_loot_deathdeal_component__WEBPACK_IMPORTED_MODULE_61__["LootDeathdealComponent"], _Loot_Presents_loot_presents_component__WEBPACK_IMPORTED_MODULE_62__["LootPresentsComponent"], _Loot_Present_loot_present_component__WEBPACK_IMPORTED_MODULE_63__["LootPresentComponent"], _Loot_HuntingReward_loot_hunting_reward_component__WEBPACK_IMPORTED_MODULE_64__["LootHuntingRewardComponent"], _object_returns_muliti_object_returns_muliti_component__WEBPACK_IMPORTED_MODULE_65__["ObjectReturnsMulitiComponent"], _Loot_rose_chest_rose_chest_component__WEBPACK_IMPORTED_MODULE_66__["RoseChestComponent"], _Loot_valentines_present_valentines_present_component__WEBPACK_IMPORTED_MODULE_67__["ValentinesPresentComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_68__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_68__["KeyValuePipe"], _capitalize_pipe__WEBPACK_IMPORTED_MODULE_32__["CapitalizePipe"]]);
      /***/

    },

    /***/
    "ZRPN":
    /*!************************************!*\
      !*** ./src/app/browser.service.ts ***!
      \************************************/

    /*! exports provided: BrowserService */

    /***/
    function ZRPN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrowserService", function () {
        return BrowserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var BrowserService = /*@__PURE__*/function () {
        var BrowserService = /*#__PURE__*/function () {
          function BrowserService() {
            _classCallCheck(this, BrowserService);
          }

          _createClass(BrowserService, [{
            key: "scrollTop",
            value: function scrollTop() {
              document.querySelector('.mat-drawer-content').scrollTop = 0;
            }
          }]);

          return BrowserService;
        }();

        BrowserService.ɵfac = function BrowserService_Factory(t) {
          return new (t || BrowserService)();
        };

        BrowserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: BrowserService,
          factory: BrowserService.ɵfac,
          providedIn: 'root'
        });
        return BrowserService;
      }();
      /***/

    },

    /***/
    "ZRwu":
    /*!*************************************************************!*\
      !*** ./src/app/modules/lower-case-url-serializer.module.ts ***!
      \*************************************************************/

    /*! exports provided: LowerCaseUrlSerializer */

    /***/
    function ZRwu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LowerCaseUrlSerializer", function () {
        return LowerCaseUrlSerializer;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var LowerCaseUrlSerializer = /*@__PURE__*/function () {
        var LowerCaseUrlSerializer = /*#__PURE__*/function (_angular_router__WEBP) {
          _inherits(LowerCaseUrlSerializer, _angular_router__WEBP);

          var _super = _createSuper(LowerCaseUrlSerializer);

          function LowerCaseUrlSerializer() {
            _classCallCheck(this, LowerCaseUrlSerializer);

            return _super.apply(this, arguments);
          }

          _createClass(LowerCaseUrlSerializer, [{
            key: "parse",
            value: function parse(url) {
              return _get(_getPrototypeOf(LowerCaseUrlSerializer.prototype), "parse", this).call(this, url.toLowerCase());
            }
          }]);

          return LowerCaseUrlSerializer;
        }(_angular_router__WEBPACK_IMPORTED_MODULE_0__["DefaultUrlSerializer"]);

        LowerCaseUrlSerializer.ɵfac = function LowerCaseUrlSerializer_Factory(t) {
          return ɵLowerCaseUrlSerializer_BaseFactory(t || LowerCaseUrlSerializer);
        };

        LowerCaseUrlSerializer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: LowerCaseUrlSerializer,
          factory: LowerCaseUrlSerializer.ɵfac
        });
        return LowerCaseUrlSerializer;
      }();

      var ɵLowerCaseUrlSerializer_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](LowerCaseUrlSerializer);
      /***/

    },

    /***/
    "ZfIV":
    /*!****************************************!*\
      !*** ./src/app/item/item.component.ts ***!
      \****************************************/

    /*! exports provided: ItemComponent */

    /***/
    function ZfIV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemComponent", function () {
        return ItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../language.service */
      "y91y");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../wiki.service */
      "uUtE");
      /* harmony import */


      var _item_all_item_all_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../item-all/item-all.component */
      "C49S");

      function ItemComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function ItemComponent_ng_template_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.lang.getString(ctx_r6.wiki.item_base[ctx_r6.id].name));
        }
      }

      function ItemComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemComponent_ng_template_1_ng_container_1_Template, 3, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lang.settingLang.value !== "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.wiki.item_base[ctx_r2.id].name, " ");
        }
      }

      function ItemComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function ItemComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-item-all");
        }
      }

      var ItemComponent = /*@__PURE__*/function () {
        var ItemComponent = /*#__PURE__*/function () {
          function ItemComponent(location, router, route, lang, wiki) {
            _classCallCheck(this, ItemComponent);

            this.location = location;
            this.router = router;
            this.route = route;
            this.lang = lang;
            this.wiki = wiki;
            this.id = -1;
          }

          _createClass(ItemComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this29 = this;

              this.routeParse();
              this.navigationSubscription = this.router.events.subscribe(function (event) {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                  _this29.routeParse();
                }
              });
            }
          }, {
            key: "routeParse",
            value: function routeParse() {
              var _id = this.route.snapshot.queryParams.i;
              _id = _id ? parseInt(_id, 0) : -1;
              _id = !(isNaN(_id) || _id < 0 || _id > this.wiki.item_base.length - 1) ? _id : -1;
              var _tab = this.route.snapshot.queryParams.p;
              _tab = _tab ? parseInt(_tab, 0) : 0;
              _tab = !(isNaN(_tab) || _tab < 0 || _tab > 3) ? _tab : 0;
              this.setUrl(_id, _tab);
            }
          }, {
            key: "setUrl",
            value: function setUrl(id, page) {
              this.id = id;
              this.page = page;
              var url = '/item';
              url += this.id === -1 ? '' : '?i=' + id + '&p=' + page;
              this.location.replaceState(url);
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.navigationSubscription.unsubscribe();
            }
          }]);

          return ItemComponent;
        }();

        ItemComponent.ɵfac = function ItemComponent_Factory(t) {
          return new (t || ItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_4__["WikiService"]));
        };

        ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ItemComponent,
          selectors: [["app-item"]],
          decls: 6,
          vars: 4,
          consts: [[4, "ngIf", "ngIfThen"], ["bool2", ""], ["bool1", ""], [4, "ngIf"]],
          template: function ItemComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ItemComponent_ng_container_0_Template, 1, 0, "ng-container", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ItemComponent_ng_container_3_Template, 1, 0, "ng-container", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ItemComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }

            if (rf & 2) {
              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.id !== -1)("ngIfThen", _r1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.id === -1)("ngIfThen", _r4);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _item_all_item_all_component__WEBPACK_IMPORTED_MODULE_5__["ItemAllComponent"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIn0= */"]
        });
        return ItemComponent;
      }();
      /***/

    },

    /***/
    "a19F":
    /*!**********************************************************!*\
      !*** ./src/app/_Loot/rose-chest/rose-chest.component.ts ***!
      \**********************************************************/

    /*! exports provided: RoseChestComponent */

    /***/
    function a19F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoseChestComponent", function () {
        return RoseChestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../language.service */
      "y91y");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../wiki.service */
      "uUtE");
      /* harmony import */


      var _browser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../browser.service */
      "ZRPN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _object_returns_object_returns_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../object-returns/object-returns.component */
      "wQSC");

      function RoseChestComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-tab", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", ctx_r1.lang.getString(ctx_r1.wiki.item_base[item_r2].name));
        }
      }

      var RoseChestComponent = /*@__PURE__*/function () {
        var RoseChestComponent = /*#__PURE__*/function () {
          function RoseChestComponent(lang, wiki, browser, location, route, router) {
            _classCallCheck(this, RoseChestComponent);

            this.lang = lang;
            this.wiki = wiki;
            this.browser = browser;
            this.location = location;
            this.route = route;
            this.router = router;
            this.ids = [3853, 3854, 3849];
            this.grades = ['common', 'rare', 'legendary'];
            this.id = 3849;
            this.tab = 2;
          }

          _createClass(RoseChestComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this30 = this;

              this.routeParse();
              this.navigationSubscription = this.router.events.subscribe(function (event) {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                  _this30.routeParse();
                }
              });
            }
          }, {
            key: "setTabIndex",
            value: function setTabIndex(e) {
              this.id = this.ids[e];
              this.setUrl(e);
              this.browser.scrollTop();
            }
          }, {
            key: "setUrl",
            value: function setUrl(index) {
              this.location.replaceState('/rose-chest/' + this.grades[index]);
              this.browser.scrollTop();
            }
          }, {
            key: "routeParse",
            value: function routeParse() {
              var grade = this.route.snapshot.paramMap.get('grade');

              if (grade) {
                grade = grade.toLowerCase();
              }

              var index = this.grades.indexOf(grade);
              index = index === -1 ? 2 : index;
              this.tab = index;
              this.id = this.ids[index];
              this.setUrl(index);
            }
          }, {
            key: "ngAfterViewChecked",
            value: function ngAfterViewChecked() {
              var _this31 = this;

              setTimeout(function () {
                var object1 = document.querySelectorAll('.sticky');
                var h1;
                object1.forEach(function (e) {
                  h1 = e.offsetHeight;
                });
                _this31.stickyTop = h1;
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.navigationSubscription.unsubscribe();
            }
          }]);

          return RoseChestComponent;
        }();

        RoseChestComponent.ɵfac = function RoseChestComponent_Factory(t) {
          return new (t || RoseChestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_3__["WikiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_browser_service__WEBPACK_IMPORTED_MODULE_4__["BrowserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
        };

        RoseChestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: RoseChestComponent,
          selectors: [["app-rose-chest"]],
          hostAttrs: [1, "route-app"],
          decls: 5,
          vars: 5,
          consts: [[1, "flex-v-center"], ["mat-align-tabs", "start", "animationDuration", "0ms", 1, "tab-custom-overflow", "sticky", 2, "width", "100%", 3, "selectedIndex", "selectedIndexChange"], ["tabs", ""], [4, "ngFor", "ngForOf"], [3, "objectID", "stickyTop", "baseType"], [3, "label"]],
          template: function RoseChestComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 1, 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function RoseChestComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
                return ctx.setTabIndex($event);
              })("selectedIndexChange", function RoseChestComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
                return ctx.tab = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RoseChestComponent_ng_container_3_Template, 2, 1, "ng-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-object-returns", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.tab);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ids);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("objectID", ctx.id)("stickyTop", ctx.stickyTop)("baseType", "item");
            }
          },
          directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _object_returns_object_returns_component__WEBPACK_IMPORTED_MODULE_7__["ObjectReturnsComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19Mb290L3Jvc2UtY2hlc3Qvcm9zZS1jaGVzdC5jb21wb25lbnQuY3NzIn0= */"]
        });
        return RoseChestComponent;
      }();
      /***/

    },

    /***/
    "aGzc":
    /*!**********************************************!*\
      !*** ./src/app/mod-all/mod-all.component.ts ***!
      \**********************************************/

    /*! exports provided: ModAllComponent */

    /***/
    function aGzc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModAllComponent", function () {
        return ModAllComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sort */
      "LUZP");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../wiki.service */
      "uUtE");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../language.service */
      "y91y");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function ModAllComponent_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.translateLang.MOB.trans);
        }
      }

      function ModAllComponent_td_3_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", element_r22.imgObj.width + "px")("height", element_r22.imgObj.height + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin", element_r22.imgObj.offsetY + "px 0 0 " + element_r22.imgObj.offsetX + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", element_r22.imgObj.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          i: a0
        };
      };

      function ModAllComponent_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModAllComponent_td_3_div_2_Template, 2, 7, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, element_r22.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r22.imgObj);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r22.name, " ");
        }
      }

      function ModAllComponent_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModAllComponent_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r25.cl, "1."));
        }
      }

      function ModAllComponent_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.translateLang.HP.trans);
        }
      }

      function ModAllComponent_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r26.health, "1."));
        }
      }

      function ModAllComponent_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.translateLang.ACC.trans);
        }
      }

      function ModAllComponent_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r27.accuracy, "1."));
        }
      }

      function ModAllComponent_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.translateLang.STR.trans);
        }
      }

      function ModAllComponent_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r28.strength, "1."));
        }
      }

      function ModAllComponent_th_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.translateLang.DEF.trans);
        }
      }

      function ModAllComponent_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r29.defense, "1."));
        }
      }

      function ModAllComponent_th_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.translateLang["Melee Block"].trans);
        }
      }

      function ModAllComponent_td_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", element_r30.melee_block, "", element_r30.melee_block ? "%" : "", "");
        }
      }

      function ModAllComponent_th_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.translateLang["Magic Block"].trans);
        }
      }

      function ModAllComponent_td_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", element_r31.magic_block, "", element_r31.magic_block ? "%" : "", "");
        }
      }

      function ModAllComponent_th_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.translateLang["Archery Block"].trans);
        }
      }

      function ModAllComponent_td_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", element_r32.archery_block, "", element_r32.archery_block ? "%" : "", "");
        }
      }

      function ModAllComponent_th_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.translateLang["Attack Mode"].trans);
        }
      }

      function ModAllComponent_td_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r33 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r33.aggressive ? ctx_r19.translateLang.Aggressive.trans : ctx_r19.translateLang.Passive.trans, "");
        }
      }

      function ModAllComponent_tr_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
        }
      }

      function ModAllComponent_tr_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
        }
      }

      var ModAllComponent = /*@__PURE__*/function () {
        var ModAllComponent = /*#__PURE__*/function () {
          // private image: ImageService,
          function ModAllComponent(wiki, lang) {
            _classCallCheck(this, ModAllComponent);

            this.wiki = wiki;
            this.lang = lang;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
            this.translateLang = {
              MOB: {
                trans: '',
                "class": 'm'
              },
              HP: {
                trans: '',
                "class": 'w'
              },
              ACC: {
                trans: '',
                "class": 'w'
              },
              STR: {
                trans: '',
                "class": 'w'
              },
              DEF: {
                trans: '',
                "class": 'w'
              },
              'Melee Block': {
                trans: '',
                "class": 'w'
              },
              'Magic Block': {
                trans: '',
                "class": 'w'
              },
              'Archery Block': {
                trans: '',
                "class": 'w'
              },
              'Attack Mode': {
                trans: '',
                "class": 'w'
              },
              Aggressive: {
                trans: '',
                "class": 'm'
              },
              Passive: {
                trans: '',
                "class": 'm'
              }
            };
            this.displayedColumns = ['name', 'cl', 'health', 'accuracy', 'strength', 'defense', 'melee_block', 'magic_block', 'archery_block', 'aggressive'];
          }

          _createClass(ModAllComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this32 = this;

              this.LanguageSubscription = this.lang.settingLang.subscribe(function (e) {
                _this32.onLangChange();
              });
              this.onInit();
            }
          }, {
            key: "onInit",
            value: function onInit() {
              this.getData();
              this.dataSource.sort = this.sort;
            }
          }, {
            key: "getData",
            value: function getData() {
              for (var key in this.wiki.npc_base) {
                if (this.wiki.npc_base.hasOwnProperty(key)) {
                  var element = this.wiki.npc_base[key];

                  if (element.type === 3) {
                    var obj = void 0;
                    obj = {};
                    obj.id = key; // obj.imgObj = this.image.getImgBackGround(element.img);

                    obj.name_en = element.name;
                    obj.name = this.lang.getString(element.name);
                    obj.cl = element.params.combat_level;
                    obj.health = element.temp.health;
                    obj.accuracy = element.temp.total_accuracy;
                    obj.strength = element.temp.total_strength;
                    obj.defense = element.temp.total_defense;
                    obj.melee_block = element.temp.melee_block;
                    obj.magic_block = element.temp.magic_block;
                    obj.archery_block = element.temp.archery_block;
                    obj.magic = element.temp.magic;
                    obj.magics = element.temp.magics;
                    obj.aggressive = element.params.aggressive;
                    obj.drops = element.params.drops;
                    obj.in_dungeon = element.params.in_dungeon;
                    obj.random_respawn = element.params.random_respawn;
                    obj.respawn_time = element.params.respawn_time;
                    obj.additional_xp = element.params.additional_xp;
                    this.dataSource.data.push(obj);
                  }
                }
              }
            }
          }, {
            key: "isNaN",
            value: function (_isNaN2) {
              function isNaN(_x6) {
                return _isNaN2.apply(this, arguments);
              }

              isNaN.toString = function () {
                return _isNaN2.toString();
              };

              return isNaN;
            }(function (num) {
              return isNaN(num);
            })
          }, {
            key: "onLangChange",
            value: function onLangChange() {
              for (var key in this.translateLang) {
                if (this.translateLang.hasOwnProperty(key)) {
                  this.translateLang[key].trans = this.lang.getString(key, this.translateLang[key]["class"]);
                }
              }

              for (var _key5 in this.dataSource.data) {
                if (this.dataSource.data.hasOwnProperty(_key5)) {
                  var element = this.dataSource.data[_key5];
                  element.name = this.lang.getString(element.name_en);
                }
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.LanguageSubscription.unsubscribe();
            }
          }]);

          return ModAllComponent;
        }();

        ModAllComponent.ɵfac = function ModAllComponent_Factory(t) {
          return new (t || ModAllComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_3__["WikiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"]));
        };

        ModAllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ModAllComponent,
          selectors: [["app-mod-all"]],
          viewQuery: function ModAllComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            }
          },
          decls: 33,
          vars: 4,
          consts: [["mat-table", "", "matSort", "", 1, "doc-table", "doc-table-info", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "left", 4, "matCellDef"], ["matColumnDef", "cl"], ["mat-cell", "", "class", "right", 4, "matCellDef"], ["matColumnDef", "health"], ["matColumnDef", "accuracy"], ["matColumnDef", "strength"], ["matColumnDef", "defense"], ["matColumnDef", "melee_block"], ["matColumnDef", "magic_block"], ["matColumnDef", "archery_block"], ["matColumnDef", "aggressive"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "left"], ["routerLink", "/mob", 3, "queryParams"], ["class", "test-img", 3, "width", "height", 4, "ngIf"], [1, "test-img"], [3, "src"], ["mat-cell", "", 1, "right"], ["mat-header-row", ""], ["mat-row", ""]],
          template: function ModAllComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModAllComponent_th_2_Template, 2, 1, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModAllComponent_td_3_Template, 4, 5, "td", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModAllComponent_th_5_Template, 2, 0, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ModAllComponent_td_6_Template, 3, 4, "td", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ModAllComponent_th_8_Template, 2, 1, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ModAllComponent_td_9_Template, 3, 4, "td", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ModAllComponent_th_11_Template, 2, 1, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ModAllComponent_td_12_Template, 3, 4, "td", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ModAllComponent_th_14_Template, 2, 1, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ModAllComponent_td_15_Template, 3, 4, "td", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ModAllComponent_th_17_Template, 2, 1, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ModAllComponent_td_18_Template, 3, 4, "td", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ModAllComponent_th_20_Template, 2, 1, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ModAllComponent_td_21_Template, 2, 2, "td", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ModAllComponent_th_23_Template, 2, 1, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ModAllComponent_td_24_Template, 2, 2, "td", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ModAllComponent_th_26_Template, 2, 1, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ModAllComponent_td_27_Template, 2, 2, "td", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ModAllComponent_th_29_Template, 2, 1, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ModAllComponent_td_30_Template, 2, 1, "td", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ModAllComponent_tr_31_Template, 1, 0, "tr", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ModAllComponent_tr_32_Template, 1, 0, "tr", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            }
          },
          directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]],
          styles: [".test-img[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kLWFsbC9tb2QtYWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tb2QtYWxsL21vZC1hbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXN0LWltZyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iXX0= */"]
        });
        return ModAllComponent;
      }();
      /***/

    },

    /***/
    "eE67":
    /*!***********************************************************************!*\
      !*** ./src/app/_Out-frame/page-not-found/page-not-found.component.ts ***!
      \***********************************************************************/

    /*! exports provided: PageNotFoundComponent */

    /***/
    function eE67(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
        return PageNotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../language.service */
      "y91y");

      var PageNotFoundComponent = /*@__PURE__*/function () {
        var PageNotFoundComponent = /*#__PURE__*/function () {
          function PageNotFoundComponent(language) {
            _classCallCheck(this, PageNotFoundComponent);

            this.language = language;
            this.translateLang = {
              'Page Not Found.': {
                trans: '',
                "class": 'w'
              }
            };
          }

          _createClass(PageNotFoundComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this33 = this;

              this.subscription = this.language.settingLang.subscribe(function (e) {
                _this33.onLangChange();
              });
            }
          }, {
            key: "onLangChange",
            value: function onLangChange() {
              for (var key in this.translateLang) {
                if (this.translateLang.hasOwnProperty(key)) {
                  this.translateLang[key].trans = this.language.getString(key, this.translateLang[key]["class"]);
                }
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.subscription.unsubscribe();
            }
          }]);

          return PageNotFoundComponent;
        }();

        PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
          return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_1__["LanguageService"]));
        };

        PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: PageNotFoundComponent,
          selectors: [["app-page-not-found"]],
          decls: 3,
          vars: 1,
          consts: [[2, "font-size", "24px", "font-weight", "700"], [1, "fas", "fa-exclamation-triangle", 2, "color", "#f44336", "margin-right", "6px"]],
          template: function PageNotFoundComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.translateLang["Page Not Found."].trans, "\n");
            }
          },
          encapsulation: 2
        });
        return PageNotFoundComponent;
      }();
      /***/

    },

    /***/
    "gI/T":
    /*!**************************************************************!*\
      !*** ./src/app/_Quests/party-quest/party-quest.component.ts ***!
      \**************************************************************/

    /*! exports provided: PartyQuestComponent */

    /***/
    function gIT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PartyQuestComponent", function () {
        return PartyQuestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../language.service */
      "y91y");
      /* harmony import */


      var _party_quest_party_quest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../party-quest/party-quest.service */
      "BL1I");
      /* harmony import */


      var _highscore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../highscore.service */
      "8Rav");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../app.component */
      "Sy1n");
      /* harmony import */


      var _level_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../level.service */
      "BIPl");
      /* harmony import */


      var _browser_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../browser.service */
      "ZRPN");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "Ynp+");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _party_quest_kill_party_quest_kill_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../party-quest-kill/party-quest-kill.component */
      "/s/1");
      /* harmony import */


      var _object_returns_object_returns_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../object-returns/object-returns.component */
      "wQSC");
      /* harmony import */


      var _party_quest_mobs_party_quest_mobs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../party-quest-mobs/party-quest-mobs.component */
      "y5ku");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");

      function PartyQuestComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-button-toggle", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r12 = ctx.$implicit;
          var i_r13 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.translateLang[item_r12].trans, " ");
        }
      }

      function PartyQuestComponent_ng_container_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function PartyQuestComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-party-quest-kill");
        }
      }

      function PartyQuestComponent_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function PartyQuestComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-object-returns", 14);
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("objectID", ctx_r8.objectID)("isDisplayEV", ctx_r8.objectID !== ctx_r8.foodchestId);
        }
      }

      function PartyQuestComponent_ng_container_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function PartyQuestComponent_ng_template_20_ng_container_16_tr_1_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
        }

        if (rf & 2) {
          var i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fas fa-sort-", ctx_r18.pq.players[i_r16 + 1].enabel === 2 ? "up" : "down", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r18.pq.players[i_r16 + 1].enabel === 2 ? "#F44336" : "#8bc34a");
        }
      }

      function PartyQuestComponent_ng_template_20_ng_container_16_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PartyQuestComponent_ng_template_20_ng_container_16_tr_1_span_3_Template, 1, 5, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PartyQuestComponent_ng_template_20_ng_container_16_tr_1_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.pq.players[i_r16 + 1].level = $event;
          })("input", function PartyQuestComponent_ng_template_20_ng_container_16_tr_1_Template_input_input_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r23.pq.onPlayersChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.pq.players[i_r16 + 1].enabel !== 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r17.translateLang.Player.trans, " ", i_r16 + 2, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.pq.players[i_r16 + 1].level);
        }
      }

      function PartyQuestComponent_ng_template_20_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PartyQuestComponent_ng_template_20_ng_container_16_tr_1_Template, 6, 4, "tr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r16 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r16 !== 3);
        }
      }

      function PartyQuestComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-party-quest-mobs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PartyQuestComponent_ng_template_20_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.pq.players[0].level = $event;
          })("input", function PartyQuestComponent_ng_template_20_Template_input_input_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.pq.onPlayersChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PartyQuestComponent_ng_template_20_ng_container_16_Template, 2, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-checkbox", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PartyQuestComponent_ng_template_20_Template_mat_checkbox_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.pq.onlygreen = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Generated Only");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PartyQuestComponent_ng_template_20_Template_a_click_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.showInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "[?] \u8AAA\u660E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.translateLang.Host.trans, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.pq.players[0].level);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r11.pq.level.lowwerLimit, " ~ ", ctx_r11.pq.level.upperLimit, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.pq.players);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.translateLang["Melee Block"].trans, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.translateLang["Magic Block"].trans, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.pq.onlygreen);
        }
      }

      var PartyQuestComponent = /*@__PURE__*/function () {
        var PartyQuestComponent = /*#__PURE__*/function () {
          function PartyQuestComponent(location, router, route, language, pq, hs, app, level, browser) {
            _classCallCheck(this, PartyQuestComponent);

            this.location = location;
            this.router = router;
            this.route = route;
            this.language = language;
            this.pq = pq;
            this.hs = hs;
            this.app = app;
            this.level = level;
            this.browser = browser;
            this.objectID = 0;
            this.chestId = [443, 444, 445, 657];
            this.foodchestId = 446;
            this.pq_difficulty = '3';
            this.pq_tabIndex = 0;
            this.translateLang = {
              Difficulty: {
                trans: '',
                "class": 'i'
              },
              Host: {
                trans: '',
                "class": 'w'
              },
              Player: {
                trans: '',
                "class": 'i'
              },
              'Rewards in Kill': {
                trans: '',
                "class": 'w'
              },
              'Rewards in Search': {
                trans: '',
                "class": 'w'
              },
              'Mobs on Duty': {
                trans: '',
                "class": 'w'
              },
              'Food Chest': {
                trans: '',
                "class": 'n'
              },
              'Melee Block': {
                trans: '',
                "class": 'm'
              },
              'Magic Block': {
                trans: '',
                "class": 'm'
              }
            };
            this.difficulty_names = [];
          }

          _createClass(PartyQuestComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this34 = this;

              this.loadDifficulty();
              this.pq_tabIndex = localStorage.pq_tabIndex ? parseInt(localStorage.pq_tabIndex, 0) : 0;
              this.pq_difficulty = localStorage.pq_difficulty !== undefined ? localStorage.pq_difficulty : this.difficulty_names.length - 1;
              this.routeParse();
              this.HighscoreSubscription = this.hs.mainStats.subscribe(function (e) {
                _this34.pq.onStatsChange();
              });
              this.LanguageSubscription = this.language.settingLang.subscribe(function (e) {
                _this34.onLangChange();
              });
              this.pq_diff_Subscription = this.pq.difficulty.subscribe(function (e) {});
              this.navigationSubscription = this.router.events.subscribe(function (event) {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                  _this34.routeParse();
                }
              });
            }
          }, {
            key: "ngAfterViewChecked",
            value: function ngAfterViewChecked() {
              var _this35 = this;

              setTimeout(function () {
                var object0 = document.querySelectorAll('.options-container');
                var h0;
                object0.forEach(function (e) {
                  h0 = e.offsetHeight;
                });
                var object1 = document.querySelectorAll('.tab-sticky');
                var h1;
                object1.forEach(function (e) {
                  e.style.top = h0 + 'px';
                  h1 = e.offsetHeight + h0;
                });
                var object2 = document.querySelectorAll('.mark3');
                object2.forEach(function (e) {
                  e.style.top = h1 + 'px';
                });
                _this35.stickyTop = h1;
                var object = document.querySelectorAll('.mat-header-cell');
                object.forEach(function (e) {
                  e.style.top = _this35.stickyTop + 'px';
                });
              });
            }
          }, {
            key: "loadDifficulty",
            value: function loadDifficulty() {
              for (var key in PartyQuests.difficulty_names) {
                if (PartyQuests.difficulty_names.hasOwnProperty(key)) {
                  var element = PartyQuests.difficulty_names[key];
                  this.difficulty_names.push(element);
                  this.translateLang[element] = {
                    trans: this.language.getString(element, 'i'),
                    "class": 'i'
                  };
                }
              }
            }
          }, {
            key: "difficultyChange",
            value: function difficultyChange() {
              this.setUrl(this.pq_difficulty, this.pq_tabIndex);

              if (this.pq_tabIndex === 1) {
                this.browser.scrollTop();
              }
            }
          }, {
            key: "setTabIndex",
            value: function setTabIndex(event) {
              this.browser.scrollTop();
              this.setUrl(this.pq.difficulty.value, event);
            }
          }, {
            key: "setUrl",
            value: function setUrl(diff, tab) {
              diff = parseInt(diff, 0);
              tab = parseInt(tab, 0);
              this.objectID = tab === 1 ? this.chestId[diff] : this.foodchestId;
              this.pq.difficulty.next(diff);
              localStorage.pq_tabIndex = this.pq_tabIndex = tab;
              localStorage.pq_difficulty = this.pq_difficulty = diff.toString();
              this.pq.onPlayersChange();
              var url = '/party-quest';
              url += '?d=' + diff;
              url += '&p=' + tab;
              this.location.replaceState(url);
            }
          }, {
            key: "routeParse",
            value: function routeParse() {
              var _diff = this.route.snapshot.queryParams.d;
              _diff = _diff ? _diff : localStorage.pq_difficulty;
              _diff = parseInt(_diff, 0);

              if (isNaN(_diff) || _diff < 0 || _diff > this.difficulty_names.length) {
                _diff = 3;
              }

              var _tab = this.route.snapshot.queryParams.p;
              _tab = _tab ? _tab : localStorage.pq_tabIndex;
              _tab = parseInt(_tab, 0);

              if (isNaN(_tab) || _tab < 0 || _tab > 3) {
                _tab = 0;
              }

              this.setUrl(_diff, _tab);
            }
          }, {
            key: "onLangChange",
            value: function onLangChange() {
              for (var key in this.translateLang) {
                if (this.translateLang.hasOwnProperty(key)) {
                  this.translateLang[key].trans = this.language.getString(key, this.translateLang[key]["class"]);
                }
              }
            }
          }, {
            key: "showInfo",
            value: function showInfo() {
              var str = "<p>\u623F\u4E3B(\u968A\u9577)\u7684CL\u6703\u5F71\u97FF\u5230\u7CFB\u7D71\u9810\u8A2D\u7684CL\u7BC4\u570D\uFF0C\u7BC4\u570D\u5728\u7B2C\u4E8C\u884C\u986F\u793A\u70BAA~B\u3002\u5728\u53F3\u5074\u8868\u55AE\u8F38\u5165\u4EFB\u4E00\u6578\u503C\uFF0C\u6703\u81EA\u52D5\u6539\u8B8A\u968A\u9577\u7684CL\uFF0C\u56E0\u70BA\u662F\u88AB\u7D81\u5B9A\u7684\u3002</p>\n    <p>\u602A\u7269\u7684\u7B49\u7D1A\u7BC4\u570D\u662F\u7531\u53C3\u52A0\u4EBA\u54E1\u7684CL\u505A\u52A0\u6B0A\u8A08\u7B97\u4F86\u7522\u751F\u7684</p>\n    <p>\u5728\u73A9\u5BB62~4\u8F38\u5165\u5404\u81EA\u7684CL\uFF0C\u5982\u679CCL&ltA\uFF0C\u5728\u8F38\u5165\u6B04\u524D\u65B9\u6703\u6709\u7DA0\u8272\u4E0B\u964D\u5716\u793A\uFF0C\u5728\u8A08\u7B97\u602A\u7269\u7684CL\u7BC4\u570D\u6642\u9019\u500BCL\u5C07\u4E0D\u88AB\u8003\u616E\uFF1B\u5982\u679CCL&gtB\uFF0C\u5728\u8F38\u5165\u6B04\u524D\u65B9\u6703\u6709\u7D05\u8272\u4E0A\u5347\u5716\u793A\uFF0C\u5728\u8A08\u7B97\u602A\u7269\u7684CL\u7BC4\u570D\u6642\u9019\u500BCL\u5C07\u88AB\u6703\u505A\u5169\u4EFD\u8A08\u7B97\u3002</p>\n    <p>\u602A\u7269\u5217\u8868\u4E2DCL\u6B04\uFF0C\u7DA0\u8272\u70BA\u6703\u51FA\u73FE\u7684\u602A\u7269\uFF0C\u7D05\u8272\u70BA\u4E0D\u88AB\u751F\u6210\u7684\u602A\u7269\uFF1B\u6700\u5927\u50B7\u5BB3\u6B04\u80CC\u666F\u986F\u793A\u70BA\u7D05\u8272\u8868\u793A\u6700\u5927\u50B7\u5BB3*3&gt=\u751F\u547D\u7B49\u7D1A(\u53F3\u5074\u7B49\u7D1A\u8F38\u5165\u8868\u55AE)</p>\n    ";
              this.app.showDialog(str, 500);
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.LanguageSubscription.unsubscribe();
              this.HighscoreSubscription.unsubscribe();
              this.pq_diff_Subscription.unsubscribe();
              this.navigationSubscription.unsubscribe();
            }
          }]);

          return PartyQuestComponent;
        }();

        PartyQuestComponent.ɵfac = function PartyQuestComponent_Factory(t) {
          return new (t || PartyQuestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_party_quest_party_quest_service__WEBPACK_IMPORTED_MODULE_4__["PartyQuestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_highscore_service__WEBPACK_IMPORTED_MODULE_5__["HighscoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_level_service__WEBPACK_IMPORTED_MODULE_7__["LevelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_browser_service__WEBPACK_IMPORTED_MODULE_8__["BrowserService"]));
        };

        PartyQuestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: PartyQuestComponent,
          selectors: [["app-party-quest"]],
          hostAttrs: [1, "route-app"],
          decls: 22,
          vars: 14,
          consts: [[1, "flex-v-center"], [1, "options-container", "sticky"], [2, "margin-right", "6px", "line-height", "1.5"], [1, "example-sticky-toggle-group", 3, "ngModel", "ngModelChange", "change"], ["gradeBtnGroup", "matButtonToggleGroup"], [4, "ngFor", "ngForOf"], ["animationDuration", "0ms", 1, "tab-custom-overflow", "sticky", "tab-sticky", 2, "width", "100%", 3, "selectedIndex", "selectedIndexChange"], ["tabs", ""], [3, "label"], [4, "ngIf", "ngIfThen"], ["bool0", ""], ["bool1", ""], ["bool2", ""], [3, "value"], [3, "objectID", "isDisplayEV"], [1, "flex-h-top"], [1, "mat-table", "input-table", "mark3", "sticky"], [1, "mat-row"], ["colspan", "2", 1, "center", "mat-cell", "info"], ["colspan", "2", 1, "right", "mat-cell"], [1, "input-label"], ["type", "number", "min", "0", "max", "300", "required", "", 3, "ngModel", "ngModelChange", "input"], [1, "mspot", "mspot-green", 2, "margin-right", "6px"], [1, "mspot", "mspot-red", 2, "margin-right", "6px"], [3, "ngModel", "ngModelChange"], [3, "click"], ["class", "mat-row", 4, "ngIf"], [3, "class", "color", 4, "ngIf"]],
          template: function PartyQuestComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-button-toggle-group", 3, 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PartyQuestComponent_Template_mat_button_toggle_group_ngModelChange_4_listener($event) {
                return ctx.pq_difficulty = $event;
              })("change", function PartyQuestComponent_Template_mat_button_toggle_group_change_4_listener() {
                return ctx.difficultyChange();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PartyQuestComponent_ng_container_6_Template, 3, 2, "ng-container", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab-group", 6, 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function PartyQuestComponent_Template_mat_tab_group_selectedIndexChange_7_listener($event) {
                return ctx.setTabIndex($event);
              })("selectedIndexChange", function PartyQuestComponent_Template_mat_tab_group_selectedIndexChange_7_listener($event) {
                return ctx.pq_tabIndex = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-tab", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-tab", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-tab", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-tab", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PartyQuestComponent_ng_container_13_Template, 1, 0, "ng-container", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PartyQuestComponent_ng_template_14_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PartyQuestComponent_ng_container_16_Template, 1, 0, "ng-container", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PartyQuestComponent_ng_template_17_Template, 1, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PartyQuestComponent_ng_container_19_Template, 1, 0, "ng-container", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PartyQuestComponent_ng_template_20_Template, 37, 8, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

              var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.translateLang.Difficulty.trans, ":");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pq_difficulty);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.difficulty_names);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.pq_tabIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", ctx.translateLang["Rewards in Kill"].trans);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", ctx.translateLang["Rewards in Search"].trans);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", ctx.translateLang["Mobs on Duty"].trans);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", ctx.translateLang["Food Chest"].trans);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pq_tabIndex === 0)("ngIfThen", _r4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pq_tabIndex === 1 || ctx.pq_tabIndex === 3)("ngIfThen", _r7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pq_tabIndex === 2)("ngIfThen", _r10);
            }
          },
          directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggle"], _party_quest_kill_party_quest_kill_component__WEBPACK_IMPORTED_MODULE_12__["PartyQuestKillComponent"], _object_returns_object_returns_component__WEBPACK_IMPORTED_MODULE_13__["ObjectReturnsComponent"], _party_quest_mobs_party_quest_mobs_component__WEBPACK_IMPORTED_MODULE_14__["PartyQuestMobsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"]],
          styles: [".sticky[_ngcontent-%COMP%] {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0px;\r\n  z-index: 100;\r\n  background-color: #121212;\r\n  white-space: nowrap;\r\n}\r\n\r\n.options-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n\r\n.tab-sticky[_ngcontent-%COMP%] {\r\n  top: 38px;\r\n}\r\n\r\n.input-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  background-color: #292929;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n  background-color: black !important;\r\n  color: #9cdcfe\r\n}\r\n\r\n.input-table[_ngcontent-%COMP%] {\r\n  margin-left: 6px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX1F1ZXN0cy9wYXJ0eS1xdWVzdC9wYXJ0eS1xdWVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEM7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL19RdWVzdHMvcGFydHktcXVlc3QvcGFydHktcXVlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGlja3kge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwcHg7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLm9wdGlvbnMtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWItc3RpY2t5IHtcclxuICB0b3A6IDM4cHg7XHJcbn1cclxuXHJcbi5pbnB1dC10YWJsZSB0ZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM5Y2RjZmVcclxufVxyXG5cclxuLmlucHV0LXRhYmxlIHtcclxuICBtYXJnaW4tbGVmdDogNnB4O1xyXG59XHJcbiJdfQ== */"]
        });
        return PartyQuestComponent;
      }();
      /***/

    },

    /***/
    "iOwe":
    /*!**************************************!*\
      !*** ./src/app/pet/pet.component.ts ***!
      \**************************************/

    /*! exports provided: PetComponent */

    /***/
    function iOwe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PetComponent", function () {
        return PetComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var PetComponent = /*@__PURE__*/function () {
        var PetComponent = /*#__PURE__*/function () {
          function PetComponent() {
            _classCallCheck(this, PetComponent);
          }

          _createClass(PetComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return PetComponent;
        }();

        PetComponent.ɵfac = function PetComponent_Factory(t) {
          return new (t || PetComponent)();
        };

        PetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: PetComponent,
          selectors: [["app-pet"]],
          decls: 2,
          vars: 0,
          template: function PetComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " pet works!\n");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BldC9wZXQuY29tcG9uZW50LmNzcyJ9 */"]
        });
        return PetComponent;
      }();
      /***/

    },

    /***/
    "lFFA":
    /*!*************************************************************!*\
      !*** ./src/app/_Loot/DeathDeal/loot-deathdeal.component.ts ***!
      \*************************************************************/

    /*! exports provided: LootDeathdealComponent */

    /***/
    function lFFA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LootDeathdealComponent", function () {
        return LootDeathdealComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _object_returns_object_returns_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../object-returns/object-returns.component */
      "wQSC");

      var LootDeathdealComponent = /*@__PURE__*/function () {
        var LootDeathdealComponent = /*#__PURE__*/function () {
          function LootDeathdealComponent() {
            _classCallCheck(this, LootDeathdealComponent);
          }

          _createClass(LootDeathdealComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return LootDeathdealComponent;
        }();

        LootDeathdealComponent.ɵfac = function LootDeathdealComponent_Factory(t) {
          return new (t || LootDeathdealComponent)();
        };

        LootDeathdealComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LootDeathdealComponent,
          selectors: [["app-loot-deathdeal"]],
          hostAttrs: [1, "route-app"],
          decls: 1,
          vars: 3,
          consts: [[3, "objectID", "baseType", "isDisplayName"]],
          template: function LootDeathdealComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-object-returns", 0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("objectID", 3333)("baseType", "item")("isDisplayName", true);
            }
          },
          directives: [_object_returns_object_returns_component__WEBPACK_IMPORTED_MODULE_1__["ObjectReturnsComponent"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19Mb290L0RlYXRoRGVhbC9sb290LWRlYXRoZGVhbC5jb21wb25lbnQuY3NzIn0= */"]
        });
        return LootDeathdealComponent;
      }();
      /***/

    },

    /***/
    "p4Yc":
    /*!***********************************************************!*\
      !*** ./src/app/_Loot/Presents/loot-presents.component.ts ***!
      \***********************************************************/

    /*! exports provided: LootPresentsComponent */

    /***/
    function p4Yc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LootPresentsComponent", function () {
        return LootPresentsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../language.service */
      "y91y");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../wiki.service */
      "uUtE");
      /* harmony import */


      var _browser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../browser.service */
      "ZRPN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _Present_loot_present_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Present/loot-present.component */
      "9hmh");

      function LootPresentsComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-tab", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", ctx_r1.lang.getString(ctx_r1.wiki.item_base[item_r2].name));
        }
      }

      var LootPresentsComponent = /*@__PURE__*/function () {
        var LootPresentsComponent = /*#__PURE__*/function () {
          function LootPresentsComponent(lang, wiki, browser, location, route, router) {
            _classCallCheck(this, LootPresentsComponent);

            this.lang = lang;
            this.wiki = wiki;
            this.browser = browser;
            this.location = location;
            this.route = route;
            this.router = router;
            this.ids = [764, 765, 766, 1149, 1160];
            this.grades = ['good', 'great', 'best', 'legendary', 'rare'];
            this.id = 1160;
            this.tab = 4;
          }

          _createClass(LootPresentsComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this36 = this;

              this.routeParse();
              this.navigationSubscription = this.router.events.subscribe(function (event) {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                  _this36.routeParse();
                }
              });
            }
          }, {
            key: "setTabIndex",
            value: function setTabIndex(e) {
              this.id = this.ids[e];
              this.setUrl(e);
              this.browser.scrollTop();
            }
          }, {
            key: "setUrl",
            value: function setUrl(index) {
              this.location.replaceState('/present/' + this.grades[index]);
              this.browser.scrollTop();
            }
          }, {
            key: "routeParse",
            value: function routeParse() {
              var grade = this.route.snapshot.paramMap.get('grade');

              if (grade) {
                grade = grade.toLowerCase();
              }

              var index = this.grades.indexOf(grade);
              index = index === -1 ? 4 : index;
              this.tab = index;
              this.id = this.ids[index];
              this.setUrl(index);
            }
          }, {
            key: "ngAfterViewChecked",
            value: function ngAfterViewChecked() {
              var _this37 = this;

              setTimeout(function () {
                var object1 = document.querySelectorAll('.sticky');
                var h1;
                object1.forEach(function (e) {
                  h1 = e.offsetHeight;
                });
                _this37.stickyTop = h1;
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.navigationSubscription.unsubscribe();
            }
          }]);

          return LootPresentsComponent;
        }();

        LootPresentsComponent.ɵfac = function LootPresentsComponent_Factory(t) {
          return new (t || LootPresentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_3__["WikiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_browser_service__WEBPACK_IMPORTED_MODULE_4__["BrowserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
        };

        LootPresentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LootPresentsComponent,
          selectors: [["app-loot-presents"]],
          hostAttrs: [1, "route-app"],
          decls: 5,
          vars: 4,
          consts: [[1, "flex-v-center"], ["mat-align-tabs", "start", "animationDuration", "0ms", 1, "tab-custom-overflow", "sticky", 2, "width", "100%", 3, "selectedIndex", "selectedIndexChange"], ["tabs", ""], [4, "ngFor", "ngForOf"], [3, "objectID", "stickyTop"], [3, "label"]],
          template: function LootPresentsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 1, 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function LootPresentsComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
                return ctx.setTabIndex($event);
              })("selectedIndexChange", function LootPresentsComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
                return ctx.tab = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LootPresentsComponent_ng_container_3_Template, 2, 1, "ng-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-loot-present", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.tab);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ids);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("objectID", ctx.id)("stickyTop", ctx.stickyTop);
            }
          },
          directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _Present_loot_present_component__WEBPACK_IMPORTED_MODULE_7__["LootPresentComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19Mb290L1ByZXNlbnRzL2xvb3QtcHJlc2VudHMuY29tcG9uZW50LmNzcyJ9 */"]
        });
        return LootPresentsComponent;
      }();
      /***/

    },

    /***/
    "q2/b":
    /*!***************************************************************!*\
      !*** ./src/app/_Loot/EasterEggs/loot-eastereggs.component.ts ***!
      \***************************************************************/

    /*! exports provided: LootEastereggsComponent */

    /***/
    function q2B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LootEastereggsComponent", function () {
        return LootEastereggsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../language.service */
      "y91y");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../wiki.service */
      "uUtE");
      /* harmony import */


      var _browser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../browser.service */
      "ZRPN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _object_returns_object_returns_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../object-returns/object-returns.component */
      "wQSC");

      function LootEastereggsComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-tab", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", ctx_r1.lang.getString(ctx_r1.wiki.item_base[item_r2].name));
        }
      }

      var LootEastereggsComponent = /*@__PURE__*/function () {
        var LootEastereggsComponent = /*#__PURE__*/function () {
          function LootEastereggsComponent(lang, wiki, browser, location, route, router) {
            _classCallCheck(this, LootEastereggsComponent);

            this.lang = lang;
            this.wiki = wiki;
            this.browser = browser;
            this.location = location;
            this.route = route;
            this.router = router;
            this.ids = [2030, 2031, 2032];
            this.grades = ['common', 'rare', 'legendary'];
            this.id = 2032;
            this.tab = 2;
          }

          _createClass(LootEastereggsComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this38 = this;

              this.routeParse();
              this.navigationSubscription = this.router.events.subscribe(function (event) {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                  _this38.routeParse();
                }
              });
            }
          }, {
            key: "setTabIndex",
            value: function setTabIndex(e) {
              this.id = this.ids[e];
              this.setUrl(e);
              this.browser.scrollTop();
            }
          }, {
            key: "setUrl",
            value: function setUrl(index) {
              this.location.replaceState('/easter-egg/' + this.grades[index]);
              this.browser.scrollTop();
            }
          }, {
            key: "routeParse",
            value: function routeParse() {
              var grade = this.route.snapshot.paramMap.get('grade');

              if (grade) {
                grade = grade.toLowerCase();
              }

              var index = this.grades.indexOf(grade);
              index = index === -1 ? 2 : index;
              this.tab = index;
              this.id = this.ids[index];
              this.setUrl(index);
            }
          }, {
            key: "ngAfterViewChecked",
            value: function ngAfterViewChecked() {
              var _this39 = this;

              setTimeout(function () {
                var object1 = document.querySelectorAll('.sticky');
                var h1;
                object1.forEach(function (e) {
                  h1 = e.offsetHeight;
                });
                _this39.stickyTop = h1;
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.navigationSubscription.unsubscribe();
            }
          }]);

          return LootEastereggsComponent;
        }();

        LootEastereggsComponent.ɵfac = function LootEastereggsComponent_Factory(t) {
          return new (t || LootEastereggsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_3__["WikiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_browser_service__WEBPACK_IMPORTED_MODULE_4__["BrowserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
        };

        LootEastereggsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LootEastereggsComponent,
          selectors: [["app-loot-eastereggs"]],
          hostAttrs: [1, "route-app"],
          decls: 6,
          vars: 5,
          consts: [[1, "flex-v-center"], ["mat-align-tabs", "start", "animationDuration", "0ms", 1, "tab-custom-overflow", "sticky", 2, "width", "100%", 3, "selectedIndex", "selectedIndexChange"], ["tabs", ""], [4, "ngFor", "ngForOf"], [3, "objectID", "stickyTop", "baseType"], [3, "label"]],
          template: function LootEastereggsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 1, 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function LootEastereggsComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
                return ctx.setTabIndex($event);
              })("selectedIndexChange", function LootEastereggsComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
                return ctx.tab = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LootEastereggsComponent_ng_container_3_Template, 2, 1, "ng-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-object-returns", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.tab);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ids);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("objectID", ctx.id)("stickyTop", ctx.stickyTop)("baseType", "item");
            }
          },
          directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _object_returns_object_returns_component__WEBPACK_IMPORTED_MODULE_7__["ObjectReturnsComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19Mb290L0Vhc3RlckVnZ3MvbG9vdC1lYXN0ZXJlZ2dzLmNvbXBvbmVudC5jc3MifQ== */"]
        });
        return LootEastereggsComponent;
      }();
      /***/

    },

    /***/
    "q8YX":
    /*!************************************!*\
      !*** ./src/app/capitalize.pipe.ts ***!
      \************************************/

    /*! exports provided: CapitalizePipe */

    /***/
    function q8YX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function () {
        return CapitalizePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CapitalizePipe = /*@__PURE__*/function () {
        var CapitalizePipe = /*#__PURE__*/function () {
          function CapitalizePipe() {
            _classCallCheck(this, CapitalizePipe);
          }

          _createClass(CapitalizePipe, [{
            key: "transform",
            value: function transform(value, args) {
              if (!value) {
                return value;
              }

              return value.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
              });
            }
          }]);

          return CapitalizePipe;
        }();

        CapitalizePipe.ɵfac = function CapitalizePipe_Factory(t) {
          return new (t || CapitalizePipe)();
        };

        CapitalizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
          name: "capitalize",
          type: CapitalizePipe,
          pure: true
        });
        return CapitalizePipe;
      }();
      /***/

    },

    /***/
    "rbLE":
    /*!***************************************************!*\
      !*** ./src/app/_Out-frame/main/main.component.ts ***!
      \***************************************************/

    /*! exports provided: MainComponent */

    /***/
    function rbLE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var _c0 = function _c0() {
        return {
          p: 2
        };
      };

      var MainComponent = /*@__PURE__*/function () {
        var MainComponent = /*#__PURE__*/function () {
          function MainComponent() {
            _classCallCheck(this, MainComponent);
          }

          _createClass(MainComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return MainComponent;
        }();

        MainComponent.ɵfac = function MainComponent_Factory(t) {
          return new (t || MainComponent)();
        };

        MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MainComponent,
          selectors: [["app-main"]],
          decls: 81,
          vars: 4,
          consts: [["routerLink", "rose-chest"], ["href", "https://forums.mo.ee/viewtopic.php?f=14&t=10594", "target", "_blank"], ["routerLink", "pq", 3, "queryParams"], ["routerLink", "sq"]],
          template: function MainComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u6B64\u7AD9\u68C4\u66F4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "201107\u66F4\u65B0");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u79FB\u9664\u602A\u7269\u51FA\u73FE\u5730\u7684\u8A08\u7B97");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u539F\u4F86\u53EA\u662F\u66AB\u6642\u7684\u7248\u672C\u5148\u884C\uFF0C\u512A\u5316\u7248\u672C\u4E00\u76F4\u6C92\u6642\u9593\u53BB\u5BEB\uFF0C\u5C0E\u81F4\u9032\u7AD9\u6642\u9593\u4E00\u76F4\u662F\u5F88\u6162\u7684\u72C0\u614B\u3002\u7E3D\u4E4B\u6211\u9078\u64C7\u9032\u7AD9\u6642\u9593\u5FEB\u9EDE\uFF0C\u529F\u80FD\u6703\u56DE\u4F86\u7684!(\u7B49\u6211\u54EA\u5929\u6709\u7A7A... ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "200215\u66F4\u65B0");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u65B0\u9801\u9762\u300C");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u73AB\u7470\u7BB1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u300D");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u79AE\u7269\u5167\u5BB9\u6539\u52D5 (");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "viewtopic.php?t=10594");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, ") ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-divider");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "191223\u66F4\u65B0");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u5167\u5BB9\u66F4\u65B0");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u52A0\u8F09\u7B56\u7565\u6539\u8B8A");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u9801\u9762\u6392\u7248\u5FAE\u8ABF");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u7DB2\u5740\u53EF\u8B80\u6027\u6539\u5584");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u9801\u9762\u300C");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u7D44\u968A\u4EFB\u52D9>\u51FA\u73FE\u602A\u7269");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u300D\u66F4\u65B0\uFF0C\u8A72\u9801\u9762\u5DF2\u52A0\u5165\u5F88han\u96A8\u610F\u7684\u7E41\u4E2D\u8AAA\u660E ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u4FEE\u6B63");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Chrome\u700F\u89BD\u5668\u4E2D\u6C92\u6709\u56FA\u5B9A\u90E8\u5206\u8868\u683C\u672B\u884C");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u9801\u9762\u300C");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u6280\u80FD\u4EFB\u52D9");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u300D\uFF0C\u53EF\u63A5\u53D6\u4EFB\u52D9\u7684\u8A08\u7B97\u932F\u8AA4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u8015\u7A2E\u6280\u80FD\u7684\u7B49\u7D1A\u8981\u6C42\u672A\u88AB\u6B63\u78BA\u8A08\u7B97");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u53F3\u5074\u7B49\u7D1A\u8F38\u5165\u8868\u55AE\u641C\u5C0B\u72C0\u614B\u932F\u8AA4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "mat-divider");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "190820\u66F4\u65B0");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ul");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u66F4\u65B0");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ul");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " \u9801\u9762\u300C");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u7D44\u968A\u4EFB\u52D9>\u51FA\u73FE\u602A\u7269");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u300D\uFF0C\u53EF\u4EE5\u904B\u7B97CL\u7A81\u7834\u9810\u8A2D\u4E0A\u9650\u7684\u602A\u7269\u7BC4\u570D ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u4FEE\u6B63");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ul");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u53F3\u5074\u7B49\u7D1A\u8F38\u5165\u8868\u55AE\u521D\u59CB\u5316\u932F\u8AA4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
            }
          },
          directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
          styles: ["a[_ngcontent-%COMP%]{\r\n  color:#80d8ff\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX091dC1mcmFtZS9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9fT3V0LWZyYW1lL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICBjb2xvcjojODBkOGZmXHJcbn1cclxuIl19 */"]
        });
        return MainComponent;
      }();
      /***/

    },

    /***/
    "s+sn":
    /*!**************************************************************!*\
      !*** ./src/app/_Quests/skill-quest/skill-quest.component.ts ***!
      \**************************************************************/

    /*! exports provided: SkillQuestComponent */

    /***/
    function sSn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillQuestComponent", function () {
        return SkillQuestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sort */
      "LUZP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../wiki.service */
      "uUtE");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../language.service */
      "y91y");
      /* harmony import */


      var _highscore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../highscore.service */
      "8Rav");
      /* harmony import */


      var _level_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../level.service */
      "BIPl");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "Ynp+");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      function SkillQuestComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-button-toggle", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r40 = ctx.$implicit;
          var i_r41 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.translateLang[item_r40].trans, " ");
        }
      }

      function SkillQuestComponent_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-button-toggle", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var skill_r42 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", skill_r42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.level.translateLang[skill_r42], " ");
        }
      }

      function SkillQuestComponent_th_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SkillQuestComponent_td_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r43.id);
        }
      }

      function SkillQuestComponent_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.translateLang.Access.trans);
        }
      }

      function SkillQuestComponent_td_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r44 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r44.access ? "\u2714" : "\u2716", " ");
        }
      }

      function SkillQuestComponent_th_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.translateLang.Requires.trans);
        }
      }

      function SkillQuestComponent_th_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.translateLang.Skill.trans);
        }
      }

      function SkillQuestComponent_td_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r45 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r45.skill_required);
        }
      }

      function SkillQuestComponent_th_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.translateLang.Level.trans);
        }
      }

      function SkillQuestComponent_td_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r46 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("gray", ctx_r13.greaterThan(ctx_r13.highscore.mainStats.value[element_r46.skill_en.toLowerCase()], element_r46.level_required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, element_r46.level_required, "1."), " ");
        }
      }

      function SkillQuestComponent_th_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.translateLang.Points.trans);
        }
      }

      function SkillQuestComponent_td_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r47 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("gray", ctx_r15.greaterThan(ctx_r15.highscore.mainStats.value[ctx_r15.level.other[0]], element_r47.point_required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, element_r47.point_required, "1."), " ");
        }
      }

      function SkillQuestComponent_th_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.translateLang.Item.trans);
        }
      }

      function SkillQuestComponent_td_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r48.item_required, " ");
        }
      }

      function SkillQuestComponent_th_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.translateLang.Qty.trans);
        }
      }

      function SkillQuestComponent_td_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r49 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r19.Math.round(element_r49.amount_required * ctx_r19.ITEM_MULTIPLIER), "1."), "");
        }
      }

      function SkillQuestComponent_th_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.translateLang["Reward (pick 1 by random)"].trans);
        }
      }

      function SkillQuestComponent_th_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Exp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SkillQuestComponent_td_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r50 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r22.Math.floor(element_r50.reward_exp * ctx_r22.EXP_MULTIPLIER), "1."), " ");
        }
      }

      function SkillQuestComponent_th_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Coins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SkillQuestComponent_td_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r51 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r24.Math.floor(element_r51.reward_coins * ctx_r24.COINS_MULTIPLIER), "1."), "");
        }
      }

      function SkillQuestComponent_th_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SkillQuestComponent_td_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r52 = ctx.$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("graytext", ctx_r26.sq_grade === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r26.Math.floor(element_r52.reward_mos * ctx_r26.MOS_MULTIPLIER), "1."), " ");
        }
      }

      function SkillQuestComponent_th_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.translateLang.Item.trans);
        }
      }

      function SkillQuestComponent_td_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r53 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r53.reward_item, " ");
        }
      }

      function SkillQuestComponent_th_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.translateLang.Reward.trans);
        }
      }

      function SkillQuestComponent_th_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.translateLang.Points.trans);
        }
      }

      function SkillQuestComponent_td_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r54 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r54.reward_points, "1."));
        }
      }

      function SkillQuestComponent_th_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r32.translateLang["Upper Limit"].trans);
        }
      }

      function SkillQuestComponent_th_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.translateLang.Level.trans);
        }
      }

      function SkillQuestComponent_td_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r55 = ctx.$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("gray", !ctx_r34.greaterThan(ctx_r34.highscore.mainStats.value[element_r55.skill_en.toLowerCase()], element_r55.ul_level));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, element_r55.ul_level, "1."), " ");
        }
      }

      function SkillQuestComponent_th_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r35.translateLang.Points.trans);
        }
      }

      function SkillQuestComponent_td_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r56 = ctx.$implicit;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("gray", !ctx_r36.greaterThan(ctx_r36.highscore.mainStats.value[ctx_r36.level.other[0]], element_r56.ul_points));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, element_r56.ul_points, "1."), " ");
        }
      }

      function SkillQuestComponent_tr_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 53);
        }
      }

      function SkillQuestComponent_tr_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 53);
        }
      }

      function SkillQuestComponent_tr_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 54);
        }

        if (rf & 2) {
          var row_r57 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", row_r57.access ? "tick" : "cross");
        }
      }

      var _c0 = function _c0() {
        return ["id", "access", "requires", "reward4", "reward1", "upper_limit"];
      };

      var _c1 = function _c1() {
        return ["skill_required", "level_required", "point_required", "item_required", "amount_required", "reward_exp", "reward_coins", "reward_mos", "reward_item", "reward_points", "ul_level", "ul_points"];
      };

      var SkillQuestComponent = /*@__PURE__*/function () {
        var SkillQuestComponent = /*#__PURE__*/function () {
          function SkillQuestComponent(location, router, route, wiki, language, highscore, level) {
            _classCallCheck(this, SkillQuestComponent);

            this.location = location;
            this.router = router;
            this.route = route;
            this.wiki = wiki;
            this.language = language;
            this.highscore = highscore;
            this.level = level;
            this.Objectkeys = Object.keys;
            this.Math = Math;
            this.sq_grade = '2';
            this.ITEM_MULTIPLIER = 0;
            this.EXP_MULTIPLIER = 0;
            this.COINS_MULTIPLIER = 0;
            this.MOS_MULTIPLIER = 0;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
            this.displayedColumns = ['id', 'access', 'skill_required', 'level_required', 'point_required', 'item_required', 'amount_required', 'reward_exp', 'reward_coins', 'reward_mos', 'reward_item', 'reward_points', 'ul_level', 'ul_points'];
            this.translateLang = {
              Access: {
                trans: '',
                "class": 'w'
              },
              Qty: {
                trans: '',
                "class": 'w'
              },
              Requires: {
                trans: '',
                "class": 'w'
              },
              All: {
                trans: '',
                "class": 'w'
              },
              Clear: {
                trans: '',
                "class": 'w'
              },
              'Reward (pick 1 by random)': {
                trans: '',
                "class": 'w'
              },
              'Upper Limit': {
                trans: '',
                "class": 'w'
              },
              Skill: {
                trans: '',
                "class": 'i'
              },
              Level: {
                trans: '',
                "class": 'i'
              },
              Points: {
                trans: '',
                "class": 'i'
              },
              Item: {
                trans: '',
                "class": 'i'
              },
              Reward: {
                trans: '',
                "class": 'i'
              },
              Grade: {
                trans: '',
                "class": 'i'
              }
            };
            this.skills = ['fishing', 'cooking', 'mining', 'forging', 'woodcutting', 'farming', 'carpentry', 'alchemy', 'breeding', 'fletching', 'jewelry', 'wizardry', 'fungiculture'];
            this.filter_skills = ['carpentry'];
            this.filter_access = ['true', 'false'];
            this.filterValues = {
              access: '',
              skills: ''
            };
            this.GRADE_TO_NAME = [];
          }

          _createClass(SkillQuestComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this40 = this;

              this.loadGrade();
              this.routeParse();
              this.LanguageSubscription = this.language.settingLang.subscribe(function (e) {
                _this40.onLangChange();
              });
              this.HighscoreSubscription = this.highscore.mainStats.subscribe(function (e) {
                _this40.onMainStatsChange();
              });
              this.navigationSubscription = this.router.events.subscribe(function (event) {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                  _this40.routeParse();
                }
              });
              this.sq_grade = localStorage.sq_grade ? localStorage.sq_grade.toString() : this.sq_grade;

              if (localStorage.sq_filter_access) {
                this.filter_skills = localStorage.sq_filter_skills.split(',');
                this.filter_access = localStorage.sq_filter_access.split(',');
              }

              this.onGradeChange();
              this.filter_skills_all = this.skills;
              this.onInit();
            }
          }, {
            key: "onInit",
            value: function onInit() {
              var _this41 = this;

              this.getData();
              this.onMainStatsChange();

              this.dataSource.filterPredicate = function (data, filter) {
                return _this41.filterStrategy(data, filter);
              };

              this.dataSource.sort = this.sort;
              this.applyFilter();
            }
          }, {
            key: "filterStrategy",
            value: function filterStrategy(data, filter) {
              var filterArray_access = JSON.parse(filter).access.split(',');
              var filterArray_skills = JSON.parse(filter).skills.split(',');
              var bool1 = false;

              for (var i = 0; i < filterArray_access.length; i++) {
                if (data.access.toString() === filterArray_access[i]) {
                  bool1 = true;
                  break;
                }
              }

              var bool2 = false;

              for (var _i = 0; _i < filterArray_skills.length; _i++) {
                if (data.skill_en.toLowerCase() === filterArray_skills[_i]) {
                  bool2 = true;
                  break;
                }
              }

              return bool1 && bool2;
            }
          }, {
            key: "ngAfterViewChecked",
            value: function ngAfterViewChecked() {
              var headers = document.querySelectorAll('.mat-header-cell');
              var h = headers[2].offsetHeight;
              headers.forEach(function (e) {
                if (e.style.top !== '0px') {
                  e.style.top = h + 'px';
                }
              });
            }
          }, {
            key: "onMainStatsChange",
            value: function onMainStatsChange() {
              var _this42 = this;

              this.dataSource.data.forEach(function (element) {
                var lvl = _this42.highscore.mainStats.value[element.skill_en.toLowerCase()];

                var points = _this42.highscore.mainStats.value[_this42.level.other[0]];
                element.access = !(lvl >= element.ul_level && points >= element.ul_points || lvl < element.level_required || points < element.point_required);
              });
            }
          }, {
            key: "loadGrade",
            value: function loadGrade() {
              for (var key in this.wiki.SkillQuest.GRADE_TO_NAME) {
                if (this.wiki.SkillQuest.GRADE_TO_NAME.hasOwnProperty(key)) {
                  var element = this.wiki.SkillQuest.GRADE_TO_NAME[key];
                  this.GRADE_TO_NAME.push(element);
                  this.translateLang[element] = {
                    trans: '',
                    "class": 'i'
                  };
                }
              }
            }
          }, {
            key: "onLangChange",
            value: function onLangChange() {
              for (var key in this.translateLang) {
                if (this.translateLang.hasOwnProperty(key)) {
                  this.translateLang[key].trans = this.language.getString(key, this.translateLang[key]["class"]);
                }
              }

              for (var _key6 in this.dataSource.data) {
                if (this.dataSource.data.hasOwnProperty(_key6)) {
                  var element = this.dataSource.data[_key6];
                  element.skill_required = this.language.getString(element.skill_en, 'i');
                  element.item_required = this.language.getString(element.item_required_en);
                  element.reward_item = this.language.getString(element.reward_item_en);
                }
              }
            }
          }, {
            key: "onGradeChange",
            value: function onGradeChange() {
              var grade = parseInt(this.sq_grade, 0);
              this.router.navigate(['skillquest'], {
                queryParams: {
                  g: grade
                }
              });
              this.ITEM_MULTIPLIER = this.wiki.SkillQuest.ITEM_MULTIPLIER[grade];
              this.EXP_MULTIPLIER = this.wiki.SkillQuest.EXP_MULTIPLIER[grade];
              this.COINS_MULTIPLIER = this.wiki.SkillQuest.COINS_MULTIPLIER[grade];
              this.MOS_MULTIPLIER = this.wiki.SkillQuest.MOS_MULTIPLIER[grade];
              localStorage.sq_grade = grade;
              this.routeParse();
            }
          }, {
            key: "skillAll",
            value: function skillAll() {
              this.filter_skills = this.filter_skills_all;
              this.applyFilter();
            }
          }, {
            key: "skillClear",
            value: function skillClear() {
              this.filter_skills = [];
              this.applyFilter();
            }
          }, {
            key: "applyFilter",
            value: function applyFilter() {
              this.filterValues.skills = localStorage.sq_filter_skills = this.filter_skills.toString();
              this.filterValues.access = localStorage.sq_filter_access = this.filter_access.toString();
              this.dataSource.filter = JSON.stringify(this.filterValues);
            }
          }, {
            key: "routeParse",
            value: function routeParse() {
              var _grade = this.route.snapshot.queryParams.g;

              if (_grade) {
                var g = parseInt(_grade, 0);

                if (!(isNaN(g) || g < 0 || g > this.GRADE_TO_NAME.length)) {
                  localStorage.sq_grade = g;
                  this.sq_grade = g.toString();
                }
              }

              this.setUrl(this.sq_grade);
            }
          }, {
            key: "setUrl",
            value: function setUrl(grade) {
              var url = '/skill-quest';
              url += '?g=' + grade;
              this.location.replaceState(url);
            }
          }, {
            key: "getData",
            value: function getData() {
              var count = 0;

              for (var key in this.wiki.SkillQuest.quests) {
                if (this.wiki.SkillQuest.quests.hasOwnProperty(key)) {
                  var temp = this.wiki.SkillQuest.quests[key];
                  var obj = void 0;
                  obj = {};
                  obj.id = temp.id + 1;
                  obj.access = 'false';
                  obj.skill_en = temp.skill;
                  obj.skill_required = this.language.getString(temp.skill, 'i');
                  obj.level_required = temp.lvl_needed;
                  obj.point_required = temp.min_qp;
                  obj.item_required_id = temp.item_id;
                  obj.item_required_en = this.wiki.item_base[temp.item_id].name;
                  obj.item_required = this.language.getString(obj.item_required_en);
                  obj.amount_required = temp.amount;
                  obj.reward_exp = temp.reward[0];
                  obj.reward_coins = temp.reward[1];
                  obj.reward_mos = temp.reward[2];
                  obj.reward_item_id = temp.reward[3];
                  obj.reward_item_en = this.wiki.item_base[obj.reward_item_id].name;
                  obj.reward_item = this.language.getString(obj.reward_item_en);
                  obj.reward_points = temp.qp;
                  obj.ul_level = temp.ul_level;
                  obj.ul_points = obj.point_required + 750;
                  this.dataSource.data.push(obj);
                  count++;

                  if (count % 990 === 0) {
                    return;
                  }
                }
              }
            }
          }, {
            key: "greaterThan",
            value: function greaterThan(main, sub) {
              return sub > main;
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.LanguageSubscription.unsubscribe();
              this.HighscoreSubscription.unsubscribe();
              this.navigationSubscription.unsubscribe();
            }
          }]);

          return SkillQuestComponent;
        }();

        SkillQuestComponent.ɵfac = function SkillQuestComponent_Factory(t) {
          return new (t || SkillQuestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_5__["WikiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_highscore_service__WEBPACK_IMPORTED_MODULE_7__["HighscoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_level_service__WEBPACK_IMPORTED_MODULE_8__["LevelService"]));
        };

        SkillQuestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: SkillQuestComponent,
          selectors: [["app-skill-quest"]],
          viewQuery: function SkillQuestComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            }
          },
          decls: 77,
          vars: 18,
          consts: [[1, "options-container"], [1, "example-sticky-toggle-group", 3, "ngModel", "ngModelChange", "change"], ["gradeBtnGroup", "matButtonToggleGroup"], [4, "ngFor", "ngForOf"], [2, "padding", "6px"], ["multiple", "", 1, "example-sticky-toggle-group", 3, "ngModel", "ngModelChange", "change"], ["accessBtnGroup", "matButtonToggleGroup"], ["value", "true"], ["value", "false"], ["mat-button", "", 3, "click"], ["skillBtnGroup", "matButtonToggleGroup"], ["mat-table", "", "matSort", "", "multiTemplateDataRows", "true", 1, "doc-table", "doc-table-info", 3, "dataSource"], ["matColumnDef", "id", "sticky", ""], ["mat-header-cell", "", "mat-sort-header", "", "rowspan", "2", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "right", 4, "matCellDef"], ["matColumnDef", "access"], ["mat-cell", "", "class", "center access", 4, "matCellDef"], ["matColumnDef", "requires"], ["mat-header-cell", "", "colspan", "5", 4, "matHeaderCellDef"], ["matColumnDef", "skill_required"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "left", 4, "matCellDef"], ["matColumnDef", "level_required"], ["mat-cell", "", "class", "right", 3, "gray", 4, "matCellDef"], ["matColumnDef", "point_required"], ["matColumnDef", "item_required"], ["matColumnDef", "amount_required"], ["matColumnDef", "reward4"], ["mat-header-cell", "", "colspan", "4", 4, "matHeaderCellDef"], ["matColumnDef", "reward_exp"], ["matColumnDef", "reward_coins"], ["matColumnDef", "reward_mos"], ["mat-cell", "", "class", "right", 3, "graytext", 4, "matCellDef"], ["matColumnDef", "reward_item"], ["matColumnDef", "reward1"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "reward_points"], ["matColumnDef", "upper_limit"], ["mat-header-cell", "", "colspan", "2", 4, "matHeaderCellDef"], ["matColumnDef", "ul_level"], ["matColumnDef", "ul_points"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "className", 4, "matRowDef", "matRowDefColumns"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", "", "rowspan", "2"], ["mat-cell", "", 1, "right"], ["mat-cell", "", 1, "center", "access"], ["mat-header-cell", "", "colspan", "5"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "left"], ["mat-header-cell", "", "colspan", "4"], ["mat-header-cell", ""], ["mat-header-cell", "", "colspan", "2"], ["mat-header-row", ""], ["mat-row", "", 3, "className"]],
          template: function SkillQuestComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-button-toggle-group", 1, 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SkillQuestComponent_Template_mat_button_toggle_group_ngModelChange_2_listener($event) {
                return ctx.sq_grade = $event;
              })("change", function SkillQuestComponent_Template_mat_button_toggle_group_change_2_listener() {
                return ctx.onGradeChange();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillQuestComponent_ng_container_4_Template, 3, 2, "ng-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-button-toggle-group", 5, 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SkillQuestComponent_Template_mat_button_toggle_group_ngModelChange_7_listener($event) {
                return ctx.filter_access = $event;
              })("change", function SkillQuestComponent_Template_mat_button_toggle_group_change_7_listener() {
                return ctx.applyFilter();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-button-toggle", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u2714");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-button-toggle", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u2716");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-button-toggle-group");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillQuestComponent_Template_button_click_16_listener() {
                return ctx.skillAll();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillQuestComponent_Template_button_click_18_listener() {
                return ctx.skillClear();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-button-toggle-group", 5, 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SkillQuestComponent_Template_mat_button_toggle_group_ngModelChange_20_listener($event) {
                return ctx.filter_skills = $event;
              })("change", function SkillQuestComponent_Template_mat_button_toggle_group_change_20_listener() {
                return ctx.applyFilter();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SkillQuestComponent_ng_container_22_Template, 3, 2, "ng-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SkillQuestComponent_th_25_Template, 2, 0, "th", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SkillQuestComponent_td_26_Template, 2, 1, "td", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SkillQuestComponent_th_28_Template, 2, 1, "th", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SkillQuestComponent_td_29_Template, 2, 1, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SkillQuestComponent_th_31_Template, 2, 1, "th", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SkillQuestComponent_th_33_Template, 2, 1, "th", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SkillQuestComponent_td_34_Template, 2, 1, "td", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35, 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SkillQuestComponent_th_36_Template, 2, 1, "th", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SkillQuestComponent_td_37_Template, 3, 6, "td", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](38, 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, SkillQuestComponent_th_39_Template, 2, 1, "th", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SkillQuestComponent_td_40_Template, 3, 6, "td", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](41, 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, SkillQuestComponent_th_42_Template, 2, 1, "th", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SkillQuestComponent_td_43_Template, 2, 1, "td", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](44, 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, SkillQuestComponent_th_45_Template, 2, 1, "th", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, SkillQuestComponent_td_46_Template, 3, 4, "td", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](47, 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, SkillQuestComponent_th_48_Template, 2, 1, "th", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](49, 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, SkillQuestComponent_th_50_Template, 2, 0, "th", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, SkillQuestComponent_td_51_Template, 3, 4, "td", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](52, 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, SkillQuestComponent_th_53_Template, 2, 0, "th", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, SkillQuestComponent_td_54_Template, 3, 4, "td", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](55, 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, SkillQuestComponent_th_56_Template, 2, 0, "th", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, SkillQuestComponent_td_57_Template, 3, 6, "td", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](58, 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, SkillQuestComponent_th_59_Template, 2, 1, "th", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, SkillQuestComponent_td_60_Template, 2, 1, "td", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](61, 34);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, SkillQuestComponent_th_62_Template, 2, 1, "th", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](63, 36);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, SkillQuestComponent_th_64_Template, 2, 1, "th", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, SkillQuestComponent_td_65_Template, 3, 4, "td", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](66, 37);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, SkillQuestComponent_th_67_Template, 2, 1, "th", 38);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](68, 39);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, SkillQuestComponent_th_69_Template, 2, 1, "th", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, SkillQuestComponent_td_70_Template, 3, 6, "td", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](71, 40);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, SkillQuestComponent_th_72_Template, 2, 1, "th", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, SkillQuestComponent_td_73_Template, 3, 6, "td", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, SkillQuestComponent_tr_74_Template, 1, 0, "tr", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, SkillQuestComponent_tr_75_Template, 1, 0, "tr", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, SkillQuestComponent_tr_76_Template, 1, 1, "tr", 42);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.translateLang.Grade.trans, ": ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sq_grade);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.GRADE_TO_NAME);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.translateLang.Access.trans, ": ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter_access);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.translateLang.Skill.trans, ": ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.translateLang.All.trans);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.translateLang.Clear.trans);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter_skills);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](51);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0))("matHeaderRowDefSticky", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1))("matHeaderRowDefSticky", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            }
          },
          directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19RdWVzdHMvc2tpbGwtcXVlc3Qvc2tpbGwtcXVlc3QuY29tcG9uZW50LmNzcyJ9 */"]
        });
        return SkillQuestComponent;
      }();
      /***/

    },

    /***/
    "tvyB":
    /*!**********************************************************************!*\
      !*** ./src/app/_Loot/HuntingReward/loot-hunting-reward.component.ts ***!
      \**********************************************************************/

    /*! exports provided: LootHuntingRewardComponent */

    /***/
    function tvyB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LootHuntingRewardComponent", function () {
        return LootHuntingRewardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../language.service */
      "y91y");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../wiki.service */
      "uUtE");
      /* harmony import */


      var _browser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../browser.service */
      "ZRPN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _object_returns_muliti_object_returns_muliti_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../object-returns-muliti/object-returns-muliti.component */
      "yVgE");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");

      function LootHuntingRewardComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var key_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", key_r1.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r1.name);
        }
      }

      var LootHuntingRewardComponent = /*@__PURE__*/function () {
        var LootHuntingRewardComponent = /*#__PURE__*/function () {
          function LootHuntingRewardComponent(lang, wiki, browser, location, route, router) {
            _classCallCheck(this, LootHuntingRewardComponent);

            this.lang = lang;
            this.wiki = wiki;
            this.browser = browser;
            this.location = location;
            this.route = route;
            this.router = router;
            this.ids = [3411, 3439, 3442, 3421, 3440, 3412, 3445, 3424, 3425, 3431, 3436, 3422, 3432, 3438, 3423, 3437, 3441, 3430, 3433, 3427, 3446, 3428, 3434, 3443, 3435, 3426, 3429, 3444];
            this.id = '3427';
            this.object_keys = [];
          }

          _createClass(LootHuntingRewardComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this43 = this;

              this.ids.forEach(function (e) {
                _this43.object_keys.push({
                  id: e,
                  name: _this43.wiki.item_base[e].name.replace('Rare Key [', '').replace(']', '')
                });
              });
              this.object_keys = this.object_keys.sort(function (t, e) {
                return t.name > e.name ? 1 : -1;
              });
              this.navigationSubscription = this.router.events.subscribe(function (event) {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                  _this43.routeParse();
                }
              });
              this.routeParse();
            }
          }, {
            key: "setTabIndex",
            value: function setTabIndex() {
              var _this44 = this;

              var obj = this.object_keys.filter(function (e, i) {
                return e.id.toString() === _this44.id;
              });
              this.setUrl(obj.length > 0 ? obj[0] : this.object_keys[Math.floor(this.object_keys.length / 2)]);
              this.browser.scrollTop();
            }
          }, {
            key: "setUrl",
            value: function setUrl(obj) {
              this.location.replaceState('/hunting-reward/' + obj.name.toLowerCase());
              this.id = obj.id.toString();
              this.browser.scrollTop();
            }
          }, {
            key: "routeParse",
            value: function routeParse() {
              var map = this.route.snapshot.paramMap.get('map');

              if (map) {
                map = map.toLowerCase();
              }

              var obj = this.object_keys.filter(function (e, i) {
                return e.name.toLowerCase() === map;
              });
              this.setUrl(obj.length > 0 ? obj[0] : this.object_keys[Math.floor(this.object_keys.length / 2)]);
            }
          }, {
            key: "ngAfterViewChecked",
            value: function ngAfterViewChecked() {
              var _this45 = this;

              setTimeout(function () {
                var object1 = document.querySelectorAll('.sticky');
                var h1;
                object1.forEach(function (e) {
                  h1 = e.offsetHeight;
                });
                _this45.stickyTop = h1;
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.navigationSubscription.unsubscribe();
            }
          }]);

          return LootHuntingRewardComponent;
        }();

        LootHuntingRewardComponent.ɵfac = function LootHuntingRewardComponent_Factory(t) {
          return new (t || LootHuntingRewardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_3__["WikiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_browser_service__WEBPACK_IMPORTED_MODULE_4__["BrowserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
        };

        LootHuntingRewardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LootHuntingRewardComponent,
          selectors: [["app-loot-hunting-reward"]],
          hostAttrs: [1, "route-app"],
          decls: 7,
          vars: 6,
          consts: [[1, "flex-v-center"], [1, "sticky", 2, "width", "100%"], ["color", "accent", 3, "value", "valueChange"], [4, "ngFor", "ngForOf"], [3, "objectID", "showName", "key", "stickyTop"], [3, "value"]],
          template: function LootHuntingRewardComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function LootHuntingRewardComponent_Template_mat_select_valueChange_4_listener($event) {
                return ctx.id = $event;
              })("valueChange", function LootHuntingRewardComponent_Template_mat_select_valueChange_4_listener() {
                return ctx.setTabIndex();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LootHuntingRewardComponent_ng_container_5_Template, 3, 2, "ng-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-object-returns-muliti", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.id);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.object_keys);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("objectID", 726)("showName", true)("key", ctx.id)("stickyTop", ctx.stickyTop);
            }
          },
          directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _object_returns_muliti_object_returns_muliti_component__WEBPACK_IMPORTED_MODULE_8__["ObjectReturnsMulitiComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19Mb290L0h1bnRpbmdSZXdhcmQvbG9vdC1odW50aW5nLXJld2FyZC5jb21wb25lbnQuY3NzIn0= */"]
        });
        return LootHuntingRewardComponent;
      }();
      /***/

    },

    /***/
    "uUtE":
    /*!*********************************!*\
      !*** ./src/app/wiki.service.ts ***!
      \*********************************/

    /*! exports provided: WikiService */

    /***/
    function uUtE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WikiService", function () {
        return WikiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _baseapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./baseapi.service */
      "JY2j");

      var WikiService = /*@__PURE__*/function () {
        var WikiService = /*#__PURE__*/function () {
          function WikiService(api) {
            _classCallCheck(this, WikiService);

            this.api = api;
            this.quests = quests;
            this.npc_base = npc_base;
            this.item_base = item_base;
            this.Fletching = Fletching;
            this.SkillQuest = SkillQuest;
            this.object_base = object_base;
            this.FORGE_FORMULAS = FORGE_FORMULAS;
            this.CARPENTRY_FORMULAS = CARPENTRY_FORMULAS;
            this.FLETCHING_FORMULAS = FLETCHING_FORMULAS;
            this.pets = pets;
            this.capitaliseFirstLetter = capitaliseFirstLetter;
            this.Magic = Magic;
            this.ITEM_CATEGORY = ITEM_CATEGORY;
            this.map_json = map_json;
            this.on_map_json = on_map_json;
            this.map_names = map_names;
            this.isWikiInit = false;
            this.isMapInit = false;
          }

          _createClass(WikiService, [{
            key: "init",
            value: function () {
              var _init2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                return regeneratorRuntime.wrap(function _callee8$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        this.dataReBuild();
                        this.isWikiInit = true;
                        /*
                        let loaded_count = 0;
                        let mapPromises: Array<Promise<any>> = [];
                        map_names.forEach((e, i) => {
                          mapPromises.push(
                            this.api.getMap(i)
                              .then((result: any) => {
                                let script = document.createElement('script');
                                script.type = 'text/javascript';
                                script.text = result;
                                document.getElementsByTagName('head')[0].appendChild(script);
                                loaded_count++;
                              }));
                        });
                        this.dataReBuild();
                        this.isWikiInit = true;
                                  await Promise.all(mapPromises.map(async (pro) => { await pro; })).then(() => this.loadMapInfo());
                                  return Promise.resolve();
                        */

                      case 2:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee8, this);
              }));

              function init() {
                return _init2.apply(this, arguments);
              }

              return init;
            }()
          }, {
            key: "loadMapInfo",
            value: function loadMapInfo() {
              // mob on map
              this.on_map_json.forEach(function (arr, map_index) {
                arr.forEach(function (position) {
                  if (position.b_t === '4') {
                    var t = npc_base[position.b_i];

                    if (!t.on_maps) {
                      t.on_maps = [];
                    }

                    if (t.on_maps.length === 0 || t.on_maps[t.on_maps.length - 1].id !== map_index) {
                      var temp;
                      temp = {};
                      temp.id = map_index;
                      temp.qty = 1;
                      t.on_maps.push(temp);
                    } else {
                      t.on_maps[t.on_maps.length - 1].qty++;
                    }
                  }
                });
              });
              this.isMapInit = true;
            }
          }, {
            key: "objectCopy",
            value: function objectCopy(origin) {
              return JSON.parse(JSON.stringify(origin));
            }
          }, {
            key: "dataReBuild",
            value: function dataReBuild() {
              // mob in kq
              quests.forEach(function (q) {
                npc_base[q.npc_id].kq_id = q.id;
              }); // 計算怪物CL，params.in_dungeon,respawn_time

              for (var key in npc_base) {
                if (npc_base.hasOwnProperty(key) && npc_base[key].type === 3) {
                  var e = npc_base[key];
                  e.temp.total_strength = e.temp.total_strength === undefined ? Infinity : e.temp.total_strength;
                  e.params.combat_level = Math.floor((e.temp.health + e.temp.total_accuracy + e.temp.total_defense + e.temp.total_strength) / 4);
                  e.params.respawn_time = e.params.respawn_time ? Math.max(5, e.params.respawn_time) : 30 + e.params.health;

                  if (!e.params.no_dungeon && 325 > e.params.combat_level) {
                    e.params.in_dungeon = 1;
                  }
                }
              }

              this.addPresentsTag(); //build item_base.kcraft

              for (var ci in object_base) {
                if (object_base[ci] && object_base[ci].params !== undefined && object_base[ci].params.results !== undefined) {
                  for (var fi in object_base[ci].params.results) {
                    if (object_base[ci].params.results[fi]) {
                      var skill_name = object_base[ci].params.results[fi].skill;
                      var requires_one_from = object_base[ci].params.results[fi].requires_one_from;

                      for (var ei in object_base[ci].params.results[fi].returns) {
                        if (object_base[ci].params.results[fi].returns[ei]) {
                          var id = object_base[ci].params.results[fi].returns[ei].id;
                          var t = this.objectCopy(object_base[ci].params.results[fi].returns[ei]);
                          t.skill_name = skill_name;
                          t.requires_one_from = requires_one_from;
                          t.object_id = ci;

                          if (t.skill_name === 'farming') {
                            if (object_base[ci].params.duration !== undefined) {
                              t.duration = object_base[ci].params.duration;

                              for (var gi in item_base) {
                                if (item_base[gi].params.farming_id * 1 === t.object_id * 1) {
                                  t.level = item_base[gi].params.min_farming;
                                  t.seed_id = gi;
                                }
                              }
                            } else {
                              delete t.duration;
                            }
                          }

                          delete t.id;
                          item_base[id].kcraft = item_base[id].kcraft === undefined ? [] : item_base[id].kcraft;
                          item_base[id].kcraft.push(t);
                        }
                      }
                    }
                  }
                }
              } //build item_base.kcraft


              for (var _ci in FORGE_FORMULAS) {
                if (FORGE_FORMULAS[_ci]) {
                  var _t2 = this.objectCopy(FORGE_FORMULAS[_ci]);

                  var _id2 = FORGE_FORMULAS[_ci].item_id;
                  _t2.object_id = 36;
                  _t2.requires_one_from = [36, 2807];

                  if (FORGE_FORMULAS[_ci].level !== undefined) {
                    _t2.skill_name = 'forging';
                  } else if (FORGE_FORMULAS[_ci].fletching_level !== undefined) {
                    _t2.skill_name = 'fletching';
                    _t2.level = FORGE_FORMULAS[_ci].fletching_level;
                    delete _t2.fletching_level;
                  } else if (FORGE_FORMULAS[_ci].wizardry_level !== undefined) {
                    _t2.skill_name = 'wizardry';
                    _t2.level = FORGE_FORMULAS[_ci].wizardry_level;
                    delete _t2.wizardry_level;
                  }

                  delete _t2.id;
                  item_base[_id2].kcraft = item_base[_id2].kcraft === undefined ? [] : item_base[_id2].kcraft;

                  item_base[_id2].kcraft.push(_t2);
                }
              } //build item_base.kcraft


              for (var _ci2 in CARPENTRY_FORMULAS) {
                if (CARPENTRY_FORMULAS[_ci2]) {
                  for (var _fi in CARPENTRY_FORMULAS[_ci2]) {
                    if (CARPENTRY_FORMULAS[_ci2][_fi]) {
                      var _t3 = this.objectCopy(CARPENTRY_FORMULAS[_ci2][_fi]);

                      var _id3 = _t3.item_id;
                      delete _t3.id;
                      delete _t3.item_id;
                      _t3.skill_name = 'carpentry';
                      item_base[_id3].kcraft = item_base[_id3].kcraft === undefined ? [] : item_base[_id3].kcraft;

                      item_base[_id3].kcraft.push(_t3);
                    }
                  }
                }
              } //build item_base.kcraft


              for (var _ci3 in FLETCHING_FORMULAS) {
                if (FLETCHING_FORMULAS[_ci3]) {
                  var _t4 = this.objectCopy(FLETCHING_FORMULAS[_ci3]);

                  var _id4 = _t4.item_id;
                  delete _t4.item_id;
                  _t4.skill_name = 'fletching';
                  item_base[_id4].kcraft = item_base[_id4].kcraft === undefined ? [] : item_base[_id4].kcraft;

                  item_base[_id4].kcraft.push(_t4);
                }
              } //build item_base.kcraft


              for (var _ci4 in pets) {
                if (pets[_ci4]) {
                  var g = this.objectCopy(pets[_ci4].params);

                  if (g.breeding_level && g.likes && 0 !== g.likes.length) {
                    for (var _fi2 in g.likes) {
                      if (g.likes[_fi2]) {
                        var k = g.likes[_fi2];

                        for (var _gi in k.returns) {
                          if (k.returns[_gi]) {
                            var m = k.returns[_gi];
                            var _id5 = pets[m.pet_id].params.item_id;
                            var _t5 = {};
                            _t5.skill_name = 'breeding';
                            _t5.parents = [parseInt(_ci4, 0), parseInt(k.pet_id, 0)];
                            _t5.xp = k.xp;
                            _t5.base_chance = m.base_chance;
                            _t5.max_chance = m.max_chance;
                            item_base[_id5].kcraft = item_base[_id5].kcraft === undefined ? [] : item_base[_id5].kcraft;
                            var yi = !0;

                            for (var xi in item_base[_id5].kcraft) {
                              if (item_base[_id5].kcraft[xi].parents === _t5.parents) {
                                yi = !1;
                                break;
                              }
                            }

                            if (yi) {
                              item_base[_id5].kcraft.push(_t5);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }

              SkillQuest.quests.forEach(function (v) {
                v.lvl_needed = 'not found';
                var arr_lvl = [];
                item_base[v.item_id].tags += 'sq_needed/';
                item_base[v.reward[3]].tags += 'sq_reward/';

                if (item_base[v.item_id].kcraft !== undefined) {
                  for (var i in item_base[v.item_id].kcraft) {
                    if (item_base[v.item_id].kcraft[i].skill_name !== 'health' && item_base[v.item_id].kcraft[i].skill_name === v.skill) {
                      if (v.skill === 'breeding') {
                        var n = item_base[v.item_id].kcraft[i].parents;
                        arr_lvl.push(Math.max(pets[n[0]].params.breeding_level, pets[n[1]].params.breeding_level));
                      } else {
                        arr_lvl.push(item_base[v.item_id].kcraft[i].level === undefined || item_base[v.item_id].kcraft[i].level <= 1 ? 1 : item_base[v.item_id].kcraft[i].level);
                      }
                    }
                  }

                  if (arr_lvl.length !== 0) {
                    v.lvl_needed = arr_lvl.length === 1 ? arr_lvl[0] : Math.min.apply(null, arr_lvl);
                  }
                }

                v.skill = capitaliseFirstLetter(v.skill);
                v.ul_level = Math.max(v.lvl_needed * 2, v.lvl_needed + 30);
              });
            }
          }, {
            key: "addPresentsTag",
            value: function addPresentsTag() {
              var id = [1160, 1149, 766, 765, 764];
              var floor = {
                764: 2500,
                765: 8e4,
                766: 17e4,
                1149: 45e4,
                1160: 0
              };
              var ceiling = {
                764: 8e4,
                765: 17e4,
                766: 45e4,
                1149: 15e5,
                1160: 1
              };
              item_base.forEach(function (item, itemID) {
                item.tags = '';
                id.forEach(function (presentID) {
                  var a = floor[presentID];
                  var i = ceiling[presentID];
                  var s = item.params.price;

                  if (!item.params.no_present && s <= i && s >= a) {
                    item.tags += 'present' + presentID + '/';
                  }
                });
              });
            }
          }]);

          return WikiService;
        }();

        WikiService.ɵfac = function WikiService_Factory(t) {
          return new (t || WikiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_baseapi_service__WEBPACK_IMPORTED_MODULE_1__["BaseApiService"]));
        };

        WikiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: WikiService,
          factory: WikiService.ɵfac,
          providedIn: 'root'
        });
        return WikiService;
      }();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _Out_frame_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./_Out-frame/main/main.component */
      "rbLE");
      /* harmony import */


      var _Out_frame_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./_Out-frame/page-not-found/page-not-found.component */
      "eE67");
      /* harmony import */


      var _item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./item/item.component */
      "ZfIV");
      /* harmony import */


      var _npc_npc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./npc/npc.component */
      "S6yO");
      /* harmony import */


      var _spell_spell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./spell/spell.component */
      "379c");
      /* harmony import */


      var _arrow_arrow_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./arrow/arrow.component */
      "3DlW");
      /* harmony import */


      var _mob_mob_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./mob/mob.component */
      "SSix");
      /* harmony import */


      var _pet_pet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pet/pet.component */
      "iOwe");
      /* harmony import */


      var _cl_cl_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./cl/cl.component */
      "7tBg");
      /* harmony import */


      var _Quests_party_quest_party_quest_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./_Quests/party-quest/party-quest.component */
      "gI/T");
      /* harmony import */


      var _Quests_kill_quest_kill_quest_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./_Quests/kill-quest/kill-quest.component */
      "VLu1");
      /* harmony import */


      var _Quests_skill_quest_skill_quest_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./_Quests/skill-quest/skill-quest.component */
      "s+sn");
      /* harmony import */


      var _dev_lang_dev_lang_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./dev-lang/dev-lang.component */
      "+KV0");
      /* harmony import */


      var _Loot_RetaliationChest_loot_retaliation_chest_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./_Loot/RetaliationChest/loot-retaliation-chest.component */
      "vYoZ");
      /* harmony import */


      var _Loot_EasterEggs_loot_eastereggs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./_Loot/EasterEggs/loot-eastereggs.component */
      "q2/b");
      /* harmony import */


      var _Loot_SunkenTreasure_loot_sunkentreasure_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./_Loot/SunkenTreasure/loot-sunkentreasure.component */
      "+Bt9");
      /* harmony import */


      var _Loot_DeathDeal_loot_deathdeal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./_Loot/DeathDeal/loot-deathdeal.component */
      "lFFA");
      /* harmony import */


      var _Loot_Presents_loot_presents_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./_Loot/Presents/loot-presents.component */
      "p4Yc");
      /* harmony import */


      var _Loot_HuntingReward_loot_hunting_reward_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./_Loot/HuntingReward/loot-hunting-reward.component */
      "tvyB");
      /* harmony import */


      var _Loot_rose_chest_rose_chest_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./_Loot/rose-chest/rose-chest.component */
      "a19F");
      /* harmony import */


      var _Loot_valentines_present_valentines_present_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./_Loot/valentines-present/valentines-present.component */
      "6feG");

      var routes = [{
        path: '',
        component: _Out_frame_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
      }, {
        path: 'devlang',
        component: _dev_lang_dev_lang_component__WEBPACK_IMPORTED_MODULE_14__["DevLangComponent"]
      },
      /* 舊網址 start */
      {
        path: 'retaliationchest',
        redirectTo: 'retaliation-chest'
      }, {
        path: 'huntingrewardchest',
        redirectTo: 'hunting-reward'
      }, {
        path: 'presents',
        redirectTo: 'present'
      }, {
        path: 'eastereggs',
        redirectTo: 'easter-egg'
      }, {
        path: 'deathsdeal',
        redirectTo: 'deaths-deal'
      }, {
        path: 'sunkentreasure',
        redirectTo: 'sunken-treasure'
      }, {
        path: 'partyquest',
        redirectTo: 'party-quest'
      }, {
        path: 'pq',
        redirectTo: 'party-quest'
      }, {
        path: 'skillquest',
        redirectTo: 'skill-quest'
      }, {
        path: 'sq',
        redirectTo: 'skill-quest'
      }, {
        path: 'killquest',
        redirectTo: 'kill-quest'
      }, {
        path: 'kq',
        redirectTo: 'kill-quest'
      }, {
        path: 'boss-retaliation',
        children: [{
          path: '',
          component: _Loot_RetaliationChest_loot_retaliation_chest_component__WEBPACK_IMPORTED_MODULE_15__["LootRetaliationChestComponent"]
        }, {
          path: ':grade',
          component: _Loot_RetaliationChest_loot_retaliation_chest_component__WEBPACK_IMPORTED_MODULE_15__["LootRetaliationChestComponent"]
        }]
      }, {
        path: 'valentines-present',
        children: [{
          path: '',
          component: _Loot_valentines_present_valentines_present_component__WEBPACK_IMPORTED_MODULE_22__["ValentinesPresentComponent"]
        }, {
          path: ':grade',
          component: _Loot_valentines_present_valentines_present_component__WEBPACK_IMPORTED_MODULE_22__["ValentinesPresentComponent"]
        }]
      }, {
        path: 'rose-chest',
        children: [{
          path: '',
          component: _Loot_rose_chest_rose_chest_component__WEBPACK_IMPORTED_MODULE_21__["RoseChestComponent"]
        }, {
          path: ':grade',
          component: _Loot_rose_chest_rose_chest_component__WEBPACK_IMPORTED_MODULE_21__["RoseChestComponent"]
        }]
      }, {
        path: 'hunting-reward',
        children: [{
          path: '',
          component: _Loot_HuntingReward_loot_hunting_reward_component__WEBPACK_IMPORTED_MODULE_20__["LootHuntingRewardComponent"]
        }, {
          path: ':map',
          component: _Loot_HuntingReward_loot_hunting_reward_component__WEBPACK_IMPORTED_MODULE_20__["LootHuntingRewardComponent"]
        }]
      }, {
        path: 'present',
        children: [{
          path: '',
          component: _Loot_Presents_loot_presents_component__WEBPACK_IMPORTED_MODULE_19__["LootPresentsComponent"]
        }, {
          path: ':grade',
          component: _Loot_Presents_loot_presents_component__WEBPACK_IMPORTED_MODULE_19__["LootPresentsComponent"]
        }]
      }, {
        path: 'easter-egg',
        children: [{
          path: '',
          component: _Loot_EasterEggs_loot_eastereggs_component__WEBPACK_IMPORTED_MODULE_16__["LootEastereggsComponent"]
        }, {
          path: ':grade',
          component: _Loot_EasterEggs_loot_eastereggs_component__WEBPACK_IMPORTED_MODULE_16__["LootEastereggsComponent"]
        }]
      }, {
        path: 'deaths-deal',
        component: _Loot_DeathDeal_loot_deathdeal_component__WEBPACK_IMPORTED_MODULE_18__["LootDeathdealComponent"]
      }, {
        path: 'sunken-treasure',
        component: _Loot_SunkenTreasure_loot_sunkentreasure_component__WEBPACK_IMPORTED_MODULE_17__["LootSunkentreasureComponent"]
      }, {
        path: 'item',
        children: [{
          path: '',
          component: _item_item_component__WEBPACK_IMPORTED_MODULE_4__["ItemComponent"]
        }, {
          path: ':id',
          component: _item_item_component__WEBPACK_IMPORTED_MODULE_4__["ItemComponent"]
        }]
      }, {
        path: 'npc',
        children: [{
          path: '',
          component: _npc_npc_component__WEBPACK_IMPORTED_MODULE_5__["NpcComponent"]
        }, {
          path: ':id',
          component: _npc_npc_component__WEBPACK_IMPORTED_MODULE_5__["NpcComponent"]
        }]
      }, {
        path: 'spell',
        component: _spell_spell_component__WEBPACK_IMPORTED_MODULE_6__["SpellComponent"]
      }, {
        path: 'arrow',
        component: _arrow_arrow_component__WEBPACK_IMPORTED_MODULE_7__["ArrowComponent"]
      }, {
        path: 'mob',
        runGuardsAndResolvers: 'always',
        children: [{
          path: '',
          component: _mob_mob_component__WEBPACK_IMPORTED_MODULE_8__["MobComponent"]
        }, {
          path: ':id',
          component: _mob_mob_component__WEBPACK_IMPORTED_MODULE_8__["MobComponent"]
        }]
      }, {
        path: 'pet',
        component: _pet_pet_component__WEBPACK_IMPORTED_MODULE_9__["PetComponent"]
      }, {
        path: 'cl',
        component: _cl_cl_component__WEBPACK_IMPORTED_MODULE_10__["ClComponent"]
      }, {
        path: 'party-quest',
        runGuardsAndResolvers: 'always',
        component: _Quests_party_quest_party_quest_component__WEBPACK_IMPORTED_MODULE_11__["PartyQuestComponent"]
      }, {
        path: 'kill-quest',
        component: _Quests_kill_quest_kill_quest_component__WEBPACK_IMPORTED_MODULE_12__["KillQuestComponent"]
      }, {
        path: 'skill-quest',
        runGuardsAndResolvers: 'always',
        component: _Quests_skill_quest_skill_quest_component__WEBPACK_IMPORTED_MODULE_13__["SkillQuestComponent"]
      }, {
        path: '**',
        component: _Out_frame_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
      }];

      var AppRoutingModule = /*@__PURE__*/function () {
        var AppRoutingModule = function AppRoutingModule() {
          _classCallCheck(this, AppRoutingModule);
        };

        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AppRoutingModule
        });
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AppRoutingModule_Factory(t) {
            return new (t || AppRoutingModule)();
          },
          providers: [],
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true,
            onSameUrlNavigation: 'reload',
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
            scrollPositionRestoration: 'enabled'
          })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return AppRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "vYoZ":
    /*!****************************************************************************!*\
      !*** ./src/app/_Loot/RetaliationChest/loot-retaliation-chest.component.ts ***!
      \****************************************************************************/

    /*! exports provided: LootRetaliationChestComponent */

    /***/
    function vYoZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LootRetaliationChestComponent", function () {
        return LootRetaliationChestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../language.service */
      "y91y");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../wiki.service */
      "uUtE");
      /* harmony import */


      var _browser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../browser.service */
      "ZRPN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _object_returns_object_returns_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../object-returns/object-returns.component */
      "wQSC");

      function LootRetaliationChestComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-tab", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", ctx_r1.lang.getString(ctx_r1.wiki.object_base[item_r2].name));
        }
      }

      var LootRetaliationChestComponent = /*@__PURE__*/function () {
        var LootRetaliationChestComponent = /*#__PURE__*/function () {
          function LootRetaliationChestComponent(lang, wiki, browser, location, route, router) {
            _classCallCheck(this, LootRetaliationChestComponent);

            this.lang = lang;
            this.wiki = wiki;
            this.browser = browser;
            this.location = location;
            this.route = route;
            this.router = router;
            this.ids = [708, 709, 710];
            this.grades = ['common', 'rare', 'legendary'];
            this.id = 710;
            this.tab = 2;
          }

          _createClass(LootRetaliationChestComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this46 = this;

              this.routeParse();
              this.navigationSubscription = this.router.events.subscribe(function (event) {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                  _this46.routeParse();
                }
              });
            }
          }, {
            key: "setTabIndex",
            value: function setTabIndex(e) {
              this.id = this.ids[e];
              this.setUrl(e);
              this.browser.scrollTop();
            }
          }, {
            key: "setUrl",
            value: function setUrl(index) {
              this.location.replaceState('/boss-retaliation/' + this.grades[index]);
              this.browser.scrollTop();
            }
          }, {
            key: "routeParse",
            value: function routeParse() {
              var grade = this.route.snapshot.paramMap.get('grade');

              if (grade) {
                grade = grade.toLowerCase();
              }

              var index = this.grades.indexOf(grade);
              index = index === -1 ? 2 : index;
              this.tab = index;
              this.id = this.ids[index];
              this.setUrl(index);
            }
          }, {
            key: "ngAfterViewChecked",
            value: function ngAfterViewChecked() {
              var _this47 = this;

              setTimeout(function () {
                var object1 = document.querySelectorAll('.sticky');
                var h1;
                object1.forEach(function (e) {
                  h1 = e.offsetHeight;
                });
                _this47.stickyTop = h1;
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.navigationSubscription.unsubscribe();
            }
          }]);

          return LootRetaliationChestComponent;
        }();

        LootRetaliationChestComponent.ɵfac = function LootRetaliationChestComponent_Factory(t) {
          return new (t || LootRetaliationChestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_3__["WikiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_browser_service__WEBPACK_IMPORTED_MODULE_4__["BrowserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
        };

        LootRetaliationChestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LootRetaliationChestComponent,
          selectors: [["app-loot-retaliation-chest"]],
          hostAttrs: [1, "route-app"],
          decls: 5,
          vars: 4,
          consts: [[1, "flex-v-center"], ["mat-align-tabs", "start", "animationDuration", "0ms", 1, "tab-custom-overflow", "sticky", 2, "width", "100%", 3, "selectedIndex", "selectedIndexChange"], ["tabs", ""], [4, "ngFor", "ngForOf"], [3, "objectID", "stickyTop"], [3, "label"]],
          template: function LootRetaliationChestComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 1, 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function LootRetaliationChestComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
                return ctx.setTabIndex($event);
              })("selectedIndexChange", function LootRetaliationChestComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
                return ctx.tab = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LootRetaliationChestComponent_ng_container_3_Template, 2, 1, "ng-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-object-returns", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.tab);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ids);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("objectID", ctx.id)("stickyTop", ctx.stickyTop);
            }
          },
          directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _object_returns_object_returns_component__WEBPACK_IMPORTED_MODULE_7__["ObjectReturnsComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19Mb290L1JldGFsaWF0aW9uQ2hlc3QvbG9vdC1yZXRhbGlhdGlvbi1jaGVzdC5jb21wb25lbnQuY3NzIn0= */"]
        });
        return LootRetaliationChestComponent;
      }();
      /***/

    },

    /***/
    "wQSC":
    /*!************************************************************!*\
      !*** ./src/app/object-returns/object-returns.component.ts ***!
      \************************************************************/

    /*! exports provided: ObjectReturnsComponent */

    /***/
    function wQSC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObjectReturnsComponent", function () {
        return ObjectReturnsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _level_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../level.service */
      "BIPl");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../wiki.service */
      "uUtE");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../language.service */
      "y91y");
      /* harmony import */


      var _highscore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../highscore.service */
      "8Rav");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function ObjectReturnsComponent_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", ctx_r0.displayedColumns.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.translateLang.ObjectName.trans, "");
        }
      }

      function ObjectReturnsComponent_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.translateLang.Rate.trans);
        }
      }

      function ObjectReturnsComponent_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r17.rate * 100, "1.0"), "%");
        }
      }

      function ObjectReturnsComponent_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.translateLang["Actual Rate"].trans);
        }
      }

      function ObjectReturnsComponent_td_9_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var element_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r18.actual * 100, "1.2-2"), "% ");
        }
      }

      function ObjectReturnsComponent_td_9_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ObjectReturnsComponent_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ObjectReturnsComponent_td_9_ng_container_1_Template, 3, 4, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ObjectReturnsComponent_td_9_ng_container_2_Template, 2, 0, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r18.actual);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !element_r18.actual);
        }
      }

      function ObjectReturnsComponent_ng_container_10_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.translateLang.requiredSkill.trans);
        }
      }

      function ObjectReturnsComponent_ng_container_10_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r24.level, " ");
        }
      }

      function ObjectReturnsComponent_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ObjectReturnsComponent_ng_container_10_th_2_Template, 2, 1, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ObjectReturnsComponent_ng_container_10_td_3_Template, 2, 1, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ObjectReturnsComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.translateLang.Item.trans);
        }
      }

      function ObjectReturnsComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r25.item, " ");
        }
      }

      function ObjectReturnsComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.translateLang.Value.trans);
        }
      }

      function ObjectReturnsComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r26.wiki, ".0-0"), " ");
        }
      }

      function ObjectReturnsComponent_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", ctx_r10.displayedColumns.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r10.translateLang["No loot"].trans, " : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r10.percentNoLoot * 100, "1.2-2"), "%");
        }
      }

      function ObjectReturnsComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", ctx_r11.displayedColumns.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r11.translateLang["Expected Value"].trans, " : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r11.expectedValue, ".0-0"), "");
        }
      }

      function ObjectReturnsComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 28);
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r12.isDisplayName ? "table-row" : "none");
        }
      }

      function ObjectReturnsComponent_tr_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 28);
        }
      }

      function ObjectReturnsComponent_tr_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 29);
        }

        if (rf & 2) {
          var row_r27 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx_r14.ShowCloLevel ? ctx_r14.greaterThan(ctx_r14.statsLevel, row_r27.level) ? "cross" : "tick" : null);
        }
      }

      function ObjectReturnsComponent_tr_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 30);
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r15.percentNoLoot ? "table-row" : "none");
        }
      }

      function ObjectReturnsComponent_tr_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 30);
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r16.isDisplayEV ? "table-row" : "none");
        }
      }

      var _c0 = function _c0() {
        return ["header"];
      };

      var _c1 = function _c1() {
        return ["noLoot"];
      };

      var _c2 = function _c2() {
        return ["ev"];
      };

      var ObjectReturnsComponent = /*@__PURE__*/function () {
        var ObjectReturnsComponent = /*#__PURE__*/function () {
          function ObjectReturnsComponent(lvl, wiki, lang, hs) {
            _classCallCheck(this, ObjectReturnsComponent);

            this.lvl = lvl;
            this.wiki = wiki;
            this.lang = lang;
            this.hs = hs;
            this.objectID = 0;
            this.stickyTop = 0;
            this.baseType = 'object'; // object item

            this.isDisplayName = false;
            this.isDisplayEV = true;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
            this.translateLang = {
              'Actual Rate': {
                trans: '',
                "class": 'w'
              },
              Rate: {
                trans: '',
                "class": 'w'
              },
              Item: {
                trans: '',
                "class": 'i'
              },
              'No loot': {
                trans: '',
                "class": 'm'
              },
              'Expected Value': {
                trans: '',
                "class": 'w'
              },
              ObjectName: {
                trans: '',
                "class": 'n'
              },
              requiredSkill: {
                trans: '',
                "class": 'i'
              },
              Value: {
                trans: '',
                "class": 'w'
              }
            };
          }

          _createClass(ObjectReturnsComponent, [{
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              for (var propertyName in changes) {
                if (propertyName === 'stickyTop') {
                  this.onChangeView();
                } else if (propertyName === 'objectID') {
                  this.getData();
                }
              }
            }
          }, {
            key: "onChangeView",
            value: function onChangeView() {
              var _this48 = this;

              var object = document.querySelectorAll('.mat-header-cell');
              object.forEach(function (e) {
                e.style.top = _this48.stickyTop + 'px';
              });
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this49 = this;

              this.LanguageSubscription = this.lang.settingLang.subscribe(function (e) {
                _this49.onLangChange();
              });
            }
          }, {
            key: "getData",
            value: function getData() {
              var _this50 = this;

              this.displayedColumns = ['rate', 'actual', 'item'];
              this.isDisplayEV ? this.displayedColumns.push('value') : 0;
              this.expectedValue = 0;
              this.percentNoLoot = 0;
              this.ShowCloLevel = false;
              var id = this.objectID;
              var target = this.baseType === 'object' ? this.wiki.object_base : this.wiki.item_base;
              this.ObjectName_en = target[id].name;
              this.translateLang.ObjectName.trans = this.lang.getString(target[id].name);

              if (!id) {
                return;
              }

              this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
              var returns = target[id].params.results[0].returns;
              this.requiredSkill_en = target[id].params.results[0].skill;
              this.translateLang.requiredSkill.trans = this.lvl.translateLang[this.requiredSkill_en];
              var sum = 0;

              for (var key in returns) {
                if (returns.hasOwnProperty(key)) {
                  var temp = returns[key];
                  var obj = void 0;
                  obj = {};
                  obj.item_id = temp.id;
                  obj.item_en = this.wiki.item_base[temp.id].name;
                  obj.item = this.lang.getString(obj.item_en);
                  obj.level = temp.level;
                  obj.rate = temp.max_chance;
                  obj.actual = (1 - sum) * obj.rate;
                  obj.wiki = this.wiki.item_base[temp.id].params.price; //obj.value = this.wiki.item_value[temp.id];

                  this.expectedValue += obj.actual * (obj.value !== null && obj.value >= 0 ? obj.value : obj.wiki);

                  if (obj.level > 1 && !this.ShowCloLevel) {
                    this.ShowCloLevel = true;
                    this.displayedColumns.splice(2, 0, 'level');
                  }

                  sum += obj.actual;
                  this.dataSource.data.push(obj);
                }
              }

              this.percentNoLoot = 1 - sum;

              if (this.ShowCloLevel) {
                this.HighscoreSubscription = this.hs.mainStats.subscribe(function (e) {
                  _this50.onStatsChange();
                });
              } else {
                this.displayedColumns.splice(this.displayedColumns.indexOf('rate'), 1);
              }
            }
          }, {
            key: "onStatsChange",
            value: function onStatsChange() {
              this.statsLevel = this.hs.mainStats.value[this.requiredSkill_en];
              var sum = 0;
              this.expectedValue = 0;

              for (var key in this.dataSource.data) {
                if (this.dataSource.data.hasOwnProperty(key)) {
                  var element = this.dataSource.data[key];

                  if (element.level > this.statsLevel) {
                    element.actual = 0;
                  } else {
                    element.actual = (1 - sum) * element.rate;
                    sum += element.actual; //this.wiki.item_value[element.item_id] = element.value;

                    this.expectedValue += element.actual * (element.value !== null && element.value >= 0 ? element.value : element.wiki);
                  }
                }
              }

              this.percentNoLoot = 1 - sum;
            }
          }, {
            key: "onLangChange",
            value: function onLangChange() {
              var id = this.objectID;
              var target = this.baseType === 'object' ? this.wiki.object_base : this.wiki.item_base;

              for (var key in this.translateLang) {
                if (this.translateLang.hasOwnProperty(key)) {
                  this.translateLang[key].trans = this.lang.getString(key, this.translateLang[key]["class"]);
                }
              }

              for (var _key7 in this.dataSource.data) {
                if (this.dataSource.data.hasOwnProperty(_key7)) {
                  var element = this.dataSource.data[_key7];
                  element.item = this.lang.getString(element.item_en);
                }
              }

              this.ObjectName_en = target[id].name;
              this.translateLang.ObjectName.trans = this.lang.getString(target[id].name);
              this.translateLang.requiredSkill.trans = this.lvl.translateLang[this.requiredSkill_en];
            }
          }, {
            key: "greaterThan",
            value: function greaterThan(main, sub) {
              return sub > main;
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.LanguageSubscription.unsubscribe();

              if (this.ShowCloLevel) {
                this.HighscoreSubscription.unsubscribe();
              }
            }
          }]);

          return ObjectReturnsComponent;
        }();

        ObjectReturnsComponent.ɵfac = function ObjectReturnsComponent_Factory(t) {
          return new (t || ObjectReturnsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_3__["WikiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_highscore_service__WEBPACK_IMPORTED_MODULE_5__["HighscoreService"]));
        };

        ObjectReturnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ObjectReturnsComponent,
          selectors: [["app-object-returns"]],
          inputs: {
            objectID: "objectID",
            stickyTop: "stickyTop",
            baseType: "baseType",
            isDisplayName: "isDisplayName",
            isDisplayEV: "isDisplayEV"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
          decls: 26,
          vars: 12,
          consts: [[1, "flex-v-center"], ["mat-table", "", 1, "doc-table", "doc-table-info", 3, "dataSource"], ["matColumnDef", "header"], ["mat-header-cell", "", "style", "text-align: left", "class", "st-header-cell", 3, "colSpan", 4, "matHeaderCellDef"], ["matColumnDef", "rate"], ["mat-header-cell", "", "class", "st-header-cell", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "right", 4, "matCellDef"], ["matColumnDef", "actual"], [4, "ngIf"], ["matColumnDef", "item"], ["mat-cell", "", "class", "left", 4, "matCellDef"], ["matColumnDef", "value"], ["matColumnDef", "noLoot"], ["mat-footer-cell", "", "class", "right", 3, "colSpan", 4, "matFooterCellDef"], ["matColumnDef", "ev"], ["mat-header-row", "", 3, "display", 4, "matHeaderRowDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "className", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", "class", "black", 3, "display", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-footer-row", "", "class", "black", 3, "display", 4, "matFooterRowDef"], ["mat-header-cell", "", 1, "st-header-cell", 2, "text-align", "left", 3, "colSpan"], ["mat-header-cell", "", 1, "st-header-cell"], ["mat-cell", "", 1, "right"], ["matColumnDef", "level"], ["mat-cell", "", "class", "center access", 4, "matCellDef"], ["mat-cell", "", 1, "center", "access"], ["mat-cell", "", 1, "left"], ["mat-footer-cell", "", 1, "right", 3, "colSpan"], ["mat-header-row", ""], ["mat-row", "", 3, "className"], ["mat-footer-row", "", 1, "black"]],
          template: function ObjectReturnsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ObjectReturnsComponent_th_3_Template, 2, 2, "th", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ObjectReturnsComponent_th_5_Template, 2, 1, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ObjectReturnsComponent_td_6_Template, 3, 4, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ObjectReturnsComponent_th_8_Template, 2, 1, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ObjectReturnsComponent_td_9_Template, 3, 2, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ObjectReturnsComponent_ng_container_10_Template, 4, 0, "ng-container", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ObjectReturnsComponent_th_12_Template, 2, 1, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ObjectReturnsComponent_td_13_Template, 2, 1, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ObjectReturnsComponent_th_15_Template, 2, 1, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ObjectReturnsComponent_td_16_Template, 3, 4, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ObjectReturnsComponent_td_18_Template, 3, 6, "td", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ObjectReturnsComponent_td_20_Template, 3, 6, "td", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ObjectReturnsComponent_tr_21_Template, 1, 2, "tr", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ObjectReturnsComponent_tr_22_Template, 1, 0, "tr", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ObjectReturnsComponent_tr_23_Template, 1, 1, "tr", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ObjectReturnsComponent_tr_24_Template, 1, 2, "tr", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ObjectReturnsComponent_tr_25_Template, 1, 2, "tr", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowCloLevel);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1))("matFooterRowDefSticky", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
            }
          },
          directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterRow"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29iamVjdC1yZXR1cm5zL29iamVjdC1yZXR1cm5zLmNvbXBvbmVudC5jc3MifQ== */"]
        });
        return ObjectReturnsComponent;
      }();
      /***/

    },

    /***/
    "wxHw":
    /*!***********************************!*\
      !*** ./src/app/config.service.ts ***!
      \***********************************/

    /*! exports provided: ConfigService */

    /***/
    function wxHw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
        return ConfigService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ConfigService = /*@__PURE__*/function () {
        var ConfigService = function ConfigService() {
          _classCallCheck(this, ConfigService);

          this.version = 191223;
        };

        ConfigService.ɵfac = function ConfigService_Factory(t) {
          return new (t || ConfigService)();
        };

        ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: ConfigService,
          factory: ConfigService.ɵfac,
          providedIn: 'root'
        });
        return ConfigService;
      }();
      /***/

    },

    /***/
    "x1GA":
    /*!*******************************************************************!*\
      !*** ./src/app/_Out-frame/sidenav-user/sidenav-user.component.ts ***!
      \*******************************************************************/

    /*! exports provided: SidenavUserComponent */

    /***/
    function x1GA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavUserComponent", function () {
        return SidenavUserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _highscore_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../highscore.service */
      "8Rav");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../language.service */
      "y91y");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../app.component */
      "Sy1n");
      /* harmony import */


      var _level_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../level.service */
      "BIPl");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function SidenavUserComponent_ng_container_22_tr_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.hs.mainStatsCopy[ctx_r6.level.combat[i_r4]]);
        }
      }

      function SidenavUserComponent_ng_container_22_tr_1_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.hs.mainStatsCopy[ctx_r7.level.combat[i_r4 + 1]]);
        }
      }

      function SidenavUserComponent_ng_container_22_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidenavUserComponent_ng_container_22_tr_1_span_4_Template, 2, 1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidenavUserComponent_ng_container_22_tr_1_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.hs.mainStats.value[ctx_r10.level.combat[i_r4]] = $event;
          })("input", function SidenavUserComponent_ng_container_22_tr_1_Template_input_input_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.onPlayerChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SidenavUserComponent_ng_container_22_tr_1_span_9_Template, 2, 1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidenavUserComponent_ng_container_22_tr_1_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.hs.mainStats.value[ctx_r14.level.combat[i_r4 + 1]] = $event;
          })("input", function SidenavUserComponent_ng_container_22_tr_1_Template_input_input_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.onPlayerChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.level.translateLang[ctx_r5.level.combat[i_r4]], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.hs.mainStatsCopy.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx_r5.level.range[ctx_r5.level.combat[i_r4]].min);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx_r5.level.range[ctx_r5.level.combat[i_r4]].max);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.hs.mainStats.value[ctx_r5.level.combat[i_r4]]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.level.translateLang[ctx_r5.level.combat[i_r4 + 1]], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.hs.mainStatsCopy.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx_r5.level.range[ctx_r5.level.combat[i_r4 + 1]].min);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx_r5.level.range[ctx_r5.level.combat[i_r4 + 1]].max);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.hs.mainStats.value[ctx_r5.level.combat[i_r4 + 1]]);
        }
      }

      function SidenavUserComponent_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavUserComponent_ng_container_22_tr_1_Template, 11, 10, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r4 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4 % 2 == 0);
        }
      }

      function SidenavUserComponent_ng_container_27_tr_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.hs.mainStatsCopy[ctx_r21.level.pro[i_r19]]);
        }
      }

      function SidenavUserComponent_ng_container_27_tr_1_label_7_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.hs.mainStatsCopy[ctx_r24.level.pro[i_r19 + 1]]);
        }
      }

      function SidenavUserComponent_ng_container_27_tr_1_label_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavUserComponent_ng_container_27_tr_1_label_7_span_2_Template, 2, 1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidenavUserComponent_ng_container_27_tr_1_label_7_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.hs.mainStats.value[ctx_r26.level.pro[i_r19 + 1]] = $event;
          })("input", function SidenavUserComponent_ng_container_27_tr_1_label_7_Template_input_input_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r29.onPlayerChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r22.level.translateLang[ctx_r22.level.pro[i_r19 + 1]], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.hs.mainStatsCopy.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx_r22.level.range[ctx_r22.level.pro[i_r19 + 1]].min);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx_r22.level.range[ctx_r22.level.pro[i_r19 + 1]].max);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r22.hs.mainStats.value[ctx_r22.level.pro[i_r19 + 1]]);
        }
      }

      function SidenavUserComponent_ng_container_27_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidenavUserComponent_ng_container_27_tr_1_span_4_Template, 2, 1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidenavUserComponent_ng_container_27_tr_1_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.hs.mainStats.value[ctx_r31.level.pro[i_r19]] = $event;
          })("input", function SidenavUserComponent_ng_container_27_tr_1_Template_input_input_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r34.onPlayerChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidenavUserComponent_ng_container_27_tr_1_label_7_Template, 4, 5, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r20.level.translateLang[ctx_r20.level.pro[i_r19]], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.hs.mainStatsCopy.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx_r20.level.range[ctx_r20.level.pro[i_r19]].min);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx_r20.level.range[ctx_r20.level.pro[i_r19]].max);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.hs.mainStats.value[ctx_r20.level.pro[i_r19]]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.level.pro[i_r19 + 1]);
        }
      }

      function SidenavUserComponent_ng_container_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavUserComponent_ng_container_27_tr_1_Template, 8, 6, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r19 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r19 % 2 == 0);
        }
      }

      function SidenavUserComponent_span_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.hs.mainStatsCopy.skill_quest);
        }
      }

      var SidenavUserComponent = /*@__PURE__*/function () {
        var SidenavUserComponent = /*#__PURE__*/function () {
          function SidenavUserComponent(hs, language, app, level) {
            _classCallCheck(this, SidenavUserComponent);

            this.hs = hs;
            this.language = language;
            this.app = app;
            this.level = level;
            this.translateLang = {
              'Type in-game name here...': {
                trans: '',
                "class": 'w'
              },
              'info-hs': {
                trans: '',
                "class": 'w'
              },
              'Combat skills': {
                trans: '',
                "class": 'i'
              },
              'Professional skills': {
                trans: '',
                "class": 'i'
              },
              'Combat Level': {
                trans: '',
                "class": 'w'
              },
              Others: {
                trans: '',
                "class": 'w'
              },
              'Skill Quest Points': {
                trans: '',
                "class": 'w'
              }
            };
          }

          _createClass(SidenavUserComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this51 = this;

              this.language.settingLang.subscribe(function (e) {
                _this51.onLangChange();
              });
              this.hs.searchStatus.subscribe(function (status) {
                _this51.onSearchStatusChange(status);
              });
            }
          }, {
            key: "onPlayerChange",
            value: function onPlayerChange() {
              this.hs.mainStats.next(this.hs.mainStats.value.check());
            }
          }, {
            key: "onLangChange",
            value: function onLangChange() {
              for (var key in this.translateLang) {
                if (this.translateLang.hasOwnProperty(key)) {
                  this.translateLang[key].trans = this.language.getString(key, this.translateLang[key]["class"]);
                }
              }
            }
          }, {
            key: "onSearchStatusChange",
            value: function onSearchStatusChange(status) {
              if (status === 'start') {
                document.getElementById('btn-search').classList.add('searching');
                document.getElementById('input-search').setAttribute('disabled', 'disabled');
                document.getElementById('btn-search').setAttribute('disabled', 'disabled');
              } else if (status === 'cding') {
                document.getElementById('btn-search').classList.remove('searching');
                document.getElementById('btn-search').classList.add('cding');
              } else if (status === 'finished') {
                document.getElementById('btn-search').classList.remove('searching');
                document.getElementById('btn-search').classList.remove('cding');
                document.getElementById('input-search').removeAttribute('disabled');
                document.getElementById('btn-search').removeAttribute('disabled');
              } else if (status === 'success') {
                document.getElementById('btn-search').classList.remove('searching');
              } else if (status === 'none') {
                var str = this.language.getString('_PLAYER_ not found.', 'w');
                document.getElementById('btn-search').classList.remove('searching');
                str = str.replace('_PLAYER_', this.hs.searchPlayerName);
                this.app.showDialog(str);
              } else if (status === 'error') {
                var _str = this.language.getString('Failed loading _API_.', 'w');

                _str = _str.replace('_API_', 'Highscores');
                this.app.showDialog(_str);
                document.getElementById('btn-search').classList.remove('searching');
              }
            }
          }]);

          return SidenavUserComponent;
        }();

        SidenavUserComponent.ɵfac = function SidenavUserComponent_Factory(t) {
          return new (t || SidenavUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_highscore_service__WEBPACK_IMPORTED_MODULE_1__["HighscoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_level_service__WEBPACK_IMPORTED_MODULE_4__["LevelService"]));
        };

        SidenavUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: SidenavUserComponent,
          selectors: [["app-sidenav-user"]],
          decls: 38,
          vars: 23,
          consts: [[1, "box-state"], ["colspan", "2"], [1, "search-box"], ["type", "text", "id", "input-search", "maxlength", "16", 3, "placeholder", "ngModel", "ngModelChange", "keyup.enter"], ["id", "btn-search", 1, "icon", 3, "click"], [1, "far", "fas", "icon-search"], [1, "fas", "icon-info", "fa-info-circle", 3, "matTooltip"], [1, "state-content-combat"], [1, "state-header"], [2, "margin-left", "6px", 3, "matTooltip"], [2, "font-size", "12px"], [4, "ngFor", "ngForOf"], [1, "state-content-pro"], [1, "state-content-other"], [1, "state-header-other", "state-header", "col-100"], [1, "input-label"], ["class", "level-hint", 4, "ngIf"], ["type", "number", "required", "", 1, "input-skill-val-last", 3, "ngModel", "min", "max", "ngModelChange", "input"], [4, "ngIf"], ["type", "number", "required", "", 3, "ngModel", "min", "max", "ngModelChange", "input"], [1, "level-hint"], ["class", "input-label", 4, "ngIf"]],
          template: function SidenavUserComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidenavUserComponent_Template_input_ngModelChange_6_listener($event) {
                return ctx.hs.searchPlayerName = $event;
              })("keyup.enter", function SidenavUserComponent_Template_input_keyup_enter_6_listener() {
                return ctx.hs.searchPlayer();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavUserComponent_Template_button_click_7_listener() {
                return ctx.hs.searchPlayer();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "number");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ")");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SidenavUserComponent_ng_container_22_Template, 2, 1, "ng-container", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SidenavUserComponent_ng_container_27_Template, 2, 1, "ng-container", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SidenavUserComponent_span_36_Template, 2, 1, "span", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidenavUserComponent_Template_input_ngModelChange_37_listener($event) {
                return ctx.hs.mainStats.value["skill_quest"] = $event;
              })("input", function SidenavUserComponent_Template_input_input_37_listener() {
                return ctx.onPlayerChange();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.translateLang["Type in-game name here..."].trans)("ngModel", ctx.hs.searchPlayerName);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.translateLang["info-hs"].trans);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.translateLang["Combat skills"].trans);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("matTooltip", "", ctx.translateLang["Combat Level"].trans, " = ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 17, ctx.hs.mainStats.value.cl_int, "1."), "");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 20, ctx.hs.mainStats.value.cl_int, "1."), "");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hs.mainStats.value.cl_float);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.level.combat);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.translateLang["Professional skills"].trans);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.level.pro);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.translateLang["Others"].trans);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.translateLang["Skill Quest Points"].trans, " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hs.mainStatsCopy.name);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx.level.range["skill_quest"].min);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.level.range["skill_quest"].max);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hs.mainStats.value["skill_quest"]);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]],
          styles: [".box-state[_ngcontent-%COMP%] {\r\n  padding: 5px 8px;\r\n  min-width: 300px;\r\n  line-height: 2;\r\n}\r\n@media screen and (max-width: 600px) {\r\n  .box-state[_ngcontent-%COMP%] {\r\n    overflow:auto;\r\n    height:auto;\r\n  }\r\n}\r\n.box-state[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n  border-collapse: separate;\r\n  border-spacing: 0;\r\n  width: 100%;\r\n}\r\n.box-state[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .box-state[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n.search-box[_ngcontent-%COMP%] {\r\n  width: calc(100% - 22px);\r\n  vertical-align: middle;\r\n  white-space: nowrap;\r\n  display: inline-flex;\r\n}\r\n.search-box[_ngcontent-%COMP%]   button.icon[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background-image: none;\r\n  background-color: transparent;\r\n  box-shadow: none;\r\n  height: 30px;\r\n  width: 30px;\r\n  cursor: pointer;\r\n  padding: 0;\r\n}\r\n#btn-search[_ngcontent-%COMP%]:disabled {\r\n  color: rgba(255, 255, 255, 0.3);\r\n  cursor: default;\r\n}\r\n.icon-search[_ngcontent-%COMP%]::before {\r\n  content: \"\\f002\";\r\n}\r\n.cding[_ngcontent-%COMP%]   .icon-search[_ngcontent-%COMP%]::before {\r\n  content: \"\\f254\";\r\n  -webkit-font-smoothing: antialiased;\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  line-height: 1;\r\n  -webkit-animation: spin 6s infinite linear;\r\n          animation: spin 6s infinite linear;\r\n}\r\n.searching[_ngcontent-%COMP%]   .icon-search[_ngcontent-%COMP%]::before {\r\n  content: \"\\f2dc\";\r\n  -webkit-font-smoothing: antialiased;\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  line-height: 1;\r\n  -webkit-animation: spin 6s infinite linear;\r\n          animation: spin 6s infinite linear;\r\n}\r\n@-webkit-keyframes spin {\r\n  from {\r\n    transform: rotate(0);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spin {\r\n  from {\r\n    transform: rotate(0);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n.state-header[_ngcontent-%COMP%] {\r\n  padding: 4px 10px;\r\n  margin-top: 2px;\r\n  margin-bottom: 2px;\r\n  border: 1px solid rgb(255, 255, 255, .3);\r\n  text-align: center;\r\n  line-height: 1;\r\n}\r\n.state-header-name[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  color: #CCC;\r\n}\r\n.level-hint[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  text-align: right;\r\n  font-size: 12px;\r\n  top: -16px;\r\n  right: 0px;\r\n  color: orange;\r\n  visibility: hidden;\r\n}\r\n#input-search[_ngcontent-%COMP%] {\r\n  width: calc(100% - 30px);\r\n  height: 30px;\r\n}\r\n.input-label[_ngcontent-%COMP%]   .input-skill-val-last[_ngcontent-%COMP%] {\r\n  width: 120px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX091dC1mcmFtZS9zaWRlbmF2LXVzZXIvc2lkZW5hdi11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLFdBQVc7RUFDYjtBQUNGO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUNBOztFQUVFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFHN0IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQyxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLDBDQUFrQztVQUFsQyxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCwwQ0FBa0M7VUFBbEMsa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7QUFQQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFVBQVU7RUFDVixVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvX091dC1mcmFtZS9zaWRlbmF2LXVzZXIvc2lkZW5hdi11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94LXN0YXRlIHtcclxuICBwYWRkaW5nOiA1cHggOHB4O1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuYm94LXN0YXRlIHtcclxuICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICB9XHJcbn1cclxuLmJveC1zdGF0ZSB0YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uYm94LXN0YXRlIHRhYmxlLFxyXG4uYm94LXN0YXRlIHRhYmxlIHRkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnNlYXJjaC1ib3gge1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMnB4KTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuLnNlYXJjaC1ib3ggYnV0dG9uLmljb24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuI2J0bi1zZWFyY2g6ZGlzYWJsZWQge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcbi5pY29uLXNlYXJjaDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZjAwMlwiO1xyXG59XHJcbi5jZGluZyAuaWNvbi1zZWFyY2g6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGYyNTRcIjtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGFuaW1hdGlvbjogc3BpbiA2cyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuLnNlYXJjaGluZyAuaWNvbi1zZWFyY2g6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGYyZGNcIjtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGFuaW1hdGlvbjogc3BpbiA2cyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4uc3RhdGUtaGVhZGVyIHtcclxuICBwYWRkaW5nOiA0cHggMTBweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1LCAuMyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbi5zdGF0ZS1oZWFkZXItbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuYnV0dG9uIHtcclxuICBjb2xvcjogI0NDQztcclxufVxyXG4ubGV2ZWwtaGludCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0b3A6IC0xNnB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgY29sb3I6IG9yYW5nZTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuI2lucHV0LXNlYXJjaCB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG4uaW5wdXQtbGFiZWwgLmlucHV0LXNraWxsLXZhbC1sYXN0IHtcclxuICB3aWR0aDogMTIwcHg7XHJcbn1cclxuIl19 */"]
        });
        return SidenavUserComponent;
      }();
      /***/

    },

    /***/
    "y5ku":
    /*!************************************************************************!*\
      !*** ./src/app/_Quests/party-quest-mobs/party-quest-mobs.component.ts ***!
      \************************************************************************/

    /*! exports provided: PartyQuestMobsComponent */

    /***/
    function y5ku(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PartyQuestMobsComponent", function () {
        return PartyQuestMobsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../wiki.service */
      "uUtE");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../language.service */
      "y91y");
      /* harmony import */


      var _party_quest_party_quest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../party-quest/party-quest.service */
      "BL1I");
      /* harmony import */


      var _highscore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../highscore.service */
      "8Rav");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function PartyQuestMobsComponent_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PartyQuestMobsComponent_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r8.cl);
        }
      }

      function PartyQuestMobsComponent_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.translateLang["max damage"].trans);
        }
      }

      function PartyQuestMobsComponent_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r9 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pdanger", !ctx_r3.greaterThan(element_r9.dmg * 3, ctx_r3.hs.mainStats.value.health));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r9.dmg);
        }
      }

      function PartyQuestMobsComponent_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.translateLang.MOB.trans);
        }
      }

      function PartyQuestMobsComponent_td_9_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r10.melee_block);
        }
      }

      function PartyQuestMobsComponent_td_9_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r10.magic_block);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          i: a0
        };
      };

      function PartyQuestMobsComponent_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PartyQuestMobsComponent_td_9_div_4_Template, 2, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PartyQuestMobsComponent_td_9_div_5_Template, 2, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, element_r10.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r10.mob, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r10.melee_block);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r10.magic_block);
        }
      }

      function PartyQuestMobsComponent_tr_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
        }
      }

      function PartyQuestMobsComponent_tr_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
        }

        if (rf & 2) {
          var row_r15 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cross", ctx_r7.outOfRange(row_r15.cl, ctx_r7.pq.level.normalMin, ctx_r7.pq.level.normalMax))("tick", !ctx_r7.outOfRange(row_r15.cl, ctx_r7.pq.level.normalMin, ctx_r7.pq.level.normalMax));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r7.pq.onlygreen && ctx_r7.outOfRange(row_r15.cl, ctx_r7.pq.level.normalMin, ctx_r7.pq.level.normalMax));
        }
      }

      var PartyQuestMobsComponent = /*@__PURE__*/function () {
        var PartyQuestMobsComponent = /*#__PURE__*/function () {
          function PartyQuestMobsComponent(wiki, lang, pq, hs) {
            _classCallCheck(this, PartyQuestMobsComponent);

            this.wiki = wiki;
            this.lang = lang;
            this.pq = pq;
            this.hs = hs;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
            this.displayedColumns = ['cl', 'mob', 'dmg'];
            this.translateLang = {
              MOB: {
                trans: '',
                "class": 'm'
              },
              'max damage': {
                trans: '',
                "class": 'd'
              }
            };
          }

          _createClass(PartyQuestMobsComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this52 = this;

              this.pq_diff_Subscription = this.pq.difficulty.subscribe(function (e) {
                _this52.onStatsChange();
              });
              this.LanguageSubscription = this.lang.settingLang.subscribe(function (e) {
                _this52.onLangChange();
              });
              this.HighscoreSubscription = this.hs.mainStats.subscribe(function (e) {
                _this52.onStatsChange();
              });
              this.getData();
            }
          }, {
            key: "getData",
            value: function getData() {
              this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();

              for (var key in this.wiki.npc_base) {
                if (this.wiki.npc_base.hasOwnProperty(key)) {
                  var temp = this.wiki.npc_base[key];

                  if (temp.params.in_dungeon) {
                    var obj = {};
                    obj.cl = temp.params.combat_level;
                    var magic_sum = 0;

                    if (temp.temp.magics) {
                      for (var i = 0; i < temp.temp.magics.length; i++) {
                        var id = temp.temp.magics[i].id;
                        var magic = this.wiki.Magic[id].params; // temp.temp.magic/1.2 + magic.penetration

                        magic_sum += magic.basic_damage;
                      }
                    } // need reCALCULATE


                    obj.dmg = Math.ceil(temp.temp.total_strength / 5) + 1 + magic_sum;
                    obj.id = key;
                    obj.mob_en = temp.name;
                    obj.mob = this.lang.getString(temp.name);
                    obj.magic_block = temp.temp.magic_block;
                    obj.melee_block = temp.temp.melee_block;
                    this.dataSource.data.push(obj);
                  }
                }
              }

              this.dataSource.data.sort(function (a, b) {
                return a.cl < b.cl ? 1 : -1;
              });
            }
          }, {
            key: "ngAfterViewChecked",
            value: function ngAfterViewChecked() {
              var object = document.querySelectorAll('.mat-header-cell');

              for (var i = 0; i < object.length; i++) {
                object[i].style.top = this.stickyTop + 'px';
              }
            }
          }, {
            key: "onStatsChange",
            value: function onStatsChange() {}
          }, {
            key: "onLangChange",
            value: function onLangChange() {
              for (var key in this.translateLang) {
                if (this.translateLang.hasOwnProperty(key)) {
                  this.translateLang[key].trans = this.lang.getString(key, this.translateLang[key]["class"]);
                }
              }

              for (var _key8 in this.dataSource.data) {
                if (this.dataSource.data.hasOwnProperty(_key8)) {
                  var element = this.dataSource.data[_key8];
                  element.mob = this.lang.getString(element.mob_en);
                }
              }
            }
          }, {
            key: "greaterThan",
            value: function greaterThan(main, sub) {
              return sub > main;
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.LanguageSubscription.unsubscribe();
              this.HighscoreSubscription.unsubscribe();
              this.pq_diff_Subscription.unsubscribe();
            }
          }, {
            key: "outOfRange",
            value: function outOfRange(num, min, max) {
              return num > max || num < min;
            }
          }]);

          return PartyQuestMobsComponent;
        }();

        PartyQuestMobsComponent.ɵfac = function PartyQuestMobsComponent_Factory(t) {
          return new (t || PartyQuestMobsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_2__["WikiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_party_quest_party_quest_service__WEBPACK_IMPORTED_MODULE_4__["PartyQuestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_highscore_service__WEBPACK_IMPORTED_MODULE_5__["HighscoreService"]));
        };

        PartyQuestMobsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: PartyQuestMobsComponent,
          selectors: [["app-party-quest-mobs"]],
          inputs: {
            stickyTop: "stickyTop"
          },
          decls: 12,
          vars: 4,
          consts: [["mat-table", "", 1, "doc-table", "doc-table-info", 3, "dataSource"], ["matColumnDef", "cl"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "right access", 4, "matCellDef"], ["matColumnDef", "dmg"], ["mat-cell", "", "class", "right", 3, "pdanger", 4, "matCellDef"], ["matColumnDef", "mob"], ["mat-cell", "", "class", "left", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "cross", "tick", "hidden", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "right", "access"], ["mat-cell", "", 1, "right"], ["mat-cell", "", 1, "left"], ["routerLink", "/mob", 3, "queryParams"], [1, "block"], ["class", "mspot mspot-green", 4, "ngIf"], ["class", "mspot mspot-red", 4, "ngIf"], [1, "mspot", "mspot-green"], [1, "mspot", "mspot-red"], ["mat-header-row", ""], ["mat-row", "", 3, "hidden"]],
          template: function PartyQuestMobsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PartyQuestMobsComponent_th_2_Template, 2, 0, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PartyQuestMobsComponent_td_3_Template, 2, 1, "td", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PartyQuestMobsComponent_th_5_Template, 2, 1, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PartyQuestMobsComponent_td_6_Template, 2, 3, "td", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PartyQuestMobsComponent_th_8_Template, 2, 1, "th", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PartyQuestMobsComponent_td_9_Template, 6, 6, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PartyQuestMobsComponent_tr_10_Template, 1, 0, "tr", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PartyQuestMobsComponent_tr_11_Template, 1, 5, "tr", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            }
          },
          directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
          styles: ["td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\na[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n.pdanger[_ngcontent-%COMP%]{\r\n  background-color: rgb(139, 0, 0, .5) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX1F1ZXN0cy9wYXJ0eS1xdWVzdC1tb2JzL3BhcnR5LXF1ZXN0LW1vYnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsK0NBQStDO0FBQ2pEIiwiZmlsZSI6InNyYy9hcHAvX1F1ZXN0cy9wYXJ0eS1xdWVzdC1tb2JzL3BhcnR5LXF1ZXN0LW1vYnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRkIGF7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuYSAuYmxvY2t7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4ucGRhbmdlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAwLCAwLCAuNSkgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"]
        });
        return PartyQuestMobsComponent;
      }();
      /***/

    },

    /***/
    "y91y":
    /*!*************************************!*\
      !*** ./src/app/language.service.ts ***!
      \*************************************/

    /*! exports provided: LanguageService */

    /***/
    function y91y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
        return LanguageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./config.service */
      "wxHw");
      /* harmony import */


      var _baseapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./baseapi.service */
      "JY2j");

      var LanguageService = /*@__PURE__*/function () {
        var LanguageService = /*#__PURE__*/function () {
          function LanguageService(config, api) {
            _classCallCheck(this, LanguageService);

            this.config = config;
            this.api = api;
            this.defaultLang = 'en';
            this.siteTag = 'mo_tool';
            this.ref = {
              q: 'quests',
              w: 'mo_tool',
              i: 'interface',
              n: 'names',
              m: 'mods',
              d: 'item_description'
            };
            this.siteSupportsLang = ['en', 'zh', 'zh-tw'];
            this.lang = lang;
            this.isSupportsLoading = false;
            this.isSupportsLoaded = false;
            this.supported = [];
            this.settingLang = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
            this.settingLangName = 'English';
            this.langChangTo = '';
          }

          _createClass(LanguageService, [{
            key: "init",
            value: function () {
              var _init3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                return regeneratorRuntime.wrap(function _callee9$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        this.importSiteSupportsLang();
                        this.langChangTo = localStorage.lang !== undefined ? this.checkLangCode(localStorage.lang) : this.defaultLang;

                        if (this.langChangTo !== this.defaultLang) {
                          this.getLanguage(this.defaultLang, true);
                        }

                        _context11.next = 5;
                        return this.getLanguage(this.langChangTo, true);

                      case 5:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee9, this);
              }));

              function init() {
                return _init3.apply(this, arguments);
              }

              return init;
            }()
          }, {
            key: "checkLangCode",
            value: function checkLangCode(langCode) {
              if (Translate.settings.hasOwnProperty(langCode)) {
                return langCode;
              }

              return this.defaultLang;
            }
          }, {
            key: "importSiteSupportsLang",
            value: function importSiteSupportsLang() {
              var _this53 = this;

              this.siteSupportsLang.forEach(function (key) {
                if (Translate.settings[key]) {
                  Translate.settings[key][_this53.siteTag + '_' + key] = _this53.config.version;
                }
              });
              Translate.settings.zh.name = '简体中文';
              Translate.settings['zh-tw'].name = '繁體中文';
            }
          }, {
            key: "getString",
            value: function getString(_string) {
              var _class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'n';

              var _lang = this.settingLang.value;
              var result = '';
              _class = this.ref[_class];

              if (lang[_lang] && lang[_lang][_class] && lang[_lang][_class][_string]) {
                result = lang[_lang][_class][_string];
              } else if (lang.en[_class] && lang.en[_class][_string]) {
                result = lang.en[_class][_string];
              }

              if (result === '' || result === undefined) {
                result = _string;
              }

              return result;
            }
          }, {
            key: "getSupports",
            value: function getSupports() {
              var _this54 = this;

              if (this.isSupportsLoading || this.isSupportsLoaded) {
                return Promise.resolve();
              }

              this.isSupportsLoading = true;
              return this.api.getSupportsLanguage().then(function (e) {
                var result = e;

                if (result === undefined) {
                  _this54.isSupportsLoading = false;
                  return Promise.reject();
                }

                for (var key in result) {
                  if (result.hasOwnProperty(key)) {
                    if (key !== _this54.defaultLang && result[key]['lang_' + key] === undefined) {
                      delete result[key];
                    }
                  }
                }

                Translate.settings = result;

                _this54.importSiteSupportsLang();

                _this54.isSupportsLoaded = true;
              });
            }
          }, {
            key: "getLanguage",
            value: function getLanguage(langCode) {
              var _this55 = this;

              var getHash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

              if (langCode === this.settingLang.value) {
                return Promise.resolve();
              }

              langCode = this.checkLangCode(langCode);
              var isSupported = this.supported.find(function (e) {
                return e === langCode;
              });

              if (isSupported) {
                this.changeLang(langCode);
                return Promise.resolve();
              } else {
                return this.api.getLanguage(langCode, getHash).then(function () {
                  _this55.changeLang(langCode);

                  _this55.supported.push(langCode);
                })["catch"](function () {});
              }
            }
          }, {
            key: "changeLang",
            value: function changeLang(langCode) {
              this.settingLang.next(langCode);
              this.settingLangName = Translate.settings[langCode].name;
              localStorage.lang = langCode;
            }
          }]);

          return LanguageService;
        }();

        LanguageService.ɵfac = function LanguageService_Factory(t) {
          return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_baseapi_service__WEBPACK_IMPORTED_MODULE_3__["BaseApiService"]));
        };

        LanguageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: LanguageService,
          factory: LanguageService.ɵfac,
          providedIn: 'root'
        });
        return LanguageService;
      }();
      /***/

    },

    /***/
    "yVgE":
    /*!**************************************************************************!*\
      !*** ./src/app/object-returns-muliti/object-returns-muliti.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ObjectReturnsMulitiComponent */

    /***/
    function yVgE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObjectReturnsMulitiComponent", function () {
        return ObjectReturnsMulitiComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _level_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../level.service */
      "BIPl");
      /* harmony import */


      var _wiki_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../wiki.service */
      "uUtE");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../language.service */
      "y91y");
      /* harmony import */


      var _highscore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../highscore.service */
      "8Rav");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");

      function ObjectReturnsMulitiComponent_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", ctx_r0.displayedColumns.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.translateLang.ObjectName.trans, "");
        }
      }

      function ObjectReturnsMulitiComponent_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.translateLang.Rate.trans);
        }
      }

      function ObjectReturnsMulitiComponent_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r21.rate * 100, "1.0"), "%");
        }
      }

      function ObjectReturnsMulitiComponent_td_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 100% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ObjectReturnsMulitiComponent_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.translateLang["Actual Rate"].trans);
        }
      }

      function ObjectReturnsMulitiComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r22.actual * 100, "1.2-2"), "%");
        }
      }

      function ObjectReturnsMulitiComponent_td_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r6.percentNoLoot * 100 + "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r6.percentNoLoot * 100, "1.2-2"), "% ");
        }
      }

      function ObjectReturnsMulitiComponent_ng_container_12_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.requiredSkillTrans);
        }
      }

      function ObjectReturnsMulitiComponent_ng_container_12_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r26.level, " ");
        }
      }

      function ObjectReturnsMulitiComponent_ng_container_12_td_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 32);
        }
      }

      function ObjectReturnsMulitiComponent_ng_container_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ObjectReturnsMulitiComponent_ng_container_12_th_2_Template, 2, 1, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ObjectReturnsMulitiComponent_ng_container_12_td_3_Template, 2, 1, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ObjectReturnsMulitiComponent_ng_container_12_td_4_Template, 1, 0, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ObjectReturnsMulitiComponent_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.translateLang.Item.trans);
        }
      }

      function ObjectReturnsMulitiComponent_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r27.item, " ");
        }
      }

      function ObjectReturnsMulitiComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.translateLang["No loot"].trans);
        }
      }

      function ObjectReturnsMulitiComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.translateLang.Value.trans);
        }
      }

      function ObjectReturnsMulitiComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r28.wiki, ".0-0"), " ");
        }
      }

      function ObjectReturnsMulitiComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 34);
        }
      }

      function ObjectReturnsMulitiComponent_td_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", ctx_r14.displayedColumns.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r14.translateLang["No loot"].trans, " : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r14.percentNoLoot * 100, "1.2-2"), "%");
        }
      }

      function ObjectReturnsMulitiComponent_td_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", ctx_r15.displayedColumns.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r15.translateLang["Expected Value"].trans, " : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r15.expectedValue, ".0-0"), "");
        }
      }

      function ObjectReturnsMulitiComponent_tr_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 36);
        }
      }

      function ObjectReturnsMulitiComponent_tr_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 36);
        }
      }

      function ObjectReturnsMulitiComponent_tr_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 37);
        }

        if (rf & 2) {
          var row_r29 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx_r18.greaterThan(ctx_r18.statsLevel, row_r29.level) ? "cross" : "tick");
        }
      }

      function ObjectReturnsMulitiComponent_tr_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 38);
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r19.percentNoLoot ? "table-row" : "none");
        }
      }

      function ObjectReturnsMulitiComponent_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 38);
        }
      }

      var _c0 = function _c0() {
        return ["header"];
      };

      var _c1 = function _c1() {
        return ["noLoot"];
      };

      var _c2 = function _c2() {
        return ["ev"];
      };

      var ObjectReturnsMulitiComponent = /*@__PURE__*/function () {
        var ObjectReturnsMulitiComponent = /*#__PURE__*/function () {
          function ObjectReturnsMulitiComponent(lvl, wiki, lang, hs) {
            _classCallCheck(this, ObjectReturnsMulitiComponent);

            this.lvl = lvl;
            this.wiki = wiki;
            this.lang = lang;
            this.hs = hs;
            this.objectID = 0;
            this.stickyTop = 0;
            this.showName = false;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
            this.translateLang = {
              'Actual Rate': {
                trans: '',
                "class": 'w'
              },
              Rate: {
                trans: '',
                "class": 'w'
              },
              Item: {
                trans: '',
                "class": 'i'
              },
              'No loot': {
                trans: '',
                "class": 'm'
              },
              'Expected Value': {
                trans: '',
                "class": 'w'
              },
              ObjectName: {
                trans: '',
                "class": 'n'
              },
              Value: {
                trans: '',
                "class": 'w'
              }
            };
          }

          _createClass(ObjectReturnsMulitiComponent, [{
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              for (var propertyName in changes) {
                if (propertyName === 'stickyTop') {
                  this.onChangeView();
                } else if (propertyName === 'key') {
                  this.getData();
                }
              }
            }
          }, {
            key: "onChangeView",
            value: function onChangeView() {
              var _this56 = this;

              var object = document.querySelectorAll('.mat-header-cell');
              object.forEach(function (e) {
                e.style.top = _this56.stickyTop + 'px';
              });
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this57 = this;

              this.LanguageSubscription = this.lang.settingLang.subscribe(function (e) {
                _this57.onLangChange();
              });
            }
          }, {
            key: "getData",
            value: function getData() {
              var _this58 = this;

              this.expectedValue = 0;
              var id = this.objectID;
              var target = this.wiki.object_base;
              this.ObjectName_en = target[id].name;
              this.translateLang.ObjectName.trans = this.lang.getString(target[id].name);
              this.percentNoLoot = 0;
              this.ShowCloLevel = false;
              this.displayedColumns = ['rate', 'actual', 'item', 'wiki'];

              if (!id) {
                return;
              }

              this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
              var returns = target[id].params.results[0].returns;
              this.requiredSkill = target[id].params.results[0].skill;
              this.requiredSkillTrans = this.lvl.translateLang[this.requiredSkill];
              var sum = 0;

              for (var key in returns) {
                if (returns.hasOwnProperty(key) && returns[key].consumes[0].id === this.key * 1) {
                  var temp = returns[key];
                  var obj = void 0;
                  obj = {};
                  obj.item_id = temp.id;
                  obj.item_en = this.wiki.item_base[temp.id].name;
                  obj.item = this.lang.getString(obj.item_en);
                  obj.level = temp.level;
                  obj.rate = temp.max_chance;
                  obj.actual = (1 - sum) * obj.rate;
                  obj.wiki = this.wiki.item_base[temp.id].params.price;
                  this.expectedValue += obj.actual * obj.wiki;

                  if (obj.level > 1 && !this.ShowCloLevel) {
                    this.ShowCloLevel = true;
                    this.displayedColumns.splice(2, 0, 'level');
                  }

                  sum += obj.actual;
                  this.dataSource.data.push(obj);
                }
              }

              this.percentNoLoot = 1 - sum;

              if (this.ShowCloLevel) {
                this.HighscoreSubscription = this.hs.mainStats.subscribe(function (e) {
                  _this58.onStatsChange();
                });
              }
            }
          }, {
            key: "onStatsChange",
            value: function onStatsChange() {
              this.statsLevel = this.hs.mainStats.value[this.requiredSkill];
              var sum = 0;
              this.expectedValue = 0;

              for (var key in this.dataSource.data) {
                if (this.dataSource.data.hasOwnProperty(key)) {
                  var element = this.dataSource.data[key];

                  if (element.level > this.statsLevel) {
                    element.actual = 0;
                  } else {
                    element.actual = (1 - sum) * element.rate;
                    sum += element.actual;
                    this.expectedValue += element.actual * element.wiki;
                  }
                }
              }

              this.percentNoLoot = 1 - sum;
            }
          }, {
            key: "onLangChange",
            value: function onLangChange() {
              var id = this.objectID;
              var target = this.wiki.object_base;
              this.requiredSkillTrans = this.lvl.translateLang[this.requiredSkill];

              for (var key in this.translateLang) {
                if (this.translateLang.hasOwnProperty(key)) {
                  this.translateLang[key].trans = this.lang.getString(key, this.translateLang[key]["class"]);
                }
              }

              for (var _key9 in this.dataSource.data) {
                if (this.dataSource.data.hasOwnProperty(_key9)) {
                  var element = this.dataSource.data[_key9];
                  element.item = this.lang.getString(element.item_en);
                }
              }

              this.ObjectName_en = target[id].name;
              this.translateLang.ObjectName.trans = this.lang.getString(target[id].name);
            }
          }, {
            key: "greaterThan",
            value: function greaterThan(main, sub) {
              return sub > main;
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.LanguageSubscription.unsubscribe();

              if (this.ShowCloLevel) {
                this.HighscoreSubscription.unsubscribe();
              }
            }
          }]);

          return ObjectReturnsMulitiComponent;
        }();

        ObjectReturnsMulitiComponent.ɵfac = function ObjectReturnsMulitiComponent_Factory(t) {
          return new (t || ObjectReturnsMulitiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wiki_service__WEBPACK_IMPORTED_MODULE_3__["WikiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_highscore_service__WEBPACK_IMPORTED_MODULE_5__["HighscoreService"]));
        };

        ObjectReturnsMulitiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ObjectReturnsMulitiComponent,
          selectors: [["app-object-returns-muliti"]],
          inputs: {
            objectID: "objectID",
            stickyTop: "stickyTop",
            showName: "showName",
            key: "key"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
          decls: 30,
          vars: 12,
          consts: [[1, "mo-card", "flex-v-center"], ["mat-table", "", 1, "doc-table", "doc-table-info", 3, "dataSource"], ["matColumnDef", "header"], ["mat-header-cell", "", "style", "text-align: left", 3, "colSpan", 4, "matHeaderCellDef"], ["matColumnDef", "rate"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "right", 4, "matCellDef"], ["mat-footer-cell", "", "class", "right", "matTooltip", "100%", 4, "matFooterCellDef"], ["matColumnDef", "actual"], ["mat-footer-cell", "", "class", "right", 3, "matTooltip", 4, "matFooterCellDef"], [4, "ngIf"], ["matColumnDef", "item"], ["mat-cell", "", "class", "left", 4, "matCellDef"], ["mat-footer-cell", "", "class", "left", 4, "matFooterCellDef"], ["matColumnDef", "wiki"], ["matColumnDef", "noLoot"], ["mat-footer-cell", "", "class", "right", 3, "colSpan", 4, "matFooterCellDef"], ["matColumnDef", "ev"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "className", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", "class", "black", 3, "display", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-footer-row", "", "class", "black", 4, "matFooterRowDef"], ["mat-header-cell", "", 2, "text-align", "left", 3, "colSpan"], ["mat-header-cell", ""], ["mat-cell", "", 1, "right"], ["mat-footer-cell", "", "matTooltip", "100%", 1, "right"], ["mat-footer-cell", "", 1, "right", 3, "matTooltip"], ["matColumnDef", "level"], ["mat-cell", "", "class", "center access", 4, "matCellDef"], ["mat-footer-cell", "", "class", "center", 4, "matFooterCellDef"], ["mat-cell", "", 1, "center", "access"], ["mat-footer-cell", "", 1, "center"], ["mat-cell", "", 1, "left"], ["mat-footer-cell", "", 1, "left"], ["mat-footer-cell", "", 1, "right", 3, "colSpan"], ["mat-header-row", ""], ["mat-row", "", 3, "className"], ["mat-footer-row", "", 1, "black"]],
          template: function ObjectReturnsMulitiComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ObjectReturnsMulitiComponent_th_3_Template, 2, 2, "th", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ObjectReturnsMulitiComponent_th_5_Template, 2, 1, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ObjectReturnsMulitiComponent_td_6_Template, 3, 4, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ObjectReturnsMulitiComponent_td_7_Template, 2, 0, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ObjectReturnsMulitiComponent_th_9_Template, 2, 1, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ObjectReturnsMulitiComponent_td_10_Template, 3, 4, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ObjectReturnsMulitiComponent_td_11_Template, 3, 5, "td", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ObjectReturnsMulitiComponent_ng_container_12_Template, 5, 0, "ng-container", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ObjectReturnsMulitiComponent_th_14_Template, 2, 1, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ObjectReturnsMulitiComponent_td_15_Template, 2, 1, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ObjectReturnsMulitiComponent_td_16_Template, 2, 1, "td", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ObjectReturnsMulitiComponent_th_18_Template, 2, 1, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ObjectReturnsMulitiComponent_td_19_Template, 3, 4, "td", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ObjectReturnsMulitiComponent_td_20_Template, 1, 0, "td", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ObjectReturnsMulitiComponent_td_22_Template, 3, 6, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ObjectReturnsMulitiComponent_td_24_Template, 3, 6, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ObjectReturnsMulitiComponent_tr_25_Template, 1, 0, "tr", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ObjectReturnsMulitiComponent_tr_26_Template, 1, 0, "tr", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ObjectReturnsMulitiComponent_tr_27_Template, 1, 1, "tr", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ObjectReturnsMulitiComponent_tr_28_Template, 1, 2, "tr", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ObjectReturnsMulitiComponent_tr_29_Template, 1, 0, "tr", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowCloLevel);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1))("matFooterRowDefSticky", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
            }
          },
          directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterRow"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29iamVjdC1yZXR1cm5zLW11bGl0aS9vYmplY3QtcmV0dXJucy1tdWxpdGkuY29tcG9uZW50LmNzcyJ9 */"]
        });
        return ObjectReturnsMulitiComponent;
      }();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map