var {Game} = require("../implementation");
const Sequelize = require('sequelize');


const add = async (userId) => {
  await Game.create({
    userId: userId
  });
}

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

module.exports = {
  add: add,
  getLeaderBoard: getLeaderBoard
}
