module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

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

        if (client.player.getQueue(message).paused) return message.lineReplyNoMention({
            embed: {
                author: { name: "The music is already paused!"},
                color: "#00FFFF",
            },
        });;

        const success = client.player.pause(message);

        if (success) message.lineReplyNoMention({
            embed: {
                author: { name: "Paused the player"},
                color: "#00FFFF",
            },
        });;
    },
    
};