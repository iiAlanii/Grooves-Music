module.exports = (client, message, queue) => {
    message.lineReplyNoMention({
        embed: {
            author: { name: "Music stopped! No more music in the queue! If you want you can `-play` more songs."},
            color: "#FFA500"
        },
    });
};
