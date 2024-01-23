//a func is embedded inside/called by another fn 
function ramu(msg,callback){
    setTimeout(function(){
        console.log(msg)
        callback()
    },1000)
}
function somu(){
      console.log("poidu")
}
ramu("hi",somu)