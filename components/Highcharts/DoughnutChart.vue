<template>
  <div style="width:600px;">
    <highcharts :options="chartOptions" />
  </div>
</template>

<script>
export default {
    data() {
        return {
            chartOptions: {
                chart: {
                    type:'pie'
                },
                title: {
                    text: 'Sales',
                },
                series: [{
                    size: '100%',
                    innerSize: '95%',
                    data: [
                        { name: 'ball', y: 80, color:'#00cc66' },
                        { name: 'none', y:20}
                    ],
                    dataLabels: {
                        enabled: true,
                        formatter: () => {
                            console.log(this);                        }
                    }
                }],
                plotOptions: {
                    pie: {
                        center: ['50%', '50%'],
                    }
                }
            }
        }
    }
}
</script>

<style>
    .highcharts-pie-series text { font-family:'Noto Sans KR'; font-weight:300;}
</style>