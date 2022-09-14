// SingUp module
const {connecting} = require('../dev/dbconnecting')

module.exports.SingUp = (username,  password) => {
    connecting.query(`INSERT INTO users (username,password) VALUES ('${username}','${password}')  `, (err) => {
        if (!err) throw  err;
        return 1
    })

}
