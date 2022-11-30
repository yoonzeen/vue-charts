exports.ids = [4];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Chartjs/DoughnutChart.vue?vue&type=template&id=794528b8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('doughnut-chart', {
    style: _vm.myStyles,
    attrs: {
      "chart-options": _vm.chartOptions,
      "chart-data": _vm.chartData
    }
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Chartjs/DoughnutChart.vue?vue&type=template&id=794528b8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Chartjs/DoughnutChart.vue?vue&type=script&lang=js&
/* harmony default export */ var DoughnutChartvue_type_script_lang_js_ = ({
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
          backgroundColor: ['#00CC66', '#66cc00', '#333'],
          cutout: '90%'
        }]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: 'month',
          tooltip: {
            backgroundColor: '#239EC3'
          }
        }
      }
    };
  }
});
// CONCATENATED MODULE: ./components/Chartjs/DoughnutChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var Chartjs_DoughnutChartvue_type_script_lang_js_ = (DoughnutChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Chartjs/DoughnutChart.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Chartjs_DoughnutChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "71996c37"
  
)

/* harmony default export */ var DoughnutChart = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=chartjs-doughnut-chart.js.map