const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'about',
  description: 'Give information on the bot.',
  execute(message, client) {
    const embed = new MessageEmbed()
    .setColor('#417DC1')
    .setTitle("Chroot info")
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription("This is a test embed for the info command")
    .addFields(
      { name: 'Version', value: '0.0.0', inline: true },
      { name: 'Library', value: 'N/A', inline: true },
      { name: 'Creator', value: 'StrykerPX', inline: true }
    )
    .addFields(
      { name: 'Servers', value: '0', inline: true },
      { name: 'Users', value: '0', inline: true },
      { name: 'website', value: 'N/A', inline: true }
    )
    message.channel.send({embeds: [embed]});
  }
}