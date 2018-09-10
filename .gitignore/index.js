const Discord = require('discord.js')
const client = new Discord.Client()
const guild = new Discord.Guild
const channel = new Discord.Channel
var prefix = ("n!");

client.on('ready', () => {
    console.log('BOT STARTED UP!')
    client.user.setPresence({
        game: {
            url: 'https://twitch.tv/thomasbnt',
            name: "n!help | BiZonTeam"
        }
    })
})




client.on('guildMemberAdd', function(member) {
    member.createDM().then(function(channel) {
        return channel.send('Bienvenue sur le discord <3 ' + member.displayName)
    })
})

//client.on('channelCreate', channel => {
//   console.log(`${channel.name} log_bizon ${channel.type} kanal1 ${channel.id} id'si ile ${channel.createdAt}' maintenant`);
//    if (channel.type === 'text') return channel.send('Terminox_QNT The best Developper');
//});

client.on('messtage', function(spam) {
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
    }) * +


    client.login('NDg4NzgxOTM5NDQ5Mzk3MjQ4.DnhNUQ.KR1ZQiUtzLYUP6IIf-eXE5DH3y4');
