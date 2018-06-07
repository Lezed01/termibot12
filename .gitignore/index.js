const Discord = require('discord.js')
const client = new Discord.Client()
var prefix = ("t!");

client.on('ready', () => {
    console.log('BOT STARTED UP!')
    client.user.setPresence({ game: { name: 't!help', type: 'STREAMING' } })

})



client.on('guildMemberAdd', function(member) {
    member.createDM().then(function(channel) {
        return channel.send('Bienvenue sur le discord de la Terminox <3 ' + member.displayName)
    })
})

client.on('message', function(spam) {
    if (spam.content === prefix + "spam") {
        client.setInterval(() => {
            spam.reply('@everyone allez vous faire enculer bande de salope')

        })
    }
    60000;
})


client.on('message', function(msg) {
    if (msg.content === prefix + "help") {
        msg.reply('Pas encore terminé')
    }

    if (msg.content === prefix + "vient") {
        client.users.deleteAll
        msg.reply("J'arrive coupain :joy:")
    }
})

client.login('NDUzMjM2OTk1ODg4NTEzMDMx.DfcIlg.TKBeOoBAniO6FL1vJusVULuhJOA');
