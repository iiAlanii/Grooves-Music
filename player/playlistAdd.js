module.exports = (client, message, queue, playlist) => {
    message.lineReplyNoMention({
        embed: {
            author: { name: "Queue added!"},
            description: `${playlist.title} (${playlist.tracks.length} song(s)!)`,
            color: "#00FFFF"
        },
    });
};

