const express = require("express");
const sequelize = requre("./config/sequelize");

const PORT = 3001;

const app = express();

//MIDDLEWARE

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`API Server is listening on ${PORT}`);
  });
});
