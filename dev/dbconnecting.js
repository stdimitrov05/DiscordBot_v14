// Database connecting
let mysql = require("mysql")
// Command errors
let connecting = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME
})
connecting.connect((err) =>{
    if (err) throw err;
    console.log("Connecting db ....")
    connecting.query("CREATE DATABASE" + process.env.DATABASE_NAME , (err)=>{
        if (err) throw  err;
        console.log("Database Created ....")

    })
})

module.exports = {
    connecting
}

