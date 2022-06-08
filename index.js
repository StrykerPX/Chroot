require('dotenv').config();

const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client({ 
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_PRESENCES
  ]
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

commandFiles.map(file => {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
})

const prefix = process.env.PREFIX;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
		client.user.setPresence({activities: [{name: 'Fortnite | $help', type: 'PLAYING'}], status: 'online' });
  });

  client.on('messageCreate', (message) => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
		const command = args.shift().toLowerCase();

		if(!client.commands.has(command)) return; 

		try {
			client.commands.get(command).execute(message, args, client);
		} catch(error) {
			console.error(error);
		}
  });

client.login(process.env.TOKEN);

