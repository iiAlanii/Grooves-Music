module.exports = {

    name: 'join',
    aliases: ['j'],
    category: 'Music',
    utilisation: '{prefix}join',

    execute(client, message, args) {

        if (!message.member.voice.channel) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please connect to a voice channel first!" },
                color: "#00FFFF",
            },
        });

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please connect to the voice channel I am in!"},
                color: "#00FFFF",
            },
        });
        if(!message.member.voice.channel.join()) return message.lineReplyNoMention({
            embed: {
                author: {name: "I cannot join your vocie channel. Please check my perms and retry."},
                color: "#00FFFF",
            }
        });
        
        message.member.voice.channel.join();
        message.lineReplyNoMention({
            embed: {
                author: { name: `Sucessfully Joined ${message.member.voice.channel.name}` },
                color: "#00FFFF",
            },
        });
    }
}