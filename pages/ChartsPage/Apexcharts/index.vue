<template>
  <div class="apexchartsWrapper">
    <chart-info :info="info" />
    <div class="btnWrap mb30">
      <a class="btnGoToWeb" href="https://apexcharts.com/vue-chart-demos/" title="apexcharts" target="_blank">Apexcharts 문서</a>
    </div>
    <BarChart />
    <LineChart />
  </div>
</template>

<script>
import LineChart from '@/components/Apexcharts/LineChart.vue';
import BarChart from '@/components/Apexcharts/BarChart.vue';
import ChartInfo from '@/pages/ChartsPage/ChartInfo.vue';
import data from '@/assets/data/chartProps.js'

export default {
  name: "Apexcharts",
  components: { LineChart, BarChart, ChartInfo },
  data() {
    return {
      info: data.CHART.apexcharts
    }
  }
}
</script>

<style>

</style>