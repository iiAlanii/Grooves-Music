const Bot = require('discord.js')
const pagination = require('discord.js-pagination')
const { setSizeDependencies } = require('mathjs')

module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {

        const page1 = new Bot.MessageEmbed()
            .setColor("#00FFFF")
            .setTitle(`General Help Menu`)
            .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
            .setThumbnail(`${client.user.displayAvatarURL()}`)
            .setDescription("Hello there! 😃\n\nWelcome to Grooves Music Help menu. Here are all the commands for Grooves Music.\n**How to use:**\nSimply join a voice channel and `-play` a song from YouTube, Spotify and Sound Cloud. Grooves Music supports playlists as well so enjoy!\n\n**Some Links that might be useful**\n`GitHub` - [Here](https://github.com/iiAlanii)\n`Discord Server` - [Here](https://discord.gg/u3QxZdx6dV)\n`Patreon` - [Here](https://www.patreon.com/alan0001)\n\nGrooves Music version 2.5.3 (stable-build)")
            .setFooter("Grooves Music by Mirko#5255")
            .setTimestamp()

        const page2 = new Bot.MessageEmbed()
            .setColor("#00FFFF")
            .setTitle(`Music Help Menu`)
            .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
            .setThumbnail(`${client.user.displayAvatarURL()}`)
            .setDescription("**Music Commands:**\n`clear-queue` - Clears the music queue\n`filter` - Add or remove filters to your songs.\n`join` - Joins the curent VC you are in\n`loop` - Loops the current song or queue\n`nowplaying` - Shows what songs are currently playing\n`play` - Plays songs from Youtube, Spotify or Sound Cloud\n`queue` - Shows what songs are currently in the queue.\n`search` - Search songs from Youtube, Spotify or Sound Cloud\n`suffle` - Shuffles the songs in the queue\n`skip` - Skips the current song\n`stop` - Stops the msuic\n`volume` - Lets you chnage the music")
            .setFooter("Grooves Music by Mirko#5255")
            .setTimestamp()

        const page3 = new Bot.MessageEmbed()
            .setColor("#00FFFF")
            .setTitle(`Other Commands`)
            .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
            .setThumbnail(`${client.user.displayAvatarURL()}`)
            .setDescription("Here are some of Grooves Music's non music related commands.\n\n`inspire` - Get some inspirational quotes\n`invite` - Sends a invite link to invite Grooves Music\n`ping` - Checks my current ping\n`server-info` - Gets stats from the current server.\n`stats` - Shows some info about me.")
            .setFooter("Grooves Music by Mirko#5255")
            .setTimestamp()

        const page4 = new Bot.MessageEmbed()
            .setColor("#00FFFF")
            .setTitle(`UPDATE CATALOG`)
            .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
            .setThumbnail(`${client.user.displayAvatarURL()}`)
            .setDescription("**Everytime Grooves Music gets an update, we will show it here!**\n\n`-NEW` Status command update\n\nGrooves Music version 2.5.4 (stable-build)")
            .setFooter("Grooves Music by Mirko#5255")
            .setTimestamp()

        const pages = [
            page1,
            page2,
            page3,
            page4
        ]

        const emoji = ["⬅️", "➡️"]

        pagination(message, pages, emoji)
    }


}
