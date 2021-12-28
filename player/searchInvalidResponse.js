module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.lineReplyNoMention({
            embed: {
                author: { name: "You did not give me a valid answer. Please run the command again!"},
                color: "#00FFFF"
            },
        });
    } else message.lineReplyNoMention({
        embed: {
            author: { name: `You must give a valid number between 1 and ${tracks.length}!`},
            color: "#00FFFF"
        },
    });
};