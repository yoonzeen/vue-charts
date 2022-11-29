<template>
    <div>
        <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>
<script>
export default {
    data() {
        return {
            chartOptions: {
                chart: {
                    id: 'vuechart-example2'
                },
                xaxis: {
                    categories: ['Monday', 'Tuesday', 'Wednesday']
                },  
                colors:['#00cc66']            
            },
            series: [{
                name: 'sales',
                data: [30, 40, 35],
            }],
        }
    }
}
</script>
<style lang="">
    
</style>