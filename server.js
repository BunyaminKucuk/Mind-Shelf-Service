const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Modeller dahil ediliyor
const db = require("./app/models");


//sequelize ile db bağlantısı oluşturuluyor
db.sequelize.sync();

// Main Link
app.get("/", (req, res) => {
  res.json({ message: "Welcome to MindShelf Service." });
});

// Hizmet veren linklerimiz
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// Servisimizin yayın bilgisi
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
