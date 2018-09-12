const Discord = require('discord.js')
const client = new Discord.Client()
const guild = new Discord.Guild
const guildm = new Discord.GuildMember
const embed = new Discord.RichEmbed
const AbstractHandler = require('./AbstractHandler');
var prefix = ("n!");


//client.on('guildCreate', function(guild){
//  var logschannel = client.channels.find("id", '')
//var embed = new Discord.RichEmbed()
//    .setDescription("Terminox_QnT Dev")
//    .addField("Serveur :", guild.name)
//    .addField("Serveur ID : ", guild.id)
//    .addField("Fondateur du discord : ", guild.owner.user.username)
//    .addField("Nombre de personne : ", guild.members.size)
//   .addField("Nombre de channel : ", guild.channels.size)
//    logschannel.send(embed)
//    var channel = guild.channels.array()
//})



client.on('guilAddRole', function(guildMemberAdd){
    if (spam.content === prefix + "role") {
        var message = new Discord.Message
        message.member.addRole('staff', 'Il a besoin')
    }
})

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

client.on('channelCreate', channel => {
    class ChannelCreateHandler extends AbstractHandler {
        handle(packet) {
            const client = this.packetManager.client;
            const data = packet.d;
            client.actions.ChannelCreate.handle(data);
        }
    }

    /**
     * Emitted whenever a channel is created.
     * @event Client#channelCreate
     * @param {Channel} channel The channel that was created
     */

    module.exports = ChannelCreateHandler;
});

//client.on('messtage', function(spam) {
//    if (spam.content === prefix + "spam") {
//       client.setInterval(() => {
//            spam.reply('@everyone allez vous faire enculer bande de salope')


//        })


//    }
//    60000;

//})


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
