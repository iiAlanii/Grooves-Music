module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please give the song name or link to start playing!"},
                color: "#00FFFF",
            },
        });

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return lineReplyNoMention({
            embed: {
                author: { name: "Please connect to the voice channel I am in!"},
            },
        });

        if (!client.player.getQueue(message)) return message.lineReplyNoMention({
            embed: {
                author: { name: "There is no music playing! Play some music first to use this command."},
                color: "#00FFFF",
            },
        });

        if (client.player.getQueue(message).tracks.length <= 1) return message.lineReplyNoMention({
            embed: {
                author: { name: "There is only 1 song playing the this queue!"},
                color: "#00FFFF",
            },
        });

        client.player.clearQueue(message);

        message.lineReplyNoMention({
            embed: {
                author: { name: "The queue has been removed!"},
                color: "#00FFFF",
            },
        });
    },
};
