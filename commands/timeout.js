export const timeout = async (argsBody) => {
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
    try{
        user.timeout(time * 60 * 1000, reason);
        argsBody.message.channel.send(`${user} a été exclu pour ${time} minutes pour la raison: ${reason}`);
        return;
    }catch(err){
        console.log(err);
        argsBody.message.channel.send(`une erreur est survenue: ${err}`);
        return;
    }
};