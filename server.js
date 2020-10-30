const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//including models
const db = require("./app/models");


//db connection with sequelize
db.sequelize.sync();

// Main Link
app.get("/", (req, res) => {
  res.json({ message: "Welcome to MindShelf Service." });
});

// including routs
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/author.routes')(app);

//brodcasting 8080 port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});