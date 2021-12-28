const Discord = require("discord.js");

module.exports = {
  name: "server-info",
  aliases: [],
  category: "Infos",
  utilisation: "{prefix}server",

  execute(client, message, args) {
    const ServerLogo = message.guild.iconURL();
    const ServerInfoEmbed = new Discord.MessageEmbed()
      .setColor("#00FFFF")
      .setTitle("Server Info")
      .setImage(ServerLogo)
      .setDescription(`About **${message.guild}**`)
      .addField(
        "**Date Created**",
        `Server Created on **${message.guild.createdAt.toLocaleString()}**`
      )
      .addField(
        "**Owner**",
        `The Owner of This Server is ${message.guild.owner}`
      )
      .addField(
        "**Total Member Count**",
        "This Server Has ` " +
          `${message.guild.memberCount}` +
          " ` **Members In Total**"
      )
      .addField(
        "**Members**",
        "This server Has ` " +
          `${message.guild.members.cache.filter((m) => !m.user.bot).size}` +
          " ` **Members**"
      )
      .addField(
        "**Bot members**",
        "This server Has ` " +
          `${message.guild.members.cache.filter((m) => m.user.bot).size}` +
          " ` **Bots** "
      )
      .addField(
        "**Emoji Count**",
        "This Server Has ` " +
          `${message.guild.emojis.cache.size}` +
          " ` **Emojis**"
      )
      .addField(
        "**Roles Count**",
        "This Server Has ` " +
          `${message.guild.roles.cache.size}` +
          " ` **Roles**"
      )
      .addField(
        "**Channels Count**",
        "This Server Has ` " +
          `${message.guild.channels.cache.size}` +
          " ` **Channels**"
      )
      .setURL(ServerLogo);
    message.lineReplyNoMention(ServerInfoEmbed);
  },
};
