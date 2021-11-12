// 3.使用sort函数，对对象数组按照对象的某个属性进行排序。
var arr = [{ name: 'xiaoming', age: 18 }, { name: 'zhangsan', age: 34 },
{ name: 'lisi', age: 29 }, { name: 'wangwu', age: 24 }];

function sortby(key, way = true) {//way为true表示默认按照升序排列
    return function (a, b) {
        console.log(a[key],b[key]);
        if (way) {
          return  a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
        } else {
           return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0
        }
    }
}
// console.log(arr.sort(sortby('age'))) //[{name: "xiaoming", age: 18},{name: "wangwu", age: 24},{name: "lisi", age: 29},{name: "zhangsan", age: 34}]
console.log(arr.sort(sortby('name', false))) //[{name: "zhangsan", age: 34},{name: "xiaoming", age: 18},{name: "wangwu", age: 24},{name: "lisi", age: 29}]