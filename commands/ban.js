export const ban = async (argsBody) => {
    console.log("ban")
    if(!argsBody.args[0]){
        argsBody.message.channel.send('Veuillez préciser un utilisateur à ban.');
        return;
    }
    const user = argsBody.message.mentions.users.first();
    if(!user){
        argsBody.message.channel.send('Veuillez préciser un utilisateur à ban.');
        return;
    }
    const reason = argsBody.args.slice(1).join(' ');
    if(!reason){
        argsBody.message.channel.send('Veuillez préciser une raison pour le ban.');
        return;
    }

    await argsBody.message.guild.members.ban(user.id, {reason: reason});
    argsBody.message.channel.send(`${user.tag} a été ban pour la raison: ${reason}`);
}
