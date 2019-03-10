const Discord = require('discord.js');
const messageHandler = require('./handler/message.js');

const start = () => {

  const client = new Discord.Client();

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('message', messageHandler);

  client.login(process.env.DISCORD_API || 'NTQ2NzAyNjc0NzA4NTI5MTkz.D0sE5g.QM7jYcvtfk7H-CLLBdq8z578TdE');
}

module.exports = start;
