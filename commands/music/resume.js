module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

   async execute(client, message) {
        if (!message.member.voice.channel) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please connect to a voice channel first!"},
                color: "#00FFFF",
            },
        });

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please connect to the voice channel I am in to use this command!"},
                color: "#00FFFF",
            },
        });

        if (!client.player.getQueue(message)) return message.lineReplyNoMention({
            embed: {
                author: { name: "There is no music currently playing!"},
                color: "#00FFFF",
            },
        });

        if (!client.player.getQueue(message).paused) return message.lineReplyNoMention({
            embed: {
                author: { name: "The music is already playing!"},
                color: "#00FFFF",
            },
        });

        await client.player.resume(message);

        message.lineReplyNoMention({
            embed: {
                author: { name: " ▶️ Resumed the player!"},
                color: "#00FFFF",
            },
        });



    },
};
