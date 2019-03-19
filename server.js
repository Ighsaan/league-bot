const express = require("express");
const path = require('path');

var gameDao = require("./data/dao/game.js");
var port = process.env.PORT || 5000;

const start = () => {
  var app = express();

  app.use(express.static(path.join(__dirname, 'public')));

  app.get("/api/LeaderBoard", async (req, res) => {
    var ranking = await gameDao.getLeaderBoard();
    var data = {
      ranking: ranking
    }
    res.json(data);
  });

  app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
  });

  app.listen(port, () => {
   console.log("Server running on port " + port);
  });
}

module.exports = start;
