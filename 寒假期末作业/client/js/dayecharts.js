let chartDom = document.querySelector('.lineChart')
let myChart = echarts.init(chartDom)
let options = {
    xAxis: {
        type: 'category',
        data: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '0', '1', '2', '3'],
        axisLine: {
            lineStyle: {
                color: '#ffffff'
            }

        },
    },
    yAxis: {
        type: 'value',

        splitLine: false,
        axisLine: {
            show: false
        },
        // 坐标轴刻度
        axisTick: {
            show: false
        },
        // 刻度标签
        axisLabel: {
            show: false
        }
    },
    series: [{
        data: [150, 230, 224, 218, 135, 147, 260, 234, 345, 123, 234, 256, 265, 256, 234, 235],
        type: 'line',
        itemStyle: {
            normal: {
                color: '#FFFFFF',
                lineStyle: {
                    color: '#6193C4'
                }
            }
        }

    }],
    grid: {
        x: 60,
        y: 0,
        y2: 30,
        x2: 0

    }
};
myChart.setOption(options)