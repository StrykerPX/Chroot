const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'uptime',
  description: 'Returns bot uptime.',
  execute(message, args, client) {

    let totalSeconds = (client.uptime / 1000);
    let weeks = Math.floor(totalSeconds / 604800);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    const embed = new MessageEmbed()
    .setColor('#417DC1')
    .setAuthor('Uptime')
    .setDescription(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`)
    .setFooter("Last started on: " + client.user.createdAt.toLocaleString('en', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      hour12: false,
      minute: 'numeric'
    }));
    message.channel.send({embeds: [embed]});
  }
}