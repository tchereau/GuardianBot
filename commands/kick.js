export const kick = async (argsBody) => {
    if(!argsBody.message.member.permissions.has('KICK_MEMBERS')){
        argsBody.message.channel.send('Vous n\'avez pas la permission de kick.');
        return;
    }
    if(!argsBody.args[0]){
        argsBody.message.channel.send('Veuillez préciser un utilisateur à kick.');
        return;
    }
    const user = argsBody.message.mentions.users.first();
    if(!user){
        argsBody.message.channel.send('Veuillez préciser un utilisateur à kick.');
        return;
    }
    const reason = argsBody.args.slice(1).join(' ');
    if(!reason){
        argsBody.message.channel.send('Veuillez préciser une raison pour le kick.');
        return;
    }
    argsBody.client.guilds.cache.forEach(async guild => {
        let membre = guild.members.cache.get(user.id)
        console.log();
        if(await membre.permissions.has('ADMINISTRATOR')){
            argsBody.message.channel.send('Vous ne pouvez pas kick un administrateur.');
            return;
        }
        const kick = await argsBody.client.guilds.cache.get(argsBody.message.guild.id).members.kick(user.id, {reason: reason});
        if(kick){
            argsBody.message.channel.send(`${user.tag} a été kick pour la raison: ${reason}`);
        }
    });
}
