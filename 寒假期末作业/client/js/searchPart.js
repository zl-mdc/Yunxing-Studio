let hotCityLists = ['北京市', '上海市', '广州市', '深圳市', '杭州市', '沈阳市', '大连市']
let addRecordList = []
let addList = document.querySelector('.addList')
let inputSearch = document.querySelector('.inputSearch')
let back = document.querySelector('.back')
let hotCityList = document.querySelector('.hotCityList')
let deleteRecord = document.querySelector('.deleteRecord')
let searchPart = document.querySelector('.searchPart')
let contentPart = document.querySelector('.contentPart')

//删除添加记录
deleteRecord.addEventListener('click', deleteList)

function deleteList() {
    addRecordList = []
    appendCity()
}
//将添加城市的城市名单渲染到页面上
function appendCity() {
    let addLists = addRecordList.map(item => {
        return `<div>${item}</div>`
    })
    addList.innerHTML = addLists.join('')
}
appendCity()
    //将热门城市渲染到页面上
function appendHotCity() {
    let hotLists = hotCityLists.map((item, index) => {
        return `<div id=${index} onclick="hotCitySelect('${item}',${index})">${item}</div>`
    })
    hotCityList.innerHTML = hotLists.join('')
}
appendHotCity()

//点击热门城市之后，将其添加到“添加记录”里面，然后返回该城市的相关信息
function hotCitySelect(item, index) {
    console.log(item, index);
    //将其添加到历史记录里面
    addRecordList.push(item)
    appendCity()
        //回到内容页面
    backIndex()
        //更换搜索页面当前城市
    changeCurrent(item)
        //添加之后，重新请求该城市的相关数据，然后渲染页面
    getCity(index)
    renderInfo(index) //页面上部的气温信息
    getTodayAndTom(index) //页面今天和明天的气温信息
    gethighCond(index) //折线图上面的
    getlowCond(index) //折线图下面的
    getExponents(index) //底部的提示信息

}


//点击返回按钮回到内容页面
back.addEventListener('click', backIndex)

function backIndex() {
    contentPart.style.display = 'block'
    searchPart.style.display = 'none'
}


//搜索页面顶部搜索框

let input = document.querySelector('.input')
let currentCityList = document.querySelector('.currentCityList')

input.addEventListener('keypress', handleKey)

async function handleKey(e) {
    if (e.keyCode === 13) {
        let city_name = input.value
        let result = await ajax(`http://localhost:5500/city?name=${city_name}`)
        let {
            name,
            id
        } = result.data[0]
        input.value = ''
        changeCurrent(name)
        hotCitySelect(name, id)
    }
}
//更换搜索页面的当前城市
function changeCurrent(city_name) {
    currentCityList.innerHTML = `<div>${city_name}</div>`
}