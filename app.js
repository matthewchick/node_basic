/* use destruct
const helpers = require("./helper");
const total = helpers.sum(10,200);
*/

const { add, sub } = require("./helper");  
const http = require('http')

const server = http.createServer((req, res) => {
    res.end("hello world from node.js");
})

server.listen(3000);

const total = add(10,200);
console.log("Total: ", total);