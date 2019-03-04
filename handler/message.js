var data = require("../data/accessor.js");

var handler = async (msg) => {
  var author = msg.author;
  var content = msg.content.split(" ");
  var command = content[0];

  if (command === 'ping') {
    msg.reply('pong');
  }

  if(command === "add") {
    if(content.length == 1){
      await data.addPoint(msg.author.id, msg.author.username);
    } else {
      await data.addPoint(msg.mentions.users.first().id, msg.mentions.users.first().username);
    }
  }
}

module.exports =  handler;
