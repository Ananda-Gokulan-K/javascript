//accessibility of a variable
//types of scope -- local,global,block
//LOCAL SCOPE
for(let i=0;i<3;i++) //let holds accessibility
{
    console.log(i)
}
//console.log(i) - shows error for let --> REFERENCE ERROR
//let holds accessibility till program ends

for(var i=0;i<3;i++) //var holds accessibility outside the block as well
{
    console.log(i)
}
console.log(i)

//example

var a=10
console.log(a)
 //var holds accessibility outside the block as well
{
    a=1
    let b=5

    console.log(a)
    console.log(b)

}

console.log(a)
