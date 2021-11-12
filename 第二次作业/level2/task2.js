// 2.函数递归实现数组扁平化

let arr = [1, [2, 3], 4, [5, [6, [7, 8]]],[9, 10]];
res = []; //用来存储返回的数据

function fun1(arr) {
    //利用原生方法
    // let length=arr.length
    // for (let i = 0; i < length; i++) {
    //     const element = arr[i];
    //    if(typeof  element ==='number'){
    //     res.push(element)
    //    }else{
    //        fun1(element)
    //    }
    // }
    
    //利用flat
//    res= arr.flat(5)

    //利用字符串方法
    // console.log(  arr.toString().split(','));
    // arr.toString().split(',').map(c=>{
    //     res.push(c)
    // })
  
    return res
}

fun1(arr);
console.log(res); //[1,2,3,4,5,6,7,8,9,10];