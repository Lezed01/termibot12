const Discord = require('discord.js')
const client = new Discord.Client()
const guild = new Discord.Guild()
const embed = new Discord.RichEmbed()
const { Client, RichEmbed } = require('discord.js');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
var prefix = ("n!");
var opus = require('opusscript');
logschannel = ("général")

client.on('ready', () => {
    console.log('Sakura ON')

    client.user.setPresence({
        game: {
            url: 'https://twitch.tv/thomasbnt',
            name: "n!help | Sakura"


        }
    })
})

client.on('message', message => {
    if (message.author.bot)
        return;

    if (message.content.toLowerCase().startsWith("n!play")) {
        let VoiceChannel = message.guild.channels.find(channel => channel.id === '593550175751110656')
        if (VoiceChannel != null) {
            console.log(VoiceChannel.name + " a été vue dans un channel " + VoiceChannel.type)
            VoiceChannel.join()
                .then(connection => {
                    console.log("Le bot a rejoin le channel");
                    const stream = ytdl('https://www.youtube.com/watch?v=McEoTIqoRKk', { filter: 'audioonly' });
                    const dispatcher = connection.playStream(stream, streamOptions);
                })
                .catch();
        }
    }

})

client.on('guildMemberAdd', function(member) {
    member.createDM().then(function(channel) {
        return channel.send('Bienvenue sur le discord de Sakura <3 ' + member.displayName)
    })
})

client.on('message', function(message) {
    if (message.content === prefix + "Twitter") {
        message.reply("Voici le Twitter de Sakura : ")
        message.channel.send("```SakuraOff_```")
        message.channel.send("Lien direct : https://twitter.com/SakuraOff_")

    }
})

client.on('message', function(message) {
    if (message.content === prefix + "twitter") {
        message.reply("Voici le Twitter de Sakura : ")
        message.channel.send("```SakuraOff_```")
        message.channel.send("Lien direct : https://twitter.com/SakuraOff_")

    }
})


client.on('message', function(msg) {
    if (msg.content === prefix + "help") {
        msg.reply('```Voici les commande disponible dans SakuraBOT by Terminox```')
        msg.channel.send("```⚠ Toutes les commandes commence par n! ```")
        msg.channel.send("```twitter: Vous envoie le Twitter de Sakura```")

    }
})



client.login('NTkzNTI2MzY5Mzg4ODU1Mjk3.XRPOPQ.tW4UwJH7vzLJTTGt7fQ_Jk1gmC8');
