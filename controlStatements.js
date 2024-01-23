//for loop
//do...while
i=1
s=0
do{
    s+=i
    i++
}
while(i<10);

console.log(s)

//array
a=[10,20,30.7,true,"io"]//all valid
// int a[3]={"a",33,true}--> in c invalid
b=a.length
console.log(b)
i=0
while(b>0)
{
    console.log(a[i])
    i++
    b--
}


//for of
i=0 
for (i of "ohj")
{
 console.log(i)
 i++
}


a=[10,20,30.7,true,"io"]
for (i of a)
{
 console.log(i)
 i++
}
//for each
a.forEach(Element => {
    console.log(Element)
});

//for in
var a={"class":"ece",88:"anand",age:19}
for (i in a)                           //if key value pair is given i will be key
{
 console.log(i," is ",a[i]) 
 i++
}