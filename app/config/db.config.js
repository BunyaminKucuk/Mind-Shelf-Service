module.exports = {
  HOST: "193.36.63.106",
  USER: "root",
  PASSWORD: "admin123123",
  DB: "MindShelfDB-test",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
