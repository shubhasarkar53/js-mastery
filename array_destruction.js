const arr = ["shubha","akash","shubhra","nil","sarkar"];


// let myVar1 = arr[0];
// let myVar2 = arr[1];
// console.log("The value of myVar1 =", myVar1);
// console.log("The value of myVar2 =", myVar2);


// let [myVar1,myVar2] = arr;
// console.log("The value of myVar1 =", myVar1);
// console.log("The value of myVar2 =", myVar2);

let [myVar1,myVar2,...newArr] = arr;
console.log("The value of myVar1 =", myVar1);
console.log("The value of myVar2 =", myVar2);
console.log(newArr);

// ------------------------end--------------------