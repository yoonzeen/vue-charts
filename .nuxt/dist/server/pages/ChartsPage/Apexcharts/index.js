exports.ids = [8,1,2,9];
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

/***/ }),

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

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ChartsPage/Apexcharts/index.vue?vue&type=template&id=b16c4340&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "apexchartsWrapper"
  }, [_c('chart-info', {
    attrs: {
      "title": _vm.info.title,
      "desc": _vm.info.desc
    }
  }), _vm._ssrNode(" <div class=\"btnWrap mb30\"><a href=\"https://apexcharts.com/vue-chart-demos/\" title=\"apexcharts\" target=\"_blank\" class=\"btnGoToWeb\">Apexcharts 문서</a></div> "), _c('BarChart'), _vm._ssrNode(" "), _c('LineChart')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/ChartsPage/Apexcharts/index.vue?vue&type=template&id=b16c4340&

// EXTERNAL MODULE: ./components/Apexcharts/LineChart.vue + 4 modules
var LineChart = __webpack_require__(27);

// EXTERNAL MODULE: ./components/Apexcharts/BarChart.vue + 4 modules
var BarChart = __webpack_require__(28);

// EXTERNAL MODULE: ./pages/ChartsPage/ChartInfo.vue + 4 modules
var ChartInfo = __webpack_require__(22);

// EXTERNAL MODULE: ./assets/data/chartProps.js
var chartProps = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ChartsPage/Apexcharts/index.vue?vue&type=script&lang=js&




/* harmony default export */ var Apexchartsvue_type_script_lang_js_ = ({
  name: "Apexcharts",
  components: {
    LineChart: LineChart["default"],
    BarChart: BarChart["default"],
    ChartInfo: ChartInfo["default"]
  },
  data() {
    return {
      info: {
        title: chartProps["a" /* default */].CHART.apexcharts.title,
        desc: chartProps["a" /* default */].CHART.apexcharts.desc.replaceAll(/\n/g, '<br/>')
      }
    };
  }
});
// CONCATENATED MODULE: ./pages/ChartsPage/Apexcharts/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var ChartsPage_Apexchartsvue_type_script_lang_js_ = (Apexchartsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/ChartsPage/Apexcharts/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ChartsPage_Apexchartsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5e078ba4"
  
)

/* harmony default export */ var Apexcharts = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map