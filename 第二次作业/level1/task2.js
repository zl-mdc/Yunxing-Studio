// 2.写一个排序算法，对传入数组进行升序排序。

let arr = [1, 5, 4, 8, 2, 6, 3, 9, 7];

function mySort(arr) {

    
    //利用数组的sort方法
    // return arr.sort((a, b) => a > b ? 1 : a < b ? -1 : 0)


    //利用冒泡排序
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i; j < arr.length; j++) {
    //        if (arr[i]>arr[j]) {
    //         const temp = arr[j];
    //         arr[j]=arr[i]
    //         arr[i]=temp
    //        }
    //     }
    // }

    
    return arr

}

console.log(mySort(arr)); //[1,2,3,4,5,6,7,8,9]