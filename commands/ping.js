module.exports = {
  name: 'ping',
  description: 'Ping command',
  execute(message) {
    message.channel.send(`Pong: `).then((msg) => {
      const ping = msg.createdTimestamp - message.createdTimestamp;
      msg.edit("Pong: `" + ping + "ms`");
    });
  }
}