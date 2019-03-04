var {User, Game} = require("./implementation");
const Sequelize = require('Sequelize');

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
  var result = await User.findOrCreate({ where: {discordId: discordid}, defaults: {displayName: displayName} });
  var userId = result[0].id;
  await Game.create({ userId: userId });
}

module.exports = {
  getLeaderBoard: getLeaderBoard,
  addPoint: addPoint
};
