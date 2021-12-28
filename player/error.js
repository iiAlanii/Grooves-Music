module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.lineReplyNoMention({
                embed: {
                    author: { name: "There is no music being played in this server! Do -play <song name or URL>"},
                    color: "#FF0000",
                },
            });
            break;
        case 'NotConnected':
            message.lineReplyNoMention({
                embed: {
                    author: { name: "You are not connected to any voice channel! Try joining one and retry."},
                    color: "#FF0000",
                },
            });
            break;
        case 'UnableToJoin':
            message.lineReplyNoMention({
                embed: {
                    author: { name: "I am not able to join your voice channel! Please check my permissions and retry!"},
                    color: "#FFA500",
                },
            });
            break;
        case 'VideoUnavailable':
            message.lineReplyNoMention({
                embed: {
                    author: { name: ` ${args[0].title} is not available in your country! Skipping it...`},
                    color: "#FFA500",
                },
            });
            break;
        case 'MusicStarting':
            message.lineReplyNoMention({
                embed: {
                    author: { name: "The music is already starting, please wait. If it does not start shortly, try playing it again!"},
                    color: "#FFA500",
                },
            });
            break;
        default:
            message.lineReplyNoMention({
                embed: {
                    author: { name: "Something broke... please try again later."},
                    color: "#FF0000",
                },
            });
    };
};