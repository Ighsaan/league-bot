var {User} = require("../implementation");

const add = async (displayName, discordId, epicId) => {
  await User.create({
    displayName: displayName,
    discordId: discordId,
    epicId: epicId
  });
}

const getByEpicId = async (epicId) => {
  var result = await User.findOne({ where: {
    epicId: epicId
  }});

  return result;
}

const getByDiscordId = async (discordId) => {
  var result = await User.findOne({ where: {
    discordId: discordId
  }});

  return result;
}

module.exports = {
  add: add,
  getByEpicId: getByEpicId,
  getByDiscordId: getByDiscordId
}
