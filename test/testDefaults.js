const testObject = require("../objects");
const defaults = require("../defaults");

let defaultProps = { name2: 'Mr. Stark', age2: 46, location2: 'Shark Tower' };

console.log(defaults(testObject,defaultProps))
