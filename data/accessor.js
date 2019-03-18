var {User, Game, Verify} = require("./implementation");
const Sequelize = require('sequelize');

const getLeaderBoard = async () => {
  return await Game.findAll({
    group: [Sequelize.col('User.id')],
    include: [{
      model: User,
      attributes: []
    }],
    attributes: [[Sequelize.col('User.displayName'), 'discordid'], [Sequelize.fn('COUNT', Sequelize.col('Game.userId')), 'points']],
    order: [
      [Sequelize.col('points'), 'DESC']
    ]
  })
}

const addUser = async (displayName, discordId, epicId) => {
  await User.create({
    displayName: displayName,
    discordId: discordId,
    epicId: epicId
  });
}

const getUserByEpicId = async (epicId) => {
  var result = await User.findOne({ where: {
    epicId: epicId
  }});

  return result;
}

const addPoint = async (discordid) => {
  var result = await User.findOne({ where: {discordId: discordid}});
  if(!result) {
    return false;
  }
  var userId = result.id;
  await Game.create({ userId: userId });
  return true;
}

const addVerification = async (discordId, epicId, code) => {
  var result = await Verify.findOne({ where: {
    epicId: epicId
  }});

  if(result) {
    return false;
  }

  await Verify.create({
    discordId: discordId,
    epicId: epicId,
    code: code
  })

  return true;
}

const getVerification = async (epicId) => {
  var result = await Verify.findOne({ where: {
    epicId: epicId
  }});

  return result;
}

const getVerificationByDiscordIdAndCode = async (discordId, code) => {
  var result = await Verify.findOne({ where: {
    discordId: discordId,
    code: code
  }});

  return result;
}

module.exports = {
  getLeaderBoard: getLeaderBoard,
  addPoint: addPoint,
  addUser: addUser,
  addVerification: addVerification,
  getVerification: getVerification,
  getUserByEpicId: getUserByEpicId,
  getVerificationByDiscordIdAndCode: getVerificationByDiscordIdAndCode
};
