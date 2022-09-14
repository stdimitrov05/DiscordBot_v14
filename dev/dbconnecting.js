// Database connecting
let mysql = require("mysql")
require('dotenv').config()
// Command errors
let connecting = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME
})
connecting.connect((err) =>{

    try {
        console.log("Connecting db ....")
    } catch (err) {
        console.log(err)
    }
})

module.exports = {
    connecting
}

