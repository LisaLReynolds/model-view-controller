const express = require("express");
const sequelize = require("./config/connection");
const routes = require("./controllers");
const session = require("express-session");
require("dotenv").config;

const User = require("./models");

const PORT = 3001;

const app = express();

//MIDDLEWARE

const sess = {
  secret: process.env.SESS_SECRET,
  resave: false,
  saveUninitialized: true,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session(sess)); //req.session {}

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`API Server is listening on ${PORT}`);
  });
});
