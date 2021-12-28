module.exports = (client, message, query, tracks) => {
    message.lineReplyNoMention({
        embed: {
            color: "#00FFFF",
            author: { name: `Here are your search results for ${query}` },
            footer: { text: 'Grooves Music' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};
