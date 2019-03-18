const { addFriend } = require('../../client/epic_games.js');

const command = async (author, content) => {
  var response;
  if(content.length == 0) {
    return 'Please supply a Epic username';
  } else {
    return await addFriend(content.join(" "), author.id);
  }
}

module.exports = command;
