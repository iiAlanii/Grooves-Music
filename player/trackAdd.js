const Discord = require('discord.js');

module.exports = (client, message, queue, track) => {
    const msg = new Discord.MessageEmbed()
    .setDescription(` Searching for ${track.title}`)
    message.lineReplyNoMention(msg)
    .then(m => {
        msg.setAuthor(`Queued`) .setDescription(`[${track.title}](${track.url})` + ` [${message.author}]`) .setColor("#00FFFF")
        m.edit(msg)
    })
};