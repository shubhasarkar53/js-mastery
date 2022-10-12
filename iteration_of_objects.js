const person = {
    firstName : "shubha",
    lastName : "Sarkar",
    age : 20,
    hobbies : ["guitar","singing"],
}

// --------for in loop---------->

// for(let key in person)
// {
//     console.log(key);
// }


// If we want to print the value of the keys then ->


// for(let key in person)
// {
//     console.log(person[key]);
// }


// If we want to print the key value pair then ->

for(let key in person)
{
    console.log(`${key} : ${person[key]}`);
}



// Object.keys

//?????????????????????????? explore