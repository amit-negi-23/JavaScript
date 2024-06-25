/* arr.indexOf() */
const student = ["Rohit", "Mohit", "Anurag", "Aman", "Yogesh", "Amit", "Abhishek", "Aman", "Mohin",NaN];
console.log(student.indexOf("Aman"))


/* arr.lastIndexOf() */
console.log(student.lastIndexOf("Aman"))


/* arr.includes() */
console.log(student.includes("Amit"))
console.log(student.includes(NaN))


/* arr.find() */
const numbers = [4, 9, 16, 25, 29];
let result = numbers.find(function (value, index, array){
    return value >18
})

console.log(numbers)
console.log(result);


/* arr.findIndex() */
let result2 = numbers.findIndex((value, index, array)=>{
    return value >18
})

console.log(result2)


/* arr.findLast() */
let result3 = numbers.findLast((value, index, array)=>{
    return value>18
})
console.log(result3)


/* arr.findLastIndex() */
let result4 = numbers.findLastIndex((value, index, array)=>{
    return value >18
})

console.log(result4)