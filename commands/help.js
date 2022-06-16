
export const help = async (argsBody) => {
    argsBody.message.channel.send({
        embeds: [{
            color: 0x0099ff,
            author: {
                name: argsBody.client.user.tag,
                icon_url: argsBody.client.user.avatarURL(),
            },
            description: "Voici la liste des commandes disponibles:",
            fields: [
                {
                    name: `${process.env.prefix}help`,
                    value: "Affiche la liste des commandes",
                    inline: true
                },{
                    name: `${process.env.prefix}kick @user raison`,
                    value: "Kick un utilisateur",
                    inline: true
                }, {
                    name: `${process.env.prefix}ban @user raison`,
                    value: "Ban un utilisateur",
                    inline: true
                }, {
                    name: `${process.env.prefix}unban userid`,
                    value: "Unban un utilisateur",
                    inline: true
                }, {
                    name: `${process.env.prefix}exclude time @user raison`,
                    value: "Exclure un utilisateur pour une durée définie",
                    inline: true
                }, {
                    name: `${process.env.prefix}clear`,
                    value: "Supprime le nombre de messages défini",
                    inline: true
                }, {
                    name: `${process.env.prefix}pp @user`,
                    value: "Affiche la photo de profil d'un utilisateur",
                    inline: true
                }],
            timestamp: new Date(),
            footer: {
                text: `${argsBody.client.user.tag}`,
                icon_url: argsBody.client.user.avatarURL(),
            },
        }],
      })
};