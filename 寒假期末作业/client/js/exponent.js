var exponentContent = document.querySelector('.exponent')
    //请求提示部分的相关数据
async function getExponents(city_id = 0) {
    let result = await ajax(`http://localhost:5500/exponent/${city_id}`)
    let renderExponent = result.data.map(item => {
        return `  
                <div>
                  <img src="./images/default.png">
                  <span>${item.appointment}</span>
                </div>
                <div>
                  <img src="./images/default.png">
                  <span>${item.hairdressing}</span>
                </div>
                <div>
                  <img src="./images/default.png">
                  <span>${item.comfortlevel}</span>
                </div>
                <div>
                  <img src="./images/default.png">
                  <span>${item.roadcondition}</span>
                </div>
                <div>
                  <img src="./images/default.png">
                  <span>${item.movement}</span>
                </div>

                <div>
                  <img src="./images/default.png">
                  <span>${item.Shopping}</span>
                </div>
                <div>
                  <img src="./images/default.png">
                  <span>${item.fish}</span>
                </div>
                <div>
                  <img src="./images/default.png">
                  <span>${item.sunscreen}</span>
                </div>
                <div>
                  <img src="./images/default.png">
                  <span>${item.umbrella}</span>
                </div>
                <div>
                  <img src="./images/default.png">
                  <span>${item.cold}</span>
                </div>
                <div>
                  <img src="./images/default.png">
                  <span>${item.kitty}</span>
                </div>
                <div>
                  <img src="./images/default.png">
                  <span>${item.emotion}</span>
                </div>
                <div>
                  <img src="./images/default.png">
                  <span>${item.dog}</span>
                </div>
                <div>
                  <img src="./images/default.png">
                  <span>${item.influenza}</span>
                </div>
                <div>
                  <img src="./images/default.png">
                  <span>${item.kite}</span>
                </div>
                <div>
                  <img src="./images/default.png">
                  <span>${item.dance}</span>
                </div>
                <div>
                  <img src="./images/default.png">
                  <span>${item.travel}</span>
                </div>
                <div>
                  <img src="./images/default.png">
                  <span>${item.exercise}</span>
                </div>
                <div>
                  <img src="./images/default.png">
                  <span>${item.sunblock}</span>
                </div>
                `
    });
    exponentContent.innerHTML = renderExponent
}
getExponents()