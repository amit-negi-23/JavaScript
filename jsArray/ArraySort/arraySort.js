const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)


/* arr.sort() */
console.log(fruits.sort()) // return new array
console.log(fruits)  /* Original Array changed */


/* arr.reverse() */
console.log(fruits.reverse())  // return new array
console.log(fruits)  /* Original Array changed */





const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months)

/* arr.toSorted() */
console.log(months.toSorted()) // return new array
console.log(months) /**No changes in original array after using the above method*/


/* arr.toReversed() */
console.log(months.toReversed())  // return new array
console.log(months)  /**No changes in original array after using the above method*/




/*---------Numeric sort-------- */

const points = [40, 100, 1, 5, 25, 10]
console.log(points)

/*ascending  order*/
console.log(points.sort((a,b)=>{ return a-b;})) // return new array
console.log(points)  /* Original Array changed */

/*descending order */
console.log(points.sort((a,b)=>{return b-a;})) // return new array
console.log(points)  /* Original Array changed */

/* random sort */
console.log(points.sort(function(){return 0.5 - Math.random()}))


/*Lowest and Highest Array Value  */
//There are three ways 

//1) :-Sort the array and read the first or last element
    console.log(points.sort((a, b)=>{return a-b}))
    console.log("min value", points[0])
    console.log("max value", points[points.length-1])


//2) :-Use Math.min() or Math.max()
    console.log("min value through Math", Math.min.apply(null, points))
    console.log("max value through Math", Math.max.apply(null, points))

//Write a home made function


/* Sorting Object Arrays */

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  cars.sort((a, b)=>{return a.year - b.year})

  console.log(cars)
