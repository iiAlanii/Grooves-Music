
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "eval",
  category: "Core",
  usage: "eval <code>",

  async execute(client, message, args) {
    if (message.author.id != client.config.discord.ownerID) {
      return;
    }
      try {
        const code = args.join(" ");
        if (!code) {
           return message.lineReply("Please give something to evaluate")
        }

        let evaled = eval(code);

        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);

          let embed = new MessageEmbed()
          .setAuthor("Evaluation Command", message.author.avatarURL())
          .addField("📥", `\`\`\`${code}\`\`\``)
          .addField(" 📤", `\`\`\`${evaled}\`\`\``)
          .setColor("#00FFFF")

        message.lineReplyNoMention(embed)
      } catch (err) {
        message.lineReply(`\`\`\`${err}\`\`\``);
    }
  }
}
