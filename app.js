/* use destruct
const helpers = require("./helper");
const total = helpers.sum(10,200);
*/

const { add, sub } = require("./helper");  

const total = add(10,200);
console.log("Total: ", total);