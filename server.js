const express = require("express");
const path = require('path');

var port = process.env.PORT || 5000;

var gameDao = require("./data/dao/game");
var gameTypes = require("./game/type");

const start = () => {
  var app = express();

  app.use(express.static(path.join(__dirname, 'public')));

  app.get("/api/LeaderBoard/:type", async (req, res) => {
    var type = req.params.type;
    console.log(type);
    if(!type || !gameTypes.includes(type.toUpperCase())) {
      return res.json({});
    }

    var ranking = await gameDao.getLeaderBoard(type.toUpperCase());
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
