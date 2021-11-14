

function course()
{
    this.coursename="CSA前端培训";
    this.semester=2;
}

function student(name,age,gender)
{
    //利用构造函数继承
    course.call(this)
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.moreinfo=function()
    {
        const _this=this
        const detail = function () {
            console.log(_this.gender);
        };
        detail();
    }
}

//利用原型链继承
// student.prototype=new course()
const student1 = new student("小明", 18, "男");
// student.prototype.constructor=student

console.log(student1.coursename,student1.semester); //课程名字和第几期
student1.moreinfo();//你的性别