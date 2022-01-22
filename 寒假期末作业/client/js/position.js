//内容页面上面的显示的城市

let position = document.querySelector('.position')
position.addEventListener('click', goSearch)

function goSearch() {
    contentPart.style.display = 'none'
    searchPart.style.display = 'block'
}
async function getCity(city_id = 0) {
    let result = await ajax(`http://localhost:5500/city/${city_id}`)
    let renderCity = result.data.map(item => {
        return `
        <div class="searchBtn">
            <img src="./images/location.png" alt="">
        </div>
        <div class="city">${item.name}</div>
        `
    })
    position.innerHTML = renderCity
}
getCity()