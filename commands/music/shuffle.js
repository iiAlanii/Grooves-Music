module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Music',
    utilisation: '{prefix}shuffle',

    execute(client, message) {
        if (!message.member.voice.channel) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please connect to a voice channel first!"},
                color: "#00FFFF",
            },
        });;

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please connect to the voice channel I am in!"},
                color: "#00FFFF",
            },
        });;

        if (!client.player.getQueue(message)) return message.lineReplyNoMention({
            embed: {
                author: { name: "There is no music currently playing!"},
                color: "#00FFFF",
            },
        });;

        const success = client.player.shuffle(message);

        if (success) message.lineReplyNoMention({
            embed: {
                author: { name: "Queue shuffled!"},
                description: `${client.player.getQueue(message).tracks.length} song(s) shuffled!`,
                color: "#00FFFF",
            },
        });;
    },
};