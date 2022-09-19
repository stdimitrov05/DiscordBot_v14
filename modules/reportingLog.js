// Reporting log
const fs = require("fs");
module.exports.reportingLog = (err) => {
    let fs = require('fs');
    fs.appendFile(__dirname +'/log/debug.log', new Date() + ` Status error: reporting code -> ${err} ` + "\n", (err) => {
        if (err) return console.log(err);
    })
}

// Fatal error
module.exports.fatalErr = (err) => {
    let fs = require('fs');
    fs.appendFile(__dirname +'/log/debug.log', new Date() + ` Fatal errors:  ${err} ` + "\n", (err) => {
        if (err) return console.log(err);
    })
}