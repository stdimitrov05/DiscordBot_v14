// SingUp module
module.exports.SingUp = (username,  password) => {
    const {connecting} = require('../dev/dbconnecting')
    console.log(username)
    connecting.query(`INSERT INTO users (username,password) VALUES ('${username}','${password}')  `, (err) => {
        if (err) throw  err;
        return 1
    })

}
