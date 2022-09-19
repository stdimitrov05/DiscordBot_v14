// Database connecting
let mysql = require("mysql")
const {reportingLog, fatalErr} = require("../modules/reportingLog");
const {ERROR_CANT_CONNECTING_DB} = require("./errors");
const {DATABASE_HOST,DATABASE_USER,DATABASE_PASSWORD,DATABASE_NAME} = process.env
// Command errors
let connecting = mysql.createConnection({
    host : DATABASE_HOST,
    user : DATABASE_USER,
    password : DATABASE_PASSWORD,
    database : DATABASE_NAME
})
connecting.connect((err) =>{
  err ? fatalErr(
      "Can`t connected to database " + ERROR_CANT_CONNECTING_DB + "\n "+ err
  )  : console.log("Connecting ...")
})

module.exports = {
    connecting
}

