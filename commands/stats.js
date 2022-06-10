const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'stats',
  description: 'Give statistics on the bot.',
  async execute(message, args, client) {

    let totalUsers = 0;
    let totalOnline = 0;

    let totalText = 0;
    let totalVoice = 0;

    let totalSeconds = (client.uptime / 1000);
    let weeks = Math.floor(totalSeconds / 604800);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    for (const guild of client.guilds.cache) {
      totalUsers += (await guild[1].members.fetch()).size;
      totalOnline += (await guild[1].members.fetch()).filter((member) => !member.user.bot && member.presence?.status === 'online').size;

      totalText += (await guild[1].channels.fetch()).filter((channel) => channel.type === 'GUILD_TEXT').size;
      totalVoice += (await guild[1].channels.fetch()).filter((channel) => channel.type === 'GUILD_VOICE').size;
    }

    const embed = new MessageEmbed()
    .setColor('#417DC1')
    .setAuthor("Chroot stats", client.user.displayAvatarURL())
    .addFields(
      { name: 'Guilds', value: client.guilds.cache.size.toString(), inline: true },
      { name: 'Members', value: totalUsers.toString(), inline: true },
      { name: 'Online', value: totalOnline.toString(), inline: true },
    )
    .addFields(
      { name: 'Text channels', value: totalText.toString(), inline: true },
      { name: 'Voice channels', value: totalVoice.toString(), inline: true },
      { name: 'Average ping', value: '170ms', inline: true}
    )
    .setFooter({text: `Uptime: ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`})
    message.channel.send({embeds: [embed]});
  }
}