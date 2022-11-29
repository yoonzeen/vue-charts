<template>
    <div>
        <doughnut-chart
        :chart-options="chartOptions"
        :chart-data="chartData" 
        :style="myStyles"/>
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
                backgroundColor: ['#00CC66', '#66cc00', '#333'],
                cutout:'90%'
                } ]
            },
            chartOptions: {
                responsive: true,
                plugins: {
                    legend: 'month',
                    tooltip: {
                        backgroundColor: '#239EC3',
                    }
                }
            },
        }
    }
}
</script>
<style lang="">
    
</style>