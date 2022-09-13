const  {ERRORS_COMMAND_NOT_FOUND} = require('./dev/errors')

const {Client, GatewayIntentBits} = require('discord.js');
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
            const password = msg.content.split(' ')
            password.shift()
            password.filter(element=>{
                element !== " " && element !== undefined
            })


            console.log(password)

            break
        default : msg.reply(`Status error: ` + `Command not found \n error: ` +  ERRORS_COMMAND_NOT_FOUND)
            break
    }


} )


client.login(process.env.DISCORD_TOKEN);