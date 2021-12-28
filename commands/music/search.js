module.exports = {
    name: 'search',
    aliases: ['sr'],
    category: 'Music',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please connect to a voice channel first!"},
                color: "#00FFFF",
            },
        });;

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please connect to a voice channel I am in!"},
                color: "#00FFFF",
            },
        });;

        if (!args[0]) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please enter the name or link of the song!"},
                color: "#00FFFF",
            },
        });;

        client.player.play(message, args.join(" "));
    },
};