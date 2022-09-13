// SingUp module
const {connecting} = require('../dev/dbconnecting')

module.exports.SingUp = (username, email, password) => {
    let sql = `INSERT INTO users (username,email,password) VALUES ('${username}','${email},'${password}') LIMIT 1 `;
    connecting.query($sql, (err) => {
        if (!err) throw  err;
    })
    return null
}
