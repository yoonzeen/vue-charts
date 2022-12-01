<template>
  <div>
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);
export default {
    components: {VChart},
    data() {
        return {
            option: {
                title: {
                    text: 'ECharts Getting Started Example'
                },
                tooltip: {},
                xAxis: {
                    data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
                },
                yAxis: {},
                series: [
                    {
                    name: 'sales',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            }
        }
    }
}
</script>

<style>

</style>