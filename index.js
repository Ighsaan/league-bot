const Discord = require('discord.js');
const messageHandler = require('./handler/message.js')
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', messageHandler);

client.login('NTQ2NzAyNjc0NzA4NTI5MTkz.D0sE5g.QM7jYcvtfk7H-CLLBdq8z578TdE');
