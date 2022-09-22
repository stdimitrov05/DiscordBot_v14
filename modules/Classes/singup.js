const {randomPassword} = require("./randomPassword");
const {SingUp} = require("../SingUp");
const {ERRORS_CANT_CREATE_USER} = require("../../dev/errors");
module.exports = {
     SingUpAction : (bot,msg) =>{
        let username = msg.author.username
         console.log(username)
        let password =  randomPassword(5)
         SingUp(bot,msg,username,password)

    }
}