const xlsx = require('xlsx')

var getEmployee = function () {
  const workbook = xlsx.readFile('./employeedata/Book.xlsx')

  //get the array of sheets in excel file
  const sheet_name_list = workbook.SheetNames

  //get the worksheet that you want to work on
  var ws = workbook.Sheets[sheet_name_list[0]]

  var employeedata = xlsx.utils.sheet_to_json(ws)
  return employeedata
}

module.exports.getEmployee = getEmployee
