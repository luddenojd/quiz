const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
let db;

mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err);
      return;
    }
    db = client.db("quiz");
    music = db.collection("music");
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(express.static("public"));
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/api/music", (req, res) => {
  music.find().toArray((err, items) => {
    if (err) throw err;
    res.json({ music: items });
  });
});
