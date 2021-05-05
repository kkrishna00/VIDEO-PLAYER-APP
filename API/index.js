require("./mongodb");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

var postMessageRoutes = require("./controllers/postMessageController");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.listen(80, () => console.log("Server started at : 80"));
app.use("/postMessages", postMessageRoutes);
