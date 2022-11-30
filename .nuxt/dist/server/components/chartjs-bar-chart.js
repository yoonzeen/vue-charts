exports.ids = [3];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Chartjs/BarChart.vue?vue&type=template&id=3d0068f9&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('bar-chart', {
    attrs: {
      "chart-options": _vm.chartOptions,
      "chart-data": _vm.chartData,
      "styles": _vm.myStyles
    }
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Chartjs/BarChart.vue?vue&type=template&id=3d0068f9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Chartjs/BarChart.vue?vue&type=script&lang=js&
/* harmony default export */ var BarChartvue_type_script_lang_js_ = ({
  props: ["data", "options"],
  computed: {
    myStyles() {
      return {
        width: '300px',
        margin: '30px'
      };
    }
  },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [{
          label: 'sales',
          data: [40, 20, 12],
          backgroundColor: '#00CC66'
        }]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: 'month'
        }
      }
    };
  }
});
// CONCATENATED MODULE: ./components/Chartjs/BarChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var Chartjs_BarChartvue_type_script_lang_js_ = (BarChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Chartjs/BarChart.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Chartjs_BarChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7d8b7c20"
  
)

/* harmony default export */ var BarChart = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=chartjs-bar-chart.js.map