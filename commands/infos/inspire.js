const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "inspire",
  aliases: [],
  category: "Infos",
  utilisation: "{prefix}inspire",

  execute(client, message, args) {
    function getQuote() {
      return fetch("https://zenquotes.io/api/random")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return data[0]["q"] + " -by " + data[0]["a"];
        });
    }

    getQuote().then((quote) => {
      const quoteEmbed = new Discord.MessageEmbed()
        .setColor("#00FFFF")
        .setAuthor("Quotes...")
        .setDescription(quote);
      message.lineReplyNoMention(quoteEmbed);
    });
  },
};
