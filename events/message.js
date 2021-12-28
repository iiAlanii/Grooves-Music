const Discord = require('discord.js')
const axios = require('axios')

module.exports = async (client, message) => {
  if (message.author.bot || message.channel.type === 'dm') return;

  const prefix = client.config.discord.prefix;

  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

  if (cmd) cmd.execute(client, message, args);


  if(!cmd) return message.lineReplyNoMention(
    new Discord.MessageEmbed()
    .setAuthor(`Hello ${message.author.tag} 😃`)
    .setDescription(`That's not any of my commands!\n To see the list of all commands I have, do -help`)
  )
  const channel = client.channels.cache.get('873268855802318888');
  channel.send(
      new Discord.MessageEmbed()
          .setAuthor(`${message.author.tag} (${message.author.id})` ,message.author.displayAvatarURL())
          .addField(`${message.author.tag} (${message.author.id}) Ran Command`, `${prefix}${command} ${args.join(' ').substring(0, 980)}`)
          .addField('Guild', `${message.guild.name} (${message.guild.id})`)
          .addField('Channel', `${message.channel.name} (${message.channel.id})`)
          .setColor('BLUE')
          .setTimestamp()      

  )

};

