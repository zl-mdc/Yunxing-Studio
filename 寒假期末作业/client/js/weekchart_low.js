//气温折线图下面的数据

let under_week = document.querySelector('.under_week')

async function getlowCond(city_id = 0) {
    let result = await ajax(`http://localhost:5500/lowcond/${city_id}`)
    let renderLowCond = result.data.map(item => {
        return `
        <div>
            <img src=${item.mon_img} alt="">
            <span>${item.mon_cond}</span>
            <span>${item.mon_level}</span>
            <span>${item.mon_wind}</span>
            <span>${item.mon_windpower}</span>
        </div>
        <div>
            <img src=${item.tues_img} alt="">
            <span>${item.tues_cond}</span>
            <span>${item.tues_level}</span>
            <span>${item.tues_wind}</span>
            <span>${item.tues_windpower}</span>
        </div>
        <div>
            <img src=${item.wed_img} alt="">
            <span>${item.wed_cond}</span>
            <span>${item.wed_level}</span>
            <span>${item.wed_wind}</span>
            <span>${item.wed_windpower}</span>
        </div>
        <div>
            <img src=${item.thur_img} alt="">
            <span>${item.thur_cond}</span>
            <span>${item.thur_level}</span>
            <span>${item.thur_wind}</span>
            <span>${item.thur_windpower}</span>
        </div>
        <div>
            <img src=${item.fir_img} alt="">
            <span>${item.fir_cond}</span>
            <span>${item.fir_level}</span>
            <span>${item.fir_wind}</span>
            <span>${item.fir_windpower}</span>
        </div>
        <div>
            <img src=${item.sat_img} alt="">
            <span>${item.sat_cond}</span>
            <span>${item.sat_level}</span>
            <span>${item.sat_wind}</span>
            <span>${item.sat_windpower}</span>
        </div>
        `
    })
    under_week.innerHTML = renderLowCond
}
getlowCond()