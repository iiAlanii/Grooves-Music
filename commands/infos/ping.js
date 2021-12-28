const Discord = require("discord.js");

module.exports = {
  name: "ping",
  aliases: [],
  category: "Infos",
  utilisation: "{prefix}ping",

  execute(client, message) {
    const ping = new Discord.MessageEmbed()
      .setColor("#00FFFF")
      .setAuthor("Pong!")
      .setDescription(
        `⏳ | Latency is **${
          Date.now() - message.createdTimestamp
        }ms**.\n\n 💓 | API Latency is **${Math.round(client.ws.ping)}ms**`
      );
    `)`;
    message.lineReplyNoMention(ping);
  },
};
