export const pp = async (argsBody) => {
    if(!argsBody.args[0]){
        argsBody.message.channel.send('Veuillez préciser un utilisateur.');
        return;
    }
    const user = argsBody.message.mentions.users.first();
    if(!user){
        argsBody.message.channel.send('Veuillez préciser un utilisateur.');
        return;
    }
    const avatar = user.avatarURL();
    argsBody.message.channel.send(avatar);
}