const Discord = require('discord.js');

module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}stop',

   async execute(client, message) {

    const queue = client.player.getQueue(message);

    const voice = message.member.voice.channel;


        if (!message.member.voice.channel) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please connect to a voice channel first!" },
                color: "#00FFFF",
            },
        });

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReplyNoMention({
            embed: {
                author: { name: "Please connect to the same voice channel I am into use this command." },
                color: "#00FFFF",
            },
        });

        if (!client.player.getQueue(message)) return message.lineReplyNoMention({
            embed: {
                author: { name: "There is no music currently playing!" },
                color: "#00FFFF",
            },
        });

        const members = voice.members.filter((m) => !m.user.bot);

        const embed = new Discord.MessageEmbed()
            .setAuthor("Stopping the music?")
            .setThumbnail(queue.tracks[0].thumbnail)

        const m = await message.lineReplyNoMention(embed);

        if (members.size > 1) {

            m.react("👍");

            const mustVote = Math.floor(members.size / 2 + 1);

            embed.setDescription("React with 👍 to stop the music", {
                songName: queue.tracks[0].name,
                voteCount: 0,
                requiredCount: mustVote
            });
            m.edit(embed);

            const filter = (reaction, user) => {
                const member = message.guild.members.cache.get(user.id);
                const voiceChannel = member.voice.channel;
                if (voiceChannel) {
                    return voiceChannel.id === voice.id;
                }
            };

            const collector = await m.createReactionCollector(filter, {
                time: 25000
            });

            collector.on("collect", (reaction) => {
                const haveVoted = reaction.count - 1;
                if (haveVoted >= mustVote) {
                    client.player.skip(message);
                    embed.setDescription("Music has been stopped");
                    m.edit(embed);
                    collector.stop(true);
                } else {
                    embed.setDescription("React with 👍 to stop the music", {
                        songName: queue.tracks[0].title,
                        voteCount: haveVoted,
                        requiredCount: mustVote
                    });
                    m.edit(embed);
                }
            });

            collector.on("end", (collected, isDone) => {
                if (!isDone) {
                    return message.error("You did not give a valid response! Please run the command again!");
                }
            });

        } else {
            client.player.setRepeatMode(message, false);
            const success = client.player.stop(message);

            if (success) message.lineReplyNoMention({
                embed: {
                    author: { name: "Queue has been stopped!" },
                },
            });;
        }

    },
};