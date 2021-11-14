const data = {
    age: 18,
    name: "这是真的难",
    education: ["小学", "初中", "高中", "大学", undefined, null],
    friends: [
        {name: "Amber", sex: "woman"},
        {name: "Barbara", sex: "woman"},
        {name: "Venti", sex: "man"}],
    work: {
        time: "2021",
        project: {name: "test", obtain: ["css", "html", "js"]}
    },
    play: function () {
        console.log("玩滑板");
    }
};

let newObj = {}
function clone(oldObj,newObj) {
    for (let key in oldObj){
        // console.log(oldObj[key])
        let item = oldObj[key]
        if(item instanceof Function){
            newObj[key]= item
        }else if(item instanceof Object){
            newObj[key]={}
            clone(item,newObj[key])
        }else if(item instanceof Array){
            newObj[key]=[]
            clone(item,newObj[key])
        }else{
            newObj[key] = item
        }
    }
}
clone(data,newObj)
console.log(newObj)