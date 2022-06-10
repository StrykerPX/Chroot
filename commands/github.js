const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
  name: 'github',
  description: 'Return information on repo.',
  async execute(message, args, client) {

    try {
      await axios
      .get( 'https://api.github.com/repos/' + args)
      .then((res) => {

        const embed = new MessageEmbed()
          .setColor('#417DC1')
          .setThumbnail(res.data.owner.avatar_url)
          .setAuthor(res.data?.name, res.data.owner.avatar_url)
          .addFields(
            { name: 'Repository', value: res.data?.name, inline: true },
            { name: 'Owner', value: res.data.owner.login, inline: true },
            { name: 'Language', value: res.data.language, inline: true }
          )
          .addFields(
            { name: 'Issues', value: res.data.open_issues_count.toString(), inline: true },
            { name: 'Forks', value: res.data.forks_count.toString(), inline: true },
            { name: 'License', value: res.data.license !== null ? res.data.license.name  : 'N/A', inline: true }
          )
          .addField('Clone URL', res.data.clone_url, true)
          .setFooter(`Repository created on • ${res.data.created_at}`);
        message.channel.send({embeds: [embed]});
      })
    }catch (e) {
      const embed = new MessageEmbed()
        .setColor('#ff3333')
        .setDescription(':x: An error has occured: Unable to fetch repository')
        message.channel.send({embeds: [embed]})
        console.log('https://api.github.com/repos/' + args)
        console. log(e)
    }
  }
}