import { exec } from 'child_process';
export const update = async (argsBody) => {
    //si l'utilisateur n'est pas l'admin on ne fait rien
    if (argsBody.message.author.id !== process.env.adminID) {
        argsBody.message.reply(`seul l'admin <@${process.env.adminID}> peut faire cela.`);
        return;
    }
    // using child_process to run the command git pull then restart the bot
    await argsBody.message.channel.send(`redémarrage en cours...`);
    await argsBody.client.destroy();
    console.log(`bot déconnecté, redémarrage en cours...`);
    const child = exec(`git pull && forever restart ${__dirname}/../index.js`);
    child.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
};