module.exports = {
  name: "invite",
  aliases: [],
  category: "Infos",
  utilisation: "{prefix}invite",

  execute(client, message) {
    message.lineReplyNoMention({
      embed: {
        author: { name: "Invite me to listen to music with your friends!" },
        color: "#00FFFF",
        description:
          "Hello there! 😃 [Click here](https://discord.com/api/oauth2/authorize?client_id=886583739159834654&permissions=3230784&scope=bot) to invite me!",
      },
    });
  },
};
