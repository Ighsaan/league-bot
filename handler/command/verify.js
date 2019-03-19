const { addFriend } = require('../../client/epic_games.js');
const userDao = require('../../data/dao/user.js');

const command = async (author, content) => {
  var response;

  var result = await userDao.getByDiscordId(author.id);
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
