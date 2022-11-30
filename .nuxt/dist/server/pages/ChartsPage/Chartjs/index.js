exports.ids = [10,3,4,5,9];
exports.modules = {

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ChartsPage/ChartInfo.vue?vue&type=template&id=4b438b5f&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper"
  }, [_vm._ssrNode("<div class=\"btnWrap nav\">", "</div>", [_c('nuxt-link', {
    staticClass: "btnMain",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("메인으로 가기")])], 1), _vm._ssrNode(" <h2>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h2> <p>" + _vm._s(_vm.desc) + "</p>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/ChartsPage/ChartInfo.vue?vue&type=template&id=4b438b5f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ChartsPage/ChartInfo.vue?vue&type=script&lang=js&
/* harmony default export */ var ChartInfovue_type_script_lang_js_ = ({
  props: ['title', 'desc']
});
// CONCATENATED MODULE: ./pages/ChartsPage/ChartInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var ChartsPage_ChartInfovue_type_script_lang_js_ = (ChartInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/ChartsPage/ChartInfo.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ChartsPage_ChartInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ec564430"
  
)

/* harmony default export */ var ChartInfo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const chartjs = {
  title: 'chart.js',
  desc: `- 단순해서 확장 가능 
        - Area Chart, Bar Chart, Bubble Chart, Doughnut and Pie Charts, Line Chart … 등등
         - 툴팁, hover 등 스타일 커스터마이징 가능`
};
const apexcharts = {
  title: 'Apex Charts',
  desc: `- Line, Area, Column, Pie, Bar, Polar 등등 
         - 웹에서 다양한 차트 데모 제공
         - 커서로 영역 설정하여 돋보기 기능
         - 브라우저에서 각 차트의 svg, png, csv 버전으로 차트 내보내기 가능
         - 로딩이 길 수 있음`
};
const highcharts = {
  title: 'High Charts',
  desc: `- 3d 차트, 간트 차트도 구현 가능
        - 웹에서 다양한 차트 데모 제공
        - 테마에 따라 샘플 컬러 제공
        - 브라우저에서 각 차트의 svg, png, csv 등 여러 버전으로 차트 내보내기 가능
        `
};
/* harmony default export */ __webpack_exports__["a"] = ({
  CHART: {
    chartjs,
    apexcharts,
    highcharts
  }
});

/***/ }),

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

/***/ }),

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

/***/ }),

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

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ChartsPage/Chartjs/index.vue?vue&type=template&id=5b61ad14&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chartjsWrapper"
  }, [_c('chart-info', {
    attrs: {
      "title": _vm.info.title,
      "desc": _vm.info.desc
    }
  }), _vm._ssrNode(" <div class=\"btnWrap mb30\"><a href=\"https://vue-chartjs.org/\" title=\"vue-chartjs\" target=\"_blank\" class=\"btnGoToWeb\">vue-chartjs 문서</a> <a href=\"https://www.chartjs.org/docs/latest/\" title=\"chart.js\" target=\"_blank\" class=\"btnGoToWeb\">chart js 문서</a></div> "), _c('BarChart'), _vm._ssrNode(" "), _c('LineChart'), _vm._ssrNode(" "), _c('DoughnutChart')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/ChartsPage/Chartjs/index.vue?vue&type=template&id=5b61ad14&

// EXTERNAL MODULE: ./components/Chartjs/BarChart.vue + 4 modules
var BarChart = __webpack_require__(29);

// EXTERNAL MODULE: ./components/Chartjs/LineChart.vue + 4 modules
var LineChart = __webpack_require__(30);

// EXTERNAL MODULE: ./components/Chartjs/DoughnutChart.vue + 4 modules
var DoughnutChart = __webpack_require__(31);

// EXTERNAL MODULE: ./pages/ChartsPage/ChartInfo.vue + 4 modules
var ChartInfo = __webpack_require__(22);

// EXTERNAL MODULE: ./assets/data/chartProps.js
var chartProps = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ChartsPage/Chartjs/index.vue?vue&type=script&lang=js&





/* harmony default export */ var Chartjsvue_type_script_lang_js_ = ({
  name: 'Chartsjs',
  components: {
    BarChart: BarChart["default"],
    LineChart: LineChart["default"],
    DoughnutChart: DoughnutChart["default"],
    ChartInfo: ChartInfo["default"]
  },
  data() {
    return {
      info: {
        title: chartProps["a" /* default */].CHART.chartjs.title,
        desc: chartProps["a" /* default */].CHART.chartjs.desc.replaceAll(/\n/g, '<br/>')
      }
    };
  }
});
// CONCATENATED MODULE: ./pages/ChartsPage/Chartjs/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var ChartsPage_Chartjsvue_type_script_lang_js_ = (Chartjsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/ChartsPage/Chartjs/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ChartsPage_Chartjsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6460f4b4"
  
)

/* harmony default export */ var Chartjs = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map