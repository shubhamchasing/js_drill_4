const testObject = require("../objects");
const mapObject = require("../mapObject");

const cb = (value, key) =>{

    return value + 2

}

console.log(mapObject(testObject,cb))