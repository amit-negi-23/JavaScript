const numbers = [45, 4, 9, 16, 25];
console.log(numbers)


/* arr.forEach() */
numbers.forEach((value, index, array)=>{
    console.log(value)
})
console.log(numbers)   /*No changes in original array after using the above method*/


/* arr.map() */
let numArray = numbers.map((value)=>{return value*2})  // return new array
console.log(numArray)
console.log(numbers)  /*No changes in original array after using the above method*/


/* arr.flatmap()*/
const words = ['The quick brown', 'fox jumped over', 'the lazy dog'];
let newWord = words.flatMap(value=>value.split(' ')) // return new array
console.log(newWord)
console.log(words) /*No changes in original array after using the above method*/


/* aar.filter() */
let filteredArr = numbers.filter((value)=>{return value>18}) // retun new array
console.log(filteredArr)
console.log(numbers) /*No changes in original array after using the above method*/


/* arr.reduce() */
let sum = numbers.reduce((total, value)=>{
    return total+value;
})

console.log("sum=",sum)   // return single value
console.log(numbers)  /*No changes in original array after using the above method*/

 
/* arr.reduceRight() */
let sum2 = numbers.reduceRight((total, value)=>{
    return total+value;
})
console.log("sum2=",sum2) // return single value
console.log(numbers) /*No changes in original array after using the above method*/



/* arr.every() */
let allOver18 = numbers.every((value)=>{ //return true or false
    return value >18
})
console.log(allOver18) /*No changes in original array after using the above method*/
console.log(numbers)



/* arr.some() */
let someOver18 = numbers.some((value, index, array)=>{
    return value>25
})
console.log(someOver18)



/* Array.from() */
console.log(Array.from("ABCDEFGH"))


/* Array.keys() */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
for(let key of keys){
    console.log(key)
}


/* arr.entries() */
let entt= fruits.entries()
for(let e of entt){
    console.log(e)
}  


/* arr.with() */
const months = ["Januar", "Februar", "Mar", "April"];
const mymonths = months.with(2, "March")
console.log(mymonths)
console.log(months)  /*No changes in original array after using the above method*/



/* array Spread */

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4]
console.log(year)





















/* Original Array changed */