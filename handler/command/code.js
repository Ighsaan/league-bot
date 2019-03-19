var userDao = require("../../data/dao/user.js");
var verifyDao = require("../../data/dao/verify.js");

const command = async (author, content) => {
  if(content == 0) {
    return 'Supply code';
  }

  var code = content[0];
  var result = await verifyDao.getByDiscordIdAndCode(author.id, code);
  if(result) {
    var verify = result.dataValues;
    await userDao.add(author.username, author.id, verify.epicId);
    await result.destroy();
    return 'Discord Verified';
  } else {
    return 'Invalid Code';
  }
}

module.exports = command;
