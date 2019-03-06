var data = require("../data/accessor.js");

var handler = async (msg) => {
  var author = msg.author;
  var content = msg.content.split(" ");
  var command = content[0];

  if (command === 'ping') {
    msg.reply('pong');
  }

  if(command === "add") {
    var user;
    if(content.length == 1){
      user = msg.author;
    } else {
      user = msg.mentions.users.first();
    }
    await data.addPoint(user.id, user.username);
    msg.reply('User added');
  }
}

module.exports =  handler;
