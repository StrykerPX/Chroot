const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Give available commands',
  execute(message) {
    const embed = new MessageEmbed()
    .setTitle('Test')
    .setColor('#417DC1')
    .setDescription('This is a test embed for the help command')
    .addFields(
      { 
        name: 'General', 
        value:
          '`' + 'help' + '`:  Get help on the available  commands.\n'+
          '`' + 'info' + '`:  Returns information about the bot.\n'+
          '`' + 'ping' + '`:  Returns response time in milliseconds.\n'+
          '`' + 'stats' + '`: Returns statistics about the bot.\n'+
          '`' + 'uptime' + '`: Returns time past since bot started.\n', 
        inline: false }
    )
    .addFields(
      { 
        name: 'Coding', 
        value:
          '`' + 'github' + '`: Return information about a GitHub repository.\n',
        inline: false }
    )
    
    message.channel.send({embeds: [embed]});
  }
}