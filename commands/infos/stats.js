const Discord = require("discord.js");
const ms = require("ms");

module.exports = {
  name: "stats",
  aliases: [],
  category: "Infos",
  utilisation: "{prefix}stats",

  execute(client, message, args) {
    const ToTalSeconds = client.uptime / 1000;
    const Days = Math.floor(ToTalSeconds / 86400);
    const Hours = Math.floor(ToTalSeconds / 3600);
    const Minutes = Math.floor(ToTalSeconds / 60);
    const Seconds = Math.floor(ToTalSeconds % 60);
    const Uptime = `${Days} Days, ${Hours} Hours, ${Minutes} Minutes & ${Seconds} Seconds`;
    const MemoryUsage = process.memoryUsage().heapUsed / 1024 / 1024;
    const RamUsed = Math.round(process.cpuUsage().system) / 1024;
    const RamUsage = Math.trunc(RamUsed);
    const BotPlatform = process.platform;
    const MemoryUsed = Math.trunc(MemoryUsage);
    const Os = require("os");
    const OsHostName = Os.hostname();
    const SystemPing = Math.round(client.ws.ping);
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor("#00FFFF")
      .setTitle("Bot's Live Status")
      .addField(" #1 ", "**Bot Uptime** : ` " + `${Uptime}` + " `")
      .addField(" #2 ", "**Bot Current Version** : ` " + "1.0.0" + " `")
      .addField(" #3 ", "**CPU Usage** :  ` " + RamUsage + "Mb `")
      .addField(" #4", "**Memory Usage** :  ` " + MemoryUsed + "Mb `")
      .addField(" #5 ", "**System Ping** :  ` " + SystemPing + " `")
      .addField(
        " #6 ",
        "**Channels** : ` " + `${client.channels.cache.size}` + " `"
      )
      .addField(
        " #7 ",
        "**Servers** : ` " + `${client.guilds.cache.size}` + " `"
      )
      .addField(" #8 ", "**Users** : ` " + `${client.users.cache.size}` + " `");
    message.lineReplyNoMention(exampleEmbed);
  },
};
