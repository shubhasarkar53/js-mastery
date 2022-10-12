// function inside function

const app = () =>{

    function hello(){
        console.log("hello func.......");
    }

    function addNum (num1,num2)
    {
        return num1+num2;
    }

    const mulNum = (num1,num2) =>{
        return num1*num2;
    }

    hello();
    console.log(addNum(10,15));
    console.log(mulNum(10,99));

    console.log("app running");
}
app();