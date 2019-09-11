/* use destruct
const helpers = require("./helper");
const total = helpers.sum(10,200);
*/

const { add, sub } = require("./helper");  
// test event loop
const fs = require('fs')
const filename = "target.txt"

const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());

/* sync programming
const data = fs.readFileSync(filename);
console.log(data.toString());
*/

// Implement async programming
// fs.watch(filename, () => console.log('File changed'));
fs.readFile(filename, (err, data) => {
    if (err) errHandler(err); 
    dataHandler(data);
});

console.log("Node js async programming (non blocking event loop)....")

// Use express to perform a web server
const express = require('express')

const app = express()

// use get method, (req, res) is callback function
app.get('/', (req, res) => {
    res.send("hey what up from express");
})

app.listen(3000);
/*
const http = require('http')

const server = http.createServer((req, res) => {
    res.end("hello world from node.js ");
})

server.listen(3000);
*/

const total = add(10,200);
console.log("Total: ", total);