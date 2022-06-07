const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Give available commands',
  execute(message) {
    const embed = new MessageEmbed()
    .setTitle('Test')
    .setColor('#417DC1')
    .setDescription('This is a test embed for the help command');
    
    message.channel.send({embeds: [embed]});
  }
}