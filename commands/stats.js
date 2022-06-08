const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'stats',
  description: 'Give statistics on the bot.',
  execute(message, client) {
    const embed = new MessageEmbed()
    .setColor('#417DC1')
    .setDescription("This is a test embed for the stat command")
    .setAuthor("Chroot stats", client.user.displayAvatarURL(), "")
    .addFields(
      { name: 'Servers', value: '0', inline: true },
      { name: 'Users', value: '0', inline: true },
      { name: '\u200b', value: '\u200b', inline: true }
    )
    .addFields(
      { name: 'Text channels', value: '0', inline: true },
      { name: 'Voice channels', value: '0', inline: true },
      { name: '\u200b', value: '\u200b', inline: true }
    )
    .addFields(
      { name: 'Users listening', value: '0', inline: true },
      { name: 'Commands executed', value: '0', inline: true },
      { name: '\u200b', value: '\u200b', inline: true }
    )
    .addField('Average execution time', '0 ms', true)
    message.channel.send({embeds: [embed]});
  }
}