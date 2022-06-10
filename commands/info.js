const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'info',
  description: 'Give information on the bot.',
  async execute(message, args, client) {

    let totalUsers = 0;

    for (const guild of client.guilds.cache) {
      totalUsers += (await guild[1].members.fetch()).filter(member => !member.user.bot).size;
    }

    const embed = new MessageEmbed()
    .setColor('#417DC1')
    .setTitle("Chroot")
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription("Chroot is a coding bot with many features!")
    .addFields(
      { name: 'Version', value: '0.0.0', inline: true },
      { name: 'Library', value: 'N/A', inline: true },
      { name: 'Creator', value: 'StrykerPX', inline: true }
    )
    .addFields(
      { name: 'Servers', value: client.guilds.cache.size.toString(), inline: true },
      { name: 'Users', value: totalUsers.toString(), inline: true },
      { name: 'website', value: 'N/A', inline: true }
    )
    message.channel.send({embeds: [embed]});
  }
}