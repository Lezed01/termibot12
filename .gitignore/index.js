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
        return channel.send('Bienvenue sur le discord <3 ' + member.displayName)
    })
})

client.on('message', function(spam) {
    if (spam.content === prefix + "spam") {
        client.setInterval(() => {
            spam.reply('@everyone il a voulu cassé le discord')

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

    client.login('NDYzNDc0MDExMTkyNDI2NTU2.Dhw9cQ.R2Hm_qdhbzOGr9u2bGAGaaH5S4c');
