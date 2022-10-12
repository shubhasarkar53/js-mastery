// Computed Property

const key1 = "objectKey1";
const key2 = "objectKey2";
const value1 = "myValue1";
const value2 = "myValue2";


// desired output both should be stored in an object
// objectKey1 : myValue1
// objectKey2 : myValue2

const obj ={
    [key1] : value1,
    [key2] : value2,
    
    // [key1] <-- computed property : value1,
    // [key2] <-- computed property : value2,
}

console.log(obj);