import { config} from 'dotenv';
config();
import DiscordJS from 'discord.js';
import *as logs from './utils/logs.js';
import commands from './utils/importCommands.js';
import { verif } from './utils/verif.js';


console.log("\x1b[31mGuardianBot\x1b[0m");

const client = new DiscordJS.Client({intents: ["GUILDS", "GUILD_MESSAGES", 'GUILD_PRESENCES', 'GUILD_MEMBERS','DIRECT_MESSAGES'], partials: ['CHANNEL', 'GUILD_MEMBER']});
const prefix = process.env.prefix;
let logsChannel;

client.on('ready', () => {
    console.log(`\x1b[32mConnecté\x1b[0m sous \x1b[1m\x1b[36m${client.user.username}\x1b[0m`);
    console.log(`ID: \x1b[1m\x1b[36m${client.user.id}\x1b[0m`);
    console.log(`ID: \x1b[1m\x1b[36m${client.user.tag}\x1b[0m`);
    client.user.setStatus('dnd');
    if(process.env.activity){
        console.log(`\x1b[32mActivité\x1b[0m: ${process.env.activity}`);
        client.user.setActivity(process.env.activity);
    }
    logsChannel = client.channels.cache.get(process.env.logsChannel);
});

client.on("messageCreate", async function(message){
    if (!message.content.startsWith(prefix)){
        return;
    }
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    const argsBody= { message, client, args, prefix, command};

    message.channel.type === "DM" ? logs.logsConsole(argsBody, true) : logs.logsConsole(argsBody, false);
    if(process.env.logsChannel){
        message.channel.type === "DM" ? logs.logsDiscord(argsBody,logsChannel, true) : logs.logsDiscord(argsBody,logsChannel, false);
    }
    await message.channel.sendTyping();
    //regular commands
    switch(command){
        case 'pp':
            commands.pp(argsBody);
            return;
        case 'help':
            commands.help(argsBody);
            return;
    }
    //admin commands
    if(await verif(argsBody) === true){
        switch(command){
            case "ban":
                commands.ban(argsBody);
                break;
            case "unban":
                commands.unban(argsBody);
                break;
            case "clearchannel":
                commands.unban(argsBody);
                break;
            case "kick":
                commands.kick(argsBody);
                break;
            case "exclude":
                commands.timeout(argsBody);
                break;
            case "clear":
                commands.clear(argsBody);
                break;
            default:
                message.reply("je ne connais pas cette commande");
                break;
        }
    }
    return;
});

client.login(process.env.token);