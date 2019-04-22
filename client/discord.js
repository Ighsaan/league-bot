const Commando = require('discord.js-commando');
const path = require('path');

const client = new Commando.Client({
	commandPrefix: '.'
});

client.registry
    .registerGroups([
        ['add', 'Add commands']
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'commands'));

const start = () => {
  client.login(process.env.DISCORD_API || 'NDA3NjA1Njc1NjIwMDQwNzI2.D2cXPg.oEaqyr5PzCNg41nLV6-bPoO5S4s');
}

module.exports = start;
