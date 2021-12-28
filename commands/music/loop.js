module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

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

        if (!client.player.getQueue(message)) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please give the song name or link to start playing!"},
                color: "#00FFFF",
            },
        });

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.lineReplyNoMention({
                    embed: {
                        author: { name: "Repeat mode is now disabled!"},
                        color: "#00FFFF",
                    },
                });
            } else {
                client.player.setLoopMode(message, true);
                return message.lineReplyNoMention({
                    embed: {
                        author: { name: "Repeating the whole queue!"},
                        color: "#00FFFF",
                    },
                });
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.lineReplyNoMention({
                    embed: {
                        author: { name: "Repeat mode now disabled!"},
                        color: "#00FFFF",
                    },
                });
            } else {
                client.player.setRepeatMode(message, true);
                return message.lineReplyNoMention({
                    embed: {
                        author: { name: "Repeating the song!"},
                        color: "#00FFFF",
                    },
                });
            };
        };
    },
};