const Discord = require('discord.js');
const messageHandler = require('../handler/message.js');

const start = () => {

  const client = new Discord.Client();

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('message', messageHandler);

  client.login(process.env.DISCORD_API || 'NDA3NjA1Njc1NjIwMDQwNzI2.D2cXPg.oEaqyr5PzCNg41nLV6-bPoO5S4s');
}

module.exports = start;
