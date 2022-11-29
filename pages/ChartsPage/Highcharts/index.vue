<template>
  <div class="highchartsWrapper">
    <chart-info :title="info.title" :desc="info.desc" />
    <div class="btnWrap mb30">
      <a class="btnGoToWeb" style="width:170px" href="https://github.com/highcharts/highcharts-vue?ref=madewithvuejs.com" title="HighCharts" target="_blank">Highcharts-Vue github</a>
      <a class="btnGoToWeb" href="https://www.highcharts.com/blog/tutorials/highcharts-vue-wrapper/" title="HighCharts" target="_blank">Highcharts 문서</a>
    </div>
    <bar-chart />
    <doughnut-chart />
  </div>
</template>

<script>
import ChartInfo from '../ChartInfo.vue'
import data from '@/assets/data/chartProps.js'
import BarChart from '@/components/Highcharts/BarChart.vue'
import DoughnutChart from '@/components/Highcharts/DoughnutChart.vue'
export default {
  components: { ChartInfo, BarChart, DoughnutChart },
  data() {
    return {
      info: {
        title: data.CHART.highcharts.title,
        desc: data.CHART.highcharts.desc.replaceAll(/\n/g, '<br/>')
        },
      
    }
  }
}
</script>

<style>

</style>