export const unmute = async (argsBody) => {
    if(!argsBody.message.member.
        permissions.has('MANAGE_ROLES')){
        argsBody.message.channel.send('Vous n\'avez pas la permission de mute.');
        return;
    }
    if(!argsBody.args[0]){
        argsBody.message.channel.send('Veuillez préciser un utilisateur à mute.');
        return;
    }
    const user = argsBody.message.mentions.members.first();
    if(!user){
        argsBody.message.channel.send('Veuillez préciser un utilisateur à mute.');
        return;
    }
    const reason = argsBody.args.slice(1).join(' ');
    if(!reason){
        argsBody.message.channel.send('Veuillez préciser une raison pour le mute.');
        return;
    }
    try{
        user.roles.remove(process.env.muteRole);
        argsBody.client.users.fetch(user).then(user => {
            argsBody.message.channel.send(`${user.tag} a été unmute pour la raison: ${reason}`);
        });
        return;
    }catch(err){
        console.log(err);
        argsBody.message.channel.send(`une erreur est survenue: ${err}`);
    }
    return;
}