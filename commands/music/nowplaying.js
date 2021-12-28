module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please connect to a voice channel first!"},
                color: "#00FFFF",
            },
        });

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReplyNoMention(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.lineReplyNoMention({
            embed: {
                author: { name: "There is no music currently playing!"},
                color: "#00FFFF",
            },
        });

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.lineReplyNoMention({
            embed: {
                author: { name: track.title },
                color: "#00FFFF",
                footer: { text: 'Grooves Music' },
                fields: [
                    { name: 'Author of the song', value: track.author, inline: true },
                    { name: 'Requested by', value: track.requestedBy, inline: true },
                    { name: 'From a playlist', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                    { name: 'Duration', value: track.duration, inline: false },

                    { name: 'Progress bar', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};