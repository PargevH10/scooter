"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["System_settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "System Settings"
  },
  data: function data() {
    return {
      isLoading: true,
      data: new FormData(),
      settings: [],
      currencies: [],
      clients: [],
      warehouses: [],
      sms_gateway: [],
      zones_array: [],
      setting: {
        client_id: "",
        warehouse_id: "",
        currency_id: "",
        email: "",
        logo: "",
        CompanyName: "",
        CompanyPhone: "",
        CompanyAdress: "",
        footer: "",
        developed_by: "",
        default_language: "",
        sms_gateway: "",
        is_invoice_footer: '',
        invoice_footer: ''
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(["refreshUserPermissions"])), {}, {
    SetLocal: function SetLocal(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch("language/setLanguage", locale);
      Fire.$emit("ChangeLanguage");
    },
    //------------- Submit Validation Setting
    Submit_Setting: function Submit_Setting() {
      var _this = this;

      this.$refs.form_setting.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Update_Settings();
        }
      });
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
          validated = _ref.validated,
          _ref$valid = _ref.valid,
          valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    //------------------------------ Event Upload Logo -------------------------------\\
    onFileSelected: function onFileSelected(e) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$_this2$$refs$L, valid;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.$refs.Logo.validate(e);

              case 2:
                _yield$_this2$$refs$L = _context.sent;
                valid = _yield$_this2$$refs$L.valid;

                if (valid) {
                  _this2.setting.logo = e.target.files[0];
                } else {
                  _this2.setting.logo = "";
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    Selected_Time_Zone: function Selected_Time_Zone(value) {
      if (value === null) {
        this.setting.timezone = "";
      }
    },
    //---------------------------------- Update Settings ----------------\\
    Update_Settings: function Update_Settings() {
      var _this3 = this;

      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      var self = this;
      self.data.append("client", self.setting.client_id);
      self.data.append("warehouse", self.setting.warehouse_id);
      self.data.append("currency", self.setting.currency_id);
      self.data.append("email", self.setting.email);
      self.data.append("logo", self.setting.logo);
      self.data.append("CompanyName", self.setting.CompanyName);
      self.data.append("CompanyPhone", self.setting.CompanyPhone);
      self.data.append("CompanyAdress", self.setting.CompanyAdress);
      self.data.append("footer", self.setting.footer);
      self.data.append("developed_by", self.setting.developed_by);
      self.data.append("default_language", self.setting.default_language);
      self.data.append("sms_gateway", self.setting.sms_gateway);
      self.data.append("is_invoice_footer", self.setting.is_invoice_footer);
      self.data.append("invoice_footer", self.setting.invoice_footer);
      self.data.append("timezone", self.setting.timezone);
      self.data.append("_method", "put");
      axios.post("settings/" + self.setting.id, self.data).then(function (response) {
        Fire.$emit("Event_Setting");

        _this3.makeToast("success", _this3.$t("Successfully_Updated"), _this3.$t("Success"));

        _this3.refreshUserPermissions();

        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();

        _this3.SetLocal(self.setting.default_language);
      })["catch"](function (error) {
        _this3.makeToast("danger", _this3.$t("InvalidData"), _this3.$t("Failed"));

        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
      });
    },
    //---------------------------------- Clear_Cache ----------------\\
    Clear_Cache: function Clear_Cache() {
      var _this4 = this;

      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      axios.get("clear_cache").then(function (response) {
        _this4.makeToast("success", _this4.$t("Cache_cleared_successfully"), _this4.$t("Success"));

        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();

        _this4.makeToast("danger", _this4.$t("Failed_to_clear_cache"), _this4.$t("Failed"));
      });
    },
    //---------------------------------- Get SETTINGS ----------------\\
    Get_Settings: function Get_Settings() {
      var _this5 = this;

      axios.get("get_Settings_data").then(function (response) {
        _this5.setting = response.data.settings;
        _this5.currencies = response.data.currencies;
        _this5.clients = response.data.clients;
        _this5.warehouses = response.data.warehouses;
        _this5.sms_gateway = response.data.sms_gateway;
        _this5.zones_array = response.data.zones_array;
        _this5.isLoading = false;
      })["catch"](function (error) {
        setTimeout(function () {
          _this5.isLoading = false;
        }, 500);
      });
    }
  }),
  //end Methods
  //----------------------------- Created function-------------------
  created: function created() {
    var _this6 = this;

    this.Get_Settings();
    Fire.$on("Event_Setting", function () {
      _this6.Get_Settings();
    });
  }
});

