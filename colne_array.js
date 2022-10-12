// approach 1

// let array1 =  ["mango","banana", "guava", "licchi"];
// let array2 = array1.slice(0); // the cloned array 
// array1.push("pusing item"); // performing change in array1
// console.log(array1===array2);
// console.log(array1);
// console.log(array2); // no effect in array2
 // hence it is clear that the 2 array is different


 // approach 2

// let array1 =  ["mango","banana", "guava", "licchi"];
// let array2 = [].concat(array1); // the cloned array 
// array1.push("pusing item"); // performing change in array1
// console.log(array1===array2);
// console.log(array1);
// console.log(array2); // no effect in array2
//  // hence it is clear that the 2 array is different

//approach 3  Sprade Operation

let array1 =  ["mango","banana", "guava", "licchi"];
let array2 = [...array1]; // the cloned array  
array1.push("pusing item"); // performing change in array1
console.log(array1===array2);
console.log(array1);
console.log(array2); // no effect in array2
 // hence it is clear that the 2 array is different


