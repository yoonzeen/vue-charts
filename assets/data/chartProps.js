const chartjs = {
    title: 'chart.js',
    desc:
        `- 단순해서 확장 가능 
        - Area Chart, Bar Chart, Bubble Chart, Doughnut and Pie Charts, Line Chart … 등등
         - 툴팁, hover 등 스타일 커스터마이징 가능`,
};
const apexcharts = {
    title: 'Apex Charts',
    desc:
        `- Line, Area, Column, Pie, Bar, Polar 등등 
         - 웹에서 다양한 차트 데모 제공
         - 커서로 영역 설정하여 돋보기 기능
         - 브라우저에서 각 차트의 svg, png, csv 버전으로 차트 내보내기 가능
         - 로딩이 길 수 있음`,
};
const highcharts = {
    title: 'High Charts',
    desc:
        `- 3d 차트, 간트 차트도 구현 가능
        - 웹에서 다양한 차트 데모 제공
        - 테마에 따라 샘플 컬러 제공
        - 브라우저에서 각 차트의 svg, png, csv 등 여러 버전으로 차트 내보내기 가능
        `,
};
const echarts = {
    title: 'ECharts',
    desc: 
    `- Apache에서 제공하는 chart 라이브러리
     - 
    `
}        

export default {
    CHART: {chartjs, apexcharts, highcharts, echarts }
}