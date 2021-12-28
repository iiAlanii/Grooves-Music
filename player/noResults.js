module.exports = (client, message, query) => {
    message.lineReplyNoMention({
        embed: {
            color: "#FFA500",
            author: { name: "No results found for:"},
            description: `${query}`,
            color: "#FFA500"
        },
    });
};