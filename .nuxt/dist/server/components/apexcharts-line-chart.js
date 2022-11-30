exports.ids = [2];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Apexcharts/LineChart.vue?vue&type=template&id=ab80eb56&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('apexchart', {
    attrs: {
      "width": "500",
      "type": "line",
      "options": _vm.chartOptions,
      "series": _vm.series
    }
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Apexcharts/LineChart.vue?vue&type=template&id=ab80eb56&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Apexcharts/LineChart.vue?vue&type=script&lang=js&
/* harmony default export */ var LineChartvue_type_script_lang_js_ = ({
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91]
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/Apexcharts/LineChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var Apexcharts_LineChartvue_type_script_lang_js_ = (LineChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Apexcharts/LineChart.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Apexcharts_LineChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4367cf1f"
  
)

/* harmony default export */ var LineChart = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=apexcharts-line-chart.js.map