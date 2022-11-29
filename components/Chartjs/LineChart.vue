<template>
    <div>
        <line-chart
        :chart-options="chartOptions"
        :chart-data="chartData"
        :styles="myStyles"
        chart-id='myCustomId'
        />        
    </div>
</template>
<script>
export default {
  props: ["data", "options"],
  computed: {
    myStyles() {
      return {
        width:'500px',
        margin: '30px'
      }
    }
  },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        datasets: [ { 
            label: 'sales', 
            data: [40, 20, 12, 30, 34, 26, 16, 19, 8, 77, 22, 22],
            backgroundColor: '#00CC66',
            borderColor:'#333',
            borderWidth:1,
            hoverBackgroundColor: 'coral'
        } ],
      },
      chartOptions: {
        responsive: true,
        radius:4
      },
    }
  }
}
</script>
<style lang="">
    
</style>