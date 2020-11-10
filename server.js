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

// including routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/author.routes')(app);
require('./app/routes/book.routes')(app);
require('./app/routes/library.routes')(app);
require('./app/routes/librariesBook.routes')(app);
require('./app/routes/summary.routes')(app);

//brodcast port 8080 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});