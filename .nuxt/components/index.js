export const ChartjsBarChart = () => import('../../components/Chartjs/BarChart.vue' /* webpackChunkName: "components/chartjs-bar-chart" */).then(c => wrapFunctional(c.default || c))
export const ChartjsDoughnutChart = () => import('../../components/Chartjs/DoughnutChart.vue' /* webpackChunkName: "components/chartjs-doughnut-chart" */).then(c => wrapFunctional(c.default || c))
export const ChartjsLineChart = () => import('../../components/Chartjs/LineChart.vue' /* webpackChunkName: "components/chartjs-line-chart" */).then(c => wrapFunctional(c.default || c))
export const ApexchartsBarChart = () => import('../../components/Apexcharts/BarChart.vue' /* webpackChunkName: "components/apexcharts-bar-chart" */).then(c => wrapFunctional(c.default || c))
export const ApexchartsLineChart = () => import('../../components/Apexcharts/LineChart.vue' /* webpackChunkName: "components/apexcharts-line-chart" */).then(c => wrapFunctional(c.default || c))
export const HighchartsBarChart = () => import('../../components/Highcharts/BarChart.vue' /* webpackChunkName: "components/highcharts-bar-chart" */).then(c => wrapFunctional(c.default || c))
export const HighchartsDoughnutChart = () => import('../../components/Highcharts/DoughnutChart.vue' /* webpackChunkName: "components/highcharts-doughnut-chart" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
