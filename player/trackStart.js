const Discord = require('discord.js')

module.exports = (client, message, track) => {

    const msg = new Discord.MessageEmbed()
    .setDescription(` Searching for ${track.title}`)
    message.lineReplyNoMention(msg)
    .then(m => {
        msg.setAuthor(`Now playing`) .setDescription(`[${track.title}](${track.url})` + ` [${message.author}]`) .setColor("#00FFFF")
        m.edit(msg)
    })
    
};