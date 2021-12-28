const Discord = require('discord.js');

module.exports = {
    name: 'chelp',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            const helpEmbed = new Discord.MessageEmbed()
                .setAuthor("Grooves Music general help menu")
                .setFooter("Credits to gifer.com and pinterest.com/pin/664210645033530749 for the GIF")
                .addFields(
                    { name: "Miscellaneous", value: infos },
                    { name: "Music", value: music },
                    { name: "Filters", value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    { name: "Changelog", value: "Whenever I get an update, you can see them in the help menu.\n\n **Changes**:\n **NEW** Inspire command to brighten up your mood! " },
                )
                .attachFiles(['./gifer.gif'])
                .setImage('attachment://gifer.gif');


            message.lineReplyNoMention(helpEmbed)
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.lineReplyNoMention(`${client.emotes.error} - I did not find this command !`);

            message.lineReplyNoMention({
                embed: {
                    color: '#ADD8E6',
                    author: { name: 'Command help menu' },
                    footer: { text: 'Grooves Music' },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Usage', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
                }
            });
        };
    },
};
