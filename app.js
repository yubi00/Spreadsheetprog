// jshint esversion: 6
var http = require('http');
var emp = require('./worksheet');
var fs = require('fs');
var ejs = require('ejs');

http.createServer((req, res) => {
    var empdata = JSON.stringify(emp.getEmployee());
    res.end(ejs.renderFile('index.ejs', {employee: JSON.parse(empdata), title: 'List of Employees'}, (err, data) => {
        res.write(data);
    }));
    
}).listen(3000, (err, result) => {
    if(!err) {
        console.log('The server started successfully');
    }
});


