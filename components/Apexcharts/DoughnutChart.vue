<template>
    <div>
        <apexchart type="donut" width="500" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>
<script>
export default {
    data() {
        return {
            chartOptions: {
                dataLabels: {
                    // enabled: false,
                    formatter: function (val) {
                        return val + "%"
                    },
                    dropShadow: false
                },
                chart: {
                    id: 'vuechart-example3'
                }, 
                colors:['#00cc66', '#999'],
                labels:  ['sales', 'none'],
                legends: {
                    show:false
                },
                plotOptions:{
                    pie:{
                        donut: {
                            labels: {
                                show: true,

                                formatter: function (val) {
                                    return val + "%"
                                },
                            }
                        }
                    }
                },      
            },
            series: [30, 70],
        }
    }
}
</script>
<style lang="">
    
</style>