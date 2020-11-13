// jshint esversion: 6
var http = require('http')
var emp = require('./worksheet')
var ejs = require('ejs')

http
  .createServer((req, res) => {
    res.end(
      ejs.renderFile(
        'index.ejs',
        { employee: emp.getEmployee(), title: 'List of Employees' },
        (err, data) => {
          res.write(data)
        }
      )
    )
  })
  .listen(3000, (err, result) => {
    if (!err) {
      console.log('The server started successfully')
    }
  })
