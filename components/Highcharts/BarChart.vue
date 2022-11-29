<template>
  <div style="width:300px">
    <highcharts :options="chartOptions"/>
  </div>
</template>

<script>
export default {
    data() {
        return {
            chartOptions: {
                chart: {
                    type:'column'
                },
                series: [{
                    data: [1,2,3]
                }]
            }
        }
    }
}
</script>

<style>

</style>