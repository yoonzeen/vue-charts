<template>
  <div class="chartjsWrapper">
    <chart-info :title="info.title" :desc="info.desc" />
    <div class="btnWrap mb30">
      <a class="btnGoToWeb" href="https://vue-chartjs.org/" title="vue-chartjs" target="_blank">vue-chartjs 문서</a>
      <a class="btnGoToWeb" href="https://www.chartjs.org/docs/latest/" title="chart.js" target="_blank">chart js 문서</a>
    </div>
    <BarChart  />
    <LineChart />
    <DoughnutChart />
  </div>
</template>

<script>
import BarChart from '@/components/Chartjs/BarChart.vue'
import LineChart from '@/components/Chartjs/LineChart.vue'
import DoughnutChart from '@/components/Chartjs/DoughnutChart.vue';
import ChartInfo from '@/pages/ChartsPage/ChartInfo.vue';
import data from '@/assets/data/chartProps.js'
export default {
  name: 'Chartsjs',
  components: { BarChart, LineChart, DoughnutChart, ChartInfo },
  data() {
    return {
      info: {
        title: data.CHART.chartjs.title,
        desc: data.CHART.chartjs.desc.replaceAll(/\n/g, '<br/>')
      }
    }
  }
}
</script>
<style>
</style>