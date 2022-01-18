let chartDom = document.querySelector('.lineChart')
let myChart = echarts.init(chartDom)
let options = {
    xAxis: {
        type: 'category',
        data: ['12', '现在', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
    }]
};
myChart.setOption(options)