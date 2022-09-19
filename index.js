const  {ERRORS_COMMAND_NOT_FOUND, ERRORS_UNABLE_CREATE_USER} = require('./dev/errors')
const {Client, GatewayIntentBits, time} = require('discord.js');
const {SingUp} = require("./modules/SingUp");
const {randomPassword} = require("./modules/Classes/randomPassword");
const {reportingLog} = require("./modules/reportingLog");
const client = new Client({intents: [GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,]});
require('dotenv').config()
let prefix = process.env.DISCORD_CMD_START

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate' , (msg) =>{
    if (msg.author.bot) return  ;

    //Starting with prefix
    let args =  msg.content.slice(prefix.length).trim().split(" ").shift()
    // Command to lowerCase
    let cmd =  args.toLowerCase()

    // Commands
    switch (cmd) {
        case "hello" :
            msg.reply(`Hello World ${msg.author.tag} !`)
            break

        case "singup" :
            let username = msg.author.username;
            let password = randomPassword(5)


            if (SingUp(username,password)) {
                msg.author.send(`Hello ` + msg.author.username + "!\nYour password: " + password)
            }else{
                  reportingLog(ERRORS_UNABLE_CREATE_USER)
            }

            break
        default : reportingLog(ERRORS_COMMAND_NOT_FOUND)
            break
    }


} )


client.login(process.env.DISCORD_TOKEN);