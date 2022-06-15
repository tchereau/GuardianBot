export const unban = async (argsBody) => {
    if(!argsBody.message.member.permissions.has('BAN_MEMBERS')){
        argsBody.message.channel.send('Vous n\'avez pas la permission de unban.');
        return;
    }
    if(!argsBody.args[0]){
        console.log('ici');
        argsBody.message.channel.send('Veuillez préciser un utilisateur à unban.');
        return;
    }
    const user = argsBody.args[0];
    if(user){
        argsBody.client.users.fetch(user).then(user => {
            argsBody.message.guild.members.unban(user);
            argsBody.message.channel.send(`${user.tag} a été unban.`);
        });
        return;
    }
    if(!user){
        argsBody.message.channel.send('Veuillez préciser un utilisateur à unban.');
        return;
    }

}