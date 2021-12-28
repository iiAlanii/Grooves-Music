module.exports = (client, message, query, tracks) => {
    message.reply({
        embed: {
            author: { name: `You did not give a valid response! Please run the command again!`},
            color: "#00FFFF"
        },
    });
};