//set---set= new set("blue","green") x wrong only first is taken
s = new Set(["blue","green","blue"])
s.add("purple")
s.delete("blue")
for (i in s)
{
  console.log(i)
}
for (i of s)
{
  console.log(i)
}
//map
s = new Map([["blue","green"],["cow","monkey"]]) //declare carefull
s.set("id","14")
s.delete("blue","green")
for (i in s)
{
  console.log(i)
}
for (i of s)
{
  console.log(i)
}
console.log(s.has("blue"))
console.log(s)