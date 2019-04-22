var {User} = require("../implementation");

const add = async (displayName, discordId) => {
  await User.create({
    displayName: displayName,
    discordId: discordId
  });
}

const getByDiscordId = async (discordId, displayName) => {
  var result = await User.findOrCreate({ where: {discordId: discordId}, defaults: {displayName: displayName} });
  return result[0];
}

module.exports = {
  add: add,
  getByDiscordId: getByDiscordId
}
