export const timeout = async (argsBody) => {
    if(!argsBody.message.member.permissions.has('EXCLUDE_MEMBERS')){
        argsBody.message.channel.send('Vous n\'avez pas la permission de timeout.');
        return;
    }
    const time = argsBody.args[0];
    if(!time){
        argsBody.message.channel.send('Veuillez préciser un temps.');
        return;
    }
    if(!argsBody.args[1]){
        argsBody.message.channel.send('Veuillez préciser un utilisateur à timeout.');
        return;
    }
    const user = argsBody.message.mentions.members.first();
    argsBody.args.shift();
    if(!user){
        argsBody.message.channel.send(`Veuillez préciser un utilisateur à exclure.`);
        return;
    }
    const reason = argsBody.args.slice(1).join(' ');
    if(!reason){
        argsBody.message.channel.send(`Veuillez préciser une raison pour l'exclure.`);
        return;
    }
    argsBody.client.guilds.cache.forEach(async guild => {
        if (guild.id === argsBody.message.guild.id) {
            let membre = guild.members.cache.get(user.id)
            if(await membre.permissions.has('ADMINISTRATOR')){
                argsBody.message.channel.send('Vous ne pouvez pas exclure un administrateur.');
                return;
            }
            try{
                user.timeout(time * 60 * 1000, reason);
                argsBody.client.users.fetch(user).then(user => {
                    argsBody.message.channel.send(`${user.tag} a été exclu pour ${time} minutes pour la raison: ${reason}`);
                });
                return;
            }catch(err){
                console.log(err);
                argsBody.message.channel.send(`une erreur est survenue: ${err}`);
            }
        }
        return;
    });
}