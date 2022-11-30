exports.ids = [5];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Chartjs/LineChart.vue?vue&type=template&id=1a4bbb0f&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('line-chart', {
    attrs: {
      "chart-options": _vm.chartOptions,
      "chart-data": _vm.chartData,
      "styles": _vm.myStyles,
      "chart-id": "myCustomId"
    }
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Chartjs/LineChart.vue?vue&type=template&id=1a4bbb0f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Chartjs/LineChart.vue?vue&type=script&lang=js&
/* harmony default export */ var LineChartvue_type_script_lang_js_ = ({
  props: ["data", "options"],
  computed: {
    myStyles() {
      return {
        width: '500px',
        margin: '30px'
      };
    }
  },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'sales',
          data: [40, 20, 12, 30, 34, 26, 16, 19, 8, 77, 22, 22],
          backgroundColor: '#00CC66',
          borderColor: '#333',
          borderWidth: 1,
          hoverBackgroundColor: 'coral'
        }]
      },
      chartOptions: {
        responsive: true,
        radius: 4
      }
    };
  }
});
// CONCATENATED MODULE: ./components/Chartjs/LineChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var Chartjs_LineChartvue_type_script_lang_js_ = (LineChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Chartjs/LineChart.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Chartjs_LineChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "71f013f6"
  
)

/* harmony default export */ var LineChart = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=chartjs-line-chart.js.map