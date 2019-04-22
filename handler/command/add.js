var userDao = require("../../data/dao/user");
var gameDao = require("../../data/dao/game");

const command = async (user, type) => {
  var userData = await userDao.getByDiscordId(user.id, user.username);

  if(!userData) {
    return 'User not registered';
  }

  await gameDao.add(userData.id, type);
  return 'Point added';
}

module.exports = command;
