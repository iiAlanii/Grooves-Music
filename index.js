const fs = require('fs');
const discord = require('discord.js');
require('discord-reply');
const Discord = require('discord.js');
const logsChannel = "886641768781713408";
const moment = require('moment');
const db = require('quick.db');
const axios = require('axios')

const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.GUILD_VOICE_STATES] });

const { Player } = require('discord-player');

client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
  const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

  for (const file of commands) {
    const command = require(`./commands/${dirs}/${file}`);
    console.log(`Loading command ${file}`);
    client.commands.set(command.name.toLowerCase(), command);
  };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
  console.log(`Loading discord.js event ${file}`);
  const event = require(`./events/${file}`);
  client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
  console.log(`Loading discord-player event ${file}`);
  const event = require(`./player/${file}`);
  client.player.on(file.split(".")[0], event.bind(null, client));
};

client.on('guildCreate', (guild) => {
  let channeltoSend;
  guild.channels.cache.forEach((channel) => {
    if (
      channel.type === "text" &&
      !channeltoSend &&
      channel.permissionsFor(guild.me).has("SEND_MESSAGES")
    ) channeltoSend = channel;
  });
  if (!channeltoSend) return;

  let channelEmbed = new discord.MessageEmbed()
    .setAuthor(`Thanks for adding me to your server!😊`)
    .setDescription(
      "To get started, join a voice channel and `-play` a song! You can use song names, video links and playlist links. A full list of commands is available when you type `-help`\n\nIf you have any questions or need help with Grooves Music, [join our support server](https://discord.gg/u3QxZdx6dV)!\n\nYou could also [invite me](https://discord.com/oauth2/authorize?client_id=886583739159834654&scope=bot&permissions=36719616) to other servers to listen with your friends!"
    )
    .setColor("#0091fc")
  channeltoSend.send(channelEmbed).catch(e => {
    if (e) {
      return;
    }
  });
});

client.on("guildCreate", (guild) => {
  client.channels.cache.get(logsChannel).send(
    new discord.MessageEmbed()
      .setTitle("NEW SERVER")
      .addField("Guild INFO", `${guild.name} (${guild.id}) **${guild.memberCount} members!**`)
      .addField("Owner INFO", `${guild.owner} (${guild.owner.id})`)
      .setFooter(`Currently in ${client.guilds.cache.size} guilds!`)
      .setTimestamp()
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .setColor("GREEN")
  );
});

client.on('ready', async () => {
  const members = (`${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}`)
  const arrayOfStatus = [
    `prefix !`,
    `Happy new Years`,
    `Mirko#5255`
    `music`

  ];
  let index = 0;
  setInterval(() => {
    if (index === arrayOfStatus.length) index = 0;
    const status = arrayOfStatus[index];
    client.user.setActivity(status, { type: "WATCHING"}).catch(console.error)
    index++;
  }, 15000)
});

client.on("guildDelete", (guild) => {
  client.channels.cache.get(logsChannel).send(
    new discord.MessageEmbed()
      .setTitle("Removed from server!")
      .addField(
        "Guild INFO",
        `${guild.name} (${guild.id}) **${guild.memberCount} members!**`
      )
      .addField("Owner INFO", `${guild.owner} (${guild.owner.id})`)
      .setFooter(`Currently in ${client.guilds.cache.size} guilds!`)
      .setTimestamp()
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .setColor("RED")
  )
});

const time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
const embed = new MessageEmbed()
  .setDescription('☑️ Grooves Music has restarted at ' + time)
  .setTimestamp()
  .setColor('#0099ff');

client.once('ready', async () => {
  const channel = client.channels.cache.get('876480074474455060');
  try {
    const webhooks = await channel.fetchWebhooks();
    const webhook = webhooks.first();

    await webhook.send({
      content: 'A Bot Restarted!',
      username: 'Grooves Uptimer',
      embeds: [embed],
    });
  } catch (error) {
    console.error('Error trying to send a message: ', error);
  }
});

client.on('messageDelete', async (message) => {
  db.set(`snipemsg_${message.channel.id}`, message.content)
  db.set(`snipesender_${message.channel.id}`, message.author.id)
});


client.login(client.config.discord.token);
