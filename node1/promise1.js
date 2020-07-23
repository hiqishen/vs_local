var fs=require("fs")

// 封装一个promise对象然后后面每次.then 返回一个promise对象
// 返回的必须是promise对象
var p_read_file=function(file_path){
    return new Promise(function(resolve,reject){
        fs.readFile(file_path,"utf8",function(err,data){
            if (err){
                reject(err)
            }
            resolve(data)
            
        })
    })
}

p_read_file("./tmp/a.txt")
    .then(function(data){
        console.log(data);
        return p_read_file("./tmp/b.txt")
    })
    .then(function(data){
        console.log(data)
        return p_read_file("./tmp/c.txt")
    })
    .then(function(data){
        console.log(data);
    })
