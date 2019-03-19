const { addFriend } = require('../../client/epic_games.js');
const data = require('../../data/accessor.js');

const command = async (author, content) => {
  var response;

  var result = await data.getUserByDiscordId(author.id);
  if(result) {
    return 'You are already verified';
  }

  if(content.length == 0) {
    return 'Usage: verify <Epic Username>';
  } else {
    return await addFriend(content.join(" "), author.id);
  }
}

module.exports = command;
