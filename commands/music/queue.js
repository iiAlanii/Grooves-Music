const Discord = require('discord.js')

module.exports = {
    name: 'queue',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message,) {
        if (!message.member.voice.channel) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please connect to a voice channel first!" },
            },
        });;

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please connect to the same voice channel I am in!" },
            },
        });;

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.lineReplyNoMention({
            embed: {
                author: { name: "There is currently no music playing!" },
            },
        });;


        const queueEmbed = new Discord.MessageEmbed()
            .setAuthor(`Track Queue ${client.player.getQueue(message).loopMode ? '(looped)' : ''}`)
            .setDescription(`**Current track**: ` + `[${queue.playing.title}](${queue.playing.url}) | by ${queue.playing.author}\n\n` +(queue.tracks.map((track, i) => {
                    return `**#${i + 1}** - [${track.title}](${track.url})`
                }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs.\nYou can -play more :^)` : `This track queue currently has **${queue.tracks.length}** song(s)\n You can -play more :^)`}`))
        message.lineReplyNoMention(queueEmbed)
    },
};
