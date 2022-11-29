<template>
  <div>
    <bar-chart
      :chart-options="chartOptions"
      :chart-data="chartData"
      :styles="myStyles"
    />
  </div>
</template>

<script>
export default {
  props: ["data", "options"],
  computed: {
    myStyles() {
      return {
        width:'300px',
        margin: '30px'
      }
    }
  },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { 
          label: 'sales', 
          data: [40, 20, 12],
          backgroundColor:'#00CC66'
        } ]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: 'month'
        }
      },
    }
  }
}
</script>
<style>

</style>