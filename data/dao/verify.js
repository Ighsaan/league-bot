var {Verify} = require("../implementation");

const add = async (discordId, epicId, code) => {
  await Verify.create({
    discordId: discordId,
    epicId: epicId,
    code: code
  })
}

const getByEpicId = async (epicId) => {
  var result = await Verify.findOne({ where: {
    epicId: epicId
  }});

  return result;
}

const getByDiscordIdAndCode = async (discordId, code) => {
  var result = await Verify.findOne({ where: {
    discordId: discordId,
    code: code
  }});

  return result;
}

module.exports = {
  add: add,
  getByEpicId: getByEpicId,
  getByDiscordIdAndCode: getByDiscordIdAndCode
}
