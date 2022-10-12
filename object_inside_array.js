// objects inside array

const users = [
    {userId:1,firstName:"Shubha",lastName:"Sarkar",age:20},
    {userId:2,firstName:"Shubhra",lastName:"Sarkar",age:21},
    {userId:3,firstName:"Nil",lastName:"Sarkar",age:22},
    {userId:4,firstName:"Bbu",lastName:"Sarkar",age:16},
]

for(let user of users) {
    console.log(user.userId);
    console.log(user.firstName);
    console.log(user.age);
    console.log("    ");
}
