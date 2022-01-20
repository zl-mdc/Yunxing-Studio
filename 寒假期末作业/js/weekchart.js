let weekChart = document.querySelector('.weekChart')
let Chart = echarts.init(weekChart)
let option = {
    xAxis: {
        type: 'category',
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
    yAxis: {
        type: 'value',
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
        name: 'Highest',
        type: 'line',
        data: [10, 11, 13, 11, 12, 12]
    }, {
        name: 'Lowest',
        type: 'line',
        data: [1, -2, 2, 5, 3, 2]
    }],
    grid: {
        x: 0,
        y: 0,
        //
        y2: 0,
        x2: 0

    }
};
Chart.setOption(option)