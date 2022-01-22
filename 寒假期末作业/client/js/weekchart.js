let weekChart = document.querySelector('.weekChart')
let Chart = echarts.init(weekChart)

//获取一周气温区曲线的最低气温
let low_temps = [] //定义存放最低气温的数组
let high_temps = [] //定义存放最高气温的数组

//定义个函数，用于返回echart的配置options
function returnOptions(low_temps, high_temps) {
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
                show: true
            },

            splitLine: {
                show: false
            }

        },
        series: [{
                name: 'Highest',
                type: 'line',
                data: high_temps,
                label: { show: true }
            },
            {
                name: 'Lowest',
                type: 'line',
                data: low_temps,
                label: { show: true }
            },

        ],
        grid: {
            x: 0,
            y: 15,
            //
            y2: 0,
            x2: 0

        },

    };
    return option
}

async function getlowTemp() {
    let result = await ajax('http://localhost:5500/lowtemp/1')
    let { Thurs_temp, fri_temp, Sat_temp, Sun_temp, Mon_temp, Tues_temp } = result.data[0]
    low_temps = [Thurs_temp, fri_temp, Sat_temp, Sun_temp, Mon_temp, Tues_temp]
    return low_temps
}

//获取一周气温曲线的最高气温
async function gethighTemp() {
    let result = await ajax('http://localhost:5500/hightemp/2')
    let { Thurs_temp, fri_temp, Sat_temp, Sun_temp, Mon_temp, Tues_temp } = result.data[0]
    high_temps = [Thurs_temp, fri_temp, Sat_temp, Sun_temp, Mon_temp, Tues_temp]
    return high_temps
}

//将最高气温和最低气温渲染到页面上
async function renderTemp() {
    let low = await getlowTemp()
    let high = await gethighTemp()
    Chart.setOption(returnOptions(low, high))
}
renderTemp()