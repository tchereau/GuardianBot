export const clear = async (argsBody) => {
    const amount = argsBody.args[0];
    if(!amount){
        argsBody.message.channel.send('Veuillez préciser un nombre de messages à supprimer.');
        return;
    }
    if(amount > 100){
        argsBody.message.channel.send('Veuillez ne pas supprimer plus de 100 messages à la fois.');
        return;
    }
    if(amount <= 100){
        argsBody.message.channel.messages.fetch({limit: amount}).then( async messages => {
            await messages.forEach(async message => {
                await message.delete();
            });
        });
        return;
    }
}