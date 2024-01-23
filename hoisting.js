//
/*
Hoisting
Varaiable Hoisting
console.log(a)//reference error--> no memory allocation
var a=0//undefined  --> memory allocated
let a=0//reference error --- cannot acces a begore init*/

//FUNCTIONAL HOISTING

a()//NaN
function a(j,k)
{
    c=j+k
    console.log(c)
}
