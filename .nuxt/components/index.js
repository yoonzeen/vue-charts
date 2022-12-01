export { default as ApexchartsBarChart } from '../../components/Apexcharts/BarChart.vue'
export { default as ApexchartsLineChart } from '../../components/Apexcharts/LineChart.vue'
export { default as ChartjsBarChart } from '../../components/Chartjs/BarChart.vue'
export { default as ChartjsDoughnutChart } from '../../components/Chartjs/DoughnutChart.vue'
export { default as ChartjsLineChart } from '../../components/Chartjs/LineChart.vue'
export { default as EchartsLineChart } from '../../components/Echarts/LineChart.vue'
export { default as HighchartsBarChart } from '../../components/Highcharts/BarChart.vue'
export { default as HighchartsDoughnutChart } from '../../components/Highcharts/DoughnutChart.vue'

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
