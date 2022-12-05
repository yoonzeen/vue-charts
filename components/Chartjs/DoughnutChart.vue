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
                labels: [ 'true', 'false', ],
                datasets: [ { 
                    label: 'sales', 
                    data: [40, 60],
                    backgroundColor: ['#00CC66', '#333'],
                    cutout:'90%',
                } ],
            },
            chartOptions: {
                responsive: true,
                plugins: {
                    title:'40%',
                    tooltip: {
                        backgroundColor: '#239EC3',
                    },
                    datalabels: {
                        color:'red'
                    }
                },
            },
        }
    }
}
</script>
<style lang="">
    
</style>