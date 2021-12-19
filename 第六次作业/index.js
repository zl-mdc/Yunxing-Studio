window.onload=async function (){
    const  content = document.querySelector('.content')
    const downPage =document.querySelector('.downPage')
    const list= document.querySelector('.list')
    const container_content = document.querySelector('.container_content')
    const middle_date = document.querySelector('.middle_date')
    let result =await fetch('https://api.oick.cn/lishi/api.php')
    const res = await result.json()
    if(res.code===1){
        const day= res.day.split('/')
        middle_date.innerHTML=`${day[0]}月${day[1]}日`
        content.innerHTML=  res.result.map(item=>{
            const year = item.date.split('年')[0]
            return   `
               <div class="singleData">
                    <div class="year">${year}年</div>
                    <div class="separate"></div>
                    <div class="event">${item.title}</div>
                </div>
              `
        })

    }else{
        alert("获取后台数据失败，请稍后再试")
    }

    list.addEventListener('click',selectBox)
    let flag=0
    function  selectBox(){
        if(flag===0){
            downPage.style.transform=`translateY(50vh)`
            container_content.style.backgroundColor='darkgray'
            flag=1
        }else {
            downPage.style.transform=`translateY(-50vh)`
            container_content.style.backgroundColor=''
            flag=0
        }
    }
}