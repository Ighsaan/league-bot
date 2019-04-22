var {Game, User} = require("../implementation");
const Sequelize = require('sequelize');

const add = async (userId, type) => {
  await Game.create({
    userId: userId,
    type: type
  });
}

const getLeaderBoard = async (type) => {
  return await Game.findAll({
    group: [Sequelize.col('User.id')],
    where: {
      type: type
    },
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

module.exports = {
  add: add,
  getLeaderBoard: getLeaderBoard
}
