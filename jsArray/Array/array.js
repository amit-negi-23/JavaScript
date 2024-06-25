const candidate = ["Aman", "Mohit", "Rohit", "Anurag"];
console.log(candidate);

const student = [];
student[0] = "a";
student[1] = "b";
student[2] = "c";

console.log(student);

const marks = new Array("x", "y", "z");
console.log(marks)


const fruits = ["Apple", "Papaya","Watermelon", "Mango", "Banana", "Grapes"]
console.log(fruits)
console.log(fruits.toString())
console.log(fruits.length)
console.log(fruits.sort())
console.log("first:---", fruits[0])
console.log("last:---", fruits[fruits.length-1])

for(let i =0; i<fruits.length; i++){
    console.log(fruits[i])
}

fruits.forEach((f)=>{
    console.log(f)
})


const rollNo = new Array(4)
console.log(rollNo)
console.log(Array.isArray(rollNo))
console.log(rollNo instanceof Array)




/* check array and object*/

let myArr = []
let myObj = {}

console.log("typeof array : ", typeof myArr)
console.log("typeof object: ", typeof myObj)
console.log(Array.isArray(myArr)) //true
console.log(myArr instanceof Array) //true

console.log(Array.isArray(myObj))  //false
console.log(myObj instanceof Array) //false