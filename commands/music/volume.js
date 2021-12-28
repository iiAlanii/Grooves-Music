module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please connect to a voice channel first!"},
            },
        });;

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please connect to the same voice channel I am in!"},
                color: "#00FFFF",
            },
        });;

        if (!client.player.getQueue(message)) return message.lineReplyNoMention({
            embed: {
                author: { name: "There is no music currently playing!"},
                color: "#00FFFF",
            },
        });;

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.lineReplyNoMention({
            embed: {
                author: { name: `Current volume is ${client.player.getQueue(message).volume}%`},
                color: "#00FFFF",
            },
        });;

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please enter a number bewteen 1 and 100!"},
                color: "#00FFFF",
            },
        });;

        const success = client.player.setVolume(message, parseInt(args[0]));

        if (success) message.lineReplyNoMention({
            embed: {
                author: { name: `Volume set to ${parseInt(args[0])}%!`},
                color: "#00FFFF",
            },
        });;
    },
};
