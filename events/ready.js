const { Channel } = require("discord.js");


module.exports = async (client) => {
    const channel = client.channels.cache.get('873268855802318888')
    channel.send(`Logged in as ${client.user.username}.`);

   
};

