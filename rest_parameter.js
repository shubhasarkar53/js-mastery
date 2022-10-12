// rest parameter -> (...)  <-

function myFunc(a,b,...c)
{
    console.log(`value of a is ${a}`);
    console.log(`value of b is ${b}`);
    console.log(`value of c is ${c}`);
    
}

myFunc(15,12,0,11,22,89,69);


// example of rest parameter

function addNums(...numbers) //rest parameter
{
    let total = 0;
    for(let num of numbers)
    {
        total = total + num;
    }
    return total;

}

console.log(addNums(5,5,10,10,15));
