// 写一个解构赋值语句使得：
// ● name 属性赋值给变量 name。
// ● semester 属性赋值给变量 year。
// ● isStudent 属性赋值给变量 isStudent（如果属性缺失则赋值为 true）。


const course = {
    name: "CSA",
    semester: 2,
    // isStudents:false
};
const {name,semester:year,isStudents=true} = course
console.log(name)
console.log(year)
console.log(isStudents)
