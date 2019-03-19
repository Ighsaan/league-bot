const server = require('./server.js');
const discordClient = require('./client/discord.js');
const epicClient = require('./client/epic_games.js');

server();
discordClient();
epicClient.loadClient();
