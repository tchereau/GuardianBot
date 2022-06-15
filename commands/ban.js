export const ban = async (argsBody) => {
    if(!argsBody.message.member.permissions.has('BAN_MEMBERS')){
        argsBody.message.channel.send('Vous n\'avez pas la permission de ban.');
        return;
    }
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
    argsBody.client.guilds.cache.forEach(async guild => {
        let membre = guild.members.cache.get(user.id)
        console.log();
        if(await membre.permissions.has('ADMINISTRATOR')){
            argsBody.message.channel.send('Vous ne pouvez pas ban un administrateur.');
            return;
        }
        await argsBody.client.guilds.cache.get(argsBody.message.guild.id).members.ban(user.id, {reason: reason});
        argsBody.message.channel.send(`${user.tag} a été ban pour la raison: ${reason}`);
    });
}
