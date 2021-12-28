module.exports = {
  name: "debug",
  aliases: [],
  category: "Infos",
  utilisation: "{prefix}debug",

  execute(client, message) {
    message.channel.send({
      embed: {
        author: {
          name: `${client.user.username} is currently connected in ${client.voice.connections.size} channel(s)!`,
        },
      },
    });
  },
};