/***/ }),

/***/ "./resources/src/views/app/pages/settings/system_settings.vue":
/*!********************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_settings.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _system_settings_vue_vue_type_template_id_7bd1aea4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system_settings.vue?vue&type=template&id=7bd1aea4& */ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&");
/* harmony import */ var _system_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system_settings.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _system_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _system_settings_vue_vue_type_template_id_7bd1aea4___WEBPACK_IMPORTED_MODULE_0__.render,
  _system_settings_vue_vue_type_template_id_7bd1aea4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/settings/system_settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./system_settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&":
/*!***************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_template_id_7bd1aea4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_template_id_7bd1aea4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_template_id_7bd1aea4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./system_settings.vue?vue&type=template&id=7bd1aea4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main-content" },
    [
      _c("breadcumb", {
        attrs: { page: _vm.$t("SystemSettings"), folder: _vm.$t("Settings") },
      }),
      _vm._v(" "),
      _vm.isLoading
        ? _c("div", {
            staticClass: "loading_page spinner spinner-primary mr-3",
          })
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c(
            "validation-observer",
            { ref: "form_setting" },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_Setting.apply(null, arguments)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { lg: "12", md: "12", sm: "12" } },
                        [
                          _c(
                            "b-card",
                            {
                              attrs: {
                                "no-body": "",
                                header: _vm.$t("SystemSettings"),
                              },
                            },
                            [
                              _c(
                                "b-card-body",
                                [
                                  _c(
                                    "b-row",
                                    [
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: {
                                                label:
                                                  _vm.$t("DefaultCurrency"),
                                              },
                                            },
                                            [
                                              _c("v-select", {
                                                attrs: {
                                                  reduce: function (label) {
                                                    return label.value
                                                  },
                                                  placeholder:
                                                    _vm.$t("Choose_Currency"),
                                                  options: _vm.currencies.map(
                                                    function (currencies) {
                                                      return {
                                                        label: currencies.name,
                                                        value: currencies.id,
                                                      }
                                                    }
                                                  ),
                                                },
                                                model: {
                                                  value:
                                                    _vm.setting.currency_id,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.setting,
                                                      "currency_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "setting.currency_id",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Email",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "DefaultEmail"
                                                              ) +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Email-feedback",
                                                              label: "Email",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "DefaultEmail"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.setting
                                                                  .email,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.setting,
                                                                    "email",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "setting.email",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Email-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              4279491894
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            ref: "Logo",
                                            attrs: {
                                              name: "Logo",
                                              rules: "mimes:image/*|size:200",
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var validate = ref.validate
                                                    var valid = ref.valid
                                                    var errors = ref.errors
                                                    return _c(
                                                      "b-form-group",
                                                      {
                                                        attrs: {
                                                          label:
                                                            _vm.$t(
                                                              "ChangeLogo"
                                                            ),
                                                        },
                                                      },
                                                      [
                                                        _c("input", {
                                                          class: {
                                                            "is-invalid":
                                                              !!errors.length,
                                                          },
                                                          attrs: {
                                                            state: errors[0]
                                                              ? false
                                                              : valid
                                                              ? true
                                                              : null,
                                                            label:
                                                              "Choose Logo",
                                                            type: "file",
                                                          },
                                                          on: {
                                                            change:
                                                              _vm.onFileSelected,
                                                          },
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "b-form-invalid-feedback",
                                                          {
                                                            attrs: {
                                                              id: "Logo-feedback",
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(errors[0])
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              3189141354
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Company Name",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "CompanyName"
                                                              ) +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Company-feedback",
                                                              label:
                                                                "Company Name",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "CompanyName"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.setting
                                                                  .CompanyName,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.setting,
                                                                    "CompanyName",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "setting.CompanyName",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Company-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              1317089302
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Company Phone",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "CompanyPhone"
                                                              ) +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Phone-feedback",
                                                              label:
                                                                "Company Phone",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "CompanyPhone"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.setting
                                                                  .CompanyPhone,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.setting,
                                                                    "CompanyPhone",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "setting.CompanyPhone",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Phone-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              1395357846
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "developed by",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "developed_by"
                                                              ) +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "developed_by-feedback",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.setting
                                                                  .developed_by,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.setting,
                                                                    "developed_by",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "setting.developed_by",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "developed_by-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              4204870398
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "footer",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t("footer") +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "footer-feedback",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.setting
                                                                  .footer,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.setting,
                                                                    "footer",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "setting.footer",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "footer-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              3264557662
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "DefaultLanguage",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var valid = ref.valid
                                                    var errors = ref.errors
                                                    return _c(
                                                      "b-form-group",
                                                      {
                                                        attrs: {
                                                          label:
                                                            _vm.$t(
                                                              "DefaultLanguage"
                                                            ) +
                                                            " " +
                                                            "*",
                                                        },
                                                      },
                                                      [
                                                        _c("v-select", {
                                                          class: {
                                                            "is-invalid":
                                                              !!errors.length,
                                                          },
                                                          attrs: {
                                                            state: errors[0]
                                                              ? false
                                                              : valid
                                                              ? true
                                                              : null,
                                                            reduce: function (
                                                              label
                                                            ) {
                                                              return label.value
                                                            },
                                                            placeholder:
                                                              _vm.$t(
                                                                "DefaultLanguage"
                                                              ),
                                                            options: [
                                                              {
                                                                label:
                                                                  "English",
                                                                value: "en",
                                                              },
                                                              {
                                                                label: "French",
                                                                value: "fr",
                                                              },
                                                              {
                                                                label: "Arabic",
                                                                value: "ar",
                                                              },
                                                              {
                                                                label:
                                                                  "Turkish",
                                                                value: "tur",
                                                              },
                                                              {
                                                                label:
                                                                  "Simplified Chinese",
                                                                value: "sm_ch",
                                                              },
                                                              {
                                                                label: "Thaï",
                                                                value: "thai",
                                                              },
                                                              {
                                                                label: "Hindi",
                                                                value: "hn",
                                                              },
                                                              {
                                                                label: "German",
                                                                value: "de",
                                                              },
                                                              {
                                                                label:
                                                                  "Spanish",
                                                                value: "es",
                                                              },
                                                              {
                                                                label:
                                                                  "Italien",
                                                                value: "it",
                                                              },
                                                              {
                                                                label:
                                                                  "Indonesian",
                                                                value: "Ind",
                                                              },
                                                              {
                                                                label:
                                                                  "Traditional Chinese",
                                                                value: "tr_ch",
                                                              },
                                                              {
                                                                label:
                                                                  "Russian",
                                                                value: "ru",
                                                              },
                                                              {
                                                                label:
                                                                  "Vietnamese",
                                                                value: "vn",
                                                              },
                                                              {
                                                                label: "Korean",
                                                                value: "kr",
                                                              },
                                                              {
                                                                label: "Bangla",
                                                                value: "ba",
                                                              },
                                                              {
                                                                label:
                                                                  "Portuguese",
                                                                value: "br",
                                                              },
                                                            ],
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.setting
                                                                .default_language,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.setting,
                                                                "default_language",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "setting.default_language",
                                                          },
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "b-form-invalid-feedback",
                                                          [
                                                            _vm._v(
                                                              _vm._s(errors[0])
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              2203618148
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: {
                                                label:
                                                  _vm.$t("DefaultCustomer"),
                                              },
                                            },
                                            [
                                              _c("v-select", {
                                                attrs: {
                                                  reduce: function (label) {
                                                    return label.value
                                                  },
                                                  placeholder:
                                                    _vm.$t("Choose_Customer"),
                                                  options: _vm.clients.map(
                                                    function (clients) {
                                                      return {
                                                        label: clients.name,
                                                        value: clients.id,
                                                      }
                                                    }
                                                  ),
                                                },
                                                model: {
                                                  value: _vm.setting.client_id,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.setting,
                                                      "client_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "setting.client_id",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: {
                                                label:
                                                  _vm.$t("DefaultWarehouse"),
                                              },
                                            },
                                            [
                                              _c("v-select", {
                                                attrs: {
                                                  reduce: function (label) {
                                                    return label.value
                                                  },
                                                  placeholder:
                                                    _vm.$t("Choose_Warehouse"),
                                                  options: _vm.warehouses.map(
                                                    function (warehouses) {
                                                      return {
                                                        label: warehouses.name,
                                                        value: warehouses.id,
                                                      }
                                                    }
                                                  ),
                                                },
                                                model: {
                                                  value:
                                                    _vm.setting.warehouse_id,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.setting,
                                                      "warehouse_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "setting.warehouse_id",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: {
                                                label: _vm.$t(
                                                  "Default_SMS_Gateway"
                                                ),
                                              },
                                            },
                                            [
                                              _c("v-select", {
                                                attrs: {
                                                  reduce: function (label) {
                                                    return label.value
                                                  },
                                                  placeholder:
                                                    _vm.$t(
                                                      "Choose_SMS_Gateway"
                                                    ),
                                                  options: _vm.sms_gateway.map(
                                                    function (sms_gateway) {
                                                      return {
                                                        label:
                                                          sms_gateway.title,
                                                        value: sms_gateway.id,
                                                      }
                                                    }
                                                  ),
                                                },
                                                model: {
                                                  value:
                                                    _vm.setting.sms_gateway,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.setting,
                                                      "sms_gateway",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "setting.sms_gateway",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: {
                                                label: _vm.$t("Time_Zone"),
                                              },
                                            },
                                            [
                                              _c("v-select", {
                                                attrs: {
                                                  placeholder:
                                                    _vm.$t("Time_Zone"),
                                                  reduce: function (label) {
                                                    return label.value
                                                  },
                                                  options: _vm.zones_array.map(
                                                    function (zones_array) {
                                                      return {
                                                        label:
                                                          zones_array.label,
                                                        value: zones_array.zone,
                                                      }
                                                    }
                                                  ),
                                                },
                                                on: {
                                                  input: _vm.Selected_Time_Zone,
                                                },
                                                model: {
                                                  value: _vm.setting.timezone,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.setting,
                                                      "timezone",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "setting.timezone",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: {
                                            lg: "12",
                                            md: "12",
                                            sm: "12",
                                          },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Adress",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t("Adress") +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("textarea", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.setting
                                                                    .CompanyAdress,
                                                                expression:
                                                                  "setting.CompanyAdress",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Adress-feedback",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Afewwords"
                                                                ),
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.setting
                                                                  .CompanyAdress,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.setting,
                                                                  "CompanyAdress",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              },
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Adress-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              758978009
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mt-4 mb-4",
                                          attrs: { md: "2", sm: "2" },
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass:
                                                "checkbox checkbox-primary mb-3",
                                            },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.setting
                                                        .is_invoice_footer,
                                                    expression:
                                                      "setting.is_invoice_footer",
                                                  },
                                                ],
                                                attrs: { type: "checkbox" },
                                                domProps: {
                                                  checked: Array.isArray(
                                                    _vm.setting
                                                      .is_invoice_footer
                                                  )
                                                    ? _vm._i(
                                                        _vm.setting
                                                          .is_invoice_footer,
                                                        null
                                                      ) > -1
                                                    : _vm.setting
                                                        .is_invoice_footer,
                                                },
                                                on: {
                                                  change: function ($event) {
                                                    var $$a =
                                                        _vm.setting
                                                          .is_invoice_footer,
                                                      $$el = $event.target,
                                                      $$c = $$el.checked
                                                        ? true
                                                        : false
                                                    if (Array.isArray($$a)) {
                                                      var $$v = null,
                                                        $$i = _vm._i($$a, $$v)
                                                      if ($$el.checked) {
                                                        $$i < 0 &&
                                                          _vm.$set(
                                                            _vm.setting,
                                                            "is_invoice_footer",
                                                            $$a.concat([$$v])
                                                          )
                                                      } else {
                                                        $$i > -1 &&
                                                          _vm.$set(
                                                            _vm.setting,
                                                            "is_invoice_footer",
                                                            $$a
                                                              .slice(0, $$i)
                                                              .concat(
                                                                $$a.slice(
                                                                  $$i + 1
                                                                )
                                                              )
                                                          )
                                                      }
                                                    } else {
                                                      _vm.$set(
                                                        _vm.setting,
                                                        "is_invoice_footer",
                                                        $$c
                                                      )
                                                    }
                                                  },
                                                },
                                              }),
                                              _c("h5", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t("invoice_footer")
                                                  ) + " "
                                                ),
                                              ]),
                                              _c("span", {
                                                staticClass: "checkmark",
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.setting.is_invoice_footer
                                        ? _c(
                                            "b-col",
                                            {
                                              staticClass: "mt-4 mb-4",
                                              attrs: { md: "6", sm: "6" },
                                            },
                                            [
                                              _c("validation-provider", {
                                                attrs: {
                                                  name: "invoice_footer",
                                                  rules: { required: true },
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function (
                                                        validationContext
                                                      ) {
                                                        return [
                                                          _c(
                                                            "b-form-group",
                                                            {
                                                              attrs: {
                                                                label:
                                                                  _vm.$t(
                                                                    "invoice_footer"
                                                                  ) +
                                                                  " " +
                                                                  "*",
                                                              },
                                                            },
                                                            [
                                                              _c("textarea", {
                                                                directives: [
                                                                  {
                                                                    name: "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .setting
                                                                        .invoice_footer,
                                                                    expression:
                                                                      "setting.invoice_footer",
                                                                  },
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                attrs: {
                                                                  state:
                                                                    _vm.getValidationState(
                                                                      validationContext
                                                                    ),
                                                                  "aria-describedby":
                                                                    "invoice_footer-feedback",
                                                                  placeholder:
                                                                    _vm.$t(
                                                                      "invoice_footer"
                                                                    ),
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.setting
                                                                      .invoice_footer,
                                                                },
                                                                on: {
                                                                  input:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      if (
                                                                        $event
                                                                          .target
                                                                          .composing
                                                                      ) {
                                                                        return
                                                                      }
                                                                      _vm.$set(
                                                                        _vm.setting,
                                                                        "invoice_footer",
                                                                        $event
                                                                          .target
                                                                          .value
                                                                      )
                                                                    },
                                                                },
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "b-form-invalid-feedback",
                                                                {
                                                                  attrs: {
                                                                    id: "invoice_footer-feedback",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      validationContext
                                                                        .errors[0]
                                                                    )
                                                                  ),
                                                                ]
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]
                                                      },
                                                    },
                                                  ],
                                                  null,
                                                  false,
                                                  4052989155
                                                ),
                                              }),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        { attrs: { md: "12" } },
                                        [
                                          _c(
                                            "b-form-group",
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  attrs: {
                                                    variant: "primary",
                                                    type: "submit",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("submit"))
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c(
            "b-form",
            {
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.Clear_Cache.apply(null, arguments)
                },
              },
            },
            [
              _c(
                "b-row",
                { staticClass: "mt-5" },
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "12", md: "12", sm: "12" } },
                    [
                      _c(
                        "b-card",
                        {
                          attrs: {
                            "no-body": "",
                            header: _vm.$t("Clear_Cache"),
                          },
                        },
                        [
                          _c(
                            "b-card-body",
                            [
                              _c(
                                "b-row",
                                [
                                  _c(
                                    "b-col",
                                    { attrs: { md: "12" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        [
                                          _c(
                                            "b-button",
                                            {
                                              attrs: { variant: "primary" },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.Clear_Cache()
                                                },
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$t("Clear_Cache"))
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);