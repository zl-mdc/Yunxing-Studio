let chart = document.querySelector('.charts')
let active = document.querySelector('.active')
let sunset = document.querySelector('.sunset')
let btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    if (chart.style.display === 'block') {
        chart.style.display = 'none'
        active.style.display = 'none'
        sunset.style.display = 'block'
    } else {
        chart.style.display = 'block'
        active.style.display = 'block'
        sunset.style.display = 'none'
    }
})