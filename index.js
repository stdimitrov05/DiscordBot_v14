const  {ERRORS_COMMAND_NOT_FOUND, ERRORS_UNABLE_CREATE_USER} = require('./dev/errors')
let fs = require('fs');
const {Client, GatewayIntentBits, time} = require('discord.js');
const {SingUp} = require("./modules/SingUp");
const {randomPassword} = require("./modules/Classes/randomPassword");
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

             let acountUser =  SingUp(username,password)

            if (acountUser === 1) {
                msg.author.send(`Hello ` + msg.author.username + "!\nYour password: " + password)
            }else{
                fs.writeFile('./log/debug.log',new Date() +` Status error: ` + `User not create error: ` +  ERRORS_UNABLE_CREATE_USER  , (err)=>{
                    if (err) return console.log(err);
                } )
            }

            break
        default : msg.reply(`Status error: ` + `Command not found \n error: ` +  ERRORS_COMMAND_NOT_FOUND)
            break
    }


} )


client.login(process.env.DISCORD_TOKEN);