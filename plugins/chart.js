import Vue from "vue";
import { Line } from "vue-chartjs";
import { Bar } from 'vue-chartjs';
import { Doughnut } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  ArcElement,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  LineElement,
);

Vue.component("line-chart", {
  extends: Line,
});
Vue.component("bar-chart", {
  extends: Bar,
});
Vue.component("doughnut-chart", {
  extends: Doughnut,
});