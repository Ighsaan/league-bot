const express = require("express");
const path = require('path');

var dao = require("./data/accessor.js");

const start = () => {
  var app = express();


  app.use(express.static(path.join(__dirname, 'front-end-client/build')));

  app.get("/api/LeaderBoard", async (req, res) => {
    var ranking = await dao.getLeaderBoard();
    var data = {
      ranking: ranking
    }
    res.json(data);
  });

  app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/front-end-client/build/index.html'));
  });

  app.listen(5000, () => {
   console.log("Server running on port 3000");
  });
}

module.exports = start;
