var {User, Game} = require("./implementation");
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

const addPoint = async (discordid, displayName) => {
  var result = await User.find({ where: {discordId: discordid}});
  if(!result) {
    return 'User not registered';
  }
  var userId = result.id;
  await Game.create({ userId: userId });
  return 'User Added';
}

module.exports = {
  getLeaderBoard: getLeaderBoard,
  addPoint: addPoint
};
