/*In js everything is called as objects
//var a=[10,20] a is called both variable and objects
//declaration of obj
//1.var a=new object()
//2.var a={}
//3.(like key value dict in py) var a={"class":"ece","name":"anand"} unlike py it all should be in ""*/

//1st way

var a={"class":"ece",88:"anand",age:19}//, is optional for last key-pair value
console.log(a)
a["rollno"]=14/*quotes are present in key inbuild so in o/p it's not required*/
console.log(a)

//2nd way
var a={}
a["rollno"]=14
console.log(a)

//what is modularized code? -> 
var b = new Object()
b["rollno"]=14
b["name"]="gigi"
b["age"]=19
console.log(b)
console.log(b.age)
console.log(b["age"])

// path of accesing values of key is .
