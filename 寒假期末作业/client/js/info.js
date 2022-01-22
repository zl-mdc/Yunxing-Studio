let infoContent = document.querySelector('.infoContent')
async function renderInfo(city_id = 0) {
    console.log("执行了");
    let result = await ajax(`http://localhost:5500/current/${city_id}`)
    let infoRender = result.data.map(item => {
        return `
       <div class="weatherCondition">
         ${item.weatherCond}
       </div>

       <div class="temperature">
         ${item.temp}
       </div>
       <div class="DetailedInformation">
        <div class="info_about">
            <div>${item.Wdirection}${item.Wlevel}级，湿度${item.humidity}</div>
            <div>${item.info}</div>
        </div>
        <div class="info_api">
            <img src=${item.img} alt="">
            <span>${item.cond}${item.level}</span>
        </div>
        </div>
       `
    });
    infoContent.innerHTML = infoRender
}
renderInfo()