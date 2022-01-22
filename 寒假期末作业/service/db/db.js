var mysql = require("mysql")

var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"qianduan_test"
})//数据库连接配置

function query(sql,callback){   // 参数1 sql语句， 参数2回调函数
    pool.getConnection(function(err,connection){
        connection.query(sql, function (err,rows) {
            callback(err,rows)
            connection.release()
        })
    })
}//对数据库进行增删改查操作的基础


exports.query = query