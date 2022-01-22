let todayContent = document.querySelector('.taddy')
let tomorrowContent = document.querySelector('.tomorrow')
async function getTodayAndTom(city_id = 0) {
    let resultToday = await ajax(`http://localhost:5500/today/${city_id}`)
    let renderToday = resultToday.data.map(item => {
        return `
        <div class="above">
            <em>今天</em>
            <span>${item.Tlevel}</span>
            <b>${item.minDegree} / ${item.maxDegree}°</b>
        </div>
        <div class="under">
            <strong>${item.Tcondition}</strong>
            <img src="./images/taiyang.png" alt="">
        </div>
        `
    })
    todayContent.innerHTML = renderToday

    let resultTomorrow = await ajax(`http://localhost:5500/tomorrow/${city_id}`)
    let renderTomorrow = resultTomorrow.data.map(item => {
        return `
        <div class="above">
            <em>明天</em>
            <span>${item.Tlevel}</span>
            <b>${item.minDegree} / ${item.maxDegree}°</b>
        </div>
        <div class="under">
            <strong>${item.Tcondition}</strong>
            <img src="./images/duoyun.png" alt="">
        </div>
        `
    })
    tomorrowContent.innerHTML = renderTomorrow
}
getTodayAndTom()