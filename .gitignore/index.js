const Discord = require('discord.js')
const client = new Discord.Client()
var prefix = ("t!");

client.on('ready', () => {
    console.log('BOT STARTED UP!')
    client.user.setPresence({
        game: {
            url: 'https://twitch.tv/thomasbnt',
            name: "t!help | Terminox_QnT"
        }
    })

})


client.on('guildMemberAdd', function(member) {
    member.createDM().then(function(channel) {
        return channel.send('Bienvenue sur le discord de la Terminox <3 ' + member.displayName)
    })
})

client.on('message', function(spam) {
    if (spam.content === prefix + "spam") {
        client.setInterval(() => {
            spam.reply('@everyone 卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍 https://cdn.discordapp.com/attachments/402126557243768834/416671705956614154/gmagik.gif       https://giphy.com/gifs/hn-cYy3cSVZVntxJiUX9E    https://cdn.discordapp.com/attachments/402126557243768834/416676667906588683/glitch.gif   https://cdn.discordapp.com/attachments/412715106028355599/416677784564400128/rainbow.gif')

        })
    }
    60000;
})


client.on('message', function (msg) {
	if (msg.content === prefix + "help") {
	 msg.reply ("Pas encore terminé mais merci a Terminox_QnT de m'avoir dév")

	}

	if (msg.content === prefix + "vient") {
		msg.reply("J'arrive coupain :joy:")
	}
	})

    client.login('NDUzMjM2OTk1ODg4NTEzMDMx.DfcIlg.TKBeOoBAniO6FL1vJusVULuhJOA');
