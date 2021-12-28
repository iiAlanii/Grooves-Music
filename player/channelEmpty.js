module.exports = (client, message, queue) => {
    message.lineReplyNoMention({
        embed: {
            author: { name: "I have stopped the music becuase there are no members in the voice channel!"},
            color: "#FF0000",
        },
    });
};