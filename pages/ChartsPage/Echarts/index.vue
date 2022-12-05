<template>
  <div class="echartsWrapper">
    <chart-info :info="info" />
    <div class="btnWrap mb30">
      <a class="btnGoToWeb" href="https://echarts.apache.org/en/index.html" title="ECHARTS" target="_blank">echarts 문서</a>
    </div>
    <line-chart />
  </div>
</template>

<script>
import ChartInfo from '../ChartInfo.vue'
import data from '@/assets/data/chartProps.js'
import LineChart from '@/components/Echarts/LineChart.vue'

export default {
  components: { LineChart, ChartInfo },
    data() {
        return {
            info: data.CHART.echarts
        }
    }
}
</script>

<style>

</style>