// SingUp module
const {ERRORS_CANT_CREATE_USER} = require("../dev/errors");
const {EmbedBuilder} = require("discord.js");

module.exports.SingUp = (bot ,msg, username, password) => {
    const {connecting} = require('../dev/dbconnecting')

    // Send message for problem
    const sendDmErr = new EmbedBuilder()
        .setColor('Random')
        .setTitle("System Message")
        .addFields({name:"Just the moment query crash!" , value:"Please contact the administrators!"})
        .setTimestamp()
        .setFooter({ text: 'by Developer City System' });

    // Send created password dm
    const sendDm =  new EmbedBuilder()
        .setColor('Random')
        .setTitle("System Message")
        .setDescription("This password allows you to assume a role for 24 hours. After these 24 hours you must log in again!\n Why are these things?\n The reason is that the following server has active users.")
        .addFields(
            { name: "Your account has been created" , value:"Your password:" },
                  {name: `${password}`, value:"With this password, you can get the verification role!" }
        )
        .setTimestamp()
        .setFooter({ text: 'by Developer City System' });


    connecting.query(`INSERT INTO users (username,password) VALUES ('${username}','${password}')  ` , (err)=>{
            if (err) {
            msg.author.send({ embeds: [sendDmErr] })
            bot.channels.fetch('1022208417638645890')
                .then(channel => channel.send(new Date() + ` Status error: reporting code -> ${ERRORS_CANT_CREATE_USER} \nUsername: @${msg.author.tag}\n${err}`))

        }else {
            msg.author.send({embeds:[sendDm]})
        }

    })

}
