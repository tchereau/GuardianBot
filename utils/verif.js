export const verif = async (argsBody) => {
    //perm verif
    //ban verif
    if (argsBody.command === 'ban' || argsBody.command === 'unban') {

        if (!argsBody.message.member.permissions.has('BAN_MEMBERS')) {
            argsBody.message.reply('Vous n\'avez pas la permission de bannir et de debannir.');
            return false;
        }
    }
    //kick verif
    if (argsBody.command === 'kick') {
        if (!argsBody.message.member.permissions.has('KICK_MEMBERS')) {
            argsBody.message.reply('Vous n\'avez pas la permission de kick.');
            return false;
        }
    }
    //exclude verif
    if (argsBody.command === 'exclude') {
        if (!argsBody.message.member.permissions.has('EXCLUDE_MEMBERS')) {
            argsBody.message.reply('Vous n\'avez pas la permission d\'exclure.');
            return false;
        }
    }
    //delete message verif
    if (argsBody.command === 'clear') {
        if (!argsBody.message.member.permissions.has('MANAGE_MESSAGES')) {
            argsBody.message.reply('Vous n\'avez pas la permission de supprimer des messages.');
            return false;
        }
    }

    //verif if user has higher role than message author
    //si command n'est pas clear
    if (argsBody.command !== 'clear') {
        let user = argsBody.message.mentions.members.first();
        let membre = argsBody.message.guild.members.cache.get(user.id)
        if (membre.roles.highest.position > argsBody.message.member.roles.highest.position) {
            argsBody.message.reply('Vous n\'avez pas la permission de faire cela sur un membre plus haut gradé.');
            return false;
        }
        //si meme role
        if (membre.roles.highest.position === argsBody.message.member.roles.highest.position) {
            argsBody.message.reply('Vous n\'avez pas la permission de faire cela.');
            return false;
        }
    }
    //verif bot permissions
    if (argsBody.command === 'ban' || argsBody.command === 'unban') {
        if (!argsBody.message.guild.me.permissions.has('BAN_MEMBERS')) {
            argsBody.message.reply('Je n\'ai pas la permission de ban.');
            return false;
        }
    }
    if (argsBody.command === 'kick') {
        if (!argsBody.message.guild.me.permissions.has('KICK_MEMBERS')) {
            argsBody.message.reply('Je n\'ai pas la permission de kick.');
            return false;
        }
    }
    if (argsBody.command === 'exclude') {
        if (!argsBody.message.guild.me.permissions.has('EXCLUDE_MEMBERS')) {
            argsBody.message.reply('Je n\'ai pas la permission d\'exclure.');
            return false;
        }
    }
    if (argsBody.command === 'clear') {
        if (!argsBody.message.guild.me.permissions.has('MANAGE_MESSAGES')) {
            argsBody.message.reply('Je n\'ai pas la permission de supprimer des messages.');
            return false;
        }
    }
    console.log("fin vérif")
    return true;
}
