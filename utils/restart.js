//work only if started with "forever start index.js"
export const restart = async (argsBody) => {
    //si l'utilisateur n'est pas l'id admin on ne fait rien
    if (argsBody.message.author.id !== process.env.adminID) {
        message.reply(`seul l'admin <@${process.env.adminID}> peut faire cela.`);
        return;
    }
    await argsBody.message.channel.send(`redémarrage en cours...`);
    await argsBody.client.destroy();
    console.log(`bot déconnecté, redémarrage en cours...`);
    process.env.restart = true;
    process.exit();
}