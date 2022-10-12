// object destructuring 

const person = {
    firstName : "shubha",
    lastName : "Sarkar",
    age : 20,
    hobbies : ["guitar","singing"],
}



// let{firstName,lastName,...restElements}= person;
// console.log(firstName);
// console.log(lastName);
// console.log(restElements);


// if we want to change the name by our own ->


let{firstName : myName ,lastName : title,...restElements}= person;
console.log(myName);
console.log(title);
console.log(restElements);