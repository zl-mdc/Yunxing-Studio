
let arr = [1, 2, 3, 3, 4, 'a', 'a', 'b', 'c'];

function reduce(arr) {
    let res = [];
    //利用set去重
    // res=Array.from(new Set(arr))
    // return res;
    //利用es6数组方法去程

    res = arr.filter((item, index) => {
        return arr.indexOf(item, 0) === index;
    })

    //l利用indexof
    // for (let i = 0; i < arr.length; i++) {
    //     const element = arr[i];
    //     if(res.indexOf(arr[i])==-1){
    //         res.push(element)
    //     }

    // }

    //利用includes实现
    // for (let i = 0; i < arr.length; i++) {
    //     const element = arr[i];
    //     if(!res.includes(arr[i])){
    //         res.push(element)
    //     }

    // }
    return res

}

console.log(reduce(arr));  //[1, 2, 3, 4, "a", "b", "c"]