var userDao = require("../../data/dao/user.js");
var gameDao = require("../../data/dao/game.js");

const command = async (user) => {
  var response;
  if(!user){
    return 'Please supply a user Eg. \'@User\'';
  } else {
    var userData = await userDao.getByDiscordId(user.id);

    if(!result) {
      return 'User not registered';
    }

    await gameDao.add(userData.id);
    return 'Point added';
  }
}

module.exports = command;
