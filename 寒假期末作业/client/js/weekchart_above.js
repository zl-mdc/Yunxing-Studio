//一周气温曲线图下面的部分

let above_week = document.querySelector('.above_week')
async function gethighCond(city_id = 0) {
    let result = await ajax(`http://localhost:5500/highcond/${city_id}`)
    let renderHighCond = result.data.map(item => {
        return `
        <div>
            <span>周一</span>
            <span>${item.mon_cond}</span>
            <img src=${item.mon_img} alt="">
        </div>
        <div>
            <span>周二</span>
            <span>${item.tues_cond}</span>
            <img src=${item.tues_img} alt="">
        </div>
        <div>
            <span>周三</span>
            <span>${item.wed_cond}</span>
            <img src=${item.wed_img} alt="">
        </div>
        <div>
            <span>周四</span>
            <span>${item.thur_cond}</span>
            <img src=${item.thur_img} alt="">
        </div>
        <div>
            <span>周五</span>
            <span>${item.fir_cond}</span>
            <img src=${item.fir_img} alt="">
        </div>
        <div>
            <span>周六</span>
            <span>${item.sat_cond}</span>
            <img src=${item.sat_img} alt="">
        </div>
        `
    })
    above_week.innerHTML = renderHighCond
}
gethighCond()