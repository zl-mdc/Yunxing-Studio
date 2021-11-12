// 3.合并两个数组并进行排序。
var arr1 = [1, 3, 5, 7, 9];
var arr2 = [2, 4, 6, 8, 10];

function merge(arr1, arr2) {
    //直接利用cocat合并
    // let arr = arr1.concat(arr2)
    //利用原生
    let arr=[]
    for (let i = 0; i < arr1.length; i++) {
        arr[i]=arr1[i]
    }
    for (let j = 0; j < arr2.length; j++) {
        arr[arr1.length+j]=arr2[j]
        
    }
    //可直接利用task2的排序函数
    //第一种：sort
    //    return arr.sort((a, b) => a > b ? 1 : a < b ? -1 : 0)
    //第二种：冒泡排序
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i; j < arr.length; j++) {
    //         if (arr[i] > arr[j]) {
    //             const temp = arr[j];
    //             arr[j] = arr[i]
    //             arr[i] = temp
    //         }
    //     }
    // }
    // return arr

}

console.log(merge(arr1, arr2));//[1,2,3,4,5,6,7,8,9,10]