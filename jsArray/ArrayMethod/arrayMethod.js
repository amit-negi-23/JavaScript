const student = ["Aman", "Mohit", "Rohit", "Anurag"];
console.log(student);


/* arr.length */
let size = student.length;
console.log(size)

/* arr.toString() */
let str = student.toString()
console.log(str)
console.log(student)  /**No changes in original array after using the above method*/

/* arr.at() */
let item = student.at(2)
console.log(item)
console.log(student[2])
console.log(student); /**No changes in original array after using the above method*/


/* arr.join() */
let str2 = student.join("**")
console.log(str2)
console.log(student) /**No changes in original array after using the above method*/


/* arr.pop() */
let myarray = student.pop(); /*return popped out element */
console.log(myarray)
console.log(student); /* Original Array changed */


/* arr.push() */
let myarray2 = student.push("Yogesh");  /* return length of new array */
console.log(myarray2)
console.log(student)  /* Original Array changed */


/* arr.shift() */
let myarray3 = student.shift(); /*return shifted out element */
console.log(myarray3);
console.log(student) /* Original Array changed */


/* arr.unshift() */
let myarray4 = student.unshift("Harshit");/* return length of new array */
console.log(myarray4)
console.log(student)/* Original Array changed */


/* delete */

//console.log(delete student[0]) /* return true */
//console.log(student) /* Original Array changed and empty hole is created*/


/* arr.concat() */
const numArr = [10, 20, 30, 40];
const booArr = [true, true, false, true];
const myarray5 = student.concat(numArr, booArr, "Amit", "Rashmi") /* return new array */
console.log(myarray5)
console.log(student)  /**No changes in original array after using the above method*/
console.log(numArr)



/* arr.copyWithin() */
const naturalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
naturalNum.copyWithin(5,0,5)/* Original Array changed */
console.log(naturalNum)


/* arr.flat() */
const mulDimArray = [[10,20],[30,40],[50,60]]
console.log(mulDimArray)
const myarray6 = mulDimArray.flat()
console.log(myarray6)
console.log(mulDimArray)  /**No changes in original array after using the above method*/


/* arr.splice() */
const fruits = ["Mango", "Papaya", "Grapes", "Apple", "Litchi"]
console.log(fruits) 
console.log(fruits.splice(3, 0, "Banana"))   /*return [] */
console.log(fruits)  /* Original Array changed */

console.log(fruits.splice(1,1))  /* return ["Papaya"] */
console.log(fruits)  /* Original Array changed */


/*Note: */
// arr.splice(arr.length, 0 , newElement)    -------- arr.push(newElement)
// arr.splice(arr.length-1, 1) ------------------------ arr.pop()
// arr.splice(0, 1)  -------------------------------- arr.shift()
// arr.splice(0, 0, newElement)  -------------------- arr.unshift(newElement)

console.log(fruits.splice(fruits.length-1, 1))
console.log(fruits.splice(fruits.length, 0, "pineapple"))
console.log(fruits)

console.log(fruits.splice(0,1))
console.log(fruits.splice(0,0, "Peach"))
console.log(fruits)


/*arr.toSpliced() */
const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months)
const spliced = months.toSpliced(0,1);
console.log(spliced)
console.log(months) /**No changes in original array after using the above method*/

/*Note: */
// arr.toSpliced() ----------------- [...arr]


/* arr.slice() */
const vegetable = ["potato", "onion", "ladyfinger", "tomato", "brinjal"]
const dinner = vegetable.slice(3)
console.log(dinner)
const breakfast = vegetable.slice(0, 3)
console.log(breakfast)
console.log(vegetable)




/* rearrange element  */
// let val = vegetable.splice(1,1)
// vegetable.splice(2,0,val.toString())
// console.log(vegetable)

