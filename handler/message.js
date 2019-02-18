var auth = require("./authority.js")
function handler(msg) {
  var author = msg.author;
  var content = msg.content;


  if (msg.content === 'ping') {
    msg.reply('pong');
  }

  if(msg.content === "hello") {
    if(auth.has(auth.category.ADMIN, msg.author.id)) {
       msg.reply("User has auth");
    } else {
       msg.reply("User does not have auth")
    }
  }
}

module.exports =  handler;
