var data = require("../../data/accessor.js");

const command = async (author, content) => {
  if(content == 0) {
    return 'Supply code';
  }

  var code = content[0];
  var result = await data.getVerificationByDiscordIdAndCode(author.id, code);
  if(result) {
    var verify = result.dataValues;
    await data.addUser(author.username, author.id, verify.epicId);
    await result.destroy();
    return 'User Created';
  } else {
    return 'Invalid Code';
  }
}

module.exports = command;
