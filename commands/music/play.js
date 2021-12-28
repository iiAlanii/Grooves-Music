const Discord = require('discord.js');

module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please connect to a voice channel first!"},
                color: "#00FFFF",
            },
        });

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please connect to the voice channel I am in!"},
                color: "#00FFFF",
            },
        });

        if (!args[0]) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please give the song name or link to start playing!"},
                color: "#00FFFF",
            },
        });

        client.player.play(message, args.join(" "), { firstResult: true }) 
        const msg = new Discord.MessageEmbed()
        .setDescription(` <a:loading:891066348191502406> | Hold tight, I'm getting your song...\n\n Playlists might take longer`)
        .setColor("#00FFFF")
        message.lineReplyNoMention(msg)
        .then(msg => {
            msg.delete({ timeout: 12000});
        });
    },
};
