module.exports = (client, message, queue) => {
    message.lineReplyNoMention({
        embed: {
            author: { name: "I stopped the music becuase I was disconnected from the voice channel!"},
            color: "#FF0000",
        },
    });
};