const commando = require('discord.js-commando');
const addLogic = require('../../../handler/command/add');

const gameTypes = require('../../../game/type');

module.exports = class AddCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'add',
			aliases: ['add'],
			group: 'add',
			memberName: 'add',
			description: 'add',
			examples: ['add @TheLightFlame SOLO'],
			argsPromptLimit: 0,
			args: [
				{
					key: 'discordId',
					label: 'Discord Id',
                    prompt: 'Please provide a Discord Username',
                    type: 'user'
				},
				{
					key: 'type',
					label: 'Type',
                    prompt: 'Please provide a Game Type (Eg. Solo, Duo, Squad)',
					type: 'string',
					default: 'SOLO',
					validate: text => {
						if (!gameTypes.includes(text.toUpperCase())) return "Not a valid type";
						return true;
					}    
				}
			]
		});
	}

	async run(msg, { type, discordId }) {
		type = type.toUpperCase();
		var response = await addLogic(discordId, type);
        return msg.reply(response);
	}
};