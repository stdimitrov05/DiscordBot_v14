// Reporting log
const {ERRORS_UNABLE_CREATE_USER, ERRORS_COMMAND_NOT_FOUND} = require("../dev/errors");
module.exports.reportingLog = (err) => {
    let fs = require('fs');
    fs.appendFile(__dirname +'/log/debug.log', new Date() + ` Status error: reporting code -> ${err} ` + "\n", (err) => {
        if (err) return console.log(err);
    })
}
