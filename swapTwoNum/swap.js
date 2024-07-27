//1st way to swap:    This can use to swap "string", boolean, number
let a = 3;
let b = 5;
console.log("Before swap: a =", a, "b =", b);
[a, b] = [b, a];

console.log("After swap: a =", a, "b =", b);



// 2nd way swap

let x = 3
let y = 10
console.log("Before swap: x =",x, "y =",y);

x = x-y  // -7
y = x + y // 3
x = y - x // 10
console.log("After swap: x =",x, "y =",y);



// 3rd way to swap
let p = 7;
let q = 10;
console.log("Before swap: p=", p, "q=", q);

p = p ^ q;
q = p ^ q;
p = p ^ q;

console.log("After swap: p=", p, "q=", q);
