exports.ids = [1];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Apexcharts/BarChart.vue?vue&type=template&id=5f922446&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('apexchart', {
    attrs: {
      "width": "500",
      "type": "bar",
      "options": _vm.chartOptions,
      "series": _vm.series
    }
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Apexcharts/BarChart.vue?vue&type=template&id=5f922446&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Apexcharts/BarChart.vue?vue&type=script&lang=js&
/* harmony default export */ var BarChartvue_type_script_lang_js_ = ({
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example2'
        },
        xaxis: {
          categories: ['Monday', 'Tuesday', 'Wednesday']
        },
        colors: ['#00cc66']
      },
      series: [{
        name: 'sales',
        data: [30, 40, 35]
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/Apexcharts/BarChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var Apexcharts_BarChartvue_type_script_lang_js_ = (BarChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Apexcharts/BarChart.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Apexcharts_BarChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "78c1d074"
  
)

/* harmony default export */ var BarChart = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=apexcharts-bar-chart.js.map