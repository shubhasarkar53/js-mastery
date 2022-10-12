//nested destructuring

const users = [
    {userId:1,firstName:"Shubha",lastName:"Sarkar",age:20},
    {userId:2,firstName:"Shubhra",lastName:"Sarkar",age:21},
    {userId:3,firstName:"Nil",lastName:"Sarkar",age:22},
    {userId:4,firstName:"Bbu",lastName:"Sarkar",age:16},
]

//destructuring
const [{userId: user1Id , firstName},{firstName : user2Name}, { age : user3age},{age}] = users;

console.log(user1Id);
console.log(firstName);
console.log(user2Name);
console.log(user3age);
console.log(age);