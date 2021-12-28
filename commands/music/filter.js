const Discord = require('discord.js');

module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please connect to a voice channel first!" },
                color: "#00FFFF",
            },
        });

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please connect to the voice channel I am in!" },
                color: "#00FFFF",
            },
        });

        if (!client.player.getQueue(message)) return message.lineReplyNoMention({
            embed: {
                author: { name: "There are currently no songs playing!" },
                color: "#00FFFF",
            },
        });

        if (!args[0]) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please type the name of the filter. Run -filters to get the list of filters" },
                color: "#00FFFF",
            },
        });

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.lineReplyNoMention({
            embed: {
                author: { name: "That filter does not excist. Try running -filter 8D as an example" },
                color: "#00FFFF",
            },
        });

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) {
            const msg = new Discord.MessageEmbed()
                .setDescription(` <a:loading:891066348191502406> | Hold tight, I'm adding the filter\n\n The longer the music, the longer it will take to add the filter.`)
                .setColor("#00FFFF")
            message.lineReplyNoMention(msg)
                .then(msg => {
                    msg.delete({ timeout: 2500 });
                });
        }

        else {
            const msgg = new Discord.MessageEmbed()
                .setDescription(` <a:loading:891066348191502406> | Hold tight, I'm removing the filter\n\n The longer the music, the longer it will take to remove the filter.`)
                .setColor("#00FFFF")
            message.lineReplyNoMention(msgg)
                .then(msg => {
                    msg.delete({ timeout: 2500 });
                });
        }
    },
};