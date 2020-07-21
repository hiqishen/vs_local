


function f(callback){
    var data=1
    setTimeout(function(){
        data=2
        callback(data)
    }, 1)
}
cb=function(data){
    console.log("ff",data)
}
f(cb)
// f(function(data){
//     console.log("ff",data)
// })





function f1(cb){
    var data=101
    setTimeout(function(){
        data+=3
        cb(data)
    },1)
}
f1(function(d){
    console.log("hi",d)
})









f=function(cb){
    var add=0
    setTimeout(function(){
        add+=5
        cb(add)
    })
}
cb=function(data){
    console.log("qwer3",data);
}
f(cb)